import axios from 'axios';
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'

export const getVideoList = createAsyncThunk(
   "GET_VIDEO_LIST",
   async(url)=>{ //액션을 생성할 때 payload 값을 받음
       try{
            const res = await axios.get(url)
            return res.data.items
       }catch(err){
           console.log(err)
       }
   }
)


const videoSlice =  createSlice({
    name:'video',
    initialState:{
        data:[],
        listLayout :'grid',
    },
    reducers:{
        videoListLayout: (state,action) =>{
            state.listLayout = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getVideoList.fulfilled,(state,action)=>{
            console.log('액션페이로드',action.payload)
            state.data = action.payload;
        })
    }
})

export const {videoListLayout} = videoSlice.actions
export default videoSlice.reducer