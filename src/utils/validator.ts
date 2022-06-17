import Joi from 'joi'
import { DiaryEntry } from '../types'

export const validateDiaryEntryPayload = (payload: any): Joi.ValidationResult => {
  return Joi.object<DiaryEntry>({
    date: Joi.string().required(),
    comment: Joi.string().required(),
    weather: Joi.valid('rainy', 'sunny', 'cloudy', 'windy', 'stormy').required(),
    visibility: Joi.valid('ok', 'poor', 'good', 'great').required()
  }).validate(payload, { convert: false })
}
