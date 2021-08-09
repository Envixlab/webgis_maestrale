var size = 0;

var styleCache_LimitiSIC={}
var style_LimitiSIC = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0})
    })];
    if (feature.get("Denominazione") !== null) {
        var labelText = String(feature.get("Denominazione"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_LimitiSIC[key]){
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
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 5
              }),
            });
        styleCache_LimitiSIC[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_LimitiSIC[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};