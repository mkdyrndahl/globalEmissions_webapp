import axios from "axios";
import { React} from "react";
import { Button } from "react-bootstrap";

const AdminCells = (props) => {
    async function deleteRequest(name){
        await axios.delete('http://localhost:5000/adminEU', {data: {country: name}})
        await axios.delete('http://localhost:5000/adminNA', {data: {country: name}})
        alert(`Deleting ${props.country} from the Database`)
        setTimeout(window.location.reload(), 1500)
    }    

  return (
    <tr>
      <td key={props.country}>{props.country}</td>
      <td key={props.a2}>{props.a2}</td>
      <td key={props.emissions}>{props.emissions}</td>
      <td key="btns">
        <Button variant="success" size="sm" > Edit </Button>
        <Button variant="danger" size="sm" onClick={()=>{
            deleteRequest(props.country)
        }}> Delete </Button>
      </td>
    </tr>
  );
};

export default AdminCells;
