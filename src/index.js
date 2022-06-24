const express = require('express') 

const api =express();
api.listen(3000,() => { 
    console.log("fruits");
}
)
api.get(`/`,(req,res) => {
    console.log(req);
    res.send(getAllFruits);
})