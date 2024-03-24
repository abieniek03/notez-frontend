import { usePathname } from "next/navigation";
import { ButtonMain } from "../ui/buttons/ButtonMain";
import { usePopupDataContext } from "../../context/PopupData";
import { CreateNewGroup } from "../ui/popup/createNewGroup/CreateNewGroup";

interface button {
  text: string;
  onClick: () => void;
}

const buttonsRender = (buttonList: button[]) => {
  return buttonList.map((button) => (
    <ButtonMain key={button.text} onClick={button.onClick}>
      {button.text}
    </ButtonMain>
  ));
};

export function DataButtonsSection() {
  const pathname = usePathname();
  const { popupData, setPopupData } = usePopupDataContext();

  const allGroupsViewButtons: button[] = [
    {
      text: "New group",
      onClick: () =>
        setPopupData({
          children: <CreateNewGroup />,
          isVisible: !popupData.isVisible,
        }),
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

  return (
    <section className="absolute bottom-5 right-5 flex gap-2 lg:relative lg:bottom-0 lg:right-0">
      {pathname == "/groups"
        ? buttonsRender(allGroupsViewButtons)
        : buttonsRender(specificGroupViewButtons)}
    </section>
  );
}
