import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        } catch (error) {
            console.log("Error aagya ji");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            {loading ? (
                <Spinner />
            ) : posts.length > 0 ? (
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-5 min-h-[80vh]">
                    {posts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <p>No Data Found</p>
                </div>
            )}
        </div>
    );
};

export default Home;
