var React = require('react');

var AddTodo = React.createClass({
  /*propTypes: {
      text: React.PropTypes.string.isRequired,
      onAddTodo: React.PropTypes.func.isRequired
  },*/
  getInitialState: function() {
    return {
      text: ''
    };
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
