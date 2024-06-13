import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
// import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/captions.css';

import config from '../config/index.json';

const Subscription = () => {
  const { subscription } = config;
  const [firstItem, secondItem, thirdItem, fourthItem] = subscription.items;
  const [litenImgFirst] = subscription.Liten_images;
  const [mellanImgFirst, mellanImgSecond, mellanImgThird] =
    subscription.Mellan_images;
  const [storImgFirst] = subscription.Stor_images;
  const [lyxImgFirst] = subscription.Lyx_images;

  const [litenImagesOpen, setLitenImagesOpen] = useState(false);
  const [mellanImagesOpen, setMellanImagesOpen] = useState(false);
  const [storImagesOpen, setStorImagesOpen] = useState(false);
  const [lyxImagesOpen, setLyxImagesOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const litenImages = [
    {
      src: litenImgFirst?.img || '',
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
  ];
  const storImages = [
    {
      src: storImgFirst?.img || '',
    },
  ];
  const lyxImages = [
    {
      src: lyxImgFirst?.img || '',
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
      case 'Lyx':
        setLyxImagesOpen(true);
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
            <li>Lyx: från 750kr</li>
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
                className=" w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
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
                className="w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
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
                className="w-[450px] sm:w-[250px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
                src={thirdItem?.img}
                alt={thirdItem?.title}
                onClick={() => handleClick('Stor')}
              />
            </div>
          </div>
        </div>
        {/* <!-- Lyx Section --> */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:pt-12 my-12 sm:my-4 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col h-full items-center text-center w-full sm:w-1/3 flex-grow">
            <div className="w-full p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2 text-secondary font-sofiasans">
                {fourthItem?.title}
              </h3>
              <p className="mb-4 text-secondary font-sofiasans">
                {fourthItem?.description}
              </p>
              <img
                className="w-[450px] aspect-square object-cover mx-auto cursor-pointer rounded-lg"
                src={fourthItem?.img}
                alt={fourthItem?.title}
                onClick={() => handleClick('Lyx')}
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
      {lyxImagesOpen && (
        <Lightbox
          slides={lyxImages}
          open={lyxImagesOpen}
          close={() => setLyxImagesOpen(false)}
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
