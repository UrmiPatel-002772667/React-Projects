import { useState } from 'react';
import NoProject from '../assets/no-projects.png' 
import Button from './Button';
export default function NotSelected({onStartAddProject}){

    return (
        <div className="mt-24 text-center w-2/3">
        <img className="w-16 h-16 object-contain mx-auto"  src={NoProject}/>
        <h2 className="text-xl font-bold text-stone-500 mt-4">No Projects Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or start with a new one.</p>
        <p className='mt-8'><Button button='Create New Project' onClick={onStartAddProject}/></p>
        </div>
    );
}