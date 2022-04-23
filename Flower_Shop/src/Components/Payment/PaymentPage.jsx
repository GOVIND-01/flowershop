import React from "react";
import {CardPayment} from "./CardPayment";

export const PaymentPage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        marginTop: "50px",
        margin: "auto",
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
          <p style={{ fontSize: "30px", fontWeight: "500" }}>
            Choose a payment option
          </p>
          <p style={{ fontWeight: "500" }}>Total Payable Amount: </p>
          {/* <p style={{ fontWeight: "0" }}>Transaction Id: 100110125</p> */}
        </div>
      </div>
      <div
        style={{
          width: "60%",
          padding: "10px",
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
              margin: "2px",
            }}
          >
            PAYMENT OPTIONS
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
        <div style={{ width: "75%", margin: "auto", padding: "15px" }}>
          <div>
            <a style={{ textDecoration: "none" }} href="card-payment">
              <h3 style={{ color: "black", marginBottom: "5px" }}>
                Cards (Credit/Debit)
              </h3>
              <p style={{ color: "gray", marginTop: "5px" }}>
                Visa, Mastercard, Diners Club, Rupay, Amex
              </p>
            </a>
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div style={{ cursor: "pointer" }}>
            <h3 style={{ color: "black", marginBottom: "5px" }}>EMI</h3>
            <p style={{ color: "gray", marginTop: "5px" }}>
              Credit Card, Debit Card
            </p>
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div style={{ cursor: "pointer" }}>
            <h3 style={{ color: "black", marginBottom: "5px" }}>Wallet</h3>
            <p style={{ color: "gray", marginTop: "5px" }}>
              Amazon Pay, Paytm, PhonePe & more
            </p>
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div style={{ cursor: "pointer" }}>
            <h3 style={{ color: "black", marginBottom: "5px" }}>Net Banking</h3>
            <p style={{ color: "gray", marginTop: "5px" }}>All India Banks</p>
          </div>
          <hr style={{ border: "1px solid whitesmoke" }} />
          <div>
            <a style={{ textDecoration: "none" }} href="UpiPayment">
              <h3 style={{ color: "black", marginBottom: "5px" }}>UPI</h3>
              <p style={{ color: "gray", marginTop: "5px" }}>
                Gpay, PhonePe, BHIM, Paytm
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
