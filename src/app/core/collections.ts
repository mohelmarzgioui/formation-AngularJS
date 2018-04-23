import { Item } from '../shared/models/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item [] = [
  {
    id: 'a1',
    name: 'vinh',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Mohamed',
    reference: '2244',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'dodo',
    reference: '3333',
    state: State.LIVREE
  }
];
