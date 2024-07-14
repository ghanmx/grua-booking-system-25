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
exports.TowTruckTypeFeatures = void 0;
var typeorm_1 = require("typeorm");
var domain_1 = require("../../../modules/towTruckType/domain");
var TowTruckTypeFeatures = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _feature_decorators;
    var _feature_initializers = [];
    var _towTruckTypeId_decorators;
    var _towTruckTypeId_initializers = [];
    var _towTruckType_decorators;
    var _towTruckType_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var TowTruckTypeFeatures = _classThis = /** @class */ (function () {
        function TowTruckTypeFeatures_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.feature = __runInitializers(this, _feature_initializers, void 0);
            this.towTruckTypeId = __runInitializers(this, _towTruckTypeId_initializers, void 0);
            this.towTruckType = __runInitializers(this, _towTruckType_initializers, void 0);
            this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
            this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
            this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
        }
        return TowTruckTypeFeatures_1;
    }());
    __setFunctionName(_classThis, "TowTruckTypeFeatures");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _feature_decorators = [(0, typeorm_1.Column)()];
        _towTruckTypeId_decorators = [(0, typeorm_1.Column)()];
        _towTruckType_decorators = [(0, typeorm_1.ManyToOne)(function () { return domain_1.TowTruckType; }, function (parent) { return parent.towTruckTypeFeaturess; }), (0, typeorm_1.JoinColumn)({ name: 'towTruckTypeId' })];
        _dateCreated_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _dateUpdated_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        _dateDeleted_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _feature_decorators, { kind: "field", name: "feature", static: false, private: false, access: { has: function (obj) { return "feature" in obj; }, get: function (obj) { return obj.feature; }, set: function (obj, value) { obj.feature = value; } }, metadata: _metadata }, _feature_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _towTruckTypeId_decorators, { kind: "field", name: "towTruckTypeId", static: false, private: false, access: { has: function (obj) { return "towTruckTypeId" in obj; }, get: function (obj) { return obj.towTruckTypeId; }, set: function (obj, value) { obj.towTruckTypeId = value; } }, metadata: _metadata }, _towTruckTypeId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _towTruckType_decorators, { kind: "field", name: "towTruckType", static: false, private: false, access: { has: function (obj) { return "towTruckType" in obj; }, get: function (obj) { return obj.towTruckType; }, set: function (obj, value) { obj.towTruckType = value; } }, metadata: _metadata }, _towTruckType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TowTruckTypeFeatures = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TowTruckTypeFeatures = _classThis;
}();
exports.TowTruckTypeFeatures = TowTruckTypeFeatures;
