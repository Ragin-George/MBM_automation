describe('Login', () => {

    it('Upload single invoice with multi line item!', () => {
        cy.visit("http://opencage.f2wdev.eu")
        cy.wait(1000);
        cy.get("#emailaddress").type(Cypress.env("loginInfo").username);
        cy.get("#password").type(Cypress.env("loginInfo").password);
        cy.wait(1000);
        cy.get("button[type='submit']").click();
        cy.wait(3000);
        cy.visit("http://opencage.f2wdev.eu/invoices")
        cy.wait(3000);
        // cy.get('#invoices_list_add').click();
        // cy.get('#brows-file-btn').selectFile('Multiline_Single_page/Rg vom 01.08.2022 - greenboxx animation GmbH.pdf', {action: 'drag-drop'})
        // cy.get('#upload-invoice-by-operator-submit').click();
        // cy.wait(15000);
        // cy.get('#invoices_list_refresh').click();
        cy.get('#operator-invoice-code-INV-1266').click();
        cy.wait(3000);
        // cy.get('#invoiceno').invoke('val').then(text => { const invoice_no = text;
        // cy.get('#date-picker-canvas-form-invoice-date').invoke('val').then(text => { const invoice_date = text;
        // cy.get('#canvas-form-vat-no').invoke('val').then(text => { const vat_no = text;
        // cy.get('#canvas-form-supplier-name').invoke('val').then(text => { const supplier_name = text;
        // cy.get('#canvas-form-supplier-address').invoke('val').then(text => { const supplier_address = text;
        // cy.get('#canvas-form-net-amount').invoke('val').then(text => { const net_amount = text;
        // cy.get('#canvas-form-tax-amount').invoke('val').then(text => { const tax_amount = text;

            // function countElementsWithPrefix(prefix) {
            //     // Select all elements in the document
            //     const allElements = document.querySelectorAll('*');
            //     // Filter elements whose IDs start with the specified prefix
            //     const filteredElements = Array.from(allElements).filter(element => {
            //         return element.id && element.id.startsWith(prefix);
            //     });
            //     // Return the count of filtered elements
            //     return filteredElements.length;
            // }
            
            // // Usage
            // const prefix = "itemNo-";
            // const count = countElementsWithPrefix(prefix);
            // cy.log('Number of elements with ID prefix "${prefix}": ${count}');
        
        

        cy.get('#invoice-items-table')
        .then($tbody => {
        const count = $tbody.find('#MuiTableRow-root css-xns5jw-MuiTableRow-root').length // jquery find won't fail
        if (count > 0) {
        cy.log('There are ' ,count )  //,'elements'
        } else {
        cy.log('There are no elements')
        }
        })

        // cy.get('#invoice-items-table')
        // .find('.listing')
        // .then(listing => {
        //   const listingCount = Cypress.$(listing).length;
        //   expect(listing).to.have.length(listingCount);
        //   cy.log('rows count is1: ' ,listingCount);
        // });


        // cy.get('#invoiceno').invoke('val').then(text => { const invoice_no = text;
        //     cy.get('#date-picker-canvas-form-invoice-date').invoke('val').then(text => { const invoice_date = text;
        //     cy.get('#canvas-form-vat-no').invoke('val').then(text => { const vat_no = text;
        //     cy.get('#canvas-form-supplier-name').invoke('val').then(text => { const supplier_name = text;
        //     cy.get('#canvas-form-supplier-address').invoke('val').then(text => { const supplier_address = text;
        //     cy.get('#canvas-form-net-amount').invoke('val').then(text => { const net_amount = text;
        //     cy.get('#canvas-form-tax-amount').invoke('val').then(text => { const tax_amount = text;
        //     cy.get('#canvas-form-gross-amount').invoke('val').then(text => { const gross_amount = text;
        //     cy.get('#itemNo-0').invoke('val').then(text => { const itemNo = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(3) > .css-0 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').invoke('val').then(text => { const startDate = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(4) > .css-0 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').invoke('val').then(text => { const endDate = text;
        //     cy.get('#userId-0').invoke('val').then(text => { const employee	 = text;
        //     cy.get('#budgetGroupId-0').invoke('val').then(text => { const budgetGroup = text;
        //     cy.get('#categoryId-0').invoke('val').then(text => { const category = text;
        //     cy.get('#subCategoryId-0').invoke('val').then(text => { const subCategory = text;        
        //     cy.get('#description-0').invoke('val').then(text => { const description = text;
        //     cy.get('#grossAmount-0').invoke('val').then(text => { const lineGrossAmount = text;
        //     cy.get('#taxPercentage-0').invoke('val').then(text => { const linetaxPercentage = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(12) > .currency-input-main > #taxAmount-0-0').invoke('val').then(text => { const linetaxAmount = text;
        //     cy.get('#netAmount-0').invoke('val').then(text => { const linenetAmount = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(14) > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #paidBy-0-0').invoke('val').then(text => { const paidBy = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(15) > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #expenseType-0-0').invoke('val').then(text => { const expenseType = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(16) > .MuiStack-root > .currency-input-main > #remainingBudget-0-0').invoke('val').then(text => { const remainingBudget = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(17) > .currency-input-main > #acceptedInBudget-0-0').invoke('val').then(text => { const acceptedInBudget = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(18) > .currency-input-main > #acceptedOverBudget-0-0').invoke('val').then(text => { const acceptedOverBudget = text;
        //     cy.get('#acceptedOverBudgetManual-0').invoke('val').then(text => { const acceptedOverBudgetManual = text;
        //     cy.get('#excessOverBudget-0').invoke('val').then(text => { const excessOverBudget = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(21)').invoke('val').then(text => { const comments = text;
        //     cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(22)').invoke('val').then(text => { const exported  = text;
        //     let currentURL
        //     cy.url().then(url => {
        //       currentURL = url
              
        //     cy.writeFile('AzureAI_Single_MultiLine.csv', 'Invoice details web url: ' +url+('\n') +('\n')+('\n')+
        //             'Invoice Number: '+ invoice_no +('\n') +
        //             'VAT no: '+ vat_no +('\n') +
        //             'Supplier Name: '+ supplier_name +('\n') +
        //             'Invoice Date: '+ invoice_date +('\n') +
        //             'Supplier Address: '+supplier_address +('\n') +
        //             'Net Amount: '+ net_amount +('\n') +
        //             'Tax Amount: '+ tax_amount +('\n') +
        //             'Gross Amount: '+ gross_amount +('\n') +
        //             ('\n') +
        //             'Line Item Number: '+ itemNo +('\n') +
        //             'Start Date: ' + startDate +('\n') +
        //             'End Date: ' +endDate +('\n') +
        //             'Employee: ' + employee	+('\n') +
        //             'Budget Group: ' + budgetGroup +('\n') +
        //             'Category: ' + category +('\n') +
        //             'Sub Category: ' + subCategory+('\n') +
        //             'Line Item Description: '+ description +('\n') +
        //             'Line Item Gross Amount: ' + lineGrossAmount +('\n') +
        //             'Line Item Tax Percentage: ' + linetaxPercentage+('\n') +
        //             'Line Item Tax Amount: '  + linetaxAmount+('\n') +
        //             'Line Item Net Amount: ' + linenetAmount +('\n') +
        //             'Paid By: ' + paidBy +('\n') +
        //             'Expense Type: ' + expenseType +('\n') +
        //             'Remaining Budget: ' + remainingBudget +('\n') +
        //             'Accept In Budget: ' + acceptedInBudget +('\n') +
        //             'Accept Over Budget: ' + acceptedOverBudget +('\n') +
        //             'Accept Over Manual: ' + acceptedOverBudgetManual +('\n') +
        //             'Excess Over Budget: ' + excessOverBudget +('\n') +
        //             'Comments: ' + comments +('\n') +
        //             'Exported: ' + exported);
    
        //     })})})})})})})})})})})})})})})})})})})})})})})})})})})})})})
        
    })
})
