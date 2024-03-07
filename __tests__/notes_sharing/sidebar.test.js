import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "../../components/sidebar/Sidebar";
import { FoundGroupsContextProvider } from "../../context/FoundGroups";
import { FoundFilesContextProvider } from "../../context/FoundFiles";

import { testDataFiles } from "../../data/files";
import { testDataGroups } from "../../data/groups";

describe("Sidebar", () => {
  test("Render group", async () => {
    render(
      <FoundGroupsContextProvider fetchedData={testDataGroups}>
        <Sidebar />
      </FoundGroupsContextProvider>,
    );

    await waitFor(() => {
      const groupPhotos = screen.getAllByTestId("group-photo");
      const groupNames = screen.getAllByTestId("group-name");

      expect(groupPhotos.length).toBe(testDataGroups.length);
      groupNames.forEach((nameElement, index) => {
        expect(nameElement.innerHTML).toBe(testDataGroups[index].name);
      });
    });
  });

  test("Show files", async () => {
    render(
      <FoundFilesContextProvider fetchedData={testDataFiles}>
        <FoundGroupsContextProvider fetchedData={testDataGroups}>
          <Sidebar />
        </FoundGroupsContextProvider>
      </FoundFilesContextProvider>,
    );

    const groupButtons = screen.getAllByTestId("group-btn");

    for (let i = 0; i < testDataGroups.length; i++) {
      await userEvent.click(groupButtons[i]);

      await waitFor(() => {
        const fileLinks = screen.getAllByTestId("file-link");
        const groupFiles = testDataFiles.filter((file) =>
          file.groupId.includes(testDataGroups[i].id),
        );
        expect(fileLinks.length).toBe(groupFiles.length);

        fileLinks.forEach((linkElement, index) => {
          expect(linkElement.innerHTML).toBe(groupFiles[index].name);
          expect(linkElement.href).toBe(
            `http://localhost/file/${groupFiles[index].id}`,
          );
        });
      });

      await userEvent.click(groupButtons[i]);
    }
  });
});
