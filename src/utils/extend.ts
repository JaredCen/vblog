export interface Target {
  [prop: string]: any;
}

export default function (target: Target, ...sources: Target[]): object {
  const len = sources.length;
  for (let i = 0; i < len; i++) {
    let source = sources[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
}
