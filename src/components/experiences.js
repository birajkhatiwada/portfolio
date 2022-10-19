import "./experiences.css";
import { Chrono } from "react-chrono";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import work from "./images/work.svg";
import Timeline from "@mui/lab/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { scaleBetween } from "parallax-controller";
import graduation from "./images/graduation.svg";

const Experiences = () => {
  return (
    <>
      <div id="experienceRef" className="experiencesContainer">
        <div className="experiencesTitleContainer">
          <div className="experiencesTitle">Timeline</div>
        </div>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.primary"
            >
              Jan 2021 - Mar 2022
            </TimelineOppositeContent>
            <TimelineSeparator color="#0daf49">
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
              <TimelineDot sx={{ bgcolor: "#252534" }}>
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Tesla, Autopilot Engineer
              </Typography>
              <Typography>
                - Analyze critical data to improve the performance of Tesla’s
                autopilot with the help of Specialized Software Interface
              </Typography>
              <Typography>
                {" "}
                - Review the analyzed data for correctness and improvements to
                have the best possible data for the neural network
              </Typography>
              <Typography>
                {" "}
                - Work in constantly changing workflow that requires fast
                adaptation to each workflow
              </Typography>
              <Typography>
                - Interact with the Computer Vision Engineer team to help
                improve Software Interface
              </Typography>
              <Typography>
                {" "}
                - Participate in daily team syncs to discuss the vulnerability
                of the software
              </Typography>
              <Typography>
                - Lead weekly team meeting to go over common mistakes regarding
                the use of the Specialized Software Interface
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <div>
            <img className="graduationSvg" src={graduation}></img>
          </div>{" "}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              Aug 2018 - May 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
              <TimelineDot sx={{ bgcolor: "#252534" }}>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Sonoma State University
              </Typography>
              <Typography>Bachelor's of Science in Computer Science</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              Aug 2016 - May 2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
              <TimelineDot sx={{ bgcolor: "#252534" }}>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Santa Rosa Junior College
              </Typography>
              <Typography>Finished Community College!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
              <TimelineDot sx={{ bgcolor: "#252534" }}>
                <RepeatIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#252534" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <div className="experiencesListContainer"></div>
      </div>
    </>
  );
};

export default Experiences;
