/// <reference types="cypress"/>

describe('Cypress tests Chrome and Edge', ()=>{
    it("Log in and go to product panel", ()=>{   // ready
        cy.visit("http://localhost:8080/#/")
        cy.get('#login > .form-button').click()
        cy.get('#login > :nth-child(3) > .form-input').type('xxx1')
        cy.wait(1000)
        cy.get('#login > :nth-child(4) > .form-input').type('xxx1@pl')
        cy.wait(1000)
        cy.get('#login > :nth-child(5) > .form-input').type('xxx1@pl')
        cy.wait(1000)
        cy.get('#login > .form-button').click()
    })

    it("Add items to Product panel", ()=>{      // ready
        cy.get('.add-panel > input').type('piwo')
        cy.get('.add-panel > button').click()
        cy.wait(1000)

        cy.get('.add-panel > input').type('banany')
        cy.get('.add-panel > button').click()
         cy.wait(1000)

        cy.get('.add-panel > input').type('masło')
        cy.get('.add-panel > button').click()
        cy.wait(1000)
      
    })

    it("Delete new items from Product panel", ()=>{     // ready
    
        cy.get(':nth-child(1) > .one-element > button').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .one-element > button').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .one-element > button').click()
        cy.wait(1000)
      
      
    })

    it("Go to Split panel and add some bills", ()=>{     // can't get members list (should get from backend)
        cy.get('[href="#/splitPanel"]').click()
        cy.get(':nth-child(1) > input').type('zakupy biedronka')
        cy.wait(1000)
        cy.get(':nth-child(2) > input').type('222')
        cy.wait(1000)
        cy.get(':nth-child(3) > input').type('2021-11-11')
        cy.wait(1000)
        cy.get('.button-list > :nth-child(2)').click()
        cy.wait(1000)
    })

    it("Go to Cleaning panel and add some duties", ()=>{    // ready
        cy.get('[href="#/Schedule"]').click()
        cy.get(':nth-child(1) > input').type('2021-11-11')
        cy.wait(1000)
        cy.get(':nth-child(2) > input').type('Ania')
        cy.wait(1000)
        cy.get(':nth-child(3) > input').type('łazienka')
        cy.wait(1000)
        cy.get(':nth-child(4) > input').type('2021-11-18')
        cy.wait(1000)
        cy.get('button').click({multiple:true})
        cy.wait(1000) 
         
    })


    it("Log out", ()=>{      // update
         cy.get('[href="#/"]').click()

    })


})

/*
describe('Cypress tests Firefox', ()=>{
    it("Log in and go to product panel", ()=>{   // ready
        cy.visit("http://localhost:8080/#/")
        cy.get('#login > .form-button').click()
        cy.get('#login > :nth-child(3) > .form-input').type('xxx1')
        cy.wait(1000)
        cy.get('#login > :nth-child(4) > .form-input').type('xxx1@pl')
        cy.wait(1000)
        cy.get('#login > :nth-child(5) > .form-input').type('xxx1@pl')
        cy.wait(1000)
        cy.get('#login > .form-button').click()
    })

    it("Add items to Product panel", ()=>{      // ready
        cy.get('.add-panel > input').type('piwo')
        cy.get('.add-panel > button').click()
        cy.wait(1000)

        cy.get('.add-panel > input').type('banany')
        cy.get('.add-panel > button').click()
         cy.wait(1000)

        cy.get('.add-panel > input').type('masło')
        cy.get('.add-panel > button').click()
        cy.wait(1000)
      
    })

    it("Delete new items from Product panel", ()=>{     // ready
    
        cy.get(':nth-child(1) > .one-element > button').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .one-element > button').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .one-element > button').click()
        cy.wait(1000)
      
      
    })

    it("Go to Split panel and add some bills", ()=>{     // can't get members list (should get from backend)
        cy.get('[href="#/splitPanel"]').click()
        cy.get(':nth-child(1) > input').type('zakupy biedronka')
        cy.wait(1000)
        cy.get(':nth-child(2) > input').type('222')
        cy.wait(1000)
        cy.get(':nth-child(3) > input').type('2021-11-11')
        cy.wait(1000)
       
        cy.get('.button-list > :nth-child(2)').click()
        cy.wait(1000)
    })

    it("Go to Cleaning panel and add some duties", ()=>{    // ready
        cy.get('[href="#/Schedule"]').click()
        cy.get(':nth-child(1) > input').type('2021-11-11')
        cy.wait(1000)
        cy.get(':nth-child(2) > input').type('Ania')
        cy.wait(1000)
        cy.get(':nth-child(3) > input').type('łazienka')
        cy.wait(1000)
        cy.get(':nth-child(4) > input').type('2021-11-18')
        cy.wait(1000)
        cy.get('button').click({multiple:true})
        cy.wait(1000) 
         
    })

  
  

    it("Log out", ()=>{      // update
        cy.get('[href="#/"]').click()

    })


  





})*/