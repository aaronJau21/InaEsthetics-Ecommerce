import { TtitleGeneral } from "../../../components/TtitleGeneral";
import Doctora1 from "/img/doctora.jpg";

export const AlgunasDoctoras = () => {
  return (
    <div className="py-20">
      <TtitleGeneral
        title1="Presentamos a"
        title2="Nuestros"
        title3="Profesionales"
      />

      <div className=" container mx-auto w-8/12">
        <div className="flex justify-around font-poppins">
          <div className="text-center">
            <img
              src={Doctora1}
              alt="Foto de la Doctora"
              width="250"
              className="rounded-3xl"
            />
            <h4 className="text-lg text-gray-600 font-bold">Dra. Fiorella Inga</h4>
            <p className="text-xs">Directora Médica</p>
          </div>

          <div className="text-center">
            <img
              src={Doctora1}
              alt="Foto de la Doctora"
              width="250"
              className="rounded-3xl"
            />
            <h4 className="text-lg text-gray-600 font-bold">Dra. Fiorella Inga</h4>
            <p className="text-xs">Directora Médica</p>
          </div>

          <div className="text-center">
            <img
              src={Doctora1}
              alt="Foto de la Doctora"
              width="250"
              className="rounded-3xl"
            />
            <h4 className="text-lg text-gray-600 font-bold">Dra. Fiorella Inga</h4>
            <p className="text-xs">Directora Médica</p>
          </div>
        </div>
      </div>
    </div>
  );
};
