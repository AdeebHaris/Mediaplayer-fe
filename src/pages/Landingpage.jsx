import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Landingpage() {
  return (
    <>
    <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
      <Row>
        <Col>
          <h3 className='textstyle'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='textstyle' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus ex fuga ullam! Modi nam, sint, voluptatum exercitationem ipsa blanditiis adipisci quos eaque aperiam expedita facere tempore consequuntur, esse odio?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias reiciendis amet nihil quidem recusandae nam eaque eum consequatur quasi ratione dolorum suscipit nemo perspiciatis, necessitatibus sit, debitis id atque sint!
          </p>
          <Link to='/home'>
          <button className='btn btn-warning'>Get Started <i className="fa-solid fa-arrow-right ms-2"></i></button>
          </Link>
        </Col>
        <Col>
        <img className='ms-5' height="400px" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
      </Row>
    </Container>
    <div className='container mt-5 mb-5'>
      <h3 className='textstyle mb-5'>Features</h3>
      <div className='cards d-flex align-items-center justify-content-evenly'>
      <Card className='border border-dark shadow rounded-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height={"250px"}/>
      <Card.Body className='bg-dark'>
        <Card.Title className='textstyle'>Card Title</Card.Title>
        <Card.Text className='textstyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bg-warning text-dark border border-black' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='border border-dark shadow rounded-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" height={"250px"}/>
      <Card.Body className='bg-dark'>
        <Card.Title className='textstyle'>Card Title</Card.Title>
        <Card.Text className='textstyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bg-warning text-dark border border-black' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='border border-dark shadow rounded-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height={"250px"}/>
      <Card.Body className='bg-dark'>
        <Card.Title className='textstyle'>Card Title</Card.Title>
        <Card.Text className='textstyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bg-warning text-dark border border-black' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
      <Row>
        <Col>
        <h3 className='textstyle mb-4'>Simple and Powerful</h3>
        <p className='textstyle'><span className='fs-5 fw-bolder'>Play Everything :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore reiciendis quam id neque aperiam, saepe officia voluptas voluptates ipsum iste fugiat qui dignissimos. Deleniti laborum veniam magnam quibusdam, animi atque. </p>
        <p className='textstyle'><span className='fs-5 fw-bolder'>Play Everything :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore reiciendis quam id neque aperiam, saepe officia voluptas voluptates ipsum iste fugiat qui dignissimos. Deleniti laborum veniam magnam quibusdam, animi atque. </p>
        <p className='textstyle'><span className='fs-5 fw-bolder'>Play Everything :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore reiciendis quam id neque aperiam, saepe officia voluptas voluptates ipsum iste fugiat qui dignissimos. Deleniti laborum veniam magnam quibusdam, animi atque. </p>

        </Col>
        <Col>
        <iframe width="600" height="380" src="https://www.youtube.com/embed/nYEoxne_20Y" title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Landingpage