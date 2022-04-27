import axios from 'axios';

const KEY = 'AIzaSyCLlS4vDzYhPCBV14dNodxvptSCxi6GXgA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    type: 'video',
    key: KEY
  }
})