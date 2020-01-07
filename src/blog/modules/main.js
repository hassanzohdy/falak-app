// run any operations here
// this file is loaded before the router is ready so you can subscribe to events or run initial operations here. 
// Please DO NOT write any instant executable code outside the ready method. 
let events = DI.resolve('events');

window.currentSettings = {};

window.layoutIsLoaded = false;

window.settings = function (key, $default = null) {
    return Object.get(window.currentSettings, key, $default);
}

function updateSettings(settings, detectChanges = null) {
    window.currentSettings = settings;

    events.trigger('layout.update', settings);

    window.layoutIsLoaded = true;

    if (detectChanges !== false) {
        DI.resolve('layout').detectChanges();
    }
}

// once the application is ready, execute the given callback to 
// the event before the router scanner starts.
events.on('app.ready', () => {
    // write your code here.
    trackVisitor();
    let meta = DI.resolve('meta');

    meta.setSiteName(trans('siteName'));
}).on('content.rendered', e => {
    setTimeout(() => {
        markAdsAsViewed();
    }, 500);
});

function initAdsWidgets() {
    _global('ADS_WIDGETS', []);
}

function addAdWidget(widget) {
    if (Array.get(ADS_WIDGETS, ad => ad.id == widget.id)) return;

    ADS_WIDGETS.push(widget);
}

function markAdsAsViewed() {
    let campaignsService = DI.resolve('campaignsService');

    let adsIds = ADS_WIDGETS.map(ad => ad.id);

    campaignsService.viewedAds(adsIds);
}

_const('VISITOR_CACHE_KEY', 'v');

function trackVisitor() {
    let cache = DI.resolve('cache');
    let cacheKey = VISITOR_CACHE_KEY; // v for visitor 
    if (! cache.has(cacheKey)) {
        cache.set(cacheKey, Random.string(12));
    }

    _const('VISITOR_ID', cache.get(VISITOR_CACHE_KEY));
    return;
}


window.URLS = {
    news(news) {
        return news.slug;
    },
    category(category) {
        return category.slug;
    },
}