import React, { useState } from "react";
import { Song } from "../App";
import boromir from "../assets/images/boromir.png";
import boromir2 from "../assets/images/boromir2.png";
import boromir3 from "../assets/images/boromir3.png";
import boromir4 from "../assets/images/FASHION.png";
import song2 from "../assets/music/song2.mp3";
import song3 from "../assets/music/song3.mp3";
import helena from "../assets/music/Helena.mp3";
import song4 from "../assets/music/svi_znaju_da_sam_sam.mp3";
import { SongList } from "./SongList";
import { AudioPlayer } from "./AudioPlayer";

export const MainArea = () => {
  const [imageClass, setImageClass] = useState("");
  const [index, setIndex] = useState<number>(0);

  let songs: Song[] = [
    { songFile: helena, image: boromir, name: "danas mi je rodendan" },
    { songFile: song2, image: boromir2, name: "Gud" },
    { songFile: song3, image: boromir3, name: "flutes" },
    { songFile: song4, image: boromir4, name: "svi znaju da sam sam" },
  ];

  console.log(songs[0]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          gap: "10px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img className={imageClass} src={songs[index].image}></img>
        <AudioPlayer
          songs={songs}
          index={index}
          setIndex={setIndex}
          setImageClass={setImageClass}
        />
        <SongList songs={songs} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
};
