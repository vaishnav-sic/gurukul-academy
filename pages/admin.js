import React from "react";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminPage from "../components/AdminPage";

const Admin = () => {
    return (
        <div>
    <Preloader />

    <Layout pageTitle="SIC | Service Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
        <AdminPage/>   
      
      <Footer />
    </Layout>
  </div>
    );
};
export default Admin;
