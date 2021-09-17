import React,{useState, useEffect} from "react";
import './App.css'
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Header from "./components/Header/header";
import Info from "./components/Info/info";
import NavBar from "./components/NavBar/navBar";
import Proyects from "./components/proyects/proyects";

const App = () =>{

    const [scroll, setScroll] = useState(0)

    const handlerScroll = () =>{
        const position = window.pageYOffset;
        setScroll(position)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handlerScroll);
    },[scroll])

    return (
        <div className='App'>
            <NavBar isScrolling={scroll} />
            <Header />
            <About />
            <Proyects />
            <Info />
            <Contact />
        </div>
    )
}

export default App;