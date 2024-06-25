

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



    
    })
});
