const random = (): string => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const guid = (): string => {
  return random() + random() + "-" + random() + "-" + random() + "-" + random() + random();
};
