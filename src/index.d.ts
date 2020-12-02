declare global {
    var chayns: Chayns;
}

export interface Chayns {
    ready: Promise<void>;
    env: Env;
    utils: Utils;
    dialog: Dialog;
    urlType: URLType;
    animationType: AnimationType;
    cameryType: CameryType;
    logoutType: LogoutType;
    loginState: LoginState;
    tappEvent: TappEvent;
    listeners: null[];
    floatingButtonPosition: FloatingButtonPosition;
    storage: Storage;
    networkType: { [key: string]: number };
    sharingApp: SharingApp;
    adminSwitchStatus: AdminSwitchStatus;
    orientation: Orientation;
    mimeType: MIMEType;
    event: Event;
    intercom: Event;
}

export interface AdminSwitchStatus {
    ADMIN: number;
    USER: number;
}

export interface AnimationType {
    DEFAULT: number;
    BOTTOM: number;
}

export interface CameryType {
    AUTO: number;
    BACK: number;
    FRONT: number;
}

export interface Dialog {
    buttonText: ButtonText;
    buttonType: ButtonType;
    selectType: SelectType;
    dateType: DateType;
    inputType: InputType;
    fileType: FileType;
}

export interface ButtonText {
    YES: string;
    NO: string;
    OK: string;
    CANCEL: string;
}

export interface ButtonType {
    CANCEL: number;
    NEGATIVE: number;
    POSITIVE: number;
}

export interface DateType {
    DATE: number;
    TIME: number;
    DATE_TIME: number;
}

export interface FileType {
    IMAGE: string;
    VIDEO: string;
    AUDIO: string;
    DOCUMENT: string[];
}

export interface InputType {
    DEFAULT: number;
    PASSWORD: number;
    TEXTAREA: number;
    INPUT: number;
    NUMBER: number;
}

export interface SelectType {
    DEFAULT: number;
    ICON: number;
}

export interface Env {
    parameters: Event;
    _parameters: Event;
    browser: Browser;
    language: string;
    site: Site;
    user: User;
    app: Event;
    device: Event;
    isIOS: boolean;
    isAndroid: boolean;
    isWP: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isApp: boolean;
    isBrowser: boolean;
    isDesktop: boolean;
    os: string;
    isChaynsWebMobile: boolean;
    isChaynsWebDesktop: boolean;
    isChaynsWeb: boolean;
    isChaynsParent: boolean;
    isMyChaynsApp: boolean;
    isWidget: boolean;
    isInFrame: boolean;
    isInFacebookFrame: boolean;
    appVersion: number;
    debugMode: boolean;
    apiVersion: number;
}

export interface Event {}

export interface Browser {
    name: string;
    version: string;
    supportsWebP: boolean;
}

export interface Site {
    id: string;
    locationId: number;
    locationPersonId: string;
    title: string;
    language: string;
    tapps: Tapp[];
    facebookPageId: null;
    color: string;
    colorMode: number;
    version: string;
    domain: string;
    font: number;
    environment: string;
    tapp: Tapp;
    disposition: Disposition;
    headlineFontId: number;
    urlHash: string;
    url: string;
}

export interface Disposition {
    coverWide: boolean;
    barWide: boolean;
    docked: boolean;
    barOnTop: boolean;
    contentWide: boolean;
    coverDetached: boolean;
}

export interface Tapp {
    id: number;
    showName: string;
    internalName: string;
    isSubTapp: boolean;
    sortId: number;
    customUrl: string;
    isHiddenFromMenu: boolean;
    icon: string;
    iconType: number;
    userGroupIds?: number[];
    isExclusiveView?: boolean;
}

export interface User {
    name: string;
    firstName: string;
    lastName: string;
    id: number;
    personId: string;
    tobitAccessToken: string;
    groups: Group[];
    isAuthenticated: boolean;
    adminMode: boolean;
    isAdmin: boolean;
}

export interface Group {
    id: number;
    isActive: boolean;
}

export interface FloatingButtonPosition {
    RIGHT: number;
    CENTER: number;
    LEFT: number;
}

export interface LoginState {
    FACEBOOK: number;
    T_WEB: number;
    CANCEL: number;
    ALREADY_LOGGED_IN: number;
}

export interface LogoutType {
    NORMAL: number;
    FORCE: number;
}

export interface MIMEType {
    DOCUMENT: number;
    AUDIO: number;
    IMAGE: number;
    VIDEO: number;
}

export interface Orientation {
    DEFAULT: number;
    PORTRAIT: number;
    LANDSCAPE: number;
    PORTRAIT_SENSOR: number;
    LANDSCAPE_SENSOR: number;
    PORTRAIT_REVERSE: number;
    LANDSCAPE_REVERSE: number;
}

export interface SharingApp {
    MAIL: number;
    WHATSAPP: number;
    FACEBOOK: number;
    FACEBOOK_MESSENGER: number;
    GOOGLE_PLUS: number;
    TWITTER: number;
}

export interface Storage {
    accessMode: AccessMode;
}

export interface AccessMode {
    PUBLIC: number;
    PROTECTED: number;
    PRIVATE: number;
}

export interface TappEvent {
    ON_SHOW: number;
    ON_HIDE: number;
    ON_REFRESH: number;
}

export interface URLType {
    WEB: number;
    AR: number;
}

export interface Utils {
    colors: Event;
    ls: Event;
    lang: Event;
    translate: Event;
}
