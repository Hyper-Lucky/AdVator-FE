import { Apart } from '@api/dto';
import { atom } from 'recoil';

export const apartSearchState = atom<Apart[]>({
  key: 'apartSearchState',
  default: [],
});
