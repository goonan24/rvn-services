"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const images = carousel.querySelectorAll('img');

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('hidden', i !== index);
            });
        }

        showImage(currentIndex);

        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        const handlePrevClick = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        };

        const handleNextClick = () => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        };

        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);

        return () => {
            if (prevButton) prevButton.removeEventListener('click', handlePrevClick);
            if (nextButton) nextButton.removeEventListener('click', handleNextClick);
        };
    }, [currentIndex]);

    return (
        <main>
            <div className="grid grid-cols-2 gap-4 text-left align-baseline flex-col">
                <div>
                    <h1 className="text-xl underline">RVN Services</h1>
                    <p>COLLISION REPAIR</p>
                    <p>MECHANICAL WORK</p>
                    <p>JUMP START</p>
                    <p>LOCK OUT</p>
                    <p>TIRE CHANGE</p>
                    <p>LOCAL & LONG DISTANCE TOWING & FLATBED SERVICE</p>
                    <h1> ____________________________________________________________</h1>
                    <h2 className='className="text-xl underline'>Customer Reviews</h2>
                    <p> Leave our first Review</p>
                    <p> Will be updated soon :-)</p>
                </div>
                <div>
                    <h2 className='className="text-xl underline'>Photo Carousel</h2>
                    <div ref={carouselRef} id="carousel" className="relative w-full max-w-lg overflow-hidden">
                        <div className="carousel-inner">
                            <Image src="/car-pic.jpeg" className="w-full" width={300} height={100} />
                            <Image src="/car-pic2.jpeg"className="w-full hidden" width={300} height={100} />
                            <Image src="/car-pic3.jpeg" className="w-full hidden" width={300} height={100} />
                            
                        </div>
                        <button ref={prevButtonRef} id="prev" className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">Prev</button>
                        <button ref={nextButtonRef} id="next" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">Next</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
