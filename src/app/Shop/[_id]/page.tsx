// app/Shop/[_id]/page.tsx (Server Component; no "use client" here)
import Header1 from "@/app/component/Header/Header1";
import { ShopItems } from "@/app/component/RouteHead/RouteHead";
import { client } from "@/sanity/lib/client";
import { Foods15, getItemById } from "@/sanity/lib/queries";
import ProductDetailsClient from "@/app/component/productDetail/productDetail"; // Your interactive client component
import { Food } from "@/lib/types";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

// type ItemParams = {
//   params: { _id: string };
// };
type ItemParams = {
  params: Promise<{ _id: string }>;
};

async function getItems(_id: string) {
  const Fetch = await client.fetch(getItemById, { id: _id });
  if (!Fetch.length) {
    throw new Error(`No item found with the id "${_id}"`);
  }
  return Fetch[0];
}

export default async function Page({ params }: ItemParams) {
  const itemsInfo: Food = await getItems((await params)._id);
  const products: Food[] = await Foods15(0, 14);
  const relatedItems = products.filter(
    (product) => product.category === itemsInfo.category
  );

  return (
    <div style={inter.style}>
      <Header1 />
      <ShopItems />
      <ProductDetailsClient itemsInfo={itemsInfo} relatedItems={relatedItems} />
    </div>
  );
}
