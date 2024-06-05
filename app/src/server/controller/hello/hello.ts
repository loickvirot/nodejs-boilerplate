import { type Request, type Response } from 'express'
import { BaseController } from '../baseController/baseController'

export class HelloController extends BaseController {
  async hello(req: Request, res: Response): Promise<void> {
    const name = req.query.name ?? 'world'

    if (name == 'null') {
      this.json(res, {}, 404)
      return
    }

    this.json(res, {
      text: `Hello ${name}`,
    })
  }
}
