import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoitem = props.videos.map((video) => {
        return <VideoListItem key = {video.etag} video = {video} onselectVideo = {props.onselectVideo}/>;
    });

    return(
        <ul className="col-md-4 listgroup">
            {videoitem}
        </ul>
    );
}

export default VideoList;
