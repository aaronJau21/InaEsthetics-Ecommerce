import { TtitleGeneral } from '../../../components/TtitleGeneral';
import TratamientoFaciales from "/img/tratamientoFaciales.jpg";

export const AlgunosServicios = () => {
  return (
    <div className="py-20">
     
      <TtitleGeneral title1="Descubre" title2="Nuestros" title3="Servicios"/>

      <div className="flex justify-center mt-9">
        <div className="w-96">
          <div className="flex flex-col items-center border border-white rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-gray-400 pb-7">
            <h4 className="py-9 font-poppins text-orange-400 font-semibold ">
              Tratamientos Faciales
            </h4>
            <div className="border-t border-orange-400 w-80 p-1"></div>
            <h4 className="py-9 font-poppins text-gray-500">
              Tratamientos Faciales
            </h4>
            <div className="border-t border-orange-400 w-80 p-1"></div>
            <h4 className="py-9 font-poppins text-gray-500">
              Tratamientos Faciales
            </h4>
            <div className="border-t border-orange-400 w-80 p-1"></div>
            <h4 className="py-9 font-poppins text-gray-500">
              Tratamientos Faciales
            </h4>
            <div className="border-t border-orange-400 w-80 p-1"></div>
          </div>
        </div>
        <div className="w-[41rem] px-16 flex justify-center">
          <div>
            <img src={TratamientoFaciales} alt="" width="400" />
            <div className="py-3">
              <h3 className="font-poppins text-orange-400 font-semibold">
                Tratamientos Faciales
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
              <button className="mt-5 border border-black rounded-xl px-7 py-1">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
