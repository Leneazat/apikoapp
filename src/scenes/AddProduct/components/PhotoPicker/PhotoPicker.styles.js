import styled from "styled-components";

export const PhotosContainer = styled.div`
  display: flex;
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 24px;
  padding: 16px;
`;

export const Photo = styled.img`
  width: 92px;
  height: 92px;
  margin-right: 8px;
`;

export const PhotoPickerInput = styled.input`
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 16px 24px;
`;

export const PhotoPickerLabel = styled.p`
  margin: 0 0 4px 0;
  font-family: Helvetica;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
`;

export const PhotoUploadContainer = styled.div`
  background: #e4e4e4;
  border-radius: 4px;
  width: 92px;
  height: 92px;
  display: flex;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoUploadPicContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

export const PhotoUploadPicHorizontal = styled.div`
  background: #349a89;
  border-radius: 4px;
  width: 4px;
  height: 38px;
  transform: rotate(-90deg);
  position: absolute;
`;

export const PohotoUploadPicVertical = styled.div`
  background: #349a89;
  border-radius: 4px;
  width: 4px;
  height: 38px;
  position: absolute;
`;
