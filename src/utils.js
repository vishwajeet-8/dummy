export const invoicesError = [
  {
    "Contract-1.pdf": ["invoice-1-2.pdf", "invoice-1-3.pdf"],
    error: [
      "Pastry Flour unit price mismatch: expected $38.95, found $39.95",
      "delivery date is not on a Monday",
    ],
  },
  {
    "Contract-2.pdf": ["invoice-2-1.pdf", "invoice-2-2.pdf", "invoice-2-3.pdf"],
    error: [
      "Delivery date falls on a Sunday instead of Monday, Wednesday, or Friday",
      "Buttermilk price mismatch",
      "Incorrect unit price for Pastry Flour",
    ],
  },
  {
    "Contract-3.pdf": ["invoice-3-1.pdf", "invoice-3-2.pdf"],
    error: [
      "Invoice merchandise total ($1305.50) is below the minimum monthly commitment of $1500.00",
      "GRS-50 price mismatch BRS-50 price mismatch BRS-50D price mismatch PWS-25 price HNY-5 price mismatch",
    ],
  },
  {
    "Contract-4.pdf": ["invoice-4-1.pdf"],
    error: [
      "Price adjustments not allowed during initial 6 months EP-CB12 price increase (6.14%) exceeds maximum 6% EP-CC6 price increase (6.67%) exceeds maximum 6% EP-PB-L price increase (6.14%) exceeds maximum 6% EP-WT price increase (6.15%) exceeds maximum 6%",
    ],
  },
  {
    "Contract-5.pdf": ["invoice-5-1.pdf", "invoice-5-3.pdf"],
    error: [
      "Fresh fruit order subtotal $177.50 is below the minimum $200 requirement Item name mismatch: 'Apples, Gala' does not match contract item 'Apples, Assorted Varieties'",
      "Strawberries, Organic price does not match contract (invoice: $3.75 vs contract: $4.25 Blueberries, Organic price does not match contract (invoice: $6.25 vs contract: $6.75) Raspberries, Organic price does not match contract (invoice: $7.50 vs contract: $7.95) Blackberries, Organic price does not match contract (invoice: $6.25 vs contract: $6.50) Apples product name differs (invoice: 'Mixed Varieties' vs contract: 'Assorted Varieties')",
    ],
  },
  {
    "Contract-6.pdf": ["invoice-6-1.pdf", "invoice-6-2.pdf"],
    error: [
      "Monthly fee payment terms conflict: contract requires due on 1st while invoice specifies net 15 days",
      "Additional training materials charge not authorized by contract",
    ],
  },
];
