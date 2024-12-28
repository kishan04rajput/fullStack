import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
    const { page, totalPages, handlePageChange } = useContext(AppContext);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-center items-center space-x-4 py-4">
            {page > 1 && (
                <button
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                    onClick={() => handlePageChange(page - 1)}
                >
                    Previous
                </button>
            )}
            <p className="text-gray-700">
                Page {page} of {totalPages}
            </p>
            {page < totalPages && (
                <button
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                    onClick={() => handlePageChange(page + 1)}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
