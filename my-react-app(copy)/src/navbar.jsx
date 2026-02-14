import './navbar.css'
import logo from "./assets/mrParker.png"
import { useState, useEffect } from 'react'

function Navbar(){

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return(
        <>
        <div className={scrolled? "navbar active" : "navbar"}>
            <img src={logo} alt="logo" />
            <ul className='navbar-link'>
                <li><a href="https://www.ssgopalganj.in/online/E-Books/CLASS%20VIII/Life%20of%20Pi%20by%20Yann%20Martel.pdf">Book </a> </li>
                <li><a href="https://en.wikipedia.org/wiki/Life_of_Pi_(film)">Film </a> </li>
                <li><a href="https://youtu.be/q2WgseSrtls">Trailer</a></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar