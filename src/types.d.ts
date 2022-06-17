export type Weather = 'rainy' | 'sunny' | 'cloudy' | 'windy' | 'stormy'
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
