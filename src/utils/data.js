export const invoicesError = [
  {
    invoices: [
      false,
      "Pastry Flour unit price mismatch: expected $38.95, found $39.95",
      "delivery date is not on a Monday",
    ],
  },
  {
    invoices: [
      "Delivery date falls on a Sunday instead of Monday, Wednesday, or Friday",
      "Buttermilk price mismatch",
      "Incorrect unit price for Pastry Flour",
    ],
  },
  {
    invoices: [
      "Invoice merchandise total ($1305.50) is below the minimum monthly commitment of $1500.00",
      "GRS-50 price mismatch BRS-50 price mismatch BRS-50D price mismatch PWS-25 price HNY-5 price mismatch",
      false,
    ],
  },
  {
    invoices: [
      "Price adjustments not allowed during initial 6 months EP-CB12 price increase (6.14%) exceeds maximum 6% EP-CC6 price increase (6.67%) exceeds maximum 6% EP-PB-L price increase (6.14%) exceeds maximum 6% EP-WT price increase (6.15%) exceeds maximum 6%",
      false,
      false,
    ],
  },
  {
    invoices: [
      "Fresh fruit order subtotal $177.50 is below the minimum $200 requirement Item name mismatch: 'Apples, Gala' does not match contract item 'Apples, Assorted Varieties'",
      false,
      "Strawberries, Organic price does not match contract (invoice: $3.75 vs contract: $4.25 Blueberries, Organic price does not match contract (invoice: $6.25 vs contract: $6.75) Raspberries, Organic price does not match contract (invoice: $7.50 vs contract: $7.95) Blackberries, Organic price does not match contract (invoice: $6.25 vs contract: $6.50) Apples product name differs (invoice: 'Mixed Varieties' vs contract: 'Assorted Varieties')",
    ],
  },
  {
    invoices: [
      "Monthly fee payment terms conflict: contract requires due on 1st while invoice specifies net 15 days",
      "Additional training materials charge not authorized by contract",
      false,
    ],
  },
];

// Sample data for contract and invoices --> workflowdata & wowrkflowConsistency component
export const initialData = [
  {
    id: 1,
    company: "Premium Flour Mills",
    source: "Supply Agreement Contract",
    url: "contract-1.pdf",
  },
  {
    id: 2,
    company: "Fresh Farms Dairy Cooperative",
    source: "DAIRY SUPPLY AGREEMENT",
    url: "contract-2.pdf",
  },
  {
    id: 3,
    company: "SweetWay Sugar Suppliers",
    source: "SUPPLY AGREEMENT",
    url: "contract-3.pdf",
  },
  {
    id: 4,
    company: "EcoPack Solutions, Inc.",
    source: "PACKAGING SUPPLY AGREEMENT",
    url: "contract-4.pdf",
  },
  {
    id: 5,
    company: "Golden State Fruit Farms",
    source: "This Fruit Supply Agreement",
    url: "contract-5.pdf",
  },
  {
    id: 6,
    company: "Bakery Equipment Masters",
    source: "EQUIPMENT MAINTENANCE AGREEMENT",
    url: "contract-6.pdf",
  },
];
