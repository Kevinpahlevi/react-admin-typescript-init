// in src/Dashboard.js
import React from "react";
import Card from "@material-ui/core/Card";

const Dashboard = () => {
  return (
    <Card
      style={{
        minHeight: "300px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "30px" }}>
          DASHBOARD REACT ADMIN BOILERPLATE
        </p>
      </div>
    </Card>
  );
};

export default Dashboard;
