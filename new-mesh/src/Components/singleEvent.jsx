import React from 'react';
import PropTypes from 'prop-types';

const SingleEvent = ({id, title, url, date, host}) => {
    <div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{url}</div>
        <div>{date}</div>
        <div>{host}</div>
        
    </div>

   // console.log(id, title, url, host, date)
 
    SingleEvent.propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
        date: PropTypes.string,
        host: PropTypes.string,
    }

}

export default SingleEvent;