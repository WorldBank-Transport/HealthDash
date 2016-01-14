import React, { PropTypes } from 'react';
import { connect } from 'reflux';
import { Result } from '../../utils/functional';
import T from '../misc/t';
import ShouldRenderMixin from '../../utils/should-render-mixin';
import HighCharts from 'highcharts';
import PopulationStore from '../../stores/population';

require('stylesheets/charts/health-facilities-barchar');

const PopulationFacilitiesChart = React.createClass({
  propTypes: {
    data: PropTypes.array.isRequired,
  },

  mixins: [
    connect(PopulationStore, 'population'),
    ShouldRenderMixin,
  ],

  componentDidMount() {
    this.getChart();
  },

  parseData(categories, regions, population) {
    return [{
      name: 'People to Health Facility Ratio',
      data: categories.map(region => {
        return {
          x: categories.indexOf(region),
          y: Math.round((population[region][0].TOTAL || 0) / (regions[region] || 1)),
        };
      }),
    }];
  },

  getChart() {
    const regions = Result.countBy(this.props.data, 'REGION');
    const categories = Object.keys(regions).filter(key => key !== 'total').sort((a, b) => regions[b] - regions[a]);
    const population = Result.sumByGroupBy(this.state.population, 'REGION', ['TOTAL']);
    const stats = this.parseData(categories, regions, population);
   // needs translations
    return new HighCharts.Chart({
      chart: {
        height: 400,
        type: 'column',
        renderTo: 'population-facilities-barchar',
      },

      title: {
        text: '',
      },

      xAxis: {
        categories: categories,
      },

      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },

      series: stats,
    });
  },

  render() {
    if (!this.props.data.length === 0) {
      return (<div>empty</div>);
    }
    return (
      <div className="health-facilities-barchar">
        <h3 className="chart-title"><T k="chart.population-facilities.title" /> - <span className="chart-helptext"><T k="chart.population-facilities.helptext" /></span></h3>
        <div className="chart-container" id="population-facilities-barchar"></div>
      </div>
    );
  },
});

export default PopulationFacilitiesChart;
