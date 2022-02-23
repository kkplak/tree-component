
export const treeData = [
    {
        key: "1",
        label: "App",
        icon: "",
        title: "App File",
    },

    {
        key: "2",
        label: "Components",
        icon: "> ",
        title: "Components",
        children: [
            {
                key: "2-1",
                label: "Root",
                title: "Components",
            },
            {
                key: "2-2",
                label: "Core",
                title: "Components",
            },
            {
                key: "2-3",
                label: "Branch",
                title: "Components",
            },
            {
                key: "2-4",
                label: "Leafs",
                icon: "> ",
                title: "Components",
                children: [
                    {
                        key: "2-4-1",
                        label: "Leaf1.js",
                        title: "Components",
                    },
                    {
                        key: "2-4-2",
                        label: "Leaf2.js",
                        title: "Components",
                    },
                    {
                        key: "2-4-3",
                        label: "Leaf3.js",
                        title: "Components",
                    }
                ]
            }
        ]
    },
    {
        key: "3",
        label: "CSS",
        title: "CSS",
    },
    {
        key: "4",
        label: "Data",
        title: "Data",
    }



]