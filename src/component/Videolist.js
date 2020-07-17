import React from 'react';
import Videoitem from './Videoitem';
 
  const Vediolist=(props)=>{
   const renderlist= props.videos.map((videos)=>{
     return  <Videoitem key={videos.id.videoId} videoselect={props.videoselect} video={videos}/>;

    });
   return(
 <div className="ui relaxed divided list">{renderlist}</div>

   	);
  }
   export default Vediolist