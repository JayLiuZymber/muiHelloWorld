import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PurchaseIcon from '@mui/icons-material/Storefront';
import SalesIcon from '@mui/icons-material/Groups';
import InventoryIcon from '@mui/icons-material/Inventory';
// npm install @mui/icons-material

export default function BottomPSI() {
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
        <BottomNavigationAction label="Purchase" icon={<PurchaseIcon />} />
        <BottomNavigationAction label="Sales" icon={<SalesIcon />} />
        <BottomNavigationAction label="Inventory" icon={<InventoryIcon />} />
      </BottomNavigation>
    </Box>
  );
}