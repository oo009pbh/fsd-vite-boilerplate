import React from 'react'; // Component
import { CalendarCell, CalendarInput, HolidayRow, Icon } from '@atom';
import { CalendarContent } from '@molecule';
import { Colors, Icons } from '@shared';
import { useDateContext } from '@app/providers';
import CalendarHeader from '@molecule/CalendarHeader';
// eslint-disable-next-line import/no-unresolved
import Calendar from '@organisms/calendar';
import { SampleMain } from './styles';

const index = () => {
  const {
    currentMonth,
    allDaysByMonth,
    startDate,
    endDate,
    selectedDate,
    moveToMonth,
    setStartDate,
    setEndDate,
    setSelectedDate,
  } = useDateContext();
  return (
    <SampleMain>
      <section>
        <div className="full_screen">
          <h4>[색깔]</h4>
          <div className="full_screen_content">
            {Object.entries(Colors).map(([colorKey, hex]) => (
              <h4 style={{ width: '20rem' }} key={`color--${colorKey}`}>
                <div
                  style={{
                    width: '5rem',
                    height: '5rem',
                    backgroundColor: hex,
                    margin: '1rem 0',
                  }}
                />
                {colorKey} : {hex}
              </h4>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="full_screen">
          <h4>[아이콘]</h4>
          <div className="full_screen_content">
            {Object.entries(Icons).map(([iconKey, icon]) => (
              <div
                key={`icon--${iconKey}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '15rem',
                  margin: '0.5rem 0',
                }}
              >
                <Icon icon={icon} />
                {iconKey}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="full_screen">
          <h4>size = medium</h4>
          <div className="full_screen_content">
            <CalendarCell label="1" variant="leftRounded" />
            <CalendarCell label="1" />
            <CalendarCell label="1" />
            <CalendarCell label="1" />
            <CalendarCell label="1" />
            <CalendarCell label="1" />
            <CalendarCell label="1" />
            <CalendarCell label="1" />
            <CalendarCell label="1" />
            <CalendarCell label="1" variant="rightRounded" />
          </div>
        </div>
      </section>
      <section>
        <div className="full_screen">
          <h4>size = medium</h4>
          <div className="full_screen_content">
            <CalendarInput placeholder="YYYY-MM-DD" readOnly />
            <CalendarInput placeholder="YYYY-MM-DD" readOnly />
          </div>
        </div>
      </section>
      <section>
        <div className="full_screen">
          <h4>size = medium</h4>
          <div className="full_screen_content">
            <HolidayRow holiday="2024-04-04" holidayName="새해" />
          </div>
        </div>
      </section>
      <section>
        <div className="full_screen">
          <h4>size = medium</h4>
          <CalendarHeader
            currentMonth={currentMonth}
            startDate={startDate}
            endDate={endDate}
            moveToMonth={moveToMonth}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </section>
      <section>
        <div className="full_screen">
          <h4>size = medium</h4>
          <CalendarContent
            startDate={startDate}
            endDate={endDate}
            currentMonth={currentMonth}
            dayList={
              currentMonth in allDaysByMonth ? allDaysByMonth[currentMonth] : []
            }
            setFocusedDate={
              selectedDate === 'startDate' ? setStartDate : setEndDate
            }
          />
        </div>
      </section>
      <section>
        <div className="full_screen">
          <h4>size = medium</h4>
          <Calendar />
        </div>
      </section>
    </SampleMain>
  );
};

export default index;
