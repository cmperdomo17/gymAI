import InputProps from "../../models/InputProps";
import "./Input.css";

function Input({ label, type = "text", placeholder, required = true }: InputProps) {

    return (
        <div className="input-group relative">
            <input 
                className="input w-full text-base text-white bg-transparent outline-none border-b-2 border-white pt-3 pb-1" 
                type={ type }
                placeholder={ placeholder }
                required={ required }
            />
            <label className="label absolute top-0 left-0 pt-2 pb-1 text-base text-gray-400 pointer-events-none transition-all duration-500">
                { label }
            </label>
        </div>

    );
}

export default Input;