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

    appendUrlParameter(parameters: { [key: string]: any }, override?: boolean): Promise<any>;

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
        app: { [key: string]: any },
        device: { [key: string]: any },
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

    invokeCall(call: ChaynsCall, realResolve?: boolean): Promise<any>;

    invokeCall(call: string): Promise<any>;

    showWaitCursor(text?: string, textTimeout?: number, action?: string): Promise<any>;

    hideWaitCursor(): Promise<any>;

    login(parameters?: Array<string>): Promise<{ loginState: 0 | 1 | 2 | 3 }>;

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

    register(config: { [key: string]: any }): any;

    removeSubTapp(config: {
        tappID: number,
        close?: boolean,
        remove?: boolean
    }): Promise<void>;

    scanQRCode(cameraType?: number, timeout?: number): Promise<any>;

    scrollToY(position: number);

    selectTapp(tapp: SelectTappConfig, parameter?: string);

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
    force?: boolean
}

export interface SelectTappConfig {
    id?: number,
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
    accessToken?: string,
    fbId?: number,
    userId?: number,
    personId?: string
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

    date(config: { [key: string]: any }): Promise<{ [key: string]: any }>;

    advancedDate(config: {
        title?: string;
        message?: string;
        buttons?: DialogButton[];
        minDate?: Date | number;
        maxDate?: Date | number;
        minuteInterval?: number;
        preSelect?: Date | Date[] | number[] | IntervalItem;
        multiselect?: boolean;
        disabledDates?: Date[] | number[];
        textBlocks?: DialogTextBlock[];
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
        input?: { [key: string]: any },
        buttons?: DialogButton[],
        seamless?: boolean,
        transparent?: boolean,
        waitCursor?: boolean,
        maxHeight?: string,
        width?: number,
        customTransitionTimeout?: number
    }): Promise<any>;

    close(buttonType?: number);

    sendData(data: { [key: string]: any }, isApiEvent?: boolean);

    addDialogDataListener(callback: (object: any) => any, getApiEvents?: boolean);

    removeDialogDataListener(callback: (object: any) => any, getApiEvents?: boolean);

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
    position: number;
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
    value: string | number | Record<string, unknown> | boolean,
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
    translang: "de" | "en" | string,

    [key: string]: string
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
    deviceAccessToken?: string,
    dfaceVersion: any,
    fontScale: any,
    imei?: string,
    languageId: any,
    minLogLevel: any,
    model: any,
    systemName: any,
    uid?: string,
    version?: any
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
    translang: string;
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

    getJwtPayload(value: any): any;

    getScaledImageUrl(
        url: string,
        height?: number,
        width?: number,
        preventWebP?: boolean
    ): string;

    isArray(value: any): boolean;

    isBLEAddress(value: any): boolean;

    isBlank(value: any): boolean;

    isBoolean(value: any): boolean;

    isDate(value: any): boolean;

    isDeferred(value: any): boolean;

    isDefined(value: any): boolean;

    isDialogPermitted(value: any): boolean;

    isFormData(value: any): boolean;

    isFormElement(value: any): boolean;

    isFunction(value: any): boolean;

    isGUID(value: any): boolean;

    isHex(value: any): boolean;

    isJwt(value: any): boolean;

    isMacAddress(value: any): boolean;

    isNumber(value: any): boolean;

    isObject(value: any): boolean;

    isPermitted(value: any): boolean;

    isPresent(value: any): boolean;

    isPromise(value: any): boolean;

    isString(value: any): boolean;

    isUUID(value: any): boolean;

    isUndefined(value: any): boolean;

    isUrl(value: any): boolean;

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

export interface ChaynsCall {
    action: number;
    value?: Record<string, string | number | boolean | Array<string | number | boolean> | Record<string, any> | any> & {
        callback?: string,
        addJSONParam?: string
    }
}

export interface SmartShopArticle {
    id: number;
    amount: number;
    meta?: string,
    info?: string
}

export interface SmartShop {
    init(config?: Partial<ShopInitConfig>): Promise<any>;

    offer: {
        getCachedCategories(param1?: any, param2?: any): Promise<Array<ShopOfferCategory>>;
        /**
         * Get shop categories
         * @param visibility - 2: all articles
         * @param param2
         * @param param3
         */
        getCategories(visibility?: number | 2, param2?: boolean, param3?: any): Promise<Array<ShopOfferCategory>>;
        getCategory(categoryId: number): Promise<ShopOfferCategory>;
        getInternal(param?: any): any;
        getPopular(): any;
        getPopularByUserId(param1?: any, param2?: any): any;
        getPopularUser(param?: any): any;
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
        addArticle(article: SmartShopArticle): Promise<any>;
        removeArticle(article: Partial<SmartShopArticle>): Promise<any>;
        get(): any;
        set(...params: any): any;
        remove(): Promise<any>;
        smartCheckout(config: Record<string, any> & Partial<{
            processorId: number,
            waitCursorText: string,
            showConfirmDialogs: boolean,
            enableDialogs: boolean
        }>): Promise<any>;
        addServerArticle(...params: any): any;
        confirm(...params: any): any;
        create(...params: any): any;
        removeServerArticle(...params: any): any;
        removeTip(...params: any): any;
        setTip(...params: any): any;
        toOrder(...params: any): any;
    }
    tapp: {
        gotoCart(...params: any): Promise<any>;
        gotoShop(...params: any): any;
        configure(config: { customShopUrl?: string, useFloatingButton?: boolean, [key: string]: any }): any;
        showFloatingButton(value?: any): any;
    }
    admin: {
        branch: ShopAdminBranch
        accounting: ShopAdminAccounting;
        article: ShopAdminArticle;
        articleSchedule: ShopAdminArticleSchedule;
        branchConfig: ShopAdminBranchConfig;
        communication: {
            promote(param1?: any, param2?: any): any;
        }
        group: ShopAdminGroup;
        intercom: {
            sendMessage(param1?: any, param2?: any): any
        };
        option: ShopAdminOption;
        optionGroup: ShopAdminOptionGroup;
        order: ShopAdminOrder;
        output: ShopAdminOutput;
        payment: ShopAdminPayment;
        processor: ShopAdminProcessor;
        processorConfig: ShopAdminProcessorConfig;
        subscription: ShopAdminSubscription;
    }
    article: {
        getByIds(param1?: any, param2?: any): any;
        requestPrice(param?: any): any;
    },
    businessHours: {
        getById(param1?: any, param2?: any): any;
        getByIds(param1?: any, param2?: any): any;
        getCurrent(param1?: any, param2?: any, param3?: any, param4?: any): any;
        getDefault(param?: any): any;
        getTimes(param1?: any, param2?: any, param3?: any, param4?: any): any;
    },
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
        getBranchConfig(param1?: any, param2?: any, param3?: any): Promise<BranchConfig>;
        getCachedBranchConfig(param1?: any, param2?: any): Promise<BranchConfig>;
        getLocationPosition(locationId: number): Promise<LocationPosition>;
        getProcessor(processorId: number): Promise<PaymentProcessor>;
        getProcessors(): Promise<Array<PaymentProcessor>>;
        removeImage(...params: any): any;
        updateBranch(...params: any): any;
        updateBranchConfig(...params: any): any;
        updateBranchText(...params: any): any;
        updateOpmOwner(...params: any): any;
    }
    carousel: {
        isEnabled(): any;
    }
    groups: {
        get(...params: any): any;
    }
    payment: {
        getOpmStatus(...params: any): any;
        getTssmPaymentInfo(...params: any): any;
    }
    subscription: {
        getArticle(): Promise<Array<ShopArticle> | null>;
        getByLocationUser(param: any): any;
        patch(subscriptionId: number, field: string | 'subscriptionEnd', value: string): Promise<any>
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
    env: {
        branchId: number
    }
}

export type SiteId = string;

export interface BranchConfig {
    allowForceBooking: boolean,
    config: BranchConfigConfig,
    configured: boolean,
    creationTime: string,
    disabled: boolean,
    flags: number,
    hasBarforce: boolean,
    name: SiteId,
    opmStatus: number,
    ownerPersonId: string | null,
    texts: Array<BranchConfigText>
}

export interface BranchConfigConfig {
    allowCashPayment: boolean
    allowCouponPayment: boolean
    allowCustomerCashPayment: boolean
    currency: null | string | any
    disableAddVoucher: boolean
    disableGoToShop: boolean
    disableLimitedSepa: boolean
    enableAdditionalFeatures: boolean
    enableCarousel: boolean
    enableFineTrading: boolean
    enableOpmCharge: boolean
    enableProvisioningDays: boolean
    enableProvisioningTime: boolean
    enablePublicOrders: boolean
    enableQuickBuy: boolean
    enableRepeatableAction: boolean
    enableSubscriptions: boolean
    enableTip: boolean
    headline: string
    introText: string
    isDemo: boolean
    nextActivationTime: null | string | any
    onlySitePayment: boolean
    openFirstCategory: boolean
    paymentNfc: any
    processors: Array<PaymentProcessor>
    provisioningTimeInterval: number
    showFavoriteArticles: boolean
    showLatestArticles: number
    showNetPrices: boolean
    showPopularArticles: boolean
    showPrintInvoiceBtn: boolean
    tipHeadline: null | string
    tipText: null | string
    viewType: number
}

export interface PaymentProcessor {
    disabled: boolean,
    id: number,
    deliveryInformation: Array<any>,
    outputType: number,
    processorId: number,
    sortOrder: number,
    taxRate: number,
    visibility: number,
    name: string,
    outputs: Array<ProcessorOutput>,
    config: Array<ProcessorConfig>
}

export interface ProcessorConfig {
    branchProcessorId: number,
    id: number,
    key: string,
    description: string | {
        id: number,
        name: string,
        price: number
    }
}

export interface ProcessorOutput {
    active: boolean,
    branchProcessorId: number,
    id: number,
    name: string,
    outputId: string,
    outputTypeId: number
}

export interface BranchConfigText {
    branchId: number,
    key: string,
    value: string
}

export interface LocationPosition {
    position: {
        latitude?: number,
        longitude?: number
    }
}

export interface ShopAdminAccounting {
    addMember(param?: any): any;

    getMembers(): any;

    getUsers(): any;

    removeMember(param?: any): any;
}

export interface ShopAdminArticle {
    addImage(options: { articleId: number, url: string }): Promise<any>;

    clone(param?: any): any;

    create(article: ShopAdminArticleCreate): Promise<any>;

    createBatch(param?: any): any;

    createConfig(articleId: number, config: { key: string, value: string }): Promise<string | 'Created article config'>;

    get(param?: any): any;

    getConfig(param?: any): any;

    importArticles(param?: any): any;

    patchConfig(param1?: any, param2?: any, param3?: any): any;

    remove(articleId: number): Promise<any>;

    removeConfig(param?: any): any;

    removeImage(imageId: number): Promise<any>;

    setToGroups(param1?: any, param2?: any): any;

    sort(param1?: any, param2?: any): any;

    sortImages(param1?: any, param2?: any, param3?: any): any;

    switchArticle(param1?: any, param2?: any, param3?: any, param4?: any),

    update<T extends keyof ShopArticle>(articleId: number, config: { field: T, value: ShopArticle[T] }): Promise<any>;
}

export interface ShopAdminArticleSchedule {
    create(param?: any): any;

    get(param?: any): any;
}

export interface ShopAdminBranch {
    addImage(param?: any): any;

    removeImage(param?: any): any;

    update<T extends keyof BranchConfigConfig>(option: { field: T, value: BranchConfigConfig[T] }): Promise<any>;

    updateOwner(param?: any): any;

    updateText(options: { field: CartText, value: string }): Promise<any>;
}

export interface ShopAdminBranchConfig {
    tip: {
        put(param?: any): any;
        remove(param?: any): any;
        removeAccount(): any;
    },

    update<T extends keyof BranchConfigConfig>(arg: { field: T, value: BranchConfigConfig[T] }): Promise<any>;
}

export interface ShopAdminGroup {
    create(options: Partial<ShopOfferCategory>): Promise<any>;

    remove(param?: any): Promise<any>;

    sort(param?: any): any;

    update<T extends keyof ShopOfferCategory>(
        groupId: number,
        options: { field: T, value: ShopOfferCategory[T] }
    ): Promise<any>;
}

export interface ShopAdminOption {
    create(group: Partial<ShopArticle>): Promise<any>;

    remove(optionId: number): Promise<any>;

    sort(param1?: any, param2?: any): any;

    update<T extends keyof ShopArticle>(optionId: number, config: { field: T, value: ShopArticle[T] }): Promise<any>;
}

export interface ShopAdminOptionGroup {
    create(group: Partial<OptionGroup>): Promise<any>;

    remove(optionGroupId: number): Promise<any>;

    sort(param1?: any, param2?: any): any;

    update<T extends keyof OptionGroup>(
        optionGroupId: number,
        config: { field: T, value: OptionGroup[T] }
    ): Promise<any>;
}

export interface ShopAdminOrder {
    exportProvisioningOrders(param?: any): any;

    getProvisioningOrders(): any;
}

export interface ShopAdminOutput {
    assign(param?: any): any;

    create(outputs: Partial<ProcessorOutput>[]): Promise<any>;

    get(param?: any): any;

    remove(processorId: number, outputIds: Array<string>): Promise<any>;

    update<T extends keyof ProcessorOutput>(
        outputId: number,
        option: { field: T, value: ProcessorOutput[T] }
    ): Promise<any>;
}

export interface ShopAdminPayment {
    getLocationInfo(): any;

    getOpmTypes(): any;

    getPaymentData(param?: any): any;

    getSiteAddress(param1?: any, param2?: any): any

    saveLocationInfo(param?: any): any;

    savePaymentData(param?: any): any;

    saveSiteAddress(param?: any): any;
}

export interface ShopAdminProcessor {
    create(param?: any): any;

    deliveryInformation: {
        create(param1?: any, param2?: any): any;
        createBatch(param1?: any, param2?: any): any;
        patchBatch(param1?: any, param2?: any): any;
        patchFeePrice(param1?: any, param2?: any): any;
        remove(param1?: any, param2?: any): any;
    },

    get(): any;

    remove(processorId: number): Promise<any>;

    sort(param?: any): any;

    update<T extends keyof PaymentProcessor>(
        processorId: number,
        option: { field: T, value: PaymentProcessor[T] }
    ): Promise<any>;
}

export interface ShopAdminProcessorConfig {
    create(config: {
        key: string | 'CustomConfirmMessage' | 'CustomConfirmAction',
        value: string | boolean | number,
        branchProcessorId: number
    }): Promise<any>;

    remove(processorConfigId: number): Promise<any>;

    update(
        processorConfigId: number,
        config: { field: string | 'CustomConfirmMessage' | 'CustomConfirmAction', value: string | boolean | number }
    ): Promise<any>;
}

export interface ShopAdminSubscription {
    approve(subscriptionId: number): Promise<any>;

    get(param?: any): any;

    reject(param?: any): any;

    remove(param?: any): any;
}

export interface ShopOfferCategory {
    description: string | null,
    disabled: boolean,
    hidden: boolean,
    id: number,
    name: string,
    outputDevices: Array<any>;
    sortOrder: number,
    visibility: number,
    articles: Array<ShopArticle>;
}

export type ShopAdminArticleCreate = Partial<ShopArticle> & Record<string, string>

export interface AdminSubscription {
    articleId: number;
    creationTime: string;
    maxSubscriptionPeriod: number;
    minimumSubscriptionPeriod: number | null;
    name: string;
    price: number;
    recurringInterval: number | 30 | 60 | 90 | 365;
    subCancellationAllowed: boolean;
    subscriptionEnd: string | null;
    subscriptionPeriod: number;
    users: Array<{
        city: string;
        mail: string;
        minimumSubscription: null | any;
        name: string;
        nextPayment: null | any;
        optionNames: null | any;
        payment: number;
        paymentSum: number;
        personId: string;
        phone: string;
        street: string;
        subId: number;
        subscriptionEnd: null | string;
        subscriptionStart: string;
        zip: string;
    }>;
}

export interface ShopArticle {
    amount: number,
    articleNo: any | null,
    basePrice: number,
    branchId: number,
    config: Array<any>;
    disabled: boolean;
    discountable: boolean,
    fee: number,
    flags: number,
    foreignFee: number,
    groupId: number,
    id: number,
    images: Array<any>
    name: string,
    optionGroups: Array<OptionGroup>;
    outOfStockFlag: boolean,
    position: any,
    price: number,
    provision: number,
    recurringInterval: number | 30 | 60 | 90 | 365,
    recurringType: number,
    retailPrice: number | null,
    soldAmount: number,
    sortOrder: number,
    subCancellationAllowed: boolean,
    subscription: Array<any>;
    subscriptionPeriod: number;
    system: boolean,
    taxRate: number | null | 7 | 19
}

export interface ShopInitConfig {
    introText: string;
    headline: string;
    createShop?: boolean;
    tapp?: {
        useFloatingButton?: boolean,
        useSubTapp?: boolean
    };

    [key: string]: any;
}

export interface OptionGroup {
    articleId: number,
    hidden: boolean,
    id: number,
    multiSelect: boolean;
    name: string;
    required: boolean;
    sortOrder: number;
    text: string;
    options: Array<Option>
}

export interface Option {
    branchId: number;
    foreignFee: number;
    groupId: number;
    id: number;
    name: string;
    price: number;
    provision: number;
    selected: boolean;
    taxRate: number | 7 | 19;
}

export type CartText =
    'cart_headline'
    | 'cart_intro_text'
    | 'cart_bnt_go_to_shop'
    | 'cart_bnt_confirm'
    | 'cart_processor_headline'
    | 'cart_waitcursor_text'
    | string
