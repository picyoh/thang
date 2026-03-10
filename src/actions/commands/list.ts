export function listFile() {
  let list = "";
  const dirs = ["Documents", "Downloads", "Images"];
  dirs.forEach((dir) => {
    list += `${dir} <br />`;
  });
  return list;
}
