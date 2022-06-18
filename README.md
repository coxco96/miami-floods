# How was the Miami Flood Risk Map Made?

## Table of Contents

- [Overview](#overview)
- [Data sources](#data-sources)
- [Working with geoTIFF Files in QGIS](#working-with-geotiff-files-in-qgis)
- [Uploading geoTIFFs to Mapbox as Tilesets](#uploading-geotiffs-to-mapbox-as-tilesets)
- [Using Mapbox Studio to Create a Style Layer](#using-mapbox-studio-to-create-a-style-layer)
- [Creating a Custom Web Map with Mapbox GL JS](#creating-a-custom-map-with-mapbox-gl-js)
- [Add a Toggle Switch](#add-a-toggle-switch)
- [Adding a Modal Button for Additional Info](#adding-a-modal-button-for-additional-info)
- [Addendum: Help Me Make This Map More Accessible](#addendum-help-me-make-this-map-accessible)
---

## Overview  

I created the Miami flood map seen below was made for [this]() story by [Alex Harris]() in the Miami Herald. It depicts Miami-Dade's the flood risk in 2022, compared to its projected flood risk in 2052. 

---

## Data Sources/Attribution

1. I received flood data in the form of geoTIFF files directly from [First Street Foundation](https://firststreet.org/). You can find First Street Foundation's full flood-related datasets [here](https://livingatlas.arcgis.com/en/browse/?q=%22First%20Street%22#d=2&q=%22First%20Street%22&type=layers&srt=name). Explore all public data from the foundation [here](https://firststreet.org/data-access/public-access/).
2. [Shapefile: TIGER/LINE format on the U.S. county level](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html)
3. Toggle switch and modal button were coded following [W3Schools](https://www.w3schools.com/) tutorials. 
---

## Working with geoTIFF Files in QGIS

1. [Upload geoTIFFs to QGIS](#upload-geotiffs-to-qgis)
2. [Add a shapefile](#add-a-shapefile)
3. [Style raster Bands](#style-raster-bands)
4. [Convert bands to 8-bit](#convert-bands-to-8-bit)
5. [Export geoTIFFs](#export-geotiffs)


### **Upload geoTIFFs to QGIS**

### **Add a shapefile**

### **Style raster bands**

- Clip raster to area

### **Convert bands to 8-bit**

### **Export geoTIFFs**


---
## Uploading geoTIFFs to Mapbox as Tilesets

1. [Create Mapbox account](#create-mapbox-account)
2. [Use Mapbox's API to upload large files](#use-mapboxs-api-to-upload-large-files)
3. [Inspect Mapbox Studio tilesets](#inspect-mapbox-studio-tilesets)

### **Create Mapbox account**

### **Use Mapbox's API to upload large files**

### **Inspect Mapbox Studio tilesets**


---

## Using Mapbox Studio to Create a Style Layer

1. [What is Mapbox Studio?](#what-is-mapbox-studio)
2. [Create a base layer for your map](#create-a-base-layer-for-your-map)
3. [Add the tilesets (your flood data) and shapefile](#add-the-tilesets-your-flood-data-and-shapefile)
4. [Style text over flood maps](#style-text-over-flood-maps)
5. [Hide flood layers](#hide-flood-layers)
6. [Publish base map](#publish-base-map)

### **What is Mapbox Studio?**

### **Create a base layer for your map**

### **Add the tilesets (your flood data) and shapefile**

### **Style text over flood maps**

### **Hide flood layers**

### **Publish base map**

---

## Creating a Custom Map with Mapbox GL JS

1. [Initalize map](#initialize-map)
2. [Customize user interaction features](#customize-user-interaction-features)
3. [Add flood layers](#add-flood-layers)


### **Initialize map**

### **Customize user interaction features**

### **Add flood layers**

---

## Add a Toggle Switch
1. [Create the switch](#add-a-switch)
2. [Make the switch functional](#make-the-switch-functional)

### **Add a switch**

### **Make the switch functional**

---
## Adding a Modal Button for Additional Info
1.
2.
3.
4.

---
## Addendum: Help Me Make This Map Accessible

### Contents

 




