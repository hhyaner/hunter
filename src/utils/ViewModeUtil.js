import { VIEW_MODE } from '../constants/Constant';


export default class ViewMode {

    static getMode() {
        return '';
    }

    static toggleMode() {
        ViewMode.mode = ViewMode.mode === VIEW_MODE.GRID
            ? VIEW_MODE.LIST : VIEW_MODE.GRID;
        return ViewMode.mode;
    }
}

// TODO(Victoria): application init
ViewMode.mode = VIEW_MODE.GRID;