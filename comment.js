// Create web server
// 1. Import express
const express = require('express');
const bodyParser = require('body-parser');
// 2. Create web server
const app = express();
// 3. Set port
const port = 3000;
// 4. Set template engine
app.set('view engine', 'pug');
app.set('views', './views');
// 5. Set static folder
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 6. Set route
app.get('/', (req, res) => {
    res.render('index');
});
// 7. Listen request from client
app.listen(port, () => console.log(`Server is running on port ${port}`));
