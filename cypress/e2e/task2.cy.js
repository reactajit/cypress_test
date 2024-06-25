

describe('Google Search and Write Titles to File', () => {
    it('should search for "Clarivate Analytics" and write titles to a file', () => {
        cy.visit('https://www.google.com');


        // Type the search query and press Enter
        cy.get('#APjFqb').type('Clarivate Analytics{enter}');

        // Wait for the results to load
        cy.wait(2000);

        // Grab all the result titles
        cy.get('h3').then(($titles) => {
            const titles = [];
            $titles.each((index, title) => {
                titles.push(title.innerText);
            });

            // Write the titles to a text file
            cy.writeFile('results.txt', titles.join('\n'));
        });
    });

    //a file gets created as results.text

    /*------------------------------------------------------ */

    it.only('Verify that number of jobs shown in brackets next to the city matches the number of jobs shown at the right',()=>{
        cy.visit('https://clarivate.com/')
        cy.get('body').then(($body) => {
            if ($body.find('button:contains("Manage cookie preferences")').length) {
              cy.contains('Manage cookie preferences').click({force:true});
              cy.contains('Confirm my choices').click()
            }
          });
          cy.get('#menu-item-13 > .nav-link').click() 
        
        cy.get('#menu-item-13 >a').invoke('removeAttr','target').click({force:true});

        // cy.get('body').then(($body) => {
        //     if ($body.find('button:contains("Allow")').length) {
        //       cy.contains('Allow').click({force:true});
              
        //     }
        //   });
        cy.get('#menu-item-13 > .nav-link').click({force:true})
        cy.get('[data-ph-at-index="2"] > span > .phw-btn').click({force:true})

        cy.get('input[type="checkbox"][value="Technology"]').check();
        cy.get('input[type="checkbox"][value="Bangalore"]').check();

         // Verify the number of jobs in the brackets next to 'Bangalore' matches the number of jobs listed
    cy.get('label[for="Bangalore"]').invoke('text').then((labelText) => {
        const jobCount = labelText.match(/\((\d+)\)/)[1]; // Extract number from the text
  
        // Verify the number of jobs listed matches the number in brackets
        cy.get('.job-listing').should('have.length', parseInt(jobCount, 10));



    
    })
});

    
