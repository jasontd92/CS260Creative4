<template>

    <div id="favorites">
          <h1>A List of Things To Do</h1>
          <p v-show="activeItems.length === 0">You are done with all your tasks! Good job!</p>
          <form v-on:submit.prevent="addItem">
            <input type="text" v-model="text">
            <button type="submit">Add</button>
          </form>
          <div class="controls">
            <button v-on:click="showAll()">Show All</button>
            <button v-on:click="showActive()">Show Active</button>
            <button v-on:click="showCompleted()">Show Completed</button>
            <button v-on:click="deleteCompleted()">Delete Completed</button>
          </div>
          <ul>
            <li>
            <input type="checkbox" v-model="item.completed" v-on:click="completeItem(item)" /><label v-bind:class="{ completed: item.completed }">{{ item.text }}</label><button v-on:click="deleteItem(item)" class="delete">X</button>
            </li>
          </ul>

        
        <center>*Jason's <a href="https://github.com/BYU-CS260-Winter-2018/lab-4-jasontd92">Github</a>*</center>

        </div>
</template>

<script>
    export default {
    name: 'Search',
    data () {
        return {
           items: [],
            text: '',
            show: 'all'
      }
    },
    created: function() {
        this.getItems();
    },
    computed: {
        activeItems: function() {
          return this.items.filter(function(item) {
        return !item.completed;
          });
        },
        filteredItems: function() {
          if (this.show === 'active')
        return this.items.filter(function(item) {
          return !item.completed;
        });
          if (this.show === 'completed')
        return this.items.filter(function(item) {
          return item.completed;
        });
          return this.items;
        },
    },
    methods: {
        addItem: function() {
          this.items.push({text: this.text,completed:false});
          this.text = '';
        },
        completeItem: function(item) {
          item.completed = !item.completed;
        },
        deleteItem: function(item) {
          axios.delete("/api/items/" + item.id).then(response => {
            this.getItems();
            return true;
          }).catch(err => {
          });
        },
        showAll: function() {
          this.show = 'all';
        },
        showActive: function() {
          this.show = 'active';
        },
        showCompleted: function() {
          this.show = 'completed';
        },
        deleteCompleted: function() {
          this.items.forEach(item => {
            if (item.completed)
          this.deleteItem(item)
          });
        },
        dragItem: function(item) {
          this.drag = item;
        },
        dropItem: function(item) {
          axios.put("/api/items/" + this.drag.id, {
            text: this.drag.text,
            completed: this.drag.completed,
            orderChange: true,
            orderTarget: item.id
          }).then(response => {
            this.getItems();
            return true;
          }).catch(err => {
          });
        },
        getItems: function() {
          axios.get("/api/items").then(response => {
            this.items = response.data;
            return true;
          }).catch(err => {
          });
        },
        addItem: function() {
          axios.post("/api/items", {
            text: this.text,
            completed: false
          }).then(response => {
            this.text = "";
            this.getItems();
            return true;
          }).catch(err => {
          });
        },
        completeItem: function(item) {
          axios.put("/api/items/" + item.id, {
            text: item.text,
            completed: !item.completed,
            orderChange: false,
          }).then(response => {
            return true;
          }).catch(err => {
          });
        },
      }
}

</script>

<style>


img {
    max-width: 35%;
}

</style>