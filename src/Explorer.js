/* eslint-disable no-undef */
import React from 'react';

class Explorer extends React.Component {

  componentDidMount() {
    this.createExplorer();
  }

  createExplorer() {
    this.explorer = new KeenExplorer({
      container: "#root",
      modalContainer: "#modal",
      translations: {
        backend: {
          loadPath: 'https://staging-static.keen.io/explorer_uat/locales/en/translation.json'
        }
      },
      keenAnalysis: {
        config: this.props.config,
      },
    });
  }

  render() {
    return (
      <div>
        <div id="root"></div>
        <div id="modal"></div>
      </div>
    );
  }
}

export default Explorer;