import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/AddBusiness';
import ViewIcon from '@mui/icons-material/Store';
import DeleteIcon from '@mui/icons-material/Delete';
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

export default function BottomPurchase() {
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
        <BottomNavigationAction label="View Supplier" icon={<ViewIcon />} />
        <BottomNavigationAction label="Add Supplier" icon={<AddIcon />} />
        <BottomNavigationAction label="Delete Supplier" icon={<DeleteIcon />} />
      </BottomNavigation>
    </Box>
  );
}