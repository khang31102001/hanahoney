import { products } from "@/data/product";
import ProductCard from "./ProductCard";
 const textBlock = {
  title: "DISCOVER NATURE’S GOLDEN BOUNTY – PREMIUM BEE PRODUCTS",
  content: `
        <p>
        Enhance your pantry or wellness routine with our carefully curated selection of pure bee products.
        From natural beeswax to bee pollen and honeycomb, our range reflects the same commitment to purity,
        quality, and ethical harvesting.
        </p>

        <p>
        Experience the simple, authentic goodness of Western Australia’s bees — nature’s finest artisans.
        </p>
  `
};
const ProductList = () =>{
 return(
    <section className="container mx-auto py-8">
      <div className="flex flex-col w-full h-full gap-8">
         <div className=" text-center max-w-3xl mx-auto px-4">
            <div className="block p-4 px-4">
                <h2 className="text-black  text-xl md:text-2xl lg:text-3xl font-extrabold md-4 leading-snug">
                 {textBlock.title}
                </h2>
                <div className="text-gray-700 text-sm md:text-base leading-relaxed font-medium" dangerouslySetInnerHTML={{__html: textBlock.content}}/>
            </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {products.map((item, index)=> {
                return(
                    <ProductCard product={item} key={index} />
                )
             })}
         </div>
      </div>
    </section>
 )
}
export default ProductList;