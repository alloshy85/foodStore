/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import { CartItem } from "./cartItem";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}
