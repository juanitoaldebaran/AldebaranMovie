import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import MemberTable from "../../components/MemberComponents/MemberTable";
import EditMember from "../../components/MemberComponents/EditMember/EditMember";
import SignForMember from "../../components/MemberComponents/SignForMember/SignForMember";
import memberServiceAPI from "../../service/memberService/memberService";

export default function Member() {
    
    const [searchMember, setSearchMember] = useState("");
    const [memberValue, setMemberValue] = useState([]);
    const [filterMember, setFilterMember] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isEditMember, setIsEditMember] = useState(false);
    const [isAddMember, setIsAddMember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const getAllMembers = async () => {
            try {
                setIsLoading(true);
                const getAll = await memberServiceAPI.getAllMembers();
                setMemberValue(getAll);
                setFilterMember(getAll);
            } catch (error) {
                throw new Error("Failed");
            } finally {
                setIsLoading(false);
            }
        }

        getAllMembers();
    }, []);

    const handleSearch = () => {
        try {
            if (searchMember.trim()) {
              const newSearchMember = memberValue.filter((member) => (
                member.memberEmail.toLowerCase().includes(searchMember.toLowerCase()) || member.memberName.toLowerCase().includes(searchMember.toLowerCase()) || member.memberType.toLowerCase().includes(searchMember.toLowerCase()) || member.memberTag.toLowerCase().includes(searchMember.toLowerCase())
              ));
              setFilterMember((prev) => prev.length > 0 ? newSearchMember : []);
            } else {
                alert("Please enter a value!" + searchMember);
            }
        } catch (error) {
            throw new Error("Failed to search for member");
        }
    }

    const handleEdit = (memberID) => {
        setIsEditMember(true);
        const editMember = memberValue.find((member) => member.memberID === memberID);
        setSelectedMember(editMember);
    }

    const handleDelete = async (memberID) => {
        try {
        if (window.confirm("Are you sure want to delete this member?")) {
            setIsLoading(true);
                const deleteMember = await memberServiceAPI.deleteMember(memberID);
                setFilterMember(deleteMember);
                setMemberValue(deleteMember);
                alert("Member successfully deleted!");
            } 
        } catch (error) {
            throw new Error("Failed to delete member by id");
        } finally {
            setIsLoading(false);
        }
    }

    const handleSave = async (editMember) => {
        try {
            const newUpdateProduct = await memberServiceAPI.updateMember(editMember.memberID, editMember);
            const updatedMember = memberValue.map((member) => (
                member.memberID === newUpdateProduct.memberID ? editMember : member
            ))
            alert("Member successfully updated!");
            setFilterMember(updatedMember);
            setMemberValue(updatedMember);
            setIsEditMember(false);
        } catch (error) {
            throw new Error("Failed to update member");
        } finally {
            setIsLoading(false);
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
        setSearchMember("");
    }
    
    const handleAdd = async (newMember) => {
        try {
            setIsLoading(true);
            const createdMember = await memberServiceAPI.createMember(newMember);
            const addMember = [...memberValue, createdMember];
            alert("Member successfully added!");
            setFilterMember(addMember);
            setMemberValue(addMember);
            setIsAddMember(false);
        } catch (error) {
            console.error("Failed to create new member", error);
            alert("Failed to create new member");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2 border-b border-red-500 pb-2 inline-block">Member Management</h1>
                    <p className="text-gray-400">Manage your Aldebaran Movie members</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <form className="flex w-full md:w-auto gap-2" onSubmit={handleSubmit}>
                        <div className="relative w-full md:w-80">
                            <input
                                value={searchMember}
                                onChange={(e) => setSearchMember(e.target.value)}
                                className="w-full text-gray-700 bg-gray-100 rounded-lg p-3 pl-10 border-2 border-transparent focus:border-red-500 focus:ring-0 focus:outline-none transition-all duration-300"
                                type="text" 
                                placeholder="Search member by name, email, type or tag"
                            />
                            <FontAwesomeIcon
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                icon={faMagnifyingGlass}
                            />
                        </div>
                        <button
                            type="submit"
                            className="shadow-lg cursor-pointer px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-all duration-300"
                        >
                            Search
                        </button> 
                    </form>               
                    <div>
                        <button 
                            onClick={() => setIsAddMember(true)}
                            className="text-white bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg rounded-lg px-5 py-3 font-medium transition duration-300 hover:from-blue-700 hover:to-blue-900 hover:shadow-xl"
                        >
                            Sign for Member
                        </button>
                    </div>       
                </div>  
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                    <MemberTable member={filterMember} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
                
                {isEditMember && (
                    <EditMember member={selectedMember} onSave={handleSave} onClose={() => setIsEditMember(false)}/>
                )}
                {isAddMember && (
                    <SignForMember onCreate={handleAdd} onCancel={() => setIsAddMember(false)}/>
                )}
            </div>
        </div>
    )
}