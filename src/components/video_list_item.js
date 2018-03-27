import React from 'react'

const VideoListItem = ({video,onselectVideo}) =>{
  let imgurl = video.snippet.thumbnails.default.url;
    return (
    <li onClick = {() => onselectVideo(video)} className = "list-group-item col-lg-12">
      <div className = "video-list media">
        <div className = "media-left">
          <img className = "media-object" src = {imgurl} />
        </div>
        <div className = "media-body">
          <div className = "media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
    );
}


export default VideoListItem;
