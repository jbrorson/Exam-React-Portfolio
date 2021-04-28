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
    <div className="flex flex-col items-center bg-green-200 p-8" id="timeline">
      <h1 className="flex flex-col items-center my-10 text-5xl text-gray-800"
        style={{ fontFamily: 'lobster' }}>Summury of Dev experiences</h1>
      <div className="md:m-2 sm:m-2 sm:w-80">

        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : eduIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <EduIcon />}
              >
                <h1 className="text-gray-800 text-xl">
                  {element.title}
                </h1>
                <h3 className="text-gray-700">
                  {element.companyName}{' - '}<span className="text-sm text-gray-500">{element.location}</span>
                </h3>
                <h5 className="mt-5 text-gray-600 font-thin">{element.description}</h5>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
        <div className="flex flex-col justify-center items-center my-10 border-t-2 border-white">
          <h2 className="text-xl mt-8 text-gray-700">Want to know more about my career? Go ahead and download my resume.</h2>
          <button className="animate-float px-5 py-3 uppercase mt-10 bg-red-500 rounded-3xl shadow-xl text-white text-sm font-semibold sm:text-base">Download</button>
        </div>
      </div>
    </div>
  )
}

export default MyTimeline;