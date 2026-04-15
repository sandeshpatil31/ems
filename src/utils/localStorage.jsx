const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create UI for homepage",
        date: "2026-04-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve mobile navbar issue",
        date: "2026-04-16",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Colors",
        description: "Change theme colors",
        date: "2026-04-17",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Build Login Page",
        description: "Create login UI",
        date: "2026-04-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect backend APIs",
        date: "2026-04-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Write Documentation",
        description: "Project docs",
        date: "2026-04-20",
        category: "Docs",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Test Features",
        description: "QA testing",
        date: "2026-04-21",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Deploy App",
        description: "Deploy to server",
        date: "2026-04-22",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [{
    id: 101,
    email: "admin@gmail.com",
    password: "123"
  }];

 export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

 }

 export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  console.log(employees, admin) 
}