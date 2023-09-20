import { MenuItem, Select } from "@mui/material";
import i18n from "../../i18n";

export default function LanguageSelect(prop) {
  const handleChange = (event) => {
    // 没有画像界面
    i18n.changeLanguage(event.target.value);
    // location.reload()
  };
  return (
    <div>
      <Select
        onChange={handleChange}
        className="h-10 w-40"
        defaultValue={i18n.language}
      >
        {prop.langs.map((lang) => (
          <MenuItem key={lang.name} value={lang.i18n}>
            <LangLabel lang={lang}></LangLabel>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

const LangLabel = (prop) => {
  return (
    <div className=" text-sm flex">
      <span className={"fi fi-" + prop.lang.code}></span>
      <div className="h-6 flex items-center ml-2">{prop.lang.name}</div>
    </div>
  );
};
