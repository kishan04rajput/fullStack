import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
    const { loading, posts } = useContext(AppContext);
    return (
        <div className="container mx-auto p-4 mb-16">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="text-center text-gray-500">No post found</div>
            ) : (
                posts.map((post) => (
                    <div
                        key={post.id}
                        className="border-b border-gray-200 py-4"
                    >
                        <h2 className="text-3xl font-bold text-gray-800">
                            {post.title}
                        </h2>
                        <p className="text-gray-600">
                            By{" "}
                            <span className="font-semibold">{post.author}</span>{" "}
                            on <span className="italic">{post.category}</span>
                        </p>
                        <p className="text-gray-500">
                            Posted on{" "}
                            <span className="font-light">{post.date}</span>
                        </p>
                        <p className="mt-2 text-gray-700">{post.content}</p>
                        <div className="mt-3 flex flex-wrap">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blogs;
