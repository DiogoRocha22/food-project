import { OrderItem } from "./OrderItem";

export class Order {
  private number: number;
  private total: number = 0;
  private orderItems: OrderItem [];

  constructor(orderItems: OrderItem [], number: number){
    this.number = number;
    this.orderItems = orderItems;
    this.total = this.setOrderTotal();
  }

  public getTotal(): number{
    return this.total;
  }

  public getNumber(){
    return this.number;
  }

  private setOrderTotal(){ 
    return this.orderItems.reduce((orderTotal, order) => orderTotal + order.getTotal(), 0)
  }
}