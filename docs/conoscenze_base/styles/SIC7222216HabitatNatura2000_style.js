var size = 0;
var categories_SIC7222216HabitatNatura2000 = {"2120": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,185,0.8)"})
    })],
"1130": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(90,255,255,0.8)"})
    })],
"1210-2110": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,0,0.8)"})
    })],
"1310-1410-1420-1430-1510*-3170*-6420": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(170,216,114,0.8)"})
    })],
"2270-1410-6420": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(207,236,13,0.8)"})
    })],
"2230-2240-2260": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(239,138,187,0.8)"})
    })],
"No Habitat": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(219,219,219,0.8)"})
    })]};
var styleCache_SIC7222216HabitatNatura2000={}
var style_SIC7222216HabitatNatura2000 = function(feature, resolution){
    var value = feature.get("habitat");
    var style = categories_SIC7222216HabitatNatura2000[value];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_SIC7222216HabitatNatura2000[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_SIC7222216HabitatNatura2000[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_SIC7222216HabitatNatura2000[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};