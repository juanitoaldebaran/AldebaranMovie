import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Review() {


    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-white font-bold mt-4 text-2xl border-b-2 pb-2 border-red-600 w-50 text-center">
                    Review Movies
                </h2>
                <p className="text-white mt-5 text-lg">
                    Start review movies here!
                </p>
                <Link to={'/home'} className="px-2 py-2 text-lg text-white bg-red-500 mt-4 rounded hover:bg-red-800 transition duration-200">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faCircleArrowRight} />
                        Review Movies
                </Link>
            </div>
        </div>
    )
}