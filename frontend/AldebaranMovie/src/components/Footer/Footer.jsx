import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="w-ful h-100 bg-gray-900 p-12">
            <div className="flex justify-center items-center gap-40">
                <div className="flex flex-col space-y-4 justify-center">
                    <h1 className="font-bold text-4xl text-white  mb-6">AldebaranMovie</h1>
                    <div className="flex space-x-4">
                        <FontAwesomeIcon 
                        className="text-red-500 text-lg"
                        icon={faLocationDot} 
                        />
                        <p className="text-white">Bukit Alvarez, L1 7ES, London, United Kingdom</p>
                    </div>
                    <div className="flex space-x-4">
                        <FontAwesomeIcon 
                        className="text-red-500 text-lg"
                        icon={faEnvelope} 
                        />
                        <p className="text-white">aldebaranmovie@mail.com</p>
                    </div>
                    <div className="flex space-x-4">
                        <FontAwesomeIcon 
                        className="text-red-500 text-lg"
                        icon={faPhone} 
                        />
                        <p className="text-white">+2312421723</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-red-500 text-xl font-bold">Company</h2>
                    <p className="text-white">Movie App</p>
                    <p className="text-white">Membership</p>
                    <p className="text-white">Solutions</p>
                    <p className="text-white">Services</p>
                    <p className="text-white">Feature</p>
                    <p className="text-white">Products</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-red-500 text-xl font-bold">Quick Link</h2>
                    <Link className="text-white"  to={'/'}>Home</Link>
                    <Link className="text-white" to={'/about'}>About</Link>
                    <Link className="text-white" to={'/favourites'}>Favourites</Link>
                    <Link className="text-white" to={'/watchlist'}>Watchlist</Link>
                    <Link className="text-white" to={'/services'}>Services</Link>
                    <Link className="text-white" to={'/review'}>Review</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <FontAwesomeIcon 
                    className="text-white text-2xl cursor-pointer duration-300 hover:text-red-500"
                    icon={faInstagram} />
                    <FontAwesomeIcon 
                     className="text-white text-2xl cursor-pointer duration-300 hover:text-red-500"
                    icon={faFacebook} />
                    <FontAwesomeIcon 
                     className="text-white text-2xl cursor-pointer duration-300 hover:text-red-500"
                    icon={faLinkedin} />
                    <FontAwesomeIcon 
                     className="text-white text-2xl cursor-pointer duration-300 hover:text-red-500"
                    icon={faTwitter} />
                    <FontAwesomeIcon 
                     className="text-white text-2xl cursor-pointer duration-300 hover:text-red-500"
                    icon={faYoutube} />
                </div>
            </div> 
            <div className="p-10 ml-24 space-x-4">
                <label htmlFor="userEmail"></label>
                <input id="userEmail" name="userEmail" type="text" className="text-black rounded-lg p-2 w-100 bg-white focus:ring-2 focus:outline-red-500" placeholder="Enter email" />
                <button className="bg-red-600 text-white rounded-lg h-10 w-24 transition hover:bg-red-700">Submit</button>
            </div>
        </div>
    )
}