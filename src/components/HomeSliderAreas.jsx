import { Carousel, Typography } from "@material-tailwind/react";

export default function HomeSliderAreas() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      autoplayDelay={7000}
      className="rounded-xl carousel-custom-height my-4"
    >
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/hLYfK2R/grupos-04.jpg"
          alt="grupos-04"
          border="0"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              GRUPOS CONEXIÓN
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Si querés conocer y estudiar la palabra de Dios grupos conexión
              ¡es para vos! Pedinos info
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/Z1YHRWR/CONSEJER-APASTORAL-e1584919305302.jpg"
          alt="CONSEJER-APASTORAL-e1584919305302"
          border="0"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              CONSEJERÍA
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Todos los miércoles
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/qC1MMxT/img.jpg"
          alt="img"
          border="0"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              INTERCESORES
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Activos en oración e intercesión
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Sábados 8:30hs
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/09kdb9L/womendrinkingcoffee-575x301.jpg"
          alt="womendrinkingcoffee-575x301"
          border="0"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              DAMAS
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Talleres, charlas, tardes de té, mateadas y mucho más
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/ySd87nB/Screen-Shot-2020-03-01-at-12-56-36-PM.png"
          alt="Screen-Shot-2020-03-01-at-12-56-36-PM"
          border="0"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              VARONES
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Hombres de Dios fortalecidos en la fe, charlas, asados y mucho más
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
