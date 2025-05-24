const express = require('express');
const cors = require('cors');
const mysql = require('mysql')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud'
});
db.connect((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('connected')
    }
});

//view
app.get('/', (req, res) => {
   const sql= "SELECT * FROM sstudent"
   db.query(sql, (err, result)=>{
    if(err) return res.json({Message:" Error inside server"});
        return res.json(result);
    
   })
});

// api of user
app.post('/user', (req, res)=>{
    const sql ="INSERT INTO sstudent(`name`, `email`) VALUES (?)";
    const values =[
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values],(err, result)=>{
        if(err) return res.json({Message:" Error inside server"});
        return res.json(result)
    })
})

//api of read
app.get('/Read/:id', (req, res) => {
   const sql= "SELECT * FROM sstudent WHERE id = ?"
   const id= req.params.id
   db.query(sql, [id],(err, result)=>{
    if(err) return res.json({Message:" Error inside server"});
        return res.json(result);
    
   })
});
 //api of edit
 app.put('/Edit/:id',(req, res)=>{
    const sql = "UPDATE sstudent SET name = ?, email = ? WHERE id = ?";
    const id = req.params.id
    db.query(sql,[req.body.name, req.body.email , id],(err,result)=>{
        if(err) return res.json({Message:" Error inside server"});
        return res.json(result); 
    })
 })

 //api of delete
  app.delete('/Delete/:id',(req,res)=>{
    const sql = "DELETE FROM sstudent WHERE id = ?"
    const id= req.params.id
   db.query(sql, [id],(err, result)=>{
    if(err) return res.json({Message:" Error inside server"});
        return res.json(result);
    
   })
});



app.listen(6060,()=>{
    console.log("server is running")
})



