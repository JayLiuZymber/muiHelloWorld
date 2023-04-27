import * as React from "react";
import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/PersonAddAlt';
import ViewIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/PersonOff';
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

export default function ButtonsSales() {
  return (
    <Stack direction="row" spacing={3}>
      <Button variant="contained" startIcon={<ViewIcon />}>
        View
      </Button>
      <Button variant="contained" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  );
}
