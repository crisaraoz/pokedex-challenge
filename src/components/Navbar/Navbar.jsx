import style from '../Navbar/Navbar.module.css'
import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar';
import Logo from '/images/palanding.png';
import { GithubIcon } from "../../icons/GithubIcon";
import ExternalLink from "../../components/ExternalLink/ExternalLink";

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

        <Link to='/home'>
                <span className={style.landinglink}>
                    <img id="logoPoke" src={Logo} width="140" alt="landing" />
                </span>
        </Link>
        
        <SearchBar searchTerm ={searchTerm} handleSearch={handleSearch} ></SearchBar>

        <ExternalLink href="https://github.com/crisaraoz">
          <GithubIcon />
        </ExternalLink>

    </nav>
    </>
    
  )

}

export default Navbar