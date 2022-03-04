import React from 'react'
import 'D:/github/OnlineBooks/src/css/Header.css';
import { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <div>

             <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Commerce">Commerce</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Arts">Arts</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            School Books
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li> <Link className="dropdown-item" to="/10thstandard">10th Standard</Link></li>
            <li><Link className="dropdown-item" to="/Nineth">9th Standard</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
</nav>
        </div>
    )
}
