var size = 0;

var styleCache_Riqualificazioneeconservazionedelleduneconginepripiantumazione={}
var style_Riqualificazioneeconservazionedelleduneconginepripiantumazione = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(51,160,44,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(37,221,138,1.0)"})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Riqualificazioneeconservazionedelleduneconginepripiantumazione[key]){
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
        styleCache_Riqualificazioneeconservazionedelleduneconginepripiantumazione[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Riqualificazioneeconservazionedelleduneconginepripiantumazione[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};