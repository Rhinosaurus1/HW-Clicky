import React from "react";


const PanelBody = props => (
  <div className="panel-body text-center">
    <h1>Click Count: {props.count}</h1>
  </div>
);

export default PanelBody;
