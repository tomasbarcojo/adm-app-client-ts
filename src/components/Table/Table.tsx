import React from 'react';
import { Virtuoso } from 'react-virtuoso';

const Table = () => {
  return (
    <Virtuoso
      style={{ height: '400px' }}
      totalCount={200}
      itemContent={(index) => <div>Item {index}</div>}
    />
  );
};

export default Table;
