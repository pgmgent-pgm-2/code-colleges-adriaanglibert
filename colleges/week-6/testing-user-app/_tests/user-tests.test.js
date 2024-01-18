const express = require('express');
const request = require('supertest');

const userController = require('../src/controllers/userController');

jest.mock('../src/controllers/userController.js')

function sum(a, b) {
    return a + b;
}

const app = express();

describe('Dit is de som van twee getallen', () => {
    it('moet 4 teruggeven', () => {
        expect(sum(2, 2)).toBe(4);
    })
});

describe('Haal alle users op', () => {
    it('user teruggeven', async () => {
        const response = await request('http://localhost:2525').get('/users');

        expect(response.status).toBe(200);
    })
})

