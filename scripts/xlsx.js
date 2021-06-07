const xlsx = require('node-xlsx').default;

class XlsxReader {
  file;
  workBook;

  constructor(file = "") {
    this.file = file || `${__dirname}/test.xlsx`;

    // Parse a buffer
    // const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/test.xlsx`));
    // Parse a file
    this.workBook = xlsx.parse(this.file);
    const bla = '';
  }


}

module.exports = XlsxReader;
