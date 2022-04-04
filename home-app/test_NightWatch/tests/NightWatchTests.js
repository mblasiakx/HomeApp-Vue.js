module.exports={
    'Log in and go to product panel'(browser){
        browser
        .url('http://localhost:8080/')
       // .pause(1000)
        .click('#login > .form-button')
        //.pause(1000)
        .setValue('#login > :nth-child(3) > .form-input', "xxx1")
        .pause(1000)
        .setValue('#login > :nth-child(4) > .form-input', "xxx1@pl")
        .pause(1000)
        .setValue('#login > :nth-child(5) > .form-input', "xxx1@pl")
        .pause(1000)
        .click('#login > .form-button')
        //.pause(1000)
        

    },

    'Add items to Product panel'(browser){
        browser
        .setValue('.add-panel > input',"ziemniaki")
        //.pause(1000)
        .click('.add-panel > button')
        .pause(1000)
        .setValue('.add-panel > input', "cola")
        //.pause(1000)
        .click('.add-panel > button')
        .pause(1000)
        .setValue('.add-panel > input', "szynka")
        //.pause(1000)
        .click('.add-panel > button')
        .pause(1000)             
    },

    
    'Delete items from Product panel'(browser){
        browser
        .click(':nth-child(1) > .one-element > button')
        .pause(1000)
        .click(':nth-child(2) > .one-element > button')
        .pause(1000)
        .click(':nth-child(3) > .one-element > button')
        .pause(1000)        

    },

    'Go to Split panel and add some bills'(browser){
        browser
        .click('[href="#/splitPanel"]')
        .setValue(':nth-child(1) > input',"zakupy lidl")
        .pause(1000)
        .setValue(':nth-child(2) > input',"122")
        .pause(1000)
        .setValue(':nth-child(3) > input',"2021-11-11")    
        .pause(1000)
        .click('.button-list > :nth-child(2)')
        .pause(1000)
    },

    'Go to Cleaning panel and add some duties'(browser){
        browser
        .click('[href="#/Schedule"]')
        .setValue(':nth-child(1) > input',"2021-11-11")
        .pause(1000)
        .setValue(':nth-child(2) > input',"Madzia")
        .pause(1000)
        .setValue(':nth-child(3) > input',"kuchnia")    
        .pause(1000)
        .setValue(':nth-child(4) > input',"2021-11-12")
        .pause(1000)
        .click('button')
        .pause(1000)
    },

    'Log out'(browser){
        browser
        .click('[href="#/"]')
      
    },


}


