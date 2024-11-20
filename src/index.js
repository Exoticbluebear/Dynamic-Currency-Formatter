

const formatCurrencyInput = (value, currencySymbol = "$") => {
  if (!value) return "";
  value = value.toString().replace(/[^0-9.]/g, "");
  const parts = value.split(".");
  const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.length > 1
    ? `${currencySymbol}${wholePart}.${parts[1].substring(0, 2)}`
    : `${currencySymbol}${wholePart}`;
};

const unformatCurrency = (formattedValue) => {
  return parseFloat(formattedValue.replace(/[$,]/g, "")) || 0;
};

const CurrencyInput = require("./CurrencyInput");

module.exports = {
  formatCurrencyInput,
  unformatCurrency,
  CurrencyInput,
};
