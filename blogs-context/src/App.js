import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css";

export default function App() {
    const { fetchBlogData } = useContext(AppContext);
    useEffect(() => {
        fetchBlogData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <Header></Header>
            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    );
}
