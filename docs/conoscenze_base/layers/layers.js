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
var format_DistribuzionepotenzialedellaTartarugaditerra = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedellaTartarugaditerra = format_DistribuzionepotenzialedellaTartarugaditerra.readFeatures(geojson_DistribuzionepotenzialedellaTartarugaditerra, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedellaTartarugaditerra = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedellaTartarugaditerra.addFeatures(features_DistribuzionepotenzialedellaTartarugaditerra);var lyr_DistribuzionepotenzialedellaTartarugaditerra = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedellaTartarugaditerra, 
                style: style_DistribuzionepotenzialedellaTartarugaditerra,
                title: "Distribuzione potenziale della Tartaruga di terra"
            });
			
var format_DistribuzionepotenzialedellaTestugginepalustre = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedellaTestugginepalustre = format_DistribuzionepotenzialedellaTestugginepalustre.readFeatures(geojson_DistribuzionepotenzialedellaTestugginepalustre, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedellaTestugginepalustre = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedellaTestugginepalustre.addFeatures(features_DistribuzionepotenzialedellaTestugginepalustre);var lyr_DistribuzionepotenzialedellaTestugginepalustre = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedellaTestugginepalustre, 
                style: style_DistribuzionepotenzialedellaTestugginepalustre,
                title: "Distribuzione potenziale della Testuggine palustre "
            });
			
var format_DistribuzionepotenzialedelPipistrellonano = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedelPipistrellonano = format_DistribuzionepotenzialedelPipistrellonano.readFeatures(geojson_DistribuzionepotenzialedelPipistrellonano, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedelPipistrellonano = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedelPipistrellonano.addFeatures(features_DistribuzionepotenzialedelPipistrellonano);var lyr_DistribuzionepotenzialedelPipistrellonano = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedelPipistrellonano, 
                style: style_DistribuzionepotenzialedelPipistrellonano,
                title: "Distribuzione potenziale del Pipistrello nano"
            });

var format_DistribuzionepotenzialedellOrecchionemeridionale = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedellOrecchionemeridionale = format_DistribuzionepotenzialedellOrecchionemeridionale.readFeatures(geojson_DistribuzionepotenzialedellOrecchionemeridionale, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedellOrecchionemeridionale = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedellOrecchionemeridionale.addFeatures(features_DistribuzionepotenzialedellOrecchionemeridionale);var lyr_DistribuzionepotenzialedellOrecchionemeridionale = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedellOrecchionemeridionale, 
                style: style_DistribuzionepotenzialedellOrecchionemeridionale,
                title: "Distribuzione potenziale dell'Orecchione meridionale"
            });
			
var format_DistribuzionepotenzialedellaNottolacomune = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedellaNottolacomune = format_DistribuzionepotenzialedellaNottolacomune.readFeatures(geojson_DistribuzionepotenzialedellaNottolacomune, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedellaNottolacomune = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedellaNottolacomune.addFeatures(features_DistribuzionepotenzialedellaNottolacomune);var lyr_DistribuzionepotenzialedellaNottolacomune = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedellaNottolacomune, 
                style: style_DistribuzionepotenzialedellaNottolacomune,
                title: "Distribuzione potenziale della Nottola comune"
            });
			
var format_DistribuzionepotenzialedellaNottoladiLeisler = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedellaNottoladiLeisler = format_DistribuzionepotenzialedellaNottoladiLeisler.readFeatures(geojson_DistribuzionepotenzialedellaNottoladiLeisler, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedellaNottoladiLeisler = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedellaNottoladiLeisler.addFeatures(features_DistribuzionepotenzialedellaNottoladiLeisler);var lyr_DistribuzionepotenzialedellaNottoladiLeisler = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedellaNottoladiLeisler, 
                style: style_DistribuzionepotenzialedellaNottoladiLeisler,
                title: "Distribuzione potenziale della Nottola di Leisler"
            });
			
var format_DistribuzionepotenzialedelPipistrellodiSavi = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedelPipistrellodiSavi = format_DistribuzionepotenzialedelPipistrellodiSavi.readFeatures(geojson_DistribuzionepotenzialedelPipistrellodiSavi, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedelPipistrellodiSavi = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedelPipistrellodiSavi.addFeatures(features_DistribuzionepotenzialedelPipistrellodiSavi);var lyr_DistribuzionepotenzialedelPipistrellodiSavi = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedelPipistrellodiSavi, 
                style: style_DistribuzionepotenzialedelPipistrellodiSavi,
                title: "Distribuzione potenziale del Pipistrello di Savi"
            });
			
var format_DistribuzionepotenzialedelPipistrelloalbolimbato = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedelPipistrelloalbolimbato = format_DistribuzionepotenzialedelPipistrelloalbolimbato.readFeatures(geojson_DistribuzionepotenzialedelPipistrelloalbolimbato, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedelPipistrelloalbolimbato = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedelPipistrelloalbolimbato.addFeatures(features_DistribuzionepotenzialedelPipistrelloalbolimbato);var lyr_DistribuzionepotenzialedelPipistrelloalbolimbato = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedelPipistrelloalbolimbato, 
                style: style_DistribuzionepotenzialedelPipistrelloalbolimbato,
                title: "Distribuzione potenziale del Pipistrello albolimbato"
            });
			
var format_DistribuzionepotenzialedelMolossodiCestoni = new ol.format.GeoJSON();
var features_DistribuzionepotenzialedelMolossodiCestoni = format_DistribuzionepotenzialedelMolossodiCestoni.readFeatures(geojson_DistribuzionepotenzialedelMolossodiCestoni, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionepotenzialedelMolossodiCestoni = new ol.source.Vector();
jsonSource_DistribuzionepotenzialedelMolossodiCestoni.addFeatures(features_DistribuzionepotenzialedelMolossodiCestoni);var lyr_DistribuzionepotenzialedelMolossodiCestoni = new ol.layer.Vector({
                source:jsonSource_DistribuzionepotenzialedelMolossodiCestoni, 
                style: style_DistribuzionepotenzialedelMolossodiCestoni,
                title: "Distribuzione potenziale del Molosso di Cestoni"
            });

var format_AreeinvasedaAcaciasaligna = new ol.format.GeoJSON();
var features_AreeinvasedaAcaciasaligna = format_AreeinvasedaAcaciasaligna.readFeatures(geojson_AreeinvasedaAcaciasaligna, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreeinvasedaAcaciasaligna = new ol.source.Vector();
jsonSource_AreeinvasedaAcaciasaligna.addFeatures(features_AreeinvasedaAcaciasaligna);var lyr_AreeinvasedaAcaciasaligna = new ol.layer.Vector({
                source:jsonSource_AreeinvasedaAcaciasaligna, 
                style: style_AreeinvasedaAcaciasaligna,
                title: "Aree invase da Acacia saligna"
            });

var format_SIC7228221HabitatNatura2000 = new ol.format.GeoJSON();
var features_SIC7228221HabitatNatura2000 = format_SIC7228221HabitatNatura2000.readFeatures(geojson_SIC7228221HabitatNatura2000, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIC7228221HabitatNatura2000 = new ol.source.Vector();
jsonSource_SIC7228221HabitatNatura2000.addFeatures(features_SIC7228221HabitatNatura2000);var lyr_SIC7228221HabitatNatura2000 = new ol.layer.Vector({
                source:jsonSource_SIC7228221HabitatNatura2000, 
                style: style_SIC7228221HabitatNatura2000,
                title: "SIC 7228221 Habitat Natura 2000"
            });var format_SIC7222217HabitatNatura2000 = new ol.format.GeoJSON();
var features_SIC7222217HabitatNatura2000 = format_SIC7222217HabitatNatura2000.readFeatures(geojson_SIC7222217HabitatNatura2000, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIC7222217HabitatNatura2000 = new ol.source.Vector();
jsonSource_SIC7222217HabitatNatura2000.addFeatures(features_SIC7222217HabitatNatura2000);var lyr_SIC7222217HabitatNatura2000 = new ol.layer.Vector({
                source:jsonSource_SIC7222217HabitatNatura2000, 
                style: style_SIC7222217HabitatNatura2000,
                title: "SIC 7222217 Habitat Natura 2000"
            });var format_SIC7222216HabitatNatura2000 = new ol.format.GeoJSON();
var features_SIC7222216HabitatNatura2000 = format_SIC7222216HabitatNatura2000.readFeatures(geojson_SIC7222216HabitatNatura2000, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIC7222216HabitatNatura2000 = new ol.source.Vector();
jsonSource_SIC7222216HabitatNatura2000.addFeatures(features_SIC7222216HabitatNatura2000);var lyr_SIC7222216HabitatNatura2000 = new ol.layer.Vector({
                source:jsonSource_SIC7222216HabitatNatura2000, 
                style: style_SIC7222216HabitatNatura2000,
                title: "SIC 7222216 Habitat Natura 2000"
            });var format_SIC7228221usodelsuolo = new ol.format.GeoJSON();
var features_SIC7228221usodelsuolo = format_SIC7228221usodelsuolo.readFeatures(geojson_SIC7228221usodelsuolo, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIC7228221usodelsuolo = new ol.source.Vector();
jsonSource_SIC7228221usodelsuolo.addFeatures(features_SIC7228221usodelsuolo);var lyr_SIC7228221usodelsuolo = new ol.layer.Vector({
                source:jsonSource_SIC7228221usodelsuolo, 
                style: style_SIC7228221usodelsuolo,
                title: "SIC 7228221 uso del suolo"
            });var format_SIC7222217usodelsuolo = new ol.format.GeoJSON();
var features_SIC7222217usodelsuolo = format_SIC7222217usodelsuolo.readFeatures(geojson_SIC7222217usodelsuolo, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIC7222217usodelsuolo = new ol.source.Vector();
jsonSource_SIC7222217usodelsuolo.addFeatures(features_SIC7222217usodelsuolo);var lyr_SIC7222217usodelsuolo = new ol.layer.Vector({
                source:jsonSource_SIC7222217usodelsuolo, 
                style: style_SIC7222217usodelsuolo,
                title: "SIC 7222217 uso del suolo"
            });var format_SIC7222216usodelsuolo = new ol.format.GeoJSON();
var features_SIC7222216usodelsuolo = format_SIC7222216usodelsuolo.readFeatures(geojson_SIC7222216usodelsuolo, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIC7222216usodelsuolo = new ol.source.Vector();
jsonSource_SIC7222216usodelsuolo.addFeatures(features_SIC7222216usodelsuolo);var lyr_SIC7222216usodelsuolo = new ol.layer.Vector({
                source:jsonSource_SIC7222216usodelsuolo, 
                style: style_SIC7222216usodelsuolo,
                title: "SIC 7222216 uso del suolo"
            });var format_LimitiSIC = new ol.format.GeoJSON();
var features_LimitiSIC = format_LimitiSIC.readFeatures(geojson_LimitiSIC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitiSIC = new ol.source.Vector();
jsonSource_LimitiSIC.addFeatures(features_LimitiSIC);var lyr_LimitiSIC = new ol.layer.Vector({
                source:jsonSource_LimitiSIC, 
                style: style_LimitiSIC,
                title: "Limiti SIC"
            });

var baseLayer2 = new ol.layer.Group({
    'title': 'Distribuzione potenziale testuggini',
    layers: [lyr_DistribuzionepotenzialedellaTartarugaditerra,lyr_DistribuzionepotenzialedellaTestugginepalustre
			]
});

var baseLayer3 = new ol.layer.Group({
    'title': 'Distribuzione potenziale chirotteri',
    layers: [lyr_DistribuzionepotenzialedelPipistrellonano,lyr_DistribuzionepotenzialedellOrecchionemeridionale,lyr_DistribuzionepotenzialedellaNottolacomune,
	         lyr_DistribuzionepotenzialedelPipistrellodiSavi, lyr_DistribuzionepotenzialedelPipistrelloalbolimbato, lyr_DistribuzionepotenzialedelMolossodiCestoni,
			 lyr_DistribuzionepotenzialedellaNottoladiLeisler
	
			]
});

var baseLayer4 = new ol.layer.Group({
    'title': 'Uso del suolo Corine Land Cover',
    layers: [lyr_SIC7228221usodelsuolo,lyr_SIC7222217usodelsuolo,lyr_SIC7222216usodelsuolo
	        ]
});			


var baseLayer5 = new ol.layer.Group({
    'title': 'Habitat Natura 2000',
    layers: [lyr_SIC7228221HabitatNatura2000,lyr_SIC7222217HabitatNatura2000,lyr_SIC7222216HabitatNatura2000
	        ]
});			
			
lyr_DistribuzionepotenzialedellaTartarugaditerra.setVisible(false);lyr_DistribuzionepotenzialedellaTestugginepalustre.setVisible(false);lyr_DistribuzionepotenzialedelPipistrellonano.setVisible(false);lyr_DistribuzionepotenzialedellOrecchionemeridionale.setVisible(false);lyr_DistribuzionepotenzialedellaNottolacomune.setVisible(false);lyr_DistribuzionepotenzialedellaNottoladiLeisler.setVisible(false);lyr_DistribuzionepotenzialedelPipistrellodiSavi.setVisible(false);lyr_DistribuzionepotenzialedelPipistrelloalbolimbato.setVisible(false);lyr_DistribuzionepotenzialedelMolossodiCestoni.setVisible(false);lyr_AreeinvasedaAcaciasaligna.setVisible(false);lyr_SIC7228221HabitatNatura2000.setVisible(false);lyr_SIC7222217HabitatNatura2000.setVisible(false);lyr_SIC7222216HabitatNatura2000.setVisible(false);lyr_SIC7228221usodelsuolo.setVisible(false);lyr_SIC7222217usodelsuolo.setVisible(false);lyr_SIC7222216usodelsuolo.setVisible(false);lyr_LimitiSIC.setVisible(true);
var layersList = [baseLayer,baseLayer2,baseLayer3,baseLayer5,baseLayer4,lyr_AreeinvasedaAcaciasaligna,lyr_LimitiSIC];
lyr_DistribuzionepotenzialedellaTartarugaditerra.set('fieldAliases', {'id': 'id', 'idoneit�': 'idoneit�', 'Probabilità di presenza': 'Probabilità di presenza', 'html_exp': 'html_exp', 'Foto': 'Foto', 'Nome': 'Nome', 'Testudo': 'Testudo', 'Modello idoenità': 'Modello idoenità', });
lyr_DistribuzionepotenzialedellaTestugginepalustre.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Modello idoneità': 'Modello idoneità', 'html_exp': 'html_exp', 'Emys': 'Emys', 'Foto': 'Foto', 'Nome': 'Nome', });
lyr_DistribuzionepotenzialedelPipistrellonano.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Modello idoneità': 'Modello idoneità', 'html_exp': 'html_exp', 'Foto': 'Foto', 'Specie': 'Specie', 'Nome': 'Nome', });
lyr_DistribuzionepotenzialedellOrecchionemeridionale.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Nome': 'Nome', 'Specie': 'Specie', 'html_exp': 'html_exp', 'Foto': 'Foto', 'Modello idoneità': 'Modello idoneità', });

lyr_DistribuzionepotenzialedellaNottolacomune.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Nome': 'Nome', 'Specie': 'Specie', 'html_exp': 'html_exp', 'Foto': 'Foto', 'Modello idoenità': 'Modello idoenità', });

lyr_DistribuzionepotenzialedellaNottoladiLeisler.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Nome': 'Nome', 'Specie': 'Specie', 'html_exp': 'html_exp', 'Foto': 'Foto', 'Modello idoenità': 'Modello idoenità', });
lyr_DistribuzionepotenzialedelPipistrellodiSavi.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Modello idoenità': 'Modello idoenità', 'html_exp': 'html_exp', 'Specie': 'Specie', 'Foto': 'Foto', 'Nome': 'Nome', });
lyr_DistribuzionepotenzialedelPipistrelloalbolimbato.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Modello idoneità': 'Modello idoneità', 'html_exp': 'html_exp', 'Foto': 'Foto', 'Specie': 'Specie', 'Nome': 'Nome', });
lyr_DistribuzionepotenzialedelMolossodiCestoni.set('fieldAliases', {'id': 'id', 'Code': 'Code', 'Probabilità di presenza': 'Probabilità di presenza', 'Modello idoneità': 'Modello idoneità', 'html_exp': 'html_exp', 'Specie': 'Specie', 'Foto': 'Foto', 'Nome': 'Nome', });
lyr_AreeinvasedaAcaciasaligna.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'Specie': 'Specie', 'html_exp': 'html_exp', 'Foto': 'Foto', });
lyr_SIC7228221HabitatNatura2000.set('fieldAliases', {'id': 'id', 'sp_id': 'sp_id', 'habitat': 'habitat', 'Descrizione': 'Descrizione', 'html_exp': 'html_exp', });
lyr_SIC7222217HabitatNatura2000.set('fieldAliases', {'id': 'id', 'sp_id': 'sp_id', 'habitat': 'habitat', 'Descrizione': 'Descrizione', 'html_exp': 'html_exp', });
lyr_SIC7222216HabitatNatura2000.set('fieldAliases', {'id': 'id', 'sp_id': 'sp_id', 'habitat': 'habitat', 'Descrizione': 'Descrizione', 'html_exp': 'html_exp', });
lyr_SIC7228221usodelsuolo.set('fieldAliases', {'gid': 'gid', 'sp_id': 'sp_id', 'clc': 'clc', 'Descrizione': 'Descrizione', 'Nome': 'Nome', });
lyr_SIC7222217usodelsuolo.set('fieldAliases', {'gid': 'gid', 'sp_id': 'sp_id', 'clc': 'clc', 'Descrizione': 'Descrizione', 'Nome': 'Nome', });
lyr_SIC7222216usodelsuolo.set('fieldAliases', {'gid': 'gid', 'sp_id': 'sp_id', 'clc': 'clc', 'Descrizione': 'Descrizione', 'Nome': 'Nome', });
lyr_LimitiSIC.set('fieldAliases', {'id': 'id', 'Denominazione': 'Denominazione', });
lyr_DistribuzionepotenzialedellaTartarugaditerra.set('fieldImages', {'id': 'TextEdit', 'idoneit�': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', 'Nome': 'TextEdit', 'Testudo': 'TextEdit', 'Modello idoenità': 'TextEdit', });
lyr_DistribuzionepotenzialedellaTestugginepalustre.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Modello idoneità': 'TextEdit', 'html_exp': 'TextEdit', 'Emys': 'TextEdit', 'Foto': 'TextEdit', 'Nome': 'TextEdit', });
lyr_DistribuzionepotenzialedelPipistrellonano.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Modello idoneità': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', 'Specie': 'TextEdit', 'Nome': 'TextEdit', });
lyr_DistribuzionepotenzialedellOrecchionemeridionale.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Nome': 'TextEdit', 'Specie': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', 'Modello idoneità': 'TextEdit', });

lyr_DistribuzionepotenzialedellaNottolacomune.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Nome': 'TextEdit', 'Specie': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', 'Modello idoenità': 'TextEdit', });
lyr_DistribuzionepotenzialedellaNottoladiLeisler.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Nome': 'TextEdit', 'Specie': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', 'Modello idoenità': 'TextEdit', });
lyr_DistribuzionepotenzialedelPipistrellodiSavi.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Modello idoenità': 'TextEdit', 'html_exp': 'TextEdit', 'Specie': 'TextEdit', 'Foto': 'TextEdit', 'Nome': 'TextEdit', });
lyr_DistribuzionepotenzialedelPipistrelloalbolimbato.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Modello idoneità': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', 'Specie': 'TextEdit', 'Nome': 'TextEdit', });
lyr_DistribuzionepotenzialedelMolossodiCestoni.set('fieldImages', {'id': 'TextEdit', 'Code': 'TextEdit', 'Probabilità di presenza': 'TextEdit', 'Modello idoneità': 'TextEdit', 'html_exp': 'TextEdit', 'Specie': 'TextEdit', 'Foto': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AreeinvasedaAcaciasaligna.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'Specie': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', });
lyr_SIC7228221HabitatNatura2000.set('fieldImages', {'id': 'TextEdit', 'sp_id': 'TextEdit', 'habitat': 'TextEdit', 'Descrizione': 'TextEdit', 'html_exp': 'TextEdit', });
lyr_SIC7222217HabitatNatura2000.set('fieldImages', {'id': 'TextEdit', 'sp_id': 'TextEdit', 'habitat': 'TextEdit', 'Descrizione': 'TextEdit', 'html_exp': 'TextEdit', });
lyr_SIC7222216HabitatNatura2000.set('fieldImages', {'id': 'TextEdit', 'sp_id': 'TextEdit', 'habitat': 'TextEdit', 'Descrizione': 'TextEdit', 'html_exp': 'TextEdit', });
lyr_SIC7228221usodelsuolo.set('fieldImages', {'gid': 'TextEdit', 'sp_id': 'TextEdit', 'clc': 'TextEdit', 'Descrizione': 'TextEdit', 'Nome': 'TextEdit', });
lyr_SIC7222217usodelsuolo.set('fieldImages', {'gid': 'TextEdit', 'sp_id': 'TextEdit', 'clc': 'TextEdit', 'Descrizione': 'TextEdit', 'Nome': 'TextEdit', });
lyr_SIC7222216usodelsuolo.set('fieldImages', {'gid': 'TextEdit', 'sp_id': 'TextEdit', 'clc': 'TextEdit', 'Descrizione': 'TextEdit', 'Nome': 'TextEdit', });
lyr_LimitiSIC.set('fieldImages', {'id': 'TextEdit', 'Denominazione': 'TextEdit', });
lyr_DistribuzionepotenzialedellaTartarugaditerra.set('fieldLabels', {'id': 'no label', 'idoneit�': 'no label', 'Probabilità di presenza': 'no label', 'html_exp': 'no label', 'Foto': 'no label', 'Nome': 'no label', 'Testudo': 'no label', 'Modello idoenità': 'no label', });
lyr_DistribuzionepotenzialedellaTestugginepalustre.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Modello idoneità': 'no label', 'html_exp': 'no label', 'Emys': 'no label', 'Foto': 'no label', 'Nome': 'no label', });
lyr_DistribuzionepotenzialedelPipistrellonano.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Modello idoneità': 'no label', 'html_exp': 'no label', 'Foto': 'no label', 'Specie': 'no label', 'Nome': 'no label', });
lyr_DistribuzionepotenzialedellOrecchionemeridionale.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Nome': 'no label', 'Specie': 'no label', 'html_exp': 'no label', 'Foto': 'no label', 'Modello idoneità': 'no label', });

lyr_DistribuzionepotenzialedellaNottolacomune.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Nome': 'no label', 'Specie': 'no label', 'html_exp': 'no label', 'Foto': 'no label', 'Modello idoenità': 'no label', });
lyr_DistribuzionepotenzialedellaNottoladiLeisler.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Nome': 'no label', 'Specie': 'no label', 'html_exp': 'no label', 'Foto': 'no label', 'Modello idoenità': 'no label', });
lyr_DistribuzionepotenzialedelPipistrellodiSavi.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Modello idoenità': 'no label', 'html_exp': 'no label', 'Specie': 'no label', 'Foto': 'no label', 'Nome': 'no label', });
lyr_DistribuzionepotenzialedelPipistrelloalbolimbato.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Modello idoneità': 'no label', 'html_exp': 'no label', 'Foto': 'no label', 'Specie': 'no label', 'Nome': 'no label', });
lyr_DistribuzionepotenzialedelMolossodiCestoni.set('fieldLabels', {'id': 'no label', 'Code': 'no label', 'Probabilità di presenza': 'no label', 'Modello idoneità': 'no label', 'html_exp': 'no label', 'Specie': 'no label', 'Foto': 'no label', 'Nome': 'no label', });
lyr_AreeinvasedaAcaciasaligna.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'Specie': 'no label', 'html_exp': 'no label', 'Foto': 'no label', });
lyr_SIC7228221HabitatNatura2000.set('fieldLabels', {'id': 'no label', 'sp_id': 'no label', 'habitat': 'no label', 'Descrizione': 'no label', 'html_exp': 'no label', });
lyr_SIC7222217HabitatNatura2000.set('fieldLabels', {'id': 'no label', 'sp_id': 'no label', 'habitat': 'no label', 'Descrizione': 'no label', 'html_exp': 'no label', });
lyr_SIC7222216HabitatNatura2000.set('fieldLabels', {'id': 'no label', 'sp_id': 'no label', 'habitat': 'no label', 'Descrizione': 'no label', 'html_exp': 'no label', });
lyr_SIC7228221usodelsuolo.set('fieldLabels', {'gid': 'no label', 'sp_id': 'no label', 'clc': 'no label', 'Descrizione': 'no label', 'Nome': 'no label', });
lyr_SIC7222217usodelsuolo.set('fieldLabels', {'gid': 'no label', 'sp_id': 'no label', 'clc': 'no label', 'Descrizione': 'no label', 'Nome': 'no label', });
lyr_SIC7222216usodelsuolo.set('fieldLabels', {'gid': 'no label', 'sp_id': 'no label', 'clc': 'no label', 'Descrizione': 'no label', 'Nome': 'no label', });
lyr_LimitiSIC.set('fieldLabels', {'id': 'no label', 'Denominazione': 'no label', });
