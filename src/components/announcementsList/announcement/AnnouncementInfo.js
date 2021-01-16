import React, { Component } from "react";

class AnnouncementInfo extends Component {

handleClick = () => {
  this.props.toggle();
  };

render() {
  const {announcement} = this.props;
  const {announcementList} = this.props;
  //Date
  let date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth()+1;
  let year = date.getFullYear();
  if(dd<10){
      dd=`0${dd}`;
  } 
  if(mm<10){
      mm=`0${mm}`;
  }
  const similar = announcementList.map((el,index)=>{
      return(
        <div>
          {index<3?
          <li key = {index}>
            <h2>{el.title}</h2>
            {el.description}
          </li> : null
          }
        </div>
        )
  });
  return (
   <div>
     <div>
      <h2>{announcement[0].title}</h2>
      <section>{announcement[0].description}</section>
      <h3>Date added: {dd}/{mm}/{year}</h3>
    </div>
      <button onClick={this.handleClick}>Close</button>
      <h3>SIMILAR</h3>
      {similar}
   </div>
  );
 }
}
export default AnnouncementInfo;