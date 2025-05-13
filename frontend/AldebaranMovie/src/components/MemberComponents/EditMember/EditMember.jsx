import { useState } from "react";

export default function EditMember({member, onSave, onClose}) {
    const [editData, setIsEditData] = useState({
        memberID: member?.memberID || 0,
        memberName: member?.memberName || "",
        memberEmail: member?.memberEmail || "",
        memberType: member?.memberType || "",
        memberTag: member?.memberTag || ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setIsEditData((prev) => ({
        ...prev,
        [name]: value,
       }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            onSave(editData);
        } catch (error) {
            throw new Error("Failed to submit edit member data");
        }
    }
    
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 w-full max-w-md rounded-xl shadow-2xl border border-gray-700 animate-fadeIn">
                <h2 className="text-white font-bold text-center text-2xl mb-6 border-b border-red-500 pb-2">Edit Member</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="group">
                        <label htmlFor="memberName" className="block text-gray-300 mb-1 font-medium">Name</label>
                        <input
                         id="memberName"
                        name="memberName"
                        type="text" 
                        value={editData.memberName}
                        onChange={handleChange}
                        placeholder="Enter member name"
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="memberEmail" className="block text-gray-300 mb-1 font-medium">Email</label>
                        <input
                         id="memberEmail"
                        name="memberEmail"
                        type="email" 
                        value={editData.memberEmail}
                        onChange={handleChange}
                        placeholder="Enter member email"
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="memberType" className="block text-gray-300 mb-1 font-medium">Type</label>
                        <select
                         id="memberType"
                        name="memberType"
                        value={editData.memberType}
                        onChange={handleChange}
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none transition-all duration-300"
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
                        value={editData.memberTag}
                        onChange={handleChange}
                        placeholder="Enter member tag"
                        className="text-white bg-gray-700 border border-gray-600 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <div className="flex justify-between pt-4">
                        <button type="submit" className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white rounded-lg w-30 cursor-pointer hover:from-green-600 hover:to-green-800 transition-all duration-300 font-medium flex-1 mr-2">
                            Save Changes
                        </button>
                        <button onClick={onClose} type="button" className="bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg text-white p-3 cursor-pointer hover:from-gray-600 hover:to-gray-800 transition-all duration-300 font-medium flex-1 ml-2">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}