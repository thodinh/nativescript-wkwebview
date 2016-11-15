import {Observable} from 'data/observable';
import {NsWkWebView} from 'nativescript-ns-wkwebview';

export class HelloWorldModel extends Observable {
  public message: string;
  private nsWkwebview: NsWkWebView;

  constructor() {
    super();

    this.nsWkwebview = new NsWkWebView();
    this.message = this.nsWkwebview.message;
  }
}