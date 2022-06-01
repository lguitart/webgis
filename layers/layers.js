var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Ortoimagen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_1, 0]);
var lyr_Parcelascatastrales_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/cartografia/INSPIRE/spadgcwms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Parcelas catastrales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parcelascatastrales_2, 0]);
var lyr_Polgonoscatastrales_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/cartografia/INSPIRE/spadgcwms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralZoning",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Polígonos catastrales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Polgonoscatastrales_3, 0]);
var format_Municipiosafectados_4 = new ol.format.GeoJSON();
var features_Municipiosafectados_4 = format_Municipiosafectados_4.readFeatures(json_Municipiosafectados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipiosafectados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipiosafectados_4.addFeatures(features_Municipiosafectados_4);
var lyr_Municipiosafectados_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipiosafectados_4, 
                style: style_Municipiosafectados_4,
                interactive: true,
                title: '<img src="styles/legend/Municipiosafectados_4.png" /> Municipios afectados'
            });
var format_RedNatura2000_5 = new ol.format.GeoJSON();
var features_RedNatura2000_5 = format_RedNatura2000_5.readFeatures(json_RedNatura2000_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedNatura2000_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedNatura2000_5.addFeatures(features_RedNatura2000_5);
var lyr_RedNatura2000_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedNatura2000_5, 
                style: style_RedNatura2000_5,
                interactive: true,
                title: '<img src="styles/legend/RedNatura2000_5.png" /> Red Natura 2000'
            });
var format_Volumendemaderamediom3ha_6 = new ol.format.GeoJSON();
var features_Volumendemaderamediom3ha_6 = format_Volumendemaderamediom3ha_6.readFeatures(json_Volumendemaderamediom3ha_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volumendemaderamediom3ha_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volumendemaderamediom3ha_6.addFeatures(features_Volumendemaderamediom3ha_6);
var lyr_Volumendemaderamediom3ha_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volumendemaderamediom3ha_6, 
                style: style_Volumendemaderamediom3ha_6,
                interactive: true,
    title: 'Volumen de madera medio (m3/ha)<br />\
    <img src="styles/legend/Volumendemaderamediom3ha_6_0.png" /> < 50<br />\
    <img src="styles/legend/Volumendemaderamediom3ha_6_1.png" /> 50 - 100<br />\
    <img src="styles/legend/Volumendemaderamediom3ha_6_2.png" /> 100 - 150<br />\
    <img src="styles/legend/Volumendemaderamediom3ha_6_3.png" /> >150<br />'
        });
var format_Cubiertasdevegetacin_7 = new ol.format.GeoJSON();
var features_Cubiertasdevegetacin_7 = format_Cubiertasdevegetacin_7.readFeatures(json_Cubiertasdevegetacin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cubiertasdevegetacin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cubiertasdevegetacin_7.addFeatures(features_Cubiertasdevegetacin_7);
var lyr_Cubiertasdevegetacin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cubiertasdevegetacin_7, 
                style: style_Cubiertasdevegetacin_7,
                interactive: true,
    title: 'Cubiertas de vegetación<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_0.png" /> Alcornocal<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_1.png" /> Castañar<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_2.png" /> Encinar<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_3.png" /> Pinar de pino carrasco<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_4.png" /> Pinar de pino marítimo<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_5.png" /> Pinar de pino piñonero<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_6.png" /> Plantación pino insigne<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_7.png" /> Plantación de eucalipto<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_8.png" /> Plantación de chopo<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_9.png" /> Plantación de plátano de sombra<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_10.png" /> Robledal de quejigo andaluz<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_11.png" /> Robledal de roble albar<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_12.png" /> Robledal de roble carballo<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_13.png" /> Robledal de roble pubescente<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_14.png" /> Bosque caducifolio de ribera<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_15.png" /> Otros caducifolios<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_16.png" /> Otras coníferas<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_17.png" /> Matorral<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_18.png" /> Pastos<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_19.png" /> Roquedos<br />\
    <img src="styles/legend/Cubiertasdevegetacin_7_20.png" /> Suelo desnudo<br />'
        });
var format_reasdegestinprioritariaAGPsegnorganismo_8 = new ol.format.GeoJSON();
var features_reasdegestinprioritariaAGPsegnorganismo_8 = format_reasdegestinprioritariaAGPsegnorganismo_8.readFeatures(json_reasdegestinprioritariaAGPsegnorganismo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdegestinprioritariaAGPsegnorganismo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdegestinprioritariaAGPsegnorganismo_8.addFeatures(features_reasdegestinprioritariaAGPsegnorganismo_8);
var lyr_reasdegestinprioritariaAGPsegnorganismo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasdegestinprioritariaAGPsegnorganismo_8, 
                style: style_reasdegestinprioritariaAGPsegnorganismo_8,
                interactive: true,
    title: 'Áreas de gestión prioritaria (AGP) según organismo<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegnorganismo_8_0.png" /> CPF<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegnorganismo_8_1.png" /> DIBA<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegnorganismo_8_2.png" /> DIBA, CPF<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegnorganismo_8_3.png" /> DIBA, GENCAT<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegnorganismo_8_4.png" /> DIBA, GENCAT, CPF<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegnorganismo_8_5.png" /> GENCAT<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegnorganismo_8_6.png" /> GENCAT, CPF<br />'
        });
var format_reasdegestinprioritariaAGPsegntipologa_9 = new ol.format.GeoJSON();
var features_reasdegestinprioritariaAGPsegntipologa_9 = format_reasdegestinprioritariaAGPsegntipologa_9.readFeatures(json_reasdegestinprioritariaAGPsegntipologa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdegestinprioritariaAGPsegntipologa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdegestinprioritariaAGPsegntipologa_9.addFeatures(features_reasdegestinprioritariaAGPsegntipologa_9);
var lyr_reasdegestinprioritariaAGPsegntipologa_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasdegestinprioritariaAGPsegntipologa_9, 
                style: style_reasdegestinprioritariaAGPsegntipologa_9,
                interactive: true,
    title: 'Áreas de gestión prioritaria (AGP) según tipología<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegntipologa_9_0.png" /> Puntos estratégicos de gestión<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegntipologa_9_1.png" /> Áreas de fomento de la gestión<br />\
    <img src="styles/legend/reasdegestinprioritariaAGPsegntipologa_9_2.png" /> Interfaz urbano-forestal<br />'
        });
var format_Redviariabsicadeprevencindeincendios_10 = new ol.format.GeoJSON();
var features_Redviariabsicadeprevencindeincendios_10 = format_Redviariabsicadeprevencindeincendios_10.readFeatures(json_Redviariabsicadeprevencindeincendios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redviariabsicadeprevencindeincendios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redviariabsicadeprevencindeincendios_10.addFeatures(features_Redviariabsicadeprevencindeincendios_10);
var lyr_Redviariabsicadeprevencindeincendios_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redviariabsicadeprevencindeincendios_10, 
                style: style_Redviariabsicadeprevencindeincendios_10,
                interactive: true,
    title: 'Red viaria básica de prevención de incendios<br />\
    <img src="styles/legend/Redviariabsicadeprevencindeincendios_10_0.png" /> No revestido<br />\
    <img src="styles/legend/Redviariabsicadeprevencindeincendios_10_1.png" /> Revestido<br />'
        });
var format_Puntosdeaguabalsas_11 = new ol.format.GeoJSON();
var features_Puntosdeaguabalsas_11 = format_Puntosdeaguabalsas_11.readFeatures(json_Puntosdeaguabalsas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdeaguabalsas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdeaguabalsas_11.addFeatures(features_Puntosdeaguabalsas_11);
var lyr_Puntosdeaguabalsas_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntosdeaguabalsas_11, 
                style: style_Puntosdeaguabalsas_11,
                interactive: true,
                title: '<img src="styles/legend/Puntosdeaguabalsas_11.png" /> Puntos de agua (balsas)'
            });
var group_Mapasbase = new ol.layer.Group({
                                layers: [lyr_Ortoimagen_1,lyr_Parcelascatastrales_2,lyr_Polgonoscatastrales_3,],
                                title: "Mapas base"});
var group_Mapadereferencia = new ol.layer.Group({
                                layers: [lyr_ESRIWorldTopo_0,],
                                title: "Mapa de referencia"});

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Ortoimagen_1.setVisible(false);lyr_Parcelascatastrales_2.setVisible(false);lyr_Polgonoscatastrales_3.setVisible(false);lyr_Municipiosafectados_4.setVisible(true);lyr_RedNatura2000_5.setVisible(false);lyr_Volumendemaderamediom3ha_6.setVisible(false);lyr_Cubiertasdevegetacin_7.setVisible(false);lyr_reasdegestinprioritariaAGPsegnorganismo_8.setVisible(false);lyr_reasdegestinprioritariaAGPsegntipologa_9.setVisible(true);lyr_Redviariabsicadeprevencindeincendios_10.setVisible(true);lyr_Puntosdeaguabalsas_11.setVisible(true);
var layersList = [group_Mapadereferencia,group_Mapasbase,lyr_Municipiosafectados_4,lyr_RedNatura2000_5,lyr_Volumendemaderamediom3ha_6,lyr_Cubiertasdevegetacin_7,lyr_reasdegestinprioritariaAGPsegnorganismo_8,lyr_reasdegestinprioritariaAGPsegntipologa_9,lyr_Redviariabsicadeprevencindeincendios_10,lyr_Puntosdeaguabalsas_11];
lyr_Municipiosafectados_4.set('fieldAliases', {'AREA': 'Superficie', 'MUNICIPI': 'MUNICIPI', 'COMARCA': 'COMARCA', 'PROVINCIA': 'PROVINCIA', 'NOM_MUNI': 'Nombre municipio', 'Superficie': 'Superficie (ha)', });
lyr_RedNatura2000_5.set('fieldAliases', {'CODI_LIC': 'Código LIC', 'CODI_ZEPA': 'Código ZEPA', 'NOM_N2': 'Nombre', 'SUPERFICIE': 'Superficie', 'Superfic_1': 'Superficie (ha)', });
lyr_Volumendemaderamediom3ha_6.set('fieldAliases', {'Vegetacion': 'Vegetación', 'vcc': 'Volumen de madera medio (m3/ha)', 'ab': 'Área basal media (m2/ha)', 'dg': 'Diámetro normal medio (cm)', 'hm': 'Altura media (m)', 'Pdte': 'Pendiente (%)', 'REFCAT': 'Referencia catastral', });
lyr_Cubiertasdevegetacin_7.set('fieldAliases', {'Vegetacion': 'Vegetación', 'vcc': 'Volumen de madera medio (m3/ha)', 'ab': 'Área basal media (m2/ha)', 'dg': 'Diámetro normal medio (cm)', 'hm': 'Altura media (m)', 'Pdte': 'Pendiente (%)', 'REFCAT': 'Referencia catastral', });
lyr_reasdegestinprioritariaAGPsegnorganismo_8.set('fieldAliases', {'cod': 'Tipo', 'Organ': 'Organismo subvenciones', 'RN2000': 'Red Natura 2000', 'NOM_MUNI': 'Municipio', 'cod2': 'cod2', 'REFCAT': 'Referencia catastral', });
lyr_reasdegestinprioritariaAGPsegntipologa_9.set('fieldAliases', {'cod': 'Tipo', 'Organ': 'Organismo subvenciones', 'RN2000': 'Red Natura 2000', 'NOM_MUNI': 'Municipio', 'cod2': 'cod2', 'REFCAT': 'REFCAT', });
lyr_Redviariabsicadeprevencindeincendios_10.set('fieldAliases', {'TIPUS_VIAL': 'Tipo de vía', 'REVESTIMEN': 'Revestimiento', 'Longitud': 'Longitud (m)', 'NOM_MUNI': 'Municipio', });
lyr_Puntosdeaguabalsas_11.set('fieldAliases', {'ESTAT': 'ESTAT', 'CATEGORIA': 'Categoría', 'CAPACITAT': 'Capacidad (m3)', 'SUBMINISTR': 'SUBMINISTR', 'APTE_TERRE': 'Apto medios terrestres', 'APTE_AERI': 'Apto medios aéreos', });
lyr_Municipiosafectados_4.set('fieldImages', {'AREA': 'Hidden', 'MUNICIPI': 'Hidden', 'COMARCA': 'Hidden', 'PROVINCIA': 'Hidden', 'NOM_MUNI': 'TextEdit', 'Superficie': 'Range', });
lyr_RedNatura2000_5.set('fieldImages', {'CODI_LIC': 'TextEdit', 'CODI_ZEPA': 'Hidden', 'NOM_N2': 'TextEdit', 'SUPERFICIE': 'Hidden', 'Superfic_1': 'TextEdit', });
lyr_Volumendemaderamediom3ha_6.set('fieldImages', {'Vegetacion': 'TextEdit', 'vcc': 'TextEdit', 'ab': 'TextEdit', 'dg': 'TextEdit', 'hm': 'TextEdit', 'Pdte': 'TextEdit', 'REFCAT': 'TextEdit', });
lyr_Cubiertasdevegetacin_7.set('fieldImages', {'Vegetacion': 'TextEdit', 'vcc': 'TextEdit', 'ab': 'TextEdit', 'dg': 'TextEdit', 'hm': 'TextEdit', 'Pdte': 'TextEdit', 'REFCAT': 'TextEdit', });
lyr_reasdegestinprioritariaAGPsegnorganismo_8.set('fieldImages', {'cod': 'TextEdit', 'Organ': 'TextEdit', 'RN2000': 'TextEdit', 'NOM_MUNI': 'TextEdit', 'cod2': 'Hidden', 'REFCAT': 'TextEdit', });
lyr_reasdegestinprioritariaAGPsegntipologa_9.set('fieldImages', {'cod': 'TextEdit', 'Organ': 'TextEdit', 'RN2000': 'TextEdit', 'NOM_MUNI': 'TextEdit', 'cod2': 'Hidden', 'REFCAT': '', });
lyr_Redviariabsicadeprevencindeincendios_10.set('fieldImages', {'TIPUS_VIAL': 'TextEdit', 'REVESTIMEN': 'TextEdit', 'Longitud': 'TextEdit', 'NOM_MUNI': 'TextEdit', });
lyr_Puntosdeaguabalsas_11.set('fieldImages', {'ESTAT': 'Hidden', 'CATEGORIA': 'TextEdit', 'CAPACITAT': 'TextEdit', 'SUBMINISTR': 'Hidden', 'APTE_TERRE': 'TextEdit', 'APTE_AERI': 'TextEdit', });
lyr_Municipiosafectados_4.set('fieldLabels', {'NOM_MUNI': 'inline label', 'Superficie': 'inline label', });
lyr_RedNatura2000_5.set('fieldLabels', {'CODI_LIC': 'inline label', 'NOM_N2': 'inline label', 'Superfic_1': 'inline label', });
lyr_Volumendemaderamediom3ha_6.set('fieldLabels', {'Vegetacion': 'inline label', 'vcc': 'inline label', 'ab': 'inline label', 'dg': 'inline label', 'hm': 'inline label', 'Pdte': 'inline label', 'REFCAT': 'inline label', });
lyr_Cubiertasdevegetacin_7.set('fieldLabels', {'Vegetacion': 'inline label', 'vcc': 'inline label', 'ab': 'inline label', 'dg': 'inline label', 'hm': 'inline label', 'Pdte': 'inline label', 'REFCAT': 'inline label', });
lyr_reasdegestinprioritariaAGPsegnorganismo_8.set('fieldLabels', {'cod': 'inline label', 'Organ': 'inline label', 'RN2000': 'inline label', 'NOM_MUNI': 'inline label', 'REFCAT': 'inline label', });
lyr_reasdegestinprioritariaAGPsegntipologa_9.set('fieldLabels', {'cod': 'inline label', 'Organ': 'inline label', 'RN2000': 'inline label', 'NOM_MUNI': 'inline label', 'REFCAT': 'inline label', });
lyr_Redviariabsicadeprevencindeincendios_10.set('fieldLabels', {'TIPUS_VIAL': 'inline label', 'REVESTIMEN': 'inline label', 'Longitud': 'inline label', 'NOM_MUNI': 'inline label', });
lyr_Puntosdeaguabalsas_11.set('fieldLabels', {'CATEGORIA': 'inline label', 'CAPACITAT': 'inline label', 'APTE_TERRE': 'inline label', 'APTE_AERI': 'inline label', });
lyr_Puntosdeaguabalsas_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});