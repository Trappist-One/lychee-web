import { Cancel } from "@mui/icons-material";
import { useContext } from "react";
import { C } from "./Layout";

export default function Breadcrumb() {
  console.log("面包屑渲染");
  const { tabs, setTabs } = useContext(C);

  const removeTab = (id) => {
    if (id != null) {
      const existTabs = tabs.filter((tab) => {
        return tab.id != id;
      });
      setTabs(existTabs);
    }
    console.log(id);
  };
  return (
    <div className="mt-1 h-8 w-full bg-white px-2 py-1">
      <div className=" flex text-xs gap-1">
        {Array.from(tabs).map((tab) => {
          return <Tab key={tab.id} data={tab} removeTab={removeTab}></Tab>;
        })}
      </div>
    </div>
  );
}
const selectTab = () => {
  console.log(222);
};
const Tab = (prop) => {
  return (
    <div className=" w-auto h-full p-1 shadow-md bg-green-600 flex items-center justify-between rounded-sm min-w-min">
      <span className="w-3 h-3 rounded-full bg-white block"></span>
      <span
        className="text-cente block text-white cursor-pointer mx-2"
        onClick={selectTab}
      >
        {prop.data.name}
      </span>
      {prop.data?.id == null ? (
        ""
      ) : (
        <span className="block" onClick={() => prop.removeTab(prop.data?.id)}>
          <Cancel className="w-4 h-4 cursor-pointer" color="primary"></Cancel>
        </span>
      )}
    </div>
  );
};
