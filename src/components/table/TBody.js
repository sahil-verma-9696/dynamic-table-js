import users from "../../data/users.js";

export default function TBody({ rows = [], keys = [], contextMenu }) {
  const tBody = document.createElement("tbody");

  rows.forEach((row, index) => {
    const tr = document.createElement("tr");

    tr.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      contextMenu.show({ x: e.pageX, y: e.pageY, data: { row, index } });
    });

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.addEventListener("dblclick", () => {
        const input = document.createElement("input");

        switch (key.trim().toLowerCase()) {
          case "age":
            input.type = "number";
            break;

          case "active":
            input.type = "checkbox";
            input.checked = row[key] ?? false;
            break;

          case "joined":
            input.type = "date";
            break;

          default:
            input.type = "text";
            break;
        }

        input.value = row[key] ?? "";
        td.replaceChildren(input);

        input.addEventListener("blur", () => {
          if (input.type === "checkbox") {
            row[key] = input.checked;
          } else if (input.type === "number") {
            row[key] = input.valueAsNumber;
          } else if (input.type === "date") {
            row[key] = input.value; // You can convert it to Date if needed
          } else {
            row[key] = input.value;
          }

          td.textContent =
            input.type === "checkbox"
              ? row[key]
                ? "Yes"
                : "No"
              : row[key] ?? "";

          console.log(users);
        });
      });

      if (key === "S.No") {
        td.textContent = index + 1;
        tr.appendChild(td);
        return;
      }

      if (typeof row[key] === "boolean") {
        td.textContent = row[key] ? "Yes" : "No";
      } else {
        td.textContent = row[key] ?? "";
      }
      tr.appendChild(td);
    });

    tBody.appendChild(tr);
  });

  return tBody;
}
