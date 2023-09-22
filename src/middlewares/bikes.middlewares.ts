import axios from "axios";

export const getAllBikes = async (query = "") => {

    return await axios.get(
        `${import.meta.env.VITE_BASE_BACKEND_API}bikes/${query}`,
    );
};