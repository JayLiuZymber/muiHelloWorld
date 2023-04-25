import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/AddCard';
import ViewIcon from '@mui/icons-material/CreditCard';
import DeleteIcon from '@mui/icons-material/CreditCardOff';
// AddBusiness
// Person
// Inventory

// Store
// Delete

// PersonAddAlt
// ShoppingCart
// AddShoppingCart
// RemoveShoppingCart

// CreditCard
// AddCard
// CreditCardOff

// npm install @mui/icons-material

export default function BottomInventory() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "sm" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="View Product" icon={<ViewIcon />} />
        <BottomNavigationAction label="Add Product" icon={<AddIcon />} />
        <BottomNavigationAction label="Delete Product" icon={<DeleteIcon />} />
      </BottomNavigation>
    </Box>
  );
}