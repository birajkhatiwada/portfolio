import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function SplineRobot() {
  const robotRef = useRef();
  const splineAppRef = useRef();
  const homePos = useRef({ x: -1109, y: -610 });
  // 1. Define the move function using useCallback so it's available everywhere
  const moveObj = useCallback(() => {
    if (robotRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      robotRef.current.position.x = 0;
      robotRef.current.position.y = 0;

      console.log(
        `Robot's position before:: ${robotRef.current.position.x}, Y: ${robotRef.current.position.y}`
      );
      console.log(`Window robot size: ${width}x${height}`);
      // ADJUST THIS: This "Magic Number" maps pixels to your 3D world
      // If the robot isn't far enough left, make this number BIGGER (e.g., 0.8)
      const zoomScale = 0.7;

      const xPos = -(width / 2) * zoomScale;
      const yPos = -(height / 2) * zoomScale;

      // Optional: Add a small padding so it's not touching the literal edge
      const padding = 40;

      console.log(`xpos and ypos robot: ${xPos}, ${yPos}`);
      robotRef.current.position.x += xPos;
      robotRef.current.position.y += yPos;

      console.log(
        `Setting Robot to X: ${robotRef.current.position.x}, Y: ${robotRef.current.position.y}`
      );
    }
  }, []);

  function onLoad(splineApp) {
    splineAppRef.current = splineApp;
    const robot = splineApp.findObjectById(
      "225711a7-88e5-438a-b61a-b356fa9d1021"
    );
    if (robot) {
      robotRef.current = robot;
      moveObj();
    }
  }

  useEffect(() => {
    window.addEventListener("resize", moveObj);
    return () => window.removeEventListener("resize", moveObj);
  }, [moveObj]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/JRtODCsxQ75imuNz/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
