import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/PersonAddAlt';
import ViewIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/PersonOff';
// AddBusiness
// Person
// Inventory

// Store
// Delete

// Person
// PersonAddAlt
// PersonOff

// ShoppingCart
// AddShoppingCart
// RemoveShoppingCart

// CreditCard
// AddCard
// CreditCardOff

export default function BottomSales() {
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
        <BottomNavigationAction label="View Customer" icon={<ViewIcon />} />
        <BottomNavigationAction label="Add Customer" icon={<AddIcon />} />
        <BottomNavigationAction label="Delete Customer" icon={<DeleteIcon />} />
      </BottomNavigation>
    </Box>
  );
}