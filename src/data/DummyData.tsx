import { AudioFile } from "../types/files";

export const dummyData: AudioFile[] = [
  {
    name: "test.mp3",
    lastModified: Date.now(),
    size: 2322323,
    isPlaying: false,
    links: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
];
