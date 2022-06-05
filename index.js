const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})




app.listen(port, () => {
    console.log(`listining on port ${port}`)
})