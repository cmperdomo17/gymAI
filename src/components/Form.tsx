import Button from "./Button/Button";
import Input from "./Input/Input";

function Form() {
    return (
        <form className="flex flex-col gap-12">
            <h1 className="text-4xl text-center font-bold">Gym AI</h1>
            <div className="flex flex-col gap-7">
                <Input label="Username" />
                <Input label="Password" type="password" />
            </div>
            <Button text="Login" />
        </form>
    );
}

export default Form;