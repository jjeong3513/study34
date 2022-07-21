import React from 'react';
import './index.css';
import VideoItem from '../VideoItem';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect ,useState } from 'react';
import { getVideoList } from './../../store/video/videoSlice';
import { videoUrl } from './../../lib/api'
const VideoList = ({display}) => {
    const dispatch = useDispatch();
    const [data,setData]=useState(null);
    const videoData = useSelector((state) =>state.video.data)
    useEffect(() => {
        dispatch(getVideoList(videoUrl))
        setData(videoData)
        console.log(data)
    },[])
    return (
        <ul className={display === 'grid' ? 'videoList VideoGrid' : 'videoList VideoRowList'}> {/*grid일 때는 앞부분, list일때는 뒷부분 */}
            {
                data?data.map((item , idx) => (
                    <VideoItem key={item.snippet.thumbnails.default.url} item={item.snippet} value={item} />           
                )):console.log('값이 null')
            } {/*데이터가 있을 때 맵을 돌리는 식*/}
           
        </ul>
    );
};

export default VideoList;