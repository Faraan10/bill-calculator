import React from "react";
import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <p>Friend's name</p>
      <input type="text" />
      <p>Image URL</p> <input type="text" />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
