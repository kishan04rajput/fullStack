# invoice-generator-node

- do npm i to install all dependencies
- run "nodemon server.js" while being in folder "invoice-generator-node"
- invoice UI is in invoice-generator-node > app > views > invoice.view.ejs
- controllers folder has testing controller and invoice generating controller
- invoices folder has the generated pdf stored in it
- middleware folder is a validator for invoice data
- routes > invoice > index.route.js has the API PATH of invoice create
- routes > index.route.js has test API END and the middleware
- services > invoice.svc.js do all the processing for the invoice data
- utils > index.utils.js does the generating part of the invoice to pdf
