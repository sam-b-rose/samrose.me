export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

const baseStyles = [
  'color: #F2F2F2',
  'background-color: #262D40',
  'padding: 2px 4px',
  'border-radius: 2px',
].join(';');
const primaryStyles = ['background-color: #C6797E'].join(';');
const secondaryStyles = ['background-color: #969E92'].join(';');

export const log = (msg: string, type?: 'primary' | 'secondary') => {
  let style = baseStyles + ';';
  switch (type) {
    case 'primary':
      style += primaryStyles;
      break;
    case 'secondary':
      style += secondaryStyles;
      break;
    default:
      break;
  }
  console.log(`%c${msg}`, style);
};
