axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"


var todo = new Vue({
    delimiters: ['[[', ']]'],
    el: "#todo-app",
    data: {
        todos: [],
        new_todo: { 'text': null, is_done: false},
        current_todo: null,
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
                    console.log(err);
                })
        },


        add_todo: function() {
            axios.post('/api/todo/', this.new_todo)
                .then((response) => {
                    console.log(response)
                    this.get_todos();
                })
                .catch((err) => {
                    console.log(err.response);
                })
        },

        get_current_todo: function(id) {
            axios.get('/api/todo/' + id.toString() + '/')
                .then((response) => {
                    this.current_todo = response.data;
                    console.log(this.current_todo);
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        remove_todo: function(id) {
            axios.delete('/api/todo/' + id.toString() + '/')
                .then((response) => {
                    this.get_todos();
                })
                .catch((err) => {
                    console.log(err.response);
                })
        },

        toggle_completed: function(id) {
            axios.patch('/api/todo/' + id.toString() + '/', {
                is_completed: true,
            })
            .then((response) => {
                console.log(response);
                this.get_todos();
            })
            .catch((err) => {
                console.log(err);
            })
        },
    },
});



