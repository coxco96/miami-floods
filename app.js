mapboxgl.accessToken = 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/coxco96/cl47lbr7d003t14sb0bhuhdb3',
    zoom: 9,
    center: [-80.493550, 25.561938],
    maxBounds: [[-81.7, 25], [-79.4, 26.802]],
    minZoom: 9
});

console.log(map.getBounds())
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
            'visibility': 'visible'
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
    if (!map.getLayer('2052') || !map.getLayer('2022')) {
        return;
    };

    // create array of layer IDs
    const toggleableLayerIds = ['2052'];

    // set up corresponding toggle button for each layer

    for (const id of toggleableLayerIds) {
        // skip layers that already have a button set up
        if (document.getElementById(id)) {
            continue;
        }

        // create a link
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.innerHTML = "Current view: " + id;
        link.className = 'active';

        // show or hide layer when the toggle is clicked

        link.onclick = function (e) {
            const clickedLayer = this.id;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // toggle layer visibility by changing the layout object's visibility property
            console.log(clickedLayer);

            if (visibility == 'visible' && clickedLayer == '2052') {
                // set 2052 to hidden and 2022 to visible
                map.setLayoutProperty('2052', 'visibility', 'none');
                map.setLayoutProperty('2022', 'visibility', 'visible')
                this.className = '';
                link.innerHTML = "Current view: 2022"
            } else if (visibility == 'none' && clickedLayer == '2052') {
                // set 2052 to visible and 2022 to hidden
                this.className = 'active';
                link.innerHTML = "Current view: 2052";
                map.setLayoutProperty('2052', 'visibility', 'visible');
                map.setLayoutProperty('2022', 'visibility', 'none')

            }

        };
        const layers = document.getElementById('menu');
        layers.appendChild(link);
    }
});

