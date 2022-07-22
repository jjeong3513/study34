import React from 'react';
import SideMenu from '../components/SideMenu';
import VideoList from '../components/VideoList/index';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { videoListLayout } from '../store/video/videoSlice';

const Home = () => {
    const dispatch = useDispatch();
    const {listLayout} = useSelector((state)=> state.video); 
    useEffect(()=>{
        dispatch(videoListLayout('grid'))
    },[])
    return (
        <>
         <SideMenu />
         <section className='main-content'>
         {listLayout && <VideoList display={listLayout} />}
         </section>
        </>
    );
};

export default Home;