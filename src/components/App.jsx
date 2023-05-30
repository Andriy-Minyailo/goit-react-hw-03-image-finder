import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { RequestServer } from '../pixabayAPI';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const requestServer = new RequestServer();
export class App extends Component {
  state = {
    imgs: [],
    page: 1,
  };
  async componentDidMount() {
    const {
      data: { hits },
    } = await requestServer.searchImg('cat', this.state.page);
    this.setState({ imgs: hits });
  }
  render() {
    return (
      <div className={css.container}>
        <Searchbar></Searchbar>
        <ImageGallery imgs={this.state.imgs} />
      </div>
    );
  }
}
