// For-loop
function countdown(number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}

// countdown(5);
// countdown(9);

function recCountdown(number) {
    if (number === 0) return;

    console.log(number);
    recCountdown(number - 1);
}

recCountdown(6);

const tree = {
    name: "John",
    children: [
        {
            name: "Zoe",
            children: [],
        },
        {
            name: "Bob",
            children: [
                {
                    name: "Joe",
                    children: [],
                },
                {
                    name: "Eloise",
                    children: [
                        {
                            name: "Tiba",
                            children: []
                        }
                    ],
                },
            ],
        },
    ],
};

function printChildren(children) {
    if (children.length === 0) {
        return;
    }

    children.forEach(child => {
        console.log(child.name);

        printChildren(child.children)
    });
}

printChildren(tree.children)