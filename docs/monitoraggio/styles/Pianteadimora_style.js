var size = 0;

var styleCache_Pianteadimora={}
var style_Pianteadimora = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
          scale: 1,
          src: 'ico/piante.png'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Pianteadimora[key]){
        var text = new ol.style.Text({
              font: '10px \'None\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
              }),
            });
        styleCache_Pianteadimora[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Pianteadimora[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};