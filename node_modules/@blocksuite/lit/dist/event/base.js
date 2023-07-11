import { assertExists } from '@blocksuite/global/utils';
export class UIEventState {
    constructor(event) {
        this.event = event;
        /** when extends, override it with pattern `xxxState` */
        this.type = 'defaultState';
    }
}
export class UIEventStateContext {
    constructor() {
        this._map = {};
        this.add = (state) => {
            const name = state.type;
            if (this._map[name]) {
                console.warn('UIEventStateContext: state name duplicated', name);
            }
            this._map[name] = state;
        };
        this.has = (type) => {
            return !!this._map[type];
        };
        this.get = (type) => {
            const state = this._map[type];
            assertExists(state, `UIEventStateContext: state ${type} not found`);
            return state;
        };
    }
    static from(...states) {
        const context = new UIEventStateContext();
        states.forEach(state => {
            context.add(state);
        });
        return context;
    }
}
//# sourceMappingURL=base.js.map