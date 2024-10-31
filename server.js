const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname)); // Serve all files in the current directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/homepage1.html'); // Serve homepage1.html as the homepage
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
