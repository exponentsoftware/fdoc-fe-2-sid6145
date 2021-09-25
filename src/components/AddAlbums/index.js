import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { storage } from "../../firebase-config";
import "./style.css";

function AddAlbums({ handleAddAlbum }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [cover, setCover] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${cover.name}`).put(cover);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(cover.name)
          .getDownloadURL()
          .then((url) => {
            var newAlbum = {
              id: Math.floor(100000 + Math.random() * 900000),
              title: title,
              artist: artist,
              image: url,
            };

            handleAddAlbum(newAlbum);

            alert("success")
            setTitle("");
            setArtist("");
            setCover(null);
          });
      }
    );
  };

  return (
    <div className="addAlbum-container">
      <Form className="form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Album Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="email"
            placeholder="Album Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            type="email"
            placeholder="Artist"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Album Cover</Form.Label>
          <Form.Control
            onChange={(e) => setCover(e.target.files[0])}
            type="file"
          />
        </Form.Group>
        <button className="add-btn" onClick={handleSubmit} variant="primary" type="submit">
          Add Album
        </button>
      </Form>
    </div>
  );
}

export default AddAlbums;
