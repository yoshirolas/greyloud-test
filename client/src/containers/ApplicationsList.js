import React from 'react';

import ApplicationsListItem from '../components/ApplicationsListItem';
import NewApllicationForm from '../components/NewApllicationForm';


const testArr = [1,2,3,4,4,5,5,5,5,5,5];

class ApplicationsList extends React.Component {
  render() {

    const applicationItem = item => {
      return (
        <ApplicationsListItem />
      );
    }

    return (
      <div className="applicationListContainer">
        <NewApllicationForm 
          active={this.props.newApplicationForm}
        />
        <section className="applicationList">
          {testArr.map(item => applicationItem(item))}
        </section>
      </div>
    );
  }
}


export default ApplicationsList;