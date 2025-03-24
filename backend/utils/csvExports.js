const { Parser } = require('json2csv');

const exportToCSV = (transactions) => {
  const fields = ['amount', 'category', 'description', 'date'];
  const parser = new Parser({ fields });
  return parser.parse(transactions);
};

module.exports = exportToCSV;
