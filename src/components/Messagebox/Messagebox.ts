import Vue from 'vue';
import MsgboxVue from './';

const MsgboxConstructor = Vue.extend(MsgboxVue);

interface Messagebox {
  next (): Promise<boolean>;
}

class Msgbox implements Messagebox {
  private instance: any;
  private opts: object;
  constructor (opts?: object, callback?: Function) {
    if (!this.instance) {
      this.initInstance();
    }
  }
  public next () {
    return new Promise<boolean>((resolve, reject) => {
      // TODO
      this.instance.$on('Messagebox:confirm', () => {
        resolve(true);
      });
      this.instance.$on('Messagebox:close', () => {
        reject(false);
      });
    });
  }
  private initInstance (): void {
    this.instance = new MsgboxConstructor({
      el: document.createElement('div')
    });
    this.instance.$on('Messagebox:close', () => {
      this.instance.$el.parentNode.removeChild(this.instance.$el);
    });
    document.body.appendChild(this.instance.$el);
  }
}

const confirm = (opts: object): Promise<boolean> => {
  console.log('confirm');
  const msgbox = new Msgbox();
  return msgbox.next();
};

const alert = (opts: object): Promise<boolean> => {
  console.log('alert');
  const msgbox = new Msgbox();
  return msgbox.next();
};

export {
  confirm,
  alert
};
