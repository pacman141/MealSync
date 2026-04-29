export interface SharedProfiles {
    id: number;
    name: string;
    avatar: string;
}

export interface ListItem {
    id: number;
    title: string;
    date: string;
    productsCurrent: number;
    productsTotal: number;
    budgetEstimated: number;
    shop: string;
    progress: number;
    sharedProfiles?: SharedProfiles[];
}

export interface ListProps {
    list: ListItem[];
}

export interface CardProps {
    item: ListItem;
}

export type FiltersType = "date" | "shop" | "budget" | "progression";

export interface HeaderProps {
    totalBudget: number;
    totalList: number;
}

export interface CardHeaderProps {
    title: string;
    date: string;
}

export interface CardContentProps {
    productsCurrent: number;
    productsTotal: number;
    budgetEstimated: number;
    shop: string;
    progress: number;
}

export interface CardFooterProps {
    sharedProfiles: SharedProfiles[];
}

export interface FiltersProps {
    handlePress(): void;
}

export type SortType = "date" | "shop" | "budget" | "progression";

export interface SortFormProps {
    onValueChange(filter: SortType): void;
}

export interface SearchFormProps {
    onChange(search: string): void;
}
