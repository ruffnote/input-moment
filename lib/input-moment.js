'use strict';

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = require('classnames');
var blacklist = require('blacklist');
var moment = require('moment');
var React = require('react');
var Calendar = require('./calendar');
var Time = require('./time');


module.exports = React.createClass({
  displayName: 'InputMoment',

  getInitialState: function getInitialState() {
    return {
      tab: 1
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      prevMonthIcon: 'ion-ios-arrow-left',
      nextMonthIcon: 'ion-ios-arrow-right'
    };
  },
  render: function render() {
    var tab = this.state.tab;
    var m = this.props.moment;
    var locale = this.props.locale;
    var props = blacklist(this.props, 'className', 'moment', 'locale', 'prevMonthIcon', 'nextMonthIcon', 'onSave');
    props.className = cx('m-input-moment', this.props.className);

    return React.createElement(
      'div',
      props,
      React.createElement(
        'div',
        { className: 'options' },
        React.createElement(
          'button',
          { type: 'button', className: cx('ion-calendar im-btn', { 'is-active': tab === 0 }), onClick: this.handleClickTab.bind(null, 0) },
          _i18n2.default.t('inputMoment.date')
        ),
        React.createElement(
          'button',
          { type: 'button', className: cx('ion-clock im-btn', { 'is-active': tab === 1 }), onClick: this.handleClickTab.bind(null, 1) },
          _i18n2.default.t('inputMoment.time')
        )
      ),
      React.createElement(
        'div',
        { className: 'tabs' },
        React.createElement(Calendar, {
          className: cx('tab', { 'is-active': tab === 0 }),
          moment: m,
          locale: locale,
          onChange: this.props.onChange,
          prevMonthIcon: this.props.prevMonthIcon,
          nextMonthIcon: this.props.nextMonthIcon
        }),
        React.createElement(Time, {
          className: cx('tab', { 'is-active': tab === 1 }),
          moment: m,
          onChange: this.props.onChange
        })
      ),
      React.createElement(
        'button',
        { type: 'button', className: 'im-btn btn-save ion-checkmark',
          onClick: this.handleSave },
        _i18n2.default.t('inputMoment.save')
      )
    );
  },
  handleClickTab: function handleClickTab(tab, e) {
    e.preventDefault();
    this.setState({ tab: tab });
  },
  handleSave: function handleSave(e) {
    e.preventDefault();
    if (this.props.onSave) this.props.onSave();
  }
});