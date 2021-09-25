import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddAlbums from './components/AddAlbums';
import Albums from './components/Albums';
import { useState } from 'react';

function App() {
  const [albums, setAlbums] = useState([])

  

  const handleAddAlbum = (newAlbum) => {
    setAlbums([...albums, {
      id: newAlbum.id,
      title: newAlbum.title,
      artist: newAlbum.artist,
      image: newAlbum.image
    }])    
  }

  const handleDeleteAlbum = (id) => {
    let newArray = albums.filter((item) => item.id != id)
    setAlbums(newArray)
  }

  console.log(albums)
  return (
    <div className="App">
        <AddAlbums handleAddAlbum={handleAddAlbum}/>
        <Albums handleDeleteAlbum={handleDeleteAlbum} albumList={albums}/>
    </div>
  );
}

export default App;
