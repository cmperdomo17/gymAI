import Form from "../components/Form";

function SignUp() {
    return (
        <section className="flex flex-col items-center justify-center h-[100dvh]">
            <Form isLogin={false} />
        </section>
    );
}

export default SignUp;