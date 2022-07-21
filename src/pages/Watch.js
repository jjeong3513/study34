import React from 'react';
import { useSearchParams } from 'react-router-dom';
import VideoView from './../components/VideoView';
import { useSelector } from 'react-redux';
import VideoItem from '../components/VideoItem';

const Watch = () => {
    const [query,SetQuery] = useSearchParams();
    const id = query.get('id')
    const videoData = useSelector((state)=> state.video.data);
    const lte10VideoData = videoData.filter((item,idx)=>idx<10)

    return (
        <section className='list content'>
            <VideoView id={id} />
            <u className='watchList'>
                {
                    lte10VideoData.map((item, idx)=>(
                        <VideoItem key={item.snippet.thumbnails.default.url}
                        item={item.snippet}
                        value={item}
                        />
                    ))
                }
            </u>
        </section>
    );
};

export default Watch;