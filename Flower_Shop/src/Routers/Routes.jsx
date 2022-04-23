import { Routes, Route } from "react-router";
import { Navbar } from "../Components/Navbar/Navbar";
import { HomePage } from "../Components/Home/Home";
import { ProductPage } from "../Components/ProductPage/ProductPage";
import { WeddingPage } from "../Components/Wedding/WeddingPage";
import { CorprateService } from "../Components/Corprate/Corprate";
import { Footer } from "../Components/Footer/Footer";

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/wedding" element={<WeddingPage/>} />
                <Route exact path="/corprate-service" element={< CorprateService />} />
                <Route exact path="/product-page" element={<ProductPage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
