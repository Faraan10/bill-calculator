import React from "react";

const List = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{}</p>
    </li>
  );
};

export default List;
