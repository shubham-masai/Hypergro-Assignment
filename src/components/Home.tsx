import React, { useState, useEffect } from 'react';
const Home: React.FC = () => {
    const images : string[] = [
        "https://netflixo.vercel.app/images/movies/1.jpg",
        "https://netflixo.vercel.app/images/movies/2.jpeg",
        "https://netflixo.vercel.app/images/movies/3.jpg",
        "https://netflixo.vercel.app/images/movies/4.jpg",
        "https://netflixo.vercel.app/images/movies/5.jpg",
        "https://netflixo.vercel.app/images/movies/6.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="w-full lg:h-96 md:h-75 h-60 relative rounded overflow-hidden">
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">Explore Infinite Possibilities</h1>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Watch Now</button>
            </div>
        </div>
    );
};

export default Home;