import React from'react'; 
import  Searchbar from'./Searchbar';
import youtube from '../api/Youtube';
import Videolist from'./Videolist';
import Videodetail from'./Videodetail';
    
      class App extends React.Component{
    state={videos: [], selectedvideo:null} ;

  componentDidMount(){
      this.onTermsubmit('bikes');
  }
    
   onTermsubmit=async (term)=>{
          
  const response= await youtube.get('/search',{

  params:{
  	 q:term
  }

   });

        this.setState({
          videos:response.data.items,
          selectedvideo:response.data.items[0]


        });

   };

     onvideoselect=(video)=>{
      this.setState({selectedvideo:video});

     }

   render(){
 return (

  <div className="ui container">
  <Searchbar formsubmit={this.onTermsubmit}/>
   <div className="ui grid">
   <div className="ui row">
   <div className="eleven wide column">
  <Videodetail vids={this.state.selectedvideo}/>
  </div>
  <div className="five wide column">
    <Videolist videoselect={this.onvideoselect} videos={this.state.videos}/>
    </div>
    </div>
    </div>
  </div>

       );

    }  

         }
     export default App   
