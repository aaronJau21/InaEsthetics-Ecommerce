interface Props {
  title1: string;
  title2: string;
  title3: string;
}

export const TtitleGeneral = ({ title1, title2, title3 }: Props) => {
  return (
    <h2 className="font-brittany text-center text-7xl text-gray-500">
      {title1} <br />
      <span className="font-poppins text-4xl pl-36 text-orange-400">
        {title2} <span className="font-semibold">{title3}</span>
      </span>
    </h2>
  );
};
