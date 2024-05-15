import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import './Calendar.css'
import useCalendar from '../../store/Calendar'
import { createEventId } from '../../data'

const Calendar = () => {
  /** to fetch currentevents from global state */
  const {currentEvents, setCurrentEvents} = useCalendar()

  /** to call handleEvents */
  const handleEvents = async (events)=>
  {
    await Promise.resolve(setCurrentEvents(events))
  }

  const handleDateSelect =(selectInfo) =>{
    let title = prompt('please enter a title for the event')
    let calendarApi= selectInfo.view.calendar;

    calendarApi.unselect();
    if (title){
            calendarApi.addEvent({
              id: createEventId(),
              title,
              start: selectInfo.start,
              end: selectInfo.end,
              allDay: selectInfo.allDay

            })
    }
  }
  const handleEventClick =(clickInfo) =>{
   if(
     confirm('Are you sure you want to delete this event?')
    ){
      clickInfo.event.remove()
    }
  }
  return (
    <div className="calendar-container">
      <div>
        <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
       
       headerToolbar={{

        left: 'prev,next today', /**, is used here to two boxes no space and give space will give space between boxes */
        center:"title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
       }}

       allDaySlot={false}
       initialView="timeGridWeek"
       slotDuration={"01:00:00"}
       editable={true}
       selectable={true}
       selectMirror={true}
       dayMaxEvents={true}
       weekends={true}
       nowIndicator={true}
       initialEvents={currentEvents} /** initialEvents={[]} empty array this is use with backend databases */
       eventsSet={handleEvents} /** it is called whenever events initialize remove events and it will handle our control input */
       select={handleDateSelect} /** interactions  to add events*/
       eventClick={handleEventClick}/** to delete an event */
       />
      </div>
    </div>
  )
}
export default Calendar