
import { useEffect, useState } from 'react';
import { getAllVideos } from '../services/allApi'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap';

function View({uploadVideoStatus}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)
  const getVideos = async()=>{
    const response = await getAllVideos()
    console.log('===all videos===' );
    console.log(response);
    const {data} = response;
    setAllVideos(data)
    
    
    
  }
  useEffect(()=>{
    getVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus]) // when the page initially loads or whenever the value of uploadVideoStatus changes getVideos() is called 
  return (
    <>
    <Row>
      {
        allVideos.length>0?
        allVideos?.map((videos)=>(
          <Col sm ={8} lg={3} md={6} className='m-5' key={videos.id}>
            <VideoCard displayVideo = {videos} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>
        )):
        <p style={{fontSize:''}}>Nothing to Display</p>
      }
    
    </Row>
    </>
  )
}

export default View