import React from "react";


export default function Card(props) {

  return (
    <div className="card--div">
      <img className="location--img" src={props.imageUrl}></img>

      <div className="card--info">
        <div className="card--location">
            <img src="Fill 219.png"></img>
            <h1>{props.location}</h1>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="title--div">
          <h1>{props.title}</h1>
          <p className="date">{props.startDate} - {props.endDate}</p>
          <p className="desc">{props.description}</p>
        </div>
        <div>
          
        </div>
      </div>
      

    </div>
  )


}