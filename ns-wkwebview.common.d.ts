import view = require("ui/core/view");
import dependencyObservable = require("ui/core/dependency-observable");
export declare class NsWkWebView extends view.View {
    static srcProperty: dependencyObservable.Property;
    message: string;
    src: string;
    ios: any;
    constructor();
}
