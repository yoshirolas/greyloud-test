import React from 'react';
import { connect } from 'react-redux';

import ApplicationsListItem from '../components/ApplicationsListItem';
import NewApllicationForm from '../components/NewApllicationForm';


class ApplicationsList extends React.Component {

  render() {

    const applicationItem = item => {
      return (
        <ApplicationsListItem 
          key={item._id}
          applicationTitle={item.title}
          applicationText={item.text}
          username={item.username}
          applicationDate={item.date}
        />
      );
    }

    return (
      <div className="applicationListContainer">
        <NewApllicationForm 
          active={this.props.newApplicationFormActive}
        />
        <section className="applicationList">
          {this.props.applicationsList.map(item => applicationItem(item))}
        </section>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    applicationsList: state.applicationsReducer
  }
}

export default connect(mapStateToProps)(ApplicationsList);