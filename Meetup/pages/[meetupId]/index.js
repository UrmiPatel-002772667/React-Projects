import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupId(){

    return (
        <MeetupDetail 
        image='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        title='A first meetup'
        address='SomeAddress'
        description='The Description'
        />
    );
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
        meetupId:'m1'
        },
      },
      {
        params: {
        meetupId:'m2'
        },
      },
    ],
  };
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupId;

    return {
      props: {
        meetupData: {
          image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          id: meetupId,
          title: 'First Meetup',
          address:'SomeAddress',
          description:'The Description',
        } 
      }
    };
}