import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from '../components/SideMenu';
import { useSelector } from 'react-redux';

const Search = () => {
  const display = useSelector((state)=>state.video.listLayout);
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
            <VideoList display={display} />
          </section>
        </>
    );
};

export default Search;