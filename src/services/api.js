import axios from 'axios';

import urls from '../constants/urls';
import dataParsers from '../shared/dataParsers';

const userListService = async () => {
  const { data: userInfo } = await axios.get(urls.fetchUserInfo);
  const { data: posts } = await axios.get(urls.fetchPosts);
  const { data: albums } = await axios.get(urls.fetchAlbums);
  const { data: photos } = await axios.get(urls.fetchPhotos);
  return dataParsers.parseUserList(userInfo, posts, albums, photos);
};

const api = {
  userListService,
};

export default api;
