import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Divider from './Divider';
import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, fifthItem] = product.items;
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: firstItem?.img || '',
      alt: firstItem?.title || '',
      title: firstItem?.title || '',
    },
    {
      src: secondItem?.img || '',
      alt: secondItem?.title || '',
      title: secondItem?.title || '',
    },
    {
      src: thirdItem?.img || '',
      alt: thirdItem?.title || '',
      title: thirdItem?.title || '',
    },
    {
      src: fifthItem?.img || '',
      alt: fifthItem?.title || '',
      title: fifthItem?.title || '',
    },
  ];

  const handleClick = (index: any) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };
  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary font-sofia`}
        >
          {product.title.split(' ').map((word, index) => (
            <span key={index} className="text-primary">
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div
            className={`w-6/6 sm:w-1/2 p-6 mt-20 flex flex-col items-center sm:items-start text-center sm:text-left`}
          >
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3 font-sofiasans`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600 font-sofiasans`}>
              {firstItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto object-cover cursor-pointer"
              src={firstItem?.img}
              alt={firstItem?.title}
              onClick={() => handleClick(0)}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto object-cover cursor-pointer"
              src={secondItem?.img}
              alt={secondItem?.title}
              onClick={() => handleClick(1)}
            />
          </div>
          <div
            className={`w-6/6 sm:w-1/2 p-6 mt-20 flex flex-col items-center sm:items-start text-center sm:text-left`}
          >
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3 font-sofiasans`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8 font-sofiasans`}>
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div
            className={`w-6/6 sm:w-1/2 p-6 mt-20 flex flex-col items-center sm:items-start text-center sm:text-left`}
          >
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3 font-sofiasans`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-gray-600`}>{thirdItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full font-sofiasans mx-auto object-cover cursor-pointer"
              src={thirdItem?.img}
              alt={thirdItem?.title}
              onClick={() => handleClick(2)}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto object-cover cursor-pointer"
              src={fifthItem?.img}
              alt={fifthItem?.title}
              onClick={() => handleClick(3)}
            />
          </div>
          <div
            className={`w-6/6 sm:w-1/2 p-6 mt-20 flex flex-col items-center sm:items-start text-center sm:text-left`}
          >
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3 font-sofiasans`}
              >
                {fifthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8 font-sofiasans`}>
                {fifthItem?.description}
              </p>
            </div>
          </div>
        </div>
        {/* <div className={`flex flex-wrap`}>
          <div
            className={`w-6/6 sm:w-1/2 p-6 mt-20 flex flex-col items-center sm:items-start text-center sm:text-left`}
          >
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3 font-sofiasans`}
            >
              {fifthItem?.title}
            </h3>
            <p className={`text-gray-600 font-sofiasans`}>
              {fifthItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto object-cover"
              src={fifthItem?.img}
              alt={fifthItem?.title}
            />
          </div>
        </div> */}
      </div>
      {open && (
        <Lightbox
          slides={images}
          open={open}
          close={() => setOpen(false)}
          index={currentImageIndex}
          plugins={[Captions]}
          captions={{
            // showToggle: true,
            descriptionTextAlign: 'center',
            descriptionMaxLines: 3,
          }}
        />
      )}
    </section>
  );
};

export default Product;
