import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const parseCSV = (csvText) => {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map((line) => {
    const values = line.split(",");
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index].trim();
      return obj;
    }, {});
  });
};

export const processInventoryData = (data) => {
  // Group data by location
  const locationGroups = data.reduce((acc, row) => {
    if (!acc[row.Plant_Location]) {
      acc[row.Plant_Location] = [];
    }
    acc[row.Plant_Location].push(row);
    return acc;
  }, {});

  // Calculate status counts by location
  const statusByLocation = Object.keys(locationGroups).map((location) => {
    const items = locationGroups[location];
    return {
      location,
      Critical: items.filter((item) => item.Stock_Status === "Critical").length,
      Low: items.filter((item) => item.Stock_Status === "Low").length,
      Adequate: items.filter((item) => item.Stock_Status === "Adequate").length,
      Excess: items.filter((item) => item.Stock_Status === "Excess").length,
    };
  });

  // Calculate category distribution
  const categoryCount = data.reduce((acc, row) => {
    if (!acc[row.Product_Category]) {
      acc[row.Product_Category] = 0;
    }
    acc[row.Product_Category]++;
    return acc;
  }, {});

  // Calculate average costs by category
  const costByCategory = data.reduce((acc, row) => {
    if (!acc[row.Product_Category]) {
      acc[row.Product_Category] = {
        total: 0,
        count: 0,
      };
    }
    acc[row.Product_Category].total += parseFloat(row.Unit_Cost);
    acc[row.Product_Category].count++;
    return acc;
  }, {});

  // Calculate averages by location
  const locationAverages = Object.keys(locationGroups).map((location) => {
    const items = locationGroups[location];
    return {
      location,
      avgReorderPoint: Math.round(
        items.reduce((sum, item) => sum + item.Reorder_Point, 0) / items.length
      ),
      avgQuantity: Math.round(
        items.reduce((sum, item) => sum + item.Quantity_On_Hand, 0) /
          items.length
      ),
    };
  });

  return {
    statusByLocation,
    categoryCount,
    costByCategory,
    locationAverages,
  };
};
