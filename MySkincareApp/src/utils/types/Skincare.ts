export type ProductReview ={
    id: string;
    rating: number;
    comment: string;
};

export type Product = {
    id: string;
    name: string;
    brand: string;
    category: string;
    reviews?: ProductReview[];
};