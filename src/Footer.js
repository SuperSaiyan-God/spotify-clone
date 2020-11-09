import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="https://upload.wikimedia.org/wikipedia/en/1/1d/24kGoldn_-_Mood.png" alt=""/>
                <div className="footer_songInfo">
                    <h4>Mood (feat. iann dior)</h4>
                    <p>24kGoldn, iann dior</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer_iconn" />
                    </Grid>
                    <Grid item>
                        <DesktopWindowsOutlinedIcon className="footer_iconn" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer_iconn" />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
