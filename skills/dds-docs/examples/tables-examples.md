# Tables - Code Examples

This file contains code examples for tables components from the Livingston Design System.

## Basic example

**Description:** We are using the minimum width Kendo feature for the columns grid columns. When the width of the Grid is smaller that the combined minimum/fixed widths of all the columns, a horizontal scrollbar will appear. If the width of the Grid is larger than the combined minimum/fixed widths of all the columns, the columns will expand to fill the remaining space. We created a custom hook to calculate the responsive column widths.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridBasicExample.tsx`

```tsx
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'Nº',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200,
        minResizableWidth: 100 // Minimum resizable width
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60,
        minResizableWidth: 60 // Minimum resizable width
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 60
    }
];

const GridBasicExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-basic-example' });

    return (
        <Grid ref={gridRef} id='kendo-basic-example' data={products.slice(0, 5)} resizable={true}>
            {columns.map((column, index) => {
                return (
                    <GridColumn
                        key={index}
                        field={column.field}
                        title={column.title}
                        width={setWidth(column)}
                        minResizableWidth={column.minResizableWidth ? column.minResizableWidth : undefined}
                    />
                );
            })}
        </Grid>
    );
};
export default GridBasicExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Horizontal scroll

**Description:** If the columns cannot be accommodated within the table's boundaries, a scrollbar will become visible.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridHorizontalScrollExample.tsx`

```tsx
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'SupplierID',
        title: 'Supplier ID',
        minWidth: 120
    },
    {
        field: 'CategoryID',
        title: 'Category ID',
        minWidth: 120
    },
    {
        field: 'QuantityPerUnit',
        title: 'Quantity Per Unit',
        minWidth: 160
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 80
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'UnitsOnOrder',
        title: 'Units On Order',
        minWidth: 150
    },
    {
        field: 'ReorderLevel',
        title: 'Reorder Level',
        minWidth: 150
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    },
    {
        field: 'Category.CategoryName',
        title: 'Category Name',
        minWidth: 150
    },
    {
        field: 'Category.Description',
        title: 'Category Description',
        minWidth: 450
    }
];

const GridHorizontalScrollExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-horizontal-scroll' });

    return (
        <Grid ref={gridRef} id='kendo-grid-horizontal-scroll' data={products.slice(0, 5)} resizable={true}>
            {columns.map((column, index) => {
                return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
            })}
        </Grid>
    );
};
export default GridHorizontalScrollExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Pagination

**Description:** Pagination breaks down the information into manageable chunks, allowing you to easily flip through pages of data and find what you need without overwhelming the screen.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridPaginationExample.tsx`

```tsx
import { useRef, useState } from 'react';
import { Grid, GridColumn, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { process, State, DataResult } from '@progress/kendo-data-query';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import ResultsCount from './ResultsCount';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    }
];

const GridPaginationExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-pagination-example' });

    const initialDataState: State = {
        take: 10,
        skip: 0
    };

    const [dataState, setDataState] = useState<State>(initialDataState);

    const handleDataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    return (
        <>
            <ResultsCount
                count={products?.length ?? 0}
                currentPage={
                    dataState.skip !== undefined && dataState.take !== undefined ? Math.floor(dataState.skip / dataState.take) + 1 : 1
                }
                pageSize={dataState.take ?? 0}
                skip={dataState.skip ?? 0}
            />

            <Grid
                ref={gridRef}
                id='kendo-grid-pagination-example'
                data={process(products, dataState) as DataResult}
                take={dataState.take}
                skip={dataState.skip}
                sort={dataState.sort}
                sortable={true}
                total={products.length}
                pageable={{
                    buttonCount: 5,
                    pageSizes: true
                }}
                onDataStateChange={handleDataStateChange}
                resizable={true}
            >
                {columns.map((column, index) => {
                    return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
                })}
            </Grid>
        </>
    );
};
export default GridPaginationExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/ResultsCount.tsx`

```tsx
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

type ResultsCountProps = {
    count: number;
    currentPage?: number;
    pageSize?: number;
    skip?: number;
};

function ResultsCount({ count, currentPage, pageSize, skip }: ResultsCountProps) {
    const startItem = skip !== undefined && pageSize !== undefined && count > 0 ? skip + 1 : 0;
    const endItem = skip !== undefined && pageSize !== undefined ? Math.min(skip + pageSize, count) : count;
    const showPaginationInfo = currentPage !== undefined && pageSize !== undefined && skip !== undefined;

    return (
        <div className='header-strip-small bg-white py-2 border-bottom'>
            <Container fluid>
                <Row>
                    <Col className='d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center'>
                        <div>
                            <span className='fw-bold'>{count}</span>
                            <span className='ms-1'>results</span>
                        </div>
                        {showPaginationInfo && count > 0 && (
                            <div className='text-muted d-lg-none'>
                                <span>{`Showing ${startItem} to ${endItem} of ${count} results`}</span>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default ResultsCount;

```

### Source File 3: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Selectable rows

**Description:** The checkbox column allows for easy selection of records, making it simple to perform actions on multiple items at once. This feature is useful for managing large datasets, letting users select, edit, or delete specific records quickly and efficiently.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridSelectableRowsExample.tsx`

```tsx
import { useState, useCallback, useRef } from 'react';
import {
    Grid,
    GridColumn,
    GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridDataStateChangeEvent
} from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { process, State } from '@progress/kendo-data-query';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';

export interface Product {
    ProductID: number;
    ProductName?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    Discontinued?: boolean;
}

const DATA_ITEM_KEY: keyof Product = 'ProductID'; // ROW SELECTION: This is the key field for the data items in the grid

const GridSelectableRowsExample = () => {
    const initialDataState: State = {
        take: 10,
        skip: 0
    };
    const [dataState, setDataState] = useState<State>(initialDataState);
    const [selectedItems, setSelectedItems] = useState<SelectDescriptor>({}); // ROW SELECTION: This is the state for the selected items in the grid

    const handleDataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    const onSelectionChange = useCallback((event: GridSelectionChangeEvent) => {
        // ROW SELECTION: This is the event handler for single row selection changes
        setSelectedItems(event.select);
    }, []);

    const onHeaderSelectionChange = useCallback(
        (event: GridHeaderSelectionChangeEvent) => {
            const newSelection = { ...selectedItems };
            event.dataItems.forEach((item) => {
                newSelection[item[DATA_ITEM_KEY].toString()] = event.select[item[DATA_ITEM_KEY].toString()];
            });

            setSelectedItems(newSelection);
        },
        [dataState, products, selectedItems]
    );

    const primaryActionOnSelectedItems = () => {
        // ROW SELECTION: This is the action to be performed on selected items
        // Get an array of keys (ProductIDs) that are selected (value is true)
        const selectedKeys = Object.entries(selectedItems)
            .filter(([_, isSelected]) => isSelected === true)
            .map(([key, _]) => parseInt(key, 10)); // Convert keys to numbers if needed

        // Find products matching those keys
        const selectedProducts = products.filter((product) => selectedKeys.includes(product.ProductID));

        // Log each product individually
        selectedProducts.forEach((product) => {
            console.log(`Selected product: ${product.ProductName}, ID: ${product.ProductID}`);
        });
    };

    const columns = [
        {
            field: 'ProductName',
            title: 'Name',
            minWidth: 200
        },
        {
            field: 'UnitPrice',
            title: 'Price',
            minWidth: 60
        },
        {
            field: 'UnitsInStock',
            title: 'In stock',
            minWidth: 80
        },
        {
            field: 'Discontinued',
            title: 'Discontinued',
            minWidth: 120
        }
    ];

    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, {
        gridId: 'kendo-grid-selectable-rows-example',
        includeCheckboxColumn: true
    });

    const hasSelection = Object.values(selectedItems).some((value) => value === true);
    const selectedCount = Object.values(selectedItems).filter((value) => value === true).length;

    return (
        <div className='d-flex flex-column justify-content-between flex-fill'>
            <div>
                <div className='container-fluid bg-white border-bottom py-2'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='mb-0'>Header</h1>
                        </div>
                    </div>
                </div>

                <Grid
                    ref={gridRef}
                    id='kendo-grid-selectable-rows-example'
                    data={process(products, dataState).data.map((item) => ({
                        ...item
                    }))}
                    dataItemKey={DATA_ITEM_KEY}
                    selectable={{
                        // ROW SELECTION: This is the selection mode for the grid
                        enabled: true,
                        drag: false,
                        cell: false,
                        mode: 'multiple'
                    }}
                    select={selectedItems} // ROW SELECTION: This is the selected items in the grid
                    onSelectionChange={onSelectionChange} // ROW SELECTION: This is the event handler for single row selection changes
                    onHeaderSelectionChange={onHeaderSelectionChange} // ROW SELECTION: This is the event handler for header selection changes
                    pageable={{
                        buttonCount: 5,
                        pageSizes: true
                    }}
                    onDataStateChange={handleDataStateChange}
                    take={dataState.take}
                    skip={dataState.skip}
                    total={products.length}
                    resizable={true}
                >
                    <GridColumn columnType='checkbox' /> {/* ROW SELECTION: This is the checkbox column for row selection */}
                    {columns.map((column, index) => (
                        <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />
                    ))}
                </Grid>
            </div>
            {/* ROW SELECTION: This is the footer that pops up when items are selected */}
            <div className={`footer-popup ${hasSelection ? 'grid-footer-popup-visible ' : 'grid-footer-popup-hidden'}`}>
                <div>
                    <div className='bg-white shadow-lg d-flex flex-column flex-md-row align-items-md-center align-items-stretch justify-content-md-between p-2 p-md-3'>
                        <div className='mb-3 mb-md-0'>Items selected: {selectedCount}</div>
                        <div className='d-flex flex-column flex-sm-row'>
                            <button type='button' className='btn btn-tertiary btn-lg m-1 flex-fill'>
                                Secondary action
                            </button>
                            <button type='button' className='btn btn-primary btn-lg m-1 flex-fill' onClick={primaryActionOnSelectedItems}>
                                Primary action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GridSelectableRowsExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Selectable rows with action column

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridSelectableRowsWithActionColumnExample.tsx`

```tsx
import { useState, useCallback, useRef } from 'react';
import {
    Grid,
    GridColumn,
    GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridDataStateChangeEvent
} from '@progress/kendo-react-grid';
import products from './products.json';
import { delay, KendoDropdownButton, SmallSpinner, useKendoResponsiveColWidths } from 'livingston-npm-components';
import { process, State } from '@progress/kendo-data-query';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import { faCodeCompare, faDownload, faFile, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { toastQueue } from '@/utils/toastQueue';

export interface Product {
    ProductID: number;
    ProductName?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    Discontinued?: boolean;
}

const DATA_ITEM_KEY: keyof Product = 'ProductID';

const GridSelectableRowsWithActionColumnExample = () => {
    const initialDataState: State = {
        take: 10,
        skip: 0
    };
    const [dataState, setDataState] = useState<State>(initialDataState);
    const [selectedItems, setSelectedItems] = useState<SelectDescriptor>({});

    const handleDataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    const onSelectionChange = useCallback((event: GridSelectionChangeEvent) => {
        setSelectedItems(event.select);
    }, []);

    const onHeaderSelectionChange = useCallback(
        (event: GridHeaderSelectionChangeEvent) => {
            const newSelection = { ...selectedItems };
            event.dataItems.forEach((item) => {
                newSelection[item[DATA_ITEM_KEY].toString()] = event.select[item[DATA_ITEM_KEY].toString()];
            });

            setSelectedItems(newSelection);
        },
        [dataState, products, selectedItems]
    );

    const primaryActionOnSelectedItems = () => {
        // Get an array of keys (ProductIDs) that are selected (value is true)
        const selectedKeys = Object.entries(selectedItems)
            .filter(([_, isSelected]) => isSelected === true)
            .map(([key, _]) => parseInt(key, 10)); // Convert keys to numbers if needed

        // Find products matching those keys
        const selectedProducts = products.filter((product) => selectedKeys.includes(product.ProductID));

        // Log each product individually
        selectedProducts.forEach((product) => {
            console.log(`Selected product: ${product.ProductName}, ID: ${product.ProductID}`);
        });
    };

    const ActionCell = (props: any) => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const [busyDownloading, setBusyDownloading] = useState(false);

        const { dataItem } = props;

        const handleActionClick = (actionId: string, dataItem: any) => {
            console.log(`Clicked action with ID: ${actionId} for data item:`, dataItem);
            setDropdownOpen(false);
        };

        return (
            <td className={props.className} style={props.style}>
                <div className='text-center'>
                    <KendoDropdownButton
                        opened={dropdownOpen}
                        onOpenChange={setDropdownOpen}
                        dropdownItems={[
                            {
                                id: 'view-details',
                                title: 'View entry details',
                                icon: faFile,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            },
                            {
                                id: 'header-line-details',
                                title: 'Header and line details',
                                icon: faFileLines,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            },
                            {
                                id: 'download-documents',
                                title: 'Download documents',
                                icon: busyDownloading ? <SmallSpinner /> : faDownload,
                                onClick: async (id: string) => {
                                    try {
                                        setBusyDownloading(true);
                                        // Simulate an asynchronous operation, e.g., fetching documents
                                        console.log('Downloading documents for invoice:', dataItem, id);
                                        await delay(4000); // Simulate a 3-second delay
                                    } catch (error) {
                                        console.error('Error downloading invoice documents:', error);
                                    } finally {
                                        console.log('Download action completed for invoice');
                                        toastQueue.addToast({
                                            message: 'Documents downloaded successfully',
                                            type: 'success'
                                        });
                                        setBusyDownloading(false);
                                        setDropdownOpen(false); // Close the dropdown after an action is clicked
                                    }
                                }
                            },
                            {
                                id: 'compare-docs',
                                title: 'Compare docs',
                                icon: faCodeCompare,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            }
                        ]}
                        dropdownItemIconPosition='left'
                    />
                </div>
            </td>
        );
    };

    const columns = [
        {
            field: 'ProductName',
            title: 'Name',
            minWidth: 200
        },
        {
            field: 'UnitPrice',
            title: 'Price',
            minWidth: 60
        },
        {
            field: 'UnitsInStock',
            title: 'In stock',
            minWidth: 80
        },
        {
            field: 'Discontinued',
            title: 'Discontinued',
            minWidth: 120
        },
        {
            field: 'Actions',
            title: '',
            width: 60
        }
    ];

    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, {
        gridId: 'kendo-grid-selectable-example',
        includeCheckboxColumn: true
    });

    const hasSelection = Object.values(selectedItems).some((value) => value === true);
    const selectedCount = Object.values(selectedItems).filter((value) => value === true).length;

    return (
        <div className='d-flex flex-column justify-content-between flex-fill'>
            <div>
                <div className='container-fluid bg-white border-bottom py-2'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='mb-0'>Header</h1>
                        </div>
                    </div>
                </div>

                <Grid
                    ref={gridRef}
                    id='kendo-grid-selectable-example'
                    data={process(products, dataState).data.map((item) => ({
                        ...item
                    }))}
                    dataItemKey={DATA_ITEM_KEY}
                    selectable={{
                        enabled: true,
                        drag: false,
                        cell: false,
                        mode: 'multiple'
                    }}
                    select={selectedItems}
                    onSelectionChange={onSelectionChange}
                    onHeaderSelectionChange={onHeaderSelectionChange}
                    pageable={{
                        buttonCount: 5,
                        pageSizes: true
                    }}
                    onDataStateChange={handleDataStateChange}
                    take={dataState.take}
                    skip={dataState.skip}
                    total={products.length}
                    resizable={true}
                >
                    <GridColumn columnType='checkbox' />
                    {columns.map((column, index) => (
                        <GridColumn
                            key={index}
                            field={column.field}
                            title={column.title}
                            width={setWidth(column)}
                            cells={
                                column.field === 'Actions'
                                    ? {
                                          data: ActionCell,
                                          headerCell: () => <td></td>
                                      }
                                    : undefined
                            }
                        />
                    ))}
                </Grid>
            </div>
            <div className={`footer-popup ${hasSelection ? 'grid-footer-popup-visible ' : 'grid-footer-popup-hidden'}`}>
                <div>
                    <div className='bg-white shadow-lg d-flex flex-column flex-md-row align-items-md-center align-items-stretch justify-content-md-between p-2 p-md-3'>
                        <div className='mb-3 mb-md-0'>Items selected: {selectedCount}</div>
                        <div className='d-flex flex-column flex-sm-row'>
                            <button type='button' className='btn btn-tertiary btn-lg m-1 flex-fill'>
                                Secondary action
                            </button>
                            <button type='button' className='btn btn-primary btn-lg m-1 flex-fill' onClick={primaryActionOnSelectedItems}>
                                Primary action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GridSelectableRowsWithActionColumnExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Pinnable columns

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridPinnableColumnsExample.tsx`

```tsx
import { useState, useCallback, useRef } from 'react';
import {
    Grid,
    GridColumn,
    GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridDataStateChangeEvent,
    GridCustomHeaderCellProps
} from '@progress/kendo-react-grid';
import products from './products.json';
import {
    delay,
    KendoDropdownButton,
    SmallSpinner,
    useKendoResponsiveColWidths,
    KendoStickyHeaderGridWrapper,
    KendoColumnHeaderWithPin
} from 'livingston-npm-components';
import { process, State } from '@progress/kendo-data-query';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import { faCodeCompare, faDownload, faFile, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { toastQueue } from '@/utils/toastQueue';

export interface Product {
    ProductID: number;
    ProductName?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    Discontinued?: boolean;
}

const DATA_ITEM_KEY: keyof Product = 'ProductID';

const GridPinnableColumnsExample = () => {
    const initialDataState: State = {
        take: 10,
        skip: 0
    };
    const [dataState, setDataState] = useState<State>(initialDataState);
    const [selectedItems, setSelectedItems] = useState<SelectDescriptor>({});
    const [clearanceColumns, setClearanceColumns] = useState([
        { field: 'ProductName', title: 'Name', minWidth: 200, isLocked: false },
        { field: 'UnitPrice', title: 'Price', minWidth: 60, isLocked: false },
        { field: 'UnitsInStock', title: 'In stock', minWidth: 80, isLocked: false },
        { field: 'Discontinued', title: 'Discontinued', minWidth: 120, isLocked: false },
        { field: 'Actions', width: 60, isLocked: false }
    ]);

    const updateColumns = (updatedColumns: typeof clearanceColumns) => {
        setClearanceColumns(updatedColumns);
    };

    const handleToggleLocked = (field: string) => {
        if (!clearanceColumns) return;

        const updatedColumns = clearanceColumns.map((col) => {
            if (col.field !== field) return col;

            return {
                ...col,
                isLocked: !col.isLocked
            };
        });

        updateColumns(updatedColumns);
    };

    const handleDataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    const onSelectionChange = useCallback((event: GridSelectionChangeEvent) => {
        setSelectedItems(event.select);
    }, []);

    const onHeaderSelectionChange = useCallback(
        (event: GridHeaderSelectionChangeEvent) => {
            const newSelection = { ...selectedItems };
            event.dataItems.forEach((item) => {
                newSelection[item[DATA_ITEM_KEY].toString()] = event.select[item[DATA_ITEM_KEY].toString()];
            });

            setSelectedItems(newSelection);
        },
        [dataState, products, selectedItems]
    );

    const primaryActionOnSelectedItems = () => {
        // Get an array of keys (ProductIDs) that are selected (value is true)
        const selectedKeys = Object.entries(selectedItems)
            .filter(([_, isSelected]) => isSelected === true)
            .map(([key, _]) => parseInt(key, 10)); // Convert keys to numbers if needed

        // Find products matching those keys
        const selectedProducts = products.filter((product) => selectedKeys.includes(product.ProductID));

        // Log each product individually
        selectedProducts.forEach((product) => {
            console.log(`Selected product: ${product.ProductName}, ID: ${product.ProductID}`);
        });
    };

    const PinnableHeaderCell = (props: GridCustomHeaderCellProps) => {
        const field = props.field || '';
        const isLocked = clearanceColumns.find((col) => col.field === field)?.isLocked ?? false;
        return <KendoColumnHeaderWithPin {...props} isPinned={isLocked} onTogglePinned={() => handleToggleLocked(field)} />;
    };

    const ActionCell = (props: any) => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const [busyDownloading, setBusyDownloading] = useState(false);

        const { dataItem } = props;

        const handleActionClick = (actionId: string, dataItem: any) => {
            console.log(`Clicked action with ID: ${actionId} for data item:`, dataItem);
            setDropdownOpen(false);
        };

        return (
            <td className={props.className} style={props.style}>
                <div className='text-center'>
                    <KendoDropdownButton
                        opened={dropdownOpen}
                        onOpenChange={setDropdownOpen}
                        dropdownItems={[
                            {
                                id: 'view-details',
                                title: 'View entry details',
                                icon: faFile,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            },
                            {
                                id: 'header-line-details',
                                title: 'Header and line details',
                                icon: faFileLines,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            },
                            {
                                id: 'download-documents',
                                title: 'Download documents',
                                icon: busyDownloading ? <SmallSpinner /> : faDownload,
                                onClick: async (id: string) => {
                                    try {
                                        setBusyDownloading(true);
                                        // Simulate an asynchronous operation, e.g., fetching documents
                                        console.log('Downloading documents for invoice:', dataItem, id);
                                        await delay(4000); // Simulate a 3-second delay
                                    } catch (error) {
                                        console.error('Error downloading invoice documents:', error);
                                    } finally {
                                        console.log('Download action completed for invoice');
                                        toastQueue.addToast({
                                            message: 'Documents downloaded successfully',
                                            type: 'success'
                                        });
                                        setBusyDownloading(false);
                                        setDropdownOpen(false); // Close the dropdown after an action is clicked
                                    }
                                }
                            },
                            {
                                id: 'compare-docs',
                                title: 'Compare docs',
                                icon: faCodeCompare,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            }
                        ]}
                        dropdownItemIconPosition='left'
                    />
                </div>
            </td>
        );
    };

    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, clearanceColumns, {
        gridId: 'kendo-grid-selectable-example',
        includeCheckboxColumn: true
    });

    const anyColumnLocked = clearanceColumns.some((col) => col.isLocked);
    const sortedColumns = [...clearanceColumns].sort((a, b) => {
        if (a.field === 'Actions') return 1;
        if (b.field === 'Actions') return -1;
        if (a.isLocked && !b.isLocked) return -1;
        if (!a.isLocked && b.isLocked) return 1;
        return 0;
    });

    const hasSelection = Object.values(selectedItems).some((value) => value === true);
    const selectedCount = Object.values(selectedItems).filter((value) => value === true).length;

    return (
        <div className='kendo-grid-pinnable d-flex flex-column justify-content-between flex-fill'>
            <div>
                <div className='container-fluid bg-white border-bottom py-2'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='mb-0'>Header</h1>
                        </div>
                    </div>
                </div>

                <KendoStickyHeaderGridWrapper gridId='kendo-grid-selectable-example'>
                    <Grid
                        ref={gridRef}
                        id='kendo-grid-selectable-example'
                        data={process(products, dataState).data.map((item) => ({
                            ...item
                        }))}
                        dataItemKey={DATA_ITEM_KEY}
                        selectable={{
                            enabled: true,
                            drag: false,
                            cell: false,
                            mode: 'multiple'
                        }}
                        select={selectedItems}
                        onSelectionChange={onSelectionChange}
                        onHeaderSelectionChange={onHeaderSelectionChange}
                        pageable={{
                            buttonCount: 5,
                            pageSizes: true
                        }}
                        onDataStateChange={handleDataStateChange}
                        take={dataState.take}
                        skip={dataState.skip}
                        total={products.length}
                        resizable={true}
                    >
                        <GridColumn columnType='checkbox' locked={anyColumnLocked} />
                        {sortedColumns.map((column) => (
                            <GridColumn
                                key={column.field}
                                field={column.field}
                                title={column.title}
                                width={setWidth(column)}
                                locked={column.isLocked}
                                cells={
                                    column.field === 'Actions'
                                        ? {
                                              data: ActionCell,
                                              headerCell: () => <td></td>
                                          }
                                        : { headerCell: PinnableHeaderCell }
                                }
                            />
                        ))}
                    </Grid>
                </KendoStickyHeaderGridWrapper>
            </div>
            <div className={`footer-popup ${hasSelection ? 'grid-footer-popup-visible ' : 'grid-footer-popup-hidden'}`}>
                <div>
                    <div className='bg-white shadow-lg d-flex flex-column flex-md-row align-items-md-center align-items-stretch justify-content-md-between p-2 p-md-3'>
                        <div className='mb-3 mb-md-0'>Items selected: {selectedCount}</div>
                        <div className='d-flex flex-column flex-sm-row'>
                            <button type='button' className='btn btn-tertiary btn-lg m-1 flex-fill'>
                                Secondary action
                            </button>
                            <button type='button' className='btn btn-primary btn-lg m-1 flex-fill' onClick={primaryActionOnSelectedItems}>
                                Primary action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GridPinnableColumnsExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Globalization example

**Description:** Using language selector with Kendo Grid

**File:** `src/ds-layout-components/foundations/components/tables/GridGlobalizationExample.tsx`

```tsx
import { Grid, GridColumn, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { IntlProvider, LocalizationProvider, loadMessages, load } from '@progress/kendo-react-intl';
import numbers from 'cldr-numbers-modern/main/fr/numbers.json';
import products from './products.json';
import { kendoTranslations } from 'livingston-npm-components';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useState, useRef } from 'react';
import { useAppSelector } from '@/store/hooks';
import { process, State, DataResult } from '@progress/kendo-data-query';

loadMessages(kendoTranslations['en'], 'en');
loadMessages(kendoTranslations['fr'], 'fr');
loadMessages(kendoTranslations['es'], 'es');

load(numbers);

const columnTitles: Record<string, Record<string, string>> = {
    en: {
        ProductID: 'ID',
        ProductName: 'Name',
        SupplierID: 'Supplier ID',
        CategoryID: 'Category ID',
        QuantityPerUnit: 'Quantity Per Unit',
        UnitPrice: 'Price',
        UnitsInStock: 'In Stock',
        UnitsOnOrder: 'Units On Order',
        ReorderLevel: 'Reorder Level',
        Discontinued: 'Discontinued',
        'Category.CategoryName': 'Category Name',
        'Category.Description': 'Category Description'
    },
    fr: {
        ProductID: 'Nº',
        ProductName: 'Nom',
        SupplierID: 'Nº Fournisseur',
        CategoryID: 'Nº Catégorie',
        QuantityPerUnit: 'Quantité Par Unité',
        UnitPrice: 'Prix',
        UnitsInStock: 'En Stock',
        UnitsOnOrder: 'Unités En Commande',
        ReorderLevel: 'Niveau De Réapprovisionnement',
        Discontinued: 'Discontinué',
        'Category.CategoryName': 'Nom De Catégorie',
        'Category.Description': 'Description De Catégorie'
    },
    es: {
        ProductID: 'ID',
        ProductName: 'Nombre',
        SupplierID: 'ID Proveedor',
        CategoryID: 'ID Categoría',
        QuantityPerUnit: 'Cantidad Por Unidad',
        UnitPrice: 'Precio',
        UnitsInStock: 'En Stock',
        UnitsOnOrder: 'Unidades En Pedido',
        ReorderLevel: 'Nivel De Reorden',
        Discontinued: 'Descontinuado',
        'Category.CategoryName': 'Nombre De Categoría',
        'Category.Description': 'Descripción De Categoría'
    }
};

const getColumns = (locale: string) => {
    const titles = columnTitles[locale] || columnTitles['en'];
    return [
        { field: 'ProductID', title: titles['ProductID'], width: 100, locked: true },
        { field: 'ProductName', title: titles['ProductName'], minWidth: 250 },
        { field: 'SupplierID', title: titles['SupplierID'], minWidth: 120 },
        { field: 'CategoryID', title: titles['CategoryID'], minWidth: 120 },
        { field: 'QuantityPerUnit', title: titles['QuantityPerUnit'], minWidth: 160 },
        { field: 'UnitPrice', title: titles['UnitPrice'], minWidth: 80 },
        { field: 'UnitsInStock', title: titles['UnitsInStock'], minWidth: 80 },
        { field: 'UnitsOnOrder', title: titles['UnitsOnOrder'], minWidth: 150 },
        { field: 'ReorderLevel', title: titles['ReorderLevel'], minWidth: 150 },
        { field: 'Discontinued', title: titles['Discontinued'], minWidth: 120 },
        { field: 'Category.CategoryName', title: titles['Category.CategoryName'], minWidth: 150 },
        { field: 'Category.Description', title: titles['Category.Description'], minWidth: 450 }
    ];
};

const GridGlobalizationExample = () => {
    const gridRef = useRef(null);
    const { selectedLanguageCode } = useAppSelector((state) => state.language);
    const columns = getColumns(selectedLanguageCode);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-pagination-example' });

    const initialDataState: State = {
        take: 10,
        skip: 0
    };

    const [dataState, setDataState] = useState<State>(initialDataState);

    const handleDataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    console.log('Selected language code in GridGlobalizationExample:', selectedLanguageCode);

    return (
        <LocalizationProvider language={selectedLanguageCode}>
            <IntlProvider locale={selectedLanguageCode}>
                <Grid
                    ref={gridRef}
                    id='kendo-grid-pagination-example'
                    data={process(products, dataState) as DataResult}
                    take={dataState.take}
                    skip={dataState.skip}
                    sort={dataState.sort}
                    sortable={true}
                    total={products.length}
                    pageable={{
                        buttonCount: 5,
                        pageSizes: true
                    }}
                    onDataStateChange={handleDataStateChange}
                    resizable={true}
                >
                    {columns.map((column, index) => {
                        return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
                    })}
                </Grid>{' '}
            </IntlProvider>
        </LocalizationProvider>
    );
};
export default GridGlobalizationExample;

```

---

## Custom cell

**Description:** Custom cells allow you to enhance the grid's functionality and visual presentation by applying unique formatting or interactive elements to individual cells. This feature is ideal for highlighting important data, adding custom buttons, icons or images.

**Search Terms:** 'custom cell', 'custom cells', 'flag'

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridCustomCellExample.tsx`

```tsx
import { Grid, GridColumn, GridCellProps } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    }
];

const GridCustomCellExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-custom-cell-example' });

    const discontinuedStyling = (props: GridCellProps) => {
        const discontinued = props.dataItem.Discontinued;
        let badge;

        if (discontinued === true) {
            badge = <span className='badge badge-pill badge-success'>true</span>;
        } else if (discontinued === false) {
            badge = <span className='badge badge-pill badge-danger'>false</span>;
        }
        return (
            <td className={props.className} style={props.style}>
                {badge}
            </td>
        );
    };

    return (
        <Grid ref={gridRef} id='kendo-grid-custom-cell-example' data={products.slice(0, 5)} resizable={true}>
            {columns.map((column, index) => {
                return (
                    <GridColumn
                        key={index}
                        field={column.field}
                        title={column.title}
                        width={setWidth(column)}
                        cells={column.field === 'Discontinued' ? { data: discontinuedStyling } : undefined}
                    />
                );
            })}
        </Grid>
    );
};
export default GridCustomCellExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Custom cell with image

**Description:** Custom cells allow you to enhance the grid's functionality and visual presentation by applying unique formatting or interactive elements to individual cells. This feature is ideal for highlighting important data, adding custom buttons, icons or images.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridCustomCellWithImageExample.tsx`

```tsx
import { Grid, GridColumn, GridCellProps } from '@progress/kendo-react-grid';
import products from './products.json';
import { CountryFlag, useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'Country',
        title: 'Country of origin',
        minWidth: 120
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    }
];

const GridCustomCellWithImageExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-custom-cell-with-image-example' });

    const countryFlagCell = (props: GridCellProps) => {
        const country = props.dataItem.Country.toUpperCase();
        let flag;

        if (country === 'USA' || country === 'UNITED STATES' || country === 'US') {
            flag = <CountryFlag countryCode='US' />;
        } else if (country === 'CA' || country === 'CANADA') {
            flag = <CountryFlag countryCode='CA' />;
        } else {
            flag = <span>{country}</span>;
        }

        return (
            <td className={`${props.className}`} style={{ ...props.style, textAlign: 'center', verticalAlign: 'middle' }}>
                {flag}
            </td>
        );
    };

    return (
        <Grid ref={gridRef} id='kendo-grid-custom-cell-with-image-example' data={products.slice(0, 5)} resizable={true}>
            {columns.map((column, index) => {
                return (
                    <GridColumn
                        key={index}
                        field={column.field}
                        title={column.title}
                        width={setWidth(column)}
                        cells={column.field === 'Country' ? { data: countryFlagCell } : undefined}
                    />
                );
            })}
        </Grid>
    );
};
export default GridCustomCellWithImageExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Highlighting rows

**Description:** Emphasize specific rows to draw attention where it matters most.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridHighlightedRowExample.tsx`

```tsx
import { Grid, GridColumn, GridCustomRowProps } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    }
];

const CustomRow = (props: GridCustomRowProps) => {
    const discontinued = props.dataItem.Discontinued;

    const { className: kendoClassName, ...trRest } = props.trProps || {};

    let className = `${kendoClassName ?? ''} ${props.className ?? ''}`.trim();
    if (discontinued) {
        className += ' red-bg-row';
    }

    return (
        <tr {...trRest} className={className}>
            {props.children}
        </tr>
    );
};

const GridHighlightedRowExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-highlighted-row-example' });

    return (
        <Grid ref={gridRef} id='kendo-grid-highlighted-row-example' rows={{ data: CustomRow }} data={products.slice(0, 5)} resizable={true}>
            {columns.map((column, index) => {
                return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
            })}
        </Grid>
    );
};
export default GridHighlightedRowExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Sticky columns

**Description:** Lock columns to ensure they remain in constant view. This is especially useful for keeping essential functionality readily accessible on each row, for example an action dropdown.

**Search Terms:** 'locked'

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridStickyColumnsExample.tsx`

```tsx
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100, // Fixed width
        locked: true
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 250
    },
    {
        field: 'SupplierID',
        title: 'Supplier ID',
        minWidth: 120
    },
    {
        field: 'CategoryID',
        title: 'Category ID',
        minWidth: 120
    },
    {
        field: 'QuantityPerUnit',
        title: 'Quantity Per Unit',
        minWidth: 160
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 80
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'UnitsOnOrder',
        title: 'Units On Order',
        minWidth: 150
    },
    {
        field: 'ReorderLevel',
        title: 'Reorder Level',
        minWidth: 150
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    },
    {
        field: 'Category.CategoryName',
        title: 'Category Name',
        minWidth: 150
    },
    {
        field: 'Category.Description',
        title: 'Category Description',
        minWidth: 450
    }
];

const GridStickyColumnsExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-sticky-columns-example' });

    return (
        <Grid ref={gridRef} id='kendo-grid-sticky-columns-example' data={products.slice(0, 5)} resizable={true}>
            {columns.map((column, index) => {
                return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} locked={column.locked} />;
            })}
        </Grid>
    );
};
export default GridStickyColumnsExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Column filters

**Description:** Simplify data exploration by filtering columns to display only the information you need.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridColumnFiltersExample.tsx`

```tsx
import { useRef, useState } from 'react';
import { Grid, GridColumn, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { process, State, DataResult } from '@progress/kendo-data-query';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 150 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 180
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 180
    }
];

const GridColumnFiltersExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-column-filters-example' });

    const initialDataState: State = {
        take: 10,
        skip: 0
    };

    const [dataState, setDataState] = useState<State>(initialDataState);

    const handleDataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    return (
        <Grid
            ref={gridRef}
            id='kendo-grid-column-filters-example'
            data={process(products, dataState) as DataResult}
            take={dataState.take}
            skip={dataState.skip}
            filter={dataState.filter}
            sort={dataState.sort}
            total={products.length}
            filterable={true}
            sortable={true}
            onDataStateChange={handleDataStateChange}
            resizable={true}
            pageable={{
                buttonCount: 5,
                pageSizes: true
            }}
        >
            {columns.map((column, index) => {
                return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
            })}
        </Grid>
    );
};
export default GridColumnFiltersExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Simple example with Dropdown button

**Description:** This example demonstrates the Kendo Dropdown Button with actions. It is not meant to be used independenlty but rather as part of the Kendo Grid action column. A more complete example can be found in the action column example.

**Search Terms:** 'dropdown button', 'dropdown', 'dropdownbutton'

**File:** `src/ds-layout-components/foundations/components/tables/KendoDropdownButtonExample.tsx`

```tsx
import { faFileLines, faFile, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { KendoDropdownButton } from 'livingston-npm-components';
import { useState } from 'react';
import { Choice } from './Choice';

const KendoDropdownButtonExample = () => {
    const [iconPosition, setIconPosition] = useState<'left' | 'right'>('right');

    const handleActionClick = (actionId: string) => {
        console.log(`Clicked action with ID: ${actionId}`);
    };

    return (
        <>
            <Choice
                name='icon-position-choice'
                label='Dropdown item icon position'
                value={[iconPosition]}
                setValue={(values) => setIconPosition(values[0] as 'left' | 'right')}
                strictValidation={true}
                options={[
                    { value: 'left', label: 'Left' },
                    { value: 'right', label: 'Right' }
                ]}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <KendoDropdownButton
                    dropdownItems={[
                        {
                            id: 'view-details',
                            title: 'View entry details',
                            icon: faFile,
                            onClick: (id: string) => handleActionClick(id)
                        },
                        {
                            id: 'header-line-details',
                            title: 'Header and line details',
                            icon: faFileLines,
                            onClick: (id: string) => handleActionClick(id)
                        },
                        {
                            id: 'compare-docs',
                            title: 'Compare docs',
                            icon: faCodeCompare,
                            onClick: (id: string) => handleActionClick(id)
                        }
                    ]}
                    dropdownItemIconPosition={iconPosition}
                />
            </div>
        </>
    );
};

export default KendoDropdownButtonExample;

```

---

## Action column

**Description:** Column with an action dropdown for each row. Includes a loading state when an action is clicked. Notice the dropdown open/close is controlled while the simple example above is uncontrolled and can be used if no special behavior is needed.

**Search Terms:** 'dropdown button', 'dropdown', 'dropdownbutton'

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridActionColumnExample.tsx`

```tsx
import { useRef, useState } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import { SmallSpinner, useKendoResponsiveColWidths } from 'livingston-npm-components';
import { faDownload, faFileLines, faFile, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { KendoDropdownButton } from 'livingston-npm-components';
import { delay } from 'livingston-npm-components';
import { Button, Modal } from 'react-bootstrap';
import { toastQueue } from '@/utils/toastQueue';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 150 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 180
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 180
    },
    {
        field: 'Actions',
        title: '',
        width: 60
    }
];

const GridActionColumnExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-action-column-example' });

    const ActionCell = (props: any) => {
        const [busyDownloading, setBusyDownloading] = useState(false);
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const { dataItem } = props;
        const [show, setShow] = useState(false);

        const handleActionClick = (actionId: string, dataItem: any) => {
            console.log(`Clicked action with ID: ${actionId} for data item:`, dataItem);
            setDropdownOpen(false); // Close the dropdown after an action is clicked
        };

        return (
            <td className={props.className} style={props.style}>
                <div className='text-center'>
                    <Modal show={show} onHide={() => setShow(false)} dialogClassName='xxl-modal' centered scrollable fullscreen='sm-down'>
                        <Modal.Header closeButton>
                            <h3 className='mb-0'>Modal header</h3>
                        </Modal.Header>
                        <Modal.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nunc
                            tincidunt urna, vel efficitur neque justo vitae nisi. Cras fringilla dui vel lorem fringilla, in gravida felis
                            fermentum. Suspendisse potenti.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='ghost' onClick={() => setShow(false)}>
                                Close
                            </Button>
                            <Button variant='primary' onClick={() => setShow(false)}>
                                Understood
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <KendoDropdownButton
                        opened={dropdownOpen}
                        onOpenChange={setDropdownOpen}
                        dropdownItems={[
                            {
                                id: 'view-details',
                                title: 'Nº View entry details',
                                icon: faFile,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            },
                            {
                                id: 'header-line-details',
                                title: 'Header and line details',
                                icon: faFileLines,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            },
                            {
                                id: 'download-documents',
                                title: 'Download documents',
                                icon: busyDownloading ? <SmallSpinner /> : faDownload,
                                onClick: async (id: string) => {
                                    try {
                                        setBusyDownloading(true);
                                        // Simulate an asynchronous operation, e.g., fetching documents
                                        console.log('Downloading documents for invoice:', dataItem, id);
                                        await delay(4000); // Simulate a 3-second delay
                                    } catch (error) {
                                        console.error('Error downloading invoice documents:', error);
                                    } finally {
                                        console.log('Download action completed for invoice');
                                        toastQueue.addToast({
                                            message: 'Documents downloaded successfully',
                                            type: 'success'
                                        });
                                        setBusyDownloading(false);
                                        setDropdownOpen(false); // Close the dropdown after an action is clicked
                                    }
                                }
                            },
                            {
                                id: 'compare-docs',
                                title: 'Compare docs',
                                icon: faCodeCompare,
                                disabled: true,
                                onClick: (id: string) => handleActionClick(id, dataItem)
                            },
                            {
                                id: 'launch-modal',
                                title: 'Launch modal',
                                icon: faFileLines,
                                onClick: (id: string) => {
                                    handleActionClick(id, dataItem);
                                    setShow(true);
                                }
                            }
                        ]}
                        dropdownItemIconPosition='left'
                    />
                </div>
            </td>
        );
    };

    return (
        <Grid ref={gridRef} data={products.slice(0, 5)} id='kendo-grid-action-column-example' resizable={true}>
            {columns.map((column, index) => {
                return (
                    <GridColumn
                        key={index}
                        field={column.field}
                        title={column.title}
                        width={setWidth(column)}
                        cells={
                            column.field === 'Actions'
                                ? {
                                      data: ActionCell,
                                      headerCell: () => <td></td>
                                  }
                                : undefined
                        }
                    />
                );
            })}
        </Grid>
    );
};

export default GridActionColumnExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## 2 Column grid example

**Description:** 2 Column grid where the 2nd column fills the remaining space.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridTwoColumnExample.tsx`

```tsx
import { useRef } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 150
    },
    {
        field: 'ProductName',
        title: 'Name'
    }
];

const GridTwoColumnExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'grid-two-column-example' });

    return (
        <Grid ref={gridRef} data={products.slice(0, 5)} id='grid-two-column-example' resizable={true}>
            {columns.map((column, index) => {
                return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
            })}
        </Grid>
    );
};
export default GridTwoColumnExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Grid with dropdowns

**Description:** Grid example with Kendo dropdowns inside the cells

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridTwoColumnExample.tsx`

```tsx
import { useRef } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 150
    },
    {
        field: 'ProductName',
        title: 'Name'
    }
];

const GridTwoColumnExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'grid-two-column-example' });

    return (
        <Grid ref={gridRef} data={products.slice(0, 5)} id='grid-two-column-example' resizable={true}>
            {columns.map((column, index) => {
                return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
            })}
        </Grid>
    );
};
export default GridTwoColumnExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Drag and drop columns

**Description:** Reorganize your data columns through drag-and-drop functionality.

### Source File 1: `src/ds-layout-components/foundations/components/tables/GridDragAndDropColumnsExample.tsx`

```tsx
import { Grid, GridColumn, GridCustomHeaderCellProps } from '@progress/kendo-react-grid';
import products from './products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { HeaderThElement } from '@progress/kendo-react-data-tools';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    }
];

const GridDragAndDropColumnsExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-drag-and-drop-columns-example' });

    const HeaderCustomCell = (props: GridCustomHeaderCellProps) => (
        <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
            <div className='d-flex justify-content-between drag-n-drop' onClick={props.onClick}>
                {props.children}
                <div className='text-lii-text-light'>
                    <FontAwesomeIcon icon={faGripVertical} />
                </div>
            </div>{' '}
        </HeaderThElement>
    );

    return (
        <Grid
            ref={gridRef}
            id='kendo-grid-drag-and-drop-columns-example'
            data={products.slice(0, 5)}
            resizable={true}
            reorderable={true}
            cells={{ headerCell: HeaderCustomCell }}
        >
            {columns.map((column, index) => {
                return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
            })}
        </Grid>
    );
};
export default GridDragAndDropColumnsExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Empty state

**Description:** Empty state of the grid when there is no data to display.

**File:** `src/ds-layout-components/foundations/components/tables/GridEmptyStateExample.tsx`

```tsx
import { Grid, GridColumn, GridNoRecords } from '@progress/kendo-react-grid';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        minWidth: 120
    }
];

const GridEmptyStateExample = () => {
    const gridRef = useRef(null);
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns, { gridId: 'kendo-grid-empty-state-example' });

    return (
        <div className='d-flex flex-column h-100'>
            <div className='container-fluid bg-white border-bottom py-2'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='mb-0'>Header</h1>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-column flex-fill h-100'>
                <Grid ref={gridRef} id='kendo-grid-empty-state-example' className='flex-fill' data={[]} resizable={true}>
                    <GridNoRecords>No documents attached</GridNoRecords>
                    {columns.map((column, index) => {
                        return <GridColumn key={index} field={column.field} title={column.title} width={setWidth(column)} />;
                    })}
                </Grid>
            </div>
        </div>
    );
};
export default GridEmptyStateExample;

```

---

