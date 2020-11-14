import styled from "styled-components";

export const MessageContainer = styled.div(
  ({ isCurrentUserMessage }) => `
  background: ${isCurrentUserMessage ? "#FFFFFF" : "#349A89"};
  align-self: ${isCurrentUserMessage ? "flex-end" : "flex-start"};
  margin-left: ${isCurrentUserMessage ? "0" : "16px"};
  margin-right: ${isCurrentUserMessage ? "16px" : "0"};
  padding: 8px;
  display: flex;
  max-width: 266px;
  border-radius: 4px;
  margin-top: 2px;
  :first-child {
    margin-top: auto !important;
  }
`
);

export const MessageText = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15.6px;
  line-height: 22px;
  color: #131314;
`;
