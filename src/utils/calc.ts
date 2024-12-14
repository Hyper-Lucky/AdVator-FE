import { Apart } from '@api/dto';

export const totalPrice = (array: Apart[]) =>
  array.reduce((acc: number, item: { unitPrice: number }) => acc + item.unitPrice, 0);
