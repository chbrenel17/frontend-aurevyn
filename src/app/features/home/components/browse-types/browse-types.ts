import { Component } from '@angular/core';


@Component({
  selector: 'app-browse-types',
  standalone: true,
  imports: [],
  templateUrl: './browse-types.html',
  styleUrl: './browse-types.css',
})

export class BrowseTypes {

  propertyTypes = [
    { id: 1, label: 'House', url:'/images/house.png' },
    { id: 2, label: 'Apartment', url:'/images/apartment.png' },
    { id: 3, label: 'Condo', url:'/images/condo.png' },
    { id: 4, label: 'Townhome', url:'/images/townhome.png' },
  ];

}
