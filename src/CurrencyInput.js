import React from "react";

const CurrencyInput = ({
  value,            // Raw numeric value
  onChange,         // Callback to handle raw value updates
  placeholder = "Enter amount",
  currencySymbol = "$",
}) => {
  // Format user input into a currency string
  const formatCurrencyInput = (value, symbol) => {
    if (!value) return "";
    value = value.toString().replace(/[^0-9.]/g, ""); // Remove non-numeric characters
    const parts = value.split(".");
    const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.length > 1
      ? `${symbol}${wholePart}.${parts[1].substring(0, 2)}` // Limit to 2 decimal places
      : `${symbol}${wholePart}`;
  };

  // Unformat the currency string back to raw numeric value
  const unformatCurrency = (formattedValue) => {
    return formattedValue.replace(/[^0-9.]/g, ""); // Remove currency symbol and commas
  };

  // Handle the input change
  const handleInputChange = (e) => {
    const rawValue = unformatCurrency(e.target.value); // Get the raw numeric value
    onChange(rawValue); // Pass raw value to parent
  };

  return (
    <input
      type="text"
      value={formatCurrencyInput(value, currencySymbol)} // Format value for display
      onChange={handleInputChange} // Handle user input
      placeholder={placeholder}
    />
  );
};

export default CurrencyInput;
