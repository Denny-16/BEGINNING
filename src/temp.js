import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Tailwind styles
const temp = "Shop Now";

// ✅ Sample Data
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

// ✅ Navbar
/*const Navbar = () => (
  <nav className="flex items-center justify-between p-4 shadow bg-white sticky top-0 z-50">
    <div className="text-pink-600 font-bold text-xl">
      <a href="#">Myntra</a>
    </div>
    <ul className="hidden md:flex space-x-6 font-semibold text-sm text-gray-700">
      <li><a href="#">Men</a></li>
      <li><a href="#">Women</a></li>
      <li><a href="#">Kids</a></li>
      <li><a href="#">Home & Living</a></li>
      <li><a href="#">Beauty</a></li>
      <li><a href="#">Studio</a></li>
    </ul>
    <div className="hidden md:flex flex-grow mx-6 max-w-md">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-1 ring-pink-500"
      />
    </div>
    <div className="hidden md:flex space-x-4 text-sm text-gray-700 font-semibold">
      <div className="flex flex-col items-center">
        <span>👤</span><span>Profile</span>
      </div>
      <div className="flex flex-col items-center">
        <span>🤍</span><span>Wishlist</span>
      </div>
      <div className="flex flex-col items-center">
        <span>👜</span><span>Bag</span>
      </div>
    </div>
    <div className="md:hidden text-2xl">☰</div>
  </nav>
);
*/
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const categories = [
    {
      name: "Men",
      content: [
        {
          heading: "Topwear",
          items: ["T-Shirts", "Shirts", "Jackets"],
        },
        {
          heading: "Bottomwear",
          items: ["Jeans", "Trousers", "Shorts"],
        },
        {
          heading: "Footwear",
          items: ["Casual Shoes", "Sports Shoes", "Formal Shoes"],
        },
      ],
    },
    {
      name: "Women",
      content: [
        {
          heading: "Indian Wear",
          items: ["Kurtas", "Sarees", "Lehengas"],
        },
        {
          heading: "Western Wear",
          items: ["Tops", "Dresses", "Jeans"],
        },
        {
          heading: "Footwear",
          items: ["Heels", "Flats", "Boots"],
        },
      ],
    },
    {
      name: "Kids",
      content: [
        {
          heading: "Boys Clothing",
          items: ["T-Shirts", "Shirts", "Jeans"],
        },
        {
          heading: "Girls Clothing",
          items: ["Dresses", "Tops", "Skirts"],
        },
        {
          heading: "Footwear",
          items: ["Sandals", "Sneakers", "Boots"],
        },
      ],
    },
    {
      name: "Home & Living",
      content: [
        {
          heading: "Bed Linen",
          items: ["Bedsheets", "Pillows", "Blankets"],
        },
        {
          heading: "Décor",
          items: ["Curtains", "Wall Art", "Clocks"],
        },
        {
          heading: "Dining",
          items: ["Cutlery", "Dinner Sets", "Glasses"],
        },
      ],
    },
    {
      name: "Beauty",
      content: [
        {
          heading: "Makeup",
          items: ["Lipstick", "Foundation", "Blush"],
        },
        {
          heading: "Skincare",
          items: ["Face Wash", "Moisturizers", "Serums"],
        },
        {
          heading: "Haircare",
          items: ["Shampoo", "Conditioner", "Hair Oil"],
        },
      ],
    },
    {
      name: "Studio",
      content: [
        {
          heading: "Style Tips",
          items: ["Trending Now", "Celebrity Looks", "How to Wear"],
        },
        {
          heading: "Videos",
          items: ["Fashion Shows", "Makeup Tutorials", "Behind the Scenes"],
        },
        {
          heading: "Articles",
          items: ["Fashion News", "Blogs", "Tips & Tricks"],
        },
      ],
    },
  ];

  return (
    <nav className="relative bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between p-4">
        {/* Brand */}
        <div className="text-pink-600 font-bold text-xl">
          <a href="#">Myntra</a>
        </div>

        {/* Nav Items */}
        <ul className="hidden md:flex space-x-6 font-semibold text-sm text-gray-700 relative">
          {categories.map((category) => (
            <li
              key={category.name}
              onMouseEnter={() => setActiveMenu(category.name)}
              onMouseLeave={() => setActiveMenu(null)}
              className="relative"
            >
              <a href="#">{category.name}</a>

              {activeMenu === category.name && (
                <div
                  className="absolute left-0 top-full w-[700px] bg-white shadow-md p-6 grid grid-cols-3 gap-4 z-40"
                  onMouseEnter={() => setActiveMenu(category.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {category.content.map((col, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold mb-2">{col.heading}</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {col.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="hidden md:flex flex-grow mx-6 max-w-md">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-1 ring-pink-500"
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-4 text-sm text-gray-700 font-semibold">
          <div className="flex flex-col items-center">
            <span>👤</span>
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🤍</span>
            <span>Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <span>👜</span>
            <span>Bag</span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl">☰</div>
      </div>
    </nav>
  );
};

// ✅ CardSection
const CardSection = () => {
  if (!Array.isArray(data)) {
    return <div className="text-red-600 text-center">Error: data is not available</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-100">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded p-4 max-w-xs text-center"
        >
          <img
            src={item.image}
            alt={item.heading}
            className="w-full h-40 object-cover rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150";
            }}
          />
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

// ✅ Footer
const FooterSection = () => (
  <footer className="bg-gray-100 text-gray-700 px-6 py-10 text-sm">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="font-bold text-gray-900 mb-3">ONLINE SHOPPING</h2>
        <ul className="space-y-1">
          <li>Men</li><li>Women</li><li>Kids</li>
          <li>Home & Living</li><li>Beauty</li>
          <li>Gift Cards</li><li>Myntra Insider</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-gray-900 mb-3">USEFUL LINKS</h2>
        <ul className="space-y-1">
          <li>Blog</li><li>Careers</li><li>Site Map</li>
          <li>Corporate Info</li><li>Whitehat</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-gray-900 mb-3">CUSTOMER POLICIES</h2>
        <ul className="space-y-1">
          <li>Contact Us</li><li>FAQ</li><li>T&C</li>
          <li>Returns</li><li>Shipping</li><li>Privacy</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-gray-900 mb-3">EXPERIENCE MYNTRA APP</h2>
        <div className="flex space-x-2 mb-4">
          <span className="text-lg">📱</span>
          <span className="text-lg">📦</span>
        </div>
        <h2 className="font-bold text-gray-900 mb-3">KEEP IN TOUCH</h2>
        <div className="flex space-x-3 text-lg">
          <span>📘</span><span>📸</span><span>🐦</span><span>▶️</span>
        </div>
      </div>
    </div>
    <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Myntra Clone by Denny | Built with React + Tailwind
    </div>
  </footer>
);

// ✅ App
const App = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="flex flex-col gap-4 p-4">
      <CardSection />
    </main>
    <FooterSection />
  </div>
);

// ✅ Render App
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);