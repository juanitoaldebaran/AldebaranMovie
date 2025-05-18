import memberAPIClient from "../../api/memberApiClient/memberApi";

const memberServiceAPI = {
    createMember: async (member) => {
        try {
            const response = await memberAPIClient.post("/create", member);
            return response.data;

        } catch (error) {
            throw new Error("Failed to create member");
        }
    },

    getAllMembers: async () => {
        try {
            const response = await memberAPIClient.get("/getall");
            return response.data;
            
        } catch (error) {
            throw new Error("Failed to get all members");
        }
    },

    getMemberByID: async (id) => {
        try {
            const response = await memberAPIClient.get(`/get/${id}`);
            return response.data;

        } catch (error) {
            throw new Error("Failed to get member by ID");
        }
    },

    updateMember: async (id, member) => {
        try {
             const response = await memberAPIClient.put(`/update/${id}`, member);
             return response.data;

        } catch (error) {
            throw new Error("Failed to update member with id", id);
        }
    },

    deleteMember: async (id) => {
        try {
            const response = await memberAPIClient.delete(`/delete/${id}`, id);
            return response.data;

        } catch (error) {
            throw new Error("Failed to delete member by id", id);
        }
    }
}

export default memberServiceAPI;