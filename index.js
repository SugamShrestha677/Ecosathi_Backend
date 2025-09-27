const express = require('express');
const app = express();
const config = require('./src/configs/config');
app.use(express.json());
const db = require('./src/configs/db');
const port = config.PORT;

// db.connect();

app.get('/',(req,res)=>{
    res.send("Hello World!!!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});
