import React from "react";
import "./Styles.css";
const Layout = ({ title, children }) => {
  return (
    <main className="Layout">
      <header className="Layout-header">
        <img src="/assets/logo.svg" className="Layout-header-logo" alt="logo" />

        <a className="Layout-header-link" href="/">
          {title}
        </a>
      </header>

      <section className="Layout-content">{children}</section>
    </main>
  );
};

export default Layout;
