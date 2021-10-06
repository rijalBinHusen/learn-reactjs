import React from "react";
import "../App.css";
function ReviewItems() {
  // Siapkan data
  const users = [
    { id: 1, name: "Rijal bin Husen", review: "Lorem ipsum dolor sit amet" },
    { id: 2, name: "Husen", review: "Lorem ipsum dolor sit amet" },
    { id: 3, name: "Rijal", review: "Lorem ipsum dolor sit amet" },
    { id: 4, name: "Abu rijal", review: "Lorem ipsum dolor sit amet" },
  ];

  const listReview = users.map((val) => (
    <div className="Item">
      <img src="logo192.png" className="User" alt="user" width="30" />
      <h1>{val.name}</h1>
      <p>{val.review}</p>
      <hr />
    </div>
  ));

  return listReview;
}

export default ReviewItems;
