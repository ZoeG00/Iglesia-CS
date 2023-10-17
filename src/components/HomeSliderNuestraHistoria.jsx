import { Carousel } from "@material-tailwind/react";

export default function HomeSliderNuestraHistoria() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      autoplayDelay={5000}
      className="rounded-xl carousel-custom-height"
    >
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/Y0c2T7c/20231009-223931.jpg"
          alt="20231009-223931"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/2y2vJk4/20231009-223345.jpg"
          alt="20231009-223345"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/Srj8gSp/20231009-223644.jpg"
          alt="20231009-223644"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/4JStTBD/20231009-223456.jpg"
          alt="20231009-223456"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/yRSVDJy/20231009-223629.jpg"
          alt="20231009-223629"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/BZqkMwB/20231009-223609.jpg"
          alt="20231009-223609"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/zZjKpHn/20231009-223701.jpg"
          alt="20231009-223701"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/fXZQQCQ/20231009-223406.jpg"
          alt="20231009-223406"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/QbpFYBs/20231009-223715.jpg"
          alt="20231009-223715"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/9GnYJXr/20231009-223525.jpg"
          alt="20231009-223525"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
}
