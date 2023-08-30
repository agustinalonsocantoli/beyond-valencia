import axios from "axios";

export const getDaytripsBySlug = async (slug: string) => {

    return await axios.get(
        `${import.meta.env.VITE_BASE_BACKEND_API}daytrips/${slug}`,
    );
};