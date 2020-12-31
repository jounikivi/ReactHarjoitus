import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import "./CalendarStyles.css";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Update event text:", args.e.text()).then(function(modal) {
          if (!modal.result) { return; }
          args.e.data.text = modal.result;
          dp.events.update(args.e);
        });
      },
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      startDate: "2020-12-14",
      events: [
        
      ]
    });
  }

  render() {
    var {...config} = this.state;
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
            startDate={"2020-12-13"}
            selectionDay={"2020-12-13"}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>
      </div>
    );
  }
}

export default Calendar;
