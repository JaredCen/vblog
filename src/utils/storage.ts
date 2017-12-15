import * as cst from '../config/constant';

interface StorageInterface {
  setItem (key: string, value: string | object): void;
  getItem (key: string): string;
  removeItem (key: string): void;
  clear (): void;
}

const prefix = `${window.location.host}${cst.APP_NAME}`;

const storage: StorageInterface = {
  setItem (key, value) {
    if (typeof window.localStorage !== 'undefined') {
      const k = `${prefix}${key}`;
      const v = typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(k, v);
    }
  },
  getItem (key) {
    if (typeof window.localStorage !== 'undefined') {
      const k = `${prefix}${key}`;
      const v = localStorage.getItem(k);
      return v ? v : '';
    } else {
      return '';
    }
  },
  removeItem (key) {
    if (typeof window.localStorage !== 'undefined') {
      const k = `${prefix}${key}`;
    }
  },
  clear () {
    if (typeof window.localStorage !== 'undefined') {
      localStorage.clear();
    }
  }
};

export default storage;
