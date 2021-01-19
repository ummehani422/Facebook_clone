import userEvent from '@testing-library/user-event'
import React from 'react'
import "./sidebar.css"
import SiderbarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StartProvider';
function Sidebar() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="sidebar">
            {/* <SidebarRow src={user.photoURL}  title={user.displayName}/> */}
            <SiderbarRow Icon={LocalHospitalIcon} title='Covid-19 Information Center'/>
            <SiderbarRow  Icon={EmojiFlagsIcon} title="Pages"/>
            <SiderbarRow Icon={SupervisorAccountIcon} title="Friends"/>
            <SiderbarRow Icon={StorefrontIcon} title="Messenger"/>
            <SiderbarRow Icon={VideoLibraryIcon} title="Marketplace"/>
            <SiderbarRow Icon={ExpandMoreIcon } title="See More"/>
        </div>
    );
}

export default Sidebar
