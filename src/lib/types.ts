export type Food = {
    _id: string;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    imageUrl: string;
    description: string;
    available: true;
  };

  export type Cart = {
    _id: string;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    imageUrl: string;
    description: string;
    available: true;
    uuid: number | string |undefined
  };