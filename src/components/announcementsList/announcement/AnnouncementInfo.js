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
          {(index<3 && el.title!==undefined && JSON.stringify(el)!==JSON.stringify(announcement[0]))?
          <li key = {index} className="card" style={{marginTop: "1%"}}>
            <h2 className="card-header">{el.title}</h2>
            <div className="card-body">
              <section className="card-text">{el.description}</section>
            </div>
          </li> : null
          }
        </div>
        )
  });
  return (
   <div>
      <div className="card">
        <h2 className="card-header">{announcement[0].title}</h2>
        <div className="card-body">
          <section className="card-text">{announcement[0].description}</section>
          <h6 className="card-subtitle text-muted" style={{marginTop:"1%"}}>Date added: {dd}/{mm}/{year}</h6>
        </div>
      </div>
      <button style={{marginTop:"1%", marginBottom: "1%", width: "100%", padding: "1%"}} className="btn btn-warning" onClick={this.handleClick}>Close</button>
      <h3 className="alert alert-primary">Similar announcement</h3>
      {similar}
   </div>
  );
 }
}
export default AnnouncementInfo;