import Image, { StaticImageData } from "next/image";

interface props {
  image: StaticImageData;
  onClick: () => void;
}

export function BurgerMenu({ image, onClick }: props) {
  return (
    <button onClick={onClick} className="z-{999} visible absolute sm:hidden">
      <Image src={image} width={50} height={50} alt="Burger menu" />
    </button>
  );
}
