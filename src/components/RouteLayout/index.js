import React, { useEffect } from "react";

import { Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const RouteLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteLayout;
