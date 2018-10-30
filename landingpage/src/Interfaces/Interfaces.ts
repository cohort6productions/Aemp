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
  picture: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}
export interface IHowToCardProps{
  heading?: string;
  subHeading?: string;
  content?: string;
  picture?: string;
}
export interface INavBarState {
  isOpen: boolean;
}

