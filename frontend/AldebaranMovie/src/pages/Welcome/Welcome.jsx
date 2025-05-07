import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faFilm } from "@fortawesome/free-solid-svg-icons";


export default function Welcome() {

    const projectDesc = "Your Favourite Movie Platform";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [newProjectDesc, setNewProjectDesc] = useState("");
    
    useEffect(() => {
        const timeInterval = isTyping ? 250 : 180;
        let timeOut;

        if (isTyping && currentIndex < projectDesc.length) {
            timeOut = setTimeout(() => {
                setNewProjectDesc((prev) => (prev + projectDesc.charAt(currentIndex)));
                setCurrentIndex((prev) => (prev + 1));
            }, timeInterval);
        } else if (!isTyping && currentIndex > 0) {
            timeOut = setTimeout(() => {
                setNewProjectDesc((prev) => (prev.slice(0, -1)));
                setCurrentIndex((prev) => (prev -1));
            }, timeInterval)
        } else if (currentIndex === projectDesc.length) {
            setIsTyping(false);
        } else if (currentIndex === 0) {
            setIsTyping(true);
        }
        
        return () => clearTimeout(timeOut);
    }, [currentIndex, isTyping, newProjectDesc]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-black text-white text-center">
            <div className="mb-8 ">
                <FontAwesomeIcon className="black-500" size="3x" icon={faFilm}/>
            </div>
            <div className="text-6xl md:text-7xl text-red-500 font-bold typewritter mb-8 mt-4">
                <h3>AldebaranMovie</h3> 
            </div>
            <div className="text-xl italic">
                <p>{newProjectDesc} <span className="blinking-cursor">|</span> </p>
            </div>
            <div className="mt-8">
                <Link to='/login' 
                className="px-8 py-4 text-lg text-white bg-red-500 rounded hover:bg-red-800 transition duration-200">
                    <FontAwesomeIcon className="mr-2" icon={faCirclePlay} />                   
                    Get Started
                </Link>
            </div>
            <div className="mt-8 text-sm text-white-100">
                © 2025 AldebaranMovie. All rights reserved.
            </div>
        </div>
    )
}