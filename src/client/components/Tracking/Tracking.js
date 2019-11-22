import React from 'react'

export default function Tracking() {
    return (
        <div className="p-4" style={{marginTop:"70px", color: "#007b5e"}} align="center" >
    <h3>Tracking From Seed to Sale</h3>
    <table className="table table-bordered track_tbl">
        <thead>
            <tr>
                <th></th>
                <th>Event</th>
                <th>Status</th>
                <th>Distibutor</th>
                <th>Date/Time</th>
            </tr>
        </thead>
        <tbody>
            <tr className="active">
                <td className="track_dot">
                    <span className="track_line"></span>
                </td>
                <td>01</td>
                <td>Buy Katumani seeds </td>
                <td>Wakulima Jamii</td>
                <td>31/07/2018 03:24:PM</td>
            </tr>
            <tr>
                <td className="track_dot">
                    <span className="track_line"></span>
                </td>
                <td>01</td>
                <td>Buy Jembe</td>
                <td>Mkulima Stores</td>
                <td>31/07/2018 22:24:PM</td>
            </tr>
            <tr>
                <td className="track_dot">
                    <span className="track_line"></span>
                </td>
                <td>01</td>
                <td>Buy NPM fertiliser</td>
                <td>Kenya Fertilizers Board</td>
                <td>31/07/2018 22:24:PM</td>
            </tr>
            <tr>
                <td className="track_dot">
                    <span className="track_line"></span>
                </td>
                <td>01</td>
                <td>Weed crops</td>
                <td>Outsource labourers</td>
                <td>31/07/2018 22:24:PM</td>
            </tr>
            <tr>
                <td className="track_dot">
                    <span className="track_line"></span>
                </td>
                <td>01</td>
                <td>Crops budding</td>
                <td>Flipkart</td>
                <td>31/07/2018 22:24:PM</td>
            </tr>
            <tr>
                <td className="track_dot">
                    <span className="track_line"></span>
                </td>
                <td>01</td>
                <td>Harvest 20 bags</td>
                <td>On sale</td>
                <td>31/07/2018 22:24:PM</td>
            </tr>
            <tr>
                <td className="track_dot">
                    <span className="track_line"></span>
                </td>
                <td>01</td>
                <td>Ready for sale</td>
                <td>Taimba Platform</td>
                <td>31/07/2018 22:24:PM</td>
            </tr>
        </tbody>
    </table>
    </div>
    )
}
