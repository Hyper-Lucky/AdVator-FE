import { Apart } from '@api/dto';

export const totalPrice = (array: Apart[]) =>
  array.reduce((acc: number, item: { totalPrice: number }) => acc + item.totalPrice, 0);
