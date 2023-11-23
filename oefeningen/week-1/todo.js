const todoList = [
    {
        task: "Complete Project",
        subtasks: [
            {
                task: "Write Code",
                subtasks: [
                    { task: "Implement Feature A" },
                    { task: "Test Feature A" },
                    { task: "Refactor Code" },
                ],
            },
            {
                task: "Document Project",
                subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
            },
        ],
    },
    {
        task: "Prepare Presentation",
        subtasks: [{ task: "Create Slides", subtasks: [{ task: "Boontjes snijden" }] }, { task: "Practice Delivery" }],
    },
];

function showTodos(todos) {
    todos.forEach(todo => {
        console.log(todo.task);

        if (todo.subtasks && todo.subtasks.length) {
            showTodos(todo.subtasks);
        }
    })
}

showTodos(todoList)