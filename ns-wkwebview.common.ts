import view = require("ui/core/view");
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require('ui/core/proxy');

declare var WKWebView: any;
declare var NSURLRequest: any;
declare var NSURL: any;
function onSrcPropertyChanged(data: dependencyObservable.PropertyChangeData) {
    if(wkwebview.ios) {
        var wkwebview = <NsWkWebView>data.object;
        wkwebview.ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(data.newValue)));
    }
}
var srcProperty = new dependencyObservable.Property("src", "NsWkWebView", new proxy.PropertyMetadata(""));
(<proxy.PropertyMetadata>srcProperty.metadata).onSetNativeValue = onSrcPropertyChanged;

export class NsWkWebView extends view.View {
    public static srcProperty = srcProperty;

    get src(): string {
        return this._getValue(NsWkWebView.srcProperty);
    }

    set src(value: string) {
        this._setValue(NsWkWebView.srcProperty, value);
    }

    ios: any;

    constructor() {
      super();
    }
}