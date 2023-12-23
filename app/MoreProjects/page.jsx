import React from 'react'
import { moreProjects} from "@/Lib/Static";


const MoreProjects = () => {
  return (
    <div className='w-full relative overflow-hidden flex flex-wrap flex-col lg:flex-row justify-between items-center px-[5%] pt-[8vmin] lg:px-[8%] mt-[10vh]'>
       {moreProjects.map((data, i) => {
        return (
          <div
            key={i}
            className="relative grid items-center w-full lg:min-w-[45%] lg:max-w-[45%] mb-[5vmin] "
          >
            <h2 className="text-[7vmin]  font-bold text-center text-orange-400 mb-[2vmin]">
              {data.title}
            </h2>

            <img
              className={`align-middle aspect-video  p-[4%_4%_4%_4%] bg-gray-900 mb-4`}
              src={data.src}
              alt="" 
            />
            <div className={`text-center`}>
              <div>
                <a href={data.url} target={data.target}>
                  <button className="projectsBtns1">{data.btn1}</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default MoreProjects