export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'spider',
    uiExports: {
      visTypes: [
        'plugins/spider/spider'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
