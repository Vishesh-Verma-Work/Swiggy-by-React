import React, { createElement } from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header";
import Cards from "./src/Components/Cards";
import Search from './src/Components/Search';
import './src/styles/header.css';
import './src/styles/search.css';
import './src/styles/cards.css';
import './src/styles/appJS.css';
import restaurants from "./src/utils/Hard Coded Data/CardAPI";

const Body = () => (
    <>
      <Header />    
      <Search />
      <div className="cards-container">
        {restaurants.map((res) => (
          <Cards
            key={res.info.id} 
            name={res.info.name}
            avgRating={res.info.avgRating}
            cloudinaryImageId={res.info.cloudinaryImageId}
            time = {res.info.sla.slaString}
            cuisines={res.info.cuisines.join(", ")}
            areaName={res.info.areaName}
            // headerr = {res.info.aggregatedDiscountInfoV3.header}
            // subHead = {res.info.aggregatedDiscountInfoV3.subHeader}
            />
        ))}
         </div>
    </>
  );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);