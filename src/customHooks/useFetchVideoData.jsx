import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const useFetchVideoData = (URL) => {
  // const baseUrl = "https://youtube-v31.p.rapidapi.com";
  const baseUrl = "https://youtube138.p.rapidapi.com";

  const apiKey = import.meta.env.VITE_REACT_RAPIDAPI_API_KEY;

  const options = {
    params: { hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  const getVideoData = async () => {
    const response = await axios.get(`${baseUrl}/${URL}`, options);
    const data = await response.data;
    return data;
  };

  const { data, refetch } = useQuery(["videoData"], getVideoData, {
    enabled: !!URL,
  });

  useEffect(() => {
    refetch();
  }, [URL]);

  return data;
};

export default useFetchVideoData;
