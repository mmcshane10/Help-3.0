import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';


class NewTicketForm extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleNewTicketFormSubmission}>
          <input
            type='text'
            id='names'
            placeholder='Pair Names'
            ref={(input) => { this.names = input; }} 
            />
          <input
            type='text'
            id='location'
            placeholder='Location'
            ref={(input) => { this.location = input; }} />
          <textarea
            id='issue'
            placeholder='Describe your issue.'
            ref={(textarea) => { this.issue = textarea; }} />
          <button type='submit'>Help!</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    handleNewTicketFormSubmission: (event) => dispatch({
      type: 'ADD_TICKET',
      id: v4(),
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      timeOpen: new Date().getTime()
    })
  }
}


export default connect(null, mapDispatchToProps)(NewTicketForm);