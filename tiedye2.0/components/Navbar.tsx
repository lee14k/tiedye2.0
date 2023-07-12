'use client'
import './Navbar.css'
import {useState, useEffect} from 'react';
import Link from 'next/link'

function Navbar () {
    const [dropdown, setDropdown] = useState(false)
    const [mobile, setIsMobile] = useState(false)
    const [showMobile, setShowMobile] = useState(false)

    useEffect (()=> {
        const handleResize = () => {
            
        }
    })
}