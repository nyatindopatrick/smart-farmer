import React from 'react'

export default function Maps() {
    return (
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Kisumu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe><a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                </div><style>.mapouter{{position:"relative", textAlign:"right", height:"500px", width:"600px"}}.gmap_canvas 
                {{overflow:"hidden", background:"none !important", height:"500px", width:"600px"}}</style>
            </div>

    )
}
