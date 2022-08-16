import * as React from "react";
// mui 5
import Tab from "@mui/material/Tab";
// custom components
import IconStacks from "./IconStacks";
import TabPanel from "./TabPanel";
import { StyledSkillsTab, StyledTabs } from "./styledComponents";
// custom data
import { EnvStackData } from "./data/EnvStackData";
import { PLStackData } from "./data/PLStackData";
import { ReactStackData } from "./data/ReactStackData";
import { TestingStackData } from "./data/TestingStackData";
import { CICDStackData } from "./data/CICDStackData";
import { StylingStackData } from "./data/StylingStackData";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function SkillsTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledSkillsTab>
      {/* Tabs */}
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
      >
        <Tab label="Environment" {...a11yProps(0)} />
        <Tab label="Programming Language" {...a11yProps(1)} />
        <Tab label="React" {...a11yProps(2)} />
        <Tab label="Testing" {...a11yProps(3)} />
        <Tab label="CI / CD" {...a11yProps(4)} />
        <Tab label="Styling" {...a11yProps(5)} />
      </StyledTabs>
      {/* Panels */}
      <TabPanel value={value} index={0}>
        <IconStacks techStacksData={EnvStackData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IconStacks techStacksData={PLStackData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <IconStacks techStacksData={ReactStackData} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <IconStacks techStacksData={TestingStackData} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <IconStacks techStacksData={CICDStackData} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <IconStacks techStacksData={StylingStackData} />
      </TabPanel>
    </StyledSkillsTab>
  );
}

export default SkillsTab;
