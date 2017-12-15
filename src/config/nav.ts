export interface Menu {
  label: string;
  value: string;
  path: string;
  ask?: boolean;
}

const menus: Menu[] = [{
  label: '博客',
  value: 'blog',
  path: 'blog'
}, {
  label: '作品',
  value: 'work',
  path: 'work'
}, {
  label: '写博客',
  value: 'write',
  path: 'Editor',
  ask: true
}];

export default menus;
