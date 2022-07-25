import React from 'react';
import './index.css';
import { useEffect } from 'react';
import { channelUrl } from '../../lib/api';
import { getChannelInfo } from '../../store/video/videoSlice';
import { useSelector, useDispatch } from 'react-redux';

const VideoView  = ({id, channelId}) => {
    const dispatch = useDispatch();
    const {channel} = useSelector((state)=> state.video);
    useEffect(()=>{
        const channelIdInfo = channelUrl(channelId) 
        dispatch(getChannelInfo(channelIdInfo)) 
    },[channelId, dispatch])
    return (
        <div className='playVideoBox'>
            <div className='iframeBox'>
                <iframe 
                src={`https://www.youtube-nocookie.com/embed/${id}`} // -nocookie를 붙여줘야 sameSite error가 나지 않음 
                title='youtube video'  
                allowFullScreen>  {/*타이틀을 적어줘야 에러가 나지 않음, 스타일 속성 부분은 지워줘야함*/}
                </iframe>
            </div>
                {
                    channel &&( 
                        <div className='descriptionContainer'>
                            <div className='channel-img'>
                                <img src={channel[0].snippet.thumbnails.default.url} alt="" />
                            </div>
                            <div className='channel-data'>
                                <h3 className='channel-title'>
                                    {channel[0].snippet.title}
                                </h3>
                                <p className='channel-des'>
                                    {channel[0].snippet.description}
                                </p>
                            </div>
                        </div>
                    )
                }
        </div>
    );
};

export default VideoView;