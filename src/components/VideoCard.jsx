
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import 'react-toastify/dist/ReactToastify.css';

function VideoCard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    const today = new Date();
    const timeStamp =  new Intl.DateTimeFormat('en-US', {
      year :'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today);
    const reqBody = {
      url : displayVideo.youtubeLink,
      caption : displayVideo.caption,
      timeStamp : timeStamp
    }
    await addToHistory(reqBody)
    setShow(true);
  }
  const deleteVideoItem = async()=>{
    const response = await deleteVideo(displayVideo.id)
    console.log("===Response of delete===");
    console.log(response);
    if(response.status === 200){
      console.log("Successfully deleted");
      setDeleteVideoStatus(true)
    }
    else{
      console.log('Something went Wrong')
      
    }
  }
  const dragStarted = (e,id)=>{
    console.log("Dragging");
    e.dataTransfer.setData("videoID",id)
    
    
    
  }
  return (
    <>
     <Card style={{ width: '18rem' }} data-bs-theme='dark' draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
      <Card.Img variant="top" src={`${displayVideo.imageUrl}`} height='250px' onClick={handleShow}/>
      <Card.Body className='pt-4 pb-4'>
        <div className='d-flex justify-content-between'>
        <Card.Title>{displayVideo.caption}</Card.Title>
        <Button variant="danger" onClick={deleteVideoItem}><i className="fa-solid fa-trash"></i></Button>
        </div>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      data-bs-theme ='dark'>
        <Modal.Header closeButton>
          <Modal.Title className='text-light'>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={displayVideo.youtubeLink} ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <ToastContainer /> */}
    </>
  )
}

export default VideoCard