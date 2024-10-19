export interface Header {
  id: number;
  group: string;
  position?: HPerson[] | undefined;
}

export interface Team {
  id: number;
  group: string;
  teamName?: string;
  leader?: Person[];
  member?: Person[];
}

export interface Person {
  id: number;
  name: string;
}

export interface HPerson extends Person {
  role: string;
}
