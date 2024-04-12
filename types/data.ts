export interface group {
  id: string;
  photo?: string;
  name: string;
  inviteUrl: string;
  invitePassword: string;
  members: string[];
  admins: string[];
  files: string[];
  createdAt: string;
}

export interface file {
  id: string;
  name: string;
  content: string;
  author: string;
  is_open: boolean;
  contributors: string[];
  createdAt: string;

  photo: never;
  members: never;
}

export type groupAndData = group | file;
