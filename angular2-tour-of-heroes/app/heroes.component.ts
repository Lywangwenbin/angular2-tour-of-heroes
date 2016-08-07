import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
//import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
//directives: [HeroDetailComponent],
//providers: [HeroService]
})

export class HeroesComponent implements OnInit  { 
  //title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes : Hero[];//notice 
  
  onSelect(hero: Hero) { this.selectedHero = hero; }
  
  constructor(private router: Router, private heroService: HeroService) { }
  
  getHeroes() {
	//this.heroes = HEROES;
    //this.heroes = this.heroService.getHeroes();
	//this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
  }
  
  gotoDetail(hero: Hero) {
	  let link = ['/detail', hero.id];
	  this.router.navigate(link);
  }
}
/* 
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]; */

