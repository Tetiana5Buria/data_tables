 import {
  TAG_TABLE,
  TAG_TR,
  TAG_TD,
  TAG_TH,
  TAG_THEAD,
  TAG_TBODY,
  NUMBER,
} from "./constants.js";

function DataTable(config, data) {
  const parentElement = document.querySelector(config.parent);

  const table = document.createElement(TAG_TABLE); //create the table
  table.classList.add("data-table");

  const tableHeader = document.createElement(TAG_THEAD); // create header of table
  const headerRow = document.createElement(TAG_TR);
  const thNumber = document.createElement(TAG_TH);
  thNumber.textContent = NUMBER;
  headerRow.appendChild(thNumber);
  for (const col of config.columns) {
    const tableHeader = document.createElement(TAG_TH);
    tableHeader.textContent = col.title;
    headerRow.appendChild(tableHeader);
  }
  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);


  const tableBody = document.createElement(TAG_TBODY);

  let index = 1;
  for (const item of data) {
    const row = document.createElement(TAG_TR);
    const tableDataNumber = document.createElement(TAG_TD);
   tableDataNumber.textContent = index++;
    row.appendChild (tableDataNumber);

    for (const col of config.columns) {
      const td = document.createElement(TAG_TD);
      td.textContent = item[col.value] || "";//return value or empty row
      row.appendChild(td);
    }
    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  parentElement.appendChild(table);
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

const configMy = {
  parent: "#usersTable",
  columns: [
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Вік", value: "age" },
    { title: "Стать", value: "sex" },
    { title: "Країна", value: "country" },
    { title: "Посада", value: "job" },
    { title: "Хобі", value: "hobby" },
  ],
};
const usersMy = [
  {
    id: 30050,
    name: "Вася",
    surname: "Петров",
    age: 36,
    sex: "male",
    country: "Ukraine",
    job: "developer",
    hobby: "music",
  },
  {
    id: 30051,
    name: "Іван",
    surname: "Васечкін",
    age: 25,
    sex: "male",
    country: "Ukraine",
    job: "developer",
    hobby: "art",
  },
  {
    id: 30052,
    name: "Лідія",
    surname: "Українець",
    age: 32,
    sex: "famale",
    country: "Ukraine",
    job: "developer",
    hobby: "sport",
  },
  {
    id: 30053,
    name: "Артур",
    surname: "Богун",
    age: 28,
    sex: "male",
    country: "Ukraine",
    job: "developer",
    hobby: "music",
  },
  {
    id: 30054,
    name: "Артем",
    surname: "Завірюха",
    age: 31,
    sex: "male",
    country: "Ukraine",
    job: "developer",
    hobby: "painting",
  },
  {
    id: 30055,
    name: "Юлія",
    surname: "Штиволока",
    age: 24,
    sex: "famale",
    country: "Ukraine",
    job: "developer",
    hobby: "fishing",
  },
  {
    id: 30056,
    name: "Вадим",
    surname: "Буря",
    age: 41,
    sex: "male",
    country: "Ukraine",
    job: "developer",
    hobby: "cooking",
  },
];

DataTable(configMy, usersMy);



