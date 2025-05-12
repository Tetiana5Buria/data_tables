import {TAG} from "./constants.js";
import { configMy, usersMy } from "./data.js";

function DataTable(config, data) {
  const parentElement = document.querySelector(config.parent);
  const table = document.createElement(TAG.TABLE);
  table.classList.add("data-table");
  const tableHeader = createTableHeader(config);
  table.appendChild(tableHeader);
  const tableBody = createTableBody(config, data);
  table.appendChild(tableBody);
  parentElement.appendChild(table);
}

function createTableHeader(config) {
  const tableHeader = document.createElement(TAG.THEAD);
  const headerRow = document.createElement(TAG.TR);
  const thNumber = document.createElement(TAG.TH);
  thNumber.textContent = TAG.NUMBER;
  headerRow.appendChild(thNumber);

  for (const col of config.columns) {
    const th = document.createElement(TAG.TH);
    th.textContent = col.title;
    headerRow.appendChild(th);
  }
  tableHeader.appendChild(headerRow);
  return tableHeader;
}

function createTableBody(config, data) {
  const tableBody = document.createElement(TAG.TBODY);
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    const row = document.createElement(TAG.TR);
    const tdNumber = document.createElement(TAG.TD);
    tdNumber.textContent = index + 1;
    row.appendChild(tdNumber);

    for (const col of config.columns) {
      const td = document.createElement(TAG.TD);
      td.textContent = item[col.value] || "";
      row.appendChild(td);
    }

    tableBody.appendChild(row);
  }

  return tableBody;
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Вік", value: "age" },
  ],
};

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкін", age: 15 },
];

DataTable(config1, users);
DataTable(configMy, usersMy);
