import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Redirect = () => {
  const { urlCode } = useParams();
  const [longUrl, setlongUrl] = useState(null);
  useEffect(() => {
    const getUrl = async () => {
      console.log(urlCode);
      await axios
        .get(
          `https://urlshortner-backend-omega.vercel.app/api/geturl/?code=${urlCode}`
        )
        .then((res) => {
          setlongUrl(res.data.longUrl);
        })
        .catch((e) => console.log(e));
    };
    getUrl();
  });
  if (longUrl != null) return <div>{window.location.replace(longUrl)}</div>;
  else
    return (
      <div className="dark:bg-gray-900 dark:text-white h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">404 Page Not found</h1>
      </div>
    );
};
