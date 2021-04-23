import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { LoadingContainer } from "./ui.style";
import classNames from "classnames";

/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Boolean} props.loading
 * @returns
 */
const Loading = ({ children, loading, ...restProps }) => {
  return (
    <LoadingContainer data-testid="loading" {...restProps}>
      <div className="loading-container">
        <div>
          <div className="loading">{loading && <LoadingOutlined />}</div>
        </div>
      </div>
      <div
        className={classNames("loading-child", { "loading-overlay": loading })}
      >
        {children ? children : <div style={{ textAlign: "center" }} />}
      </div>
    </LoadingContainer>
  );
};

export default Loading;
