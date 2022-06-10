import React, { useEffect, useState } from "react";
import { DockLayout } from "rc-dock";
import AgGridTableComponent from "./AgGridTableComponent";
import Chart from "./Chart";
import "rc-dock/dist/rc-dock.css";
import { DataProvider } from "./DataContext";
import { default as axios } from "axios";

const DockComponent = ({ tabCount }) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const variableTabs = () => {
    const allTabs = [];
    for (let tab = 0; tab < tabCount; tab++) {
      allTabs.push({
        id: `${tab}`,
        title: `Large Data Set ${tab + 1}`,
        content: isLoading ? (
          <p>Loading...</p>
        ) : (
          <AgGridTableComponent
            id={`id-tab-${tab}`}
            pagination={false}
            pageSize={false}
          />
        ),
        closable: true,
      });
    }
    return allTabs;
  };

  const defaultTabs = [
    {
      id: "tab1",
      title: "Large Data Set 1 (5 Rows)",
      content: isLoading ? (
        <p>Loading...</p>
      ) : (
        <AgGridTableComponent id={1} pagination={true} pageSize={false} />
      ),
      closable: true,
    },
    {
      id: "tab2",
      title: "Large Data Set (+3000 Rows)",
      content: isLoading ? (
        <p>Loading...</p>
      ) : (
        <AgGridTableComponent id={2} pagination={false} pageSize={false} />
      ),
      closable: true,
    },
    {
      id: "tab3",
      title: "Large Data Set 2 (Fit Height Rows)",
      content: isLoading ? (
        <p>Loading...</p>
      ) : (
        <AgGridTableComponent
          id={3}
          pagination={false}
          paginationAutoPageSize={true}
        />
      ),
      closable: true,
    },
    {
      id: "tab4",
      title: "Chart Demo",
      content: <Chart />,
      closable: true,
    },
  ];

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get("https://seal-app-y4e29.ondigitalocean.app/dataset")
      .catch((err) => console.error(err))
      .then((response) => setData(response.data.dataset));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const defaultLayout = {
    dockbox: {
      mode: "horizontal",
      children: [
        {
          tabs: tabCount ? variableTabs() : defaultTabs,
        },
      ],
    },
  };

  return (
    <DataProvider value={data}>
      <DockLayout
        defaultLayout={defaultLayout}
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          right: 10,
          bottom: 10,
        }}
      />
    </DataProvider>
  );
};

export default DockComponent;
