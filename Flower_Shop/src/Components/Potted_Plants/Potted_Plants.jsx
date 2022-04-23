import axios from "axios"
import React, { useState, useEffect } from "react"
import "./Potted_Plants.css";
export const Potted_Plants = () => {
    const [pot ,setPot] = useState([])
    
    useEffect(() => {
        fetchpotData();
    }, [])
    
    let pot_url = "https://storeflowersunil.herokuapp.com/flower/pot";
    const fetchpotData = () => {
        axios.get(pot_url).then((res) => {
            console.log("pot", res.data)
            setPot([...res.data])
        })
    }
    return (
      <div className="potted_Plants_Main">
        <div className="potted_Plants_first">
          <p>Spring Bouquets</p>
          <p>Lobby and Office Flowers</p>
          <p>Luxuary Collection</p>
          <hr />
          <h2>Filter your results</h2>
          <p>Price range</p>
          <div className="priceSelect">
            <div>
              <input className="checkbox_price" type="checkbox" name="" id="" />{" "}
              <span>500-1000</span>
            </div>
            <div>
              <input className="checkbox_price" type="checkbox" name="" id="" />
              <span>1000-1500</span>
            </div>
            <div>
              <input className="checkbox_price" type="checkbox" name="" id="" />
              <span>1500-2000</span>
            </div>
            <div>
              <input className="checkbox_price" type="checkbox" name="" id="" />
              <span>2000-3000</span>
            </div>
          </div>
          <hr />
        </div>
        <div className="potted_Plants_second">
          {pot.map((el) => (
            <div className="prductDetail_potted_Plants">
              <img src={el.image}></img>
              <h3>{el.name}</h3>
              <p>{el.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
