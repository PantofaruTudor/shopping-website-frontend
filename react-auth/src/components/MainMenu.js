import React, { useState,useRef } from 'react';
import '../styles/main_menu(copy).css'; // Corrected CSS import path

export default function MainMenuHover() {

    const [activeDropdown, setActiveDropdown] = useState(null)
    const timeoutRef = useRef(null)

    const handleMouseEnter = (dropdownName) => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
        setActiveDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(()=>{
            setActiveDropdown(null)
        },100)
    };

    return (

        <div className='menu-placeholder'>
            <div className="main_menu">
                <ul className="main_menu_list">
                    <div className="main_menu_segments" id="left_main_menu">
                        <li><a href="/info"><img src="/MainMenu/information.svg" alt="Info" /></a></li>
                        <li>
                            <div className="search-container">
                                <input type="text" placeholder="Search..." className="search-input" id="search-input" />
                                <button className="search-button">
                                    <img src="/MainMenu/loupe.svg" alt="Search" />
                                </button>
                            </div>
                        </li>
                    </div>
                    <div className="main_menu_segments" id="center_main_menu">
                        <li><a href="/barbati" className="gen" id="barbati">Barbati</a></li>
                        <li><a href="/"><img src="/MainMenu/temp_logo.svg" alt="Logo" /></a></li>
                        <li><a href="/femei" className="gen" id="femei">Femei</a></li>
                    </div>
                    <div className="main_menu_segments" id="right_main_menu">
                        <li><a href="/cart"><img src="/MainMenu/market.svg" alt="Market" /></a></li>
                        <li><a href="/Wishlist"><img src="/MainMenu/heart.svg" alt="Heart" /></a></li>
                        <li><a href="/log-in"><img src="/MainMenu/user.svg" alt="User" /></a></li>
                    </div>
                </ul>
            </div>
            
            <div className="grid-container">
                <ul className="categorii">
                    <li
                        className="categorii noutati"
                        onMouseEnter={() => handleMouseEnter('noutati')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/noutati">Noutati</a>
                    </li>
                    <li
                        className="categorii imbracaminte"
                        onMouseEnter={() => handleMouseEnter('imbracaminte')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/imbracaminte">Imbracaminte</a>
                    </li>
                    <li
                        className="categorii incaltaminte"
                        onMouseEnter={() => handleMouseEnter('incaltaminte')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/incaltaminte">Incaltaminte</a>
                    </li>
                    <li
                        className="categorii accesorii"
                        onMouseEnter={() => handleMouseEnter('accesorii')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/accesorii">Accesorii</a>
                    </li>
                    <li
                        className="categorii sale"
                        onMouseEnter={() => handleMouseEnter('sale')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/sale">Sale</a>
                    </li>
                </ul>
                <div 
                    className={`dropdown_area ${activeDropdown ? 'show' : 'hide'}`}
                    onMouseEnter={()=>handleMouseEnter(activeDropdown)}
                    onMouseLeave={handleMouseLeave}
                >
                    {activeDropdown === 'noutati' && (
                        <div className='dropdown_info'>
                            <ul className="noutati_dropdown">
                                <li><a href="/">Subcategorie 1 ma</a></li>
                                <li><a href="/">Subcategorie 2</a></li>
                                <li><a href="/">Subcategorie 3 noutati</a></li>
                                <li><a href="/">Subcategorie 3 noutati</a></li>
                                <li><a href="/">Subcategorie 3 noutati</a></li>
                            </ul>
                        </div>
                    )}
                    {activeDropdown === 'imbracaminte' && (
                        <div className='dropdown_info'>
                            <ul className="imbracaminte_dropdown">
                                <li><a href="/">Subcategorie 1</a></li>
                                <li><a href="/">Subcategorie 2</a></li>
                                <li><a href="/">Subcategorie 3</a></li>
                            </ul>
                        </div>
                    )}
                    {activeDropdown === 'incaltaminte' && (
                        <div className='dropdown_info'>
                            <ul className="incaltaminte_dropdown">
                                <li><a href="/">Subcategorie 1</a></li>
                                <li><a href="/">Subcategorie 2</a></li>
                                <li><a href="/">Subcategorie 3</a></li>
                            </ul>
                        </div>
                    )}
                    {activeDropdown === 'accesorii' && (
                        <div className='dropdown_info'>
                            <ul className="accesorii_dropdown">
                                <li><a href="/">Subcategorie 1</a></li>
                                <li><a href="/">Subcategorie 2</a></li>
                                <li><a href="/">Subcategorie 3</a></li>
                            </ul>
                    </div>
                    )}
                    {activeDropdown === 'sale' && (
                        <div className='dropdown_info'>    
                            <ul className="sale_dropdown">
                                <li><a href="/">Subcategorie 1</a></li>
                                <li><a href="/">Subcategorie 2</a></li>
                                <li><a href="/">Subcategorie 3</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            
            
        </div>
    );
}