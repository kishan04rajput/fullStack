import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="flex justify-center p-4 min-h-screen">
            {cart.length > 0 ? (
                <div className="flex flex-col lg:flex-row w-full lg:w-3/4 gap-4">
                    <div className="w-full lg:w-2/3">
                        {cart.map((item, index) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                itemIndex={index}
                            />
                        ))}
                    </div>

                    <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-bold">Your Cart</div>
                            <div className="text-xl font-bold">Summary</div>
                        </div>
                        <p className="mt-2">
                            <span>Total Items: {cart.length}</span>
                        </p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">
                                Total Amount: ${totalAmount}
                            </p>
                            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full">
                                CheckOut Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center text-center w-full h-[80vh]">
                    <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
                    <Link to={"/"}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Shop Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
