const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routers/index.router")

app.set('trust proxy', true);

app.use('/api', router);


app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})
