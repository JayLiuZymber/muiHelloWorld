import * as React from "react";
import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
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

export default function ButtonsInventory() {
  return (
    <Stack direction="row" spacing={3}>
      <Button variant="contained" startIcon={<ViewIcon />}>
        View
      </Button>
      <Button variant="contained" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  );
}
