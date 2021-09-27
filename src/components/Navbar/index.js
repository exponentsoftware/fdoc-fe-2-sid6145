import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h3>Spotify</h3>
            </div>
            
            <ul>
                <Link className="nav-item" to="/addalbums">
                    <li>Add ALbum</li>
                </Link>
                <Link className="nav-item" to="/albums">
                    <li>Albums</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
