var size = 0;
var placement = 'point';
function categories_Redviariabsicadeprevencindeincendios_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'No revestido':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(166,97,26,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Revestido':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(87,88,96,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Redviariabsicadeprevencindeincendios_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("REVESTIMEN");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Redviariabsicadeprevencindeincendios_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
