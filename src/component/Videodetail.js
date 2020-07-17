import React from 'react';

const Videodetail=({vids})=>{

  if(!vids){// initially vids is null and it show error .
  	return (
   <div> Loading...</div>

  		);
  }
    const videosrc=`https://www.youtube.com/embed/${vids.id.videoId}`;
  return (

  <div>
  <div className="ui embed">
  <iframe title="video player" src={videosrc}/>
  </div>
<div className="ui segment">
<h4 className="ui header"> {vids.snippet.title}</h4>
<p> {vids.snippet.description} </p>
</div>
  </div>




  );
}
 export default Videodetail