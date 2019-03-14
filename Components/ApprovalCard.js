import React, { Component } from "react";

class ApprovalCard extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <div class="ui card">
          <div class="content" />
          {this.props.children}
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button">Approve</button>
              <button class="ui red basic button">Decline</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;
