/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from '../../data';
// import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
// import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Food[] {
    // return this.http.get<Food[]>(FOODS_URL);
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    // return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
    return this.getAll().filter((food)=>
         food.name.toLowerCase().includes(searchTerm.toLowerCase())
      
    )
  }

  getAllTags(): Tag[] {
    // return this.http.get<Tag[]>(FOODS_TAGS_URL);
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find((food)=>food.id ===foodId) ?? new Food();
    // return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }

}
