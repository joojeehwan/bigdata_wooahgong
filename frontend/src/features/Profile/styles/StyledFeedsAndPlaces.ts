import styled from 'styled-components';

export const FeedsAndPlacesWrapper = styled.div`
  margin-top: 1rem;
  /* display: flex;
  justify-content: center; */
  
`;

export const ProfileFeedsOrPlacesGrid = styled.div`
  display: grid;
  width : 100%;
  height : 390px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow : auto;
  gap: 0.25rem;
  &::-webkit-scrollbar{ display:none; };
  -ms-overflow-style: none;
`;

export const FeedOrPlaceWrapper = styled.div`
  // overflow: auto;
  height: 8rem;
`;

export const FeedOrPlaceImageWrapper = styled.div`
  position: relative;
  
  height: 8rem;
`;

export const FeedOrPlaceTwoModes = styled.div`
  position: relative;
  cursor: pointer;
`;

export const HoveredFeedOrPlaceWrapper = styled.div`
  position: absolute;
  top: 0;
  opacity: 0;
  left: 50%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  --transform-translate-x: -50%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${FeedOrPlaceTwoModes}:hover {
    opacity: 1;
  }
`;
