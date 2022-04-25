import axios from "axios"
import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import SimpleImageSlider from "react-simple-image-slider";

export const HomePage = () => {
    const [home, setHome] = useState([])
    
    const navigate  = useNavigate();

    useEffect(() => {
      fetchHomedata();
    },[])

    const images = [
      { url: "https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg" },
      { url: "https://media.architecturaldigest.com/photos/6172dd9598295f46efb29105/2:1/w_1280%2Cc_limit/1153038539" },
      { url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=1.00xw:0.892xh;0,0&resize=1200" },
      { url: "https://cdn.vox-cdn.com/thumbor/jm1VChuJpanmWRIweoUdIEVxcZQ=/0x504:4032x2520/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19702262/GettyImages_1129073013.jpg" },
      { url: "https://www.proflowers.com/blog/wp-content/uploads/2016/01/1-00_Types-of-Flowers_MainHero.png" }
    ];
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
    
        <div className="flower_Main">
          <div className="flower_home_slider">
          <SimpleImageSlider
        width={1250}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        bgColor={"#000000"}
      />
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
              <div className="flower_div_first" onClick={() => navigate(`/product-details/home/${el._id}`)} >
                <img src={el.image} />
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