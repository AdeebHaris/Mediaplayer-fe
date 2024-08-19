
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
       <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" style={{color:"white"}}>
            <Link to='/' style={{textDecoration:'none',color:'white'}}>
            <i className="fa-solid fa-video text-warning me-3"></i>
            MEDIA PLAYER
            </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
