import Navbar from "../../../../../components/Navbar";
import SecondaryBtn from "../../../../../components/ui/SecondaryBtn";

export default function Item() {
  const data = {
    title: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    city: "Beja",
    shortdescription:
      "High-quality wireless headphones with noise cancellation.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam mollitia accusamus a officiis repellat error ullam veniam dolorum velit voluptas ab aliquid iure aut, eum ea explicabo eos tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam mollitia accusamus a officiis repellat error ullam veniam dolorum velit voluptas ab aliquid iure aut, eum ea explicabo eos tempora.",
    mainimage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    firstimage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    secondimage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    thirdimage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    fourthimage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
  };
  return (
    <div>
      <Navbar />

      <div className="bg-secondary border-2 border-primary rounded-4xl text-primary w-[80%] flex justify-around m-auto mt-10 mb-10 pb-25">
        <div>
          <img
            src={data.mainimage}
            className="w-500 border-2 border-primary rounded-3xl mt-25 ml-25"
          ></img>
          <div className="flex ml-30 mt-10">
            <img
              src={data.firstimage}
              className="w-30 border-2 border-primary rounded-3xl ml-"
            ></img>
            <img
              src={data.secondimage}
              className="w-30 border-2 border-primary rounded-3xl ml-5"
            ></img>
            <img
              src={data.thirdimage}
              className="w-30 border-2 border-primary rounded-3xl ml-5"
            ></img>
            <img
              src={data.fourthimage}
              className="w-30 border-2 border-primary rounded-3xl ml-5"
            ></img>
          </div>
        </div>
        <div className="ml-50 mt-15">
          <h1 className="text-medium ">{data.title}</h1>
          <p className="text-small mb-7">{data.city}</p>
          <h2 className="text-medium mb-5">{data.price} TND</h2>
          <h3 className="text-small mb-10"> {data.shortdescription}</h3>
          <SecondaryBtn content="Add to bucket" />
          <p className="mt-15">Category: {data.category}</p>
          <h3 className="text-superSmall w-[70%] mt-5">{data.description}</h3>
        </div>
      </div>
    </div>
  );
}
