import React, { useContext } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import dataSetColumnsLarge from "./dataSetColumnsLarge";
import DataContext from "./DataContext";

const AgGridTableComponent = ({ id, pagination, paginationAutoPageSize }) => {
  const columnDefs = dataSetColumnsLarge;

  const dataContext = useContext(DataContext);
  return (
    <div
      className="ag-theme-material"
      style={{ height: "100vh", width: "100%" }}
    >
      <AgGridReact
        pagination={pagination || paginationAutoPageSize}
        paginationPageSize={pagination && 5}
        paginationAutoPageSize={paginationAutoPageSize}
        cacheBlockSize={20}
        rowData={dataContext}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default AgGridTableComponent;
