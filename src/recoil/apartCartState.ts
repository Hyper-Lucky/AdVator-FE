import { Apart } from '@api/dto';
import { atom } from 'recoil';

export const apartCartState = atom<Apart[]>({
  key: 'apartCartState',
  default: [],
});
