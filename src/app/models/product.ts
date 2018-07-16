import { Observable } from "rxjs";

export interface Product {
    $key: string;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
}