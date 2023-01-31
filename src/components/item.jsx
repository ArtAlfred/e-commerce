import React from "react";
import Cart from "../card/cart";
import careData, { section_3 } from "../data";

import Sports, { newArrival, womenData, menData, kidData } from "../data";

const Item = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

const newArrivalOne = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_1/1.jpg"
        img2="/img/arrival/arrival_1/2.jpg"
        img3="/img/arrival/arrival_1/3.jpg"
        img4="/img/arrival/arrival_1/4.jpg"
        name={newArrival[0].name}
        price={newArrival[0].price}
        type={newArrival[0].type}
        color="LightGray"
        showFreeSize={true}
        item={{
          image: newArrival[0].img,
          name: newArrival[0].name,
          type: newArrival[0].stock,
          price: newArrival[0].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrivalTwo = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_2/1.jpg"
        img2="/img/arrival/arrival_2/2.jpg"
        img3="/img/arrival/arrival_2/3.jpg"
        img4="/img/arrival/arrival_2/4.jpg"
        name={newArrival[1].name}
        price={newArrival[1].price}
        type={newArrival[1].type}
        color="White"
        showShoesSize={true}
        item={{
          image: newArrival[1].img,
          name: newArrival[1].name,
          type: newArrival[1].stock,
          price: newArrival[1].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrivalThree = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_3/1.jpg"
        img2="/img/arrival/arrival_3/2.jpg"
        img3="/img/arrival/arrival_3/3.jpg"
        img4="/img/arrival/arrival_3/4.jpg"
        name={newArrival[2].name}
        price={newArrival[2].price}
        type={newArrival[2].type}
        color="Butterscotch"
        showFreeSize={true}
        item={{
          image: newArrival[2].img,
          name: newArrival[2].name,
          type: newArrival[2].stock,
          price: newArrival[2].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrivalFour = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_4/1.jpg"
        img2="/img/arrival/arrival_4/2.jpg"
        img3="/img/arrival/arrival_4/3.jpg"
        img4="/img/arrival/arrival_4/4.jpg"
        name={newArrival[3].name}
        price={newArrival[3].price}
        type={newArrival[3].type}
        color="Yellow"
        showFreeSize={true}
        item={{
          image: newArrival[3].img,
          name: newArrival[3].name,
          type: newArrival[3].stock,
          price: newArrival[3].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrivalFive = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_5/1.jpg"
        img2="/img/arrival/arrival_5/2.jpg"
        img3="/img/arrival/arrival_5/3.jpg"
        img4="/img/arrival/arrival_5/4.jpg"
        name={newArrival[4].name}
        price={newArrival[4].price}
        type={newArrival[4].type}
        color="Black"
        showShoesSize={true}
        item={{
          image: newArrival[4].img,
          name: newArrival[4].name,
          type: newArrival[4].stock,
          price: newArrival[4].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrivalSix = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_6/1.jpg"
        img2="/img/arrival/arrival_6/2.jpg"
        img3="/img/arrival/arrival_6/3.jpg"
        img4="/img/arrival/arrival_6/4.jpg"
        name={newArrival[5].name}
        price={newArrival[5].price}
        type={newArrival[5].type}
        color="Burnt Olive"
        showFreeSize={true}
        item={{
          image: newArrival[5].img,
          name: newArrival[5].name,
          type: newArrival[5].stock,
          price: newArrival[5].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrivalSeven = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_7/1.jpg"
        img2="/img/arrival/arrival_7/2.jpg"
        img3="/img/arrival/arrival_7/3.jpg"
        img4="/img/arrival/arrival_7/4.jpg"
        name={newArrival[6].name}
        price={newArrival[6].price}
        type={newArrival[6].type}
        color="Black"
        showFreeSize={true}
        item={{
          image: newArrival[6].img,
          name: newArrival[6].name,
          type: newArrival[6].stock,
          price: newArrival[6].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrivalEight = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_8/1.jpg"
        img2="/img/arrival/arrival_8/2.jpg"
        img3="/img/arrival/arrival_8/3.jpg"
        img4="/img/arrival/arrival_8/4.jpg"
        name={newArrival[7].name}
        price={newArrival[7].price}
        type={newArrival[7].type}
        color="White"
        showSML={true}
        item={{
          image: newArrival[7].img,
          name: newArrival[7].name,
          type: newArrival[7].stock,
          price: newArrival[7].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrival9 = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_9/1.jpg"
        img2="/img/arrival/arrival_9/2.jpg"
        img3="/img/arrival/arrival_9/3.jpg"
        img4="/img/arrival/arrival_9/4.jpg"
        name={newArrival[8].name}
        price={newArrival[8].price}
        type={newArrival[8].type}
        color="Black"
        showSML={true}
        item={{
          image: newArrival[8].img,
          name: newArrival[8].name,
          type: newArrival[8].stock,
          price: newArrival[8].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrival10 = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_10/1.jpg"
        img2="/img/arrival/arrival_10/2.jpg"
        img3="/img/arrival/arrival_10/3.jpg"
        img4="/img/arrival/arrival_10/4.jpg"
        name={newArrival[9].name}
        price={newArrival[9].price}
        type={newArrival[9].type}
        color="Red"
        showFreeSize={true}
        item={{
          image: newArrival[9].img,
          name: newArrival[9].name,
          type: newArrival[9].stock,
          price: newArrival[9].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

const newArrival11 = () => {
  return (
    <div>
      <Cart
        img1="/img/arrival/arrival_11/1.jpg"
        img2="/img/arrival/arrival_11/2.jpg"
        img3="/img/arrival/arrival_11/3.jpg"
        img4="/img/arrival/arrival_11/4.jpg"
        name={newArrival[10].name}
        price={newArrival[10].price}
        type={newArrival[10].type}
        color="Dark/Violet"
        showFreeSize={true}
        item={{
          image: newArrival[10].img,
          name: newArrival[10].name,
          type: newArrival[10].stock,
          price: newArrival[10].price,
        }}
        cartItem={true}
        footerCart={true}
      />
    </div>
  );
};

//////////////////////////////////////////////////
// WOMEN
//////////////////////////////////////////////////

const womenOne = () => {
  return (
    <Cart
      img1="/img/women/women_1/1.jpg"
      img2="/img/women/women_1/2.jpg"
      img3="/img/women/women_1/3.jpg"
      img4="/img/women/women_1/4.jpg"
      name={womenData[0].name}
      price={womenData[0].price}
      type={womenData[0].type}
      color="Black"
      showSML={true}
      item={{
        image: womenData[0].img,
        name: womenData[0].name,
        type: womenData[0].stock,
        price: womenData[0].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenTwo = () => {
  return (
    <Cart
      img1="/img/women/women_2/1.jpg"
      img2="/img/women/women_2/2.jpg"
      img3="/img/women/women_2/3.jpg"
      img4="/img/women/women_2/4.jpg"
      name={womenData[1].name}
      price={womenData[1].price}
      type={womenData[1].type}
      color="Cement"
      showSML={true}
      item={{
        image: womenData[1].img,
        name: womenData[1].name,
        type: womenData[1].stock,
        price: womenData[1].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenThree = () => {
  return (
    <Cart
      img1="/img/women/women_3/1.jpg"
      img2="/img/women/women_3/2.jpg"
      img3="/img/women/women_3/3.jpg"
      img4="/img/women/women_3/4.jpg"
      name={womenData[2].name}
      price={womenData[2].price}
      type={womenData[2].type}
      color="Blush"
      showSML={true}
      item={{
        image: womenData[2].img,
        name: womenData[2].name,
        type: womenData[2].stock,
        price: womenData[2].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenFour = () => {
  return (
    <Cart
      img1="/img/women/women_4/1.jpg"
      img2="/img/women/women_4/2.jpg"
      img3="/img/women/women_4/3.jpg"
      img4="/img/women/women_4/4.jpg"
      name={womenData[3].name}
      price={womenData[3].price}
      type={womenData[3].type}
      color="Violet"
      showSML={true}
      item={{
        image: womenData[3].img,
        name: womenData[3].name,
        type: womenData[3].stock,
        price: womenData[3].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenFive = () => {
  return (
    <Cart
      img1="/img/women/women_5/1.jpg"
      img2="/img/women/women_5/2.jpg"
      img3="/img/women/women_5/3.jpg"
      img4="/img/women/women_5/4.jpg"
      name={womenData[4].name}
      price={womenData[4].price}
      type={womenData[4].type}
      color="Black"
      showSML={true}
      item={{
        image: womenData[4].img,
        name: womenData[4].name,
        type: womenData[4].stock,
        price: womenData[4].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenSix = () => {
  return (
    <Cart
      img1="/img/women/women_6/1.jpg"
      img2="/img/women/women_6/2.jpg"
      img3="/img/women/women_6/3.jpg"
      img4="/img/women/women_6/4.jpg"
      name={womenData[5].name}
      price={womenData[5].price}
      type={womenData[5].type}
      color="Black"
      showSML={true}
      item={{
        image: womenData[5].img,
        name: womenData[5].name,
        type: womenData[5].stock,
        price: womenData[5].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenSeven = () => {
  return (
    <Cart
      img1="/img/women/women_7/1.jpg"
      img2="/img/women/women_7/2.jpg"
      img3="/img/women/women_7/3.jpg"
      img4="/img/women/women_7/4.jpg"
      name={womenData[6].name}
      price={womenData[6].price}
      type={womenData[6].type}
      color="Nude"
      showSML={true}
      item={{
        image: womenData[6].img,
        name: womenData[6].name,
        type: womenData[6].stock,
        price: womenData[6].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenEight = () => {
  return (
    <Cart
      img1="/img/women/women_8/1.jpg"
      img2="/img/women/women_8/2.jpg"
      img3="/img/women/women_8/3.jpg"
      img4="/img/women/women_8/4.jpg"
      name={womenData[7].name}
      price={womenData[7].price}
      type={womenData[7].type}
      color="Blue"
      showSML={true}
      item={{
        image: womenData[7].img,
        name: womenData[7].name,
        type: womenData[7].stock,
        price: womenData[7].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenNine = () => {
  return (
    <Cart
      img1="/img/women/women_9/1.jpg"
      img2="/img/women/women_9/2.jpg"
      img3="/img/women/women_9/3.jpg"
      img4="/img/women/women_9/4.jpg"
      name={womenData[8].name}
      price={womenData[8].price}
      type={womenData[8].type}
      color="Brown"
      showFreeSize={true}
      item={{
        image: womenData[8].img,
        name: womenData[8].name,
        type: womenData[8].stock,
        price: womenData[8].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenTen = () => {
  return (
    <Cart
      img1="/img/women/women_10/1.jpg"
      img2="/img/women/women_10/2.jpg"
      img3="/img/women/women_10/3.jpg"
      img4="/img/women/women_10/4.jpg"
      name={womenData[9].name}
      price={womenData[9].price}
      type={womenData[9].type}
      color="Purple Stripes"
      showSML={true}
      item={{
        image: womenData[9].img,
        name: womenData[9].name,
        type: womenData[9].stock,
        price: womenData[9].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenEleven = () => {
  return (
    <Cart
      img1="/img/women/women_11/1.jpg"
      img2="/img/women/women_11/2.jpg"
      img3="/img/women/women_11/3.jpg"
      img4="/img/women/women_11/4.jpg"
      name={womenData[10].name}
      price={womenData[10].price}
      type={womenData[10].type}
      color="Brown"
      showSML={true}
      item={{
        image: womenData[10].img,
        name: womenData[10].name,
        type: womenData[10].stock,
        price: womenData[10].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenTwelve = () => {
  return (
    <Cart
      img1="/img/women/women_12/1.jpg"
      img2="/img/women/women_12/2.jpg"
      img3="/img/women/women_12/3.jpg"
      img4="/img/women/women_12/4.jpg"
      name={womenData[11].name}
      price={womenData[11].price}
      type={womenData[11].type}
      color="Black"
      showSML={true}
      item={{
        image: womenData[11].img,
        name: womenData[11].name,
        type: womenData[11].stock,
        price: womenData[11].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const womenThirteen = () => {
  return (
    <Cart
      img1="/img/women/women_13/1.jpg"
      img2="/img/women/women_13/2.jpg"
      img3="/img/women/women_13/3.jpg"
      img4="/img/women/women_13/4.jpg"
      name={womenData[12].name}
      price={womenData[12].price}
      type={womenData[12].type}
      color="Black"
      showSML={true}
      item={{
        image: womenData[12].img,
        name: womenData[12].name,
        type: womenData[12].stock,
        price: womenData[12].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menOne = () => {
  return (
    <Cart
      img1="/img/men/men_1/1.jpg"
      img2="/img/men/men_1/2.jpg"
      img3="/img/men/men_1/3.jpg"
      img4="/img/men/men_1/4.jpg"
      name={menData[0].name}
      price={menData[0].price}
      type={menData[0].type}
      color="Black"
      showSML={true}
      item={{
        image: menData[0].img,
        name: menData[0].name,
        type: menData[0].stock,
        price: menData[0].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menTwo = () => {
  return (
    <Cart
      img1="/img/men/men_2/1.jpg"
      img2="/img/men/men_2/2.jpg"
      img3="/img/men/men_2/3.jpg"
      img4="/img/men/men_2/4.jpg"
      name={menData[1].name}
      price={menData[1].price}
      type={menData[1].type}
      color="Black"
      showSML={true}
      item={{
        image: menData[1].img,
        name: menData[1].name,
        type: menData[1].stock,
        price: menData[1].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menThree = () => {
  return (
    <Cart
      img1="/img/men/men_3/1.jpg"
      img2="/img/men/men_3/2.jpg"
      img3="/img/men/men_3/3.jpg"
      img4="/img/men/men_3/4.jpg"
      name={menData[2].name}
      price={menData[2].price}
      type={menData[2].type}
      color="Black/Gray"
      showShoesSize={true}
      item={{
        image: menData[2].img,
        name: menData[2].name,
        type: menData[2].stock,
        price: menData[2].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menFour = () => {
  return (
    <Cart
      img1="/img/men/men_4/1.jpg"
      img2="/img/men/men_4/2.jpg"
      img3="/img/men/men_4/3.jpg"
      img4="/img/men/men_4/4.jpg"
      name={menData[3].name}
      price={menData[3].price}
      type={menData[3].type}
      color="White"
      showSML={true}
      item={{
        image: menData[3].img,
        name: menData[3].name,
        type: menData[3].stock,
        price: menData[3].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menFive = () => {
  return (
    <Cart
      img1="/img/men/men_5/1.jpg"
      img2="/img/men/men_5/2.jpg"
      img3="/img/men/men_5/3.jpg"
      img4="/img/men/men_5/4.jpg"
      name={menData[4].name}
      price={menData[4].price}
      type={menData[4].type}
      color="Brown"
      showSML={true}
      item={{
        image: menData[4].img,
        name: menData[4].name,
        type: menData[4].stock,
        price: menData[4].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menSix = () => {
  return (
    <Cart
      img1="/img/men/men_6/1.jpg"
      img2="/img/men/men_6/2.jpg"
      img3="/img/men/men_6/3.jpg"
      img4="/img/men/men_6/4.jpg"
      name={menData[6].name}
      price={menData[6].price}
      type={menData[6].type}
      color="Dark Gray"
      showSML={true}
      item={{
        image: menData[6].img,
        name: menData[6].name,
        type: menData[6].stock,
        price: menData[6].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menSeven = () => {
  return (
    <Cart
      img1="/img/men/men_7/1.jpg"
      img2="/img/men/men_7/2.jpg"
      img3="/img/men/men_7/3.jpg"
      img4="/img/men/men_7/4.jpg"
      name={menData[6].name}
      price={menData[6].price}
      type={menData[6].type}
      color="Light Brown"
      showFreeSize={true}
      item={{
        image: menData[6].img,
        name: menData[6].name,
        type: menData[6].stock,
        price: menData[6].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menEight = () => {
  return (
    <Cart
      img1="/img/men/men_8/1.jpg"
      img2="/img/men/men_8/2.jpg"
      img3="/img/men/men_8/3.jpg"
      img4="/img/men/men_8/4.jpg"
      name={menData[7].name}
      price={menData[7].price}
      type={menData[7].type}
      color="Black"
      showFreeSize={true}
      item={{
        image: menData[7].img,
        name: menData[7].name,
        type: menData[7].stock,
        price: menData[7].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menNine = () => {
  return (
    <Cart
      img1="/img/men/men_9/1.jpg"
      img2="/img/men/men_9/2.jpg"
      img3="/img/men/men_9/3.jpg"
      img4="/img/men/men_9/4.jpg"
      name={menData[8].name}
      price={menData[8].price}
      type={menData[8].type}
      color="White"
      showSML={true}
      item={{
        image: menData[8].img,
        name: menData[8].name,
        type: menData[8].stock,
        price: menData[8].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menten = () => {
  return (
    <Cart
      img1="/img/men/men_10/1.jpg"
      img2="/img/men/men_10/2.jpg"
      img3="/img/men/men_10/3.jpg"
      img4="/img/men/men_10/4.jpg"
      name={menData[9].name}
      price={menData[9].price}
      type={menData[9].type}
      color="Black"
      showShoesSize={true}
      item={{
        image: menData[9].img,
        name: menData[9].name,
        type: menData[9].stock,
        price: menData[9].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menEleven = () => {
  return (
    <Cart
      img1="/img/men/men_11/1.jpg"
      img2="/img/men/men_11/2.jpg"
      img3="/img/men/men_11/3.jpg"
      img4="/img/men/men_11/4.jpg"
      name={menData[10].name}
      price={menData[10].price}
      type={menData[10].type}
      color="Maron"
      showFreeSize={true}
      item={{
        image: menData[10].img,
        name: menData[10].name,
        type: menData[10].stock,
        price: menData[10].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menTwelve = () => {
  return (
    <Cart
      img1="/img/men/men_12/1.jpg"
      img2="/img/men/men_12/2.jpg"
      img3="/img/men/men_12/3.jpg"
      img4="/img/men/men_12/4.jpg"
      name={menData[11].name}
      price={menData[11].price}
      type={menData[11].type}
      color="Brown/Stripes"
      showFreeSize={true}
      item={{
        image: menData[11].img,
        name: menData[11].name,
        type: menData[11].stock,
        price: menData[11].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menThirteen = () => {
  return (
    <Cart
      img1="/img/men/men_13/1.jpg"
      img2="/img/men/men_13/2.jpg"
      img3="/img/men/men_13/3.jpg"
      img4="/img/men/men_13/4.jpg"
      name={menData[12].name}
      price={menData[12].price}
      type={menData[12].type}
      color="Violet"
      showSML={true}
      item={{
        image: menData[12].img,
        name: menData[12].name,
        type: menData[12].stock,
        price: menData[12].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menFourteen = () => {
  return (
    <Cart
      img1="/img/men/men_14/1.jpg"
      img2="/img/men/men_14/2.jpg"
      img3="/img/men/men_14/3.jpg"
      img4="/img/men/men_14/4.jpg"
      name={menData[13].name}
      price={menData[13].price}
      type={menData[13].type}
      color="Navy Blue"
      showSML={true}
      item={{
        image: menData[13].img,
        name: menData[13].name,
        type: menData[13].stock,
        price: menData[13].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menFiftheen = () => {
  return (
    <Cart
      img1="/img/men/men_15/1.jpg"
      img2="/img/men/men_15/2.jpg"
      img3="/img/men/men_15/3.jpg"
      img4="/img/men/men_15/4.jpg"
      name={menData[14].name}
      price={menData[14].price}
      type={menData[14].type}
      color="Light Brown"
      showSML={true}
      item={{
        image: menData[14].img,
        name: menData[14].name,
        type: menData[14].stock,
        price: menData[14].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const menSixteen = () => {
  return (
    <Cart
      img1="/img/men/men_16/1.jpg"
      img2="/img/men/men_16/2.jpg"
      img3="/img/men/men_16/3.jpg"
      img4="/img/men/men_16/4.jpg"
      name={menData[15].name}
      price={menData[15].price}
      type={menData[15].type}
      color="Black"
      showSML={true}
      item={{
        image: menData[15].img,
        name: menData[15].name,
        type: menData[15].stock,
        price: menData[15].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidOne = () => {
  return (
    <Cart
      img1="/img/kid/kid_1/1.jpg"
      img2="/img/kid/kid_1/2.jpg"
      img3="/img/kid/kid_1/3.jpg"
      img4="/img/kid/kid_1/4.jpg"
      name={kidData[0].name}
      price={kidData[0].price}
      type={kidData[0].type}
      color="White"
      showSML={true}
      item={{
        image: kidData[0].img,
        name: kidData[0].name,
        type: kidData[0].stock,
        price: kidData[0].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidTwo = () => {
  return (
    <Cart
      img1="/img/kid/kid_2/1.jpg"
      img2="/img/kid/kid_2/2.jpg"
      img3="/img/kid/kid_2/3.jpg"
      img4="/img/kid/kid_2/4.jpg"
      name={kidData[1].name}
      price={kidData[1].price}
      type={kidData[1].type}
      color="Green"
      showSML={true}
      item={{
        image: kidData[1].img,
        name: kidData[1].name,
        type: kidData[1].stock,
        price: kidData[1].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidThree = () => {
  return (
    <Cart
      img1="/img/kid/kid_3/1.jpg"
      img2="/img/kid/kid_3/2.jpg"
      img3="/img/kid/kid_3/3.jpg"
      img4="/img/kid/kid_3/4.jpg"
      name={kidData[2].name}
      price={kidData[2].price}
      type={kidData[2].type}
      color="Black"
      showSML={true}
      item={{
        image: kidData[2].img,
        name: kidData[2].name,
        type: kidData[2].stock,
        price: kidData[2].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidFour = () => {
  return (
    <Cart
      img1="/img/kid/kid_4/1.jpg"
      img2="/img/kid/kid_4/2.jpg"
      img3="/img/kid/kid_4/3.jpg"
      img4="/img/kid/kid_4/4.jpg"
      name={kidData[3].name}
      price={kidData[3].price}
      type={kidData[3].type}
      color="Light Blue"
      showSML={true}
      item={{
        image: kidData[3].img,
        name: kidData[3].name,
        type: kidData[3].stock,
        price: kidData[3].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidFive = () => {
  return (
    <Cart
      img1="/img/kid/kid_5/1.jpg"
      img2="/img/kid/kid_5/2.jpg"
      img3="/img/kid/kid_5/3.jpg"
      img4="/img/kid/kid_5/4.jpg"
      name={kidData[4].name}
      price={kidData[4].price}
      type={kidData[4].type}
      color="Tan"
      showSML={true}
      item={{
        image: kidData[4].img,
        name: kidData[4].name,
        type: kidData[4].stock,
        price: kidData[4].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidSix = () => {
  return (
    <Cart
      img1="/img/kid/kid_6/1.jpg"
      img2="/img/kid/kid_6/2.jpg"
      img3="/img/kid/kid_6/3.jpg"
      img4="/img/kid/kid_6/4.jpg"
      name={kidData[5].name}
      price={kidData[5].price}
      type={kidData[5].type}
      color="Off White"
      showSML={true}
      item={{
        image: kidData[5].img,
        name: kidData[5].name,
        type: kidData[5].stock,
        price: kidData[5].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidSeven = () => {
  return (
    <Cart
      img1="/img/kid/kid_7/1.jpg"
      img2="/img/kid/kid_7/2.jpg"
      img3="/img/kid/kid_7/3.jpg"
      img4="/img/kid/kid_7/4.jpg"
      name={kidData[6].name}
      price={kidData[6].price}
      type={kidData[6].type}
      color="Navy Blue"
      showSML={true}
      item={{
        image: kidData[6].img,
        name: kidData[6].name,
        type: kidData[6].stock,
        price: kidData[6].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidEight = () => {
  return (
    <Cart
      img1="/img/kid/kid_8/1.jpg"
      img2="/img/kid/kid_8/2.jpg"
      img3="/img/kid/kid_8/3.jpg"
      img4="/img/kid/kid_8/4.jpg"
      name={kidData[7].name}
      price={kidData[7].price}
      type={kidData[7].type}
      color="Light Blue"
      showSML={true}
      item={{
        image: kidData[7].img,
        name: kidData[7].name,
        type: kidData[7].stock,
        price: kidData[7].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidNine = () => {
  return (
    <Cart
      img1="/img/kid/kid_9/1.jpg"
      img2="/img/kid/kid_9/2.jpg"
      img3="/img/kid/kid_9/3.jpg"
      img4="/img/kid/kid_9/4.jpg"
      name={kidData[8].name}
      price={kidData[8].price}
      type={kidData[8].type}
      color="Black"
      showSML={true}
      item={{
        image: kidData[8].img,
        name: kidData[8].name,
        type: kidData[8].stock,
        price: kidData[8].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidTen = () => {
  return (
    <Cart
      img1="/img/kid/kid_10/1.jpg"
      img2="/img/kid/kid_10/2.jpg"
      img3="/img/kid/kid_10/3.jpg"
      img4="/img/kid/kid_10/4.jpg"
      name={kidData[9].name}
      price={kidData[9].price}
      type={kidData[9].type}
      color="White"
      showSML={true}
      item={{
        image: kidData[9].img,
        name: kidData[9].name,
        type: kidData[9].stock,
        price: kidData[9].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidEleven = () => {
  return (
    <Cart
      img1="/img/kid/kid_11/1.jpg"
      img2="/img/kid/kid_11/2.jpg"
      img3="/img/kid/kid_11/3.jpg"
      img4="/img/kid/kid_11/4.jpg"
      name={kidData[10].name}
      price={kidData[10].price}
      type={kidData[10].type}
      color="Pink"
      showSML={true}
      item={{
        image: kidData[10].img,
        name: kidData[10].name,
        type: kidData[10].stock,
        price: kidData[10].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidTwelve = () => {
  return (
    <Cart
      img1="/img/kid/kid_12/1.jpg"
      img2="/img/kid/kid_12/2.jpg"
      img3="/img/kid/kid_12/3.jpg"
      img4="/img/kid/kid_12/4.jpg"
      name={kidData[11].name}
      price={kidData[11].price}
      type={kidData[11].type}
      color="Blue"
      showSML={true}
      item={{
        image: kidData[11].img,
        name: kidData[11].name,
        type: kidData[11].stock,
        price: kidData[11].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const kidThirteen = () => {
  return (
    <Cart
      img1="/img/kid/kid_13/1.jpg"
      img2="/img/kid/kid_13/2.jpg"
      img3="/img/kid/kid_13/3.jpg"
      img4="/img/kid/kid_13/4.jpg"
      name={kidData[12].name}
      price={kidData[12].price}
      type={kidData[12].type}
      color="Brown"
      showSML={true}
      item={{
        image: kidData[12].img,
        name: kidData[12].name,
        type: kidData[12].stock,
        price: kidData[12].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};
// SPORTS
const careOne = () => {
  return (
    <Cart
      img1="/img/care/care_1/1.jpg"
      img2="/img/care/care_1/2.jpg"
      img3="/img/care/care_1/3.jpg"
      img4="/img/care/care_1/4.jpg"
      name={careData[0].name}
      price={careData[0].price}
      type={careData[0].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[0].img,
        name: careData[0].name,
        type: careData[0].stock,
        price: careData[0].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careTwo = () => {
  return (
    <Cart
      img1="/img/care/care_2/1.jpg"
      img2="/img/care/care_2/2.jpg"
      img3="/img/care/care_2/3.jpg"
      img4="/img/care/care_2/4.jpg"
      name={careData[1].name}
      price={careData[1].price}
      type={careData[1].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[1].img,
        name: careData[1].name,
        type: careData[1].stock,
        price: careData[1].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careThree = () => {
  return (
    <Cart
      img1="/img/care/care_3/1.jpg"
      img2="/img/care/care_3/2.jpg"
      img3="/img/care/care_3/3.jpg"
      img4="/img/care/care_3/4.jpg"
      name={careData[2].name}
      price={careData[2].price}
      type={careData[2].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[2].img,
        name: careData[2].name,
        type: careData[2].stock,
        price: careData[2].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careFour = () => {
  return (
    <Cart
      img1="/img/care/care_4/1.jpg"
      img2="/img/care/care_4/2.jpg"
      img3="/img/care/care_4/3.jpg"
      img4="/img/care/care_4/4.jpg"
      name={careData[3].name}
      price={careData[3].price}
      type={careData[3].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[3].img,
        name: careData[3].name,
        type: careData[3].stock,
        price: careData[3].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careFive = () => {
  return (
    <Cart
      img1="/img/care/care_5/1.jpg"
      img2="/img/care/care_5/2.jpg"
      img3="/img/care/care_5/3.jpg"
      img4="/img/care/care_5/4.jpg"
      name={careData[4].name}
      price={careData[4].price}
      type={careData[4].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[4].img,
        name: careData[4].name,
        type: careData[4].stock,
        price: careData[4].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careSix = () => {
  return (
    <Cart
      img1="/img/care/care_6/1.jpg"
      img2="/img/care/care_6/2.jpg"
      img3="/img/care/care_6/3.jpg"
      img4="/img/care/care_6/4.jpg"
      name={careData[5].name}
      price={careData[5].price}
      type={careData[5].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[5].img,
        name: careData[5].name,
        type: careData[5].stock,
        price: careData[5].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careSeven = () => {
  return (
    <Cart
      img1="/img/care/care_7/1.jpg"
      img2="/img/care/care_7/2.jpg"
      img3="/img/care/care_7/3.jpg"
      img4="/img/care/care_7/4.jpg"
      name={careData[6].name}
      price={careData[6].price}
      type={careData[6].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[6].img,
        name: careData[6].name,
        type: careData[6].stock,
        price: careData[6].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careEight = () => {
  return (
    <Cart
      img1="/img/care/care_8/1.jpg"
      img2="/img/care/care_8/2.jpg"
      img3="/img/care/care_8/3.jpg"
      img4="/img/care/care_8/4.jpg"
      name={careData[7].name}
      price={careData[7].price}
      type={careData[7].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[7].img,
        name: careData[7].name,
        type: careData[7].stock,
        price: careData[7].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const careNine = () => {
  return (
    <Cart
      img1="/img/care/care_9/1.jpg"
      img2="/img/care/care_9/2.jpg"
      img3="/img/care/care_9/3.jpg"
      img4="/img/care/care_9/4.jpg"
      name={careData[8].name}
      price={careData[8].price}
      type={careData[8].type}
      color="Brown"
      showCareSize={true}
      item={{
        image: careData[8].img,
        name: careData[8].name,
        type: careData[8].stock,
        price: careData[8].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_1 = () => {
  return (
    <Cart
      img1="/img/hot/hot_1/1.jpg"
      img2="/img/hot/hot_1/2.jpg"
      img3="/img/hot/hot_1/3.jpg"
      img4="/img/hot/hot_1/4.jpg"
      name={section_3[0].name}
      price={section_3[0].price}
      type={section_3[0].type}
      color="Black"
      showSML={true}
      item={{
        image: section_3[0].img,
        name: section_3[0].name,
        type: section_3[0].stock,
        price: section_3[0].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_2 = () => {
  return (
    <Cart
      img1="/img/hot/hot_2/1.jpg"
      img2="/img/hot/hot_2/2.jpg"
      img3="/img/hot/hot_2/3.jpg"
      img4="/img/hot/hot_2/4.jpg"
      name={section_3[1].name}
      price={section_3[1].price}
      type={section_3[1].type}
      color="red / White"
      showSML={true}
      item={{
        image: section_3[1].img,
        name: section_3[1].name,
        type: section_3[1].stock,
        price: section_3[1].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_3 = () => {
  return (
    <Cart
      img1="/img/hot/hot_3/1.jpg"
      img2="/img/hot/hot_3/2.jpg"
      img3="/img/hot/hot_3/3.jpg"
      img4="/img/hot/hot_3/4.jpg"
      name={section_3[2].name}
      price={section_3[2].price}
      type={section_3[2].type}
      color="Dark Red"
      showSML={true}
      item={{
        image: section_3[2].img,
        name: section_3[2].name,
        type: section_3[2].stock,
        price: section_3[2].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_4 = () => {
  return (
    <Cart
      img1="/img/hot/hot_4/1.jpg"
      img2="/img/hot/hot_4/2.jpg"
      img3="/img/hot/hot_4/3.jpg"
      img4="/img/hot/hot_4/4.jpg"
      name={section_3[3].name}
      price={section_3[3].price}
      type={section_3[3].type}
      color="Violet"
      showSML={true}
      item={{
        image: section_3[3].img,
        name: section_3[3].name,
        type: section_3[3].stock,
        price: section_3[3].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_5 = () => {
  return (
    <Cart
      img1="/img/hot/hot_5/1.jpg"
      img2="/img/hot/hot_5/2.jpg"
      img3="/img/hot/hot_5/3.jpg"
      img4="/img/hot/hot_5/4.jpg"
      name={section_3[4].name}
      price={section_3[4].price}
      type={section_3[4].type}
      color="Green"
      showSML={true}
      item={{
        image: section_3[4].img,
        name: section_3[4].name,
        type: section_3[4].stock,
        price: section_3[4].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_6 = () => {
  return (
    <Cart
      img1="/img/hot/hot_6/1.jpg"
      img2="/img/hot/hot_6/2.jpg"
      img3="/img/hot/hot_6/3.jpg"
      img4="/img/hot/hot_6/4.jpg"
      name={section_3[5].name}
      price={section_3[5].price}
      type={section_3[5].type}
      color="Dark Red"
      showSML={true}
      item={{
        image: section_3[5].img,
        name: section_3[5].name,
        type: section_3[5].stock,
        price: section_3[5].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_7 = () => {
  return (
    <Cart
      img1="/img/hot/hot_7/1.jpg"
      img2="/img/hot/hot_7/2.jpg"
      img3="/img/hot/hot_7/3.jpg"
      img4="/img/hot/hot_7/4.jpg"
      name={section_3[6].name}
      price={section_3[6].price}
      type={section_3[6].type}
      color="Dark Gray"
      showSML={true}
      item={{
        image: section_3[6].img,
        name: section_3[6].name,
        type: section_3[6].stock,
        price: section_3[6].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

const hot_8 = () => {
  return (
    <Cart
      img1="/img/hot/hot_8/1.jpg"
      img2="/img/hot/hot_8/2.jpg"
      img3="/img/hot/hot_8/3.jpg"
      img4="/img/hot/hot_8/4.jpg"
      name={section_3[7].name}
      price={section_3[7].price}
      type={section_3[7].type}
      color="Gray"
      showSML={true}
      item={{
        image: section_3[7].img,
        name: section_3[7].name,
        type: section_3[7].stock,
        price: section_3[7].price,
      }}
      cartItem={true}
      footerCart={true}
    />
  );
};

export default Item;
export {
  newArrivalOne,
  newArrivalTwo,
  newArrivalThree,
  newArrivalFour,
  newArrivalFive,
  newArrivalSix,
  newArrivalSeven,
  newArrivalEight,
  newArrival9,
  newArrival10,
  newArrival11,
  womenOne,
  womenTwo,
  womenThree,
  womenFour,
  womenFive,
  womenSix,
  womenSeven,
  womenEight,
  womenNine,
  womenTen,
  womenEleven,
  womenTwelve,
  womenThirteen,
  menOne,
  menTwo,
  menThree,
  menFour,
  menFive,
  menSix,
  menSeven,
  menEight,
  menNine,
  menten,
  menEleven,
  menTwelve,
  menThirteen,
  menFourteen,
  menFiftheen,
  menSixteen,
  kidOne,
  kidTwo,
  kidThree,
  kidFour,
  kidFive,
  kidSix,
  kidSeven,
  kidEight,
  kidNine,
  kidTen,
  kidEleven,
  kidTwelve,
  kidThirteen,
  careOne,
  careTwo,
  careThree,
  careFour,
  careFive,
  careSix,
  careSeven,
  careEight,
  careNine,
  hot_1,
  hot_2,
  hot_3,
  hot_4,
  hot_5,
  hot_6,
  hot_7,
  hot_8,
};
