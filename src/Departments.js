
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container,Table } from 'react-bootstrap';
import { useFetch } from './useFetch';
import { Link } from "react-router-dom";
import { BaseContext } from './App';
import { useContext } from "react";

function Departments() {
   const uri = useContext(BaseContext);
   
    const {loading, data, error} = useFetch(uri.baseUrl+'endpoint.php?action=departments')
    if(loading) return <h1>loading ...</h1>;
    if(error) return (<pre>{JSON.stringify(error, 2, null)}</pre>)
    return (
      <Container>
        <div> 
          <h3>Company name</h3>
        </div>
        <Table striped bordered hover>
        <thead>
            <tr>
          <th ><b>Department</b></th>
          <th ><b>Employees</b></th>
          <th ><b>Max. Salary</b></th>
          </tr>
        </thead>
        <tbody>
           {data.map(dpt=>(
              <tr key={dpt.id}>
                  <td>
                   {(dpt.cant <= 0)
                    ?dpt.name:
                    <Link to={'/dpto?id='+dpt.id}>{dpt.name}</Link>
                    }
                    </td>
                <td>{dpt.cant}</td>
                <td>{dpt.maxsalary}</td>
              </tr>
            ))}
            </tbody>
            </Table>
      </Container>
    )
}

export default Departments;