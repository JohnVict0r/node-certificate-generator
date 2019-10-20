const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a PDF document
const pdf = new PDFDocument;

// Data example
const meetup = { 
    name: "1º meetup da NatalJS",
    logo: "images/nataljs.jpeg"
}

const participant = { name: "John Victor Alves Luiz"}

pdf.image(meetup.logo, 215, 15,  {align: 'center', valign: 'center'})

pdf.moveDown(10);

pdf
  .font('Times-Roman')
  .fontSize('13')
  .fillColor('#6155a4')
  .text(`Certificado de participação - ${meetup.name}`, {
    align: 'center',
  })

pdf
 .font('Times-Roman')
 .fontSize('13')
 .fillColor('#6155a4')
 .text(`${participant.name}`, {
   align: 'center'
 })

pdf.pipe(fs.createWriteStream(`certificado-${meetup.name}-${participant.name}.pdf`));

// Finalize PDF file
pdf.end();