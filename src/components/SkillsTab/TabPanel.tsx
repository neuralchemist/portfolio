import React from "react";
// mui 5
import Box from "@mui/material/Box";
import { StyledPanelBox } from "./styledComponents";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{ width: "100%", height: "100%" }}
    >
      {value === index && (
        <StyledPanelBox>
          {children}
        </StyledPanelBox>
      )}
    </Box>
  );
}

export default TabPanel;
