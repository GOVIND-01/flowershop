import { Routes, Route } from "react-router";
import { Navbar } from "../Components/Navbar/Navbar";
import { HomePage } from "../Components/Home/Home";
import { ProductPage } from "../Components/ProductPage/ProductPage";
import { WeddingPage } from "../Components/Wedding/WeddingPage";
import { Footer } from "../Components/Footer/Footer";
import { SignInSide } from "../Components/sign-in/Login";
import { SignUpSide } from "../Components/sign-up/SignUp";
import { Potted_Plants } from "../Components/Potted_Plants/Potted_Plants";
import Forgotpass from "../Components/sign-in/Forgotpass";

export const AllRoutes = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/wedding" element={<WeddingPage />} />
          <Route exact path="/product-page" element={<ProductPage />} />
          <Route path="/signup" element={<SignUpSide />} />
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/potted-plant" element={<Potted_Plants/>} />
        </Routes>
        <Footer />
      </>
    );
}
