import useAudio from "./hooks/useAudio";
import { FaTrash } from "react-icons/fa";

function App() {
  const {
    playlist,
    currentTrackIndex,
    audioRef,
    handleUpload,
    handleTrackEnd,
    handlePlayPause,
    handleDelete,
  } = useAudio();

  return (
    <>
      <div className="text-center bg-black font-bold text-3xl sm:text-7xl py-8 sm:p-8">
        <h1 className="text-white">JUKEBOX</h1>
      </div>
      <div className="flex lg:flex-row lg:items-stretch items-center justify-center mt-40 mb-48 sm:flex-col">
        <div className="flex items-center justify-center max-lg:w-2/3 w-2/6 lg:mr-20 sm:m-0">
          <div className="flex flex-col items-center w-full h-full space-y-8 bg-gray-100 p-8">
            <h2 className="text-4xl font-bold">Playlist</h2>
            <div>
              {playlist.map((track, index) => (
                <div
                  className="flex  items-center gap-2  font-semibold cursor-pointer grow"
                  key={index}
                >
                  <label
                    onClick={(e) => handlePlayPause(e, track.lastModified)}
                    className={`border-y-2 w-full ${
                      track.isPlaying ? "text-gray-400" : "text-lg"
                    } border-gray-400 rounded-lg p-2 hover:bg-slate-100 hover:translate-x-1  hover:scale-105`}
                  >
                    {track.name}
                  </label>
                  <button
                    onClick={() => handleDelete(track.lastModified)}
                    className="text-red-500 scale-125"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              {playlist.length === 0 && (
                <p className="font-bold text-center text-lg">
                  No songs available. Please add new songs.
                </p>
              )}
            </div>
            <form className="flex flex-col w-full space-y-5">
              <input
                type="file"
                name="audio"
                onChange={handleUpload}
                accept="audio/*"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
        </div>
        <div className="flex max-lg:mt-40 max-lg:w-2/3 w-2/6">
          <div className="bg-black flex-col items-center justify-center text-white w-full h-full space-y-6 p-6">
            <h2 className="text-3xl text-center">Now playing:</h2>
            <p className="text-center w-full text-xl">
              {playlist[currentTrackIndex]?.name
                ? playlist[currentTrackIndex].name
                : "No song selected"}
            </p>
            {/* <button
              onClick={() => audioRef.current?.play()}
              className="text-white bg-blue-500 px-4 py-2 rounded-md"
            >
              Play
            </button> */}
            <audio
              className="w-full h-20 sm:h-40"
              ref={audioRef}
              src={playlist[currentTrackIndex]?.links}
              onEnded={handleTrackEnd}
              controls
            ></audio>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
