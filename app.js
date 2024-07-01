const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const {router, home } = require("./routers/index.router")

app.set('trust proxy', true);

app.use('/', home);
app.use('/api', router);


app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})
