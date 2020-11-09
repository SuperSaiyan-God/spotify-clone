import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SongRow from "./SongRow";

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p className="paragraph">{discover_weekly?.description}</p>
                    <p className="hardcode">Spotify . 30 songs, 1 hr 35 min </p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteBorderOutlinedIcon className="play" fontSize="large" />
                    <MoreHorizIcon className="horiz" />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;
