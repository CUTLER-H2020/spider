class SpiderVisController {
  constructor(el, vis) {
    this.vis = vis;
    this.el = el;
    this.container = document.createElement('div');
    this.container.className = 'myvis-container-div';
    this.container.id = 'myvis-container-div';
    this.el.appendChild(this.container);

    this.canvas = document.createElement('canvas');
    this.container.id = 'myCanvas';
    this.container.width = '100%';
    this.container.height = '100%';
    this.el.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
  }

  destroy() {
    this.el.innerHTML = '';
  }

  render(visData, status) {

    const Chartjs = require('chart.js');
    const randomColor = require('randomcolor');

    const ctx = this.context;
    //this.container.innerHTML = 'Hello I am a spider';

    const data = {
      labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
      datasets: [{
        label: 'itsam static dataset',
        data: [20, 16, 14, 17]
      }]
    };
    const options = {
      scale: {
        // Hides the scale
        display: true
      }
    };

    const chart = new Chartjs(ctx, {
      data: data,
      type: 'radar',
      options: options
    });




    return new Promise(resolve => {
      resolve('when done rendering');
    });
    // const table = visData.tables[0];
    // const metrics = [];
    // let bucketAgg;

    // table.columns.forEach((column, i) => {
    //   // we have multiple rows … first column is a bucket agg
    //   if (table.rows.length > 1 && i == 0) {
    //     bucketAgg = column.aggConfig;
    //     return;
    //   }

    //   table.rows.forEach(row => {
    //     const value = row[i];
    //     metrics.push({
    //       title: bucketAgg ? `${row[0]} ${column.title}` : column.title,
    //       value: row[i],
    //       formattedValue: column.aggConfig ? column.aggConfig.fieldFormatter('text')(value) : value,
    //       bucketValue: bucketAgg ? row[0] : null,
    //       aggConfig: column.aggConfig
    //     });
    //   });
    // });

    // metrics.forEach(metric => {
    //   const metricDiv = document.createElement(`div`);
    //   metricDiv.className = `myvis-metric-div`;
    //   metricDiv.innerHTML = `<b>${metric.title}:</b> ${metric.formattedValue}`;
    //   metricDiv.setAttribute('style', `font-size: ${this.vis.params.fontSize}pt`);
    //   metricDiv.addEventListener('click', () => {
    //     if (!bucketAgg) return;
    //     const filter = bucketAgg.createFilter(metric.bucketValue);
    //     this.vis.API.queryFilter.addFilters(filter);
    //   });

    //   this.container.appendChild(metricDiv);
    // });

    // return new Promise(resolve => {
    //   resolve('when done rendering');
    // });
  }
}

export { SpiderVisController };