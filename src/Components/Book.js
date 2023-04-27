import React from "react";

function Book(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={props.img}
          className="card-img"
          alt=""
        />
        <p className="rating">{props.rating}</p>
      </div>

      
        <h2>{props.title}</h2>
        <p className="author">Author Name:{props.author} </p>

    </div>
  );
}

export default Book;
