import express from 'express'
import * as diaryService from '../services/diaries.services'
import { validateDiaryEntryPayload } from '../utils/validator'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id))
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { value, error } = validateDiaryEntryPayload(req.body)
  if (error != null) {
    return res.send({ error: error.message })
  }
  const newDiaryEntry = diaryService.addDiary(value)
  return res.json(newDiaryEntry)
})

export default router
