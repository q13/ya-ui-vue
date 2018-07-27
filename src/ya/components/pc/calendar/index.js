/**
 * Calendar Implementation
 */
import React from 'react';
import CoreCalendar from 'antd/lib/calendar'; // eslint-disable-line
import 'antd/lib/calendar/style/css'; // 加载 CSS
import moment from 'moment';
import 'moment/locale/zh-cn';
import t from 'rv/t';

moment.locale('zh-cn');

class Calendar extends React.Component {
  static defaultProps = {
    dateMarks: [],
    onSelect: () => {}
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleDatFulleCellRender = (date) => {
    const props = this.props;
    const dateMarks = props.dateMarks;
    const theOne = dateMarks.find((item) => {
      return moment(item.date).isSame(moment(date), 'day');
    });
    let el = null;
    if (theOne) {
      el = <div className={`ant-fullcalendar-value ${theOne.className}`}>{moment(theOne.date).date()}</div>;
    } else {
      el = <div className={`ant-fullcalendar-value`}>{date.date()}</div>;
    }
    return <div className="ant-fullcalendar-date">{el}</div>;
  }
  handleSelect = (date) => {
    const props = this.props;
    props.onSelect(date._d);
  }
  render() {
    return <CoreCalendar
      locale={{
        month: '月',
        year: '年'
      }}
      fullscreen={false}
      dateFullCellRender={this.handleDatFulleCellRender}
      onSelect={this.handleSelect}
    />;
  }
}

export default t(Calendar);
