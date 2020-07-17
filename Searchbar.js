import React from 'react';
 
    class Searchbar extends React.Component
    {  
    	 state={term:""};

    	 onformsubmit=(e)=>{
            
          e.preventDefault();
            this.props.formsubmit(this.state.term);
    	 }

         render(){
   return(
           <div className="searchbar ui segment">
           <form className="ui form" onSubmit={this.onformsubmit}>
            <div className= "field">
            <label>Image search</label>
            <input type="text" value={this.state.term} onChange={e=> this.setState({term:e.target.value})}/>
            </div>
           </form>
           </div>

 
         );
     }


    }
     export default Searchbar