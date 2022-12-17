export default interface Buyable {
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
}
