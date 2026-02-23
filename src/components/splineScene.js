import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineRobot() {
  const splineAppRef = useRef();
  const robotRef = useRef();
  function onLoad(splineApp) {
    splineAppRef.current = splineApp;
    const robot = splineApp.findObjectById(
      "225711a7-88e5-438a-b61a-b356fa9d1021"
    );
    robotRef.current = robot; // store robot ref separately
  }

  // then in mousemove:
  const handleGlobalMouse = (e) => {
    if (!splineAppRef.current || !robotRef.current) return;
    splineAppRef.current.emitEventOnTarget("lookAt", robotRef.current, {
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const handleGlobalMouse = (e) => {
      if (!splineAppRef.current) return;

      // Normalize mouse to -1 to 1 range (what Spline expects)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      splineAppRef.current.setVariable("mouseX", x);
      splineAppRef.current.setVariable("mouseY", y);
    };

    window.addEventListener("mousemove", handleGlobalMouse);
    return () => window.removeEventListener("mousemove", handleGlobalMouse);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        width: "300px",
        height: "400px",
        zIndex: 1,
        pointerEvents: "none", // container doesn't block clicks
      }}
    >
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/JRtODCsxQ75imuNz/scene.splinecode"
        style={{ width: "100%", height: "100%", pointerEvents: "auto" }} // ← none here too
      />
    </div>
  );
}
