import ButtonProps from "../../models/ButtonProps";
import "./Button.css";

function Button({ text, onClick }: ButtonProps) {
    return (
        <button 
            className="relative w-52 bg-gray-200 hover:bg-transparent hover:text-gray-200 overflow-hidden text-sm font-bold py-2 rounded-full border border-gray-200 text-gray-950 uppercase"
            onClick={ onClick }
        >
            { text }
        </button>
    );
}

export default Button;