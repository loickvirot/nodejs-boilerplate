import { type Response } from 'express'

export class BaseController {
  json(res: Response, data: unknown, status: number = 200): void {
    res.status(status)
    res.json({
      status,
      data,
    })
  }
}
