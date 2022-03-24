export interface IItems {
    id: number;
    title: string;
    body: string;
    icon: any;
}

export interface IFeatures {
    title: string;
    description: string;
    items: IItems[];
}