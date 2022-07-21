const API_KEY = process.env.REACT_APP_API_KEY; //변수에 이렇게 입력해주면 환경변수가 import 된다.

export const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`

export function searchUrl(input){
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q${input}&regionCode=kr&type=video&key= ${API_KEY}`
}