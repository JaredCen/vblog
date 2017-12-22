export interface Menu {
  label: string;
  value: string;
  path: string;
}

const menus: Menu[] = [{
  label: '博客',
  value: 'blog',
  path: 'blog'
}, {
  label: '作品',
  value: 'work',
  path: 'Works'
}, {
  label: '写博客',
  value: 'write',
  path: 'Editor'
}, {
  label: '文章列表',
  value: 'articles',
  path: 'Articles'
}];

export default menus;
