import { useState } from "react";
import ProjectLogo from "../../components/ProjectLogo/ProjectLogo";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
            <div className="absolute top-4 left-4">
                <ProjectLogo />
            </div>
            <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-2xl w-96 mt-8">
                <div className="text-white text-2xl text-center mb-5 font-bold">
                    <h3>Log In</h3>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email"></label>
                        <input 
                        id="email"
                        name="email"
                        type="text" 
                        value={loginData.email} 
                        placeholder="Enter email"
                        className="w-full p-3 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input 
                        id="password"
                        name="password"
                        type="password"
                        value={loginData.password}
                        placeholder="Enter password"
                        className="w-full p-3 rounded-lg text-black  bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-red-600 text-white rounded-md p-3 font-bold hover:bg-red-700 transition duration-200">
                            Log In
                        </button>
                    </div>
                    <div>
                        <p className="text-white">Create an account? <Link to='/signup' className="text-blue-500 underline">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}