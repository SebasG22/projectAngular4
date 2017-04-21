import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recepie.model';
@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recipes: Recipe[] = [ new Recipe('A Test Recipe','This is simply a test','http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg'),new Recipe('A Test Recipe','This is simply a test','http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
