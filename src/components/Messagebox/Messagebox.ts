import Vue from 'vue';
import MsgboxVue from './';
import extend, { Target } from '../../utils/extend';

const MsgboxConstructor = Vue.extend(MsgboxVue);

interface Messagebox {
  next (): Promise<boolean>;
}

class Msgbox implements Messagebox {
  private instance: Vue;
  private opts: Target;
  constructor (opts?: Target, callback?: Function) {
    this.opts = opts || {};
  }
  public next () {
    return new Promise<boolean>((resolve, reject) => {
      if (!this.instance) {
        this.initInstance(resolve, reject);
      }
    });
  }
  private initInstance (resolve: Function, reject: Function): void {
    const confirmCb = (): void => {
      resolve(true);
    };

    const cancelCb = (): void => {
      reject(false);
    };

    this.instance = new MsgboxConstructor({
      el: document.createElement('div'),
      propsData: extend(this.opts, {
        confirmCb,
        cancelCb
      })
    });

    document.body.appendChild(this.instance.$el);
  }
}

const confirm = (opts: object): Promise<boolean> => {
  const msgbox = new Msgbox();
  return msgbox.next();
};

const alert = (opts: object): Promise<boolean> => {
  const msgbox = new Msgbox();
  return msgbox.next();
};

export {
  confirm,
  alert
};
