import Button from "./Button/Button";
import Input from "./Input/Input";
import { Link } from "react-router-dom";

interface FormProps {
    isLogin: boolean;
}

function Form({ isLogin }: FormProps) {
    return (
        <form className="flex flex-col gap-12 items-center">
            <h1 className="text-4xl text-center font-bold">Gym AI</h1>
            <div className="flex flex-col gap-7">
                <Input label="Username" />
                { isLogin ? 
                    <Input label="Password" type="password" /> :
                    <>
                        <Input label="Email" />
                        <Input label="Password" type="password" />
                    </>
                }
            </div>
            { isLogin ? 
                <Link to="/home">
                    <Button text="Login" />     
                </Link> :
                <Link to="/login">
                    <Button text="Sign Up" />     
                </Link>
            }
        </form>
    );
}

export default Form;