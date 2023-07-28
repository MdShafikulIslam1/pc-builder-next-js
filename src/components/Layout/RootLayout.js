import { Layout } from "antd";
import React from "react";
import Navbar from "../Navbar/Navbar";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#7dbcea" }}>
        <Navbar />
      </Header>
      <Content style={{ height: "90vh" }}>{children}</Content>
      <Footer>This is Footer</Footer>
    </Layout>
  );
};

export default RootLayout;
