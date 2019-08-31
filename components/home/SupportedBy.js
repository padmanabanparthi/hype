import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function SupportedBy () {
    const supportedby = [
        { title: 'Deutsche Bank', img:'support1.png' },
        { title: 'Retailtech Hub', img:'support2.png' },
        { title: 'PlugAndPlay', img:'support3.png' },
        { title: 'THE FAMILY', img:'support4.png' },
    ];

    const imgpath="/static/";
    const listItems = supportedby.map((support,index) =>
        <Slide bottom>
            <div key={index} className="col-md-3 text-center supported-by-lists">
                <img src={imgpath+support.img} alt="" />
            </div>
        </Slide>
    );
    
    return (
        <div className="row supported-by">
            {listItems}
        </div>
            
    )
}