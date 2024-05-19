import React from 'react';

import config from '../config/index.json';

const Specialdays = () => {
  // const { pricing } = config;
  // const { items, title } = pricing;
  // const [firstPlan, secondPlan, thirdPlan] = items;
  const { specialdays } = config;
  const [firstItem, secondItem, thirdItem, fourthItem] = specialdays.items;

  return (
    <section className="bg-background py-8" id="specialdays">
      <div className="container mx-auto px-2 pt-4 pb-12 text-primary">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary font-sofia">
          Tillfällen
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center pt-12 my-12 sm:my-4 space-y-8 sm:space-y-0 sm:space-x-8">
          {/* <!-- Brudbuketter Section --> */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
              {firstItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {firstItem?.description}
            </p>
            <div className="w-full p-6">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto"
                src={firstItem?.img}
                alt={firstItem?.title}
              />
            </div>
          </div>
          {/* <!-- Event Dekoration Section --> */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
              {secondItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {secondItem?.description}
            </p>
            <div className="w-full p-6">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto"
                src={secondItem?.img}
                alt={secondItem?.title}
              />
            </div>
          </div>
          {/* <!-- Nyblivna Föräldrar Section --> */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
              {thirdItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {thirdItem?.description}
            </p>
            <div className="w-full p-6">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto"
                src={thirdItem?.img}
                alt={thirdItem?.title}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center text-center w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
              {fourthItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {fourthItem?.description}
            </p>
            <div className="w-full p-6">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto"
                src={fourthItem?.img}
                alt={fourthItem?.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialdays;
