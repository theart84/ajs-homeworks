export default function specialAttack({ special: [...data] }) {
  return data.map((item) => {
    if ('description' in item) {
      return item;
    }
    return {
      ...item,
      description: 'Описание недоступно',
    };
  });
}
