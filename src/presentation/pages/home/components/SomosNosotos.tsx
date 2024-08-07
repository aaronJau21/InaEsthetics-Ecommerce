import Equipo from "/img/equipo.jpg";

export const SomosNosotos = () => {
  return (
    <div className="bg-[#433827] flex justify-center pb-16">
      <div className="pt-20">
        <div className="border border-white rounded-bl-3xl relative h-[22rem] w-96">
          <img
            src={Equipo}
            alt="imagen de equipo"
            className="rounded-tr-3xl rounded-bl-3xl absolute -top-5 left-10"
          />
        </div>
      </div>

      <div className="bg-white w-[39rem] px-16 py-20 rounded-b-3xl">
        <h3 className="text-orange-400 font-bold font-poppins text-3xl">
          Somos Inaesthetics
        </h3>
        <p className="text-justify">
          En nuestro Centro de Bienestar Integral, nos dedicamos a realzar tu
          belleza natural con servicios exclusivos diseñados para ofrecerte la
          mejor experiencia posible. Nuestro enfoque en técnicas mínimamente
          invasivas garantiza soluciones 100% naturales y confiables,
          permitiéndote lucir y sentirte mejor sin comprometer tu bienestar.
        </p>

        <p className="py-7 text-justify">
          Nuestro equipo está compuesto por un staff de profesionales altamente
          capacitados, liderados por nuestro médico especializado, quienes están
          comprometidos con tu satisfacción y bienestar.
        </p>

        <p className="text-justify">
          Ven y descubre cómo podemos potenciar tu belleza natural de manera
          segura y eficaz. Tu bienestar es nuestra prioridad, y estamos aquí
          para ayudarte a alcanzar tus objetivos de belleza y salud integral.
        </p>
      </div>
    </div>
  );
};
