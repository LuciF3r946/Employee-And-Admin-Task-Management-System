const employees = [
    {
        id: 1,
        firstname: "Alex",
        email: "al@co.com",
        password: "123",
        taskStats: { active: 1, newTask: 1, completed: 0, failed: 0 },
        tasks: [
            {
                title: "Design Homepage",
                date: "2025-06-20",
                category: "Design",
                description: "Create a clean, responsive homepage layout.",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Fix Navbar Bug",
                date: "2025-06-18",
                category: "Development",
                description: "Resolve the issue with sticky navbar.",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 2,
        firstname: "Sam",
        email: "sam@co.com",
        password: "123",
        taskStats: { active: 1, newTask: 0, completed: 1, failed: 0 },
        tasks: [
            {
                title: "Database Migration",
                date: "2025-06-19",
                category: "Backend",
                description: "Migrate data to new schema.",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "API Optimization",
                date: "2025-06-17",
                category: "Backend",
                description: "Improve API response speed.",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 3,
        firstname: "Taylor",
        email: "tay@co.com",
        password: "123",
        taskStats: { active: 1, newTask: 1, completed: 0, failed: 0 },
        tasks: [
            {
                title: "Marketing Banner",
                date: "2025-06-15",
                category: "Design",
                description: "Create summer sale visuals.",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Landing Page",
                date: "2025-06-20",
                category: "Design",
                description: "Review landing page design.",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        firstname: "Jack",
        email: "adm@co.com",
        password: "123"
    }
];

export const setLoaclStorage = () => {

    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLoaclStorage = () => {

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}