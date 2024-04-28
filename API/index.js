const express = require("express"); //importing express using require keyword
const paintings = require("./MOCK_DATA.json") // storing mock data in variable
const app = express(); //creating instance of express
const PORT = 8000;

//routes
app.get("/paintings",(req,res) => {     // /paintings is called as endpoint or route in js
    if(paintings && paintings.length>0)
       return res.json({success:true,data:paintings});
    else
        return res.json({success:false})
});

app.get("/paintings/:id",(req,res) => {
    const id =parseInt(req.params.id);
    console.log(id);
    const foundObject = paintings.find(obj => obj.id === id);// we used object instead of array because we can store different type of data in object  
    

console.log(foundObject); 

    if(foundObject)
       return res.json({success:true,data:foundObject}); //data is present true
    else
        return res.json({success:false}) //data is not present false
     
});
app.listen(PORT,() => console.log(`Server Started at PORT:${PORT}`))
     