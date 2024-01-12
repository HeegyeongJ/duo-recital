import React from "react";

const WelcomLoading = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
        src="/assets/flowering_loading.gif"
        alt=""
      />
    </div>
  );
};

export default WelcomLoading;
