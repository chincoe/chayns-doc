"use strict";

/* eslint-disable no-unused-vars,no-underscore-dangle */

/**
 * @type {boolean}
 * @public
 */
var __LIVE__ = true;
/**
 * @type {boolean}
 * @public
 */

var __DEVELOPMENT__ = true;
/**
 * @type {boolean}
 * @public
 */

var __DEV__ = true;
/**
 * @type {boolean}
 * @public
 */

var __STAGING__ = true;
/**
 * @type {boolean}
 * @public
 */

var __QA__ = true;
/**
 * @type {boolean}
 * @public
 */

var __PROD__ = true;
/**
 * @type {boolean}
 * @public
 */

var __PRODUCTION__ = true;
/**
 * @typedef userResult
 * @property {number} Type
 * @property {string} PersonID
 * @property {number} FacebookID
 * @property {string} FirstName
 * @property {number} UserID
 * @property {string} LastName
 * @property {string} ChaynsLogin
 * @property {string} UserFullName
 */

/**
 * @typedef logoutType
 * @property {number} FALSE
 * @property {number} NORMAL
 */

/**
 * @typedef loginState
 * @property {number} FACEBOOK
 * @property {number} T_WEB
 * @property {number} CANCEL
 * @property {number} ALREADY_LOGGED_IN
 */

/**
 * @typedef cameraType
 * @property {number} AUTO
 * @property {number} BACK
 * @property {number} FRONT
 */

/**
 * @typedef geoLocation
 * @property {number} latitude
 * @property {number} accuracy
 * @property {number} speed
 * @property {number} longitude
 */

/**
 * @typedef sharingConfig
 * @property {string} title
 * @property {string} text
 * @property {string} imageUrl
 * @property {number} sharingApp
 * @property {string} sharingAndroidApp
 */

/**
 * @typedef windowMetrics
 * @property {number} pageYOffset
 * @property {number} windowHeight
 * @property {number} frameX
 * @property {number} frameY
 * @property {number} scrollTop
 * @property {number} height
 */

/**
 * @typedef sharingServicesResult
 * @property {Object} retval
 * @property {Array.<number>} retval.availableSharingApps
 */

/**
 * @typedef intercomConfig
 * @property {string} text
 */

/**
 * @typedef subTappConfig
 * @property {number} tappID
 * @property {string} name
 * @property {string} color
 * @property {string} colorString
 * @property {number} sortId
 * @property {string} icon
 * @property {function} callbackURL
 * @property {string} url
 * @property {string} buttonName
 * @property {boolean} isExclusiveView
 * @property {boolean} replaceParent
 * @property {boolean} boldText
 */

/**
 * @typedef removeSubTappConfig {{tappID: number, close: boolean, remove: boolean}}
 */

/**
 * @typedef setHeightConfig {{height: int, growOnly: boolean, full: boolean, fullViewport: boolean, forceHeight:
 *     boolean}}
 */

/**
 * @typedef findPersonResult {{Status: {ResultCode: number, ResultText: string, Exception: undefined}, Value:
 *     Array.<{name: string, personId: string, facebookId: number, lastLoginTime: string, currentLocationId: number}>}}
 */

/**
 * @typedef findSiteResult {{Status: {ResultCode: number, ResultText: string, Exception: undefined}, Value:
 *     Array.<{siteId: string, locationId: number, appstoreName: string}>}}
 */

/**
 * @typedef floatingButtonConfig {{callback: function, text:string, color: string, colorText:string, icon: string,
 *     position: int}}
 */

/**
 * @typedef openUrlConfig
 * @property {string} [url]
 * @property {string} [title]
 * @property {boolean} [exclusiveView],
 * @property {boolean} [darkenBackground],
 * @property {boolean} [fullSize],
 * @property {number} [width]
 */

/**
 * @typedef loginStateResult
 * @property {loginState} loginState
 */

/**
 * @typedef smartShopArticle
 * @property {number} id
 * @property {number} amount
 */

/**
 * @typedef smartShopConfig
 * @property {string} introText
 * @property {string} headline
 * @property {number} branchId
 * @property {number} internalShopId
 * @property {*} tappType
 * @property {Object} parameters
 * @property {boolean} refresh
 * @property {boolean} createShop
 * @property {Object} tapp
 * @property {boolean} [tapp.useFloatingButton=true]
 * @property {boolean} [tapp.useFloatingButtonText=true]
 * @property {boolean} [tapp.useSubTapp=true]
 * @property {boolean} [tapp.replaceTapp=true]
 * @property {boolean} [tapp.hasSubTapp=false]
 * @property {boolean} [tapp.useExclusiveMode=false]
 * @property {function} [tapp.floatingButtonCallback=null]
 * @property {boolean} [tapp.forceFloatingButton=false]
 * @property {string} [tapp.customShopUrl=null]
 * @property {Object} [tapp.parameters=null]
 * @property {Object} [tapp.paymentInformation=null]
 * @property {boolean} [tapp.useFloatingButtonBadge=false]
 * @property {string} [tapp.floatingButtonIcon='fa-shopping-cart']
 * @property {boolean} [tapp.suggestLogin=false]
 */

/**
 * @type {{
 *      refreshAccessToken(): Promise<undefined>,
 *      addGeoLocationListener(function): Promise<undefined>,
 *      appendUrlParameter(Object, boolean),
 *      addNfcListener(function): undefined,
 *      addOnActivateListener(function): boolean,
 *      floatingButtonPosition: {
 *          CENTER: number,
 *          LEFT: number,
 *          RIGHT: number
 *      },
 *      showOverlay(string, string): Promise<*>,
 *      loginState: {
 *          FACEBOOK: number,
 *          T_WEB: number,
 *          CANCEL: number,
 *          ALREADY_LOGGED_IN: number
 *     },
 *     selectTapp(Object, string): Promise<undefined>,
 *     sendEventToTopFrame(*),
 *     createQRCode(string): Promise<string>,
 *     removeOnActivateListener(function): boolean,
 *     vibrate([number], number=),
 *     removeAccessTokenChangeListener(function): boolean,
 *     removeSubTapp(removeSubTappConfig): Promise<undefined>,
 *     mimeType: {
 *          IMAGE: number,
 *          VIDEO: number,
 *          DOCUMENT: number,
 *          AUDIO: number
 *     },
 *     getWebviewOptions(): Promise<*>,
 *     dynamicFontSize(),
 *     hideWaitCursor(): Promise<undefined>,
 *     uploadToCloud(*, *),
 *     disableDisplayTimeout(): Promise,
 *     urlType: {AR: number, WEB: number},
 *     setSubTapp(subTappConfig): Promise<undefined>,
 *     utils: {
 *          editor: {
 *              disable(),
 *              enable(),
 *              enableToolbarChange(),
 *              logger: {
 *                  log(*, *, *),
 *                  setLevel(number),
 *                  level: number
 *              }
 *          },
 *          isJwt(*): boolean,
 *          getScaledImageUrl(string, int, int, boolean): string,
 *          isPermitted(*): boolean,
 *          ls: {
 *              removeAll(),
 *              getPrefix(),
 *              set(string, string): string,
 *              get(string),
 *              remove(string)
 *          },
 *          isPresent(*): boolean,
 *          isBlank(*): boolean,
 *          isUUID(*): boolean,
 *          colors: {
 *              getColorFromPalette(string): string,
 *              get(int, string): string,
 *              mix(string, string, int): string
 *          },
 *          translate: {
 *              init()
 *          },
 *          setLevel(*),
 *          isGUID(*): boolean,
 *          isBoolean(*): boolean,
 *          isPromise(*): boolean,
 *          isNumber(*): boolean,
 *          isDialogPermitted(): boolean,
 *          isUrl(*): boolean,
 *          isDate(*): boolean,
 *          isString(*): boolean,
 *          isUndefined(*): boolean,
 *          lang: {
 *              init(*),
 *              renderTextString(*),
 *              get(*),
 *              loadLib(*, *)
 *           },
 *          isObject(*): boolean,
 *          isFunction(*): boolean,
 *          getJwtPayload(string),
 *          isHex(*): boolean,
 *          isMacAddress(*): boolean,
 *          isFormElement(*): boolean,
 *          isFormData(*): boolean,
 *          resetEnvironment(*),
 *          isDefined(*): boolean,
 *          createTappUrl(*),
 *          isBLEAddress(*): boolean,
 *          isArray(*): boolean,
 *          isDeferred(*): boolean
 *      },
 *      enableDisplayTimeout(): Promise,
 *      removeNfcListener(function): boolean,
 *      invokeCall(*, *),
 *      cancelScanQrCode(): Promise,
 *      hideTitleImage(),
 *      hideFloatingButton(): Promise,
 *      logoutType: {
 *          FORCE: number,
 *          NORMAL: number
 *      },
 *      findPerson(string): Promise<findPersonResult>,
 *      findSite(string): Promise<findSiteResult>,
 *      navigateBack(): Promise<undefined>,
 *      openUrlInBrowser(string): Promise<Window>,
 *      setWebviewOptions(*),
 *      sharingApp: {
 *          FACEBOOK: number,
 *          GOOGLE_PLUS: number,
 *          MAIL: number,
 *          WHATSAPP: number,
 *          TWITTER: number,
 *          FACEBOOK_MESSENGER: number
 *      },
 *      deactivateAdminMode(): Promise,
 *      setHeight(setHeightConfig): Promise<undefined>,
 *      allowRefreshScroll(): Promise<undefined>,
 *      hideBackButton(),
 *      showWaitCursor(string=, number=): Promise<undefined>,
 *      updateCloudImage(),
 *      addAdminSwitchListener(function): boolean,
 *      openImage([string], number): Promise<undefined>,
 *      getUser(Object): Promise<userResult>,
 *      updateTapp(*),
 *      storage: {
 *          set(*, *, *, *),
 *          get(*, *),
 *          accessMode: {
 *              PUBLIC: number,
 *              PROTECTED: number,
 *              PRIVATE: number
 *          },
 *          remove(*, *)
 *      },
 *      login([string]=): Promise<loginStateResult>,
 *      logout(logoutType=): Promise<undefined>,
 *      addNetworkChangeListener(function): boolean,
 *      addAccessTokenChangeListener(function): boolean,
 *      removeAdminSwitchListener(function): boolean,
 *      animationType: {
 *          BOTTOM: number,
 *          DEFAULT: number
 *      },
 *      showFloatingButton(floatingButtonConfig, function),
 *      dialog: {
 *          alert(string, string): Promise,
 *          confirm(string, string, Object[]): Promise,
 *          input(Object): Promise,
 *          select(Object): Promise,
 *          date(Object): Promise,
 *          advancedDate(Object): Promise,
 *          mediaSelect(Object): Promise,
 *          fileSelect(Object): Promise,
 *          iFrame(Object): Promise,
 *          sendData(*, boolean),
 *          addDialogDataListener(function(*), boolean),
 *          removeDialogDataListener(function(*), boolean),
 *          setResult(*),
 *          addDialogResultListener(function(*)),
 *          removeDialogResultListener(function(*)),
 *          close(number|undefined),
 *          disableButtons(boolean, number[])
 *          buttonText: {
 *              NO: string,
 *              YES: string,
 *              CANCEL: string,
 *              OK: string
 *          },
 *          buttonType: {
 *              POSITIVE: number,
 *              CANCEL: number,
 *              NEGATIVE: number
 *          },
 *          dateType: {
 *              DATE: number,
 *              TIME: number,
 *              DATE_TIME: number
 *          },
 *          alert(*, *, *),
 *          selectType: {
 *              ICON: number,
 *              DEFAULT: number
 *          },
 *          inputType: {
 *              NUMBER: number,
 *              TEXTAREA: number,
 *              INPUT: number,
 *              PASSWORD: number,
 *              DEFAULT: number
 *          },
 *          fileType: {
 *              IMAGE: string,
 *              VIDEO: string,
 *              DOCUMENT: string[],
 *              AUDIO: string
 *          }
 *      },
 *      removeNetworkChangeListener(function): boolean,
 *      adminSwitchStatus: {
 *          ADMIN: number,
 *          USER: number
 *      },
 *      showSnackbar(*),
 *      ready: Promise<*>,
 *      scrollToY(number, number=),
 *      showTitleImage(),
 *      removeWindowMetricsListener(function): boolean,
 *      getGeoLocation(): Promise<geoLocation>,
 *      setScreenOrientation(number): Promise,
 *      share(sharingConfig): Promise,
 *      intercom: {
 *          sendMessageToUser(number, intercomConfig): Promise<Response>,
 *          sendMessageToGroup(number, intercomConfig): Promise<Response>,
 *          sendMessageToPage(intercomConfig): Promise<Response>
 *      },
 *      updateChaynsId(*),
 *      networkType: {
 *          CDMA_EVDO_A: number,
 *          CDMA_EVDO_B: number,
 *          EGDE: number,
 *          IDEN: number,
 *          HSUPA: number,
 *          HSPAP: number,
 *          NO_NETWORK: number,
 *          GPRS: number,
 *          EHRPD: number,
 *          UMTS: number,
 *          HSDPA: number,
 *          ETHERNET: number,
 *          LTE: number,
 *          NETWORK_TYPE_UNKNOWN: number,
 *          CDMA_1xRTT: number,
 *          HSPA: number,
 *          WIFI: number,
 *          CDMA_EVDO_0: number
 *      },
 *      event: {
 *          removePushListener(*),
 *          addPushListener(*)
 *      },
 *      addWindowMetricsListener(function): undefined,
 *      tappEvent: {
 *          ON_HIDE: number,
 *          ON_SHOW: number,
 *          ON_REFRESH: number
 *      },
 *      getWindowMetrics(): Promise<windowMetrics>,
 *      removeGeoLocationListener(function): boolean,
 *      uploadFile(*, *, *),
 *      orientation: {
 *          LANDSCAPE: number,
 *          PORTRAIT_REVERSE: number,
 *          PORTRAIT: number,
 *          LANDSCAPE_REVERSE: number,
 *          PORTRAIT_SENSOR: number,
 *          LANDSCAPE_SENSOR: number,
 *          DEFAULT: number
 *      },
 *      removeScrollListener(function): boolean,
 *      listeners: [null],
 *      hideOverlay(): Promise,
 *      activateAdminMode(): Promise,
 *      getGlobalData(),
 *      getNetworkStatus(),
 *      env: {
 *          dialogInput: Object,
 *          appVersion: number,
 *          isChaynsWebMobile: boolean,
 *          language: string,
 *          isDesktop: boolean,
 *          isChaynsParent: boolean,
 *          apiVersion: number,
 *          isTablet: boolean,
 *          browser: {
 *              name: string,
 *              version: string,
 *              supportsWebP: boolean
 *          },
 *          isChaynsnetRuntime: boolean|undefined
 *          isChaynsWebDesktop: boolean,
 *          isInFrame: boolean,
 *          isMobile: boolean,
 *          app: {
 *              flavor: undefined
 *          },
 *          isChaynsWeb: boolean,
 *          isMyChaynsApp: boolean,
 *          os: string,
 *          isApp: boolean,
 *          isBrowser: boolean,
 *          site: {
 *              locationPersonId: string,
 *              color: string,
 *              headlineFontId: number,
 *              colorMode: number,
 *              language: string,
 *              title: string,
 *              version: string,
 *              url: string,
 *              facebookPageId: null,
 *              environment: string,
 *              disposition: {
 *                  contentWide: boolean,
 *                  coverDetached: boolean,
 *                  barOnTop: boolean,
 *                  coverWide: boolean,
 *                  docked: boolean,
 *                  barWide: boolean
 *              },
 *              locationId: number,
 *              tapps: [
 *                  {
 *                      customUrl: string,
 *                      internalName: string,
 *                      isSubTapp: boolean,
 *                      showName: string,
 *                      sortId: number,
 *                      iconType: number,
 *                      isHiddenFromMenu: boolean,
 *                      icon: string,
 *                      id: number
 *                  }
 *              ],
 *              domain: string,
 *              id: string,
 *              tapp: {
 *                  customUrl: string,
 *                  internalName: string,
 *                  isSubTapp: boolean,
 *                  showName: string,
 *                  sortId: number,
 *                  iconType: number,
 *                  isHiddenFromMenu: boolean,
 *                  icon: string,
 *                  id: number,
 *                  userGroupIds: [number]
 *              },
 *              font: number
 *          },
 *          isWP: boolean,
 *          isInFacebookFrame: boolean,
 *          isWidget: boolean,
 *          isAndroid: boolean,
 *          parameters: {},
 *          user: {
 *              firstName: string,
 *              lastName: string,
 *              tobitAccessToken: string,
 *              name: string,
 *              adminMode: boolean,
 *              groups: [
 *                  {
 *                      id: number,
 *                      isActive: boolean
 *                  }
 *              ],
 *              personId: string,
 *              id: number,
 *              isAuthenticated: boolean,
 *              isAdmin: boolean
 *          },
 *          device: {
 *              uid: undefined,
 *              dfaceVersion: undefined,
 *              minLogLevel: undefined,
 *              systemName: undefined,
 *              deviceAccessToken: undefined,
 *              languageId: undefined,
 *              imei: undefined,
 *              model: undefined,
 *              fontScale: undefined,
 *              version: undefined
 *          },
 *          debugMode: boolean,
 *          isIOS: boolean,
 *          _parameters: {}
 *      },
 *      getLastPushNotification(): Promise<*>,
 *      openUrl(openUrlConfig): Promise,
 *      disallowRefreshScroll(): Promise<undefined>,
 *      showBackButton(*),
 *      closeUrl(): Promise<undefined>,
 *      cameryType: {AUTO: number, BACK: number, FRONT: number},
 *      openVideo(string): Promise<undefined>,
 *      getAvailableSharingServices(): Promise<sharingServicesResult>,
 *      addScrollListener(function): boolean,
 *      scanQRCode(cameraType, number): Promise,
 *      register(*)
 *      smartShop: {
 *  init(smartShopConfig),
 *  settings: {
 *      getProcessor()
 *  },
 *  admin: {
 *      output(),
 *      intercom(),
 *      accounting(),
 *      subscription(),
 *      branch: {
 *          updateText(Object)
 *      },
 *      processor(),
 *      article(),
 *      group(),
 *      option()
 *  },
 *  groups: {
 *      get()
 *  },
 *  subscription: {
 *      getArticle()
 *  },
 *  carousel: {
 *      isEnable()
 *  },
 *  branch: {
 *      createBranchConfig(),
 *      removeImage(),
 *      updateBranchConfig(),
 *      updateBranch(),
 *      addImage(),
 *      updateBranchText(),
 *      updateOpmOwner(),
 *      getBranchConfig()
 *  },
 *  cart: {
 *      addArticle(smartShopArticle),
 *      set(),
 *      addServerArticle(),
 *      removeArticle(smartShopArticle),
 *      cartCount: number,
 *      userId: {
 *          expires: number,
 *          firstname: string,
 *          voucherList: [],
 *          topFlag: boolean,
 *          vouchers: [],
 *          userId: number,
 *          branchTipFactor: number,
 *          lastname: string,
 *          orderUid: string,
 *          cartPrice: number,
 *          personId: string,
 *          fullname: string,
 *          invoiceRequested: boolean,
 *          tipSum: number,
 *          articles: {amount: number, id: number}[]
 *      },
 *      remove(),
 *      confirm(),
 *      removeServerArticle(),
 *      get(),
 *      removeTip(),
 *      toOrder(),
 *      create(),
 *      setTip(),
 *      exp: number,
 *      smartCheckout(*=)
 *  },
 *  offer: {
 *      getCategories(),
 *      getCategory(number)
 *  },
 *  utils: {
 *      convertToClientArticle()
 *  },
 *  payment: {
 *      getTssmPaymentInfo(),
 *      getOpmStatus()
 *  },
 *  tapp: {
 *      gotoCart(),
 *      gotoShop(),
 *      configure(Object),
 *  },
 *  user: {
 *      getByQr(),
 *      getByNfc(),
 *      isStaff(),
 *      getByPersonId(),
 *      getAccountBalance()
 *  },
 *  order: {
 *      cancel(),
 *      addArticle(),
 *      extendTtl(),
 *      addClientArticle(),
 *      removeArticle(),
 *      getInternal(),
 *      getClientOrderedArticles(),
 *      clearClientCar(),
 *      getClientCart(),
 *      confirm(),
 *      getPopular(),
 *      getHistory(),
 *      create(),
 *      setClientCart(),
 *      createFromClientCart()
 *   }}
 * }}

 */

var chayns = {
    /**
     * @returns {Promise}
     */
    activateAdminMode: function activateAdminMode() {},

    /**
     * @callback accessTokenCb
     */

    /**
     * @param {accessTokenCb} callback
     * @returns {boolean} success
     */
    addAccessTokenChangeListener: function addAccessTokenChangeListener(callback) {},

    /**
     * @callback adminSwitchCb
     * @param {Object} result
     * @param {number} result.mode
     */

    /**
     * @param {adminSwitchCb} callback
     * @returns {boolean} success
     */
    addAdminSwitchListener: function addAdminSwitchListener(callback) {},

    /**
     * @callback geoLocationCb
     * @param {Object} geoLocation
     * @param {number} latitude
     * @param {number} longitude
     * @param {number} speed
     * @param {number} accuracy
     */

    /**
     * @param {geoLocationCb} callback
     * @returns {undefined}
     */
    addGeoLocationListener: function addGeoLocationListener(callback) {},

    /**
     * @callback networkChangeCb
     * @param status
     */

    /**
     * @param callback
     * @returns {boolean} success
     */
    addNetworkChangeListener: function addNetworkChangeListener(callback) {},

    /**
     * @callback nfcListenerCb
     * @param param
     */

    /**
     * @returns {undefined}
     * @param {nfcListenerCb} callback
     */
    addNfcListener: function addNfcListener(callback) {},

    /**
     * @callback onActivateCb
     */

    /**
     * @returns {boolean} success
     * @param {onActivateCb} callback
     */
    addOnActivateListener: function addOnActivateListener(callback) {},

    /**
     * @callback scrollCb
     */

    /**
     * @returns {boolean} success
     * @param {scrollCb} callback
     */
    addScrollListener: function addScrollListener(callback) {},

    /**
     * @callback windowMetricsCb
     * @param {number} windowHeight
     */

    /**
     * @returns {boolean} success
     * @param {windowMetricsCb} callback
     */
    addWindowMetricsListener: function addWindowMetricsListener(callback) {},

    /**
     * @returns {Promise<undefined>}
     */
    allowRefreshScroll: function allowRefreshScroll() {},

    /**
     * @returns {Promise<undefined>}
     */
    disallowRefreshScroll: function disallowRefreshScroll() {},

    /**
     * @returns {Promise<undefined>}
     * @param {Object} parameters
     * @param {boolean} overwrite
     */
    appendUrlParameter: function appendUrlParameter(parameters, overwrite) {},

    /**
     * @returns {Promise<undefined>}
     */
    closeUrl: function closeUrl() {},

    /**
     * @returns {Promise}
     */
    cancelScanQrCode: function cancelScanQrCode() {},

    /**
     * @returns {Promise<string>} codeUrl
     * @param {string} url
     */
    createQRCode: function createQRCode(url) {},

    /**
     * @returns {Promise}
     */
    deactivateAdminMode: function deactivateAdminMode() {},

    /**
     * @returns {Promise}
     */
    disableDisplayTimeout: function disableDisplayTimeout() {},
    dynamicFontSize: function dynamicFontSize() {},

    /**
     * @returns {Promise}
     */
    enableDisplayTimeout: function enableDisplayTimeout() {},

    /**
     * @returns {Promise<findPersonResult>} person
     * @param {string} name
     */
    findPerson: function findPerson(name) {},

    /**
     * @returns {Promise<findSiteResult>} site
     * @param {string} name
     */
    findSite: function findSite(name) {},

    /**
     * @returns {Promise<sharingServicesResult>}
     */
    getAvailableSharingServices: function getAvailableSharingServices() {},

    /**
     * @returns {Promise<geoLocation>}
     */
    getGeoLocation: function getGeoLocation() {},

    /**
     * @returns {Promise<Object>}
     */
    getGlobalData: function getGlobalData() {},

    /**
     * @returns {Promise<*>}
     */
    getLastPushNotification: function getLastPushNotification() {},

    /**
     * @returns {Promise<*>}
     */
    getNetworkStatus: function getNetworkStatus() {},

    /**
     * @returns {Promise<userResult>}
     * @param {Object} config
     * @param {string} [config.AccessToken]
     * @param {number} [config.FBID]
     * @param {number} [config.UserID]
     * @param {string} [config.PersonID]
     */
    getUser: function getUser(config) {},
    getWebviewOptions: function getWebviewOptions() {},

    /**
     * @returns {Promise<windowMetrics>}
     */
    getWindowMetrics: function getWindowMetrics() {},

    /**
     * @returns {Promise}
     */
    hideBackButton: function hideBackButton() {},

    /**
     * @returns {Promise}
     */
    hideFloatingButton: function hideFloatingButton() {},

    /**
     * @returns {Promise}
     */
    hideOverlay: function hideOverlay() {},

    /**
     * @returns {Promise}
     */
    hideTitleImage: function hideTitleImage() {},

    /**
     * @returns {Promise}
     */
    hideWaitCursor: function hideWaitCursor() {},

    /**
     * @returns {Promise}
     * @param {Object} config - s.chaynsCalls docs
     */
    invokeCall: function invokeCall(config) {},

    /**
     * @returns {Promise<loginStateResult>}
     * @param {string} parameters
     */
    login: function login(parameters) {},

    /**
     * @returns {Promise<undefined>}
     * @param {logoutType|0|1} [type=0]
     */
    logout: function logout(type) {},

    /**
     * @returns {Promise<undefined>}
     */
    navigateBack: function navigateBack() {},

    /**
     * @returns {Promise<undefined>}
     * @param {string|string[]} urls
     * @param {number} [start=0]
     */
    openImage: function openImage(urls, start) {},

    /**
     * @returns {Promise}
     * @param {Object} config
     * @param {string} config.url
     * @param {string} [config.title]
     * @param {boolean} [config.exclusiveView],
     * @param {boolean} [config.darkenBackground],
     * @param {boolean} [config.fullSize],
     * @param {number} [config.width]
     */
    openUrl: function openUrl(config) {},

    /**
     * @returns {Promise<Window>} window
     * @param {string} url
     */
    openUrlInBrowser: function openUrlInBrowser(url) {},

    /**
     * @return {Promise}
     * @param {string} url
     */
    openVideo: function openVideo(url) {},

    /**
     * @returns {Promise}
     */
    refreshAccessToken: function refreshAccessToken() {},

    /**
     * @returns {*}
     * @param {Object} config
     */
    register: function register(config) {},

    /**
     * @returns {boolean} success
     * @param {accessTokenCb} callback
     */
    removeAccessTokenChangeListener: function removeAccessTokenChangeListener(callback) {},

    /**
     * @returns {boolean} success
     * @param {adminSwitchCb} callback
     */
    removeAdminSwitchListener: function removeAdminSwitchListener(callback) {},

    /**
     * @returns {boolean} success
     * @param {geoLocationCb} callback
     */
    removeGeoLocationListener: function removeGeoLocationListener(callback) {},

    /**
     * @returns {boolean} success
     * @param {networkChangeCb} callback
     */
    removeNetworkChangeListener: function removeNetworkChangeListener(callback) {},

    /**
     * @returns {boolean} success
     * @param {nfcListenerCb} callback
     */
    removeNfcListener: function removeNfcListener(callback) {},

    /**
     * @returns {boolean} success
     * @param {onActivateCb} callback
     */
    removeOnActivateListener: function removeOnActivateListener(callback) {},

    /**
     * @returns {boolean} success
     * @param {scrollCb} callback
     */
    removeScrollListener: function removeScrollListener(callback) {},

    /**
     * @returns {boolean} success
     * @param {windowMetricsCb} callback
     */
    removeWindowMetricsListener: function removeWindowMetricsListener(callback) {},

    /**
     * @returns {Promise<undefined>}
     * @param {Object} config
     * @param {number} config.tappID
     * @param {boolean} config.close
     * @param {boolean} config.remove
     */
    removeSubTapp: function removeSubTapp(config) {},

    /**
     * @returns {Promise}
     * @param {cameraType} cameraType
     * @param {number} timeout
     */
    scanQRCode: function scanQRCode(cameraType, timeout) {},

    /**
     * @returns {*}
     * @param {number} position
     * @param {number} duration
     */
    scrollToY: function scrollToY(position, duration) {},

    /**
     * @param {Object} tapp
     * @param {number} [tapp.tappId]
     * @param {string} [tapp.showName]
     * @param {string} [tapp.internalName]
     * @param {string} [tapp.siteId]
     * @param {string} [parameter]
     */
    selectTapp: function selectTapp(tapp, parameter) {},
    sendEventToTopFrame: function sendEventToTopFrame(param) {},

    /**
     * @returns {Promise<undefined>}
     * @param {Object} config
     * @param {number} config.height
     * @param {boolean} config.growOnly
     * @param {boolean} config.full
     * @param {boolean} config.fullViewport
     * @param {boolean} config.forceHeight
     */
    setHeight: function setHeight(config) {},

    /**
     * @returns {Promise}
     * @param {number|0|1|2} orientation
     */
    setScreenOrientation: function setScreenOrientation(orientation) {},

    /**
     * @returns {Promise<undefined>}
     * @param {Object} config
     * @param {number} config.tappID
     * @param {string} config.name,
     * @param {string} config.color
     * @param {string} config.colorText
     * @param {number} config.sortID
     * @param {string} config.icon
     * @param {function} config.callbackURL
     * @param {string} config.url
     * @param {string} config.buttonName
     * @param {boolean} config.isExclusiveView
     * @param {boolean} config.replaceParent
     * @param {boolean} config.boldText
     */
    setSubTapp: function setSubTapp(config) {},
    setWebviewOptions: function setWebviewOptions(param) {},

    /**
     * @returns {Promise}
     * @param {Object} config
     * @param {string} config.title
     * @param {string} config.text
     * @param {string} config.imageUrl
     * @param {number} config.sharingApp
     * @param {string} config.sharingAndroidApp
     */
    share: function share(config) {},
    showBackButton: function showBackButton(param) {},

    /**
     * @returns {Promise}
     * @param {Object} config
     * @param {function} config.callback
     * @param {string} config.text
     * @param {string} config.color
     * @param {string} config.colorText
     * @param {string} config.icon
     * @param {number} config.position
     * @param onClick
     */
    showFloatingButton: function showFloatingButton(config, onClick) {},

    /**
     * @returns {Promise}
     * @param {string} color
     * @param {string} transition
     */
    showOverlay: function showOverlay(color, transition) {},
    showSnackbar: function showSnackbar(param) {},

    /**
     * @returns {Promise}
     */
    showTitleImage: function showTitleImage() {},

    /**
     * @returns {Promise}
     * @param {string} [text]
     * @param {number} [textTimeout]
     */
    showWaitCursor: function showWaitCursor(text, textTimeout) {},
    updateChaynsId: function updateChaynsId(param) {},
    updateTapp: function updateTapp(param) {},
    updateCloudImage: function updateCloudImage() {},

    /**
     * @returns {Promise<*>}
     * @param {File} file
     * @param {*} param1
     * @param {*} param2
     */
    uploadFile: function uploadFile(file, param1, param2) {},

    /**
     * @returns {Promise<*>}
     * @param {File} file
     * @param {*} param
     */
    uploadToCloud: function uploadToCloud(file, param) {},

    /**
     * @returns {*}
     * @param {number[]} pattern
     * @param {number} iOSFeedbackVibration
     */
    vibrate: function vibrate(pattern, iOSFeedbackVibration) {},
    ready: new Promise(function (r) {
        r();
    }),
    env: {
        dialogInput: {},
        parameters: {},
        _parameters: {},
        browser: {
            name: 'firefox',
            version: '80',
            supportsWebP: false
        },
        language: 'en',
        site: {
            id: '77895-31707',
            locationId: 182906,
            locationPersonId: '143-58397',
            title: 'nboDev',
            language: 'de',
            tapps: [{
                id: 502162,
                showName: 'Verbindungen',
                internalName: 'Tapps502162',
                isSubTapp: false,
                sortId: -15001,
                customUrl: 'id/connections',
                isHiddenFromMenu: false,
                icon: 'ts-chayns',
                iconType: 0
            }, {
                id: -7,
                showName: 'chayns.iD',
                internalName: 'Tapps-2',
                isSubTapp: false,
                sortId: -10000,
                customUrl: 'tapp/-7',
                isHiddenFromMenu: false,
                icon: 'ts-fingerprint',
                iconType: 0
            }],
            facebookPageId: null,
            color: '#000000',
            colorMode: 1,
            version: '2.186',
            domain: 'nbodev.chayns.net',
            font: 1,
            environment: 'Staging',
            tapp: {
                id: 524377,
                showName: 'local cn-surface',
                internalName: 'Tapps524377',
                isSubTapp: false,
                sortId: 116,
                userGroupIds: [1],
                customUrl: 'localcn-surface',
                isHiddenFromMenu: false,
                icon: 'fa-exclamation-triangle',
                iconType: 0
            },
            disposition: {
                coverWide: false,
                barWide: true,
                docked: true,
                barOnTop: true,
                contentWide: false,
                coverDetached: false
            },
            headlineFontId: 0,
            url: 'https://nbodev.chayns.net/localcn-surface'
        },
        user: {
            name: '',
            firstName: '',
            lastName: '',
            id: 2062159,
            personId: '',
            tobitAccessToken: '',
            groups: [{
                id: 1,
                isActive: false
            }, {
                id: 75940,
                isActive: false
            }, {
                id: 76145,
                isActive: false
            }, {
                id: 76242,
                isActive: false
            }],
            isAuthenticated: true,
            adminMode: false,
            isAdmin: true
        },
        app: {
            flavor: undefined
        },
        device: {
            deviceAccessToken: undefined,
            dfaceVersion: undefined,
            fontScale: undefined,
            imei: undefined,
            languageId: undefined,
            minLogLevel: undefined,
            model: undefined,
            systemName: undefined,
            uid: undefined,
            version: undefined
        },
        isIOS: false,
        isAndroid: false,
        isWP: false,
        isMobile: false,
        isTablet: false,
        isApp: false,
        isBrowser: true,
        isDesktop: true,
        os: 'noOS',
        isChaynsnetRuntime: undefined,
        isChaynsWebMobile: false,
        isChaynsWebDesktop: true,
        isChaynsWeb: true,
        isChaynsParent: true,
        isMyChaynsApp: false,
        isWidget: false,
        isInFrame: false,
        isInFacebookFrame: false,
        appVersion: 2.186,
        debugMode: false,
        apiVersion: 4000
    },
    utils: {
        editor: {
            /**
             * @returns {undefined}
             */
            disable: function disable() {},

            /**
             * @returns {undefined}
             */
            enable: function enable() {},

            /**
             * @returns {undefined}
             */
            enableToolbarChange: function enableToolbarChange() {},
            logger: {
                /**
                 * @param {*} param1
                 * @param {*} param2
                 * @param {*} param3
                 */
                log: function log(param1, param2, param3) {},

                /**
                 * @param {number} level
                 */
                setLevel: function setLevel(level) {},
                level: 0
            }
        },
        createTappUrl: function createTappUrl(param) {},
        getJwtPayload: function getJwtPayload(param) {},
        getScaledImageUrl: function getScaledImageUrl(url, height, width, preventWebP) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isArray: function isArray(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isBLEAddress: function isBLEAddress(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isBlank: function isBlank(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isBoolean: function isBoolean(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isDate: function isDate(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isDeferred: function isDeferred(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isDefined: function isDefined(param) {},

        /**
         * @returns {boolean}
         */
        isDialogPermitted: function isDialogPermitted() {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isFormData: function isFormData(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isFormElement: function isFormElement(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isFunction: function isFunction(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isGUID: function isGUID(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isHex: function isHex(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isJwt: function isJwt(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isMacAddress: function isMacAddress(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isNumber: function isNumber(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isObject: function isObject(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isPermitted: function isPermitted(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isPresent: function isPresent(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isPromise: function isPromise(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isString: function isString(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isUUID: function isUUID(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isUndefined: function isUndefined(param) {},

        /**
         * @returns {boolean}
         * @param {*} param
         */
        isUrl: function isUrl(param) {},
        resetEnvironment: function resetEnvironment(param) {},
        setLevel: function setLevel(param) {},
        colors: {
            /**
             * @returns {string} color
             * @param {number} saturation
             * @param {string} hex
             */
            get: function get(saturation, hex) {},

            /**
             * @returns {string} color
             * @param {string} name
             */
            getColorFromPalette: function getColorFromPalette(name) {},

            /**
             * @returns {string} color
             * @param {string} hex1
             * @param {string} hex2
             * @param {string} saturation
             */
            mix: function mix(hex1, hex2, saturation) {}
        },
        ls: {
            /**
             * @returns {string} value
             * @param {string} key
             */
            get: function get(key) {},
            getPrefix: function getPrefix() {},

            /**
             * @param {string} key
             */
            remove: function remove(key) {},
            removeAll: function removeAll() {},

            /**
             * @param {string} key
             * @param {string} value
             */
            set: function set(key, value) {}
        },
        lang: {
            get: function get(param) {},
            init: function init(param) {},
            loadLib: function loadLib(p1, p2) {},
            renderTextString: function renderTextString(param) {}
        },
        translate: {
            init: function init() {}
        }
    },
    dialog: {
        /**
         * @param headline
         * @param text
         * @returns Promise
         */
        alert: function alert(headline, text) {},

        /**
         * @param headline
         * @param text
         * @param buttons
         * @returns Promise
         */
        confirm: function confirm(headline, text, buttons) {},

        /**
         * @param config
         * @returns Promise
         */
        input: function input(config) {},

        /**
         * @param config
         * @returns Promise
         */
        select: function select(config) {},

        /**
         * @param config
         * @returns Promise
         */
        date: function date(config) {},

        /**
         * @param config
         * @returns Promise
         */
        advancedDate: function advancedDate(config) {},

        /**
         * @param config
         * @returns Promise
         */
        mediaSelect: function mediaSelect(config) {},

        /**
         * @param config
         * @returns Promise
         */
        fileSelect: function fileSelect(config) {},

        /**
         * @param config
         * @returns Promise
         */
        iFrame: function iFrame(config) {},

        /**
         * @param {*} data
         * @param {boolean} isApiEvent
         * @returns Promise
         */
        sendData: function sendData(data, isApiEvent) {},

        /**
         * @param {function(*)} callback
         * @param {boolean} getApiEvents
         */
        addDialogDataListener: function addDialogDataListener(callback, getApiEvents) {},

        /**
         * @param {function(*)} callback
         * @param {boolean} getApiEvents
         */
        removeDialogDataListener: function removeDialogDataListener(callback, getApiEvents) {},

        /**
         * @param {*} result
         * @param register - internal param
         */
        setResult: function setResult(result, register) {},

        /**
         * @param {function(*)} callback
         */
        addDialogResultListener: function addDialogResultListener(callback) {},

        /**
         * @param {function(*)} callback
         */
        removeDialogResultListener: function removeDialogResultListener(callback) {},

        /**
         * @param {number} [buttonType=undefined]
         */
        close: function close(buttonType) {},

        /**
         * @param {boolean} disable - true to disable, false to enable
         * @param {number[]} buttonTypes
         */
        disableButtons: function disableButtons(disable, buttonTypes) {},
        buttonText: {
            YES: 'Yes',
            NO: 'No',
            OK: 'OK',
            CANCEL: 'Cancel'
        },
        buttonType: {
            CANCEL: -1,
            NEGATIVE: 0,
            POSITIVE: 1
        },
        selectType: {
            DEFAULT: 0,
            ICON: 1
        },
        dateType: {
            DATE: 1,
            TIME: 2,
            DATE_TIME: 3
        },
        inputType: {
            DEFAULT: 0,
            PASSWORD: 1,
            TEXTAREA: 2,
            INPUT: 3,
            NUMBER: 4
        },
        fileType: {
            IMAGE: 'image',
            VIDEO: 'video',
            AUDIO: 'audio',
            DOCUMENT: ['application/x-latex', 'application/x-tex', 'text/', 'application/json', 'application/pdf', 'application/msword', 'application/msexcel', 'application/mspowerpoint', 'application/vnd.ms-word', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument', 'application/vnd.oasis.opendocument']
        }
    },
    urlType: {
        WEB: 0,
        AR: 1
    },
    animationType: {
        DEFAULT: 0,
        BOTTOM: 1
    },
    cameryType: {
        AUTO: 0,
        BACK: 1,
        FRONT: 2
    },
    logoutType: {
        NORMAL: 0,
        FORCE: 1
    },
    loginState: {
        FACEBOOK: 0,
        T_WEB: 1,
        CANCEL: 2,
        ALREADY_LOGGED_IN: 3
    },
    tappEvent: {
        ON_SHOW: 0,
        ON_HIDE: 1,
        ON_REFRESH: 2
    },
    listeners: [null],
    floatingButtonPosition: {
        RIGHT: 0,
        CENTER: 1,
        LEFT: 2
    },
    storage: {
        get: function get(key, param) {},
        remove: function remove(key, param) {},
        set: function set(key, param1, param2, param3) {},
        accessMode: {
            PUBLIC: 0,
            PROTECTED: 1,
            PRIVATE: 2
        }
    },
    networkType: {
        NO_NETWORK: 0,
        NETWORK_TYPE_UNKNOWN: 1,
        IDEN: 2,
        GPRS: 3,
        EGDE: 4,
        CDMA_1xRTT: 5,
        CDMA_EVDO_0: 6,
        CDMA_EVDO_A: 7,
        CDMA_EVDO_B: 8,
        UMTS: 9,
        EHRPD: 10,
        HSDPA: 11,
        HSPA: 12,
        HSPAP: 13,
        HSUPA: 14,
        LTE: 15,
        WIFI: 16,
        ETHERNET: 17
    },
    sharingApp: {
        MAIL: 0,
        WHATSAPP: 1,
        FACEBOOK: 2,
        FACEBOOK_MESSENGER: 3,
        GOOGLE_PLUS: 4,
        TWITTER: 5
    },
    adminSwitchStatus: {
        ADMIN: 1,
        USER: 0
    },
    orientation: {
        DEFAULT: 0,
        PORTRAIT: 1,
        LANDSCAPE: 2,
        PORTRAIT_SENSOR: 3,
        LANDSCAPE_SENSOR: 4,
        PORTRAIT_REVERSE: 5,
        LANDSCAPE_REVERSE: 6
    },
    mimeType: {
        DOCUMENT: 0,
        AUDIO: 1,
        IMAGE: 2,
        VIDEO: 3
    },
    event: {
        addPushListener: function addPushListener(callback) {},
        removePushListener: function removePushListener(callback) {}
    },
    intercom: {
        /**
         * @returns {Promise<Response>}
         * @param {number} groupId
         * @param {Object} config
         * @param {string} config.text
         */
        sendMessageToGroup: function sendMessageToGroup(groupId, config) {},

        /**
         * @returns {Promise<Response>}
         * @param {Object} config
         * @param {string} config.text
         */
        sendMessageToPage: function sendMessageToPage(config) {},

        /**
         * @returns {Promise<Response>}
         * @param {number} userId
         * @param {Object} config
         * @param {string} config.text
         */
        sendMessageToUser: function sendMessageToUser(userId, config) {}
    },
    smartShop: {
        init: function init(config) {},
        offer: {
            getCategories: function getCategories() {},

            /**
             * @param {number} categoryId
             */
            getCategory: function getCategory(categoryId) {}
        },
        cart: {
            userId: {
                lastname: '',
                invoiceRequested: false,
                orderUid: '00000000-0000-4000-0000-000000000000',
                vouchers: [],
                userId: 0,
                topFlag: false,
                branchTipFactor: 0,
                cartPrice: 1,
                voucherList: [],
                personId: '000-00000',
                tipSum: 0,
                expires: 1000000000000,
                fullname: '',
                firstname: '',
                articles: [{
                    id: 0,
                    amount: 1
                }]
            },
            cartCount: 1,
            exp: 100000000000000,

            /**
             * @param {smartShopArticle} article
             */
            addArticle: function addArticle(article) {},

            /**
             * @param {smartShopArticle} article
             */
            removeArticle: function removeArticle(article) {},

            /**
             * @returns {Object}
             */
            get: function get() {},
            set: function set() {},
            remove: function remove() {},
            smartCheckout: function smartCheckout(config) {},
            addServerArticle: function addServerArticle() {},
            confirm: function confirm() {},
            create: function create() {},
            removeServerArticle: function removeServerArticle() {},
            removeTip: function removeTip() {},
            setTip: function setTip() {},
            toOrder: function toOrder() {}
        },
        tapp: {
            gotoCart: function gotoCart() {},
            gotoShop: function gotoShop() {},

            /**
             * @param {Object} config
             * @param {string} config.customShopUrl
             */
            configure: function configure(config) {},

            /**
             * @param {*} value
             */
            showFloatingButton: function showFloatingButton(value) {}
        },
        admin: {
            branch: {
                /**
                 * @param {string} field
                 * @param {string} value
                 */
                updateText: function updateText(_ref) {
                    var field = _ref.field,
                        value = _ref.value;
                }
            },
            accounting: function accounting() {},
            article: function article() {},
            group: function group() {},
            intercom: function intercom() {},
            option: function option() {},
            output: function output() {},
            processor: function processor() {},
            subscription: function subscription() {}
        },
        settings: {
            getProcessor: function getProcessor() {}
        },
        order: {
            getInternal: function getInternal() {},
            getPopular: function getPopular() {},
            addArticle: function addArticle() {},
            addClientArticle: function addClientArticle() {},
            cancel: function cancel() {},
            clearClientCar: function clearClientCar() {},
            confirm: function confirm() {},
            create: function create() {},
            createFromClientCart: function createFromClientCart() {},
            extendTtl: function extendTtl() {},
            getClientCart: function getClientCart() {},
            getClientOrderedArticles: function getClientOrderedArticles() {},
            getHistory: function getHistory() {},
            removeArticle: function removeArticle() {},
            setClientCart: function setClientCart() {}
        },
        branch: {
            addImage: function addImage() {},
            createBranchConfig: function createBranchConfig() {},
            getBranchConfig: function getBranchConfig() {},
            removeImage: function removeImage() {},
            updateBranch: function updateBranch() {},
            updateBranchConfig: function updateBranchConfig() {},
            updateBranchText: function updateBranchText() {},
            updateOpmOwner: function updateOpmOwner() {}
        },
        carousel: {
            isEnable: function isEnable() {}
        },
        groups: {
            get: function get() {}
        },
        payment: {
            getOpmStatus: function getOpmStatus() {},
            getTssmPaymentInfo: function getTssmPaymentInfo() {}
        },
        subscription: {
            getArticle: function getArticle() {}
        },
        user: {
            getAccountBalance: function getAccountBalance() {},
            getByNfc: function getByNfc() {},
            getByPersonId: function getByPersonId() {},
            getByQr: function getByQr() {},
            isStaff: function isStaff() {}
        },
        utils: {
            convertToClientArticle: function convertToClientArticle() {}
        }
    }
};
