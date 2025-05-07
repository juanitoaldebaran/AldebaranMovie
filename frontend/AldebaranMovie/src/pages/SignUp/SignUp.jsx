import ProjectLogo from "../../components/ProjectLogo/ProjectLogo";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {

    const [signUpData, setSignUpData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const [confirmData, setConfirmData] = useState({
        confirmEmail: "",
        confirmPassword: "",
    });


    return (
        <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
            <div className="absolute top-4 left-4">
                <ProjectLogo />
            </div>
            <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-2xl w-96 mt-8">
                <div className="text-white text-2xl text-center mb-5 font-bold">
                    <h3>Sign Up</h3>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="fullName"></label>
                        <input 
                        id="fullName"
                        name="fullName"
                        type="text" 
                        value={signUpData.fullName}
                        placeholder="Enter full name"
                        className="w-full p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input 
                        id="email"
                        name="email"
                        type="text" 
                        value={signUpData.email}
                        placeholder="Enter email"
                        className="w-full p-3 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmEmail"></label>
                        <input 
                        id="confirmEmail"
                        name="confirmEmail"
                        type="text" 
                        value={confirmData.confirmEmail}
                        placeholder="Confirm email"
                        className="w-full p-3 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input 
                        id="password"
                        name="password"
                        type="password"
                        value={signUpData.password}
                        placeholder="Enter password"
                        className="w-full p-3 rounded-lg text-black  bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword"></label>
                        <input 
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={confirmData.confirmPassword}
                        placeholder="Confirm password"
                        className="w-full p-3 rounded-lg text-black  bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-red-600 text-white rounded-md p-3 font-bold hover:bg-red-700 transition duration-200">
                            Log In
                        </button>
                    </div>
                    <div>
                        <p className="text-white">Already have an account? <Link to='/login' className="text-blue-500 underline">Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}