import axios from "axios";

export const getAllLockers = async (query = "") => {

    return await axios.get(
        `${import.meta.env.VITE_BASE_BACKEND_API}lockers${query}`,
    );
};