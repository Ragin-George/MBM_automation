describe('Login', () => {

    it('Upload single invoice with single line item!', () => {
        cy.visit("http://opencage.f2wdev.eu")
        cy.wait(1000);
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
        cy.get('#brows-file-btn').selectFile('InvoiceTesting/Rg 15.12.2022 - Eva List.pdf',{action: 'drag-drop'})
        cy.get('#upload-invoice-by-operator-submit').click();
        cy.wait(15000);
        cy.get('#invoices_list_refresh').click({force: true});
        cy.get('#operator-invoice-code-INV-1949').click();
        cy.wait(5000);

        cy.get('#invoiceno').invoke('val').then(text => { const invoice_no = text;
          cy.get('#my-custom-id-invoiceDate').invoke('val').then(text => { const invoice_date = text;
          cy.get('#canvas-form-vat-no').invoke('val').then(text => { const vat_no = text;
          cy.get('#canvas-form-supplier-name').invoke('val').then(text => { const supplier_name = text;
          cy.get('#canvas-form-supplier-address').invoke("val").then(text => { const supplier_address1 = text;
          cy.get('#canvas-form-net-amount').invoke('val').then(text => { const net_amount1 = text;
          cy.get('#canvas-form-tax-amount').invoke('val').then(text => { const tax_amount1 = text;
          cy.get('#canvas-form-gross-amount').invoke('val').then(text => { const gross_amount1 = text;
          cy.get('#itemNo-0').invoke('val').then(text => { const itemNo = text;
          cy.get('.input-date-invoice-line-item-start-date').invoke('val').then(text => { const startDate = text;
          cy.get('.input-date-invoice-line-item-end-date').invoke('val').then(text => { const endDate = text;
          cy.get('#userId-0').invoke('val').then(text => { const employee	 = text;
          cy.get('#budgetGroupId-0').invoke('val').then(text => { const budgetGroup = text;
          cy.get('#categoryId-0').invoke('val').then(text => { const category = text;
          cy.get('#subCategoryId-0').invoke('val').then(text => { const subCategory = text;        
          cy.get('#description-0').invoke('val').then(text => { const description = text;
          cy.get('#grossAmount-0').invoke('val').then(text => { const lineGrossAmount1 = text;
          cy.get('#taxPercentage-0').invoke('val').then(text => { const linetaxPercentage = text;
          cy.get('.css-xns5jw-MuiTableRow-root > :nth-child(12) > .currency-input-main > #taxAmount-0-0').invoke('val').then(text => { const linetaxAmount1 = text;
          cy.get('#netAmount-0').invoke('val').then(text => { const linenetAmount1 = text;
          cy.get('.input-autocomplete-invoice-line-item-paid-by').invoke('val').then(text => { const paidBy = text;
          cy.get('.input-autocomplete-invoice-line-item-expense-type').invoke('val').then(text => { const expenseType = text;
          cy.get('.invoice-amount-invoice-line-item-remaining-budget ').invoke('val').then(text => { const remainingBudget = text;
          cy.get('.invoice-amount-invoice-line-item-accept-in-budget').invoke('val').then(text => { const acceptedInBudget = text;
          cy.get('.invoice-amount-invoice-line-item-accept-over-budget').invoke('val').then(text => { const acceptedOverBudget = text;
          cy.get('#acceptedOverBudgetManual-0').invoke('val').then(text => { const acceptedOverBudgetManual = text;
          cy.get('#excessOverBudget-0').invoke('val').then(text => { const excessOverBudget = text;
          cy.get('.invoice-comment-invoice-line-item-comments').invoke('val').then(text => { const comments = text;
          cy.get('.invoice-line-item-exported').invoke('val').then(text => { const exported  = text;
        let currentURL
        cy.url().then(url => {
          currentURL = url
          const supplier_address= supplier_address1.replace(/,/g," ");
          const net_amount= net_amount1.replace(/,/g,"");
          const gross_amount= gross_amount1.replace(/,/g,"");
          const tax_amount= tax_amount1.replace(/,/g,"");
          const lineGrossAmount= lineGrossAmount1.replace(/,/g,"");
          const linetaxAmount = linetaxAmount1.replace(/,/g,"");
          const linenetAmount = linenetAmount1.replace(/,/g,"");
          cy.writeFile('AzureAI_Single_SingleLine_invoice.csv','Invoice details web url '+','+ 'Invoice Number'+','+'VAT no'+ ','+
            'Invoice Date'+','+ 'Supplier Name'+','+'Supplier Address'+','+'Net Amount'+','+'Tax Amount'+','+
            'Gross Amount'+','+'Line Item Number'+','+'Start Date' +','+'End Date' +','+'Employee' +','+'Budget Group' +','+
            'Category' +','+'Sub Category' +','+'Line Item Description'+','+'Line Item Gross Amount'+','+'Line Item Tax Percentage'+
            ','+'Line Item Tax Amount'+','+'Line Item Net Amount'+','+'Paid By'+','+'Expense Type'+','+'Remaining Budget'+
            ','+'Accept In Budget'+','+'Accept Over Budget'+','+'Accept Over Manual'+','+'Excess Over Budget'+','+'Comments'+','+'Exported'+
            +('\n')+('\n')+url+','+invoice_no +','+vat_no +','+invoice_date +','+supplier_name +','+supplier_address+','+net_amount +
            ','+tax_amount +','+gross_amount +','+itemNo +','+startDate +','+endDate +','+employee+','+budgetGroup +
            ','+category +','+subCategory+','+description +','+lineGrossAmount +','+linetaxPercentage+','+linetaxAmount+','+
            linenetAmount +','+paidBy +','+expenseType +','+remainingBudget +','+acceptedInBudget +','+acceptedOverBudget +','+
            acceptedOverBudgetManual +','+excessOverBudget +','+comments +','+exported+('\n'));

        })})})})})})})})})})})})})})})})})})})})})})})})})})})})})})
    })
})
