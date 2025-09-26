import { products } from "@/data/product";
import ProductCard from "./ProductCard";

const ProductList = () =>{
 return(
    <section className="container mx-auto py-8">
      <div className="flex flex-col w-full h-full gap-8">
         <div className=" text-center max-w-3xl mx-auto px-4">
            <div className="block p-4 px-4">
                <h2 className="text-black  text-xl md:text-2xl lg:text-3xl font-extrabold md-4 leading-snug">
                    Discover Nature&apos;s Golden Bounty: <br className="hidden sm:block" />
                    Premium Bee Products!
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                    Elevate your wellness routine with our meticulously curated selection of pure, natural bee and honey products. 
                    From premium beeswax to potent bee pollen and honeycomb, our bee products are crafted with care to deliver exceptional quality and benefits. 
                    Explore our hive of goodness today and experience the power of nature&apos;s finest!
                </p>
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