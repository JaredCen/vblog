import Vue from 'vue';
import MsgboxVue from './';
import _extend, { Target } from '../../utils/extend';

const MsgboxConstructor = Vue.extend(MsgboxVue);

interface Messagebox {
  next (): Promise<boolean>;
  close (): void;
}

class Msgbox implements Messagebox {
  private instance: any;
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
  public close () {
    if (this.instance) {
      this.instance.close && this.instance.close();
    }
  }
  private initInstance (resolve: Function, reject: Function): void {
    const onConfirm = (): void => {
      resolve(true);
    };

    const onCancel = (): void => {
      reject(false);
      instance = null;
    };

    this.instance = new MsgboxConstructor({
      el: document.createElement('div'),
      propsData: _extend(this.opts, {
        onConfirm,
        onCancel
      })
    });

    document.body.appendChild(this.instance.$el);
  }
}

let instance: Msgbox | null = null;

const confirm = (opts: object): Promise<boolean> => {
  instance = new Msgbox();
  return instance.next();
};

const alert = (opts: object): Promise<boolean> => {
  instance = new Msgbox();
  return instance.next();
};

const close = (): void => {
  instance && instance.close();
  instance = null;
};

export {
  confirm,
  alert,
  close
};
