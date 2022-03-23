export interface ILinks {
    text: string;
    url: string;
}
  
export interface IMenu {
    id: number;
    groupTitle: string;
    links: ILinks[];
}

export interface ISocials {
    id: number;
    image: any;
    url: string;
    alt: string;
}

export interface IFooter {
    menu: IMenu[];
    socials: ISocials[];
}