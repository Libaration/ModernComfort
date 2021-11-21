import db from '../firebase/clientApp.js';
import DotLoader from 'react-spinners/DotLoader';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';
export default function Testimonials(props) {
  const [testimonials, setTestimonials] = useState(null);
  const getTestimonials = async () => {
    const docs = await getDocs(collection(db, 'testimonials'));
    setTestimonials(docs.docs);
  };
  const renderTestimonials = () => {
    console.log(testimonials);
    return testimonials.map((testimonial) => {
      return (
        <div className="text-1xl w-48 md:mt-10 lg:mt-20 max-w-xs max-h-xs z-40 overflow-hidden text-blue-800">
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
    <div className="flex text-center justify-center align-center">
      {testimonials ? renderTestimonials() : <DotLoader />}
    </div>
  );
}
