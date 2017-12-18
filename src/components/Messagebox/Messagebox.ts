
interface Messagebox {
  next (): Promise<boolean>;
}

class Msgbox implements Messagebox {
  private instance: Promise<boolean>;
  constructor (opts?: object, callback?: Function) {
    // TODO
  }
  public next () {
    return new Promise<boolean>((resolve, reject) => {
      // TODO
    });
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
