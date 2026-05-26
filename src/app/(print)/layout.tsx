import React from "react";
import { Navbar } from "@/src/components";

export const PrintLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
};

export default PrintLayout;
