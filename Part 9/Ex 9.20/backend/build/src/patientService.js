"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../data/patients"));
const uuid_1 = require("uuid");
const addPatient = (entry) => {
    const newPatientEntry = Object.assign(Object.assign({}, entry), { id: (0, uuid_1.v1)() });
    patients_1.default.push(newPatientEntry);
    return newPatientEntry;
};
exports.default = addPatient;
