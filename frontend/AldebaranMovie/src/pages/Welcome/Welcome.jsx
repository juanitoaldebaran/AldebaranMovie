import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faFilm } from "@fortawesome/free-solid-svg-icons";


export default function Welcome() {

    const projectName = "AldebaranMovie";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [newProjectName, setNewProjectName] = useState("");
    
    useEffect(() => {
        const timeInterval = isTyping ? 250 : 150;
        let timeOut;

        if (isTyping && currentIndex < projectName.length) {
            timeOut = setTimeout(() => {
                setNewProjectName((prev) => (prev + projectName.charAt(currentIndex)));
                setCurrentIndex((prev) => (prev + 1));
            }, timeInterval);
        } else if (!isTyping && currentIndex > 0) {
            timeOut = setTimeout(() => {
                setNewProjectName((prev) => (prev.slice(0, -1)));
                setCurrentIndex((prev) => (prev -1));
            }, timeInterval)
        } else if (currentIndex === projectName.length) {
            setIsTyping(false);
        } else if (currentIndex === 0) {
            setIsTyping(true);
        }
        
        return () => clearTimeout(timeOut);
    }, [currentIndex, isTyping, newProjectName]);

    return (
        <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
            <div className="mb-8 ">
                <FontAwesomeIcon className="text-white-500" size="3x" icon={faFilm}/>
            </div>
            <div className="text-3xl md:text-4xl font-bold">
                <h1>WELCOME TO</h1>
            </div>
            <div className="text-3xl md:text-4xl font-800 typewritter mb-8 mt-4">
                <h3>{newProjectName}<span className="blinking-cursor">|</span> </h3> 
            </div>
            <div className="text-xl italic">
                <p>Your Favorite Movie Platform</p>
            </div>
            <div className="mt-8">
                <Link to='/' 
                className="px-6 py-2 text-lg text-white bg-red-500 rounded hover:bg-red-800 transition duration-200">
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