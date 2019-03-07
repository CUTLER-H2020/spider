import { uiModules } from 'ui/modules';
import _ from 'lodash';

const module = uiModules.get('spider/spider', ['kibana']);

module.controller('SpiderVisController', function ($scope, $element, $timeout) {

  const uiStateSort = ($scope.uiState) ? $scope.uiState.get('vis.params.sort') : {};
  _($scope.vis.params.sort, uiStateSort);

  const Chartjs = require('chart.js');
  const randomColor = require('randomcolor');

  let dataComplete = null;
  $scope.$watchMulti(['esResponse', 'vis.params'], function ([resp]) {
    if($scope.radarchart) {
      $scope.radarchart.destroy();
    }

    if (!resp) {
      $scope._previousHoverPoint = null;
      return;
    }

    if(resp) {
      const customLabels = [];

      //Names of the field that have been selected
      if ($scope.vis.aggs.bySchemaName.field) {
        const firstFieldAggId = $scope.vis.aggs.bySchemaName.field[0].id;
        const fieldAggName = $scope.vis.aggs.bySchemaName.field[0].params.field.displayName;
      }

      // Retrieve the metrics aggregation configured
      if($scope.vis.aggs.bySchemaName.vertex) {
        const fields = [];
        const titles = [];

        const quantityVertices = $scope.vis.aggs.bySchemaName.vertex.length;
        for (let index = 0; index < quantityVertices; index++) {
          const metric = $scope.vis.aggs.bySchemaName.vertex[index];
          if (metric.enabled) {
            if (metric.type.name !== 'count') {
              fields.push(metric.params.field.displayName);
            } else {
              fields.push('');
            }
            titles.push(metric.type.title);

            if (metric.params.customLabel) {
              customLabels.push(metric.params.customLabel);
            } else {
              customLabels.push(metric.type.title + ' ' + fields[fields.length - 1]);
            }
          }
        }
      }

      const dataParsed = [];
      console.log(resp);
      for (let index = 0; index < resp.rows.length; index++) {
        const bucket = resp.rows[index];
        let valuesBucket = [];
        //const label = bucket[0];
        //const label = resp.columns[0].name;
        //valuesBucket.push(Object.values(bucket));
        valuesBucket = Object.values(bucket);
        const label = valuesBucket[0]; //first value is the label
        valuesBucket.shift(); //remove first value
        // for (let index = 1; index < bucket.length; index++) {
        //   valuesBucket.push(bucket[index]);
        // }

        const color = randomColor({
          luminosity: 'light',
          format: 'rgba',
          alpha: 0.2
        });
        // Border color must have a complete alpha
        const borderColor = color.replace(/[^,]+(?=\))/, '1');
        const bucketArea = {
          label: label,
          data: valuesBucket,
          backgroundColor: color,
          borderColor: borderColor,
          pointBackgroundColor: borderColor,
          pointBorderColor: '#fff',
          lineTension: $scope.vis.params.tension / 10
        };
        dataParsed.push(bucketArea);
      }
      // Colors and data compelte with the dataParsed and the labels
      dataComplete = {
        datasets: dataParsed,
        labels: customLabels
      };
    }

    $timeout(function () {
      //DOM has finished rendering
      const canvas = document.getElementById('radar_chart_' + $scope.$id);
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const data = {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
          label: 'My dataset 1',
          data: [20, 10, 14, 12]
        },
        {
          label: 'My dataset 2',
          data: [30, 14, 24, 32]
        }
        ]
      };
      const options = {
        scale: {
          // Only option: Shows/Hides the scale
          display: $scope.vis.params.showScale
        }
      };

      $scope.radarchart = new Chartjs(ctx, {
        data: dataComplete,
        //data: data,
        type: 'radar',
        options: options
      });
    });

  });
});
