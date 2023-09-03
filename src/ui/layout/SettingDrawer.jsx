import { Divider, Drawer } from "@mui/material";
import { Fragment, useContext } from "react";
import themes from "@/assets/styles/themes/themes";
import { C } from "./Layout";
import LanguageSelect from "../components/LanguageSelect";
import { useTranslation } from "react-i18next";
// import {t} from 'i18next'


export default function SettingDrawer(prop) {
  const { state, dispatch } = useContext(C);
  const { t } = useTranslation();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    prop.setOpen(open);
  };

  const setTheme = (name) => {
    dispatch({ type: "setTheme", val: name });
    localStorage.setItem('theme', name)
    document.querySelector('html').setAttribute('data-theme', name)
  };

  return (
    <Fragment key="settingDrawer">
      <Drawer anchor="right" open={prop.open} onClose={toggleDrawer(false)}>
        <div className="w-52 py-5 px-3 h-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Divider flexItem>{t("主题")}</Divider>
            <div className="w-full flex justify-center gap-8">
              {themes.map((theme) => {
                let colors = [];
                let name;
                Object.keys(theme).map((key) => {
                  name = key;
                  Object.keys(theme[key]).map((color) => {
                    colors.push(theme[key][color]);
                  });
                });
                colors = colors.slice(0, 4);
                return (
                  <div key={name}>
                    <ThemeBlock
                      checked={state.theme == name}
                      colors={colors}
                      name={name}
                      oncheck={setTheme}
                    ></ThemeBlock>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Divider flexItem>{t("语言")}</Divider>
            <LanguageSelect langs={langData} defLng = {state.lang}></LanguageSelect>
          </div>
          <div>
            <Divider flexItem>{t("其他")}</Divider>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}

const langData = [
  {
      code: 'cn',
      name: '中文',
      i18n: 'zh-CN'
  },
  {
      code: 'gb',
      name: 'English',
      i18n: 'en-US'
  },
  {
      code: 'tw',
      name: '中國台灣',
      i18n: 'zh-tw'
  },
]

const ThemeBlock = (prop) => {
  const checkedBorder = prop.checked ? " border-red-200" : " border-white";
  return (
    <div>
      <div
        className={
          "h-8 w-8 flex flex-col items-center border-2 justify-center rounded-lg cursor-pointer" +
          checkedBorder
        }
        onClick={() => prop.oncheck(prop.name)}
      >
        <div className="h-full w-full p-1 grid grid-cols-2 gap-1 place-content-center">
          {prop.colors.map((color, index) => {
            return (
              <div
                className="h-2 w-2"
                style={{ backgroundColor: color }}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="text-xs text-center mt-1">{prop.name}</div>
    </div>
  );
};
