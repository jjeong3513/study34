import React from 'react';
import './index.css';
import VideoItem from '../VideoItem';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect ,useState } from 'react';
import { getVideoList } from './../../store/video/videoSlice';
import { videoUrl } from './../../lib/api';
import MoonLoader from "react-spinners/MoonLoader";


const VideoList = ({display}) => {
    const dispatch = useDispatch();
    const [value,setValue]=useState(null);
    const videoData = useSelector((state) =>state.video.data)
    const {data, loading}=useSelector((state)=>state.video)
    useEffect(() => {
        dispatch(getVideoList(videoUrl)) //컴포넌트가 실행이 될 때 값을 불러와야 되는데 값이 들어오는 시간이 딜레이되어 데이터를 불러오지 못하는 경우가 있음
        setValue(videoData)
        console.log(data)
    },[])
    if(loading){
        return <MoonLoader color="#e34141" loading={loading} cssOverride={{ position: `absolute`, top:`50%`, left:`50%`, transform : `translate(-50%, -50%)` }} size={150} speedMultiplier={2} />
    }
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


