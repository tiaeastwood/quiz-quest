import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AppContainer from "./AppContainer.jsx";

const RouteContainer = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
};

export default RouteContainer;
