"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationInfrastructureModule = void 0;
var common_1 = require("@nestjs/common");
var socket_1 = require("@server/libraries/socket");
var domain_1 = require("@server/modules/authorization/domain");
var domain_2 = require("../domain");
var notification_passwordReset_subscriber_1 = require("./subscribers/notification.passwordReset.subscriber");
var notification_towTruckType_subscriber_1 = require("./subscribers/notification.towTruckType.subscriber");
var notification_towServiceRequest_subscriber_1 = require("./subscribers/notification.towServiceRequest.subscriber");
var notification_event_subscriber_1 = require("./subscribers/notification.event.subscriber");
var notification_towTruckTypeFeatures_subscriber_1 = require("./subscribers/notification.towTruckTypeFeatures.subscriber");
var notification_notificationPreference_subscriber_1 = require("./subscribers/notification.notificationPreference.subscriber");
var notification_passwordHistory_subscriber_1 = require("./subscribers/notification.passwordHistory.subscriber");
var notification_userForm_subscriber_1 = require("./subscribers/notification.userForm.subscriber");
var notification_vehicleForm_subscriber_1 = require("./subscribers/notification.vehicleForm.subscriber");
var NotificationInfrastructureModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [domain_1.AuthorizationDomainModule, domain_2.NotificationDomainModule, socket_1.SocketModule],
            providers: [
                notification_passwordReset_subscriber_1.NotificationPasswordResetSubscriber,
                notification_towTruckType_subscriber_1.NotificationTowTruckTypeSubscriber,
                notification_towServiceRequest_subscriber_1.NotificationTowServiceRequestSubscriber,
                notification_event_subscriber_1.NotificationEventSubscriber,
                notification_towTruckTypeFeatures_subscriber_1.NotificationTowTruckTypeFeaturesSubscriber,
                notification_notificationPreference_subscriber_1.NotificationNotificationPreferenceSubscriber,
                notification_passwordHistory_subscriber_1.NotificationPasswordHistorySubscriber,
                notification_userForm_subscriber_1.NotificationUserFormSubscriber,
                notification_vehicleForm_subscriber_1.NotificationVehicleFormSubscriber,
            ],
            exports: [],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var NotificationInfrastructureModule = _classThis = /** @class */ (function () {
        function NotificationInfrastructureModule_1() {
        }
        return NotificationInfrastructureModule_1;
    }());
    __setFunctionName(_classThis, "NotificationInfrastructureModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationInfrastructureModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationInfrastructureModule = _classThis;
}();
exports.NotificationInfrastructureModule = NotificationInfrastructureModule;
