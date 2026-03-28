import { Component } from '@angular/core';
import { HeroSearch } from "../components/hero-search/hero-search";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSearch],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
