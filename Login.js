import { query } from 'express';
import client from './conection.js'
client.connect();
const handleLogin=(req,res) =>{
    console.log(req.body)
    let query =`select * from users where user_name ='${req.body.username}' and password ='${req.body.password}' and role='${req.body.role}'`
    console.log(query)
    client.query(query, (err,result) => {
        if (!err) {
            if(result.rowCount === 0) {
            res.send('not found')
        }
        else {
            res.send({user:result.rows})
         }
         
        }
        else {
            res.send(err.message)
         }
        }
       
    )
}
const handleGetDoctors=(req,res) =>{
    
    let query =`select * from users where role='doctor'`
    console.log(query)
    
    client.query(query, (err,result) => {
        if (!err) {
            if(result.rowCount === 0) {
            res.send('not found')
        }
        else {
            res.send({doctors:result.rows})
         }
         
        }
        else {
            res.send(err.message)
         }
    }
       
    )
}

const handleAddVisit=(req,res) =>{
    
    let query =`insert into visits (doctor_id,visit_date,patient_name) values('${req.body.doctor_id}','${req.body.visit_date}','${req.body.patient_name}')`
    console.log(query)
    
    client.query(query, (err,result) => {
        if (result) {
            
           res.send({success:true})
        }
       else{
        res.send({error:err.message})
       } 
    }
       
    )
}
const handleUpdateVisit=(req,res) =>{
    console.log(req.body)
let amount= parseInt(req.body.price)
console.log(amount)
    let query =`update visits set treatment='${req.body.treatment}', daignosis='${req.body.daignosis}'
    ,amount=${amount}
     where id=${req.body.id}`
    console.log(query)
    
    client.query(query, (err,result) => {
        if (result) {
            
           res.send({success:true})
        }
       else{
        res.send({error:err.message});
       } 
    }
       
    )
}
const handleGetVisit=(req,res) =>{
    
    let query =`select * from visits where doctor_id=${req.body.doctor_id}`
    console.log(query)
    
    client.query(query, (err,result) => {
        if (!err) {
            if(result.rowCount === 0) {
            res.send({visits:[]})
        }
        else {
            res.send({visits:result.rows})
         }
         
        }
        else {
            res.send(err.message)
         }
        }
    )
}
export {handleLogin,handleGetDoctors,handleAddVisit,handleUpdateVisit,handleGetVisit}