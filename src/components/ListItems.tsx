import axios from "axios";
import { useEffect, useState } from "react";

// interface ListItemsProps {
//   image: string;
//   name: string;
//   href: string;
// }

export default function ListItems() {
  const [songs, setSongs] = useState(null || []);
  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
        url: "https://youtube-music-api3.p.rapidapi.com/recommend",
        params: { gl: "ID" },
        headers: {
          "X-RapidAPI-Key":
            "58ca491bccmshbf3982fa80d2e91p1ea0f4jsna01188d2014b",
          "X-RapidAPI-Host": "youtube-music-api3.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data.results);
        setSongs(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  return (
    <>
      <div className="mt-2 flex lg:flex-row lg:items-stretch items-center justify-between rounded-lg sm:flex-col max-sm:flex-col gap-4">
        <div className=" flex flex-wrap justify-evenly text-white bg-transparent">
          {songs &&
            songs.map((songs) => (
              <div className="py-2" key={songs.videoId}>
                <img
                  src={songs.thumbnail}
                  width={230}
                  height={400}
                  className=" object-cover rounded-xl border border-blue-950 shadow-lg"
                  alt=""
                />
                <p className="w-56 text-ellipsis text-white whitespace-nowrap overflow-hidden">
                  {songs.title}
                </p>
                <p className="w-32 text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden">
                  {songs.author}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
