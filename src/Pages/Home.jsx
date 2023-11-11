import { useEffect, useState } from "react";
import axios from "axios";
import Url from "../Components/Url";
import { Form } from "../Components/Form";
import { BrowserRouter } from "react-router-dom";
function Home() {
  const [shortUrl, setshortUrl] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const updateUrl = async () => {
      await axios
        .post("http://localhost:5000/api/genurl/", {
          longUrl: url,
        })
        .then((response) => {
          setshortUrl(response.data.shortUrl);
        })
        .catch((e) => console.log(e));
    };
    updateUrl();
  }, [url]);

  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen">
      <h1 className="text-center text-3xl pt-5 ">Url shortner</h1>
      <div className="flex flex-col items-center justify-center">
        <Form setUrl={setUrl} />
        {url != null ? <Url text={shortUrl} /> : null}
      </div>
    </div>
  );
}

export default Home;
