import { React, useState } from "react"
import { Button, Form } from "react-bootstrap"
import axios from "axios"

const AdminFormEU = () => {
    const [a2, setA2] = useState({})
    const [country, setCountry] = useState({})
    const [emissions, setEmissions] = useState({})
    
    // The
    async function addCountry(countryName, countryA2, countryEmissions){
        await axios.post('http://localhost:5000/adminEU', {data: {country : countryName, a2: countryA2, emissions: countryEmissions}})
        window.location.reload()
    }

    return(
        <div>
            <h1>Add Country</h1>
            <Form>
                <Form.Group className="mb-3" controlid="formEditCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" controlid="formCountry" onChange={e => setCountry(e.target.value)}
                    placeholder="Name"
                    />
                    <Form.Label>Country Alpha-2 Code</Form.Label>
                    <Form.Control type="text" controlid="formA2" onChange={e => setA2(e.target.value)}
                    placeholder="Alpha-2"
                    />
                    <Form.Label>Emissions in Metric Tonnes</Form.Label>
                    <Form.Control type="text" controlid="formEmissions" onChange={e => setEmissions(e.target.value)}
                    placeholder="0"
                    />
                </Form.Group> 
            </Form>
            <Button variant="primary" size="md" onClick={()=>{addCountry(country, a2, emissions)}}>
                Submit
            </Button>
        </div>
    )
}

export default AdminFormEU