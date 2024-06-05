import { HelloController } from './server/controller/hello/hello'
import Server from './server/server'

import 'dotenv/config'

// Initialize services
const helloController = new HelloController()

const s = new Server(3000, helloController)
s.serve()
