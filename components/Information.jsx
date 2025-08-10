import PrimaryBtn from "./ui/PrimaryBtn";

export default function Information() {
  return (
    <div className="relative w-[80%] m-auto rounded-4xl h-120 overflow-hidden mt-15">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: `url("/location.jpg")`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 p-6 text-secondary text-center">
        <h1 className="text-large font-bold mt-5">
          Looking for something? <br></br>Find it locally or sell your own
          products!
        </h1>
        <p className="text-small mt-5">
          The website that makes it easy to find a variety of things in your
          local city.
        </p>
        <div className="mt-5">
          <PrimaryBtn content="Shop Now" />
        </div>
      </div>
    </div>
  );
}
