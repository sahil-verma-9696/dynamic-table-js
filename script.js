function getUsers() {
  return [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 28,
      role: "Frontend Developer",
      joined: "2022-03-12",
      active: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 35,
      role: "Backend Developer",
      joined: "2021-07-22",
      active: false,
    },
    {
      id: 3,
      name: "Charlie Lee",
      email: "charlie@example.com",
      age: 24,
      role: "UI/UX Designer",
      joined: "2023-01-15",
      active: true,
    },
    {
      id: 4,
      name: "Dana Wright",
      email: "dana@example.com",
      age: 30,
      role: "Product Manager",
      joined: "2020-11-03",
      active: true,
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "ethan@example.com",
      age: 40,
      role: "DevOps Engineer",
      joined: "2019-06-10",
      active: false,
    },
    {
      id: 6,
      name: "Fiona Adams",
      email: "fiona@example.com",
      age: 27,
      role: "QA Engineer",
      joined: "2022-05-23",
      active: true,
    },
    {
      id: 7,
      name: "George Brown",
      email: "george@example.com",
      age: 33,
      role: "Data Scientist",
      joined: "2021-12-01",
      active: false,
    },
    {
      id: 8,
      name: "Hannah Davis",
      email: "hannah@example.com",
      age: 29,
      role: "AI Engineer",
      joined: "2023-02-09",
      active: true,
    },
    {
      id: 9,
      name: "Ian Clark",
      email: "ian@example.com",
      age: 31,
      role: "Security Analyst",
      joined: "2020-09-18",
      active: true,
    },
    {
      id: 10,
      name: "Jane Doe",
      email: "jane@example.com",
      age: 26,
      role: "Frontend Developer",
      joined: "2021-03-30",
      active: true,
    },
    {
      id: 11,
      name: "Kyle Evans",
      email: "kyle@example.com",
      age: 38,
      role: "System Architect",
      joined: "2018-10-14",
      active: false,
    },
    {
      id: 12,
      name: "Liam Miller",
      email: "liam@example.com",
      age: 34,
      role: "Database Administrator",
      joined: "2019-04-06",
      active: true,
    },
    {
      id: 13,
      name: "Mia Wilson",
      email: "mia@example.com",
      age: 25,
      role: "Marketing Specialist",
      joined: "2022-08-17",
      active: true,
    },
    {
      id: 14,
      name: "Nathan Scott",
      email: "nathan@example.com",
      age: 32,
      role: "Backend Developer",
      joined: "2021-01-25",
      active: false,
    },
    {
      id: 15,
      name: "Olivia Moore",
      email: "olivia@example.com",
      age: 29,
      role: "Project Manager",
      joined: "2020-06-12",
      active: true,
    },
    {
      id: 16,
      name: "Paul Harris",
      email: "paul@example.com",
      age: 37,
      role: "Technical Lead",
      joined: "2019-12-20",
      active: true,
    },
    {
      id: 17,
      name: "Queenie Taylor",
      email: "queenie@example.com",
      age: 23,
      role: "Intern",
      joined: "2023-06-05",
      active: true,
    },
    {
      id: 18,
      name: "Ryan Anderson",
      email: "ryan@example.com",
      age: 36,
      role: "Full Stack Developer",
      joined: "2018-02-11",
      active: false,
    },
    {
      id: 19,
      name: "Sophia Thomas",
      email: "sophia@example.com",
      age: 27,
      role: "UX Researcher",
      joined: "2022-09-21",
      active: true,
    },
    {
      id: 20,
      name: "Tommy Baker",
      email: "tommy@example.com",
      age: 41,
      role: "CTO",
      joined: "2017-05-30",
      active: true,
    },
  ];
}

function createTableHead(headData = []) {
  const tableHead = document.createElement("thead");

  headData.forEach((key) => {
    const cell = document.createElement("th");
    cell.textContent = key.toString().toUpperCase();
    tableHead.append(cell);
  });

  return tableHead;
}

function createTableBody(tableData = []) {
  const tableBody = document.createElement("tbody");

  const body = tableData.map((row) => {
    const rowElem = document.createElement("tr");

    for (const key in row) {
      const cell = document.createElement("td");

      if (key == "active") {
        cell.textContent = row.active ? "Active" : "InActive";
      } else {
        cell.textContent = row[key];
      }
      rowElem.append(cell);
    }

    return rowElem;
  });
  return body;
}

function main() {
  const root = document.getElementById("root");

  const Users = getUsers();

  const myTable = document.createElement("table");

  const myTableBody = createTableBody(Users);
  const myTableHead = createTableHead(Object.keys(Users[0]));

  myTable.append(myTableHead);
  myTable.append(...myTableBody);

  root.append(myTable);
}

main();
