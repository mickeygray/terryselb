import React, { Fragment, useState, useEffect } from "react";
import Iframe from "react-iframe";

const NewsItem = ({ newa: { URL, state, type, date, quote } }) => {
 const [frame, setFrame] = useState(false);

 const onClick = e => {
  if (frame === false) {
   setFrame(true);
  } else {
   setFrame(false);
  }
 };

 return (
  <Fragment>
   <div className='card bg-light'>
    <h3>
     {state} : {date}
    </h3>
    <p style={{ width: "20rem" }}> {quote}</p>

    <button onClick={onClick}>
     {type === "video" ? "Watch More" : "Read More"}
    </button>
    {frame ? (
     <Iframe
      url={URL}
      width='450px'
      height='450px'
      id='myId'
      className='myClassname'
      display='initial'
      position='relative'
     />
    ) : (
     ""
    )}
   </div>
  </Fragment>
 );
};

export default NewsItem;
