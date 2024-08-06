import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArrowButton = ({ className, style, onClick, direction }) => (
    <button
        className={`arrow-button absolute top-1/2 transform -translate-y-1/2 ${className}`}
        style={{
            ...style,
            backgroundColor: direction === 'right' ? '#A6FAFF' : '#FFA6F6',
            borderRadius: '50%',
            width: '6%',
            height: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1, // Ensure it is above other elements
        }}
        onClick={onClick}
    >
        {direction === 'right' ? '→' : '←'}
    </button>
);


const GalleryMasonry = ({ assets }) => {
    const [Slider, setSlider] = useState(null);

    useEffect(() => {
        import('react-slick').then((module) => {
            setSlider(() => module.default);
        });
    }, []);

    if (!Slider) {
        return <p>Loading...</p>;
    }

    const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <ArrowButton direction="left" className="left-8 p-8" />,
		nextArrow: <ArrowButton direction="right" className="right-8 p-8" />,
	};
	

    return (
		<div className='container mx-auto'>
        <div className="slider-container relative">
            <Slider {...sliderSettings}>
                {assets.map((asset, index) => (
					
                    <div key={index} className="slider-item">
                        {asset.type === 'video' && (
                            <video
                                className="max-w-full rounded-lg"
                                controls
                                autoPlay
                                muted
                            >
                                <source src={asset.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
		</div>
    );
};

export default GalleryMasonry;
