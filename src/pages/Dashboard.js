import React from "react";
import { useState, useId, useEffect } from "react";
import axios from "axios";
import EnhancedTable from "../components/DataGrid/DataGrid";

export default function Dashboard() {
  return (
    <>
      <div className="card-header">Dashboard</div>
      <div className="card-body">
        <div className="container">
          <div className="row ">
            <div className="card col-md m-1">
              <div className="card-header">Header</div>
              <div className="card-body">Content</div>
              <div className="card-footer">Footer</div>
            </div>
            <div className="card col-md m-1">
              <div className="card-header">Header</div>
              <div className="card-body">Content</div>
              <div className="card-footer">Footer</div>
            </div>
            <div className="card col-md m-1">
              <div className="card-header">Header</div>
              <div className="card-body">Content</div>
              <div className="card-footer">Footer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
