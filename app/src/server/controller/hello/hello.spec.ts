import { test, expect } from '@jest/globals'
import { HelloController } from './hello'
import { createRequest, createResponse } from 'node-mocks-http'

describe('Hello Controller', () => {
  test('Should return "Hello world" without parameters', () => {
    const helloController = new HelloController()
    const req = createRequest()
    const res = createResponse()

    helloController.hello(req, res)

    expect(res._getJSONData()).toEqual({
      status: 200,
      data: {
        text: 'Hello world',
      },
    })

    expect(res._getStatusCode()).toBe(200)
  })

  test('Should return "Hello name" with parameter', () => {
    const helloController = new HelloController()
    const req = createRequest({
      query: {
        name: 'test',
      },
    })
    const res = createResponse()

    helloController.hello(req, res)

    expect(res._getJSONData()).toEqual({
      status: 200,
      data: {
        text: 'Hello test',
      },
    })

    expect(res._getStatusCode()).toBe(200)
  })

  test('Should return 404 with parameter name == "null"', () => {
    const helloController = new HelloController()
    const req = createRequest({
      query: {
        name: 'null',
      },
    })
    const res = createResponse()

    helloController.hello(req, res)

    expect(res._getJSONData()).toEqual({
      status: 404,
      data: {},
    })

    expect(res._getStatusCode()).toBe(404)
  })
})
