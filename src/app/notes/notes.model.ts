export interface Notes {
    id?: number;
    title: string;
    description: string;
    date: string;
    tags: Array<any>;
    isPrivate: boolean;
}