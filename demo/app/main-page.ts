import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';
import {NsWkWebView} from 'nativescript-ns-wkwebview';
declare var NSURLRequest: any;
declare var NSURL: any;

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
    // var webview = page.getViewById<NsWkWebView>("wv");
    // console.log("WEBVIEW.IOS", webview.ios);
    // var url = NSURL.URLWithString("http://www.google.com");
    // var request = NSURLRequest.requestWithURL(url);
    // console.log("WEBVIEW.IOS", webview.ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString("http://www.google.com"))));
    // console.log("WEBVIEW.IOS", webview.ios.isLoading);
    // console.log("WEBVIEW.IOS", webview.ios.reload);
    // console.log("WEBVIEW.IOS", webview.ios.reloadFromOrigin);
    // webview.ios.load();
    console.log("LOADED");
}