export function currency(num) {
  const n = parseInt(num, 10);
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) => (i && c !== '.' && (a.length - i) % 3 === 0 ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleString('zh-TW', { hour12: false });
}

export function onlyDate(time) {
  const localDate = new Date(time * 1000);
  const year = localDate.getFullYear();
  const month = (localDate.getMonth() + 1).toString().padStart(2, '0');
  const day = localDate.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
}
