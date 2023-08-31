const LayoutContext = (state, action) => {
    switch(action.type) {
        case 'setExpand': 
        return {
            ...state,
            expand: action.val
        }

        case 'setActiveMenuId': 
        return {
            ...state,
            activeMenuId: action.val
        }

        case 'setTabs': 
        return {
            ...state,
            tabs: action.val
        }

        default:
            return state;
    }
}

const State = {
    'expand': true,
    'activeMenuId': 0,
    'tabs':[    {
        name: "首页",
        path: "/",
        id: 0,
      }]
}

export {LayoutContext, State}

