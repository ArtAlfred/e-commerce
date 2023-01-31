import React, { useState, useEffect } from "react";
import Cart from "../card/cart";
import SearchBar from "../card/searchBar";
import SideBar from "../card/sidebar";
import Section_2 from "../sections/section_2";
import Section_3 from "../sections/section_3";
import Section_4 from "../sections/section_4";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <SideBar />
      <Cart cartItem={false} />
      <Hero />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Footer />
    </div>
  );
};

export default Main;
