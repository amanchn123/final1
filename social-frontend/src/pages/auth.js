import React,{useState} from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import "./auth.css";
import LoginPage from "./auth/loginPage";
import { SignUp } from "./auth/signup";
import './auth.css'



export default function Auth() {

  return (
    <div
    className="mainAuth"
      style={{
        backgroundColor: "",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        padding:"10px"
      }}
    >
      <Container className="container" style={{ height: "500px" }}>
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <TabList style={{ display: "flex", justifyContent: "center" }}>
            <Tab style={{ color: "white",backgroundColor:"black",borderRadius:"30%",padding:"10px" }}>Sign in</Tab>&nbsp;&nbsp;
            <Tab style={{ color: "white" ,borderRadius:"30%",padding:"10px",backgroundColor:"black"}}>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginPage />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}
