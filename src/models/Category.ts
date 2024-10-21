import { Extra } from "./Adicional";
import { Item } from "./Item";

export class Category{
  private name:string;
  private items: Item [];
  private extra: Extra [];
  private descripion: string;

  constructor(name:string, items: Item [], extra: Extra [], description?: string){
    this.name = name;
    this.items = items;
    this.extra = extra;
    this.descripion = description || "";
  }

  public getName(): string {
    return this.name;
  }
  public setName(name:string){
    this.name = name;
  }

  public getItems(): Item [] {
    return this.items;
  }
  public setItems(items: Item []){
    this.items = items;
  }

  public getDescription(): string {
    return this.descripion;
  }
  public setDescription(descripion: string){
    this.descripion = descripion;
  }

  public getExtras(): Extra [] {
    return this.extra;
  }
  public setExtras(extra: Extra []) {
    this.extra = extra;
  }

}