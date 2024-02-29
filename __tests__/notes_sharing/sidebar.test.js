import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "../../components/sidebar/Sidebar";
import { FoundGroupsContext } from "../../context/FoundGroups";
import { FoundFilesContext } from "../../context/FoundFiles";

describe("Sidebar", () => {
  const mockGroupData = {
    groups: [
      {
        id: "weferg4y55hetyhrge",
        name: "Group name",
        photo: "/test.jpeg",
        members: ["2334feww", "234243"],
        files: ["wefwefgew", "wfweeefw"],
        createDate: new Date(),
      },
      {
        id: "wefeeergthdfsy55hetyhrge",
        name: "Group name2",
        photo: "/test.jpeg",
        members: ["2334feww", "234243"],
        files: ["wefwefgew", "wfweeefw"],
        createDate: new Date(),
      },
      {
        id: "weregthege55hetergehrge",
        name: "Group name3",
        photo: "/test.jpeg",
        members: ["2334feww", "234243"],
        files: ["wefwefgew", "wfweeefw"],
        createDate: new Date(),
      },
    ],
  };

  const mockFileData = {
    files: [
      {
        id: "erwojgc9ewmrcgmw9veprctm39",
        name: "File nameegerthrt",
        type: "normal",
        path: "/path/234",
        groupId: ["weferg4y55hetyhrge", "wefeeergthdfsy55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "[4puv c4o[wvm w4[m[0]]]]",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["wefeeergthdfsy55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "wvt4ium3w34w=3tu",
        name: "File nameergeg",
        type: "normal",
        path: "/path",
        groupId: ["weferg4y55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "2vhtn03tn0[32tvh3240][tn[w",
        name: "File name",
        type: "normal",
        path: "/pathgfr",
        groupId: ["weferg4y55hetyhrge", "weregthege55hetergehrge"],
        createDate: new Date(),
      },
      {
        id: "tunv4[n3wt[9w4yn[",
        name: "File namefeqrg",
        type: "normal",
        path: "/pathre",
        groupId: ["weregthege55hetergehrge"],
        createDate: new Date(),
      },
      {
        id: "wqwegehjytgewthey5jtryjryuik7ryituyte",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["weregthege55hetergehrge"],
        createDate: new Date(),
      },
    ],
  };

  test("Render group", () => {
    render(
      <FoundGroupsContext.Provider value={{ groupData: mockGroupData }}>
        <Sidebar />
      </FoundGroupsContext.Provider>,
    );

    const groupPhotos = screen.getAllByTestId("group-photo");
    const groupNames = screen.getAllByTestId("group-name");

    expect(groupPhotos.length).toBe(mockGroupData.groups.length);
    groupNames.forEach((nameElement, index) => {
      expect(nameElement.innerHTML).toBe(mockGroupData.groups[index].name);
    });
  });

  test("Show files", async () => {
    render(
      <FoundFilesContext.Provider value={{ fileData: mockFileData }}>
        <FoundGroupsContext.Provider value={{ groupData: mockGroupData }}>
          <Sidebar />
        </FoundGroupsContext.Provider>
      </FoundFilesContext.Provider>,
    );

    const groupButtons = screen.getAllByTestId("group-btn");

    for (let i = 0; i < mockGroupData.groups.length; i++) {
      await userEvent.click(groupButtons[i]);

      await waitFor(() => {
        const fileLinks = screen.getAllByTestId("file-link");
        const groupFiles = mockFileData.files.filter((file) =>
          file.groupId.includes(mockGroupData.groups[i].id),
        );

        expect(fileLinks.length).toBe(groupFiles.length);

        fileLinks.forEach((linkElement, index) => {
          expect(linkElement.innerHTML).toBe(groupFiles[index].name);
          expect(linkElement.href).toBe(
            `http://localhost${groupFiles[index].path}`,
          );
        });
      });

      await userEvent.click(groupButtons[i]);
    }
  });
});
