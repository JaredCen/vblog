import * as cst from '../config/constant';

interface StorageInterface {
  setItem (key: string, value: string | object, expires?: number): void;
  getItem (key: string): string;
  removeItem (key: string): void;
  clear (): void;
}

interface StorageField {
  expires: number;
  time: number;
  content: string;
}

const prefix = `${window.location.host}_${cst.APP_NAME}`;

const storage: StorageInterface = {
  setItem (key, value, expires) {
    if (typeof window.localStorage !== 'undefined') {
      const k = `${prefix}_${key}`;
      const v = typeof value === 'object' ? JSON.stringify(value) : value;
      const val: StorageField = {
        expires: typeof expires !== 'undefined' ? expires : -1,
        time: new Date().getTime(),
        content: v
      };
      localStorage.setItem(k, JSON.stringify(val));
    }
  },
  getItem (key) {
    if (typeof window.localStorage !== 'undefined') {
      const k = `${prefix}_${key}`;
      let v = localStorage.getItem(k) || '';
      const val = JSON.parse(v);
      if (val.expires === -1 || new Date().getTime() < val.time + val.expires) {
        v = val.content;
      } else {
        this.removeItem(key);
        v = '';
      }
      return v;
    } else {
      return '';
    }
  },
  removeItem (key) {
    if (typeof window.localStorage !== 'undefined') {
      const k = `${prefix}_${key}`;
      localStorage.removeItem(k);
    }
  },
  clear () {
    if (typeof window.localStorage !== 'undefined') {
      localStorage.clear();
    }
  }
};

export default storage;
