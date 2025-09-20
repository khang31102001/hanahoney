import { products } from "@/data/product";
import ProductCard from "../Product/ProductCard";

const ProductList = () => {
    const namesToShow = [
        "Jarrah Honey TA60+",
        "Red Gum Honey TA49.6+",
        "Blackbutt Honey TA40.2+"
    ]
    const productfilter = products.filter((item) => namesToShow.includes(item.name) && item.volume === "500gr");
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productfilter.slice(0, 6).map((item, index) => (
                    <a key={index} href="/honey">
                        <ProductCard product={item} key={index} />
                    </a>

                ))}
            </div>
        </div>
    )
}

export default ProductList;