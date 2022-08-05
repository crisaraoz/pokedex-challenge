import style from '../Navbar/Navbar.module.css'
import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar';
import Logo from '/images/palanding.png';
import { GithubIcon } from "../../icons/GithubIcon";
import ExternalLink from "../../components/ExternalLink/ExternalLink";
import pokedex from '/images/pokedex.png';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Navbar = ({ searchTerm, handleSearch}) => {

  return (
    <>
    <nav className={style.nav}>
      <a>
      <Link to='/home'>
        <span className={style.nav}>
          <img id="logoPoke" src={Logo} width="130px" alt="landing" />
        </span>
      </Link>
      </a>

      <ul>
      <SearchBar searchTerm ={searchTerm} handleSearch={handleSearch} ></SearchBar>
      </ul>

      <ul style={{float: 'right'}}>
      <li>
      <Link to='/game' style={{textDecoration: 'none'}} className={style.game}>
          <button className={style.reload}>
            <img src={pokedex} alt="Who's that Pokemon" width='30px'/> Play!
          </button>
      </Link>
      </li>
     
      </ul>

    </nav>
    </>
    
  )

}

export default Navbar