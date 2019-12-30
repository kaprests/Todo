var test_data = [
    { text: "Todo1" },
    { text: "Todo2" },
    { text: "Todo3" },
]


var todo = new Vue({
    delimiters: ['[[', ']]'],
    el: "#todo-app",
    data: {
        todos: [],
        test_todos: test_data,
    },

    mounted: function() {
        this.get_todos();
    },

    methods: {
        get_todos: function() {
            axios.get('/api/todo/')
                .then((response) => {
                    this.todos = response.data;
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
});


