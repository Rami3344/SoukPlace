import PrimaryBtn from "../../../../components/ui/PrimaryBtn";

export default function Login() {
  return (
    <div className="bg-secBackground">
      <h1 className="text-large text-center">Log in</h1>
      <div className="flex justify-center items-center h-screen  ">
        <div className="text-center bg-primary w-[50%] p-10 border-4 border-secondary rounded-4xl drop-shadow-2xl">
          <p className="text-small mb-4">Email:</p>
          <input
            type="email"
            placeholder="Foulen@mail.com"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <p className="text-small mb-4">Password:</p>
          <input
            type="password"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <div>
            <PrimaryBtn content="Login" />
          </div>
          <p className="text-small mt-5">
            You Do not have an account?{" "}
            <a href="/signup" className="text-blue-400">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
