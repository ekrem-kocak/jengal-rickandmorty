import { Character } from '../models/character';

export const CHARACTER_DEFAULT: Character.State = {
  charecters: [],
  selectedCharacter: null,
  page: {
    currentPage: 1,
    totalPage: 1,
  },
  filterModel: {
    gender: '',
    searchText: '',
    status: '',
    type: '',
  },
  filteredCharacters: null,
  genders: [],
  status: [],
};
