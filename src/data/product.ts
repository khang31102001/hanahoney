export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    volume: string;
    hoverImage: string;
    rating: number;
    reviews: number;
  }
  
export const products: Product[] = [
    {
        id: 1,
        name: "Pure Beeswax",
        price: "From 744.000 VND",
        volume: "500ml",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
        hoverImage: "https://plus.unsplash.com/premium_photo-1663957861996-8093b48a22e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
        rating: 5,
        reviews: 88
    },
    {
        id: 2,
        name: "Raw Forest Honey",
        price: "From 650.000 VND",
        volume: "500ml",
        image: "https://images.unsplash.com/photo-1613216512260-494def845d68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbmV5fGVufDB8fDB8fHww",
        hoverImage: "https://images.unsplash.com/photo-1545246909-b4e087f05214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbmV5fGVufDB8fDB8fHww",
        rating: 4.8,
        reviews: 75
    },
    {
        id: 3,
        name: "Royal Jelly",
        price: "From 1.200.000 VND",
        volume: "100g",
        image: "https://plus.unsplash.com/premium_photo-1664273586802-2fd61b1e193a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbmV5fGVufDB8fDB8fHww",
        hoverImage: "https://images.unsplash.com/photo-1654515722385-c684c5331c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmV5fGVufDB8fDB8fHww",
        rating: 4.9,
        reviews: 92
    },
    {
        id: 4,
        name: "Manuka Honey",
        price: "From 1.500.000 VND",
        volume: "250ml",
        image: "https://images.unsplash.com/photo-1623018697148-8350cf18e64e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZXljb21ifGVufDB8fDB8fHww",
        hoverImage: "https://plus.unsplash.com/premium_photo-1664273586569-08c3a0c205aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmV5Y29tYnxlbnwwfHwwfHx8MA%3D%3D",
        rating: 5,
        reviews: 120
    },
    {
        id: 5,
        name: "Propolis Extract",
        price: "From 890.000 VND",
        volume: "30ml",
        image: "https://plus.unsplash.com/premium_photo-1664273586932-ab870d61f7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
        hoverImage: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        reviews: 68
    },
    {
        id: 6,
        name: "Honey Bee Pollen",
        price: "From 888.000 VND",
        volume: "250g",
        image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5fGVufDB8fDB8fHww",
        hoverImage: "https://images.unsplash.com/photo-1536788567643-8c2368376526?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbmV5fGVufDB8fDB8fHww",
        rating: 4.8,
        reviews: 85
    },
    {
        id: 7,
        name: "Honeycomb Raw",
        price: "From 980.000 VND",
        volume: "300g",
        image: "https://media.istockphoto.com/id/694546042/photo/honey-with-honeycombs-in-a-jar.webp?a=1&b=1&s=612x612&w=0&k=20&c=F9DIox6vgRS9dl6k2WwhF74nlh5Rn9VOMv_uxQdx3m4=",
        hoverImage: "https://media.istockphoto.com/id/183354852/photo/pot-of-honey.webp?a=1&b=1&s=612x612&w=0&k=20&c=48aXe_BW3SBXe-JCk3cvlMk06snITNxC4iPrGgt2_2k=",
        rating: 4.9,
        reviews: 95
    },
    {
        id: 8,
        name: "Acacia Honey",
        price: "From 850.000 VND",
        volume: "500ml",
        image: "https://media.istockphoto.com/id/842769074/photo/sweet-honeycomb-and-wooden-honey-dripping.webp?a=1&b=1&s=612x612&w=0&k=20&c=3Wi2g_Z-_DcfHkulYM6ax0-niJNSIJ8Q3I1cXNlIA6U=",
        hoverImage: "https://media.istockphoto.com/id/2167178713/photo/iced-honey-aiyu-jelly-green-tea-with-sugar-pot-and-spoon-served-in-disposable-glass-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=mGLto59bmO4nV6D6-jEjE72Fb7oBvsB2GyZtYZRjAso=",
        rating: 4.7,
        reviews: 82
    },
    {
        id: 9,
        name: "Honey Gift Set",
        price: "From 2.500.000 VND",
        volume: "3x250ml",
        image: "https://media.istockphoto.com/id/157394621/vi/anh/m%E1%BA%ADt-ong.jpg?s=612x612&w=0&k=20&c=WlESNMck_HvAL8G0LsL03dJlpEzUqclvz7eJ76Q8lVg=",
        hoverImage: "https://media.istockphoto.com/id/157394621/vi/anh/m%E1%BA%ADt-ong.jpg?s=612x612&w=0&k=20&c=WlESNMck_HvAL8G0LsL03dJlpEzUqclvz7eJ76Q8lVg=",
        rating: 4.9,
        reviews: 110
    },
    {
        id: 10,
        name: "Wildflower Honey",
        price: "From 720.000 VND",
        volume: "500ml",
        image: "https://media.istockphoto.com/id/183354852/vi/anh/n%E1%BB%93i-m%E1%BA%ADt-ong.jpg?s=612x612&w=0&k=20&c=nSrnCfSBk2MQItqV24S4sFkNCKSJaE130lL4J9G_4FE=",
        hoverImage: "https://media.istockphoto.com/id/2173119049/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-th%C3%AAm-m%E1%BA%ADt-ong-v%C3%A0o-t%C3%A1ch-tr%C3%A0.jpg?s=612x612&w=0&k=20&c=RxdjjWr3iol_mmTWsJmkcuntzewfHhd6exr_zQf2r4k=",
        rating: 4.8,
        reviews: 78
    }
];
