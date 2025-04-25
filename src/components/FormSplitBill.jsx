import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const [data, setData] = useState({
    bill: "",
    myAmount: "",
  });

  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const { bill, myAmount } = data;

  const paidByFriend = bill ? bill - myAmount : "";

  const handleChange = (e) => {
    setData((prevData) => {
      const updatedValue =
        e.target.name === "bill" || e.target.name === "myAmount"
          ? Number(e.target.value)
          : e.target.value;

      if (e.target.name === "myAmount" && updatedValue > prevData.bill) {
        return {
          ...prevData,
          myAmount: prevData.bill, // stopping ay bill value
        };
      }
      return {
        ...prevData,
        [e.target.name]: updatedValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !myAmount) {
      return;
    }
    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -myAmount);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" name="bill" value={bill} onChange={handleChange} />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        name="myAmount"
        value={myAmount}
        onChange={handleChange}
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💵 Who is paying the bill</label>
      <select
        name="whoIsPaying"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
