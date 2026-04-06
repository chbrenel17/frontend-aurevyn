import { Component } from '@angular/core';


type Property = {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  };

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.html',
  styleUrl: './featured.css',
})

export class Featured {

  properties: Property[] = [
    {
      id: 1,
      title: 'Modern Apartment in City Center',
      description: 'A stylish apartment located in the heart of the city, close to all amenities.',
      price: 250000,
      imageUrl: '/images/properties/property1.jpg'
    },
    {
      id: 2,
      title: 'Cozy Cottage by the Lake',
      description: 'A charming cottage with stunning lake views, perfect for a weekend getaway.',
      price: 150000,
      imageUrl: '/images/properties/property2.jpg'
    },
    {
      id: 3,
      title: 'Spacious Family Home',
      description: 'A large family home with a beautiful garden, ideal for growing families.',
      price: 350000,
      imageUrl: '/images/properties/property3.jpg'
    }
  ];    
}