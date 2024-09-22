import { IMG_URL as img } from "../utils/Hard Coded Data/URL";
import { Heart } from "lucide-react";
const Cards =({name,avgRating,cloudinaryImageId,time,cuisines,headerr,subHead,areaName})=>{

    const nameExceed =(name)=>{
        if(name.length > 23){
            return name.substring(0,18) + "...";
        }
        return name;
    }
    const cusExceed =(name)=>{
        if(cuisines.length > 28){
            return cuisines.substring(0,28) + "...";
        }
        return cuisines;
    }


    return(
        <>
        <div className="cards-con">
        <div className="card">
            <img src= {img + cloudinaryImageId} alt="" />
            <div className="data">
                <h2>{nameExceed(name)}</h2>
                {/* <img src="../utils/Hard Coded Data/rating" alt="img" /> */}
                <h3 className="rating">{avgRating}</h3>
                &#8226; &nbsp;
                <h3>{time}</h3>
                <h4>{cusExceed(cuisines )}</h4>
                <h4>{areaName}</h4>
            </div>
        </div>
        </div>
        </>
    )
}

export default Cards;