mapboxgl.accessToken = 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/coxco96/cl4dnlvpu002c16myohiiubjh', // finalfloodmap in studio
    zoom: 7.8,
    center: [-80.563368, 25.553404],
    minZoom: 7.8
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
    }, 'poi-label');

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
    }, 'poi-label');
});




// after layers have rendered and before map enters idle state, check to make sure layers were added. if not, abort.

map.on('idle', () => {

    let visibility22 = map.getLayoutProperty('2022', 'visibility');
    let visibility52 = map.getLayoutProperty('2052', 'visibility');

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

    

        // create toggle button 

        const spanSlider = document.createElement('span'); // will become child of labelSwitch
        spanSlider.className = 'slider';
        spanSlider.href = '#'; 

        const inputCheckbox = document.createElement('input'); // will become child of labelSwitch
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = 'checked';

        const labelSwitch = document.createElement('label');
        labelSwitch.className = 'switch';
        labelSwitch.id = id;



        // show or hide layer when the toggle is clicked  
        spanSlider.onclick = function (e) {
            e.stopPropagation();
            // toggle layer visibility by changing the layout object's visibility property

            if (visibility22 == 'visible') {
                // if 2022 is visible on click... set 2052 to visible and 2022 to none
                map.setLayoutProperty('2022', 'visibility', 'none');
                map.setLayoutProperty('2052', 'visibility', 'visible')
                //this.className = '';
                //link.innerHTML = "Current View: 2052"
                visibility22 = map.getLayoutProperty('2022', 'visibility');
                visibility52 = map.getLayoutProperty('2052', 'visibility');
            } else if (visibility22 == 'none') {
                // if 2022 is not visible on click... set 2022 to visible and 2052 to hidden
               // this.className = 'active';
                //link.innerHTML = "Current View: 2022";
                map.setLayoutProperty('2022', 'visibility', 'visible');
                map.setLayoutProperty('2052', 'visibility', 'none')
                visibility52 = map.getLayoutProperty('2052', 'visibility');
                visibility22 = map.getLayoutProperty('2022', 'visibility');
            }
            check();
            console.log(map.getCenter());

        };


        const toggleId = document.getElementById('toggle-id');
        labelSwitch.append(inputCheckbox, spanSlider);
        toggleId.append(labelSwitch);




    }

    // check to see if checkmark is checked to determine which year to underline
    function check () {
        console.log(document.getElementById('checked').checked);
        if (!document.getElementById('checked').checked) {
            document.getElementById('true-year-1').classList.remove('underlined');
           document.getElementById('true-year-2').classList.add('underlined');
        } else if (document.getElementById('checked').checked) {
            document.getElementById('true-year-2').classList.remove('underlined');
           document.getElementById('true-year-1').classList.add('underlined');
        }
    }
   
    //console.log(document.getElementById('toggle-text').classList);
 
});
