import React from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';
import PropTypes from 'prop-types';
import { getData, clearData } from './actions';

const config = {
  chart: {
    type: 'area',
    color: [],
  },
  title: {
    text: '全球各大洲人口增长历史及预测',
  },
  credits: {
    enabled: false,
  },
  subtitle: {
    text: '数据来源: Wikipedia.org',
  },
  xAxis: {
    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false,
    },
  },
  yAxis: {
    title: {
      text: '十亿',
    },
    labels: {
      formatter() {
        return this.value / 1000;
      },
    },
  },
  tooltip: {
    split: true,
    valueSuffix: ' 百万',
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666',
      },
    },
  },
  series: [],
};
class Column extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  componentWillUnmount() {
    this.props.clear();
  }
  render() {
    const { data } = this.props;
    config.series = data && data.data;
    return (
      <div>
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

Column.propTypes = {
  data: PropTypes.object,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

Column.defaultProps = {
  data: {},
};

const mapStateToProps = state => ({
  data: state.chart.data,
});
const mapDispatchToProps = dispatch => ({
  init: () => { dispatch(getData()); },
  clear: () => { dispatch(clearData()); },
});
export default connect(mapStateToProps, mapDispatchToProps)(Column);

