import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
// import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/captions.css';

import config from '../config/index.json';

const Subscription = () => {
  const { subscription } = config;
  const [firstItem, secondItem, thirdItem, fourthItem] = subscription.items;

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
      src: fourthItem?.img || '',
      alt: fourthItem?.title || '',
      title: fourthItem?.title || '',
    },
  ];

  const handleClick = (index: any) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  return (
    <section className="bg-background py-8" id="subscription">
      <div className="container mx-auto px-2 pt-4 pb-12 text-primary">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary font-sofia">
          Bukettpriser
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p className="m-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-sofiasans">
          Vi har nu öppet 🌸 butik på Lidingö efter att ha varit i branschen i
          ca 40 år. Vi skapar vackra buketter dekorationen och arrangemang till
          fest och sorg. Vi har ett brett utbud av växter och gör även
          planteringar. Vill du ge bort en blomster prenumeration som gåva eller
          kanske till dig själv? Slå en signal 08 7553055 så fixar vi detta med
          fri leveranskostnad inom Lidingö.
        </p>
        <p className="m-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-sofiasans">
          <br />
          <ul>
            <li>Liten: 300kr</li>
            <li>Mellan: 500kr</li>
            <li>Stor: 700kr</li>
            <li>Lyx: 750kr</li>
          </ul>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch pt-12 my-12 sm:my-4 space-y-8 sm:space-y-0 sm:space-x-8">
          {/* <!-- Liten Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            {/* <p className="mb-4 text-secondary font-sofiasans">
              {firstItem?.description}
            </p> */}
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
                {firstItem?.title}
              </h3>
              <img
                className=" w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
                src={firstItem?.img}
                alt={firstItem?.title}
                onClick={() => handleClick(0)}
              />
            </div>
          </div>
          {/* <!-- Mellan Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            {/* <p className="mb-4 text-secondary font-sofiasans">
              {secondItem?.description}
              </p> */}
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
                {secondItem?.title}
              </h3>
              <img
                className="w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
                src={secondItem?.img}
                alt={secondItem?.title}
                onClick={() => handleClick(1)}
              />
            </div>
          </div>
          {/* <!-- Stor Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            {/* <p className="mb-4 text-secondary font-sofiasans">
              {thirdItem?.description}
              </p> */}
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
                {thirdItem?.title}
              </h3>
              <img
                className="w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
                src={thirdItem?.img}
                alt={thirdItem?.title}
                onClick={() => handleClick(2)}
              />
            </div>
          </div>
        </div>
        {/* <!-- Lyx Section --> */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch pt-12 my-12 sm:my-4 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            {/* <p className="mb-4 text-secondary font-sofiasans">
              {fourthItem?.description}
              </p> */}
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
                {fourthItem?.title}
              </h3>
              <img
                className="w-[450px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
                src={fourthItem?.img}
                alt={fourthItem?.title}
                onClick={() => handleClick(3)}
              />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Lightbox
          slides={images}
          open={open}
          close={() => setOpen(false)}
          index={currentImageIndex}
          // plugins={[Captions]}
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

export default Subscription;
