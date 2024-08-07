import { AlgunosProductos } from "../components/AlgunosProductos";
import { AlgunosServicios } from "../components/AlgunosServicios";
import { Carrusel } from "../components/Carrusel";
import { Dudas } from "../components/Dudas";
import { SomosNosotos } from "../components/SomosNosotos";

export const HomePage = () => {
  return (
    <>
      <Carrusel />

      <SomosNosotos />

      <AlgunosServicios />

      <Dudas />

      <AlgunosProductos />
    </>
  );
};
