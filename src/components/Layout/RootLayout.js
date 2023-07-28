import { Layout } from "antd";
import React from "react";
import Navbar from "../Navbar/Navbar";
const { Header, Footer } = Layout;
const RootLayout = ({ children }) => {
  return (
    <Layout className="max-w-screen-xl mx-auto">
      <Header>
        <Navbar />
      </Header>
      <div className="bg-white">{children}</div>
      <Footer>This is Footer</Footer>
    </Layout>
  );
};

export default RootLayout;
