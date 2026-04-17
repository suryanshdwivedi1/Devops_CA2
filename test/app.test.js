const request = require('supertest');
const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.json({
        project: "devops_ca2",
        status: "Server is running"
    });
});

test('GET /health should return status 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
});