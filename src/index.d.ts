// To parse this data:
//
//   import { Convert, Chayns } from "./file";
//
//   const chayns = Convert.toChayns(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Chayns {
    ready:                  Event;
    env:                    Env;
    utils:                  Utils;
    dialog:                 Dialog;
    urlType:                URLType;
    animationType:          AnimationType;
    cameryType:             CameryType;
    logoutType:             LogoutType;
    loginState:             LoginState;
    tappEvent:              TappEvent;
    listeners:              null[];
    floatingButtonPosition: FloatingButtonPosition;
    storage:                Storage;
    networkType:            { [key: string]: number };
    sharingApp:             SharingApp;
    adminSwitchStatus:      AdminSwitchStatus;
    orientation:            Orientation;
    mimeType:               MIMEType;
    event:                  Event;
    intercom:               Event;
}

export interface AdminSwitchStatus {
    ADMIN: number;
    USER:  number;
}

export interface AnimationType {
    DEFAULT: number;
    BOTTOM:  number;
}

export interface CameryType {
    AUTO:  number;
    BACK:  number;
    FRONT: number;
}

export interface Dialog {
    buttonText: ButtonText;
    buttonType: ButtonType;
    selectType: SelectType;
    dateType:   DateType;
    inputType:  InputType;
    fileType:   FileType;
}

export interface ButtonText {
    YES:    string;
    NO:     string;
    OK:     string;
    CANCEL: string;
}

export interface ButtonType {
    CANCEL:   number;
    NEGATIVE: number;
    POSITIVE: number;
}

export interface DateType {
    DATE:      number;
    TIME:      number;
    DATE_TIME: number;
}

export interface FileType {
    IMAGE:    string;
    VIDEO:    string;
    AUDIO:    string;
    DOCUMENT: string[];
}

export interface InputType {
    DEFAULT:  number;
    PASSWORD: number;
    TEXTAREA: number;
    INPUT:    number;
    NUMBER:   number;
}

export interface SelectType {
    DEFAULT: number;
    ICON:    number;
}

export interface Env {
    parameters:         Event;
    _parameters:        Event;
    browser:            Browser;
    language:           string;
    site:               Site;
    user:               User;
    app:                Event;
    device:             Event;
    isIOS:              boolean;
    isAndroid:          boolean;
    isWP:               boolean;
    isMobile:           boolean;
    isTablet:           boolean;
    isApp:              boolean;
    isBrowser:          boolean;
    isDesktop:          boolean;
    os:                 string;
    isChaynsWebMobile:  boolean;
    isChaynsWebDesktop: boolean;
    isChaynsWeb:        boolean;
    isChaynsParent:     boolean;
    isMyChaynsApp:      boolean;
    isWidget:           boolean;
    isInFrame:          boolean;
    isInFacebookFrame:  boolean;
    appVersion:         number;
    debugMode:          boolean;
    apiVersion:         number;
}

export interface Event {
}

export interface Browser {
    name:         string;
    version:      string;
    supportsWebP: boolean;
}

export interface Site {
    id:               string;
    locationId:       number;
    locationPersonId: string;
    title:            string;
    language:         string;
    tapps:            Tapp[];
    facebookPageId:   null;
    color:            string;
    colorMode:        number;
    version:          string;
    domain:           string;
    font:             number;
    environment:      string;
    tapp:             Tapp;
    disposition:      Disposition;
    headlineFontId:   number;
    urlHash:          string;
    url:              string;
}

export interface Disposition {
    coverWide:     boolean;
    barWide:       boolean;
    docked:        boolean;
    barOnTop:      boolean;
    contentWide:   boolean;
    coverDetached: boolean;
}

export interface Tapp {
    id:               number;
    showName:         string;
    internalName:     string;
    isExclusiveView?: boolean;
    isSubTapp:        boolean;
    sortId:           number;
    customUrl:        string;
    isHiddenFromMenu: boolean;
    icon:             string;
    iconType:         number;
    userGroupIds?:    number[];
}

export interface User {
    name:             string;
    firstName:        string;
    lastName:         string;
    id:               number;
    personId:         string;
    tobitAccessToken: string;
    groups:           Group[];
    isAuthenticated:  boolean;
    adminMode:        boolean;
    isAdmin:          boolean;
}

export interface Group {
    id:       number;
    isActive: boolean;
}

export interface FloatingButtonPosition {
    RIGHT:  number;
    CENTER: number;
    LEFT:   number;
}

export interface LoginState {
    FACEBOOK:          number;
    T_WEB:             number;
    CANCEL:            number;
    ALREADY_LOGGED_IN: number;
}

export interface LogoutType {
    NORMAL: number;
    FORCE:  number;
}

export interface MIMEType {
    DOCUMENT: number;
    AUDIO:    number;
    IMAGE:    number;
    VIDEO:    number;
}

export interface Orientation {
    DEFAULT:           number;
    PORTRAIT:          number;
    LANDSCAPE:         number;
    PORTRAIT_SENSOR:   number;
    LANDSCAPE_SENSOR:  number;
    PORTRAIT_REVERSE:  number;
    LANDSCAPE_REVERSE: number;
}

export interface SharingApp {
    MAIL:               number;
    WHATSAPP:           number;
    FACEBOOK:           number;
    FACEBOOK_MESSENGER: number;
    GOOGLE_PLUS:        number;
    TWITTER:            number;
}

export interface Storage {
    accessMode: AccessMode;
}

export interface AccessMode {
    PUBLIC:    number;
    PROTECTED: number;
    PRIVATE:   number;
}

export interface TappEvent {
    ON_SHOW:    number;
    ON_HIDE:    number;
    ON_REFRESH: number;
}

export interface URLType {
    WEB: number;
    AR:  number;
}

export interface Utils {
    colors:    Event;
    ls:        Event;
    lang:      Event;
    translate: Event;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    /* @ts-ignore */
    public static toChayns(json: string): Chayns {
        return cast(JSON.parse(json), r("Chayns"));
    }

    /* @ts-ignore */
    public static chaynsToJson(value: Chayns): string {
        return JSON.stringify(uncast(value, r("Chayns")), null, 2);
    }
}

/* @ts-ignore */
function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        /* @ts-ignore */
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

/* @ts-ignore */
function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        /* @ts-ignore */
        const map: any = {};
        /* @ts-ignore */
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

/* @ts-ignore */
function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        /* @ts-ignore */
        const map: any = {};
        /* @ts-ignore */
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

/* @ts-ignore */
function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    /* @ts-ignore */
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    /* @ts-ignore */
    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        /* @ts-ignore */
        const l = typs.length;
        /* @ts-ignore */
        for (let i = 0; i < l; i++) {
            /* @ts-ignore */
            const typ = typs[i];
            /* @ts-ignore */
            try {
                /* @ts-ignore */
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    /* @ts-ignore */
    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    /* @ts-ignore */
    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    /* @ts-ignore */
    function transformDate(val: any): any {
        if (val === null) {
            /* @ts-ignore */
            return null;
        }
        /* @ts-ignore */
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            /* @ts-ignore */
            return invalidValue("Date", val);
        }
        return d;
    }

    /* @ts-ignore */
    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            /* @ts-ignore */
            return invalidValue("object", val);
        }
        /* @ts-ignore */
        const result: any = {};
        /* @ts-ignore */
        Object.getOwnPropertyNames(props).forEach(key => {
            /* @ts-ignore */
            const prop = props[key];
            /* @ts-ignore */
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        /* @ts-ignore */
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                /* @ts-ignore */
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        /* @ts-ignore */
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        /* @ts-ignore */
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        /* @ts-ignore */
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

/* @ts-ignore */
function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

/* @ts-ignore */
function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

/* @ts-ignore */
function a(typ: any) {
    return { arrayItems: typ };
}

/* @ts-ignore */
function u(...typs: any[]) {
    return { unionMembers: typs };
}

/* @ts-ignore */
function o(props: any[], additional: any) {
    return { props, additional };
}

/* @ts-ignore */
function m(additional: any) {
    return { props: [], additional };
}

/* @ts-ignore */
function r(name: string) {
    return { ref: name };
}
/* @ts-ignore */
const typeMap: any = {
    "Chayns": o([
        { json: "ready", js: "ready", typ: r("Event") },
        { json: "env", js: "env", typ: r("Env") },
        { json: "utils", js: "utils", typ: r("Utils") },
        { json: "dialog", js: "dialog", typ: r("Dialog") },
        { json: "urlType", js: "urlType", typ: r("URLType") },
        { json: "animationType", js: "animationType", typ: r("AnimationType") },
        { json: "cameryType", js: "cameryType", typ: r("CameryType") },
        { json: "logoutType", js: "logoutType", typ: r("LogoutType") },
        { json: "loginState", js: "loginState", typ: r("LoginState") },
        { json: "tappEvent", js: "tappEvent", typ: r("TappEvent") },
        { json: "listeners", js: "listeners", typ: a(null) },
        { json: "floatingButtonPosition", js: "floatingButtonPosition", typ: r("FloatingButtonPosition") },
        { json: "storage", js: "storage", typ: r("Storage") },
        { json: "networkType", js: "networkType", typ: m(0) },
        { json: "sharingApp", js: "sharingApp", typ: r("SharingApp") },
        { json: "adminSwitchStatus", js: "adminSwitchStatus", typ: r("AdminSwitchStatus") },
        { json: "orientation", js: "orientation", typ: r("Orientation") },
        { json: "mimeType", js: "mimeType", typ: r("MIMEType") },
        { json: "event", js: "event", typ: r("Event") },
        { json: "intercom", js: "intercom", typ: r("Event") },
    ], false),
    "AdminSwitchStatus": o([
        { json: "ADMIN", js: "ADMIN", typ: 0 },
        { json: "USER", js: "USER", typ: 0 },
    ], false),
    "AnimationType": o([
        { json: "DEFAULT", js: "DEFAULT", typ: 0 },
        { json: "BOTTOM", js: "BOTTOM", typ: 0 },
    ], false),
    "CameryType": o([
        { json: "AUTO", js: "AUTO", typ: 0 },
        { json: "BACK", js: "BACK", typ: 0 },
        { json: "FRONT", js: "FRONT", typ: 0 },
    ], false),
    "Dialog": o([
        { json: "buttonText", js: "buttonText", typ: r("ButtonText") },
        { json: "buttonType", js: "buttonType", typ: r("ButtonType") },
        { json: "selectType", js: "selectType", typ: r("SelectType") },
        { json: "dateType", js: "dateType", typ: r("DateType") },
        { json: "inputType", js: "inputType", typ: r("InputType") },
        { json: "fileType", js: "fileType", typ: r("FileType") },
    ], false),
    "ButtonText": o([
        { json: "YES", js: "YES", typ: "" },
        { json: "NO", js: "NO", typ: "" },
        { json: "OK", js: "OK", typ: "" },
        { json: "CANCEL", js: "CANCEL", typ: "" },
    ], false),
    "ButtonType": o([
        { json: "CANCEL", js: "CANCEL", typ: 0 },
        { json: "NEGATIVE", js: "NEGATIVE", typ: 0 },
        { json: "POSITIVE", js: "POSITIVE", typ: 0 },
    ], false),
    "DateType": o([
        { json: "DATE", js: "DATE", typ: 0 },
        { json: "TIME", js: "TIME", typ: 0 },
        { json: "DATE_TIME", js: "DATE_TIME", typ: 0 },
    ], false),
    "FileType": o([
        { json: "IMAGE", js: "IMAGE", typ: "" },
        { json: "VIDEO", js: "VIDEO", typ: "" },
        { json: "AUDIO", js: "AUDIO", typ: "" },
        { json: "DOCUMENT", js: "DOCUMENT", typ: a("") },
    ], false),
    "InputType": o([
        { json: "DEFAULT", js: "DEFAULT", typ: 0 },
        { json: "PASSWORD", js: "PASSWORD", typ: 0 },
        { json: "TEXTAREA", js: "TEXTAREA", typ: 0 },
        { json: "INPUT", js: "INPUT", typ: 0 },
        { json: "NUMBER", js: "NUMBER", typ: 0 },
    ], false),
    "SelectType": o([
        { json: "DEFAULT", js: "DEFAULT", typ: 0 },
        { json: "ICON", js: "ICON", typ: 0 },
    ], false),
    "Env": o([
        { json: "parameters", js: "parameters", typ: r("Event") },
        { json: "_parameters", js: "_parameters", typ: r("Event") },
        { json: "browser", js: "browser", typ: r("Browser") },
        { json: "language", js: "language", typ: "" },
        { json: "site", js: "site", typ: r("Site") },
        { json: "user", js: "user", typ: r("User") },
        { json: "app", js: "app", typ: r("Event") },
        { json: "device", js: "device", typ: r("Event") },
        { json: "isIOS", js: "isIOS", typ: true },
        { json: "isAndroid", js: "isAndroid", typ: true },
        { json: "isWP", js: "isWP", typ: true },
        { json: "isMobile", js: "isMobile", typ: true },
        { json: "isTablet", js: "isTablet", typ: true },
        { json: "isApp", js: "isApp", typ: true },
        { json: "isBrowser", js: "isBrowser", typ: true },
        { json: "isDesktop", js: "isDesktop", typ: true },
        { json: "os", js: "os", typ: "" },
        { json: "isChaynsWebMobile", js: "isChaynsWebMobile", typ: true },
        { json: "isChaynsWebDesktop", js: "isChaynsWebDesktop", typ: true },
        { json: "isChaynsWeb", js: "isChaynsWeb", typ: true },
        { json: "isChaynsParent", js: "isChaynsParent", typ: true },
        { json: "isMyChaynsApp", js: "isMyChaynsApp", typ: true },
        { json: "isWidget", js: "isWidget", typ: true },
        { json: "isInFrame", js: "isInFrame", typ: true },
        { json: "isInFacebookFrame", js: "isInFacebookFrame", typ: true },
        { json: "appVersion", js: "appVersion", typ: 3.14 },
        { json: "debugMode", js: "debugMode", typ: true },
        { json: "apiVersion", js: "apiVersion", typ: 0 },
    ], false),
    "Event": o([
    ], false),
    "Browser": o([
        { json: "name", js: "name", typ: "" },
        { json: "version", js: "version", typ: "" },
        { json: "supportsWebP", js: "supportsWebP", typ: true },
    ], false),
    "Site": o([
        { json: "id", js: "id", typ: "" },
        { json: "locationId", js: "locationId", typ: 0 },
        { json: "locationPersonId", js: "locationPersonId", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "language", js: "language", typ: "" },
        { json: "tapps", js: "tapps", typ: a(r("Tapp")) },
        { json: "facebookPageId", js: "facebookPageId", typ: null },
        { json: "color", js: "color", typ: "" },
        { json: "colorMode", js: "colorMode", typ: 0 },
        { json: "version", js: "version", typ: "" },
        { json: "domain", js: "domain", typ: "" },
        { json: "font", js: "font", typ: 0 },
        { json: "environment", js: "environment", typ: "" },
        { json: "tapp", js: "tapp", typ: r("Tapp") },
        { json: "disposition", js: "disposition", typ: r("Disposition") },
        { json: "headlineFontId", js: "headlineFontId", typ: 0 },
        { json: "urlHash", js: "urlHash", typ: "" },
        { json: "url", js: "url", typ: "" },
    ], false),
    "Disposition": o([
        { json: "coverWide", js: "coverWide", typ: true },
        { json: "barWide", js: "barWide", typ: true },
        { json: "docked", js: "docked", typ: true },
        { json: "barOnTop", js: "barOnTop", typ: true },
        { json: "contentWide", js: "contentWide", typ: true },
        { json: "coverDetached", js: "coverDetached", typ: true },
    ], false),
    "Tapp": o([
        { json: "id", js: "id", typ: 0 },
        { json: "showName", js: "showName", typ: "" },
        { json: "internalName", js: "internalName", typ: "" },
        { json: "isExclusiveView", js: "isExclusiveView", typ: u(undefined, true) },
        { json: "isSubTapp", js: "isSubTapp", typ: true },
        { json: "sortId", js: "sortId", typ: 0 },
        { json: "customUrl", js: "customUrl", typ: "" },
        { json: "isHiddenFromMenu", js: "isHiddenFromMenu", typ: true },
        { json: "icon", js: "icon", typ: "" },
        { json: "iconType", js: "iconType", typ: 0 },
        { json: "userGroupIds", js: "userGroupIds", typ: u(undefined, a(0)) },
    ], false),
    "User": o([
        { json: "name", js: "name", typ: "" },
        { json: "firstName", js: "firstName", typ: "" },
        { json: "lastName", js: "lastName", typ: "" },
        { json: "id", js: "id", typ: 0 },
        { json: "personId", js: "personId", typ: "" },
        { json: "tobitAccessToken", js: "tobitAccessToken", typ: "" },
        { json: "groups", js: "groups", typ: a(r("Group")) },
        { json: "isAuthenticated", js: "isAuthenticated", typ: true },
        { json: "adminMode", js: "adminMode", typ: true },
        { json: "isAdmin", js: "isAdmin", typ: true },
    ], false),
    "Group": o([
        { json: "id", js: "id", typ: 0 },
        { json: "isActive", js: "isActive", typ: true },
    ], false),
    "FloatingButtonPosition": o([
        { json: "RIGHT", js: "RIGHT", typ: 0 },
        { json: "CENTER", js: "CENTER", typ: 0 },
        { json: "LEFT", js: "LEFT", typ: 0 },
    ], false),
    "LoginState": o([
        { json: "FACEBOOK", js: "FACEBOOK", typ: 0 },
        { json: "T_WEB", js: "T_WEB", typ: 0 },
        { json: "CANCEL", js: "CANCEL", typ: 0 },
        { json: "ALREADY_LOGGED_IN", js: "ALREADY_LOGGED_IN", typ: 0 },
    ], false),
    "LogoutType": o([
        { json: "NORMAL", js: "NORMAL", typ: 0 },
        { json: "FORCE", js: "FORCE", typ: 0 },
    ], false),
    "MIMEType": o([
        { json: "DOCUMENT", js: "DOCUMENT", typ: 0 },
        { json: "AUDIO", js: "AUDIO", typ: 0 },
        { json: "IMAGE", js: "IMAGE", typ: 0 },
        { json: "VIDEO", js: "VIDEO", typ: 0 },
    ], false),
    "Orientation": o([
        { json: "DEFAULT", js: "DEFAULT", typ: 0 },
        { json: "PORTRAIT", js: "PORTRAIT", typ: 0 },
        { json: "LANDSCAPE", js: "LANDSCAPE", typ: 0 },
        { json: "PORTRAIT_SENSOR", js: "PORTRAIT_SENSOR", typ: 0 },
        { json: "LANDSCAPE_SENSOR", js: "LANDSCAPE_SENSOR", typ: 0 },
        { json: "PORTRAIT_REVERSE", js: "PORTRAIT_REVERSE", typ: 0 },
        { json: "LANDSCAPE_REVERSE", js: "LANDSCAPE_REVERSE", typ: 0 },
    ], false),
    "SharingApp": o([
        { json: "MAIL", js: "MAIL", typ: 0 },
        { json: "WHATSAPP", js: "WHATSAPP", typ: 0 },
        { json: "FACEBOOK", js: "FACEBOOK", typ: 0 },
        { json: "FACEBOOK_MESSENGER", js: "FACEBOOK_MESSENGER", typ: 0 },
        { json: "GOOGLE_PLUS", js: "GOOGLE_PLUS", typ: 0 },
        { json: "TWITTER", js: "TWITTER", typ: 0 },
    ], false),
    "Storage": o([
        { json: "accessMode", js: "accessMode", typ: r("AccessMode") },
    ], false),
    "AccessMode": o([
        { json: "PUBLIC", js: "PUBLIC", typ: 0 },
        { json: "PROTECTED", js: "PROTECTED", typ: 0 },
        { json: "PRIVATE", js: "PRIVATE", typ: 0 },
    ], false),
    "TappEvent": o([
        { json: "ON_SHOW", js: "ON_SHOW", typ: 0 },
        { json: "ON_HIDE", js: "ON_HIDE", typ: 0 },
        { json: "ON_REFRESH", js: "ON_REFRESH", typ: 0 },
    ], false),
    "URLType": o([
        { json: "WEB", js: "WEB", typ: 0 },
        { json: "AR", js: "AR", typ: 0 },
    ], false),
    "Utils": o([
        { json: "colors", js: "colors", typ: r("Event") },
        { json: "ls", js: "ls", typ: r("Event") },
        { json: "lang", js: "lang", typ: r("Event") },
        { json: "translate", js: "translate", typ: r("Event") },
    ], false),
};
