import { Drafts, SettingsAccessibility } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function UserProfileList() {
  const { t } = useTranslation();
  const navigaaate = useNavigate()
  const logoutFund = () => {
    navigaaate('/')
  }
  return (
    <Box className=" bg-white shadow-xl">
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{height: 30}}>
              <ListItemIcon>
                <SettingsAccessibility/>
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: 14,
                  lineHeight: "20px",
                }}
              >
                {t("用户设置")}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding onClick={() => logoutFund()}>
            <ListItemButton sx={{height: 30}}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: 14,
                  lineHeight: "20px",
                }}
              >
                {t("退出登录")}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
