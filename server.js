const port = 3000;
const express = require("express");
const app = express();
const tasks = require("./routes/tasks"); 
const connectDB = require("./db/connect");
require("dotenv").config();
/*Middleware*/
app.use(express.json());
app.use(express.static("./public"))



/*routes*/
app.get("/hello", (req, res) => {
  res.send("Task manager app!");
});

app.use("/api/v1/tasks" , tasks);

// app.get("/api/v1/tasks")
// app.post("/api/v1/tasks")
// app.get("/api/v1/tasks/:id")
// app.patch("/api/v1/tasks/:id")
// app.delete("/api/v1/tasks/:id")


const start = async()=>{
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  }catch(error){
    console.log(error);
  }
}

start()
