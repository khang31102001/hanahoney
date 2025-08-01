import { Star } from "lucide-react";
import { Product } from "@/data/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5}, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < rating ? "text-orange-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        {/* Main Image */}
        <Image
          width={2000}
          height={1000}
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Hover Image */}
        <Image
          width={2000}
          height={1000}
          src={product.hoverImage}
          alt={`${product.name} - view 2`}
          className="absolute inset-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      
      {/* Black footer with product info */}
      <div className="bg-black text-white flex flex-col justify-between h-[200px]  p-4">
        <h3 className="text-2xl md:text-xl  font-bold text-center mb-2 uppercase tracking-wide text-white line-clamp-2  min-h-12">
          {product.name}
        </h3>
         <div className="text-center mb-2">
          <span className="text-xl lg:text-2xl font-medium">{product.volume}</span>
        </div>
        <div className="flex items-center justify-center mb-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="ml-2 text-sm text-white">({product.reviews})</span>
        </div>
       
        
        {/* <div className="text-center line-clamp-2">
          <span className="text-orange-400 font-bold text-lg">{product.price}</span>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
