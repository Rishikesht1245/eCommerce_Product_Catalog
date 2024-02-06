export const reviews: Reviews[] = [
  {
    ratingId: 1,
    value: 4.5,
    name: "Rishikesh T",
    profileImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Great product!",
  },
  {
    ratingId: 2,
    value: 3.8,
    name: "Rishikesh T",
    profileImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Good quality.",
  },
  {
    ratingId: 3,
    value: 4.0,
    name: "Rishikesh T",
    profileImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Satisfied with the purchase.",
  },
  {
    ratingId: 4,
    value: 4.0,
    name: "Rishikesh T",
    profileImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Satisfied with the purchase.",
  },
];

export interface Reviews {
  ratingId: number;
  value: number;
  name: string;
  profileImg: string;
  description: string;
}
