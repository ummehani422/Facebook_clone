import { FilterNone } from '@material-ui/icons'
import React from 'react'
import "./widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe  
             src="https://scontent.fkhi2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/120779020_23846029146980555_5346937438856025858_n.jpg?_nc_cat=107&ccb=2&_nc_sid=67cdda&_nc_eui2=AeFT-RWWIb_7JciN-fFJZOYUqMp3wBCXxmmoynfAEJfGafvbCPgwJQnvTuOJTH8dgLk5thfQbYtJMkNB-6sqdw8V&_nc_ohc=5eI2UWB-u9AAX8b5nEN&_nc_ht=scontent.fkhi2-1.fna&oh=8858de33431bd14d2e0bf43a9930a412&oe=602446C7" frameborder="0"
            width="340"
            height="100%"
            marginTop="8"
            style={{border:"none", overflow:"hidden"}
        }
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
        </div>
    );
}

export default Widgets
