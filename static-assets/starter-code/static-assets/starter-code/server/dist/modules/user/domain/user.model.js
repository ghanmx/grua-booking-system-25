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
exports.User = exports.UserStatus = void 0;
var typeorm_1 = require("typeorm");
var domain_1 = require("../../../modules/notification/domain");
var domain_2 = require("../../../modules/passwordReset/domain");
var domain_3 = require("../../../modules/towServiceRequest/domain");
var domain_4 = require("../../../modules/event/domain");
var domain_5 = require("../../../modules/notificationPreference/domain");
var domain_6 = require("../../../modules/passwordHistory/domain");
var domain_7 = require("../../../modules/userForm/domain");
var UserStatus;
(function (UserStatus) {
    UserStatus["VERIFIED"] = "VERIFIED";
    UserStatus["CREATED"] = "CREATED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _pictureUrl_decorators;
    var _pictureUrl_initializers = [];
    var _stripeCustomerId_decorators;
    var _stripeCustomerId_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _lastLogin_decorators;
    var _lastLogin_initializers = [];
    var _isActive_decorators;
    var _isActive_initializers = [];
    var _isVerified_decorators;
    var _isVerified_initializers = [];
    var _passwordResets_decorators;
    var _passwordResets_initializers = [];
    var _towServiceRequests_decorators;
    var _towServiceRequests_initializers = [];
    var _events_decorators;
    var _events_initializers = [];
    var _notificationPreferences_decorators;
    var _notificationPreferences_initializers = [];
    var _passwordHistorys_decorators;
    var _passwordHistorys_initializers = [];
    var _userForms_decorators;
    var _userForms_initializers = [];
    var _notifications_decorators;
    var _notifications_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.pictureUrl = __runInitializers(this, _pictureUrl_initializers, void 0);
            this.stripeCustomerId = __runInitializers(this, _stripeCustomerId_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.status = __runInitializers(this, _status_initializers, void 0);
            this.lastLogin = __runInitializers(this, _lastLogin_initializers, void 0);
            this.isActive = __runInitializers(this, _isActive_initializers, void 0);
            this.isVerified = __runInitializers(this, _isVerified_initializers, void 0);
            this.passwordResets = __runInitializers(this, _passwordResets_initializers, void 0);
            this.towServiceRequests = __runInitializers(this, _towServiceRequests_initializers, void 0);
            this.events = __runInitializers(this, _events_initializers, void 0);
            this.notificationPreferences = __runInitializers(this, _notificationPreferences_initializers, void 0);
            this.passwordHistorys = __runInitializers(this, _passwordHistorys_initializers, void 0);
            this.userForms = __runInitializers(this, _userForms_initializers, void 0);
            this.notifications = __runInitializers(this, _notifications_initializers, void 0);
            this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
            this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
            this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _email_decorators = [(0, typeorm_1.Column)({ nullable: true, unique: true })];
        _name_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _pictureUrl_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _stripeCustomerId_decorators = [(0, typeorm_1.Column)({ nullable: true, select: false })];
        _password_decorators = [(0, typeorm_1.Column)({ nullable: true, select: false })];
        _status_decorators = [(0, typeorm_1.Column)({ enum: UserStatus, default: UserStatus.VERIFIED })];
        _lastLogin_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _isActive_decorators = [(0, typeorm_1.Column)({})];
        _isVerified_decorators = [(0, typeorm_1.Column)({})];
        _passwordResets_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_2.PasswordReset; }, function (child) { return child.user; })];
        _towServiceRequests_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_3.TowServiceRequest; }, function (child) { return child.user; })];
        _events_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_4.Event; }, function (child) { return child.user; })];
        _notificationPreferences_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_5.NotificationPreference; }, function (child) { return child.user; })];
        _passwordHistorys_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_6.PasswordHistory; }, function (child) { return child.user; })];
        _userForms_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_7.UserForm; }, function (child) { return child.user; })];
        _notifications_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_1.Notification; }, function (notification) { return notification.user; })];
        _dateCreated_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _dateUpdated_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        _dateDeleted_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pictureUrl_decorators, { kind: "field", name: "pictureUrl", static: false, private: false, access: { has: function (obj) { return "pictureUrl" in obj; }, get: function (obj) { return obj.pictureUrl; }, set: function (obj, value) { obj.pictureUrl = value; } }, metadata: _metadata }, _pictureUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _stripeCustomerId_decorators, { kind: "field", name: "stripeCustomerId", static: false, private: false, access: { has: function (obj) { return "stripeCustomerId" in obj; }, get: function (obj) { return obj.stripeCustomerId; }, set: function (obj, value) { obj.stripeCustomerId = value; } }, metadata: _metadata }, _stripeCustomerId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lastLogin_decorators, { kind: "field", name: "lastLogin", static: false, private: false, access: { has: function (obj) { return "lastLogin" in obj; }, get: function (obj) { return obj.lastLogin; }, set: function (obj, value) { obj.lastLogin = value; } }, metadata: _metadata }, _lastLogin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: function (obj) { return "isActive" in obj; }, get: function (obj) { return obj.isActive; }, set: function (obj, value) { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isVerified_decorators, { kind: "field", name: "isVerified", static: false, private: false, access: { has: function (obj) { return "isVerified" in obj; }, get: function (obj) { return obj.isVerified; }, set: function (obj, value) { obj.isVerified = value; } }, metadata: _metadata }, _isVerified_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _passwordResets_decorators, { kind: "field", name: "passwordResets", static: false, private: false, access: { has: function (obj) { return "passwordResets" in obj; }, get: function (obj) { return obj.passwordResets; }, set: function (obj, value) { obj.passwordResets = value; } }, metadata: _metadata }, _passwordResets_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _towServiceRequests_decorators, { kind: "field", name: "towServiceRequests", static: false, private: false, access: { has: function (obj) { return "towServiceRequests" in obj; }, get: function (obj) { return obj.towServiceRequests; }, set: function (obj, value) { obj.towServiceRequests = value; } }, metadata: _metadata }, _towServiceRequests_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _events_decorators, { kind: "field", name: "events", static: false, private: false, access: { has: function (obj) { return "events" in obj; }, get: function (obj) { return obj.events; }, set: function (obj, value) { obj.events = value; } }, metadata: _metadata }, _events_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _notificationPreferences_decorators, { kind: "field", name: "notificationPreferences", static: false, private: false, access: { has: function (obj) { return "notificationPreferences" in obj; }, get: function (obj) { return obj.notificationPreferences; }, set: function (obj, value) { obj.notificationPreferences = value; } }, metadata: _metadata }, _notificationPreferences_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _passwordHistorys_decorators, { kind: "field", name: "passwordHistorys", static: false, private: false, access: { has: function (obj) { return "passwordHistorys" in obj; }, get: function (obj) { return obj.passwordHistorys; }, set: function (obj, value) { obj.passwordHistorys = value; } }, metadata: _metadata }, _passwordHistorys_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userForms_decorators, { kind: "field", name: "userForms", static: false, private: false, access: { has: function (obj) { return "userForms" in obj; }, get: function (obj) { return obj.userForms; }, set: function (obj, value) { obj.userForms = value; } }, metadata: _metadata }, _userForms_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _notifications_decorators, { kind: "field", name: "notifications", static: false, private: false, access: { has: function (obj) { return "notifications" in obj; }, get: function (obj) { return obj.notifications; }, set: function (obj, value) { obj.notifications = value; } }, metadata: _metadata }, _notifications_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
