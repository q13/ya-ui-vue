/**
 * Calendar Implementation
 */
import React from 'react';
import CoreCalendar from 'antd/lib/calendar'; // eslint-disable-line
import LocaleProvider from 'antd/lib/locale-provider'; // eslint-disable-line
import zhCN from 'antd/lib/locale-provider/zh_CN';
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
  handlePanelChange = (date, mode) => {
    const props = this.props;
    props.onPanelChange(date._d, mode);
  }
  render() {
    return <LocaleProvider locale={zhCN}><CoreCalendar
      fullscreen={false}
      dateFullCellRender={this.handleDatFulleCellRender}
      onSelect={this.handleSelect}
      onPanelChange={this.handlePanelChange}
    /></LocaleProvider>;
  }
}

export default t(Calendar);
