/*!
 * Chart.js Plugin textOverlay v 0.1
 * daager89@gmail.com
 */

let textOverlayPluginId="textOverlay"
let textOverlayPlugin={
    id: textOverlayPluginId,
    afterDatasetDraw: function(chartObj) {
        let pluginOptions = chartObj.config.options.plugins[textOverlayPluginId];

        let width = chartObj.width,
            height = chartObj.height,
            ctx = chartObj.ctx;

        let fontSize = (height / 75).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = pluginOptions.color??"black";
        ctx.textBaseline = "middle";
        if(pluginOptions.stroke) {
            ctx.strokeStyle = pluginOptions.stroke;
        }


        let text =(typeof pluginOptions ==='string')? pluginOptions: pluginOptions.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        if(pluginOptions.stroke) {
            ctx.strokeText(text, textX, textY);
        }
            ctx.fillText(text, textX, textY);

    }
}

Chart.register(textOverlayPlugin);
