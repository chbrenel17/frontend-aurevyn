import { Component } from '@angular/core';
import { HeroSearch } from "../components/hero-search/hero-search";
import { Featured } from '../components/featured/featured';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar';
import { BrowseTypes } from '../components/browse-types/browse-types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSearch, Featured, NavBarComponent, BrowseTypes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
