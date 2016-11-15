import common = require("./ns-wkwebview.common");

export class NsWkWebView extends common.NsWkWebView {
    private _ios: any;

    constructor() {
        super();
        this._ios = new WKWebView();
    }

    get ios() {
        return this._ios;
    }
}