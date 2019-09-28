/**
 * Modules shared between the node build process and the browser.
 * Used for rendering static html for non-js use and importing the same html into the js as needed.
 */

(function(exports){

 exports.indexContent = function(){
      return `<div>The default index content</div>`;
  };

})(typeof exports === 'undefined'? window['ajShared']={}: exports);
