module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
