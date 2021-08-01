import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card } from 'react-bootstrap';
import { useFetch } from './useFetch';
import { Link,useLocation } from "react-router-dom";

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function Employee() {
    let query = useQuery();
    let empId = query.get('id')
    const {loading, data, error} = useFetch('http://localhost/simple-hr/back/endpoint.php?action=employee&id='+empId)
    if(loading) return <h1>loading ...</h1>;
    if(error) return (<pre>{JSON.stringify(error, 2, null)}</pre>)
    
    return (
        <Container>
             <Card
                bg='Light'
                text='dark'
                style={{ width: '30rem' }}
                className="mb-2"
            >
                  <Card.Header><h3>Employee details</h3></Card.Header>
                    <Card.Body>
                    <Card.Title>{data.name} </Card.Title>
                    <Card.Text>
                    <Row>
                        <span><b>Department:</b> {data.dept}</span>
                    </Row>
                    <Row>
                        <span><b>Address:</b> {data.address}</span>
                    </Row>
                    <Row>
                    <span><b>Email:</b> {data.email}</span>
                    </Row>
                    <Row>
                        <span><b>Salary:</b> {data.salary}K</span>
                    </Row>
                    <Row align='right'>
                        <span> <Link to={'/dpto?id='+data.dpt_id}>back to department</Link></span>
                    </Row>
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>
      )
}

export default Employee;