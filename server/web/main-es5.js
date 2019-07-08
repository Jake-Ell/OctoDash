(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"config\" class=\"container\">\n  <div class=\"job-info\" *ngIf=\"job != null\">\n    <div class=\"progress-ring\">\n      <round-progress [current]=\"job.progress\" [max]=\"100\" [stroke]=\"25\" [rounded]=\"true\" [responsive]=\"true\" [color]=\"'#44bd32'\"></round-progress>\n      <div class=\"progress-percentage\">{{ job.progress }}<span style=\"font-size: 40%\">%</span></div>\n    </div>\n    <span class=\"job-filename\">{{ job.filename }}</span> <br />\n    <span class=\"job-filament\">{{ job.filamentAmount }}g Filament</span> <br />\n    <span class=\"job-time\"><span class=\"job-time-left\">{{ job.timeLeft.value }}</span>{{ job.timeLeft.unit }} left of {{ job.timeTotal.value }}{{ job.timeTotal.unit }}</span>\n  </div>\n  <div class=\"no-job\" *ngIf=\"job == null\">\n    No Job Running ...\n  </div>\n  <table class=\"printer-state\">\n    <tr>\n      <td class=\"printer-value printer-value-1\">\n        <div class=\"container-printer-value\">\n          <img src=\"assets/nozzle.svg\">\n          <span class=\"printer-actual-value\" [ngClass]=\"{'no-set-value': !printerState.nozzle.set}\">{{ printerState.nozzle.current }}<span class=\"unit\">°C</span></span>\n          <span class=\"printer-set-value\" *ngIf=\"printerState.nozzle.set\">/{{ printerState.nozzle.set }}<span class=\"unit\">°C</span></span>\n        </div>\n      </td>\n      <td class=\"printer-value printer-value-2\">\n        <div class=\"container-printer-value\">\n          <img src=\"assets/hot_bed.svg\">\n          <span class=\"printer-actual-value\" [ngClass]=\"{'no-set-value': !printerState.nozzle.set}\">{{ printerState.heatbed.current }}<span class=\"unit\">°C</span></span>\n          <span class=\"printer-set-value\" *ngIf=\"printerState.heatbed.set\">/{{ printerState.heatbed.set }}<span class=\"unit\">°C</span></span>\n        </div>\n      </td>\n      <td class=\"printer-value printer-value-3\">\n        <div class=\"container-printer-value\">\n          <img src=\"assets/fan.svg\" style=\"margin-top: -0.8vw;\">\n          <span class=\"printer-actual-value\" [ngClass]=\"{'no-set-value': !printerState.nozzle.set}\">{{ printerState.fan.current }}<span class=\"unit\">%</span></span>\n          <span class=\"printer-set-value\" *ngIf=\"printerState.fan.set\">/{{ printerState.fan.set }}<span class=\"unit\">%</span></span>\n        </div>\n      </td>\n    </tr>\n  </table>\n  <table class=\"print-head-position\">\n    <tr>\n      <td><span class=\"axis-identifier axis-x\">X</span>{{ printHead.x }}</td>\n      <td><span class=\"axis-identifier axis-y\">Y</span>{{  printHead.y }}</td>\n      <td><span class=\"axis-identifier axis-z\">Z</span>{{ printHead.z }}</td>\n    </tr>\n  </table>\n  <table class=\"bottom-bar\">\n    <tr>\n      <td class=\"printer-name\"> {{ config.printer.name }} </td>\n      <td class=\"enclosure-temperature\"> {{ enclosureTemperature }}°C</td>\n      <td class=\"current-state\"> {{ currentState.status }}({{ currentState.duration.value }}{{ currentState.duration.unit }}) </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n}\n\n.bottom-bar {\n  position: absolute;\n  bottom: 3vw;\n  left: 2vw;\n  width: calc(100% - 5.6vw);\n}\n\n.enclosure-temperature {\n  text-align: center;\n}\n\n.current-state {\n  text-align: right;\n}\n\n.progress-ring {\n  padding: 4.5vw 5vw 0 4.5vw;\n  width: 22vw;\n  height: 22vw;\n  float: left;\n}\n\n.progress-percentage {\n  margin-top: -16vw;\n  margin-left: 4.3vw;\n  font-size: 8.5vw;\n  text-align: center;\n  width: 14vw;\n}\n\n.no-job {\n  width: 100%;\n  font-size: 6vw;\n  height: 14vw;\n  margin-top: 13vw;\n  text-align: center;\n}\n\n.job-filename {\n  font-size: 6vw;\n  padding-top: 4.5vw;\n  display: inline-block;\n}\n\n.job-filament {\n  font-size: 3vw;\n  margin-top: -0.8vw;\n  display: block;\n}\n\n.job-time {\n  display: inline-block;\n  margin-top: -1vw;\n}\n\n.job-time-left {\n  font-size: 6vw;\n  font-weight: 600;\n}\n\n.printer-state {\n  width: 100%;\n  margin-top: 4vw;\n  display: block;\n}\n\n.printer-value {\n  text-align: right;\n}\n\n.printer-value img {\n  width: 10vw;\n  float: left;\n  padding-top: 1vw;\n  padding-right: 2vw;\n}\n\n.unit {\n  font-size: 60%;\n}\n\n.printer-actual-value {\n  font-size: 6vw;\n  font-weight: 600;\n  display: block;\n}\n\n.no-set-value {\n  line-height: 12vw;\n}\n\n.printer-set-value {\n  display: block;\n  text-align: right;\n}\n\n.printer-value-1 {\n  width: 27vw;\n  padding-left: 2vw;\n  padding-right: 8.5vw;\n}\n\n.printer-value-2 {\n  width: 25vw;\n  padding-right: 7.5vw;\n}\n\n.printer-value-2 img {\n  width: 9.2vw;\n  height: 9.2vw;\n}\n\n.printer-value-3 {\n  padding-right: 3vw;\n}\n\n.printer-value-3 img {\n  width: 11.5vw;\n  height: 11.5vw;\n}\n\n.print-head-position {\n  width: 75%;\n  margin-left: 12.5%;\n  margin-top: 4vw;\n  text-align: center;\n}\n\n.axis-identifier {\n  font-size: 140%;\n  vertical-align: -0.4vw;\n  margin-right: 3vw;\n  padding: 1vw;\n}\n\n.axis-x {\n  color: #c23616;\n}\n\n.axis-y {\n  color: #44bd32;\n}\n\n.axis-z {\n  color: #0097e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kMDY0OTA2L2NvZGUvT2N0b3ByaW50RGFzaC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRVI7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNFUjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm90dG9tLWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogM3Z3O1xuICAgIGxlZnQ6IDJ2dztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNS42dncpO1xufVxuXG4uZW5jbG9zdXJlLXRlbXBlcmF0dXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXJyZW50LXN0YXRlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByb2dyZXNzLXJpbmcge1xuICAgIHBhZGRpbmc6IDQuNXZ3IDV2dyAwIDQuNXZ3O1xuICAgIHdpZHRoOiAyMnZ3O1xuICAgIGhlaWdodDogMjJ2dztcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnByb2dyZXNzLXBlcmNlbnRhZ2Uge1xuICAgIG1hcmdpbi10b3A6IC0xNnZ3O1xuICAgIG1hcmdpbi1sZWZ0OiA0LjN2dztcbiAgICBmb250LXNpemU6IDguNXZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTR2dztcbn1cblxuLm5vLWpvYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gICAgaGVpZ2h0OiAxNHZ3O1xuICAgIG1hcmdpbi10b3A6IDEzdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uam9iLWZpbGVuYW1lIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgICBwYWRkaW5nLXRvcDogNC41dnc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uam9iLWZpbGFtZW50IHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBtYXJnaW4tdG9wOiAtMC44dnc7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5qb2ItdGltZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC0xdnc7XG59XG5cbi5qb2ItdGltZS1sZWZ0IHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJpbnRlci1zdGF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNHZ3O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJpbnRlci12YWx1ZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcmludGVyLXZhbHVlIGltZyB7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDF2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XG59XG5cbi51bml0IHtcbiAgICBmb250LXNpemU6IDYwJTtcbn1cblxuLnByaW50ZXItYWN0dWFsLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8tc2V0LXZhbHVlIHtcbiAgICBsaW5lLWhlaWdodDogMTJ2dztcbn1cblxuLnByaW50ZXItc2V0LXZhbHVlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByaW50ZXItdmFsdWUtMSB7XG4gICAgd2lkdGg6IDI3dnc7XG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XG4gICAgcGFkZGluZy1yaWdodDogOC41dnc7XG59XG5cbi5wcmludGVyLXZhbHVlLTIge1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDcuNXZ3O1xuICAgICYgaW1nIHtcbiAgICAgICAgd2lkdGg6IDkuMnZ3O1xuICAgICAgICBoZWlnaHQ6IDkuMnZ3O1xuICAgIH1cbn1cblxuLnByaW50ZXItdmFsdWUtMyAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDN2dztcbiAgICAmIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMS41dnc7XG4gICAgICAgIGhlaWdodDogMTEuNXZ3O1xuICAgIH1cbn1cblxuLnByaW50LWhlYWQtcG9zaXRpb24ge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICAgIG1hcmdpbi10b3A6IDR2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmF4aXMtaWRlbnRpZmllciB7XG4gICAgZm9udC1zaXplOiAxNDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiAtLjR2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcbiAgICBwYWRkaW5nOiAxdnc7XG59XG5cbi5heGlzLXgge1xuICAgIGNvbG9yOiAjYzIzNjE2O1xufVxuXG4uYXhpcy15IHtcbiAgICBjb2xvcjogIzQ0YmQzMjtcbn1cblxuLmF4aXMteiB7XG4gICAgY29sb3I6ICMwMDk3ZTY7XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3R0b20tYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDN2dztcbiAgbGVmdDogMnZ3O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNS42dncpO1xufVxuXG4uZW5jbG9zdXJlLXRlbXBlcmF0dXJlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3VycmVudC1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHJvZ3Jlc3MtcmluZyB7XG4gIHBhZGRpbmc6IDQuNXZ3IDV2dyAwIDQuNXZ3O1xuICB3aWR0aDogMjJ2dztcbiAgaGVpZ2h0OiAyMnZ3O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnByb2dyZXNzLXBlcmNlbnRhZ2Uge1xuICBtYXJnaW4tdG9wOiAtMTZ2dztcbiAgbWFyZ2luLWxlZnQ6IDQuM3Z3O1xuICBmb250LXNpemU6IDguNXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNHZ3O1xufVxuXG4ubm8tam9iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNnZ3O1xuICBoZWlnaHQ6IDE0dnc7XG4gIG1hcmdpbi10b3A6IDEzdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmpvYi1maWxlbmFtZSB7XG4gIGZvbnQtc2l6ZTogNnZ3O1xuICBwYWRkaW5nLXRvcDogNC41dnc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmpvYi1maWxhbWVudCB7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tdG9wOiAtMC44dnc7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uam9iLXRpbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xdnc7XG59XG5cbi5qb2ItdGltZS1sZWZ0IHtcbiAgZm9udC1zaXplOiA2dnc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcmludGVyLXN0YXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDR2dztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcmludGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcmludGVyLXZhbHVlIGltZyB7XG4gIHdpZHRoOiAxMHZ3O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDF2dztcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xufVxuXG4udW5pdCB7XG4gIGZvbnQtc2l6ZTogNjAlO1xufVxuXG4ucHJpbnRlci1hY3R1YWwtdmFsdWUge1xuICBmb250LXNpemU6IDZ2dztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uby1zZXQtdmFsdWUge1xuICBsaW5lLWhlaWdodDogMTJ2dztcbn1cblxuLnByaW50ZXItc2V0LXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHJpbnRlci12YWx1ZS0xIHtcbiAgd2lkdGg6IDI3dnc7XG4gIHBhZGRpbmctbGVmdDogMnZ3O1xuICBwYWRkaW5nLXJpZ2h0OiA4LjV2dztcbn1cblxuLnByaW50ZXItdmFsdWUtMiB7XG4gIHdpZHRoOiAyNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiA3LjV2dztcbn1cbi5wcmludGVyLXZhbHVlLTIgaW1nIHtcbiAgd2lkdGg6IDkuMnZ3O1xuICBoZWlnaHQ6IDkuMnZ3O1xufVxuXG4ucHJpbnRlci12YWx1ZS0zIHtcbiAgcGFkZGluZy1yaWdodDogM3Z3O1xufVxuLnByaW50ZXItdmFsdWUtMyBpbWcge1xuICB3aWR0aDogMTEuNXZ3O1xuICBoZWlnaHQ6IDExLjV2dztcbn1cblxuLnByaW50LWhlYWQtcG9zaXRpb24ge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogMTIuNSU7XG4gIG1hcmdpbi10b3A6IDR2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXhpcy1pZGVudGlmaWVyIHtcbiAgZm9udC1zaXplOiAxNDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTAuNHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDN2dztcbiAgcGFkZGluZzogMXZ3O1xufVxuXG4uYXhpcy14IHtcbiAgY29sb3I6ICNjMjM2MTY7XG59XG5cbi5heGlzLXkge1xuICBjb2xvcjogIzQ0YmQzMjtcbn1cblxuLmF4aXMteiB7XG4gIGNvbG9yOiAjMDA5N2U2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_service) {
        var _this = this;
        this._service = _service;
        this.enclosureTemperature = 22.3;
        this.currentState = {
            status: "printing",
            duration: {
                value: "1:14",
                unit: "h"
            }
        };
        this.job = {
            filename: "Benchy.gcode",
            progress: 55,
            filamentAmount: 5.8,
            timeLeft: {
                value: "0:45",
                unit: "h"
            },
            timeTotal: {
                value: "1:59",
                unit: "h"
            }
        };
        // job = null;
        this.printHead = {
            x: 154,
            y: 201,
            z: 25.4
        };
        this.printerState = {
            nozzle: {
                current: 190,
                set: 190
            },
            heatbed: {
                current: 56,
                set: 55
            },
            fan: {
                current: 80,
                set: 80
            }
        };
        this._service.getConfig().subscribe(function (config) { return _this.config = config; });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__["RoundProgressModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getConfig = function () {
        return this.http.get("assets/config.json");
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/d064906/code/OctoprintDash/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map