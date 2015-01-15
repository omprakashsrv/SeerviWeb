/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['150px', '10px','500px','279px','auto', 'auto'],
                text: "Seervi Samaj Bilawas",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 50, "rgba(195,1,1,1.00)", "700", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["color", "color", 'rgba(195,1,1,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '142px'],
                ["style", "width", '516px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["style", "height", '279px'],
                ["style", "font-weight", '700'],
                ["style", "font-size", '50px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "width", '800px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            labels: {
                "Label 1": 12000
            },
            timeline: [
                { id: "eid9", tween: [ "color", "${_Text}", "color", 'rgba(251,173,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(195,1,1,1)'}], position: 0, duration: 2000 },
                { id: "eid10", tween: [ "color", "${_Text}", "color", 'rgba(102,251,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,173,1,1)'}], position: 2000, duration: 2000 },
                { id: "eid11", tween: [ "color", "${_Text}", "color", 'rgba(0,251,172,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(102,251,0,1)'}], position: 4000, duration: 2000 },
                { id: "eid12", tween: [ "color", "${_Text}", "color", 'rgba(0,39,251,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,251,172,1)'}], position: 6000, duration: 2000 },
                { id: "eid13", tween: [ "color", "${_Text}", "color", 'rgba(243,0,251,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,39,251,1)'}], position: 8000, duration: 2000 },
                { id: "eid14", tween: [ "color", "${_Text}", "color", 'rgba(251,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,0,251,1)'}], position: 10000, duration: 2000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-33275299");
