export default function THead({ keys }) {
  const tHead = document.createElement("thead");
  const tRow = document.createElement("tr");

  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    tRow.appendChild(th);
  });

  tHead.appendChild(tRow);
  return tHead;
}
