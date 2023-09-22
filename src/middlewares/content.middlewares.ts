import axios from "axios";

export const getAllContent = async (query = "") => {

    return await axios.get(
        `${import.meta.env.VITE_BASE_BACKEND_API}content${query}`,
    );
};