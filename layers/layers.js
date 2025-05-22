var wms_layers = [];


        var lyr_basemap_0 = new ol.layer.Tile({
            'title': 'basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ndvi_1 = new ol.format.GeoJSON();
var features_ndvi_1 = format_ndvi_1.readFeatures(json_ndvi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndvi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndvi_1.addFeatures(features_ndvi_1);
var lyr_ndvi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndvi_1, 
                style: style_ndvi_1,
                popuplayertitle: 'ndvi',
                interactive: true,
                title: '<img src="styles/legend/ndvi_1.png" /> ndvi'
            });

lyr_basemap_0.setVisible(true);lyr_ndvi_1.setVisible(true);
var layersList = [lyr_basemap_0,lyr_ndvi_1];
lyr_ndvi_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'صحه': 'صحه', 'رطوبه': 'رطوبه', });
lyr_ndvi_1.set('fieldImages', {'Id': '', 'gridcode': '', 'صحه': '', 'رطوبه': '', });
lyr_ndvi_1.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'صحه': 'inline label - visible with data', 'رطوبه': 'inline label - visible with data', });
lyr_ndvi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});