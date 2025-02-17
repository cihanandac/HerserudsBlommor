import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import config from '../config/index.json';

const Specialdays = () => {
  const { specialdays } = config;
  const [
    dekorationImages1,
    dekorationImages2,
    dekorationImages3,
    dekorationImages4,
    dekorationImages6,
    dekorationImages8,
    dekorationImages9,
    dekorationImages10,
    dekorationImages11,
    dekorationImages12,
    dekorationImages13,
    dekorationImages14,
    dekorationImages15,
    dekorationImages16,
    dekorationImages17,
    dekorationImages18,
    dekorationImages19,
    dekorationImages20,
    dekorationImages21,
    dekorationImages22,
  ] = specialdays.dekorationImages;
  const [
    brudbuketterImages1,
    brudbuketterImages2,
    brudbuketterImages3,
    brudbuketterImages4,
    brudbuketterImages5,
    brudbuketterImages6,
    brudbuketterImages7,
  ] = specialdays.brudbuketterImages;
  const [birth1, birth2] = specialdays.nyblivnaImages;
  const [
    begravningImages1,
    begravningImages2,
    begravningImages3,
    begravningImages4,
    begravningImages5,
    begravningImages6,
    begravningImages7,
    begravningImages8,
    begravningImages9,
    begravningImages10,
    begravningImages11,
    begravningImages12,
    begravningImages13,
    begravningImages14,
    begravningImages15,
    begravningImages16,
    begravningImages17,
    begravningImages18,
    begravningImages19,
    begravningImages20,
    begravningImages21,
    begravningImages22,
    begravningImages23,
    begravningImages24,
    begravningImages25,
    begravningImages26,
    begravningImages27,
    begravningImages28,
    begravningImages29,
    begravningImages30,
    begravningImages31,
  ] = specialdays.begravningImages;
  const [firstItem, secondItem, thirdItem, fourthItem] = specialdays.items;

  const [brudbuketterImagesOpen, setBrudbuketterImagesOpen] = useState(false);
  const [dekorationImagesOpen, setDekorationImagesOpen] = useState(false);
  const [nyblivnaImagesOpen, setNyblivnaImagesOpen] = useState(false);
  const [begravningImagesOpen, setBegravningImagesOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const brudbuketterImages = [
    {
      src: brudbuketterImages1?.img || '',
      title: firstItem?.title || '',
    },
    {
      src: brudbuketterImages2?.img || '',
      title: firstItem?.title || '',
    },
    {
      src: brudbuketterImages3?.img || '',
      title: firstItem?.title || '',
    },
    {
      src: brudbuketterImages4?.img || '',
      title: firstItem?.title || '',
    },
    {
      src: brudbuketterImages5?.img || '',
      title: firstItem?.title || '',
    },
    {
      src: brudbuketterImages6?.img || '',
      title: firstItem?.title || '',
    },
    {
      src: brudbuketterImages7?.img || '',
      title: firstItem?.title || '',
    },
  ];

  const eventDekorationImages = [
    {
      src: secondItem?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages1?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages2?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages3?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages4?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages6?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages8?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages9?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages10?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages11?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages12?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages13?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages14?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages15?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages16?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages17?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages18?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages19?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages20?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages21?.img || '',
      title: secondItem?.title || '',
    },
    {
      src: dekorationImages22?.img || '',
      title: secondItem?.title || '',
    },
  ];
  const nyblivnaImages = [
    {
      src: thirdItem?.img || '',
      title: thirdItem?.title || '',
    },
    {
      src: birth1?.img || '',
      title: thirdItem?.title || '',
    },
    {
      src: birth2?.img || '',
      title: thirdItem?.title || '',
    },
  ];
  const begravningImages = [
    {
      src: begravningImages1?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages2?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages3?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages4?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages5?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages6?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages7?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages8?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages9?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages10?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages11?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages12?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages13?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages14?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages15?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages16?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages17?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages18?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages19?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages20?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages21?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages22?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages23?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages24?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages25?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages26?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages27?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages28?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages29?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages30?.img || '',
      title: fourthItem?.title || '',
    },
    {
      src: begravningImages31?.img || '',
      title: fourthItem?.title || '',
    },
  ];

  const handleClick = (image_type: string) => {
    switch (image_type) {
      case 'brudbuketter':
        setBrudbuketterImagesOpen(true);
        break;
      case 'dekoration':
        setDekorationImagesOpen(true);
        break;
      case 'nyblivna':
        setNyblivnaImagesOpen(true);
        break;
      case 'begravning':
        setBegravningImagesOpen(true);
        break;
      default:
        break;
    }
    setCurrentImageIndex(0);
  };

  return (
    <section className="bg-background py-8" id="specialdays">
      <div className="container mx-auto px-2 pt-4 pb-12 text-primary">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary font-sofia">
          Tillfällen
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-stretch pt-12 my-12 sm:my-4 space-y-8 sm:space-y-0 sm:space-x-8">
          {/* <!-- Brudbuketter Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
              {firstItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {firstItem?.description}
            </p>
            <div className="w-full p-6 flex-grow">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto cursor-pointer"
                src={firstItem?.img}
                alt={firstItem?.title}
                onClick={() => handleClick('brudbuketter')}
              />
            </div>
          </div>
          {/* <!-- Event Dekoration Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
              {secondItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {secondItem?.description}
            </p>
            <div className="w-full p-6 flex-grow">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto cursor-pointer"
                src={secondItem?.img}
                alt={secondItem?.title}
                onClick={() => handleClick('dekoration')}
              />
            </div>
          </div>
          {/* <!-- Nyblivna Föräldrar Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
              {thirdItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {thirdItem?.description}
            </p>
            <div className="w-full p-6 flex-grow">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto cursor-pointer"
                src={thirdItem?.img}
                alt={thirdItem?.title}
                onClick={() => handleClick('nyblivna')}
              />
            </div>
          </div>
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
              {fourthItem?.title}
            </h3>
            <p className="mb-4 text-secondary font-sofiasans">
              {fourthItem?.description}
            </p>
            <div className="w-full p-6 flex-grow">
              <img
                className="w-[250px] aspect-square rounded-full object-cover mx-auto cursor-pointer"
                src={fourthItem?.img}
                alt={fourthItem?.title}
                onClick={() => handleClick('begravning')}
              />
            </div>
          </div>
        </div>
      </div>
      {brudbuketterImagesOpen && (
        <Lightbox
          slides={brudbuketterImages}
          open={brudbuketterImagesOpen}
          close={() => setBrudbuketterImagesOpen(false)}
          index={currentImageIndex}
          plugins={[Captions]}
          captions={{
            // showToggle: true,
            descriptionTextAlign: 'center',
            descriptionMaxLines: 3,
          }}
        />
      )}
      {dekorationImagesOpen && (
        <Lightbox
          slides={eventDekorationImages}
          open={dekorationImagesOpen}
          close={() => setDekorationImagesOpen(false)}
          index={currentImageIndex}
          plugins={[Captions]}
          captions={{
            // showToggle: true,
            descriptionTextAlign: 'center',
            descriptionMaxLines: 3,
          }}
        />
      )}
      {nyblivnaImagesOpen && (
        <Lightbox
          slides={nyblivnaImages}
          open={nyblivnaImagesOpen}
          close={() => setNyblivnaImagesOpen(false)}
          index={currentImageIndex}
          plugins={[Captions]}
          captions={{
            // showToggle: true,
            descriptionTextAlign: 'center',
            descriptionMaxLines: 3,
          }}
        />
      )}
      {begravningImagesOpen && (
        <Lightbox
          slides={begravningImages}
          open={begravningImagesOpen}
          close={() => setBegravningImagesOpen(false)}
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

export default Specialdays;
