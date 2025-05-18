export type Property = {
  id: string;
  address: string;
  bathroom: number;
  bedrooms: number;
  createdAt: string;
  description: string;
  extraFees: number;
  images: string[];
  latitute: string;
  longitude: string;
  name: string;
  ownerName: string;
  ownerPic: string;
  petsAllowed: boolean;
  price: number;
  size: number;
};

export type Reservation = {
  createdAt: string;
  endDate: Date;
  guests: number;
  id: string;
  nights: number;
  property: Property;
  propertyId: string;
  startDate: Date;
  totalPrice: number;
  userId: string;
};
