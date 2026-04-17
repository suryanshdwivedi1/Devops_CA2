const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({
        project: "devops_ca2",
        status: "Server is running"
    });
});

app.get('/', (req, res) => {
    res.send('devops_ca2 is running');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`devops_ca2 running on port ${PORT}`);
});