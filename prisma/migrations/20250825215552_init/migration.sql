-- CreateTable
CREATE TABLE "public"."Item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "firstImage" TEXT,
    "secondImage" TEXT,
    "thirdImage" TEXT,
    "fourthImage" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
