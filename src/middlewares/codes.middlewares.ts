import axios from "axios";

export const getCode = async (code: string) => {

    return await axios.get(
        `${import.meta.env.VITE_BASE_BACKEND_API}codes?code=${code}`,
    );
};