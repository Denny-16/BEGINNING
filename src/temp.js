import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles
import Header from "./component/Header";
import CardSection from "./component/CardSection";
import Footer from "./component/Footer";

const temp = "Shop Now";

// Sample data array with valid image links and text
const data = [
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/bb7ab9e7-93ab-414c-a973-98ecbfc01d8f1716908277527-Shop-By-Category_HP_02.jpg",
    heading: "Men's Collection",
    offer: "Up to 60% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/e68197b6-c88c-4c0a-bb99-f95bcb94a3061716908277547-Shop-By-Category_HP_03.jpg",
    heading: "Women's Fashion",
    offer: "Flat 50% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/1a0b4103-909e-47f3-8b2e-33f2d07b37b61716908277567-Shop-By-Category_HP_04.jpg",
    heading: "Footwear",
    offer: "Min 40% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/fcebc353-86b6-4ed8-bc9a-909b9f84951d1716908277591-Shop-By-Category_HP_06.jpg",
    heading: "Accessories",
    offer: "Buy 1 Get 1",
    text: temp,
  },
  // Add more items similarly
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/bb7ab9e7-93ab-414c-a973-98ecbfc01d8f1716908277527-Shop-By-Category_HP_02.jpg",
    heading: "Men's Collection",
    offer: "Up to 60% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/e68197b6-c88c-4c0a-bb99-f95bcb94a3061716908277547-Shop-By-Category_HP_03.jpg",
    heading: "Women's Fashion",
    offer: "Flat 50% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/1a0b4103-909e-47f3-8b2e-33f2d07b37b61716908277567-Shop-By-Category_HP_04.jpg",
    heading: "Footwear",
    offer: "Min 40% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/fcebc353-86b6-4ed8-bc9a-909b9f84951d1716908277591-Shop-By-Category_HP_06.jpg",
    heading: "Accessories",
    offer: "Buy 1 Get 1",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/bb7ab9e7-93ab-414c-a973-98ecbfc01d8f1716908277527-Shop-By-Category_HP_02.jpg",
    heading: "Men's Collection",
    offer: "Up to 60% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/e68197b6-c88c-4c0a-bb99-f95bcb94a3061716908277547-Shop-By-Category_HP_03.jpg",
    heading: "Women's Fashion",
    offer: "Flat 50% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/1a0b4103-909e-47f3-8b2e-33f2d07b37b61716908277567-Shop-By-Category_HP_04.jpg",
    heading: "Footwear",
    offer: "Min 40% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/fcebc353-86b6-4ed8-bc9a-909b9f84951d1716908277591-Shop-By-Category_HP_06.jpg",
    heading: "Accessories",
    offer: "Buy 1 Get 1",
    text: temp,
  },{
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/bb7ab9e7-93ab-414c-a973-98ecbfc01d8f1716908277527-Shop-By-Category_HP_02.jpg",
    heading: "Men's Collection",
    offer: "Up to 60% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/e68197b6-c88c-4c0a-bb99-f95bcb94a3061716908277547-Shop-By-Category_HP_03.jpg",
    heading: "Women's Fashion",
    offer: "Flat 50% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/1a0b4103-909e-47f3-8b2e-33f2d07b37b61716908277567-Shop-By-Category_HP_04.jpg",
    heading: "Footwear",
    offer: "Min 40% Off",
    text: temp,
  },
  {
    image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/5/28/fcebc353-86b6-4ed8-bc9a-909b9f84951d1716908277591-Shop-By-Category_HP_06.jpg",
    heading: "Accessories",
    offer: "Buy 1 Get 1",
    text: temp,
  }

];


// ✅ Main App
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* Stays sticky at top */}
      <main className="flex flex-col gap-4 p-4">
        <CardSection />
    
      </main>
      <Footer/>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
