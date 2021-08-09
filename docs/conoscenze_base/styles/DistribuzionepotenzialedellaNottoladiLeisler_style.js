var size = 0;
var categories_DistribuzionepotenzialedellaNottoladiLeisler = {"Alta": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(227,26,28,0.8)"})
    })],
"Bassa": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,0,0.8)"})
    })],
"Media": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,170,0,0.8)"})
    })],
"Non presente": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,185,0.8)"})
    })]};
var styleCache_DistribuzionepotenzialedellaNottoladiLeisler={}
var style_DistribuzionepotenzialedellaNottoladiLeisler = function(feature, resolution){
    var value = feature.get("Probabilità di presenza");
    var style = categories_DistribuzionepotenzialedellaNottoladiLeisler[value];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_DistribuzionepotenzialedellaNottoladiLeisler[key]){
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
        styleCache_DistribuzionepotenzialedellaNottoladiLeisler[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DistribuzionepotenzialedellaNottoladiLeisler[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};