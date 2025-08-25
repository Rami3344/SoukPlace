import Link from "next/link";
import SecondaryBtn from "./ui/SecondaryBtn";
import db from "../lib/prisma";

export default async function Content() {
  const data = await db.item.findMany();
  if (data)
    return (
      <div className="mb-20">
        <div className="flex flex-wrap ml-40 mt-10">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" relative text-center bg-primary w-[20%] h-150  ml-10 mt-10  border-2 rounded-3xl drop-shadow-primary drop-shadow-2xl"
              >
                <h2 className="text-[1.4rem] mt-7 line-clamp-2">
                  {item.title}
                </h2>
                <img
                  className="h-80 w-80 object-cover rounded-xl m-auto mt-7"
                  src={item.image}
                ></img>
                <h3 className="text-small mt-5">{item.category}</h3>
                <p className="text-small">{item.price}</p>
                <div className=" absolute mt-22 ml-28">
                  <Link href={`/product/${item.id}`}>
                    <SecondaryBtn content="View More..." />
                  </Link>
                </div>
                <p className="text-superSmall mt-4 mx-4">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  else {
    return (
      <div>
        <h1 className="text-red-500 text-medium text-center">
          NO ITEMS AVAILABLE
        </h1>
      </div>
    );
  }
}
