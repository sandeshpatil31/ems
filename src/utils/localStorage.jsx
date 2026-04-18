localStorage.clear

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@gmail.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Design Landing Page",
        "description": "Create UI for homepage",
        "date": "2026-04-15",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Navbar Bug",
        "description": "Resolve mobile navbar issue",
        "date": "2026-04-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update Colors",
        "description": "Change theme colors",
        "date": "2026-04-17",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },

  {
    "id": 2,
    "firstName": "Vihaan",
    "email": "employee2@gmail.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Build Login Page",
        "description": "Create login UI",
        "date": "2026-04-15",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "API Integration",
        "description": "Connect backend APIs",
        "date": "2026-04-18",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },

  {
    "id": 3,
    "firstName": "Aditya",
    "email": "employee3@gmail.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Write Documentation",
        "description": "Project docs",
        "date": "2026-04-20",
        "category": "Docs",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },

  {
    "id": 4,
    "firstName": "Rohan",
    "email": "employee4@gmail.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Test Features",
        "description": "QA testing",
        "date": "2026-04-21",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },

  {
    "id": 5,
    "firstName": "Kavya",
    "email": "employee5@gmail.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Deploy App",
        "description": "Deploy to server",
        "date": "2026-04-22",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 101,
    "firstName": "Rajesh",
    "email": "admin@gmail.com",
    "password": "123"
  },
  {
    id: 102,
    firstName: "Sandesh",
    email: "admin@gmail.com",
    password: "123"
  }
];



 export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

 }

 export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(employees, admin) 
  return {employees, admin}
}