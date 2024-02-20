import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { useIsMobileMenuOpenContext } from "context/IsMobileMenuOpenProvider";

export function BurgerMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } =
    useIsMobileMenuOpenContext();
  return (
    <button
      onClick={() => setIsMobileMenuOpen(() => !isMobileMenuOpen)}
      className="z-{999} visible absolute right-10 top-10 sm:hidden"
    >
      {isMobileMenuOpen ? (
        <RxCross2 color="white" size="35px" />
      ) : (
        <IoMenu color="white" size="35px" />
      )}
    </button>
  );
}
