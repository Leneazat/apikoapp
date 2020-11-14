import React from "react";
import { generatePath, useHistory } from "react-router";
import InboxIcon from "../../../../icons/InboxIcon";
import { routes } from "../../../../scenes/routes";
import { InboxNavButton, InboxNavContainer } from "./InboxNavigator.styles";

const InboxNavigator = () => {
  const history = useHistory();
  const goToInbox = () => {
    history.push(generatePath(routes.inbox));
  };

  return (
    <InboxNavContainer>
      <InboxNavButton onClick={goToInbox}>
        <InboxIcon />
      </InboxNavButton>
    </InboxNavContainer>
  );
};

export default InboxNavigator;
