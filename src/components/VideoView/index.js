import React from 'react';
import './index.css';
const VideoView  = ({id}) => {
    return (
        <div className='playVideoBox'>
            <div className='iframeBox'>
                <iframe 
                src={`https://www.youtube-nocookie.com/embed/${id}`} // -nocookie를 붙여줘야 sameSite error가 나지 않음 
                title='youtube video'
                allowFullScreen>
                </iframe> {/*타이틀을 적어줘야 에러가 나지 않음, 스타일 속성 부분은 지워줘야함*/}
            </div>
            <div className='descriptionContainer'>

            </div>
        </div>
    );
};

export default VideoView;