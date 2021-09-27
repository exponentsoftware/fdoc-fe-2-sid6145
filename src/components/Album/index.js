import React from 'react'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function Album({id, image, title, artist, deleteAlbum}) {



    return (
    <>
     <div className="album-container">
         
         <div className="img-container">
            <img src={image} alt="cover image"/>
            <button className="play-btn"><i class="bi bi-play-fill"></i></button>
            <button onClick={() => deleteAlbum(id)} className="del-btn"><i class="bi bi-trash-fill"></i></button>
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
