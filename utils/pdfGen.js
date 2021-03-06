const pdf = require("html-pdf");

//nombre filename.pdf
const createTicket = (filename, products, total) => {
  const html = generateHMTL(products, total);
  pdf.create(html).toFile(`./ticket/${filename}.pdf`, (err, result) => {
    if (err) throw new Error("No se pudo crear el PDF");
  });
};

//Generar el estilo dell PDF

const generateHMTL = (products, total) => `
    <!doctype html>
    <html lang="es">
        <head utf-8>

        </head>
        <body>
            <h1>Total: ${total}</h1>
        </body>
    </html>
`;
