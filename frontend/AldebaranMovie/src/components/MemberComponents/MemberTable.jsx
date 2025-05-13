import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MemberTable({member, onEdit, onDelete}) {

    return (
        <div className="w-full overflow-x-auto rounded-lg">
            <table className="w-full table-auto border-collapse text-gray-200">
                <thead>
                <tr className="bg-gradient-to-r from-gray-700 to-gray-800 text-left">
                    <th className="px-6 py-4 rounded-tl-lg">ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Tag</th>
                    <th className="px-6 py-4 rounded-tr-lg">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {member.length > 0 ? (
                            member.map((memberData) => (
                                <tr key={memberData.memberID} className="border-b border-gray-700 hover:bg-gray-700 hover:bg-opacity-30 transition-all duration-200">
                                    <td className="px-6 py-4">{memberData.memberID}</td>
                                    <td className="px-6 py-4 font-medium">{memberData.memberName}</td>
                                    <td className="px-6 py-4">{memberData.memberEmail}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${memberData.memberType.toLowerCase() === 'premium' ? 'bg-yellow-500 bg-opacity-30 text-yellow-300' : 'bg-blue-500 bg-opacity-30 text-blue-300'}`}>
                                            {memberData.memberType.toLowerCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-600 px-3 py-1 rounded-lg text-xs">
                                            {memberData.memberTag}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button
                                            onClick={() => onEdit(memberData.memberID)}
                                            className="bg-gradient-to-r from-green-500 to-green-700 rounded-lg px-3 py-2 text-white cursor-pointer hover:from-green-600 hover:to-green-800 transition-all duration-200 flex items-center gap-1 text-sm"
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                                <span>Edit</span>
                                            </button>
                                            <button
                                            onClick={() => onDelete(memberData.memberID)}
                                            className="bg-gradient-to-r from-red-500 to-red-700 rounded-lg px-3 py-2 text-white cursor-pointer hover:from-red-600 hover:to-red-800 transition-all duration-200 flex items-center gap-1 text-sm"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center px-6 py-10 text-gray-400">
                                <div className="flex flex-col items-center">
                                    <svg className="w-12 h-12 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-lg font-medium">No members found</p>
                                    <p className="text-sm">Try adjusting your search or add new members</p>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}