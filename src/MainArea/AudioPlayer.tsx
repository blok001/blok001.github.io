import { PauseCircleOutline } from "@mui/icons-material";
import { IconButton, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Song } from "../App";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PauseIcon from "@mui/icons-material/Pause";

interface AudioPlayerProps {
  songs: Song[];
  index: number;
  setIndex: any;
  setImageClass: any;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  songs,
  index,
  setIndex,
  setImageClass,
}) => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  let maxDuration = 10;

  if (currentTime === maxDuration) {
    setIndex((index + 1) % songs.length);
  }

  useEffect(() => {
    console.log("index use");
    if (audio && userInteracted) {
      audio.play();
    }
  }, [index]);

  useEffect(() => {
    console.log("audio use");
    const interval = setInterval(() => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [audio]);

  const handlePlayPause = () => {
    setUserInteracted(true);
    setImageClass("hoverImage");
    setTimeout(() => {
      setImageClass("");
    }, 2000);
    if (audio) {
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  const handleNext = () => {
    if (audio) {
      setPlaying(true);
      setIndex((index + 1) % songs.length);
      setPlaying(false);
    }
  };

  //   const handleKeyPress = () => {
  //     console.log("huh");
  //     handlePlayPause();
  //   };

  const handlePrevious = () => {
    if (audio) {
      audio.pause();
      setIndex((index + songs.length - 1) % songs.length);
      setPlaying(false);
    }
  };

  const handleSliderChange = (event: any, newValue: any) => {
    setCurrentTime(newValue);
    if (audio) {
      audio.currentTime = newValue;
    }
  };

  if (audio) {
    maxDuration = audio.duration;
  }

  return (
    <div>
      <audio
        preload="metadata"
        style={{ fill: "grey" }}
        src={songs[index].songFile}
        ref={(element) => {
          setAudio(element);
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handlePlayPause}>
          {playing ? <PauseCircleOutline /> : <PlayArrowIcon />}
        </IconButton>
        <div style={{ width: "200px", marginLeft: "8px", display: "flex" }}>
          <Slider
            sx={{ color: "black" }}
            value={currentTime}
            onChange={handleSliderChange}
            defaultValue={0}
            max={maxDuration}
          />
        </div>
      </div>
    </div>
  );
};
