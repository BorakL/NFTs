import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { Link } from "react-router-dom";

import './Navbar.css'


export default function Navbar({theme,setTheme}){
    return( 
        <div className="navbar">
            <div className="container">
                <div className="navbar_logo"><Link to='/'><img src='/icons/solsea.svg' alt="logo" title="SolSea" /></Link></div>
                <div className="navbar_menu">
                    <ul>
                        <li>Explore</li>
                        <li>Create</li>
                        <li>Calendar</li>
                        <li>FAQ</li>
                        <li>Connect Wallet</li>    
                    </ul>
                    <div className="navbar_icon_menu"><GiHamburgerMenu/></div>
                    <div className="navbar_theme_toggle" onClick={()=>setTheme(prevTheme=>!prevTheme)}>
                        {theme ? <FaMoon/> : <FaSun/>}
                    </div>
                </div>
                                    
            </div>
        </div>
    )
}