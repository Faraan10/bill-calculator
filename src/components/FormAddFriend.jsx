import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ addFriendData }) => {
  const [data, setData] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });

  const { name, image } = data;

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) {
      return;
    }

    const newData = {
      id: crypto.randomUUID(),
      name: name,
      image: image,
      balance: 0,
    };

    addFriendData(newData);

    setData({
      id: "",
      name: "",
      image: "",
      balance: 0,
    });
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <p>Friend's name</p>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <p>Image URL</p>
      <input type="text" name="image" value={image} onChange={handleChange} />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
