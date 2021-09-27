import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddAlbums from './components/AddAlbums';
import Albums from './components/Albums';
import {BrowserRouter, Route} from 'react-router-dom'
import { useState } from 'react';
import  Navbar  from './components/Navbar';

function App() {
  const [albums, setAlbums] = useState([
      {
        id: 328909,
        title: "Evolve",
        artist: "Imagine Dragons",
        image: "https://firebasestorage.googleapis.com/v0/b/g-10-cba9f.appspot.com/o/images%2Fcover1.png?alt=media&token=7e590b78-3570-44e7-9857-ea72cfb83cb3"
      },
      {
        id: 336670,
        title: "Origin",
        artist: "Imagine Dragons",
        image: "https://firebasestorage.googleapis.com/v0/b/g-10-cba9f.appspot.com/o/images%2Fcover2.png?alt=media&token=b1a251f2-08e7-4deb-a5b5-1b161b1546ea"
      }
  ])

  const [foundAlbums, setFoundAlbums] = useState([])

  const handleAddAlbum = (newAlbum) => {
    setAlbums([...albums, {
      id: newAlbum.id,
      title: newAlbum.title,
      artist: newAlbum.artist,
      image: newAlbum.image
    }])    
    
  }

  const handleDeleteAlbum = (id) => {
    let newArray = albums.filter((item) => item.id !== id)
    setAlbums(newArray)
  }

  const handleSearchAlbum = (text) => {

    const filteredBasedOnTitle = albums.filter((item) => item.title.toLowerCase() == text.toLowerCase())
    const filteredBasedOnArtist = albums.filter((item) => item.artist.toLocaleLowerCase() == text.toLowerCase())
    if(filteredBasedOnTitle.length > 0){
      setFoundAlbums(filteredBasedOnTitle)
    }else if(filteredBasedOnArtist.length > 0) {
      setFoundAlbums(filteredBasedOnArtist)
    }else{
      setFoundAlbums("")
    }
    
   
  }

  console.log(foundAlbums)

  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar />
        <Route path="/addalbums" >
          <AddAlbums handleAddAlbum={handleAddAlbum}/>
        </Route>
        
        <Route path="/albums">
        < Albums foundAlbums={foundAlbums} handleSearchAlbum={handleSearchAlbum} handleDeleteAlbum={handleDeleteAlbum} albumList={albums}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
