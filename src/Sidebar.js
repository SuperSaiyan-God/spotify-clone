import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
            <br/>

            <strong className="sidebar_title">PLAYLISTS</strong>
            <SidebarOption title="Create Playlist" Icon={AddBoxIcon} />
            <SidebarOption title="Liked Songs" Icon={FavoriteIcon} />

            <hr/>

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/>
            ))}
           
        </div>
    );
}

export default Sidebar;
