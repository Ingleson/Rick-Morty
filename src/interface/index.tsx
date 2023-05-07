export interface ICharacter {
  id: string
  created: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: IOriginChar
  location: ILocationChar
  image: string
  episode: IEpisodeChar[]
  url: string
}
interface IOriginChar {
  name: string
  url: string
}
interface ILocationChar {
  name: string
  url: string
}
interface IEpisodeChar {
  url: string
}

export interface ILocation {
  id: string
  created: string
  name: string
  dimension: string
  residents: IResidentLoc[]
  type: string
  url: string
}
interface IResidentLoc {
  url: string
}

export interface IEpisode {
  id: string
  name: string
  created: string
  characters: ICharacterEpis[] 
  air_date: string
  episode: string
  url: string
}
interface ICharacterEpis {
  url: string
}