export namespace Character {
  export interface Response {
    info: Info;
    results: Model[];
  }

  export interface State {
    charecters: Model[];
    selectedCharacter: Model | null;
    page: Page;
    filterModel: FilterModel;
    filteredCharacters: Model[] | null;
    genders: string[];
    status: string[];
  }

  export interface Page {
    currentPage: number;
    totalPage: number;
  }

  export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: boolean;
  }

  export interface Model {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  export interface Location {
    name: string;
    url: string;
  }

  export interface Origin {
    name: string;
    url: string;
  }

  export interface FilterModel {
    searchText: string;
    type: string;
    status: string;
    gender: string;
  }
}
