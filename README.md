# dynamic-currency-formatter

A lightweight React and JavaScript utility package for real-time currency formatting and static number-to-currency conversions.

## Features

- Dynamic input formatting for forms.
- Format static numbers as currency.
- Strip formatting for calculations.
- Configurable currency symbols and decimal precision.

## Installation

```bash
npm install dynamic-currency-formatter
```

## Usage

-React Component: CurrencyInput
import { CurrencyInput } from "dynamic-currency-formatter";

function App() {
const [price, setPrice] = useState("");

return (
<CurrencyInput
      value={price}
      onChange={setPrice}
      currencySymbol="$"
      placeholder="Enter amount"
    />
);
}

## Utility Functions

-Format a Number to Currency

import { formatCurrencyInput } from "dynamic-currency-formatter";

const formatted = formatCurrencyInput("12345.678", "$");
console.log(formatted); // Outputs: $12,345.67

-Strip Currency Formatting

import { unformatCurrency } from "dynamic-currency-formatter";

const rawValue = unformatCurrency("$12,345.67");
console.log(rawValue); // Outputs: 12345.67
