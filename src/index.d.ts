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
    intercom: Intercom;
    smartShop: SmartShop;

    activateAdminMode(): Promise<any>;

    deactivateAdminMode(): Promise<any>;

    addAccessTokenChangeListener(callback: () => any): boolean;

    removeAccessTokenChangeListener(callback: () => any): boolean;

    addAdminSwitchListener(callback: (result: { mode: number }) => any): boolean;

    removeAdminSwitchListener(callback: (result: { mode: number }) => any): boolean;

    addGeoLocationListener(callback: (geoLocation: GeoLocation) => any): void;

    removeGeoLocationListener(callback: (geoLocation: GeoLocation) => any): void;

    addNetworkChangeListener(callback: () => any): boolean;

    removeNetworkChangeListener(callback: () => any): boolean;

    addNfcListener(callback: (param: any) => any);

    removeNfcListener(callback: (param: any) => any);

    addOnActivateListener(callback: () => any): boolean;

    removeOnActivateListener(callback: () => any): boolean;

    addScrollListener(callback: () => any);

    removeScrollListener(callback: () => any);

    addWindowMetricsListener(callback: (windowHeight: number) => any): boolean;

    removeWindowMetricsListener(callback: (windowHeight: number) => any): boolean;

    allowRefreshScroll(): Promise<any>;

    disallowRefreshScroll(): Promise<any>;

    appendUrlParameter(parameters: object, override?: boolean): Promise<any>;

    closeUrl(): Promise<undefined>;

    cancelScanQrCode(): Promise<undefined>;

    createQRCode(url: string): Promise<string>;

    dynamicFontSize();

    enableDisplayTimeout(): Promise<any>;

    disableDisplayTimeout(): Promise<any>;

    findPerson(name: string): Promise<FindPersonResult>;

    findSite(name: string): Promise<FindSiteResult>;

    getAvailableSharingServices(name: string): Promise<GetSharingServicesResult>

    getGeoLocation(): Promise<GeoLocation>;

    getGlobalData(): Promise<{
        site: Site,
        app: object,
        device: object,
        user: User
    }>

    getLastPushNotification(): Promise<any>;

    getNetworkStatus(): Promise<any>;

    getWebviewOptions(): Promise<any>;

    getUser(info: GetUserConfig): Promise<GetUserResult>;

    getWindowMetrics(): Promise<WindowMetrics>;

    hideBackButton(): Promise<void>;

    showBackButton(param?: any): Promise<void>;

    hideFloatingButton(): Promise<void>;

    showFloatingButton(config: {
        callback?: () => any,
        text?: string,
        color?: string,
        colorText?: string,
        icon?: string,
        position?: number
    }, onClick?: () => any): Promise<void>;

    showOverlay(color?: string, transition?: string): Promise<void>;

    hideOverlay(): Promise<void>;

    showSnackbar(param?: any): any;

    hideTitleImage(): Promise<any>;

    showTitleImage(): Promise<any>;

    invokeCall(config: Object): Promise<any>;

    showWaitCursor(text?: string, textTimeout?: number, action?: string): Promise<any>;

    hideWaitCursor(): Promise<any>;

    login(parameters?: string): Promise<{ loginState: 0 | 1 | 2 | 3 }>;

    logout(logoutType?: 0 | 1): Promise<any>;

    openImage(urls: string | string[], start?: number): Promise<undefined>;

    openUrl(config: {
        url: string,
        title?: string,
        exclusiveView?: boolean,
        darkenBackground?: boolean,
        fullSize?: boolean
        width?: number
    }): Promise<void>

    openUrlInBrowser(url: string): Promise<Window>;

    openVideo(url: string): Promise<void>;

    refreshAccessToken(): Promise<any>;

    register(config: object): any;

    removeSubTapp(config: {
        tappID: number,
        close?: boolean,
        remove?: boolean
    }): Promise<void>;

    scanQRCode(cameraType?: number, timeout?: number): Promise<any>;

    scrollToY(position: number);

    selectTapp(tapp: SelectTappConfig);

    sendEventToTopFrame(param: any): any;

    setHeight(config: SetHeightConfig): Promise<any>;

    setScreenOrientation(orientation: ScreenOrientation | number): Promise<void>

    setSubTapp(config: {
        tappID: number,
        name: string,
        color: string,
        colorText?: string,
        sortID: number,
        icon: string,
        callbackURL?: (result: any) => any,
        url: string,
        buttonName: string,
        isExclusiveView?: boolean,
        replaceParent?: boolean,
        boldText?: boolean
    }): Promise<void>;

    setWebviewOptions(param: any): any;

    share(config: {
        title: string,
        text: string,
        imageUrl: string,
        sharingApp: number,
        sharingAndroidApp: string
    }): Promise<void>;

    updateChaynsId(param: any): any;

    updateTapp(param: any): any;

    updateCloudImage(): any;

    uploadFile(file: File, param1?: any, param2?: any): Promise<any>;

    uploadToCloud(file: File, param?: any): Promise<any>

    vibrate(pattern: number[], iOSFeedbackVibration?: number);
}

export interface SetHeightConfig {
    height?: number,
    growOnly?: boolean,
    full?: boolean,
    fullViewport?: boolean,
    forceHeight?: boolean
}

export interface SelectTappConfig {
    tappId?: number,
    showName?: string,
    internalName?: string,
    siteId?: string,
    parameter?: string
}

export interface WindowMetrics {
    pageYOffset: number,
    windowHeight: number,
    frameX: number,
    frameY: number,
    scrollTop: number,
    height: number
}

export interface GetUserResult {
    Type: number,
    PersonID: string,
    FacebookID: number,
    FirstName: string,
    UserID: number,
    LastName: string,
    ChaynsLogin: string,
    UserFullName: string
}

export interface GetUserConfig {
    AccessToken?: string,
    FBID?: number,
    UserID?: number,
    PersonID?: string
}

export interface GeoLocation {
    latitude: number,
    longitude: number,
    speed: number,
    accuracy: number
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

export interface DialogButton {
    text: buttonText | string,
    buttonType: buttonType | number,
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

    alert(headline: string, text: string): Promise<buttonType>;

    confirm(
        headline: string,
        text: string,
        buttons?: DialogButton[]
    ): Promise<number>;

    input(config: {
        title?: string;
        message?: string;
        placeholderText?: string;
        text?: string;
        textColor?: string;
        buttons?: DialogButton[];
        type?: inputType | number;
        regex?: string;
        formatter?: Function;
        pattern?: string;
        disableButtonTypes?: number[];
    }): Promise<InputDialogResult>;

    select(config: {
        title?: string;
        message?: string;
        list: Array<SelectDialogItem>;
        multiselect?: boolean;
        quickfind?: boolean;
        type?: selectType;
        preventCloseOnClick?: boolean;
        buttons?: DialogButton[];
        selectAllButton?: string;
    }): Promise<SelectDialogResult>

    date(config: object): Promise<object>;

    advancedDate(config: {
        title?: string;
        message?: string;
        buttons?: DialogButton[];
        minDate?: Date | number;
        maxDate?: Date | number;
        minuteInterval?: number;
        preSelect?: Date | Date[] | number[] | IntervalItem;
        multiselect?: boolean;
        disabledDate?: Date[] | number[];
        textBocks?: DialogTextBlock[];
        yearSelect?: boolean;
        monthSelect?: boolean;
        interval?: boolean;
        minInterval?: number;
        maxInterval?: number;
        disabledIntervals?: Array<IntervalItem>;
        disabledWeekDayIntervals?: Array<WeekDayIntervalObject>[7];
        getLocalTime?: boolean;
        dateType?: dateType | number;
    }): Promise<AdvancedDateDialogResult>;

    mediaSelect(config: {
        title?: string
        message?: string
        multiSelect?: boolean
        buttons?: DialogButton[]
    }): Promise<any>;

    fileSelect(config: {
        title?: string;
        message?: string;
        multiselect?: boolean;
        buttons?: DialogButton[];
        contentType?: Array<string>;
        exclude?: Array<string>;
        directory?: boolean;
    }): Promise<any>;

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

    setResult(result: any, register?: any);

    addDialogResultListener(callback: (param: any) => any)

    removeDialogResultListener(callback: (param: any) => any)

    disableButtons(disable: boolean, buttonTypes: number[]);
}

export interface AdvancedDateDialogResult {
    buttonType: number,
    selectedDates: Array<{ timestamp: number, isSelected: boolean }>
}

export interface DialogTextBlock {
    headline: string;
    text: string;
    position: string;
}

export interface WeekDayIntervalObject {
    start: number;
    end: number;
}

export interface IntervalItem {
    start: Date | number,
    end: Date | number
}

export interface SelectDialogItem {
    name: string,
    value: string | number | object,
    backgroundColor?: string,
    className?: string,
    url?: string,
    isSelected?: boolean
}

export interface SelectDialogResult {
    buttonType: buttonType | number,
    selection: Array<SelectDialogItem>
}

export interface InputDialogResult {
    buttonType: buttonType | number,
    text: string
}

export interface GetSharingServicesResult {
    retval: {
        availableSharingApps: Array<sharingApp>
    }
}

declare enum sharingApp {
    MAIL = 0,
    WHATSAPP = 1,
    FACEBOOK = 2,
    FACEBOOK_MESSENGER = 3,
    GOOGLE_PLUS = 4,
    TWITTER = 5,
}

declare enum ScreenOrientation {
    DEFAULT = 0,
    PORTRAIT = 1,
    LANDSCAPE = 2,
    PORTRAIT_SENSOR = 3,
    LANDSCAPE_SENSOR = 4,
    PORTRAIT_REVERSE = 5,
    LANDSCAPE_REVERSE = 6,
}

export interface FindPersonResult {
    Status: FindingStatus,
    Value: Array<FindPersonResultValue>
}

export interface FindPersonResultValue {
    name: string,
    personId: string,
    facebookId: number,
    lastLoginTime: string,
    currentLocationId: number
}

export interface FindSiteResult {
    Status: FindingStatus,
    Value: Array<FindSiteResultValue>
}

export interface FindSiteResultValue {
    siteId: string,
    locationId: number,
    appstoreName: string
}

export interface FindingStatus {
    ResultCode: number,
    ResultString: string,
    Exception: any
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
    PASSWORD = 1,
    TEXTAREA = 2,
    INPUT = 3,
    NUMBER = 4
}

declare enum selectType {
    DEFAULT = 0,
    ICON = 1
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

export interface ChaynsParameters {
    AdminMode: "0" | "1",
    color: string,
    colorMode: "0" | "1" | "2",
    contentWide: "true" | "false",
    contentWidth: string,
    exclusiveView: "true" | "false",
    font: string,
    isStaging: "0" | "1",
    lang: "de" | "en" | string,
    layoutMode: string,
    loggedin: "0" | "1",
    menuHeight: string,
    offsetTop: string,
    pageYOffset: string,
    screenHeight: string,
    screenWidth: string,
    siteId: string,
    supportsWebP: "0" | "1",
    translang: "de" | "en" | string
}

export interface Env {
    parameters: ChaynsParameters | { [key: string]: string };
    _parameters: ChaynsParameters | { [key: string]: string };
    browser: Browser;
    language: string;
    site: Site;
    user: User;
    app: App;
    device: Device;
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
    isChaynsnetRuntime: boolean;
    appVersion: number;
    debugMode: boolean;
    apiVersion: number;
}

export interface App {
    flavor: any,
    languageId: string;
    model: string;
    name: string;
    uid: string;
    version: string;
}

export interface Lang {
    get(param?: any): string | any;

    init(param?: any);

    loadLib(config: {
        libs: Array<{
            project: string, middle: string
        }>,
        language: string,
        preventOverride: boolean,
        successCallback: () => any,
        errorCallback: () => any
    }, param?: any): any

    renderTextString(param?: any);
}

export interface Translate {
    init();
}

export interface ChaynsEditor {
    disable(),

    enable(),

    enableToolbarChange(),

    logger: ChaynsEditorLogger
}

export interface ChaynsEditorLogger {
    log(param1?: any, param2?: any, param3?: any),

    setLevel(level: number);

    level: number
}

export interface Device {
    deviceAccessToken: any,
    dfaceVersion: any,
    fontScale: any,
    imei: any,
    languageId: any,
    minLogLevel: any,
    model: any,
    systemName: any,
    uid: any,
    version: any
}

declare enum networkType {
    NO_NETWORK = 0,
    NETWORK_TYPE_UNKNOWN = 1,
    IDEN = 2,
    GPRS = 3,
    EGDE = 4,
    CDMA_1xRTT = 5,
    CDMA_EVDO_0 = 6,
    CDMA_EVDO_A = 7,
    CDMA_EVDO_B = 8,
    UMTS = 9,
    EHRPD = 10,
    HSDPA = 11,
    HSPA = 12,
    HSPAP = 13,
    HSUPA = 14,
    LTE = 15,
    WIFI = 16,
    ETHERNET = 17,
}

export interface Event {
    addPushListener(callback: () => any);

    removePushListener(callback: () => any);
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
    get(key, param);

    remove(key, param);

    set(key, param1, param2, param3)

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
    get(saturation: number, hex: string): string

    getColorFromPalette(name: string): string;

    mix(hex1: string, hex2: string, saturation?: number): string
}

export interface LocalStorage {
    get(key: string): any

    getPrefix(): string;

    remove(key: string);

    removeAll();

    set(key: string, value: any): boolean;
}

export interface Utils {
    colors: Colors;
    ls: LocalStorage;
    lang: Lang;
    translate: Translate;
    editor: ChaynsEditor

    createTappUrl(param: any): any;

    getJwtPayload(param: any): any;

    getScaledImageUrl(
        url: string,
        height?: number,
        width?: number,
        preventWebP?: boolean
    ): string;

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

    resetEnvironment(param?: any);

    setLevel(param?: any);
}

export interface Intercom {
    sendMessageToGroup(groupId: number, config: {
        text: string
    }): Promise<Response>;

    sendMessageToPage(config: { text: string }): Promise<Response>;

    sendMessageToUser(userId: number, config: { text: string })
}

export interface SmartShopArticle {
    id: number;
    amount: number;
}

export interface SmartShop {
    init(config: object): any;

    offer: {
        getCategories(): any;
        getCategory(categoryId: number): any;
    },
    cart: {
        userId: {
            lastName: string;
            invoiceRequested: boolean;
            orderUid: string;
            voucher: Array<any>;
            userId: number;
            topFlag: boolean;
            branchTipFactor: number;
            cartPrice: number;
            voucherList: Array<any>;
            personId: string;
            tipSum: number;
            expires: number;
            fullname: string;
            firstname: string;
            articles: Array<SmartShopArticle>
        },
        cartCount: number;
        exp: number
        addArticle(article: SmartShopArticle): any;
        removeArticle(article: SmartShopArticle): any;
        get(): any;
        set(...params: any): any;
        remove(): any;
        smartCheckout(config: any): any;
        addServerArticle(...params: any): any;
        confirm(...params: any): any;
        create(...params: any): any;
        removeServerArticle(...params: any): any;
        removeTip(...params: any): any;
        setTip(...params: any): any;
        toOrder(...params: any): any;
    }
    tapp: {
        gotoCart(...params: any): any;
        gotoShop(...params: any): any;
        configure(config: { customShopUrl: string }): any;
        showFloatingButton(value?: any): any;
    }
    admin: {
        branch: {
            updateText(options: { field: string, value: string }): any;
        }
        accounting(...params: any): any;
        article(...params: any): any;
        group(...params: any): any;
        intercom(...params: any): any;
        option(...params: any): any;
        output(...params: any): any;
        processor(...params: any): any;
        subscription(...params: any): any;
    }
    settings: {
        getProcessor(...params: any): any;
    }
    order: {
        getInternal(...params: any): any;
        getPopular(...params: any): any;
        addArticle(...params: any): any;
        addClientArticle(...params: any): any;
        cancel(...params: any): any;
        clearClientCar(...params: any): any;
        confirm(...params: any): any;
        create(...params: any): any;
        createFromClientCart(...params: any): any;
        extendTtl(...params: any): any;
        getClientCart(...params: any): any;
        getClientOrderedArticles(...params: any): any;
        getHistory(...params: any): any;
        removeArticle(...params: any): any;
        setClientCart(...params: any): any;
    }
    branch: {
        addImage(...params: any): any;
        createBranchConfig(...params: any): any;
        getBranchConfig(...params: any): any;
        removeImage(...params: any): any;
        updateBranch(...params: any): any;
        updateBranchConfig(...params: any): any;
        updateBranchText(...params: any): any;
        updateOpmOwner(...params: any): any;
    }
    carousel: {
        isEnable(...params: any): any;
    }
    groups: {
        get(...params: any): any;
    }
    payment: {
        getOpmStatus(...params: any): any;
        getTssmPaymentInfo(...params: any): any;
    }
    subscription: {
        getArticle(...params: any): any;
    }
    user: {
        getAccountBalance(...params: any): any;
        getByNfc(...params: any): any;
        getByPersonId(...params: any): any;
        getByQr(...params: any): any;
        isStaff(...params: any): any;
    }
    utils: {
        convertToClientArticle(...params: any): any;
    }
}
