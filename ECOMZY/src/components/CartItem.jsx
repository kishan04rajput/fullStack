import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    };

    return (
        <div className="flex items-center border-b py-4">
            <div className="w-1/4">
                <img src={item.image} alt="Product" className="w-full h-auto" />
            </div>
            <div className="w-3/4 pl-4">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <h1 className="text-sm text-gray-600">{item.description}</h1>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-semibold">${item.price}</p>
                    <button
                        onClick={removeFromCart}
                        className="flex items-center gap-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300"
                    >
                        <MdDelete size={20} />
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
