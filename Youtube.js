
  import axios from 'axios';
const KEY='AIzaSyC786NCMcsV_PFvkpiDTQlHnDBDTdJZSro';

        export default axios.create({
     
       baseURL: 'https://www.googleapis.com/youtube/v3',
       params:{
       	part: 'snippet',
         type: 'video',
       	maxResults: 5,
       	key:KEY


       }





        });

