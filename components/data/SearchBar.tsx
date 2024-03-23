import { InputText } from "../ui/inputs/InputText";
import { SortingOptions } from "@/components/ui/popup/SortingOptions";

import { VscSettings } from "react-icons/vsc";

import { useSearchDataContext } from "../../context/SearchParam";
import { usePopupDataContext } from "../../context/PopupData";

export function SearchBar() {
  const { popupData, setPopupData } = usePopupDataContext();
  const { searchParams, setSearchParams } = useSearchDataContext();
  return (
    <div className="my-6 flex gap-2">
      <InputText
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setSearchParams({ ...searchParams, typedName: e.currentTarget.value })
        }
        placeholder="Search"
        value={searchParams.typedName}
        testId="data-search-input"
      />
      <button
        data-testid="sorting-options-button"
        onClick={() =>
          setPopupData({
            children: <SortingOptions />,
            isVisible: !popupData.isVisible,
          })
        }
        className="rounded-full p-3 text-xl transition-all duration-300 hover:bg-primary"
      >
        <VscSettings />
      </button>
    </div>
  );
}
