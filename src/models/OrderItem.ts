import { Extra } from "./Extra";

export class OrderItem {
  private total: number = 0;
  private extras: Extra [];
  private observation: string;

  constructor(itemValue: number, extras: Extra [], observation?: string){
    this.extras = extras || [];
    this.total = itemValue + this.getExtrasTotal();
    this.observation = observation || "";
  }

  public getTotal(): number {
    return this.total;
  }

  public getObservation(): string{
    return this.observation
  }
  
  public getExtras(): Extra [] {
    return this.extras;
  }

  public getExtrasTotal(){
    return this.extras.reduce((extraTotal, extra) => extraTotal + (extra.price * extra.quantity), 0);
  }
}