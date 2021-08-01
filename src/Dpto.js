import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { useFetch } from './useFetch';
import { Link,useLocation } from "react-router-dom";
import { BaseContext } from './App';
import { useContext } from "react";

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function Dpto() {
    let query = useQuery();
    let dptoId = query.get('id')
    const uri = useContext(BaseContext);
    const {loading, data, error} = useFetch(uri.baseUrl+'endpoint.php?action=list&dpt='+dptoId)
    if(loading) return <h1>loading ...</h1>;
    if(error) return (<pre>{JSON.stringify(error, 2, null)}</pre>)
    
    return (
        <Container>
          <div> 
          <h3>Department: {data[0].department}</h3>
          </div>
          <Row>
            <Col ><b>Name</b></Col>
            <Col ><b>Salary</b></Col>
          </Row>
             {data.map(emp=>(
                <Row key={emp.id}>
                  <Col>
                    <Link to={'/employee?id='+emp.id}>{emp.name}</Link>
                  </Col>
                  <Col>{emp.salary}K</Col>
                </Row>
              ))}
        </Container>
      )
}

export default Dpto;