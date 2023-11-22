import { Carousel, Typography } from "@material-tailwind/react";

export default function HomeSliderAdos() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      autoplayDelay={7000}
      className="rounded-xl carousel-custom-height"
    >
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/DWj19QW/ados.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              ADOLESCENTES
            </Typography>
            <Typography variant="h5" color="white" className="mb-12 opacity-80">
              Sábados 16:30hs
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/pKfkdZR/ados2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Castillo del Rey
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              ¡Vení a ser parte!
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/9wMPqJr/ados3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              ¡Te esperamos!
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
