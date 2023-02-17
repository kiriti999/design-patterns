var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Txt = /** @class */ (function () {
    function Txt() {
    }
    Txt.prototype.share = function () {
        return 'sharing via text';
    };
    return Txt;
}());
var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.share = function () {
        return 'sharing via email';
    };
    return Email;
}());
var PhoneCameraApp = /** @class */ (function () {
    function PhoneCameraApp() {
    }
    PhoneCameraApp.prototype.take = function () { };
    PhoneCameraApp.prototype.edit = function () { };
    PhoneCameraApp.prototype.save = function () { };
    PhoneCameraApp.prototype.setShareStrategy = function (shareType) {
        return shareType;
    };
    return PhoneCameraApp;
}());
var BasicCameraApp = /** @class */ (function (_super) {
    __extends(BasicCameraApp, _super);
    function BasicCameraApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicCameraApp.prototype.edit = function () {
        console.log('BasicCameraApp: edit');
    };
    return BasicCameraApp;
}(PhoneCameraApp));
var CameraPlusApp = /** @class */ (function (_super) {
    __extends(CameraPlusApp, _super);
    function CameraPlusApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraPlusApp.prototype.edit = function () {
        console.log('CameraPlusApp: edit');
    };
    return CameraPlusApp;
}(PhoneCameraApp));
var cp = new CameraPlusApp();
cp.edit();
var shareStrategy = cp.setShareStrategy(Txt);
var message = new shareStrategy().share();
console.log('share type message: ', new shareStrategy().share());
