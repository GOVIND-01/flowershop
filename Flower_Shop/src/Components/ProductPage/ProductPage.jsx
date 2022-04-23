import axios from "axios";
import React, {useState,useEffect} from "react"
import "./ProductPage.css"
export const ProductPage = () => {
    const [home, setHome] = useState([]);

    useEffect(() => {
      fetchHomedata();
    },[]);

    let home_url = "https://storeflowersunil.herokuapp.com/flower/homepage";
    const fetchHomedata = () => {
      axios.get(home_url).then((res) => {
        console.log(res.data);
        setHome([...res.data]);
      });
    };
    return (
      <div className="ProductPage_Main">
        <div className="ProductPage_first">
          <p>Spring Bouquets</p>
          <p>Lobby and Office Flowers</p>
          <p>Luxuary Collection</p>
          <hr />
          <h2>Filter your results</h2>
          <p>Price range</p>
          <div className="priceSelect">
            <input type="checkbox" name="" id="" /> <span>500-1000</span>
            <input type="checkbox" name="" id="" />
            <span>1000-1500</span>
            <input type="checkbox" name="" id="" />
            <span>1500-2000</span>
            <input type="checkbox" name="" id="" />
            <span>2000-3000</span>
          </div>
          <hr />
        </div>
        <div className="ProductPage_second">
          {home.map((el) => (
            <div className="prductDetail_productPage">
              <img src={el.image}></img>
              <h3>{el.name}</h3>
              <p>{el.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
