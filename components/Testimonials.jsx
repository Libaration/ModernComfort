import db from '../firebase/clientApp.js';
import DotLoader from 'react-spinners/DotLoader';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
export default function Testimonials(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [testimonials, setTestimonials] = useState(null);
  const getTestimonials = async () => {
    const docs = await getDocs(collection(db, 'testimonials'));
    setTestimonials(docs.docs);
  };
  const renderTestimonials = () => {
    console.log(testimonials);
    return testimonials.map((testimonial, index) => {
      return (
        <div className="text-1xl text-blue-800 h-28 w-full overflow-hidden md:mt-16">
          "{testimonial.data().testimonial}"
          <br />
          <span className="text-xs">- {testimonial.data().author}</span>
        </div>
      );
    });
  };
  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <div className="flex text-center justify-center align-center text-center">
      {testimonials ? (
        <Carousel
          className="overflow-hidden"
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          centerMode={true}
          showIndicators={false}
          showThumbs={false}
          centerSlidePercentage={100}
        >
          {renderTestimonials()}
        </Carousel>
      ) : (
        <DotLoader />
      )}
    </div>
  );
}
