import Imagen1 from "/img/img1.png";
export const Carrusel = () => {
  return (
    <div className="bg-img1 relative">
    <img src={Imagen1} alt="img" className="w-full h-[43rem]" />
    <p className="absolute top-24 left-96 p-4 font-brittany text-white text-9xl">
      Spa
    </p>
    <p className="absolute top-52 left-[33rem] text-7xl font-bold text-white font-poppins">
      Day!
    </p>
    <p className="absolute top-[19rem] left-[26rem] text-white text-xl font-poppins leading-6">
      Ven a <span className="font-bold">Inaesthetics</span> y reserva <br /> junto a tu pareja y accede a <br /> grandes
      descuentos.
    </p>

    <button 
      className="absolute top-[25rem] left-[26rem] text-white font-bold textReservar font-poppins bg-[#FFB208] py-3 px-6 rounded-2xl"
    >
      Reservar ahora
    </button>
  </div>
  )
}