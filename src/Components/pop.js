import React from 'react';


const Pop = (props) => {
    
   const renderlist = props.list.map((ele, ind) =>{
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      props.set_selected(ele);
      props.set_isunl(false);
    }
         return(
          <div>
          <li key={ind} value={ele} onClick={handleClick}>{ele}</li>
       </div>

         ) 
   });
  
   
      return (
        <div className="popup1">
          <div className="popup2">
            <h1 style={{ alignContent: "center"}}>Select {props.type}</h1>
            <ul>
              {renderlist}
            </ul>
           
          </div>
        </div>
      );
    
  };
  



export default Pop;