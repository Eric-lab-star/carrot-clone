import H2 from "./h2";

export default function Product({ title, price, desc }: IProduct) {
  return (
    <div>
      <H2 text={title} />
      <p className="font-semibold text-lg">${price}</p>
      <p className="text-base font-thin selection:bg-amber-300 selection:text-white">
        {desc}
      </p>
    </div>
  );
}

interface IProduct {
  title: string;
  price: string;
  desc: string;
}
