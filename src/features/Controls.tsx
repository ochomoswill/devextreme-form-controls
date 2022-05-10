import React, { FunctionComponent } from 'react';
import DxRangePicker from "../components/DxRangePicker";

interface OwnProps {}

type Props = OwnProps;

const Controls: FunctionComponent<Props> = (props) => {

  return (
      <React.Fragment>
          <h1>Controls</h1>

          <h4>DatePicker:</h4>
          <DxRangePicker
              value={[new Date(), new Date()]}
              type={'datetime'}
              displayFormat={'yyyy-MM-dd HH:mm:ss'}
              separator={'to'}
              onChange={(value) => {
                  console.log('@onChange ', value);
              }}
          />

      </React.Fragment>
  );
};

export default Controls;
