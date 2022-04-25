import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

// import KeyboardDatePickerExample from './Calendar';
// import Calendar from "react-calendar";

export const ProductDetailsHome = () => {

  const navigate  = useNavigate();

  const [value, setValue] = React.useState("female");
  const {id} = useParams();

  const [data, setData] = useState([]);

  useEffect(() => getData(), [] );
  // console.log('id: ', id);
  console.log(data);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getData = () => {
    axios.get(`https://storeflowersunil.herokuapp.com/flower/homepage/${id}`).then((res)=>{
      setData(res.data);
      // console.log(res.data);
    });
  };

  return (
    <>
      <div className="product-container">
        <h1>{data.name}</h1>
        <h4>Price : {data.price}</h4>
        <hr style={{ display: "flex", width: "90%" }} />
        <div style={{ display: "flex", width: "90%" }}>
          <img
            src={data.image}
            alt=""
            style={{ margin: "auto", width: "450px" }}
          />
          
          <hr />
          <div style={{ margin: "auto", width: "50%" }}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Select Size
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Standard-color"
                />
              </RadioGroup>
            </FormControl>
            <hr style={{ width: "60%" }} />
            <FormGroup style={{ marginLeft: "40%" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="PICK UP IN STORE"
              />
            </FormGroup>
            <div style={{ width: "20%", height: "50%", margin: "auto" }}>
              <input
                type="text"
                placeholder="Enter Pin Code"
                style={{ marginDown: "5%" }}
              />
              <h4>Delivery Date</h4>
              {/* <KeyboardDatePickerExample/> */}
              <h5>Use Address Book</h5>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={() => navigate(`/payment`)} >Checkout</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*

import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function KeyboardDatePickerExample(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <KeyboardDatePicker
        clearable
        value={selectedDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />

      <KeyboardDatePicker
        placeholder="2018/10/10"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        format="yyyy/MM/dd"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerExample;

*/
