import SecondaryBtn from "./ui/SecondaryBtn";

export default function Content() {
  const data = [
    {
      title: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 59.99,
      description: "High-quality wireless headphones with noise cancellation.",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Organic Honey Jar",
      category: "Food",
      price: 12.5,
      description: "Pure Delecious organic honey from wildflowers.",
      image:
        "https://cpimg.tistatic.com/10619965/b/4/Natural-Organic-Honey-1000gm..jpg",
    },
    {
      title: "Electric Drill Machine",
      category: "Tools",
      price: 89.99,
      description: "Cordless electric drill for home and professional use.",
      image:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Smartphone 128GB",
      category: "Electronics",
      price: 399.99,
      description: "Latest model smartphone with high-res camera.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Leather Wallet",
      category: "Accessories",
      price: 25.0,
      description: "Durable leather wallet with multiple compartments.",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Organic Green Tea",
      category: "Food",
      price: 8.75,
      description: "Premium green tea leaves for a healthy lifestyle.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Mountain Bike",
      category: "Sports",
      price: 299.99,
      description: "Durable mountain bike with 21-speed gear system.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "LED Desk Lamp",
      category: "Home",
      price: 34.99,
      description: "Adjustable LED lamp with touch control and USB port.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Running Shoes",
      category: "Sportswear",
      price: 49.99,
      description: "Lightweight running shoes with breathable material.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Mechanical Keyboard",
      category: "Electronics",
      price: 74.99,
      description: "Backlit mechanical keyboard with customizable keys.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Cooking Knife Set",
      category: "Kitchen",
      price: 45.0,
      description:
        "Professional stainless steel knives with ergonomic handles.",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Camping Tent",
      category: "Outdoor",
      price: 120.0,
      description: "Waterproof 3-person tent for all weather conditions.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap ml-40 mt-10">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className=" relative text-center bg-primary w-[20%] h-150  ml-10 mt-10  border-2 rounded-3xl drop-shadow-primary drop-shadow-2xl"
            >
              <h2 className="text-[1.4rem] mt-7 line-clamp-2">{item.title}</h2>
              <img
                className="h-80 w-80 object-cover rounded-xl m-auto mt-7"
                src={item.image}
              ></img>
              <h3 className="text-small mt-5">{item.category}</h3>
              <p className="text-small">{item.price}</p>
              <div className=" absolute mt-22 ml-28">
                <SecondaryBtn content="View More..." />
              </div>
              <p className="text-superSmall mt-4 mx-4">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
