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