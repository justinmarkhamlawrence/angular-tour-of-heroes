import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import {DxButtonModule} from 'devextreme-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

@NgModule({
  imports: [
    DxButtonModule
  ]            
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;



  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getHero()
  }

  onClick(e): void {
    this.goBack();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}

