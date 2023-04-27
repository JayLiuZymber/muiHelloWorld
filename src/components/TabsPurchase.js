import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewIcon from "@mui/icons-material/Store";
import AddIcon from "@mui/icons-material/AddBusiness";
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

export default function TabsPurchase() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example"
      variant="fullWidth">
      <Tab icon={<ViewIcon />} label="View" />
      <Tab icon={<AddIcon />} label="Add" />
      <Tab icon={<DeleteIcon />} label="Delete" />
    </Tabs>
  );
}
