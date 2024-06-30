import React from "react";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
const Card=(props)=>{
    const reviews=props.reviews;
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute -top-[7rem] z-10">
                <img src={reviews.image} alt="image"  className="w-[140px] h-[140px] rounded-full aspect-ratio z-25"/>
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>

            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl tracking-wider capitalize">{reviews.name}</p>
                <p className="uppercase text-sm text-violet-400">{reviews.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
            {reviews.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteRight />
            </div>
        </div>

    )
}
export default Card;