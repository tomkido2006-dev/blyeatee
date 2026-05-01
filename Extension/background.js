self['addEventListener']('unhandledrejection', _0x4f716c => {
    _0x4f716c['reason'] && _0x4f716c['reason']['message'] === 'ABORT_SIGNAL' && _0x4f716c['preventDefault']();
}), importScripts('keywords.js');
let keepAliveInterval = null;

function startKeepAlive() {
    if (keepAliveInterval) return;
    keepAliveInterval = setInterval(() => {
        chrome['runtime']['getPlatformInfo'](() => {});
    }, 0x2 * 0x5236 + -0x2462 + -0x2 * 0xf31), console['log']('[BingAutoSearch] KeepAlive started');
}

function stopKeepAlive() {
    keepAliveInterval && (clearInterval(keepAliveInterval), keepAliveInterval = null, console['log']('[BingAutoSearch] KeepAlive stopped'));
}
const MOBILE_PROFILES = [{
        'name': 'iPhone 12 Pro Max',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/604.1 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1',
        'platform': 'iPhone',
        'width': 0x1ac,
        'height': 0x39e,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone 8 Plus',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x19e,
        'height': 0x2e0,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x4
    }, {
        'name': 'iPhone SE (3rd Gen)',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 26_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x177,
        'height': 0x29b,
        'r': 0x2,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone XS Max',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x19e,
        'height': 0x380,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x4
    }, {
        'name': 'iPhone 14 Pro',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/604.1 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1',
        'platform': 'iPhone',
        'width': 0x189,
        'height': 0x354,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone 14',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/604.1 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
        'platform': 'iPhone',
        'width': 0x186,
        'height': 0x34c,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone 13 mini',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 26_2 like Mac OS X) AppleWebKit/604.1 (KHTML, like Gecko) Version/26.2 Mobile/15E148 Safari/604.1',
        'platform': 'iPhone',
        'width': 0x177,
        'height': 0x32c,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone 13 Pro Max',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x1ac,
        'height': 0x39e,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone 17 Air',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 26_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.3 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x1a4,
        'height': 0x390,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone 7',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x177,
        'height': 0x29b,
        'r': 0x2,
        'tap': 0x5,
        'hc': 0x4
    }, {
        'name': 'iPhone 7',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.8 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x177,
        'height': 0x29b,
        'r': 0x2,
        'tap': 0x5,
        'hc': 0x4
    }, {
        'name': 'iPhone 17',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 26_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.2 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x192,
        'height': 0x36a,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }, {
        'name': 'iPhone 8 Plus',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_9 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x19e,
        'height': 0x2e0,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x4
    }, {
        'name': 'iPhone 14 Pro Max',
        'ua': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/605.1.15',
        'platform': 'iPhone',
        'width': 0x1ac,
        'height': 0x39e,
        'r': 0x3,
        'tap': 0x5,
        'hc': 0x6
    }],
    MOBILE_UA_RULE_ID = -0x13e3 + 0x1 * 0x17f2 + 0x6 * -0xad;
let searchState = {
    'isRunning': ![],
    'abortSignal': ![],
    'currentSearch': 0x0,
    'totalSearches': 0x0,
    'usedKeywords': [],
    'tabId': null,
    'dailySetMainTab': null,
    'dailySetSpawnedTabs': [],
    'currentPhase': 'desktop',
    'startTime': null,
    'completedTotal': 0x0,
    'spoofedUserAgent': 'edg',
    'settings': {
        'searchCount': 0x1e,
        'mobileSearchCount': 0x14,
        'searchDelayMin': 0x1b58,
        'searchDelayMax': 0x2ee0,
        'tabCloseDelayMin': 0xbb8,
        'tabCloseDelayMax': 0x1770,
        'searchMode': 'desktop',
        'searchStyle': 'typing',
        'tabActive': !![],
        'keywordLang': 'both',
        'viRatio': 0x7,
        'enRatio': 0x3,
        'autoDailyCheckIn': ![],
        'autoReadToEarn': ![]
    }
};
async function loadSettings() {
    const _0xdb9147 = await chrome['storage']['local']['get'](['settings', 'usedKeywords']);
    _0xdb9147['settings'] && (searchState['settings'] = {
        ...searchState['settings'],
        ..._0xdb9147['settings']
    }, _0xdb9147['settings']['mobileMode'] !== undefined && !_0xdb9147['settings']['searchMode'] && (searchState['settings']['searchMode'] = _0xdb9147['settings']['mobileMode'] ? 'mobile' : 'desktop', delete searchState['settings']['mobileMode']), _0xdb9147['settings']['searchDelay'] && !_0xdb9147['settings']['searchDelayMin'] && (searchState['settings']['searchDelayMin'] = _0xdb9147['settings']['searchDelay'], searchState['settings']['searchDelayMax'] = _0xdb9147['settings']['searchDelay'] + (-0x5fc + -0x58c * -0x1 + -0x47 * -0x48), delete searchState['settings']['searchDelay']), _0xdb9147['settings']['tabCloseDelay'] && !_0xdb9147['settings']['tabCloseDelayMin'] && (searchState['settings']['tabCloseDelayMin'] = _0xdb9147['settings']['tabCloseDelay'], searchState['settings']['tabCloseDelayMax'] = _0xdb9147['settings']['tabCloseDelay'] + (-0x173a + 0xa67 * -0x3 + 0x4227), delete searchState['settings']['tabCloseDelay'])), _0xdb9147['usedKeywords'] && (searchState['usedKeywords'] = _0xdb9147['usedKeywords']);
}
async function saveSettings() {
    await chrome['storage']['local']['set']({
        'settings': searchState['settings'],
        'usedKeywords': searchState['usedKeywords']
    });
}
let mobileOverrideListener = null;
let mobileModeWindowId = null;
let mobileModeTabId = null;
const mobileModePendingTabs = new Set();

async function getMobileModeContext() {
    if (mobileModeWindowId && mobileModeTabId) return {
        'windowId': mobileModeWindowId,
        'tabId': mobileModeTabId
    };
    try {
        const _0x2736a2 = await chrome['storage']['session']['get'](['mobileModeWindowId', 'mobileModeTabId']);
        mobileModeWindowId = _0x2736a2['mobileModeWindowId'] || null;
        mobileModeTabId = _0x2736a2['mobileModeTabId'] || null;
    } catch (_0x4aa817) {}
    return mobileModeWindowId && mobileModeTabId ? {
        'windowId': mobileModeWindowId,
        'tabId': mobileModeTabId
    } : null;
}

function isExtensionPageUrl(_0x4a47ec) {
    return !_0x4a47ec || _0x4a47ec === 'about:blank' || _0x4a47ec['startsWith']('chrome://') || _0x4a47ec['startsWith']('edge://') || _0x4a47ec['startsWith']('chrome-extension://');
}

async function rememberMobileModeWindow(_0x45b44f) {
    mobileModeWindowId = _0x45b44f['id'];
    mobileModeTabId = _0x45b44f['tabs']?.[0x0]?.['id'] || null;
    if (!mobileModeTabId) {
        const _0x38422d = await chrome['tabs']['query']({
            'windowId': mobileModeWindowId
        });
        mobileModeTabId = _0x38422d?.[0x0]?.['id'] || null;
    }
    await chrome['storage']['session']['set']({
        'mobileModeWindowId': mobileModeWindowId,
        'mobileModeTabId': mobileModeTabId
    });
}

async function clearMobileModeWindow() {
    mobileModeWindowId = null;
    mobileModeTabId = null;
    mobileModePendingTabs['clear']();
    try {
        await chrome['scripting']['unregisterContentScripts']({
            'ids': ['mobile-mode-link-bridge']
        });
    } catch (_0x561fa1) {}
    try {
        await chrome['storage']['session']['remove'](['mobileModeWindowId', 'mobileModeTabId']);
    } catch (_0x3e48ee) {}
}

async function enableMobileModeLinkBridge() {
    try {
        await chrome['scripting']['unregisterContentScripts']({
            'ids': ['mobile-mode-link-bridge']
        });
    } catch (_0x455591) {}
    await chrome['scripting']['registerContentScripts']([{
        'id': 'mobile-mode-link-bridge',
        'matches': ['*://*.bing.com/*', '*://*.live.com/*', '*://*.microsoftonline.com/*', '*://*.microsoft.com/*', '*://*.msn.com/*'],
        'js': ['mobileModeLinks.js'],
        'runAt': 'document_start'
    }]);
}

async function injectMobileModeLinkBridge() {
    if (!mobileModeTabId) return;
    try {
        await chrome['scripting']['executeScript']({
            'target': {
                'tabId': mobileModeTabId
            },
            'files': ['mobileModeLinks.js']
        });
    } catch (_0x5d9536) {
        console['warn']('[BingAutoSearch] Could not inject Mobile Mode link bridge yet:', _0x5d9536);
    }
}

async function keepUrlInMobileMode(_0x296088, _0x198f70) {
    const _0x33eaeb = await getMobileModeContext();
    if (!_0x33eaeb) return;
    if (isExtensionPageUrl(_0x198f70)) {
        mobileModePendingTabs['add'](_0x296088['id']);
        return;
    }
    try {
        await chrome['tabs']['update'](_0x33eaeb['tabId'], {
            'url': _0x198f70,
            'active': !![]
        });
        if (_0x296088['id'] !== _0x33eaeb['tabId']) await chrome['tabs']['remove'](_0x296088['id'])['catch'](() => {});
        await chrome['windows']['update'](_0x33eaeb['windowId'], {
            'focused': !![]
        })['catch'](() => {});
    } catch (_0x1e0709) {
        console['warn']('[BingAutoSearch] Could not keep link inside Mobile Mode:', _0x1e0709);
    }
}

chrome['tabs']['onCreated']['addListener'](_0x3db48d => {
    getMobileModeContext()['then'](_0x324e3c => {
        if (!_0x324e3c || _0x3db48d['id'] === _0x324e3c['tabId']) return;
        if (_0x3db48d['openerTabId'] === _0x324e3c['tabId'] || _0x3db48d['windowId'] === _0x324e3c['windowId']) {
            keepUrlInMobileMode(_0x3db48d, _0x3db48d['pendingUrl'] || _0x3db48d['url']);
        }
    });
});

chrome['tabs']['onUpdated']['addListener']((_0x36e34f, _0x4c7ed7, _0x329c43) => {
    if (!_0x4c7ed7['url']) return;
    getMobileModeContext()['then'](_0xf435bd => {
        if (!_0xf435bd || _0x36e34f === _0xf435bd['tabId']) return;
        if (mobileModePendingTabs['has'](_0x36e34f) || _0x329c43['openerTabId'] === _0xf435bd['tabId']) {
            mobileModePendingTabs['delete'](_0x36e34f);
            keepUrlInMobileMode(_0x329c43, _0x4c7ed7['url']);
        }
    });
});

chrome['tabs']['onRemoved']['addListener'](_0x26396e => {
    mobileModePendingTabs['delete'](_0x26396e);
    getMobileModeContext()['then'](_0x47f35a => {
        if (_0x47f35a && _0x26396e === _0x47f35a['tabId']) clearMobileModeWindow()['then'](() => disableMobileUA());
    });
});

chrome['windows']['onRemoved']['addListener'](_0x21ba58 => {
    getMobileModeContext()['then'](_0x1c4908 => {
        if (_0x1c4908 && _0x21ba58 === _0x1c4908['windowId']) clearMobileModeWindow()['then'](() => disableMobileUA());
    });
});

async function enableMobileUA() {
    searchState['settings']['mobileProfileIndex'] === undefined && (searchState['settings']['mobileProfileIndex'] = Math['floor'](Math['random']() * MOBILE_PROFILES['length']), saveSettings());
    const _0x49c47f = searchState['settings']['mobileProfileIndex'],
        _0x1ce8bf = MOBILE_PROFILES[_0x49c47f] || MOBILE_PROFILES[-0x26c9 * -0x1 + 0x5 * -0xd + -0x2688];
    console['log']('[BingAutoSearch] Enabling rotating mobile UA: ' + _0x1ce8bf['name'] + ' (Zero-Footprint Bridge sync)');
    try {
        await chrome['declarativeNetRequest']['updateDynamicRules']({
            'removeRuleIds': [MOBILE_UA_RULE_ID],
            'addRules': [{
                'id': MOBILE_UA_RULE_ID,
                'priority': 0x1,
                'action': {
                    'type': 'modifyHeaders',
                    'requestHeaders': [{
                        'header': 'User-Agent',
                        'operation': 'set',
                        'value': _0x1ce8bf['ua']
                    }, {
                        'header': 'Sec-CH-UA-Mobile',
                        'operation': 'set',
                        'value': '?1'
                    }, {
                        'header': 'Sec-CH-UA-Platform',
                        'operation': 'set',
                        'value': '\"iOS\"'
                    }, {
                        'header': 'Sec-CH-UA',
                        'operation': 'remove'
                    }, {
                        'header': 'Sec-CH-UA-Platform-Version',
                        'operation': 'remove'
                    }, {
                        'header': 'Sec-CH-UA-Full-Version-List',
                        'operation': 'remove'
                    }]
                },
                'condition': {
                    'requestDomains': ['bing.com', 'live.com', 'microsoftonline.com', 'microsoft.com', 'msn.com'],
                    'resourceTypes': ['main_frame', 'sub_frame', 'xmlhttprequest', 'script', 'stylesheet', 'image', 'other']
                }
            }]
        }), console['log']('[BingAutoSearch] Mobile UA headers enabled');
    } catch (_0x1833f1) {
        console['error']('[BingAutoSearch] Failed to enable mobile UA headers:', _0x1833f1);
    }
    try {
        await chrome['scripting']['unregisterContentScripts']({
            'ids': ['mobile-fingerprint-spoof']
        });
    } catch (_0x53a339) {}
    try {
        await chrome['scripting']['registerContentScripts']([{
            'id': 'mobile-fingerprint-spoof',
            'matches': ['*://*.bing.com/*', '*://*.live.com/*', '*://*.microsoftonline.com/*', '*://*.microsoft.com/*', '*://*.msn.com/*'],
            'js': ['mobileSpoof.js'],
            'runAt': 'document_start',
            'world': 'MAIN'
        }]), console['log']('[BingAutoSearch] Đã đăng ký mobileSpoof.js chạy cục bộ ở document_start (Sync Stealth)');
    } catch (_0x5a0824) {
        console['error']('[BingAutoSearch] Lỗi đăng ký mobileSpoof:', _0x5a0824);
    }
}
async function disableMobileUA() {
    try {
        await chrome['declarativeNetRequest']['updateDynamicRules']({
            'removeRuleIds': [MOBILE_UA_RULE_ID]
        }), console['log']('[BingAutoSearch] Mobile UA disabled');
    } catch (_0x4c212d) {
        console['error']('[BingAutoSearch] Failed to disable mobile UA:', _0x4c212d);
    }
    try {
        await chrome['scripting']['unregisterContentScripts']({
        'ids': ['mobile-fingerprint-spoof']
    }), console['log']('[BingAutoSearch] Mobile override script unregistered');
    } catch (_0x1c2bff) {}
    try {
        await chrome['scripting']['unregisterContentScripts']({
            'ids': ['mobile-mode-link-bridge']
        });
    } catch (_0x552c30) {}
}
async function openMobileMode() {
    if (searchState['isRunning']) throw new Error('SEARCH_RUNNING');
    await loadSettings();
    searchState['settings'] = {
        ...searchState['settings'],
        'searchMode': 'mobile'
    };
    searchState['currentPhase'] = 'mobile';
    await saveSettings();
    await enableMobileUA();
    const _0x269fb6 = await chrome['windows']['create']({
        'url': 'https://www.bing.com/',
        'type': 'popup',
        'width': 0x1ae,
        'height': 0x35c,
        'focused': !![]
    });
    await rememberMobileModeWindow(_0x269fb6);
    await enableMobileModeLinkBridge();
    await injectMobileModeLinkBridge();
    broadcastStatus();
    return _0x269fb6;
}
async function clearBingSession() {
    try {
        await chrome['browsingData']['remove']({
            'origins': ['https://www.bing.com']
        }, {
            'cookies': !![]
        }), console['log']('[BingAutoSearch] Cleared Bing cookies only');
    } catch (_0x4bb519) {
        console['error']('[BingAutoSearch] Failed to clear Bing session:', _0x4bb519);
    }
}
async function checkBingLogin() {
    console['log']('[BingAutoSearch] Opening Bing login to re-authenticate...');
    const _0x2727aa = 'https://www.bing.com/fd/auth/signin?action=interactive&provider=windows_live_id&return_url=https%3A%2F%2Fwww.bing.com%2F',
        _0x548829 = await chrome['tabs']['create']({
            'url': _0x2727aa,
            'active': !![]
        });
    await waitForTabLoad(_0x548829['id']), console['log']('[BingAutoSearch] Đang luồn qua các cửa ải Đăng nhập (Passkeys, Duy trì phiên)...');
    for (let _0xb9e99 = 0x1283 + 0xc8d + 0x7 * -0x470; _0xb9e99 < -0x5b * -0x21 + -0x2c * -0x72 + 0x3 * -0xa6c; _0xb9e99++) {
        if (!searchState['isRunning']) break;
        try {
            const _0x41b22e = await chrome['scripting']['executeScript']({
                'target': {
                    'tabId': _0x548829['id']
                },
                'func': () => {
                    const _0x23e0c5 = window['location']['hostname'],
                        _0x5d2647 = window['location']['pathname'];
                    if (_0x23e0c5['includes']('login.live.com') || _0x23e0c5['includes']('login.microsoftonline.com') || _0x23e0c5['includes']('login.microsoft.com')) {
                        let _0x5e6d9c = document['querySelector']('#idBtn_Back, #cancelLink, #CancelLinkButton, a[name=\"Cancel\"], #btnAskLater');
                        if (!_0x5e6d9c) {
                            const _0x572e08 = Array['from'](document['querySelectorAll']('button, a, input[type=\"button\"], input[type=\"submit\"]')),
                                _0x30de22 = ['hủy', 'cancel', 'bỏ qua', 'để sau', 'không, cảm ơn', 'no thanks', 'skip', 'not now'];
                            _0x5e6d9c = _0x572e08['find'](_0x31295f => {
                                const _0xe8e42e = (_0x31295f['innerText'] || _0x31295f['value'] || '')['toLowerCase']()['trim']();
                                return _0x30de22['some'](_0x16723f => _0xe8e42e === _0x16723f || _0xe8e42e['includes'](_0x16723f));
                            });
                        }
                        if (_0x5e6d9c) _0x5e6d9c['click']();
                        else {
                            if (_0x5d2647['includes']('/fido/create')) return window['location']['href'] = 'https://www.bing.com/', !![];
                        }
                        return ![];
                    }
                    return !![];
                }
            });
            if (_0x41b22e?.[0x1986 * -0x1 + -0x663 + 0x48f * 0x7]?.['result'] === !![]) break;
        } catch (_0x4eaa70) {}
        await delay(-0x136f + 0xd3 * 0xb + 0x122e);
    }
    try {
        await chrome['tabs']['remove'](_0x548829['id']);
    } catch (_0x10a706) {}
    await delay(0x221 + -0xf3f + 0x1106), console['log']('[BingAutoSearch] Verifying login on bing.com...');
    const _0x2d286a = await chrome['tabs']['create']({
        'url': 'https://www.bing.com/',
        'active': !![]
    });
    await waitForTabLoad(_0x2d286a['id']), await delay(0x2307 + 0x1 * 0x112b + -0x1ee * 0x17);
    let _0x89bb5b = ![],
        _0x25addd = 0x1766 + 0xd94 + 0x127d * -0x2;
    const _0xaa2079 = -0x1294 + -0x13b9 + -0x265 * -0x10;
    while (!_0x89bb5b && _0x25addd < _0xaa2079 && searchState['isRunning']) {
        try {
            const _0x30674f = await chrome['scripting']['executeScript']({
                'target': {
                    'tabId': _0x2d286a['id']
                },
                'func': () => {
                    const _0x16068e = document['querySelector']('#id_rc'),
                        _0x75738 = document['querySelector']('#id_n'),
                        _0x830cd2 = document['querySelector']('#id_p'),
                        _0x33694d = document['querySelector']('.id_avatar, .b_idOpen'),
                        _0x4286e3 = document['querySelector']('.points-container, .bnp_btn_accept'),
                        _0x5b1bf0 = document['querySelector']('.b_headBnr .id_button'),
                        _0x1861ff = document['querySelector']('a[href*=\"signin\"], #id_s'),
                        _0x2a2efc = _0x16068e || _0x75738 || _0x830cd2 || _0x33694d || _0x4286e3 || _0x5b1bf0;
                    if (_0x2a2efc) return {
                        'loggedIn': !![],
                        'rewards': _0x16068e?.['textContent']?.['trim']() || _0x4286e3?.['textContent']?.['trim']() || ''
                    };
                    if (!_0x1861ff && document['readyState'] === 'complete') return {
                        'loggedIn': !![],
                        'rewards': '(no element found but no sign-in either)'
                    };
                    return {
                        'loggedIn': ![]
                    };
                }
            });
            if (_0x30674f?.[0x1df0 + -0x11c3 + -0x40f * 0x3]?.['result']?.['loggedIn']) {
                _0x89bb5b = !![], console['log']('[BingAutoSearch] ✅ Verified login: ' + _0x30674f[0x684 + -0x25f0 + 0x1f6c]['result']['rewards']);
                break;
            }
        } catch (_0x3fae79) {}
        _0x25addd++, console['log']('[BingAutoSearch] ⏳ Checking login... (' + _0x25addd + '/' + _0xaa2079 + ')'), await delay(0x93c + -0x1c0d + 0x1 * 0x1e89);
    }
    try {
        await chrome['tabs']['remove'](_0x2d286a['id']);
    } catch (_0x522fe2) {}
    if (!_0x89bb5b) return console['log']('[BingAutoSearch] ❌ Could not verify login, will stop current progress.'), ![];
    return !![];
}

function getRandomKeyword() {
    let _0x581869 = searchState['settings']['keywordLang'] || 'both';
    if (_0x581869 === 'custom') {
        const _0x24c32a = searchState['settings']['viRatio'] || 0xbef + -0x1 * -0x2187 + 0x2d6f * -0x1,
            _0x4fdd58 = searchState['settings']['enRatio'] || -0x1c54 + -0x21df * 0x1 + 0x1f1b * 0x2,
            _0xea74bc = _0x24c32a + _0x4fdd58;
        _0x581869 = Math['random']() < _0x24c32a / _0xea74bc ? 'vi' : 'en';
    }
    const _0x47cabc = generateUniqueKeyword(searchState['usedKeywords'], _0x581869);
    console['log']('[BingAutoSearch] Lang=' + searchState['settings']['keywordLang'] + ' → filter=' + _0x581869 + ' → \"' + _0x47cabc + '\"'), searchState['usedKeywords']['push'](_0x47cabc);
    const _0x1d5c81 = searchState['settings']['keywordLang'] === 'custom' ? 'both' : _0x581869,
        _0x159caf = getTotalKeywordCount(_0x1d5c81),
        _0x34bd40 = Math['min'](0x1299 + -0x18aa + 0x805, Math['floor'](_0x159caf * (-0x202a + -0x81a + 0x1422 * 0x2 + 0.8)));
    if (searchState['usedKeywords']['length'] > _0x34bd40) {
        const _0x4d2ded = Math['min'](-0x133 * 0xe + 0x1e0a + -0xc78, Math['floor'](_0x159caf * (-0x36 * -0x9 + -0x16c0 + 0x14da + 0.3)));
        searchState['usedKeywords'] = searchState['usedKeywords']['slice'](-_0x4d2ded), console['log']('[BingAutoSearch] Storage Limit Triggered: Keywords array trimmed (kept=' + searchState['usedKeywords']['length'] + ' recent items)');
    }
    return saveSettings(), _0x47cabc;
}

function getRandomDelay(_0x5132bf, _0x24def0) {
    return Math['floor'](Math['random']() * (_0x24def0 - _0x5132bf + (0x5 * 0x246 + -0xdc4 * -0x2 + 0x3 * -0xcf7))) + _0x5132bf;
}
async function performSearch() {
    if (!searchState['isRunning']) {
        broadcastStatus();
        return;
    }
    if (searchState['currentSearch'] >= searchState['totalSearches']) {
        if (searchState['settings']['searchMode'] === 'both' && searchState['currentPhase'] === 'desktop') {
            searchState['currentPhase'] = 'mobile', searchState['currentSearch'] = 0x4ef + -0x14 * 0x155 + 0x15b5 * 0x1, searchState['totalSearches'] = searchState['settings']['mobileSearchCount'] || 0x4 * -0x5ae + -0x41d * 0x4 + 0x2740, console['log']('[BingAutoSearch] Clearing Bing session before mobile phase...'), await clearBingSession(), await enableMobileUA(), console['log']('[BingAutoSearch] Switching to Mobile phase...'), broadcastStatus();
            const _0x1d60d3 = await checkBingLogin();
            if (!_0x1d60d3) {
                console['error']('[BingAutoSearch] ❌ Login failed after phase switch. Stopping.'), broadcastError('Đăng nhập thất bại khi chuyển Mobile. Dừng lại.'), stopSearch();
                return;
            }
            setTimeout(() => performSearch(), -0x1b * 0x117 + 0x2f5 + 0x1e60);
            return;
        }
        completeSearchSequence();
        return;
    }
    const _0x37bd3e = getRandomKeyword();
    searchState['currentSearch']++, broadcastStatus();
    const _0x4b8f9c = searchState['settings']['searchStyle'] || 'typing',
        _0x429c5f = searchState['settings']['tabActive'] === ![];
    try {
        if (searchState['currentSearch'] === 0x4f * 0x11 + 0x1 * 0x4e5 + -0x5 * 0x207 && searchState['currentPhase'] === 'desktop') console['log']('[BingAutoSearch] 🔍 First search via default engine: \"' + _0x37bd3e + '\"'), await performDefaultEngineSearch(_0x37bd3e);
        else _0x4b8f9c === 'direct' ? (console['log']('[BingAutoSearch] ⚡ Direct search #' + searchState['currentSearch'] + ': \"' + _0x37bd3e + '\"' + (_0x429c5f ? ' (background)' : '')), await performDirectSearch(_0x37bd3e)) : (console['log']('[BingAutoSearch] ⌨️ Typing search #' + searchState['currentSearch'] + ': \"' + _0x37bd3e + '\"'), await performHumanSearch(_0x37bd3e));
        searchState['completedTotal']++;
    } catch (_0x3aaecb) {
        console['error']('[BingAutoSearch] Search error:', _0x3aaecb);
        if (searchState['tabId']) {
            try {
                await chrome['tabs']['remove'](searchState['tabId']);
            } catch (_0x2356ce) {}
            searchState['tabId'] = null;
        }
        scheduleNextSearch();
    }
}
async function performDefaultEngineSearch(_0x210e7c) {
    let _0x53af2f = null;
    if (searchState['settings']['tabActive'] === ![]) try {
        const [_0x2d5b16] = await chrome['tabs']['query']({
            'active': !![],
            'lastFocusedWindow': !![]
        });
        if (_0x2d5b16) _0x53af2f = _0x2d5b16['id'];
    } catch (_0x257301) {}
    await chrome['search']['query']({
        'text': _0x210e7c,
        'disposition': 'NEW_TAB'
    });
    if (_0x53af2f) try {
        await chrome['tabs']['update'](_0x53af2f, {
            'active': !![]
        });
    } catch (_0x481be2) {}
    let _0x57f484 = null;
    for (let _0x1a38c3 = 0xc0b * -0x1 + -0x25ec * 0x1 + 0x1 * 0x31f7; _0x1a38c3 < -0xa25 * -0x1 + -0x1 * 0x16af + 0x7 * 0x1cb; _0x1a38c3++) {
        await delay(0x47 * -0x17 + 0x1 * -0x1c6c + 0x26b5);
        if (_0x53af2f) {
            const _0x16765f = await chrome['tabs']['query']({});
            _0x57f484 = _0x16765f['find'](_0x43937a => _0x43937a['id'] !== _0x53af2f && _0x43937a['url'] && _0x43937a['url']['includes']('bing.com'));
        } else {
            const _0x33a609 = await chrome['tabs']['query']({
                'active': !![],
                'lastFocusedWindow': !![]
            });
            _0x57f484 = _0x33a609[0x8b * -0x17 + 0x5a2 + 0x3 * 0x249];
        }
        if (_0x57f484) break;
        console['log']('[BingAutoSearch] Search tab not found, retrying... (' + (_0x1a38c3 + (-0x1424 + 0x1 * 0x2cf + -0x8ab * -0x2)) + '/3)');
    }
    _0x57f484 ? searchState['tabId'] = _0x57f484['id'] : console['warn']('[BingAutoSearch] Could not find search tab after 3 attempts');
    searchState['tabId'] && await waitForTabLoad(searchState['tabId']);
    if (!searchState['isRunning']) {
        if (searchState['tabId']) try {
            await chrome['tabs']['remove'](searchState['tabId']);
        } catch (_0x15ccd1) {}
        return;
    }
    const _0x5c5381 = getRandomDelay(searchState['settings']['tabCloseDelayMin'], searchState['settings']['tabCloseDelayMax']);
    console['log']('[BingAutoSearch] Default engine results loaded. Close in ' + (_0x5c5381 / (0x58f + 0xcc7 * 0x3 + -0x4 * 0x9ff))['toFixed'](-0x1af * 0xc + 0xa46 + 0x9ef) + 's');
    if (searchState['tabId'] && await isTabAlive(searchState['tabId'])) try {
        const _0xb26ef = await chrome['scripting']['executeScript']({
            'target': {
                'tabId': searchState['tabId']
            },
            'func': () => navigator['userAgent']
        });
        _0xb26ef && _0xb26ef[-0x12db + -0x5f6 + 0x1 * 0x18d1] && _0xb26ef[-0x903 + 0x1012 + -0x70f]['result'] && (searchState['spoofedUserAgent'] = _0xb26ef[-0xb45 + 0xc5d + -0x8 * 0x23]['result'], chrome['storage']['local']['set']({
            'savedSpoofedUA': searchState['spoofedUserAgent']
        })), await chrome['scripting']['executeScript']({
            'target': {
                'tabId': searchState['tabId']
            },
            'func': () => {
                const _0x5d4344 = Math['min'](document['body']['scrollHeight'], -0x1 * -0x201d + -0x7 * 0x158 + -0xee5),
                    _0x15044a = 0x208f * 0x1 + -0x2492 + 0x405 + Math['floor'](Math['random']() * (0x86 * 0x1f + 0x2 * 0x1319 + -0x3669));
                let _0x14156e = -0x1 * 0x1feb + -0x1 * -0x1ad8 + 0x513;

                function _0x15968e() {
                    _0x14156e < _0x15044a && (window['scrollTo']({
                        'top': Math['floor'](_0x5d4344 / _0x15044a * (_0x14156e + (0x1537 + -0x785 + -0xdb1))) + Math['floor'](Math['random']() * (0x1246 + -0x754 + 0x2 * -0x551)) - (-0x9e4 + -0x1a2f + -0x7 * -0x52d),
                        'behavior': 'smooth'
                    }), _0x14156e++, setTimeout(_0x15968e, -0x2593 + 0x23bb + 0x430 + Math['floor'](Math['random']() * (-0xf09 + 0xa05 + 0x824))));
                }
                _0x15968e();
            }
        });
    } catch (_0x47378d) {
        console['error']('[BingAutoSearch] Scroll injection error/timeout (ignoring):', _0x47378d);
    }
    await delay(_0x5c5381), closeTabAndContinue();
}
async function performDirectSearch(_0x137667) {
    const _0x2fcbc1 = buildBingSearchUrl(_0x137667),
        _0x4caa0c = searchState['settings']['tabActive'] !== ![],
        _0x326aaf = await chrome['tabs']['create']({
            'url': _0x2fcbc1,
            'active': _0x4caa0c
        });
    searchState['tabId'] = _0x326aaf['id'], console['log']('[BingAutoSearch] ⚡ Direct search: \"' + _0x137667 + '\"'), await waitForTabLoad(_0x326aaf['id']);
    if (!searchState['isRunning']) {
        try {
            await chrome['tabs']['remove'](_0x326aaf['id']);
        } catch (_0x30b0c3) {}
        return;
    }
    const _0x9e2e7c = getRandomDelay(searchState['settings']['tabCloseDelayMin'], searchState['settings']['tabCloseDelayMax']);
    console['log']('[BingAutoSearch] Results loaded. Close in ' + (_0x9e2e7c / (0x125 * 0x1 + 0x22b0 + 0x1fed * -0x1))['toFixed'](0x657 + 0x6 * -0x566 + 0x1a0e) + 's');
    if (await isTabAlive(_0x326aaf['id'])) try {
        const _0x501924 = await chrome['scripting']['executeScript']({
            'target': {
                'tabId': _0x326aaf['id']
            },
            'func': () => navigator['userAgent']
        });
        _0x501924 && _0x501924[-0xde9 + 0x1ee9 * -0x1 + -0x2 * -0x1669] && _0x501924[0x2451 + -0x1 * 0x232f + -0x1 * 0x122]['result'] && (searchState['spoofedUserAgent'] = _0x501924[0x1ebc + -0x8e + 0x1 * -0x1e2e]['result'], chrome['storage']['local']['set']({
            'savedSpoofedUA': searchState['spoofedUserAgent']
        })), await chrome['scripting']['executeScript']({
            'target': {
                'tabId': _0x326aaf['id']
            },
            'func': () => {
                const _0x42e3d8 = Math['min'](document['body']['scrollHeight'], -0x624 * 0x3 + -0xac0 * 0x3 + 0x3a7c),
                    _0x26ddfd = -0x1632 + -0x5 * -0x293 + 0x955 + Math['floor'](Math['random']() * (-0x1 * 0x16f0 + -0x195c + 0x304f));
                let _0x216084 = -0x70 * -0x9 + -0xa86 + -0x119 * -0x6;

                function _0x15fa42() {
                    _0x216084 < _0x26ddfd && (window['scrollTo']({
                        'top': Math['floor'](_0x42e3d8 / _0x26ddfd * (_0x216084 + (0x32c + 0x9 * -0x447 + 0x2354))) + Math['floor'](Math['random']() * (-0x7f9 + -0x1df * 0xc + 0xb7 * 0x2b)) - (-0x23dc + 0x58c + 0x1e78),
                        'behavior': 'smooth'
                    }), _0x216084++, setTimeout(_0x15fa42, -0x1985 + 0x322 + -0x18bb * -0x1 + Math['floor'](Math['random']() * (0x242d + 0x20 + 0x212d * -0x1))));
                }
                _0x15fa42();
            }
        });
    } catch (_0x31fac5) {
        console['error']('[BingAutoSearch] Scroll injection error/timeout (ignoring):', _0x31fac5);
    }
    await delay(_0x9e2e7c), closeTabAndContinue();
}

function executeScriptWithTimeout(_0x26a05e, _0x21085b = 0x8b2c + 0x43c5 + -0x59c1) {
    return Promise['race']([chrome['scripting']['executeScript'](_0x26a05e), new Promise((_0x4819ea, _0x3344fd) => setTimeout(() => _0x3344fd(new Error('executeScript timeout')), _0x21085b))]);
}

function buildBingSearchUrl(_0x1be141) {
    const _0x560f31 = Array['from'](crypto['getRandomValues'](new Uint8Array(-0x1c79 + -0x21d * -0x4 + 0x1415)))['map'](_0x5e08e8 => _0x5e08e8['toString'](-0x90d + -0x25d6 + 0x2ef3)['padStart'](-0xb12 + -0x16e7 + -0x21fb * -0x1, '0'))['join']('')['toUpperCase'](),
        _0x24ee26 = [-0x2e3 * -0x1 + 0x1 * 0x1183 + 0x1da * -0xb, -0x23 * -0x25 + -0xe8 * 0x20 + 0x3ff * 0x6, -0x1d48 + 0xe7 + 0x1e5 * 0xf][Math['floor'](Math['random']() * (-0x1324 + 0x1 * 0xe11 + 0x516))],
        _0x16095e = _0x24ee26 + '-' + _0x1be141['length'],
        _0x34c98e = new URLSearchParams();
    _0x34c98e['set']('q', _0x1be141), _0x34c98e['set']('form', 'QBLH'), _0x34c98e['set']('sp', '-1'), _0x34c98e['set']('ghc', '1'), _0x34c98e['set']('lq', '0'), _0x34c98e['set']('pq', _0x1be141['toLowerCase']()), _0x34c98e['set']('sc', _0x16095e), _0x34c98e['set']('qs', 'n'), _0x34c98e['set']('sk', ''), _0x34c98e['set']('cvid', _0x560f31);
    let _0x55e5a5 = 'https://www.bing.com/search?' + _0x34c98e['toString']();
    return searchState['currentPhase'] === 'mobile' && searchState['settings']['mobileProfileIndex'] !== undefined && (_0x55e5a5 += '#_e=' + searchState['settings']['mobileProfileIndex']), _0x55e5a5;
}
async function performHumanSearch(_0x137d7d) {
    const _0xe3da64 = searchState['settings']['tabActive'] !== ![];
    let _0x2d241a = 'https://www.bing.com/';
    searchState['currentPhase'] === 'mobile' && searchState['settings']['mobileProfileIndex'] !== undefined && (_0x2d241a += '#_e=' + searchState['settings']['mobileProfileIndex']);
    const _0x4898b3 = await chrome['tabs']['create']({
        'url': _0x2d241a,
        'active': _0xe3da64
    });
    searchState['tabId'] = _0x4898b3['id'], console['log']('[BingAutoSearch] Opened bing.com | keyword: \"' + _0x137d7d + '\"'), await waitForTabLoad(_0x4898b3['id']);
    if (!searchState['isRunning']) {
        try {
            await chrome['tabs']['remove'](_0x4898b3['id']);
        } catch (_0x3429b4) {}
        scheduleNextSearch();
        return;
    }
    await delay(getRandomDelay(-0xb81 + -0x1 * 0xb3b + 0x37 * 0x7c, -0x1857 + -0x29b * 0x5 + 0x2d2e));
    if (!searchState['isRunning']) {
        try {
            await chrome['tabs']['remove'](_0x4898b3['id']);
        } catch (_0x2b2b65) {}
        scheduleNextSearch();
        return;
    }
    if (!await isTabAlive(_0x4898b3['id'])) {
        scheduleNextSearch();
        return;
    }
    try {
        const _0x33e7b9 = await executeScriptWithTimeout({
            'target': {
                'tabId': _0x4898b3['id']
            },
            'func': () => navigator['userAgent']
        });
        _0x33e7b9 && _0x33e7b9[0x5e * 0x49 + -0x18be + 0x2 * -0x108] && _0x33e7b9[0x1d6f + 0x1bfa + -0x3969]['result'] && (searchState['spoofedUserAgent'] = _0x33e7b9[0x6 * -0x28 + -0xe * -0x1c4 + -0x17c8]['result'], chrome['storage']['local']['set']({
            'savedSpoofedUA': searchState['spoofedUserAgent']
        })), await executeScriptWithTimeout({
            'target': {
                'tabId': _0x4898b3['id']
            },
            'func': () => {
                const _0x1e43bf = document['querySelector']('#sb_form_q') || document['querySelector']('input[name=\"q\"]') || document['querySelector']('textarea[name=\"q\"]');
                if (!_0x1e43bf) return;
                const _0x5a2e6e = _0x1e43bf['getBoundingClientRect'](),
                    _0x44d1e3 = _0x5a2e6e['left'] + _0x5a2e6e['width'] / (-0x2 * -0x75b + -0x1123 + 0x26f) + (Math['random']() * (-0xa6c + -0xe03 + -0x4e7 * -0x5) - (0x131e + 0x263b + -0x394f)),
                    _0x5867ae = _0x5a2e6e['top'] + _0x5a2e6e['height'] / (-0x10a8 + -0x136d + 0x1 * 0x2417) + (Math['random']() * (0x929 + -0x1f10 + 0x15ed * 0x1) - (-0x78 * -0x1f + 0x2192 + -0x3017)),
                    _0x4787bc = Math['random']() * window['innerWidth'],
                    _0x1efa1e = Math['random']() * window['innerHeight'] * (-0x1b77 + -0x1e9c + -0x3a13 * -0x1 + 0.5),
                    _0x4c78a2 = _0x4787bc + (_0x44d1e3 - _0x4787bc) * (0x20e * -0x11 + -0x7b8 * 0x4 + 0x20e7 * 0x2 + 0.3) + (Math['random']() * (0xc87 * 0x1 + 0x2e1 * 0x7 + -0x1025 * 0x2) - (-0x1 * -0x1a05 + 0x49 * 0x19 + 0x57e * -0x6)),
                    _0xddf9c5 = _0x1efa1e + (_0x5867ae - _0x1efa1e) * (0x307 + 0x2010 + -0xd * 0x2b3 + 0.1) + (Math['random']() * (-0x11e * -0x1e + -0x2 * -0x378 + 0xa09 * -0x4) - (-0xe5d + 0x26 * -0xcb + -0x47 * -0xa1)),
                    _0x378607 = _0x4787bc + (_0x44d1e3 - _0x4787bc) * (0x150f * 0x1 + 0x10c1 + -0x16 * 0x1b8 + 0.7) + (Math['random']() * (0xcf * -0x4 + 0x35 * -0x81 + 0x1e2d) - (-0x17a * 0x7 + -0xbb9 * -0x1 + -0x145)),
                    _0x8fc1f0 = _0x1efa1e + (_0x5867ae - _0x1efa1e) * (-0x8 * 0x2f2 + 0x1f4a + -0x7ba + 0.9) + (Math['random']() * (-0x1b * -0xb5 + -0x18f4 + 0x605) - (0xb6b + -0x251c + -0x3 * -0x897)),
                    _0x8cc12e = -0x9d2 * -0x3 + -0x1686 + -0x6e1 + Math['floor'](Math['random']() * (0x25ab + 0x6b * -0x3e + -0xbb7));
                let _0x25797c = -0x23 * -0x7 + -0x2a7 * -0xe + -0x7 * 0x571;

                function _0x9fd9bd(_0x49959a, _0x275c71, _0x56431b, _0x1ecee1, _0x3770cf) {
                    const _0x2b87d6 = -0xb1f + -0x179 * -0x1a + -0x2 * 0xd95 - _0x49959a;
                    return _0x2b87d6 * _0x2b87d6 * _0x2b87d6 * _0x275c71 + (-0x1d5 * -0x11 + -0x16fc * -0x1 + 0x2 * -0x1b0f) * _0x2b87d6 * _0x2b87d6 * _0x49959a * _0x56431b + (0x4f * -0x59 + -0x1938 + 0x34b2) * _0x2b87d6 * _0x49959a * _0x49959a * _0x1ecee1 + _0x49959a * _0x49959a * _0x49959a * _0x3770cf;
                }

                function _0x1eb6c8() {
                    if (_0x25797c <= _0x8cc12e) {
                        const _0x3d7ad1 = _0x25797c / _0x8cc12e,
                            _0x689953 = _0x9fd9bd(_0x3d7ad1, _0x4787bc, _0x4c78a2, _0x378607, _0x44d1e3),
                            _0x5821dd = _0x9fd9bd(_0x3d7ad1, _0x1efa1e, _0xddf9c5, _0x8fc1f0, _0x5867ae);
                        document['elementFromPoint'](_0x689953, _0x5821dd)
                            ?.['dispatchEvent'](new MouseEvent('mousemove', {
                                'clientX': _0x689953,
                                'clientY': _0x5821dd,
                                'bubbles': !![]
                            })), _0x25797c++, setTimeout(_0x1eb6c8, -0x2687 + 0x2 * -0x92c + -0xef * -0x3d + Math['floor'](Math['random']() * (-0x6fa * 0x3 + 0x15 * 0x151 + -0xb * 0x9a)));
                    } else _0x1e43bf['dispatchEvent'](new MouseEvent('mousedown', {
                        'clientX': _0x44d1e3,
                        'clientY': _0x5867ae,
                        'bubbles': !![]
                    })), _0x1e43bf['dispatchEvent'](new MouseEvent('mouseup', {
                        'clientX': _0x44d1e3,
                        'clientY': _0x5867ae,
                        'bubbles': !![]
                    })), _0x1e43bf['dispatchEvent'](new MouseEvent('click', {
                        'clientX': _0x44d1e3,
                        'clientY': _0x5867ae,
                        'bubbles': !![]
                    })), _0x1e43bf['focus']();
                }
                _0x1eb6c8();
            }
        });
    } catch (_0x408d41) {}
    await delay(getRandomDelay(0x1ec + -0x66b * -0x4 + -0x15c * 0x12, -0x8 * -0x1b5 + -0x153b + -0xc43 * -0x1));
    if (!searchState['isRunning']) {
        try {
            await chrome['tabs']['remove'](_0x4898b3['id']);
        } catch (_0x310de5) {}
        scheduleNextSearch();
        return;
    }
    const _0x5bbcd1 = getRandomDelay(-0x2 * -0x11ba + -0xd9a + -0x159e, -0x1e16 + -0x1f * 0x78 + 0x2 * 0x168b),
        _0x19977d = buildBingSearchUrl(_0x137d7d);
    if (!await isTabAlive(_0x4898b3['id'])) {
        scheduleNextSearch();
        return;
    }
    try {
        await executeScriptWithTimeout({
            'target': {
                'tabId': _0x4898b3['id']
            },
            'world': 'MAIN',
            'func': (_0x4ef1e3, _0x137a81, _0x216772) => {
                const _0x4f427e = document['querySelector']('#sb_form_q') || document['querySelector']('input[name=\"q\"]') || document['querySelector']('textarea[name=\"q\"]');
                if (!_0x4f427e) {
                    window['location']['href'] = _0x216772;
                    return;
                }
                const _0x26a3df = _0x4f427e['getBoundingClientRect'](),
                    _0x52b815 = _0x26a3df['left'] + _0x26a3df['width'] / (0x3 * 0x793 + 0x2 * 0x12e + -0x1913),
                    _0x1acb58 = _0x26a3df['top'] + _0x26a3df['height'] / (0x119 * 0xf + -0x1 * 0x25d3 + -0xa * -0x223);
                ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']['forEach'](_0xedf265 => {
                    _0x4f427e['dispatchEvent'](new MouseEvent(_0xedf265, {
                        'clientX': _0x52b815,
                        'clientY': _0x1acb58,
                        'bubbles': !![],
                        'cancelable': !![],
                        'view': window
                    }));
                }), _0x4f427e['value'] = '', _0x4f427e['focus']();
                let _0x50bf76 = ![],
                    _0x153a48 = ![];
                const _0xc857a = Math['max'](_0x4ef1e3['length'] * (0x3e * 0x3d + 0x2394 + -0x3192) + (-0x226 * -0x14 + 0x3456 + -0x400e), 0x56e0 + 0x37db + -0x77 * 0xb5);
                setTimeout(() => {
                    !_0x153a48 && (console['warn']('[BingAutoSearch Web] Watchdog triggered — forcing direct search'), _0x420174());
                }, _0xc857a);
                const _0x10418b = _0x10c435 => {
                    const _0x41ce9f = document['createElement']('form');
                    _0x41ce9f['action'] = '/search', _0x41ce9f['method'] = 'GET', _0x41ce9f['style']['display'] = 'none';
                    const _0x155b0c = new URL(_0x10c435);
                    _0x155b0c['searchParams']['forEach']((_0x11c611, _0x2318c8) => {
                        const _0xb30e0 = document['createElement']('input');
                        _0xb30e0['type'] = 'hidden', _0xb30e0['name'] = _0x2318c8, _0xb30e0['value'] = _0x11c611, _0x41ce9f['appendChild'](_0xb30e0);
                    }), document['body']['appendChild'](_0x41ce9f), _0x41ce9f['submit']();
                };

                function _0x420174() {
                    if (_0x153a48) return;
                    _0x153a48 = !![], _0x4f427e['value'] = _0x4ef1e3, _0x4f427e['dispatchEvent'](new Event('input', {
                        'bubbles': !![]
                    }));
                    const _0x412c02 = _0x4f427e['closest']('form');
                    _0x412c02 ? _0x412c02['submit']() : _0x10418b(_0x216772);
                }
                const _0x1fef5f = () => {
                    if (_0x153a48) return;
                    _0x153a48 = !![];
                    const _0x54ff58 = Math['min'](_0x4ef1e3['length'] * (0xb13 * 0x3 + 0x101 + -0x21c2) + (0x627 * 0x5 + -0x3a + -0x1b69), 0x89f * 0x2 + -0x1cb3 + 0x24d9 * 0x1);
                    console['log']('[BingAutoSearch Web] Màn hình ẩn (Background Mode). Auto-shift sang Định hướng URL ngầm sau ' + _0x54ff58 + 'ms...'), setTimeout(() => {
                        _0x10418b(_0x216772);
                    }, _0x54ff58);
                };
                if (document['hidden']) {
                    _0x1fef5f();
                    return;
                }
                document['addEventListener']('visibilitychange', function _0x505b30() {
                    document['hidden'] && !_0x50bf76 && (document['removeEventListener']('visibilitychange', _0x505b30), _0x1fef5f());
                });
                let _0x360a4b = 0x25d * -0x2 + -0x67 * -0x2f + 0x1 * -0xe2f;

                function _0x1c55cc() {
                    if (_0x153a48) return;
                    if (_0x360a4b < _0x4ef1e3['length']) {
                        const _0x3d575e = _0x4ef1e3[_0x360a4b],
                            _0x15debf = _0x3d575e['charCodeAt'](0x720 + 0x1 * 0xf7c + -0x1 * 0x169c);
                        _0x4f427e['dispatchEvent'](new KeyboardEvent('keydown', {
                            'key': _0x3d575e,
                            'keyCode': _0x15debf,
                            'charCode': _0x15debf,
                            'bubbles': !![]
                        })), _0x4f427e['dispatchEvent'](new KeyboardEvent('keypress', {
                            'key': _0x3d575e,
                            'keyCode': _0x15debf,
                            'charCode': _0x15debf,
                            'bubbles': !![]
                        })), _0x4f427e['value'] = _0x4ef1e3['substring'](0x90 * 0x7 + 0xae7 + -0xed7, _0x360a4b + (-0x2212 * -0x1 + 0x3af + -0x25c0)), _0x4f427e['dispatchEvent'](new Event('input', {
                            'bubbles': !![]
                        })), _0x4f427e['dispatchEvent'](new KeyboardEvent('keyup', {
                            'key': _0x3d575e,
                            'keyCode': _0x15debf,
                            'charCode': _0x15debf,
                            'bubbles': !![]
                        })), _0x360a4b++;
                        const _0x1439e7 = _0x137a81 + Math['floor'](Math['random']() * (-0x1165 * -0x2 + 0x6bd + -0x2937 * 0x1)) - (-0x17b3 * -0x1 + 0x18c2 + -0x9a9 * 0x5);
                        setTimeout(_0x1c55cc, Math['max'](0x1d25 + -0x1348 * 0x2 + 0x989, _0x1439e7));
                    } else _0x50bf76 = !![], !_0x153a48 && setTimeout(_0x560041, -0x1de9 + 0x2527 * 0x1 + -0x1 * 0x5ae + Math['floor'](Math['random']() * (0x641 * 0x5 + 0x1729 + -0x1a3d * 0x2)));
                }

                function _0x560041() {
                    if (_0x153a48) return;
                    const _0x2fb84b = document['querySelector']('#sb_form_go') || document['querySelector']('#search_icon') || document['querySelector']('.b_searchbox_button') || document['querySelector']('.sap_button') || document['querySelector']('input[type=\"submit\"]') || document['querySelector']('button[type=\"submit\"]'),
                        _0x18d4af = _0x2fb84b || _0x4f427e;
                    if (!_0x18d4af && !_0x4f427e) {
                        _0x153a48 = !![], window['location']['href'] = _0x216772;
                        return;
                    }
                    const _0x1bd7a5 = _0x4f427e['getBoundingClientRect'](),
                        _0x4b9c66 = (_0x2fb84b || _0x4f427e)['getBoundingClientRect'](),
                        _0x369f8f = _0x4b9c66['left'] + _0x4b9c66['width'] / (0x3 * -0xa1e + 0x21af * -0x1 + -0x1 * -0x400b) + (Math['random']() * (-0x1a95 + -0xf7a + 0xd * 0x33d) - (-0x407 + 0x1 * 0x1ee4 + 0x4 * -0x6b6)),
                        _0x3fe1a9 = _0x4b9c66['top'] + _0x4b9c66['height'] / (-0x105c + 0x19d2 + 0xb * -0xdc) + (Math['random']() * (0x4f * -0x71 + -0x1 * -0x1e17 + 0x1 * 0x4cc) - (-0x11cf + 0x2413 + 0xf6 * -0x13)),
                        _0x490be9 = _0x1bd7a5['left'] + _0x1bd7a5['width'] * (0x2 * 0x557 + 0x23a3 + -0x2e51 + 0.7) + Math['random']() * (0x585 + -0x1 * 0x245 + -0x322),
                        _0x2db576 = _0x1bd7a5['top'] + (Math['random']() * (0x143 * -0x7 + -0x176c + 0x204b) - (-0x251a + -0x6 * -0x647 + -0x8b)),
                        _0x58f9d8 = _0x490be9 + (_0x369f8f - _0x490be9) * (0xee7 + 0x136d + -0x2254 + 0.4) + (Math['random']() * (0x2485 * 0x1 + -0x49 * 0x59 + 0xa6 * -0x11) - (-0x6b * 0x27 + 0x8b0 + 0x7ac)),
                        _0x5a4fb4 = _0x2db576 + (_0x3fe1a9 - _0x2db576) * (0x1 * -0x1fb7 + 0x43 * -0x17 + 0x25bc + 0.2) + (Math['random']() * (-0x177a + 0x762 + 0x102c) - (0x1df2 + -0x3 * 0x3ed + -0x11 * 0x111)),
                        _0x23b4ac = _0x490be9 + (_0x369f8f - _0x490be9) * (0x16f7 + 0x1565 + -0x2c5c + 0.7) + (Math['random']() * (-0xc41 * 0x1 + -0x1 * -0xab7 + 0x19e) - (0x362 + 0x1 * -0x1461 + 0x1109)),
                        _0x380d3f = _0x2db576 + (_0x3fe1a9 - _0x2db576) * (-0xb07 + 0x1725 * -0x1 + -0xc * -0x2d9 + 0.8) + (Math['random']() * (-0xa78 + -0xac9 + -0x3 * -0x719) - (-0x1e41 + 0x1b * 0x3d + 0x17d7));

                    function _0x10ddc5(_0x1986f2, _0x3f3832, _0x228fa7, _0x4fb59e, _0x55ed23) {
                        const _0x2746bf = 0x1e17 * -0x1 + -0x2eb + -0x1b * -0x139 - _0x1986f2;
                        return _0x2746bf * _0x2746bf * _0x2746bf * _0x3f3832 + (-0x2255 + -0x3 * -0x6fb + 0x1 * 0xd67) * _0x2746bf * _0x2746bf * _0x1986f2 * _0x228fa7 + (-0x1193 + 0x105f + 0x137) * _0x2746bf * _0x1986f2 * _0x1986f2 * _0x4fb59e + _0x1986f2 * _0x1986f2 * _0x1986f2 * _0x55ed23;
                    }
                    const _0x5782dd = 0x46 * 0x86 + 0x2218 + 0x2 * -0x2359 + Math['floor'](Math['random']() * (-0xef9 + 0x362 * -0x9 + 0x2d73));
                    let _0x53be4f = -0x2 * -0x6f7 + 0x18ee + 0x6 * -0x67a;

                    function _0x36deef() {
                        if (_0x153a48) return;
                        if (_0x53be4f <= _0x5782dd) {
                            const _0x2d36c8 = _0x53be4f / _0x5782dd,
                                _0x248631 = _0x10ddc5(_0x2d36c8, _0x490be9, _0x58f9d8, _0x23b4ac, _0x369f8f),
                                _0x3b1aa8 = _0x10ddc5(_0x2d36c8, _0x2db576, _0x5a4fb4, _0x380d3f, _0x3fe1a9);
                            document['elementFromPoint'](_0x248631, _0x3b1aa8)
                                ?.['dispatchEvent'](new MouseEvent('mousemove', {
                                    'clientX': _0x248631,
                                    'clientY': _0x3b1aa8,
                                    'bubbles': !![]
                                })), _0x53be4f++, setTimeout(_0x36deef, 0x2584 + 0x19 * 0xb7 + -0x374f + Math['floor'](Math['random']() * (-0xe16 + 0x135c + -0x52d)));
                        } else(_0x2fb84b || _0x4f427e)['dispatchEvent'](new MouseEvent('mouseenter', {
                            'clientX': _0x369f8f,
                            'clientY': _0x3fe1a9,
                            'bubbles': !![]
                        })), setTimeout(() => {
                            if (_0x153a48) return;
                            _0x153a48 = !![];
                            _0x2fb84b ? (_0x2fb84b['dispatchEvent'](new MouseEvent('mousedown', {
                                'clientX': _0x369f8f,
                                'clientY': _0x3fe1a9,
                                'bubbles': !![],
                                'button': 0x0
                            })), _0x2fb84b['dispatchEvent'](new MouseEvent('mouseup', {
                                'clientX': _0x369f8f,
                                'clientY': _0x3fe1a9,
                                'bubbles': !![],
                                'button': 0x0
                            }))) : (_0x4f427e['dispatchEvent'](new KeyboardEvent('keydown', {
                                'key': 'Enter',
                                'code': 'Enter',
                                'keyCode': 0xd,
                                'bubbles': !![]
                            })), _0x4f427e['dispatchEvent'](new KeyboardEvent('keypress', {
                                'key': 'Enter',
                                'code': 'Enter',
                                'keyCode': 0xd,
                                'bubbles': !![]
                            })));
                            try {
                                const _0x3c90c9 = _0x4f427e['closest']('form') || document['querySelector']('#sb_form');
                                _0x3c90c9 && _0x3c90c9['dispatchEvent'](new Event('submit', {
                                    'bubbles': !![],
                                    'cancelable': !![]
                                }));
                            } catch (_0x4f9243) {}
                            _0x10418b(_0x216772), document['body']['dataset']['bingSearchDone'] = '1', setTimeout(() => {
                                !window['location']['href']['includes']('/search?') && document['readyState'] !== 'loading' && (console['log']('[BingAutoSearch] Natural submit failed - using Pro Fallback'), _0x10418b(_0x216772));
                            }, -0x10b9 + 0x2508 + 0x1c9 * -0x7);
                        }, -0xb64 + 0x7 * -0x233 + 0x1b19 + Math['floor'](Math['random']() * (-0xcb4 + -0x1145 * -0x2 + -0x452 * 0x5)));
                    }
                    _0x36deef();
                }
                _0x1c55cc();
            },
            'args': [_0x137d7d, _0x5bbcd1, _0x19977d]
        }), console['log']('[BingAutoSearch] Typing + submit injected: \"' + _0x137d7d + '\"');
    } catch (_0x5d977e) {
        console['error']('[BingAutoSearch] Type+submit failed:', _0x5d977e);
        try {
            await chrome['tabs']['remove'](_0x4898b3['id']);
        } catch (_0x4d73f3) {}
        scheduleNextSearch();
        return;
    }
    let _0x53e70f = ![];
    for (let _0x4441cc = 0xd3b + -0x6bf + -0xa * 0xa6; _0x4441cc < 0xbab + 0x1d1e + -0x286f; _0x4441cc++) {
        if (!searchState['isRunning']) {
            try {
                await chrome['tabs']['remove'](_0x4898b3['id']);
            } catch (_0x5e5d2e) {}
            scheduleNextSearch();
            return;
        }
        if (!await isTabAlive(_0x4898b3['id'])) {
            scheduleNextSearch();
            return;
        }
        try {
            const _0x1887e1 = await chrome['tabs']['get'](_0x4898b3['id']),
                _0xcb33d2 = _0x1887e1['url'] || '',
                _0x5a9edb = _0xcb33d2['includes']('/search?q=') || _0xcb33d2['includes']('/search?q%'),
                _0x31d845 = _0x1887e1['status'] === 'complete';
            if (_0x5a9edb && _0x31d845) {
                _0x53e70f = !![], console['log']('[BingAutoSearch] Search results loaded (' + (_0x4441cc * (0x101 * -0x3 + -0x1b * -0x4b + -0x2f2) / (0x1 * -0x23e7 + 0xe3 * 0x2 + -0x5b * -0x6b))['toFixed'](-0x21f + 0x13 * 0xeb + -0x3 * 0x51b) + 's)');
                break;
            }
        } catch (_0x262c0d) {
            break;
        }
        await delay(-0x704 * -0x1 + 0x23 * 0xc7 + -0x2045);
    }
    if (!_0x53e70f) {
        console['warn']('[BingAutoSearch] Search results timeout — closing tab'), closeTabAndContinue();
        return;
    }
    if (!searchState['isRunning']) {
        try {
            await chrome['tabs']['remove'](_0x4898b3['id']);
        } catch (_0x3d0046) {}
        scheduleNextSearch();
        return;
    }
    const _0x3dd281 = getRandomDelay(searchState['settings']['tabCloseDelayMin'], searchState['settings']['tabCloseDelayMax']);
    console['log']('[BingAutoSearch] Results loaded. Close in ' + (_0x3dd281 / (0x6 * 0x617 + -0x33f * 0x2 + -0x1 * 0x1a24))['toFixed'](0x94 * -0x35 + -0x27 * -0x6a + -0x1 * -0xe7f) + 's');
    if (await isTabAlive(_0x4898b3['id'])) try {
        executeScriptWithTimeout({
            'target': {
                'tabId': _0x4898b3['id']
            },
            'func': () => {
                const _0x1ac067 = Math['min'](document['body']['scrollHeight'], 0x26f * -0x5 + 0x1dff + 0x4 * -0x281),
                    _0x1515f6 = 0x1 * -0xb2d + -0x421 * 0x1 + -0xe * -0x118 + Math['floor'](Math['random']() * (-0xada * 0x1 + -0x2042 + 0x2b20));
                let _0xfb1d76 = 0x380 + 0x1 * -0xba2 + -0x822 * -0x1;

                function _0x306db4() {
                    if (_0xfb1d76 < _0x1515f6) {
                        const _0x27d8d4 = Math['floor'](_0x1ac067 / _0x1515f6 * (_0xfb1d76 + (0x1d * 0xbe + 0x913 + 0xb2 * -0x2c))) + Math['floor'](Math['random']() * (-0xe70 + 0x76 * -0x7 + -0x907 * -0x2)) - (0xb95 * -0x1 + -0xb57 * 0x2 + -0x1 * -0x2275);
                        window['scrollTo']({
                            'top': Math['max'](0xd3 * 0x27 + 0x82c + -0x2851, _0x27d8d4),
                            'behavior': 'smooth'
                        }), _0xfb1d76++, setTimeout(_0x306db4, 0x1b62 + 0x18b9 + -0x31c3 + Math['floor'](Math['random']() * (-0xd1 * -0xf + -0x189 * -0x17 + -0x2c6e)));
                    } else Math['random']() > 0x1207 + -0x23c9 + 0x11c2 + 0.5 && setTimeout(() => {
                        window['scrollTo']({
                            'top': Math['floor'](Math['random']() * (0x1a8 * -0x17 + -0x1 * 0x1265 + 0x3a71)),
                            'behavior': 'smooth'
                        });
                    }, 0x9c7 * 0x1 + 0x15b * -0x8 + 0x305 * 0x1 + Math['floor'](Math['random']() * (0x8ff + -0x6df + -0x2c)));
                }
                _0x306db4();
            }
        })['catch'](_0x2f11d2 => {}), console['log']('[BingAutoSearch] Scrolling results...');
    } catch (_0xbd4913) {}
    console['log']('[BingAutoSearch] Waiting ' + (_0x3dd281 / (-0xc8 * 0x11 + -0x949 * 0x1 + 0x1a79))['toFixed'](-0x2a * 0x7f + 0x1be + 0x1319 * 0x1) + 's before closing tab...'), await delay(_0x3dd281), console['log']('[BingAutoSearch] Closing tab now...'), closeTabAndContinue();
}

function waitForTabLoad(_0x599c17, _0x9dbc3e = 0x35fd + 0x5200 + 0x4d65 * -0x1) {
    return new Promise((_0x538717, _0x31e990) => {
        chrome['tabs']['get'](_0x599c17, _0x128bc5 => {
            if (chrome['runtime']['lastError'] || !_0x128bc5) {
                _0x538717();
                return;
            }
            if (_0x128bc5['status'] === 'complete') {
                _0x538717();
                return;
            }
            const _0x84f50 = setTimeout(() => {
                    clearInterval(_0x5a0260), chrome['tabs']['onUpdated']['removeListener'](_0x4e5f25), _0x538717();
                }, _0x9dbc3e),
                _0x5a0260 = setInterval(() => {
                    searchState['abortSignal'] && (clearTimeout(_0x84f50), clearInterval(_0x5a0260), chrome['tabs']['onUpdated']['removeListener'](_0x4e5f25), _0x31e990(new Error('ABORT_SIGNAL')));
                }, 0x65c * -0x1 + -0x1f55 * -0x1 + -0x1831);

            function _0x4e5f25(_0x5311f2, _0x3bbdea) {
                _0x5311f2 === _0x599c17 && _0x3bbdea['status'] === 'complete' && (clearTimeout(_0x84f50), clearInterval(_0x5a0260), chrome['tabs']['onUpdated']['removeListener'](_0x4e5f25), _0x538717());
            }
            chrome['tabs']['onUpdated']['addListener'](_0x4e5f25);
        });
    });
}
async function isTabAlive(_0x13c0ce) {
    try {
        return await chrome['tabs']['get'](_0x13c0ce), !![];
    } catch (_0x337975) {
        return ![];
    }
}

function delay(_0x26b68c) {
    return new Promise(_0x3fe10d => {
        let _0x3be156 = 0x390 + 0x8 * -0x2b3 + 0x1208;
        const _0x10b15e = 0x9 * -0xb3 + -0x2174 * 0x1 + -0x19f * -0x19,
            _0x1c3266 = setInterval(() => {
                (searchState['abortSignal'] || _0x3be156 >= _0x26b68c) && (clearInterval(_0x1c3266), _0x3fe10d()), _0x3be156 += _0x10b15e;
            }, _0x10b15e);
    });
}
async function closeTabAndContinue() {
    try {
        searchState['tabId'] && (await chrome['tabs']['remove'](searchState['tabId']), searchState['tabId'] = null);
    } catch (_0x5937c0) {}
    if (!searchState['isRunning']) return;
    scheduleNextSearch();
}

function scheduleNextSearch() {
    if (!searchState['isRunning']) return;
    if (searchState['currentSearch'] < searchState['totalSearches']) {
        const _0x24a019 = getRandomDelay(searchState['settings']['searchDelayMin'], searchState['settings']['searchDelayMax']);
        console['log']('[BingAutoSearch] Next search in ' + (_0x24a019 / (0x8cd * 0x1 + -0x1d4 * -0xd + -0x1ca9 * 0x1))['toFixed'](0x18db + 0xd * -0x269 + 0x7 * 0xed) + 's'), setTimeout(() => performSearch(), _0x24a019);
    } else performSearch();
}
chrome['alarms']['onAlarm']['addListener'](_0x279c51 => {
    _0x279c51['name'] === 'nextSearch' && (console['log']('[BingAutoSearch] ⏰ Alarm fired — resuming search'), searchState['isRunning'] && performSearch());
});
async function tryRecoverSearch() {
    if (!searchState['isRunning']) {
        const _0x3316e2 = await chrome['storage']['local']['get'](['searchRunning', 'searchStateBackup']);
        if (_0x3316e2['searchRunning'] && _0x3316e2['searchStateBackup']) {
            const _0xa1dfd2 = _0x3316e2['searchStateBackup'];
            console['log']('[BingAutoSearch] 🔄 Recovering from SW restart...', _0xa1dfd2), searchState['isRunning'] = !![], searchState['currentSearch'] = _0xa1dfd2['currentSearch'] || -0x1206 + -0x78f + 0x6f * 0x3b, searchState['totalSearches'] = _0xa1dfd2['totalSearches'] || 0x446 * 0x1 + 0xf7b + -0x13a3, searchState['currentPhase'] = _0xa1dfd2['currentPhase'] || 'desktop', searchState['startTime'] = _0xa1dfd2['startTime'] || Date['now'](), searchState['completedTotal'] = _0xa1dfd2['completedTotal'] || 0x25d + -0x16f8 + 0x149b, searchState['settings'] = _0xa1dfd2['settings'] || searchState['settings'], searchState['usedKeywords'] = _0xa1dfd2['usedKeywords'] || [], startKeepAlive(), searchState['currentPhase'] === 'mobile' && await enableMobileUA(), console['log']('[BingAutoSearch] ✅ Recovered! Resuming at ' + searchState['currentSearch'] + '/' + searchState['totalSearches']), performSearch();
        }
    }
}
async function autoDetectRankAndConfigure() {
    console['log']('[BingAutoSearch] 🎖️ Tự động quét cấp độ Tài khoản từ Bing Dashboard (Tab Ngầm)...');
    try {
        const _0x7a8d51 = await chrome['tabs']['create']({
            'url': 'https://rewards.bing.com/dashboard',
            'active': ![]
        });
        console['log']('[BingAutoSearch] Đang chờ Render giao diện (Xuyên Bão Chuyển Hướng Đăng Nhập Mạng SSO)...');
        let _0x34c074 = null;
        for (let _0x10350e = 0x945 + 0x8c6 * 0x1 + 0x1 * -0x120b; _0x10350e < 0x1fd9 + 0x215c + -0x411c; _0x10350e++) {
            await delay(0x1 * 0x36d + -0x1ba4 + 0x139 * 0x17);
            try {
                const _0x1c0330 = await chrome['tabs']['get'](_0x7a8d51['id']);
                if (_0x1c0330['status'] === 'loading' || _0x1c0330['url']['includes']('login.live') || _0x1c0330['url']['includes']('microsoftonline.com')) continue;
                const _0x565716 = await chrome['scripting']['executeScript']({
                    'target': {
                        'tabId': _0x7a8d51['id']
                    },
                    'func': () => {
                        const _0x5e432c = document['body']['innerText']['toLowerCase']();
                        if (_0x5e432c['includes']('has been suspended') || _0x5e432c['includes']('đã bị tạm ngưng') || _0x5e432c['includes']('suspended')) {
                            if (document['querySelector']('h1')
                                ?.['innerText']?.['toLowerCase']()
                                ?.['includes']('suspended') || _0x5e432c['includes']('account has been suspended') || _0x5e432c['includes']('vi phạm thỏa thuận dịch vụ')) return 'BANNED';
                        }
                        const _0x3cd5ab = document['querySelectorAll']('span, p, div, a, h1, h2, h3, h4, h5, h6, [class*=\"badge\"], [class*=\"level\"]');
                        for (let _0x4b8735 of _0x3cd5ab) {
                            const _0x1f20af = _0x4b8735['innerText']['trim']()['toLowerCase'](),
                                _0xffd4be = ['silver', 'gold', 'level 2', 'level2', 'bạc', 'vàng', 'gold member', 'silver member']['includes'](_0x1f20af) || _0x1f20af['length'] < -0x8 * -0x454 + -0x2597 + 0x315 && (_0x1f20af['includes']('gold') || _0x1f20af['includes']('silver') || _0x1f20af['includes']('vàng') || _0x1f20af['includes']('bạc') || _0x1f20af['includes']('level 2') || _0x1f20af['includes']('cấp 2'));
                            if (_0xffd4be && !_0x1f20af['includes']('progress')) return 0xcf8 + 0x17b1 * -0x1 + 0xabb;
                            const _0x72f2ec = ['member', 'level 1', 'level1', 'cấp 1', 'level 1 member', 'thành viên']['includes'](_0x1f20af) || _0x1f20af['length'] < -0x7 * 0x359 + -0x1 * 0x1d02 + 0x348f && (_0x1f20af['includes']('level 1') || _0x1f20af['includes']('cấp 1') || _0x1f20af['includes']('member') || _0x1f20af['includes']('thành viên'));
                            if (_0x72f2ec && !_0x1f20af['includes']('progress')) return -0x1d19 + -0x1 * -0x2349 + 0x62f * -0x1;
                        }
                        const _0x2b4cf8 = document['querySelector']('.m-dashboard-profile') || document['querySelector']('.profile-info-container') || document['querySelector']('div[id*=\"profile\"], div[class*=\"profile\"]');
                        if (_0x2b4cf8) {
                            const _0x4ca4d0 = _0x2b4cf8['innerText']['toLowerCase']();
                            if (_0x4ca4d0['includes']('gold') || _0x4ca4d0['includes']('silver') || _0x4ca4d0['includes']('vàng') || _0x4ca4d0['includes']('bạc') || _0x4ca4d0['includes']('cập 2')) return 0x69b * -0x5 + 0x2070 + -0x3 * -0x33;
                        }
                        return -0x3b * 0x97 + 0x18 * 0x1d + -0x2015 * -0x1;
                    }
                });
                _0x34c074 = _0x565716?.[-0xb37 + 0x1fe0 + -0x14a9]?.['result'] || 0x9c1 + -0x243a + 0x1a79;
                if (_0x34c074 !== 0xe5a + 0x6 * 0x4d5 + -0x2b58) break;
            } catch (_0x342ed9) {
                console['warn']('[BingAutoSearch] Chờ Render - Tab ngầm lật/tải:', _0x342ed9['message']);
            }
        }
        const _0x55ea76 = _0x34c074 || 0x8c * 0x1a + 0x6bf + 0x1 * -0x14f7;
        if (_0x55ea76 === 'BANNED') {
            console['error']('[BingAutoSearch] 🚨 PHÁT HIỆN: Tài khoản đã bị Banned (Suspended)!');
            try {
                await chrome['tabs']['update'](_0x7a8d51['id'], {
                    'active': !![]
                });
            } catch (_0x3c4bc5) {}
            return 'BANNED';
        }
        try {
            await chrome['tabs']['remove'](_0x7a8d51['id']);
        } catch (_0x2e8784) {}
        if (_0x55ea76 === -0xd3 * 0x16 + -0x1e * 0x5e + -0x26e * -0xc) console['log']('[BingAutoSearch] 🏆 Phát hiện hạng: BẠC / VÀNG (Level 2). Đặt Quota: 30 PC / 20 Mobile'), searchState['settings']['searchCount'] = 0xef4 + 0x1f99 + -0x2e6f, searchState['settings']['mobileSearchCount'] = -0x49 * -0x74 + 0x1 * 0xdad + -0x2ead, searchState['settings']['searchMode'] = 'both';
        else _0x55ea76 === -0x7e7 + 0xfc5 + -0x7dd ? (console['log']('[BingAutoSearch] 🥉 Phát hiện hạng: MEMBER (Level 1). Đặt Quota: 10 PC / 0 Mobile'), searchState['settings']['searchCount'] = 0x8f * 0x1b + -0x13b5 + -0x1 * -0x4aa, searchState['settings']['mobileSearchCount'] = 0x975 + 0x1ed1 + 0x2846 * -0x1, searchState['settings']['searchMode'] = 'desktop') : console['log']('[BingAutoSearch] ⚠️ Không rõ Cấp độ (0). Trả về Profile Cài đặt Gốc của Quản lý viên!');
        return await saveSettings(), _0x55ea76;
    } catch (_0x135fc9) {
        return console['warn']('[BingAutoSearch] ⚠️ Lỗi quét hạng Tab HTML, hủy điều chỉnh tự động:', _0x135fc9), -0xf1d * -0x1 + -0x2428 + 0x150b;
    }
}
async function startSearch() {
    if (searchState['isRunning']) {
        console['warn']('[BingAutoSearch] Máy đang chạy rồi, từ chối lệnh Start Search thứ 2.');
        return;
    }
    searchState['isRunning'] = !![], searchState['abortSignal'] = ![], searchState['isDetectingRank'] = !![], broadcastStatus();
    const _0x153b5d = !![];
    if (!searchState['settings']['keywordLang']) await loadSettings();
    let _0x14f11d = null;
    if (searchState['settings']['farmMode']) {
        _0x14f11d = await autoDetectRankAndConfigure();
        if (_0x14f11d === 'BANNED') {
            console['log']('[BingAutoSearch] ⛔ Tự động ngắt khởi động vì phát hiện Acc Banned.'), broadcastError('Tài khoản đã bị Khóa/Suspended!'), searchState['isRunning'] = ![], searchState['isDetectingRank'] = ![], broadcastStatus();
            return;
        }
    }
    searchState['isDetectingRank'] = ![];
    const _0xcc6e42 = await chrome['storage']['local']['get'](['savedSpoofedUA']);
    _0xcc6e42['savedSpoofedUA'] && (searchState['spoofedUserAgent'] = _0xcc6e42['savedSpoofedUA']);
    searchState['currentSearch'] = -0x1b90 + 0xedb + 0x1 * 0xcb5, searchState['totalSearches'] = searchState['settings']['searchCount'], searchState['startTime'] = Date['now'](), searchState['completedTotal'] = -0x79 + -0x945 + 0x2 * 0x4df, startKeepAlive(), broadcastStatus();
    if (searchState['settings']['autoDailySet']) {
        console['log']('[BingAutoSearch] Bật cày cuốc kết hợp: Chạy Daily Set trước khi tìm kiếm...');
        const _0x29a677 = await doDailySet(!![]);
        if (_0x29a677 === 'BANNED') {
            console['error']('[BingAutoSearch] ⛔ Tự động ngắt Farm Mode vì phát hiện Acc Banned.'), broadcastError('Tài khoản đã bị Khóa/Suspended!'), stopSearch(![], !![]);
            return;
        }
        if (!searchState['isRunning'] || searchState['abortSignal']) {
            console['log']('[BingAutoSearch] Nhận lệnh dừng sau Daily Set, hủy tìm kiếm tiếp theo.'), stopSearch();
            return;
        }
    }
    const _0x3e5370 = searchState['settings']['searchMode'];
    if (_0x3e5370 === 'mobile') {
        searchState['currentPhase'] = 'mobile', await clearBingSession(), await enableMobileUA();
        const _0x4442d6 = await checkBingLogin();
        if (!_0x4442d6) {
            console['error']('[BingAutoSearch] ❌ Login failed. Stopping.'), broadcastError('Đăng nhập thất bại. Dừng lại.'), stopSearch();
            return;
        }
    } else {
        searchState['currentPhase'] = 'desktop', await clearBingSession(), await disableMobileUA();
        const _0x5b26b1 = await checkBingLogin();
        if (!_0x5b26b1) {
            console['error']('[BingAutoSearch] ❌ Login failed. Stopping.'), broadcastError('Đăng nhập thất bại. Dừng lại.'), stopSearch();
            return;
        }
    }
    backupSearchState(), broadcastStatus(), performSearch();
}

async function completeSearchSequence() {
    try {
        clearSearchBackup();
        await disableMobileUA();
        if (searchState['settings']['autoDailyCheckIn'] && searchState['isRunning'] && !searchState['abortSignal']) {
            console['log']('[BingAutoSearch] Auto Check In enabled: running after search...');
            try {
                await doDailyCheckIn(!![]);
            } catch (_0x35278f) {
                console['error']('[BingAutoSearch] Auto Check In failed:', _0x35278f);
                broadcastError('Check In lỗi: ' + (_0x35278f?.['message'] || String(_0x35278f)));
            }
        }
        if (searchState['settings']['autoReadToEarn'] && searchState['isRunning'] && !searchState['abortSignal']) {
            console['log']('[BingAutoSearch] Auto Read to Earn enabled: running after Check In...');
            try {
                await doReadToEarn(!![]);
            } catch (_0x351935) {
                console['error']('[BingAutoSearch] Auto Read to Earn failed:', _0x351935);
                broadcastError('Read to Earn lỗi: ' + (_0x351935?.['message'] || String(_0x351935)));
            }
        }
    } finally {
        if (searchState['isRunning']) stopSearch(!![]);
    }
}

async function stopSearch(_0x311376 = ![], _0x2c24b3 = ![]) {
    searchState['isRunning'] = ![], searchState['abortSignal'] = !_0x311376, stopKeepAlive(), clearSearchBackup();
    try {
        await chrome['alarms']['clear']('nextSearch');
    } catch (_0x4f5e10) {}
    if (searchState['tabId'] && !_0x2c24b3) {
        try {
            await chrome['tabs']['remove'](searchState['tabId']);
        } catch (_0x19bd3c) {}
        searchState['tabId'] = null;
    }
    if (!_0x311376) {
        if (searchState['dailySetMainTab'] && !_0x2c24b3) {
            try {
                await chrome['tabs']['remove'](searchState['dailySetMainTab']);
            } catch (_0x239d86) {}
            searchState['dailySetMainTab'] = null;
        }
        if (searchState['dailySetSpawnedTabs'] && searchState['dailySetSpawnedTabs']['length'] > 0x7 * -0x373 + -0xc03 + -0xd * -0x2c8 && !_0x2c24b3) {
            try {
                await chrome['tabs']['remove'](searchState['dailySetSpawnedTabs']);
            } catch (_0x52bab3) {}
            searchState['dailySetSpawnedTabs'] = [];
        }
    }
    await disableMobileUA(), broadcastStatus();
    if (_0x311376 && searchState['completedTotal'] > -0x183 * -0x1 + -0x3 * 0x901 + 0x1980) {
        const _0x2e2307 = Date['now'](),
            _0x10adf6 = searchState['startTime'] || _0x2e2307,
            _0x26a3f6 = Math['round']((_0x2e2307 - _0x10adf6) / (-0x43 + 0x89d + -0x1 * 0x472)),
            _0x9be21f = searchState['settings']['searchMode'] || 'desktop',
            _0x51ba0a = searchState['completedTotal'],
            _0x547cb0 = chrome['runtime']['getManifest']()['version'],
            _0x1e2d2f = chrome['runtime']['getURL']('done.html?total=' + _0x51ba0a + '&mode=' + _0x9be21f + '&duration=' + _0x26a3f6 + '&completedAt=' + _0x2e2307 + '&startedAt=' + _0x10adf6 + '&version=' + encodeURIComponent(_0x547cb0));
        chrome['tabs']['create']({
            'url': _0x1e2d2f,
            'active': !![]
        }), console['log']('[BingAutoSearch] ✅ All done! ' + _0x51ba0a + ' searches in ' + _0x26a3f6 + 's'), searchState['settings']['farmMode'] ? (console['log']('[BingAutoSearch] 🤖 AUTO FARM MODE: Browser will self-destruct in 5 seconds...'), setTimeout(() => {
            chrome['windows']['getAll']({
                'populate': ![]
            }, function(_0x4dcf7c) {
                _0x4dcf7c['forEach'](function(_0x5d3717) {
                    chrome['windows']['remove'](_0x5d3717['id']);
                });
            });
        }, -0xd + -0x923 + 0x4 * 0x72e)) : chrome['notifications'] && chrome['notifications']['create']({
            'type': 'basic',
            'iconUrl': 'icons/icon128.png',
            'title': 'Nhiệm vụ hoàn tất! 🏆',
            'message': 'Đã cày nát ' + _0x51ba0a + ' lượt tìm kiếm trong ' + _0x26a3f6 + 's!\x0aVào kho Microsoft Rewards lụm Bạc thôi Ní ơi! 💸',
            'priority': 0x2,
            'silent': ![],
            'requireInteraction': ![]
        });
    }
}
async function doDailySet(_0x37a567 = ![]) {
    searchState['abortSignal'] = ![];
    !_0x37a567 && (searchState['isRunning'] && stopSearch(), searchState['abortSignal'] = ![]);
    console['log']('[BingAutoSearch] Bắt đầu thu thập Daily Set trên cả 2 trạm...'), await disableMobileUA();
    const _0x43f786 = ['https://rewards.bing.com/dashboard', 'https://rewards.bing.com/earn'];
    let _0x26948d = 0x128 * -0x1 + -0xc16 + 0xd3e,
        _0x1649ba = await chrome['tabs']['create']({
            'url': _0x43f786[0xc5 * 0x23 + 0x2111 + -0x3c00],
            'active': !![]
        });
    searchState['dailySetMainTab'] = _0x1649ba['id'];
    const _0x379408 = new Set((await chrome['tabs']['query']({
        'windowId': _0x1649ba['windowId']
    }))['map'](_0x353dce => _0x353dce['id']));
    let _0x913dbb = [];
    searchState['dailySetSpawnedTabs'] = _0x913dbb;
    const _0x4b212d = _0x49d598 => {
        _0x49d598['id'] !== _0x1649ba['id'] && !_0x379408['has'](_0x49d598['id']) && _0x913dbb['push'](_0x49d598['id']);
    };
    chrome['tabs']['onCreated']['addListener'](_0x4b212d);
    for (let _0x4d1234 = 0x21a3 * -0x1 + 0x4a3 + 0x3a0 * 0x8; _0x4d1234 < _0x43f786['length']; _0x4d1234++) {
        if (searchState['abortSignal']) {
            console['log']('[BingAutoSearch] Đã nhận lệnh DỪNG, huỷ vòng lặp Daily Set chính.');
            break;
        }
        const _0xd80da1 = _0x43f786[_0x4d1234];
        if (_0x4d1234 > -0x2 * 0x1201 + -0x31 * -0x22 + -0xec * -0x20) try {
            await chrome['tabs']['update'](_0x1649ba['id'], {
                'url': _0xd80da1
            });
        } catch (_0x5e8cbe) {
            console['log']('[BingAutoSearch] Tab chủ bị đóng giữa chừng. Dừng quét trạm.');
            break;
        }
        await waitForTabLoad(_0x1649ba['id']);
        let _0x1ce32b = ![];
        for (let _0x293b49 = 0x2 * 0xbdd + -0x14d * 0xe + -0x584; _0x293b49 < -0xa63 + 0x383 * 0xb + 0x1e1 * -0xf; _0x293b49++) {
            if (searchState['abortSignal']) break;
            try {
                const _0x5660c6 = await chrome['scripting']['executeScript']({
                        'target': {
                            'tabId': _0x1649ba['id']
                        },
                        'func': _0x368c01 => {
                            const _0x50275e = window['location']['hostname'];
                            if (_0x50275e['includes']('login.live.com') || _0x50275e['includes']('login.microsoftonline.com')) return {
                                'status': 'waiting'
                            };
                            const _0x47e835 = _0x368c01['includes']('/earn');
                            if (_0x47e835 && (window['location']['pathname'] === '/dashboard' || window['location']['pathname'] === '/')) return {
                                'status': 'skip'
                            };
                            const _0x15449f = _0x368c01['includes']('/dashboard'),
                                _0x18a7dc = _0x15449f && window['location']['pathname'] !== '/dashboard';
                            if (document['body']) {
                                const _0x32c75e = document['body']['innerText']['toLowerCase']();
                                if (_0x32c75e['includes']('has been suspended') || _0x32c75e['includes']('đã bị tạm ngưng') || _0x32c75e['includes']('suspended')) {
                                    if (document['querySelector']('h1')
                                        ?.['innerText']?.['toLowerCase']()
                                        ?.['includes']('suspended') || _0x32c75e['includes']('account has been suspended') || _0x32c75e['includes']('vi phạm thỏa thuận dịch vụ')) return {
                                        'status': 'BANNED'
                                    };
                                }
                                if (_0x32c75e['includes']('you will be redirected') || _0x32c75e['includes']('liên kết này không hoạt động') || _0x32c75e['includes']('không tìm thấy')) return {
                                    'status': 'skip'
                                };
                            }
                            const _0x30e903 = document['querySelectorAll']('a[href*=\"search?q=\"], a[href*=\"filters=\"], a.CardRewards')['length'] > -0x1 * 0x232c + -0x989 + 0x6d * 0x69,
                                _0x43989f = document['querySelector']('#dailyset') !== null || document['querySelector']('#moreactivities') !== null || document['querySelector']('.group.a') !== null,
                                _0x34ce93 = window['location']['pathname']['includes']('/earn/quest/') && (document['querySelector']('main') || document['querySelector']('h1') || document['querySelector']('h2'));
                            if (_0x30e903 || _0x43989f || _0x34ce93) return {
                                'status': 'loaded',
                                'isOldUI': _0x18a7dc
                            };
                            return {
                                'status': 'waiting'
                            };
                        },
                        'args': [_0xd80da1]
                    }),
                    _0x1ab760 = _0x5660c6?.[-0x1 * 0x616 + 0x1 * 0x1a93 + -0x419 * 0x5]?.['result'];
                if (_0x1ab760?.['status'] === 'BANNED') return console['error']('[BingAutoSearch] 🚨 PHÁT HIỆN ACC BANNED TẠI DAILY SET!'), searchState['abortSignal'] = !![], 'BANNED';
                if (_0x1ab760?.['status'] === 'skip' || _0x1ab760 === 'skip') {
                    console['log']('[BingAutoSearch] Trạm ' + _0xd80da1 + ' không hỗ trợ (giao diện cũ bị đá). Skip ngay!');
                    break;
                }
                if (_0x1ab760?.['status'] === 'loaded' || _0x1ab760 === !![]) {
                    _0x1ce32b = !![];
                    _0x4d1234 === 0x23e6 + 0x1 * 0x6b9 + -0x2a9f * 0x1 && _0x1ab760?.['isOldUI'] && _0x43f786['length'] > -0x10ba + -0x17cd + -0x511 * -0x8 && (console['log']('[BingAutoSearch] 📌 Phát hiện Giao diện Cổ Điển! Dẹp trạm /earn cho đỡ tốn vài chục giây!'), _0x43f786['pop']());
                    break;
                }
            } catch (_0x362e96) {}
            await delay(-0xde * 0x1d + -0x248b + 0x4199);
        }
        if (!_0x1ce32b) {
            console['log']('[BingAutoSearch] Cảnh báo: Trạm ' + _0xd80da1 + ' không load kịp hoặc bị kẹt Đăng nhập. Skip trạm này!');
            continue;
        }
        await delay(-0xaf8 + 0x1 * 0x3bd + 0x92f);
        try {
            await chrome['scripting']['executeScript']({
                'target': {
                    'tabId': _0x1649ba['id']
                },
                'func': () => {
                    const _0x523cbd = Array['from'](document['querySelectorAll']('button[aria-expanded=\"false\"]'))['filter'](_0x326a79 => {
                        const _0x2de00b = (_0x326a79['getAttribute']('aria-label') || _0x326a79['innerText'] || '')['toLowerCase']();
                        return _0x2de00b['includes']('daily set') || _0x2de00b['includes']('activity') || _0x2de00b['includes']('progress') || _0x2de00b['includes']('achievement');
                    });
                    _0x523cbd['forEach'](_0x1d106e => {
                        _0x1d106e['dispatchEvent'](new MouseEvent('mousedown', {
                            'bubbles': !![],
                            'cancelable': !![]
                        })), _0x1d106e['dispatchEvent'](new MouseEvent('mouseup', {
                            'bubbles': !![],
                            'cancelable': !![]
                        })), _0x1d106e['click']();
                    });
                }
            }), await delay(-0x1bb4 + -0x22e9 * -0x1 + 0x541 * -0x1);
        } catch (_0xe47762) {}
        try {
            const _0x2aaafc = await chrome['scripting']['executeScript']({
                    'target': {
                        'tabId': _0x1649ba['id']
                    },
                    'func': () => {
                        const _0x3e4468 = document['querySelector']('main') || document['querySelector']('[role=\"main\"]') || document,
                            _0x54463a = Array['from'](_0x3e4468['querySelectorAll']('a[href]')),
                            _0x2b7d20 = [],
                            _0x2ee991 = [];
                        _0x54463a['forEach'](_0xc1886 => {
                            const _0x49b819 = _0xc1886['href']['toLowerCase']();
                            if (_0x49b819 === 'https://www.bing.com/' || _0x49b819 === 'https://bing.com/' || _0x49b819['startsWith']('javascript:')) return;
                            if (_0x49b819 === 'https://rewards.bing.com/' || _0x49b819 === 'https://rewards.bing.com/dashboard') return;
                            if ((_0x49b819['includes']('rewards.bing.com/#') || _0x49b819['includes']('rewards.bing.com/?')) && !_0x49b819['includes']('search?q=')) return;
                            if (_0x49b819['includes']('microsoft-edge:')) return;
                            if (_0xc1886['disabled'] || _0xc1886['getAttribute']('aria-disabled') === 'true' || _0xc1886['getAttribute']('data-disabled') === 'true') return;
                            let _0x527f9b = _0xc1886['closest']('mee-card, .c-card, [class*=\"card\" i], [class*=\"promo\" i]');
                            _0x49b819['includes']('search?q=') && window['location']['pathname']['includes']('/earn/quest/') ? _0x527f9b = _0xc1886['closest']('.flex-row') || _0xc1886['parentElement'] || _0xc1886 : _0x527f9b = _0x527f9b || _0xc1886;
                            if (_0x49b819['includes']('/earn/quest/')) {
                                const _0x236fa8 = _0x527f9b['innerText'] || '';
                                if (_0x236fa8['includes']('Get started with Rewards') || _0x236fa8['includes']('Welcome') || _0x236fa8['includes']('Bắt đầu với Rewards')) return;
                                const _0x23bcb4 = _0x527f9b['querySelector']('.mee-icon-SkypeCircleCheck, .mee-icon-CheckMedium, .c-icon.c-action-success, [class*=\"SkypeCircleCheck\"], .bg-statusSuccessBg3') || _0x236fa8 && (_0x236fa8['includes']('Completed') || _0x236fa8['match'](/\d+\/\d+ tasks/)
                                    ?.[-0xfc5 * -0x1 + 0x206e + -0x3033]?.['match'](/(\d+)\/\1/));
                                !_0x23bcb4 && _0x2ee991['push'](_0xc1886['href']);
                                return;
                            }
                            const _0x86115 = _0x527f9b !== _0xc1886 || (_0xc1886['className'] || '')['toLowerCase']()['includes']('card') || (_0xc1886['className'] || '')['includes']('CardRewards') || _0x49b819['includes']('search?q=') || _0x49b819['includes']('filters=');
                            if (!_0x86115) return;
                            const _0x3d4dca = ['/dashboard', '/earn', '/redeem', '/about', '/status', '/badges', '/history', '/refer', '/invite', 'givewith', 'bing.com/give', '/goal', 'twitter.com', 'x.com', 'facebook.com', 'support.microsoft', '/redeem/checkout', '/redeem/shop', '/redeem/vn/shop', 'redeemsupport', 'microsoft.com/edge', 'xbox.com', 'explore/rewards', 'windows.microsoft.com', 'bing.com/explore', 'rwgbopen', 'levelbenefit', 'copilot'];
                            if (_0x3d4dca['some'](_0x44709a => _0x49b819['includes'](_0x44709a)) && !_0x49b819['includes']('search?q=')) return;
                            const _0x406af9 = _0x527f9b['innerText'] || '',
                                _0xa4c3e6 = _0x527f9b['querySelector']('.mee-icon-SkypeCircleCheck, .mee-icon-CheckMedium, .c-icon.c-action-success, [class*=\"SkypeCircleCheck\"], .bg-statusSuccessBg3') || _0x406af9['includes']('Completed') || _0x406af9['includes']('Hoàn thành') || _0x406af9['includes']('Đã xong');
                            !_0xa4c3e6 && _0x2b7d20['push'](_0xc1886);
                        });
                        const _0x2fc940 = [],
                            _0x227f2f = new Set();
                        for (const _0x19a5f1 of _0x2b7d20) {
                            !_0x227f2f['has'](_0x19a5f1['href']) && (_0x227f2f['add'](_0x19a5f1['href']), _0x2fc940['push'](_0x19a5f1));
                        }
                        const _0x1c9ca2 = Array['from'](new Set(_0x2ee991));
                        return _0x2fc940['forEach']((_0x402974, _0x10ec19) => {
                            setTimeout(() => {
                                if (_0x402974['target'] !== '_blank') _0x402974['target'] = '_blank';
                                _0x402974['click']();
                            }, _0x10ec19 * (-0x1d13 * 0x1 + 0x19 * 0x23 + 0x1cc8));
                        }), {
                            'clicked': _0x2fc940['length'],
                            'quests': _0x1c9ca2
                        };
                    }
                }),
                _0x1f00c2 = _0x2aaafc[0x24ba + -0x16cb + 0x1 * -0xdef]?.['result'] || {
                    'clicked': 0x0,
                    'quests': []
                },
                _0x192e1a = _0x1f00c2['clicked'];
            console['log']('[BingAutoSearch] Trạm ' + _0xd80da1 + ' tìm thấy và click ' + _0x192e1a + ' thẻ chưa làm'), _0x26948d += _0x192e1a;
            _0x1f00c2['quests'] && _0x1f00c2['quests']['length'] > 0x346 * -0x2 + -0xee4 + 0x1570 && _0x1f00c2['quests']['forEach'](_0x3a58bb => {
                !_0x43f786['includes'](_0x3a58bb) && (_0x43f786['push'](_0x3a58bb), console['log']('[BingAutoSearch] 🎯 Phát hiện Mật Thất Quest: Đã bổ sung ' + _0x3a58bb + ' vào Lịch trình Loop.'));
            });
            _0x192e1a > 0x2080 + -0x1a76 + 0x2 * -0x305 && await delay(_0x192e1a * (0x1 * 0x1f35 + 0x1191 + -0x2da6 * 0x1) + (0x1e5e + -0xca4 + 0x3 * -0x542));
            if (_0x913dbb['length'] > 0x7 * 0x260 + -0x1 * 0x10a9 + -0x1 * -0x9) {
                console['log']('[BingAutoSearch] Chờ ' + _0x913dbb['length'] + ' tab được load đầy đủ để rớt điểm...'), await Promise['all'](_0x913dbb['map'](_0x27a661 => waitForTabLoad(_0x27a661, 0x9a9 * -0x1 + -0xb17 * 0x2 + 0x335f)['catch'](() => {}))), await delay(0x1 * -0xfca + -0xd3f * -0x1 + -0xd * -0x7f);
                try {
                    _0x913dbb['forEach'](_0x42e6a1 => chrome['tabs']['remove'](_0x42e6a1)['catch'](() => {})), console['log']('[BingAutoSearch] Đã đá đít nhanh ' + _0x913dbb['length'] + ' tab của ' + _0xd80da1 + ' để nhẹ máy!');
                } catch (_0x4097d8) {}
                _0x913dbb = [];
            }
        } catch (_0x458e0d) {
            console['error']('[BingAutoSearch] Lỗi quét trạm:', _0xd80da1, _0x458e0d);
        }
    }
    console['log']('[BingAutoSearch] TỔNG HIỆP: Đã click ' + _0x26948d + ' thẻ.'), chrome['tabs']['onCreated']['removeListener'](_0x4b212d);
    if (_0x913dbb['length'] > -0x1a55 * 0x1 + 0x21a1 + -0x1 * 0x74c) {
        console['log']('[BingAutoSearch] Chờ ' + _0x913dbb['length'] + ' tab lọt sàng được load đầy đủ...'), await Promise['all'](_0x913dbb['map'](_0x5284d1 => waitForTabLoad(_0x5284d1, -0x4d5 + -0x8ae + -0xb * -0x301)['catch'](() => {}))), await delay(-0xee * -0x1d + -0x8 * -0xb2 + -0x1c9e);
        try {
            _0x913dbb['forEach'](_0x45ad82 => chrome['tabs']['remove'](_0x45ad82)['catch'](() => {})), console['log']('[BingAutoSearch] Đã thủ tiêu gọn gàng ' + _0x913dbb['length'] + ' tab rác lọt sàng!');
        } catch (_0x568071) {}
    }
    const _0x5251a0 = 0x1 * 0x2147 + -0xb07 + 0x1b6 * -0xd;
    for (let _0x5148d1 = -0x66e + 0x1b98 + -0x3 * 0x70e; _0x5148d1 < _0x5251a0; _0x5148d1++) {
        if (searchState['abortSignal']) break;
        console['log']('[BingAutoSearch] 🔄 Verification pass ' + (_0x5148d1 + (-0x91c * -0x4 + 0x1b0e + -0x3f7d)) + '/' + _0x5251a0 + '...');
        let _0x284300 = 0x13cc + 0x1 * 0x2107 + -0x1 * 0x34d3;
        for (const _0x8f1ec2 of _0x43f786) {
            if (searchState['abortSignal']) break;
            try {
                await chrome['tabs']['update'](_0x1649ba['id'], {
                    'url': _0x8f1ec2
                });
            } catch (_0x46676d) {
                continue;
            }
            await waitForTabLoad(_0x1649ba['id']);
            let _0x2e05c0 = ![];
            for (let _0x1a8901 = 0x9a9 + -0x5 * 0x20 + -0x101 * 0x9; _0x1a8901 < 0x52c + -0x3b * 0x5f + -0x1 * -0x10c3; _0x1a8901++) {
                if (searchState['abortSignal']) break;
                try {
                    const _0x12da37 = await chrome['scripting']['executeScript']({
                        'target': {
                            'tabId': _0x1649ba['id']
                        },
                        'func': _0x49cbc4 => {
                            const _0xf70901 = window['location']['hostname'];
                            if (_0xf70901['includes']('login.live.com') || _0xf70901['includes']('login.microsoftonline.com')) return ![];
                            const _0x31d759 = _0x49cbc4['includes']('/earn');
                            if (_0x31d759 && (window['location']['pathname'] === '/dashboard' || window['location']['pathname'] === '/')) return 'skip';
                            if (document['body'] && (document['body']['innerText']['includes']('You will be redirected') || document['body']['innerText']['includes']('Liên kết này không hoạt động') || document['body']['innerText']['includes']('không tìm thấy'))) return 'skip';
                            const _0x17a1e1 = document['querySelectorAll']('a[href*=\"search?q=\"], a[href*=\"filters=\"], a.CardRewards')['length'] > -0x2 * 0x121d + -0x1171 + -0xb * -0x4e1,
                                _0x4e7d41 = document['querySelector']('#dailyset') !== null || document['querySelector']('#moreactivities') !== null || document['querySelector']('.group.a') !== null,
                                _0x3963dd = window['location']['pathname']['includes']('/earn/quest/') && (document['querySelector']('main') || document['querySelector']('h1') || document['querySelector']('h2'));
                            return _0x17a1e1 || _0x4e7d41 || _0x3963dd;
                        },
                        'args': [_0x8f1ec2]
                    });
                    if (_0x12da37?.[0x1abd + 0x106e + -0x2b * 0x101]?.['result'] === 'skip') {
                        _0x2e05c0 = 'skip';
                        break;
                    }
                    if (_0x12da37?.[-0x1ddd + -0xd0 + 0x1 * 0x1ead]?.['result']) {
                        _0x2e05c0 = !![];
                        break;
                    }
                } catch (_0x2ef5ab) {}
                await delay(-0xa06 * 0x1 + 0x139f + 0x1f * -0x2f);
            }
            if (_0x2e05c0 === 'skip' || !_0x2e05c0) continue;
            await delay(0x1e88 + 0x17f * -0xd + 0x39 * -0x29);
            try {
                await chrome['scripting']['executeScript']({
                    'target': {
                        'tabId': _0x1649ba['id']
                    },
                    'world': 'ISOLATED',
                    'func': () => {
                        const _0x48dea4 = Array['from'](document['querySelectorAll']('button[aria-expanded=\"false\"]'))['filter'](_0x205986 => {
                            const _0x5f1928 = (_0x205986['getAttribute']('aria-label') || _0x205986['innerText'] || '')['toLowerCase']();
                            return _0x5f1928['includes']('daily set') || _0x5f1928['includes']('activity') || _0x5f1928['includes']('progress') || _0x5f1928['includes']('achievement');
                        });
                        _0x48dea4['forEach'](_0x5db927 => {
                            _0x5db927['dispatchEvent'](new MouseEvent('mousedown', {
                                'bubbles': !![],
                                'cancelable': !![]
                            })), _0x5db927['dispatchEvent'](new MouseEvent('mouseup', {
                                'bubbles': !![],
                                'cancelable': !![]
                            })), _0x5db927['click']();
                        });
                    }
                }), await delay(0x35e + -0xc5 * -0x2a + 0x1 * -0x21bc);
            } catch (_0x387434) {}
            const _0x5503ed = new Set((await chrome['tabs']['query']({
                'currentWindow': !![]
            }))['map'](_0x1da35d => _0x1da35d['id']));
            let _0x34cfc9 = [];
            const _0x30de04 = _0x23b962 => {
                _0x23b962['id'] !== _0x1649ba['id'] && !_0x5503ed['has'](_0x23b962['id']) && _0x34cfc9['push'](_0x23b962['id']);
            };
            chrome['tabs']['onCreated']['addListener'](_0x30de04);
            let _0x535803 = 0x1 * -0x42d + 0x1395 + -0xf68;
            try {
                const _0xb5bccc = await chrome['scripting']['executeScript']({
                    'target': {
                        'tabId': _0x1649ba['id']
                    },
                    'func': () => {
                        const _0x485732 = document['querySelector']('main') || document['querySelector']('[role=\"main\"]') || document,
                            _0x275458 = Array['from'](_0x485732['querySelectorAll']('a[href]')),
                            _0x172a4a = [];
                        _0x275458['forEach'](_0x5174df => {
                            const _0x3980bc = _0x5174df['href']['toLowerCase']();
                            if (_0x3980bc === 'https://www.bing.com/' || _0x3980bc === 'https://bing.com/' || _0x3980bc['startsWith']('javascript:')) return;
                            if (_0x3980bc === 'https://rewards.bing.com/' || _0x3980bc === 'https://rewards.bing.com/dashboard') return;
                            if ((_0x3980bc['includes']('rewards.bing.com/#') || _0x3980bc['includes']('rewards.bing.com/?')) && !_0x3980bc['includes']('search?q=')) return;
                            if (_0x3980bc['includes']('microsoft-edge:')) return;
                            const _0x444929 = _0x5174df['closest']('mee-card, .c-card, [class*=\"card\" i], [class*=\"promo\" i]') || _0x5174df,
                                _0x12fc7b = _0x444929 !== _0x5174df || (_0x5174df['className'] || '')['toLowerCase']()['includes']('card') || (_0x5174df['className'] || '')['includes']('CardRewards') || _0x3980bc['includes']('search?q=') || _0x3980bc['includes']('filters=');
                            if (!_0x12fc7b) return;
                            const _0x52e560 = ['/dashboard', '/earn', '/redeem', '/about', '/status', '/badges', '/history', '/refer', '/invite', 'givewith', 'bing.com/give', '/goal', 'twitter.com', 'x.com', 'facebook.com', 'support.microsoft', '/redeem/checkout', '/redeem/shop', '/redeem/vn/shop', 'redeemsupport', 'microsoft.com/edge', 'xbox.com', 'explore/rewards', 'windows.microsoft.com', 'bing.com/explore', 'rwgbopen', 'levelbenefit', 'copilot'];
                            if (_0x52e560['some'](_0x5b7118 => _0x3980bc['includes'](_0x5b7118)) && !_0x3980bc['includes']('search?q=')) return;
                            const _0x147a9b = _0x444929['innerText'] || '',
                                _0x487db0 = _0x444929['querySelector']('.mee-icon-SkypeCircleCheck, .mee-icon-CheckMedium, .c-icon.c-action-success, [class*=\"SkypeCircleCheck\"]') || _0x147a9b['includes']('Completed') || _0x147a9b['includes']('Hoàn thành') || _0x147a9b['includes']('Đã xong');
                            if (!_0x487db0) _0x172a4a['push'](_0x5174df);
                        });
                        const _0xda22d8 = [],
                            _0x4d6691 = new Set();
                        for (const _0xdf4888 of _0x172a4a) {
                            !_0x4d6691['has'](_0xdf4888['href']) && (_0x4d6691['add'](_0xdf4888['href']), _0xda22d8['push'](_0xdf4888));
                        }
                        return _0xda22d8['forEach']((_0x1e27e8, _0x3223c2) => {
                            setTimeout(() => {
                                if (_0x1e27e8['target'] !== '_blank') _0x1e27e8['target'] = '_blank';
                                _0x1e27e8['click']();
                            }, _0x3223c2 * (-0xc46 * -0x3 + -0xe * -0x1ea + -0x3a * 0x10b));
                        }), _0xda22d8['length'];
                    }
                });
                _0x535803 = _0xb5bccc?.[-0x1 * -0x695 + 0xe3e * 0x1 + 0x1 * -0x14d3]?.['result'] || 0x277 * 0xa + -0x10 * -0x10f + -0x2996;
            } catch (_0x9b30a3) {}
            _0x284300 += _0x535803;
            _0x535803 > 0x13cd * -0x1 + -0x1 * -0x3d5 + -0x1 * -0xff8 && await delay(_0x535803 * (0x1f * -0x10d + 0x1 * 0xb8c + 0x1827) + (-0x2d * 0xc8 + -0x27 * -0x35 + 0x1efd * 0x1));
            _0x34cfc9['length'] > 0x24bf + 0x1d * -0x135 + 0x2 * -0xdf && (console['log']('[BingAutoSearch] Chờ ' + _0x34cfc9['length'] + ' tab verification được load đầy đủ...'), await Promise['all'](_0x34cfc9['map'](_0xefe65e => waitForTabLoad(_0xefe65e, -0x22a9 + -0xd * 0xc1 + 0x1fff * 0x2)['catch'](() => {}))), await delay(0x1 * -0xb6b + 0x605 + -0x18d * -0x6));
            chrome['tabs']['onCreated']['removeListener'](_0x30de04);
            if (_0x34cfc9['length'] > 0x167b + -0x1d0b + 0x690) try {
                _0x34cfc9['forEach'](_0x872791 => chrome['tabs']['remove'](_0x872791)['catch'](() => {}));
            } catch (_0x3c1ce1) {}
        }
        if (_0x284300 === 0x15e9 + -0x17a5 + 0x1 * 0x1bc) {
            console['log']('[BingAutoSearch] ✅ Verification pass ' + (_0x5148d1 + (-0x208b + -0x1 * -0x257f + 0x4f3 * -0x1)) + ': Tất cả task đã hoàn thành sạch sẽ ở MỌI TRẠM!');
            break;
        }
        console['log']('[BingAutoSearch] ⚠️ Verification pass ' + (_0x5148d1 + (0x1d4d * 0x1 + 0x8 * 0x161 + -0x2854)) + ': Còn ' + _0x284300 + ' task chưa xong. Đang retry...'), _0x26948d += _0x284300;
    }
    if (searchState['abortSignal']) {
        console['log']('[BingAutoSearch] 🛑 LƯU Ý: Tiến trình Daily Set đã BỊ DỪNG bởi Khóa khẩn cấp!'), chrome['tabs']['remove'](_0x1649ba['id'])['catch'](() => {});
        return;
    }
    try {
        await chrome['tabs']['update'](_0x1649ba['id'], {
            'active': !![],
            'url': 'https://rewards.bing.com/'
        }), await waitForTabLoad(_0x1649ba['id']);
    } catch (_0x42a65f) {}
    if (_0x26948d === -0x1a1 * -0x17 + 0x42a * 0x3 + -0x723 * 0x7) {
        !_0x37a567 ? chrome['scripting']['executeScript']({
            'target': {
                'tabId': _0x1649ba['id']
            },
            'func': () => alert('[BingAutoSearch] 🎉 Tuyệt vời! Bạn đã hoàn thành sạch sẽ tất cả nhiệm vụ hôm nay ở cả 2 trạm!')
        })['catch'](() => {}) : chrome['tabs']['remove'](_0x1649ba['id'])['catch'](() => {});
        return;
    }!_0x37a567 ? chrome['scripting']['executeScript']({
        'target': {
            'tabId': _0x1649ba['id']
        },
        'func': _0x3dbeef => {
            alert('[BingAutoSearch] 🎁 ĐÃ XONG! Màn Ảo Thuật bóp cổ ' + _0x3dbeef + ' Nháy đã thành công và đã tự động DỌN DẸP SẠCH SẼ các Hậu Quả (Tab thừa) cho bạn luôn rồi nghen!\x0a\x0aNhấn OK và Ấn F5 để cùng chiêm ngưỡng 1 bầu trời Tích Xanh nha!');
        },
        'args': [_0x26948d]
    })['catch'](() => {}) : (await delay(0x2442 + -0x8e6 + -0x1968), chrome['tabs']['remove'](_0x1649ba['id'])['catch'](() => {}), console['log']('[BingAutoSearch] Chạy cày Daily Set ẩn thành công! Khởi động quá trình tìm kiếm thông thường...'));
}

function backupSearchState() {
    if (!searchState['isRunning']) return;
    chrome['storage']['local']['set']({
        'searchRunning': !![],
        'searchStateBackup': {
            'currentSearch': searchState['currentSearch'],
            'totalSearches': searchState['totalSearches'],
            'currentPhase': searchState['currentPhase'],
            'startTime': searchState['startTime'],
            'completedTotal': searchState['completedTotal'],
            'settings': searchState['settings'],
            'usedKeywords': searchState['usedKeywords']
        }
    });
}

function clearSearchBackup() {
    chrome['storage']['local']['remove'](['searchRunning', 'searchStateBackup']);
}
async function resetKeywords() {
    searchState['usedKeywords'] = [];
    if (typeof MOBILE_PROFILES !== 'undefined') {
        const _0x43a040 = searchState['settings']['mobileProfileIndex'];
        searchState['settings']['mobileProfileIndex'] = Math['floor'](Math['random']() * MOBILE_PROFILES['length']);
        const _0x46e015 = searchState['settings']['mobileProfileIndex'],
            _0x1cc5d0 = MOBILE_PROFILES[_0x46e015] || MOBILE_PROFILES[0x1a58 + 0x1 * -0xbb2 + -0x19 * 0x96];
        console['log']('[BingAutoSearch] Reset: Profile ' + _0x43a040 + ' → ' + _0x46e015 + ' (' + _0x1cc5d0['name'] + ')');
    }
    await saveSettings(), console['log']('[BingAutoSearch] Settings saved, mobileProfileIndex:', searchState['settings']['mobileProfileIndex']);
}

const READ_TO_EARN_UA_RULE_ID = 245001;
const READ_TO_EARN_CLIENT_ID = '0000000040170455';
const READ_TO_EARN_AUTH_URL = 'https://login.live.com/oauth20_authorize.srf';
const READ_TO_EARN_REDIRECT_URL = 'https://login.live.com/oauth20_desktop.srf';
const READ_TO_EARN_TOKEN_URL = 'https://login.microsoftonline.com/consumers/oauth2/v2.0/token';
const READ_TO_EARN_SCOPE = 'service::prod.rewardsplatform.microsoft.com::MBI_SSL';
const READ_TO_EARN_API_ROOT = 'https://prod.rewardsplatform.microsoft.com/dapi';
const READ_TO_EARN_USER_AGENT = 'Bing/32.5.431027001 (com.microsoft.bing; build:431027001; iOS 17.6.1) Alamofire/5.10.2';
const READ_TO_EARN_TOTAL_ARTICLES = 10;
let readToEarnState = {
    'isRunning': ![],
    'currentArticle': 0x0,
    'totalArticles': READ_TO_EARN_TOTAL_ARTICLES,
    'articlesRead': 0x0,
    'totalGained': 0x0,
    'status': 'idle',
    'error': ''
};
let dailyCheckInState = {
    'isRunning': ![],
    'status': 'idle',
    'gainedPoints': 0x0,
    'oldBalance': 0x0,
    'newBalance': 0x0,
    'typeTried': null,
    'error': ''
};

function randomHex(_0x2e8c72) {
    const _0x55b820 = new Uint8Array(_0x2e8c72);
    crypto['getRandomValues'](_0x55b820);
    return Array['from'](_0x55b820, _0x49cb5e => _0x49cb5e['toString'](0x10)['padStart'](0x2, '0'))['join']('');
}

function getReadToEarnDelay() {
    const _0x1d32ef = Number(searchState['settings']['readToEarnDelayMin'] || 0x7530),
        _0x380459 = Number(searchState['settings']['readToEarnDelayMax'] || 0xea60),
        _0x39cb91 = Math['min'](_0x1d32ef, _0x380459),
        _0x556518 = Math['max'](_0x1d32ef, _0x380459);
    return Math['floor'](Math['random']() * (_0x556518 - _0x39cb91 + 0x1)) + _0x39cb91;
}

function waitReadToEarnDelay(_0x38fef9) {
    return new Promise(_0x14819d => setTimeout(_0x14819d, _0x38fef9));
}

function broadcastReadToEarnStatus() {
    chrome['runtime']['sendMessage']({
        'type': 'READ_TO_EARN_STATUS',
        'data': readToEarnState
    })['catch'](() => {});
}

function broadcastDailyCheckInStatus() {
    chrome['runtime']['sendMessage']({
        'type': 'DAILY_CHECK_IN_STATUS',
        'data': dailyCheckInState
    })['catch'](() => {});
}

function notifyReadToEarn(_0x448fc2, _0x1efac8) {
    try {
        if (!chrome['notifications']) return;
        chrome['notifications']['create']({
            'type': 'basic',
            'iconUrl': 'icons/icon128.png',
            'title': _0x448fc2,
            'message': _0x1efac8
        });
    } catch (_0x4bcb0f) {
        console['warn']('[BingAutoSearch] Could not show Read to Earn notification:', _0x4bcb0f);
    }
}

function notifyDailyCheckIn(_0x4d4e74, _0x4e67ec) {
    try {
        if (!chrome['notifications']) return;
        chrome['notifications']['create']({
            'type': 'basic',
            'iconUrl': 'icons/icon128.png',
            'title': _0x4d4e74,
            'message': _0x4e67ec
        });
    } catch (_0x2af79d) {
        console['warn']('[BingAutoSearch] Could not show Daily Check-In notification:', _0x2af79d);
    }
}

async function enableReadToEarnHeaders() {
    try {
        await chrome['declarativeNetRequest']['updateDynamicRules']({
            'removeRuleIds': [READ_TO_EARN_UA_RULE_ID],
            'addRules': [{
                'id': READ_TO_EARN_UA_RULE_ID,
                'priority': 0x2,
                'action': {
                    'type': 'modifyHeaders',
                    'requestHeaders': [{
                        'header': 'User-Agent',
                        'operation': 'set',
                        'value': READ_TO_EARN_USER_AGENT
                    }]
                },
                'condition': {
                    'requestDomains': ['prod.rewardsplatform.microsoft.com'],
                    'resourceTypes': ['xmlhttprequest']
                }
            }]
        });
    } catch (_0x276a75) {
        console['warn']('[BingAutoSearch] Could not apply Read to Earn User-Agent rule:', _0x276a75);
    }
}

async function disableReadToEarnHeaders() {
    try {
        await chrome['declarativeNetRequest']['updateDynamicRules']({
            'removeRuleIds': [READ_TO_EARN_UA_RULE_ID]
        });
    } catch (_0x22188b) {}
}

async function waitForReadToEarnOAuthCode(_0x2cf0b2, _0x3189b3) {
    return new Promise((_0x43a571, _0x3674d8) => {
        let _0x512ed9 = ![];
        const _0x16b0ca = () => {
                chrome['tabs']['onUpdated']['removeListener'](_0x41f015);
                chrome['tabs']['onRemoved']['removeListener'](_0x31437c);
                clearInterval(_0x167555);
                clearTimeout(_0x51c003);
            },
            _0x3df062 = _0x8ff24d => {
                if (!_0x8ff24d || _0x512ed9) return;
                try {
                    const _0x313f14 = new URL(_0x8ff24d);
                    if (_0x313f14['hostname'] !== 'login.live.com' || _0x313f14['pathname'] !== '/oauth20_desktop.srf') return;
                    const _0x311355 = _0x313f14['searchParams']['get']('error'),
                        _0x3c61e3 = _0x313f14['searchParams']['get']('code'),
                        _0x20ca8a = _0x313f14['searchParams']['get']('state');
                    if (_0x311355) throw new Error(_0x311355);
                    if (_0x3c61e3 && _0x20ca8a === _0x3189b3) {
                        _0x512ed9 = !![];
                        _0x16b0ca();
                        _0x43a571(_0x3c61e3);
                    }
                } catch (_0x5cab8c) {
                    _0x512ed9 = !![];
                    _0x16b0ca();
                    _0x3674d8(_0x5cab8c);
                }
            },
            _0x41f015 = (_0x4f0102, _0x2ffaf5, _0x51e271) => {
                if (_0x4f0102 === _0x2cf0b2) _0x3df062(_0x2ffaf5['url'] || _0x51e271?.['url']);
            },
            _0x31437c = _0x3dd7d6 => {
                if (_0x3dd7d6 === _0x2cf0b2 && !_0x512ed9) {
                    _0x512ed9 = !![];
                    _0x16b0ca();
                    _0x3674d8(new Error('OAUTH_TAB_CLOSED'));
                }
            },
            _0x167555 = setInterval(async () => {
                try {
                    const _0x14ef77 = await chrome['tabs']['get'](_0x2cf0b2);
                    _0x3df062(_0x14ef77?.['url']);
                } catch (_0x40cf4f) {
                    _0x31437c(_0x2cf0b2);
                }
            }, 0x3e8),
            _0x51c003 = setTimeout(() => {
                if (_0x512ed9) return;
                _0x512ed9 = !![];
                _0x16b0ca();
                _0x3674d8(new Error('OAUTH_TIMEOUT'));
            }, 0x2bf20);
        chrome['tabs']['onUpdated']['addListener'](_0x41f015);
        chrome['tabs']['onRemoved']['addListener'](_0x31437c);
    });
}

async function requestReadToEarnAccessToken() {
    const _0x102d10 = await chrome['storage']['local']['get'](['readToEarnAccessToken', 'readToEarnAccessTokenExpiresAt']);
    if (_0x102d10['readToEarnAccessToken'] && Number(_0x102d10['readToEarnAccessTokenExpiresAt'] || 0x0) > Date['now']() + 0xea60) {
        return _0x102d10['readToEarnAccessToken'];
    }
    const _0x13cfe0 = randomHex(0x10),
        _0x3e99fb = new URL(READ_TO_EARN_AUTH_URL);
    _0x3e99fb['searchParams']['set']('response_type', 'code');
    _0x3e99fb['searchParams']['set']('client_id', READ_TO_EARN_CLIENT_ID);
    _0x3e99fb['searchParams']['set']('redirect_uri', READ_TO_EARN_REDIRECT_URL);
    _0x3e99fb['searchParams']['set']('scope', READ_TO_EARN_SCOPE);
    _0x3e99fb['searchParams']['set']('state', _0x13cfe0);
    _0x3e99fb['searchParams']['set']('access_type', 'offline_access');
    const _0x4f1d6a = await chrome['tabs']['create']({
        'url': _0x3e99fb['href'],
        'active': !![]
    });
    let _0x1f612c = '';
    try {
        _0x1f612c = await waitForReadToEarnOAuthCode(_0x4f1d6a['id'], _0x13cfe0);
    } finally {
        chrome['tabs']['remove'](_0x4f1d6a['id'])['catch'](() => {});
    }
    const _0x1f97e6 = new URLSearchParams();
    _0x1f97e6['set']('grant_type', 'authorization_code');
    _0x1f97e6['set']('client_id', READ_TO_EARN_CLIENT_ID);
    _0x1f97e6['set']('code', _0x1f612c);
    _0x1f97e6['set']('redirect_uri', READ_TO_EARN_REDIRECT_URL);
    const _0x314efc = await fetch(READ_TO_EARN_TOKEN_URL, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'body': _0x1f97e6['toString']()
    });
    if (!_0x314efc['ok']) throw new Error('TOKEN_EXCHANGE_FAILED_' + _0x314efc['status']);
    const _0x4744c9 = await _0x314efc['json'](),
        _0x470a25 = _0x4744c9?.['access_token'];
    if (!_0x470a25) throw new Error('TOKEN_MISSING');
    await chrome['storage']['local']['set']({
        'readToEarnAccessToken': _0x470a25,
        'readToEarnAccessTokenExpiresAt': Date['now']() + Math['max']((Number(_0x4744c9?.['expires_in']) || 0xe10) - 0x3c, 0x3c) * 0x3e8
    });
    return _0x470a25;
}

async function clearReadToEarnAccessToken() {
    await chrome['storage']['local']['remove'](['readToEarnAccessToken', 'readToEarnAccessTokenExpiresAt']);
}

async function readToEarnFetchJson(_0x2c4b45, _0x21d3b9 = {}) {
    const _0x192a94 = await fetch(_0x2c4b45, _0x21d3b9),
        _0x319dc0 = await _0x192a94['text']();
    let _0x358324 = null;
    try {
        _0x358324 = _0x319dc0 ? JSON['parse'](_0x319dc0) : null;
    } catch (_0x3f232a) {}
    if (!_0x192a94['ok']) {
        const _0xb4e473 = new Error('HTTP_' + _0x192a94['status']);
        _0xb4e473['status'] = _0x192a94['status'];
        _0xb4e473['data'] = _0x358324 || _0x319dc0;
        throw _0xb4e473;
    }
    return _0x358324;
}

async function getReadToEarnProfile(_0x2b8086) {
    const _0x528249 = await readToEarnFetchJson(READ_TO_EARN_API_ROOT + '/me?channel=SAIOS&options=613', {
        'method': 'GET',
        'headers': {
            'Authorization': 'Bearer ' + _0x2b8086
        }
    });
    const _0x4a0869 = _0x528249?.['response'],
        _0x44019e = (_0x4a0869?.['profile']?.['attributes']?.['country'] || 'us')['toLowerCase'](),
        _0x2225e6 = Number(_0x4a0869?.['balance'] || 0x0),
        _0x2d68b1 = (_0x4a0869?.['promotions'] || [])['find'](_0x4a0577 => _0x4a0577?.['attributes']?.['offerid'] === 'ENUS_readarticle3_30points' || _0x4a0577?.['attributes']?.['type'] === 'msnreadearn'),
        _0x5ad227 = _0x2d68b1?.['attributes'] || {},
        _0x1e8c1b = Math['max'](0x0, Number(_0x5ad227['pointmax'] || 0x0) - Number(_0x5ad227['pointprogress'] || 0x0));
    return {
        'country': _0x44019e,
        'balance': _0x2225e6,
        'remaining': _0x1e8c1b
    };
}

async function submitReadToEarnActivity(_0x2c747b, _0x43d5ef) {
    return await readToEarnFetchJson(READ_TO_EARN_API_ROOT + '/me/activities', {
        'method': 'POST',
        'headers': {
            'Authorization': 'Bearer ' + _0x2c747b,
            'Content-Type': 'application/json',
            'X-Rewards-Country': _0x43d5ef,
            'X-Rewards-Language': 'en',
            'X-Rewards-ismobile': 'true'
        },
        'body': JSON['stringify']({
            'amount': 0x1,
            'id': randomHex(0x40),
            'type': 0x65,
            'attributes': {
                'offerid': 'ENUS_readarticle3_30points'
            },
            'country': _0x43d5ef
        })
    });
}

function createActivityUuid() {
    if (crypto['randomUUID']) return crypto['randomUUID']();
    const _0x5c0881 = crypto['getRandomValues'](new Uint8Array(0x10));
    _0x5c0881[0x6] = _0x5c0881[0x6] & 0xf | 0x40;
    _0x5c0881[0x8] = _0x5c0881[0x8] & 0x3f | 0x80;
    const _0x3dc603 = Array['from'](_0x5c0881, _0x3478ca => _0x3478ca['toString'](0x10)['padStart'](0x2, '0'))['join']('');
    return _0x3dc603['slice'](0x0, 0x8) + '-' + _0x3dc603['slice'](0x8, 0xc) + '-' + _0x3dc603['slice'](0xc, 0x10) + '-' + _0x3dc603['slice'](0x10, 0x14) + '-' + _0x3dc603['slice'](0x14);
}

async function submitDailyCheckInActivity(_0x3d695c, _0x4c45a3, _0x2347bf) {
    return await readToEarnFetchJson(READ_TO_EARN_API_ROOT + '/me/activities', {
        'method': 'POST',
        'headers': {
            'Authorization': 'Bearer ' + _0x3d695c,
            'Content-Type': 'application/json',
            'X-Rewards-Country': _0x4c45a3,
            'X-Rewards-Language': 'en',
            'X-Rewards-ismobile': 'true'
        },
        'body': JSON['stringify']({
            'id': createActivityUuid(),
            'amount': 0x1,
            'type': _0x2347bf,
            'attributes': {
                'offerid': 'Gamification_Sapphire_DailyCheckIn'
            },
            'country': _0x4c45a3
        })
    });
}

async function doDailyCheckIn(_0x3983d7 = ![]) {
    if (dailyCheckInState['isRunning']) throw new Error('DAILY_CHECK_IN_RUNNING');
    if (readToEarnState['isRunning']) throw new Error('READ_TO_EARN_RUNNING');
    if (searchState['isRunning'] && !_0x3983d7) throw new Error('SEARCH_RUNNING');
    if (!_0x3983d7) await loadSettings();
    dailyCheckInState = {
        'isRunning': !![],
        'status': 'auth',
        'gainedPoints': 0x0,
        'oldBalance': 0x0,
        'newBalance': 0x0,
        'typeTried': null,
        'error': ''
    };
    startKeepAlive();
    broadcastDailyCheckInStatus();
    try {
        await enableReadToEarnHeaders();
        let _0x385a1a = await requestReadToEarnAccessToken(),
            _0x14d814;
        try {
            _0x14d814 = await getReadToEarnProfile(_0x385a1a);
        } catch (_0x47967a) {
            if (_0x47967a?.['status'] !== 0x191) throw _0x47967a;
            await clearReadToEarnAccessToken();
            _0x385a1a = await requestReadToEarnAccessToken();
            _0x14d814 = await getReadToEarnProfile(_0x385a1a);
        }
        const _0x14d14c = _0x14d814['country'] || 'us',
            _0x2b3e7f = Number(_0x14d814['balance'] || 0x0);
        dailyCheckInState['oldBalance'] = _0x2b3e7f;
        dailyCheckInState['newBalance'] = _0x2b3e7f;
        console['log']('[BingAutoSearch] Daily Check-In starting | country=' + _0x14d14c + ' | balance=' + _0x2b3e7f);
        for (const _0x46e570 of [0x65, 0x67]) {
            dailyCheckInState['status'] = 'submitting';
            dailyCheckInState['typeTried'] = _0x46e570;
            broadcastDailyCheckInStatus();
            const _0x18089d = await submitDailyCheckInActivity(_0x385a1a, _0x14d14c, _0x46e570),
                _0x5242f5 = Number(_0x18089d?.['response']?.['balance'] ?? _0x2b3e7f),
                _0x511977 = _0x5242f5 - _0x2b3e7f;
            console['log']('[BingAutoSearch] Daily Check-In response | type=' + _0x46e570 + ' | gained=' + _0x511977 + ' | balance=' + _0x5242f5);
            dailyCheckInState['newBalance'] = _0x5242f5;
            if (_0x511977 > 0x0) {
                dailyCheckInState['gainedPoints'] = _0x511977;
                dailyCheckInState['status'] = 'done';
                dailyCheckInState['isRunning'] = ![];
                notifyDailyCheckIn('Daily Check-In completed', 'Gained +' + _0x511977 + ' points.');
                broadcastDailyCheckInStatus();
                return dailyCheckInState;
            }
        }
        dailyCheckInState['status'] = 'done';
        dailyCheckInState['isRunning'] = ![];
        console['log']('[BingAutoSearch] Daily Check-In done with no points gained');
        notifyDailyCheckIn('Daily Check-In completed', 'No points gained. It may already be completed today.');
        broadcastDailyCheckInStatus();
        return dailyCheckInState;
    } catch (_0x372dec) {
        dailyCheckInState['status'] = 'error';
        dailyCheckInState['isRunning'] = ![];
        dailyCheckInState['error'] = _0x372dec?.['message'] || String(_0x372dec);
        console['error']('[BingAutoSearch] Daily Check-In failed:', _0x372dec);
        notifyDailyCheckIn('Daily Check-In failed', dailyCheckInState['error']);
        broadcastDailyCheckInStatus();
        throw _0x372dec;
    } finally {
        await disableReadToEarnHeaders();
        stopKeepAlive();
    }
}

async function doReadToEarn(_0x26046e = ![]) {
    if (readToEarnState['isRunning']) throw new Error('READ_TO_EARN_RUNNING');
    if (dailyCheckInState['isRunning']) throw new Error('DAILY_CHECK_IN_RUNNING');
    if (searchState['isRunning'] && !_0x26046e) throw new Error('SEARCH_RUNNING');
    if (!_0x26046e) await loadSettings();
    readToEarnState = {
        'isRunning': !![],
        'currentArticle': 0x0,
        'totalArticles': READ_TO_EARN_TOTAL_ARTICLES,
        'articlesRead': 0x0,
        'totalGained': 0x0,
        'status': 'auth',
        'error': ''
    };
    startKeepAlive();
    broadcastReadToEarnStatus();
    try {
        await enableReadToEarnHeaders();
        let _0x5aa00d = await requestReadToEarnAccessToken(),
            _0x1183fc;
        try {
            _0x1183fc = await getReadToEarnProfile(_0x5aa00d);
        } catch (_0x12311e) {
            if (_0x12311e?.['status'] !== 0x191) throw _0x12311e;
            await clearReadToEarnAccessToken();
            _0x5aa00d = await requestReadToEarnAccessToken();
            _0x1183fc = await getReadToEarnProfile(_0x5aa00d);
        }
        let _0x502f99 = Number(_0x1183fc['balance'] || 0x0);
        const _0x444643 = _0x1183fc['country'] || 'us';
        console['log']('[BingAutoSearch] Read to Earn starting | country=' + _0x444643 + ' | balance=' + _0x502f99 + ' | remaining=' + _0x1183fc['remaining']);
        for (let _0xd450f3 = 0x0; _0xd450f3 < READ_TO_EARN_TOTAL_ARTICLES; _0xd450f3++) {
            readToEarnState['status'] = 'reading';
            readToEarnState['currentArticle'] = _0xd450f3 + 0x1;
            broadcastReadToEarnStatus();
            const _0x533f7e = await submitReadToEarnActivity(_0x5aa00d, _0x444643),
                _0x2dcfba = Number(_0x533f7e?.['response']?.['balance'] ?? _0x502f99),
                _0x298ace = _0x2dcfba - _0x502f99;
            console['log']('[BingAutoSearch] Read to Earn article ' + (_0xd450f3 + 0x1) + '/' + READ_TO_EARN_TOTAL_ARTICLES + ' | gained=' + _0x298ace + ' | balance=' + _0x2dcfba);
            if (_0x298ace <= 0x0) break;
            _0x502f99 = _0x2dcfba;
            readToEarnState['articlesRead'] = _0xd450f3 + 0x1;
            readToEarnState['totalGained'] += _0x298ace;
            broadcastReadToEarnStatus();
            if (_0xd450f3 < READ_TO_EARN_TOTAL_ARTICLES - 0x1) await waitReadToEarnDelay(getReadToEarnDelay());
        }
        readToEarnState['status'] = 'done';
        readToEarnState['isRunning'] = ![];
        console['log']('[BingAutoSearch] Read to Earn done | articles=' + readToEarnState['articlesRead'] + ' | gained=' + readToEarnState['totalGained']);
        notifyReadToEarn('Read to Earn completed', 'Read ' + readToEarnState['articlesRead'] + ' articles and gained +' + readToEarnState['totalGained'] + ' points.');
        broadcastReadToEarnStatus();
        return readToEarnState;
    } catch (_0x50a2a3) {
        readToEarnState['status'] = 'error';
        readToEarnState['isRunning'] = ![];
        readToEarnState['error'] = _0x50a2a3?.['message'] || String(_0x50a2a3);
        console['error']('[BingAutoSearch] Read to Earn failed:', _0x50a2a3);
        notifyReadToEarn('Read to Earn failed', readToEarnState['error']);
        broadcastReadToEarnStatus();
        throw _0x50a2a3;
    } finally {
        await disableReadToEarnHeaders();
        stopKeepAlive();
    }
}

function broadcastError(_0xfbf687) {
    chrome['runtime']['sendMessage']({
        'type': 'ERROR',
        'message': _0xfbf687
    })['catch'](() => {});
}

function broadcastStatus() {
    chrome['runtime']['sendMessage']({
        'type': 'STATUS_UPDATE',
        'data': {
            'isRunning': searchState['isRunning'],
            'isDetectingRank': searchState['isDetectingRank'],
            'currentSearch': searchState['currentSearch'],
            'totalSearches': searchState['totalSearches'],
            'usedKeywordsCount': searchState['usedKeywords']['length'],
            'totalKeywords': getTotalKeywordCount(),
            'currentPhase': searchState['currentPhase'],
            'settings': searchState['settings']
        }
    })['catch'](() => {}), backupSearchState();
}
chrome['runtime']['onMessage']['addListener']((_0x2466e7, _0x34d6e4, _0x62d50b) => {
    switch (_0x2466e7['type']) {
        case 'START_SEARCH':
            _0x2466e7['settings'] && (searchState['settings'] = {
                ...searchState['settings'],
                ..._0x2466e7['settings']
            }, saveSettings());
            startSearch(), _0x62d50b({
                'success': !![]
            });
            break;
        case 'STOP_SEARCH':
            stopSearch(), _0x62d50b({
                'success': !![]
            });
            break;
        case 'GET_STATUS':
            _0x62d50b({
                'isRunning': searchState['isRunning'],
                'isDetectingRank': searchState['isDetectingRank'],
                'currentSearch': searchState['currentSearch'],
                'totalSearches': searchState['totalSearches'],
                'usedKeywordsCount': searchState['usedKeywords']['length'],
                'totalKeywords': getTotalKeywordCount(),
                'currentPhase': searchState['currentPhase'],
                'settings': searchState['settings']
            });
            break;
        case 'UPDATE_SETTINGS':
            searchState['settings'] = {
                ...searchState['settings'],
                ..._0x2466e7['settings']
            }, saveSettings(), _0x62d50b({
                'success': !![]
            });
            break;
        case 'RESET_KEYWORDS':
            resetKeywords()['then'](() => _0x62d50b({
                'success': !![]
            }));
            return !![];
        case 'CLEAR_CACHE':
            clearBingSession()['then'](() => _0x62d50b({
                'success': !![]
            }));
            return !![];
        case 'OPEN_MOBILE_MODE':
            openMobileMode()['then'](_0x51d4ea => _0x62d50b({
                'success': !![],
                'windowId': _0x51d4ea?.['id']
            }))['catch'](_0x50413d => {
                console['error']('[BingAutoSearch] Failed to open Mobile Mode:', _0x50413d), _0x62d50b({
                    'success': ![],
                    'error': _0x50413d?.['message'] || 'OPEN_FAILED'
                });
            });
            return !![];
        case 'IS_MOBILE_MODE_TAB':
            getMobileModeContext()['then'](_0x12bfe4 => _0x62d50b({
                'active': !!(_0x12bfe4 && _0x34d6e4['tab'] && _0x34d6e4['tab']['id'] === _0x12bfe4['tabId'])
            }));
            return !![];
        case 'MOBILE_MODE_NAVIGATE':
            getMobileModeContext()['then'](_0x2395be => {
                if (!_0x2395be || !_0x2466e7['url'] || !_0x34d6e4['tab'] || _0x34d6e4['tab']['id'] !== _0x2395be['tabId']) {
                    _0x62d50b({
                        'success': ![]
                    });
                    return;
                }
                chrome['tabs']['update'](_0x2395be['tabId'], {
                    'url': _0x2466e7['url'],
                    'active': !![]
                })['then'](() => chrome['windows']['update'](_0x2395be['windowId'], {
                    'focused': !![]
                }))['then'](() => _0x62d50b({
                    'success': !![]
                }))['catch'](_0x3be01c => _0x62d50b({
                    'success': ![],
                    'error': _0x3be01c?.['message'] || 'NAVIGATE_FAILED'
                }));
            });
            return !![];
        case 'DO_DAILY_SET':
            doDailySet(), _0x62d50b({
                'success': !![]
            });
            break;
        case 'DO_READ_TO_EARN':
            doReadToEarn()['then'](_0x2ffce1 => _0x62d50b({
                'success': !![],
                'data': _0x2ffce1
            }))['catch'](_0x51200a => _0x62d50b({
                'success': ![],
                'error': _0x51200a?.['message'] || String(_0x51200a)
            }));
            return !![];
        case 'DO_DAILY_CHECK_IN':
            doDailyCheckIn()['then'](_0x3cd26f => _0x62d50b({
                'success': !![],
                'data': _0x3cd26f
            }))['catch'](_0x2a3c54 => _0x62d50b({
                'success': ![],
                'error': _0x2a3c54?.['message'] || String(_0x2a3c54)
            }));
            return !![];
        case 'GET_READ_TO_EARN_STATUS':
            _0x62d50b({
                'success': !![],
                'data': readToEarnState
            });
            break;
        case 'GET_DAILY_CHECK_IN_STATUS':
            _0x62d50b({
                'success': !![],
                'data': dailyCheckInState
            });
            break;
        case 'CHECK_LICENSE':
            _0x62d50b({
                'active': !![],
                'message': ''
            });
            break;
    }
    return !![];
});

function blockWebRTCLeak() {
    chrome['privacy'] && chrome['privacy']['network'] && chrome['privacy']['network']['webRTCIPHandlingPolicy']['set']({
        'value': 'disable_non_proxied_udp'
    }, () => {
        console['log']('[BingAutoSearch] 🛡️ Đã bật khiên chống rò rỉ IP (WebRTC Blocked).');
    });
}
blockWebRTCLeak(), loadSettings(), disableMobileUA(), tryRecoverSearch(), chrome['runtime']['onStartup']['addListener'](() => {
    console['log']('[BingAutoSearch] Browser Started - onStartup Triggered!');
}), setTimeout(async () => {
    try {
        const _0x1f3599 = await chrome['storage']['session']['get'](['farmModeStarted']);
        !_0x1f3599['farmModeStarted'] && (await loadSettings(), searchState['settings'] && searchState['settings']['farmMode'] && (console['log']('[BingAutoSearch] 🤖 AUTO FARM MODE ON: Automatically starting sequence in 3 seconds...'), await chrome['storage']['session']['set']({
            'farmModeStarted': !![]
        }), setTimeout(() => {
            startSearch();
        }, 0x26a0 + 0x2402 + -0x3eea)));
    } catch (_0x32361e) {
        console['warn']('[BingAutoSearch] Error checking farm startup logic:', _0x32361e);
    }
}, -0x269e + -0x1c2e * -0x1 + 0x1240);
