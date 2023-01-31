import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kid from "../sections/kid";
import Men from "../sections/men";
import NewArrival from "../sections/newArrival";
import Women from "../sections/women";
import Sport from "../sections/care";
import Main from "./main";
import Item, {
  careEight,
  careFive,
  careFour,
  careNine,
  careOne,
  careSeven,
  careSix,
  careThree,
  careTwo,
  hot_1,
  hot_2,
  hot_3,
  hot_4,
  hot_5,
  hot_6,
  hot_7,
  hot_8,
  kidEight,
  kidEleven,
  kidFive,
  kidFour,
  kidNine,
  kidOne,
  kidSeven,
  kidSix,
  kidTen,
  kidThirteen,
  kidThree,
  kidTwelve,
  kidTwo,
  menEight,
  menEleven,
  menFiftheen,
  menFive,
  menFour,
  menFourteen,
  menNine,
  menOne,
  menSeven,
  menSisteen,
  menSix,
  menSixteen,
  menten,
  menThirteen,
  menThree,
  menTwelve,
  menTwo,
  newArrival10,
  newArrival11,
  newArrival9,
  newArrivalEight,
  newArrivalFive,
  newArrivalFour,
  newArrivalOne,
  newArrivalSeven,
  newArrivalSix,
  newArrivalThree,
  newArrivalTwo,
  womenEight,
  womenEleven,
  womenFive,
  womenFour,
  womenNine,
  womenOne,
  womenSeven,
  womenSix,
  womenTen,
  womenThirteen,
  womenThree,
  womenTwelve,
  womenTwo,
} from "../components/item";
import PersonalCare from "../sections/care";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new_Arrival" element={<NewArrival />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/personal_care" element={<PersonalCare />} />

        {/* NEW ARRIVAL LINKS */}
        <Route
          path="/generations_dad_hat"
          element={<div>{newArrivalOne()}</div>}
        />
        <Route
          path="/Evangelion_x_Unisex_EVA_01_Shoes"
          element={<div>{newArrivalTwo()}</div>}
        />
        <Route
          path="/COED_Curved_Cap_With_Metal_Logo"
          element={<div>{newArrivalThree()}</div>}
        />
        <Route
          path="/Generations_Kids_Bucket_Hat"
          element={<div>{newArrivalFour()}</div>}
        />
        <Route
          path="/Men's_COED_Double_Strap_Sandals"
          element={<div>{newArrivalFive()}</div>}
        />
        <Route
          path="/Mobile_Suit_Gundam_x_OXGN_Bucket_Hat"
          element={<div>{newArrivalSix()}</div>}
        />
        <Route
          path="/Jujutsu_Kaisen_x_Reversible_Bucket_Hat"
          element={<div>{newArrivalSeven()}</div>}
        />
        <Route
          path="/Evangelion_x_OXGN_Trio_Kids_Graphic_T-Shirt"
          element={<div>{newArrivalEight()}</div>}
        />
        <Route
          path="/Evangelion_x_Joggers"
          element={<div>{newArrival9()}</div>}
        />
        <Route
          path="/Evangelion_x_Curved_Cap"
          element={<div>{newArrival10()}</div>}
        />
        <Route
          path="/Evangelion_x_Bum_Bag"
          element={<div>{newArrival11()}</div>}
        />

        {/* WOMEN LINKS */}
        <Route path="/Generations_Tank_Top" element={<div>{womenOne()}</div>} />
        <Route path="/COED_Overshirt" element={<div>{womenTwo()}</div>} />
        <Route path="/Tweed_Jacket_Top" element={<div>{womenThree()}</div>} />
        <Route path="/Cut_And_Sew_Hoodie" element={<div>{womenFour()}</div>} />
        <Route
          path="/Stripe_Square_Neck_T-Shirt"
          element={<div>{womenFive()}</div>}
        />
        <Route
          path="/Generations_Ribbed_Black_Tank_Top"
          element={<div>{womenSix()}</div>}
        />
        <Route
          path="/Generations_Ribbed_Tank_Top"
          element={<div>{womenSeven()}</div>}
        />
        <Route
          path="/Tie_Dye_Garthered_Side_Top"
          element={<div>{womenEight()}</div>}
        />
        <Route
          path="/ALPHA_Micro_Tote_Bag_With_Printed_Straps"
          element={<div>{womenNine()}</div>}
        />

        <Route
          path="/Jacquard_Midi_Dress_With_Collar"
          element={<div>{womenTen()}</div>}
        />

        <Route
          path="/Generations_Waffle_Dress"
          element={<div>{womenEleven()}</div>}
        />

        <Route
          path="/Generations_Ribbed_A-Line_Sleeveless_Dress"
          element={<div>{womenTwelve()}</div>}
        />

        <Route path="/Basic_Pullover" element={<div>{womenThirteen()}</div>} />

        {/* MEN LINKS */}
        <Route
          path="/COED_Unisex_Oversized_Pocket_T-Shirt"
          element={<div>{menOne()}</div>}
        />
        <Route
          path="/Alternative_Culture_Graphic_Hoodie_With_Backprint"
          element={<div>{menTwo()}</div>}
        />
        <Route
          path="/Men's_Premium_Threads_Velcro_Sliders_With_Stripes_Detail"
          element={<div>{menThree()}</div>}
        />
        <Route
          path="/Men's_Logo_Pullover_With_Special_Print"
          element={<div>{menFour()}</div>}
        />
        <Route
          path="/Men's_Regular_Hoodie_With Special_Print"
          element={<div>{menFive()}</div>}
        />
        <Route
          path="/Unisex_Trousers_Pants_With_Drawstring"
          element={<div>{menSix()}</div>}
        />
        <Route
          path="/ALPHA_Regular_Backpack"
          element={<div>{menSeven()}</div>}
        />
        <Route
          path="/ALPHA_Regular_Black_Backpack"
          element={<div>{menEight()}</div>}
        />
        <Route
          path="/Premium_Threads_Raglan_T-Shirt_With_Shoulder_Stripes"
          element={<div>{menNine()}</div>}
        />
        <Route
          path="/COED_Single_Band_Sliders_With_Embossed_Embro"
          element={<div>{menten()}</div>}
        />
        <Route path="/X_Bi-Fold_Wallet" element={<div>{menEleven()}</div>} />
        <Route path="/ALPHA_Sling_Bag" element={<div>{menTwelve()}</div>} />
        <Route
          path="/Pullover_Sweater_With_Logo"
          element={<div>{menThirteen()}</div>}
        />
        <Route path="/Skinny_Jeans" element={<div>{menFourteen()}</div>} />
        <Route
          path="/COED_Unisex_T-Shirt"
          element={<div>{menFiftheen()}</div>}
        />
        <Route
          path="/Tie_Dye_Pullover_Sweater_With_Log"
          element={<div>{menSixteen()}</div>}
        />

        {/* KID LINKS */}
        <Route
          path="/Kyoto_&_Tokyo_High_Kids_Unisex_Graphic_T-Shirt"
          element={<div>{kidOne()}</div>}
        />
        <Route
          path="/Generations_Unisex_Kids_Zip_Up_Hoodie_With_Logo"
          element={<div>{kidTwo()}</div>}
        />
        <Route
          path="/BLEACH_x_Kon_Kids_Unisex_Graphic_T-Shirt"
          element={<div>{kidThree()}</div>}
        />
        <Route
          path="/Generations_Kids_Shorts"
          element={<div>{kidFour()}</div>}
        />
        <Route
          path="/Generations_Kids_Unisex_Shorts"
          element={<div>{kidFive()}</div>}
        />
        <Route
          path="/Jujutsu_Kaisen_x_Kids_Curved_Cap"
          element={<div>{kidSix()}</div>}
        />
        <Route
          path="/Generations_Kids_Beanie_With_Embroidered_Patch"
          element={<div>{kidSeven()}</div>}
        />
        <Route
          path="/YuYu_Hakusho_x_ALPHA_Kids_Curved_Cap"
          element={<div>{kidEight()}</div>}
        />
        <Route
          path="/YuYu_Hakusho_Kids_Pullover_With_Graphic_Print"
          element={<div>{kidNine()}</div>}
        />
        <Route
          path="/YuYu_Hakusho_Kids_T-Shirt_With_Graphic_Print"
          element={<div>{kidTen()}</div>}
        />
        <Route
          path="/Generations_FeMale_Kids_Zip_Up_Hoodie_With_Logo"
          element={<div>{kidEleven()}</div>}
        />
        <Route
          path="/Generations_Unisex_Kids_T-Shirt_With_Logo"
          element={<div>{kidTwelve()}</div>}
        />
        <Route
          path="/Generations_Male_Kids_T-Shirt_With_Logo"
          element={<div>{kidThirteen()}</div>}
        />

        {/* SPORTS LINKS */}
        <Route
          path="/BLEACH_x_Ichigo_11:55_Ichigo_Limited_Edition_Eau_de_Toilette_for_Men"
          element={<div>{careOne()}</div>}
        />
        <Route
          path="/Wild_Love_Eau_de_Toilette_for_Women"
          element={<div>{careTwo()}</div>}
        />
        <Route
          path="/Pitch_Black_Eau_de_Toilette_for_Men"
          element={<div>{careThree()}</div>}
        />
        <Route
          path="/ALPHA_Eau_de_Toilette_for_Men"
          element={<div>{careFour()}</div>}
        />
        <Route
          path="/Noir_Eau_de_Toilette_for_Men"
          element={<div>{careFive()}</div>}
        />
        <Route
          path="/Static_Eau_de_Toilette_for_Men"
          element={<div>{careSix()}</div>}
        />
        <Route
          path="/Unapologetic_Eau_de_Toilette_for_Women"
          element={<div>{careSeven()}</div>}
        />
        <Route
          path="/Alpha_x_DemonSlayer_Static_Eau_de_Toilette_for_Men"
          element={<div>{careEight()}</div>}
        />
        <Route
          path="/G.A.S._Eau_de_Toilette_for_Men"
          element={<div>{careNine()}</div>}
        />

        {/* HOT LINKS */}
        <Route
          path="/Evangelion_x_ALPHA_ced_Sling_Bag"
          element={<div>{hot_1()}</div>}
        />
        <Route
          path="/Mobile_Suit_Gundam_x_ALPHA_Convertible_Backpack"
          element={<div>{hot_2()}</div>}
        />
        <Route
          path="/Evangelion_x_ALPHA_Sling_Bag"
          element={<div>{hot_3()}</div>}
        />
        <Route
          path="/Logo_Regular_Fit_Graphic_T-Shirt"
          element={<div>{hot_4()}</div>}
        />
        <Route
          path="/Escapism_Oversized_Graphic_T-Shirt"
          element={<div>{hot_5()}</div>}
        />
        <Route
          path="/Jujutsu_Kaisen_x_ALPHA_Sukuna_T-Shirt_Gradient"
          element={<div>{hot_6()}</div>}
        />
        <Route
          path="/BLEACH_x_Alpha_Renji_Unisex_Fit_Overdyed_Graphic_T-Shirt"
          element={<div>{hot_7()}</div>}
        />
        <Route
          path="/Jujutsu_Kaisen_x_ALPHA_4_Heroes_Tie_Dye_T-Shirt"
          element={<div>{hot_8()}</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
