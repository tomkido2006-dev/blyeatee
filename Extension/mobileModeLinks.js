(function() {
    let isMobileModeTab = false;

    chrome.runtime.sendMessage({
        type: 'IS_MOBILE_MODE_TAB'
    }, response => {
        isMobileModeTab = !!response?.active;
    });

    function shouldHandleUrl(url) {
        return url && !url.startsWith('javascript:') && !url.startsWith('mailto:') && !url.startsWith('tel:');
    }

    document.addEventListener('click', event => {
        if (!isMobileModeTab || event.defaultPrevented) return;

        const anchor = event.target?.closest?.('a[href]');
        if (!anchor || !shouldHandleUrl(anchor.href)) return;

        event.preventDefault();
        event.stopPropagation();

        chrome.runtime.sendMessage({
            type: 'MOBILE_MODE_NAVIGATE',
            url: anchor.href
        });
    }, true);
}());
