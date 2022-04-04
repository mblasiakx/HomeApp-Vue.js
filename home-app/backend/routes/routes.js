const express = require('express')
const router  = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const productTemplateCopy = require('../models/ProductModels')
const dutyTemplateCopy = require('../models/DutyModels')
const splitTemplateCopy = require('../models/SplitModel')



router.post('/split', (request,response) =>{
  const addSplit  = new splitTemplateCopy({
    email:request.body.email,
    title:request.body.title,
    price:request.body.price,
    billDate:request.body.billDate,
    members:request.body.members,
    owMeCount:request.body.owMeCount,
    membersValues:request.body.membersValues
 
  })

  addSplit.save()  
  .then(data =>{
      response.json(data)
  })

  .catch(error =>{
      response.json(error)
  })
})


router.get('/splitGet', (request,response) =>{
 
  splitTemplateCopy.find((error, data)=>{
  if(error){
      return response.json(error)
    }else{
      return response.json(data)
    }
  })
})



router.delete('/split/:id', (request,response) =>{
  const id = request.params.id;
  splitTemplateCopy.deleteOne({_id: id}, function(err, obj) {
    if (err){
      response.status(400).send(err);
      throw err;
    }

    response.json(obj)
  });
})




router.post('/duties', (request,response) =>{
  const addDuty  = new dutyTemplateCopy({
    flatId:request.body.flatId,
    TaskName:request.body.TaskName,
    Member:request.body.Member,
    StartDate:request.body.StartDate,
    UntilDate:request.body.UntilDate
 
  })

  addDuty.save()  
  .then(data =>{
      response.json(data)
  })

  .catch(error =>{
      response.json(error)
  })
})


router.get('/dutiesGet', (request,response) =>{
 
  dutyTemplateCopy.find((error, data)=>{
  if(error){
      return response.json(error)
    }else{
      return response.json(data)
    }
  })
})


router.delete('/duties/:id', (request,response) =>{
  const id = request.params.id;
  dutyTemplateCopy.deleteOne({_id: id}, function(err, obj) {
    if (err){
      response.status(400).send(err);
      throw err;
    }

    response.json(obj)
  });
})



router.post('/products', (request,response) =>{
  const addProduct  = new productTemplateCopy({
    flatId:request.body.flatId,
    productName:request.body.productName,
 
  })

  addProduct.save()  
  .then(data =>{
      response.json(data)
  })

  .catch(error =>{
      response.json(error)
  })
})

router.get('/productsGet', (request,response) =>{
 
  productTemplateCopy.find((error, data)=>{
  if(error){
      return response.json(error)
    }else{
      return response.json(data)
    }
  })
})



router.delete('/products/:id', (request,response) =>{
  const id = request.params.id;
  productTemplateCopy.deleteOne({_id: id}, function(err, obj) {
    if (err){
      response.status(400).send(err);
      throw err;
    }

    response.json(obj)
  });
})






router.post('/signup', (request,response) =>{
  const signedUpUser  = new signUpTemplateCopy({
    flatId:request.body.flatId,
    email:request.body.email,
    password:request.body.password,
    confirmPassword:request.body.confirmPassword,
  })

  signedUpUser.save()  
  .then(data =>{
      response.json(data)
  })

  .catch(error =>{
      response.json(error)
  })
})


router.get('/signupGet', (request,response) =>{
  signUpTemplateCopy.find((error, data)=>{

    if(error){
      return response.json(error)
    }else{
      return response.json(data)
    }
  })
})


module.exports = router