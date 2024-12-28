import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();
export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogData(page = 1) {
        setLoading(true);
        try {
            const res = await fetch(`${baseUrl}?page=${page}`);
            const resJson = await res.json();
            setPage(resJson.page);
            setPosts(resJson.posts);
            setTotalPages(resJson.totalPages);
        } catch (error) {
            console.log("error---->", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogData(page);
    }
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogData,
        handlePageChange,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
