import { useEffect } from "react";
import axios from "axios";
import useFetchVideoData from "./customHooks/useFetchVideoData";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RoutesManager from "./components/RoutesManager";

function App() {
  // const baseUrl = "https://www.googleapis.com/youtube/v3";
  // const apiKey = import.meta.env.VITE_REACT_YOUTUBEAPI_API_KEY;
  // const searchQuery = "Gear 5";
  // const apiUrl = `${baseUrl}/search?part=snippet&q=${searchQuery}&type=video&key=${apiKey}&maxResults=70`;
  // const data = useFetchVideoData(apiUrl);

  // useEffect(() => {
  //   data && console.log(data);
  // }, [data]);

  return (
    <BrowserRouter>
      <Navbar />
      <RoutesManager />
    </BrowserRouter>
  );
}

export default App;
