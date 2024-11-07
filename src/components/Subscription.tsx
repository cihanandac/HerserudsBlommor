import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
// import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/captions.css';

import config from '../config/index.json';

const Subscription = () => {
  const { subscription } = config;
  const [firstItem, secondItem, thirdItem] = subscription.items;
  const [
    litenImg1,
    litenImg2,
    litenImg3,
    litenImg4,
    litenImg5,
    litenImg6,
    litenImg7,
    litenImg8,
    litenImg9,
    litenImg10,
    litenImg11,
  ] = subscription.Liten_images;
  const [
    mellanImgFirst,
    mellanImgSecond,
    mellanImgThird,
    mellanImgFourth,
    mellanImgFifth,
    mellanImgSixth,
  ] = subscription.Mellan_images;
  const [
    storImgFirst,
    storImgSecond,
    storImgThird,
    storImgFourth,
    storImgFifth,
  ] = subscription.Stor_images;

  const [litenImagesOpen, setLitenImagesOpen] = useState(false);
  const [mellanImagesOpen, setMellanImagesOpen] = useState(false);
  const [storImagesOpen, setStorImagesOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const litenImages = [
    {
      src: litenImg1?.img || '',
    },
    {
      src: litenImg2?.img || '',
    },
    {
      src: litenImg3?.img || '',
    },
    {
      src: litenImg4?.img || '',
    },
    {
      src: litenImg5?.img || '',
    },
    {
      src: litenImg6?.img || '',
    },
    {
      src: litenImg7?.img || '',
    },
    {
      src: litenImg8?.img || '',
    },
    {
      src: litenImg9?.img || '',
    },
    {
      src: litenImg10?.img || '',
    },
    {
      src: litenImg11?.img || '',
    },
  ];
  const mellanImages = [
    {
      src: mellanImgFirst?.img || '',
    },
    {
      src: mellanImgSecond?.img || '',
    },
    {
      src: mellanImgThird?.img || '',
    },
    {
      src: mellanImgFourth?.img || '',
    },
    {
      src: mellanImgFifth?.img || '',
    },
    {
      src: mellanImgSixth?.img || '',
    },
  ];
  const storImages = [
    {
      src: storImgFirst?.img || '',
    },
    {
      src: storImgSecond?.img || '',
    },
    {
      src: storImgThird?.img || '',
    },
    {
      src: storImgFourth?.img || '',
    },
    {
      src: storImgFifth?.img || '',
    },
  ];

  const handleClick = (image_type: string) => {
    switch (image_type) {
      case 'Liten':
        setLitenImagesOpen(true);
        break;
      case 'Mellan':
        setMellanImagesOpen(true);
        break;
      case 'Stor':
        setStorImagesOpen(true);
        break;
      default:
        break;
    }
    setCurrentImageIndex(0);
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
          Vi skapar vackra buketter dekorationen och arrangemang till fest och
          sorg. Vi har ett brett utbud av växter och gör även planteringar. Vill
          du ge bort en blomster prenumeration som gåva eller kanske till dig
          själv? Slå en signal så fixar vi detta med fri leveranskostnad inom
          Lidingö.
        </p>
        <p className="m-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-sofiasans">
          <br />
          <ul>
            <li>Liten: från 300kr</li>
            <li>Mellan: från 500kr</li>
            <li>Stor: från 700kr</li>
          </ul>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch pt-12 my-12 sm:my-4 space-y-8 sm:space-y-0 sm:space-x-8">
          {/* <!-- Liten Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
                {firstItem?.title}
              </h3>
              <p className="mb-4 text-secondary font-sofiasans">
                {firstItem?.description}
              </p>
              <img
                className=" w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-full"
                src={firstItem?.img}
                alt={firstItem?.title}
                onClick={() => handleClick('Liten')}
              />
            </div>
          </div>
          {/* <!-- Mellan Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl text-secondary font-bold mb-2 font-sofiasans">
                {secondItem?.title}
              </h3>
              <p className="mb-4 text-secondary font-sofiasans">
                {secondItem?.description}
              </p>
              <img
                className="w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-full"
                src={secondItem?.img}
                alt={secondItem?.title}
                onClick={() => handleClick('Mellan')}
              />
            </div>
          </div>
          {/* <!-- Stor Section --> */}
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
                {thirdItem?.title}
              </h3>
              <p className="mb-4 text-secondary font-sofiasans">
                {thirdItem?.description}
              </p>
              <img
                className="w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-full"
                src={thirdItem?.img}
                alt={thirdItem?.title}
                onClick={() => handleClick('Stor')}
              />
            </div>
          </div>
        </div>
      </div>
      {litenImagesOpen && (
        <Lightbox
          slides={litenImages}
          open={litenImagesOpen}
          close={() => setLitenImagesOpen(false)}
          index={currentImageIndex}
          // plugins={[Captions]}
          captions={{
            // showToggle: true,
            descriptionTextAlign: 'center',
            descriptionMaxLines: 3,
          }}
        />
      )}
      {mellanImagesOpen && (
        <Lightbox
          slides={mellanImages}
          open={mellanImagesOpen}
          close={() => setMellanImagesOpen(false)}
          index={currentImageIndex}
          // plugins={[Captions]}
          captions={{
            // showToggle: true,
            descriptionTextAlign: 'center',
            descriptionMaxLines: 3,
          }}
        />
      )}
      {storImagesOpen && (
        <Lightbox
          slides={storImages}
          open={storImagesOpen}
          close={() => setStorImagesOpen(false)}
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
