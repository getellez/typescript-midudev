"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = exports.getEntriesWithoutSensitiveInfo = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntriesWithoutSensitiveInfo = (name) => name;
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const addEntry = () => undefined;
exports.addEntry = addEntry;
