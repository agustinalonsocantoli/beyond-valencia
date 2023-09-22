import axios from "axios";

export const getAllMultimedia = async (query = "") => {

    return await axios.get(
        `${import.meta.env.VITE_BASE_BACKEND_API}multimedia${query}`,
    );
};