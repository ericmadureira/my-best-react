import mockUserInfo from '../mock/userInfo';

const { groupRideFrequency, weekdaysRideFrequency } = mockUserInfo;

const countPhotosPerUser = (albums, photos) => {
  let photosPerAlbum = {};
  let photosPerUser = {};
  photos.forEach(photo => photosPerAlbum[photo.albumId] = 1 + (photosPerAlbum[photo.albumId] || 0));
  albums.forEach(album => photosPerUser[album.userId] = photosPerAlbum[album.id] + (photosPerUser[album.userId] || 0));
  return photosPerUser;
};

const countPostsPerUser = (posts) => {
  let postsPerUser = {};
  posts.forEach(post => postsPerUser[post.userId] = 1 + (postsPerUser[post.userId] || 0));
  return postsPerUser;
};

const countAlbumsPerUser = (albums) => {
  let albumsPerUser = {};
  albums.forEach(album => albumsPerUser[album.userId] = 1 + (albumsPerUser[album.userId] || 0));
  return albumsPerUser;
};

const parseUserList = (userInfo, posts, albums, photos) => {
  const userPosts = countPostsPerUser(posts);
  const userAlbums = countAlbumsPerUser(albums);
  const userPhotos = countPhotosPerUser(albums, photos);

  return userInfo.map(user => {
    const { address: { city }, email, id, name, username } = user;
    return {
      albums: userAlbums[id],
      city,
      email,
      groupRideFrequency: groupRideFrequency[id],
      id,
      name,
      photos: userPhotos[id],
      posts: userPosts[id],
      username,
      weekdaysRideFrequency: weekdaysRideFrequency[id],
    };
  });
};

const dataParsers = {
  parseUserList,
};

export default dataParsers;