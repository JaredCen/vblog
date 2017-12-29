import Common from './common';

interface Tag {
  name: string;
  type: string;
}
interface Article {
  id: number;
  cover?: string;
  title: string;
  desc: string;
  tag: Tag[];
  author: string;
  create_time: number;
  modify_time: number;
  // TODO：收藏，推荐
}

const articles: Article[] = [{
  id: 1,
  title: 'junrey测试',
  desc: 'junrey desc',
  tag: [{
    name: 'HTML',
    type: 'fe'
  }],
  author: 'junrey',
  create_time: 1514537466666,
  modify_time: 1514537477953
}];

class Articles extends Common {
  static getArticles () {
    return articles;
  }
}

export default Articles;
