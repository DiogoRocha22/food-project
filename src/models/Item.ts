export class Item {
  private id: number;
  private name: string;
  private price: number;
  private active: boolean;
  private description: string;
  private illustration: string;

  constructor(id: number, name: string, price: number, active: boolean, illustration?:string, description?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.active = active;
    this.description = description || "";
    this.illustration = illustration || "";
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public isActive(): boolean {
    return this.active;
  }

  public getDescription(): string {
    return this.description;
  }
  
  public getIllustration(): string {
    return this.illustration;
  }

  public getId(): number {
    return this.id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public setActive(active: boolean): void {
    this.active = active;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setIllustration(illustration: string): void{
    this.illustration = illustration;
  }

  public toggleActive(): void {
    this.active = !this.active;
  }

  public displayInfo(): string {
    return `Item: ${this.name}, Price: $${this.price.toFixed(2)}, Active: ${this.active ? 'Yes' : 'No'}, Description: ${this.description}`;
  }
}
