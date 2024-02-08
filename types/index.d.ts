export type MainNavItem = {
    href: string;
    label: string;
    active: boolean;
};

export interface Billboard {
    id: string;
    name: string;
    image: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}
