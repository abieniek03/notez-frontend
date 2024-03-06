export interface group {
  id: string;
  name: string;
  photo?: string;
  members: string[];
  files?: string[];
  createDate: Date;
}

export interface file {
  id: string;
  name: string;
  type: "normal" | "shared";
  groupId: string[];
  createDate: Date;
}

export type GroupAndData = group | file;
