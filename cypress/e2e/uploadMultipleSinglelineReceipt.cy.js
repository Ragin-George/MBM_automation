describe('Upload multiple receipts', () => {

    it('Upload multiple receipts!', () => {
        cy.visit("http://opencage.f2wdev.eu")
        cy.wait(2000);
        cy.get('.MuiSelect-select').click();
        cy.contains('Englisch').click();
        cy.get('.MuiDialogActions-root > .MuiButton-outlined').click();
        cy.wait(2000);
        cy.get("#emailaddress").type("autooperator003@yopmail.com");
        cy.get("#password").type("Password@1234");
        cy.wait(1000);
        cy.get("button[type='submit']").click();
        cy.wait(3000);
        cy.visit("http://opencage.f2wdev.eu/invoices")
        cy.wait(3000);
        cy.get('#invoices_list_add').click();
        cy.get('#brows-file-btn').selectFile(['Taxi/Screenshot 2024-06-19 112257.png','Taxi/Screenshot 2024-06-19 112315.png'], {action: 'drag-drop'}) 
        cy.get('#upload-invoice-by-operator-submit').click();
        cy.wait(30000);
        cy.get('#invoices_list_refresh').click({force: true});
        cy.get('#operator-invoice-code-INV-2786').click();
        cy.wait(5000);

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
            cy.get('#itemNo-0').invoke('val').then(text => { const itemNo = text;
              cy.get('.input-date-invoice-line-item-start-date').invoke('val').then(text => { const startDate = text;
              cy.get('.input-date-invoice-line-item-end-date').invoke('val').then(text => { const endDate = text
                cy.get('#userId-0').invoke('val').then(text => { const employee	 = text;
              cy.get('.input-autocomplete-invoice-line-item-budget-group').invoke('val').then(text => { const budgetGroup = text;
              cy.get('.input-autocomplete-invoice-line-item-category').invoke('val').then(text => { const category = text;
              cy.get('.input-autocomplete-invoice-line-item-sub-category').invoke('val').then(text => { const subCategory = text;        
              cy.get('.input-textfield-invoice-line-item-description').invoke('val').then(text => { const description1 = text;
              cy.get('.invoice-line-item-gross-amount').invoke('val').then(text => { const lineGrossAmount1 = text;
              cy.get('.input-textfield-invoice-line-item-tax-percentage').invoke('val').then(text => { const linetaxPercentage = text;
              cy.get('.invoice-line-item-tax-amount').invoke('val').then(text => { const linetaxAmount1 = text;
              cy.get('.invoice-line-item-net-amount').invoke('val').then(text => { const linenetAmount1 = text;
              cy.get('.input-autocomplete-invoice-line-item-paid-by').invoke('val').then(text => { const paidBy = text;
              cy.get('.input-autocomplete-invoice-line-item-expense-type').invoke('val').then(text => { const expenseType = text;
              cy.get('.invoice-amount-invoice-line-item-remaining-budget').invoke('val').then(text => { const remainingBudget = text;
              cy.get('.invoice-amount-invoice-line-item-accept-in-budget').invoke('val').then(text => { const acceptedInBudget = text;
              cy.get('.invoice-amount-invoice-line-item-accept-over-budget').invoke('val').then(text => { const acceptedOverBudget = text;
              cy.get('.invoice-line-item-excess-over-budget').invoke('val').then(text => { const excessOverBudget = text;
              cy.get('.input-textfield-invoice-line-item-comments').invoke('val').then(text => { const comments = text;
              cy.get('.invoice-line-item-exported ').invoke('val').then(text => { const exported  = text;
              
              const lineGrossAmount= lineGrossAmount1.replace(/,/g,"");
              const linetaxAmount = linetaxAmount1.replace(/,/g,"");
              const linenetAmount = linenetAmount1.replace(/,/g,"");
              const description = description1.replace(/,/g," ");
              cy.writeFile('AzureAI_single_reciept_17-sep.csv','Invoice details web url '+','+ 'Invoice Number'+','+ 
                'Invoice Date'+','+'VAT no'+','+ 'Supplier Name'+','+'Supplier Address'+','+'Net Amount'+','+'Tax Amount'+','+
                'Gross Amount'+','+'Line Item Number'+','+'Start Date' +','+'End Date' +','+'Employee' +','+'Budget Group' +','+
                'Category' +','+'Sub Category' +','+'Line Item Description'+','+'Line Item Gross Amount'+','+'Line Item Tax Percentage'+
                ','+'Line Item Tax Amount'+','+'Line Item Net Amount'+','+'Paid By'+','+'Expense Type'+','+'Remaining Budget'+
                ','+'Accept In Budget'+','+'Accept Over Budget'+','+'Accept Over Manual'+','+'Excess Over Budget'+','+'Comments'+','+'Exported'+
                +('\n')+('\n')+url+','+invoice_no +','+invoice_date +','+vat_no +','+supplier_name +','+supplier_address+','+net_amount +
                ','+tax_amount +','+gross_amount +','+itemNo +','+startDate +','+endDate +','+employee+','+budgetGroup +
                ','+category +','+subCategory+','+description +','+lineGrossAmount +','+linetaxPercentage+','+linetaxAmount+','+
                linenetAmount +','+paidBy +','+expenseType +','+remainingBudget +','+acceptedInBudget +','+acceptedOverBudget +','+excessOverBudget +','+comments +','+exported+('\n'));
      
      })})})})})})})})})})})})})})})})})})})})})})})})})})})})})

      cy.go('back');
        cy.get('#invoices_list_refresh').click({force: true});
        cy.get('#operator-invoice-code-INV-2787').click();
        cy.wait(5000);

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
              


        
        cy.get('#itemNo-0').invoke('val').then(text => { const itemNo = text;
          cy.get('.input-date-invoice-line-item-start-date').invoke('val').then(text => { const startDate = text;
          cy.get('.input-date-invoice-line-item-end-date').invoke('val').then(text => { const endDate = text
            cy.get('#userId-0').invoke('val').then(text => { const employee	 = text;
          cy.get('.input-autocomplete-invoice-line-item-budget-group').invoke('val').then(text => { const budgetGroup = text;
          cy.get('.input-autocomplete-invoice-line-item-category').invoke('val').then(text => { const category = text;
          cy.get('.input-autocomplete-invoice-line-item-sub-category').invoke('val').then(text => { const subCategory = text;        
          cy.get('.input-textfield-invoice-line-item-description').invoke('val').then(text => { const description1 = text;
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
          const description = description1.replace(/,/g," ");
          cy.writeFile('AzureAI_single_reciept_17-sep.csv',url+','+invoice_no +','+invoice_date +','+vat_no +','+supplier_name +','+supplier_address+','+net_amount +
            ','+tax_amount +','+gross_amount +','+itemNo +','+startDate +','+endDate +','+employee+','+budgetGroup +
            ','+category +','+subCategory+','+description +','+lineGrossAmount +','+linetaxPercentage+','+linetaxAmount+','+
            linenetAmount +','+paidBy +','+expenseType +','+remainingBudget +','+acceptedInBudget +','+acceptedOverBudget +','+excessOverBudget +','+comments +','+exported+('\n'),{ flag:'a+'}); 
      
      })})})})})})})})})})})})})})})})})})})})})})})})})})})})})


    })
})