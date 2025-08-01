import TBody from "./TBody.js";
import THead from "./THead.js";

/**
 * For creating a table based on data. I have to write a function that take table data and render according to it
 */
export default function Table({ Users, contextMenu }) {
  const table = document.createElement("table");

  table.append(
    TBody({
      rows: Users,
      keys: ["S.No", ...Object.keys(Users[0]).filter((key) => key !== "id")],
      contextMenu,
    })
  );
  table.append(
    THead({
      keys: ["S.No", ...Object.keys(Users[0]).filter((key) => key !== "id")],
    })
  );
  return table;
}
