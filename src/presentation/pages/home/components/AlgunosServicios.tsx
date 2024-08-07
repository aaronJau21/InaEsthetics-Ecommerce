import { TtitleGeneral } from "../../../components/TtitleGeneral";
import TratamientoFaciales from "/img/tratamientoFaciales.jpg";

export const AlgunosServicios = () => {
  return (
    <div className="py-20 container mx-auto">
      <TtitleGeneral title1="Descubre" title2="Nuestros" title3="Servicios" />

      <div className="flex justify-center container mx-auto mt-20">
        <div className="flex-1">
          <div className=" ml-72 border w-96 border-white rounded-tr-3xlServices rounded-bl-3xlServices shadow-2xl-services shadow-gray-400 h-[33rem] pt-7">
            <div className="flex flex-col items-center">
              <h4 className="py-9 font-poppins text-[#FFB208] font-bold ">
                Tratamientos Faciales
              </h4>
              <div className="border-t border-[#ffb208] w-80 p-1"></div>
              <h4 className="py-9 font-poppins text-gray-500">
                Tratamientos Faciales
              </h4>
              <div className="border-t border-[#ffb208] w-80 p-1"></div>
              <h4 className="py-9 font-poppins text-gray-500">
                Tratamientos Faciales
              </h4>
              <div className="border-t border-[#ffb208] w-80 p-1"></div>
              <h4 className="py-9 font-poppins text-gray-500">
                Tratamientos Faciales
              </h4>
              <div className="border-t border-[#ffb208] w-80 p-1"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 pr-48 flex font-poppins justify-center">
          <div>
            <img src={TratamientoFaciales} alt="" width="500" />
            <div className="py-5">
              <h3 className="font-poppins text-xl text-[#FFB208] font-semibold">
                Tratamientos Faciales
              </h3>
            </div>
            <p className="text-justify text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea <br /> commodo.
            </p>
            <button className="mt-5 border border-black rounded-lg px-7 py-2 text-sm">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
