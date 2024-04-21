import React from 'react'
import {Link} from 'react-router-dom'

import design1 from '../../assets/graphics/design1.png'
import design2 from '../../assets/graphics/design2.png'
import design3 from '../../assets/graphics/design3.png'
import design4 from '../../assets/graphics/design4.png'

const Design = () => {
    return (
        <>
            <div class="design-section">
                <h3>Recent Logo Designs</h3>
                <p>Collection of design and graphics</p>

                <div class="designs">
                    <img src={design1} alt="Logo 1" />
                    <img src={design2} alt="Logo 2" />
                    <img src={design3} alt="Logo 3" />
                    <img src={design4} alt="Logo 4" />
                </div>

                <div class="large-button">
                    <Link to="/grpahics"><button>See More Designs &#x21e2;</button></Link>
                </div>
            </div>
        </>
    )

}
export default Design