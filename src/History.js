import React from 'react';
import history from './HistoryData';

function History(props) {

  return (
    <div id="history" dangerouslySetInnerHTML={{__html: history[props.index].data}}></div>
  )
}

export default History