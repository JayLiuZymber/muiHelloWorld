import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PurchaseIcon from '@mui/icons-material/Storefront';
import SalesIcon from '@mui/icons-material/Groups';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function TabsPSI() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example"
      variant="fullWidth">
      <Tab icon={<PurchaseIcon />} label="Purchase" />
      <Tab icon={<SalesIcon />} label="Sales" />
      <Tab icon={<InventoryIcon />} label="Inventory" />
    </Tabs>
  );
}
