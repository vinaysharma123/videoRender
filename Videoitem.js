import React from 'react';
 import   './Viditem.css';

  const Videoitem=(props)=>{
  	 return(
    <div onClick={()=> props.videoselect(props.video) }className="video-img item">
    <img alt={props.video.snippet.title} className="ui image" src={props.video.snippet.thumbnails.medium.url} />
  <div className="content">
   <div className="header">
    {props.video.snippet.title};
   </div>

   </div>
   
    </div>

  	 	);
  }
  export default Videoitem