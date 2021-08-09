var size = 0;

var styleCache_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri={}
var style_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
          scale: 1,
          src: 'ico/bats.png'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri[key]){
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
        styleCache_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};