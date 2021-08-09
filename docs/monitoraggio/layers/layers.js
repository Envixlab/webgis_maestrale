var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'Thunderforest Landscape',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_chirotteri = new ol.format.GeoJSON();
var features_chirotteri = format_chirotteri.readFeatures(geojson_chirotteri, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chirotteri = new ol.source.Vector();
jsonSource_chirotteri.addFeatures(features_chirotteri);var lyr_chirotteri = new ol.layer.Vector({
                source:jsonSource_chirotteri, 
                style: style_chirotteri,
                title: "Monitoraggio post interventi della fauna. Specie target: Chirotteri"
            });var format_Emys = new ol.format.GeoJSON();
var features_Emys = format_Emys.readFeatures(geojson_Emys, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emys = new ol.source.Vector();
jsonSource_Emys.addFeatures(features_Emys);var lyr_Emys = new ol.layer.Vector({
                source:jsonSource_Emys, 
                style: style_Emys,
                title: "Monitoraggio post interventi della fauna. Specie target: <i>Emys orbicularis</i> <br> (testuggine palustre europea)"
            });var format_Testudo = new ol.format.GeoJSON();
var features_Testudo = format_Testudo.readFeatures(geojson_Testudo, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Testudo = new ol.source.Vector();
jsonSource_Testudo.addFeatures(features_Testudo);var lyr_Testudo = new ol.layer.Vector({
                source:jsonSource_Testudo, 
                style: style_Testudo,
                title: "Monitoraggio post interventi della fauna. Specie target: <i>Testudo hermanni hermanni</i> <br> (testuggine di Herman)"
            });var format_Pianteadimora = new ol.format.GeoJSON();
var features_Pianteadimora = format_Pianteadimora.readFeatures(geojson_Pianteadimora, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pianteadimora = new ol.source.Vector();
jsonSource_Pianteadimora.addFeatures(features_Pianteadimora);var lyr_Pianteadimora = new ol.layer.Vector({
                source:jsonSource_Pianteadimora, 
                style: style_Pianteadimora,
                title: "Monitoraggio post interventi degli habitat. Intervento: Messa a dimora <br> di specie autoctone"
            });var format_Ginepro = new ol.format.GeoJSON();
var features_Ginepro = format_Ginepro.readFeatures(geojson_Ginepro, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ginepro = new ol.source.Vector();
jsonSource_Ginepro.addFeatures(features_Ginepro);var lyr_Ginepro = new ol.layer.Vector({
                source:jsonSource_Ginepro, 
                style: style_Ginepro,
                title: "Monitoraggio post interventi degli habitat. Intervento: riqualificazione <br> dell'habitat 2250* Dune con ginepri"
            });var format_Acacia = new ol.format.GeoJSON();
var features_Acacia = format_Acacia.readFeatures(geojson_Acacia, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acacia = new ol.source.Vector();
jsonSource_Acacia.addFeatures(features_Acacia);var lyr_Acacia = new ol.layer.Vector({
                source:jsonSource_Acacia, 
                style: style_Acacia,
                title: "Monitoraggio post interventi degli habitat. Intervento: Eradicazione dell'<i>Acacia saligna</i>"
            });var format_Passerelle = new ol.format.GeoJSON();
var features_Passerelle = format_Passerelle.readFeatures(geojson_Passerelle, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passerelle = new ol.source.Vector();
jsonSource_Passerelle.addFeatures(features_Passerelle);var lyr_Passerelle = new ol.layer.Vector({
                source:jsonSource_Passerelle, 
                style: style_Passerelle,
                title: "Monitoraggio post interventi degli habitat. Intervento: Protezione dell'avaduna <br> habitat 2260 Dune con vegetazione di sclerofille del <i>Cisto-Lavanduletalia<i>"
            });var format_LimitiSIC = new ol.format.GeoJSON();
var features_LimitiSIC = format_LimitiSIC.readFeatures(geojson_LimitiSIC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitiSIC = new ol.source.Vector();
jsonSource_LimitiSIC.addFeatures(features_LimitiSIC);var lyr_LimitiSIC = new ol.layer.Vector({
                source:jsonSource_LimitiSIC, 
                style: style_LimitiSIC,
                title: "Limiti SIC"
            });

lyr_LimitiSIC.setVisible(true);lyr_chirotteri.setVisible(false);lyr_Emys.setVisible(false);lyr_Testudo.setVisible(false);lyr_Pianteadimora.setVisible(false);lyr_Ginepro.setVisible(false);lyr_Acacia.setVisible(false);lyr_Passerelle.setVisible(false);
var layersList = [baseLayer,lyr_chirotteri,lyr_Emys,lyr_Testudo,lyr_Pianteadimora,lyr_Ginepro,lyr_Acacia,lyr_Passerelle,lyr_LimitiSIC];
lyr_LimitiSIC.set('fieldAliases', {'id': 'id', 'Denominazione': 'Denominazione', });
lyr_chirotteri.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'descr': 'descr', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Emys.set('fieldAliases', {'id': 'id', 'Descerizio': 'Descerizio', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Testudo.set('fieldAliases', {'id': 'id', 'Descri': 'Descri', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Pianteadimora.set('fieldAliases', {'id': 'id', 'Descrizion': 'Descrizion', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Ginepro.set('fieldAliases', {'id': 'id', 'Descrizion': 'Descrizion', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Acacia.set('fieldAliases', {'id': 'id', 'Descrizion': 'Descrizion', 'foto': 'foto', 'html_exp': 'html_exp', });
lyr_Passerelle.set('fieldAliases', {'id': 'id', 'Descri': 'Descri', 'html_exp': 'html_exp', 'foto': 'foto', 'label': 'label', });
lyr_LimitiSIC.set('fieldImages', {'id': 'TextEdit', 'Denominazione': 'TextEdit', });
lyr_chirotteri.set('fieldImages', {'id': 'TextEdit', 'tipo': 'TextEdit', 'descr': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Emys.set('fieldImages', {'id': 'TextEdit', 'Descerizio': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Testudo.set('fieldImages', {'id': 'TextEdit', 'Descri': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Pianteadimora.set('fieldImages', {'id': 'TextEdit', 'Descrizion': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Ginepro.set('fieldImages', {'id': 'TextEdit', 'Descrizion': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Acacia.set('fieldImages', {'id': 'TextEdit', 'Descrizion': 'TextEdit', 'foto': 'TextEdit', 'html_exp': 'TextEdit', });
lyr_Passerelle.set('fieldImages', {'id': 'TextEdit', 'Descri': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', 'label': 'TextEdit', });
lyr_LimitiSIC.set('fieldLabels', {'id': 'no label', 'Denominazione': 'no label', });
lyr_chirotteri.set('fieldLabels', {'id': 'no label', 'tipo': 'no label', 'descr': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Emys.set('fieldLabels', {'id': 'no label', 'Descerizio': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Testudo.set('fieldLabels', {'id': 'no label', 'Descri': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Pianteadimora.set('fieldLabels', {'id': 'no label', 'Descrizion': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Ginepro.set('fieldLabels', {'id': 'no label', 'Descrizion': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Acacia.set('fieldLabels', {'id': 'no label', 'Descrizion': 'no label', 'foto': 'no label', 'html_exp': 'no label', });
lyr_Passerelle.set('fieldLabels', {'id': 'no label', 'Descri': 'no label', 'html_exp': 'no label', 'foto': 'no label', 'label': 'no label', });
