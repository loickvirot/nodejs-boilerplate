import express from 'express'
import { type HelloController } from './controller/hello/hello'
import asyncHandler from 'express-async-handler'

export default class Server {
  public readonly app

  constructor(
    private readonly port: number,
    private readonly helloController: HelloController,
  ) {
    this.app = express()

    // Configure server

    // Uncomment this line to enable ejs template engine
    // this.app.set("view engine", "ejs");

    // Uncomment this line to enable public assets folder
    // this.app.use("/public", express.static("public"));

    // Router
    this.app.get('/', asyncHandler(helloController.hello.bind(helloController)))
  }

  public serve(): void {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}
