'use client'
import './Navbar.css'
import {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image';

export default function Navbar () {
    const [dropdown, setDropdown] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [showMobile, setShowMobile] = useState(false)

    useEffect (()=> {
        const handleResize = () => {
            setIsMobile(window.innerWidth<=900)
        }
        window.addEventListener ('resize', handleResize)

        handleResize()

        return ()=> window.removeEventListener ('resize', handleResize)
    },[])

    const toggleHamburger =()=> {
        setDropdown(false)
        setShowMobile(!showMobile)
    }
    const handleDropdownClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        setDropdown(!dropdown);
      };
    

    return (
        <div className="navbar">
          {typeof window !== 'undefined' && isMobile && (
            <div className={`hamburger-icon ${showMobile && !dropdown ? 'open' : ''}`} onClick={toggleHamburger}>
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
          )}
          {(showMobile || !isMobile || dropdown) && (
            <ul className={`nav ${dropdown ? 'open' : ''}`}>
            
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>Contact Us</li>
              <li onClick={handleDropdownClick} className={`dropdown-item ${dropdown ? 'open' : ''}`}>
                Our Dyes
              </li>
              {dropdown && (
                <ul>
                  <li>
                    <Link href="/">Accessories</Link>
                  </li>
                  <li>
                    <Link href="/sunrisesuite">Unisex</Link>
                  </li>
                  <li>
                    <Link href="/cottageone">Women</Link>
                  </li>
                  <li>
                    <Link href="/cottagetwo">Dye Kits</Link>
                  </li>
                 
                </ul>
              )}
              <li>Policies</li>
     
              <li>
                    <Link href="/cottagetwo">
<Image
   alt="logo"
   src="/cart.png"
   width={75}
   height={100}
/>


                    </Link>
                  </li>
            </ul>
          )}
        </div>
      );
    }