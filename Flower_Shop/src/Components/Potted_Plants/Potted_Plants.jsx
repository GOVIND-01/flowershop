import axios from "axios"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Potted_Plants.css";
export const Potted_Plants = () => {
    const [pot ,setPot] = useState([])
    
    useEffect(() => {
        fetchpotData();
    }, [])

    const navigate  = useNavigate();
    
    
    let pot_url = "https://storeflowersunil.herokuapp.com/flower/pot";
    const fetchpotData = () => {
        axios.get(pot_url).then((res) => {
            console.log("pot", res.data)
            setPot([...res.data])
        })
    }
    const sortByPrice5 =()=>{
      let arr = [];
      console.log('ok')
      axios.get("https://storeflowersunil.herokuapp.com/flower/pot").then((res) => {
        console.log(res);
        res.data.map((el)=>{
            if(el.price>500  && el.price<1000){
                arr.push(el)
            }

        })
        setPot(arr);
    })

    }

    const sortByPrice10 =()=>{
      let arr = [];
      console.log('ok')
      axios.get("https://storeflowersunil.herokuapp.com/flower/pot").then((res) => {
        console.log(res);
        res.data.map((el)=>{
            if(el.price>1000  && el.price<1500){
                arr.push(el)
            }

        })
        setPot(arr);
    })

    }


    const sortByPrice15 =()=>{
      let arr = [];
      console.log('ok')
      axios.get("https://storeflowersunil.herokuapp.com/flower/pot").then((res) => {
        console.log(res);
        res.data.map((el)=>{
            if(el.price>1500  && el.price<2000){
                arr.push(el)
            }

        })
        setPot(arr);
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
              <input className="checkbox_price" onChange={sortByPrice5} type="checkbox" name="" id="" />{" "}
              <span>500-1000</span>
            </div>
            <div>
              <input className="checkbox_price" onChange={sortByPrice10} type="checkbox" name="" id="" />
              <span>1000-1500</span>
            </div>
            <div>
              <input className="checkbox_price" onChange={sortByPrice15} type="checkbox" name="" id="" />
              <span>1500-2000</span>
            </div>
            {/* <div>
              <input className="checkbox_price"  type="checkbox" name="" id="" />
              <span>2000-3000</span>
            </div> */}
          </div>
          <hr />
        </div>
        <div className="potted_Plants_second">
          <div className="ptterd_plants">
            {pot.map((el) => (
              <div className="prductDetail_potted_Plants" onClick={() => navigate(`/product-details/${el._id}`)}>
                <img src={el.image}></img>
                <h5>{el.name}</h5>
                <p>{el.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
