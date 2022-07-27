const server = require('../src/app')
const request = require('supertest')
const expect = require('chai').expect

describe('Testeando la ruta get de la API', () => {
  it('Ante el ingreso de texto deberia retornar el texto invertido y el flag de palindromo salir seteado en false', async () => {
    const query = {
      text: 'hola'
    }
    const response = await request(server).get('/iecho').query(query).set('Accept', 'application/json')

    expect('Content-Type', /json/)
    expect(response.body.data).equal('aloh')
    expect(response.body.palindromo).equal(false)
    expect(200)
  })
  it('En caso de que el texto sea un polindromo debe anexarse una flag de true', async () => {
    const query = {
      text: 'arepera'
    }
    const response = await request(server).get('/iecho').query(query).set('Accept', 'application/json')
    expect('Content-Type', /json/)
    expect(response.body.palindromo).equal(true)
    expect(response.body.data).equal('arepera')
    expect(400)
  })
  it('En caso de no recibir texto deberia retornar no text', async () => {
    const response = await request(server).get('/iecho').set('Accept', 'application/json')
    expect('Content-Type', /json/)
    expect(response.body.data).equal('no text')
    expect(400)
  })
})
