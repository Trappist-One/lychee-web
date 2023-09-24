import AuthRouth from "@/ui/components/authRoute/index";

export function parseMenu(menus) {
  if (menus == null) return [];
  menus.map((map) => {
    if (map.children != null) {
      map.children = rebuildSubMenus(map.children);
    }
  });
  return menus;
}

const rebuildSubMenus = (subMenus) => {
  let subMenuList = [];
  subMenus.map((menu) => {
    if (menu.children != null || menu.children != []) {
      const subMenu = menu.children;
      menu = {
        ...menu,
        title: true,
        children: [],
      };
      subMenuList.push(menu);
      if (subMenu != null) {
        subMenu.map((sub) => {
          sub = {
            ...sub,
            title: false,
          };
          subMenuList.push(sub);
        });
      }
    } else {
      subMenuList.push(menu);
    }
  });

  return subMenuList;
};

// 解析路由
export function parseRoutes(children, menus) {
  let routes = [];

  children.map((menu) => {
    if (menu.children) {
      const childrenRoute = parseRoutes(menu.children, menus);
      routes = routes.concat(childrenRoute);
    } else if (menu.component) {
      routes.push(buildRoute(menu, menus, menu.path));
    }
  });
  return routes;
}

const buildRoute = (menu, menus, path) => {
  path = parseParentPath(menu, menus, path)
  console.log(menu.component);
  const route = {
    id: menu.id,
    path: path,
    element: <AuthRouth component={menu.component}></AuthRouth>,
  };

  return route;
};

// AI
export function parseParentPath(curMenu, menus, path) {
  if (curMenu.parentId == 0) {
    return path;
  } else {
    for (const menu of menus) {
      if (menu.children && menu.children.length > 0) {
        const parentMenu = menu.children.find(
          (item) => item.id === curMenu.parentId
        );
        if (parentMenu) {
          const parentPath = parentMenu.path + "/" + path;

          return parseParentPath(parentMenu, menu.children, parentPath);
        }
      }
    }

    return path;
  }
}
