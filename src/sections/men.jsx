import React, { useState, useEffect } from "react";
import CardItems from "../card/cardItems";
import SideBar from "../card/sidebar";
import Sports, { newArrival, menData } from "../data";

const Men = () => {
  return (
    <div>
      <SideBar />
      <CardItems
        title="ALPHA Fashion | Casualwear for Men | Shop Online"
        description="Be the coolest of the bunch with our latest in men's styles. Grab
            your next favorite outfit now and have them delivered straight to
            your doorstep. Shop Men's Fashion online at OXGN Fashion. Cash on
            delivery and other payment options available"
        items={menData}
      />
    </div>
  );
};

export default Men;
