import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem] =
    product.items;

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
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto"
              src={secondItem?.img}
              alt={secondItem?.title}
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
              className="h-6/6 w-[400px] h-[400px] rounded-full font-sofiasans mx-auto"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto"
              src={fourthItem?.img}
              alt={fourthItem?.title}
            />
          </div>
          <div
            className={`w-6/6 sm:w-1/2 p-6 mt-20 flex flex-col items-center sm:items-start text-center sm:text-left`}
          >
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3 font-sofiasans`}
              >
                {fourthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8 font-sofiasans`}>
                {fourthItem?.description}
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
              {fifthItem?.title}
            </h3>
            <p className={`text-gray-600 font-sofiasans`}>
              {fifthItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-[400px] h-[400px] rounded-full mx-auto"
              src={fifthItem?.img}
              alt={fifthItem?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
