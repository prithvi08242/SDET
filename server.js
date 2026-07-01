const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP'
    });
});

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});