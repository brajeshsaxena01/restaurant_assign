import React from "react";

function Restaurants(props) {
  return (
    <>
      <div className="main_div">
        <div className="resturant">
          <div className="food_image">
            <img src={props.img} alt="loading.." />
          </div>
          <div className="details">
            <h2>{props.name}</h2>
            <p className="category">{props.category}</p>
            <p className="cost">Cost ₹{props.cost} for one</p>
            <p className="payment">
              Accepts {props.payment_method} payments only
            </p>
          </div>
        </div>

        <div className="review">
          <h3>{props.rating}</h3>
          <span>{props.votes} votes</span>
          <br />
          <span>{props.review} reviews</span>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
