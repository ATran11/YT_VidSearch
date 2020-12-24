import axios from 'axios';

const KEY = 'AIzaSyDNagZB5C2G1E1pYh0_NmwOTHH-tSebTGk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});


