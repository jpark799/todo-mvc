// Our overall **AppView** is the top-level piece of UI.
var AppView = Backbone.View.extend({

  // Instead of generating a new element, bind to the existing skeleton of
  // the App already present in the HTML.
  el: '.todoapp',

  events: {
    'keypress .new-todo': 'createOnEnter',
  },

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added.
  initialize: function () {
    this.$input = this.$('.new-todo');
    this.$list = $('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },

  addOne: function(todo) {
    var view = new TodoView({ model: todo });
    this.$list.append(view.render().el);
  },

  createOnEnter: function (e) {
    if (e.which === 13 && this.$input.val()) {
      todosCollection.add({
        title: this.$input.val(),
        completed: false
      });
      console.log(todosCollection)      
      this.$input.val('');
    }
  }
});