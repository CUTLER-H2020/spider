import './spider.less';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import optionsTemplate from './spider_options.html';
import RadarVisTemplate from './spider.html';

///import { SpiderVisController } from './spider_controller';
import './spider_controller_new';

function SpiderProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createAngularVisualization({
    name: 'spider',
    title: 'Spider Web',
    icon: 'gear',
    description: 'A spider web or radar chart is a way of showing multiple data points and the variation between them. ' +
                 'They are often useful for comparing the points of two or more different data sets. \n' +
                 'Created by itsam for the CUTLER Project',
    //category: CATEGORY.OTHER,
    ///visualization: SpiderVisController,
    visConfig: {
      template: RadarVisTemplate,
      defaults: {
        showScale: true,
        tension: 0,
        useCustomScale: false,
        minScale: 0,
        maxScale: 10
      }
    },
    responseHandler: 'none',
    editorConfig: {
      optionsTemplate: optionsTemplate,
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'vertex',
          title: 'Vertex',
          aggFilter: '!geo_centroid',
          min: 1,
          defaults: [
            { type: 'count', schema: 'vertex' }
          ]
        },
        {
          group: 'buckets',
          name: 'field',
          title: 'Field',
          max: 1,
          min: 1,
          aggFilter: ['terms']
        }
      ])
    }
    //implementsRenderComplete: true,
    //hierarchicalData: function (vis) {
    //  return true;
    //}
  });
}

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(SpiderProvider);

// export the provider so that the visType can be required with Private()
export default SpiderProvider;