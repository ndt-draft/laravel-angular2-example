import "core-js/es6";
import "reflect-metadata";
declare var require: any;
require("zone.js/dist/zone");
declare var process: any;
if (process.env.ENV === "production") {
  // Production
} else {
  // Development
  Error["stackTraceLimit"] = Infinity;
  require("zone.js/dist/long-stack-trace-zone");
}
