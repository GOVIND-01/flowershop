import axios from "axios"
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export const HomePage = () => {
    const [home, setHome] = useState([])
    
    useEffect(() => {
        fetchHomedata();
    },[])
    
    let home_url = "https://storeflowersunil.herokuapp.com/flower/homepage";
    const fetchHomedata = () => {
        axios.get(home_url).then((res) => {
            console.log(res.data)
            setHome([...res.data]);
        })
    }
    return (
      <div>
        <div className="Header"></div>
        <h1>Flower Store</h1>
        <div className="flower_Main">
          <div className="flower_home_slider">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          </div>
          <div className="flower_home_about">
            <div className="flower_home_corprate_service">
              <Link to="/potted-plant">
                <img
                  src="https://assets.stage.eflorist.com//site/EF-77/Homepage/m7790008-smallOccTile01.jpg"
                  alt=""
                />
              </Link>
              <p className="services">Corprate Service</p>

            </div>
            <div className="flower_home_about_company">
              <h2>
                {" "}
                Serving the D.C. area since 1947 with same-day and next-day
                delivery, coupled with unsurpassed customer service.{" "}
              </h2>
            </div>
            <div className="flower_home_wedding">
              <Link to="/wedding">
                {" "}
                <img
                  src="https://assets.eflorist.com/site/EF-77/Homepage/Occ%20Tiles/weddingTile.jpg"
                  alt=""
                />
              </Link>
              <p className="services">Weddings</p>
            </div>
          </div>
          <div className="flower_div">
            {home.map((el) => (
              <div className="flower_div_first">
                <img src={el.image}></img>
                <h3>{el.name}</h3>
                <p>{el.price}</p>
              </div>
            ))}
          </div>
          <div className="potted_plants">
            <Link to="/potted-plant">
              {" "}
              <img
                src="https://assets.eflorist.com/site/EF-77/Custom%20HTML/plantsSucculents.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    );
}