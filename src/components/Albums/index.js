import React from 'react'
import Album from '../Album'
import './style.css'

function Albums({albumList, handleDeleteAlbum}) {
    console.log(albumList)


    const deleteAlbum = (id) => {
        handleDeleteAlbum(id)
    }
    return (
        <>
        <h1>Albums</h1>
        <div className="albums-container">
           
            {
                albumList.map((item) => (
                    <Album deleteAlbum={deleteAlbum} key={item.id} id={item.id} image={item.image} title={item.title} artist={item.artist}/>
                ))
            }
        
        </div>
    </>
    )
}

export default Albums
