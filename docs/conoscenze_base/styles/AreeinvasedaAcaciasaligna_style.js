var size = 0;

var styleCache_AreeinvasedaAcaciasaligna={}
var style_AreeinvasedaAcaciasaligna = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(188,63,217,0.8)"})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_AreeinvasedaAcaciasaligna[key]){
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
        styleCache_AreeinvasedaAcaciasaligna[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_AreeinvasedaAcaciasaligna[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};