export interface group {
  id: string;
  name: string;
  photo?: string;
  authorId: string;
  members: string[];
  files?: string[];
  createDate: Date;
  markedByStar: boolean;
}

export interface file {
  id: string;
  name: string;
  type: string;
  groupId: string[];
  createDate: Date;
  authorId: string;
  photo?: never;
  files?: never;
  members?: never;
  markedByStar: boolean;
}

export type GroupAndData = group | file;
