/**
 * Ya pc demo
 */
import Calendar from '../../../../src/ya/components/pc/calendar/index';
export default function () {
  return {
    template: `<div>
      <calendar :dateMarks="dateMarks" @select="handleSelect" @panelChange="handlePanelChange"></calendar>
    </div>`,
    data() {
      return {
        dateMarks: [{
          date: new Date(),
          className: 'test'
        }]
      };
    },
    components: {
      Calendar
    },
    methods: {
      handleSelect(d) {
        console.log('date', d);
      },
      handlePanelChange(d, mode) {
        console.log('date', d);
        console.log('mode', mode);
      }
    }
  };
}
