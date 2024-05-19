import React from 'react';

// import config from '../config/index.json';

const Features = () => {
  // const { features } = config;
  // const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {/* {title} */}
            {/* Kontakt */}
          </h2>
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary font-sofia">
            Kontakta oss
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-sofiasans">
            {/* {description} */}
            Kontakta oss gärna via telefon eller epost. Om du har synpunkter
            eller förslag kan du också skicka ett meddelande direkt här.
          </p>
        </div>

        <div className="container lg:mx-auto lg:p-10">
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4 font-sofiasans">
            {/* <!-- Telephone --> */}
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h3 className="text-lg font-bold lg:text-center">
                Telefon och e-post
              </h3>
              <p className="lg:text-center">+46 8 755 30 55</p>
              <p className="lg:text-center">info@herserudsblommor.se</p>
            </div>

            {/* <!-- Address --> */}
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h3 className="text-lg font-bold lg:text-center">Adress</h3>
              <p className="lg:text-center">
                Herserudsvägen 3, 181 50 Lidingö, Sweden
              </p>
            </div>

            {/* <!-- Öppettider --> */}
            <div className="w-full lg:w-1/3">
              <h3 className="text-lg font-bold lg:text-center">Öppettider</h3>
              <table className="table-auto w-full lg:text-center">
                <tbody>
                  <tr>
                    <td>Måndag</td>
                    <td>9am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Tisdag</td>
                    <td>9am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Onsdag</td>
                    <td>9am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Torsdag</td>
                    <td>9am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Fredag</td>
                    <td>9am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Lördag</td>
                    <td>9am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Söndag</td>
                    <td>Stängt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.2096124610318!2d18.121837166656498!3d59.36284048552547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d39e8342401%3A0xe347913ed3ff51b3!2sHerseruds%20Blommor!5e0!3m2!1sen!2snl!4v1716069741987!5m2!1sen!2snl"
            width="100%"
            height="400px"
            loading="lazy"
          ></iframe>
        </div>

        {/* <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
};

export default Features;
