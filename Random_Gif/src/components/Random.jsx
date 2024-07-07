import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from './Spinner';
const Random = () => {
  const [gif, setGif] = useState("");
  const[loading,setLoading]=useState("fasle");
  const API_KEY = "TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS";

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    // console.log(imageSource)
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
  return (
    <div
      className="lg:w-1/2 w-full bg-green-500 rounded-xl border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-xl md:text-2xl underline uppercase font-bold">
        Random Gif
      </h1>

      {
        loading ? (<Spinner/>) : ( <img src={gif} alt="" />)
      }
    
      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
