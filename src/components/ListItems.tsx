import { useState } from "react";
import dummyData from "../data/DummyData";
import loop from "../assets/images/loop.png";

// interface ListItemsProps {
//   image: string;
//   name: string;
//   href: string;
// }

export default function ListItems() {
  const [currentSong, setCurrentSong] = useState({
    music_file: "",
    poster: "",
    artist: "",
    music_name: "",
  });

  const handleSongClick = (songs: any) => {
    console.log(`Now playing: ${songs.music_file}`);
    setCurrentSong(songs);
    // Replace the console.log with your actual logic to start playing the music
  };
  // useEffect(() => {
  //   async function getData() {
  //     const options = {
  //       method: "GET",
  //       url: "https://youtube-music-api3.p.rapidapi.com/recommend",
  //       params: { gl: "ID" },
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "58ca491bccmshbf3982fa80d2e91p1ea0f4jsna01188d2014b",
  //         "X-RapidAPI-Host": "youtube-music-api3.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       // console.log(response.data.results);
  //       setSongs(response.data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getData();
  // }, []);
  return (
    <>
      <div className="absolute z-10 py-4 flex items-center gap-20 bottom-0 w-full left-0 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 px-4">
        <img
          src={currentSong.poster || loop}
          className=" w-20 h-20 custom-spin object-cover border-4 shadow-[0px_5px_5px_black] rounded-full"
          alt="Music Poster"
        />
        <audio
          className=""
          src={currentSong.music_file}
          autoPlay
          controls
        ></audio>
      </div>
      <div className="mt-2 flex lg:flex-row lg:items-stretch items-center justify-between rounded-lg sm:flex-col max-sm:flex-col gap-4">
        <div className=" flex flex-wrap gap-2 justify-start text-white bg-transparent">
          {/* {dummyData && */}
          {dummyData.map((songs) => (
            <div
              className="py-2 px-4 rounded-lg cursor-pointer hover:bg-[#aeaeae2f] border border-transparent hover:border-gray-50 hover:backdrop-blur-[2px] "
              key={songs.music_id}
              onClick={() => handleSongClick(songs)}
            >
              <img
                src={songs.poster}
                className=" object-cover h-[380px] w-[270px] rounded-xl shadow-lg"
                alt=""
              />
              <p className="w-56 text-ellipsis font-bold text-xl mt-2 text-white whitespace-nowrap overflow-hidden">
                {songs.music_name}
              </p>
              <p className="w-32 text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden">
                {songs.artist}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
