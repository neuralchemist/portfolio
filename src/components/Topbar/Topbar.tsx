import React from "react";
// mui 5
// custom Component
import { TopbarStack } from "./styledComponents";
import FloatingMonk from "../FloatingMonk";
import StoicTitle from "../StoicTitle/StoicTitle";
import Quote from "../Quote";
import GithubPage from "../GithubPage";

function Topbar() {
  return (
    <TopbarStack>
      <FloatingMonk />
      <StoicTitle text="the stoic developer" />
      <Quote text="Breath in (up)......Breath out (down)" />
      <GithubPage />
    </TopbarStack>
  );
}

export default Topbar;
