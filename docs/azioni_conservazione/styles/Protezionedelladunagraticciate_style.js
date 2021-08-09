var size = 0;

var styleCache_Protezionedelladunagraticciate={}
var style_Protezionedelladunagraticciate = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(149,149,112,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'round', width: 2}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(144,144,108,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
    }),new ol.style.Style({
        
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Protezionedelladunagraticciate[key]){
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
        styleCache_Protezionedelladunagraticciate[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Protezionedelladunagraticciate[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};