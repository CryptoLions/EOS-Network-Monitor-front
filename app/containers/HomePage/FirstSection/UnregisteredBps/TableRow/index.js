import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { convertUtcToLocal } from '../../../../../utils/dateUtils';

import { Trow, Cell, DateCell } from './styles';

const TableRow = ({ blockProducer }) => (
  <Trow>
    <Cell>{blockProducer.name}</Cell>
    <DateCell>{convertUtcToLocal(blockProducer.unregisteredAt)}</DateCell>
  </Trow>
);

TableRow.propTypes = {
  blockProducer: PropTypes.object,
};

export default TableRow;
