"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uom_1 = require("uom");
var lodash_round_1 = __importDefault(require("lodash.round"));
var PrivacyStatus;
(function (PrivacyStatus) {
    PrivacyStatus["unlisted"] = "unlisted";
    PrivacyStatus["public"] = "public";
    PrivacyStatus["private"] = "private";
})(PrivacyStatus = exports.PrivacyStatus || (exports.PrivacyStatus = {}));
var MassUnit;
(function (MassUnit) {
    MassUnit["Pound"] = "pound";
    MassUnit["Kilogram"] = "kilogram";
})(MassUnit = exports.MassUnit || (exports.MassUnit = {}));
var LengthUnit;
(function (LengthUnit) {
    LengthUnit["Yard"] = "yard";
    LengthUnit["Meter"] = "meter";
})(LengthUnit = exports.LengthUnit || (exports.LengthUnit = {}));
var ExerciseInput;
(function (ExerciseInput) {
    ExerciseInput["Reps"] = "reps";
    ExerciseInput["Weight"] = "weight";
    ExerciseInput["Duration"] = "duration";
    ExerciseInput["Distance"] = "distance";
    ExerciseInput["Freeform"] = "freeform";
})(ExerciseInput = exports.ExerciseInput || (exports.ExerciseInput = {}));
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus["Draft"] = "draft";
    ActivityStatus["Published"] = "published";
    ActivityStatus["Archived"] = "archived";
})(ActivityStatus = exports.ActivityStatus || (exports.ActivityStatus = {}));
var VisibilityStatus;
(function (VisibilityStatus) {
    VisibilityStatus["Public"] = "public";
    VisibilityStatus["Follower"] = "follower";
    VisibilityStatus["Private"] = "private";
    VisibilityStatus["Archived"] = "archived";
})(VisibilityStatus = exports.VisibilityStatus || (exports.VisibilityStatus = {}));
var MovementCategory;
(function (MovementCategory) {
    MovementCategory["Warmup"] = "warmup";
    MovementCategory["Mobility"] = "mobility";
    MovementCategory["Stability"] = "stability";
    MovementCategory["Plyometric"] = "plyometric";
    MovementCategory["Power"] = "power";
    MovementCategory["Strength"] = "strength";
    MovementCategory["Movement"] = "movement";
    MovementCategory["Condition"] = "condition";
    MovementCategory["SportSpecific"] = "sport-specific";
    MovementCategory["Technique"] = "technique";
    MovementCategory["Wellness"] = "wellness";
})(MovementCategory = exports.MovementCategory || (exports.MovementCategory = {}));
var AccessLevel;
(function (AccessLevel) {
    AccessLevel["all"] = "all";
    AccessLevel["members"] = "members";
    AccessLevel["paidMembers"] = "paidMembers";
})(AccessLevel = exports.AccessLevel || (exports.AccessLevel = {}));
exports.convertedWeight = function (unitToConvertFrom, unitToConvertTo, weight, levelsOfPrecision) {
    if (levelsOfPrecision === void 0) { levelsOfPrecision = 1; }
    if (!weight) {
        return null;
    }
    var unit = unitToConvertFrom == MassUnit.Kilogram ? uom_1.Units.Kilogram : uom_1.Units.PoundLb;
    var amount = uom_1.Amount.create(weight, unit);
    if (unitToConvertTo == MassUnit.Kilogram) {
        var toKilos = uom_1.Amount.valueAs(uom_1.Units.Kilogram, amount);
        return lodash_round_1.default(toKilos, levelsOfPrecision);
    }
    else {
        var toPounds = uom_1.Amount.valueAs(uom_1.Units.PoundLb, amount);
        return lodash_round_1.default(toPounds, levelsOfPrecision);
    }
};
var ALGExercise = /** @class */ (function () {
    function ALGExercise(objectID, data) {
        this.objectID = objectID;
        this.title = data.title;
        this.category = data.category;
        this.ownerId = data.ownerId;
        this.version = data.version;
        this.isBodyweight = data.isBodyweight;
        this.unilateral = data.unilateral;
        this.youtubeLink = data.youtubeLink;
        this.customVideo = data.customVideo;
        this.visibilityStatus = data.visibilityStatus;
        this.ownerDisplayName = data.ownerDisplayName;
        this.instructionPresets = data.instructionPresets;
    }
    return ALGExercise;
}());
exports.ALGExercise = ALGExercise;
var IActivity = /** @class */ (function () {
    function IActivity(id, data) {
        this.id = id;
        this.created = data.created;
        this.status = data.status;
        this.title = data.title;
        this.ownerId = data.ownerId;
        this.photo = data.photo;
        this.scheduleInfo = data.scheduleInfo;
        this.customVideo = data.customVideo;
        this.scheduledDate = data.scheduledDate;
        this.type = data.type;
        this.instructionSetId = data.instructionSetId;
        this.youtubeLink = data.youtubeLink;
        this.access = data.access;
        this.tags = data.tags;
    }
    return IActivity;
}());
exports.IActivity = IActivity;
var ALGActivity = /** @class */ (function () {
    function ALGActivity(objectID, data) {
        this.objectID = objectID;
        this.created = data.created;
        this.status = data.status;
        this.title = data.title;
        this.ownerId = data.ownerId;
        this.photo = data.photo;
        this.scheduleInfo = data.scheduleInfo;
        this.customVideo = data.customVideo;
        this.scheduledDate = data.scheduledDate;
        this.type = data.type;
        this.instructionSetId = data.instructionSetId;
        this.youtubeLink = data.youtubeLink;
        this.access = data.access;
        this.tags = data.tags;
    }
    Object.defineProperty(ALGActivity.prototype, "id", {
        get: function () {
            return this.objectID;
        },
        enumerable: true,
        configurable: true
    });
    return ALGActivity;
}());
exports.ALGActivity = ALGActivity;
