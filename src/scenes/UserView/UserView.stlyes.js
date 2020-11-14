import Avatar from "react-avatar";
import styled from "styled-components";

export const UserViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserViewBox = styled.div`
  background: #ffffff;
  border: 1.08px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px rgba(121, 121, 121, 0.0527344);
  max-width: fit-content;
  margin: 0 auto;
  padding: 16px 24px 24px 24px;
`;

export const UserViewAvatar = styled(Avatar)``;

export const UserViewAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserViewUserName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #141414;
  margin: 12px 0 4px 0;
`;

export const UserViewUserLocation = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #9099a7;
  margin: 0;
`;

export const UserViewStatsContainer = styled.div`
  width: 489px;
  box-sizing: border-box;
  height: 74px;
  margin-top: 28px;
  display: flex;
`;

export const UserViewStatsBoxes = styled.div(
  ({ greenback }) => `
  width: 163px;
  border: 1.3px solid #eeeff1;
  height: 74px;
  display: flex;
  background-color: ${greenback ? "white" : "#349A89"};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  `
);

export const UserViewStatsText = styled.p(
  ({ whitetext }) => `
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  color: ${whitetext ? "#9099a7" : "#FFFFFF"};
  margin: 0;
  `
);

export const UserViewStatsPercentCounter = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #3cb255;
  margin: 0;
`;

export const UserViewStatsSalesCounter = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #349a89;
  margin: 0;
`;

export const UserViewStatsListingCounter = styled.p`
  margin: 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;

export const UserViewStatsListingCounterTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #349a89;
  bottom: 0;
  top: 100%;
  position: absolute;
`;
