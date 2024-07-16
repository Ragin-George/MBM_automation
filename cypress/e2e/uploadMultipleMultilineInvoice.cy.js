describe('Login', () => {

    it("Get Multiline Items from Invoice!", function(){
        cy.visit("http://opencage.f2wdev.eu")
        cy.wait(1000);
        cy.get("#emailaddress").type(Cypress.env("loginInfo").username);
        cy.get("#password").type(Cypress.env("loginInfo").password);
        cy.wait(1000);
        cy.get("button[type='submit']").click();
        cy.wait(3000);
        cy.get(':nth-child(3) > .sitemap-box > .MuiList-root > .MuiListItem-root > .sitemap-sub-text').click()
        cy.wait(3000);
        cy.get('#invoices_list_add').click();
        //cy.get('#brows-file-btn').selectFile('Multiline_Single_page/Rg vom 03.08.2022 - Eurobike 2022.pdf', {action: 'drag-drop'})
        cy.get('#brows-file-btn').selectFile(['Multiline_Single_page/Rg vom 03.08.2022 - Eurobike 2022.pdf', 'Multiline_Single_page/Rg vom 01.06.2022 - Otto Office.pdf', 'Multiline_Single_page/Rg vom 04.11.2022 - Holz Frank GmbH.pdf'], {action: 'drag-drop'}) 
        cy.get('#MULTI').click();
        cy.get('#upload-invoice-by-operator-submit').click();
        cy.wait(45000);
        cy.get('#invoices_list_refresh').click();
        cy.get('#operator-invoice-code-INV-1476').click();
        cy.wait(3000);
        cy.get('#invoiceno').invoke('val').then(text => { const invoice_no = text;
            cy.get('#my-custom-id-invoiceDate').invoke('val').then(text => { const invoice_date = text;
            cy.get('#canvas-form-vat-no').invoke('val').then(text => { const vat_no = text;
            cy.get('#canvas-form-supplier-name').invoke('val').then(text => { const supplier_name = text;
            cy.get('#canvas-form-supplier-address').invoke('val').then(text => { const supplier_address1 = text;
            cy.get('#canvas-form-net-amount').invoke('val').then(text => { const net_amount1 = text;
            cy.get('#canvas-form-tax-amount').invoke('val').then(text => { const tax_amount1 = text;
            cy.get('#canvas-form-gross-amount').invoke('val').then(text => { const gross_amount1 = text;
                let currentURL
                cy.url().then(url => {
                        currentURL = url
                const supplier_address= supplier_address1.replace(/,/g," ");
                const net_amount= net_amount1.replace(/,/g,"");
                const gross_amount= gross_amount1.replace(/,/g,"");
                const tax_amount= tax_amount1.replace(/,/g,"");
                cy.writeFile('AzureAI_Single_MultiLine.csv','Invoice details web url '+','+ 'Invoice Number'+','+'VAT no'+ ','+
                    'Invoice Date'+','+ 'Supplier Name'+','+'Supplier Address'+','+'Net Amount'+','+'Tax Amount'+','+
                    'Gross Amount'+('\n')+url+','+invoice_no +','+vat_no +','+invoice_date +','+supplier_name +','+supplier_address+','+net_amount +
                    ','+tax_amount +','+gross_amount+ ('\n')+('\n')+'Line Item Number'+','+'Start Date'+','+'End Date'+','+'Employee'+
                    ','+'Budget Group'+','+'Category'+','+'Sub Category'+','+'Line Item Description'+','+'Line Item Gross Amount'+
                    ','+'Line Item Tax Percentage'+','+'Line Item Tax Amount'+','+'Line Item Net Amount'+','+'Paid By'+','+
                    'Expense Type'+','+'Remaining Budget'+','+'Accept In Budget'+','+'Accept Over Budget'+','+'Accept Over Manual'+
                    ','+'Excess Over Budget'+','+'Comments'+','+'Exported'+('\n'));
        

            cy.get('#invoice-items-table').each(($row, index, $rows) => {
                cy.wrap($row).find('.invoice-line-item').each(($lineItem, lineItemIndex, $lineItems) => {
                  cy.wrap($lineItem)     
                  .within(function(){
              
                cy.get('.input-textfield-invoice-line-item-itemno').invoke('val').then(text => { const itemNo = text;
                cy.get('.input-date-invoice-line-item-start-date').invoke('val').then(text => { const startDate = text;
                cy.get('.input-date-invoice-line-item-end-date').invoke('val').then(text => { const endDate = text
                cy.get('.input-autocomplete-invoice-line-item-employee').invoke('val').then(text => { const employee	 = text;
                cy.get('.input-autocomplete-invoice-line-item-budget-group').invoke('val').then(text => { const budgetGroup = text;
                cy.get('.input-autocomplete-invoice-line-item-category').invoke('val').then(text => { const category = text;
                cy.get('.input-autocomplete-invoice-line-item-sub-category').invoke('val').then(text => { const subCategory = text;        
                cy.get('.input-textfield-invoice-line-item-description').invoke('val').then(text => { const description = text;
                cy.get('.invoice-line-item-gross-amount').invoke('val').then(text => { const lineGrossAmount1 = text;
                cy.get('.input-textfield-invoice-line-item-tax-percentage').invoke('val').then(text => { const linetaxPercentage = text;
                cy.get('.invoice-line-item-tax-amount').invoke('val').then(text => { const linetaxAmount1 = text;
                cy.get('.invoice-line-item-net-amount').invoke('val').then(text => { const linenetAmount1 = text;
                cy.get('.input-autocomplete-invoice-line-item-paid-by').invoke('val').then(text => { const paidBy = text;
                cy.get('.input-autocomplete-invoice-line-item-expense-type').invoke('val').then(text => { const expenseType = text;
                cy.get('.invoice-amount-invoice-line-item-remaining-budget').invoke('val').then(text => { const remainingBudget = text;
                cy.get('.invoice-amount-invoice-line-item-accept-in-budget').invoke('val').then(text => { const acceptedInBudget = text;
                cy.get('.invoice-amount-invoice-line-item-accept-over-budget').invoke('val').then(text => { const acceptedOverBudget = text;
                //cy.get('#acceptedOverBudgetManual-0').invoke('val').then(text => { const acceptedOverBudgetManual = text;
                cy.get('.invoice-line-item-excess-over-budget').invoke('val').then(text => { const excessOverBudget = text;
                cy.get('.input-textfield-invoice-line-item-comments').invoke('val').then(text => { const comments = text;
                cy.get('.invoice-line-item-exported ').invoke('val').then(text => { const exported  = text;
                
                const lineGrossAmount= lineGrossAmount1.replace(/,/g,"");
                const linetaxAmount = linetaxAmount1.replace(/,/g,"");
                const linenetAmount = linenetAmount1.replace(/,/g,"");

                cy.writeFile('AzureAI_Single_MultiLine.csv',itemNo+','+startDate+','+endDate+','+employee+','+budgetGroup+','+category+','+subCategory+','+description+
                        ','+lineGrossAmount+','+linetaxPercentage+','+linetaxAmount+','+linenetAmount+','+paidBy+','+
                        expenseType+','+remainingBudget+','+acceptedInBudget+','+acceptedOverBudget+
                        ','+excessOverBudget+','+comments+','+exported+('\n'),{ flag:'a+'}); 
        
        })})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})

        cy.go('back');
        cy.get('#invoices_list_refresh').click();
        cy.get('#operator-invoice-code-INV-1477').click();
        cy.wait(3000);
        cy.get('#invoiceno').invoke('val').then(text => { const invoice_no = text;
            cy.get('#my-custom-id-invoiceDate').invoke('val').then(text => { const invoice_date = text;
            cy.get('#canvas-form-vat-no').invoke('val').then(text => { const vat_no = text;
            cy.get('#canvas-form-supplier-name').invoke('val').then(text => { const supplier_name = text;
            cy.get('#canvas-form-supplier-address').invoke('val').then(text => { const supplier_address1 = text;
            cy.get('#canvas-form-net-amount').invoke('val').then(text => { const net_amount1 = text;
            cy.get('#canvas-form-tax-amount').invoke('val').then(text => { const tax_amount1 = text;
            cy.get('#canvas-form-gross-amount').invoke('val').then(text => { const gross_amount1 = text;
                let currentURL
                cy.url().then(url => {
                        currentURL = url
                const supplier_address= supplier_address1.replace(/,/g," ");
                const net_amount= net_amount1.replace(/,/g,"");
                const gross_amount= gross_amount1.replace(/,/g,"");
                const tax_amount= tax_amount1.replace(/,/g,"");
                cy.writeFile('AzureAI_Single_MultiLine.csv','Invoice details web url '+','+ 'Invoice Number'+','+'VAT no'+ ','+
                    'Invoice Date'+','+ 'Supplier Name'+','+'Supplier Address'+','+'Net Amount'+','+'Tax Amount'+','+
                    'Gross Amount'+('\n')+url+','+invoice_no +','+vat_no +','+invoice_date +','+supplier_name +','+supplier_address+','+net_amount +
                    ','+tax_amount +','+gross_amount+ ('\n')+('\n')+'Line Item Number'+','+'Start Date'+','+'End Date'+','+'Employee'+
                    ','+'Budget Group'+','+'Category'+','+'Sub Category'+','+'Line Item Description'+','+'Line Item Gross Amount'+
                    ','+'Line Item Tax Percentage'+','+'Line Item Tax Amount'+','+'Line Item Net Amount'+','+'Paid By'+','+
                    'Expense Type'+','+'Remaining Budget'+','+'Accept In Budget'+','+'Accept Over Budget'+','+'Accept Over Manual'+
                    ','+'Excess Over Budget'+','+'Comments'+','+'Exported'+('\n'),{ flag:'a+'});
        

            cy.get('#invoice-items-table').each(($row, index, $rows) => {
                cy.wrap($row).find('.invoice-line-item').each(($lineItem, lineItemIndex, $lineItems) => {
                  cy.wrap($lineItem)     
                  .within(function(){
              
                cy.get('.input-textfield-invoice-line-item-itemno').invoke('val').then(text => { const itemNo = text;
                cy.get('.input-date-invoice-line-item-start-date').invoke('val').then(text => { const startDate = text;
                cy.get('.input-date-invoice-line-item-end-date').invoke('val').then(text => { const endDate = text
                cy.get('.input-autocomplete-invoice-line-item-employee').invoke('val').then(text => { const employee	 = text;
                cy.get('.input-autocomplete-invoice-line-item-budget-group').invoke('val').then(text => { const budgetGroup = text;
                cy.get('.input-autocomplete-invoice-line-item-category').invoke('val').then(text => { const category = text;
                cy.get('.input-autocomplete-invoice-line-item-sub-category').invoke('val').then(text => { const subCategory = text;        
                cy.get('.input-textfield-invoice-line-item-description').invoke('val').then(text => { const description = text;
                cy.get('.invoice-line-item-gross-amount').invoke('val').then(text => { const lineGrossAmount1 = text;
                cy.get('.input-textfield-invoice-line-item-tax-percentage').invoke('val').then(text => { const linetaxPercentage = text;
                cy.get('.invoice-line-item-tax-amount').invoke('val').then(text => { const linetaxAmount1 = text;
                cy.get('.invoice-line-item-net-amount').invoke('val').then(text => { const linenetAmount1 = text;
                cy.get('.input-autocomplete-invoice-line-item-paid-by').invoke('val').then(text => { const paidBy = text;
                cy.get('.input-autocomplete-invoice-line-item-expense-type').invoke('val').then(text => { const expenseType = text;
                cy.get('.invoice-amount-invoice-line-item-remaining-budget').invoke('val').then(text => { const remainingBudget = text;
                cy.get('.invoice-amount-invoice-line-item-accept-in-budget').invoke('val').then(text => { const acceptedInBudget = text;
                cy.get('.invoice-amount-invoice-line-item-accept-over-budget').invoke('val').then(text => { const acceptedOverBudget = text;
                //cy.get('#acceptedOverBudgetManual-0').invoke('val').then(text => { const acceptedOverBudgetManual = text;
                cy.get('.invoice-line-item-excess-over-budget').invoke('val').then(text => { const excessOverBudget = text;
                cy.get('.input-textfield-invoice-line-item-comments').invoke('val').then(text => { const comments = text;
                cy.get('.invoice-line-item-exported ').invoke('val').then(text => { const exported  = text;
                
                const lineGrossAmount= lineGrossAmount1.replace(/,/g,"");
                const linetaxAmount = linetaxAmount1.replace(/,/g,"");
                const linenetAmount = linenetAmount1.replace(/,/g,"");

                cy.writeFile('AzureAI_Single_MultiLine.csv',itemNo+','+startDate+','+endDate+','+employee+','+budgetGroup+','+category+','+subCategory+','+description+
                        ','+lineGrossAmount+','+linetaxPercentage+','+linetaxAmount+','+linenetAmount+','+paidBy+','+
                        expenseType+','+remainingBudget+','+acceptedInBudget+','+acceptedOverBudget+
                        ','+excessOverBudget+','+comments+','+exported+('\n'),{ flag:'a+'}); 
        
        })})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})

        cy.go('back');
        cy.get('#invoices_list_refresh').click();
        cy.get('#operator-invoice-code-INV-1478').click();
        cy.wait(3000);
        cy.get('#invoiceno').invoke('val').then(text => { const invoice_no = text;
            cy.get('#my-custom-id-invoiceDate').invoke('val').then(text => { const invoice_date = text;
            cy.get('#canvas-form-vat-no').invoke('val').then(text => { const vat_no = text;
            cy.get('#canvas-form-supplier-name').invoke('val').then(text => { const supplier_name = text;
            cy.get('#canvas-form-supplier-address').invoke('val').then(text => { const supplier_address1 = text;
            cy.get('#canvas-form-net-amount').invoke('val').then(text => { const net_amount1 = text;
            cy.get('#canvas-form-tax-amount').invoke('val').then(text => { const tax_amount1 = text;
            cy.get('#canvas-form-gross-amount').invoke('val').then(text => { const gross_amount1 = text;
                let currentURL
                cy.url().then(url => {
                        currentURL = url
                const supplier_address= supplier_address1.replace(/,/g," ");
                const net_amount= net_amount1.replace(/,/g,"");
                const gross_amount= gross_amount1.replace(/,/g,"");
                const tax_amount= tax_amount1.replace(/,/g,"");
                cy.writeFile('AzureAI_Single_MultiLine.csv','Invoice details web url '+','+ 'Invoice Number'+','+'VAT no'+ ','+
                    'Invoice Date'+','+ 'Supplier Name'+','+'Supplier Address'+','+'Net Amount'+','+'Tax Amount'+','+
                    'Gross Amount'+('\n')+url+','+invoice_no +','+vat_no +','+invoice_date +','+supplier_name +','+supplier_address+','+net_amount +
                    ','+tax_amount +','+gross_amount+ ('\n')+('\n')+'Line Item Number'+','+'Start Date'+','+'End Date'+','+'Employee'+
                    ','+'Budget Group'+','+'Category'+','+'Sub Category'+','+'Line Item Description'+','+'Line Item Gross Amount'+
                    ','+'Line Item Tax Percentage'+','+'Line Item Tax Amount'+','+'Line Item Net Amount'+','+'Paid By'+','+
                    'Expense Type'+','+'Remaining Budget'+','+'Accept In Budget'+','+'Accept Over Budget'+','+'Accept Over Manual'+
                    ','+'Excess Over Budget'+','+'Comments'+','+'Exported'+('\n'),{ flag:'a+'});
        

            cy.get('#invoice-items-table').each(($row, index, $rows) => {
                cy.wrap($row).find('.invoice-line-item').each(($lineItem, lineItemIndex, $lineItems) => {
                  cy.wrap($lineItem)     
                  .within(function(){
              
                cy.get('.input-textfield-invoice-line-item-itemno').invoke('val').then(text => { const itemNo = text;
                cy.get('.input-date-invoice-line-item-start-date').invoke('val').then(text => { const startDate = text;
                cy.get('.input-date-invoice-line-item-end-date').invoke('val').then(text => { const endDate = text
                cy.get('.input-autocomplete-invoice-line-item-employee').invoke('val').then(text => { const employee	 = text;
                cy.get('.input-autocomplete-invoice-line-item-budget-group').invoke('val').then(text => { const budgetGroup = text;
                cy.get('.input-autocomplete-invoice-line-item-category').invoke('val').then(text => { const category = text;
                cy.get('.input-autocomplete-invoice-line-item-sub-category').invoke('val').then(text => { const subCategory = text;        
                cy.get('.input-textfield-invoice-line-item-description').invoke('val').then(text => { const description = text;
                cy.get('.invoice-line-item-gross-amount').invoke('val').then(text => { const lineGrossAmount1 = text;
                cy.get('.input-textfield-invoice-line-item-tax-percentage').invoke('val').then(text => { const linetaxPercentage = text;
                cy.get('.invoice-line-item-tax-amount').invoke('val').then(text => { const linetaxAmount1 = text;
                cy.get('.invoice-line-item-net-amount').invoke('val').then(text => { const linenetAmount1 = text;
                cy.get('.input-autocomplete-invoice-line-item-paid-by').invoke('val').then(text => { const paidBy = text;
                cy.get('.input-autocomplete-invoice-line-item-expense-type').invoke('val').then(text => { const expenseType = text;
                cy.get('.invoice-amount-invoice-line-item-remaining-budget').invoke('val').then(text => { const remainingBudget = text;
                cy.get('.invoice-amount-invoice-line-item-accept-in-budget').invoke('val').then(text => { const acceptedInBudget = text;
                cy.get('.invoice-amount-invoice-line-item-accept-over-budget').invoke('val').then(text => { const acceptedOverBudget = text;
                //cy.get('#acceptedOverBudgetManual-0').invoke('val').then(text => { const acceptedOverBudgetManual = text;
                cy.get('.invoice-line-item-excess-over-budget').invoke('val').then(text => { const excessOverBudget = text;
                cy.get('.input-textfield-invoice-line-item-comments').invoke('val').then(text => { const comments = text;
                cy.get('.invoice-line-item-exported ').invoke('val').then(text => { const exported  = text;
                
                const lineGrossAmount= lineGrossAmount1.replace(/,/g,"");
                const linetaxAmount = linetaxAmount1.replace(/,/g,"");
                const linenetAmount = linenetAmount1.replace(/,/g,"");

                cy.writeFile('AzureAI_Single_MultiLine.csv',itemNo+','+startDate+','+endDate+','+employee+','+budgetGroup+','+category+','+subCategory+','+description+
                        ','+lineGrossAmount+','+linetaxPercentage+','+linetaxAmount+','+linenetAmount+','+paidBy+','+
                        expenseType+','+remainingBudget+','+acceptedInBudget+','+acceptedOverBudget+
                        ','+excessOverBudget+','+comments+','+exported+('\n'),{ flag:'a+'}); 
        
        })})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})


    })
        
})