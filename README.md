# spider kibana plugin

> This kibana plugin allows to create spider-web (radar) graphs based on [chart.js](https://www.chartjs.org/) JavaScript charting.  
> Created by itsam for the [CUTLER](https://www.cutler-h2020.eu/) project, based on portions of code from [dlumbrer/kbn_polar](https://github.com/dlumbrer/kbn_polar) plugin.
>
> A spider web or radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets.

---

## Version

Spider plugin version: **0.0.1**  
Made for Kibana version: **6.6.x**


## Installation

TBD

## Usage

This widget is implemented as a Kibana 7 plugin and as such, can be used in conjunction with other visualization types like bar graphs, pie charts, goal gauges, etc. and can be placed into a common dashboard. The figure below depicts the seamless integration of the new widget in the list of available Kibana visualization types.

![spider-web-new-widget](../img/spider-web-new-widget.jpg)

Additional information on this plugin and a manual on how to use it to create spider web graphs can be found in Deliverable [D8.2](https://zenodo.org/record/3386085) "Cross-domain insights and visualization widget" (section 5).

## Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following yarn scripts.

  - `yarn kbn bootstrap`

    Install dependencies and crosslink Kibana and all projects/plugins.

    > ***IMPORTANT:*** Use this script instead of `yarn` to install dependencies when switching branches, and re-run it whenever your dependencies change.

  - `yarn start`

    Start kibana and have it include this plugin. You can pass any arguments that you would normally send to `bin/kibana`

      ```
      yarn start --elasticsearch.hosts http://localhost:9220
      ```

  - `yarn build`

    Build a distributable archive of your plugin.

  - `yarn test:browser`

    Run the browser tests in a real web browser.

  - `yarn test:server`

    Run the server tests using mocha.

For more information about any of these commands run `yarn ${task} --help`. For a full list of tasks checkout the `package.json` file, or run `yarn run`.

## Contact

For any inquires contact Ioannis Tsampoulatidis (itsam@iti.gr)
