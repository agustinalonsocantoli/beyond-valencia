import axios from "axios";

export const getExperienceBySlug = async (slug: string) => {

    return await axios.get(
        `${import.meta.env.VITE_BASE_BACKEND_API}experiences/${slug}`,
    );
};