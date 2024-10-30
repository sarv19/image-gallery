// src/utils/mockImages.js
export const generateMockImages = (count) => {
  const mockUsernames = ['user1', 'user2', 'user3', 'user4', 'user5'];
  
  return Array.from({ length: count }, (_, index) => {
    const width = Math.floor(Math.random() * 200) + 200;
    const height = Math.floor(Math.random() * 200) + 200;
    const username = mockUsernames[index % mockUsernames.length];
    const likes = Math.floor(Math.random() * 1000);
    
    return {
      src: `https://picsum.photos/id/${index}/${width}/${height}`,
      width,
      height,
      username,
      likes
    };
  });
};
