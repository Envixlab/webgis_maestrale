var size = 0;

var styleCache_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250={}
var style_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250 = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
          scale: 1,
          src: 'ico/leaf.png'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250[key]){
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
        styleCache_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};