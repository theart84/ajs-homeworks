export default function orderByProps(object, props = []) {
  const arrayWithProps = [];
  const arrayWithoutProps = [];

  props.forEach((key) => {
    if (key in object) {
      arrayWithProps.push({
        key,
        value: object[key],
      });
    }
  });
  for (const key in object) {
    if (!props.includes(key)) {
      arrayWithoutProps.push({
        key,
        value: object[key],
      });
    }
  }
  arrayWithoutProps.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...arrayWithProps, ...arrayWithoutProps];
}
