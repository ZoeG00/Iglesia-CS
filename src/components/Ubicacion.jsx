import { Typography } from "@material-tailwind/react";

export default function Ubicacion() {
  return (
    <>
      <div id="map-container">
        <Typography className=" text-azul" variant="h3">
          ¡Ven a la casa!
        </Typography>
        <Typography className="pb-4 text-black" variant="h6">
          ¿Cómo llegar?
        </Typography>
        <div id="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.0271566871716!2d-68.43094970564697!3d-33.08565925824249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e4341cef92e75%3A0x57aa0d330ce4b4c7!2sIglesia%20Cristo%20Salva%20UAD!5e0!3m2!1ses!2sar!4v1687625169799!5m2!1ses!2sar"
            title="Google Map"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
