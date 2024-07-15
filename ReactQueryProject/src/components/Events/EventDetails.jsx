import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';

import Header from '../Header.jsx';

import ErrorBlock from '../Ui/ErrorBlock.jsx';
import Modal from '../Ui/Modal.jsx'
export default function EventDetails({ event }) {

  const [isDeleting, setIsDeleting] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const { mutate, isPending: isPendingDeletion, isError: isErrorDeleting, error: deletionError } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'], refetchType: 'none' });
      navigate('/events');
    }
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handlestopDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    mutate({ id: params.id })
  }

  let content;

  if (isError) {
    content = <ErrorBlock title="An Error Occured" message={error.info?.message || 'Failed to fetch event Details.'} />
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    content = (<>
      <header>
        <h1>{data.title}</h1>
        <nav>
          <button onClick={handleStartDelete}>Delete</button>
          <Link to="edit">Edit</Link>
        </nav>
      </header>
      <div id="event-details-content">
        <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
        <div id="event-details-info">
          <div>
            <p id="event-details-location">{data.location}</p>
            <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
          </div>
          <p id="event-details-description">{data.description}</p>
        </div>
      </div>
    </>)
  }

  return (
    <>
      {isDeleting && (<Modal onClose={handlestopDelete}>
        <h2>Are you sure you want to Delete this Event?</h2>
        <div className="form-actions">
          {isPendingDeletion && 'Deleting Event...'}
          {!isPendingDeletion && (
            <>
            <button onClick={handlestopDelete} className='button-text'>Cancel</button>
            <button onClick={handleDelete} className='button'>Delete</button>
            </>
          )}
        </div>
        {isErrorDeleting && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                deleteError.info?.message ||
                'Failed to delete event, please try again later.'
              }
            />
          )}
      </Modal>)}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && 'Fetching Event Details...'}
      {!isPending &&
        <article id="event-details">
          {content}
        </article>
      }
    </>
  );
}
