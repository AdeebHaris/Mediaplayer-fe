import  { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);
    // state to store all form field values
    const  [videoDetails,setVideoDetails] = useState({
      caption:"",
      imageUrl:"",
      youtubeLink:""
    })
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addVideoDetails = async()=>{
      const {caption,imageUrl,youtubeLink} = videoDetails;
      if(!caption || !imageUrl || !youtubeLink){
        toast.warning("Please fill the form completely")
      }
      // console.log("===video Details===");
      // console.log(videoDetails);
      else{
        console.log("final data");
        console.log(videoDetails);
        const response = await uploadVideo(videoDetails)
        console.log(response);
      
  if(response.status === 201){
    setUploadVideoStatus(response.data)
    toast.success(`${response.data.caption} successfully inserted`)
    handleClose();
    setVideoDetails({
      caption: "",
      imageUrl: "",
      youtubeLink: ""
    });
  }
   else{
    toast.error("Something went wrong")
    
   }     
        
      }
       
       
      
    }
    const getEmbededLink =(data)=>{
      console.log('==inside getEmbeded Link');
      const link =`https://www.youtube.com/embed/${data.slice(-11)}`
      console.log(link);
      setVideoDetails({...videoDetails, youtubeLink:link})
      
      
    }
  return (
    <>
    <div className='d-flex align-items-center'>
        <h5 className='textstyle'>Upload a New Video</h5>
        <button className='btn' onClick={handleShow}><i className="fa-solid fa-cloud-arrow-up fs-5" style={{color:"white"}}></i></button>
    </div>
      <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton >
          <Modal.Title><i className="fa-solid fa-film text-warning me-3"></i><span className='textstyle'>Upload Video</span></Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <p className='textstyle fw-bolder' >Please fill the form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=> setVideoDetails({...videoDetails,caption : e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Thumbnail URL" onChange={(e)=> setVideoDetails({...videoDetails,imageUrl : e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Youtube Link " onChange={(e)=> getEmbededLink(e.target.value)}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={addVideoDetails}>
            UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default Add