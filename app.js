mapboxgl.accessToken = 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/coxco96/cl48g9gt1000214mokqw6mtkr', // "miamiflood_layersoff" style
    zoom: 8.2,
    center: [-80.793550, 25.561938],
    // maxBounds: [
    //     [-81.7, 25],
    //     [-80, 26.802]
    // ],
    minZoom: 8.2
});


console.log(map.getZoom());
// wait until map has finished loading

map.on('load', () => {
    // add 2052 raster tileset
    map.addSource('floodrisk52', {
        type: 'raster',
        url: 'mapbox://coxco96.52_rendered_bluegreen'
    });
    map.addLayer({
        'id': '2052',
        'type': 'raster',
        'source': 'floodrisk52',
        'layout': {
            'visibility': 'none'
        }
    });

    // add 2022 raster tileset
    map.addSource('floodrisk22', {
        type: 'raster',
        url: 'mapbox://coxco96.22_rendered_bluegreen'
    });
    map.addLayer({
        'id': '2022',
        'type': 'raster',
        'source': 'floodrisk22',
        'layout': {
            'visibility': 'visible'
        }
    });
});




// after layers have rendered and before map enters idle state, check to make sure layers were added. if not, abort.

map.on('idle', () => {

    let visibility22 = map.getLayoutProperty('2022', 'visibility');
    let visibility52 = map.getLayoutProperty('2052', 'visibility');

    console.log("before click. 2022: " + visibility22 + ", 2052: " + visibility52);

    if (!map.getLayer('2052') || !map.getLayer('2022')) {
        return;
    };

    // create array of layer IDs
    // (would add more IDs to array for more buttons)
    const toggleableLayerIds = ['2022'];

    // set up corresponding toggle button

    for (const id of toggleableLayerIds) {
        // skip layers that already have a button set up
        if (document.getElementById(id)) {
            continue;
        }

        // create a link
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.innerHTML = "Current View: 2022. Click to change.";
        link.className = 'active';


        // show or hide layer when the toggle is clicked  
        link.onclick = function (e) {

            e.preventDefault();
            e.stopPropagation();

            // toggle layer visibility by changing the layout object's visibility property

            if (visibility22 == 'visible') {
                // if 2022 is visible on click... set 2052 to visible and 2022 to none
                map.setLayoutProperty('2022', 'visibility', 'none');
                map.setLayoutProperty('2052', 'visibility', 'visible')
                this.className = '';
                link.innerHTML = "Current View: 2052"
                visibility22 = map.getLayoutProperty('2022', 'visibility');
                visibility52 = map.getLayoutProperty('2052', 'visibility');
            } else if (visibility22 == 'none') {
                // if 2022 is not visible on click... set 2022 to visible and 2052 to hidden
                this.className = 'active';
                link.innerHTML = "Current View: 2022";
                map.setLayoutProperty('2022', 'visibility', 'visible');
                map.setLayoutProperty('2052', 'visibility', 'none')
                visibility52 = map.getLayoutProperty('2052', 'visibility');
                visibility22 = map.getLayoutProperty('2022', 'visibility');
            }
            console.log("after click. 2022: " + visibility22 + ", 2052: " + visibility52);

        };

        const layers = document.getElementById('menu');
        layers.appendChild(link);
    }
});