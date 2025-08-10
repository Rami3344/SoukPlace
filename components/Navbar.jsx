import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-secBackground h-24">
      <div className="flex">
        <h1 className="text-primary text-large ml-25 ">SoukPlace</h1>
        <input
          placeholder="Search product"
          className="border-primary border-2 rounded-l text-primary p-2 w-[50%] h-12 mt-6 ml-20"
        ></input>
        <div className="mt-5 ml-32 text-medium text-primary">
          <Link href="#">Sign Up</Link>
          <span className="mx-4">|</span>
          <Link href="#">Login</Link>
        </div>
      </div>
    </div>
  );
}
