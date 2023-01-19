import { Song } from "../App";

export const SongList = ({
  songs,
  index,
  setIndex,
}: {
  songs: Song[];
  index: number;
  setIndex: any;
}) => {
  return (
    <div className="song-list-container">
      <div style={{ width: "100%" }}>
        <ol>
          {songs.map((song, key) => (
            <li
              onClick={() => setIndex(key)}
              key={key}
              className={
                key === index
                  ? "song-list-item song-list-item-active"
                  : "song-list-item"
              }
            >
              {song.name}
            </li>
          ))}
        </ol>
      </div>

      {/* <div
        style={{ display: "flex", flexDirection: "column", width: "50%" }}
      ></div> */}
    </div>
  );
};
