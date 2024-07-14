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
exports.TowTruckType = void 0;
var database_1 = require("@server/core/database");
var typeorm_1 = require("typeorm");
var domain_1 = require("../../../modules/towServiceRequest/domain");
var domain_2 = require("../../../modules/towTruckTypeFeatures/domain");
var TowTruckType = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _baseFare_decorators;
    var _baseFare_initializers = [];
    var _costPerKm_decorators;
    var _costPerKm_initializers = [];
    var _towServiceRequests_decorators;
    var _towServiceRequests_initializers = [];
    var _towTruckTypeFeaturess_decorators;
    var _towTruckTypeFeaturess_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var TowTruckType = _classThis = /** @class */ (function () {
        function TowTruckType_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.baseFare = __runInitializers(this, _baseFare_initializers, void 0);
            this.costPerKm = __runInitializers(this, _costPerKm_initializers, void 0);
            this.towServiceRequests = __runInitializers(this, _towServiceRequests_initializers, void 0);
            this.towTruckTypeFeaturess = __runInitializers(this, _towTruckTypeFeaturess_initializers, void 0);
            this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
            this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
            this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
        }
        return TowTruckType_1;
    }());
    __setFunctionName(_classThis, "TowTruckType");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _name_decorators = [(0, typeorm_1.Column)({})];
        _baseFare_decorators = [(0, database_1.ColumnNumeric)({ type: 'numeric' })];
        _costPerKm_decorators = [(0, database_1.ColumnNumeric)({ type: 'numeric' })];
        _towServiceRequests_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_1.TowServiceRequest; }, function (child) { return child.towTruckType; })];
        _towTruckTypeFeaturess_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_2.TowTruckTypeFeatures; }, function (child) { return child.towTruckType; })];
        _dateCreated_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _dateUpdated_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        _dateDeleted_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _baseFare_decorators, { kind: "field", name: "baseFare", static: false, private: false, access: { has: function (obj) { return "baseFare" in obj; }, get: function (obj) { return obj.baseFare; }, set: function (obj, value) { obj.baseFare = value; } }, metadata: _metadata }, _baseFare_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _costPerKm_decorators, { kind: "field", name: "costPerKm", static: false, private: false, access: { has: function (obj) { return "costPerKm" in obj; }, get: function (obj) { return obj.costPerKm; }, set: function (obj, value) { obj.costPerKm = value; } }, metadata: _metadata }, _costPerKm_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _towServiceRequests_decorators, { kind: "field", name: "towServiceRequests", static: false, private: false, access: { has: function (obj) { return "towServiceRequests" in obj; }, get: function (obj) { return obj.towServiceRequests; }, set: function (obj, value) { obj.towServiceRequests = value; } }, metadata: _metadata }, _towServiceRequests_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _towTruckTypeFeaturess_decorators, { kind: "field", name: "towTruckTypeFeaturess", static: false, private: false, access: { has: function (obj) { return "towTruckTypeFeaturess" in obj; }, get: function (obj) { return obj.towTruckTypeFeaturess; }, set: function (obj, value) { obj.towTruckTypeFeaturess = value; } }, metadata: _metadata }, _towTruckTypeFeaturess_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TowTruckType = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TowTruckType = _classThis;
}();
exports.TowTruckType = TowTruckType;
