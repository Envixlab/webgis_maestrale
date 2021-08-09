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
var format_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250 = new ol.format.GeoJSON();
var features_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250 = format_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250.readFeatures(geojson_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250 = new ol.source.Vector();
jsonSource_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250.addFeatures(features_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250);var lyr_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250 = new ol.layer.Vector({
                source:jsonSource_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250, 
                style: style_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250,
                title: "Propagazione e conservazione ex situ di specie native che caratterizzano gli habitat prioritari 2270 e 2250"
            });var format_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri = new ol.format.GeoJSON();
var features_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri = format_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri.readFeatures(geojson_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri = new ol.source.Vector();
jsonSource_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri.addFeatures(features_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri);var lyr_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri = new ol.layer.Vector({
                source:jsonSource_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri, 
                style: style_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri,
                title: "Realizzazione e apposizione di 400 bat box e un bat roost artificiale per chirotteri"
            });var format_Protezionedelladunagraticciate = new ol.format.GeoJSON();
var features_Protezionedelladunagraticciate = format_Protezionedelladunagraticciate.readFeatures(geojson_Protezionedelladunagraticciate, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protezionedelladunagraticciate = new ol.source.Vector();
jsonSource_Protezionedelladunagraticciate.addFeatures(features_Protezionedelladunagraticciate);var lyr_Protezionedelladunagraticciate = new ol.layer.Vector({
                source:jsonSource_Protezionedelladunagraticciate, 
                style: style_Protezionedelladunagraticciate,
                title: "Protezione della duna graticciate"
            });var format_Protezionedelleareeumidepasserella = new ol.format.GeoJSON();
var features_Protezionedelleareeumidepasserella = format_Protezionedelleareeumidepasserella.readFeatures(geojson_Protezionedelleareeumidepasserella, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protezionedelleareeumidepasserella = new ol.source.Vector();
jsonSource_Protezionedelleareeumidepasserella.addFeatures(features_Protezionedelleareeumidepasserella);var lyr_Protezionedelleareeumidepasserella = new ol.layer.Vector({
                source:jsonSource_Protezionedelleareeumidepasserella, 
                style: style_Protezionedelleareeumidepasserella,
                title: "Protezione delle aree umide passerella"
            });var format_Ripristinodeglistagni = new ol.format.GeoJSON();
var features_Ripristinodeglistagni = format_Ripristinodeglistagni.readFeatures(geojson_Ripristinodeglistagni, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ripristinodeglistagni = new ol.source.Vector();
jsonSource_Ripristinodeglistagni.addFeatures(features_Ripristinodeglistagni);var lyr_Ripristinodeglistagni = new ol.layer.Vector({
                source:jsonSource_Ripristinodeglistagni, 
                style: style_Ripristinodeglistagni,
                title: "Ripristino degli stagni"
            });var format_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto = new ol.format.GeoJSON();
var features_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto = format_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto.readFeatures(geojson_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto = new ol.source.Vector();
jsonSource_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto.addFeatures(features_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto);var lyr_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto = new ol.layer.Vector({
                source:jsonSource_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto, 
                style: style_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto,
                title: "Riqualificazione e conservazione delle dune con ginepri taglio legno morto"
            });var format_Riqualificazioneeconservazionedelleduneconginepripiantumazione = new ol.format.GeoJSON();
var features_Riqualificazioneeconservazionedelleduneconginepripiantumazione = format_Riqualificazioneeconservazionedelleduneconginepripiantumazione.readFeatures(geojson_Riqualificazioneeconservazionedelleduneconginepripiantumazione, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riqualificazioneeconservazionedelleduneconginepripiantumazione = new ol.source.Vector();
jsonSource_Riqualificazioneeconservazionedelleduneconginepripiantumazione.addFeatures(features_Riqualificazioneeconservazionedelleduneconginepripiantumazione);var lyr_Riqualificazioneeconservazionedelleduneconginepripiantumazione = new ol.layer.Vector({
                source:jsonSource_Riqualificazioneeconservazionedelleduneconginepripiantumazione, 
                style: style_Riqualificazioneeconservazionedelleduneconginepripiantumazione,
                title: "Riqualificazione e conservazione delle dune con ginepri piantumazione"
            });var format_Protezionedellavandunasbarre = new ol.format.GeoJSON();
var features_Protezionedellavandunasbarre = format_Protezionedellavandunasbarre.readFeatures(geojson_Protezionedellavandunasbarre, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protezionedellavandunasbarre = new ol.source.Vector();
jsonSource_Protezionedellavandunasbarre.addFeatures(features_Protezionedellavandunasbarre);var lyr_Protezionedellavandunasbarre = new ol.layer.Vector({
                source:jsonSource_Protezionedellavandunasbarre, 
                style: style_Protezionedellavandunasbarre,
                title: "Protezione dell'avanduna sbarre"
            });var format_Protezionedellavandunapasserelle = new ol.format.GeoJSON();
var features_Protezionedellavandunapasserelle = format_Protezionedellavandunapasserelle.readFeatures(geojson_Protezionedellavandunapasserelle, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protezionedellavandunapasserelle = new ol.source.Vector();
jsonSource_Protezionedellavandunapasserelle.addFeatures(features_Protezionedellavandunapasserelle);var lyr_Protezionedellavandunapasserelle = new ol.layer.Vector({
                source:jsonSource_Protezionedellavandunapasserelle, 
                style: style_Protezionedellavandunapasserelle,
                title: "Protezione dell'avanduna passerelle"
            });var format_Ricostituzionedellavegetazionesclerofilladiavanduna = new ol.format.GeoJSON();
var features_Ricostituzionedellavegetazionesclerofilladiavanduna = format_Ricostituzionedellavegetazionesclerofilladiavanduna.readFeatures(geojson_Ricostituzionedellavegetazionesclerofilladiavanduna, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ricostituzionedellavegetazionesclerofilladiavanduna = new ol.source.Vector();
jsonSource_Ricostituzionedellavegetazionesclerofilladiavanduna.addFeatures(features_Ricostituzionedellavegetazionesclerofilladiavanduna);var lyr_Ricostituzionedellavegetazionesclerofilladiavanduna = new ol.layer.Vector({
                source:jsonSource_Ricostituzionedellavegetazionesclerofilladiavanduna, 
                style: style_Ricostituzionedellavegetazionesclerofilladiavanduna,
                title: "Ricostituzione della vegetazione sclerofilla di avanduna"
            });var format_Riqualificazionedelsottoboscodellepinetelitoranee = new ol.format.GeoJSON();
var features_Riqualificazionedelsottoboscodellepinetelitoranee = format_Riqualificazionedelsottoboscodellepinetelitoranee.readFeatures(geojson_Riqualificazionedelsottoboscodellepinetelitoranee, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riqualificazionedelsottoboscodellepinetelitoranee = new ol.source.Vector();
jsonSource_Riqualificazionedelsottoboscodellepinetelitoranee.addFeatures(features_Riqualificazionedelsottoboscodellepinetelitoranee);var lyr_Riqualificazionedelsottoboscodellepinetelitoranee = new ol.layer.Vector({
                source:jsonSource_Riqualificazionedelsottoboscodellepinetelitoranee, 
                style: style_Riqualificazionedelsottoboscodellepinetelitoranee,
                title: "Riqualificazione del sottobosco delle pinete litoranee"
            });var format_EradicazionedellAcaciasalignanellepinetelitoranee = new ol.format.GeoJSON();
var features_EradicazionedellAcaciasalignanellepinetelitoranee = format_EradicazionedellAcaciasalignanellepinetelitoranee.readFeatures(geojson_EradicazionedellAcaciasalignanellepinetelitoranee, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EradicazionedellAcaciasalignanellepinetelitoranee = new ol.source.Vector();
jsonSource_EradicazionedellAcaciasalignanellepinetelitoranee.addFeatures(features_EradicazionedellAcaciasalignanellepinetelitoranee);var lyr_EradicazionedellAcaciasalignanellepinetelitoranee = new ol.layer.Vector({
                source:jsonSource_EradicazionedellAcaciasalignanellepinetelitoranee, 
                style: style_EradicazionedellAcaciasalignanellepinetelitoranee,
                title: "Eradicazione dell'Acacia saligna nelle pinete litoranee"
            });

			
			
var baseLayer1 = new ol.layer.Group({
    'title': '<b>Riqualificazione dell’habitat 2270* Dune costiere con <i>Pinus pinea</i> e/o <i>Pinus pinaster</i></b > ',
    layers: [lyr_EradicazionedellAcaciasalignanellepinetelitoranee, lyr_Riqualificazionedelsottoboscodellepinetelitoranee,
]
});
var baseLayer2 = new ol.layer.Group({
    'title': '<b>Protezione dell’avanduna con ricostituzione dell’habitat 2260 Dune con vegetazione di sclerofille dei <i>Cisto-Lavanduletalia</i></b>',
    layers: [lyr_Ricostituzionedellavegetazionesclerofilladiavanduna,
	lyr_Protezionedellavandunapasserelle,
	lyr_Protezionedellavandunasbarre]
});

var baseLayer3 = new ol.layer.Group({
    'title': '<b> Conservazione/riqualificazione dell’habitat 2250* Dune con ginepri</b>',
    layers: [lyr_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto,lyr_Riqualificazioneeconservazionedelleduneconginepripiantumazione]
});

var baseLayer4 = new ol.layer.Group({
    'title': '<b> Ripristino dello stato di conservazione degli habitat 3170*-1510* Stagni temporanei mediterranei</b> ',
    layers: [lyr_Ripristinodeglistagni,lyr_Protezionedelleareeumidepasserella,lyr_Protezionedelladunagraticciate]
});

var baseLayer5 = new ol.layer.Group({
    'title': '<b> Realizzazione e apposizione di 400 bat box e un bat-roost artificiale per chirotteri</b>',
    layers: [lyr_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri]
});		

var baseLayer6 = new ol.layer.Group({
    'title': '<b>Propagazione e conservazione ex-situ di specie native che caratterizzano gli habitat prioritari 2270* e 2250*<b>',
    layers: [lyr_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250]
});

			
			
			
lyr_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri.setVisible(false);lyr_Protezionedelladunagraticciate.setVisible(false);lyr_Protezionedelleareeumidepasserella.setVisible(false);lyr_Ripristinodeglistagni.setVisible(false);lyr_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto.setVisible(false);lyr_Riqualificazioneeconservazionedelleduneconginepripiantumazione.setVisible(false);lyr_Protezionedellavandunasbarre.setVisible(false);lyr_Protezionedellavandunapasserelle.setVisible(false);lyr_Ricostituzionedellavegetazionesclerofilladiavanduna.setVisible(false);lyr_Riqualificazionedelsottoboscodellepinetelitoranee.setVisible(false);lyr_EradicazionedellAcaciasalignanellepinetelitoranee.setVisible(false);
lyr_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250.setVisible(false);

var layersList = [baseLayer,baseLayer1,baseLayer2,baseLayer3,baseLayer4,baseLayer5,baseLayer6];
lyr_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250.set('fieldAliases', {'nome': 'nome', 'descrizion': 'descrizion', 'responsab': 'responsab', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri.set('fieldAliases', {'nome': 'nome', 'descr': 'descr', 'respon': 'respon', 'foto': 'foto', 'html_exp': 'html_exp', });
lyr_Protezionedelladunagraticciate.set('fieldAliases', {'nome': 'nome', 'descr': 'descr', 'respo': 'respo', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Protezionedelleareeumidepasserella.set('fieldAliases', {'nome': 'nome', 'descri': 'descri', 'respo': 'respo', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Ripristinodeglistagni.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'nome': 'nome', 'dewcrizion': 'dewcrizion', 'html_exp': 'html_exp', 'foto': 'foto', 'respo': 'respo', });
lyr_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto.set('fieldAliases', {'Nome': 'Nome', 'descrizion': 'descrizion', 'respons': 'respons', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Riqualificazioneeconservazionedelleduneconginepripiantumazione.set('fieldAliases', {'nome': 'nome', 'decrizione': 'decrizione', 'respons': 'respons', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Protezionedellavandunasbarre.set('fieldAliases', {'nome': 'nome', 'descrizion': 'descrizion', 'responsabi': 'responsabi', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Protezionedellavandunapasserelle.set('fieldAliases', {'nome': 'nome', 'descrizion': 'descrizion', 'responsab': 'responsab', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_Ricostituzionedellavegetazionesclerofilladiavanduna.set('fieldAliases', {'Nome': 'Nome', 'Descrizion': 'Descrizion', 'Responsabi': 'Responsabi', 'html_exp': 'html_exp', 'Foto': 'Foto', });
lyr_Riqualificazionedelsottoboscodellepinetelitoranee.set('fieldAliases', {'Nome': 'Nome', 'Descrizion': 'Descrizion', 'Responsabi': 'Responsabi', 'html_exp': 'html_exp', 'foto': 'foto', });
lyr_EradicazionedellAcaciasalignanellepinetelitoranee.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'Descrizione': 'Descrizione', 'html_exp': 'html_exp', 'Responsabile': 'Responsabile', 'Nome': 'Nome', 'foto': 'foto', });
lyr_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250.set('fieldImages', {'nome': 'TextEdit', 'descrizion': 'TextEdit', 'responsab': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri.set('fieldImages', {'nome': 'TextEdit', 'descr': 'TextEdit', 'respon': 'TextEdit', 'foto': 'TextEdit', 'html_exp': 'TextEdit', });
lyr_Protezionedelladunagraticciate.set('fieldImages', {'nome': 'TextEdit', 'descr': 'TextEdit', 'respo': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Protezionedelleareeumidepasserella.set('fieldImages', {'nome': 'TextEdit', 'descri': 'TextEdit', 'respo': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Ripristinodeglistagni.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'nome': 'TextEdit', 'dewcrizion': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', 'respo': 'TextEdit', });
lyr_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto.set('fieldImages', {'Nome': 'TextEdit', 'descrizion': 'TextEdit', 'respons': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Riqualificazioneeconservazionedelleduneconginepripiantumazione.set('fieldImages', {'nome': 'TextEdit', 'decrizione': 'TextEdit', 'respons': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Protezionedellavandunasbarre.set('fieldImages', {'nome': 'TextEdit', 'descrizion': 'TextEdit', 'responsabi': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Protezionedellavandunapasserelle.set('fieldImages', {'nome': 'TextEdit', 'descrizion': 'TextEdit', 'responsab': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_Ricostituzionedellavegetazionesclerofilladiavanduna.set('fieldImages', {'Nome': 'TextEdit', 'Descrizion': 'TextEdit', 'Responsabi': 'TextEdit', 'html_exp': 'TextEdit', 'Foto': 'TextEdit', });
lyr_Riqualificazionedelsottoboscodellepinetelitoranee.set('fieldImages', {'Nome': 'TextEdit', 'Descrizion': 'TextEdit', 'Responsabi': 'TextEdit', 'html_exp': 'TextEdit', 'foto': 'TextEdit', });
lyr_EradicazionedellAcaciasalignanellepinetelitoranee.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'Descrizione': 'TextEdit', 'html_exp': 'TextEdit', 'Responsabile': 'TextEdit', 'Nome': 'TextEdit', 'foto': 'TextEdit', });
lyr_Propagazioneeconservazioneexsitudispecienativechecaratterizzanoglihabitatprioritari2270e2250.set('fieldLabels', {'nome': 'no label', 'descrizion': 'no label', 'responsab': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Realizzazioneeapposizionedi400batboxeunbatroostartificialeperchirotteri.set('fieldLabels', {'nome': 'no label', 'descr': 'no label', 'respon': 'no label', 'foto': 'no label', 'html_exp': 'no label', });
lyr_Protezionedelladunagraticciate.set('fieldLabels', {'nome': 'no label', 'descr': 'no label', 'respo': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Protezionedelleareeumidepasserella.set('fieldLabels', {'nome': 'no label', 'descri': 'no label', 'respo': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Ripristinodeglistagni.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'nome': 'no label', 'dewcrizion': 'no label', 'html_exp': 'no label', 'foto': 'no label', 'respo': 'no label', });
lyr_Riqualificazioneeconservazionedelleduneconginepritagliolegnomorto.set('fieldLabels', {'Nome': 'no label', 'descrizion': 'no label', 'respons': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Riqualificazioneeconservazionedelleduneconginepripiantumazione.set('fieldLabels', {'nome': 'no label', 'decrizione': 'no label', 'respons': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Protezionedellavandunasbarre.set('fieldLabels', {'nome': 'no label', 'descrizion': 'no label', 'responsabi': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Protezionedellavandunapasserelle.set('fieldLabels', {'nome': 'no label', 'descrizion': 'no label', 'responsab': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_Ricostituzionedellavegetazionesclerofilladiavanduna.set('fieldLabels', {'Nome': 'no label', 'Descrizion': 'no label', 'Responsabi': 'no label', 'html_exp': 'no label', 'Foto': 'no label', });
lyr_Riqualificazionedelsottoboscodellepinetelitoranee.set('fieldLabels', {'Nome': 'no label', 'Descrizion': 'no label', 'Responsabi': 'no label', 'html_exp': 'no label', 'foto': 'no label', });
lyr_EradicazionedellAcaciasalignanellepinetelitoranee.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'Descrizione': 'no label', 'html_exp': 'no label', 'Responsabile': 'no label', 'Nome': 'no label', 'foto': 'no label', });
