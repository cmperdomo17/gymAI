import Form from "../components/Form";

function Login() {
    return (
        <section className="flex flex-col items-center justify-center h-[100dvh]">
            <Form isLogin />
        </section>
    );
}

export default Login;