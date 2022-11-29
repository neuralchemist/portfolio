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

function allProps(index: number) {
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
        <Tab label="Environment" {...allProps(0)} />
        <Tab label="Programming Language" {...allProps(1)} />
        <Tab label="React" {...allProps(2)} />
        <Tab label="Testing" {...allProps(3)} />
        <Tab label="CI / CD" {...allProps(4)} />
        <Tab label="Styling" {...allProps(5)} />
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
