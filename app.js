const express = require('express'); 
const app = express();  

const PORT = process.env.PORT || 8000;

app.get("/" , (req, res) => {
    return res.json ({message: "here this is docke start!"});
})
app.post("/dopost" , (req, res) => {
    return res.json ({message: "this is post req !"});
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})