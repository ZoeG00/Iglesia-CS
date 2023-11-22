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
          src="https://i.ibb.co/fqnRcGW/20231009-223931.jpg"
          alt="20231009-223931"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/x1Nz9wP/20231009-223345.jpg"
          alt="20231009-223345"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/Qdkv0Nc/20231009-223644.jpg"
          alt="20231009-223644"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/59XgB56/20231009-223456.jpg"
          alt="20231009-223456"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/5Mp1tzg/20231009-223629.jpg"
          alt="20231009-223629"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/MVSVX0s/20231009-223609.jpg"
          alt="20231009-223609"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/xFsKNRL/20231009-223701.jpg"
          alt="20231009-223701"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/kXJYr53/20231009-223406.jpg"
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
          src="https://i.ibb.co/SKrYzwX/20231009-223525.jpg"
          alt="20231009-223525"
          border="0"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
}
