import { Router } from 'express'
const router = Router()

router.get('/branch', (req, res)=> res.json('getting branches'))

export default router