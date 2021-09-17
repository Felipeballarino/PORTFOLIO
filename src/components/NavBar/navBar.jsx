import React from "react";
import style from './navBar.module.css'

const NavBar = ({isScrolling}) =>{

    const scrollTop =()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }

    return(
        <nav className={(isScrolling < 20) ? style.navBar : style.scrolling}>
            {/* {console.log(isScrolling)} */}
            <div className={style.logo} onClick={scrollTop}>
                Felipe Ballarino
            </div>

        </nav>

    )
}
export default NavBar