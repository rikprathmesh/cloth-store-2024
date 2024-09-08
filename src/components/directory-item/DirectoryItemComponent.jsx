import React from "react";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item-styles";
import { useNavigate } from "react-router-dom";

const DirectoryItemComponent = ({category}) => {
    const {imageUrl, title, route} = category
    const navigate = useNavigate()

    const onNavigateHander = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHander}>
      <BackgroundImage
        imageUrl = {imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItemComponent;
