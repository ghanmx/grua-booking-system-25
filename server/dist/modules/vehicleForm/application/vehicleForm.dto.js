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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFormUpdateDto = exports.VehicleFormCreateDto = void 0;
var class_validator_1 = require("class-validator");
var VehicleFormCreateDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _formData_decorators;
    var _formData_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var _vehicleId_decorators;
    var _vehicleId_initializers = [];
    return _a = /** @class */ (function () {
            function VehicleFormCreateDto() {
                this.formData = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _formData_initializers, void 0));
                this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
                this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
                this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
                this.vehicleId = __runInitializers(this, _vehicleId_initializers, void 0);
            }
            return VehicleFormCreateDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _formData_decorators = [(0, class_validator_1.IsNotEmpty)()];
            _dateCreated_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _dateUpdated_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _dateDeleted_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _vehicleId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _formData_decorators, { kind: "field", name: "formData", static: false, private: false, access: { has: function (obj) { return "formData" in obj; }, get: function (obj) { return obj.formData; }, set: function (obj, value) { obj.formData = value; } }, metadata: _metadata }, _formData_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _vehicleId_decorators, { kind: "field", name: "vehicleId", static: false, private: false, access: { has: function (obj) { return "vehicleId" in obj; }, get: function (obj) { return obj.vehicleId; }, set: function (obj, value) { obj.vehicleId = value; } }, metadata: _metadata }, _vehicleId_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.VehicleFormCreateDto = VehicleFormCreateDto;
var VehicleFormUpdateDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _formData_decorators;
    var _formData_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var _vehicleId_decorators;
    var _vehicleId_initializers = [];
    return _a = /** @class */ (function () {
            function VehicleFormUpdateDto() {
                this.formData = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _formData_initializers, void 0));
                this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
                this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
                this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
                this.vehicleId = __runInitializers(this, _vehicleId_initializers, void 0);
            }
            return VehicleFormUpdateDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _formData_decorators = [(0, class_validator_1.IsOptional)()];
            _dateCreated_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _dateUpdated_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _dateDeleted_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _vehicleId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _formData_decorators, { kind: "field", name: "formData", static: false, private: false, access: { has: function (obj) { return "formData" in obj; }, get: function (obj) { return obj.formData; }, set: function (obj, value) { obj.formData = value; } }, metadata: _metadata }, _formData_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _vehicleId_decorators, { kind: "field", name: "vehicleId", static: false, private: false, access: { has: function (obj) { return "vehicleId" in obj; }, get: function (obj) { return obj.vehicleId; }, set: function (obj, value) { obj.vehicleId = value; } }, metadata: _metadata }, _vehicleId_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.VehicleFormUpdateDto = VehicleFormUpdateDto;
