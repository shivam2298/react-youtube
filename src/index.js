import React from 'react';
import SearchBar from './components/search_bar';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import Detail from './components/video_detail';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const api_key = 'AIzaSyB_l2MEjOqX7RIX6bJfT5RvPi1Imaya6Pw';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null,
    };



    this.searchTerm('bill gates');
  }
  searchTerm(term){
    YTSearch({key: api_key, term:term}, (videos) => {
      this.setState({videos:videos,selectedVideo:videos[0]});
    });
  }
  render(){
  return (
    <div>
      <SearchBar searchTerm = {term => this.searchTerm(term)}/>
      <Detail video = {this.state.selectedVideo} />
      <VideoList videos = {this.state.videos} onselectVideo = {selectedVideo => this.setState({selectedVideo})}/>



    </div>
  );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
