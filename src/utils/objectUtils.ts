export function isEmpty(obj: any[] | string) {
  return obj === undefined || (obj && obj.length === 0) ? true : false;
};

export function requireNonEmpty(obj: string, err?) {
  if (obj === undefined
    || obj === null 
    || isEmpty(obj)) {
    throw err
      ? err
      : new TypeError('object is empty');
  } else {
    return obj;
  }
};