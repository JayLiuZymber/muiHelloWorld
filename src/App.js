import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// npm install @mui/icons-material
import BottomPSI from "./BottomPSI";
import BottomInventory from "./BottomInventory";
import BottomSales from "./BottomSales";
import BottomPurchase from "./BottomPurchase";

import TabsPSI from "./TabsPSI";
import ButtonsPurchase from "./ButtonsPurchase";
import ButtonsSales from "./ButtonsSales";
import ButtonsInventory from "./ButtonsInventory";
import TabsPurchase from "./TabsPurchase";
import FloatingActionButtonZoom from "./FloatingActionButtonZoom";
import LayoutPurchase from "./LayoutPurchase";
import LayoutSales from "./LayoutSales";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          {/* <TabsPSI></TabsPSI> */}
          <BottomPSI></BottomPSI>
          {/* <TabsPurchase></TabsPurchase> */}
          {/* <ButtonsPurchase></ButtonsPurchase> */}
          {/* <ButtonsSales></ButtonsSales> */}
          {/* <ButtonsInventory></ButtonsInventory> */}
          <LayoutPurchase></LayoutPurchase>
          {/* <LayoutSales></LayoutSales> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <BottomPurchase></BottomPurchase> */}
          {/* <BottomSales></BottomSales> */}
          {/* <BottomInventory></BottomInventory> */}
        </Box>
      </Container>
    </div>
  );
}