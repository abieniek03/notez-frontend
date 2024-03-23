import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { usePathname } from "next/navigation";

import { FoundGroupsContextProvider } from "../../context/FoundGroups";
import { FoundFilesContextProvider } from "../../context/FoundFiles";
import { SearchDataContextProvider } from "../../context/SearchParam";

import { testDataFiles } from "../../data/files";
import { testDataGroups } from "../../data/groups";

import { Data } from "../../components/data/Data";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const filterByName = (keyword) => {
  const dataSearchInput = screen.getByTestId("data-search-input");

  fireEvent.change(dataSearchInput, { target: { value: keyword } });

  const dataElements = screen.getAllByTestId("data-element");
  expect(dataElements.length).toBe(
    testDataGroups.filter((el) => el.name.toLowerCase().includes(keyword))
      .length,
  );
};

describe("Data component", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/groups");
  });

  test("renders groups", () => {
    render(
      <FoundGroupsContextProvider fetchedData={testDataGroups}>
        <FoundFilesContextProvider fetchedData={testDataFiles}>
          <SearchDataContextProvider>
            <Data />
          </SearchDataContextProvider>
        </FoundFilesContextProvider>
      </FoundGroupsContextProvider>,
    );

    const dataElements = screen.getAllByTestId("data-element");
    const groupNames = screen.getAllByTestId("group-name");

    expect(dataElements.length).toEqual(testDataGroups.length);
    groupNames.forEach((nameElement, index) => {
      expect(nameElement.innerHTML).toBe(testDataGroups[index].name);
    });
  });

  test("filter by name", () => {
    render(
      <FoundGroupsContextProvider fetchedData={testDataGroups}>
        <FoundFilesContextProvider fetchedData={testDataFiles}>
          <SearchDataContextProvider>
            <Data />
          </SearchDataContextProvider>
        </FoundFilesContextProvider>
      </FoundGroupsContextProvider>,
    );

    filterByName("group");
    filterByName("an");
    filterByName("");
  });
});
