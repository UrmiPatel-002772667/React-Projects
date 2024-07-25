import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage(){
    async function addMeetupHandler(enteredMeetupData){
        const response = await fetch('/api/new-meetup')
    }
    return <Fragment><NewMeetupForm onAddMeetup={addMeetupHandler}/></Fragment>
}