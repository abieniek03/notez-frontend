import { usePathname } from "next/navigation";
import { ButtonMain } from "../ui/buttons/ButtonMain";

interface button {
  text: string;
  onClick: () => void;
}

const allGroupsViewButtons: button[] = [
  {
    text: "New group",
    onClick: () => {
      console.log("click");
    },
  },
];

const specificGroupViewButtons: button[] = [
  {
    text: "Group settings",
    onClick: () => {
      console.log("click");
    },
  },
  {
    text: "New file",
    onClick: () => {
      console.log("click");
    },
  },
];

const buttonsRedner = (buttonList: button[]) => {
  return buttonList.map((button) => (
    <ButtonMain key={button.text} onClick={button.onClick}>
      {button.text}
    </ButtonMain>
  ));
};

export function DataButtonsSection() {
  const pathname = usePathname();

  return (
    <section className="flex gap-2">
      {pathname == "/groups"
        ? buttonsRedner(allGroupsViewButtons)
        : buttonsRedner(specificGroupViewButtons)}
    </section>
  );
}
