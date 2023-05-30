import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
