import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'

function App(){
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">songShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">shop</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/img/shoes1.jpg'} width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/img/shoes2.jpg'}  width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/img/shoes3.jpg'} width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </div>
        </div>
      </div> 

    </div>
  )
}

export default App;
