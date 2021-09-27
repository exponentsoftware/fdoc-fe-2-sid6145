import React, { useState } from "react";
import Album from "../Album";
import "./style.css";

function Albums({
  albumList,
  handleDeleteAlbum,
  handleSearchAlbum,
  foundAlbums,
}) {
  const [textInput, setTextInput] = useState("");

  const deleteAlbum = (id) => {
    handleDeleteAlbum(id);
  };

  const search = (text) => {
    handleSearchAlbum(text);
  };

  return (
    <>
      <h1>Albums</h1>

      <div className="search-container">
        <input
          className="search-input"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          placeholder="enter album or artist name"
        />
        <button className="search-btn" onClick={() => search(textInput)}>
          Search
        </button>
      </div>

      {foundAlbums ? (
        <div className="searched-albums">
          {foundAlbums.map((item) => (
            <Album
              deleteAlbum={deleteAlbum}      
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              artist={item.artist}
            />
          ))}
        </div>
      ) : (
        ""
      )}

      <div className="albums-container">
        {albumList.map((item) => (
          <Album
            deleteAlbum={deleteAlbum}
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            artist={item.artist}
          />
        ))}
      </div>
    </>
  );
}

export default Albums;
