var wms_layers = [];


        var lyr_VietnamOSMMaps_0 = new ol.layer.Tile({
            'title': 'Vietnam OSM Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://thuduc-maps.hcmgis.vn/thuducserver/gwc/service/wmts?layer=thuduc:thuduc_maps&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Ranhgiihnhchnhtnh_2 = new ol.format.GeoJSON();
var features_Ranhgiihnhchnhtnh_2 = format_Ranhgiihnhchnhtnh_2.readFeatures(json_Ranhgiihnhchnhtnh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ranhgiihnhchnhtnh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranhgiihnhchnhtnh_2.addFeatures(features_Ranhgiihnhchnhtnh_2);
var lyr_Ranhgiihnhchnhtnh_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ranhgiihnhchnhtnh_2, 
                style: style_Ranhgiihnhchnhtnh_2,
                interactive: true,
                title: '<img src="styles/legend/Ranhgiihnhchnhtnh_2.png" /> Ranh giới hành chính tỉnh'
            });
var format_dulieumoi_3 = new ol.format.GeoJSON();
var features_dulieumoi_3 = format_dulieumoi_3.readFeatures(json_dulieumoi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dulieumoi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dulieumoi_3.addFeatures(features_dulieumoi_3);
var lyr_dulieumoi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dulieumoi_3, 
                style: style_dulieumoi_3,
                interactive: true,
                title: '<img src="styles/legend/dulieumoi_3.png" /> dulieumoi'
            });

lyr_VietnamOSMMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Ranhgiihnhchnhtnh_2.setVisible(true);lyr_dulieumoi_3.setVisible(true);
var layersList = [lyr_VietnamOSMMaps_0,lyr_GoogleHybrid_1,lyr_Ranhgiihnhchnhtnh_2,lyr_dulieumoi_3];
lyr_Ranhgiihnhchnhtnh_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'PolyId': 'PolyId', 'Ten_hc': 'Ten_hc', 'Danso': 'Danso', 'Dientich': 'Dientich', 'duangis': 'duangis', });
lyr_dulieumoi_3.set('fieldAliases', {'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', });
lyr_Ranhgiihnhchnhtnh_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'PolyId': 'Range', 'Ten_hc': 'TextEdit', 'Danso': 'Range', 'Dientich': 'TextEdit', 'duangis': 'Range', });
lyr_dulieumoi_3.set('fieldImages', {'A': 'TextEdit', 'B': 'TextEdit', 'C': 'TextEdit', 'D': 'TextEdit', 'E': 'TextEdit', 'F': 'TextEdit', 'G': 'TextEdit', 'H': 'TextEdit', 'I': 'TextEdit', });
lyr_Ranhgiihnhchnhtnh_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'PolyId': 'no label', 'Ten_hc': 'no label', 'Danso': 'no label', 'Dientich': 'no label', 'duangis': 'no label', });
lyr_dulieumoi_3.set('fieldLabels', {'A': 'inline label', 'B': 'no label', 'C': 'no label', 'D': 'no label', 'E': 'no label', 'F': 'no label', 'G': 'no label', 'H': 'no label', 'I': 'inline label', });
lyr_dulieumoi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});