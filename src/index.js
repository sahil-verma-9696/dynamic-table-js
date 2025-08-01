import ContextMenu from "./components/context-menu/index.js";
import Table from "./components/table/index.js";
import Users from "./data/users.js";

function main() {
  const root = document.getElementById("root");
  let currentTable = null;

  function renderTable() {
    if (currentTable) {
      currentTable.remove();
    }

    currentTable = Table({ Users, contextMenu });
    root.appendChild(currentTable);
    console.log(Users);

  }

  const contextMenu = ContextMenu({
    actions: [
      {
        label: "Insert Row Above",
        onClick: ({ event, data }) => {
          const { index } = data;
          Users.splice(index, 0, {
            id: Users.length + 1,
            name: "",
            email: "",
            age: 0,
            role: "",
            joined: "",
            active: false,
          });
          console.log(index);
          renderTable();
        },
      },
      {
        label: "Insert Row Below",
        onClick: ({ event, data }) => {
          const { index } = data;
          Users.splice(index + 1, 0, {
            id: Users.length + 1,
            name: "",
            email: "",
            age: 0,
            role: "",
            joined: "",
            active: false,
          });

          renderTable();
        },
      },
      {
        label: "Delete Row",
        onClick: ({ event, data }) => {
          const { index } = data;
          Users.splice(index, 1); // or splice by selected index
          renderTable();
        },
      },
    ],
  });

  document.body.appendChild(contextMenu);
  renderTable(); // initial render
}

main();
