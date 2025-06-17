import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

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

// ✅ Functional Card component
const CardSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-100">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded p-4 max-w-xs text-center"
        >
          <img src={item.image} alt={item.heading} className="w-full h-40 object-cover rounded" />
          <h2 className="mt-2 text-lg font-semibold">{item.heading}</h2>
          <p className="text-red-600 text-xl">{item.offer}</p>
          <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            {item.text}
          </button>
        </div>
      ))}
    </div>
  );
};

// ✅ Main App
function App() {
  return (
    <>
      {/* header_section and footer_section should be real components */}
      {/* <HeaderSection /> */}
      <CardSection />
      {/* <FooterSection /> */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
