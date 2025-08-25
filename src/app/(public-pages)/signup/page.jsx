import PrimaryBtn from "../../../../components/ui/PrimaryBtn";

export default function SignUp() {
  return (
    <div className="bg-secBackground">
      <h1 className="text-large text-center mb-5">Create your account</h1>
      <div className="flex justify-center items-center">
        <div className="text-center bg-primary w-[50%] p-5 border-4 border-secondary rounded-4xl drop-shadow-2xl">
          <p className="text-small mb-2">Name:</p>
          <input
            type="text"
            placeholder="Foulen"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <p className="text-small mb-2">LastName:</p>
          <input
            type="text"
            placeholder="Fouleni"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <p className="text-small mb-2">Email:</p>
          <input
            type="email"
            placeholder="Foulen@mail.com"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <p className="text-small mb-2">Password:</p>
          <input
            type="password"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <p className="text-small mb-2">Repeat Password:</p>
          <input
            type="password"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <p className="text-small mb-2">Phone Number:</p>
          <input
            type="number"
            placeholder="99999999"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <p className="text-small mb-2">Date Of Birth:</p>
          <input
            type="date"
            className="border-2 border-secondary rounded-xl text-small p-2 w-[30%] mb-8"
          ></input>
          <div>
            <PrimaryBtn content="Sign Up" />
          </div>
          <p className="text-small mt-5">
            already have an account ?{" "}
            <a href="/login" className="text-blue-400">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
