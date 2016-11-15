var NsWkwebview = require("nativescript-ns-wkwebview").NsWkwebview;
var nsWkwebview = new NsWkwebview();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(nsWkwebview.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(nsWkwebview.functionname()).toEqual(jasmine.any(Promise));
  });
});