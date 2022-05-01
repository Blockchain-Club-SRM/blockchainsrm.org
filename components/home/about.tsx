// eslint-disable-next-line @typescript-eslint/no-var-requires
const Fade = require('react-reveal/Fade');

const About = () => {
  return (
    <div className="grid auto-cols-auto lg:grid-cols-2 gap-20 xl:gap-40 p-10 lg:p-12 xl:p-16 2xl:p-24 mt-24">
      <div className="box p-6 text-white transform duration-300 hover:scale-110">
        <Fade top>
          <p className="text-center font-bold text-4xl md:text-2xl lg:text-4xl mb-4">
            Our Mission
          </p>
        </Fade>
        <Fade bottom>
          <p className="text-xl md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis id odio dolorem nemo facere quae eveniet fuga? Optio
            quae molestias nemo maxime nam, earum sit, libero repudiandae,
            corrupti at quibusdam.
          </p>
        </Fade>
      </div>
      <div className="box p-6 text-white transform duration-300 hover:scale-110">
        <Fade top>
          <p className="text-center font-bold text-4xl md:text-2xl lg:text-4xl mb-4">
            Our Mission
          </p>
        </Fade>
        <Fade bottom>
          <p className="text-xl md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis id odio dolorem nemo facere quae eveniet fuga? Optio
            quae molestias nemo maxime nam, earum sit, libero repudiandae,
            corrupti at quibusdam.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
