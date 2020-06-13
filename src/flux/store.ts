import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import ActionTypes from "./types";
import getSidebarNavItems from "constants/nav-itens";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSidebarDropdown = this.toggleSidebarDropdown.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }: any) {
    switch (actionType) {
      case ActionTypes.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      case ActionTypes.TOGGLE_SIDEBAR_DROPDOWN:
        this.toggleSidebarDropdown(payload);
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(ActionTypes.CHANGE);
  }

  toggleSidebarDropdown(item: any) {
    const newStore = { ..._store };

    let navGroupIdx: any = null;
    let navItemIdx: any = null;

    newStore.navItems.forEach((navItem, _idx) => {
      const __idx = navItem.items.indexOf(item);
      if (__idx !== -1) {
        navGroupIdx = _idx;
        navItemIdx = __idx;
      }
    });

    newStore.navItems[navGroupIdx].items[navItemIdx].open = !newStore.navItems[
      navGroupIdx
    ].items[navItemIdx].open;

    newStore.navItems = newStore.navItems.map((i) => {
      i.items = i.items.map((_i: any, idx: number) => {
        if (idx !== navItemIdx) {
          _i.open = false;
        }
        return _i;
      });
      return i;
    });

    _store = newStore;
    this.emit(ActionTypes.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  addChangeListener(callback: () => void) {
    this.on(ActionTypes.CHANGE, callback);
  }

  removeChangeListener(callback: () => void) {
    this.removeListener(ActionTypes.CHANGE, callback);
  }
}

export default new Store();
