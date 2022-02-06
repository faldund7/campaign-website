import React, { useState, useEffect } from 'react';
import '../css/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        // It is a good practice to clean-up, but not necessary
        return (
            () => window.removeEventListener('scroll', transitionNavBar)
        );
    }, [])

    return ( 
            <div className={`nav ${show && 'nav__black'}`}>
                <div className='nav__contents'>
                    <img className='nav__logo'
                        src='https://github.com/faldund7/campaign-website/blob/master/src/images/logo(BL%20only).png?raw=true' 
                        alt='Netlfix Logo'
                    />

                    <img className='nav__avatar'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                        alt='Netlfix Avatar'
                    />
                </div>
                
            </div>
        );
}

export default Nav;