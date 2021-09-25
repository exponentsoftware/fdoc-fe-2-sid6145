import React from 'react'
import './style.css'


function Album({id, image, title, artist, deleteAlbum}) {




    return (
    <>
     <div className="album-container">
         
         <div className="img-container">
            <img src={image} />
            <button className="play-btn">+</button>
            <button onClick={() => deleteAlbum(id)} className="del-btn">del</button>
         </div>
         <div className="text-container">
             <h2>{title}</h2>
             <p>{artist}</p>
         </div>
         
     </div>
    </>
    )
}

export default Album
