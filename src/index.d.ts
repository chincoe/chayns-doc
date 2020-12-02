declare global {
    var chayns: Chayns;
}

// TODO: smartshop
// TODO: editor
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

    activateAdminMode(): Promise<any>;

    deactivateAdminMode(): Promise<any>;

    addAccessTokenChangeListener(callback: () => any): boolean;

    removeAccessTokenChangeListener(callback: () => any): boolean;

    addAdminSwitchListener(callback: (result: { mode: number }) => any): boolean;

    removeAdminSwitchListener(callback: (result: { mode: number }) => any): boolean;

    addGeoLocationListener(callback: (geoLocation: GeoLocation) => any): void;

    removeGeoLocationListener(callback: (geoLocation: GeoLocation) => any): void;

    addOnActivateListener(callback: () => any): boolean;

    removeOnActivateListener(callback: () => any): boolean;

    addWindowMetricsListener(callback: (windowHeight: number) => any): boolean;

    removeWindowMetricsListener(callback: (windowHeight: number) => any): boolean;

    allowRefreshScroll(): Promise<any>;

    disallowRefreshScroll(): Promise<any>;

    enableDisplayTimeout(): Promise<any>;

    disableDisplayTimeout(): Promise<any>;

    getGeoLocation(): Promise<GeoLocation>;

    getUser(info: GetUserConfig): Promise<GetUserResult>;

    getWindowMetrics(): Promise<WindowMetrics>;

    hideTitleImage(): Promise<any>;

    invokeCall(config: Object): Promise<any>;

    showWaitCursor(text?: string, textTimeout?: number): Promise<any>;

    hideWaitCursor(): Promise<any>;

    login(parameters?: string): Promise<{ loginState: number }>;

    logout(logoutType?: number): Promise<any>;

    openImage(urls: string | string[], start?: number): Promise<undefined>;

    openUrlInBrowser(url: string): Promise<Window>;

    refreshAccessToken(): Promise<any>;

    scanQRCode(cameraType?: number, timeout?: number): Promise<any>;

    scrollToY(position: number);

    selectTapp(tapp: SelectTappConfig);

    setHeight(config: SetHeightConfig): Promise<any>;

    vibrate(pattern: number[], iOSFeedbackVibration?: number);
}

export interface SetHeightConfig { height?: number, growOnly?: boolean, full?: boolean, fullViewport?: boolean, forceHeight?: boolean }

export interface SelectTappConfig { tappId?: number, showName?: string, internalName?: string, siteId?: string, parameter?: string }

export interface WindowMetrics { pageYOffset: number, windowHeight: number, frameX: number, frameY: number, scrollTop: number, height: number }

export interface GetUserResult { Type: number, PersonID: string, FacebookID: number, FirstName: string, UserID: number, LastName: string, ChaynsLogin: string, UserFullName: string }

export interface GetUserConfig { AccessToken?: string, FBID?: number, UserID?: number, PersonID?: string }

export interface GeoLocation { latitude: number, longitude: number, speed: number, accuracy: number }

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

export interface DialogButton {
    text: buttonText|string,
    buttonType: buttonType|number,
    collapseTime?: number,
    textColor?: string,
    backgroundColor?: string
}

export interface Dialog {
    buttonText: ButtonText;
    buttonType: ButtonType;
    selectType: SelectType;
    dateType: DateType;
    inputType: InputType;
    fileType: FileType;

    alert(headline: string, text: string): Promise<Object>;

    confirm(headline: string, text: string, buttons?: DialogButton[]): Promise<number>;

    input(config: {
        title?: string,
        message?: string,
        placeholderText?: string,
        text?: string,
        textColor?: string,
        buttons?: DialogButton[],
        type?: inputType|number,
        regex?: string
        formatter?: Function,
        pattern?: string,
        disableButtonTypes?: number[]
    }): Promise<InputDialogResult>;

    select(config: {
        title?: string,
        message?: string,
        list: Array<SelectDialogItem>,
        multiselect?: boolean,
        quickfind?: boolean,
        type?: number,
        preventCloseOnClick?: boolean,
        buttons?: DialogButton[],
        selectAllButton?: string
    }): Promise<SelectDialogResult>

    // TODO: date dialog
    date(config: object): Promise<object>;

    advancedDate(config: {
        title?: string,
        message?: string,
        buttons?: DialogButton[],
        minDate?: Date | number,
        maxDate?: Date | number,
        minuteInterval?: number,
        preSelect?: Date | Date[] | number[] | IntervalItem,
        multiselect?: boolean,
        disabledDate?: Date[] | number[],
        textBocks?: object[],
        yearSelect?: boolean,
        monthSelect?: boolean,
        interval?: boolean,
        minInterval?: number,
        maxInterval?: number,
        disabledIntervals?: Array<IntervalItem>
        disabledWeekDayIntervals?: Array<any>;
        getLocalTime?: boolean,
        dateType?: dateType|number
    }): Promise<AdvancedDateDialogResult>;

    // TODO media dialog
    mediaSelect(config: object): Promise<object>;
    // TODO: file dialog
    fileSelect(config: object): Promise<object>;

    iFrame(config: {
        url: string,
        input?: object,
        buttons?: DialogButton[],
        seamless?: boolean,
        transparent?: boolean,
        waitCursor?: boolean,
        maxHeight?: string,
        width?: number,
        customTransitionTimeout?: number
    }): Promise<any>;

    close(buttonType?: number);

    sendData(data: object, isApiEvent?: boolean);
    addDialogDataListener(callback: (object) => any, getApiEvents?: boolean);
    removeDialogDataListener(callback: (object) => any, getApiEvents?: boolean);
}

export interface AdvancedDateDialogResult { buttonType: number, selectedDates: Array<{ timestamp: number, isSelected: boolean }> }

export interface IntervalItem { start: Date | number, end: Date | number }

export interface SelectDialogItem { name: string, value: string | number | object, backgroundColor?: string, className?: string, url?: string, isSelected?: boolean }

export interface SelectDialogResult {buttonType: buttonType|number, selection: Array<SelectDialogItem>}

export interface InputDialogResult {
    buttonType: buttonType|number,
    text: string
}

export interface ButtonText {
    YES: string;
    NO: string;
    OK: string;
    CANCEL: string;
}

declare enum buttonText {
    CANCEL = 'Abbrechen',
    NO = 'Nein',
    OK = 'OK',
    YES = 'Ja'
}

export interface ButtonType {
    CANCEL: number;
    NEGATIVE: number;
    POSITIVE: number;
}

declare enum buttonType {
    CANCEL = -1,
    NEGATIVE = 0,
    POSITIVE = 1
}

export interface DateType {
    DATE: number;
    TIME: number;
    DATE_TIME: number;
}

declare enum dateType {
    DATE,
    TIME,
    DATE_TIME
}

declare enum inputType {
    DEFAULT = 0,
    PASSWORD = 1
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

export interface Event {
}

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

export interface Colors {
    getColorFromPalette(name: string): string;

    mix(hex1: string, hex2: string, saturation?: number): string
}

export interface LocalStorage {
    get(key: string): string

    remove(key: string);

    removeAll();

    set(key: string, value: string);
}

export interface Utils {
    colors: Colors;
    ls: LocalStorage;
    lang: Event;
    translate: Event;

    isArray(param: any): boolean;

    isBLEAddress(param: any): boolean;

    isBlank(param: any): boolean;

    isBoolean(param: any): boolean;

    isDate(param: any): boolean;

    isDeferred(param: any): boolean;

    isDefined(param: any): boolean;

    isDialogPermitted(param: any): boolean;

    isFormData(param: any): boolean;

    isFormElement(param: any): boolean;

    isFunction(param: any): boolean;

    isGUID(param: any): boolean;

    isHex(param: any): boolean;

    isJwt(param: any): boolean;

    isMacAddress(param: any): boolean;

    isNumber(param: any): boolean;

    isObject(param: any): boolean;

    isPermitted(param: any): boolean;

    isPresent(param: any): boolean;

    isPromise(param: any): boolean;

    isString(param: any): boolean;

    isUUID(param: any): boolean;

    isUndefined(param: any): boolean;

    isUrl(param: any): boolean;
}
