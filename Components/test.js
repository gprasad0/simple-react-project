import React, { Component } from "react";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
class Test extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetails
            author="Sam"
            timeAgo="Today at 2:30PM"
            comment="Nice blog"
            images={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard >
          <CommentDetails
            author="Samosa"
            timeAgo="Today at 4:30PM"
            comment="Good blog"
            images={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            author="Samuel"
            timeAgo="Today at 3:30PM"
            comment="Very Nice blog"
            images={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            author="Samreen"
            timeAgo="Today at 5:30PM"
            comment="Helpfull blog"
            images={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default Test;
