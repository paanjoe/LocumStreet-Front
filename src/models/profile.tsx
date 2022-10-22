export interface Profile {
  ID: string;
  email: string;
  name: string;
  avatarFileName: string;
  created: Date;
  updated: Date;
}

export interface ProfileList {
  profileArr: Profile[];
}
