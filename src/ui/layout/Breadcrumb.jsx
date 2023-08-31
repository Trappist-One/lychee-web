import { Close } from "@mui/icons-material";
import { useContext } from "react";
import { C } from "./Layout";

export default function Breadcrumb() {
  const {state, dispatch} = useContext(C);

  const removeTab = (id) => {
    if (id != null) {
      let idx;
      const existTabs = tabs.filter((tab, index) => {
        if (tab.id == id) {
          idx = index;
        }
        return tab.id != id;
      });
      if (state.activeMenuId == id) {
        // 先往前，如果没有，则往后
        if (idx >= existTabs.length) {
          idx = idx - 1;
        }
        const nextMenuTab = existTabs.at(idx);
        dispatch({type: 'setActiveMenuId', val: nextMenuTab.id})
      }
      dispatch({type:setTabs, val: existTabs})
    }
  };
  return (
    <div className="mt-1 h-8 w-full bg-white px-2 py-1">
      <div className=" flex text-xs gap-1">
        {Array.from(tabs).map((tab) => {
          return (
            <Tab
              key={tab.id}
              data={tab}
              removeTab={removeTab}
              active={state.activeMenuId === tab.id}
            ></Tab>
          );
        })}
      </div>
    </div>
  );
}

const Tab = (prop) => {
  const {dispatch} = useContext(C);

  const statusColor = prop.active ? "bg-red-400" : "bg-white";
  return (
    <div className=" w-auto h-6 p-1 shadow-md bg-green-600 flex items-center justify-between rounded-sm min-w-min ">
      <span className={"w-3 h-3 rounded-full block " + statusColor}></span>
      <span
        className="text-cente block text-white cursor-pointer mx-2"
        onClick={() => dispatch({type: 'setActiveMenuId', val: data.id})}
      >
        {prop.data.name}
      </span>
      {prop.data?.id == 0 ? (
        ""
      ) : (
        <span
          className="block cursor-pointer"
          onClick={() => prop.removeTab(prop.data?.id)}
        >
          <Close
            className="w-4 h-4 min-h-max min-w-full cursor-pointer"
            color="action"
          ></Close>
        </span>
      )}
    </div>
  );
};
