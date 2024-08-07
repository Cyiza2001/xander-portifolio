

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; 
import picture from '/images/pic.png';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { forwardRef } from 'react';

const testimonials = [
  {photo: picture, name: "KALISA TCHAMI", title: "Software Engineer at SevenX", testimony: "I've seen firsthand how dedicated and skilled Cyiza is as a software developer. With expertise in technologies like React, Express.js, and MongoDB, they consistently deliver robust and innovative solutions. Their commitment to best practices and strong ethical values make them a standout professional in the field."},
  {photo: picture, name: "CYIZA DJIBUJI", title: "Senior Engineer At Andela", testimony: "I've seen firsthand how dedicated and skilled Cyiza is as a software developer. With expertise in technologies like React, Express.js, and MongoDB, they consistently deliver robust and innovative solutions. Their commitment to best practices and strong ethical values make them a standout professional in the field."},
  {photo: picture, name: "BWANA SERAPHIN", title: "HR At Gold Minerals", testimony: "I've seen firsthand how dedicated and skilled Cyiza is as a software developer. With expertise in technologies like React, Express.js, and MongoDB, they consistently deliver robust and innovative solutions. Their commitment to best practices and strong ethical values make them a standout professional in the field."},
  {photo: picture, name: "DO PAZZO", title: "Technical Manager at Billiard", testimony: "I've seen firsthand how dedicated and skilled Cyiza is as a software developer. With expertise in technologies like React, Express.js, and MongoDB, they consistently deliver robust and innovative solutions. Their commitment to best practices and strong ethical values make them a standout professional in the field."},
];

const Testimonials = forwardRef((props,ref) => {
  const options = {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: true,
    classes: {
      pagination: ' splide__pagination flex justify-center  gap-2',
      page: 'splide__pagination__page custom-page', 
    },
  };

  return (
    <div ref={ref}  className="flex flex-col w-full max-w-lg mx-auto mt-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-3 mb-6">TESTIMONIALS</div>
        <div className="flex" style={{ width: '122.83px' }}>
          <div className="flex justify-center items-center w-full rounded bg-gray-200" style={{ height: '2px' }}>
            <div className="h-1 rounded bg-blue-700 w-12"></div>
          </div>
        </div>
      </div>

      <Splide options={options}>
        {testimonials.map((el, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col justify-center items-center">
              <div className="flex mt-12 border-2 border-gray-200 overflow-hidden rounded-full h-16 w-16">
                <img src={el.photo} alt="Testimony Giver" className="object-cover h-full w-full" />
              </div>
              <p className="font-bold mt-2 text-lg" style={{ marginBottom: '1px' }}>{el.name}</p>
              <p className="text-gray-400 font-semibold text-base">{el.title}</p>
              <div className="flex flex-row justify-center mx-6 mt-6">
                <FaQuoteLeft className="text-blue-700 text-4xl mr-2" />
                <p className="text-center mb-12">{el.testimony}</p>
                <FaQuoteRight className="text-blue-700 text-4xl ml-2" />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom CSS for Active Dot */}
      <style jsx>{`
         .custom-page {
  border: 2px solid #1D4ED8;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: white;
}
        .splide__pagination__page.is-active {
          background: #1D4ED8!important; 
        }
      `}</style>
    </div>
  );
})

export default Testimonials;

