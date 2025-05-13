import { useState } from "react";

export default function SignForMember({onCreate, onCancel}) {
    
    const [newMember, setNewMember] = useState({
        memberID: 0,
        memberName: "",
        memberEmail: "",
        memberType: "",
        memberTag: "",
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewMember((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            onCreate(newMember);
        } catch (error) {
            throw new Error("Failed to create new member");
        }
    }
    
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 w-full max-w-md rounded-xl shadow-2xl border border-gray-700 animate-fadeIn">
                <h2 className="text-white font-bold text-center text-2xl mb-6 border-b border-blue-500 pb-2">New Member Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="group">
                        <label htmlFor="memberName" className="block text-gray-300 mb-1 font-medium">Name</label>
                        <input
                         id="memberName"
                        name="memberName"
                        type="text" 
                        value={newMember.memberName}
                        onChange={handleChange}
                        placeholder="Enter member name"
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-300"
                        required
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="memberEmail" className="block text-gray-300 mb-1 font-medium">Email</label>
                        <input
                         id="memberEmail"
                        name="memberEmail"
                        type="email" 
                        value={newMember.memberEmail}
                        onChange={handleChange}
                        placeholder="Enter member email"
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-300"
                        required
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="memberType" className="block text-gray-300 mb-1 font-medium">Type</label>
                        <select
                         id="memberType"
                        name="memberType"
                        value={newMember.memberType}
                        onChange={handleChange}
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-300"
                        required
                        >
                            <option value="">Select member type</option>
                            <option value="REGULAR">REGULAR</option>
                            <option value="PREMIUM">PREMIUM</option>
                        </select>
                    </div>
                    <div className="group">
                        <label htmlFor="memberTag" className="block text-gray-300 mb-1 font-medium">Tag</label>
                        <input
                         id="memberTag"
                        name="memberTag"
                        type="text" 
                        value={newMember.memberTag}
                        onChange={handleChange}
                        placeholder="Enter member tag"
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-300"
                        required
                        />
                    </div>
                    <div className="flex justify-between pt-4">
                        <button type="submit" className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 text-white rounded-lg cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-all duration-300 font-medium flex-1 mr-2">
                            Create Member
                        </button>
                        <button onClick={onCancel} type="button" className="bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg text-white p-3 cursor-pointer hover:from-gray-600 hover:to-gray-800 transition-all duration-300 font-medium flex-1 ml-2">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}