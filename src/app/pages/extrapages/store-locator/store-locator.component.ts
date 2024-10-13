import { Component } from "@angular/core";
// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

@Component({
  selector: "app-store-locator",
  templateUrl: "./store-locator.component.html",
  styleUrls: ["./store-locator.component.scss"],
})
export class StoreLocatorComponent {
  options: any;

  ngOnInit() {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12,
    };

    // Set world-map-markers amchart
    let markerRoot = am5.Root.new("world-map-markers");

    markerRoot.setThemes([am5themes_Animated.new(markerRoot)]);


    let markerChart = markerRoot.container.children.push(
      am5map.MapChart.new(markerRoot, {
        panX: "none",
        panY: "none",
        opacity: 1,
        projection: am5map.geoMercator(),
      })
    );

    markerChart.series.push(
      am5map.MapPolygonSeries.new(markerRoot, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color("#f3f6f9"),
        stroke: am5.color("#878a99"),

      })
    );

    // Create point series
    var pointSeries = markerChart.series.push(
      am5map.MapPointSeries.new(markerRoot, {})
    );

    pointSeries.bullets.push(function (_root, _series, dataItem: any) {
      return am5.Bullet.new(markerRoot, {
        sprite: am5.Circle.new(markerRoot, {
          radius: 6,
          stroke: am5.color("#fff"),
          strokeWidth: 5,
          strokeOpacity: 0.5,
          fill: am5.color(0xff0000),
          fillOpacity: 1,
          cursorOverStyle: 'pointer',
        }),
      });
    });

    pointSeries.pushDataItem({ latitude: 31.9474, longitude: 35.2272 });
    pointSeries.pushDataItem({ latitude: 61.524, longitude: 105.3188 });
    pointSeries.pushDataItem({ latitude: 56.1304, longitude: -106.3468 });
    pointSeries.pushDataItem({ latitude: 71.7069, longitude: -42.6043 });

  }
}