export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

type Rating = {
  rate: number;
  count: number;
};

export interface ProductState {
  loading: boolean;
  error: string | null;
  product: Products | null; // Update the type according to your product structure
}

export interface ILogin {
  email: string;
  password: string;
}

export interface CartProduct extends Products {
  quantity: number;
}
