exports.config = {
    directConnect: true,
    framework: 'jasmine',
    baseUrl: 'http://localhost:8080',
    specs:['specs/**-spec.js'],
    onPrepare: function() {
        BhxBrowser.ignoreSynchronization = true;
    },
    capabilities: {
        'browserName': 'chrome'
    }
}