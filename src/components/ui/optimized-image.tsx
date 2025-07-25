"use client"
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type OptimizedImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};
 const OptimizedImage = ({
    src,
    alt = "image",
    className = "",
    fallbackSrc = "https://cdnmedia.baotintuc.vn/Upload/YZmStSDTjb0M07hFJ2gA/files/2021/09/24/ong-240921.jpg",
    width = 2000,
    height = 1000,
    ...props
  }: OptimizedImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);
    const handleError = () =>{
        setImgSrc(fallbackSrc);
    }
    return (
        <Image
         src={imgSrc}
         alt={alt}
         width={+width}
         height= {+height}
         loading="lazy"
         className={`object-cover ${className}`}
         onError={handleError}
        {...props}
        />
    )
 }
 export default OptimizedImage