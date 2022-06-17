export enum Weather {
  Rainy = 'rainy',
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export type Visibility = 'ok' | 'poor' | 'good' | 'great'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
