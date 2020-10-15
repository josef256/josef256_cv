import React from 'react';

export const ProjectCard=(props)=>{
return (
    <div className="my-4 bg-gray-100 w-96  shadow-lg rounded-lg">
    <div className="bg-gray-400 w-96 h-56 rounded-lg"></div>
    <div className="p-2 md:p-4 grid grid-cols-1 gap-4">
<div className="font-bold text-gray-800 uppercase">{props.title}</div>
        <div className="text-sm font-semibold text-gray-600">
      {props.content}
        </div>
        <div className="flex flex-wrap">
            {props.tags.map((item)=>{
                return(
                <div className="m-2 p-1 bg-gray-400 rounded-full text-xs font-semibold text-gray-800">{item}</div>
                ) 
            })}
        </div>
    </div>
</div> 
)
}