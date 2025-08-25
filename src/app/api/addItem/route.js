import db from "../../../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    if (body) {
      const addItem = await db.item.create({
        data: {
          title: body.title,
          category: body.category,
          price: parseFloat(body.price),
          city: body.price,
          description: body.description,
          shortDescription: body.shortDescription,
          mainImage: body.mainImage,
          firstImage: body.firstImage,
          secondImage: body.secondImage,
          thirdImage: body.thirdImage,
          fourthImage: body.fourthImage,
        },
      });
      if (addItem) {
        return new Response(JSON.stringify({ message: "Item added" }));
      }
    } else {
      return new Response(JSON.stringify({ message: "Failed adding item" }));
    }
  } catch (error) {
    console.log(error);
  }
}
