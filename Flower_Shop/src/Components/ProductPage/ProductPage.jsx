import "./ProductPage.css"
export const ProductPage = () => {
    
    return (
        <div className="ProductPage_Main">
            <div className="ProductPage_first">
                <p>Spring Bouquets</p>
                <p>Lobby and Office Flowers</p>
                <p>Luxuary Collection</p>
                <hr/>
                <h2>Filter your results</h2>
                <p>Price range</p>
                <div className="priceSelect">
                    <input type="checkbox" name="" id="" /> <span>500-1000</span>
                    <input type="checkbox" name="" id="" /><span>1000-1500</span>
                    <input type="checkbox" name="" id="" /><span>1500-2000</span>
                    <input type="checkbox" name="" id="" /><span>2000-3000</span>
                </div>
                <hr/>
            </div>
            <div className="ProductPage_second">
                <div className="prductDetail_productPage">
                <img src=""></img>
                <h3>Name</h3>
                <p>Price</p>
                </div>
            </div>
        </div>
    )
}
