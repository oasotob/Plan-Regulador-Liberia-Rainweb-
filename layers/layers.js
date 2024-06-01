ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10717782.069406, 874352.200570, -8492661.047618, 1819352.148084]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RadarMeteoLasNubes_1 = new ol.format.GeoJSON();
var features_RadarMeteoLasNubes_1 = format_RadarMeteoLasNubes_1.readFeatures(json_RadarMeteoLasNubes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadarMeteoLasNubes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadarMeteoLasNubes_1.addFeatures(features_RadarMeteoLasNubes_1);cluster_RadarMeteoLasNubes_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RadarMeteoLasNubes_1
});
var lyr_RadarMeteoLasNubes_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RadarMeteoLasNubes_1, 
                style: style_RadarMeteoLasNubes_1,
                popuplayertitle: "Radar Meteo Las Nubes",
                interactive: true,
                    title: '<img src="styles/legend/RadarMeteoLasNubes_1.png" /> Radar Meteo Las Nubes'
                });
var format_Circuloscada50Km_2 = new ol.format.GeoJSON();
var features_Circuloscada50Km_2 = format_Circuloscada50Km_2.readFeatures(json_Circuloscada50Km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circuloscada50Km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circuloscada50Km_2.addFeatures(features_Circuloscada50Km_2);
var lyr_Circuloscada50Km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Circuloscada50Km_2, 
                style: style_Circuloscada50Km_2,
                popuplayertitle: "Circulos cada 50Km",
                interactive: true,
                    title: '<img src="styles/legend/Circuloscada50Km_2.png" /> Circulos cada 50Km'
                });
var lyr_LNB_CAPPI_Z_450Km_1Km_cappi_dBZ2_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://rainweb.cocesna.org:8080/geoserver/geosolutions/wms?VERSION%3D1.1.1%26LAYERS%3DLNB_CAPPI_Z_450Km_1Km_cappi_dBZ%26STYLES%3DNEXRAD_dBZ%26TRANSPARENT%3Dtrue%26HEIGHT%3D256%26WIDTH%3D256%26ZINDEX%3D1050%26TIME%3D2024-06-01T02%3A45%3A28.000Z%26SRS%3DEPSG%3A3857%26BBOX%3D-9392582.035682458,1252344.2714243277,-9079495.967826376,1565430.3392804093",
    attributions: ' ',
                              params: {
                                "LAYERS": "LNB_CAPPI_Z_450Km_1Km_cappi_dBZ2",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LNB_CAPPI_Z_450Km_1Km_cappi_dBZ2",
                            opacity: 1.000000,
                            
maxResolution:28004.466152261964,

                            
                          });
              wms_layers.push([lyr_LNB_CAPPI_Z_450Km_1Km_cappi_dBZ2_3, 1]);

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_RadarMeteoLasNubes_1.setVisible(true);lyr_Circuloscada50Km_2.setVisible(true);lyr_LNB_CAPPI_Z_450Km_1Km_cappi_dBZ2_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_RadarMeteoLasNubes_1,lyr_Circuloscada50Km_2,lyr_LNB_CAPPI_Z_450Km_1Km_cappi_dBZ2_3];
lyr_RadarMeteoLasNubes_1.set('fieldAliases', {'id': 'id', });
lyr_Circuloscada50Km_2.set('fieldAliases', {'id': 'id', 'Diametro': 'Diametro', });
lyr_RadarMeteoLasNubes_1.set('fieldImages', {'id': '', });
lyr_Circuloscada50Km_2.set('fieldImages', {'id': 'TextEdit', 'Diametro': 'TextEdit', });
lyr_RadarMeteoLasNubes_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Circuloscada50Km_2.set('fieldLabels', {'id': 'no label', 'Diametro': 'no label', });
lyr_Circuloscada50Km_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});