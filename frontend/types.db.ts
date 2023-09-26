export type Review = {
    id: string;
    name: string;
    feedback: string;
    rating: number;
    status: 'pending' | 'done';
};