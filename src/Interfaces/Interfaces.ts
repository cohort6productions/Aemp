export interface IInputProps {
  message: string;
}

export interface IContentBoxProps {
  url: string;
}

export interface ISectionHeaderProps {
  header: string;
  subHeader: string;
}

export interface ITeamProps {
  name: string;
  title: string;
  pictureLink: string;
  facebookLink?: string;
  linkedinLink?: string;
  instagramLink?: string;
  twitterLink?: string;
}
export interface IHowToCardProps {
  heading?: string;
  subHeading?: string;
  content?: string;
  picture?: string;
}

// NavBar
export interface INavBarState {
  isOpen: boolean;
}

// CreatorProjectBox
export interface ICreatorProjectSet {
  name: string;
  description: string;
  image: any;
  highlight: boolean;
}

export interface ICreatorProjectBoxProps {
  dataSet: ICreatorProjectSet;
  id: string;
}

export interface ICreatorProjectBoxState {
  isHover: boolean;
}

// CreatorProjectGridDisplay
export interface ICreatorProjectDisplayProps {
  list: ICreatorProjectBoxProps[];
}

export interface ICreatorProjectDisplayState {
  currentDataSet: ICreatorProjectSet[];
  isProjectList: boolean;
}
