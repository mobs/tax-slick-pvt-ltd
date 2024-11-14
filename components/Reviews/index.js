import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewData = [
    {
        content: "I got my GST registered with TaxSlick, and it was so simple! The team guided me every step of the way.",
        name: "John Doe",
        business: "Retail Store"
    },
    {
        content: "I got my GST registered with TaxSlick, and it was so simple! The team guided me every step of the way.",
        name: "Jane Smith",
        business: "E-commerce"
    },
    {
        content: "I got my GST registered with TaxSlick, and it was so simple! The team guided me every step of the way.",
        name: "Mike Johnson",
        business: "Restaurant"
    },
    {
        content: "I got my GST registered with TaxSlick, and it was so simple! The team guided me every step of the way.",
        name: "Sarah Williams",
        business: "Consulting"
    },
    {
        content: "I got my GST registered with TaxSlick, and it was so simple! The team guided me every step of the way.",
        name: "Alex Brown",
        business: "Tech Startup"
    },
    {
        content: "I got my GST registered with TaxSlick, and it was so simple! The team guided me every step of the way.",
        name: "Emily Davis",
        business: "Healthcare"
    }
];

const Reviews = () => {
    const sliderSettings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const ReviewCard = ({ review }) => (
        <div className="px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon - Updated with green accent */}
                <div className="mb-4 flex items-center">
                    <svg className="h-8 w-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                    </svg>
                    {/* Added verified badge */}
                    <span className="ml-2 text-emerald-600 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Verified Review
                    </span>
                </div>
                
                {/* Review Content - Added subtle green highlight */}
                <p className="text-gray-600 mb-6 italic">
                    "{review.content}"
                    <span className="block mt-2 text-emerald-600 text-sm font-medium">★★★★★</span>
                </p>
                
                {/* Author Info */}
                <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-[#A3B1E0] flex items-center justify-center text-white font-bold text-lg">
                        {review.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                        <p className="font-semibold text-[#4059AC]">{review.name}</p>
                        <p className="text-gray-500 text-sm">{review.business}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-16 bg-[#F5F7FF] overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4059AC] mb-4">
                        Trusted by Thousands of Entrepreneurs
                    </h2>
                    <p className="text-gray-600 text-lg">
                        See what our clients have to say about their experience
                    </p>
                </div>

                {/* Reviews Sliders */}
                <div className="max-w-[100vw] mx-auto">
                    {/* First Row - Moving Right */}
                    <div className="mb-8">
                        <Slider {...sliderSettings}>
                            {reviewData.map((review, index) => (
                                <ReviewCard key={`row1-${index}`} review={review} />
                            ))}
                        </Slider>
                    </div>

                    {/* Second Row - Moving Left */}
                    <div>
                        <Slider {...{...sliderSettings, rtl: true}}>
                            {reviewData.map((review, index) => (
                                <ReviewCard key={`row2-${index}`} review={review} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
