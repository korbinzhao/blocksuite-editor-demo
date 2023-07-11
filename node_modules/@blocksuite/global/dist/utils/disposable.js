export class DisposableGroup {
    constructor() {
        this._disposed = false;
        this._disposables = [];
    }
    get disposed() {
        return this._disposed;
    }
    /**
     * Add to group to be disposed with others.
     * This will be immediately disposed if this group has already been disposed.
     */
    add(d) {
        if (typeof d === 'function') {
            if (this._disposed)
                d();
            else
                this._disposables.push({ dispose: d });
        }
        else {
            if (this._disposed)
                d.dispose();
            else
                this._disposables.push(d);
        }
    }
    addFromEvent(target, type, handler, eventOptions) {
        this.add({
            dispose: () => {
                target.removeEventListener(type, handler, eventOptions);
            },
        });
        target.addEventListener(type, handler, eventOptions);
    }
    dispose() {
        disposeAll(this._disposables);
        this._disposables = [];
        this._disposed = true;
    }
}
export function flattenDisposables(disposables) {
    return {
        dispose: () => disposeAll(disposables),
    };
}
function disposeAll(disposables) {
    for (const disposable of disposables) {
        try {
            disposable.dispose();
        }
        catch (err) {
            console.error(err);
        }
    }
}
//# sourceMappingURL=disposable.js.map