import React from 'react';
import { ReactComponent as WorkIcon } from '../components/icons/work.svg';
import { ReactComponent as EduIcon } from '../components/icons/education.svg'


import timelineElements from './timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";

function MyTimeline() {
  let workIconStyles = { background: "#06D6A0" };
  let eduIconStyles = { background: "#3da3d5" };

  return (
    <div className="flex flex-col min-h-screen h-max-height justify-center items-center bg-green-200 p-8">
      <h1 className="mt-20 text-5xl font-bold sans:lobster text-gray-800"
        style={{ fontFamily: 'lobster' }}>Summury of Dev experiences</h1>
      <div className="m-20">

        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                // style={{ left: "15%", }}
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : eduIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <EduIcon />}
              >
                <h3 className="m-2 text-gray-700 md:text-base">
                  {element.title}
                </h3>
                <h5 className="m-2 text-gray-700 text-sm md:text-base">
                  {element.location}
                </h5>
                <p id="m-2 text-gray-700 text-sm md:text-base">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default MyTimeline;