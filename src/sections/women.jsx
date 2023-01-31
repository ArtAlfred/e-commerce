import React, { useState, useEffect } from "react";
import CardItems from "../card/cardItems";
import SideBar from "../card/sidebar";
import Sports, { newArrival, womenData } from "../data";

const Women = () => {
  return (
    <div>
      <SideBar />
      <CardItems
        title="ALPHA Fashion | Casualwear for Women | Shop Online"
        description="Cool girl? Check! Shop the latest styles from our Ladies' collection. Shop OXGN Women's Fashion, from tops, dresses, bottoms, footwear, personal care Grab them now online! Nationwide shipping in the Philippines, cash on delivery, and multiple payment options available."
        items={womenData}
      />
    </div>
  );
};

export default Women;
