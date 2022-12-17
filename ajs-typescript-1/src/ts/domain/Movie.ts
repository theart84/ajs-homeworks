import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly originalName: string,
    readonly badgeIMAX: boolean,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly timelineInMinutes: number,
    readonly poster: string
  ) {
    this.id = id
    this.name = name
    this.originalName = originalName
    this.badgeIMAX = badgeIMAX
    this.year = year
    this.country = country
    this.tagline = tagline
    this.genre = genre
    this.timelineInMinutes = timelineInMinutes
    this.poster = poster
  }
}
