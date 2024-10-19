import { Item } from "./Item";

export class Food extends Item {
  private ingredients: string[];

  constructor(
    name: string, 
    price: number, 
    active: boolean, 
    ingredients: string[], 
    illustration?: string, 
    description?: string
  ) {
    super(name, price, active, illustration, description);
    this.ingredients = ingredients;
  }

  public getIngredients(): string []{
    return this.ingredients;
  }

  public setIngredients(ingredients: string []){
    this.ingredients = ingredients;
  }
}