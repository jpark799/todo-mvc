// The DOM element for a todo item...
TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName:  'li',

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  
    return this;
  }
});