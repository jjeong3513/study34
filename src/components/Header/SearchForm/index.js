import React from 'react';
import './index.css';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoList, videoListLayout } from '../../../store/video/videoSlice';
import { useNavigate } from 'react-router-dom';
import { searchUrl } from '../../../lib/api';


const SearchForm = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(); //input 안에 있는 것들을 참조
    const navigate = useNavigate();
    const onSearch = (input)=>{
    const url = searchUrl(input)
        dispatch(getVideoList(url))
        dispatch(videoListLayout('list'))
        navigate('/search')
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        const input = inputRef.current.value; //current는 inputRef를 참조하고 있음
        input && onSearch(input); //input 값이 있을 때만 오른쪽 값이 return됨
        inputRef.current.value = ''; //검색창에 입력값이 없으면 빈 값
    }

    return (
     <form className='search' onSubmit={onSubmit}>
        <input
            placeholder='검색'
            type="text"
            className='searchInput'
            ref={inputRef} //참조하고 있는 값
        />
        <button className='searchBtn'>
            <img src="/images/search.png" alt="search icon" className='searchIcon' />
        </button>
    </form>
    );
};

export default SearchForm;