import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="footer d-flex align-items-center justify-content-evenly">
        <div style={{width:"400px"}}>
          <h5 className='textstyle'><i className="fa-solid fa-video text-warning me-3"></i>Media Player</h5>
          <p className='textstyle' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quae! Consectetur dolorum dolore placeat iusto nobis! Fuga, tenetur, autem dicta necessitatibus voluptatibus ipsum sit, quo et excepturi nobis nam aliquam!</p>
        </div>
        <div className="d-flex flex-column ms-5">
          <h4 className='textstyle'>Links</h4>
          <Link to='/' style={{textDecoration:'none',color:"white"}}>
            Landing Page
          </Link>
          <Link to='/home' style={{textDecoration:'none',color:"white"}}>
            Home
          </Link>
          <Link to='/watch' style={{textDecoration:'none',color:"white"}}>
            Watch History
          </Link>
        </div>
        <div className="d-flex flex-column ms-5">
          <h4 className='textstyle'>Guides</h4>
          <Link to='https://react.dev/' target='/blank' style={{textDecoration:'none',color:"white"}}>
            React
          </Link>
          <Link to='https://react-bootstrap.github.io/' target='/blank' style={{textDecoration:'none',color:"white"}}>
            React Bootstrap
          </Link>
          <Link to='https://www.npmjs.com/package/json-server' target='/blank' style={{textDecoration:'none',color:"white"}}>
            Json Server 
          </Link>
        </div>
        <div className='ms-5'>
          <h4 className='textstyle'>Contact Us</h4>
          <div className='d-flex '>
            <input type="text" name='' id='' className='form-control' placeholder='Enter your email id' />
            <button className='btn btn-warning  ms-2'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-4'>
            <Link style={{textDecoration:'none',color:"white"}}>
            <i className="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:"white"}}>
            <i className="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:"white"}}>
            <i className="fa-brands fa-reddit fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:"white"}}>
            <i className="fa-brands fa-twitter fa-2x"></i>
            </Link>
            </div>
           
          
        </div>
      </div>
    </div>
  )
}
