import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CardPayment = () => {

  const url = "http://localhost:8080/cardpayment";
  const [data, setData] = useState({
    cardNum: "",
    expiryDate: "",
    enterCvv: "",
    nameOnCard: "",
    tnc: "",
  });

  const cart_total = JSON.parse(localStorage.getItem("cart_total"));

  const handleInduptChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        cardNum: data.cardNum,
        expiryDate: data.expiryDate,
        enterCvv: data.enterCvv,
        nameOnCard: parseInt(data.nameOnCard),
        tnc: data.tnc,
      })
      .then((res) => {
        alert("payment successfuly done");

        console.log(res.data);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        margin: "auto",
        marginTop: "50px",
        boxShadow: "5px 5px 15px gray",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          width: "40%",
          padding: "10px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "2px",
            boxShadow: "0px 2px 0px whitesmoke",
          }}
        >
          <div
            style={{
              width: "50%",
              marginLeft: "50px",
              textAlign: "right",
            }}
          >
            <h3>Flower Shop</h3>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "30px", fontWeight: "500" }}>Enter new card</p>
          <p style={{ fontWeight: "500" }}>Total Payable Amount₹{cart_total}</p>
          <p style={{ fontWeight: "0" }}>Transaction Id: 100110125</p>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "35px",
            display: "flex",
            padding: "2px",
            margin: "2px",
            boxShadow: "0px 2px 0px whitesmoke",
          }}
        >
          <div
            style={{
              width: "50%",
              margin: "2px",
            }}
          >
            Enter new card
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "right",
            }}
          >
            <select id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>

        <div>
          <form
            style={{ width: "80%", margin: "auto", marginTop: "20px" }}
            onSubmit={(e) => submit(e)}
          >
            <label>New Card</label>
            <br />
            <input
              style={{
                height: "25px",
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
              }}
              onChange={(e) => handleInduptChange(e)}
              id="cardNum"
              value={data.cardNum}
              placeholder="Enter Card Number"
              type="text"
              minLength="16"
              maxLength="16"
              required
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <label>Expiry</label>
                <input
                  style={{
                    height: "25px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onChange={(e) => handleInduptChange(e)}
                  id="expiryDate"
                  value={data.expiryDate}
                  placeholder="MM/YY"
                  type="text"
                  minLength="4"
                  maxLength="4"
                  required
                />
              </div>
              <div>
                <label>CVV</label>
                <input
                  style={{
                    height: "25px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onChange={(e) => handleInduptChange(e)}
                  id="enterCvv"
                  value={data.enterCvv}
                  placeholder="Enter CVV"
                  type="text"
                  minLength="3"
                  maxLength="3"
                  required
                />
              </div>
            </div>
            <label>Name on Card</label>
            <br />
            <input
              style={{
                height: "25px",
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
              }}
              onChange={(e) => handleInduptChange(e)}
              id="nameOnCard"
              value={data.nameOnCard}
              placeholder="Name as on card"
              type="text"
              required
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                style={{
                  height: "25px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                onChange={(e) => handleInduptChange(e)}
                id="tnc"
                placeholder="Name as on card"
                type="checkbox"
              />
              <p style={{ fontSize: "15px", color: "grey" }}>
                Save this option securely for faster payment
              </p>
            </div>
            <Link to={"/orderdone"}>
              <button
                // onClick={() => {
                //   setIsToggled(!isToggled);
                // }}
                style={{
                  marginBottom: "25px",
                  border: "none",
                  color: "Window",
                  backgroundColor: "#59b4ff",
                  width: "100%",
                  height: "35px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                type="submit"
              >
                BUY NOW
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
