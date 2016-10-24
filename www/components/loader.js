/**
 * This is an auto-generated code by Monaca JS/CSS Components.
 * Please do not edit by hand.
 */

/*** <GENERATED> ***/


/*** <Start:monaca-cordova-loader> ***/
/*** <Start:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
(function(){
  function getDeviceObjectForPreview() {
    var raw_values = window.location.search.substring(1).split('&');
    var values = {};
    var device = { platform: "" };
    
    if (raw_values) {
      for (var key in raw_values) {
        var tmp = raw_values[key].split('=');
        values[tmp[0]] = decodeURIComponent(tmp[1]);
      }
      device.platform = values.platform;
    }
    
    return device;
  }
    
  if (/^https:\/\/preview-.+monaca\.(local||mobi)/.test(location.href)) {
    window.device = getDeviceObjectForPreview();
  }
 
  if ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/iPhone|iPad|iPod/i))) {
    if (typeof location.href === "string") {
      var relativePath = location.href.split("/www")[1];
      var paths = relativePath.split("/");
      var cordovaJsUrl = ""; 
      for (var i = 0; i < paths.length - 2; i++) {
        cordovaJsUrl += "../";
      }
      document.write("<script src=\"" + cordovaJsUrl+ "cordova.js" + "\"></script>");
    }
  } else if ( ((navigator.userAgent.match(/MSIE\s10.0/)) && (navigator.userAgent.match(/Windows\sNT\s6.2/)) ) || navigator.userAgent.match(/MSAppHost/) ) {
    var elm = document.createElement('script');
    elm.setAttribute("src", "cordova.js");
    document.getElementsByTagName("head")[0].appendChild(elm);
  };
})();
/*** <End:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
/*** <End:monaca-cordova-loader> ***/


/*** <Start:pixi> ***/
/*** <Start:pixi LoadJs:"components/pixi/bin/pixi.js"> ***/
/**
 * @license
 * pixi.js - v1.5.3
 * Copyright (c) 2012-2014, Mat Groves
 * http://goodboydigital.com/
 *
 * Compiled: 2014-04-24
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(){var c=this,d=d||{};d.WEBGL_RENDERER=0,d.CANVAS_RENDERER=1,d.VERSION="v1.5.3",d.blendModes={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},d.scaleModes={DEFAULT:0,LINEAR:0,NEAREST:1},d.INTERACTION_FREQUENCY=30,d.AUTO_PREVENT_DEFAULT=!0,d.RAD_TO_DEG=180/Math.PI,d.DEG_TO_RAD=Math.PI/180,d.Point=function(a,b){this.x=a||0,this.y=b||0},d.Point.prototype.clone=function(){return new d.Point(this.x,this.y)},d.Point.prototype.constructor=d.Point,d.Point.prototype.set=function(a,b){this.x=a||0,this.y=b||(0!==b?this.x:0)},d.Rectangle=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},d.Rectangle.prototype.clone=function(){return new d.Rectangle(this.x,this.y,this.width,this.height)},d.Rectangle.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=this.x;if(a>=c&&a<=c+this.width){var d=this.y;if(b>=d&&b<=d+this.height)return!0}return!1},d.Rectangle.prototype.constructor=d.Rectangle,d.EmptyRectangle=new d.Rectangle(0,0,0,0),d.Polygon=function(a){if(a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var b=[],c=0,e=a.length;e>c;c+=2)b.push(new d.Point(a[c],a[c+1]));a=b}this.points=a},d.Polygon.prototype.clone=function(){for(var a=[],b=0;b<this.points.length;b++)a.push(this.points[b].clone());return new d.Polygon(a)},d.Polygon.prototype.contains=function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!c)}return c},d.Polygon.prototype.constructor=d.Polygon,d.Circle=function(a,b,c){this.x=a||0,this.y=b||0,this.radius=c||0},d.Circle.prototype.clone=function(){return new d.Circle(this.x,this.y,this.radius)},d.Circle.prototype.contains=function(a,b){if(this.radius<=0)return!1;var c=this.x-a,d=this.y-b,e=this.radius*this.radius;return c*=c,d*=d,e>=c+d},d.Circle.prototype.constructor=d.Circle,d.Ellipse=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},d.Ellipse.prototype.clone=function(){return new d.Ellipse(this.x,this.y,this.width,this.height)},d.Ellipse.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=(a-this.x)/this.width,d=(b-this.y)/this.height;return c*=c,d*=d,1>=c+d},d.Ellipse.prototype.getBounds=function(){return new d.Rectangle(this.x,this.y,this.width,this.height)},d.Ellipse.prototype.constructor=d.Ellipse,d.determineMatrixArrayType=function(){return"undefined"!=typeof Float32Array?Float32Array:Array},d.Matrix2=d.determineMatrixArrayType(),d.Matrix=function(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0},d.Matrix.prototype.fromArray=function(a){this.a=a[0],this.b=a[1],this.c=a[3],this.d=a[4],this.tx=a[2],this.ty=a[5]},d.Matrix.prototype.toArray=function(a){this.array||(this.array=new Float32Array(9));var b=this.array;return a?(this.array[0]=this.a,this.array[1]=this.c,this.array[2]=0,this.array[3]=this.b,this.array[4]=this.d,this.array[5]=0,this.array[6]=this.tx,this.array[7]=this.ty,this.array[8]=1):(this.array[0]=this.a,this.array[1]=this.b,this.array[2]=this.tx,this.array[3]=this.c,this.array[4]=this.d,this.array[5]=this.ty,this.array[6]=0,this.array[7]=0,this.array[8]=1),b},d.identityMatrix=new d.Matrix,d.DisplayObject=function(){this.position=new d.Point,this.scale=new d.Point(1,1),this.pivot=new d.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.buttonMode=!1,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this._interactive=!1,this.defaultCursor="pointer",this.worldTransform=new d.Matrix,this.color=[],this.dynamic=!0,this._sr=0,this._cr=1,this.filterArea=null,this._bounds=new d.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cacheIsDirty=!1},d.DisplayObject.prototype.constructor=d.DisplayObject,d.DisplayObject.prototype.setInteractive=function(a){this.interactive=a},Object.defineProperty(d.DisplayObject.prototype,"interactive",{get:function(){return this._interactive},set:function(a){this._interactive=a,this.stage&&(this.stage.dirty=!0)}}),Object.defineProperty(d.DisplayObject.prototype,"worldVisible",{get:function(){var a=this;do{if(!a.visible)return!1;a=a.parent}while(a);return!0}}),Object.defineProperty(d.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(a){this._mask&&(this._mask.isMask=!1),this._mask=a,this._mask&&(this._mask.isMask=!0)}}),Object.defineProperty(d.DisplayObject.prototype,"filters",{get:function(){return this._filters},set:function(a){if(a){for(var b=[],c=0;c<a.length;c++)for(var d=a[c].passes,e=0;e<d.length;e++)b.push(d[e]);this._filterBlock={target:this,filterPasses:b}}this._filters=a}}),Object.defineProperty(d.DisplayObject.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap!==a&&(a?this._generateCachedSprite():this._destroyCachedSprite(),this._cacheAsBitmap=a)}}),d.DisplayObject.prototype.updateTransform=function(){this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation));var a=this.parent.worldTransform,b=this.worldTransform,c=this.pivot.x,d=this.pivot.y,e=this._cr*this.scale.x,f=-this._sr*this.scale.y,g=this._sr*this.scale.x,h=this._cr*this.scale.y,i=this.position.x-e*c-d*f,j=this.position.y-h*d-c*g,k=a.a,l=a.b,m=a.c,n=a.d;b.a=k*e+l*g,b.b=k*f+l*h,b.tx=k*i+l*j+a.tx,b.c=m*e+n*g,b.d=m*f+n*h,b.ty=m*i+n*j+a.ty,this.worldAlpha=this.alpha*this.parent.worldAlpha},d.DisplayObject.prototype.getBounds=function(a){return a=a,d.EmptyRectangle},d.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(d.identityMatrix)},d.DisplayObject.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0)},d.DisplayObject.prototype.generateTexture=function(a){var b=this.getLocalBounds(),c=new d.RenderTexture(0|b.width,0|b.height,a);return c.render(this,new d.Point(-b.x,-b.y)),c},d.DisplayObject.prototype.updateCache=function(){this._generateCachedSprite()},d.DisplayObject.prototype._renderCachedSprite=function(a){a.gl?d.Sprite.prototype._renderWebGL.call(this._cachedSprite,a):d.Sprite.prototype._renderCanvas.call(this._cachedSprite,a)},d.DisplayObject.prototype._generateCachedSprite=function(){this._cacheAsBitmap=!1;var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.texture.resize(0|a.width,0|a.height);else{var b=new d.RenderTexture(0|a.width,0|a.height);this._cachedSprite=new d.Sprite(b),this._cachedSprite.worldTransform=this.worldTransform}var c=this._filters;this._filters=null,this._cachedSprite.filters=c,this._cachedSprite.texture.render(this,new d.Point(-a.x,-a.y)),this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._filters=c,this._cacheAsBitmap=!0},d.DisplayObject.prototype._destroyCachedSprite=function(){this._cachedSprite&&(this._cachedSprite.texture.destroy(!0),this._cachedSprite=null)},d.DisplayObject.prototype._renderWebGL=function(a){a=a},d.DisplayObject.prototype._renderCanvas=function(a){a=a},Object.defineProperty(d.DisplayObject.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a}}),Object.defineProperty(d.DisplayObject.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a}}),d.DisplayObjectContainer=function(){d.DisplayObject.call(this),this.children=[]},d.DisplayObjectContainer.prototype=Object.create(d.DisplayObject.prototype),d.DisplayObjectContainer.prototype.constructor=d.DisplayObjectContainer,d.DisplayObjectContainer.prototype.addChild=function(a){this.addChildAt(a,this.children.length)},d.DisplayObjectContainer.prototype.addChildAt=function(a,b){if(!(b>=0&&b<=this.children.length))throw new Error(a+" The index "+b+" supplied is out of bounds "+this.children.length);a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),this.stage&&a.setStageReference(this.stage)},d.DisplayObjectContainer.prototype.swapChildren=function(a,b){if(a!==b){var c=this.children.indexOf(a),d=this.children.indexOf(b);if(0>c||0>d)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[c]=b,this.children[d]=a}},d.DisplayObjectContainer.prototype.getChildAt=function(a){if(a>=0&&a<this.children.length)return this.children[a];throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")},d.DisplayObjectContainer.prototype.removeChild=function(a){return this.removeChildAt(this.children.indexOf(a))},d.DisplayObjectContainer.prototype.removeChildAt=function(a){var b=this.getChildAt(a);return this.stage&&b.removeStageReference(),b.parent=void 0,this.children.splice(a,1),b},d.DisplayObjectContainer.prototype.removeChildren=function(a,b){var c=a||0,d="number"==typeof b?b:this.children.length,e=d-c;if(e>0&&d>=e){for(var f=this.children.splice(c,e),g=0;g<f.length;g++){var h=f[g];this.stage&&h.removeStageReference(),h.parent=void 0}return f}throw new Error("Range Error, numeric values are outside the acceptable range")},d.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible&&(d.DisplayObject.prototype.updateTransform.call(this),!this._cacheAsBitmap))for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform()},d.DisplayObjectContainer.prototype.getBounds=function(a){if(0===this.children.length)return d.EmptyRectangle;if(a){var b=this.worldTransform;this.worldTransform=a,this.updateTransform(),this.worldTransform=b}for(var c,e,f,g=1/0,h=1/0,i=-1/0,j=-1/0,k=!1,l=0,m=this.children.length;m>l;l++){var n=this.children[l];n.visible&&(k=!0,c=this.children[l].getBounds(a),g=g<c.x?g:c.x,h=h<c.y?h:c.y,e=c.width+c.x,f=c.height+c.y,i=i>e?i:e,j=j>f?j:f)}if(!k)return d.EmptyRectangle;var o=this._bounds;return o.x=g,o.y=h,o.width=i-g,o.height=j-h,o},d.DisplayObjectContainer.prototype.getLocalBounds=function(){var a=this.worldTransform;this.worldTransform=d.identityMatrix;for(var b=0,c=this.children.length;c>b;b++)this.children[b].updateTransform();var e=this.getBounds();return this.worldTransform=a,e},d.DisplayObjectContainer.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d.setStageReference(a)}},d.DisplayObjectContainer.prototype.removeStageReference=function(){for(var a=0,b=this.children.length;b>a;a++){var c=this.children[a];c.removeStageReference()}this._interactive&&(this.stage.dirty=!0),this.stage=null},d.DisplayObjectContainer.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){if(this._cacheAsBitmap)return this._renderCachedSprite(a),void 0;var b,c;if(this._mask||this._filters){for(this._mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this._filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);a.spriteBatch.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.spriteBatch.start()}else for(b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},d.DisplayObjectContainer.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){if(this._cacheAsBitmap)return this._renderCachedSprite(a),void 0;this._mask&&a.maskManager.pushMask(this._mask,a.context);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},d.Sprite=function(a){d.DisplayObjectContainer.call(this),this.anchor=new d.Point,this.texture=a,this._width=0,this._height=0,this.tint=16777215,this.blendMode=d.blendModes.NORMAL,a.baseTexture.hasLoaded?this.onTextureUpdate():(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},d.Sprite.prototype=Object.create(d.DisplayObjectContainer.prototype),d.Sprite.prototype.constructor=d.Sprite,Object.defineProperty(d.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(d.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),d.Sprite.prototype.setTexture=function(a){this.texture.baseTexture!==a.baseTexture?(this.textureChange=!0,this.texture=a):this.texture=a,this.cachedTint=16777215,this.updateFrame=!0},d.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height),this.updateFrame=!0},d.Sprite.prototype.getBounds=function(a){var b=this.texture.frame.width,c=this.texture.frame.height,d=b*(1-this.anchor.x),e=b*-this.anchor.x,f=c*(1-this.anchor.y),g=c*-this.anchor.y,h=a||this.worldTransform,i=h.a,j=h.c,k=h.b,l=h.d,m=h.tx,n=h.ty,o=i*e+k*g+m,p=l*g+j*e+n,q=i*d+k*g+m,r=l*g+j*d+n,s=i*d+k*f+m,t=l*f+j*d+n,u=i*e+k*f+m,v=l*f+j*e+n,w=-1/0,x=-1/0,y=1/0,z=1/0;y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,z=z>p?p:z,z=z>r?r:z,z=z>t?t:z,z=z>v?v:z,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w,x=p>x?p:x,x=r>x?r:x,x=t>x?t:x,x=v>x?v:x;var A=this._bounds;return A.x=y,A.width=w-y,A.y=z,A.height=x-z,this._currentBounds=A,A},d.Sprite.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){var b,c;if(this._mask||this._filters){var d=a.spriteBatch;for(this._mask&&(d.stop(),a.maskManager.pushMask(this.mask,a),d.start()),this._filters&&(d.flush(),a.filterManager.pushFilter(this._filterBlock)),d.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);d.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),d.start()}else for(a.spriteBatch.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},d.Sprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){var b=this.texture.frame,c=a.context,e=this.texture;if(this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=d.blendModesCanvas[a.currentBlendMode]),this._mask&&a.maskManager.pushMask(this._mask,a.context),b&&b.width&&b.height&&e.baseTexture.source){c.globalAlpha=this.worldAlpha;var f=this.worldTransform;if(a.roundPixels?c.setTransform(f.a,f.c,f.b,f.d,0|f.tx,0|f.ty):c.setTransform(f.a,f.c,f.b,f.d,f.tx,f.ty),a.smoothProperty&&a.scaleMode!==this.texture.baseTexture.scaleMode&&(a.scaleMode=this.texture.baseTexture.scaleMode,c[a.smoothProperty]=a.scaleMode===d.scaleModes.LINEAR),16777215!==this.tint){if(this.cachedTint!==this.tint){if(!e.baseTexture.hasLoaded)return;this.cachedTint=this.tint,this.tintedTexture=d.CanvasTinter.getTintedTexture(this,this.tint)}c.drawImage(this.tintedTexture,0,0,b.width,b.height,this.anchor.x*-b.width,this.anchor.y*-b.height,b.width,b.height)}else if(e.trim){var g=e.trim;c.drawImage(this.texture.baseTexture.source,b.x,b.y,b.width,b.height,g.x-this.anchor.x*g.width,g.y-this.anchor.y*g.height,b.width,b.height)}else c.drawImage(this.texture.baseTexture.source,b.x,b.y,b.width,b.height,this.anchor.x*-b.width,this.anchor.y*-b.height,b.width,b.height)}for(var h=0,i=this.children.length;i>h;h++){var j=this.children[h];j._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},d.Sprite.fromFrame=function(a){var b=d.TextureCache[a];if(!b)throw new Error('The frameId "'+a+'" does not exist in the texture cache'+this);return new d.Sprite(b)},d.Sprite.fromImage=function(a,b,c){var e=d.Texture.fromImage(a,b,c);return new d.Sprite(e)},d.SpriteBatch=function(a){d.DisplayObjectContainer.call(this),this.textureThing=a,this.ready=!1},d.SpriteBatch.prototype=Object.create(d.DisplayObjectContainer.prototype),d.SpriteBatch.constructor=d.SpriteBatch,d.SpriteBatch.prototype.initWebGL=function(a){this.fastSpriteBatch=new d.WebGLFastSpriteBatch(a),this.ready=!0},d.SpriteBatch.prototype.updateTransform=function(){d.DisplayObject.prototype.updateTransform.call(this)},d.SpriteBatch.prototype._renderWebGL=function(a){!this.visible||this.alpha<=0||!this.children.length||(this.ready||this.initWebGL(a.gl),a.spriteBatch.stop(),a.shaderManager.activateShader(a.shaderManager.fastShader),this.fastSpriteBatch.begin(this,a),this.fastSpriteBatch.render(this),a.shaderManager.activateShader(a.shaderManager.defaultShader),a.spriteBatch.start())},d.SpriteBatch.prototype._renderCanvas=function(a){var b=a.context;b.globalAlpha=this.worldAlpha,d.DisplayObject.prototype.updateTransform.call(this);for(var c=this.worldTransform,e=!0,f=0;f<this.children.length;f++){var g=this.children[f];if(g.visible){var h=g.texture,i=h.frame;if(b.globalAlpha=this.worldAlpha*g.alpha,g.rotation%(2*Math.PI)===0)e&&(b.setTransform(c.a,c.c,c.b,c.d,c.tx,c.ty),e=!1),b.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width*g.scale.x+g.position.x+.5|0,g.anchor.y*-i.height*g.scale.y+g.position.y+.5|0,i.width*g.scale.x,i.height*g.scale.y);else{e||(e=!0),d.DisplayObject.prototype.updateTransform.call(g);var j=g.worldTransform;a.roundPixels?b.setTransform(j.a,j.c,j.b,j.d,0|j.tx,0|j.ty):b.setTransform(j.a,j.c,j.b,j.d,j.tx,j.ty),b.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width+.5|0,g.anchor.y*-i.height+.5|0,i.width,i.height)}}}},d.MovieClip=function(a){d.Sprite.call(this,a[0]),this.textures=a,this.animationSpeed=1,this.loop=!0,this.onComplete=null,this.currentFrame=0,this.playing=!1},d.MovieClip.prototype=Object.create(d.Sprite.prototype),d.MovieClip.prototype.constructor=d.MovieClip,Object.defineProperty(d.MovieClip.prototype,"totalFrames",{get:function(){return this.textures.length}}),d.MovieClip.prototype.stop=function(){this.playing=!1},d.MovieClip.prototype.play=function(){this.playing=!0},d.MovieClip.prototype.gotoAndStop=function(a){this.playing=!1,this.currentFrame=a;var b=this.currentFrame+.5|0;this.setTexture(this.textures[b%this.textures.length])},d.MovieClip.prototype.gotoAndPlay=function(a){this.currentFrame=a,this.playing=!0},d.MovieClip.prototype.updateTransform=function(){if(d.Sprite.prototype.updateTransform.call(this),this.playing){this.currentFrame+=this.animationSpeed;var a=this.currentFrame+.5|0;this.loop||a<this.textures.length?this.setTexture(this.textures[a%this.textures.length]):a>=this.textures.length&&(this.gotoAndStop(this.textures.length-1),this.onComplete&&this.onComplete())}},d.MovieClip.prototype.fromFrames=function(a){for(var b=[],c=0;c<a.length;c++)b.push(new d.Texture.fromFrame(a[c]));return new d.MovieClip(b)},d.MovieClip.prototype.fromImages=function(a){for(var b=[],c=0;c<a.length;c++)b.push(new d.Texture.fromImage(a[c]));return new d.MovieClip(b)},d.FilterBlock=function(){this.visible=!0,this.renderable=!0},d.Text=function(a,b){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),d.Sprite.call(this,d.Texture.fromCanvas(this.canvas)),this.setText(a),this.setStyle(b),this.updateText(),this.dirty=!1},d.Text.prototype=Object.create(d.Sprite.prototype),d.Text.prototype.constructor=d.Text,d.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,a.wordWrapWidth=a.wordWrapWidth||100,a.dropShadow=a.dropShadow||!1,a.dropShadowAngle=a.dropShadowAngle||Math.PI/6,a.dropShadowDistance=a.dropShadowDistance||4,a.dropShadowColor=a.dropShadowColor||"black",this.style=a,this.dirty=!0},d.Text.prototype.setText=function(a){this.text=a.toString()||" ",this.dirty=!0},d.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.wordWrap(this.text));for(var b=a.split(/(?:\r\n|\r|\n)/),c=[],d=0,e=0;e<b.length;e++){var f=this.context.measureText(b[e]).width;c[e]=f,d=Math.max(d,f)}var g=d+this.style.strokeThickness;this.style.dropShadow&&(g+=this.style.dropShadowDistance),this.canvas.width=g+this.context.lineWidth;var h=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness,i=h*b.length;this.style.dropShadow&&(i+=this.style.dropShadowDistance),this.canvas.height=i,navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.textBaseline="top";var j,k;if(this.style.dropShadow){this.context.fillStyle=this.style.dropShadowColor;var l=Math.sin(this.style.dropShadowAngle)*this.style.dropShadowDistance,m=Math.cos(this.style.dropShadowAngle)*this.style.dropShadowDistance;for(e=0;e<b.length;e++)j=this.style.strokeThickness/2,k=this.style.strokeThickness/2+e*h,"right"===this.style.align?j+=d-c[e]:"center"===this.style.align&&(j+=(d-c[e])/2),this.style.fill&&this.context.fillText(b[e],j+l,k+m)}for(this.context.fillStyle=this.style.fill,e=0;e<b.length;e++)j=this.style.strokeThickness/2,k=this.style.strokeThickness/2+e*h,"right"===this.style.align?j+=d-c[e]:"center"===this.style.align&&(j+=(d-c[e])/2),this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(b[e],j,k),this.style.fill&&this.context.fillText(b[e],j,k);this.updateTexture()},d.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width,this.texture.baseTexture.height=this.canvas.height,this.texture.frame.width=this.canvas.width,this.texture.frame.height=this.canvas.height,this._width=this.canvas.width,this._height=this.canvas.height,this.requiresUpdate=!0},d.Text.prototype._renderWebGL=function(a){this.requiresUpdate&&(this.requiresUpdate=!1,d.updateWebGLTexture(this.texture.baseTexture,a.gl)),d.Sprite.prototype._renderWebGL.call(this,a)},d.Text.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),d.Sprite.prototype.updateTransform.call(this)},d.Text.prototype.determineFontHeight=function(a){var b=d.Text.heightCache[a];if(!b){var c=document.getElementsByTagName("body")[0],e=document.createElement("div"),f=document.createTextNode("M");e.appendChild(f),e.setAttribute("style",a+";position:absolute;top:0;left:0"),c.appendChild(e),b=e.offsetHeight,d.Text.heightCache[a]=b,c.removeChild(e)}return b},d.Text.prototype.wordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;0===g||i>e?(g>0&&(b+="\n"),b+=f[g],e=this.style.wordWrapWidth-h):(e-=i,b+=" "+f[g])}d<c.length-1&&(b+="\n")}return b},d.Text.prototype.destroy=function(a){a&&this.texture.destroy()},d.Text.heightCache={},d.BitmapText=function(a,b){d.DisplayObjectContainer.call(this),this._pool=[],this.setText(a),this.setStyle(b),this.updateText(),this.dirty=!1},d.BitmapText.prototype=Object.create(d.DisplayObjectContainer.prototype),d.BitmapText.prototype.constructor=d.BitmapText,d.BitmapText.prototype.setText=function(a){this.text=a||" ",this.dirty=!0},d.BitmapText.prototype.setStyle=function(a){a=a||{},a.align=a.align||"left",this.style=a;var b=a.font.split(" ");this.fontName=b[b.length-1],this.fontSize=b.length>=2?parseInt(b[b.length-2],10):d.BitmapText.fonts[this.fontName].size,this.dirty=!0,this.tint=a.tint},d.BitmapText.prototype.updateText=function(){for(var a=d.BitmapText.fonts[this.fontName],b=new d.Point,c=null,e=[],f=0,g=[],h=0,i=this.fontSize/a.size,j=0;j<this.text.length;j++){var k=this.text.charCodeAt(j);if(/(?:\r\n|\r|\n)/.test(this.text.charAt(j)))g.push(b.x),f=Math.max(f,b.x),h++,b.x=0,b.y+=a.lineHeight,c=null;else{var l=a.chars[k];l&&(c&&l[c]&&(b.x+=l.kerning[c]),e.push({texture:l.texture,line:h,charCode:k,position:new d.Point(b.x+l.xOffset,b.y+l.yOffset)}),b.x+=l.xAdvance,c=k)}}g.push(b.x),f=Math.max(f,b.x);var m=[];for(j=0;h>=j;j++){var n=0;"right"===this.style.align?n=f-g[j]:"center"===this.style.align&&(n=(f-g[j])/2),m.push(n)}var o=this.children.length,p=e.length,q=this.tint||16777215;for(j=0;p>j;j++){var r=o>j?this.children[j]:this._pool.pop();r?r.setTexture(e[j].texture):r=new d.Sprite(e[j].texture),r.position.x=(e[j].position.x+m[e[j].line])*i,r.position.y=e[j].position.y*i,r.scale.x=r.scale.y=i,r.tint=q,r.parent||this.addChild(r)}for(;this.children.length>p;){var s=this.getChildAt(this.children.length-1);this._pool.push(s),this.removeChild(s)}this.textWidth=f*i,this.textHeight=(b.y+a.lineHeight)*i},d.BitmapText.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),d.DisplayObjectContainer.prototype.updateTransform.call(this)},d.BitmapText.fonts={},d.InteractionData=function(){this.global=new d.Point,this.target=null,this.originalEvent=null},d.InteractionData.prototype.getLocalPosition=function(a){var b=a.worldTransform,c=this.global,e=b.a,f=b.b,g=b.tx,h=b.c,i=b.d,j=b.ty,k=1/(e*i+f*-h);return new d.Point(i*k*c.x+-f*k*c.y+(j*f-g*i)*k,e*k*c.y+-h*k*c.x+(-j*e+g*h)*k)},d.InteractionData.prototype.constructor=d.InteractionData,d.InteractionManager=function(a){this.stage=a,this.mouse=new d.InteractionData,this.touchs={},this.tempPoint=new d.Point,this.mouseoverEnabled=!0,this.pool=[],this.interactiveItems=[],this.interactionDOMElement=null,this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.last=0,this.currentCursorStyle="inherit",this.mouseOut=!1},d.InteractionManager.prototype.constructor=d.InteractionManager,d.InteractionManager.prototype.collectInteractiveSprite=function(a,b){for(var c=a.children,d=c.length,e=d-1;e>=0;e--){var f=c[e];f._interactive?(b.interactiveChildren=!0,this.interactiveItems.push(f),f.children.length>0&&this.collectInteractiveSprite(f,f)):(f.__iParent=null,f.children.length>0&&this.collectInteractiveSprite(f,b))}},d.InteractionManager.prototype.setTarget=function(a){this.target=a,null===this.interactionDOMElement&&this.setTargetDomElement(a.view)},d.InteractionManager.prototype.setTargetDomElement=function(a){this.removeEvents(),window.navigator.msPointerEnabled&&(a.style["-ms-content-zooming"]="none",a.style["-ms-touch-action"]="none"),this.interactionDOMElement=a,a.addEventListener("mousemove",this.onMouseMove,!0),a.addEventListener("mousedown",this.onMouseDown,!0),a.addEventListener("mouseout",this.onMouseOut,!0),a.addEventListener("touchstart",this.onTouchStart,!0),a.addEventListener("touchend",this.onTouchEnd,!0),a.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("mouseup",this.onMouseUp,!0)},d.InteractionManager.prototype.removeEvents=function(){this.interactionDOMElement&&(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]="",this.interactionDOMElement.removeEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,!0),this.interactionDOMElement=null,window.removeEventListener("mouseup",this.onMouseUp,!0))},d.InteractionManager.prototype.update=function(){if(this.target){var a=Date.now(),b=a-this.last;if(b=b*d.INTERACTION_FREQUENCY/1e3,!(1>b)){this.last=a;var c=0;if(this.dirty){this.dirty=!1;var e=this.interactiveItems.length;for(c=0;e>c;c++)this.interactiveItems[c].interactiveChildren=!1;this.interactiveItems=[],this.stage.interactive&&this.interactiveItems.push(this.stage),this.collectInteractiveSprite(this.stage,this.stage)}var f=this.interactiveItems.length,g="inherit",h=!1;for(c=0;f>c;c++){var i=this.interactiveItems[c];i.__hit=this.hitTest(i,this.mouse),this.mouse.target=i,i.__hit&&!h?(i.buttonMode&&(g=i.defaultCursor),i.interactiveChildren||(h=!0),i.__isOver||(i.mouseover&&i.mouseover(this.mouse),i.__isOver=!0)):i.__isOver&&(i.mouseout&&i.mouseout(this.mouse),i.__isOver=!1)}this.currentCursorStyle!==g&&(this.currentCursorStyle=g,this.interactionDOMElement.style.cursor=g)}}},d.InteractionManager.prototype.onMouseMove=function(a){this.mouse.originalEvent=a||window.event;var b=this.interactionDOMElement.getBoundingClientRect();this.mouse.global.x=(a.clientX-b.left)*(this.target.width/b.width),this.mouse.global.y=(a.clientY-b.top)*(this.target.height/b.height);for(var c=this.interactiveItems.length,d=0;c>d;d++){var e=this.interactiveItems[d];e.mousemove&&e.mousemove(this.mouse)}},d.InteractionManager.prototype.onMouseDown=function(a){this.mouse.originalEvent=a||window.event,d.AUTO_PREVENT_DEFAULT&&this.mouse.originalEvent.preventDefault();for(var b=this.interactiveItems.length,c=0;b>c;c++){var e=this.interactiveItems[c];if((e.mousedown||e.click)&&(e.__mouseIsDown=!0,e.__hit=this.hitTest(e,this.mouse),e.__hit&&(e.mousedown&&e.mousedown(this.mouse),e.__isDown=!0,!e.interactiveChildren)))break}},d.InteractionManager.prototype.onMouseOut=function(){var a=this.interactiveItems.length;this.interactionDOMElement.style.cursor="inherit";for(var b=0;a>b;b++){var c=this.interactiveItems[b];c.__isOver&&(this.mouse.target=c,c.mouseout&&c.mouseout(this.mouse),c.__isOver=!1)}this.mouseOut=!0,this.mouse.global.x=-1e4,this.mouse.global.y=-1e4},d.InteractionManager.prototype.onMouseUp=function(a){this.mouse.originalEvent=a||window.event;for(var b=this.interactiveItems.length,c=!1,d=0;b>d;d++){var e=this.interactiveItems[d];e.__hit=this.hitTest(e,this.mouse),e.__hit&&!c?(e.mouseup&&e.mouseup(this.mouse),e.__isDown&&e.click&&e.click(this.mouse),e.interactiveChildren||(c=!0)):e.__isDown&&e.mouseupoutside&&e.mouseupoutside(this.mouse),e.__isDown=!1}},d.InteractionManager.prototype.hitTest=function(a,b){var c=b.global;if(!a.worldVisible)return!1;var e=a instanceof d.Sprite,f=a.worldTransform,g=f.a,h=f.b,i=f.tx,j=f.c,k=f.d,l=f.ty,m=1/(g*k+h*-j),n=k*m*c.x+-h*m*c.y+(l*h-i*k)*m,o=g*m*c.y+-j*m*c.x+(-l*g+i*j)*m;if(b.target=a,a.hitArea&&a.hitArea.contains)return a.hitArea.contains(n,o)?(b.target=a,!0):!1;if(e){var p,q=a.texture.frame.width,r=a.texture.frame.height,s=-q*a.anchor.x;if(n>s&&s+q>n&&(p=-r*a.anchor.y,o>p&&p+r>o))return b.target=a,!0}for(var t=a.children.length,u=0;t>u;u++){var v=a.children[u],w=this.hitTest(v,b);if(w)return b.target=a,!0}return!1},d.InteractionManager.prototype.onTouchMove=function(a){var b,c=this.interactionDOMElement.getBoundingClientRect(),d=a.changedTouches,e=0;for(e=0;e<d.length;e++){var f=d[e];b=this.touchs[f.identifier],b.originalEvent=a||window.event,b.global.x=(f.clientX-c.left)*(this.target.width/c.width),b.global.y=(f.clientY-c.top)*(this.target.height/c.height),navigator.isCocoonJS&&(b.global.x=f.clientX,b.global.y=f.clientY);for(var g=0;g<this.interactiveItems.length;g++){var h=this.interactiveItems[g];h.touchmove&&h.__touchData[f.identifier]&&h.touchmove(b)}}},d.InteractionManager.prototype.onTouchStart=function(a){var b=this.interactionDOMElement.getBoundingClientRect();d.AUTO_PREVENT_DEFAULT&&a.preventDefault();for(var c=a.changedTouches,e=0;e<c.length;e++){var f=c[e],g=this.pool.pop();g||(g=new d.InteractionData),g.originalEvent=a||window.event,this.touchs[f.identifier]=g,g.global.x=(f.clientX-b.left)*(this.target.width/b.width),g.global.y=(f.clientY-b.top)*(this.target.height/b.height),navigator.isCocoonJS&&(g.global.x=f.clientX,g.global.y=f.clientY);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i];
if((j.touchstart||j.tap)&&(j.__hit=this.hitTest(j,g),j.__hit&&(j.touchstart&&j.touchstart(g),j.__isDown=!0,j.__touchData=j.__touchData||{},j.__touchData[f.identifier]=g,!j.interactiveChildren)))break}}},d.InteractionManager.prototype.onTouchEnd=function(a){for(var b=this.interactionDOMElement.getBoundingClientRect(),c=a.changedTouches,d=0;d<c.length;d++){var e=c[d],f=this.touchs[e.identifier],g=!1;f.global.x=(e.clientX-b.left)*(this.target.width/b.width),f.global.y=(e.clientY-b.top)*(this.target.height/b.height),navigator.isCocoonJS&&(f.global.x=e.clientX,f.global.y=e.clientY);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i];j.__touchData&&j.__touchData[e.identifier]&&(j.__hit=this.hitTest(j,j.__touchData[e.identifier]),f.originalEvent=a||window.event,(j.touchend||j.tap)&&(j.__hit&&!g?(j.touchend&&j.touchend(f),j.__isDown&&j.tap&&j.tap(f),j.interactiveChildren||(g=!0)):j.__isDown&&j.touchendoutside&&j.touchendoutside(f),j.__isDown=!1),j.__touchData[e.identifier]=null)}this.pool.push(f),this.touchs[e.identifier]=null}},d.Stage=function(a){d.DisplayObjectContainer.call(this),this.worldTransform=new d.Matrix,this.interactive=!0,this.interactionManager=new d.InteractionManager(this),this.dirty=!0,this.stage=this,this.stage.hitArea=new d.Rectangle(0,0,1e5,1e5),this.setBackgroundColor(a)},d.Stage.prototype=Object.create(d.DisplayObjectContainer.prototype),d.Stage.prototype.constructor=d.Stage,d.Stage.prototype.setInteractionDelegate=function(a){this.interactionManager.setTargetDomElement(a)},d.Stage.prototype.updateTransform=function(){this.worldAlpha=1;for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform();this.dirty&&(this.dirty=!1,this.interactionManager.dirty=!0),this.interactive&&this.interactionManager.update()},d.Stage.prototype.setBackgroundColor=function(a){this.backgroundColor=a||0,this.backgroundColorSplit=d.hex2rgb(this.backgroundColor);var b=this.backgroundColor.toString(16);b="000000".substr(0,6-b.length)+b,this.backgroundColorString="#"+b},d.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global};for(var e=0,f=["ms","moz","webkit","o"],h=0;h<f.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[f[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[f[h]+"CancelAnimationFrame"]||window[f[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-e)),d=window.setTimeout(function(){a(b+c)},c);return e=b+c,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),window.requestAnimFrame=window.requestAnimationFrame,d.hex2rgb=function(a){return[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]},d.rgb2hex=function(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}()),d.AjaxRequest=function(){var a=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];if(!window.ActiveXObject)return window.XMLHttpRequest?new window.XMLHttpRequest:!1;for(var b=0;b<a.length;b++)try{return new window.ActiveXObject(a[b])}catch(c){}},d.canUseNewCanvasBlendModes=function(){var a=document.createElement("canvas");a.width=1,a.height=1;var b=a.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,1,1),b.globalCompositeOperation="multiply",b.fillStyle="#fff",b.fillRect(0,0,1,1),0===b.getImageData(0,0,1,1).data[0]},d.getNextPowerOfTwo=function(a){if(a>0&&0===(a&a-1))return a;for(var b=1;a>b;)b<<=1;return b},d.EventTarget=function(){var a={};this.addEventListener=this.on=function(b,c){void 0===a[b]&&(a[b]=[]),-1===a[b].indexOf(c)&&a[b].push(c)},this.dispatchEvent=this.emit=function(b){if(a[b.type]&&a[b.type].length)for(var c=0,d=a[b.type].length;d>c;c++)a[b.type][c](b)},this.removeEventListener=this.off=function(b,c){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)},this.removeAllEventListeners=function(b){var c=a[b];c&&(c.length=0)}},d.autoDetectRenderer=function(a,b,c,e,f){a||(a=800),b||(b=600);var g=function(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(b){return!1}}();return g?new d.WebGLRenderer(a,b,c,e,f):new d.CanvasRenderer(a,b,c,e)},d.autoDetectRecommendedRenderer=function(a,b,c,e,f){a||(a=800),b||(b=600);var g=function(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(b){return!1}}(),h=/Android/i.test(navigator.userAgent);return g&&!h?new d.WebGLRenderer(a,b,c,e,f):new d.CanvasRenderer(a,b,c,e)},d.PolyK={},d.PolyK.Triangulate=function(a){var b=!0,c=a.length>>1;if(3>c)return[];for(var e=[],f=[],g=0;c>g;g++)f.push(g);g=0;for(var h=c;h>3;){var i=f[(g+0)%h],j=f[(g+1)%h],k=f[(g+2)%h],l=a[2*i],m=a[2*i+1],n=a[2*j],o=a[2*j+1],p=a[2*k],q=a[2*k+1],r=!1;if(d.PolyK._convex(l,m,n,o,p,q,b)){r=!0;for(var s=0;h>s;s++){var t=f[s];if(t!==i&&t!==j&&t!==k&&d.PolyK._PointInTriangle(a[2*t],a[2*t+1],l,m,n,o,p,q)){r=!1;break}}}if(r)e.push(i,j,k),f.splice((g+1)%h,1),h--,g=0;else if(g++>3*h){if(!b)return window.console.log("PIXI Warning: shape too complex to fill"),[];for(e=[],f=[],g=0;c>g;g++)f.push(g);g=0,h=c,b=!1}}return e.push(f[0],f[1],f[2]),e},d.PolyK._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},d.PolyK._convex=function(a,b,c,d,e,f,g){return(b-d)*(e-c)+(c-a)*(f-d)>=0===g},d.initDefaultShaders=function(){},d.CompileVertexShader=function(a,b){return d._CompileShader(a,b,a.VERTEX_SHADER)},d.CompileFragmentShader=function(a,b){return d._CompileShader(a,b,a.FRAGMENT_SHADER)},d._CompileShader=function(a,b,c){var d=b.join("\n"),e=a.createShader(c);return a.shaderSource(e,d),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?e:(window.console.log(a.getShaderInfoLog(e)),null)},d.compileProgram=function(a,b,c){var e=d.CompileFragmentShader(a,c),f=d.CompileVertexShader(a,b),g=a.createProgram();return a.attachShader(g,f),a.attachShader(g,e),a.linkProgram(g),a.getProgramParameter(g,a.LINK_STATUS)||window.console.log("Could not initialise shaders"),g},d.PixiShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.textureCount=0,this.attributes=[],this.init()},d.PixiShader.prototype.init=function(){var a=this.gl,b=d.compileProgram(a,this.vertexSrc||d.PixiShader.defaultVertexSrc,this.fragmentSrc);a.useProgram(b),this.uSampler=a.getUniformLocation(b,"uSampler"),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.dimensions=a.getUniformLocation(b,"dimensions"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(b,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(b,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];for(var c in this.uniforms)this.uniforms[c].uniformLocation=a.getUniformLocation(b,c);this.initUniforms(),this.program=b},d.PixiShader.prototype.initUniforms=function(){this.textureCount=1;var a,b=this.gl;for(var c in this.uniforms){a=this.uniforms[c];var d=a.type;"sampler2D"===d?(a._init=!1,null!==a.value&&this.initSampler2D(a)):"mat2"===d||"mat3"===d||"mat4"===d?(a.glMatrix=!0,a.glValueLength=1,"mat2"===d?a.glFunc=b.uniformMatrix2fv:"mat3"===d?a.glFunc=b.uniformMatrix3fv:"mat4"===d&&(a.glFunc=b.uniformMatrix4fv)):(a.glFunc=b["uniform"+d],a.glValueLength="2f"===d||"2i"===d?2:"3f"===d||"3i"===d?3:"4f"===d||"4i"===d?4:1)}},d.PixiShader.prototype.initSampler2D=function(a){if(a.value&&a.value.baseTexture&&a.value.baseTexture.hasLoaded){var b=this.gl;if(b.activeTexture(b["TEXTURE"+this.textureCount]),b.bindTexture(b.TEXTURE_2D,a.value.baseTexture._glTextures[b.id]),a.textureData){var c=a.textureData,d=c.magFilter?c.magFilter:b.LINEAR,e=c.minFilter?c.minFilter:b.LINEAR,f=c.wrapS?c.wrapS:b.CLAMP_TO_EDGE,g=c.wrapT?c.wrapT:b.CLAMP_TO_EDGE,h=c.luminance?b.LUMINANCE:b.RGBA;if(c.repeat&&(f=b.REPEAT,g=b.REPEAT),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,!!c.flipY),c.width){var i=c.width?c.width:512,j=c.height?c.height:2,k=c.border?c.border:0;b.texImage2D(b.TEXTURE_2D,0,h,i,j,k,h,b.UNSIGNED_BYTE,null)}else b.texImage2D(b.TEXTURE_2D,0,h,b.RGBA,b.UNSIGNED_BYTE,a.value.baseTexture.source);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,d),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,e),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,f),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,g)}b.uniform1i(a.uniformLocation,this.textureCount),a._init=!0,this.textureCount++}},d.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;var a,b=this.gl;for(var c in this.uniforms)a=this.uniforms[c],1===a.glValueLength?a.glMatrix===!0?a.glFunc.call(b,a.uniformLocation,a.transpose,a.value):a.glFunc.call(b,a.uniformLocation,a.value):2===a.glValueLength?a.glFunc.call(b,a.uniformLocation,a.value.x,a.value.y):3===a.glValueLength?a.glFunc.call(b,a.uniformLocation,a.value.x,a.value.y,a.value.z):4===a.glValueLength?a.glFunc.call(b,a.uniformLocation,a.value.x,a.value.y,a.value.z,a.value.w):"sampler2D"===a.type&&(a._init?(b.activeTexture(b["TEXTURE"+this.textureCount]),b.bindTexture(b.TEXTURE_2D,a.value.baseTexture._glTextures[b.id]||d.createWebGLTexture(a.value.baseTexture,b)),b.uniform1i(a.uniformLocation,this.textureCount),this.textureCount++):this.initSampler2D(a))},d.PixiShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},d.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec2 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;","   vColor = vec4(color * aColor.x, aColor.x);","}"],d.PixiFastShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"],this.textureCount=0,this.init()},d.PixiFastShader.prototype.init=function(){var a=this.gl,b=d.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(b),this.uSampler=a.getUniformLocation(b,"uSampler"),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.dimensions=a.getUniformLocation(b,"dimensions"),this.uMatrix=a.getUniformLocation(b,"uMatrix"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.aPositionCoord=a.getAttribLocation(b,"aPositionCoord"),this.aScale=a.getAttribLocation(b,"aScale"),this.aRotation=a.getAttribLocation(b,"aRotation"),this.aTextureCoord=a.getAttribLocation(b,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(b,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute],this.program=b},d.PixiFastShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},d.StripShader=function(){this.program=null,this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying float vColor;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","   gl_FragColor = gl_FragColor * alpha;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","varying vec2 vTextureCoord;","uniform vec2 offsetVector;","varying float vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"]},d.StripShader.prototype.init=function(){var a=d.gl,b=d.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(b),this.uSampler=a.getUniformLocation(b,"uSampler"),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.colorAttribute=a.getAttribLocation(b,"aColor"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(b,"aTextureCoord"),this.translationMatrix=a.getUniformLocation(b,"translationMatrix"),this.alpha=a.getUniformLocation(b,"alpha"),this.program=b},d.PrimitiveShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"],this.init()},d.PrimitiveShader.prototype.init=function(){var a=this.gl,b=d.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(b),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.tintColor=a.getUniformLocation(b,"tint"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.colorAttribute=a.getAttribLocation(b,"aColor"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=a.getUniformLocation(b,"translationMatrix"),this.alpha=a.getUniformLocation(b,"alpha"),this.program=b},d.PrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},d.WebGLGraphics=function(){},d.WebGLGraphics.renderGraphics=function(a,b){var c=b.gl,e=b.projection,f=b.offset,g=b.shaderManager.primitiveShader;a._webGL[c.id]||(a._webGL[c.id]={points:[],indices:[],lastIndex:0,buffer:c.createBuffer(),indexBuffer:c.createBuffer()});var h=a._webGL[c.id];a.dirty&&(a.dirty=!1,a.clearDirty&&(a.clearDirty=!1,h.lastIndex=0,h.points=[],h.indices=[]),d.WebGLGraphics.updateGraphics(a,c)),b.shaderManager.activatePrimitiveShader(),c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.uniformMatrix3fv(g.translationMatrix,!1,a.worldTransform.toArray(!0)),c.uniform2f(g.projectionVector,e.x,-e.y),c.uniform2f(g.offsetVector,-f.x,-f.y),c.uniform3fv(g.tintColor,d.hex2rgb(a.tint)),c.uniform1f(g.alpha,a.worldAlpha),c.bindBuffer(c.ARRAY_BUFFER,h.buffer),c.vertexAttribPointer(g.aVertexPosition,2,c.FLOAT,!1,24,0),c.vertexAttribPointer(g.colorAttribute,4,c.FLOAT,!1,24,8),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,h.indexBuffer),c.drawElements(c.TRIANGLE_STRIP,h.indices.length,c.UNSIGNED_SHORT,0),b.shaderManager.deactivatePrimitiveShader()},d.WebGLGraphics.updateGraphics=function(a,b){for(var c=a._webGL[b.id],e=c.lastIndex;e<a.graphicsData.length;e++){var f=a.graphicsData[e];f.type===d.Graphics.POLY?(f.fill&&f.points.length>3&&d.WebGLGraphics.buildPoly(f,c),f.lineWidth>0&&d.WebGLGraphics.buildLine(f,c)):f.type===d.Graphics.RECT?d.WebGLGraphics.buildRectangle(f,c):(f.type===d.Graphics.CIRC||f.type===d.Graphics.ELIP)&&d.WebGLGraphics.buildCircle(f,c)}c.lastIndex=a.graphicsData.length,c.glPoints=new Float32Array(c.points),b.bindBuffer(b.ARRAY_BUFFER,c.buffer),b.bufferData(b.ARRAY_BUFFER,c.glPoints,b.STATIC_DRAW),c.glIndicies=new Uint16Array(c.indices),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,c.indexBuffer),b.bufferData(b.ELEMENT_ARRAY_BUFFER,c.glIndicies,b.STATIC_DRAW)},d.WebGLGraphics.buildRectangle=function(a,b){var c=a.points,e=c[0],f=c[1],g=c[2],h=c[3];if(a.fill){var i=d.hex2rgb(a.fillColor),j=a.fillAlpha,k=i[0]*j,l=i[1]*j,m=i[2]*j,n=b.points,o=b.indices,p=n.length/6;n.push(e,f),n.push(k,l,m,j),n.push(e+g,f),n.push(k,l,m,j),n.push(e,f+h),n.push(k,l,m,j),n.push(e+g,f+h),n.push(k,l,m,j),o.push(p,p,p+1,p+2,p+3,p+3)}if(a.lineWidth){var q=a.points;a.points=[e,f,e+g,f,e+g,f+h,e,f+h,e,f],d.WebGLGraphics.buildLine(a,b),a.points=q}},d.WebGLGraphics.buildCircle=function(a,b){var c=a.points,e=c[0],f=c[1],g=c[2],h=c[3],i=40,j=2*Math.PI/i,k=0;if(a.fill){var l=d.hex2rgb(a.fillColor),m=a.fillAlpha,n=l[0]*m,o=l[1]*m,p=l[2]*m,q=b.points,r=b.indices,s=q.length/6;for(r.push(s),k=0;i+1>k;k++)q.push(e,f,n,o,p,m),q.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h,n,o,p,m),r.push(s++,s++);r.push(s-1)}if(a.lineWidth){var t=a.points;for(a.points=[],k=0;i+1>k;k++)a.points.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h);d.WebGLGraphics.buildLine(a,b),a.points=t}},d.WebGLGraphics.buildLine=function(a,b){var c=0,e=a.points;if(0!==e.length){if(a.lineWidth%2)for(c=0;c<e.length;c++)e[c]+=.5;var f=new d.Point(e[0],e[1]),g=new d.Point(e[e.length-2],e[e.length-1]);if(f.x===g.x&&f.y===g.y){e.pop(),e.pop(),g=new d.Point(e[e.length-2],e[e.length-1]);var h=g.x+.5*(f.x-g.x),i=g.y+.5*(f.y-g.y);e.unshift(h,i),e.push(h,i)}var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=b.points,H=b.indices,I=e.length/2,J=e.length,K=G.length/6,L=a.lineWidth/2,M=d.hex2rgb(a.lineColor),N=a.lineAlpha,O=M[0]*N,P=M[1]*N,Q=M[2]*N;for(l=e[0],m=e[1],n=e[2],o=e[3],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(l-r,m-s,O,P,Q,N),G.push(l+r,m+s,O,P,Q,N),c=1;I-1>c;c++)l=e[2*(c-1)],m=e[2*(c-1)+1],n=e[2*c],o=e[2*c+1],p=e[2*(c+1)],q=e[2*(c+1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,t=-(o-q),u=n-p,F=Math.sqrt(t*t+u*u),t/=F,u/=F,t*=L,u*=L,x=-s+m-(-s+o),y=-r+n-(-r+l),z=(-r+l)*(-s+o)-(-r+n)*(-s+m),A=-u+q-(-u+o),B=-t+n-(-t+p),C=(-t+p)*(-u+o)-(-t+n)*(-u+q),D=x*B-A*y,Math.abs(D)<.1?(D+=10.1,G.push(n-r,o-s,O,P,Q,N),G.push(n+r,o+s,O,P,Q,N)):(j=(y*C-B*z)/D,k=(A*z-x*C)/D,E=(j-n)*(j-n)+(k-o)+(k-o),E>19600?(v=r-t,w=s-u,F=Math.sqrt(v*v+w*w),v/=F,w/=F,v*=L,w*=L,G.push(n-v,o-w),G.push(O,P,Q,N),G.push(n+v,o+w),G.push(O,P,Q,N),G.push(n-v,o-w),G.push(O,P,Q,N),J++):(G.push(j,k),G.push(O,P,Q,N),G.push(n-(j-n),o-(k-o)),G.push(O,P,Q,N)));for(l=e[2*(I-2)],m=e[2*(I-2)+1],n=e[2*(I-1)],o=e[2*(I-1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(n-r,o-s),G.push(O,P,Q,N),G.push(n+r,o+s),G.push(O,P,Q,N),H.push(K),c=0;J>c;c++)H.push(K++);H.push(K-1)}},d.WebGLGraphics.buildPoly=function(a,b){var c=a.points;if(!(c.length<6)){var e=b.points,f=b.indices,g=c.length/2,h=d.hex2rgb(a.fillColor),i=a.fillAlpha,j=h[0]*i,k=h[1]*i,l=h[2]*i,m=d.PolyK.Triangulate(c),n=e.length/6,o=0;for(o=0;o<m.length;o+=3)f.push(m[o]+n),f.push(m[o]+n),f.push(m[o+1]+n),f.push(m[o+2]+n),f.push(m[o+2]+n);for(o=0;g>o;o++)e.push(c[2*o],c[2*o+1],j,k,l,i)}},d.glContexts=[],d.WebGLRenderer=function(a,b,c,e,f){d.defaultRenderer||(d.defaultRenderer=this),this.type=d.WEBGL_RENDERER,this.transparent=!!e,this.width=a||800,this.height=b||600,this.view=c||document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height,this.contextLost=this.handleContextLost.bind(this),this.contextRestoredLost=this.handleContextRestored.bind(this),this.view.addEventListener("webglcontextlost",this.contextLost,!1),this.view.addEventListener("webglcontextrestored",this.contextRestoredLost,!1),this.options={alpha:this.transparent,antialias:!!f,premultipliedAlpha:!!e,stencil:!0};try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(g){try{this.gl=this.view.getContext("webgl",this.options)}catch(h){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var i=this.gl;this.glContextId=i.id=d.WebGLRenderer.glContextId++,d.glContexts[this.glContextId]=i,d.blendModesWebGL||(d.blendModesWebGL=[],d.blendModesWebGL[d.blendModes.NORMAL]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.ADD]=[i.SRC_ALPHA,i.DST_ALPHA],d.blendModesWebGL[d.blendModes.MULTIPLY]=[i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.SCREEN]=[i.SRC_ALPHA,i.ONE],d.blendModesWebGL[d.blendModes.OVERLAY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.DARKEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.LIGHTEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.COLOR_DODGE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.COLOR_BURN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.HARD_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.SOFT_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.DIFFERENCE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.EXCLUSION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.HUE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.SATURATION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.COLOR]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],d.blendModesWebGL[d.blendModes.LUMINOSITY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA]),this.projection=new d.Point,this.projection.x=this.width/2,this.projection.y=-this.height/2,this.offset=new d.Point(0,0),this.resize(this.width,this.height),this.contextLost=!1,this.shaderManager=new d.WebGLShaderManager(i),this.spriteBatch=new d.WebGLSpriteBatch(i),this.maskManager=new d.WebGLMaskManager(i),this.filterManager=new d.WebGLFilterManager(i,this.transparent),this.renderSession={},this.renderSession.gl=this.gl,this.renderSession.drawCount=0,this.renderSession.shaderManager=this.shaderManager,this.renderSession.maskManager=this.maskManager,this.renderSession.filterManager=this.filterManager,this.renderSession.spriteBatch=this.spriteBatch,this.renderSession.renderer=this,i.useProgram(this.shaderManager.defaultShader.program),i.disable(i.DEPTH_TEST),i.disable(i.CULL_FACE),i.enable(i.BLEND),i.colorMask(!0,!0,!0,this.transparent)},d.WebGLRenderer.prototype.constructor=d.WebGLRenderer,d.WebGLRenderer.prototype.render=function(a){if(!this.contextLost){this.__stage!==a&&(a.interactive&&a.interactionManager.removeEvents(),this.__stage=a),d.WebGLRenderer.updateTextures(),a.updateTransform(),a._interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)));var b=this.gl;b.viewport(0,0,this.width,this.height),b.bindFramebuffer(b.FRAMEBUFFER,null),this.transparent?b.clearColor(0,0,0,0):b.clearColor(a.backgroundColorSplit[0],a.backgroundColorSplit[1],a.backgroundColorSplit[2],1),b.clear(b.COLOR_BUFFER_BIT),this.renderDisplayObject(a,this.projection),a.interactive?a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)):a._interactiveEventsAdded&&(a._interactiveEventsAdded=!1,a.interactionManager.setTarget(this))}},d.WebGLRenderer.prototype.renderDisplayObject=function(a,b,c){this.renderSession.drawCount=0,this.renderSession.currentBlendMode=9999,this.renderSession.projection=b,this.renderSession.offset=this.offset,this.spriteBatch.begin(this.renderSession),this.filterManager.begin(this.renderSession,c),a._renderWebGL(this.renderSession),this.spriteBatch.end()},d.WebGLRenderer.updateTextures=function(){var a=0;for(a=0;a<d.Texture.frameUpdates.length;a++)d.WebGLRenderer.updateTextureFrame(d.Texture.frameUpdates[a]);for(a=0;a<d.texturesToDestroy.length;a++)d.WebGLRenderer.destroyTexture(d.texturesToDestroy[a]);d.texturesToUpdate.length=0,d.texturesToDestroy.length=0,d.Texture.frameUpdates.length=0},d.WebGLRenderer.destroyTexture=function(a){for(var b=a._glTextures.length-1;b>=0;b--){var c=a._glTextures[b],e=d.glContexts[b];e&&c&&e.deleteTexture(c)}a._glTextures.length=0},d.WebGLRenderer.updateTextureFrame=function(a){a.updateFrame=!1,a._updateWebGLuvs()},d.WebGLRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b,this.gl.viewport(0,0,this.width,this.height),this.projection.x=this.width/2,this.projection.y=-this.height/2},d.createWebGLTexture=function(a,b){return a.hasLoaded&&(a._glTextures[b.id]=b.createTexture(),b.bindTexture(b.TEXTURE_2D,a._glTextures[b.id]),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a.source),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,a.scaleMode===d.scaleModes.LINEAR?b.LINEAR:b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,a.scaleMode===d.scaleModes.LINEAR?b.LINEAR:b.NEAREST),a._powerOf2?(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.REPEAT),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.REPEAT)):(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)),b.bindTexture(b.TEXTURE_2D,null)),a._glTextures[b.id]},d.updateWebGLTexture=function(a,b){a._glTextures[b.id]&&(b.bindTexture(b.TEXTURE_2D,a._glTextures[b.id]),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a.source),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,a.scaleMode===d.scaleModes.LINEAR?b.LINEAR:b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,a.scaleMode===d.scaleModes.LINEAR?b.LINEAR:b.NEAREST),a._powerOf2?(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.REPEAT),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.REPEAT)):(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)),b.bindTexture(b.TEXTURE_2D,null))},d.WebGLRenderer.prototype.handleContextLost=function(a){a.preventDefault(),this.contextLost=!0},d.WebGLRenderer.prototype.handleContextRestored=function(){try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(a){try{this.gl=this.view.getContext("webgl",this.options)}catch(b){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var c=this.gl;c.id=d.WebGLRenderer.glContextId++,this.shaderManager.setContext(c),this.spriteBatch.setContext(c),this.maskManager.setContext(c),this.filterManager.setContext(c),this.renderSession.gl=this.gl,c.disable(c.DEPTH_TEST),c.disable(c.CULL_FACE),c.enable(c.BLEND),c.colorMask(!0,!0,!0,this.transparent),this.gl.viewport(0,0,this.width,this.height);for(var e in d.TextureCache){var f=d.TextureCache[e].baseTexture;f._glTextures=[]}this.contextLost=!1},d.WebGLRenderer.prototype.destroy=function(){this.view.removeEventListener("webglcontextlost",this.contextLost),this.view.removeEventListener("webglcontextrestored",this.contextRestoredLost),d.glContexts[this.glContextId]=null,this.projection=null,this.offset=null,this.shaderManager.destroy(),this.spriteBatch.destroy(),this.maskManager.destroy(),this.filterManager.destroy(),this.shaderManager=null,this.spriteBatch=null,this.maskManager=null,this.filterManager=null,this.gl=null,this.renderSession=null},d.WebGLRenderer.glContextId=0,d.WebGLMaskManager=function(a){this.maskStack=[],this.maskPosition=0,this.setContext(a)},d.WebGLMaskManager.prototype.setContext=function(a){this.gl=a},d.WebGLMaskManager.prototype.pushMask=function(a,b){var c=this.gl;0===this.maskStack.length&&(c.enable(c.STENCIL_TEST),c.stencilFunc(c.ALWAYS,1,1)),this.maskStack.push(a),c.colorMask(!1,!1,!1,!1),c.stencilOp(c.KEEP,c.KEEP,c.INCR),d.WebGLGraphics.renderGraphics(a,b),c.colorMask(!0,!0,!0,!0),c.stencilFunc(c.NOTEQUAL,0,this.maskStack.length),c.stencilOp(c.KEEP,c.KEEP,c.KEEP)},d.WebGLMaskManager.prototype.popMask=function(a){var b=this.gl,c=this.maskStack.pop();c&&(b.colorMask(!1,!1,!1,!1),b.stencilOp(b.KEEP,b.KEEP,b.DECR),d.WebGLGraphics.renderGraphics(c,a),b.colorMask(!0,!0,!0,!0),b.stencilFunc(b.NOTEQUAL,0,this.maskStack.length),b.stencilOp(b.KEEP,b.KEEP,b.KEEP)),0===this.maskStack.length&&b.disable(b.STENCIL_TEST)},d.WebGLMaskManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},d.WebGLShaderManager=function(a){this.maxAttibs=10,this.attribState=[],this.tempAttribState=[];for(var b=0;b<this.maxAttibs;b++)this.attribState[b]=!1;this.setContext(a)},d.WebGLShaderManager.prototype.setContext=function(a){this.gl=a,this.primitiveShader=new d.PrimitiveShader(a),this.defaultShader=new d.PixiShader(a),this.fastShader=new d.PixiFastShader(a),this.activateShader(this.defaultShader)},d.WebGLShaderManager.prototype.setAttribs=function(a){var b;for(b=0;b<this.tempAttribState.length;b++)this.tempAttribState[b]=!1;for(b=0;b<a.length;b++){var c=a[b];this.tempAttribState[c]=!0}var d=this.gl;for(b=0;b<this.attribState.length;b++)this.attribState[b]!==this.tempAttribState[b]&&(this.attribState[b]=this.tempAttribState[b],this.tempAttribState[b]?d.enableVertexAttribArray(b):d.disableVertexAttribArray(b))},d.WebGLShaderManager.prototype.activateShader=function(a){this.currentShader=a,this.gl.useProgram(a.program),this.setAttribs(a.attributes)},d.WebGLShaderManager.prototype.activatePrimitiveShader=function(){var a=this.gl;a.useProgram(this.primitiveShader.program),this.setAttribs(this.primitiveShader.attributes)},d.WebGLShaderManager.prototype.deactivatePrimitiveShader=function(){var a=this.gl;a.useProgram(this.defaultShader.program),this.setAttribs(this.defaultShader.attributes)},d.WebGLShaderManager.prototype.destroy=function(){this.attribState=null,this.tempAttribState=null,this.primitiveShader.destroy(),this.defaultShader.destroy(),this.fastShader.destroy(),this.gl=null},d.WebGLSpriteBatch=function(a){this.vertSize=6,this.size=2e3;var b=4*this.size*this.vertSize,c=6*this.size;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.setContext(a)},d.WebGLSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},d.WebGLSpriteBatch.prototype.begin=function(a){this.renderSession=a,this.shader=this.renderSession.shaderManager.defaultShader,this.start()},d.WebGLSpriteBatch.prototype.end=function(){this.flush()
},d.WebGLSpriteBatch.prototype.render=function(a){var b=a.texture;(b.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size)&&(this.flush(),this.currentBaseTexture=b.baseTexture),a.blendMode!==this.currentBlendMode&&this.setBlendMode(a.blendMode);var c=a._uvs||a.texture._uvs;if(c){var d,e,f,g,h=a.worldAlpha,i=a.tint,j=this.vertices,k=a.anchor.x,l=a.anchor.y;if(a.texture.trim){var m=a.texture.trim;e=m.x-k*m.width,d=e+b.frame.width,g=m.y-l*m.height,f=g+b.frame.height}else d=b.frame.width*(1-k),e=b.frame.width*-k,f=b.frame.height*(1-l),g=b.frame.height*-l;var n=4*this.currentBatchSize*this.vertSize,o=a.worldTransform,p=o.a,q=o.c,r=o.b,s=o.d,t=o.tx,u=o.ty;j[n++]=p*e+r*g+t,j[n++]=s*g+q*e+u,j[n++]=c.x0,j[n++]=c.y0,j[n++]=h,j[n++]=i,j[n++]=p*d+r*g+t,j[n++]=s*g+q*d+u,j[n++]=c.x1,j[n++]=c.y1,j[n++]=h,j[n++]=i,j[n++]=p*d+r*f+t,j[n++]=s*f+q*d+u,j[n++]=c.x2,j[n++]=c.y2,j[n++]=h,j[n++]=i,j[n++]=p*e+r*f+t,j[n++]=s*f+q*e+u,j[n++]=c.x3,j[n++]=c.y3,j[n++]=h,j[n++]=i,this.currentBatchSize++}},d.WebGLSpriteBatch.prototype.renderTilingSprite=function(a){var b=a.tilingTexture;(b.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size)&&(this.flush(),this.currentBaseTexture=b.baseTexture),a.blendMode!==this.currentBlendMode&&this.setBlendMode(a.blendMode),a._uvs||(a._uvs=new d.TextureUvs);var c=a._uvs;a.tilePosition.x%=b.baseTexture.width*a.tileScaleOffset.x,a.tilePosition.y%=b.baseTexture.height*a.tileScaleOffset.y;var e=a.tilePosition.x/(b.baseTexture.width*a.tileScaleOffset.x),f=a.tilePosition.y/(b.baseTexture.height*a.tileScaleOffset.y),g=a.width/b.baseTexture.width/(a.tileScale.x*a.tileScaleOffset.x),h=a.height/b.baseTexture.height/(a.tileScale.y*a.tileScaleOffset.y);c.x0=0-e,c.y0=0-f,c.x1=1*g-e,c.y1=0-f,c.x2=1*g-e,c.y2=1*h-f,c.x3=0-e,c.y3=1*h-f;var i=a.worldAlpha,j=a.tint,k=this.vertices,l=a.width,m=a.height,n=a.anchor.x,o=a.anchor.y,p=l*(1-n),q=l*-n,r=m*(1-o),s=m*-o,t=4*this.currentBatchSize*this.vertSize,u=a.worldTransform,v=u.a,w=u.c,x=u.b,y=u.d,z=u.tx,A=u.ty;k[t++]=v*q+x*s+z,k[t++]=y*s+w*q+A,k[t++]=c.x0,k[t++]=c.y0,k[t++]=i,k[t++]=j,k[t++]=v*p+x*s+z,k[t++]=y*s+w*p+A,k[t++]=c.x1,k[t++]=c.y1,k[t++]=i,k[t++]=j,k[t++]=v*p+x*r+z,k[t++]=y*r+w*p+A,k[t++]=c.x2,k[t++]=c.y2,k[t++]=i,k[t++]=j,k[t++]=v*q+x*r+z,k[t++]=y*r+w*q+A,k[t++]=c.x3,k[t++]=c.y3,k[t++]=i,k[t++]=j,this.currentBatchSize++},d.WebGLSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]||d.createWebGLTexture(this.currentBaseTexture,a)),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var b=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,b)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},d.WebGLSpriteBatch.prototype.stop=function(){this.flush()},d.WebGLSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.colorAttribute,2,a.FLOAT,!1,c,16),this.currentBlendMode!==d.blendModes.NORMAL&&this.setBlendMode(d.blendModes.NORMAL)},d.WebGLSpriteBatch.prototype.setBlendMode=function(a){this.flush(),this.currentBlendMode=a;var b=d.blendModesWebGL[this.currentBlendMode];this.gl.blendFunc(b[0],b[1])},d.WebGLSpriteBatch.prototype.destroy=function(){this.vertices=null,this.indices=null,this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteBuffer(this.indexBuffer),this.currentBaseTexture=null,this.gl=null},d.WebGLFastSpriteBatch=function(a){this.vertSize=10,this.maxSize=6e3,this.size=this.maxSize;var b=4*this.size*this.vertSize,c=6*this.maxSize;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.vertexBuffer=null,this.indexBuffer=null,this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.currentBlendMode=0,this.renderSession=null,this.shader=null,this.matrix=null,this.setContext(a)},d.WebGLFastSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},d.WebGLFastSpriteBatch.prototype.begin=function(a,b){this.renderSession=b,this.shader=this.renderSession.shaderManager.fastShader,this.matrix=a.worldTransform.toArray(!0),this.start()},d.WebGLFastSpriteBatch.prototype.end=function(){this.flush()},d.WebGLFastSpriteBatch.prototype.render=function(a){var b=a.children,c=b[0];if(c.texture._uvs){this.currentBaseTexture=c.texture.baseTexture,c.blendMode!==this.currentBlendMode&&this.setBlendMode(c.blendMode);for(var d=0,e=b.length;e>d;d++)this.renderSprite(b[d]);this.flush()}},d.WebGLFastSpriteBatch.prototype.renderSprite=function(a){if(a.visible&&(a.texture.baseTexture===this.currentBaseTexture||(this.flush(),this.currentBaseTexture=a.texture.baseTexture,a.texture._uvs))){var b,c,d,e,f,g,h,i,j=this.vertices;if(b=a.texture._uvs,c=a.texture.frame.width,d=a.texture.frame.height,a.texture.trim){var k=a.texture.trim;f=k.x-a.anchor.x*k.width,e=f+a.texture.frame.width,h=k.y-a.anchor.y*k.height,g=h+a.texture.frame.height}else e=a.texture.frame.width*(1-a.anchor.x),f=a.texture.frame.width*-a.anchor.x,g=a.texture.frame.height*(1-a.anchor.y),h=a.texture.frame.height*-a.anchor.y;i=4*this.currentBatchSize*this.vertSize,j[i++]=f,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x0,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x1,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x2,j[i++]=b.y2,j[i++]=a.alpha,j[i++]=f,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x3,j[i++]=b.y3,j[i++]=a.alpha,this.currentBatchSize++,this.currentBatchSize>=this.size&&this.flush()}},d.WebGLFastSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(this.currentBaseTexture._glTextures[a.id]||d.createWebGLTexture(this.currentBaseTexture,a),a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var b=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,b)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},d.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()},d.WebGLFastSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y),a.uniformMatrix3fv(this.shader.uMatrix,!1,this.matrix);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aPositionCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.aScale,2,a.FLOAT,!1,c,16),a.vertexAttribPointer(this.shader.aRotation,1,a.FLOAT,!1,c,24),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,28),a.vertexAttribPointer(this.shader.colorAttribute,1,a.FLOAT,!1,c,36),this.currentBlendMode!==d.blendModes.NORMAL&&this.setBlendMode(d.blendModes.NORMAL)},d.WebGLFastSpriteBatch.prototype.setBlendMode=function(a){this.flush(),this.currentBlendMode=a;var b=d.blendModesWebGL[this.currentBlendMode];this.gl.blendFunc(b[0],b[1])},d.WebGLFilterManager=function(a,b){this.transparent=b,this.filterStack=[],this.offsetX=0,this.offsetY=0,this.setContext(a)},d.WebGLFilterManager.prototype.setContext=function(a){this.gl=a,this.texturePool=[],this.initShaderBuffers()},d.WebGLFilterManager.prototype.begin=function(a,b){this.renderSession=a,this.defaultShader=a.shaderManager.defaultShader;var c=this.renderSession.projection;this.width=2*c.x,this.height=2*-c.y,this.buffer=b},d.WebGLFilterManager.prototype.pushFilter=function(a){var b=this.gl,c=this.renderSession.projection,e=this.renderSession.offset;a._filterArea=a.target.filterArea||a.target.getBounds(),this.filterStack.push(a);var f=a.filterPasses[0];this.offsetX+=a._filterArea.x,this.offsetY+=a._filterArea.y;var g=this.texturePool.pop();g?g.resize(this.width,this.height):g=new d.FilterTexture(this.gl,this.width,this.height),b.bindTexture(b.TEXTURE_2D,g.texture);var h=a._filterArea,i=f.padding;h.x-=i,h.y-=i,h.width+=2*i,h.height+=2*i,h.x<0&&(h.x=0),h.width>this.width&&(h.width=this.width),h.y<0&&(h.y=0),h.height>this.height&&(h.height=this.height),b.bindFramebuffer(b.FRAMEBUFFER,g.frameBuffer),b.viewport(0,0,h.width,h.height),c.x=h.width/2,c.y=-h.height/2,e.x=-h.x,e.y=-h.y,b.uniform2f(this.defaultShader.projectionVector,h.width/2,-h.height/2),b.uniform2f(this.defaultShader.offsetVector,-h.x,-h.y),b.colorMask(!0,!0,!0,!0),b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT),a._glFilterTexture=g},d.WebGLFilterManager.prototype.popFilter=function(){var a=this.gl,b=this.filterStack.pop(),c=b._filterArea,e=b._glFilterTexture,f=this.renderSession.projection,g=this.renderSession.offset;if(b.filterPasses.length>1){a.viewport(0,0,c.width,c.height),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=0,this.vertexArray[1]=c.height,this.vertexArray[2]=c.width,this.vertexArray[3]=c.height,this.vertexArray[4]=0,this.vertexArray[5]=0,this.vertexArray[6]=c.width,this.vertexArray[7]=0,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=c.width/this.width,this.uvArray[5]=c.height/this.height,this.uvArray[6]=c.width/this.width,this.uvArray[7]=c.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray);var h=e,i=this.texturePool.pop();i||(i=new d.FilterTexture(this.gl,this.width,this.height)),i.resize(this.width,this.height),a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND);for(var j=0;j<b.filterPasses.length-1;j++){var k=b.filterPasses[j];a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,h.texture),this.applyFilterPass(k,c,c.width,c.height);var l=h;h=i,i=l}a.enable(a.BLEND),e=h,this.texturePool.push(i)}var m=b.filterPasses[b.filterPasses.length-1];this.offsetX-=c.x,this.offsetY-=c.y;var n=this.width,o=this.height,p=0,q=0,r=this.buffer;if(0===this.filterStack.length)a.colorMask(!0,!0,!0,!0);else{var s=this.filterStack[this.filterStack.length-1];c=s._filterArea,n=c.width,o=c.height,p=c.x,q=c.y,r=s._glFilterTexture.frameBuffer}f.x=n/2,f.y=-o/2,g.x=p,g.y=q,c=b._filterArea;var t=c.x-p,u=c.y-q;a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=t,this.vertexArray[1]=u+c.height,this.vertexArray[2]=t+c.width,this.vertexArray[3]=u+c.height,this.vertexArray[4]=t,this.vertexArray[5]=u,this.vertexArray[6]=t+c.width,this.vertexArray[7]=u,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=c.width/this.width,this.uvArray[5]=c.height/this.height,this.uvArray[6]=c.width/this.width,this.uvArray[7]=c.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray),a.viewport(0,0,n,o),a.bindFramebuffer(a.FRAMEBUFFER,r),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e.texture),this.applyFilterPass(m,c,n,o),a.useProgram(this.defaultShader.program),a.uniform2f(this.defaultShader.projectionVector,n/2,-o/2),a.uniform2f(this.defaultShader.offsetVector,-p,-q),this.texturePool.push(e),b._glFilterTexture=null},d.WebGLFilterManager.prototype.applyFilterPass=function(a,b,c,e){var f=this.gl,g=a.shaders[f.id];g||(g=new d.PixiShader(f),g.fragmentSrc=a.fragmentSrc,g.uniforms=a.uniforms,g.init(),a.shaders[f.id]=g),f.useProgram(g.program),f.uniform2f(g.projectionVector,c/2,-e/2),f.uniform2f(g.offsetVector,0,0),a.uniforms.dimensions&&(a.uniforms.dimensions.value[0]=this.width,a.uniforms.dimensions.value[1]=this.height,a.uniforms.dimensions.value[2]=this.vertexArray[0],a.uniforms.dimensions.value[3]=this.vertexArray[5]),g.syncUniforms(),f.bindBuffer(f.ARRAY_BUFFER,this.vertexBuffer),f.vertexAttribPointer(g.aVertexPosition,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.uvBuffer),f.vertexAttribPointer(g.aTextureCoord,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.colorBuffer),f.vertexAttribPointer(g.colorAttribute,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,this.indexBuffer),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0),this.renderSession.drawCount++},d.WebGLFilterManager.prototype.initShaderBuffers=function(){var a=this.gl;this.vertexBuffer=a.createBuffer(),this.uvBuffer=a.createBuffer(),this.colorBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.vertexArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertexArray,a.STATIC_DRAW),this.uvArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),a.bufferData(a.ARRAY_BUFFER,this.uvArray,a.STATIC_DRAW),this.colorArray=new Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]),a.bindBuffer(a.ARRAY_BUFFER,this.colorBuffer),a.bufferData(a.ARRAY_BUFFER,this.colorArray,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),a.STATIC_DRAW)},d.WebGLFilterManager.prototype.destroy=function(){var a=this.gl;this.filterStack=null,this.offsetX=0,this.offsetY=0;for(var b=0;b<this.texturePool.length;b++)this.texturePool.destroy();this.texturePool=null,a.deleteBuffer(this.vertexBuffer),a.deleteBuffer(this.uvBuffer),a.deleteBuffer(this.colorBuffer),a.deleteBuffer(this.indexBuffer)},d.FilterTexture=function(a,b,c,e){this.gl=a,this.frameBuffer=a.createFramebuffer(),this.texture=a.createTexture(),e=e||d.scaleModes.DEFAULT,a.bindTexture(a.TEXTURE_2D,this.texture),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,e===d.scaleModes.LINEAR?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,e===d.scaleModes.LINEAR?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.bindFramebuffer(a.FRAMEBUFFER,this.framebuffer),a.bindFramebuffer(a.FRAMEBUFFER,this.frameBuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.texture,0),this.renderBuffer=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,this.renderBuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,this.renderBuffer),this.resize(b,c)},d.FilterTexture.prototype.clear=function(){var a=this.gl;a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT)},d.FilterTexture.prototype.resize=function(a,b){if(this.width!==a||this.height!==b){this.width=a,this.height=b;var c=this.gl;c.bindTexture(c.TEXTURE_2D,this.texture),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,a,b,0,c.RGBA,c.UNSIGNED_BYTE,null),c.bindRenderbuffer(c.RENDERBUFFER,this.renderBuffer),c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_STENCIL,a,b)}},d.FilterTexture.prototype.destroy=function(){var a=this.gl;a.deleteFramebuffer(this.frameBuffer),a.deleteTexture(this.texture),this.frameBuffer=null,this.texture=null},d.CanvasMaskManager=function(){},d.CanvasMaskManager.prototype.pushMask=function(a,b){b.save();var c=a.alpha,e=a.worldTransform;b.setTransform(e.a,e.c,e.b,e.d,e.tx,e.ty),d.CanvasGraphics.renderGraphicsMask(a,b),b.clip(),a.worldAlpha=c},d.CanvasMaskManager.prototype.popMask=function(a){a.restore()},d.CanvasTinter=function(){},d.CanvasTinter.getTintedTexture=function(a,b){var c=a.texture;b=d.CanvasTinter.roundColor(b);var e="#"+("00000"+(0|b).toString(16)).substr(-6);if(c.tintCache=c.tintCache||{},c.tintCache[e])return c.tintCache[e];var f=d.CanvasTinter.canvas||document.createElement("canvas");if(d.CanvasTinter.tintMethod(c,b,f),d.CanvasTinter.convertTintToImage){var g=new Image;g.src=f.toDataURL(),c.tintCache[e]=g}else c.tintCache[e]=f,d.CanvasTinter.canvas=null;return f},d.CanvasTinter.tintWithMultiply=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="multiply",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},d.CanvasTinter.tintWithOverlay=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.globalCompositeOperation="copy",d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},d.CanvasTinter.tintWithPerPixel=function(a,b,c){var e=c.getContext("2d"),f=a.frame;c.width=f.width,c.height=f.height,e.globalCompositeOperation="copy",e.drawImage(a.baseTexture.source,f.x,f.y,f.width,f.height,0,0,f.width,f.height);for(var g=d.hex2rgb(b),h=g[0],i=g[1],j=g[2],k=e.getImageData(0,0,f.width,f.height),l=k.data,m=0;m<l.length;m+=4)l[m+0]*=h,l[m+1]*=i,l[m+2]*=j;e.putImageData(k,0,0)},d.CanvasTinter.roundColor=function(a){var b=d.CanvasTinter.cacheStepsPerColorChannel,c=d.hex2rgb(a);return c[0]=Math.min(255,c[0]/b*b),c[1]=Math.min(255,c[1]/b*b),c[2]=Math.min(255,c[2]/b*b),d.rgb2hex(c)},d.CanvasTinter.cacheStepsPerColorChannel=8,d.CanvasTinter.convertTintToImage=!1,d.CanvasTinter.canUseMultiply=d.canUseNewCanvasBlendModes(),d.CanvasTinter.tintMethod=d.CanvasTinter.canUseMultiply?d.CanvasTinter.tintWithMultiply:d.CanvasTinter.tintWithPerPixel,d.CanvasRenderer=function(a,b,c,e){d.defaultRenderer=d.defaultRenderer||this,this.type=d.CANVAS_RENDERER,this.clearBeforeRender=!0,this.roundPixels=!1,this.transparent=!!e,d.blendModesCanvas||(d.blendModesCanvas=[],d.canUseNewCanvasBlendModes()?(d.blendModesCanvas[d.blendModes.NORMAL]="source-over",d.blendModesCanvas[d.blendModes.ADD]="lighter",d.blendModesCanvas[d.blendModes.MULTIPLY]="multiply",d.blendModesCanvas[d.blendModes.SCREEN]="screen",d.blendModesCanvas[d.blendModes.OVERLAY]="overlay",d.blendModesCanvas[d.blendModes.DARKEN]="darken",d.blendModesCanvas[d.blendModes.LIGHTEN]="lighten",d.blendModesCanvas[d.blendModes.COLOR_DODGE]="color-dodge",d.blendModesCanvas[d.blendModes.COLOR_BURN]="color-burn",d.blendModesCanvas[d.blendModes.HARD_LIGHT]="hard-light",d.blendModesCanvas[d.blendModes.SOFT_LIGHT]="soft-light",d.blendModesCanvas[d.blendModes.DIFFERENCE]="difference",d.blendModesCanvas[d.blendModes.EXCLUSION]="exclusion",d.blendModesCanvas[d.blendModes.HUE]="hue",d.blendModesCanvas[d.blendModes.SATURATION]="saturation",d.blendModesCanvas[d.blendModes.COLOR]="color",d.blendModesCanvas[d.blendModes.LUMINOSITY]="luminosity"):(d.blendModesCanvas[d.blendModes.NORMAL]="source-over",d.blendModesCanvas[d.blendModes.ADD]="lighter",d.blendModesCanvas[d.blendModes.MULTIPLY]="source-over",d.blendModesCanvas[d.blendModes.SCREEN]="source-over",d.blendModesCanvas[d.blendModes.OVERLAY]="source-over",d.blendModesCanvas[d.blendModes.DARKEN]="source-over",d.blendModesCanvas[d.blendModes.LIGHTEN]="source-over",d.blendModesCanvas[d.blendModes.COLOR_DODGE]="source-over",d.blendModesCanvas[d.blendModes.COLOR_BURN]="source-over",d.blendModesCanvas[d.blendModes.HARD_LIGHT]="source-over",d.blendModesCanvas[d.blendModes.SOFT_LIGHT]="source-over",d.blendModesCanvas[d.blendModes.DIFFERENCE]="source-over",d.blendModesCanvas[d.blendModes.EXCLUSION]="source-over",d.blendModesCanvas[d.blendModes.HUE]="source-over",d.blendModesCanvas[d.blendModes.SATURATION]="source-over",d.blendModesCanvas[d.blendModes.COLOR]="source-over",d.blendModesCanvas[d.blendModes.LUMINOSITY]="source-over")),this.width=a||800,this.height=b||600,this.view=c||document.createElement("canvas"),this.context=this.view.getContext("2d",{alpha:this.transparent}),this.refresh=!0,this.view.width=this.width,this.view.height=this.height,this.count=0,this.maskManager=new d.CanvasMaskManager,this.renderSession={context:this.context,maskManager:this.maskManager,scaleMode:null,smoothProperty:null},"imageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="imageSmoothingEnabled":"webkitImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="webkitImageSmoothingEnabled":"mozImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="mozImageSmoothingEnabled":"oImageSmoothingEnabled"in this.context&&(this.renderSession.smoothProperty="oImageSmoothingEnabled")},d.CanvasRenderer.prototype.constructor=d.CanvasRenderer,d.CanvasRenderer.prototype.render=function(a){d.texturesToUpdate.length=0,d.texturesToDestroy.length=0,a.updateTransform(),this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,!this.transparent&&this.clearBeforeRender?(this.context.fillStyle=a.backgroundColorString,this.context.fillRect(0,0,this.width,this.height)):this.transparent&&this.clearBeforeRender&&this.context.clearRect(0,0,this.width,this.height),this.renderDisplayObject(a),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this))),d.Texture.frameUpdates.length>0&&(d.Texture.frameUpdates.length=0)},d.CanvasRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b},d.CanvasRenderer.prototype.renderDisplayObject=function(a,b){this.renderSession.context=b||this.context,a._renderCanvas(this.renderSession)},d.CanvasRenderer.prototype.renderStripFlat=function(a){var b=this.context,c=a.verticies,d=c.length/2;this.count++,b.beginPath();for(var e=1;d-2>e;e++){var f=2*e,g=c[f],h=c[f+2],i=c[f+4],j=c[f+1],k=c[f+3],l=c[f+5];b.moveTo(g,j),b.lineTo(h,k),b.lineTo(i,l)}b.fillStyle="#FF0000",b.fill(),b.closePath()},d.CanvasRenderer.prototype.renderStrip=function(a){var b=this.context,c=a.verticies,d=a.uvs,e=c.length/2;this.count++;for(var f=1;e-2>f;f++){var g=2*f,h=c[g],i=c[g+2],j=c[g+4],k=c[g+1],l=c[g+3],m=c[g+5],n=d[g]*a.texture.width,o=d[g+2]*a.texture.width,p=d[g+4]*a.texture.width,q=d[g+1]*a.texture.height,r=d[g+3]*a.texture.height,s=d[g+5]*a.texture.height;b.save(),b.beginPath(),b.moveTo(h,k),b.lineTo(i,l),b.lineTo(j,m),b.closePath(),b.clip();var t=n*r+q*p+o*s-r*p-q*o-n*s,u=h*r+q*j+i*s-r*j-q*i-h*s,v=n*i+h*p+o*j-i*p-h*o-n*j,w=n*r*j+q*i*p+h*o*s-h*r*p-q*o*j-n*i*s,x=k*r+q*m+l*s-r*m-q*l-k*s,y=n*l+k*p+o*m-l*p-k*o-n*m,z=n*r*m+q*l*p+k*o*s-k*r*p-q*o*m-n*l*s;b.transform(u/t,x/t,v/t,y/t,w/t,z/t),b.drawImage(a.texture.baseTexture.source,0,0),b.restore()}},d.CanvasBuffer=function(a,b){this.width=a,this.height=b,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=a,this.canvas.height=b},d.CanvasBuffer.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},d.CanvasBuffer.prototype.resize=function(a,b){this.width=this.canvas.width=a,this.height=this.canvas.height=b},d.CanvasGraphics=function(){},d.CanvasGraphics.renderGraphics=function(a,b){for(var c=a.worldAlpha,e="",f=0;f<a.graphicsData.length;f++){var g=a.graphicsData[f],h=g.points;if(b.strokeStyle=e="#"+("00000"+(0|g.lineColor).toString(16)).substr(-6),b.lineWidth=g.lineWidth,g.type===d.Graphics.POLY){b.beginPath(),b.moveTo(h[0],h[1]);for(var i=1;i<h.length/2;i++)b.lineTo(h[2*i],h[2*i+1]);h[0]===h[h.length-2]&&h[1]===h[h.length-1]&&b.closePath(),g.fill&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fill()),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.stroke())}else if(g.type===d.Graphics.RECT)(g.fillColor||0===g.fillColor)&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fillRect(h[0],h[1],h[2],h[3])),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.strokeRect(h[0],h[1],h[2],h[3]));else if(g.type===d.Graphics.CIRC)b.beginPath(),b.arc(h[0],h[1],h[2],0,2*Math.PI),b.closePath(),g.fill&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fill()),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.stroke());else if(g.type===d.Graphics.ELIP){var j=g.points,k=2*j[2],l=2*j[3],m=j[0]-k/2,n=j[1]-l/2;b.beginPath();var o=.5522848,p=k/2*o,q=l/2*o,r=m+k,s=n+l,t=m+k/2,u=n+l/2;b.moveTo(m,u),b.bezierCurveTo(m,u-q,t-p,n,t,n),b.bezierCurveTo(t+p,n,r,u-q,r,u),b.bezierCurveTo(r,u+q,t+p,s,t,s),b.bezierCurveTo(t-p,s,m,u+q,m,u),b.closePath(),g.fill&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fill()),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.stroke())}}},d.CanvasGraphics.renderGraphicsMask=function(a,b){var c=a.graphicsData.length;if(0!==c){c>1&&(c=1,window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));for(var e=0;1>e;e++){var f=a.graphicsData[e],g=f.points;if(f.type===d.Graphics.POLY){b.beginPath(),b.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)b.lineTo(g[2*h],g[2*h+1]);g[0]===g[g.length-2]&&g[1]===g[g.length-1]&&b.closePath()}else if(f.type===d.Graphics.RECT)b.beginPath(),b.rect(g[0],g[1],g[2],g[3]),b.closePath();else if(f.type===d.Graphics.CIRC)b.beginPath(),b.arc(g[0],g[1],g[2],0,2*Math.PI),b.closePath();else if(f.type===d.Graphics.ELIP){var i=f.points,j=2*i[2],k=2*i[3],l=i[0]-j/2,m=i[1]-k/2;b.beginPath();var n=.5522848,o=j/2*n,p=k/2*n,q=l+j,r=m+k,s=l+j/2,t=m+k/2;b.moveTo(l,t),b.bezierCurveTo(l,t-p,s-o,m,s,m),b.bezierCurveTo(s+o,m,q,t-p,q,t),b.bezierCurveTo(q,t+p,s+o,r,s,r),b.bezierCurveTo(s-o,r,l,t+p,l,t),b.closePath()}}}},d.Graphics=function(){d.DisplayObjectContainer.call(this),this.renderable=!0,this.fillAlpha=1,this.lineWidth=0,this.lineColor="black",this.graphicsData=[],this.tint=16777215,this.blendMode=d.blendModes.NORMAL,this.currentPath={points:[]},this._webGL=[],this.isMask=!1,this.bounds=null,this.boundsPadding=10},d.Graphics.prototype=Object.create(d.DisplayObjectContainer.prototype),d.Graphics.prototype.constructor=d.Graphics,Object.defineProperty(d.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap=a,this._cacheAsBitmap?this._generateCachedSprite():(this.destroyCachedSprite(),this.dirty=!0)}}),d.Graphics.prototype.lineStyle=function(a,b,c){return this.currentPath.points.length||this.graphicsData.pop(),this.lineWidth=a||0,this.lineColor=b||0,this.lineAlpha=arguments.length<3?1:c,this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:d.Graphics.POLY},this.graphicsData.push(this.currentPath),this},d.Graphics.prototype.moveTo=function(a,b){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:d.Graphics.POLY},this.currentPath.points.push(a,b),this.graphicsData.push(this.currentPath),this},d.Graphics.prototype.lineTo=function(a,b){return this.currentPath.points.push(a,b),this.dirty=!0,this},d.Graphics.prototype.beginFill=function(a,b){return this.filling=!0,this.fillColor=a||0,this.fillAlpha=arguments.length<2?1:b,this},d.Graphics.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},d.Graphics.prototype.drawRect=function(a,b,c,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,e],type:d.Graphics.RECT},this.graphicsData.push(this.currentPath),this.dirty=!0,this},d.Graphics.prototype.drawCircle=function(a,b,c){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,c],type:d.Graphics.CIRC},this.graphicsData.push(this.currentPath),this.dirty=!0,this},d.Graphics.prototype.drawEllipse=function(a,b,c,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,e],type:d.Graphics.ELIP},this.graphicsData.push(this.currentPath),this.dirty=!0,this},d.Graphics.prototype.clear=function(){return this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[],this.bounds=null,this},d.Graphics.prototype.generateTexture=function(){var a=this.getBounds(),b=new d.CanvasBuffer(a.width,a.height),c=d.Texture.fromCanvas(b.canvas);return b.context.translate(-a.x,-a.y),d.CanvasGraphics.renderGraphics(this,b.context),c},d.Graphics.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){if(this._cacheAsBitmap)return this.dirty&&(this._generateCachedSprite(),d.updateWebGLTexture(this._cachedSprite.texture.baseTexture,a.gl),this.dirty=!1),this._cachedSprite.alpha=this.alpha,d.Sprite.prototype._renderWebGL.call(this._cachedSprite,a),void 0;if(a.spriteBatch.stop(),this._mask&&a.maskManager.pushMask(this.mask,a),this._filters&&a.filterManager.pushFilter(this._filterBlock),this.blendMode!==a.spriteBatch.currentBlendMode){a.spriteBatch.currentBlendMode=this.blendMode;var b=d.blendModesWebGL[a.spriteBatch.currentBlendMode];a.spriteBatch.gl.blendFunc(b[0],b[1])}if(d.WebGLGraphics.renderGraphics(this,a),this.children.length){a.spriteBatch.start();for(var c=0,e=this.children.length;e>c;c++)this.children[c]._renderWebGL(a);a.spriteBatch.stop()}this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.drawCount++,a.spriteBatch.start()}},d.Graphics.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){var b=a.context,c=this.worldTransform;this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,b.globalCompositeOperation=d.blendModesCanvas[a.currentBlendMode]),b.setTransform(c.a,c.c,c.b,c.d,c.tx,c.ty),d.CanvasGraphics.renderGraphics(this,b);for(var e=0,f=this.children.length;f>e;e++)this.children[e]._renderCanvas(a)}},d.Graphics.prototype.getBounds=function(a){this.bounds||this.updateBounds();var b=this.bounds.x,c=this.bounds.width+this.bounds.x,d=this.bounds.y,e=this.bounds.height+this.bounds.y,f=a||this.worldTransform,g=f.a,h=f.c,i=f.b,j=f.d,k=f.tx,l=f.ty,m=g*c+i*e+k,n=j*e+h*c+l,o=g*b+i*e+k,p=j*e+h*b+l,q=g*b+i*d+k,r=j*d+h*b+l,s=g*c+i*d+k,t=j*d+h*c+l,u=m,v=n,w=m,x=n;w=w>o?o:w,w=w>q?q:w,w=w>s?s:w,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,u=o>u?o:u,u=q>u?q:u,u=s>u?s:u,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v;var y=this._bounds;return y.x=w,y.width=u-w,y.y=x,y.height=v-x,y},d.Graphics.prototype.updateBounds=function(){for(var a,b,c,e,f,g=1/0,h=-1/0,i=1/0,j=-1/0,k=0;k<this.graphicsData.length;k++){var l=this.graphicsData[k],m=l.type,n=l.lineWidth;if(a=l.points,m===d.Graphics.RECT)b=a[0]-n/2,c=a[1]-n/2,e=a[2]+n,f=a[3]+n,g=g>b?b:g,h=b+e>h?b+e:h,i=i>c?b:i,j=c+f>j?c+f:j;else if(m===d.Graphics.CIRC||m===d.Graphics.ELIP)b=a[0],c=a[1],e=a[2]+n/2,f=a[3]+n/2,g=g>b-e?b-e:g,h=b+e>h?b+e:h,i=i>c-f?c-f:i,j=c+f>j?c+f:j;
else for(var o=0;o<a.length;o+=2)b=a[o],c=a[o+1],g=g>b-n?b-n:g,h=b+n>h?b+n:h,i=i>c-n?c-n:i,j=c+n>j?c+n:j}var p=this.boundsPadding;this.bounds=new d.Rectangle(g-p,i-p,h-g+2*p,j-i+2*p)},d.Graphics.prototype._generateCachedSprite=function(){var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.buffer.resize(a.width,a.height);else{var b=new d.CanvasBuffer(a.width,a.height),c=d.Texture.fromCanvas(b.canvas);this._cachedSprite=new d.Sprite(c),this._cachedSprite.buffer=b,this._cachedSprite.worldTransform=this.worldTransform}this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._cachedSprite.buffer.context.translate(-a.x,-a.y),d.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context),this._cachedSprite.alpha=this.alpha},d.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(!0),this._cachedSprite=null},d.Graphics.POLY=0,d.Graphics.RECT=1,d.Graphics.CIRC=2,d.Graphics.ELIP=3,d.Strip=function(a,b,c){d.Sprite.call(this,a),this.width=b,this.height=c,this.texture=a,this.blendMode=d.blendModes.NORMAL;try{this.uvs=new Float32Array([0,1,1,1,1,0,0,1]),this.verticies=new Float32Array([0,0,0,0,0,0,0,0,0]),this.colors=new Float32Array([1,1,1,1]),this.indices=new Uint16Array([0,1,2,3])}catch(e){this.uvs=[0,1,1,1,1,0,0,1],this.verticies=[0,0,0,0,0,0,0,0,0],this.colors=[1,1,1,1],this.indices=[0,1,2,3]}a.baseTexture.hasLoaded?(this.width=this.texture.frame.width,this.height=this.texture.frame.height,this.updateFrame=!0):(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},d.Strip.prototype=Object.create(d.Sprite.prototype),d.Strip.prototype.constructor=d.Strip,d.Strip.prototype.onTextureUpdate=function(){this.updateFrame=!0},d.Rope=function(a,b){d.Strip.call(this,a),this.points=b;try{this.verticies=new Float32Array(4*b.length),this.uvs=new Float32Array(4*b.length),this.colors=new Float32Array(2*b.length),this.indices=new Uint16Array(2*b.length)}catch(c){this.verticies=new Array(4*b.length),this.uvs=new Array(4*b.length),this.colors=new Array(2*b.length),this.indices=new Array(2*b.length)}this.refresh()},d.Rope.prototype=Object.create(d.Strip.prototype),d.Rope.prototype.constructor=d.Rope,d.Rope.prototype.refresh=function(){var a=this.points;if(!(a.length<1)){var b=this.uvs,c=a[0],d=this.indices,e=this.colors;this.count-=.2,b[0]=0,b[1]=1,b[2]=0,b[3]=1,e[0]=1,e[1]=1,d[0]=0,d[1]=1;for(var f,g,h,i=a.length,j=1;i>j;j++)f=a[j],g=4*j,h=j/(i-1),j%2?(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1):(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1),g=2*j,e[g]=1,e[g+1]=1,g=2*j,d[g]=g,d[g+1]=g+1,c=f}},d.Rope.prototype.updateTransform=function(){var a=this.points;if(!(a.length<1)){var b,c=a[0],e={x:0,y:0};this.count-=.2;var f=this.verticies;f[0]=c.x+e.x,f[1]=c.y+e.y,f[2]=c.x-e.x,f[3]=c.y-e.y;for(var g,h,i,j,k,l=a.length,m=1;l>m;m++)g=a[m],h=4*m,b=m<a.length-1?a[m+1]:g,e.y=-(b.x-c.x),e.x=b.y-c.y,i=10*(1-m/(l-1)),i>1&&(i=1),j=Math.sqrt(e.x*e.x+e.y*e.y),k=this.texture.height/2,e.x/=j,e.y/=j,e.x*=k,e.y*=k,f[h]=g.x+e.x,f[h+1]=g.y+e.y,f[h+2]=g.x-e.x,f[h+3]=g.y-e.y,c=g;d.DisplayObjectContainer.prototype.updateTransform.call(this)}},d.Rope.prototype.setTexture=function(a){this.texture=a,this.updateFrame=!0},d.TilingSprite=function(a,b,c){d.Sprite.call(this,a),this.width=b||100,this.height=c||100,this.tileScale=new d.Point(1,1),this.tileScaleOffset=new d.Point(1,1),this.tilePosition=new d.Point(0,0),this.renderable=!0,this.tint=16777215,this.blendMode=d.blendModes.NORMAL},d.TilingSprite.prototype=Object.create(d.Sprite.prototype),d.TilingSprite.prototype.constructor=d.TilingSprite,Object.defineProperty(d.TilingSprite.prototype,"width",{get:function(){return this._width},set:function(a){this._width=a}}),Object.defineProperty(d.TilingSprite.prototype,"height",{get:function(){return this._height},set:function(a){this._height=a}}),d.TilingSprite.prototype.onTextureUpdate=function(){this.updateFrame=!0},d.TilingSprite.prototype.setTexture=function(a){this.texture!==a&&(this.texture=a,this.refreshTexture=!0,this.cachedTint=16777215)},d.TilingSprite.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha){var b,c;for(this.mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this.filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),!this.tilingTexture||this.refreshTexture?(this.generateTilingTexture(!0),this.tilingTexture&&this.tilingTexture.needsUpdate&&(d.updateWebGLTexture(this.tilingTexture.baseTexture,a.gl),this.tilingTexture.needsUpdate=!1)):a.spriteBatch.renderTilingSprite(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);a.spriteBatch.stop(),this.filters&&a.filterManager.popFilter(),this.mask&&a.maskManager.popMask(a),a.spriteBatch.start()}},d.TilingSprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){var b=a.context;this._mask&&a.maskManager.pushMask(this._mask,b),b.globalAlpha=this.worldAlpha;var c=this.worldTransform;if(b.setTransform(c.a,c.c,c.b,c.d,c.tx,c.ty),!this.__tilePattern||this.refreshTexture){if(this.generateTilingTexture(!1),!this.tilingTexture)return;this.__tilePattern=b.createPattern(this.tilingTexture.baseTexture.source,"repeat")}this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,b.globalCompositeOperation=d.blendModesCanvas[a.currentBlendMode]),b.beginPath();var e=this.tilePosition,f=this.tileScale;e.x%=this.tilingTexture.baseTexture.width,e.y%=this.tilingTexture.baseTexture.height,b.scale(f.x,f.y),b.translate(e.x,e.y),b.fillStyle=this.__tilePattern,b.fillRect(-e.x+this.anchor.x*-this._width,-e.y+this.anchor.y*-this._height,this._width/f.x,this._height/f.y),b.scale(1/f.x,1/f.y),b.translate(-e.x,-e.y),b.closePath(),this._mask&&a.maskManager.popMask(a.context)}},d.TilingSprite.prototype.getBounds=function(){var a=this._width,b=this._height,c=a*(1-this.anchor.x),d=a*-this.anchor.x,e=b*(1-this.anchor.y),f=b*-this.anchor.y,g=this.worldTransform,h=g.a,i=g.c,j=g.b,k=g.d,l=g.tx,m=g.ty,n=h*d+j*f+l,o=k*f+i*d+m,p=h*c+j*f+l,q=k*f+i*c+m,r=h*c+j*e+l,s=k*e+i*c+m,t=h*d+j*e+l,u=k*e+i*d+m,v=-1/0,w=-1/0,x=1/0,y=1/0;x=x>n?n:x,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,v=n>v?n:v,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w;var z=this._bounds;return z.x=x,z.width=v-x,z.y=y,z.height=w-y,this._currentBounds=z,z},d.TilingSprite.prototype.generateTilingTexture=function(a){var b=this.texture;if(b.baseTexture.hasLoaded){var c,e,f=b.baseTexture,g=b.frame,h=g.width!==f.width||g.height!==f.height,i=!1;if(a?(c=d.getNextPowerOfTwo(g.width),e=d.getNextPowerOfTwo(g.height),g.width!==c&&g.height!==e&&(i=!0)):h&&(c=g.width,e=g.height,i=!0),i){var j;this.tilingTexture&&this.tilingTexture.isTiling?(j=this.tilingTexture.canvasBuffer,j.resize(c,e),this.tilingTexture.baseTexture.width=c,this.tilingTexture.baseTexture.height=e,this.tilingTexture.needsUpdate=!0):(j=new d.CanvasBuffer(c,e),this.tilingTexture=d.Texture.fromCanvas(j.canvas),this.tilingTexture.canvasBuffer=j,this.tilingTexture.isTiling=!0),j.context.drawImage(b.baseTexture.source,g.x,g.y,g.width,g.height,0,0,c,e),this.tileScaleOffset.x=g.width/c,this.tileScaleOffset.y=g.height/e}else this.tilingTexture&&this.tilingTexture.isTiling&&this.tilingTexture.destroy(!0),this.tileScaleOffset.x=1,this.tileScaleOffset.y=1,this.tilingTexture=b;this.refreshTexture=!1,this.tilingTexture.baseTexture._powerOf2=!0}};var i={};i.BoneData=function(a,b){this.name=a,this.parent=b},i.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1},i.SlotData=function(a,b){this.name=a,this.boneData=b},i.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null},i.Bone=function(a,b){this.data=a,this.parent=b,this.setToSetupPose()},i.Bone.yDown=!1,i.Bone.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,updateWorldTransform:function(a,b){var c=this.parent;null!=c?(this.worldX=this.x*c.m00+this.y*c.m01+c.worldX,this.worldY=this.x*c.m10+this.y*c.m11+c.worldY,this.worldScaleX=c.worldScaleX*this.scaleX,this.worldScaleY=c.worldScaleY*this.scaleY,this.worldRotation=c.worldRotation+this.rotation):(this.worldX=this.x,this.worldY=this.y,this.worldScaleX=this.scaleX,this.worldScaleY=this.scaleY,this.worldRotation=this.rotation);var d=this.worldRotation*Math.PI/180,e=Math.cos(d),f=Math.sin(d);this.m00=e*this.worldScaleX,this.m10=f*this.worldScaleX,this.m01=-f*this.worldScaleY,this.m11=e*this.worldScaleY,a&&(this.m00=-this.m00,this.m01=-this.m01),b&&(this.m10=-this.m10,this.m11=-this.m11),i.Bone.yDown&&(this.m10=-this.m10,this.m11=-this.m11)},setToSetupPose:function(){var a=this.data;this.x=a.x,this.y=a.y,this.rotation=a.rotation,this.scaleX=a.scaleX,this.scaleY=a.scaleY}},i.Slot=function(a,b,c){this.data=a,this.skeleton=b,this.bone=c,this.setToSetupPose()},i.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,setAttachment:function(a){this.attachment=a,this._attachmentTime=this.skeleton.time},setAttachmentTime:function(a){this._attachmentTime=this.skeleton.time-a},getAttachmentTime:function(){return this.skeleton.time-this._attachmentTime},setToSetupPose:function(){var a=this.data;this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a;for(var b=this.skeleton.data.slots,c=0,d=b.length;d>c;c++)if(b[c]==a){this.setAttachment(a.attachmentName?this.skeleton.getAttachmentBySlotIndex(c,a.attachmentName):null);break}}},i.Skin=function(a){this.name=a,this.attachments={}},i.Skin.prototype={addAttachment:function(a,b,c){this.attachments[a+":"+b]=c},getAttachment:function(a,b){return this.attachments[a+":"+b]},_attachAll:function(a,b){for(var c in b.attachments){var d=c.indexOf(":"),e=parseInt(c.substring(0,d),10),f=c.substring(d+1),g=a.slots[e];if(g.attachment&&g.attachment.name==f){var h=this.getAttachment(e,f);h&&g.setAttachment(h)}}}},i.Animation=function(a,b,c){this.name=a,this.timelines=b,this.duration=c},i.Animation.prototype={apply:function(a,b,c){c&&this.duration&&(b%=this.duration);for(var d=this.timelines,e=0,f=d.length;f>e;e++)d[e].apply(a,b,1)},mix:function(a,b,c,d){c&&this.duration&&(b%=this.duration);for(var e=this.timelines,f=0,g=e.length;g>f;f++)e[f].apply(a,b,d)}},i.binarySearch=function(a,b,c){var d=0,e=Math.floor(a.length/c)-2;if(!e)return c;for(var f=e>>>1;;){if(a[(f+1)*c]<=b?d=f+1:e=f,d==e)return(d+1)*c;f=d+e>>>1}},i.linearSearch=function(a,b,c){for(var d=0,e=a.length-c;e>=d;d+=c)if(a[d]>b)return d;return-1},i.Curves=function(a){this.curves=[],this.curves.length=6*(a-1)},i.Curves.prototype={setLinear:function(a){this.curves[6*a]=0},setStepped:function(a){this.curves[6*a]=-1},setCurve:function(a,b,c,d,e){var f=.1,g=f*f,h=g*f,i=3*f,j=3*g,k=6*g,l=6*h,m=2*-b+d,n=2*-c+e,o=3*(b-d)+1,p=3*(c-e)+1,q=6*a,r=this.curves;r[q]=b*i+m*j+o*h,r[q+1]=c*i+n*j+p*h,r[q+2]=m*k+o*l,r[q+3]=n*k+p*l,r[q+4]=o*l,r[q+5]=p*l},getCurvePercent:function(a,b){b=0>b?0:b>1?1:b;var c=6*a,d=this.curves,e=d[c];if(!e)return b;if(-1==e)return 0;for(var f=d[c+1],g=d[c+2],h=d[c+3],i=d[c+4],j=d[c+5],k=e,l=f,m=8;;){if(k>=b){var n=k-e,o=l-f;return o+(l-o)*(b-n)/(k-n)}if(!m)break;m--,e+=g,f+=h,g+=i,h+=j,k+=e,l+=f}return l+(1-l)*(b-k)/(1-k)}},i.RotateTimeline=function(a){this.curves=new i.Curves(a),this.frames=[],this.frames.length=2*a},i.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(a,b,c){a*=2,this.frames[a]=b,this.frames[a+1]=c},apply:function(a,b,c){var d,e=this.frames;if(!(b<e[0])){var f=a.bones[this.boneIndex];if(b>=e[e.length-2]){for(d=f.data.rotation+e[e.length-1]-f.rotation;d>180;)d-=360;for(;-180>d;)d+=360;return f.rotation+=d*c,void 0}var g=i.binarySearch(e,b,2),h=e[g-1],j=e[g],k=1-(b-j)/(e[g-2]-j);for(k=this.curves.getCurvePercent(g/2-1,k),d=e[g+1]-h;d>180;)d-=360;for(;-180>d;)d+=360;for(d=f.data.rotation+(h+d*k)-f.rotation;d>180;)d-=360;for(;-180>d;)d+=360;f.rotation+=d*c}}},i.TranslateTimeline=function(a){this.curves=new i.Curves(a),this.frames=[],this.frames.length=3*a},i.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.x+=(e.data.x+d[d.length-2]-e.x)*c,e.y+=(e.data.y+d[d.length-1]-e.y)*c,void 0;var f=i.binarySearch(d,b,3),g=d[f-2],h=d[f-1],j=d[f],k=1-(b-j)/(d[f+-3]-j);k=this.curves.getCurvePercent(f/3-1,k),e.x+=(e.data.x+g+(d[f+1]-g)*k-e.x)*c,e.y+=(e.data.y+h+(d[f+2]-h)*k-e.y)*c}}},i.ScaleTimeline=function(a){this.curves=new i.Curves(a),this.frames=[],this.frames.length=3*a},i.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.scaleX+=(e.data.scaleX-1+d[d.length-2]-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+d[d.length-1]-e.scaleY)*c,void 0;var f=i.binarySearch(d,b,3),g=d[f-2],h=d[f-1],j=d[f],k=1-(b-j)/(d[f+-3]-j);k=this.curves.getCurvePercent(f/3-1,k),e.scaleX+=(e.data.scaleX-1+g+(d[f+1]-g)*k-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+h+(d[f+2]-h)*k-e.scaleY)*c}}},i.ColorTimeline=function(a){this.curves=new i.Curves(a),this.frames=[],this.frames.length=5*a},i.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(c,d){c*=5,this.frames[c]=d,this.frames[c+1]=r,this.frames[c+2]=g,this.frames[c+3]=b,this.frames[c+4]=a},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.slots[this.slotIndex];if(b>=d[d.length-5]){var f=d.length-1;return e.r=d[f-3],e.g=d[f-2],e.b=d[f-1],e.a=d[f],void 0}var g=i.binarySearch(d,b,5),h=d[g-4],j=d[g-3],k=d[g-2],l=d[g-1],m=d[g],n=1-(b-m)/(d[g-5]-m);n=this.curves.getCurvePercent(g/5-1,n);var o=h+(d[g+1]-h)*n,p=j+(d[g+2]-j)*n,q=k+(d[g+3]-k)*n,r=l+(d[g+4]-l)*n;1>c?(e.r+=(o-e.r)*c,e.g+=(p-e.g)*c,e.b+=(q-e.b)*c,e.a+=(r-e.a)*c):(e.r=o,e.g=p,e.b=q,e.a=r)}}},i.AttachmentTimeline=function(a){this.curves=new i.Curves(a),this.frames=[],this.frames.length=a,this.attachmentNames=[],this.attachmentNames.length=a},i.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length},setFrame:function(a,b,c){this.frames[a]=b,this.attachmentNames[a]=c},apply:function(a,b){var c=this.frames;if(!(b<c[0])){var d;d=b>=c[c.length-1]?c.length-1:i.binarySearch(c,b,1)-1;var e=this.attachmentNames[d];a.slots[this.slotIndex].setAttachment(e?a.getAttachmentBySlotIndex(this.slotIndex,e):null)}}},i.SkeletonData=function(){this.bones=[],this.slots=[],this.skins=[],this.animations=[]},i.SkeletonData.prototype={defaultSkin:null,findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return slot[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSkin:function(a){for(var b=this.skins,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findAnimation:function(a){for(var b=this.animations,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null}},i.Skeleton=function(a){this.data=a,this.bones=[];for(var b=0,c=a.bones.length;c>b;b++){var d=a.bones[b],e=d.parent?this.bones[a.bones.indexOf(d.parent)]:null;this.bones.push(new i.Bone(d,e))}for(this.slots=[],this.drawOrder=[],b=0,c=a.slots.length;c>b;b++){var f=a.slots[b],g=this.bones[a.bones.indexOf(f.boneData)],h=new i.Slot(f,this,g);this.slots.push(h),this.drawOrder.push(h)}},i.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:!1,flipY:!1,updateWorldTransform:function(){for(var a=this.flipX,b=this.flipY,c=this.bones,d=0,e=c.length;e>d;d++)c[d].updateWorldTransform(a,b)},setToSetupPose:function(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()},setBonesToSetupPose:function(){for(var a=this.bones,b=0,c=a.length;c>b;b++)a[b].setToSetupPose()},setSlotsToSetupPose:function(){for(var a=this.slots,b=0,c=a.length;c>b;b++)a[b].setToSetupPose(b)},getRootBone:function(){return this.bones.length?this.bones[0]:null},findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},setSkinByName:function(a){var b=this.data.findSkin(a);if(!b)throw"Skin not found: "+a;this.setSkin(b)},setSkin:function(a){this.skin&&a&&a._attachAll(this,this.skin),this.skin=a},getAttachmentBySlotName:function(a,b){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a),b)},getAttachmentBySlotIndex:function(a,b){if(this.skin){var c=this.skin.getAttachment(a,b);if(c)return c}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(a,b):null},setAttachment:function(a,b){for(var c=this.slots,d=0,e=c.size;e>d;d++){var f=c[d];if(f.data.name==a){var g=null;if(b&&(g=this.getAttachment(d,b),null==g))throw"Attachment not found: "+b+", for slot: "+a;return f.setAttachment(g),void 0}}throw"Slot not found: "+a},update:function(a){time+=a}},i.AttachmentType={region:0},i.RegionAttachment=function(){this.offset=[],this.offset.length=8,this.uvs=[],this.uvs.length=8},i.RegionAttachment.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(a,b,c,d,e){var f=this.uvs;e?(f[2]=a,f[3]=d,f[4]=a,f[5]=b,f[6]=c,f[7]=b,f[0]=c,f[1]=d):(f[0]=a,f[1]=d,f[2]=a,f[3]=b,f[4]=c,f[5]=b,f[6]=c,f[7]=d)},updateOffset:function(){var a=this.width/this.regionOriginalWidth*this.scaleX,b=this.height/this.regionOriginalHeight*this.scaleY,c=-this.width/2*this.scaleX+this.regionOffsetX*a,d=-this.height/2*this.scaleY+this.regionOffsetY*b,e=c+this.regionWidth*a,f=d+this.regionHeight*b,g=this.rotation*Math.PI/180,h=Math.cos(g),i=Math.sin(g),j=c*h+this.x,k=c*i,l=d*h+this.y,m=d*i,n=e*h+this.x,o=e*i,p=f*h+this.y,q=f*i,r=this.offset;r[0]=j-m,r[1]=l+k,r[2]=j-q,r[3]=p+k,r[4]=n-q,r[5]=p+o,r[6]=n-m,r[7]=l+o},computeVertices:function(a,b,c,d){a+=c.worldX,b+=c.worldY;var e=c.m00,f=c.m01,g=c.m10,h=c.m11,i=this.offset;d[0]=i[0]*e+i[1]*f+a,d[1]=i[0]*g+i[1]*h+b,d[2]=i[2]*e+i[3]*f+a,d[3]=i[2]*g+i[3]*h+b,d[4]=i[4]*e+i[5]*f+a,d[5]=i[4]*g+i[5]*h+b,d[6]=i[6]*e+i[7]*f+a,d[7]=i[6]*g+i[7]*h+b}},i.AnimationStateData=function(a){this.skeletonData=a,this.animationToMixTime={}},i.AnimationStateData.prototype={defaultMix:0,setMixByName:function(a,b,c){var d=this.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;var e=this.skeletonData.findAnimation(b);if(!e)throw"Animation not found: "+b;this.setMix(d,e,c)},setMix:function(a,b,c){this.animationToMixTime[a.name+":"+b.name]=c},getMix:function(a,b){var c=this.animationToMixTime[a.name+":"+b.name];return c?c:this.defaultMix}},i.AnimationState=function(a){this.data=a,this.queue=[]},i.AnimationState.prototype={current:null,previous:null,currentTime:0,previousTime:0,currentLoop:!1,previousLoop:!1,mixTime:0,mixDuration:0,update:function(a){if(this.currentTime+=a,this.previousTime+=a,this.mixTime+=a,this.queue.length>0){var b=this.queue[0];this.currentTime>=b.delay&&(this._setAnimation(b.animation,b.loop),this.queue.shift())}},apply:function(a){if(this.current)if(this.previous){this.previous.apply(a,this.previousTime,this.previousLoop);var b=this.mixTime/this.mixDuration;b>=1&&(b=1,this.previous=null),this.current.mix(a,this.currentTime,this.currentLoop,b)}else this.current.apply(a,this.currentTime,this.currentLoop)},clearAnimation:function(){this.previous=null,this.current=null,this.queue.length=0},_setAnimation:function(a,b){this.previous=null,a&&this.current&&(this.mixDuration=this.data.getMix(this.current,a),this.mixDuration>0&&(this.mixTime=0,this.previous=this.current,this.previousTime=this.currentTime,this.previousLoop=this.currentLoop)),this.current=a,this.currentLoop=b,this.currentTime=0},setAnimationByName:function(a,b){var c=this.data.skeletonData.findAnimation(a);if(!c)throw"Animation not found: "+a;this.setAnimation(c,b)},setAnimation:function(a,b){this.queue.length=0,this._setAnimation(a,b)},addAnimationByName:function(a,b,c){var d=this.data.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;this.addAnimation(d,b,c)},addAnimation:function(a,b,c){var d={};if(d.animation=a,d.loop=b,!c||0>=c){var e=this.queue.length?this.queue[this.queue.length-1].animation:this.current;c=null!=e?e.duration-this.data.getMix(e,a)+(c||0):0}d.delay=c,this.queue.push(d)},isComplete:function(){return!this.current||this.currentTime>=this.current.duration}},i.SkeletonJson=function(a){this.attachmentLoader=a},i.SkeletonJson.prototype={scale:1,readSkeletonData:function(a){for(var b,c=new i.SkeletonData,d=a.bones,e=0,f=d.length;f>e;e++){var g=d[e],h=null;if(g.parent&&(h=c.findBone(g.parent),!h))throw"Parent bone not found: "+g.parent;b=new i.BoneData(g.name,h),b.length=(g.length||0)*this.scale,b.x=(g.x||0)*this.scale,b.y=(g.y||0)*this.scale,b.rotation=g.rotation||0,b.scaleX=g.scaleX||1,b.scaleY=g.scaleY||1,c.bones.push(b)}var j=a.slots;for(e=0,f=j.length;f>e;e++){var k=j[e];if(b=c.findBone(k.bone),!b)throw"Slot bone not found: "+k.bone;var l=new i.SlotData(k.name,b),m=k.color;m&&(l.r=i.SkeletonJson.toColor(m,0),l.g=i.SkeletonJson.toColor(m,1),l.b=i.SkeletonJson.toColor(m,2),l.a=i.SkeletonJson.toColor(m,3)),l.attachmentName=k.attachment,c.slots.push(l)}var n=a.skins;for(var o in n)if(n.hasOwnProperty(o)){var p=n[o],q=new i.Skin(o);for(var r in p)if(p.hasOwnProperty(r)){var s=c.findSlotIndex(r),t=p[r];for(var u in t)if(t.hasOwnProperty(u)){var v=this.readAttachment(q,u,t[u]);null!=v&&q.addAttachment(s,u,v)}}c.skins.push(q),"default"==q.name&&(c.defaultSkin=q)}var w=a.animations;for(var x in w)w.hasOwnProperty(x)&&this.readAnimation(x,w[x],c);return c},readAttachment:function(a,b,c){b=c.name||b;var d=i.AttachmentType[c.type||"region"];if(d==i.AttachmentType.region){var e=new i.RegionAttachment;return e.x=(c.x||0)*this.scale,e.y=(c.y||0)*this.scale,e.scaleX=c.scaleX||1,e.scaleY=c.scaleY||1,e.rotation=c.rotation||0,e.width=(c.width||32)*this.scale,e.height=(c.height||32)*this.scale,e.updateOffset(),e.rendererObject={},e.rendererObject.name=b,e.rendererObject.scale={},e.rendererObject.scale.x=e.scaleX,e.rendererObject.scale.y=e.scaleY,e.rendererObject.rotation=-e.rotation*Math.PI/180,e}throw"Unknown attachment type: "+d},readAnimation:function(a,b,c){var d,e,f,g,h,j,k,l=[],m=0,n=b.bones;for(var o in n)if(n.hasOwnProperty(o)){var p=c.findBoneIndex(o);if(-1==p)throw"Bone not found: "+o;var q=n[o];for(f in q)if(q.hasOwnProperty(f))if(h=q[f],"rotate"==f){for(e=new i.RotateTimeline(h.length),e.boneIndex=p,d=0,j=0,k=h.length;k>j;j++)g=h[j],e.setFrame(d,g.time,g.angle),i.SkeletonJson.readCurve(e,d,g),d++;l.push(e),m=Math.max(m,e.frames[2*e.getFrameCount()-2])}else{if("translate"!=f&&"scale"!=f)throw"Invalid timeline type for a bone: "+f+" ("+o+")";var r=1;for("scale"==f?e=new i.ScaleTimeline(h.length):(e=new i.TranslateTimeline(h.length),r=this.scale),e.boneIndex=p,d=0,j=0,k=h.length;k>j;j++){g=h[j];var s=(g.x||0)*r,t=(g.y||0)*r;e.setFrame(d,g.time,s,t),i.SkeletonJson.readCurve(e,d,g),d++}l.push(e),m=Math.max(m,e.frames[3*e.getFrameCount()-3])}}var u=b.slots;for(var v in u)if(u.hasOwnProperty(v)){var w=u[v],x=c.findSlotIndex(v);for(f in w)if(w.hasOwnProperty(f))if(h=w[f],"color"==f){for(e=new i.ColorTimeline(h.length),e.slotIndex=x,d=0,j=0,k=h.length;k>j;j++){g=h[j];var y=g.color,z=i.SkeletonJson.toColor(y,0),A=i.SkeletonJson.toColor(y,1),B=i.SkeletonJson.toColor(y,2),C=i.SkeletonJson.toColor(y,3);e.setFrame(d,g.time,z,A,B,C),i.SkeletonJson.readCurve(e,d,g),d++}l.push(e),m=Math.max(m,e.frames[5*e.getFrameCount()-5])}else{if("attachment"!=f)throw"Invalid timeline type for a slot: "+f+" ("+v+")";for(e=new i.AttachmentTimeline(h.length),e.slotIndex=x,d=0,j=0,k=h.length;k>j;j++)g=h[j],e.setFrame(d++,g.time,g.name);l.push(e),m=Math.max(m,e.frames[e.getFrameCount()-1])}}c.animations.push(new i.Animation(a,l,m))}},i.SkeletonJson.readCurve=function(a,b,c){var d=c.curve;d&&("stepped"==d?a.curves.setStepped(b):d instanceof Array&&a.curves.setCurve(b,d[0],d[1],d[2],d[3]))},i.SkeletonJson.toColor=function(a,b){if(8!=a.length)throw"Color hexidecimal length must be 8, recieved: "+a;return parseInt(a.substring(2*b,2),16)/255},i.Atlas=function(a,b){this.textureLoader=b,this.pages=[],this.regions=[];var c=new i.AtlasReader(a),d=[];d.length=4;for(var e=null;;){var f=c.readLine();if(null==f)break;if(f=c.trim(f),f.length)if(e){var g=new i.AtlasRegion;g.name=f,g.page=e,g.rotate="true"==c.readValue(),c.readTuple(d);var h=parseInt(d[0],10),j=parseInt(d[1],10);c.readTuple(d);var k=parseInt(d[0],10),l=parseInt(d[1],10);g.u=h/e.width,g.v=j/e.height,g.rotate?(g.u2=(h+l)/e.width,g.v2=(j+k)/e.height):(g.u2=(h+k)/e.width,g.v2=(j+l)/e.height),g.x=h,g.y=j,g.width=Math.abs(k),g.height=Math.abs(l),4==c.readTuple(d)&&(g.splits=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)],4==c.readTuple(d)&&(g.pads=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)],c.readTuple(d))),g.originalWidth=parseInt(d[0],10),g.originalHeight=parseInt(d[1],10),c.readTuple(d),g.offsetX=parseInt(d[0],10),g.offsetY=parseInt(d[1],10),g.index=parseInt(c.readValue(),10),this.regions.push(g)}else{e=new i.AtlasPage,e.name=f,e.format=i.Atlas.Format[c.readValue()],c.readTuple(d),e.minFilter=i.Atlas.TextureFilter[d[0]],e.magFilter=i.Atlas.TextureFilter[d[1]];var m=c.readValue();e.uWrap=i.Atlas.TextureWrap.clampToEdge,e.vWrap=i.Atlas.TextureWrap.clampToEdge,"x"==m?e.uWrap=i.Atlas.TextureWrap.repeat:"y"==m?e.vWrap=i.Atlas.TextureWrap.repeat:"xy"==m&&(e.uWrap=e.vWrap=i.Atlas.TextureWrap.repeat),b.load(e,f),this.pages.push(e)}else e=null}},i.Atlas.prototype={findRegion:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},dispose:function(){for(var a=this.pages,b=0,c=a.length;c>b;b++)this.textureLoader.unload(a[b].rendererObject)},updateUVs:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++){var e=b[c];e.page==a&&(e.u=e.x/a.width,e.v=e.y/a.height,e.rotate?(e.u2=(e.x+e.height)/a.width,e.v2=(e.y+e.width)/a.height):(e.u2=(e.x+e.width)/a.width,e.v2=(e.y+e.height)/a.height))}}},i.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6},i.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6},i.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2},i.AtlasPage=function(){},i.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0},i.AtlasRegion=function(){},i.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:!1,splits:null,pads:null},i.AtlasReader=function(a){this.lines=a.split(/\r\n|\r|\n/)},i.AtlasReader.prototype={index:0,trim:function(a){return a.replace(/^\s+|\s+$/g,"")},readLine:function(){return this.index>=this.lines.length?null:this.lines[this.index++]},readValue:function(){var a=this.readLine(),b=a.indexOf(":");if(-1==b)throw"Invalid line: "+a;return this.trim(a.substring(b+1))},readTuple:function(a){var b=this.readLine(),c=b.indexOf(":");if(-1==c)throw"Invalid line: "+b;for(var d=0,e=c+1;3>d;d++){var f=b.indexOf(",",e);if(-1==f){if(!d)throw"Invalid line: "+b;break}a[d]=this.trim(b.substr(e,f-e)),e=f+1}return a[d]=this.trim(b.substring(e)),d+1}},i.AtlasAttachmentLoader=function(a){this.atlas=a},i.AtlasAttachmentLoader.prototype={newAttachment:function(a,b,c){switch(b){case i.AttachmentType.region:var d=this.atlas.findRegion(c);if(!d)throw"Region not found in atlas: "+c+" ("+b+")";var e=new i.RegionAttachment(c);return e.rendererObject=d,e.setUVs(d.u,d.v,d.u2,d.v2,d.rotate),e.regionOffsetX=d.offsetX,e.regionOffsetY=d.offsetY,e.regionWidth=d.width,e.regionHeight=d.height,e.regionOriginalWidth=d.originalWidth,e.regionOriginalHeight=d.originalHeight,e}throw"Unknown attachment type: "+b}},i.Bone.yDown=!0,d.AnimCache={},d.Spine=function(a){if(d.DisplayObjectContainer.call(this),this.spineData=d.AnimCache[a],!this.spineData)throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: "+a);this.skeleton=new i.Skeleton(this.spineData),this.skeleton.updateWorldTransform(),this.stateData=new i.AnimationStateData(this.spineData),this.state=new i.AnimationState(this.stateData),this.slotContainers=[];for(var b=0,c=this.skeleton.drawOrder.length;c>b;b++){var e=this.skeleton.drawOrder[b],f=e.attachment,g=new d.DisplayObjectContainer;if(this.slotContainers.push(g),this.addChild(g),f instanceof i.RegionAttachment){var h=f.rendererObject.name,j=this.createSprite(e,f.rendererObject);e.currentSprite=j,e.currentSpriteName=h,g.addChild(j)}}},d.Spine.prototype=Object.create(d.DisplayObjectContainer.prototype),d.Spine.prototype.constructor=d.Spine,d.Spine.prototype.updateTransform=function(){this.lastTime=this.lastTime||Date.now();var a=.001*(Date.now()-this.lastTime);this.lastTime=Date.now(),this.state.update(a),this.state.apply(this.skeleton),this.skeleton.updateWorldTransform();for(var b=this.skeleton.drawOrder,c=0,e=b.length;e>c;c++){var f=b[c],g=f.attachment,h=this.slotContainers[c];if(g instanceof i.RegionAttachment){if(g.rendererObject&&(!f.currentSpriteName||f.currentSpriteName!=g.name)){var j=g.rendererObject.name;if(void 0!==f.currentSprite&&(f.currentSprite.visible=!1),f.sprites=f.sprites||{},void 0!==f.sprites[j])f.sprites[j].visible=!0;else{var k=this.createSprite(f,g.rendererObject);h.addChild(k)}f.currentSprite=f.sprites[j],f.currentSpriteName=j}h.visible=!0;var l=f.bone;h.position.x=l.worldX+g.x*l.m00+g.y*l.m01,h.position.y=l.worldY+g.x*l.m10+g.y*l.m11,h.scale.x=l.worldScaleX,h.scale.y=l.worldScaleY,h.rotation=-(f.bone.worldRotation*Math.PI/180)}else h.visible=!1}d.DisplayObjectContainer.prototype.updateTransform.call(this)},d.Spine.prototype.createSprite=function(a,b){var c=d.TextureCache[b.name]?b.name:b.name+".png",e=new d.Sprite(d.Texture.fromFrame(c));return e.scale=b.scale,e.rotation=b.rotation,e.anchor.x=e.anchor.y=.5,a.sprites=a.sprites||{},a.sprites[b.name]=e,e},d.BaseTextureCache={},d.texturesToUpdate=[],d.texturesToDestroy=[],d.BaseTextureCacheIdGenerator=0,d.BaseTexture=function(a,b){if(d.EventTarget.call(this),this.width=100,this.height=100,this.scaleMode=b||d.scaleModes.DEFAULT,this.hasLoaded=!1,this.source=a,this.id=d.BaseTextureCacheIdGenerator++,this._glTextures=[],a){if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height)this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,d.texturesToUpdate.push(this);else{var c=this;this.source.onload=function(){c.hasLoaded=!0,c.width=c.source.width,c.height=c.source.height,d.texturesToUpdate.push(c),c.dispatchEvent({type:"loaded",content:c})}}this.imageUrl=null,this._powerOf2=!1}},d.BaseTexture.prototype.constructor=d.BaseTexture,d.BaseTexture.prototype.destroy=function(){this.imageUrl&&(delete d.BaseTextureCache[this.imageUrl],this.imageUrl=null,this.source.src=null),this.source=null,d.texturesToDestroy.push(this)},d.BaseTexture.prototype.updateSourceImage=function(a){this.hasLoaded=!1,this.source.src=null,this.source.src=a},d.BaseTexture.fromImage=function(a,b,c){var e=d.BaseTextureCache[a];if(void 0===b&&-1===a.indexOf("data:")&&(b=!0),!e){var f=new Image;b&&(f.crossOrigin=""),f.src=a,e=new d.BaseTexture(f,c),e.imageUrl=a,d.BaseTextureCache[a]=e
}return e},d.BaseTexture.fromCanvas=function(a,b){a._pixiId||(a._pixiId="canvas_"+d.TextureCacheIdGenerator++);var c=d.BaseTextureCache[a._pixiId];return c||(c=new d.BaseTexture(a,b),d.BaseTextureCache[a._pixiId]=c),c},d.TextureCache={},d.FrameCache={},d.TextureCacheIdGenerator=0,d.Texture=function(a,b){if(d.EventTarget.call(this),b||(this.noFrame=!0,b=new d.Rectangle(0,0,1,1)),a instanceof d.Texture&&(a=a.baseTexture),this.baseTexture=a,this.frame=b,this.trim=null,this.scope=this,this._uvs=null,a.hasLoaded)this.noFrame&&(b=new d.Rectangle(0,0,a.width,a.height)),this.setFrame(b);else{var c=this;a.addEventListener("loaded",function(){c.onBaseTextureLoaded()})}},d.Texture.prototype.constructor=d.Texture,d.Texture.prototype.onBaseTextureLoaded=function(){var a=this.baseTexture;a.removeEventListener("loaded",this.onLoaded),this.noFrame&&(this.frame=new d.Rectangle(0,0,a.width,a.height)),this.setFrame(this.frame),this.scope.dispatchEvent({type:"update",content:this})},d.Texture.prototype.destroy=function(a){a&&this.baseTexture.destroy()},d.Texture.prototype.setFrame=function(a){if(this.frame=a,this.width=a.width,this.height=a.height,a.x+a.width>this.baseTexture.width||a.y+a.height>this.baseTexture.height)throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.updateFrame=!0,d.Texture.frameUpdates.push(this)},d.Texture.prototype._updateWebGLuvs=function(){this._uvs||(this._uvs=new d.TextureUvs);var a=this.frame,b=this.baseTexture.width,c=this.baseTexture.height;this._uvs.x0=a.x/b,this._uvs.y0=a.y/c,this._uvs.x1=(a.x+a.width)/b,this._uvs.y1=a.y/c,this._uvs.x2=(a.x+a.width)/b,this._uvs.y2=(a.y+a.height)/c,this._uvs.x3=a.x/b,this._uvs.y3=(a.y+a.height)/c},d.Texture.fromImage=function(a,b,c){var e=d.TextureCache[a];return e||(e=new d.Texture(d.BaseTexture.fromImage(a,b,c)),d.TextureCache[a]=e),e},d.Texture.fromFrame=function(a){var b=d.TextureCache[a];if(!b)throw new Error('The frameId "'+a+'" does not exist in the texture cache ');return b},d.Texture.fromCanvas=function(a,b){var c=d.BaseTexture.fromCanvas(a,b);return new d.Texture(c)},d.Texture.addTextureToCache=function(a,b){d.TextureCache[b]=a},d.Texture.removeTextureFromCache=function(a){var b=d.TextureCache[a];return delete d.TextureCache[a],delete d.BaseTextureCache[a],b},d.Texture.frameUpdates=[],d.TextureUvs=function(){this.x0=0,this.y0=0,this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.x3=0,this.y4=0},d.RenderTexture=function(a,b,c,e){if(d.EventTarget.call(this),this.width=a||100,this.height=b||100,this.frame=new d.Rectangle(0,0,this.width,this.height),this.baseTexture=new d.BaseTexture,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.baseTexture._glTextures=[],this.baseTexture.scaleMode=e||d.scaleModes.DEFAULT,this.baseTexture.hasLoaded=!0,this.renderer=c||d.defaultRenderer,this.renderer.type===d.WEBGL_RENDERER){var f=this.renderer.gl;this.textureBuffer=new d.FilterTexture(f,this.width,this.height,this.baseTexture.scaleMode),this.baseTexture._glTextures[f.id]=this.textureBuffer.texture,this.render=this.renderWebGL,this.projection=new d.Point(this.width/2,-this.height/2)}else this.render=this.renderCanvas,this.textureBuffer=new d.CanvasBuffer(this.width,this.height),this.baseTexture.source=this.textureBuffer.canvas;d.Texture.frameUpdates.push(this)},d.RenderTexture.prototype=Object.create(d.Texture.prototype),d.RenderTexture.prototype.constructor=d.RenderTexture,d.RenderTexture.prototype.resize=function(a,b){if(this.width=a,this.height=b,this.frame.width=this.width,this.frame.height=this.height,this.renderer.type===d.WEBGL_RENDERER){this.projection.x=this.width/2,this.projection.y=-this.height/2;var c=this.renderer.gl;c.bindTexture(c.TEXTURE_2D,this.baseTexture._glTextures[c.id]),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,this.width,this.height,0,c.RGBA,c.UNSIGNED_BYTE,null)}else this.textureBuffer.resize(this.width,this.height);d.Texture.frameUpdates.push(this)},d.RenderTexture.prototype.renderWebGL=function(a,b,c){var e=this.renderer.gl;e.colorMask(!0,!0,!0,!0),e.viewport(0,0,this.width,this.height),e.bindFramebuffer(e.FRAMEBUFFER,this.textureBuffer.frameBuffer),c&&this.textureBuffer.clear();var f=a.children,g=a.worldTransform;a.worldTransform=d.RenderTexture.tempMatrix,a.worldTransform.d=-1,a.worldTransform.ty=-2*this.projection.y,b&&(a.worldTransform.tx=b.x,a.worldTransform.ty-=b.y);for(var h=0,i=f.length;i>h;h++)f[h].updateTransform();d.WebGLRenderer.updateTextures(),this.renderer.renderDisplayObject(a,this.projection,this.textureBuffer.frameBuffer),a.worldTransform=g},d.RenderTexture.prototype.renderCanvas=function(a,b,c){var e=a.children,f=a.worldTransform;a.worldTransform=d.RenderTexture.tempMatrix,b&&(a.worldTransform.tx=b.x,a.worldTransform.ty=b.y);for(var g=0,h=e.length;h>g;g++)e[g].updateTransform();c&&this.textureBuffer.clear();var i=this.textureBuffer.context;this.renderer.renderDisplayObject(a,i),i.setTransform(1,0,0,1,0,0),a.worldTransform=f},d.RenderTexture.tempMatrix=new d.Matrix,d.AssetLoader=function(a,b){d.EventTarget.call(this),this.assetURLs=a,this.crossorigin=b,this.loadersByType={jpg:d.ImageLoader,jpeg:d.ImageLoader,png:d.ImageLoader,gif:d.ImageLoader,json:d.JsonLoader,atlas:d.AtlasLoader,anim:d.SpineLoader,xml:d.BitmapFontLoader,fnt:d.BitmapFontLoader}},d.AssetLoader.prototype.constructor=d.AssetLoader,d.AssetLoader.prototype._getDataType=function(a){var b="data:",c=a.slice(0,b.length).toLowerCase();if(c===b){var d=a.slice(b.length),e=d.indexOf(",");if(-1===e)return null;var f=d.slice(0,e).split(";")[0];return f&&"text/plain"!==f.toLowerCase()?f.split("/").pop().toLowerCase():"txt"}return null},d.AssetLoader.prototype.load=function(){function a(a){b.onAssetLoaded(a.content)}var b=this;this.loadCount=this.assetURLs.length;for(var c=0;c<this.assetURLs.length;c++){var d=this.assetURLs[c],e=this._getDataType(d);e||(e=d.split("?").shift().split(".").pop().toLowerCase());var f=this.loadersByType[e];if(!f)throw new Error(e+" is an unsupported file type");var g=new f(d,this.crossorigin);g.addEventListener("loaded",a),g.load()}},d.AssetLoader.prototype.onAssetLoaded=function(a){this.loadCount--,this.dispatchEvent({type:"onProgress",content:this,loader:a}),this.onProgress&&this.onProgress(a),this.loadCount||(this.dispatchEvent({type:"onComplete",content:this}),this.onComplete&&this.onComplete())},d.JsonLoader=function(a,b){d.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.loaded=!1},d.JsonLoader.prototype.constructor=d.JsonLoader,d.JsonLoader.prototype.load=function(){var a=this;window.XDomainRequest?(this.ajaxRequest=new window.XDomainRequest,this.ajaxRequest.timeout=3e3,this.ajaxRequest.onerror=function(){a.onError()},this.ajaxRequest.ontimeout=function(){a.onError()},this.ajaxRequest.onprogress=function(){}):this.ajaxRequest=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),this.ajaxRequest.onload=function(){a.onJSONLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.send()},d.JsonLoader.prototype.onJSONLoaded=function(){if(!this.ajaxRequest.responseText)return this.onError(),void 0;if(this.json=JSON.parse(this.ajaxRequest.responseText),this.json.frames){var a=this,b=this.baseUrl+this.json.meta.image,c=new d.ImageLoader(b,this.crossorigin),e=this.json.frames;this.texture=c.texture.baseTexture,c.addEventListener("loaded",function(){a.onLoaded()});for(var f in e){var g=e[f].frame;if(g&&(d.TextureCache[f]=new d.Texture(this.texture,{x:g.x,y:g.y,width:g.w,height:g.h}),e[f].trimmed)){var h=d.TextureCache[f],j=e[f].sourceSize,k=e[f].spriteSourceSize;h.trim=new d.Rectangle(k.x,k.y,j.w,j.h)}}c.load()}else if(this.json.bones){var l=new i.SkeletonJson,m=l.readSkeletonData(this.json);d.AnimCache[this.url]=m,this.onLoaded()}else this.onLoaded()},d.JsonLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},d.JsonLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},d.AtlasLoader=function(a,b){d.EventTarget.call(this),this.url=a,this.baseUrl=a.replace(/[^\/]*$/,""),this.crossorigin=b,this.loaded=!1},d.AtlasLoader.constructor=d.AtlasLoader,d.AtlasLoader.prototype.load=function(){this.ajaxRequest=new d.AjaxRequest,this.ajaxRequest.onreadystatechange=this.onAtlasLoaded.bind(this),this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/json"),this.ajaxRequest.send(null)},d.AtlasLoader.prototype.onAtlasLoaded=function(){if(4===this.ajaxRequest.readyState)if(200===this.ajaxRequest.status||-1===window.location.href.indexOf("http")){this.atlas={meta:{image:[]},frames:[]};var a=this.ajaxRequest.responseText.split(/\r?\n/),b=-3,c=0,e=null,f=!1,g=0,h=0,i=this.onLoaded.bind(this);for(g=0;g<a.length;g++)if(a[g]=a[g].replace(/^\s+|\s+$/g,""),""===a[g]&&(f=g+1),a[g].length>0){if(f===g)this.atlas.meta.image.push(a[g]),c=this.atlas.meta.image.length-1,this.atlas.frames.push({}),b=-3;else if(b>0)if(b%7===1)null!=e&&(this.atlas.frames[c][e.name]=e),e={name:a[g],frame:{}};else{var j=a[g].split(" ");if(b%7===3)e.frame.x=Number(j[1].replace(",","")),e.frame.y=Number(j[2]);else if(b%7===4)e.frame.w=Number(j[1].replace(",","")),e.frame.h=Number(j[2]);else if(b%7===5){var k={x:0,y:0,w:Number(j[1].replace(",","")),h:Number(j[2])};k.w>e.frame.w||k.h>e.frame.h?(e.trimmed=!0,e.realSize=k):e.trimmed=!1}}b++}if(null!=e&&(this.atlas.frames[c][e.name]=e),this.atlas.meta.image.length>0){for(this.images=[],h=0;h<this.atlas.meta.image.length;h++){var l=this.baseUrl+this.atlas.meta.image[h],m=this.atlas.frames[h];this.images.push(new d.ImageLoader(l,this.crossorigin));for(g in m){var n=m[g].frame;n&&(d.TextureCache[g]=new d.Texture(this.images[h].texture.baseTexture,{x:n.x,y:n.y,width:n.w,height:n.h}),m[g].trimmed&&(d.TextureCache[g].realSize=m[g].realSize,d.TextureCache[g].trim.x=0,d.TextureCache[g].trim.y=0))}}for(this.currentImageId=0,h=0;h<this.images.length;h++)this.images[h].addEventListener("loaded",i);this.images[this.currentImageId].load()}else this.onLoaded()}else this.onError()},d.AtlasLoader.prototype.onLoaded=function(){this.images.length-1>this.currentImageId?(this.currentImageId++,this.images[this.currentImageId].load()):(this.loaded=!0,this.dispatchEvent({type:"loaded",content:this}))},d.AtlasLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},d.SpriteSheetLoader=function(a,b){d.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null,this.frames={}},d.SpriteSheetLoader.prototype.constructor=d.SpriteSheetLoader,d.SpriteSheetLoader.prototype.load=function(){var a=this,b=new d.JsonLoader(this.url,this.crossorigin);b.addEventListener("loaded",function(b){a.json=b.content.json,a.onLoaded()}),b.load()},d.SpriteSheetLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},d.ImageLoader=function(a,b){d.EventTarget.call(this),this.texture=d.Texture.fromImage(a,b),this.frames=[]},d.ImageLoader.prototype.constructor=d.ImageLoader,d.ImageLoader.prototype.load=function(){if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var a=this;this.texture.baseTexture.addEventListener("loaded",function(){a.onLoaded()})}},d.ImageLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},d.ImageLoader.prototype.loadFramedSpriteSheet=function(a,b,c){this.frames=[];for(var e=Math.floor(this.texture.width/a),f=Math.floor(this.texture.height/b),g=0,h=0;f>h;h++)for(var i=0;e>i;i++,g++){var j=new d.Texture(this.texture,{x:i*a,y:h*b,width:a,height:b});this.frames.push(j),c&&(d.TextureCache[c+"-"+g]=j)}if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var k=this;this.texture.baseTexture.addEventListener("loaded",function(){k.onLoaded()})}},d.BitmapFontLoader=function(a,b){d.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null},d.BitmapFontLoader.prototype.constructor=d.BitmapFontLoader,d.BitmapFontLoader.prototype.load=function(){this.ajaxRequest=new d.AjaxRequest;var a=this;this.ajaxRequest.onreadystatechange=function(){a.onXMLLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/xml"),this.ajaxRequest.send(null)},d.BitmapFontLoader.prototype.onXMLLoaded=function(){if(4===this.ajaxRequest.readyState&&(200===this.ajaxRequest.status||-1===window.location.protocol.indexOf("http"))){var a=this.ajaxRequest.responseXML;if(!a||/MSIE 9/i.test(navigator.userAgent)||navigator.isCocoonJS)if("function"==typeof window.DOMParser){var b=new DOMParser;a=b.parseFromString(this.ajaxRequest.responseText,"text/xml")}else{var c=document.createElement("div");c.innerHTML=this.ajaxRequest.responseText,a=c}var e=this.baseUrl+a.getElementsByTagName("page")[0].getAttribute("file"),f=new d.ImageLoader(e,this.crossorigin);this.texture=f.texture.baseTexture;var g={},h=a.getElementsByTagName("info")[0],i=a.getElementsByTagName("common")[0];g.font=h.getAttribute("face"),g.size=parseInt(h.getAttribute("size"),10),g.lineHeight=parseInt(i.getAttribute("lineHeight"),10),g.chars={};for(var j=a.getElementsByTagName("char"),k=0;k<j.length;k++){var l=parseInt(j[k].getAttribute("id"),10),m=new d.Rectangle(parseInt(j[k].getAttribute("x"),10),parseInt(j[k].getAttribute("y"),10),parseInt(j[k].getAttribute("width"),10),parseInt(j[k].getAttribute("height"),10));g.chars[l]={xOffset:parseInt(j[k].getAttribute("xoffset"),10),yOffset:parseInt(j[k].getAttribute("yoffset"),10),xAdvance:parseInt(j[k].getAttribute("xadvance"),10),kerning:{},texture:d.TextureCache[l]=new d.Texture(this.texture,m)}}var n=a.getElementsByTagName("kerning");for(k=0;k<n.length;k++){var o=parseInt(n[k].getAttribute("first"),10),p=parseInt(n[k].getAttribute("second"),10),q=parseInt(n[k].getAttribute("amount"),10);g.chars[p].kerning[o]=q}d.BitmapText.fonts[g.font]=g;var r=this;f.addEventListener("loaded",function(){r.onLoaded()}),f.load()}},d.BitmapFontLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},d.SpineLoader=function(a,b){d.EventTarget.call(this),this.url=a,this.crossorigin=b,this.loaded=!1},d.SpineLoader.prototype.constructor=d.SpineLoader,d.SpineLoader.prototype.load=function(){var a=this,b=new d.JsonLoader(this.url,this.crossorigin);b.addEventListener("loaded",function(b){a.json=b.content.json,a.onLoaded()}),b.load()},d.SpineLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},d.AbstractFilter=function(a,b){this.passes=[this],this.shaders=[],this.dirty=!0,this.padding=0,this.uniforms=b||{},this.fragmentSrc=a||[]},d.AlphaMaskFilter=function(a){d.AbstractFilter.call(this),this.passes=[this],a.baseTexture._powerOf2=!0,this.uniforms={mask:{type:"sampler2D",value:a},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}},a.baseTexture.hasLoaded?(this.uniforms.mask.value.x=a.width,this.uniforms.mask.value.y=a.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),a.baseTexture.on("loaded",this.boundLoadedFunction)),this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D mask;","uniform sampler2D uSampler;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   mapCords *= dimensions.xy / mapDimensions;","   vec4 original =  texture2D(uSampler, vTextureCoord);","   float maskAlpha =  texture2D(mask, mapCords).r;","   original *= maskAlpha;","   gl_FragColor =  original;","}"]},d.AlphaMaskFilter.prototype=Object.create(d.AbstractFilter.prototype),d.AlphaMaskFilter.prototype.constructor=d.AlphaMaskFilter,d.AlphaMaskFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.mask.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.mask.value.height,this.uniforms.mask.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(d.AlphaMaskFilter.prototype,"map",{get:function(){return this.uniforms.mask.value},set:function(a){this.uniforms.mask.value=a}}),d.ColorMatrixFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={matrix:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform mat4 matrix;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;","}"]},d.ColorMatrixFilter.prototype=Object.create(d.AbstractFilter.prototype),d.ColorMatrixFilter.prototype.constructor=d.ColorMatrixFilter,Object.defineProperty(d.ColorMatrixFilter.prototype,"matrix",{get:function(){return this.uniforms.matrix.value},set:function(a){this.uniforms.matrix.value=a}}),d.GrayFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={gray:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float gray;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);","}"]},d.GrayFilter.prototype=Object.create(d.AbstractFilter.prototype),d.GrayFilter.prototype.constructor=d.GrayFilter,Object.defineProperty(d.GrayFilter.prototype,"gray",{get:function(){return this.uniforms.gray.value},set:function(a){this.uniforms.gray.value=a}}),d.DisplacementFilter=function(a){d.AbstractFilter.call(this),this.passes=[this],a.baseTexture._powerOf2=!0,this.uniforms={displacementMap:{type:"sampler2D",value:a},scale:{type:"2f",value:{x:30,y:30}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}},a.baseTexture.hasLoaded?(this.uniforms.mapDimensions.value.x=a.width,this.uniforms.mapDimensions.value.y=a.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),a.baseTexture.on("loaded",this.boundLoadedFunction)),this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D displacementMap;","uniform sampler2D uSampler;","uniform vec2 scale;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   vec2 matSample = texture2D(displacementMap, mapCords).xy;","   matSample -= 0.5;","   matSample *= scale;","   matSample /= mapDimensions;","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);","   vec2 cord = vTextureCoord;","}"]},d.DisplacementFilter.prototype=Object.create(d.AbstractFilter.prototype),d.DisplacementFilter.prototype.constructor=d.DisplacementFilter,d.DisplacementFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height,this.uniforms.displacementMap.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(d.DisplacementFilter.prototype,"map",{get:function(){return this.uniforms.displacementMap.value},set:function(a){this.uniforms.displacementMap.value=a}}),Object.defineProperty(d.DisplacementFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(a){this.uniforms.scale.value=a}}),Object.defineProperty(d.DisplacementFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(a){this.uniforms.offset.value=a}}),d.PixelateFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:0},dimensions:{type:"4fv",value:new Float32Array([1e4,100,10,10])},pixelSize:{type:"2f",value:{x:10,y:10}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 testDim;","uniform vec4 dimensions;","uniform vec2 pixelSize;","uniform sampler2D uSampler;","void main(void) {","   vec2 coord = vTextureCoord;","   vec2 size = dimensions.xy/pixelSize;","   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;","   gl_FragColor = texture2D(uSampler, color);","}"]},d.PixelateFilter.prototype=Object.create(d.AbstractFilter.prototype),d.PixelateFilter.prototype.constructor=d.PixelateFilter,Object.defineProperty(d.PixelateFilter.prototype,"size",{get:function(){return this.uniforms.pixelSize.value},set:function(a){this.dirty=!0,this.uniforms.pixelSize.value=a}}),d.BlurXFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;","   gl_FragColor = sum;","}"]},d.BlurXFilter.prototype=Object.create(d.AbstractFilter.prototype),d.BlurXFilter.prototype.constructor=d.BlurXFilter,Object.defineProperty(d.BlurXFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.dirty=!0,this.uniforms.blur.value=1/7e3*a}}),d.BlurYFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;","   gl_FragColor = sum;","}"]},d.BlurYFilter.prototype=Object.create(d.AbstractFilter.prototype),d.BlurYFilter.prototype.constructor=d.BlurYFilter,Object.defineProperty(d.BlurYFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),d.BlurFilter=function(){this.blurXFilter=new d.BlurXFilter,this.blurYFilter=new d.BlurYFilter,this.passes=[this.blurXFilter,this.blurYFilter]},Object.defineProperty(d.BlurFilter.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(a){this.blurXFilter.blur=this.blurYFilter.blur=a}}),Object.defineProperty(d.BlurFilter.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(a){this.blurXFilter.blur=a}}),Object.defineProperty(d.BlurFilter.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(a){this.blurYFilter.blur=a}}),d.InvertFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);","}"]},d.InvertFilter.prototype=Object.create(d.AbstractFilter.prototype),d.InvertFilter.prototype.constructor=d.InvertFilter,Object.defineProperty(d.InvertFilter.prototype,"invert",{get:function(){return this.uniforms.invert.value},set:function(a){this.uniforms.invert.value=a}}),d.SepiaFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={sepia:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float sepia;","uniform sampler2D uSampler;","const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);","}"]},d.SepiaFilter.prototype=Object.create(d.AbstractFilter.prototype),d.SepiaFilter.prototype.constructor=d.SepiaFilter,Object.defineProperty(d.SepiaFilter.prototype,"sepia",{get:function(){return this.uniforms.sepia.value},set:function(a){this.uniforms.sepia.value=a}}),d.TwistFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={radius:{type:"1f",value:.5},angle:{type:"1f",value:5},offset:{type:"2f",value:{x:.5,y:.5}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float radius;","uniform float angle;","uniform vec2 offset;","void main(void) {","   vec2 coord = vTextureCoord - offset;","   float distance = length(coord);","   if (distance < radius) {","       float ratio = (radius - distance) / radius;","       float angleMod = ratio * ratio * angle;","       float s = sin(angleMod);","       float c = cos(angleMod);","       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);","   }","   gl_FragColor = texture2D(uSampler, coord+offset);","}"]},d.TwistFilter.prototype=Object.create(d.AbstractFilter.prototype),d.TwistFilter.prototype.constructor=d.TwistFilter,Object.defineProperty(d.TwistFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(a){this.dirty=!0,this.uniforms.offset.value=a}}),Object.defineProperty(d.TwistFilter.prototype,"radius",{get:function(){return this.uniforms.radius.value},set:function(a){this.dirty=!0,this.uniforms.radius.value=a}}),Object.defineProperty(d.TwistFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(a){this.dirty=!0,this.uniforms.angle.value=a}}),d.ColorStepFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={step:{type:"1f",value:5}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float step;","void main(void) {","   vec4 color = texture2D(uSampler, vTextureCoord);","   color = floor(color * step) / step;","   gl_FragColor = color;","}"]},d.ColorStepFilter.prototype=Object.create(d.AbstractFilter.prototype),d.ColorStepFilter.prototype.constructor=d.ColorStepFilter,Object.defineProperty(d.ColorStepFilter.prototype,"step",{get:function(){return this.uniforms.step.value},set:function(a){this.uniforms.step.value=a}}),d.DotScreenFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float angle;","uniform float scale;","float pattern() {","   float s = sin(angle), c = cos(angle);","   vec2 tex = vTextureCoord * dimensions.xy;","   vec2 point = vec2(","       c * tex.x - s * tex.y,","       s * tex.x + c * tex.y","   ) * scale;","   return (sin(point.x) * sin(point.y)) * 4.0;","}","void main() {","   vec4 color = texture2D(uSampler, vTextureCoord);","   float average = (color.r + color.g + color.b) / 3.0;","   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);","}"]},d.DotScreenFilter.prototype=Object.create(d.AbstractFilter.prototype),d.DotScreenFilter.prototype.constructor=d.DotScreenFilter,Object.defineProperty(d.DotScreenFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(a){this.dirty=!0,this.uniforms.scale.value=a}}),Object.defineProperty(d.DotScreenFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(a){this.dirty=!0,this.uniforms.angle.value=a}}),d.CrossHatchFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);","    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);","    if (lum < 1.00) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.75) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.50) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.3) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","}"]},d.CrossHatchFilter.prototype=Object.create(d.AbstractFilter.prototype),d.CrossHatchFilter.prototype.constructor=d.BlurYFilter,Object.defineProperty(d.CrossHatchFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),d.RGBSplitFilter=function(){d.AbstractFilter.call(this),this.passes=[this],this.uniforms={red:{type:"2f",value:{x:20,y:20}},green:{type:"2f",value:{x:-20,y:20}},blue:{type:"2f",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 red;","uniform vec2 green;","uniform vec2 blue;","uniform vec4 dimensions;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;","   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;","   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;","   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;","}"]},d.RGBSplitFilter.prototype=Object.create(d.AbstractFilter.prototype),d.RGBSplitFilter.prototype.constructor=d.RGBSplitFilter,Object.defineProperty(d.RGBSplitFilter.prototype,"angle",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=d),exports.PIXI=d):"undefined"!=typeof define&&define.amd?define(d):c.PIXI=d
}).call(this);
/*** <End:pixi LoadJs:"components/pixi/bin/pixi.js"> ***/
/*** <End:pixi> ***/







/*** <Start:monaca-core-utils> ***/
/*** <Start:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/**
 * Monaca Core Utility Library
 * This library requires cordova.js
 *
 * @version 2.0.4
 * @author  Asial Corporation
 */
window.monaca = window.monaca || {};

(function() {
    /*
     * monaca api queue.
     */
    monaca.apiQueue = monaca.apiQueue || {};
    monaca.apiQueue.paramsArray = [];
    monaca.apiQueue.exec = function(a,b,c,d,e){
        if (!monaca.isDeviceReady) {
            monaca.apiQueue.paramsArray.push([a,b,c,d,e]);
        } else {
            window.cordova.exec(a,b,c,d,e);
        }
    };
    monaca.apiQueue.next = function(){
        var params = monaca.apiQueue.paramsArray.shift();
        if (params) {
            window.cordova.exec(
                function(r) {
                  if (typeof params[0] === 'function') params[0](r); 
                  monaca.apiQueue.next();
                },
                function(r) {
                  if (typeof params[1] === 'function') params[1](r); 
                  monaca.apiQueue.next();
                },
                params[2],
                params[3],
                params[4]
            );
        }
    };

    monaca.isDeviceReady = monaca.isDeviceReady || false;
    document.addEventListener('deviceready', function(){
        window.monaca.isDeviceReady = true;
        monaca.apiQueue.next();
    }, false);

    /**
     * Check User-Agent
     */
    var isAndroid = !!(navigator.userAgent.match(/Android/i));
    var isIOS     = !!(navigator.userAgent.match(/iPhone|iPad|iPod/i));
    monaca.isAndroid = isAndroid;
    monaca.isIOS     = isIOS;

    /**
     * Obtain style property
     */
    monaca.retrieveUIStyle = function() {
        var argsArray = [].slice.apply(arguments);
        monaca.apiQueue.exec(arguments[arguments.length-1], null, "mobi.monaca.nativecomponent", "retrieve", argsArray);
    };

    /**
     * Update style property
     */
    monaca.updateUIStyle = function(id, name, value) {
        if (typeof id == "string") {
            var argsArray = [].slice.apply(arguments);
            monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", argsArray);
        } else {
            for (var i = 0; i < id.length; i++) {
                monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", [id[i], name, value]);
            }
        }
    };
    
    if (isAndroid) {
        monaca.retrieveUIStyle = function(id, name, success, failure) {
            monaca.apiQueue.exec(
                function(style) { success(style[name]); } || function() { }, 
                failure || function() { }, 
                "mobi.monaca.nativecomponent",
                "retrieve", 
                [id]
            );
        };
            
        monaca.updateUIStyle = function(id, name, value, success, failure) {
            var style = {};
            style[name] = value;
            
            monaca.apiQueue.exec(
                success || function() { }, 
                failure || function() { }, 
                "mobi.monaca.nativecomponent",
                "update", 
                [id, style]
            );
        };
    }

    /**
     * Spinner handling
     */
    monaca.showSpinner = function (options) {
        options = options || {};
        var src = options.src ? options.src : null;
        var frames = options.frames != null ? options.frames : null;
        var interval = options.interval != null ? options.interval : null;
        var backgroundColor = options.backgroundColor ? options.backgroundColor : null;
        var backgroundOpacity = options.backgroundOpacity != null ? options.backgroundOpacity : null;
        var title = options.title ? options.title : null;
        var titleColor = options.titleColor ? options.titleColor : null;
        var titleFontScale = options.titleFontScale != null ? options.titleFontScale : null;
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showSpinner', [ src, frames, interval, backgroundColor, backgroundOpacity, title, titleColor, titleFontScale, null ]);
    };

    monaca.hideSpinner = function(){
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideSpinner', []);
    };

    monaca.updateSpinnerTitle = function(newTitle){
        if (!newTitle) newTitle = "";
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'updateSpinnerTitle', [ newTitle ]);
    };

    var transitionPluginName = "Transit";
    
    /**
     * Open new page.
     */
    monaca.pushPage = function(path, options, param) {
        options = options || {};
        var animation = null;
        switch (options.animation) {
        case "lift":
          animation = "modal"; break;
        case "slide":
        case "slideLeft":
          animation = "push"; break;
        case "slideRight":
          animation = "slideRight"; break;
        default:
          animation = "push";
        }
        monaca.apiQueue.exec(null, null, transitionPluginName, animation, [path, options, param]);
    };
    /**
     * Close current page.
     */
    monaca.popPage = function(options) {
        options = options || {};
        var name = options.animation == 'lift' ? 'dismiss' : 'pop';
        monaca.apiQueue.exec(null, null, transitionPluginName, name, [options]);
    };

    /**
     * Open in browser.
     */
    monaca.invokeBrowser = function(url) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "browse", [url]);
    };

    /** 
     * Load in current page.
     */
    monaca.load = function(path, options, param) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "link", [path, options, param]);
    };

    /**
     * return to top page.
     */
    monaca.home = function(options) {
        options = options || {};
        monaca.apiQueue.exec(null, null, transitionPluginName, "home", [options]);
    };

    /**
     * Clear stack
     */
    monaca.clearPageStack = function(clearAll) {
        clearAll = clearAll || false;
        monaca.apiQueue.exec(null, null, transitionPluginName, "clearPageStack", [clearAll]);
    };


    /**
     * Console API from independent PhoneGap.
     */
    window.monaca.console = window.monaca.console || {};

    /**
     * base method for send log.
     */
    monaca.console.sendLog = function(level, url, line, char, arguments) {
        var message;
        for (var i=0; i<arguments.length; i++){
            if (typeof arguments[i] == "string") {
                message = arguments[i];
            } else {
                message = JSON.stringify(arguments[i]);
            }

            if (isIOS) {
                var head = message.substr(0, 5);
                if (window.monaca.isDeviceReady !== true || (head != 'ERROR' && head != 'WARN:')) {
                    var xhr = new XMLHttpRequest();
                    var path = "monaca://log?level=" + encodeURIComponent(level) + "&message=" + encodeURIComponent(message);
                    xhr.open("GET", path);
                    xhr.send();
                }
            } else {
                window.console[level](message);
            }
        }
    }

    /**
     * monaca console methods
     */
    var methods = ["debug", "info", "log", "warn", "error"];
    for (var i=0; i<methods.length; i++) {
        var method = methods[i];
        monaca.console[method] = function(method) {
            return function() {
                monaca.console.sendLog(method, null, null, null, arguments);
            };
        }(method);
    }
    
    /** Replace window.console if iOS **/
    if (isIOS) {
      window.console = window.monaca.console;
    }
    /* Comment out for now
    window.onerror = function (desc, page, line, char) {
      monaca.console.sendLog("error", page, line, char, [desc]);
    };
    */

    window.monaca.splashScreen = window.monaca.splashScreen || {};
    var splashScreenPluginName = "MonacaSplashScreen";

    /**
     * hide SplashScreen.
     */
    monaca.splashScreen.hide = function() {
        if (isAndroid) {
            monaca.apiQueue.exec(null, null, splashScreenPluginName, "hide", []);
        } else {
            navigator.splashscreen.hide();
        }
    };

    // Set monaca.baseUrl
    if (typeof location.href !== "string") {
        console.warn("Cannot find base url");
        monaca.baseUrl = null;
    } else {
        monaca.baseUrl = location.href.split("/www/")[0] + "/www/";
    }

    /**
     * Get device ID
     */
    monaca.getDeviceId = function(callback) {
        monaca.apiQueue.exec(function(result) { callback(result.deviceId); }, null, "Monaca", "getRuntimeConfiguration", []);
    };

})();

/**
 * iOS Status Bar Plugin
 *
 * @author Asial Corporation
 * @date   2014/1/15
 */
window.StatusBar = window.StatusBar || {};

(function() {

  /*
    hideStatusBar
    support : iOS6,iOS7
  */
  StatusBar.hideStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideStatusBar', []);
  }

  /*
    showStatusBar
    support : iOS6,iOS7
  */
  StatusBar.showStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showStatusBar', []);
  }

  /* 
    statusBarStyleDefault
    support : iOS6,iOS7
  */
  StatusBar.statusBarStyleDefault = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleDefault', []);
  }

  /* 
    statusBarStyleLightContent
    support : iOS7
  */
  StatusBar.statusBarStyleLightContent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleLightContent', []);
  }

  /* 
    statusBarStyleBlackOpaque
    support : iOS6
  */
  StatusBar.statusBarStyleBlackOpaque = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackOpaque', []);
  }

  /* 
    statusBarStyleBlackTranslucent
    support : iOS6
  */
  StatusBar.statusBarStyleBlackTranslucent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackTranslucent', []);
  }

})();

/**
 * Monaca Cloud Functions
 *  Version 1.5.0
 *
 * @author Masahiro TANAKA <info@monaca.mobi>
 * @date   2013/03/17
 */
window.monaca = window.monaca || {};
window.monaca.cloud = window.monaca.cloud || {};

(function() {
    /**
     * Push Notification
     */
    monaca.cloud.Push = {};
    monaca.cloud.Push.callback = null;
    monaca.cloud.Push.callbackData = null;

    monaca.cloud.Push.send = function(data) {
        if (typeof monaca.cloud.Push.callback === "function") {
            monaca.cloud.Push.callback(data);
        } else {
            monaca.cloud.Push.callbackData = data;
        }
    };
    monaca.cloud.Push.setHandler = function(fn) {
        if (typeof fn !== "function") {
            console.warn("Push callback must be a function");
        } else {
            monaca.cloud.Push.callback = fn;
            if (monaca.cloud.Push.callbackData) {
                monaca.cloud.Push.callback(monaca.cloud.Push.callbackData);
                monaca.cloud.Push.callbackData = null;
            }
        }
    }; 
    
})();


/*
 * cloud
 */
(function(root) {
  var original$ = root.$;
  var originalZepto = root.Zepto;

  /* Zepto 1.1.3 - zepto event ajax deferred callbacks - zeptojs.com/license */
  var Zepto=function(){function k(t){return null==t?String(t):j[T.call(t)]||"object"}function $(t){return"function"==k(t)}function L(t){return null!=t&&t==t.window}function D(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function F(t){return"object"==k(t)}function Z(t){return F(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function R(t){return s.call(t,function(t){return null!=t})}function _(t){return t.length>0?n.fn.concat.apply([],t):t}function q(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function W(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function z(t,e){return"number"!=typeof e||c[q(t)]?e:e+"px"}function H(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function I(n,i,r){for(e in i)r&&(Z(i[e])||A(i[e]))?(Z(i[e])&&!Z(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),I(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return $(e)?e.call(t,n,i):e}function U(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function X(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},T=j.toString,S={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),Z(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}else{if($(e))return n(a).ready(e);if(S.isZ(e))return e;if(A(e))r=R(e);else if(F(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){I(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return D(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=k,n.isFunction=$,n.isWindow=L,n.isArray=A,n.isPlainObject=Z,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return _(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return $(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if($(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&$(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return F(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!F(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!F(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!D(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!D(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(N(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=H(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(F(n))for(e in n)U(this,e,n[e]);else U(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&U(this,t)})},prop:function(e,n){return e=P[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=J(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?Y(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=J(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==k(t))i||0===i?a=q(t)+":"+z(t,i):this.each(function(){this.style.removeProperty(q(t))});else for(e in t)t[e]||0===t[e]?a+=q(e)+":"+z(e,t[e])+";":this.each(function(){this.style.removeProperty(q(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(X(t))},W(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=X(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&X(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?X(this,""):(i=X(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(W(t)," ")}),void X(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,X(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?L(s)?s["inner"+i]:D(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=k(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,a),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=Y,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(T(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=T(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=w(n.url,"_="+Date.now()));var s=n.dataType,a=/\?.+=\?/.test(n.url);if("jsonp"==s||a)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var T="async"in n?n.async:!0;d.open(n.type,n.url,T,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n(function(n){t.each(i,function(i,r){var a=t.isFunction(e[i])&&e[i];s[r[1]](function(){var e=a&&a.apply(this,arguments);if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,s=a?[e]:arguments;n[r[0]+"With"](i,s)}})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),e&&e.call(s,s),s}var e=Array.prototype.slice;t.when=function(i){var f,c,l,r=e.call(arguments),o=r.length,s=0,a=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===a?i:n(),h=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--a||u.resolveWith(n,i)}};if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);o>s;++s)r[s]&&t.isFunction(r[s].promise)?r[s].promise().done(h(s,l,r)).fail(u.reject).progress(h(s,c,f)):--a;return a||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,s,a,u=[],f=!e.once&&[],c=function(t){for(n=e.memory&&t,i=!0,a=o||0,o=0,s=u.length,r=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l={add:function(){if(u){var i=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),r?s=u.length:n&&(o=i,c(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(s>=i&&--s,a>=i&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=f=n=void 0,this},disabled:function(){return!u},lock:function(){return f=void 0,n||l.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l}}(Zepto);

  root.$ = original$;
  root.Zepto = originalZepto;
  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};

  monaca.cloud.timeout = 30000;
  monaca.cloud.url = '%%%CLOUD_HOST%%%';
  monaca.cloud.backendId = '%%%BACKEND_ID%%%';
  monaca.cloud.apiKey = '%%%BACKEND_API_KEY%%%';
  monaca.cloud.deviceId = null;
  monaca.cloud.postQueue = [];

  /**
   * @property {jQuery} .
   */
  monaca.cloud.$ = Zepto;

  var MonacaCloudError = (function() {
    function MonacaCloudError(code, message, data) {
      if (typeof data === "undefined") {
        data = {};
      }
      this.code = code;
      this.message = message;
      this.data = data;
    }
    return MonacaCloudError;
  })();

  /**
   * @class
   */
  monaca.cloud.Error = function(code, message, data) {
    return new MonacaCloudError(code, message, data);
  };

  /**
   * @param {Number} msec .
   */
  monaca.cloud.setTimeout = function(msec) {
    this.timeout = msec;
  };

  // Get device id
  document.addEventListener("deviceready", function() {

    cordova.exec(function(result) {
        monaca.cloud.deviceId = new String(result.deviceId);
        monaca.cloud.url = new String(result.url);
        monaca.cloud.backendId = new String(result.backendId);
        monaca.cloud.apiKey = new String(result.apiKey);

        // execute and clear postQueue
        for (var i = 0; i < monaca.cloud.postQueue.length; i++) {
          monaca.cloud._doPost.apply(monaca.cloud, monaca.cloud.postQueue[i]);
        }
        monaca.cloud.postQueue = [];
      }, function(error) {
        console.error(error);
      },

      "Monaca",
      "getRuntimeConfiguration", []
    );

  }, false);

  // Others
  monaca.cloud._post = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    if (monaca.cloud.deviceId == null) {
      monaca.cloud.postQueue.push([method, params, dfd, ajaxOptions, beforeSuccess]);
    } else {
      monaca.cloud._doPost(method, params, dfd, ajaxOptions, beforeSuccess);
    }
  };

  monaca.cloud._doPost = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    var $ = monaca.cloud.$;

    if (typeof(ajaxOptions) === 'undefined') ajaxOptions = {};
    if ((typeof(method) === 'undefined') && (typeof(params) === 'undefined')) {
      throw new Error('Invalid arguments');
    }

    params['__api_key'] = monaca.cloud.apiKey;
    params['__device'] = monaca.cloud.deviceId;
    var sid = monaca.cloud._getSessionId();
    if (sid.length > 0) {
      params['__session'] = sid;
    }
    var data = JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: '1'
    });

    var o = $.extend(true, {
      url: this.url + this.backendId,
      data: data,
      dataType: 'json',
      type: 'POST',
      timeout: this.timeout,
      success: function(jsonResponse, status, xhr) {
        var sessionHeader = xhr.getResponseHeader('X-Set-Monaca-Cloud-Session');
        if (sessionHeader) {
          monaca.cloud._setSessionId(sessionHeader);
        }

        if (typeof(jsonResponse.error) !== 'undefined') {
          // has error code
          dfd.reject(jsonResponse.error);
        } else {
          // success
          if (typeof(jsonResponse.result.loginToken) !== 'undefined') {
            localStorage.monacaCloudLoginToken = jsonResponse.result.loginToken;
          }
          if (typeof(beforeSuccess) !== 'undefined') {
            beforeSuccess(jsonResponse, status, xhr, dfd);
          }
          dfd.resolve(jsonResponse.result);
        }
      },
      error: function(xhr, status) {
        switch (status) {
          case 'timeout':
            var err = monaca.cloud.Error(-11, 'Connection timeout');
            break;
          case 'parsererror':
            var err = monaca.cloud.Error(-12, 'Invalid response');
            break;
          default:
            var err = monaca.cloud.Error(-13, 'Invalid status code');
        }
        dfd.reject(err);
      }
    }, ajaxOptions);

    $.ajax(o);
  };

  var _sessionId = '';

  monaca.cloud._getSessionId = function() {
    return _sessionId;
  };

  monaca.cloud._setSessionId = function(id) {
    if (typeof id != 'string') {
      id = '';
    }
    _sessionId = id;
  };

})(window);
/*
 * CollectionItem
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollectionItem = (function() {

    function MonacaCloudCollectionItem(item, collection) {

      /**
       * @property {String} .
       */
      this._id = item._id;

      /**
       * @property {String} .
       */
      this._ownerUserOid = item._ownerUserOid;

      /**
       * @property {Date} .
       */
      this._createdAt = new Date(item._createdAt);

      /**
       * @property {Date} .
       */
      this._updatedAt = new Date(item._updatedAt);

      /**
       * @property {MonacaCloudCollection} .
       */
      this._collection = collection;


      for (var key in item) {
        if (key.substr(0, 1) != '_') {
          this[key] = item[key];
        }
      }
    }

    MonacaCloudCollectionItem.prototype = {

      /**
       * @return {$.Promise} .
       */
      update: function() {
        var dfd = new $.Deferred();
        var col = this._collection;
        var data = {};

        for (var key in this) {
          if (key.indexOf('_') !== 0) {
            data[key] = this[key];
          }
        }

        monaca.cloud._post('Collection.update', {
          collectionName: col.name,
          itemOid: this._id,
          data: data,
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      getPermission: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.getPermission', {
          collectionName: col.name,
          itemOid: this._id
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(permission, options) {
        var dfd = new $.Deferred();
        var col = this._collection;

        if (typeof(options) === 'undefined') {
          options = {};
        }

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: col.name,
          criteria: '_id == ?',
          bindParams: [this._id],
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      remove: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.delete', {
          collectionName: col.name,
          itemOid: this._id,
        }, dfd, {});

        return dfd.promise();
      },

      'delete': function() {
        return this.remove();
      }

    };


    return MonacaCloudCollectionItem;
  })();

  monaca.cloud.CollectionItem = function(item, collection) {
    return new MonacaCloudCollectionItem(item, collection);
  };

})(window);
/*
 * Collection
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollection = (function() {

    function MonacaCloudCollection(name) {
      this.name = name;
    }

    MonacaCloudCollection.prototype = {

      /**
       * @param {Object|Array} items .
       * @return {Array} result .
       */
      _makeCollectionItem: function(items) {
        var result = [];

        if (items instanceof Array) {
          for (var i = 0; i < items.length; i++) {
            result[i] = monaca.cloud.CollectionItem(items[i], this);
          }
        } else {
          result = monaca.cloud.CollectionItem(items, this);
        }

        return result;
      },

      /**
       * @param {Criteria|Array} criteria .
       */
      _validateCriteria: function(criteria) {
        if ((typeof(criteria) === 'undefined') || (typeof(criteria) === 'null')) {
          criteria = monaca.cloud.Criteria('');
        } else if (typeof(criteria) === 'string') {
          criteria = monaca.cloud.Criteria(criteria);
        }

        return criteria;
      },

      /**
       * @param {Object|Array} orderBy .
       * @param {Object} options .
       */
      _validateOptions: function(orderBy, options) {
        //if orderBy is hash, consider it as "options"
        if ((typeof(orderBy) === 'object') && (typeof(orderBy.length) === 'undefined')) {
          options = orderBy;
          if (typeof(options.orderBy) !== 'undefined') {
            orderBy = orderBy.orderBy;
          } else {
            orderBy = null;
          }
        }

        if (orderBy === '') {
          orderBy = null;
        }

        return {
          orderBy: orderBy,
          options: options
        };
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      find: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOne: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOneMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Object} item .
       * @param {Object} [permission] .
       * @return {$.Promise} .
       */
      insert: function(item, permission) {
        var self = this;
        var dfd = new $.Deferred();

        if (typeof(permission) === 'undefined') {
          permission = {};
        }

        monaca.cloud._post('Collection.insert', {
            collectionName: this.name,
            item: item,
            permission: permission
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var item = self._makeCollectionItem(e.result.item);
            dfd.resolve(item);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(criteria, permission, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: this.name,
          criteria: criteria.query,
          bindParams: criteria.bindParams,
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      }
    };

    return MonacaCloudCollection;
  })();


  monaca.cloud.Collection = function(name) {
    return new MonacaCloudCollection(name);
  };

})(window);
/*
 * Criteria
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCriteria = (function() {

    function MonacaCloudCriteria(query, bindParams) {
      this.query = query;
      this.bindParams = (typeof(bindParams) !== 'undefined') ? bindParams : [];
    }

    return MonacaCloudCriteria;
  })();


  monaca.cloud.Criteria = function(query, bindParams) {
    return new MonacaCloudCriteria(query, bindParams);
  };

})(window);
/*
 * Device
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Device = {

    /**
     * @param {String} name .
     * @return {$.Promise} .
     */
    getProperty: function(name) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: [name]
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties[name]);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {Array} names .
     * @return {$.Promise} .
     */
    getProperties: function(names) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: names
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {String} name .
     * @param {String} value .
     * @return {$.Promise} .
     */
    saveProperty: function(name, value) {
      var dfd = new $.Deferred();
      var param = {};

      if ((typeof(name) !== 'undefined') && (typeof(value) !== 'undefined')) {
        param = {
          properties: {}
        };
        param.properties[name] = value;
      }

      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    },

    /**
     * @param {Object} properties .
     * @return {$.Promise} .
     */
    saveProperties: function(properties) {
      var dfd = new $.Deferred();
      var param = {};

      if (typeof(properties) !== 'undefined') param.properties = properties;
      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    }

  };

})(window);
/*
 * Mailer
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Mailer = {

    /**
     * @param {String} userOid .
     * @param {String} templateName .
     * @param {Object} substituteParams .
     * @param {Object} [options] .
     * @return {$.Promise} .
     */
    sendMail: function(userOid, templateName, substituteParams, options) {
      var dfd = new $.Deferred();

      if (typeof(options) === 'undefined') {
        options = {};
      }

      monaca.cloud._post('Mailer.sendMail', {
        userOid: userOid,
        templateName: templateName,
        substituteParams: substituteParams,
        options: options
      }, dfd);

      return dfd.promise();
    }
  };

})(window);
/*
 * User
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.User = (function() {


    return {

      _oid: null,

      /**
       * @return {Boolean} .
       */
      isAuthenticated: function() {
        return (this._oid === null) ? false : true;
      },


      /**
       * @param {String} username .
       * @param {String} password .
       * @param {Object} [properties] .
       * @return {$.Promise} .
       */
      register: function(username, password, properties) {
        var dfd = new $.Deferred();
        var self = this;

        if (typeof(properties) === 'undefined') properties = {};

        monaca.cloud._post('User.register', {
            username: username,
            password: password,
            properties: properties
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );


        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      validate: function(username, properties) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.validate', {
          username: username,
          properties: properties
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} password .
       * @return {$.Promise} .
       */
      unregister: function(password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.unregister', {
            password: password
          }, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} password .
       * @return {$.Promise} .
       */
      login: function(username, password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.login', {
            username: username,
            password: password
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      autoLogin: function() {
        var dfd = new $.Deferred();
        var token = localStorage.monacaCloudLoginToken || '';
        var self = this;

        monaca.cloud._post('User.autoLogin', {
            loginToken: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      logout: function() {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.logout', {}, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} oldPassword .
       * @param {String} newPassword .
       * @return {$.Promise} .
       */
      updatePassword: function(oldPassword, newPassword) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.updatePassword', {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} options .
       * @return {$.Promise} .
       */
      sendPasswordResetToken: function(username, options) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.sendPasswordResetToken', {
          username: username,
          options: options
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} newPassword .
       * @param {String} token .
       * @return {$.Promise} .
       */
      resetPasswordAndLogin: function(username, newPassword, token) {
        var dfd = new $.Deferred();
        var self = this;

        monaca.cloud._post('User.resetPasswordAndLogin', {
            username: username,
            newPassword: newPassword,
            token: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @return {$.Promise} .
       */
      getProperty: function(name) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: [name]
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties[name]);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {Array} names .
       * @return {$.Promise} .
       */
      getProperties: function(names) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: names
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @param {String} value .
       * @return {$.Promise} .
       */
      saveProperty: function(name, value) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(name) !== 'undefined') {
          param = {
            properties: {}
          };
          param.properties[name] = value;
        }

        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      },

      /**
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      saveProperties: function(properties) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(properties) !== 'undefined') param.properties = properties;
        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      }

    };
  })();

})(window);

/*** <End:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/*** <End:monaca-core-utils> ***/


/*** <Start:getusermedia> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/Gruntfile.js"> ***/
module.exports = function( grunt ) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: '/*!\n' +
          '* <%= pkg.name %>\n' +
          '* v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* (c) <%= pkg.author.name %>;' +
          ' <%= _.pluck(pkg.licenses, "type").join(", ") %> License\n' +
          '*/',
        stripBanners: true
      },
      dist: {
        files: {
          'dist/getUserMedia.js': ['lib/getUserMedia.js'],
          'dist/getUserMedia.noFallback.js': ['lib/getUserMedia.noFallback.js']
        }
      }
    },
    uglify: {
      options: {
        report: 'gzip',
        banner: '<%= concat.options.banner %>'
      },
      dist: {
        files: {
          'dist/getUserMedia.min.js': ['dist/getUserMedia.js'],
          'dist/getUserMedia.noFallback.min.js': ['dist/getUserMedia.noFallback.js']
        }
      }
    },
    watch: {
      scripts: {
        files: '<%= jshint.all %>',
        tasks: ['test']
      }
    },
    connect: {
      server: {
        options: {
          base: '.',
          port: 8080
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true,
        module: true
      },
      all: ['Gruntfile.js', 'lib/getUserMedia.js', 'lib/getUserMedia.noFallback.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Release
  grunt.registerTask('default', ['jshint','concat', 'uglify']);

};
/*** <End:getusermedia LoadJs:"components/getusermedia/Gruntfile.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.js"> ***/
/*!
* getusermedia-js
* v1.0.0 - 2015-12-20
* https://github.com/addyosmani/getUserMedia.js
* (c) Addy Osmani; MIT License
*/;(function (window, document) {
    "use strict";

    window.getUserMedia = function (options, successCallback, errorCallback) {

        // Options are required
        if (options !== undefined) {

            // getUserMedia() feature detection
            navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

            if ( !! navigator.getUserMedia_) {


                // constructing a getUserMedia config-object and 
                // an string (we will try both)
                var option_object = {};
                var option_string = '';
                var getUserMediaOptions, container, temp, video, ow, oh;

                if (options.video === true) {
                    option_object.video = true;
                    option_string = 'video';
                }
                if (options.audio === true) {
                    option_object.audio = true;
                    if (option_string !== '') {
                        option_string = option_string + ', ';
                    }
                    option_string = option_string + 'audio';
                }

                container = document.getElementById(options.el);
                temp = document.createElement('video');

                // Fix for ratio
                ow = parseInt(container.offsetWidth, 10);
                oh = parseInt(container.offsetHeight, 10);

                if (options.width < ow && options.height < oh) {
                    options.width = ow;
                    options.height = oh;
                }

                // configure the interim video
                temp.width = options.width;
                temp.height = options.height;
                temp.autoplay = true;
                container.appendChild(temp);
                video = temp;

                // referenced for use in your applications
                options.videoEl = video;
                options.context = 'webrtc';

                // first we try if getUserMedia supports the config object
                try {
                    // try object
                    navigator.getUserMedia_(option_object, successCallback, errorCallback);
                } catch (e) {
                    // option object fails
                    try {
                        // try string syntax
                        // if the config object failes, we try a config string
                        navigator.getUserMedia_(option_string, successCallback, errorCallback);
                    } catch (e2) {
                        // both failed
                        // neither object nor string works
                        return undefined;
                    }
                }
            } else {

                // Act as a plain getUserMedia shield if no fallback is required
                if (options.noFallback === undefined || options.noFallback === false) {

                    // Fallback to flash
                    var source, el, cam;

                    source = '<!--[if IE]>'+
                    '<object id="XwebcamXobjectX" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + options.width + '" height="' + options.height + '">'+
                    '<param name="movie" value="' + options.swffile + '" />'+
                    '<![endif]-->'+
                    '<!--[if !IE]>-->'+
                    '<object id="XwebcamXobjectX" type="application/x-shockwave-flash" data="' + options.swffile + '" width="' + options.width + '" height="' + options.height + '">'+
                    '<!--<![endif]-->'+
                    '<param name="FlashVars" value="mode=' + options.mode + '&amp;quality=' + options.quality + '" />'+
                    '<param name="allowScriptAccess" value="always" />'+
                    '</object>';
                    el = document.getElementById(options.el);
                    el.innerHTML = source;


                    (function register(run) {

                        cam = document.getElementById('XwebcamXobjectX');

                        if (cam.capture !== undefined) {

                            // Simple callback methods are not allowed 
                            options.capture = function (x) {
                                try {
                                    return cam.capture(x);
                                } catch (e) {}
                            };
                            options.save = function (x) {
                                try {
                                    return cam.save(x);
                                } catch (e) {

                                }
                            };
                            options.setCamera = function (x) {
                                try {
                                    return cam.setCamera(x);
                                } catch (e) {}
                            };
                            options.getCameraList = function () {
                                try {
                                    return cam.getCameraList();
                                } catch (e) {}
                            };

                            // options.onLoad();
                            options.context = 'flash';
                            options.onLoad = successCallback;

                        } else if (run === 0) {
                            // options.debug("error", "Flash movie not yet registered!");
                            errorCallback();
                        } else {
                            // Flash interface not ready yet 
                            window.setTimeout(register, 1000 * (4 - run), run - 1);
                        }
                    }(3));

                }

            }
        }
    };

}(this, document));

/*** <End:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.min.js"> ***/
/*!
* getusermedia-js
* v1.0.0 - 2015-12-20
* https://github.com/addyosmani/getUserMedia.js
* (c) Addy Osmani; MIT License
*/!function(a,b){"use strict";a.getUserMedia=function(c,d,e){if(void 0!==c)if(navigator.getUserMedia_=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia_){var f,g,h,i,j,k={},l="";c.video===!0&&(k.video=!0,l="video"),c.audio===!0&&(k.audio=!0,""!==l&&(l+=", "),l+="audio"),f=b.getElementById(c.el),g=b.createElement("video"),i=parseInt(f.offsetWidth,10),j=parseInt(f.offsetHeight,10),c.width<i&&c.height<j&&(c.width=i,c.height=j),g.width=c.width,g.height=c.height,g.autoplay=!0,f.appendChild(g),h=g,c.videoEl=h,c.context="webrtc";try{navigator.getUserMedia_(k,d,e)}catch(m){try{navigator.getUserMedia_(l,d,e)}catch(n){return}}}else if(void 0===c.noFallback||c.noFallback===!1){var o,p,q;o='<!--[if IE]><object id="XwebcamXobjectX" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+c.width+'" height="'+c.height+'"><param name="movie" value="'+c.swffile+'" /><![endif]--><!--[if !IE]>--><object id="XwebcamXobjectX" type="application/x-shockwave-flash" data="'+c.swffile+'" width="'+c.width+'" height="'+c.height+'"><!--<![endif]--><param name="FlashVars" value="mode='+c.mode+"&amp;quality="+c.quality+'" /><param name="allowScriptAccess" value="always" /></object>',p=b.getElementById(c.el),p.innerHTML=o,function r(f){q=b.getElementById("XwebcamXobjectX"),void 0!==q.capture?(c.capture=function(a){try{return q.capture(a)}catch(b){}},c.save=function(a){try{return q.save(a)}catch(b){}},c.setCamera=function(a){try{return q.setCamera(a)}catch(b){}},c.getCameraList=function(){try{return q.getCameraList()}catch(a){}},c.context="flash",c.onLoad=d):0===f?e():a.setTimeout(r,1e3*(4-f),f-1)}(3)}}}(this,document);
/*** <End:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.min.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.noFallback.js"> ***/
/*!
* getusermedia-js
* v1.0.0 - 2015-12-20
* https://github.com/addyosmani/getUserMedia.js
* (c) Addy Osmani; MIT License
*//*this is a special version of the library with flash fallback support
stripped out, for anyone that wants it*/
;(function (window, document) {
    "use strict";

    window.getUserMedia = function (options, successCallback, errorCallback) {

        // Options are required
        if (options !== undefined) {

            // getUserMedia() feature detection
            navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

            if ( !! navigator.getUserMedia_) {

                // constructing a getUserMedia config-object and 
                // an string (we will try both)
                var option_object = {};
                var option_string = '';
                var container, temp, video, ow, oh;

                if (options.video === true) {
                    option_object.video = true;
                    option_string = 'video';
                }
                if (options.audio === true) {
                    option_object.audio = true;
                    if (option_string !== '') {
                        option_string = option_string + ', ';
                    }
                    option_string = option_string + 'audio';
                }

                container = document.getElementById(options.el);
                temp = document.createElement('video');

                // Fix for ratio
                ow = parseInt(container.offsetWidth, 10);
                oh = parseInt(container.offsetHeight, 10);

                if (options.width < ow && options.height < oh) {
                    options.width = ow;
                    options.height = oh;
                }

                // configure the interim video
                temp.width = options.width;
                temp.height = options.height;
                temp.autoplay = true;
                container.appendChild(temp);
                video = temp;

                // referenced for use in your applications
                options.videoEl = video;
                options.context = 'webrtc';

                // first we try if getUserMedia supports the config object
                try {
                    // try object
                    navigator.getUserMedia_(option_object, successCallback, errorCallback);
                } catch (e) {
                    // option object fails
                    try {
                        // try string syntax
                        // if the config object failes, we try a config string
                        navigator.getUserMedia_(option_string, successCallback, errorCallback);
                    } catch (e2) {
                        // both failed
                        // neither object nor string works
                        return undefined;
                    }
                }
            } 
        }
    };

}(this, document));
/*** <End:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.noFallback.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.noFallback.min.js"> ***/
/*!
* getusermedia-js
* v1.0.0 - 2015-12-20
* https://github.com/addyosmani/getUserMedia.js
* (c) Addy Osmani; MIT License
*/!function(a,b){"use strict";a.getUserMedia=function(a,c,d){if(void 0!==a&&(navigator.getUserMedia_=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia_)){var e,f,g,h,i,j={},k="";a.video===!0&&(j.video=!0,k="video"),a.audio===!0&&(j.audio=!0,""!==k&&(k+=", "),k+="audio"),e=b.getElementById(a.el),f=b.createElement("video"),h=parseInt(e.offsetWidth,10),i=parseInt(e.offsetHeight,10),a.width<h&&a.height<i&&(a.width=h,a.height=i),f.width=a.width,f.height=a.height,f.autoplay=!0,e.appendChild(f),g=f,a.videoEl=g,a.context="webrtc";try{navigator.getUserMedia_(j,c,d)}catch(l){try{navigator.getUserMedia_(k,c,d)}catch(m){return}}}}}(this,document);
/*** <End:getusermedia LoadJs:"components/getusermedia/dist/getUserMedia.noFallback.min.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/demo.js"> ***/
/*globals  $: true, getUserMedia: true, alert:true, ccv:true */

/*! getUserMedia demo - v1.0
* for use with https://github.com/addyosmani/getUserMedia.js
* Copyright (c) 2012 addyosmani; Licensed MIT */

 (function () {
	'use strict';

	var App = {

		init: function () {

			// The shim requires options to be supplied for it's configuration,
			// which can be found lower down in this file. Most of the below are
			// demo specific and should be used for reference within this context
			// only
			if ( !!this.options ) {

				this.pos = 0;
				this.cam = null;
				this.filter_on = false;
				this.filter_id = 0;
				this.canvas = document.getElementById("canvas");
				this.ctx = this.canvas.getContext("2d");
				this.img = new Image();
				this.ctx.clearRect(0, 0, this.options.width, this.options.height);
				this.image = this.ctx.getImageData(0, 0, this.options.width, this.options.height);
				this.snapshotBtn = document.getElementById('takeSnapshot');
				this.detectBtn = document.getElementById('detectFaces');
				
				// Initialize getUserMedia with options
				getUserMedia(this.options, this.success, this.deviceError);

				// Initialize webcam options for fallback
				window.webcam = this.options;

				// Trigger a snapshot
				this.addEvent('click', this.snapshotBtn, this.getSnapshot);

				// Trigger face detection (using the glasses option)
				this.addEvent('click', this.detectBtn, function () {
					App.drawToCanvas('glasses');
				});

			} else {
				alert('No options were supplied to the shim!');
			}
		},

		addEvent: function (type, obj, fn) {
			if (obj.attachEvent) {
				obj['e' + type + fn] = fn;
				obj[type + fn] = function () {
					obj['e' + type + fn](window.event);
				}
				obj.attachEvent('on' + type, obj[type + fn]);
			} else {
				obj.addEventListener(type, fn, false);
			}
		},

		// options contains the configuration information for the shim
		// it allows us to specify the width and height of the video
		// output we're working with, the location of the fallback swf,
		// events that are triggered onCapture and onSave (for the fallback)
		// and so on.
		options: {
			"audio": false, //OTHERWISE FF nightlxy throws an NOT IMPLEMENTED error
			"video": true,
			el: "webcam",

			extern: null,
			append: true,

			// noFallback:true, use if you don't require a fallback

			width: 320, 
			height: 240, 

			mode: "callback",
			// callback | save | stream
			swffile: "../dist/fallback/jscam_canvas_only.swf",
			quality: 85,
			context: "",

			debug: function () {},
			onCapture: function () {
				window.webcam.save();
			},
			onTick: function () {},
			onSave: function (data) {

				var col = data.split(";"),
					img = App.image,
					tmp = null,
					w = this.width,
					h = this.height;

				for (var i = 0; i < w; i++) { 
					tmp = parseInt(col[i], 10);
					img.data[App.pos + 0] = (tmp >> 16) & 0xff;
					img.data[App.pos + 1] = (tmp >> 8) & 0xff;
					img.data[App.pos + 2] = tmp & 0xff;
					img.data[App.pos + 3] = 0xff;
					App.pos += 4;
				}

				if (App.pos >= 4 * w * h) { 
					App.ctx.putImageData(img, 0, 0);
					App.pos = 0;
				}

			},
			onLoad: function () {}
		},

		success: function (stream) {

			if (App.options.context === 'webrtc') {

				var video = App.options.videoEl;
				
				if ((typeof MediaStream !== "undefined" && MediaStream !== null) && stream instanceof MediaStream) {
		
					if (video.mozSrcObject !== undefined) { //FF18a
						video.mozSrcObject = stream;
					} else { //FF16a, 17a
						video.src = stream;
					}

					return video.play();

				} else {
					var vendorURL = window.URL || window.webkitURL;
					video.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
				}

				video.onerror = function () {
					stream.stop();
					streamError();
				};

			} else{
				// flash context
			}
			
		},

		deviceError: function (error) {
			alert('No camera available.');
			console.error('An error occurred: [CODE ' + error.code + ']');
		},

		changeFilter: function () {
			if (this.filter_on) {
				this.filter_id = (this.filter_id + 1) & 7;
			}
		},

		getSnapshot: function () {
			// If the current context is WebRTC/getUserMedia (something
			// passed back from the shim to avoid doing further feature
			// detection), we handle getting video/images for our canvas 
			// from our HTML5 <video> element.
			if (App.options.context === 'webrtc') {
				var video = document.getElementsByTagName('video')[0]; 
				App.canvas.width = video.videoWidth;
				App.canvas.height = video.videoHeight;
				App.canvas.getContext('2d').drawImage(video, 0, 0);

			// Otherwise, if the context is Flash, we ask the shim to
			// directly call window.webcam, where our shim is located
			// and ask it to capture for us.
			} else if(App.options.context === 'flash'){

				window.webcam.capture();
				App.changeFilter();
			}
			else{
				alert('No context was supplied to getSnapshot()');
			}
		},

		drawToCanvas: function (effect) {
			var source, glasses, canvas, ctx, pixels, i;

			source = document.querySelector('#canvas');
			glasses = new Image();
			glasses.src = "js/glasses/i/glasses.png";
			canvas = document.querySelector("#output");
			ctx = canvas.getContext("2d");

			ctx.drawImage(source, 0, 0, 520, 426);

			pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

			// Hipstergram!
			if (effect === 'hipster') {

				for (i = 0; i < pixels.data.length; i = i + 4) {
					pixels.data[i + 0] = pixels.data[i + 0] * 3;
					pixels.data[i + 1] = pixels.data[i + 1] * 2;
					pixels.data[i + 2] = pixels.data[i + 2] - 10;
				}

				ctx.putImageData(pixels, 0, 0);

			}

			// Green Screen
			else if (effect === 'greenscreen') {

				// Selectors 
				var rmin = $('#red input.min').val(),
					gmin = $('#green input.min').val(),
					bmin = $('#blue input.min').val(),
					rmax = $('#red input.max').val(),
					gmax = $('#green input.max').val(),
					bmax = $('#blue input.max').val(),
					green = 0, red = 0, blue = 0;


				for (i = 0; i < pixels.data.length; i = i + 4) {
					red = pixels.data[i + 0];
					green = pixels.data[i + 1];
					blue = pixels.data[i + 2];
					alpha = pixels.data[i + 3];

					if (red >= rmin && green >= gmin && blue >= bmin && red <= rmax && green <= gmax && blue <= bmax) {
						pixels.data[i + 3] = 0;
					}
				}

				ctx.putImageData(pixels, 0, 0);

			} else if (effect === 'glasses') {

				var comp = ccv.detect_objects({
					"canvas": (canvas),
					"cascade": cascade,
					"interval": 5,
					"min_neighbors": 1
				});

				// Draw glasses on everyone!
				for (i = 0; i < comp.length; i++) {
					ctx.drawImage(glasses, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
				}
			}

		}

	};

	App.init();

})();



/*** <End:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/demo.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/excanvas.js"> ***/
document.createElement("canvas").getContext||function(){function i(){return this.context_||(this.context_=new w(this))}function k(a,b,c){var d=j.call(arguments,2);return function(){return a.apply(b,d.concat(j.call(arguments)))}}function m(a){var b=a.srcElement;switch(a.propertyName){case"width":b.style.width=b.attributes.width.nodeValue+"px",b.getContext().clearRect();break;case"height":b.style.height=b.attributes.height.nodeValue+"px",b.getContext().clearRect()}}function n(a){var b=a.srcElement;b.firstChild&&(b.firstChild.style.width=b.clientWidth+"px",b.firstChild.style.height=b.clientHeight+"px")}function r(){return[[1,0,0],[0,1,0],[0,0,1]]}function s(a,b){var c=r();for(var d=0;d<3;d++)for(var e=0;e<3;e++){var f=0;for(var g=0;g<3;g++)f+=a[d][g]*b[g][e];c[d][e]=f}return c}function t(a,b){b.fillStyle=a.fillStyle,b.lineCap=a.lineCap,b.lineJoin=a.lineJoin,b.lineWidth=a.lineWidth,b.miterLimit=a.miterLimit,b.shadowBlur=a.shadowBlur,b.shadowColor=a.shadowColor,b.shadowOffsetX=a.shadowOffsetX,b.shadowOffsetY=a.shadowOffsetY,b.strokeStyle=a.strokeStyle,b.globalAlpha=a.globalAlpha,b.arcScaleX_=a.arcScaleX_,b.arcScaleY_=a.arcScaleY_,b.lineScale_=a.lineScale_}function u(a){var b,c=1;a=String(a);if(a.substring(0,3)=="rgb"){var d=a.indexOf("(",3),e=a.indexOf(")",d+1),f=a.substring(d+1,e).split(",");b="#";for(var g=0;g<3;g++)b+=o[Number(f[g])];f.length==4&&a.substr(3,1)=="a"&&(c=f[3])}else b=a;return{color:b,alpha:c}}function v(a){switch(a){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function w(a){this.m_=r(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=g*1,this.globalAlpha=1,this.canvas=a;var b=a.ownerDocument.createElement("div");b.style.width=a.clientWidth+"px",b.style.height=a.clientHeight+"px",b.style.overflow="hidden",b.style.position="absolute",a.appendChild(b),this.element_=b,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function y(a,b,c,d){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y}),a.currentX_=d.x,a.currentY_=d.y}function z(a){this.type_=a,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function A(){}var a=Math,b=a.round,c=a.sin,d=a.cos,e=a.abs,f=a.sqrt,g=10,h=g/2,j=Array.prototype.slice,l={init:function(a){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var b=a||document;b.createElement("canvas"),b.attachEvent("onreadystatechange",k(this.init_,this,b))}},init_:function(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!a.styleSheets.ex_canvas_){var b=a.createStyleSheet();b.owningElement.id="ex_canvas_",b.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var c=a.getElementsByTagName("canvas");for(var d=0;d<c.length;d++)this.initElement(c[d])},initElement:function(a){if(!a.getContext){a.getContext=i,a.innerHTML="",a.attachEvent("onpropertychange",m),a.attachEvent("onresize",n);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth,b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};l.init();var o=[];for(var p=0;p<16;p++)for(var q=0;q<16;q++)o[p*16+q]=p.toString(16)+q.toString(16);var x=w.prototype;x.clearRect=function(){this.element_.innerHTML=""},x.beginPath=function(){this.currentPath_=[]},x.moveTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y}),this.currentX_=c.x,this.currentY_=c.y},x.lineTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y}),this.currentX_=c.x,this.currentY_=c.y},x.bezierCurveTo=function(a,b,c,d,e,f){var g=this.getCoords_(e,f),h=this.getCoords_(a,b),i=this.getCoords_(c,d);y(this,h,i,g)},x.quadraticCurveTo=function(a,b,c,d){var e=this.getCoords_(a,b),f=this.getCoords_(c,d),g={x:this.currentX_+2/3*(e.x-this.currentX_),y:this.currentY_+2/3*(e.y-this.currentY_)},h={x:g.x+(f.x-this.currentX_)/3,y:g.y+(f.y-this.currentY_)/3};y(this,g,h,f)},x.arc=function(a,b,e,f,i,j){e*=g;var k=j?"at":"wa",l=a+d(f)*e-h,m=b+c(f)*e-h,n=a+d(i)*e-h,o=b+c(i)*e-h;l==n&&!j&&(l+=.125);var p=this.getCoords_(a,b),q=this.getCoords_(l,m),r=this.getCoords_(n,o);this.currentPath_.push({type:k,x:p.x,y:p.y,radius:e,xStart:q.x,yStart:q.y,xEnd:r.x,yEnd:r.y})},x.rect=function(a,b,c,d){this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath()},x.strokeRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath(),this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath(),this.stroke(),this.currentPath_=e},x.fillRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath(),this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath(),this.fill(),this.currentPath_=e},x.createLinearGradient=function(a,b,c,d){var e=new z("gradient");return e.x0_=a,e.y0_=b,e.x1_=c,e.y1_=d,e},x.createRadialGradient=function(a,b,c,d,e,f){var g=new z("gradientradial");return g.x0_=a,g.y0_=b,g.r0_=c,g.x1_=d,g.y1_=e,g.r1_=f,g},x.drawImage=function(c,d){var e,f,h,i,j,k,l,m,n=c.runtimeStyle.width,o=c.runtimeStyle.height;c.runtimeStyle.width="auto",c.runtimeStyle.height="auto";var p=c.width,q=c.height;c.runtimeStyle.width=n,c.runtimeStyle.height=o;if(arguments.length==3)e=arguments[1],f=arguments[2],j=k=0,l=h=p,m=i=q;else if(arguments.length==5)e=arguments[1],f=arguments[2],h=arguments[3],i=arguments[4],j=k=0,l=p,m=q;else if(arguments.length==9)j=arguments[1],k=arguments[2],l=arguments[3],m=arguments[4],e=arguments[5],f=arguments[6],h=arguments[7],i=arguments[8];else throw Error("Invalid number of arguments");var r=this.getCoords_(e,f),s=l/2,t=m/2,u=[],v=10,w=10;u.push(" <g_vml_:group",' coordsize="',g*v,",",g*w,'"',' coordorigin="0,0"',' style="width:',v,"px;height:",w,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var x=[];x.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",b(r.x/g),",","Dy=",b(r.y/g),"");var y=r,z=this.getCoords_(e+h,f),A=this.getCoords_(e,f+i),B=this.getCoords_(e+h,f+i);y.x=a.max(y.x,z.x,A.x,B.x),y.y=a.max(y.y,z.y,A.y,B.y),u.push("padding:0 ",b(y.x/g),"px ",b(y.y/g),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",x.join(""),", sizingmethod='clip');")}else u.push("top:",b(r.y/g),"px;left:",b(r.x/g),"px;");u.push(' ">','<g_vml_:image src="',c.src,'"',' style="width:',g*h,"px;"," height:",g*i,'px;"',' cropleft="',j/p,'"',' croptop="',k/q,'"',' cropright="',(p-j-l)/p,'"',' cropbottom="',(q-k-m)/q,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",u.join(""))},x.stroke=function(c){var d=[],e=!1,f=u(c?this.fillStyle:this.strokeStyle),h=f.color,i=f.alpha*this.globalAlpha,j=10,k=10;d.push("<g_vml_:shape",' filled="',!!c,'"',' style="position:absolute;width:',j,"px;height:",k,'px;"',' coordorigin="0 0" coordsize="',g*j," ",g*k,'"',' stroked="',!c,'"',' path="');var l=!1,m={x:null,y:null},n={x:null,y:null};for(var o=0;o<this.currentPath_.length;o++){var p=this.currentPath_[o],q;switch(p.type){case"moveTo":q=p,d.push(" m ",b(p.x),",",b(p.y));break;case"lineTo":d.push(" l ",b(p.x),",",b(p.y));break;case"close":d.push(" x "),p=null;break;case"bezierCurveTo":d.push(" c ",b(p.cp1x),",",b(p.cp1y),",",b(p.cp2x),",",b(p.cp2y),",",b(p.x),",",b(p.y));break;case"at":case"wa":d.push(" ",p.type," ",b(p.x-this.arcScaleX_*p.radius),",",b(p.y-this.arcScaleY_*p.radius)," ",b(p.x+this.arcScaleX_*p.radius),",",b(p.y+this.arcScaleY_*p.radius)," ",b(p.xStart),",",b(p.yStart)," ",b(p.xEnd),",",b(p.yEnd))}if(p){if(m.x==null||p.x<m.x)m.x=p.x;if(n.x==null||p.x>n.x)n.x=p.x;if(m.y==null||p.y<m.y)m.y=p.y;if(n.y==null||p.y>n.y)n.y=p.y}}d.push(' ">');if(!c){var r=this.lineScale_*this.lineWidth;r<1&&(i*=r),d.push("<g_vml_:stroke",' opacity="',i,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',v(this.lineCap),'"',' weight="',r,'px"',' color="',h,'" />')}else if(typeof this.fillStyle=="object"){var s=this.fillStyle,t=0,w={x:0,y:0},x=0,y=1;if(s.type_=="gradient"){var z=s.x0_/this.arcScaleX_,A=s.y0_/this.arcScaleY_,B=s.x1_/this.arcScaleX_,C=s.y1_/this.arcScaleY_,D=this.getCoords_(z,A),E=this.getCoords_(B,C),F=E.x-D.x,G=E.y-D.y;t=Math.atan2(F,G)*180/Math.PI,t<0&&(t+=360),t<1e-6&&(t=0)}else{var D=this.getCoords_(s.x0_,s.y0_),H=n.x-m.x,I=n.y-m.y;w={x:(D.x-m.x)/H,y:(D.y-m.y)/I},H/=this.arcScaleX_*g,I/=this.arcScaleY_*g;var J=a.max(H,I);x=2*s.r0_/J,y=2*s.r1_/J-x}var K=s.colors_;K.sort(function(a,b){return a.offset-b.offset});var L=K.length,M=K[0].color,N=K[L-1].color,O=K[0].alpha*this.globalAlpha,P=K[L-1].alpha*this.globalAlpha,Q=[];for(var o=0;o<L;o++){var R=K[o];Q.push(R.offset*y+x+" "+R.color)}d.push('<g_vml_:fill type="',s.type_,'"',' method="none" focus="100%"',' color="',M,'"',' color2="',N,'"',' colors="',Q.join(","),'"',' opacity="',P,'"',' g_o_:opacity2="',O,'"',' angle="',t,'"',' focusposition="',w.x,",",w.y,'" />')}else d.push('<g_vml_:fill color="',h,'" opacity="',i,'" />');d.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",d.join(""))},x.fill=function(){this.stroke(!0)},x.closePath=function(){this.currentPath_.push({type:"close"})},x.getCoords_=function(a,b){var c=this.m_;return{x:g*(a*c[0][0]+b*c[1][0]+c[2][0])-h,y:g*(a*c[0][1]+b*c[1][1]+c[2][1])-h}},x.save=function(){var a={};t(this,a),this.aStack_.push(a),this.mStack_.push(this.m_),this.m_=s(r(),this.m_)},x.restore=function(){t(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},x.translate=function(a,b){var c=[[1,0,0],[0,1,0],[a,b,1]];this.m_=s(c,this.m_)},x.rotate=function(a){var b=d(a),e=c(a),f=[[b,e,0],[-e,b,0],[0,0,1]];this.m_=s(f,this.m_)},x.scale=function(a,b){this.arcScaleX_*=a,this.arcScaleY_*=b;var c=[[a,0,0],[0,b,0],[0,0,1]],d=this.m_=s(c,this.m_),g=d[0][0]*d[1][1]-d[0][1]*d[1][0];this.lineScale_=f(e(g))},x.clip=function(){},x.arcTo=function(){},x.createPattern=function(){return new A},z.prototype.addColorStop=function(a,b){b=u(b),this.colors_.push({offset:a,color:b.color,alpha:b.alpha})},G_vmlCanvasManager=l,CanvasRenderingContext2D=w,CanvasGradient=z,CanvasPattern=A}()
/*** <End:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/excanvas.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/glasses/ccv.js"> ***/
if (parallable === undefined) {
	var parallable = function (file, funct) {
		parallable.core[funct.toString()] = funct().core;
		return function () {
			var i;
			var async, worker_num, params;
			if (arguments.length > 1) {
				async = arguments[arguments.length - 2];
				worker_num = arguments[arguments.length - 1];
				params = new Array(arguments.length - 2);
				for (i = 0; i < arguments.length - 2; i++)
					params[i] = arguments[i];
			} else {
				async = arguments[0].async;
				worker_num = arguments[0].worker;
				params = arguments[0];
				delete params["async"];
				delete params["worker"];
				params = [params];
			}
			var scope = { "shared" : {} };
			var ctrl = funct.apply(scope, params);
			if (async) {
				return function (complete, error) {
					var executed = 0;
					var outputs = new Array(worker_num);
					var inputs = ctrl.pre.apply(scope, [worker_num]);
					/* sanitize scope shared because for Chrome/WebKit, worker only support JSONable data */
					for (i in scope.shared)
						/* delete function, if any */
						if (typeof scope.shared[i] == "function")
							delete scope.shared[i];
						/* delete DOM object, if any */
						else if (scope.shared[i].tagName !== undefined)
							delete scope.shared[i];
					for (i = 0; i < worker_num; i++) {
						var worker = new Worker(file);
						worker.onmessage = (function (i) {
							return function (event) {
								outputs[i] = (typeof event.data == "string") ? JSON.parse(event.data) : event.data;
								executed++;
								if (executed == worker_num)
									complete(ctrl.post.apply(scope, [outputs]));
							}
						})(i);
						var msg = { "input" : inputs[i],
									"name" : funct.toString(),
									"shared" : scope.shared,
									"id" : i,
									"worker" : params.worker_num };
						try {
							worker.postMessage(msg);
						} catch (e) {
							worker.postMessage(JSON.stringify(msg));
						}
					}
				}
			} else {
				return ctrl.post.apply(scope, [[ctrl.core.apply(scope, [ctrl.pre.apply(scope, [1])[0], 0, 1])]]);
			}
		}
	};
	parallable.core = {};
}

function get_named_arguments(params, names) {
	if (params.length > 1) {
		var new_params = {};
		for (var i = 0; i < names.length; i++)
			new_params[names[i]] = params[i];
		return new_params;
	} else if (params.length == 1) {
		return params[0];
	} else {
		return {};
	}
}

var ccv = {
	pre : function (image) {
		if (image.tagName.toLowerCase() == "img") {
			var canvas = document.createElement("canvas");
			document.body.appendChild(image);
			canvas.width = image.offsetWidth;
			canvas.style.width = image.offsetWidth.toString() + "px";
			canvas.height = image.offsetHeight;
			canvas.style.height = image.offsetHeight.toString() + "px";
			document.body.removeChild(image);
			var ctx = canvas.getContext("2d");
			ctx.drawImage(image, 0, 0);
			return canvas;
		}
		return image;
	},

	grayscale : function (canvas) {
		var ctx = canvas.getContext("2d");
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		var data = imageData.data;
		var pix1, pix2, pix = canvas.width * canvas.height * 4;
		while (pix > 0)
			data[pix -= 4] = data[pix1 = pix + 1] = data[pix2 = pix + 2] = (data[pix] * 0.3 + data[pix1] * 0.59 + data[pix2] * 0.11);
		ctx.putImageData(imageData, 0, 0);
		return canvas;
	},

	array_group : function (seq, gfunc) {
		var i, j;
		var node = new Array(seq.length);
		for (i = 0; i < seq.length; i++)
			node[i] = {"parent" : -1,
					   "element" : seq[i],
					   "rank" : 0};
		for (i = 0; i < seq.length; i++) {
			if (!node[i].element)
				continue;
			var root = i;
			while (node[root].parent != -1)
				root = node[root].parent;
			for (j = 0; j < seq.length; j++) {
				if( i != j && node[j].element && gfunc(node[i].element, node[j].element)) {
					var root2 = j;

					while (node[root2].parent != -1)
						root2 = node[root2].parent;

					if(root2 != root) {
						if(node[root].rank > node[root2].rank)
							node[root2].parent = root;
						else {
							node[root].parent = root2;
							if (node[root].rank == node[root2].rank)
							node[root2].rank++;
							root = root2;
						}

						/* compress path from node2 to the root: */
						var temp, node2 = j;
						while (node[node2].parent != -1) {
							temp = node2;
							node2 = node[node2].parent;
							node[temp].parent = root;
						}

						/* compress path from node to the root: */
						node2 = i;
						while (node[node2].parent != -1) {
							temp = node2;
							node2 = node[node2].parent;
							node[temp].parent = root;
						}
					}
				}
			}
		}
		var idx = new Array(seq.length);
		var class_idx = 0;
		for(i = 0; i < seq.length; i++) {
			j = -1;
			var node1 = i;
			if(node[node1].element) {
				while (node[node1].parent != -1)
					node1 = node[node1].parent;
				if(node[node1].rank >= 0)
					node[node1].rank = ~class_idx++;
				j = ~node[node1].rank;
			}
			idx[i] = j;
		}
		return {"index" : idx, "cat" : class_idx};
	},

	detect_objects : parallable("ccv.js", function (canvas, cascade, interval, min_neighbors) {
		if (this.shared !== undefined) {
			var params = get_named_arguments(arguments, ["canvas", "cascade", "interval", "min_neighbors"]);
			this.shared.canvas = params.canvas;
			this.shared.interval = params.interval;
			this.shared.min_neighbors = params.min_neighbors;
			this.shared.cascade = params.cascade;
			this.shared.scale = Math.pow(2, 1 / (params.interval + 1));
			this.shared.next = params.interval + 1;
			this.shared.scale_upto = Math.floor(Math.log(Math.min(params.canvas.width / params.cascade.width, params.canvas.height / params.cascade.height)) / Math.log(this.shared.scale));
			var i;
			for (i = 0; i < this.shared.cascade.stage_classifier.length; i++)
				this.shared.cascade.stage_classifier[i].orig_feature = this.shared.cascade.stage_classifier[i].feature;
		}
		function pre(worker_num) {
			var canvas = this.shared.canvas;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var pyr = new Array((scale_upto + next * 2) * 4);
			var ret = new Array((scale_upto + next * 2) * 4);
			pyr[0] = canvas;
			ret[0] = { "width" : pyr[0].width,
					   "height" : pyr[0].height,
					   "data" : pyr[0].getContext("2d").getImageData(0, 0, pyr[0].width, pyr[0].height).data };
			var i;
			for (i = 1; i <= interval; i++) {
				pyr[i * 4] = document.createElement("canvas");
				pyr[i * 4].width = Math.floor(pyr[0].width / Math.pow(scale, i));
				pyr[i * 4].height = Math.floor(pyr[0].height / Math.pow(scale, i));
				pyr[i * 4].getContext("2d").drawImage(pyr[0], 0, 0, pyr[0].width, pyr[0].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);
				ret[i * 4] = { "width" : pyr[i * 4].width,
							   "height" : pyr[i * 4].height,
							   "data" : pyr[i * 4].getContext("2d").getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };
			}
			for (i = next; i < scale_upto + next * 2; i++) {
				pyr[i * 4] = document.createElement("canvas");
				pyr[i * 4].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4].getContext("2d").drawImage(pyr[i * 4 - next * 4], 0, 0, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);
				ret[i * 4] = { "width" : pyr[i * 4].width,
							   "height" : pyr[i * 4].height,
							   "data" : pyr[i * 4].getContext("2d").getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };
			}
			for (i = next * 2; i < scale_upto + next * 2; i++) {
				pyr[i * 4 + 1] = document.createElement("canvas");
				pyr[i * 4 + 1].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 1].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 1].getContext("2d").drawImage(pyr[i * 4 - next * 4], 1, 0, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4 + 1].width - 2, pyr[i * 4 + 1].height);
				ret[i * 4 + 1] = { "width" : pyr[i * 4 + 1].width,
								   "height" : pyr[i * 4 + 1].height,
								   "data" : pyr[i * 4 + 1].getContext("2d").getImageData(0, 0, pyr[i * 4 + 1].width, pyr[i * 4 + 1].height).data };
				pyr[i * 4 + 2] = document.createElement("canvas");
				pyr[i * 4 + 2].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 2].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 2].getContext("2d").drawImage(pyr[i * 4 - next * 4], 0, 1, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height - 2);
				ret[i * 4 + 2] = { "width" : pyr[i * 4 + 2].width,
								   "height" : pyr[i * 4 + 2].height,
								   "data" : pyr[i * 4 + 2].getContext("2d").getImageData(0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height).data };
				pyr[i * 4 + 3] = document.createElement("canvas");
				pyr[i * 4 + 3].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 3].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 3].getContext("2d").drawImage(pyr[i * 4 - next * 4], 1, 1, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 3].width - 2, pyr[i * 4 + 3].height - 2);
				ret[i * 4 + 3] = { "width" : pyr[i * 4 + 3].width,
								   "height" : pyr[i * 4 + 3].height,
								   "data" : pyr[i * 4 + 3].getContext("2d").getImageData(0, 0, pyr[i * 4 + 3].width, pyr[i * 4 + 3].height).data };
			}
			return [ret];
		};

		function core(pyr, id, worker_num) {
			var cascade = this.shared.cascade;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var i, j, k, x, y, q;
			var scale_x = 1, scale_y = 1;
			var dx = [0, 1, 0, 1];
			var dy = [0, 0, 1, 1];
			var seq = [];
			for (i = 0; i < scale_upto; i++) {
				var qw = pyr[i * 4 + next * 8].width - Math.floor(cascade.width / 4);
				var qh = pyr[i * 4 + next * 8].height - Math.floor(cascade.height / 4);
				var step = [pyr[i * 4].width * 4, pyr[i * 4 + next * 4].width * 4, pyr[i * 4 + next * 8].width * 4];
				var paddings = [pyr[i * 4].width * 16 - qw * 16,
								pyr[i * 4 + next * 4].width * 8 - qw * 8,
								pyr[i * 4 + next * 8].width * 4 - qw * 4];
				for (j = 0; j < cascade.stage_classifier.length; j++) {
					var orig_feature = cascade.stage_classifier[j].orig_feature;
					var feature = cascade.stage_classifier[j].feature = new Array(cascade.stage_classifier[j].count);
					for (k = 0; k < cascade.stage_classifier[j].count; k++) {
						feature[k] = {"size" : orig_feature[k].size,
									  "px" : new Array(orig_feature[k].size),
									  "pz" : new Array(orig_feature[k].size),
									  "nx" : new Array(orig_feature[k].size),
									  "nz" : new Array(orig_feature[k].size)};
						for (q = 0; q < orig_feature[k].size; q++) {
							feature[k].px[q] = orig_feature[k].px[q] * 4 + orig_feature[k].py[q] * step[orig_feature[k].pz[q]];
							feature[k].pz[q] = orig_feature[k].pz[q];
							feature[k].nx[q] = orig_feature[k].nx[q] * 4 + orig_feature[k].ny[q] * step[orig_feature[k].nz[q]];
							feature[k].nz[q] = orig_feature[k].nz[q];
						}
					}
				}
				for (q = 0; q < 4; q++) {
					var u8 = [pyr[i * 4].data, pyr[i * 4 + next * 4].data, pyr[i * 4 + next * 8 + q].data];
					var u8o = [dx[q] * 8 + dy[q] * pyr[i * 4].width * 8, dx[q] * 4 + dy[q] * pyr[i * 4 + next * 4].width * 4, 0];
					for (y = 0; y < qh; y++) {
						for (x = 0; x < qw; x++) {
							var sum = 0;
							var flag = true;
							for (j = 0; j < cascade.stage_classifier.length; j++) {
								sum = 0;
								var alpha = cascade.stage_classifier[j].alpha;
								var feature = cascade.stage_classifier[j].feature;
								for (k = 0; k < cascade.stage_classifier[j].count; k++) {
									var feature_k = feature[k];
									var p, pmin = u8[feature_k.pz[0]][u8o[feature_k.pz[0]] + feature_k.px[0]];
									var n, nmax = u8[feature_k.nz[0]][u8o[feature_k.nz[0]] + feature_k.nx[0]];
									if (pmin <= nmax) {
										sum += alpha[k * 2];
									} else {
										var f, shortcut = true;
										for (f = 0; f < feature_k.size; f++) {
											if (feature_k.pz[f] >= 0) {
												p = u8[feature_k.pz[f]][u8o[feature_k.pz[f]] + feature_k.px[f]];
												if (p < pmin) {
													if (p <= nmax) {
														shortcut = false;
														break;
													}
													pmin = p;
												}
											}
											if (feature_k.nz[f] >= 0) {
												n = u8[feature_k.nz[f]][u8o[feature_k.nz[f]] + feature_k.nx[f]];
												if (n > nmax) {
													if (pmin <= n) {
														shortcut = false;
														break;
													}
													nmax = n;
												}
											}
										}
										sum += (shortcut) ? alpha[k * 2 + 1] : alpha[k * 2];
									}
								}
								if (sum < cascade.stage_classifier[j].threshold) {
									flag = false;
									break;
								}
							}
							if (flag) {
								seq.push({"x" : (x * 4 + dx[q] * 2) * scale_x,
										  "y" : (y * 4 + dy[q] * 2) * scale_y,
										  "width" : cascade.width * scale_x,
										  "height" : cascade.height * scale_y,
										  "neighbor" : 1,
										  "confidence" : sum});
							}
							u8o[0] += 16;
							u8o[1] += 8;
							u8o[2] += 4;
						}
						u8o[0] += paddings[0];
						u8o[1] += paddings[1];
						u8o[2] += paddings[2];
					}
				}
				scale_x *= scale;
				scale_y *= scale;
			}
			return seq;
		};

		function post(seq) {
			var min_neighbors = this.shared.min_neighbors;
			var cascade = this.shared.cascade;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var i, j;
			for (i = 0; i < cascade.stage_classifier.length; i++)
				cascade.stage_classifier[i].feature = cascade.stage_classifier[i].orig_feature;
			seq = seq[0];
			if (!(min_neighbors > 0))
				return seq;
			else {
				var result = ccv.array_group(seq, function (r1, r2) {
					var distance = Math.floor(r1.width * 0.25 + 0.5);

					return r2.x <= r1.x + distance &&
						   r2.x >= r1.x - distance &&
						   r2.y <= r1.y + distance &&
						   r2.y >= r1.y - distance &&
						   r2.width <= Math.floor(r1.width * 1.5 + 0.5) &&
						   Math.floor(r2.width * 1.5 + 0.5) >= r1.width;
				});
				var ncomp = result.cat;
				var idx_seq = result.index;
				var comps = new Array(ncomp + 1);
				for (i = 0; i < comps.length; i++)
					comps[i] = {"neighbors" : 0,
								"x" : 0,
								"y" : 0,
								"width" : 0,
								"height" : 0,
								"confidence" : 0};

				// count number of neighbors
				for(i = 0; i < seq.length; i++)
				{
					var r1 = seq[i];
					var idx = idx_seq[i];

					if (comps[idx].neighbors == 0)
						comps[idx].confidence = r1.confidence;

					++comps[idx].neighbors;

					comps[idx].x += r1.x;
					comps[idx].y += r1.y;
					comps[idx].width += r1.width;
					comps[idx].height += r1.height;
					comps[idx].confidence = Math.max(comps[idx].confidence, r1.confidence);
				}

				var seq2 = [];
				// calculate average bounding box
				for(i = 0; i < ncomp; i++)
				{
					var n = comps[i].neighbors;
					if (n >= min_neighbors)
						seq2.push({"x" : (comps[i].x * 2 + n) / (2 * n),
								   "y" : (comps[i].y * 2 + n) / (2 * n),
								   "width" : (comps[i].width * 2 + n) / (2 * n),
								   "height" : (comps[i].height * 2 + n) / (2 * n),
								   "neighbors" : comps[i].neighbors,
								   "confidence" : comps[i].confidence});
				}

				var result_seq = [];
				// filter out small face rectangles inside large face rectangles
				for(i = 0; i < seq2.length; i++)
				{
					var r1 = seq2[i];
					var flag = true;
					for(j = 0; j < seq2.length; j++)
					{
						var r2 = seq2[j];
						var distance = Math.floor(r2.width * 0.25 + 0.5);

						if(i != j &&
						   r1.x >= r2.x - distance &&
						   r1.y >= r2.y - distance &&
						   r1.x + r1.width <= r2.x + r2.width + distance &&
						   r1.y + r1.height <= r2.y + r2.height + distance &&
						   (r2.neighbors > Math.max(3, r1.neighbors) || r1.neighbors < 3))
						{
							flag = false;
							break;
						}
					}

					if(flag)
						result_seq.push(r1);
				}
				return result_seq;
			}
		};
		return { "pre" : pre, "core" : core, "post" : post };
	})
}

onmessage = function (event) {
	var data = (typeof event.data == "string") ? JSON.parse(event.data) : event.data;
	var scope = { "shared" : data.shared };
	var result = parallable.core[data.name].apply(scope, [data.input, data.id, data.worker]);
	try {
		postMessage(result);
	} catch (e) {
		postMessage(JSON.stringify(result));
	}
}

/*** <End:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/glasses/ccv.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/glasses/face.js"> ***/
var cascade = {"count" : 16, "width" : 24, "height" : 24, "stage_classifier" : [{"count":4,"threshold":-4.577530e+00,"feature":[{"size":4,"px":[3,5,8,11],"py":[2,2,6,3],"pz":[2,1,1,0],"nx":[8,4,0,0],"ny":[4,4,0,0],"nz":[1,1,-1,-1]},{"size":3,"px":[3,6,7],"py":[7,13,0],"pz":[1,0,-1],"nx":[2,3,4],"ny":[5,4,4],"nz":[2,1,1]},{"size":5,"px":[5,3,10,13,11],"py":[1,0,3,2,2],"pz":[1,2,0,0,0],"nx":[0,11,0,11,11],"ny":[0,2,3,1,1],"nz":[1,1,0,1,-1]},{"size":5,"px":[6,12,12,9,12],"py":[4,13,12,7,11],"pz":[1,0,0,1,0],"nx":[8,0,8,2,11],"ny":[4,0,8,5,1],"nz":[1,-1,-1,-1,-1]}],"alpha":[-2.879683e+00,2.879683e+00,-1.569341e+00,1.569341e+00,-1.286131e+00,1.286131e+00,-1.157626e+00,1.157626e+00]},{"count":4,"threshold":-4.339908e+00,"feature":[{"size":5,"px":[13,12,3,11,17],"py":[3,3,1,4,13],"pz":[0,0,2,0,0],"nx":[4,3,8,15,15],"ny":[4,5,4,8,8],"nz":[1,2,1,0,-1]},{"size":5,"px":[6,7,6,3,3],"py":[13,13,4,2,7],"pz":[0,0,1,2,1],"nx":[4,8,3,0,15],"ny":[4,4,4,3,8],"nz":[1,1,-1,-1,-1]},{"size":3,"px":[2,2,11],"py":[3,2,5],"pz":[2,2,0],"nx":[3,8,3],"ny":[4,4,4],"nz":[1,-1,-1]},{"size":5,"px":[15,13,9,11,7],"py":[2,1,2,1,0],"pz":[0,0,0,0,1],"nx":[23,11,23,22,23],"ny":[1,0,2,0,0],"nz":[0,1,0,0,0]}],"alpha":[-2.466029e+00,2.466029e+00,-1.839510e+00,1.839510e+00,-1.060559e+00,1.060559e+00,-1.094927e+00,1.094927e+00]},{"count":7,"threshold":-5.052474e+00,"feature":[{"size":5,"px":[17,13,3,11,10],"py":[13,2,1,4,3],"pz":[0,0,2,0,0],"nx":[4,8,8,3,7],"ny":[2,8,4,5,4],"nz":[2,0,1,2,1]},{"size":5,"px":[6,7,3,6,6],"py":[4,12,2,13,14],"pz":[1,0,2,0,0],"nx":[8,3,4,4,3],"ny":[4,4,2,0,2],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[7,4,5,3,3],"py":[2,1,3,1,1],"pz":[0,1,0,1,-1],"nx":[1,0,1,1,0],"ny":[1,3,2,0,4],"nz":[0,0,0,0,0]},{"size":5,"px":[11,11,11,3,2],"py":[11,13,10,7,2],"pz":[0,0,0,1,2],"nx":[4,1,8,2,0],"ny":[4,1,12,0,4],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[9,13,1],"py":[7,19,4],"pz":[1,-1,-1],"nx":[4,7,4],"ny":[5,8,2],"nz":[2,1,2]},{"size":5,"px":[12,8,16,4,4],"py":[12,1,2,0,0],"pz":[0,1,0,2,-1],"nx":[11,22,11,23,23],"ny":[2,0,1,1,5],"nz":[1,0,1,0,0]},{"size":3,"px":[11,17,17],"py":[6,11,12],"pz":[0,0,0],"nx":[15,1,11],"ny":[9,1,1],"nz":[0,-1,-1]}],"alpha":[-2.156890e+00,2.156890e+00,-1.718246e+00,1.718246e+00,-9.651329e-01,9.651329e-01,-9.948090e-01,9.948090e-01,-8.802466e-01,8.802466e-01,-8.486741e-01,8.486741e-01,-8.141777e-01,8.141777e-01]},{"count":13,"threshold":-5.774400e+00,"feature":[{"size":5,"px":[6,10,3,12,14],"py":[5,3,1,2,2],"pz":[1,0,2,0,0],"nx":[3,4,14,8,4],"ny":[5,4,8,4,2],"nz":[2,1,0,1,2]},{"size":5,"px":[10,6,11,5,12],"py":[4,13,4,2,4],"pz":[0,0,0,1,0],"nx":[1,4,8,1,1],"ny":[2,4,4,4,3],"nz":[0,1,1,0,0]},{"size":3,"px":[18,6,12],"py":[12,4,8],"pz":[0,1,0],"nx":[7,4,8],"ny":[4,2,4],"nz":[1,-1,-1]},{"size":5,"px":[7,5,6,3,17],"py":[13,12,3,8,13],"pz":[0,0,1,1,0],"nx":[3,3,0,1,8],"ny":[4,5,5,10,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[16,7,16,7,7],"py":[1,1,2,0,0],"pz":[0,1,0,1,-1],"nx":[23,23,23,11,5],"ny":[2,14,1,2,1],"nz":[0,0,0,1,2]},{"size":3,"px":[9,18,16],"py":[7,14,2],"pz":[1,0,-1],"nx":[8,4,9],"ny":[10,2,4],"nz":[1,2,1]},{"size":4,"px":[3,16,1,22],"py":[7,4,5,11],"pz":[1,-1,-1,-1],"nx":[3,9,4,2],"ny":[4,9,7,5],"nz":[1,0,1,2]},{"size":5,"px":[4,7,8,8,9],"py":[0,2,2,1,1],"pz":[1,0,0,0,0],"nx":[0,0,1,0,0],"ny":[15,16,19,0,14],"nz":[0,0,0,1,0]},{"size":5,"px":[4,4,7,8,12],"py":[2,5,6,7,10],"pz":[2,2,1,1,0],"nx":[8,5,10,0,0],"ny":[4,2,5,3,14],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[11,0],"py":[13,4],"pz":[0,-1],"nx":[3,14],"ny":[4,16],"nz":[1,0]},{"size":5,"px":[17,8,18,4,4],"py":[3,1,3,0,0],"pz":[0,1,0,2,-1],"nx":[21,22,5,11,22],"ny":[0,1,0,1,2],"nz":[0,0,2,1,0]},{"size":4,"px":[7,8,2,11],"py":[13,12,2,7],"pz":[0,0,2,0],"nx":[4,0,23,3],"ny":[4,1,1,11],"nz":[1,-1,-1,-1]},{"size":5,"px":[4,18,8,9,15],"py":[4,16,7,7,23],"pz":[2,0,1,1,0],"nx":[0,1,1,1,1],"ny":[10,21,23,22,22],"nz":[1,0,0,0,-1]}],"alpha":[-1.956565e+00,1.956565e+00,-1.262438e+00,1.262438e+00,-1.056941e+00,1.056941e+00,-9.712509e-01,9.712509e-01,-8.261028e-01,8.261028e-01,-8.456506e-01,8.456506e-01,-6.652113e-01,6.652113e-01,-6.026287e-01,6.026287e-01,-6.915425e-01,6.915425e-01,-5.539286e-01,5.539286e-01,-5.515072e-01,5.515072e-01,-6.685884e-01,6.685884e-01,-4.656070e-01,4.656070e-01]},{"count":20,"threshold":-5.606853e+00,"feature":[{"size":5,"px":[17,11,6,14,9],"py":[13,4,4,3,3],"pz":[0,0,1,0,0],"nx":[14,4,8,7,8],"ny":[8,4,4,4,8],"nz":[0,1,1,1,0]},{"size":5,"px":[3,9,10,11,11],"py":[7,2,2,3,3],"pz":[1,0,0,0,-1],"nx":[3,8,4,2,5],"ny":[4,4,10,2,8],"nz":[1,1,1,2,1]},{"size":5,"px":[12,12,12,5,12],"py":[12,9,10,12,11],"pz":[0,0,0,0,0],"nx":[0,0,0,0,0],"ny":[2,1,3,0,0],"nz":[0,0,0,0,-1]},{"size":5,"px":[9,18,9,9,12],"py":[7,14,19,5,11],"pz":[1,-1,-1,-1,-1],"nx":[23,4,23,23,8],"ny":[13,5,14,16,4],"nz":[0,2,0,0,1]},{"size":5,"px":[12,12,12,6,1],"py":[13,11,12,6,5],"pz":[0,0,0,-1,-1],"nx":[4,6,8,4,9],"ny":[2,8,4,4,4],"nz":[2,1,1,1,1]},{"size":4,"px":[12,11,11,6],"py":[5,5,6,13],"pz":[0,0,0,0],"nx":[8,3,2,8],"ny":[4,4,17,2],"nz":[1,1,-1,-1]},{"size":5,"px":[3,14,12,15,13],"py":[0,2,2,2,2],"pz":[2,0,0,0,0],"nx":[22,23,22,23,7],"ny":[0,3,1,2,4],"nz":[0,0,0,0,1]},{"size":5,"px":[16,15,18,19,9],"py":[12,11,12,12,9],"pz":[0,0,0,0,1],"nx":[8,2,22,23,21],"ny":[4,1,1,2,20],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[4,7,7],"py":[0,2,2],"pz":[1,0,-1],"nx":[1,2,2],"ny":[2,0,2],"nz":[1,0,0]},{"size":3,"px":[4,11,11],"py":[6,9,8],"pz":[1,0,0],"nx":[9,2,8],"ny":[9,4,5],"nz":[0,-1,-1]},{"size":4,"px":[2,7,6,6],"py":[4,23,21,22],"pz":[2,0,0,0],"nx":[9,3,8,17],"ny":[21,2,5,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,8],"py":[4,12],"pz":[2,0],"nx":[3,0],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[4,5,1,8,4],"py":[15,12,3,23,12],"pz":[0,0,2,0,0],"nx":[0,0,0,0,0],"ny":[23,10,22,21,11],"nz":[0,1,0,0,-1]},{"size":2,"px":[21,5],"py":[13,4],"pz":[0,2],"nx":[23,4],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[15,17],"py":[2,3],"pz":[0,0],"nx":[19,20],"ny":[2,1],"nz":[0,0]},{"size":5,"px":[12,1,8,17,4],"py":[14,2,13,6,12],"pz":[0,-1,-1,-1,-1],"nx":[8,13,15,15,7],"ny":[10,9,15,14,8],"nz":[1,0,0,0,1]},{"size":2,"px":[8,5],"py":[7,4],"pz":[1,-1],"nx":[4,13],"ny":[2,21],"nz":[2,0]},{"size":2,"px":[3,4],"py":[7,0],"pz":[1,-1],"nx":[4,2],"ny":[7,5],"nz":[1,2]},{"size":4,"px":[4,14,3,11],"py":[3,23,2,5],"pz":[2,0,2,0],"nx":[7,8,2,16],"ny":[8,0,1,15],"nz":[0,-1,-1,-1]},{"size":2,"px":[9,8],"py":[0,0],"pz":[0,0],"nx":[2,2],"ny":[3,5],"nz":[2,2]}],"alpha":[-1.957970e+00,1.957970e+00,-1.225984e+00,1.225984e+00,-8.310246e-01,8.310246e-01,-8.315741e-01,8.315741e-01,-7.973616e-01,7.973616e-01,-7.661959e-01,7.661959e-01,-6.042118e-01,6.042118e-01,-6.506833e-01,6.506833e-01,-4.808219e-01,4.808219e-01,-6.079504e-01,6.079504e-01,-5.163994e-01,5.163994e-01,-5.268142e-01,5.268142e-01,-4.935685e-01,4.935685e-01,-4.427544e-01,4.427544e-01,-4.053949e-01,4.053949e-01,-4.701274e-01,4.701274e-01,-4.387648e-01,4.387648e-01,-4.305499e-01,4.305499e-01,-4.042607e-01,4.042607e-01,-4.372088e-01,4.372088e-01]},{"count":22,"threshold":-5.679317e+00,"feature":[{"size":5,"px":[11,3,17,14,13],"py":[4,0,13,2,3],"pz":[0,2,0,0,0],"nx":[7,4,14,23,11],"ny":[8,4,8,4,0],"nz":[1,1,0,0,1]},{"size":5,"px":[7,12,6,12,12],"py":[12,8,3,10,9],"pz":[0,0,1,0,0],"nx":[4,9,8,15,15],"ny":[4,8,4,8,8],"nz":[1,0,1,0,-1]},{"size":3,"px":[4,2,10],"py":[1,4,1],"pz":[1,2,0],"nx":[2,3,8],"ny":[5,4,4],"nz":[2,1,-1]},{"size":5,"px":[3,17,6,6,16],"py":[2,12,4,14,12],"pz":[2,0,1,0,0],"nx":[8,3,7,5,15],"ny":[4,4,4,4,8],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[5,6,7,4,8],"py":[3,3,3,1,3],"pz":[0,0,0,1,0],"nx":[0,0,0,0,1],"ny":[5,4,3,2,0],"nz":[0,0,0,0,0]},{"size":3,"px":[18,9,0],"py":[14,7,0],"pz":[0,1,-1],"nx":[8,14,8],"ny":[10,9,4],"nz":[1,0,1]},{"size":2,"px":[9,5],"py":[18,13],"pz":[0,0],"nx":[10,3],"ny":[16,4],"nz":[0,-1]},{"size":5,"px":[11,11,11,11,6],"py":[10,12,11,13,6],"pz":[0,0,0,0,-1],"nx":[5,21,22,22,22],"ny":[4,22,17,19,18],"nz":[2,0,0,0,0]},{"size":4,"px":[8,9,15,4],"py":[7,7,23,4],"pz":[1,1,0,2],"nx":[8,5,0,3],"ny":[4,18,4,9],"nz":[1,-1,-1,-1]},{"size":5,"px":[11,10,12,11,11],"py":[4,4,4,5,5],"pz":[0,0,0,0,-1],"nx":[4,6,8,2,8],"ny":[4,9,9,2,4],"nz":[1,1,0,2,1]},{"size":5,"px":[2,2,3,3,4],"py":[10,9,14,13,15],"pz":[1,1,0,0,0],"nx":[0,0,0,0,0],"ny":[5,9,10,19,18],"nz":[2,1,1,0,-1]},{"size":2,"px":[11,11],"py":[13,12],"pz":[0,0],"nx":[9,2],"ny":[15,2],"nz":[0,-1]},{"size":5,"px":[2,4,3,3,4],"py":[5,11,6,9,12],"pz":[1,0,1,0,0],"nx":[6,2,11,11,0],"ny":[9,1,5,20,18],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[18,9,17,19,16],"py":[2,0,2,2,1],"pz":[0,1,0,0,0],"nx":[22,23,11,23,23],"ny":[0,2,0,1,1],"nz":[0,0,1,0,-1]},{"size":5,"px":[5,5,6,7,6],"py":[17,16,15,23,22],"pz":[0,0,0,0,0],"nx":[7,6,2,5,23],"ny":[8,1,2,3,1],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[12,12,11,10,6],"py":[14,13,18,4,22],"pz":[0,-1,-1,-1,-1],"nx":[3,2,4,1,2],"ny":[19,4,23,13,16],"nz":[0,0,0,0,0]},{"size":4,"px":[11,16,11,17],"py":[7,11,8,12],"pz":[0,0,0,0],"nx":[7,14,10,4],"ny":[4,7,10,4],"nz":[1,0,-1,-1]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[4,2],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[3,9],"py":[0,1],"pz":[1,0],"nx":[4,5],"ny":[1,0],"nz":[0,0]},{"size":2,"px":[14,16],"py":[3,3],"pz":[0,0],"nx":[9,14],"ny":[4,21],"nz":[1,0]},{"size":2,"px":[9,1],"py":[7,1],"pz":[1,-1],"nx":[8,9],"ny":[7,4],"nz":[1,1]},{"size":2,"px":[1,0],"py":[8,3],"pz":[0,2],"nx":[20,0],"ny":[3,3],"nz":[0,-1]}],"alpha":[-1.581077e+00,1.581077e+00,-1.389689e+00,1.389689e+00,-8.733094e-01,8.733094e-01,-8.525177e-01,8.525177e-01,-7.416304e-01,7.416304e-01,-6.609002e-01,6.609002e-01,-7.119043e-01,7.119043e-01,-6.204438e-01,6.204438e-01,-6.638519e-01,6.638519e-01,-5.518876e-01,5.518876e-01,-4.898991e-01,4.898991e-01,-5.508243e-01,5.508243e-01,-4.635525e-01,4.635525e-01,-5.163159e-01,5.163159e-01,-4.495338e-01,4.495338e-01,-4.515036e-01,4.515036e-01,-5.130473e-01,5.130473e-01,-4.694233e-01,4.694233e-01,-4.022514e-01,4.022514e-01,-4.055690e-01,4.055690e-01,-4.151817e-01,4.151817e-01,-3.352302e-01,3.352302e-01]},{"count":32,"threshold":-5.363782e+00,"feature":[{"size":5,"px":[12,9,6,8,14],"py":[4,2,13,3,3],"pz":[0,0,0,0,0],"nx":[0,15,0,9,5],"ny":[2,7,3,8,8],"nz":[0,0,0,0,1]},{"size":5,"px":[13,16,3,6,11],"py":[3,13,1,4,3],"pz":[0,0,2,1,0],"nx":[7,4,8,14,14],"ny":[4,4,4,8,8],"nz":[1,1,1,0,-1]},{"size":5,"px":[10,19,18,19,19],"py":[6,13,13,12,12],"pz":[1,0,0,0,-1],"nx":[23,5,23,23,11],"ny":[12,2,13,14,8],"nz":[0,2,0,0,1]},{"size":5,"px":[12,12,12,12,6],"py":[11,13,12,10,6],"pz":[0,0,0,0,1],"nx":[6,8,3,9,9],"ny":[8,4,4,4,4],"nz":[1,1,1,1,-1]},{"size":5,"px":[5,3,5,8,11],"py":[12,8,3,11,8],"pz":[0,1,1,0,0],"nx":[4,0,1,1,9],"ny":[4,3,4,3,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[13,3,12,14,12],"py":[1,0,1,2,3],"pz":[0,2,0,0,0],"nx":[7,9,8,4,4],"ny":[5,4,10,2,2],"nz":[1,1,1,2,-1]},{"size":5,"px":[18,16,12,15,8],"py":[12,23,7,11,8],"pz":[0,0,0,0,1],"nx":[8,6,10,12,4],"ny":[4,4,10,6,3],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[4,4,5,2,2],"py":[13,14,14,7,7],"pz":[0,0,0,1,-1],"nx":[0,0,0,0,1],"ny":[15,4,14,13,17],"nz":[0,2,0,0,0]},{"size":2,"px":[9,9],"py":[7,7],"pz":[1,-1],"nx":[4,7],"ny":[5,8],"nz":[2,1]},{"size":5,"px":[3,4,6,5,4],"py":[2,2,14,6,9],"pz":[1,1,0,1,1],"nx":[23,23,23,23,11],"ny":[0,3,2,1,0],"nz":[0,0,0,0,-1]},{"size":3,"px":[10,2,3],"py":[23,4,7],"pz":[0,2,1],"nx":[10,21,23],"ny":[21,9,2],"nz":[0,-1,-1]},{"size":5,"px":[20,21,21,10,12],"py":[13,12,8,8,12],"pz":[0,0,0,1,0],"nx":[8,16,3,3,11],"ny":[4,8,4,3,0],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[2,21],"py":[4,12],"pz":[2,-1],"nx":[2,3],"ny":[5,4],"nz":[2,1]},{"size":5,"px":[8,5,6,8,7],"py":[0,2,1,1,1],"pz":[0,0,0,0,0],"nx":[3,2,2,2,2],"ny":[0,0,1,2,2],"nz":[0,0,0,0,-1]},{"size":5,"px":[11,2,2,11,10],"py":[10,12,8,11,12],"pz":[0,0,0,0,0],"nx":[3,5,2,4,2],"ny":[4,1,4,2,2],"nz":[1,-1,-1,-1,-1]},{"size":4,"px":[15,16,8,17],"py":[2,1,0,2],"pz":[0,0,1,0],"nx":[19,20,0,8],"ny":[1,2,11,10],"nz":[0,0,-1,-1]},{"size":2,"px":[17,16],"py":[12,12],"pz":[0,0],"nx":[8,9],"ny":[5,1],"nz":[1,-1]},{"size":4,"px":[11,11,0,0],"py":[12,13,0,0],"pz":[0,0,-1,-1],"nx":[10,10,9,10],"ny":[10,12,13,11],"nz":[0,0,0,0]},{"size":3,"px":[11,10,8],"py":[5,2,6],"pz":[0,-1,-1],"nx":[8,12,4],"ny":[4,17,4],"nz":[1,0,1]},{"size":5,"px":[10,21,10,20,20],"py":[11,13,7,13,14],"pz":[1,0,1,0,0],"nx":[23,23,11,23,17],"ny":[23,22,11,21,21],"nz":[0,0,1,-1,-1]},{"size":2,"px":[4,7],"py":[3,9],"pz":[2,1],"nx":[9,23],"ny":[4,22],"nz":[1,-1]},{"size":4,"px":[3,2,2,5],"py":[11,5,4,20],"pz":[1,2,2,0],"nx":[4,23,11,23],"ny":[10,22,11,21],"nz":[1,-1,-1,-1]},{"size":2,"px":[7,5],"py":[13,4],"pz":[0,-1],"nx":[4,4],"ny":[8,6],"nz":[1,1]},{"size":2,"px":[2,5],"py":[4,9],"pz":[2,1],"nx":[10,10],"ny":[16,16],"nz":[0,-1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,0],"ny":[4,0],"nz":[1,-1]},{"size":5,"px":[7,3,12,13,6],"py":[11,5,23,23,7],"pz":[1,2,0,0,1],"nx":[1,0,0,0,0],"ny":[23,20,19,21,21],"nz":[0,0,0,0,-1]},{"size":5,"px":[0,0,0,0,0],"py":[10,9,6,13,13],"pz":[0,0,1,0,-1],"nx":[8,8,4,4,9],"ny":[4,11,5,4,5],"nz":[1,1,2,2,1]},{"size":2,"px":[9,18],"py":[8,15],"pz":[1,0],"nx":[15,4],"ny":[15,2],"nz":[0,-1]},{"size":2,"px":[5,13],"py":[6,17],"pz":[1,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[19,10,20,18,18],"py":[2,0,2,2,2],"pz":[0,1,0,0,-1],"nx":[22,23,22,11,23],"ny":[1,3,0,1,2],"nz":[0,0,0,1,0]},{"size":5,"px":[4,2,2,2,6],"py":[7,2,5,4,14],"pz":[1,2,2,2,0],"nx":[16,7,9,15,23],"ny":[8,0,3,11,2],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[10,10,9,9,5],"py":[2,0,0,1,0],"pz":[0,0,0,0,1],"nx":[3,2,3,2,2],"ny":[11,3,9,5,5],"nz":[1,2,1,2,-1]}],"alpha":[-1.490426e+00,1.490426e+00,-1.214280e+00,1.214280e+00,-8.124863e-01,8.124863e-01,-7.307594e-01,7.307594e-01,-7.377259e-01,7.377259e-01,-5.982859e-01,5.982859e-01,-6.451736e-01,6.451736e-01,-6.117417e-01,6.117417e-01,-5.438949e-01,5.438949e-01,-4.563701e-01,4.563701e-01,-4.975362e-01,4.975362e-01,-4.707373e-01,4.707373e-01,-5.013868e-01,5.013868e-01,-5.139018e-01,5.139018e-01,-4.728007e-01,4.728007e-01,-4.839748e-01,4.839748e-01,-4.852528e-01,4.852528e-01,-5.768956e-01,5.768956e-01,-3.635091e-01,3.635091e-01,-4.190090e-01,4.190090e-01,-3.854715e-01,3.854715e-01,-3.409591e-01,3.409591e-01,-3.440222e-01,3.440222e-01,-3.375895e-01,3.375895e-01,-3.367032e-01,3.367032e-01,-3.708106e-01,3.708106e-01,-3.260956e-01,3.260956e-01,-3.657681e-01,3.657681e-01,-3.518800e-01,3.518800e-01,-3.845758e-01,3.845758e-01,-2.832236e-01,2.832236e-01,-2.865156e-01,2.865156e-01]},{"count":45,"threshold":-5.479836e+00,"feature":[{"size":5,"px":[15,6,17,6,9],"py":[2,13,13,4,3],"pz":[0,0,0,1,0],"nx":[3,9,4,8,14],"ny":[5,8,4,4,8],"nz":[2,0,1,1,0]},{"size":5,"px":[9,8,11,6,7],"py":[1,2,3,14,2],"pz":[0,0,0,0,0],"nx":[0,0,4,0,0],"ny":[4,2,4,1,0],"nz":[0,0,1,0,0]},{"size":5,"px":[2,2,11,11,11],"py":[2,4,10,8,6],"pz":[2,2,0,0,0],"nx":[8,4,3,23,23],"ny":[4,4,4,16,18],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[18,16,17,15,9],"py":[2,2,2,2,1],"pz":[0,0,0,0,1],"nx":[22,22,21,23,23],"ny":[1,2,0,5,4],"nz":[0,0,0,0,0]},{"size":5,"px":[15,3,17,18,6],"py":[11,2,11,11,4],"pz":[0,2,0,0,1],"nx":[3,8,1,4,23],"ny":[4,4,3,9,4],"nz":[1,1,-1,-1,-1]},{"size":2,"px":[4,5],"py":[4,0],"pz":[2,-1],"nx":[7,4],"ny":[8,5],"nz":[1,2]},{"size":2,"px":[11,5],"py":[12,5],"pz":[0,-1],"nx":[4,9],"ny":[10,15],"nz":[1,0]},{"size":4,"px":[2,2,7,1],"py":[7,7,3,4],"pz":[1,-1,-1,-1],"nx":[0,2,1,2],"ny":[6,20,14,16],"nz":[1,0,0,0]},{"size":5,"px":[14,12,12,13,9],"py":[23,5,6,5,7],"pz":[0,0,0,0,1],"nx":[8,18,2,8,14],"ny":[4,9,0,12,7],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[3,10,13,11,9],"py":[0,3,2,3,2],"pz":[2,0,0,0,0],"nx":[3,11,22,22,22],"ny":[2,6,15,2,0],"nz":[2,1,0,0,0]},{"size":5,"px":[8,7,5,8,5],"py":[23,12,12,12,13],"pz":[0,0,0,0,0],"nx":[3,18,3,1,22],"ny":[4,4,4,2,0],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[22,22,22,21,22],"py":[9,11,10,14,12],"pz":[0,0,0,0,0],"nx":[23,23,11,1,22],"ny":[23,23,11,2,0],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[9,3],"py":[18,7],"pz":[0,1],"nx":[10,8],"ny":[16,19],"nz":[0,-1]},{"size":5,"px":[10,12,11,6,6],"py":[4,4,4,2,2],"pz":[0,0,0,1,-1],"nx":[3,8,7,8,4],"ny":[5,4,4,10,4],"nz":[2,1,1,0,1]},{"size":4,"px":[12,12,4,15],"py":[13,12,0,11],"pz":[0,0,-1,-1],"nx":[13,14,13,14],"ny":[9,12,10,13],"nz":[0,0,0,0]},{"size":2,"px":[4,4],"py":[3,3],"pz":[2,-1],"nx":[9,4],"ny":[4,2],"nz":[1,2]},{"size":3,"px":[9,7,0],"py":[7,5,5],"pz":[1,-1,-1],"nx":[4,15,9],"ny":[5,14,9],"nz":[2,0,1]},{"size":5,"px":[15,20,7,10,16],"py":[17,12,6,4,23],"pz":[0,0,1,1,0],"nx":[1,2,2,1,1],"ny":[3,0,1,2,2],"nz":[0,0,0,0,-1]},{"size":5,"px":[2,1,1,11,2],"py":[16,4,5,12,14],"pz":[0,1,1,0,0],"nx":[4,6,3,19,1],"ny":[4,2,5,19,2],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[15,14,14],"py":[1,1,0],"pz":[0,0,0],"nx":[4,8,4],"ny":[3,4,2],"nz":[2,1,2]},{"size":5,"px":[2,3,1,2,7],"py":[8,12,4,9,13],"pz":[1,0,2,1,0],"nx":[1,1,0,0,0],"ny":[21,20,18,17,9],"nz":[0,0,0,0,1]},{"size":5,"px":[17,15,17,16,16],"py":[12,12,22,23,12],"pz":[0,0,0,0,0],"nx":[7,3,16,1,0],"ny":[8,6,8,3,9],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[9,17,18,18,18],"py":[6,12,12,13,13],"pz":[1,0,0,0,-1],"nx":[23,23,20,11,11],"ny":[12,13,23,7,8],"nz":[0,0,0,1,1]},{"size":2,"px":[2,4],"py":[4,7],"pz":[2,1],"nx":[4,4],"ny":[10,5],"nz":[1,-1]},{"size":4,"px":[4,22,19,12],"py":[5,8,14,9],"pz":[2,0,0,0],"nx":[8,4,4,2],"ny":[4,4,1,2],"nz":[1,-1,-1,-1]},{"size":2,"px":[3,21],"py":[7,14],"pz":[1,-1],"nx":[4,2],"ny":[7,2],"nz":[1,2]},{"size":3,"px":[7,4,17],"py":[3,1,6],"pz":[0,1,-1],"nx":[3,4,5],"ny":[0,2,1],"nz":[1,0,0]},{"size":4,"px":[15,7,14,0],"py":[3,1,3,7],"pz":[0,1,0,-1],"nx":[8,18,17,18],"ny":[0,1,1,2],"nz":[1,0,0,0]},{"size":5,"px":[12,12,12,12,6],"py":[10,11,12,13,6],"pz":[0,0,0,0,-1],"nx":[8,15,15,4,8],"ny":[10,10,9,2,4],"nz":[0,0,0,2,1]},{"size":2,"px":[17,12],"py":[13,11],"pz":[0,-1],"nx":[9,8],"ny":[4,10],"nz":[1,1]},{"size":5,"px":[0,0,0,0,0],"py":[10,9,12,11,4],"pz":[0,0,0,0,1],"nx":[8,9,8,9,9],"ny":[10,4,4,5,5],"nz":[1,1,1,1,-1]},{"size":3,"px":[7,0,1],"py":[1,9,8],"pz":[0,-1,-1],"nx":[4,3,3],"ny":[7,15,16],"nz":[0,0,0]},{"size":2,"px":[4,7],"py":[15,23],"pz":[0,0],"nx":[9,18],"ny":[21,3],"nz":[0,-1]},{"size":5,"px":[17,4,19,18,8],"py":[12,3,12,17,6],"pz":[0,2,0,0,1],"nx":[23,23,11,22,16],"ny":[0,1,0,21,-1],"nz":[0,0,-1,-1,-1]},{"size":2,"px":[7,4],"py":[13,5],"pz":[0,-1],"nx":[4,2],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[21,20,10,10,21],"py":[13,14,10,7,11],"pz":[0,0,1,1,0],"nx":[4,4,4,5,5],"ny":[18,17,19,20,20],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,3],"py":[11,13],"pz":[1,0],"nx":[12,4],"ny":[17,17],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[13,1],"pz":[0,-1],"nx":[1,2],"ny":[1,4],"nz":[2,1]},{"size":2,"px":[15,7],"py":[17,7],"pz":[0,1],"nx":[14,4],"ny":[15,3],"nz":[0,-1]},{"size":2,"px":[3,11],"py":[3,8],"pz":[2,0],"nx":[13,13],"ny":[9,8],"nz":[0,0]},{"size":2,"px":[8,3],"py":[11,2],"pz":[0,-1],"nx":[8,4],"ny":[9,5],"nz":[0,1]},{"size":3,"px":[12,6,9],"py":[9,10,11],"pz":[0,-1,-1],"nx":[2,1,5],"ny":[2,1,6],"nz":[2,2,1]},{"size":4,"px":[4,5,5,1],"py":[11,11,11,3],"pz":[1,0,1,2],"nx":[0,0,5,4],"ny":[23,22,0,0],"nz":[0,0,-1,-1]},{"size":5,"px":[15,7,17,15,16],"py":[1,0,2,2,0],"pz":[0,1,0,0,0],"nx":[7,4,7,4,8],"ny":[5,2,4,3,4],"nz":[1,2,1,2,-1]},{"size":2,"px":[6,12],"py":[11,23],"pz":[1,0],"nx":[12,4],"ny":[21,2],"nz":[0,-1]}],"alpha":[-1.535800e+00,1.535800e+00,-8.580514e-01,8.580514e-01,-8.625210e-01,8.625210e-01,-7.177500e-01,7.177500e-01,-6.832222e-01,6.832222e-01,-5.736298e-01,5.736298e-01,-5.028217e-01,5.028217e-01,-5.091788e-01,5.091788e-01,-5.791940e-01,5.791940e-01,-4.924942e-01,4.924942e-01,-5.489055e-01,5.489055e-01,-4.528190e-01,4.528190e-01,-4.748324e-01,4.748324e-01,-4.150403e-01,4.150403e-01,-4.820464e-01,4.820464e-01,-4.840212e-01,4.840212e-01,-3.941872e-01,3.941872e-01,-3.663507e-01,3.663507e-01,-3.814835e-01,3.814835e-01,-3.936426e-01,3.936426e-01,-3.049970e-01,3.049970e-01,-3.604256e-01,3.604256e-01,-3.974041e-01,3.974041e-01,-4.203486e-01,4.203486e-01,-3.174435e-01,3.174435e-01,-3.426336e-01,3.426336e-01,-4.492150e-01,4.492150e-01,-3.538784e-01,3.538784e-01,-3.679703e-01,3.679703e-01,-3.985452e-01,3.985452e-01,-2.884028e-01,2.884028e-01,-2.797264e-01,2.797264e-01,-2.664214e-01,2.664214e-01,-2.484857e-01,2.484857e-01,-2.581492e-01,2.581492e-01,-2.943778e-01,2.943778e-01,-2.315507e-01,2.315507e-01,-2.979337e-01,2.979337e-01,-2.976173e-01,2.976173e-01,-2.847965e-01,2.847965e-01,-2.814763e-01,2.814763e-01,-2.489068e-01,2.489068e-01,-2.632427e-01,2.632427e-01,-3.308292e-01,3.308292e-01,-2.790170e-01,2.790170e-01]},{"count":61,"threshold":-5.239104e+00,"feature":[{"size":5,"px":[8,8,11,15,6],"py":[3,6,5,3,4],"pz":[0,1,0,0,1],"nx":[3,9,14,8,4],"ny":[4,8,8,7,2],"nz":[1,0,0,0,2]},{"size":5,"px":[11,12,10,6,9],"py":[3,3,2,13,2],"pz":[0,0,0,0,0],"nx":[0,0,5,2,2],"ny":[13,1,8,5,2],"nz":[0,1,1,2,2]},{"size":5,"px":[11,5,11,11,4],"py":[9,13,10,11,6],"pz":[0,0,0,0,1],"nx":[4,15,9,3,3],"ny":[5,8,9,4,4],"nz":[1,0,0,1,-1]},{"size":5,"px":[15,16,8,17,17],"py":[1,2,0,2,2],"pz":[0,0,1,0,-1],"nx":[23,23,23,23,23],"ny":[4,0,2,3,1],"nz":[0,0,0,0,0]},{"size":4,"px":[9,18,17,18],"py":[7,13,13,14],"pz":[1,0,0,0],"nx":[9,7,4,8],"ny":[4,10,2,4],"nz":[1,1,2,1]},{"size":5,"px":[12,11,12,12,6],"py":[6,5,14,5,3],"pz":[0,0,0,0,1],"nx":[13,8,14,7,7],"ny":[16,4,7,4,4],"nz":[0,1,0,1,-1]},{"size":5,"px":[12,6,3,7,12],"py":[7,12,7,11,8],"pz":[0,0,1,0,0],"nx":[16,4,4,4,7],"ny":[8,4,4,4,4],"nz":[0,1,-1,-1,-1]},{"size":5,"px":[6,4,5,3,3],"py":[2,3,2,0,0],"pz":[0,0,0,1,-1],"nx":[1,0,1,0,0],"ny":[0,3,1,1,2],"nz":[0,0,0,1,0]},{"size":2,"px":[15,9],"py":[11,6],"pz":[0,1],"nx":[14,5],"ny":[9,11],"nz":[0,-1]},{"size":5,"px":[10,19,19,10,20],"py":[7,20,14,6,12],"pz":[1,0,0,1,0],"nx":[23,22,11,23,23],"ny":[21,23,9,20,20],"nz":[0,0,1,0,-1]},{"size":5,"px":[1,1,5,1,1],"py":[8,6,6,9,4],"pz":[0,1,1,0,2],"nx":[3,3,3,2,5],"ny":[4,4,2,5,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[13,12,3,11,11],"py":[2,2,0,1,2],"pz":[0,0,2,0,0],"nx":[3,6,8,4,3],"ny":[2,9,4,4,5],"nz":[2,1,1,1,-1]},{"size":3,"px":[12,12,6],"py":[11,12,9],"pz":[0,0,-1],"nx":[2,1,9],"ny":[6,1,14],"nz":[0,2,0]},{"size":5,"px":[6,3,17,16,16],"py":[4,2,14,23,13],"pz":[1,2,0,0,0],"nx":[8,10,21,5,1],"ny":[4,10,11,0,0],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[5,6,1,3,3],"py":[15,14,4,7,7],"pz":[0,0,2,1,-1],"nx":[1,0,0,1,1],"ny":[5,8,7,18,17],"nz":[2,1,1,0,0]},{"size":4,"px":[6,12,5,3],"py":[6,12,2,7],"pz":[1,-1,-1,-1],"nx":[14,13,13,7],"ny":[12,10,9,8],"nz":[0,0,0,1]},{"size":2,"px":[3,6],"py":[7,15],"pz":[1,0],"nx":[3,3],"ny":[4,2],"nz":[1,-1]},{"size":4,"px":[11,10,12,2],"py":[18,18,18,3],"pz":[0,0,0,2],"nx":[11,17,4,16],"ny":[16,4,4,21],"nz":[0,-1,-1,-1]},{"size":5,"px":[9,8,8,5,2],"py":[4,4,4,2,3],"pz":[0,0,-1,-1,-1],"nx":[2,2,4,4,2],"ny":[1,2,10,5,4],"nz":[2,2,1,1,2]},{"size":4,"px":[8,18,14,18],"py":[7,16,23,15],"pz":[1,0,0,0],"nx":[14,3,1,0],"ny":[21,1,9,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[12,3],"py":[9,5],"pz":[0,2],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[9,9],"py":[1,1],"pz":[1,-1],"nx":[19,20],"ny":[1,2],"nz":[0,0]},{"size":3,"px":[10,10,10],"py":[6,6,8],"pz":[1,-1,-1],"nx":[22,21,22],"ny":[13,18,12],"nz":[0,0,0]},{"size":2,"px":[2,2],"py":[4,1],"pz":[2,-1],"nx":[2,4],"ny":[5,4],"nz":[2,1]},{"size":5,"px":[21,21,21,21,21],"py":[19,17,18,15,16],"pz":[0,0,0,0,0],"nx":[11,21,6,1,21],"ny":[17,1,10,0,2],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[7,3,4,4,4],"py":[23,13,14,16,13],"pz":[0,0,0,0,0],"nx":[21,22,22,22,22],"ny":[23,21,20,19,19],"nz":[0,0,0,0,-1]},{"size":2,"px":[11,8],"py":[6,6],"pz":[0,1],"nx":[8,4],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[23,23,11,23,23],"py":[8,12,6,11,10],"pz":[0,0,1,0,0],"nx":[4,4,3,8,8],"ny":[3,8,4,4,4],"nz":[1,1,1,1,-1]},{"size":5,"px":[8,9,4,7,10],"py":[2,1,0,2,1],"pz":[0,0,1,0,0],"nx":[5,5,6,4,4],"ny":[1,0,0,2,1],"nz":[0,0,0,0,-1]},{"size":2,"px":[12,2],"py":[13,6],"pz":[0,-1],"nx":[15,9],"ny":[15,4],"nz":[0,1]},{"size":2,"px":[2,4],"py":[4,9],"pz":[2,1],"nx":[3,13],"ny":[4,1],"nz":[1,-1]},{"size":3,"px":[3,6,2],"py":[10,22,4],"pz":[1,0,2],"nx":[4,2,1],"ny":[10,4,3],"nz":[1,-1,-1]},{"size":2,"px":[1,0],"py":[9,7],"pz":[0,1],"nx":[0,0],"ny":[23,22],"nz":[0,0]},{"size":2,"px":[8,7],"py":[0,1],"pz":[0,0],"nx":[4,4],"ny":[8,8],"nz":[1,-1]},{"size":5,"px":[7,4,4,6,3],"py":[8,4,5,5,3],"pz":[1,2,2,1,2],"nx":[1,0,2,0,0],"ny":[1,0,0,2,4],"nz":[0,2,0,1,-1]},{"size":3,"px":[10,4,4],"py":[6,1,5],"pz":[1,-1,-1],"nx":[5,23,22],"ny":[4,13,7],"nz":[2,0,0]},{"size":2,"px":[2,2],"py":[6,5],"pz":[1,1],"nx":[6,0],"ny":[9,2],"nz":[0,-1]},{"size":5,"px":[0,1,1,0,0],"py":[5,18,19,16,6],"pz":[2,0,0,0,1],"nx":[5,9,4,8,8],"ny":[8,7,3,7,7],"nz":[1,0,1,0,-1]},{"size":2,"px":[13,12],"py":[23,23],"pz":[0,0],"nx":[7,6],"ny":[8,10],"nz":[0,-1]},{"size":2,"px":[14,19],"py":[12,8],"pz":[0,0],"nx":[18,5],"ny":[8,11],"nz":[0,-1]},{"size":5,"px":[2,8,6,4,4],"py":[3,23,14,6,9],"pz":[2,0,0,1,1],"nx":[0,0,0,0,1],"ny":[21,20,5,19,23],"nz":[0,0,2,0,0]},{"size":2,"px":[11,22],"py":[4,14],"pz":[0,-1],"nx":[3,8],"ny":[1,4],"nz":[2,1]},{"size":5,"px":[1,1,0,1,1],"py":[6,8,3,12,7],"pz":[1,1,2,0,1],"nx":[21,21,19,10,10],"ny":[14,16,23,9,9],"nz":[0,0,0,1,-1]},{"size":2,"px":[10,3],"py":[23,2],"pz":[0,2],"nx":[10,3],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[9,9],"py":[7,0],"pz":[1,-1],"nx":[9,9],"ny":[11,10],"nz":[1,1]},{"size":5,"px":[23,11,23,23,23],"py":[18,10,19,20,16],"pz":[0,1,0,0,0],"nx":[3,3,2,3,2],"ny":[15,16,10,17,9],"nz":[0,0,1,0,-1]},{"size":2,"px":[9,14],"py":[7,18],"pz":[1,0],"nx":[7,10],"ny":[8,8],"nz":[1,-1]},{"size":2,"px":[12,5],"py":[6,4],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[4,5],"py":[13,4],"pz":[0,-1],"nx":[4,4],"ny":[17,19],"nz":[0,0]},{"size":3,"px":[2,3,3],"py":[11,17,19],"pz":[1,0,0],"nx":[7,7,4],"ny":[8,8,5],"nz":[1,-1,-1]},{"size":2,"px":[6,6],"py":[6,5],"pz":[1,-1],"nx":[2,9],"ny":[4,12],"nz":[1,0]},{"size":5,"px":[8,8,9,2,2],"py":[18,13,12,3,3],"pz":[0,0,0,2,-1],"nx":[23,11,23,11,11],"ny":[13,6,14,7,8],"nz":[0,1,0,1,1]},{"size":2,"px":[9,11],"py":[6,13],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[8,10],"py":[0,6],"pz":[1,1],"nx":[9,4],"ny":[6,7],"nz":[1,-1]},{"size":3,"px":[3,10,9],"py":[8,6,0],"pz":[1,-1,-1],"nx":[2,2,2],"ny":[15,16,9],"nz":[0,0,1]},{"size":3,"px":[14,15,0],"py":[2,2,5],"pz":[0,0,-1],"nx":[17,17,18],"ny":[0,1,2],"nz":[0,0,0]},{"size":2,"px":[11,5],"py":[14,1],"pz":[0,-1],"nx":[10,9],"ny":[12,14],"nz":[0,0]},{"size":2,"px":[8,8],"py":[7,8],"pz":[1,1],"nx":[8,4],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[19,18,10,5,20],"pz":[0,0,1,2,0],"nx":[4,8,2,4,4],"ny":[4,15,5,10,10],"nz":[1,0,2,1,-1]},{"size":2,"px":[7,0],"py":[13,18],"pz":[0,-1],"nx":[4,3],"ny":[4,4],"nz":[1,1]},{"size":5,"px":[23,22,22,11,22],"py":[16,13,7,6,14],"pz":[0,0,0,1,0],"nx":[13,7,15,14,14],"ny":[6,3,7,6,6],"nz":[0,1,0,0,-1]}],"alpha":[-1.428861e+00,1.428861e+00,-8.591837e-01,8.591837e-01,-7.734305e-01,7.734305e-01,-6.534460e-01,6.534460e-01,-6.262547e-01,6.262547e-01,-5.231782e-01,5.231782e-01,-4.984303e-01,4.984303e-01,-4.913187e-01,4.913187e-01,-4.852198e-01,4.852198e-01,-4.906681e-01,4.906681e-01,-4.126248e-01,4.126248e-01,-4.590814e-01,4.590814e-01,-4.653825e-01,4.653825e-01,-4.179600e-01,4.179600e-01,-4.357392e-01,4.357392e-01,-4.087982e-01,4.087982e-01,-4.594812e-01,4.594812e-01,-4.858794e-01,4.858794e-01,-3.713580e-01,3.713580e-01,-3.894534e-01,3.894534e-01,-3.127168e-01,3.127168e-01,-4.012654e-01,4.012654e-01,-3.370552e-01,3.370552e-01,-3.534712e-01,3.534712e-01,-3.843450e-01,3.843450e-01,-2.688805e-01,2.688805e-01,-3.500203e-01,3.500203e-01,-2.827120e-01,2.827120e-01,-3.742119e-01,3.742119e-01,-3.219074e-01,3.219074e-01,-2.544953e-01,2.544953e-01,-3.355513e-01,3.355513e-01,-2.672670e-01,2.672670e-01,-2.932047e-01,2.932047e-01,-2.404618e-01,2.404618e-01,-2.354372e-01,2.354372e-01,-2.657955e-01,2.657955e-01,-2.293701e-01,2.293701e-01,-2.708918e-01,2.708918e-01,-2.340181e-01,2.340181e-01,-2.464815e-01,2.464815e-01,-2.944239e-01,2.944239e-01,-2.407960e-01,2.407960e-01,-3.029642e-01,3.029642e-01,-2.684602e-01,2.684602e-01,-2.495078e-01,2.495078e-01,-2.539708e-01,2.539708e-01,-2.989293e-01,2.989293e-01,-2.391309e-01,2.391309e-01,-2.531372e-01,2.531372e-01,-2.500390e-01,2.500390e-01,-2.295077e-01,2.295077e-01,-2.526125e-01,2.526125e-01,-2.337182e-01,2.337182e-01,-1.984756e-01,1.984756e-01,-3.089996e-01,3.089996e-01,-2.589053e-01,2.589053e-01,-2.962490e-01,2.962490e-01,-2.458660e-01,2.458660e-01,-2.515206e-01,2.515206e-01,-2.637299e-01,2.637299e-01]},{"count":80,"threshold":-5.185898e+00,"feature":[{"size":5,"px":[12,17,13,10,15],"py":[9,13,3,3,2],"pz":[0,0,0,0,0],"nx":[8,14,6,9,4],"ny":[10,9,8,8,2],"nz":[1,0,1,0,2]},{"size":5,"px":[3,11,8,10,9],"py":[7,4,3,3,3],"pz":[1,0,0,0,0],"nx":[2,1,5,0,0],"ny":[2,15,8,4,13],"nz":[2,0,1,0,0]},{"size":5,"px":[11,11,11,4,17],"py":[7,9,8,6,11],"pz":[0,0,0,1,0],"nx":[8,8,8,3,0],"ny":[4,8,8,8,13],"nz":[1,0,-1,-1,-1]},{"size":5,"px":[14,15,7,16,16],"py":[3,3,1,3,3],"pz":[0,0,1,0,-1],"nx":[23,22,23,22,22],"ny":[6,2,14,3,4],"nz":[0,0,0,0,0]},{"size":4,"px":[6,4,7,15],"py":[4,2,6,17],"pz":[1,2,1,0],"nx":[3,8,3,14],"ny":[4,4,10,22],"nz":[1,1,-1,-1]},{"size":3,"px":[3,5,22],"py":[7,7,5],"pz":[1,-1,-1],"nx":[2,2,4],"ny":[5,2,7],"nz":[2,2,1]},{"size":5,"px":[7,6,5,6,3],"py":[0,1,2,2,0],"pz":[0,0,0,0,1],"nx":[0,1,1,0,1],"ny":[0,2,1,2,0],"nz":[2,0,0,1,0]},{"size":5,"px":[11,11,11,11,5],"py":[11,10,13,12,6],"pz":[0,0,0,0,-1],"nx":[15,14,5,2,8],"ny":[9,8,10,2,10],"nz":[0,0,1,2,0]},{"size":5,"px":[8,5,6,8,7],"py":[12,12,12,23,12],"pz":[0,0,0,0,0],"nx":[3,17,5,2,8],"ny":[4,0,10,2,10],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[10,10,10,19,20],"py":[8,10,9,15,13],"pz":[1,1,1,0,0],"nx":[23,11,5,23,23],"ny":[20,10,5,19,19],"nz":[0,1,2,0,-1]},{"size":5,"px":[9,13,3,10,12],"py":[2,0,0,1,1],"pz":[0,0,2,0,0],"nx":[3,3,6,7,7],"ny":[5,2,11,4,4],"nz":[2,2,1,1,-1]},{"size":2,"px":[15,7],"py":[17,6],"pz":[0,1],"nx":[14,0],"ny":[16,10],"nz":[0,-1]},{"size":5,"px":[17,15,18,12,19],"py":[22,12,13,7,15],"pz":[0,0,0,0,0],"nx":[8,15,6,1,7],"ny":[4,8,22,5,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[10,9,18,19,8],"py":[2,1,3,3,1],"pz":[1,1,0,0,1],"nx":[23,23,23,11,11],"ny":[0,1,2,0,1],"nz":[0,0,0,1,-1]},{"size":5,"px":[12,23,0,1,8],"py":[14,5,0,17,1],"pz":[0,-1,-1,-1,-1],"nx":[8,14,15,18,14],"ny":[10,11,14,19,10],"nz":[1,0,0,0,0]},{"size":2,"px":[4,6],"py":[6,13],"pz":[1,0],"nx":[4,12],"ny":[10,14],"nz":[1,-1]},{"size":5,"px":[5,23,11,23,13],"py":[3,10,4,11,12],"pz":[2,0,1,0,0],"nx":[7,4,9,8,8],"ny":[4,2,4,4,4],"nz":[1,2,1,1,-1]},{"size":3,"px":[9,5,11],"py":[4,2,4],"pz":[0,1,-1],"nx":[5,2,4],"ny":[0,1,2],"nz":[0,2,0]},{"size":5,"px":[5,2,2,5,8],"py":[12,4,4,6,13],"pz":[0,2,1,1,0],"nx":[3,9,4,4,8],"ny":[4,0,2,2,4],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[9,5,22],"py":[7,4,20],"pz":[1,-1,-1],"nx":[8,19,4],"ny":[4,18,5],"nz":[1,0,2]},{"size":5,"px":[2,3,3,3,3],"py":[10,16,15,14,13],"pz":[1,0,0,0,0],"nx":[0,0,0,1,0],"ny":[10,20,5,23,21],"nz":[1,0,2,0,0]},{"size":2,"px":[12,11],"py":[4,18],"pz":[0,0],"nx":[11,23],"ny":[17,13],"nz":[0,-1]},{"size":2,"px":[17,8],"py":[16,7],"pz":[0,1],"nx":[8,3],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[13,5,14,12,3],"py":[4,7,4,5,3],"pz":[0,1,0,0,1],"nx":[21,20,21,21,21],"ny":[2,0,4,3,3],"nz":[0,0,0,0,-1]},{"size":4,"px":[20,20,20,10],"py":[21,19,20,8],"pz":[0,0,0,1],"nx":[8,11,0,2],"ny":[10,8,1,3],"nz":[1,-1,-1,-1]},{"size":4,"px":[6,7,12,8],"py":[12,12,8,11],"pz":[0,0,0,0],"nx":[9,5,5,18],"ny":[9,2,0,20],"nz":[0,-1,-1,-1]},{"size":3,"px":[11,5,9],"py":[0,0,0],"pz":[0,1,0],"nx":[2,6,3],"ny":[3,7,4],"nz":[2,0,1]},{"size":5,"px":[18,18,9,17,17],"py":[15,14,7,14,14],"pz":[0,0,1,0,-1],"nx":[21,21,21,22,20],"ny":[15,21,17,14,23],"nz":[0,0,0,0,0]},{"size":5,"px":[9,12,12,7,4],"py":[4,11,12,6,5],"pz":[1,0,0,1,2],"nx":[16,11,9,6,20],"ny":[8,4,11,10,23],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[12,11,10,11,11],"py":[23,4,4,5,23],"pz":[0,0,0,0,0],"nx":[11,11,7,3,20],"ny":[21,21,11,1,23],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[12,1],"py":[12,3],"pz":[0,-1],"nx":[10,10],"ny":[3,2],"nz":[1,1]},{"size":5,"px":[9,4,15,9,9],"py":[8,4,23,7,7],"pz":[1,2,0,1,-1],"nx":[5,3,3,3,2],"ny":[23,19,17,18,15],"nz":[0,0,0,0,0]},{"size":2,"px":[2,0],"py":[16,3],"pz":[0,2],"nx":[9,4],"ny":[15,2],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[3,7],"pz":[2,1],"nx":[3,8],"ny":[4,10],"nz":[1,-1]},{"size":3,"px":[9,4,3],"py":[18,0,14],"pz":[0,-1,-1],"nx":[3,5,2],"ny":[5,8,5],"nz":[2,1,2]},{"size":3,"px":[1,1,10],"py":[2,1,7],"pz":[1,-1,-1],"nx":[0,0,0],"ny":[3,5,1],"nz":[0,0,1]},{"size":4,"px":[11,11,5,2],"py":[12,13,7,3],"pz":[0,0,-1,-1],"nx":[5,10,10,9],"ny":[6,9,10,13],"nz":[1,0,0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[9,1],"ny":[4,3],"nz":[1,-1]},{"size":5,"px":[0,0,1,1,0],"py":[4,10,12,13,5],"pz":[1,0,0,0,1],"nx":[4,4,8,7,7],"ny":[3,2,10,4,4],"nz":[2,2,1,1,-1]},{"size":3,"px":[3,4,3],"py":[1,1,2],"pz":[1,-1,-1],"nx":[4,5,3],"ny":[1,0,2],"nz":[0,0,0]},{"size":2,"px":[9,2],"py":[6,4],"pz":[1,-1],"nx":[8,4],"ny":[6,2],"nz":[1,2]},{"size":5,"px":[12,13,15,16,7],"py":[1,1,2,2,1],"pz":[0,0,0,0,1],"nx":[4,4,4,3,7],"ny":[2,2,4,2,4],"nz":[2,-1,-1,-1,-1]},{"size":5,"px":[9,3,2,11,5],"py":[23,7,4,10,6],"pz":[0,1,2,0,1],"nx":[21,20,11,21,21],"ny":[21,23,8,20,20],"nz":[0,0,1,0,-1]},{"size":4,"px":[12,6,13,12],"py":[7,3,5,6],"pz":[0,1,0,0],"nx":[3,0,5,10],"ny":[4,6,5,1],"nz":[1,-1,-1,-1]},{"size":2,"px":[10,4],"py":[4,0],"pz":[0,-1],"nx":[12,11],"ny":[2,1],"nz":[0,0]},{"size":4,"px":[2,3,22,5],"py":[6,1,18,5],"pz":[1,-1,-1,-1],"nx":[0,0,0,3],"ny":[14,3,12,18],"nz":[0,2,0,0]},{"size":3,"px":[10,20,21],"py":[10,18,15],"pz":[1,0,0],"nx":[15,1,2],"ny":[7,0,8],"nz":[0,-1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[4,7,13,4,6],"pz":[1,1,0,2,1],"nx":[5,9,8,4,4],"ny":[3,7,7,3,3],"nz":[1,0,0,1,-1]},{"size":3,"px":[13,12,14],"py":[2,2,2],"pz":[0,0,0],"nx":[4,4,4],"ny":[2,2,5],"nz":[2,-1,-1]},{"size":5,"px":[5,4,6,2,12],"py":[7,9,7,4,10],"pz":[0,1,0,2,0],"nx":[6,1,2,5,2],"ny":[9,2,4,13,4],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[11,1],"py":[12,5],"pz":[0,-1],"nx":[1,0],"ny":[7,2],"nz":[0,2]},{"size":5,"px":[8,8,1,16,6],"py":[6,6,4,8,11],"pz":[1,-1,-1,-1,-1],"nx":[13,5,4,4,13],"ny":[12,1,2,5,11],"nz":[0,2,2,2,0]},{"size":2,"px":[5,6],"py":[4,14],"pz":[1,0],"nx":[9,5],"ny":[7,1],"nz":[0,-1]},{"size":2,"px":[2,6],"py":[4,14],"pz":[2,0],"nx":[9,2],"ny":[15,1],"nz":[0,-1]},{"size":5,"px":[10,19,20,10,9],"py":[1,2,3,0,0],"pz":[1,0,0,1,-1],"nx":[11,23,23,11,23],"ny":[0,3,1,1,2],"nz":[1,0,0,1,0]},{"size":2,"px":[2,9],"py":[3,12],"pz":[2,0],"nx":[2,6],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[4,10,11,9,9],"pz":[1,0,0,0,-1],"nx":[16,2,17,8,4],"ny":[10,2,9,4,4],"nz":[0,2,0,1,1]},{"size":2,"px":[12,0],"py":[5,4],"pz":[0,-1],"nx":[7,8],"ny":[4,8],"nz":[1,1]},{"size":2,"px":[21,21],"py":[9,10],"pz":[0,0],"nx":[11,8],"ny":[18,8],"nz":[0,-1]},{"size":2,"px":[14,7],"py":[23,9],"pz":[0,1],"nx":[7,13],"ny":[10,4],"nz":[1,-1]},{"size":5,"px":[12,12,12,6,2],"py":[11,13,12,6,4],"pz":[0,0,0,-1,-1],"nx":[0,0,0,0,0],"ny":[14,13,6,12,11],"nz":[0,0,1,0,0]},{"size":2,"px":[8,9],"py":[6,11],"pz":[1,-1],"nx":[15,15],"ny":[11,10],"nz":[0,0]},{"size":4,"px":[4,6,7,2],"py":[8,4,23,7],"pz":[1,-1,-1,-1],"nx":[4,20,19,17],"ny":[0,3,1,1],"nz":[2,0,0,0]},{"size":2,"px":[7,0],"py":[6,0],"pz":[1,-1],"nx":[7,4],"ny":[8,2],"nz":[1,2]},{"size":2,"px":[10,0],"py":[7,0],"pz":[1,-1],"nx":[15,15],"ny":[15,14],"nz":[0,0]},{"size":5,"px":[6,2,5,2,4],"py":[23,7,21,8,16],"pz":[0,1,0,1,0],"nx":[18,2,10,0,11],"ny":[9,3,23,5,3],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[9,9,8,10,4],"py":[0,2,2,1,1],"pz":[0,0,0,0,1],"nx":[4,3,2,2,5],"ny":[7,3,4,2,17],"nz":[0,1,2,2,0]},{"size":2,"px":[10,7],"py":[5,6],"pz":[1,-1],"nx":[11,11],"ny":[6,5],"nz":[1,1]},{"size":5,"px":[11,11,5,6,11],"py":[8,10,5,5,9],"pz":[0,0,1,1,0],"nx":[13,16,11,14,4],"ny":[9,13,11,20,23],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[7,14],"py":[14,22],"pz":[0,-1],"nx":[3,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[4,11],"py":[4,5],"pz":[2,-1],"nx":[2,4],"ny":[5,7],"nz":[2,1]},{"size":2,"px":[1,0],"py":[0,0],"pz":[0,1],"nx":[0,4],"ny":[0,2],"nz":[0,-1]},{"size":5,"px":[11,11,11,4,9],"py":[5,5,2,9,23],"pz":[0,-1,-1,-1,-1],"nx":[11,12,10,9,5],"ny":[2,2,2,2,1],"nz":[0,0,0,0,1]},{"size":3,"px":[16,14,15],"py":[1,1,0],"pz":[0,0,0],"nx":[4,7,4],"ny":[2,4,4],"nz":[2,1,-1]},{"size":2,"px":[5,0],"py":[14,5],"pz":[0,-1],"nx":[2,4],"ny":[5,17],"nz":[2,0]},{"size":5,"px":[18,7,16,19,4],"py":[13,6,23,13,3],"pz":[0,1,0,0,2],"nx":[5,2,3,4,4],"ny":[1,1,4,1,3],"nz":[0,1,0,0,0]},{"size":2,"px":[8,8],"py":[7,6],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[2,1],"py":[10,4],"pz":[1,2],"nx":[4,4],"ny":[3,3],"nz":[2,-1]},{"size":2,"px":[10,5],"py":[19,1],"pz":[0,-1],"nx":[4,12],"ny":[10,17],"nz":[1,0]},{"size":5,"px":[12,6,2,4,11],"py":[14,4,2,1,5],"pz":[0,-1,-1,-1,-1],"nx":[3,4,3,4,3],"ny":[13,17,14,16,15],"nz":[0,0,0,0,0]}],"alpha":[-1.368326e+00,1.368326e+00,-7.706897e-01,7.706897e-01,-8.378147e-01,8.378147e-01,-6.120624e-01,6.120624e-01,-5.139189e-01,5.139189e-01,-4.759130e-01,4.759130e-01,-5.161374e-01,5.161374e-01,-5.407743e-01,5.407743e-01,-4.216105e-01,4.216105e-01,-4.418693e-01,4.418693e-01,-4.435335e-01,4.435335e-01,-4.052076e-01,4.052076e-01,-4.293050e-01,4.293050e-01,-3.431154e-01,3.431154e-01,-4.231203e-01,4.231203e-01,-3.917100e-01,3.917100e-01,-3.623450e-01,3.623450e-01,-3.202670e-01,3.202670e-01,-3.331602e-01,3.331602e-01,-3.552034e-01,3.552034e-01,-3.784556e-01,3.784556e-01,-3.295428e-01,3.295428e-01,-3.587038e-01,3.587038e-01,-2.861332e-01,2.861332e-01,-3.403258e-01,3.403258e-01,-3.989002e-01,3.989002e-01,-2.631159e-01,2.631159e-01,-3.272156e-01,3.272156e-01,-2.816567e-01,2.816567e-01,-3.125926e-01,3.125926e-01,-3.146982e-01,3.146982e-01,-2.521825e-01,2.521825e-01,-2.434554e-01,2.434554e-01,-3.435378e-01,3.435378e-01,-3.161172e-01,3.161172e-01,-2.805027e-01,2.805027e-01,-3.303579e-01,3.303579e-01,-2.725089e-01,2.725089e-01,-2.575051e-01,2.575051e-01,-3.210646e-01,3.210646e-01,-2.986997e-01,2.986997e-01,-2.408925e-01,2.408925e-01,-2.456291e-01,2.456291e-01,-2.836550e-01,2.836550e-01,-2.469860e-01,2.469860e-01,-2.915900e-01,2.915900e-01,-2.513559e-01,2.513559e-01,-2.433728e-01,2.433728e-01,-2.377905e-01,2.377905e-01,-2.089327e-01,2.089327e-01,-1.978434e-01,1.978434e-01,-3.017699e-01,3.017699e-01,-2.339661e-01,2.339661e-01,-1.932560e-01,1.932560e-01,-2.278285e-01,2.278285e-01,-2.438200e-01,2.438200e-01,-2.216769e-01,2.216769e-01,-1.941995e-01,1.941995e-01,-2.129081e-01,2.129081e-01,-2.270319e-01,2.270319e-01,-2.393942e-01,2.393942e-01,-2.132518e-01,2.132518e-01,-1.867741e-01,1.867741e-01,-2.394237e-01,2.394237e-01,-2.005917e-01,2.005917e-01,-2.445217e-01,2.445217e-01,-2.229078e-01,2.229078e-01,-2.342967e-01,2.342967e-01,-2.481784e-01,2.481784e-01,-2.735603e-01,2.735603e-01,-2.187604e-01,2.187604e-01,-1.677239e-01,1.677239e-01,-2.248867e-01,2.248867e-01,-2.505358e-01,2.505358e-01,-1.867706e-01,1.867706e-01,-1.904305e-01,1.904305e-01,-1.939881e-01,1.939881e-01,-2.249474e-01,2.249474e-01,-1.762483e-01,1.762483e-01,-2.299974e-01,2.299974e-01]},{"count":115,"threshold":-5.151920e+00,"feature":[{"size":5,"px":[7,14,7,10,6],"py":[3,3,12,4,4],"pz":[0,0,0,0,1],"nx":[14,3,14,9,3],"ny":[7,4,8,8,5],"nz":[0,1,0,0,2]},{"size":5,"px":[13,18,16,17,15],"py":[1,13,1,2,0],"pz":[0,0,0,0,0],"nx":[23,23,8,11,22],"ny":[3,4,4,8,0],"nz":[0,0,1,1,0]},{"size":5,"px":[16,6,6,7,12],"py":[12,13,4,12,5],"pz":[0,0,1,0,0],"nx":[0,0,8,4,0],"ny":[0,2,4,4,2],"nz":[0,0,1,1,-1]},{"size":3,"px":[12,13,7],"py":[13,18,6],"pz":[0,0,1],"nx":[13,5,6],"ny":[16,3,8],"nz":[0,-1,-1]},{"size":5,"px":[10,12,9,13,11],"py":[3,3,3,3,3],"pz":[0,0,0,0,0],"nx":[3,4,15,4,4],"ny":[2,5,10,4,4],"nz":[2,1,0,1,-1]},{"size":5,"px":[12,12,12,3,12],"py":[7,9,8,3,10],"pz":[0,0,0,2,0],"nx":[4,8,15,9,9],"ny":[4,4,8,8,8],"nz":[1,1,0,0,-1]},{"size":5,"px":[6,3,4,4,2],"py":[22,12,13,14,7],"pz":[0,0,0,0,1],"nx":[2,0,1,1,1],"ny":[23,5,22,21,21],"nz":[0,2,0,0,-1]},{"size":2,"px":[3,3],"py":[8,8],"pz":[1,-1],"nx":[3,4],"ny":[4,10],"nz":[1,1]},{"size":5,"px":[11,11,11,11,0],"py":[10,12,11,13,2],"pz":[0,0,0,-1,-1],"nx":[8,13,13,13,13],"ny":[10,8,9,11,10],"nz":[1,0,0,0,0]},{"size":5,"px":[16,16,15,17,18],"py":[12,23,11,12,12],"pz":[0,0,0,0,0],"nx":[8,8,9,3,13],"ny":[4,4,12,3,10],"nz":[1,-1,-1,-1,-1]},{"size":4,"px":[17,16,6,5],"py":[14,13,4,5],"pz":[0,0,-1,-1],"nx":[8,15,4,7],"ny":[10,14,4,8],"nz":[1,0,2,1]},{"size":5,"px":[20,10,20,21,19],"py":[14,7,13,12,22],"pz":[0,1,0,0,0],"nx":[22,23,11,23,23],"ny":[23,22,11,21,20],"nz":[0,0,1,0,-1]},{"size":4,"px":[12,13,1,18],"py":[14,23,3,5],"pz":[0,-1,-1,-1],"nx":[2,10,5,9],"ny":[2,9,8,14],"nz":[2,0,1,0]},{"size":5,"px":[10,4,7,9,8],"py":[1,0,2,0,1],"pz":[0,1,0,0,0],"nx":[2,3,5,3,3],"ny":[2,4,8,3,3],"nz":[2,1,1,1,-1]},{"size":4,"px":[11,2,2,11],"py":[6,4,5,7],"pz":[0,2,2,0],"nx":[3,0,5,3],"ny":[4,9,8,3],"nz":[1,-1,-1,-1]},{"size":5,"px":[12,10,9,12,12],"py":[11,2,1,10,10],"pz":[0,1,1,0,-1],"nx":[22,11,5,22,23],"ny":[1,1,0,0,3],"nz":[0,1,2,0,0]},{"size":4,"px":[5,10,7,11],"py":[14,3,0,4],"pz":[0,-1,-1,-1],"nx":[4,4,4,4],"ny":[17,18,15,16],"nz":[0,0,0,0]},{"size":5,"px":[2,2,3,2,2],"py":[16,12,20,15,17],"pz":[0,0,0,0,0],"nx":[12,8,4,15,15],"ny":[17,4,4,8,8],"nz":[0,1,1,0,-1]},{"size":5,"px":[12,12,1,6,12],"py":[11,10,3,6,10],"pz":[0,0,-1,-1,-1],"nx":[0,0,1,0,2],"ny":[4,0,2,1,0],"nz":[0,2,0,1,0]},{"size":5,"px":[21,20,21,21,14],"py":[9,16,11,8,12],"pz":[0,0,0,0,0],"nx":[17,6,15,0,2],"ny":[8,23,13,2,0],"nz":[0,-1,-1,-1,-1]},{"size":4,"px":[6,9,9,5],"py":[14,18,23,14],"pz":[0,0,0,0],"nx":[9,5,5,12],"ny":[21,5,3,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[12,13],"py":[4,4],"pz":[0,0],"nx":[4,3],"ny":[4,1],"nz":[1,2]},{"size":5,"px":[7,8,11,4,10],"py":[3,3,2,1,2],"pz":[0,0,0,1,0],"nx":[19,20,19,20,20],"ny":[0,3,1,2,2],"nz":[0,0,0,0,-1]},{"size":2,"px":[9,1],"py":[7,4],"pz":[1,-1],"nx":[4,7],"ny":[5,9],"nz":[2,1]},{"size":5,"px":[11,10,1,5,1],"py":[10,12,6,6,5],"pz":[0,0,1,1,1],"nx":[16,3,2,4,4],"ny":[10,4,2,4,4],"nz":[0,1,2,1,-1]},{"size":2,"px":[15,0],"py":[17,0],"pz":[0,-1],"nx":[7,4],"ny":[8,5],"nz":[1,2]},{"size":5,"px":[8,10,9,9,9],"py":[2,2,2,1,1],"pz":[0,0,0,0,-1],"nx":[4,2,3,3,2],"ny":[0,3,2,1,4],"nz":[0,0,0,0,0]},{"size":4,"px":[11,15,17,16],"py":[8,10,11,11],"pz":[0,0,0,0],"nx":[14,1,1,2],"ny":[9,5,7,0],"nz":[0,-1,-1,-1]},{"size":3,"px":[3,5,9],"py":[8,6,12],"pz":[0,1,0],"nx":[3,4,18],"ny":[4,2,22],"nz":[1,-1,-1]},{"size":5,"px":[6,1,7,3,3],"py":[13,4,13,7,7],"pz":[0,2,0,1,-1],"nx":[0,0,0,0,0],"ny":[16,15,8,13,14],"nz":[0,0,1,0,0]},{"size":2,"px":[5,16],"py":[13,10],"pz":[0,-1],"nx":[3,4],"ny":[4,5],"nz":[1,1]},{"size":5,"px":[5,23,11,23,23],"py":[5,12,4,16,15],"pz":[2,0,1,0,0],"nx":[3,2,4,5,5],"ny":[4,2,4,11,11],"nz":[1,2,1,1,-1]},{"size":4,"px":[10,10,3,23],"py":[7,7,3,16],"pz":[1,-1,-1,-1],"nx":[5,23,11,22],"ny":[4,13,7,16],"nz":[2,0,1,0]},{"size":5,"px":[15,14,13,15,16],"py":[1,0,0,0,1],"pz":[0,0,0,0,0],"nx":[4,9,8,8,8],"ny":[2,4,9,4,4],"nz":[2,1,1,1,-1]},{"size":2,"px":[10,4],"py":[5,5],"pz":[0,-1],"nx":[3,15],"ny":[1,8],"nz":[2,0]},{"size":2,"px":[6,12],"py":[6,9],"pz":[1,0],"nx":[10,10],"ny":[10,10],"nz":[0,-1]},{"size":5,"px":[1,0,0,0,0],"py":[5,4,11,9,12],"pz":[0,1,0,0,0],"nx":[9,8,2,4,7],"ny":[7,7,2,4,7],"nz":[0,0,2,1,0]},{"size":2,"px":[4,8],"py":[4,7],"pz":[2,1],"nx":[9,8],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[5,6],"py":[4,1],"pz":[2,-1],"nx":[8,6],"ny":[7,3],"nz":[1,1]},{"size":5,"px":[8,5,7,6,11],"py":[12,5,13,13,22],"pz":[0,1,0,0,0],"nx":[23,23,23,22,22],"ny":[20,19,21,23,23],"nz":[0,0,0,0,-1]},{"size":2,"px":[3,17],"py":[6,9],"pz":[1,-1],"nx":[3,3],"ny":[10,9],"nz":[1,1]},{"size":2,"px":[14,11],"py":[23,5],"pz":[0,0],"nx":[7,3],"ny":[10,20],"nz":[1,-1]},{"size":2,"px":[3,4],"py":[8,8],"pz":[1,1],"nx":[9,4],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[4,7],"pz":[2,1],"nx":[2,4],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[23,11],"py":[21,10],"pz":[0,1],"nx":[2,3],"ny":[11,14],"nz":[1,0]},{"size":4,"px":[11,11,11,3],"py":[13,12,11,4],"pz":[0,0,0,-1],"nx":[14,13,13,6],"ny":[13,11,10,5],"nz":[0,0,0,1]},{"size":2,"px":[4,7],"py":[3,6],"pz":[2,1],"nx":[9,19],"ny":[4,14],"nz":[1,-1]},{"size":3,"px":[10,5,7],"py":[5,0,6],"pz":[1,-1,-1],"nx":[10,21,5],"ny":[0,5,3],"nz":[1,0,2]},{"size":2,"px":[16,13],"py":[3,15],"pz":[0,-1],"nx":[17,7],"ny":[23,8],"nz":[0,1]},{"size":3,"px":[4,2,2],"py":[15,7,19],"pz":[0,1,-1],"nx":[2,8,4],"ny":[5,14,9],"nz":[2,0,1]},{"size":3,"px":[8,3,6],"py":[10,2,4],"pz":[0,2,1],"nx":[3,8,4],"ny":[4,14,9],"nz":[1,-1,-1]},{"size":2,"px":[14,3],"py":[18,3],"pz":[0,-1],"nx":[12,14],"ny":[17,9],"nz":[0,0]},{"size":3,"px":[7,1,10],"py":[14,10,10],"pz":[0,-1,-1],"nx":[9,6,2],"ny":[13,18,2],"nz":[0,0,2]},{"size":2,"px":[11,8],"py":[13,11],"pz":[0,-1],"nx":[2,4],"ny":[7,18],"nz":[1,0]},{"size":2,"px":[5,4],"py":[21,17],"pz":[0,0],"nx":[9,3],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[6,6],"py":[4,0],"pz":[0,-1],"nx":[4,3],"ny":[2,0],"nz":[0,1]},{"size":2,"px":[2,1],"py":[1,5],"pz":[0,-1],"nx":[0,1],"ny":[1,0],"nz":[1,0]},{"size":2,"px":[18,1],"py":[13,5],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[0,0,0,0,1],"py":[4,3,2,12,15],"pz":[1,1,2,0,0],"nx":[5,9,4,8,8],"ny":[3,6,3,6,6],"nz":[1,0,1,0,-1]},{"size":2,"px":[2,5],"py":[0,2],"pz":[1,-1],"nx":[2,1],"ny":[0,1],"nz":[0,1]},{"size":4,"px":[7,15,4,20],"py":[8,23,4,8],"pz":[1,0,2,0],"nx":[6,0,3,4],"ny":[9,2,13,6],"nz":[0,-1,-1,-1]},{"size":4,"px":[11,11,10,20],"py":[10,9,11,8],"pz":[0,0,0,-1],"nx":[21,20,21,21],"ny":[18,23,19,17],"nz":[0,0,0,0]},{"size":2,"px":[3,8],"py":[7,5],"pz":[1,-1],"nx":[3,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[5,11],"py":[3,4],"pz":[2,1],"nx":[8,7],"ny":[5,12],"nz":[1,0]},{"size":2,"px":[4,1],"py":[1,3],"pz":[1,-1],"nx":[3,6],"ny":[0,0],"nz":[1,0]},{"size":2,"px":[19,9],"py":[16,8],"pz":[0,1],"nx":[14,6],"ny":[15,1],"nz":[0,-1]},{"size":2,"px":[12,6],"py":[13,5],"pz":[0,-1],"nx":[5,5],"ny":[1,2],"nz":[2,2]},{"size":5,"px":[16,14,4,15,12],"py":[1,1,1,2,1],"pz":[0,0,2,0,0],"nx":[6,4,3,2,10],"ny":[22,8,2,1,7],"nz":[0,1,1,2,0]},{"size":5,"px":[6,8,6,5,5],"py":[1,0,0,1,0],"pz":[0,0,0,0,0],"nx":[4,4,4,4,8],"ny":[4,3,2,5,10],"nz":[2,2,2,2,1]},{"size":2,"px":[9,8],"py":[17,0],"pz":[0,-1],"nx":[2,5],"ny":[5,8],"nz":[2,1]},{"size":2,"px":[8,0],"py":[7,3],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[10,21],"py":[11,20],"pz":[1,0],"nx":[11,4],"ny":[17,1],"nz":[0,-1]},{"size":5,"px":[5,10,4,17,10],"py":[3,6,3,11,5],"pz":[1,0,1,0,0],"nx":[21,20,9,19,10],"ny":[4,3,0,2,1],"nz":[0,0,1,0,-1]},{"size":2,"px":[23,23],"py":[10,10],"pz":[0,-1],"nx":[23,23],"ny":[21,22],"nz":[0,0]},{"size":5,"px":[9,20,19,20,20],"py":[0,3,1,2,2],"pz":[1,0,0,0,-1],"nx":[11,23,11,23,5],"ny":[1,2,0,1,0],"nz":[1,0,1,0,2]},{"size":3,"px":[6,8,7],"py":[4,10,11],"pz":[1,0,0],"nx":[8,3,4],"ny":[9,4,4],"nz":[0,-1,-1]},{"size":4,"px":[13,13,10,4],"py":[14,23,1,5],"pz":[0,-1,-1,-1],"nx":[15,14,8,8],"ny":[13,12,8,9],"nz":[0,0,1,1]},{"size":2,"px":[11,9],"py":[5,8],"pz":[0,-1],"nx":[7,8],"ny":[7,4],"nz":[0,1]},{"size":5,"px":[4,8,4,7,7],"py":[2,3,3,11,11],"pz":[2,1,2,1,-1],"nx":[0,0,1,0,0],"ny":[4,6,15,3,2],"nz":[1,1,0,2,2]},{"size":2,"px":[6,1],"py":[12,1],"pz":[0,-1],"nx":[1,10],"ny":[2,11],"nz":[2,0]},{"size":5,"px":[0,0,2,3,7],"py":[0,1,4,3,11],"pz":[0,-1,-1,-1,-1],"nx":[9,11,9,6,12],"ny":[2,1,1,0,2],"nz":[0,0,0,1,0]},{"size":2,"px":[10,11],"py":[4,4],"pz":[0,0],"nx":[8,4],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[1,1,1,1,1],"py":[15,10,19,16,18],"pz":[0,1,0,0,0],"nx":[4,5,3,5,6],"ny":[4,19,9,18,19],"nz":[1,0,1,0,-1]},{"size":5,"px":[12,12,12,12,20],"py":[11,12,13,13,18],"pz":[0,0,0,-1,-1],"nx":[0,0,0,0,0],"ny":[4,2,7,6,12],"nz":[1,2,1,1,0]},{"size":2,"px":[0,0],"py":[9,11],"pz":[0,0],"nx":[10,4],"ny":[5,3],"nz":[1,-1]},{"size":2,"px":[11,8],"py":[9,6],"pz":[0,1],"nx":[13,13],"ny":[10,10],"nz":[0,-1]},{"size":2,"px":[6,3],"py":[5,3],"pz":[1,2],"nx":[3,3],"ny":[5,5],"nz":[2,-1]},{"size":2,"px":[19,9],"py":[10,6],"pz":[0,1],"nx":[4,1],"ny":[2,2],"nz":[2,-1]},{"size":2,"px":[14,4],"py":[19,12],"pz":[0,-1],"nx":[14,8],"ny":[17,10],"nz":[0,1]},{"size":4,"px":[4,2,13,2],"py":[12,6,9,3],"pz":[0,1,-1,-1],"nx":[1,0,1,0],"ny":[16,14,11,15],"nz":[0,0,1,0]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[4,4],"ny":[4,8],"nz":[1,-1]},{"size":5,"px":[9,11,12,6,10],"py":[2,1,2,1,2],"pz":[0,0,0,1,0],"nx":[4,6,4,6,2],"ny":[4,0,9,1,8],"nz":[0,0,1,0,1]},{"size":5,"px":[4,4,7,2,2],"py":[19,20,23,8,9],"pz":[0,0,0,1,1],"nx":[7,0,5,6,2],"ny":[10,5,4,1,8],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[18,18,17,18,18],"py":[15,16,14,20,17],"pz":[0,0,0,0,0],"nx":[15,2,2,5,2],"ny":[8,0,2,9,4],"nz":[0,-1,-1,-1,-1]},{"size":4,"px":[13,13,13,18],"py":[11,12,12,20],"pz":[0,0,-1,-1],"nx":[1,3,10,10],"ny":[1,6,12,11],"nz":[2,0,0,0]},{"size":2,"px":[8,9],"py":[0,1],"pz":[1,1],"nx":[19,4],"ny":[2,2],"nz":[0,-1]},{"size":2,"px":[6,3],"py":[4,2],"pz":[1,2],"nx":[8,4],"ny":[4,0],"nz":[1,-1]},{"size":5,"px":[23,11,22,13,13],"py":[8,3,3,12,12],"pz":[0,1,0,0,-1],"nx":[15,7,14,13,8],"ny":[7,3,6,6,3],"nz":[0,1,0,0,1]},{"size":3,"px":[9,11,19],"py":[7,3,0],"pz":[1,-1,-1],"nx":[23,23,11],"ny":[16,12,7],"nz":[0,0,1]},{"size":2,"px":[15,8],"py":[23,7],"pz":[0,-1],"nx":[4,3],"ny":[5,4],"nz":[2,2]},{"size":2,"px":[4,10],"py":[6,13],"pz":[1,-1],"nx":[2,3],"ny":[4,10],"nz":[2,1]},{"size":2,"px":[4,1],"py":[11,2],"pz":[1,2],"nx":[9,2],"ny":[5,2],"nz":[1,-1]},{"size":2,"px":[22,22],"py":[22,21],"pz":[0,0],"nx":[3,0],"ny":[5,3],"nz":[1,-1]},{"size":2,"px":[20,10],"py":[12,6],"pz":[0,1],"nx":[20,10],"ny":[23,11],"nz":[0,-1]},{"size":4,"px":[10,3,3,4],"py":[5,3,4,9],"pz":[0,-1,-1,-1],"nx":[14,4,3,11],"ny":[2,1,1,3],"nz":[0,2,2,0]},{"size":3,"px":[15,15,3],"py":[1,1,4],"pz":[0,-1,-1],"nx":[7,4,4],"ny":[8,2,3],"nz":[1,2,2]},{"size":3,"px":[0,0,0],"py":[3,4,6],"pz":[2,2,1],"nx":[0,21,4],"ny":[23,14,3],"nz":[0,-1,-1]},{"size":5,"px":[4,4,5,3,4],"py":[9,11,8,4,8],"pz":[1,1,1,2,1],"nx":[21,21,10,19,19],"ny":[3,4,1,0,0],"nz":[0,0,1,0,-1]},{"size":4,"px":[21,20,20,21],"py":[18,21,20,17],"pz":[0,0,0,0],"nx":[8,1,4,2],"ny":[10,0,2,4],"nz":[1,-1,-1,-1]},{"size":2,"px":[3,6],"py":[7,14],"pz":[1,0],"nx":[3,5],"ny":[4,5],"nz":[1,-1]},{"size":3,"px":[12,0,23],"py":[20,2,13],"pz":[0,-1,-1],"nx":[12,2,9],"ny":[19,2,7],"nz":[0,2,0]},{"size":2,"px":[0,6],"py":[22,11],"pz":[0,-1],"nx":[20,18],"ny":[12,23],"nz":[0,0]},{"size":5,"px":[9,15,15,16,8],"py":[2,1,2,2,1],"pz":[1,0,0,0,1],"nx":[1,1,1,1,1],"ny":[16,10,17,18,18],"nz":[0,1,0,0,-1]},{"size":5,"px":[10,5,3,5,8],"py":[14,2,1,4,1],"pz":[0,-1,-1,-1,-1],"nx":[23,23,23,23,23],"ny":[18,15,16,14,17],"nz":[0,0,0,0,0]},{"size":5,"px":[2,2,2,3,2],"py":[16,17,15,20,11],"pz":[0,0,0,0,1],"nx":[8,22,2,1,23],"ny":[20,11,5,0,17],"nz":[0,-1,-1,-1,-1]}],"alpha":[-1.299972e+00,1.299972e+00,-7.630804e-01,7.630804e-01,-5.530378e-01,5.530378e-01,-5.444703e-01,5.444703e-01,-5.207701e-01,5.207701e-01,-5.035143e-01,5.035143e-01,-4.514416e-01,4.514416e-01,-4.897723e-01,4.897723e-01,-5.006264e-01,5.006264e-01,-4.626049e-01,4.626049e-01,-4.375402e-01,4.375402e-01,-3.742565e-01,3.742565e-01,-3.873996e-01,3.873996e-01,-3.715484e-01,3.715484e-01,-3.562480e-01,3.562480e-01,-3.216189e-01,3.216189e-01,-3.983409e-01,3.983409e-01,-3.191891e-01,3.191891e-01,-3.242173e-01,3.242173e-01,-3.528040e-01,3.528040e-01,-3.562318e-01,3.562318e-01,-3.592398e-01,3.592398e-01,-2.557584e-01,2.557584e-01,-2.747951e-01,2.747951e-01,-2.747554e-01,2.747554e-01,-2.980481e-01,2.980481e-01,-2.887670e-01,2.887670e-01,-3.895318e-01,3.895318e-01,-2.786896e-01,2.786896e-01,-2.763841e-01,2.763841e-01,-2.704816e-01,2.704816e-01,-2.075489e-01,2.075489e-01,-3.104773e-01,3.104773e-01,-2.580337e-01,2.580337e-01,-2.448334e-01,2.448334e-01,-3.054279e-01,3.054279e-01,-2.335804e-01,2.335804e-01,-2.972322e-01,2.972322e-01,-2.270521e-01,2.270521e-01,-2.134621e-01,2.134621e-01,-2.261655e-01,2.261655e-01,-2.091024e-01,2.091024e-01,-2.478928e-01,2.478928e-01,-2.468972e-01,2.468972e-01,-1.919746e-01,1.919746e-01,-2.756623e-01,2.756623e-01,-2.629717e-01,2.629717e-01,-2.198653e-01,2.198653e-01,-2.174434e-01,2.174434e-01,-2.193626e-01,2.193626e-01,-1.956262e-01,1.956262e-01,-1.720459e-01,1.720459e-01,-1.781067e-01,1.781067e-01,-1.773484e-01,1.773484e-01,-1.793871e-01,1.793871e-01,-1.973396e-01,1.973396e-01,-2.397262e-01,2.397262e-01,-2.164685e-01,2.164685e-01,-2.214348e-01,2.214348e-01,-2.265941e-01,2.265941e-01,-2.075436e-01,2.075436e-01,-2.244070e-01,2.244070e-01,-2.291992e-01,2.291992e-01,-2.223506e-01,2.223506e-01,-1.639398e-01,1.639398e-01,-1.732374e-01,1.732374e-01,-1.808631e-01,1.808631e-01,-1.860962e-01,1.860962e-01,-1.781604e-01,1.781604e-01,-2.108322e-01,2.108322e-01,-2.386390e-01,2.386390e-01,-1.942083e-01,1.942083e-01,-1.949161e-01,1.949161e-01,-1.953729e-01,1.953729e-01,-2.317591e-01,2.317591e-01,-2.335136e-01,2.335136e-01,-2.282835e-01,2.282835e-01,-2.148716e-01,2.148716e-01,-1.588127e-01,1.588127e-01,-1.566765e-01,1.566765e-01,-1.644839e-01,1.644839e-01,-2.386947e-01,2.386947e-01,-1.704126e-01,1.704126e-01,-2.213945e-01,2.213945e-01,-1.740398e-01,1.740398e-01,-2.451678e-01,2.451678e-01,-2.120524e-01,2.120524e-01,-1.886646e-01,1.886646e-01,-2.824447e-01,2.824447e-01,-1.900364e-01,1.900364e-01,-2.179183e-01,2.179183e-01,-2.257696e-01,2.257696e-01,-2.023404e-01,2.023404e-01,-1.886901e-01,1.886901e-01,-1.850663e-01,1.850663e-01,-2.035414e-01,2.035414e-01,-1.930174e-01,1.930174e-01,-1.898282e-01,1.898282e-01,-1.666640e-01,1.666640e-01,-1.646143e-01,1.646143e-01,-1.543475e-01,1.543475e-01,-1.366289e-01,1.366289e-01,-1.636837e-01,1.636837e-01,-2.547716e-01,2.547716e-01,-1.281869e-01,1.281869e-01,-1.509159e-01,1.509159e-01,-1.447827e-01,1.447827e-01,-1.626126e-01,1.626126e-01,-2.387014e-01,2.387014e-01,-2.571160e-01,2.571160e-01,-1.719175e-01,1.719175e-01,-1.646742e-01,1.646742e-01,-1.717041e-01,1.717041e-01,-2.039217e-01,2.039217e-01,-1.796907e-01,1.796907e-01]},{"count":153,"threshold":-4.971032e+00,"feature":[{"size":5,"px":[14,13,18,10,16],"py":[2,2,13,3,12],"pz":[0,0,0,0,0],"nx":[21,7,14,23,23],"ny":[16,7,8,3,13],"nz":[0,1,0,0,0]},{"size":5,"px":[12,12,12,15,14],"py":[9,10,11,3,3],"pz":[0,0,0,0,0],"nx":[9,9,8,14,3],"ny":[9,8,5,9,5],"nz":[0,0,1,0,2]},{"size":5,"px":[5,11,7,6,8],"py":[12,8,12,12,11],"pz":[0,0,0,0,0],"nx":[8,4,3,9,9],"ny":[4,4,4,9,9],"nz":[1,1,1,0,-1]},{"size":5,"px":[9,8,4,10,6],"py":[2,2,1,3,13],"pz":[0,0,1,0,0],"nx":[1,1,5,1,1],"ny":[2,3,8,4,16],"nz":[0,0,1,0,0]},{"size":5,"px":[3,16,6,17,15],"py":[2,17,4,12,12],"pz":[2,0,1,0,0],"nx":[4,8,15,1,1],"ny":[4,4,8,16,16],"nz":[1,1,-1,-1,-1]},{"size":4,"px":[18,15,8,17],"py":[12,23,6,12],"pz":[0,0,1,0],"nx":[15,4,10,5],"ny":[21,8,14,3],"nz":[0,-1,-1,-1]},{"size":5,"px":[18,17,9,19,19],"py":[3,1,0,3,3],"pz":[0,0,1,0,-1],"nx":[22,11,23,23,23],"ny":[0,1,2,3,4],"nz":[0,1,0,0,0]},{"size":4,"px":[9,5,5,10],"py":[18,15,14,18],"pz":[0,0,0,0],"nx":[10,11,2,0],"ny":[16,7,12,7],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,12],"py":[4,6],"pz":[2,0],"nx":[3,12],"ny":[4,19],"nz":[1,-1]},{"size":5,"px":[3,4,5,2,2],"py":[3,3,3,1,1],"pz":[0,0,0,1,-1],"nx":[0,0,1,0,0],"ny":[3,4,0,1,2],"nz":[0,0,0,1,0]},{"size":5,"px":[12,12,12,8,10],"py":[13,12,12,1,18],"pz":[0,0,-1,-1,-1],"nx":[13,8,7,14,9],"ny":[10,10,7,13,4],"nz":[0,1,1,0,1]},{"size":5,"px":[15,4,12,14,12],"py":[12,3,9,10,8],"pz":[0,2,0,0,0],"nx":[14,7,11,2,9],"ny":[8,4,7,5,4],"nz":[0,1,-1,-1,-1]},{"size":3,"px":[3,9,7],"py":[7,23,15],"pz":[1,-1,-1],"nx":[4,4,2],"ny":[9,7,5],"nz":[1,1,2]},{"size":3,"px":[5,17,5],"py":[3,23,4],"pz":[2,0,2],"nx":[23,2,4],"ny":[23,16,4],"nz":[0,-1,-1]},{"size":5,"px":[4,9,9,10,8],"py":[1,0,1,0,2],"pz":[1,0,0,0,0],"nx":[2,5,4,2,2],"ny":[2,19,11,4,1],"nz":[2,0,1,2,2]},{"size":5,"px":[8,3,8,4,7],"py":[23,9,13,8,16],"pz":[0,1,0,1,0],"nx":[8,2,5,3,2],"ny":[8,15,1,1,1],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[11,5],"py":[14,5],"pz":[0,-1],"nx":[1,9],"ny":[3,13],"nz":[2,0]},{"size":5,"px":[5,8,1,8,6],"py":[12,12,3,23,12],"pz":[0,0,2,0,0],"nx":[1,1,2,1,1],"ny":[22,21,23,20,20],"nz":[0,0,0,0,-1]},{"size":5,"px":[14,21,19,21,20],"py":[13,8,20,10,7],"pz":[0,0,0,0,0],"nx":[16,0,14,23,1],"ny":[8,1,23,10,20],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[15,16,13,14,14],"py":[3,3,3,3,3],"pz":[0,0,0,0,-1],"nx":[18,19,18,9,17],"ny":[2,2,1,1,0],"nz":[0,0,0,1,0]},{"size":2,"px":[17,9],"py":[14,4],"pz":[0,-1],"nx":[9,18],"ny":[4,18],"nz":[1,0]},{"size":2,"px":[21,20],"py":[17,21],"pz":[0,0],"nx":[12,3],"ny":[17,10],"nz":[0,-1]},{"size":2,"px":[2,1],"py":[10,4],"pz":[1,2],"nx":[4,1],"ny":[10,5],"nz":[1,-1]},{"size":5,"px":[7,8,4,9,9],"py":[2,2,0,2,2],"pz":[0,0,1,0,-1],"nx":[5,5,4,6,3],"ny":[0,1,2,0,0],"nz":[0,0,0,0,1]},{"size":2,"px":[2,5],"py":[3,5],"pz":[2,-1],"nx":[3,2],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[0,0,0,0,0],"py":[0,1,3,4,4],"pz":[2,2,1,1,-1],"nx":[20,20,19,20,19],"ny":[21,20,23,19,22],"nz":[0,0,0,0,0]},{"size":2,"px":[9,18],"py":[8,16],"pz":[1,0],"nx":[14,6],"ny":[15,16],"nz":[0,-1]},{"size":3,"px":[3,4,7],"py":[3,3,9],"pz":[2,2,1],"nx":[8,9,7],"ny":[4,11,4],"nz":[1,-1,-1]},{"size":5,"px":[6,14,4,7,7],"py":[4,23,3,6,6],"pz":[1,0,2,1,-1],"nx":[2,0,2,1,3],"ny":[20,4,21,10,23],"nz":[0,2,0,1,0]},{"size":5,"px":[2,4,8,9,10],"py":[3,8,13,23,23],"pz":[2,1,0,0,0],"nx":[10,4,0,3,3],"ny":[21,3,0,3,23],"nz":[0,-1,-1,-1,-1]},{"size":3,"px":[11,10,11],"py":[6,5,5],"pz":[0,0,0],"nx":[14,6,1],"ny":[7,9,5],"nz":[0,1,-1]},{"size":5,"px":[11,11,11,11,6],"py":[11,12,10,13,6],"pz":[0,0,0,0,1],"nx":[9,13,13,13,4],"ny":[4,9,10,11,2],"nz":[1,0,0,0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,11],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[1,2],"py":[4,11],"pz":[2,0],"nx":[8,8],"ny":[15,15],"nz":[0,-1]},{"size":5,"px":[12,12,13,12,12],"py":[10,11,13,12,12],"pz":[0,0,0,0,-1],"nx":[0,0,0,1,0],"ny":[13,2,12,5,14],"nz":[0,2,0,0,0]},{"size":5,"px":[0,0,0,1,1],"py":[4,3,11,15,13],"pz":[1,2,0,0,0],"nx":[2,3,3,1,0],"ny":[2,4,4,5,14],"nz":[2,1,-1,-1,-1]},{"size":2,"px":[4,11],"py":[12,10],"pz":[0,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[18,8,9,9,9],"py":[15,7,8,10,7],"pz":[0,1,1,1,1],"nx":[22,23,21,22,11],"ny":[20,16,23,19,9],"nz":[0,0,0,0,1]},{"size":5,"px":[14,12,13,14,15],"py":[1,0,0,0,1],"pz":[0,0,0,0,0],"nx":[4,9,4,7,7],"ny":[2,3,1,8,8],"nz":[2,1,2,1,-1]},{"size":2,"px":[13,9],"py":[14,19],"pz":[0,-1],"nx":[6,10],"ny":[0,2],"nz":[1,0]},{"size":2,"px":[13,12],"py":[4,4],"pz":[0,0],"nx":[3,3],"ny":[1,1],"nz":[2,-1]},{"size":3,"px":[14,5,5],"py":[18,3,4],"pz":[0,-1,-1],"nx":[8,7,8],"ny":[4,8,10],"nz":[1,1,1]},{"size":2,"px":[8,18],"py":[6,11],"pz":[1,0],"nx":[9,1],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[16,11],"py":[9,7],"pz":[0,0],"nx":[7,7],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[23,11,23,11,23],"py":[13,4,12,7,10],"pz":[0,1,0,1,0],"nx":[7,4,8,15,15],"ny":[9,2,4,8,8],"nz":[0,2,1,0,-1]},{"size":2,"px":[6,3],"py":[1,0],"pz":[0,1],"nx":[4,1],"ny":[1,2],"nz":[0,-1]},{"size":2,"px":[5,5],"py":[7,6],"pz":[0,1],"nx":[6,4],"ny":[9,11],"nz":[0,-1]},{"size":4,"px":[5,6,5,5],"py":[8,6,11,6],"pz":[1,1,1,0],"nx":[23,0,4,5],"ny":[0,2,2,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[18,4],"py":[13,3],"pz":[0,-1],"nx":[15,4],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[4,0],"py":[8,0],"pz":[1,-1],"nx":[9,2],"ny":[15,5],"nz":[0,2]},{"size":5,"px":[15,15,16,14,14],"py":[0,1,1,0,0],"pz":[0,0,0,0,-1],"nx":[4,4,8,8,15],"ny":[4,5,4,11,23],"nz":[2,2,1,1,0]},{"size":4,"px":[12,11,3,14],"py":[14,22,1,0],"pz":[0,-1,-1,-1],"nx":[8,15,7,16],"ny":[2,3,1,3],"nz":[1,0,1,0]},{"size":2,"px":[5,12],"py":[6,17],"pz":[1,-1],"nx":[2,1],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[13,12,12,7,7],"py":[5,6,5,14,14],"pz":[0,0,0,0,-1],"nx":[10,3,10,1,10],"ny":[13,8,11,3,10],"nz":[0,0,0,1,0]},{"size":2,"px":[4,4],"py":[15,0],"pz":[0,-1],"nx":[4,4],"ny":[16,17],"nz":[0,0]},{"size":5,"px":[1,4,2,1,2],"py":[4,0,1,1,0],"pz":[1,1,1,2,1],"nx":[4,9,1,5,1],"ny":[3,4,4,5,5],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[10,3],"py":[3,1],"pz":[0,2],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[16,0],"py":[21,0],"pz":[0,-1],"nx":[6,8],"ny":[8,4],"nz":[1,1]},{"size":2,"px":[7,11],"py":[4,18],"pz":[0,-1],"nx":[5,7],"ny":[0,2],"nz":[2,0]},{"size":2,"px":[9,7],"py":[0,3],"pz":[1,-1],"nx":[20,10],"ny":[0,1],"nz":[0,1]},{"size":4,"px":[10,4,1,5],"py":[0,6,8,4],"pz":[1,-1,-1,-1],"nx":[6,15,4,14],"ny":[3,5,1,5],"nz":[1,0,2,0]},{"size":2,"px":[4,4],"py":[3,4],"pz":[2,2],"nx":[9,2],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[8,4],"py":[3,4],"pz":[0,-1],"nx":[8,6],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[2,0],"py":[6,3],"pz":[1,2],"nx":[0,7],"ny":[7,8],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[7,3],"pz":[1,-1],"nx":[15,4],"ny":[14,4],"nz":[0,2]},{"size":4,"px":[3,1,2,2],"py":[20,7,18,17],"pz":[0,1,0,0],"nx":[9,5,5,4],"ny":[5,4,18,4],"nz":[1,-1,-1,-1]},{"size":2,"px":[5,4],"py":[3,1],"pz":[2,-1],"nx":[23,23],"ny":[14,13],"nz":[0,0]},{"size":2,"px":[12,4],"py":[6,1],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":5,"px":[22,22,11,11,11],"py":[12,13,4,6,6],"pz":[0,0,1,1,-1],"nx":[4,4,4,4,3],"ny":[16,15,18,14,11],"nz":[0,0,0,0,1]},{"size":2,"px":[4,10],"py":[0,1],"pz":[1,0],"nx":[2,2],"ny":[2,2],"nz":[2,-1]},{"size":2,"px":[15,6],"py":[4,4],"pz":[0,-1],"nx":[15,4],"ny":[2,1],"nz":[0,2]},{"size":2,"px":[11,2],"py":[10,20],"pz":[0,-1],"nx":[4,9],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[4,19],"py":[3,8],"pz":[2,0],"nx":[8,21],"ny":[4,20],"nz":[1,-1]},{"size":5,"px":[4,6,7,6,2],"py":[6,15,13,14,3],"pz":[1,0,0,0,-1],"nx":[21,22,19,21,10],"ny":[6,12,0,3,2],"nz":[0,0,0,0,1]},{"size":5,"px":[8,12,15,14,13],"py":[0,0,0,0,0],"pz":[1,0,0,0,0],"nx":[4,3,1,3,4],"ny":[19,16,3,15,4],"nz":[0,0,2,0,1]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[8,4],"ny":[4,1],"nz":[1,-1]},{"size":4,"px":[0,0,0,5],"py":[10,9,11,21],"pz":[1,1,-1,-1],"nx":[12,4,3,11],"ny":[3,1,1,3],"nz":[0,2,2,0]},{"size":2,"px":[3,1],"py":[0,0],"pz":[1,2],"nx":[1,4],"ny":[2,1],"nz":[1,-1]},{"size":5,"px":[2,5,1,0,1],"py":[14,23,7,5,9],"pz":[0,0,1,1,1],"nx":[0,0,7,9,11],"ny":[23,22,4,9,3],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[8,9],"py":[7,1],"pz":[1,-1],"nx":[8,8],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[11,9],"py":[11,3],"pz":[1,-1],"nx":[3,2],"ny":[14,10],"nz":[0,1]},{"size":4,"px":[2,4,5,4],"py":[8,20,22,16],"pz":[1,0,0,0],"nx":[8,2,11,3],"ny":[7,4,15,4],"nz":[0,-1,-1,-1]},{"size":3,"px":[1,2,3],"py":[2,1,0],"pz":[0,0,0],"nx":[0,0,15],"ny":[1,0,11],"nz":[0,0,-1]},{"size":2,"px":[12,22],"py":[6,7],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[13,0,5],"py":[19,10,2],"pz":[0,-1,-1],"nx":[3,4,6],"ny":[5,5,9],"nz":[2,2,1]},{"size":2,"px":[8,15],"py":[8,22],"pz":[1,0],"nx":[7,4],"ny":[10,7],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[7,6],"pz":[1,1],"nx":[10,1],"ny":[9,0],"nz":[1,-1]},{"size":2,"px":[9,11],"py":[4,3],"pz":[0,-1],"nx":[5,9],"ny":[0,1],"nz":[1,0]},{"size":5,"px":[14,13,14,12,15],"py":[1,2,2,2,2],"pz":[0,0,0,0,0],"nx":[4,8,4,7,4],"ny":[2,4,3,4,4],"nz":[2,1,2,1,-1]},{"size":3,"px":[13,8,2],"py":[14,5,8],"pz":[0,-1,-1],"nx":[6,8,9],"ny":[3,2,2],"nz":[0,0,0]},{"size":3,"px":[3,6,8],"py":[7,4,12],"pz":[1,1,0],"nx":[3,8,9],"ny":[5,2,2],"nz":[1,-1,-1]},{"size":2,"px":[13,4],"py":[16,3],"pz":[0,2],"nx":[13,7],"ny":[15,5],"nz":[0,-1]},{"size":2,"px":[3,0],"py":[7,9],"pz":[1,-1],"nx":[2,8],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[3,6,8,7,7],"py":[0,1,0,0,0],"pz":[1,0,0,0,-1],"nx":[7,9,4,3,4],"ny":[9,7,4,2,2],"nz":[1,1,1,2,2]},{"size":3,"px":[3,4,16],"py":[4,4,6],"pz":[1,2,0],"nx":[2,2,2],"ny":[0,0,1],"nz":[0,-1,-1]},{"size":2,"px":[0,0],"py":[1,0],"pz":[2,2],"nx":[5,5],"ny":[2,2],"nz":[1,-1]},{"size":2,"px":[9,3],"py":[7,20],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[8,21],"py":[10,18],"pz":[0,-1],"nx":[9,4],"ny":[10,4],"nz":[0,1]},{"size":2,"px":[6,13],"py":[6,23],"pz":[1,-1],"nx":[10,10],"ny":[11,12],"nz":[0,0]},{"size":5,"px":[10,9,5,10,10],"py":[9,13,6,10,10],"pz":[0,0,1,0,-1],"nx":[21,21,21,10,21],"ny":[18,20,19,11,17],"nz":[0,0,0,1,0]},{"size":2,"px":[8,8],"py":[7,6],"pz":[1,1],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[11,4],"py":[14,7],"pz":[0,-1],"nx":[13,13],"ny":[13,11],"nz":[0,0]},{"size":2,"px":[4,4],"py":[4,5],"pz":[2,2],"nx":[12,5],"ny":[16,2],"nz":[0,-1]},{"size":3,"px":[1,3,20],"py":[3,9,2],"pz":[2,-1,-1],"nx":[0,0,0],"ny":[7,4,13],"nz":[1,2,0]},{"size":2,"px":[0,0],"py":[4,2],"pz":[1,2],"nx":[1,0],"ny":[4,4],"nz":[1,-1]},{"size":3,"px":[8,9,11],"py":[2,1,2],"pz":[0,0,0],"nx":[2,2,0],"ny":[2,2,13],"nz":[2,-1,-1]},{"size":2,"px":[1,10],"py":[23,5],"pz":[0,-1],"nx":[3,6],"ny":[1,1],"nz":[2,1]},{"size":4,"px":[13,6,3,4],"py":[8,6,4,2],"pz":[0,-1,-1,-1],"nx":[1,1,1,4],"ny":[9,7,8,20],"nz":[1,1,1,0]},{"size":5,"px":[11,4,4,10,3],"py":[9,16,13,12,7],"pz":[0,0,0,0,0],"nx":[7,11,3,17,4],"ny":[8,11,9,0,4],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[6,6],"py":[6,8],"pz":[1,-1],"nx":[0,0],"ny":[1,2],"nz":[2,2]},{"size":2,"px":[10,5],"py":[7,2],"pz":[0,-1],"nx":[4,13],"ny":[5,9],"nz":[2,0]},{"size":2,"px":[10,5],"py":[8,2],"pz":[1,-1],"nx":[16,4],"ny":[14,5],"nz":[0,2]},{"size":2,"px":[1,1],"py":[16,15],"pz":[0,0],"nx":[1,20],"ny":[23,1],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[4,7],"pz":[2,1],"nx":[2,3],"ny":[5,4],"nz":[2,-1]},{"size":2,"px":[19,8],"py":[5,4],"pz":[0,-1],"nx":[10,10],"ny":[1,3],"nz":[1,1]},{"size":2,"px":[21,21],"py":[18,16],"pz":[0,0],"nx":[10,3],"ny":[17,5],"nz":[0,-1]},{"size":2,"px":[9,2],"py":[23,4],"pz":[0,2],"nx":[5,11],"ny":[3,7],"nz":[2,1]},{"size":2,"px":[7,0],"py":[3,2],"pz":[0,-1],"nx":[3,6],"ny":[1,1],"nz":[1,0]},{"size":4,"px":[5,9,8,9],"py":[8,12,13,18],"pz":[0,0,0,0],"nx":[6,5,2,5],"ny":[8,4,7,11],"nz":[0,-1,-1,-1]},{"size":2,"px":[7,2],"py":[0,0],"pz":[0,2],"nx":[5,5],"ny":[3,4],"nz":[1,-1]},{"size":2,"px":[11,11],"py":[12,13],"pz":[0,0],"nx":[9,1],"ny":[14,3],"nz":[0,-1]},{"size":5,"px":[8,16,9,4,15],"py":[11,13,8,4,12],"pz":[1,0,1,2,0],"nx":[3,3,3,3,4],"ny":[4,2,1,3,0],"nz":[0,0,0,0,0]},{"size":2,"px":[9,5],"py":[7,6],"pz":[1,-1],"nx":[19,8],"ny":[17,11],"nz":[0,1]},{"size":5,"px":[14,15,12,13,13],"py":[2,2,2,2,2],"pz":[0,0,0,0,-1],"nx":[20,9,19,20,4],"ny":[14,2,5,15,1],"nz":[0,1,0,0,2]},{"size":2,"px":[18,8],"py":[20,7],"pz":[0,1],"nx":[4,9],"ny":[2,2],"nz":[2,-1]},{"size":2,"px":[6,3],"py":[11,5],"pz":[1,2],"nx":[13,19],"ny":[20,20],"nz":[0,-1]},{"size":3,"px":[12,11,3],"py":[20,20,5],"pz":[0,0,-1],"nx":[11,12,6],"ny":[21,21,10],"nz":[0,0,1]},{"size":2,"px":[3,6],"py":[7,14],"pz":[1,0],"nx":[3,13],"ny":[4,8],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,9],"pz":[2,1],"nx":[2,11],"ny":[8,6],"nz":[1,-1]},{"size":2,"px":[2,2],"py":[5,5],"pz":[1,-1],"nx":[0,0],"ny":[6,3],"nz":[1,2]},{"size":2,"px":[11,23],"py":[5,9],"pz":[1,0],"nx":[8,2],"ny":[11,0],"nz":[0,-1]},{"size":2,"px":[11,23],"py":[12,9],"pz":[0,-1],"nx":[11,22],"ny":[10,21],"nz":[1,0]},{"size":2,"px":[12,12],"py":[7,7],"pz":[0,-1],"nx":[5,4],"ny":[7,10],"nz":[1,1]},{"size":2,"px":[9,8],"py":[18,1],"pz":[0,-1],"nx":[5,4],"ny":[8,10],"nz":[1,1]},{"size":2,"px":[16,17],"py":[11,11],"pz":[0,0],"nx":[15,2],"ny":[9,4],"nz":[0,-1]},{"size":2,"px":[0,1],"py":[3,0],"pz":[2,-1],"nx":[9,10],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[13,13],"py":[20,21],"pz":[0,-1],"nx":[2,2],"ny":[6,5],"nz":[1,1]},{"size":5,"px":[20,20,4,18,19],"py":[17,16,5,22,20],"pz":[0,0,2,0,0],"nx":[8,11,5,6,2],"ny":[10,15,11,10,1],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[11,11],"py":[4,4],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":3,"px":[6,5,6],"py":[8,10,10],"pz":[1,1,1],"nx":[11,8,22],"ny":[19,2,15],"nz":[0,-1,-1]},{"size":3,"px":[5,2,13],"py":[7,10,10],"pz":[1,-1,-1],"nx":[11,11,23],"ny":[8,9,14],"nz":[1,1,0]},{"size":5,"px":[3,6,1,5,10],"py":[7,14,1,9,2],"pz":[1,-1,-1,-1,-1],"nx":[11,0,1,5,1],"ny":[14,12,18,5,19],"nz":[0,0,0,1,0]},{"size":3,"px":[21,21,10],"py":[16,17,10],"pz":[0,0,1],"nx":[5,5,1],"ny":[9,9,18],"nz":[1,-1,-1]},{"size":2,"px":[6,21],"py":[6,17],"pz":[1,-1],"nx":[20,10],"ny":[7,4],"nz":[0,1]},{"size":2,"px":[10,11],"py":[0,0],"pz":[1,-1],"nx":[6,13],"ny":[2,4],"nz":[1,0]},{"size":4,"px":[4,4,7,9],"py":[3,4,10,3],"pz":[2,2,1,1],"nx":[21,2,15,5],"ny":[0,0,0,2],"nz":[0,-1,-1,-1]},{"size":3,"px":[11,11,11],"py":[7,6,9],"pz":[1,1,1],"nx":[23,4,9],"ny":[23,5,6],"nz":[0,-1,-1]},{"size":2,"px":[14,15],"py":[1,1],"pz":[0,0],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[11,23,11,23,23],"py":[11,22,10,21,20],"pz":[1,0,1,0,0],"nx":[10,9,19,10,10],"ny":[10,11,20,9,9],"nz":[1,1,0,1,-1]},{"size":2,"px":[7,23],"py":[13,22],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[12,1],"py":[19,0],"pz":[0,-1],"nx":[11,12],"ny":[22,17],"nz":[0,0]},{"size":2,"px":[10,8],"py":[4,3],"pz":[1,-1],"nx":[5,23],"ny":[2,7],"nz":[2,0]},{"size":2,"px":[9,10],"py":[6,20],"pz":[1,-1],"nx":[8,8],"ny":[4,6],"nz":[1,1]}],"alpha":[-1.135386e+00,1.135386e+00,-9.090800e-01,9.090800e-01,-5.913780e-01,5.913780e-01,-5.556534e-01,5.556534e-01,-5.084150e-01,5.084150e-01,-4.464489e-01,4.464489e-01,-4.463241e-01,4.463241e-01,-4.985226e-01,4.985226e-01,-4.424638e-01,4.424638e-01,-4.300093e-01,4.300093e-01,-4.231341e-01,4.231341e-01,-4.087428e-01,4.087428e-01,-3.374480e-01,3.374480e-01,-3.230151e-01,3.230151e-01,-3.084427e-01,3.084427e-01,-3.235494e-01,3.235494e-01,-2.589281e-01,2.589281e-01,-2.970292e-01,2.970292e-01,-2.957065e-01,2.957065e-01,-3.997619e-01,3.997619e-01,-3.535901e-01,3.535901e-01,-2.725396e-01,2.725396e-01,-2.649725e-01,2.649725e-01,-3.103888e-01,3.103888e-01,-3.117775e-01,3.117775e-01,-2.589620e-01,2.589620e-01,-2.689202e-01,2.689202e-01,-2.127024e-01,2.127024e-01,-2.436322e-01,2.436322e-01,-3.120574e-01,3.120574e-01,-2.786010e-01,2.786010e-01,-2.649072e-01,2.649072e-01,-2.766509e-01,2.766509e-01,-2.367237e-01,2.367237e-01,-2.658049e-01,2.658049e-01,-2.103463e-01,2.103463e-01,-1.911522e-01,1.911522e-01,-2.535425e-01,2.535425e-01,-2.434696e-01,2.434696e-01,-2.180788e-01,2.180788e-01,-2.496873e-01,2.496873e-01,-2.700969e-01,2.700969e-01,-2.565479e-01,2.565479e-01,-2.737741e-01,2.737741e-01,-1.675507e-01,1.675507e-01,-2.551417e-01,2.551417e-01,-2.067648e-01,2.067648e-01,-1.636834e-01,1.636834e-01,-2.129306e-01,2.129306e-01,-1.656758e-01,1.656758e-01,-1.919369e-01,1.919369e-01,-2.031763e-01,2.031763e-01,-2.062327e-01,2.062327e-01,-2.577950e-01,2.577950e-01,-2.951823e-01,2.951823e-01,-2.023160e-01,2.023160e-01,-2.022234e-01,2.022234e-01,-2.132906e-01,2.132906e-01,-1.653278e-01,1.653278e-01,-1.648474e-01,1.648474e-01,-1.593352e-01,1.593352e-01,-1.735650e-01,1.735650e-01,-1.688778e-01,1.688778e-01,-1.519705e-01,1.519705e-01,-1.812202e-01,1.812202e-01,-1.967481e-01,1.967481e-01,-1.852954e-01,1.852954e-01,-2.317780e-01,2.317780e-01,-2.036251e-01,2.036251e-01,-1.609324e-01,1.609324e-01,-2.160205e-01,2.160205e-01,-2.026190e-01,2.026190e-01,-1.854761e-01,1.854761e-01,-1.832038e-01,1.832038e-01,-2.001141e-01,2.001141e-01,-1.418333e-01,1.418333e-01,-1.704773e-01,1.704773e-01,-1.586261e-01,1.586261e-01,-1.587582e-01,1.587582e-01,-1.899489e-01,1.899489e-01,-1.477160e-01,1.477160e-01,-2.260467e-01,2.260467e-01,-2.393598e-01,2.393598e-01,-1.582373e-01,1.582373e-01,-1.702498e-01,1.702498e-01,-1.737398e-01,1.737398e-01,-1.462529e-01,1.462529e-01,-1.396517e-01,1.396517e-01,-1.629625e-01,1.629625e-01,-1.446933e-01,1.446933e-01,-1.811657e-01,1.811657e-01,-1.336427e-01,1.336427e-01,-1.924813e-01,1.924813e-01,-1.457520e-01,1.457520e-01,-1.600259e-01,1.600259e-01,-1.297000e-01,1.297000e-01,-2.076199e-01,2.076199e-01,-1.510060e-01,1.510060e-01,-1.914568e-01,1.914568e-01,-2.138162e-01,2.138162e-01,-1.856916e-01,1.856916e-01,-1.843047e-01,1.843047e-01,-1.526846e-01,1.526846e-01,-1.328320e-01,1.328320e-01,-1.751311e-01,1.751311e-01,-1.643908e-01,1.643908e-01,-1.482706e-01,1.482706e-01,-1.622298e-01,1.622298e-01,-1.884979e-01,1.884979e-01,-1.633604e-01,1.633604e-01,-1.554166e-01,1.554166e-01,-1.405332e-01,1.405332e-01,-1.772398e-01,1.772398e-01,-1.410008e-01,1.410008e-01,-1.362301e-01,1.362301e-01,-1.709087e-01,1.709087e-01,-1.584613e-01,1.584613e-01,-1.188814e-01,1.188814e-01,-1.423888e-01,1.423888e-01,-1.345565e-01,1.345565e-01,-1.835986e-01,1.835986e-01,-1.445329e-01,1.445329e-01,-1.385826e-01,1.385826e-01,-1.558917e-01,1.558917e-01,-1.476053e-01,1.476053e-01,-1.370722e-01,1.370722e-01,-2.362666e-01,2.362666e-01,-2.907774e-01,2.907774e-01,-1.656360e-01,1.656360e-01,-1.644407e-01,1.644407e-01,-1.443394e-01,1.443394e-01,-1.438823e-01,1.438823e-01,-1.476964e-01,1.476964e-01,-1.956593e-01,1.956593e-01,-2.417519e-01,2.417519e-01,-1.659315e-01,1.659315e-01,-1.466254e-01,1.466254e-01,-2.034909e-01,2.034909e-01,-2.128771e-01,2.128771e-01,-1.665429e-01,1.665429e-01,-1.387131e-01,1.387131e-01,-1.298823e-01,1.298823e-01,-1.329495e-01,1.329495e-01,-1.769587e-01,1.769587e-01,-1.366530e-01,1.366530e-01,-1.254359e-01,1.254359e-01,-1.673022e-01,1.673022e-01,-1.602519e-01,1.602519e-01,-1.897245e-01,1.897245e-01,-1.893579e-01,1.893579e-01,-1.579350e-01,1.579350e-01,-1.472589e-01,1.472589e-01,-1.614193e-01,1.614193e-01]},{"count":203,"threshold":-4.769677e+00,"feature":[{"size":5,"px":[12,5,14,9,7],"py":[9,13,3,1,3],"pz":[0,0,0,0,0],"nx":[1,0,5,14,9],"ny":[5,3,8,8,9],"nz":[2,0,1,0,0]},{"size":5,"px":[14,13,11,17,12],"py":[2,2,4,13,3],"pz":[0,0,0,0,0],"nx":[7,22,8,23,22],"ny":[8,15,11,12,3],"nz":[1,0,1,0,0]},{"size":5,"px":[9,11,11,11,16],"py":[4,8,7,9,12],"pz":[0,0,0,0,0],"nx":[4,8,14,9,9],"ny":[4,4,8,8,8],"nz":[1,1,0,0,-1]},{"size":5,"px":[6,12,12,8,3],"py":[11,7,8,10,2],"pz":[0,0,0,0,2],"nx":[8,4,4,4,0],"ny":[4,4,4,11,0],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[19,17,18,9,9],"py":[3,2,3,1,1],"pz":[0,0,0,1,-1],"nx":[21,21,10,22,22],"ny":[1,2,0,4,3],"nz":[0,0,1,0,0]},{"size":2,"px":[4,7],"py":[4,6],"pz":[2,1],"nx":[8,7],"ny":[4,10],"nz":[1,1]},{"size":5,"px":[14,17,17,13,12],"py":[18,15,16,18,18],"pz":[0,0,0,0,0],"nx":[13,19,5,20,6],"ny":[16,4,1,19,0],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[6,7,4,5,5],"py":[15,23,6,12,16],"pz":[0,0,1,0,0],"nx":[3,14,14,6,6],"ny":[4,11,11,9,0],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[16,9,6,3,11],"py":[2,2,5,3,2],"pz":[0,0,1,2,0],"nx":[3,4,2,5,5],"ny":[4,11,2,8,8],"nz":[1,1,2,1,-1]},{"size":5,"px":[6,1,5,3,3],"py":[14,4,15,7,7],"pz":[0,2,0,1,-1],"nx":[0,0,1,1,1],"ny":[7,8,18,17,5],"nz":[1,1,0,0,2]},{"size":5,"px":[12,12,9,5,3],"py":[14,14,0,3,7],"pz":[0,-1,-1,-1,-1],"nx":[7,7,14,8,13],"ny":[7,8,13,10,10],"nz":[1,1,0,1,0]},{"size":2,"px":[3,4],"py":[7,9],"pz":[1,-1],"nx":[2,4],"ny":[5,4],"nz":[2,1]},{"size":3,"px":[10,21,17],"py":[7,11,23],"pz":[1,0,0],"nx":[21,9,3],"ny":[23,5,5],"nz":[0,-1,-1]},{"size":5,"px":[8,11,9,10,11],"py":[2,0,1,1,2],"pz":[0,0,0,0,0],"nx":[4,5,6,4,3],"ny":[8,4,18,7,4],"nz":[1,1,0,1,-1]},{"size":5,"px":[20,22,3,19,10],"py":[20,9,4,22,3],"pz":[0,0,2,0,1],"nx":[8,20,8,3,2],"ny":[4,3,6,4,3],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[4,4],"py":[8,7],"pz":[1,1],"nx":[9,2],"ny":[15,5],"nz":[0,-1]},{"size":2,"px":[11,13],"py":[13,4],"pz":[0,-1],"nx":[20,21],"ny":[1,4],"nz":[0,0]},{"size":5,"px":[1,2,7,6,8],"py":[0,2,3,3,3],"pz":[2,1,0,0,0],"nx":[1,2,1,1,1],"ny":[0,0,4,3,3],"nz":[1,0,0,0,-1]},{"size":2,"px":[3,10],"py":[9,11],"pz":[0,0],"nx":[6,3],"ny":[9,2],"nz":[0,-1]},{"size":5,"px":[12,12,12,12,6],"py":[10,11,13,12,6],"pz":[0,0,0,0,-1],"nx":[10,2,1,10,10],"ny":[10,4,2,11,9],"nz":[0,1,2,0,0]},{"size":5,"px":[16,18,11,17,15],"py":[11,12,8,12,11],"pz":[0,0,0,0,0],"nx":[14,0,19,0,10],"ny":[9,3,14,8,9],"nz":[0,-1,-1,-1,-1]},{"size":4,"px":[5,9,5,8],"py":[21,18,20,23],"pz":[0,0,0,0],"nx":[8,4,3,1],"ny":[20,3,4,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,3],"py":[3,2],"pz":[2,2],"nx":[3,12],"ny":[4,23],"nz":[1,-1]},{"size":5,"px":[0,1,1,1,1],"py":[2,16,14,13,12],"pz":[2,0,0,0,0],"nx":[8,4,9,4,7],"ny":[9,3,4,2,9],"nz":[1,2,1,2,1]},{"size":2,"px":[4,9],"py":[3,7],"pz":[2,-1],"nx":[4,9],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[15,16,17,15,8],"py":[3,3,3,18,1],"pz":[0,0,0,0,1],"nx":[1,2,2,1,3],"ny":[5,3,2,6,0],"nz":[0,0,0,0,0]},{"size":2,"px":[4,17],"py":[4,14],"pz":[2,0],"nx":[15,7],"ny":[15,10],"nz":[0,-1]},{"size":3,"px":[14,12,3],"py":[3,13,3],"pz":[0,-1,-1],"nx":[4,17,4],"ny":[3,19,4],"nz":[2,0,2]},{"size":4,"px":[4,5,12,2],"py":[9,6,19,4],"pz":[1,1,0,2],"nx":[12,17,4,4],"ny":[18,19,4,4],"nz":[0,-1,-1,-1]},{"size":5,"px":[10,19,20,20,19],"py":[7,14,13,14,13],"pz":[1,0,0,0,-1],"nx":[11,23,23,23,23],"ny":[9,15,13,16,14],"nz":[1,0,0,0,0]},{"size":4,"px":[0,0,0,2],"py":[5,6,5,14],"pz":[1,1,2,0],"nx":[0,3,3,17],"ny":[23,5,5,9],"nz":[0,-1,-1,-1]},{"size":2,"px":[15,4],"py":[23,5],"pz":[0,2],"nx":[9,3],"ny":[4,4],"nz":[1,-1]},{"size":4,"px":[6,5,10,12],"py":[3,3,23,23],"pz":[1,1,0,0],"nx":[11,1,1,4],"ny":[21,3,5,5],"nz":[0,-1,-1,-1]},{"size":2,"px":[5,2],"py":[9,4],"pz":[1,2],"nx":[4,9],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[23,23,23,23,23],"py":[14,9,13,11,12],"pz":[0,0,0,0,0],"nx":[6,13,7,8,8],"ny":[9,6,3,3,3],"nz":[1,0,1,1,-1]},{"size":2,"px":[10,3],"py":[4,5],"pz":[0,-1],"nx":[3,8],"ny":[1,3],"nz":[2,1]},{"size":2,"px":[3,12],"py":[4,18],"pz":[2,0],"nx":[12,0],"ny":[16,3],"nz":[0,-1]},{"size":2,"px":[16,2],"py":[4,4],"pz":[0,-1],"nx":[16,4],"ny":[1,0],"nz":[0,2]},{"size":2,"px":[3,4],"py":[7,1],"pz":[1,-1],"nx":[5,3],"ny":[19,9],"nz":[0,1]},{"size":4,"px":[20,19,20,21],"py":[2,0,1,3],"pz":[0,0,0,0],"nx":[11,5,23,11],"ny":[0,0,1,1],"nz":[1,2,0,1]},{"size":2,"px":[12,13],"py":[7,5],"pz":[0,0],"nx":[8,5],"ny":[3,5],"nz":[1,-1]},{"size":5,"px":[22,21,22,22,22],"py":[20,22,18,19,16],"pz":[0,0,0,0,0],"nx":[2,3,3,15,15],"ny":[4,5,4,7,7],"nz":[1,2,1,0,-1]},{"size":3,"px":[15,14,14],"py":[1,1,1],"pz":[0,0,-1],"nx":[17,18,16],"ny":[1,2,1],"nz":[0,0,0]},{"size":4,"px":[17,16,16,15],"py":[2,1,0,0],"pz":[0,0,0,0],"nx":[7,4,2,11],"ny":[11,2,1,4],"nz":[1,2,-1,-1]},{"size":4,"px":[18,0,0,0],"py":[14,6,5,4],"pz":[0,-1,-1,-1],"nx":[19,19,19,19],"ny":[16,19,17,18],"nz":[0,0,0,0]},{"size":4,"px":[11,5,5,0],"py":[14,1,4,4],"pz":[0,-1,-1,-1],"nx":[11,8,2,15],"ny":[17,14,1,9],"nz":[0,0,2,0]},{"size":2,"px":[4,5],"py":[19,21],"pz":[0,0],"nx":[10,2],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[6,4],"py":[4,6],"pz":[1,1],"nx":[3,3],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[2,7],"py":[1,13],"pz":[2,0],"nx":[7,2],"ny":[1,4],"nz":[1,-1]},{"size":4,"px":[15,10,4,7],"py":[23,3,1,7],"pz":[0,1,2,1],"nx":[0,4,1,1],"ny":[0,2,0,-1900147915],"nz":[0,-1,-1,-1]},{"size":2,"px":[7,2],"py":[12,11],"pz":[0,-1],"nx":[2,4],"ny":[2,5],"nz":[2,1]},{"size":5,"px":[0,0,0,1,0],"py":[9,4,3,2,6],"pz":[0,1,2,1,1],"nx":[9,4,2,16,16],"ny":[7,4,2,8,8],"nz":[0,1,2,0,-1]},{"size":5,"px":[18,4,9,4,4],"py":[12,5,6,3,4],"pz":[0,2,1,2,-1],"nx":[4,3,3,2,3],"ny":[23,19,21,16,18],"nz":[0,0,0,0,0]},{"size":2,"px":[6,6],"py":[14,13],"pz":[0,0],"nx":[3,10],"ny":[4,7],"nz":[1,-1]},{"size":5,"px":[3,4,4,2,2],"py":[8,11,7,4,4],"pz":[1,1,1,2,-1],"nx":[20,18,19,20,19],"ny":[4,0,2,3,1],"nz":[0,0,0,0,0]},{"size":5,"px":[17,12,14,8,16],"py":[2,0,0,0,0],"pz":[0,0,0,1,0],"nx":[3,15,3,2,2],"ny":[2,9,7,2,2],"nz":[2,0,1,2,-1]},{"size":5,"px":[11,10,11,11,11],"py":[10,12,11,12,12],"pz":[0,0,0,0,-1],"nx":[13,13,20,10,13],"ny":[9,11,8,4,10],"nz":[0,0,0,1,0]},{"size":2,"px":[8,16],"py":[7,13],"pz":[1,0],"nx":[8,13],"ny":[4,11],"nz":[1,-1]},{"size":2,"px":[6,7],"py":[20,3],"pz":[0,-1],"nx":[3,4],"ny":[10,10],"nz":[1,1]},{"size":3,"px":[13,10,17],"py":[9,3,5],"pz":[0,-1,-1],"nx":[1,3,1],"ny":[5,16,6],"nz":[2,0,1]},{"size":2,"px":[0,0],"py":[5,5],"pz":[2,-1],"nx":[8,3],"ny":[14,10],"nz":[0,1]},{"size":4,"px":[11,9,12,10],"py":[2,2,2,2],"pz":[0,0,0,0],"nx":[4,4,4,10],"ny":[5,5,0,16],"nz":[1,-1,-1,-1]},{"size":3,"px":[7,9,12],"py":[2,2,2],"pz":[1,-1,-1],"nx":[4,7,2],"ny":[3,1,0],"nz":[0,0,2]},{"size":2,"px":[2,4],"py":[3,12],"pz":[2,0],"nx":[7,4],"ny":[6,5],"nz":[1,2]},{"size":4,"px":[12,12,6,3],"py":[12,11,21,7],"pz":[0,0,-1,-1],"nx":[1,0,0,0],"ny":[13,3,6,5],"nz":[0,2,1,1]},{"size":3,"px":[3,1,3],"py":[21,8,18],"pz":[0,1,0],"nx":[11,20,0],"ny":[17,17,6],"nz":[0,-1,-1]},{"size":2,"px":[2,8],"py":[3,12],"pz":[2,0],"nx":[2,20],"ny":[4,17],"nz":[1,-1]},{"size":5,"px":[2,3,4,3,2],"py":[10,14,14,15,13],"pz":[1,0,0,0,0],"nx":[0,0,1,0,0],"ny":[21,20,23,19,19],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,15],"py":[7,4],"pz":[1,-1],"nx":[3,8],"ny":[4,14],"nz":[1,0]},{"size":5,"px":[19,14,12,15,4],"py":[8,12,10,16,2],"pz":[0,0,0,0,2],"nx":[8,0,12,4,0],"ny":[4,1,12,2,19],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[18,9],"py":[15,3],"pz":[0,-1],"nx":[8,15],"ny":[9,14],"nz":[1,0]},{"size":5,"px":[4,2,3,4,9],"py":[9,4,3,8,23],"pz":[1,2,1,1,0],"nx":[11,23,23,11,11],"ny":[0,2,3,1,1],"nz":[1,0,0,1,-1]},{"size":2,"px":[6,7],"py":[1,1],"pz":[0,0],"nx":[3,4],"ny":[10,5],"nz":[1,-1]},{"size":4,"px":[11,9,8,5],"py":[12,15,13,3],"pz":[0,-1,-1,-1],"nx":[3,12,14,13],"ny":[0,3,3,3],"nz":[2,0,0,0]},{"size":2,"px":[11,11],"py":[6,5],"pz":[0,0],"nx":[8,11],"ny":[4,20],"nz":[1,-1]},{"size":5,"px":[21,20,21,21,21],"py":[18,21,17,19,19],"pz":[0,0,0,0,-1],"nx":[2,5,4,4,5],"ny":[5,12,11,10,10],"nz":[1,0,0,0,0]},{"size":5,"px":[1,1,1,1,1],"py":[10,11,7,9,8],"pz":[0,0,0,0,0],"nx":[11,23,23,23,23],"ny":[10,20,21,19,19],"nz":[1,0,0,0,-1]},{"size":5,"px":[7,8,7,3,1],"py":[14,13,13,2,2],"pz":[0,0,-1,-1,-1],"nx":[1,10,2,2,10],"ny":[2,13,4,16,12],"nz":[2,0,1,0,0]},{"size":2,"px":[17,18],"py":[12,12],"pz":[0,0],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[17,0],"py":[5,20],"pz":[0,-1],"nx":[4,9],"ny":[0,2],"nz":[2,1]},{"size":5,"px":[22,22,22,11,23],"py":[16,15,14,6,13],"pz":[0,0,0,1,0],"nx":[16,15,7,9,9],"ny":[15,8,4,10,10],"nz":[0,0,1,1,-1]},{"size":2,"px":[13,3],"py":[3,1],"pz":[0,2],"nx":[8,3],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[5,6],"py":[4,1],"pz":[1,-1],"nx":[6,3],"ny":[4,2],"nz":[1,2]},{"size":3,"px":[4,2,6],"py":[6,3,4],"pz":[1,2,1],"nx":[10,0,4],"ny":[9,4,3],"nz":[0,-1,-1]},{"size":4,"px":[2,8,4,10],"py":[4,23,7,23],"pz":[2,0,1,0],"nx":[9,4,11,9],"ny":[21,5,16,0],"nz":[0,-1,-1,-1]},{"size":2,"px":[6,3],"py":[13,0],"pz":[0,-1],"nx":[8,2],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[3,3],"py":[1,4],"pz":[1,-1],"nx":[3,5],"ny":[0,1],"nz":[1,0]},{"size":2,"px":[7,2],"py":[0,0],"pz":[0,2],"nx":[2,10],"ny":[1,6],"nz":[2,0]},{"size":2,"px":[10,2],"py":[7,0],"pz":[1,-1],"nx":[21,5],"ny":[15,4],"nz":[0,2]},{"size":2,"px":[1,1],"py":[10,9],"pz":[0,0],"nx":[0,3],"ny":[13,11],"nz":[0,-1]},{"size":2,"px":[11,9],"py":[13,0],"pz":[0,-1],"nx":[3,3],"ny":[4,3],"nz":[1,1]},{"size":5,"px":[14,13,13,14,14],"py":[12,10,11,13,13],"pz":[0,0,0,0,-1],"nx":[9,8,4,5,7],"ny":[4,4,2,2,4],"nz":[0,0,1,1,0]},{"size":3,"px":[2,4,1],"py":[2,0,0],"pz":[0,0,1],"nx":[0,7,4],"ny":[0,3,2],"nz":[1,-1,-1]},{"size":2,"px":[11,4],"py":[5,0],"pz":[0,-1],"nx":[8,6],"ny":[4,9],"nz":[1,1]},{"size":3,"px":[0,0,0],"py":[20,2,4],"pz":[0,-1,-1],"nx":[12,3,10],"ny":[3,1,3],"nz":[0,2,0]},{"size":5,"px":[5,11,10,13,13],"py":[0,0,0,2,2],"pz":[1,0,0,0,-1],"nx":[4,5,5,4,5],"ny":[14,0,2,6,1],"nz":[0,0,0,0,0]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,11],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[14,-1715597992],"py":[19,9],"pz":[0,-1],"nx":[7,14],"ny":[10,17],"nz":[1,0]},{"size":2,"px":[11,1],"py":[9,0],"pz":[0,-1],"nx":[1,12],"ny":[2,10],"nz":[2,0]},{"size":2,"px":[17,9],"py":[13,17],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[0,7],"py":[1,9],"pz":[1,-1],"nx":[18,4],"ny":[14,2],"nz":[0,2]},{"size":2,"px":[14,7],"py":[23,9],"pz":[0,-1],"nx":[4,8],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[8,7],"py":[17,9],"pz":[0,-1],"nx":[3,2],"ny":[0,3],"nz":[0,0]},{"size":2,"px":[13,4],"py":[20,1],"pz":[0,-1],"nx":[5,3],"ny":[21,17],"nz":[0,0]},{"size":3,"px":[0,0,1],"py":[3,6,15],"pz":[2,1,0],"nx":[10,8,3],"ny":[6,4,2],"nz":[0,-1,-1]},{"size":2,"px":[8,8],"py":[18,8],"pz":[0,-1],"nx":[5,4],"ny":[8,10],"nz":[1,1]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[8,9],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[6,3],"py":[11,5],"pz":[1,2],"nx":[13,3],"ny":[19,2],"nz":[0,-1]},{"size":2,"px":[4,6],"py":[1,11],"pz":[2,-1],"nx":[3,2],"ny":[1,0],"nz":[1,2]},{"size":2,"px":[9,4],"py":[10,5],"pz":[1,2],"nx":[8,4],"ny":[10,4],"nz":[1,-1]},{"size":2,"px":[12,12],"py":[11,20],"pz":[0,-1],"nx":[0,0],"ny":[6,10],"nz":[1,0]},{"size":2,"px":[7,12],"py":[2,20],"pz":[0,-1],"nx":[2,2],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[0,15],"py":[5,21],"pz":[1,-1],"nx":[10,9],"ny":[3,3],"nz":[0,1]},{"size":2,"px":[15,9],"py":[1,0],"pz":[0,1],"nx":[19,3],"ny":[0,3],"nz":[0,-1]},{"size":2,"px":[21,5],"py":[13,5],"pz":[0,2],"nx":[23,6],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[5,8],"py":[3,1],"pz":[2,-1],"nx":[9,9],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[2,2],"py":[7,7],"pz":[1,-1],"nx":[5,3],"ny":[23,17],"nz":[0,0]},{"size":2,"px":[11,3],"py":[6,4],"pz":[0,-1],"nx":[2,4],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[14,0,17],"py":[20,3,21],"pz":[0,-1,-1],"nx":[11,11,11],"ny":[7,9,10],"nz":[1,1,1]},{"size":5,"px":[11,11,23,23,12],"py":[10,11,21,20,12],"pz":[1,1,0,0,0],"nx":[8,3,6,7,7],"ny":[4,5,11,11,11],"nz":[1,2,1,1,-1]},{"size":2,"px":[11,11],"py":[11,10],"pz":[0,0],"nx":[9,3],"ny":[2,5],"nz":[1,-1]},{"size":2,"px":[12,14],"py":[19,19],"pz":[0,0],"nx":[12,13],"ny":[18,17],"nz":[0,-1]},{"size":5,"px":[13,14,12,15,14],"py":[0,0,1,1,1],"pz":[0,0,0,0,0],"nx":[4,8,4,7,7],"ny":[3,4,2,5,5],"nz":[2,1,2,1,-1]},{"size":2,"px":[17,5],"py":[10,2],"pz":[0,-1],"nx":[4,9],"ny":[2,3],"nz":[2,1]},{"size":2,"px":[18,10],"py":[6,10],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[8,18,8,4,16],"py":[6,12,9,4,13],"pz":[1,0,1,2,0],"nx":[3,4,3,5,5],"ny":[0,2,3,1,1],"nz":[1,0,0,0,-1]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[8,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[4,5],"pz":[2,-1],"nx":[4,2],"ny":[14,7],"nz":[0,1]},{"size":4,"px":[3,4,4,3],"py":[11,12,12,2],"pz":[0,0,-1,-1],"nx":[1,2,1,2],"ny":[11,14,12,16],"nz":[0,0,0,0]},{"size":2,"px":[6,0],"py":[11,0],"pz":[0,-1],"nx":[3,4],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[3,2],"py":[21,11],"pz":[0,1],"nx":[3,2],"ny":[10,0],"nz":[1,-1]},{"size":3,"px":[10,3,13],"py":[2,0,2],"pz":[0,2,0],"nx":[7,16,1],"ny":[10,4,1],"nz":[0,-1,-1]},{"size":2,"px":[6,12],"py":[2,5],"pz":[1,0],"nx":[6,18],"ny":[1,19],"nz":[1,-1]},{"size":2,"px":[3,16],"py":[0,16],"pz":[1,-1],"nx":[11,2],"ny":[5,1],"nz":[0,2]},{"size":2,"px":[11,10],"py":[13,1],"pz":[0,-1],"nx":[1,1],"ny":[22,21],"nz":[0,0]},{"size":2,"px":[11,10],"py":[18,18],"pz":[0,0],"nx":[5,8],"ny":[9,0],"nz":[1,-1]},{"size":2,"px":[3,2],"py":[20,18],"pz":[0,0],"nx":[8,3],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[14,2],"py":[17,1],"pz":[0,-1],"nx":[14,13],"ny":[15,15],"nz":[0,0]},{"size":2,"px":[3,4],"py":[2,3],"pz":[2,2],"nx":[8,3],"ny":[4,0],"nz":[1,-1]},{"size":5,"px":[8,18,18,8,7],"py":[6,11,11,7,9],"pz":[1,0,-1,-1,-1],"nx":[5,13,5,11,5],"ny":[3,11,0,8,2],"nz":[2,0,2,1,2]},{"size":5,"px":[12,0,5,4,7],"py":[15,0,4,0,9],"pz":[0,-1,-1,-1,-1],"nx":[8,7,4,16,6],"ny":[17,12,9,10,12],"nz":[0,0,1,0,0]},{"size":2,"px":[6,7],"py":[14,1],"pz":[0,-1],"nx":[5,4],"ny":[9,4],"nz":[1,1]},{"size":4,"px":[8,0,22,4],"py":[4,4,23,0],"pz":[0,-1,-1,-1],"nx":[2,4,2,5],"ny":[0,1,2,9],"nz":[2,1,2,1]},{"size":5,"px":[9,9,10,10,8],"py":[0,1,1,2,0],"pz":[1,1,1,1,1],"nx":[4,16,16,16,6],"ny":[2,11,11,11,12],"nz":[2,0,-1,-1,-1]},{"size":2,"px":[6,6],"py":[6,5],"pz":[1,1],"nx":[0,4],"ny":[3,2],"nz":[1,-1]},{"size":3,"px":[10,3,4],"py":[5,9,8],"pz":[1,-1,-1],"nx":[11,23,23],"ny":[7,12,11],"nz":[1,0,0]},{"size":3,"px":[13,12,7],"py":[19,19,10],"pz":[0,0,1],"nx":[13,5,19],"ny":[20,15,22],"nz":[0,-1,-1]},{"size":2,"px":[12,12],"py":[12,13],"pz":[0,0],"nx":[9,10],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[0,12],"py":[1,13],"pz":[2,-1],"nx":[2,7],"ny":[2,13],"nz":[2,0]},{"size":2,"px":[10,10],"py":[8,9],"pz":[1,1],"nx":[19,7],"ny":[23,13],"nz":[0,-1]},{"size":4,"px":[8,7,23,15],"py":[11,12,4,21],"pz":[0,0,-1,-1],"nx":[2,5,1,10],"ny":[6,6,2,13],"nz":[0,1,1,0]},{"size":2,"px":[10,9],"py":[3,3],"pz":[0,0],"nx":[2,3],"ny":[2,4],"nz":[2,-1]},{"size":2,"px":[5,2],"py":[3,4],"pz":[2,-1],"nx":[3,6],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[7,11],"py":[20,16],"pz":[0,-1],"nx":[2,4],"ny":[5,20],"nz":[2,0]},{"size":2,"px":[9,7],"py":[7,5],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[4,2],"py":[11,3],"pz":[1,2],"nx":[5,5],"ny":[3,5],"nz":[2,-1]},{"size":2,"px":[11,3],"py":[11,5],"pz":[1,-1],"nx":[4,1],"ny":[12,3],"nz":[0,2]},{"size":2,"px":[9,11],"py":[6,4],"pz":[1,-1],"nx":[10,20],"ny":[9,18],"nz":[1,0]},{"size":5,"px":[2,2,2,2,1],"py":[15,13,16,14,7],"pz":[0,0,0,0,1],"nx":[15,8,9,8,4],"ny":[11,6,5,5,4],"nz":[0,1,1,1,-1]},{"size":2,"px":[12,2],"py":[5,5],"pz":[0,-1],"nx":[3,2],"ny":[7,2],"nz":[1,2]},{"size":2,"px":[5,11],"py":[1,3],"pz":[2,1],"nx":[10,10],"ny":[3,3],"nz":[1,-1]},{"size":2,"px":[17,11],"py":[13,18],"pz":[0,-1],"nx":[6,9],"ny":[9,4],"nz":[1,1]},{"size":5,"px":[5,1,2,5,6],"py":[14,4,9,15,23],"pz":[0,2,1,0,0],"nx":[4,9,18,16,17],"ny":[0,1,1,0,0],"nz":[2,1,0,0,0]},{"size":2,"px":[16,17],"py":[0,0],"pz":[0,0],"nx":[23,23],"ny":[5,4],"nz":[0,-1]},{"size":2,"px":[13,8],"py":[20,6],"pz":[0,-1],"nx":[5,6],"ny":[12,10],"nz":[0,1]},{"size":2,"px":[6,15],"py":[15,0],"pz":[0,-1],"nx":[6,3],"ny":[16,4],"nz":[0,1]},{"size":2,"px":[18,20],"py":[7,8],"pz":[0,0],"nx":[18,11],"ny":[9,14],"nz":[0,-1]},{"size":2,"px":[9,4],"py":[12,6],"pz":[0,1],"nx":[3,15],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,2],"pz":[1,2],"nx":[5,5],"ny":[2,2],"nz":[1,-1]},{"size":2,"px":[5,20],"py":[1,20],"pz":[1,-1],"nx":[15,17],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[7,2],"py":[16,4],"pz":[0,2],"nx":[4,0],"ny":[10,6],"nz":[1,-1]},{"size":2,"px":[3,8],"py":[5,0],"pz":[1,-1],"nx":[1,1],"ny":[10,18],"nz":[1,0]},{"size":2,"px":[22,0],"py":[3,0],"pz":[0,-1],"nx":[23,11],"ny":[4,1],"nz":[0,1]},{"size":3,"px":[19,10,20],"py":[21,8,18],"pz":[0,1,0],"nx":[3,6,20],"ny":[5,11,14],"nz":[2,-1,-1]},{"size":4,"px":[2,1,6,5],"py":[7,4,23,22],"pz":[1,2,0,0],"nx":[9,19,20,4],"ny":[8,11,9,2],"nz":[0,-1,-1,-1]},{"size":2,"px":[3,6],"py":[2,11],"pz":[2,1],"nx":[12,10],"ny":[21,9],"nz":[0,-1]},{"size":4,"px":[6,0,2,2],"py":[6,1,4,1],"pz":[1,-1,-1,-1],"nx":[0,0,0,0],"ny":[5,8,9,4],"nz":[1,0,0,1]},{"size":5,"px":[3,13,6,11,9],"py":[0,3,1,1,2],"pz":[2,0,1,0,0],"nx":[7,20,16,4,7],"ny":[7,2,19,2,6],"nz":[1,0,0,2,1]},{"size":4,"px":[7,5,2,6],"py":[7,7,4,11],"pz":[0,0,2,1],"nx":[7,1,21,0],"ny":[8,4,11,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,2],"py":[3,2],"pz":[2,2],"nx":[8,9],"ny":[3,11],"nz":[1,-1]},{"size":2,"px":[7,13],"py":[3,5],"pz":[1,0],"nx":[4,3],"ny":[2,2],"nz":[1,-1]},{"size":4,"px":[3,12,13,11],"py":[0,1,1,1],"pz":[2,0,0,0],"nx":[8,9,13,0],"ny":[4,1,16,3],"nz":[1,-1,-1,-1]},{"size":2,"px":[10,1],"py":[4,14],"pz":[0,-1],"nx":[5,10],"ny":[1,2],"nz":[1,0]},{"size":2,"px":[11,12],"py":[21,21],"pz":[0,0],"nx":[10,11],"ny":[19,19],"nz":[0,0]},{"size":2,"px":[8,12],"py":[6,21],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[11,7],"py":[19,0],"pz":[0,-1],"nx":[6,5],"ny":[9,11],"nz":[1,1]},{"size":5,"px":[11,11,11,10,10],"py":[10,12,11,13,13],"pz":[0,0,0,0,-1],"nx":[7,13,6,12,7],"ny":[10,6,3,6,11],"nz":[0,0,1,0,0]},{"size":2,"px":[12,11],"py":[6,12],"pz":[0,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":5,"px":[16,15,16,15,17],"py":[1,0,0,1,1],"pz":[0,0,0,0,0],"nx":[13,7,6,12,12],"ny":[5,4,3,6,6],"nz":[0,1,1,0,-1]},{"size":2,"px":[2,3],"py":[1,3],"pz":[2,1],"nx":[1,5],"ny":[1,3],"nz":[2,-1]},{"size":2,"px":[6,3],"py":[13,6],"pz":[0,1],"nx":[4,9],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[0,3],"py":[4,3],"pz":[1,-1],"nx":[4,8],"ny":[3,6],"nz":[2,1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[0,1],"nx":[5,5],"ny":[7,21],"nz":[1,-1]},{"size":2,"px":[8,4],"py":[0,0],"pz":[1,-1],"nx":[19,17],"ny":[1,0],"nz":[0,0]},{"size":4,"px":[8,11,5,0],"py":[6,1,1,22],"pz":[1,-1,-1,-1],"nx":[0,10,10,1],"ny":[6,12,13,4],"nz":[1,0,0,1]},{"size":2,"px":[8,17],"py":[6,13],"pz":[1,0],"nx":[14,17],"ny":[9,3],"nz":[0,-1]},{"size":2,"px":[5,8],"py":[0,4],"pz":[2,-1],"nx":[9,8],"ny":[1,1],"nz":[0,0]},{"size":2,"px":[11,14],"py":[13,9],"pz":[0,-1],"nx":[23,23],"ny":[21,19],"nz":[0,0]},{"size":2,"px":[10,9],"py":[9,3],"pz":[0,-1],"nx":[6,3],"ny":[2,1],"nz":[1,2]},{"size":2,"px":[11,1],"py":[4,4],"pz":[0,-1],"nx":[2,4],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[5,9],"py":[3,3],"pz":[2,-1],"nx":[17,9],"ny":[12,5],"nz":[0,1]},{"size":2,"px":[9,7],"py":[18,16],"pz":[0,-1],"nx":[5,2],"ny":[9,5],"nz":[1,2]},{"size":2,"px":[3,6],"py":[0,1],"pz":[1,-1],"nx":[4,5],"ny":[1,0],"nz":[0,0]}],"alpha":[-1.149973e+00,1.149973e+00,-6.844773e-01,6.844773e-01,-6.635048e-01,6.635048e-01,-4.888349e-01,4.888349e-01,-4.267976e-01,4.267976e-01,-4.258100e-01,4.258100e-01,-4.815853e-01,4.815853e-01,-4.091859e-01,4.091859e-01,-3.137414e-01,3.137414e-01,-3.339860e-01,3.339860e-01,-3.891196e-01,3.891196e-01,-4.167691e-01,4.167691e-01,-3.186609e-01,3.186609e-01,-2.957171e-01,2.957171e-01,-3.210062e-01,3.210062e-01,-2.725684e-01,2.725684e-01,-2.452176e-01,2.452176e-01,-2.812662e-01,2.812662e-01,-3.029622e-01,3.029622e-01,-3.293745e-01,3.293745e-01,-3.441536e-01,3.441536e-01,-2.946918e-01,2.946918e-01,-2.890545e-01,2.890545e-01,-1.949205e-01,1.949205e-01,-2.176102e-01,2.176102e-01,-2.595190e-01,2.595190e-01,-2.690931e-01,2.690931e-01,-2.130294e-01,2.130294e-01,-2.316308e-01,2.316308e-01,-2.798562e-01,2.798562e-01,-2.146988e-01,2.146988e-01,-2.332089e-01,2.332089e-01,-2.470614e-01,2.470614e-01,-2.204300e-01,2.204300e-01,-2.272045e-01,2.272045e-01,-2.583686e-01,2.583686e-01,-2.072299e-01,2.072299e-01,-1.834971e-01,1.834971e-01,-2.332656e-01,2.332656e-01,-3.271297e-01,3.271297e-01,-2.401937e-01,2.401937e-01,-2.006316e-01,2.006316e-01,-2.401947e-01,2.401947e-01,-2.475346e-01,2.475346e-01,-2.579532e-01,2.579532e-01,-2.466235e-01,2.466235e-01,-1.787582e-01,1.787582e-01,-2.036892e-01,2.036892e-01,-1.665028e-01,1.665028e-01,-1.576510e-01,1.576510e-01,-2.036997e-01,2.036997e-01,-2.040734e-01,2.040734e-01,-1.792532e-01,1.792532e-01,-2.174767e-01,2.174767e-01,-1.876948e-01,1.876948e-01,-1.883137e-01,1.883137e-01,-1.923872e-01,1.923872e-01,-2.620218e-01,2.620218e-01,-1.659873e-01,1.659873e-01,-1.475948e-01,1.475948e-01,-1.731607e-01,1.731607e-01,-2.059256e-01,2.059256e-01,-1.586309e-01,1.586309e-01,-1.607668e-01,1.607668e-01,-1.975101e-01,1.975101e-01,-2.130745e-01,2.130745e-01,-1.898872e-01,1.898872e-01,-2.052598e-01,2.052598e-01,-1.599397e-01,1.599397e-01,-1.770134e-01,1.770134e-01,-1.888249e-01,1.888249e-01,-1.515406e-01,1.515406e-01,-1.907771e-01,1.907771e-01,-1.698406e-01,1.698406e-01,-2.079535e-01,2.079535e-01,-1.966967e-01,1.966967e-01,-1.631391e-01,1.631391e-01,-2.158666e-01,2.158666e-01,-2.891774e-01,2.891774e-01,-1.581556e-01,1.581556e-01,-1.475359e-01,1.475359e-01,-1.806169e-01,1.806169e-01,-1.782238e-01,1.782238e-01,-1.660440e-01,1.660440e-01,-1.576919e-01,1.576919e-01,-1.741775e-01,1.741775e-01,-1.427265e-01,1.427265e-01,-1.695880e-01,1.695880e-01,-1.486712e-01,1.486712e-01,-1.533565e-01,1.533565e-01,-1.601464e-01,1.601464e-01,-1.978414e-01,1.978414e-01,-1.746566e-01,1.746566e-01,-1.794736e-01,1.794736e-01,-1.896567e-01,1.896567e-01,-1.666197e-01,1.666197e-01,-1.969351e-01,1.969351e-01,-2.321735e-01,2.321735e-01,-1.592485e-01,1.592485e-01,-1.671464e-01,1.671464e-01,-1.688885e-01,1.688885e-01,-1.868042e-01,1.868042e-01,-1.301138e-01,1.301138e-01,-1.330094e-01,1.330094e-01,-1.268423e-01,1.268423e-01,-1.820868e-01,1.820868e-01,-1.881020e-01,1.881020e-01,-1.580814e-01,1.580814e-01,-1.302653e-01,1.302653e-01,-1.787262e-01,1.787262e-01,-1.658453e-01,1.658453e-01,-1.240772e-01,1.240772e-01,-1.315621e-01,1.315621e-01,-1.756341e-01,1.756341e-01,-1.429438e-01,1.429438e-01,-1.351775e-01,1.351775e-01,-2.035692e-01,2.035692e-01,-1.267670e-01,1.267670e-01,-1.288470e-01,1.288470e-01,-1.393648e-01,1.393648e-01,-1.755962e-01,1.755962e-01,-1.308445e-01,1.308445e-01,-1.703894e-01,1.703894e-01,-1.461334e-01,1.461334e-01,-1.368683e-01,1.368683e-01,-1.244085e-01,1.244085e-01,-1.718163e-01,1.718163e-01,-1.415624e-01,1.415624e-01,-1.752024e-01,1.752024e-01,-1.666463e-01,1.666463e-01,-1.407325e-01,1.407325e-01,-1.258317e-01,1.258317e-01,-1.416511e-01,1.416511e-01,-1.420816e-01,1.420816e-01,-1.562547e-01,1.562547e-01,-1.542952e-01,1.542952e-01,-1.158829e-01,1.158829e-01,-1.392875e-01,1.392875e-01,-1.610095e-01,1.610095e-01,-1.546440e-01,1.546440e-01,-1.416235e-01,1.416235e-01,-2.028817e-01,2.028817e-01,-1.106779e-01,1.106779e-01,-9.231660e-02,9.231660e-02,-1.164460e-01,1.164460e-01,-1.701578e-01,1.701578e-01,-1.277995e-01,1.277995e-01,-1.946177e-01,1.946177e-01,-1.394509e-01,1.394509e-01,-1.370145e-01,1.370145e-01,-1.446031e-01,1.446031e-01,-1.665215e-01,1.665215e-01,-1.435822e-01,1.435822e-01,-1.559354e-01,1.559354e-01,-1.591860e-01,1.591860e-01,-1.193338e-01,1.193338e-01,-1.236954e-01,1.236954e-01,-1.209139e-01,1.209139e-01,-1.267385e-01,1.267385e-01,-1.232397e-01,1.232397e-01,-1.299632e-01,1.299632e-01,-1.302020e-01,1.302020e-01,-1.202975e-01,1.202975e-01,-1.525378e-01,1.525378e-01,-1.123073e-01,1.123073e-01,-1.605678e-01,1.605678e-01,-1.406867e-01,1.406867e-01,-1.354273e-01,1.354273e-01,-1.393192e-01,1.393192e-01,-1.278263e-01,1.278263e-01,-1.172073e-01,1.172073e-01,-1.153493e-01,1.153493e-01,-1.356318e-01,1.356318e-01,-1.316614e-01,1.316614e-01,-1.374489e-01,1.374489e-01,-1.018254e-01,1.018254e-01,-1.473336e-01,1.473336e-01,-1.289687e-01,1.289687e-01,-1.299183e-01,1.299183e-01,-1.178391e-01,1.178391e-01,-1.619059e-01,1.619059e-01,-1.842569e-01,1.842569e-01,-1.829095e-01,1.829095e-01,-1.939918e-01,1.939918e-01,-1.395362e-01,1.395362e-01,-1.774673e-01,1.774673e-01,-1.688216e-01,1.688216e-01,-1.671747e-01,1.671747e-01,-1.850178e-01,1.850178e-01,-1.106695e-01,1.106695e-01,-1.258323e-01,1.258323e-01,-1.246819e-01,1.246819e-01,-9.892193e-02,9.892193e-02,-1.399638e-01,1.399638e-01,-1.228375e-01,1.228375e-01,-1.756236e-01,1.756236e-01,-1.360307e-01,1.360307e-01,-1.266574e-01,1.266574e-01,-1.372135e-01,1.372135e-01,-1.175947e-01,1.175947e-01,-1.330075e-01,1.330075e-01,-1.396152e-01,1.396152e-01,-2.088443e-01,2.088443e-01]},{"count":301,"threshold":-4.887516e+00,"feature":[{"size":5,"px":[8,11,8,14,10],"py":[6,9,3,3,4],"pz":[1,0,0,0,0],"nx":[8,7,19,7,13],"ny":[11,8,8,5,8],"nz":[1,1,0,1,0]},{"size":5,"px":[14,3,13,12,12],"py":[4,6,4,4,8],"pz":[0,1,0,0,0],"nx":[2,5,2,10,10],"ny":[2,8,5,8,8],"nz":[2,1,2,0,-1]},{"size":5,"px":[6,5,3,7,7],"py":[2,3,1,2,2],"pz":[0,0,1,0,-1],"nx":[2,2,1,2,1],"ny":[3,1,2,2,2],"nz":[0,0,2,0,1]},{"size":5,"px":[3,3,6,12,8],"py":[4,2,4,10,17],"pz":[2,2,1,0,0],"nx":[4,8,8,2,1],"ny":[4,4,4,2,2],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[18,19,17,9,16],"py":[1,2,2,0,2],"pz":[0,0,0,1,0],"nx":[23,23,22,22,22],"ny":[4,3,1,0,2],"nz":[0,0,0,0,0]},{"size":3,"px":[15,4,14],"py":[23,4,18],"pz":[0,2,0],"nx":[7,0,5],"ny":[10,4,9],"nz":[1,-1,-1]},{"size":5,"px":[11,11,16,11,17],"py":[8,6,11,7,11],"pz":[0,0,0,0,0],"nx":[8,4,14,14,1],"ny":[4,4,8,8,5],"nz":[1,1,0,-1,-1]},{"size":5,"px":[12,12,12,12,12],"py":[13,10,11,12,12],"pz":[0,0,0,0,-1],"nx":[4,4,1,2,9],"ny":[8,10,2,4,15],"nz":[0,1,2,1,0]},{"size":2,"px":[19,0],"py":[14,17],"pz":[0,-1],"nx":[20,19],"ny":[15,22],"nz":[0,0]},{"size":5,"px":[3,3,1,3,5],"py":[13,15,6,14,22],"pz":[0,0,1,0,0],"nx":[0,0,1,0,0],"ny":[11,21,23,5,5],"nz":[1,0,0,2,-1]},{"size":5,"px":[4,2,10,4,3],"py":[19,4,13,16,13],"pz":[0,1,0,0,0],"nx":[3,20,7,4,0],"ny":[4,19,5,1,5],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[11,5],"py":[4,4],"pz":[0,-1],"nx":[15,3],"ny":[15,1],"nz":[0,2]},{"size":4,"px":[17,17,12,11],"py":[14,15,18,18],"pz":[0,0,0,0],"nx":[11,4,1,0],"ny":[17,20,8,5],"nz":[0,-1,-1,-1]},{"size":5,"px":[6,2,1,2,11],"py":[14,4,1,1,18],"pz":[0,-1,-1,-1,-1],"nx":[5,5,3,5,2],"ny":[18,17,7,9,2],"nz":[0,0,1,1,2]},{"size":5,"px":[20,19,20,15,20],"py":[17,20,12,12,8],"pz":[0,0,0,0,0],"nx":[17,0,5,2,2],"ny":[8,4,9,2,2],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[6,8],"py":[7,11],"pz":[1,-1],"nx":[7,8],"ny":[7,10],"nz":[1,1]},{"size":5,"px":[15,16,14,8,8],"py":[2,2,2,0,0],"pz":[0,0,0,1,-1],"nx":[20,11,21,18,19],"ny":[3,6,5,1,2],"nz":[0,1,0,0,0]},{"size":4,"px":[17,18,9,8],"py":[23,21,7,8],"pz":[0,0,1,1],"nx":[8,17,10,18],"ny":[4,12,2,1],"nz":[1,-1,-1,-1]},{"size":5,"px":[2,2,9,4,8],"py":[7,3,12,12,23],"pz":[1,1,0,0,0],"nx":[0,0,0,0,0],"ny":[3,1,2,4,4],"nz":[0,0,0,0,-1]},{"size":3,"px":[7,8,5],"py":[22,23,9],"pz":[0,0,1],"nx":[9,4,2],"ny":[21,4,0],"nz":[0,-1,-1]},{"size":2,"px":[3,3],"py":[7,7],"pz":[1,-1],"nx":[3,2],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[15,11,10,3,17],"py":[0,1,2,3,1],"pz":[0,0,0,2,0],"nx":[5,8,4,3,3],"ny":[9,4,7,10,10],"nz":[1,1,1,1,-1]},{"size":3,"px":[22,11,22],"py":[12,5,14],"pz":[0,1,0],"nx":[23,23,3],"ny":[22,23,8],"nz":[0,0,-1]},{"size":2,"px":[3,11],"py":[7,5],"pz":[1,-1],"nx":[8,2],"ny":[14,5],"nz":[0,2]},{"size":4,"px":[17,16,2,4],"py":[14,13,5,0],"pz":[0,0,-1,-1],"nx":[8,9,15,8],"ny":[8,9,14,7],"nz":[1,1,0,1]},{"size":2,"px":[5,16],"py":[6,13],"pz":[1,-1],"nx":[2,1],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[1,0,1,2,1],"py":[15,2,16,19,12],"pz":[0,2,0,0,0],"nx":[8,7,4,9,9],"ny":[5,11,4,5,5],"nz":[1,1,1,1,-1]},{"size":2,"px":[8,7],"py":[11,12],"pz":[0,0],"nx":[9,1],"ny":[10,16],"nz":[0,-1]},{"size":2,"px":[15,13],"py":[17,10],"pz":[0,-1],"nx":[7,4],"ny":[8,4],"nz":[1,2]},{"size":5,"px":[11,10,7,8,9],"py":[0,0,1,1,1],"pz":[0,0,0,0,0],"nx":[4,5,4,5,6],"ny":[1,0,2,1,0],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,2],"py":[4,3],"pz":[2,2],"nx":[3,21],"ny":[4,20],"nz":[1,-1]},{"size":5,"px":[10,11,5,2,11],"py":[12,10,6,11,11],"pz":[0,0,1,0,0],"nx":[4,15,16,7,7],"ny":[5,10,11,10,10],"nz":[1,0,0,0,-1]},{"size":5,"px":[13,14,1,11,11],"py":[2,2,3,2,2],"pz":[0,0,2,0,-1],"nx":[3,0,0,1,0],"ny":[23,15,14,9,8],"nz":[0,0,0,1,1]},{"size":2,"px":[17,2],"py":[13,5],"pz":[0,-1],"nx":[4,9],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[10,5],"py":[4,1],"pz":[0,-1],"nx":[11,3],"ny":[3,0],"nz":[0,2]},{"size":2,"px":[5,3],"py":[3,3],"pz":[2,-1],"nx":[11,23],"ny":[8,14],"nz":[1,0]},{"size":3,"px":[22,22,22],"py":[16,18,9],"pz":[0,0,0],"nx":[13,2,0],"ny":[17,3,5],"nz":[0,-1,-1]},{"size":5,"px":[13,10,13,14,11],"py":[2,2,1,2,1],"pz":[0,0,0,0,0],"nx":[3,3,8,6,6],"ny":[2,5,4,11,11],"nz":[2,2,1,1,-1]},{"size":3,"px":[12,1,1],"py":[14,0,1],"pz":[0,-1,-1],"nx":[8,15,7],"ny":[1,2,0],"nz":[1,0,1]},{"size":2,"px":[4,5],"py":[20,23],"pz":[0,0],"nx":[3,3],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[2,4],"py":[7,2],"pz":[1,-1],"nx":[4,3],"ny":[23,16],"nz":[0,0]},{"size":3,"px":[3,3,6],"py":[5,2,4],"pz":[2,2,1],"nx":[3,1,2],"ny":[5,17,0],"nz":[1,-1,-1]},{"size":2,"px":[14,8],"py":[17,6],"pz":[0,1],"nx":[13,10],"ny":[16,9],"nz":[0,-1]},{"size":5,"px":[15,7,14,13,14],"py":[1,0,0,0,1],"pz":[0,1,0,0,0],"nx":[4,4,4,8,8],"ny":[5,3,2,10,10],"nz":[2,2,2,1,-1]},{"size":5,"px":[8,9,4,5,4],"py":[13,12,9,5,7],"pz":[0,0,1,1,1],"nx":[22,21,22,22,22],"ny":[4,0,3,2,2],"nz":[0,0,0,0,-1]},{"size":2,"px":[17,17],"py":[16,13],"pz":[0,0],"nx":[14,21],"ny":[8,0],"nz":[0,-1]},{"size":2,"px":[16,10],"py":[4,9],"pz":[0,-1],"nx":[16,10],"ny":[3,3],"nz":[0,1]},{"size":5,"px":[1,1,0,1,0],"py":[17,16,7,15,8],"pz":[0,0,1,0,0],"nx":[4,3,8,9,7],"ny":[3,3,6,6,6],"nz":[1,1,0,0,-1]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[8,3],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[10,2],"py":[17,4],"pz":[0,2],"nx":[10,12],"ny":[15,14],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[14,12],"pz":[0,0],"nx":[9,10],"ny":[13,11],"nz":[0,0]},{"size":2,"px":[12,13],"py":[5,5],"pz":[0,0],"nx":[3,4],"ny":[4,1],"nz":[1,-1]},{"size":5,"px":[7,10,8,11,11],"py":[13,2,12,2,2],"pz":[0,0,0,0,-1],"nx":[10,1,1,10,1],"ny":[12,5,3,13,1],"nz":[0,1,1,0,2]},{"size":2,"px":[6,10],"py":[4,2],"pz":[1,-1],"nx":[4,6],"ny":[4,9],"nz":[1,1]},{"size":2,"px":[20,20],"py":[21,22],"pz":[0,0],"nx":[15,8],"ny":[5,5],"nz":[0,-1]},{"size":2,"px":[4,3],"py":[3,3],"pz":[2,2],"nx":[9,17],"ny":[4,15],"nz":[1,-1]},{"size":3,"px":[2,2,4],"py":[3,3,7],"pz":[2,-1,-1],"nx":[7,4,4],"ny":[6,5,4],"nz":[1,2,2]},{"size":5,"px":[8,9,16,17,17],"py":[1,2,1,1,1],"pz":[1,1,0,0,-1],"nx":[2,2,4,2,4],"ny":[16,14,22,15,21],"nz":[0,0,0,0,0]},{"size":2,"px":[9,9],"py":[18,0],"pz":[0,-1],"nx":[2,5],"ny":[5,8],"nz":[2,1]},{"size":2,"px":[7,8],"py":[11,11],"pz":[0,0],"nx":[15,5],"ny":[8,8],"nz":[0,-1]},{"size":2,"px":[0,3],"py":[4,3],"pz":[2,-1],"nx":[1,6],"ny":[4,14],"nz":[2,0]},{"size":2,"px":[6,12],"py":[7,11],"pz":[1,-1],"nx":[0,0],"ny":[7,12],"nz":[1,0]},{"size":2,"px":[3,7],"py":[10,22],"pz":[1,0],"nx":[4,3],"ny":[10,0],"nz":[1,-1]},{"size":2,"px":[5,19],"py":[4,21],"pz":[2,-1],"nx":[11,11],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[4,20],"ny":[4,5],"nz":[1,-1]},{"size":5,"px":[11,23,23,23,23],"py":[7,13,19,20,21],"pz":[1,0,0,0,0],"nx":[4,3,2,8,8],"ny":[11,5,5,23,23],"nz":[1,1,2,0,-1]},{"size":2,"px":[4,1],"py":[0,2],"pz":[0,0],"nx":[0,6],"ny":[0,11],"nz":[0,-1]},{"size":2,"px":[11,8],"py":[12,1],"pz":[0,-1],"nx":[23,23],"ny":[13,12],"nz":[0,0]},{"size":5,"px":[23,11,23,11,11],"py":[13,7,12,5,6],"pz":[0,1,0,1,1],"nx":[6,3,8,7,7],"ny":[12,4,4,11,11],"nz":[0,1,1,0,-1]},{"size":2,"px":[20,5],"py":[15,5],"pz":[0,-1],"nx":[10,10],"ny":[11,10],"nz":[1,1]},{"size":2,"px":[11,4],"py":[19,8],"pz":[0,1],"nx":[11,19],"ny":[18,2],"nz":[0,-1]},{"size":2,"px":[14,6],"py":[3,4],"pz":[0,-1],"nx":[8,15],"ny":[1,0],"nz":[1,0]},{"size":4,"px":[14,5,13,12],"py":[23,3,23,23],"pz":[0,1,0,0],"nx":[12,0,1,4],"ny":[21,3,2,4],"nz":[0,-1,-1,-1]},{"size":2,"px":[19,5],"py":[12,2],"pz":[0,-1],"nx":[4,7],"ny":[3,5],"nz":[2,1]},{"size":2,"px":[0,8],"py":[5,3],"pz":[2,-1],"nx":[5,22],"ny":[3,11],"nz":[2,0]},{"size":2,"px":[2,6],"py":[3,12],"pz":[2,0],"nx":[3,5],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[5,5],"py":[0,6],"pz":[2,-1],"nx":[14,6],"ny":[4,2],"nz":[0,1]},{"size":2,"px":[16,11],"py":[1,0],"pz":[0,-1],"nx":[4,8],"ny":[4,10],"nz":[2,1]},{"size":2,"px":[9,4],"py":[4,3],"pz":[1,1],"nx":[5,8],"ny":[0,10],"nz":[2,-1]},{"size":2,"px":[16,1],"py":[22,1],"pz":[0,-1],"nx":[2,2],"ny":[4,2],"nz":[2,2]},{"size":2,"px":[12,2],"py":[11,2],"pz":[0,-1],"nx":[5,5],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[11,11],"py":[4,3],"pz":[1,1],"nx":[7,5],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[9,2],"py":[22,3],"pz":[0,2],"nx":[4,9],"ny":[10,11],"nz":[1,-1]},{"size":2,"px":[2,4],"py":[8,10],"pz":[1,-1],"nx":[5,3],"ny":[23,18],"nz":[0,0]},{"size":2,"px":[12,6],"py":[21,9],"pz":[0,-1],"nx":[11,23],"ny":[6,10],"nz":[1,0]},{"size":2,"px":[9,9],"py":[8,7],"pz":[1,1],"nx":[18,8],"ny":[18,6],"nz":[0,-1]},{"size":2,"px":[13,3],"py":[19,0],"pz":[0,-1],"nx":[6,5],"ny":[9,11],"nz":[1,1]},{"size":5,"px":[2,10,9,7,8],"py":[0,1,0,1,0],"pz":[2,0,0,0,0],"nx":[3,4,6,8,8],"ny":[2,4,9,4,4],"nz":[2,1,1,1,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[9,4],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[0,4],"py":[23,3],"pz":[0,-1],"nx":[12,9],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[4,2],"py":[10,3],"pz":[1,2],"nx":[0,2],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[12,14],"py":[18,0],"pz":[0,-1],"nx":[12,8],"ny":[16,10],"nz":[0,1]},{"size":4,"px":[10,18,7,5],"py":[14,8,0,3],"pz":[0,-1,-1,-1],"nx":[8,6,8,5],"ny":[11,12,5,5],"nz":[0,0,1,1]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[8,8],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[12,10],"py":[20,20],"pz":[0,0],"nx":[11,10],"ny":[19,19],"nz":[0,0]},{"size":2,"px":[17,10],"py":[16,20],"pz":[0,-1],"nx":[8,7],"ny":[4,8],"nz":[1,1]},{"size":3,"px":[2,1,3],"py":[20,4,21],"pz":[0,2,0],"nx":[3,4,0],"ny":[10,1,0],"nz":[1,-1,-1]},{"size":5,"px":[6,7,3,6,6],"py":[15,14,7,16,19],"pz":[0,0,1,0,0],"nx":[0,0,0,0,0],"ny":[18,19,16,17,17],"nz":[0,0,0,0,-1]},{"size":2,"px":[8,16],"py":[6,12],"pz":[1,0],"nx":[8,15],"ny":[4,10],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[1,3,2,0,4],"pz":[2,2,2,2,1],"nx":[13,8,14,4,7],"ny":[23,6,23,3,9],"nz":[0,1,0,2,-1]},{"size":2,"px":[3,6],"py":[3,5],"pz":[2,1],"nx":[10,8],"ny":[11,6],"nz":[0,-1]},{"size":2,"px":[11,10],"py":[4,4],"pz":[0,0],"nx":[8,5],"ny":[4,9],"nz":[1,-1]},{"size":5,"px":[15,18,9,16,4],"py":[12,13,6,23,3],"pz":[0,0,1,0,2],"nx":[6,3,6,2,7],"ny":[2,3,0,1,0],"nz":[0,0,0,1,0]},{"size":2,"px":[4,18],"py":[12,13],"pz":[0,-1],"nx":[2,8],"ny":[3,4],"nz":[2,1]},{"size":2,"px":[4,2],"py":[10,4],"pz":[1,2],"nx":[3,3],"ny":[5,0],"nz":[2,-1]},{"size":2,"px":[9,19],"py":[7,8],"pz":[1,0],"nx":[8,3],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[6,0],"py":[6,0],"pz":[0,-1],"nx":[0,0],"ny":[7,2],"nz":[1,2]},{"size":2,"px":[8,8],"py":[0,0],"pz":[1,-1],"nx":[17,18],"ny":[0,2],"nz":[0,0]},{"size":4,"px":[13,4,4,1],"py":[14,7,3,5],"pz":[0,-1,-1,-1],"nx":[3,16,3,7],"ny":[1,15,5,13],"nz":[2,0,2,0]},{"size":2,"px":[4,9],"py":[6,11],"pz":[1,0],"nx":[3,23],"ny":[4,8],"nz":[1,-1]},{"size":5,"px":[9,17,4,16,16],"py":[2,3,1,3,3],"pz":[1,0,2,0,-1],"nx":[2,3,3,2,3],"ny":[1,7,2,3,3],"nz":[2,1,1,1,1]},{"size":2,"px":[10,5],"py":[22,9],"pz":[0,1],"nx":[10,3],"ny":[21,2],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[6,3],"pz":[0,-1],"nx":[8,5],"ny":[4,3],"nz":[1,1]},{"size":2,"px":[10,5],"py":[8,3],"pz":[0,-1],"nx":[14,5],"ny":[14,2],"nz":[0,2]},{"size":2,"px":[7,8],"py":[3,2],"pz":[0,-1],"nx":[8,2],"ny":[18,2],"nz":[0,2]},{"size":2,"px":[1,1],"py":[19,11],"pz":[0,1],"nx":[9,4],"ny":[5,1],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,3],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[7,15,13,14,4],"py":[6,12,9,11,4],"pz":[1,0,0,0,2],"nx":[7,3,8,4,5],"ny":[0,3,0,2,1],"nz":[0,0,0,0,0]},{"size":5,"px":[10,13,7,8,9],"py":[0,1,1,0,1],"pz":[0,0,0,0,0],"nx":[7,4,4,4,8],"ny":[8,3,4,2,4],"nz":[1,2,2,2,1]},{"size":2,"px":[6,1],"py":[6,0],"pz":[1,-1],"nx":[11,7],"ny":[3,2],"nz":[0,1]},{"size":2,"px":[13,0],"py":[13,2],"pz":[0,-1],"nx":[0,1],"ny":[13,16],"nz":[0,0]},{"size":2,"px":[8,17],"py":[6,13],"pz":[1,0],"nx":[8,1],"ny":[4,16],"nz":[1,-1]},{"size":5,"px":[12,11,3,6,17],"py":[4,4,1,2,14],"pz":[0,0,2,1,0],"nx":[6,23,23,6,23],"ny":[5,7,6,6,14],"nz":[1,0,0,1,0]},{"size":2,"px":[5,22],"py":[4,17],"pz":[2,-1],"nx":[4,8],"ny":[5,7],"nz":[2,1]},{"size":2,"px":[15,14],"py":[1,1],"pz":[0,0],"nx":[4,7],"ny":[2,4],"nz":[2,-1]},{"size":2,"px":[15,17],"py":[12,7],"pz":[0,-1],"nx":[14,10],"ny":[11,4],"nz":[0,1]},{"size":4,"px":[10,2,9,15],"py":[5,11,1,13],"pz":[0,-1,-1,-1],"nx":[11,3,3,13],"ny":[1,1,0,1],"nz":[0,2,2,0]},{"size":2,"px":[7,21],"py":[15,22],"pz":[0,-1],"nx":[4,9],"ny":[8,14],"nz":[1,0]},{"size":2,"px":[6,5],"py":[21,2],"pz":[0,-1],"nx":[3,5],"ny":[11,21],"nz":[1,0]},{"size":2,"px":[17,7],"py":[2,0],"pz":[0,-1],"nx":[4,8],"ny":[5,11],"nz":[2,1]},{"size":2,"px":[11,8],"py":[10,4],"pz":[0,-1],"nx":[13,12],"ny":[3,3],"nz":[0,0]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[7,1],"ny":[8,2],"nz":[0,-1]},{"size":5,"px":[0,0,1,0,0],"py":[12,4,14,0,2],"pz":[0,1,0,2,2],"nx":[9,5,8,4,4],"ny":[6,3,6,3,3],"nz":[0,1,0,1,-1]},{"size":5,"px":[8,0,0,3,2],"py":[6,5,0,8,2],"pz":[1,-1,-1,-1,-1],"nx":[23,7,22,11,4],"ny":[12,6,14,4,3],"nz":[0,1,0,1,2]},{"size":4,"px":[12,12,4,8],"py":[12,11,3,10],"pz":[0,0,-1,-1],"nx":[0,0,0,0],"ny":[2,1,0,3],"nz":[1,2,2,1]},{"size":2,"px":[10,6],"py":[7,6],"pz":[1,-1],"nx":[16,4],"ny":[12,2],"nz":[0,2]},{"size":5,"px":[2,1,3,3,3],"py":[14,8,20,21,21],"pz":[0,1,0,0,-1],"nx":[20,10,21,21,21],"ny":[23,11,21,23,20],"nz":[0,1,0,0,0]},{"size":2,"px":[6,13],"py":[2,4],"pz":[1,0],"nx":[7,21],"ny":[8,0],"nz":[0,-1]},{"size":2,"px":[12,3],"py":[17,4],"pz":[0,2],"nx":[11,10],"ny":[15,7],"nz":[0,-1]},{"size":4,"px":[11,0,19,2],"py":[15,2,23,10],"pz":[0,-1,-1,-1],"nx":[6,8,16,2],"ny":[13,11,10,2],"nz":[0,0,0,2]},{"size":2,"px":[6,3],"py":[14,7],"pz":[0,1],"nx":[3,1],"ny":[4,1],"nz":[1,-1]},{"size":4,"px":[12,17,5,10],"py":[19,15,14,3],"pz":[0,-1,-1,-1],"nx":[4,12,6,12],"ny":[4,18,9,22],"nz":[1,0,1,0]},{"size":2,"px":[8,3],"py":[13,5],"pz":[0,-1],"nx":[3,4],"ny":[4,9],"nz":[1,1]},{"size":5,"px":[6,5,4,5,3],"py":[2,1,2,2,0],"pz":[0,0,0,0,1],"nx":[7,4,9,18,18],"ny":[4,4,7,14,14],"nz":[1,1,1,0,-1]},{"size":4,"px":[8,3,20,1],"py":[6,3,18,0],"pz":[1,-1,-1,-1],"nx":[13,11,5,22],"ny":[12,6,2,17],"nz":[0,1,2,0]},{"size":2,"px":[6,3],"py":[6,3],"pz":[1,2],"nx":[8,5],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[21,7],"py":[14,7],"pz":[0,1],"nx":[16,11],"ny":[14,6],"nz":[0,-1]},{"size":2,"px":[10,4],"py":[3,1],"pz":[0,-1],"nx":[9,5],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[4,10],"py":[5,8],"pz":[2,1],"nx":[5,14],"ny":[9,7],"nz":[1,-1]},{"size":2,"px":[9,2],"py":[23,4],"pz":[0,2],"nx":[2,2],"ny":[5,5],"nz":[2,-1]},{"size":5,"px":[10,9,11,10,10],"py":[2,2,1,1,1],"pz":[0,0,0,0,-1],"nx":[2,3,2,4,5],"ny":[4,10,2,4,3],"nz":[2,1,1,0,0]},{"size":2,"px":[11,4],"py":[13,4],"pz":[0,-1],"nx":[8,4],"ny":[4,1],"nz":[1,2]},{"size":2,"px":[17,5],"py":[15,1],"pz":[0,-1],"nx":[20,19],"ny":[14,14],"nz":[0,0]},{"size":2,"px":[2,2],"py":[20,18],"pz":[0,0],"nx":[2,1],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[10,1],"py":[18,3],"pz":[0,2],"nx":[11,3],"ny":[16,5],"nz":[0,-1]},{"size":2,"px":[3,8],"py":[6,10],"pz":[1,0],"nx":[9,0],"ny":[9,3],"nz":[0,-1]},{"size":2,"px":[20,10],"py":[21,7],"pz":[0,1],"nx":[7,2],"ny":[3,5],"nz":[1,-1]},{"size":2,"px":[10,6],"py":[4,7],"pz":[1,-1],"nx":[23,5],"ny":[9,2],"nz":[0,2]},{"size":5,"px":[2,4,5,3,4],"py":[0,1,1,2,2],"pz":[1,0,0,0,0],"nx":[1,0,1,1,1],"ny":[2,1,0,1,1],"nz":[0,1,0,0,-1]},{"size":2,"px":[8,16],"py":[7,13],"pz":[1,0],"nx":[8,3],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[17,15],"py":[7,19],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[4,3],"py":[11,5],"pz":[1,2],"nx":[7,8],"ny":[9,4],"nz":[1,-1]},{"size":2,"px":[23,11],"py":[9,6],"pz":[0,1],"nx":[22,22],"ny":[23,23],"nz":[0,-1]},{"size":2,"px":[23,23],"py":[21,20],"pz":[0,0],"nx":[2,2],"ny":[5,4],"nz":[1,-1]},{"size":2,"px":[17,4],"py":[12,2],"pz":[0,-1],"nx":[9,8],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[6,14],"py":[2,4],"pz":[1,0],"nx":[7,18],"ny":[1,1],"nz":[1,-1]},{"size":2,"px":[20,22],"py":[1,2],"pz":[0,0],"nx":[23,23],"ny":[1,1],"nz":[0,-1]},{"size":2,"px":[0,1],"py":[9,10],"pz":[1,1],"nx":[8,0],"ny":[15,0],"nz":[0,-1]},{"size":3,"px":[11,11,6],"py":[10,11,11],"pz":[0,0,-1],"nx":[23,23,23],"ny":[19,21,20],"nz":[0,0,0]},{"size":5,"px":[23,23,23,6,6],"py":[21,22,22,3,6],"pz":[0,0,-1,-1,-1],"nx":[8,8,8,17,4],"ny":[7,10,8,16,5],"nz":[1,1,1,0,2]},{"size":2,"px":[10,23],"py":[1,22],"pz":[0,-1],"nx":[7,2],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[7,14],"py":[3,10],"pz":[1,-1],"nx":[5,3],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[5,3],"py":[13,7],"pz":[0,1],"nx":[4,10],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[15,6],"pz":[0,-1],"nx":[3,6],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[13,4],"py":[18,17],"pz":[0,-1],"nx":[7,6],"ny":[10,7],"nz":[1,1]},{"size":2,"px":[12,11],"py":[3,8],"pz":[0,-1],"nx":[7,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[17,4],"py":[5,7],"pz":[0,1],"nx":[17,10],"ny":[4,0],"nz":[0,-1]},{"size":5,"px":[16,8,16,15,15],"py":[0,0,1,0,1],"pz":[0,1,0,0,0],"nx":[7,4,7,4,4],"ny":[7,5,8,1,1],"nz":[1,2,1,2,-1]},{"size":2,"px":[13,11],"py":[5,6],"pz":[0,-1],"nx":[4,5],"ny":[2,2],"nz":[1,1]},{"size":2,"px":[3,6],"py":[3,6],"pz":[2,1],"nx":[8,4],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[10,16],"py":[8,10],"pz":[0,0],"nx":[7,2],"ny":[3,3],"nz":[1,-1]},{"size":2,"px":[6,8],"py":[4,11],"pz":[1,0],"nx":[10,1],"ny":[9,20],"nz":[0,-1]},{"size":2,"px":[5,1],"py":[4,2],"pz":[2,-1],"nx":[23,23],"ny":[15,16],"nz":[0,0]},{"size":5,"px":[9,8,2,4,9],"py":[1,1,0,1,2],"pz":[0,0,2,1,0],"nx":[8,3,8,4,4],"ny":[6,2,4,2,2],"nz":[1,2,1,2,-1]},{"size":2,"px":[13,6],"py":[10,5],"pz":[0,-1],"nx":[13,7],"ny":[6,3],"nz":[0,1]},{"size":2,"px":[11,5],"py":[10,5],"pz":[1,2],"nx":[10,8],"ny":[10,9],"nz":[1,-1]},{"size":2,"px":[7,4],"py":[6,3],"pz":[1,2],"nx":[9,14],"ny":[4,9],"nz":[1,-1]},{"size":3,"px":[5,2,15],"py":[3,1,22],"pz":[1,-1,-1],"nx":[15,9,4],"ny":[0,1,0],"nz":[0,1,2]},{"size":2,"px":[10,19],"py":[9,21],"pz":[1,0],"nx":[2,17],"ny":[5,14],"nz":[2,-1]},{"size":3,"px":[16,2,1],"py":[2,10,4],"pz":[0,-1,-1],"nx":[4,4,9],"ny":[3,2,6],"nz":[2,2,1]},{"size":2,"px":[10,2],"py":[6,10],"pz":[1,-1],"nx":[21,22],"ny":[16,12],"nz":[0,0]},{"size":2,"px":[7,16],"py":[4,23],"pz":[0,-1],"nx":[7,3],"ny":[3,3],"nz":[0,1]},{"size":2,"px":[1,1],"py":[13,14],"pz":[0,0],"nx":[1,2],"ny":[18,3],"nz":[0,-1]},{"size":2,"px":[18,5],"py":[13,4],"pz":[0,-1],"nx":[4,13],"ny":[2,11],"nz":[2,0]},{"size":2,"px":[18,17],"py":[3,3],"pz":[0,0],"nx":[19,19],"ny":[1,1],"nz":[0,-1]},{"size":2,"px":[9,5],"py":[0,5],"pz":[1,-1],"nx":[12,3],"ny":[5,1],"nz":[0,2]},{"size":2,"px":[5,3],"py":[2,1],"pz":[1,2],"nx":[18,4],"ny":[4,1],"nz":[0,-1]},{"size":5,"px":[13,13,2,10,15],"py":[11,12,13,17,23],"pz":[0,-1,-1,-1,-1],"nx":[12,13,4,3,8],"ny":[4,4,1,0,3],"nz":[0,0,2,2,1]},{"size":2,"px":[9,3],"py":[2,2],"pz":[0,-1],"nx":[4,2],"ny":[7,2],"nz":[1,2]},{"size":2,"px":[13,4],"py":[5,1],"pz":[0,-1],"nx":[18,4],"ny":[12,2],"nz":[0,2]},{"size":2,"px":[19,4],"py":[11,1],"pz":[0,-1],"nx":[4,7],"ny":[2,2],"nz":[2,1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,2],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[4,0],"py":[7,7],"pz":[0,-1],"nx":[4,9],"ny":[0,2],"nz":[2,1]},{"size":2,"px":[4,9],"py":[0,2],"pz":[2,1],"nx":[6,4],"ny":[3,4],"nz":[0,-1]},{"size":2,"px":[4,2],"py":[9,4],"pz":[1,2],"nx":[13,5],"ny":[18,2],"nz":[0,-1]},{"size":3,"px":[5,23,23],"py":[2,8,7],"pz":[2,0,0],"nx":[10,12,1],"ny":[4,1,0],"nz":[1,-1,-1]},{"size":2,"px":[13,0],"py":[3,3],"pz":[0,-1],"nx":[4,4],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[6,5],"py":[10,5],"pz":[0,-1],"nx":[0,0],"ny":[4,11],"nz":[1,0]},{"size":2,"px":[11,2],"py":[14,11],"pz":[0,-1],"nx":[10,11],"ny":[4,13],"nz":[1,0]},{"size":2,"px":[5,6],"py":[21,23],"pz":[0,0],"nx":[7,0],"ny":[21,3],"nz":[0,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[8,5],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[7,6],"py":[8,8],"pz":[0,0],"nx":[6,14],"ny":[9,15],"nz":[0,-1]},{"size":2,"px":[16,6],"py":[4,8],"pz":[0,-1],"nx":[16,8],"ny":[0,1],"nz":[0,1]},{"size":4,"px":[3,6,0,9],"py":[0,8,5,23],"pz":[1,-1,-1,-1],"nx":[12,2,6,10],"ny":[5,0,3,5],"nz":[0,2,1,0]},{"size":2,"px":[3,6],"py":[7,13],"pz":[1,0],"nx":[3,9],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[2,5],"py":[8,23],"pz":[1,0],"nx":[8,9],"ny":[15,0],"nz":[0,-1]},{"size":2,"px":[13,18],"py":[8,0],"pz":[0,-1],"nx":[1,1],"ny":[9,8],"nz":[1,1]},{"size":2,"px":[2,7],"py":[4,21],"pz":[2,0],"nx":[13,11],"ny":[8,9],"nz":[0,-1]},{"size":2,"px":[5,4],"py":[8,8],"pz":[0,0],"nx":[6,1],"ny":[8,5],"nz":[0,-1]},{"size":2,"px":[7,3],"py":[20,7],"pz":[0,-1],"nx":[4,3],"ny":[10,4],"nz":[1,1]},{"size":2,"px":[9,9],"py":[8,7],"pz":[1,-1],"nx":[1,2],"ny":[4,9],"nz":[2,1]},{"size":2,"px":[5,10],"py":[5,13],"pz":[1,-1],"nx":[3,6],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[12,5],"py":[6,3],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,10],"py":[4,4],"pz":[1,-1],"nx":[5,11],"ny":[2,5],"nz":[2,1]},{"size":5,"px":[11,23,11,23,11],"py":[4,9,5,10,6],"pz":[1,0,1,0,1],"nx":[7,14,13,7,3],"ny":[9,5,6,4,4],"nz":[0,0,0,1,-1]},{"size":2,"px":[8,5],"py":[0,0],"pz":[1,-1],"nx":[9,20],"ny":[1,4],"nz":[1,0]},{"size":2,"px":[19,20],"py":[0,3],"pz":[0,0],"nx":[4,6],"ny":[11,3],"nz":[1,-1]},{"size":4,"px":[13,5,20,5],"py":[14,3,23,4],"pz":[0,-1,-1,-1],"nx":[8,15,7,16],"ny":[8,14,6,15],"nz":[1,0,1,0]},{"size":2,"px":[10,20],"py":[5,17],"pz":[0,-1],"nx":[7,3],"ny":[10,1],"nz":[0,2]},{"size":3,"px":[1,12,7],"py":[3,7,10],"pz":[2,0,0],"nx":[2,2,3],"ny":[3,2,2],"nz":[1,-1,-1]},{"size":3,"px":[10,5,7],"py":[7,10,10],"pz":[1,-1,-1],"nx":[10,10,18],"ny":[10,9,23],"nz":[1,1,0]},{"size":3,"px":[14,14,4],"py":[3,3,4],"pz":[0,-1,-1],"nx":[4,4,8],"ny":[3,2,6],"nz":[2,2,1]},{"size":2,"px":[4,12],"py":[4,17],"pz":[2,0],"nx":[13,1],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[10,20],"py":[9,22],"pz":[0,-1],"nx":[9,4],"ny":[2,0],"nz":[1,2]},{"size":2,"px":[11,2],"py":[3,6],"pz":[0,-1],"nx":[2,4],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[15,10,1],"py":[12,2,3],"pz":[0,-1,-1],"nx":[7,5,10],"ny":[2,1,1],"nz":[0,1,0]},{"size":5,"px":[9,11,10,12,12],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[8,4,16,5,10],"ny":[4,4,10,3,6],"nz":[1,1,0,1,0]},{"size":2,"px":[0,10],"py":[3,5],"pz":[2,-1],"nx":[3,6],"ny":[0,1],"nz":[2,1]},{"size":5,"px":[7,8,7,2,12],"py":[14,13,13,16,0],"pz":[0,0,-1,-1,-1],"nx":[10,1,10,1,1],"ny":[13,2,12,4,9],"nz":[0,2,0,1,0]},{"size":3,"px":[6,14,13],"py":[1,2,1],"pz":[1,0,0],"nx":[8,21,10],"ny":[4,23,12],"nz":[1,-1,-1]},{"size":2,"px":[19,19],"py":[22,21],"pz":[0,0],"nx":[20,1],"ny":[22,5],"nz":[0,-1]},{"size":2,"px":[13,12],"py":[19,22],"pz":[0,-1],"nx":[2,3],"ny":[0,1],"nz":[2,1]},{"size":4,"px":[11,9,21,4],"py":[13,3,19,5],"pz":[0,-1,-1,-1],"nx":[9,9,9,5],"ny":[13,14,12,6],"nz":[0,0,0,1]},{"size":4,"px":[11,12,13,14],"py":[22,22,22,22],"pz":[0,0,0,0],"nx":[13,2,4,5],"ny":[20,0,0,6],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,1],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[0,1],"pz":[2,2],"nx":[9,4],"ny":[6,5],"nz":[1,-1]},{"size":2,"px":[17,0],"py":[10,1],"pz":[0,-1],"nx":[9,4],"ny":[3,2],"nz":[1,2]},{"size":2,"px":[10,4],"py":[3,1],"pz":[1,2],"nx":[12,18],"ny":[17,4],"nz":[0,-1]},{"size":3,"px":[2,3,4],"py":[4,3,9],"pz":[2,2,1],"nx":[0,3,17],"ny":[0,1,18],"nz":[0,-1,-1]},{"size":2,"px":[7,3],"py":[12,6],"pz":[0,1],"nx":[5,1],"ny":[11,1],"nz":[1,-1]},{"size":2,"px":[10,17],"py":[20,6],"pz":[0,-1],"nx":[5,2],"ny":[9,5],"nz":[1,2]},{"size":2,"px":[8,11],"py":[18,2],"pz":[0,-1],"nx":[5,4],"ny":[9,9],"nz":[1,1]},{"size":2,"px":[16,15],"py":[2,2],"pz":[0,0],"nx":[17,12],"ny":[2,2],"nz":[0,-1]},{"size":2,"px":[18,4],"py":[5,5],"pz":[0,-1],"nx":[7,5],"ny":[23,19],"nz":[0,0]},{"size":2,"px":[12,13],"py":[23,23],"pz":[0,0],"nx":[7,11],"ny":[10,20],"nz":[1,-1]},{"size":2,"px":[5,10],"py":[3,18],"pz":[2,-1],"nx":[9,9],"ny":[5,6],"nz":[1,1]},{"size":2,"px":[5,10],"py":[2,4],"pz":[1,0],"nx":[4,23],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[2,3],"py":[8,1],"pz":[1,-1],"nx":[15,12],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[4,7],"py":[3,10],"pz":[2,1],"nx":[10,1],"ny":[20,4],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[10,11],"pz":[0,0],"nx":[22,3],"ny":[5,4],"nz":[0,-1]},{"size":5,"px":[8,17,17,9,18],"py":[0,1,0,1,0],"pz":[1,0,0,1,0],"nx":[11,8,9,4,4],"ny":[23,4,6,2,2],"nz":[0,1,0,2,-1]},{"size":2,"px":[5,5],"py":[4,4],"pz":[1,-1],"nx":[13,4],"ny":[9,2],"nz":[0,2]},{"size":5,"px":[9,4,8,7,7],"py":[3,1,3,3,3],"pz":[0,1,0,0,-1],"nx":[4,2,5,3,2],"ny":[1,15,1,4,13],"nz":[0,0,0,0,0]},{"size":2,"px":[17,7],"py":[13,7],"pz":[0,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[1,2],"py":[1,12],"pz":[2,0],"nx":[9,21],"ny":[5,4],"nz":[0,-1]},{"size":2,"px":[12,0],"py":[14,1],"pz":[0,-1],"nx":[1,1],"ny":[19,10],"nz":[0,1]},{"size":2,"px":[16,1],"py":[5,9],"pz":[0,-1],"nx":[16,15],"ny":[3,3],"nz":[0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[8,4],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[11,6],"py":[17,15],"pz":[0,0],"nx":[11,0],"ny":[16,4],"nz":[0,-1]},{"size":4,"px":[12,11,0,3],"py":[16,8,7,1],"pz":[0,-1,-1,-1],"nx":[10,5,10,5],"ny":[11,9,10,8],"nz":[0,1,0,1]},{"size":2,"px":[3,6],"py":[7,13],"pz":[1,0],"nx":[4,14],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[7,17],"py":[6,13],"pz":[0,-1],"nx":[4,8],"ny":[4,9],"nz":[2,1]},{"size":2,"px":[15,11],"py":[3,2],"pz":[0,-1],"nx":[4,15],"ny":[1,2],"nz":[2,0]},{"size":2,"px":[10,11],"py":[18,4],"pz":[0,-1],"nx":[5,5],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[8,4],"py":[7,4],"pz":[1,2],"nx":[4,3],"ny":[5,7],"nz":[2,-1]},{"size":2,"px":[12,4],"py":[15,4],"pz":[0,-1],"nx":[11,8],"ny":[14,19],"nz":[0,0]},{"size":2,"px":[18,13],"py":[13,20],"pz":[0,0],"nx":[13,4],"ny":[18,2],"nz":[0,-1]},{"size":2,"px":[12,4],"py":[6,3],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[21,5,11,5,10],"py":[1,1,3,0,0],"pz":[0,2,1,2,1],"nx":[7,14,15,4,8],"ny":[3,6,11,3,4],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[10,6],"py":[15,10],"pz":[0,-1],"nx":[21,22],"ny":[14,12],"nz":[0,0]},{"size":2,"px":[18,0],"py":[20,0],"pz":[0,-1],"nx":[2,3],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[12,6,13,11,7],"py":[1,1,1,2,1],"pz":[0,1,0,0,1],"nx":[7,6,8,5,5],"ny":[4,15,4,16,16],"nz":[1,0,1,0,-1]},{"size":3,"px":[22,21,21],"py":[14,15,17],"pz":[0,0,0],"nx":[5,9,4],"ny":[0,5,0],"nz":[2,-1,-1]},{"size":2,"px":[10,2],"py":[14,1],"pz":[0,-1],"nx":[23,11],"ny":[16,8],"nz":[0,1]},{"size":4,"px":[21,21,0,18],"py":[14,15,5,4],"pz":[0,0,-1,-1],"nx":[8,8,9,4],"ny":[7,8,10,5],"nz":[1,1,1,2]},{"size":2,"px":[15,5],"py":[18,1],"pz":[0,-1],"nx":[23,23],"ny":[16,18],"nz":[0,0]},{"size":2,"px":[15,14],"py":[1,1],"pz":[0,0],"nx":[4,4],"ny":[2,3],"nz":[2,-1]},{"size":2,"px":[2,6],"py":[6,5],"pz":[1,-1],"nx":[14,11],"ny":[1,1],"nz":[0,0]},{"size":2,"px":[3,17],"py":[2,8],"pz":[2,0],"nx":[8,3],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[17,8],"py":[13,10],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[0,0],"py":[8,3],"pz":[0,1],"nx":[1,11],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[6,8],"py":[5,0],"pz":[1,-1],"nx":[0,0],"ny":[3,1],"nz":[1,2]},{"size":2,"px":[0,0],"py":[5,3],"pz":[1,2],"nx":[1,18],"ny":[5,7],"nz":[1,-1]},{"size":2,"px":[7,3],"py":[6,6],"pz":[0,1],"nx":[7,12],"ny":[5,20],"nz":[0,-1]},{"size":2,"px":[8,1],"py":[0,5],"pz":[0,-1],"nx":[4,2],"ny":[9,3],"nz":[1,2]},{"size":2,"px":[0,0],"py":[10,11],"pz":[0,0],"nx":[0,5],"ny":[5,9],"nz":[0,-1]},{"size":2,"px":[8,1],"py":[23,4],"pz":[0,2],"nx":[0,0],"ny":[13,2],"nz":[0,-1]},{"size":2,"px":[4,1],"py":[6,4],"pz":[0,-1],"nx":[4,4],"ny":[4,5],"nz":[2,2]},{"size":2,"px":[7,6],"py":[6,5],"pz":[1,1],"nx":[3,9],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[5,3],"py":[9,13],"pz":[0,-1],"nx":[4,10],"ny":[3,7],"nz":[1,0]},{"size":5,"px":[13,9,6,10,10],"py":[2,2,1,2,2],"pz":[0,0,1,0,-1],"nx":[7,5,6,5,6],"ny":[0,2,2,1,1],"nz":[0,0,0,0,0]}],"alpha":[-1.119615e+00,1.119615e+00,-8.169953e-01,8.169953e-01,-5.291213e-01,5.291213e-01,-4.904488e-01,4.904488e-01,-4.930982e-01,4.930982e-01,-4.106179e-01,4.106179e-01,-4.246842e-01,4.246842e-01,-3.802383e-01,3.802383e-01,-3.364358e-01,3.364358e-01,-3.214186e-01,3.214186e-01,-3.210798e-01,3.210798e-01,-2.993167e-01,2.993167e-01,-3.426336e-01,3.426336e-01,-3.199184e-01,3.199184e-01,-3.061071e-01,3.061071e-01,-2.758972e-01,2.758972e-01,-3.075590e-01,3.075590e-01,-3.009565e-01,3.009565e-01,-2.015739e-01,2.015739e-01,-2.603266e-01,2.603266e-01,-2.772993e-01,2.772993e-01,-2.184913e-01,2.184913e-01,-2.306681e-01,2.306681e-01,-1.983223e-01,1.983223e-01,-2.194760e-01,2.194760e-01,-2.528421e-01,2.528421e-01,-2.436416e-01,2.436416e-01,-3.032886e-01,3.032886e-01,-2.556071e-01,2.556071e-01,-2.562170e-01,2.562170e-01,-1.930298e-01,1.930298e-01,-2.735898e-01,2.735898e-01,-1.814703e-01,1.814703e-01,-2.054824e-01,2.054824e-01,-1.986146e-01,1.986146e-01,-1.769226e-01,1.769226e-01,-1.775257e-01,1.775257e-01,-2.167927e-01,2.167927e-01,-1.823633e-01,1.823633e-01,-1.584280e-01,1.584280e-01,-1.778321e-01,1.778321e-01,-1.826777e-01,1.826777e-01,-1.979903e-01,1.979903e-01,-1.898326e-01,1.898326e-01,-1.835506e-01,1.835506e-01,-1.967860e-01,1.967860e-01,-1.871528e-01,1.871528e-01,-1.772414e-01,1.772414e-01,-1.985514e-01,1.985514e-01,-2.144078e-01,2.144078e-01,-2.742303e-01,2.742303e-01,-2.240550e-01,2.240550e-01,-2.132534e-01,2.132534e-01,-1.552127e-01,1.552127e-01,-1.568276e-01,1.568276e-01,-1.630086e-01,1.630086e-01,-1.458232e-01,1.458232e-01,-1.559541e-01,1.559541e-01,-1.720131e-01,1.720131e-01,-1.708434e-01,1.708434e-01,-1.624431e-01,1.624431e-01,-1.814161e-01,1.814161e-01,-1.552639e-01,1.552639e-01,-1.242354e-01,1.242354e-01,-1.552139e-01,1.552139e-01,-1.694359e-01,1.694359e-01,-1.801481e-01,1.801481e-01,-1.387182e-01,1.387182e-01,-1.409679e-01,1.409679e-01,-1.486724e-01,1.486724e-01,-1.779553e-01,1.779553e-01,-1.524595e-01,1.524595e-01,-1.788086e-01,1.788086e-01,-1.671479e-01,1.671479e-01,-1.376197e-01,1.376197e-01,-1.511808e-01,1.511808e-01,-1.524632e-01,1.524632e-01,-1.198986e-01,1.198986e-01,-1.382641e-01,1.382641e-01,-1.148901e-01,1.148901e-01,-1.131803e-01,1.131803e-01,-1.273508e-01,1.273508e-01,-1.405125e-01,1.405125e-01,-1.322132e-01,1.322132e-01,-1.386966e-01,1.386966e-01,-1.275621e-01,1.275621e-01,-1.180573e-01,1.180573e-01,-1.238803e-01,1.238803e-01,-1.428389e-01,1.428389e-01,-1.694437e-01,1.694437e-01,-1.290855e-01,1.290855e-01,-1.520260e-01,1.520260e-01,-1.398282e-01,1.398282e-01,-1.890736e-01,1.890736e-01,-2.280428e-01,2.280428e-01,-1.325099e-01,1.325099e-01,-1.342873e-01,1.342873e-01,-1.463841e-01,1.463841e-01,-1.983567e-01,1.983567e-01,-1.585711e-01,1.585711e-01,-1.260154e-01,1.260154e-01,-1.426774e-01,1.426774e-01,-1.554278e-01,1.554278e-01,-1.361201e-01,1.361201e-01,-1.181856e-01,1.181856e-01,-1.255941e-01,1.255941e-01,-1.113275e-01,1.113275e-01,-1.506576e-01,1.506576e-01,-1.202859e-01,1.202859e-01,-2.159751e-01,2.159751e-01,-1.443150e-01,1.443150e-01,-1.379194e-01,1.379194e-01,-1.805758e-01,1.805758e-01,-1.465612e-01,1.465612e-01,-1.328856e-01,1.328856e-01,-1.532173e-01,1.532173e-01,-1.590635e-01,1.590635e-01,-1.462229e-01,1.462229e-01,-1.350012e-01,1.350012e-01,-1.195634e-01,1.195634e-01,-1.173221e-01,1.173221e-01,-1.192867e-01,1.192867e-01,-1.595013e-01,1.595013e-01,-1.209751e-01,1.209751e-01,-1.571290e-01,1.571290e-01,-1.527274e-01,1.527274e-01,-1.373708e-01,1.373708e-01,-1.318313e-01,1.318313e-01,-1.273391e-01,1.273391e-01,-1.271365e-01,1.271365e-01,-1.528693e-01,1.528693e-01,-1.590476e-01,1.590476e-01,-1.581911e-01,1.581911e-01,-1.183023e-01,1.183023e-01,-1.559822e-01,1.559822e-01,-1.214999e-01,1.214999e-01,-1.283378e-01,1.283378e-01,-1.542583e-01,1.542583e-01,-1.336377e-01,1.336377e-01,-1.800416e-01,1.800416e-01,-1.710931e-01,1.710931e-01,-1.621737e-01,1.621737e-01,-1.239002e-01,1.239002e-01,-1.432928e-01,1.432928e-01,-1.392447e-01,1.392447e-01,-1.383938e-01,1.383938e-01,-1.357633e-01,1.357633e-01,-1.175842e-01,1.175842e-01,-1.085318e-01,1.085318e-01,-1.148885e-01,1.148885e-01,-1.320396e-01,1.320396e-01,-1.351204e-01,1.351204e-01,-1.581518e-01,1.581518e-01,-1.459574e-01,1.459574e-01,-1.180068e-01,1.180068e-01,-1.464196e-01,1.464196e-01,-1.179543e-01,1.179543e-01,-1.004204e-01,1.004204e-01,-1.294660e-01,1.294660e-01,-1.534244e-01,1.534244e-01,-1.378970e-01,1.378970e-01,-1.226545e-01,1.226545e-01,-1.281182e-01,1.281182e-01,-1.201471e-01,1.201471e-01,-1.448701e-01,1.448701e-01,-1.290980e-01,1.290980e-01,-1.388764e-01,1.388764e-01,-9.605773e-02,9.605773e-02,-1.411021e-01,1.411021e-01,-1.295693e-01,1.295693e-01,-1.371739e-01,1.371739e-01,-1.167579e-01,1.167579e-01,-1.400486e-01,1.400486e-01,-1.214224e-01,1.214224e-01,-1.287835e-01,1.287835e-01,-1.197646e-01,1.197646e-01,-1.192358e-01,1.192358e-01,-1.218651e-01,1.218651e-01,-1.564816e-01,1.564816e-01,-1.172391e-01,1.172391e-01,-1.342268e-01,1.342268e-01,-1.492471e-01,1.492471e-01,-1.157299e-01,1.157299e-01,-1.046703e-01,1.046703e-01,-1.255571e-01,1.255571e-01,-1.100135e-01,1.100135e-01,-1.501592e-01,1.501592e-01,-1.155712e-01,1.155712e-01,-1.145563e-01,1.145563e-01,-1.013425e-01,1.013425e-01,-1.145783e-01,1.145783e-01,-1.328031e-01,1.328031e-01,-1.077413e-01,1.077413e-01,-1.064996e-01,1.064996e-01,-1.191170e-01,1.191170e-01,-1.213217e-01,1.213217e-01,-1.260969e-01,1.260969e-01,-1.156494e-01,1.156494e-01,-1.268126e-01,1.268126e-01,-1.070999e-01,1.070999e-01,-1.112365e-01,1.112365e-01,-1.243916e-01,1.243916e-01,-1.283152e-01,1.283152e-01,-1.166925e-01,1.166925e-01,-8.997633e-02,8.997633e-02,-1.583840e-01,1.583840e-01,-1.211178e-01,1.211178e-01,-1.090830e-01,1.090830e-01,-1.030818e-01,1.030818e-01,-1.440600e-01,1.440600e-01,-1.458713e-01,1.458713e-01,-1.559082e-01,1.559082e-01,-1.058868e-01,1.058868e-01,-1.010130e-01,1.010130e-01,-1.642301e-01,1.642301e-01,-1.236850e-01,1.236850e-01,-1.467589e-01,1.467589e-01,-1.109359e-01,1.109359e-01,-1.673655e-01,1.673655e-01,-1.239984e-01,1.239984e-01,-1.039509e-01,1.039509e-01,-1.089378e-01,1.089378e-01,-1.545085e-01,1.545085e-01,-1.200862e-01,1.200862e-01,-1.105608e-01,1.105608e-01,-1.235262e-01,1.235262e-01,-8.496153e-02,8.496153e-02,-1.181372e-01,1.181372e-01,-1.139467e-01,1.139467e-01,-1.189317e-01,1.189317e-01,-1.266519e-01,1.266519e-01,-9.470736e-02,9.470736e-02,-1.336735e-01,1.336735e-01,-8.726601e-02,8.726601e-02,-1.304782e-01,1.304782e-01,-1.186529e-01,1.186529e-01,-1.355944e-01,1.355944e-01,-9.568801e-02,9.568801e-02,-1.282618e-01,1.282618e-01,-1.625632e-01,1.625632e-01,-1.167652e-01,1.167652e-01,-1.001301e-01,1.001301e-01,-1.292419e-01,1.292419e-01,-1.904213e-01,1.904213e-01,-1.511542e-01,1.511542e-01,-9.814394e-02,9.814394e-02,-1.171564e-01,1.171564e-01,-9.806486e-02,9.806486e-02,-9.217615e-02,9.217615e-02,-8.505645e-02,8.505645e-02,-1.573637e-01,1.573637e-01,-1.419174e-01,1.419174e-01,-1.298601e-01,1.298601e-01,-1.120613e-01,1.120613e-01,-1.158363e-01,1.158363e-01,-1.090957e-01,1.090957e-01,-1.204516e-01,1.204516e-01,-1.139852e-01,1.139852e-01,-9.642479e-02,9.642479e-02,-1.410872e-01,1.410872e-01,-1.142779e-01,1.142779e-01,-1.043991e-01,1.043991e-01,-9.736463e-02,9.736463e-02,-1.451046e-01,1.451046e-01,-1.205668e-01,1.205668e-01,-9.881445e-02,9.881445e-02,-1.612822e-01,1.612822e-01,-1.175681e-01,1.175681e-01,-1.522528e-01,1.522528e-01,-1.617520e-01,1.617520e-01,-1.582938e-01,1.582938e-01,-1.208202e-01,1.208202e-01,-1.016003e-01,1.016003e-01,-1.232059e-01,1.232059e-01,-9.583025e-02,9.583025e-02,-1.013990e-01,1.013990e-01,-1.178752e-01,1.178752e-01,-1.215972e-01,1.215972e-01,-1.294932e-01,1.294932e-01,-1.158270e-01,1.158270e-01,-1.008645e-01,1.008645e-01,-9.699190e-02,9.699190e-02,-1.022144e-01,1.022144e-01,-9.878768e-02,9.878768e-02,-1.339052e-01,1.339052e-01,-9.279961e-02,9.279961e-02,-1.047606e-01,1.047606e-01,-1.141163e-01,1.141163e-01,-1.267600e-01,1.267600e-01,-1.252763e-01,1.252763e-01,-9.775003e-02,9.775003e-02,-9.169116e-02,9.169116e-02,-1.006496e-01,1.006496e-01,-9.493293e-02,9.493293e-02,-1.213694e-01,1.213694e-01,-1.109243e-01,1.109243e-01,-1.115973e-01,1.115973e-01,-7.979327e-02,7.979327e-02,-9.220953e-02,9.220953e-02,-1.028913e-01,1.028913e-01,-1.253510e-01,1.253510e-01]},{"count":391,"threshold":-4.665692e+00,"feature":[{"size":5,"px":[14,9,11,17,12],"py":[2,3,9,13,3],"pz":[0,0,0,0,0],"nx":[21,8,7,20,13],"ny":[16,10,7,7,9],"nz":[0,1,1,0,0]},{"size":5,"px":[12,10,6,11,13],"py":[9,3,13,3,4],"pz":[0,0,0,0,0],"nx":[10,4,5,10,2],"ny":[9,10,8,8,2],"nz":[0,1,1,0,2]},{"size":5,"px":[6,9,7,8,8],"py":[3,3,3,3,3],"pz":[0,0,0,0,-1],"nx":[0,0,0,4,9],"ny":[4,2,3,10,8],"nz":[0,0,0,1,0]},{"size":5,"px":[6,2,16,6,8],"py":[16,2,11,4,11],"pz":[0,2,0,1,0],"nx":[3,8,4,1,1],"ny":[4,4,4,5,13],"nz":[1,1,-1,-1,-1]},{"size":3,"px":[16,13,9],"py":[23,18,10],"pz":[0,0,1],"nx":[14,15,8],"ny":[21,22,3],"nz":[0,-1,-1]},{"size":5,"px":[9,16,19,17,17],"py":[1,2,3,2,2],"pz":[1,0,0,0,-1],"nx":[23,23,23,23,23],"ny":[6,2,1,3,5],"nz":[0,0,0,0,0]},{"size":5,"px":[12,12,12,12,12],"py":[10,11,12,13,13],"pz":[0,0,0,0,-1],"nx":[4,8,14,4,6],"ny":[2,4,7,4,8],"nz":[2,1,0,1,1]},{"size":5,"px":[1,2,3,6,4],"py":[6,10,12,23,13],"pz":[1,1,0,0,0],"nx":[2,0,0,1,1],"ny":[23,5,10,21,21],"nz":[0,2,1,0,-1]},{"size":5,"px":[12,16,12,4,12],"py":[6,17,7,2,8],"pz":[0,0,0,2,0],"nx":[8,8,12,0,6],"ny":[4,4,16,0,8],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[9,2],"py":[18,4],"pz":[0,-1],"nx":[4,9],"ny":[10,16],"nz":[1,0]},{"size":5,"px":[9,9,2,0,12],"py":[6,6,21,4,8],"pz":[1,-1,-1,-1,-1],"nx":[8,4,9,7,7],"ny":[10,2,4,5,8],"nz":[1,2,1,1,1]},{"size":5,"px":[10,10,10,18,19],"py":[10,8,7,14,14],"pz":[1,1,1,0,0],"nx":[21,23,22,22,11],"ny":[23,19,21,22,10],"nz":[0,0,0,0,-1]},{"size":5,"px":[12,3,15,4,19],"py":[14,0,5,5,14],"pz":[0,-1,-1,-1,-1],"nx":[12,17,15,3,8],"ny":[18,18,14,2,10],"nz":[0,0,0,2,0]},{"size":5,"px":[8,11,3,11,4],"py":[23,7,9,8,8],"pz":[0,0,1,0,1],"nx":[8,0,10,0,8],"ny":[8,2,8,4,10],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[10,11,12,8,4],"py":[3,0,0,1,1],"pz":[0,0,0,0,1],"nx":[2,3,4,3,3],"ny":[14,5,0,1,2],"nz":[0,0,0,0,0]},{"size":2,"px":[3,11],"py":[7,0],"pz":[1,-1],"nx":[5,2],"ny":[9,5],"nz":[1,2]},{"size":5,"px":[7,1,0,10,1],"py":[0,0,2,12,6],"pz":[0,2,2,0,1],"nx":[4,6,2,8,8],"ny":[4,11,2,4,4],"nz":[1,1,2,1,-1]},{"size":2,"px":[4,15],"py":[4,12],"pz":[2,0],"nx":[4,6],"ny":[5,11],"nz":[2,-1]},{"size":5,"px":[9,4,16,14,14],"py":[8,4,23,18,18],"pz":[1,2,0,0,-1],"nx":[0,2,1,1,0],"ny":[2,0,3,2,3],"nz":[1,0,0,0,1]},{"size":5,"px":[17,7,7,18,19],"py":[7,11,8,7,7],"pz":[0,1,1,0,0],"nx":[17,5,8,2,0],"ny":[8,0,7,5,3],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[5,14],"py":[12,3],"pz":[0,-1],"nx":[4,3],"ny":[5,4],"nz":[1,1]},{"size":5,"px":[10,8,16,11,11],"py":[5,6,12,4,4],"pz":[0,1,0,0,-1],"nx":[14,13,5,9,5],"ny":[13,10,1,4,2],"nz":[0,0,2,1,2]},{"size":5,"px":[15,14,16,8,8],"py":[2,2,2,0,0],"pz":[0,0,0,1,-1],"nx":[9,18,19,18,17],"ny":[0,0,2,1,0],"nz":[1,0,0,0,0]},{"size":2,"px":[17,15],"py":[12,11],"pz":[0,0],"nx":[14,4],"ny":[9,15],"nz":[0,-1]},{"size":3,"px":[5,11,11],"py":[3,4,5],"pz":[2,1,1],"nx":[14,3,18],"ny":[6,5,0],"nz":[0,1,-1]},{"size":5,"px":[16,14,17,15,9],"py":[2,2,2,2,1],"pz":[0,0,0,0,1],"nx":[21,20,11,21,21],"ny":[2,0,7,3,3],"nz":[0,0,1,0,-1]},{"size":5,"px":[2,1,1,1,5],"py":[12,9,7,3,6],"pz":[0,0,1,1,1],"nx":[4,8,3,4,17],"ny":[4,4,0,8,0],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[9,2],"ny":[4,17],"nz":[1,-1]},{"size":2,"px":[8,5],"py":[16,9],"pz":[0,1],"nx":[10,17],"ny":[16,8],"nz":[0,-1]},{"size":4,"px":[11,5,9,15],"py":[14,9,11,5],"pz":[0,-1,-1,-1],"nx":[10,1,9,4],"ny":[9,2,13,7],"nz":[0,2,0,1]},{"size":5,"px":[2,5,10,7,10],"py":[7,12,2,13,3],"pz":[1,-1,-1,-1,-1],"nx":[5,2,3,3,2],"ny":[23,15,17,16,14],"nz":[0,0,0,0,0]},{"size":2,"px":[11,7],"py":[8,10],"pz":[0,-1],"nx":[7,14],"ny":[5,8],"nz":[1,0]},{"size":2,"px":[9,16],"py":[7,23],"pz":[1,0],"nx":[4,4],"ny":[2,1],"nz":[2,-1]},{"size":5,"px":[16,14,18,4,17],"py":[0,0,4,0,1],"pz":[0,0,0,2,0],"nx":[8,8,16,9,9],"ny":[5,4,11,7,7],"nz":[1,1,0,0,-1]},{"size":5,"px":[12,13,7,8,4],"py":[9,12,6,11,5],"pz":[0,0,1,1,2],"nx":[23,23,16,9,9],"ny":[0,1,11,7,7],"nz":[0,-1,-1,-1,-1]},{"size":3,"px":[6,7,2],"py":[21,23,4],"pz":[0,0,2],"nx":[4,1,16],"ny":[10,5,11],"nz":[1,-1,-1]},{"size":2,"px":[2,2],"py":[3,4],"pz":[2,2],"nx":[3,1],"ny":[4,5],"nz":[1,-1]},{"size":5,"px":[1,2,1,0,1],"py":[7,13,12,4,13],"pz":[0,0,0,2,0],"nx":[18,9,9,19,19],"ny":[23,5,11,19,19],"nz":[0,1,1,0,-1]},{"size":3,"px":[4,10,12],"py":[6,2,5],"pz":[1,-1,-1],"nx":[10,0,0],"ny":[12,1,3],"nz":[0,2,2]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,0],"ny":[4,3],"nz":[1,-1]},{"size":5,"px":[19,17,10,14,18],"py":[2,1,7,0,1],"pz":[0,0,1,0,0],"nx":[3,3,3,7,5],"ny":[9,10,7,23,18],"nz":[1,1,1,0,0]},{"size":2,"px":[10,10],"py":[8,7],"pz":[1,1],"nx":[14,4],"ny":[15,6],"nz":[0,-1]},{"size":2,"px":[7,15],"py":[1,3],"pz":[1,0],"nx":[16,19],"ny":[1,3],"nz":[0,-1]},{"size":5,"px":[11,11,1,2,11],"py":[11,12,1,13,12],"pz":[0,0,-1,-1,-1],"nx":[12,17,8,16,8],"ny":[7,12,11,16,6],"nz":[0,0,0,0,1]},{"size":5,"px":[13,11,10,12,5],"py":[0,0,0,0,0],"pz":[0,0,0,0,1],"nx":[8,4,3,4,4],"ny":[4,5,2,4,4],"nz":[1,1,2,1,-1]},{"size":5,"px":[6,1,3,2,3],"py":[13,3,3,4,10],"pz":[0,2,1,1,1],"nx":[0,1,0,0,0],"ny":[2,0,5,4,4],"nz":[0,0,0,0,-1]},{"size":2,"px":[15,1],"py":[4,3],"pz":[0,-1],"nx":[16,15],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[3,7],"py":[7,13],"pz":[1,0],"nx":[3,0],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[14,15],"py":[18,14],"pz":[0,-1],"nx":[4,14],"ny":[4,16],"nz":[1,0]},{"size":2,"px":[4,6],"py":[3,4],"pz":[2,1],"nx":[9,5],"ny":[14,2],"nz":[0,-1]},{"size":2,"px":[16,6],"py":[1,5],"pz":[0,-1],"nx":[4,9],"ny":[0,4],"nz":[2,1]},{"size":2,"px":[9,0],"py":[4,2],"pz":[0,-1],"nx":[5,3],"ny":[1,0],"nz":[1,2]},{"size":5,"px":[1,1,1,0,0],"py":[16,15,17,6,9],"pz":[0,0,0,1,0],"nx":[9,5,4,9,8],"ny":[7,3,3,6,7],"nz":[0,1,1,0,-1]},{"size":2,"px":[9,1],"py":[8,15],"pz":[1,-1],"nx":[9,8],"ny":[9,4],"nz":[1,1]},{"size":2,"px":[20,19],"py":[19,22],"pz":[0,0],"nx":[7,0],"ny":[3,0],"nz":[1,-1]},{"size":5,"px":[8,4,2,5,5],"py":[12,6,3,5,5],"pz":[0,1,2,1,-1],"nx":[22,21,20,21,22],"ny":[17,20,22,19,16],"nz":[0,0,0,0,0]},{"size":2,"px":[6,12],"py":[2,6],"pz":[1,0],"nx":[8,3],"ny":[3,2],"nz":[1,-1]},{"size":2,"px":[11,11],"py":[9,4],"pz":[1,1],"nx":[12,4],"ny":[17,5],"nz":[0,-1]},{"size":3,"px":[0,1,0],"py":[5,13,3],"pz":[2,0,2],"nx":[0,4,11],"ny":[23,5,1],"nz":[0,-1,-1]},{"size":2,"px":[10,5],"py":[6,3],"pz":[0,1],"nx":[4,4],"ny":[3,0],"nz":[1,-1]},{"size":2,"px":[6,5],"py":[7,3],"pz":[0,-1],"nx":[0,1],"ny":[4,10],"nz":[2,1]},{"size":5,"px":[12,13,12,12,12],"py":[12,13,11,10,10],"pz":[0,0,0,0,-1],"nx":[10,8,8,16,15],"ny":[7,4,10,11,10],"nz":[0,1,0,0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[4,2],"ny":[5,5],"nz":[2,-1]},{"size":2,"px":[9,17],"py":[17,7],"pz":[0,-1],"nx":[5,2],"ny":[9,4],"nz":[1,2]},{"size":2,"px":[4,4],"py":[3,5],"pz":[2,2],"nx":[12,8],"ny":[16,2],"nz":[0,-1]},{"size":2,"px":[1,1],"py":[2,0],"pz":[1,1],"nx":[0,4],"ny":[0,1],"nz":[2,-1]},{"size":2,"px":[11,1],"py":[5,0],"pz":[0,-1],"nx":[2,3],"ny":[2,4],"nz":[2,1]},{"size":4,"px":[0,6,4,22],"py":[23,2,4,12],"pz":[0,-1,-1,-1],"nx":[7,6,8,5],"ny":[1,1,2,1],"nz":[1,1,1,1]},{"size":2,"px":[4,10],"py":[0,9],"pz":[1,-1],"nx":[2,4],"ny":[3,10],"nz":[2,1]},{"size":2,"px":[11,8],"py":[15,13],"pz":[0,-1],"nx":[23,11],"ny":[13,5],"nz":[0,1]},{"size":2,"px":[18,4],"py":[5,4],"pz":[0,-1],"nx":[18,20],"ny":[4,7],"nz":[0,0]},{"size":5,"px":[21,20,20,10,20],"py":[17,22,19,10,21],"pz":[0,0,0,1,0],"nx":[5,5,3,14,7],"ny":[9,9,0,8,4],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[3,7,13,7,3],"py":[6,12,3,0,3],"pz":[1,-1,-1,-1,-1],"nx":[1,5,0,0,2],"ny":[16,6,13,5,4],"nz":[0,1,0,1,0]},{"size":2,"px":[7,4],"py":[6,3],"pz":[1,2],"nx":[9,5],"ny":[4,6],"nz":[1,-1]},{"size":3,"px":[14,9,13],"py":[19,22,8],"pz":[0,-1,-1],"nx":[13,4,4],"ny":[17,2,5],"nz":[0,2,2]},{"size":2,"px":[16,4],"py":[9,3],"pz":[0,2],"nx":[7,4],"ny":[4,5],"nz":[1,-1]},{"size":4,"px":[10,2,4,2],"py":[23,4,8,3],"pz":[0,2,1,2],"nx":[14,0,4,11],"ny":[19,3,5,3],"nz":[0,-1,-1,-1]},{"size":5,"px":[9,10,8,7,11],"py":[2,2,2,2,2],"pz":[0,0,0,0,0],"nx":[6,5,3,4,4],"ny":[0,1,0,2,2],"nz":[0,0,1,0,-1]},{"size":2,"px":[6,4],"py":[13,6],"pz":[0,-1],"nx":[15,4],"ny":[8,4],"nz":[0,1]},{"size":2,"px":[0,8],"py":[1,2],"pz":[2,-1],"nx":[5,4],"ny":[2,2],"nz":[1,1]},{"size":5,"px":[16,13,14,15,15],"py":[1,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[4,9,4,18,8],"ny":[5,9,4,18,11],"nz":[2,1,2,0,1]},{"size":2,"px":[5,6],"py":[2,6],"pz":[2,1],"nx":[22,9],"ny":[23,9],"nz":[0,-1]},{"size":2,"px":[19,19],"py":[5,5],"pz":[0,-1],"nx":[21,22],"ny":[2,4],"nz":[0,0]},{"size":2,"px":[2,5],"py":[8,6],"pz":[0,1],"nx":[3,4],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[18,14],"py":[13,17],"pz":[0,0],"nx":[14,4],"ny":[16,3],"nz":[0,-1]},{"size":2,"px":[6,6],"py":[6,3],"pz":[1,-1],"nx":[1,0],"ny":[2,2],"nz":[1,2]},{"size":2,"px":[23,21],"py":[21,14],"pz":[0,-1],"nx":[7,5],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[15,10],"py":[23,7],"pz":[0,-1],"nx":[9,4],"ny":[4,5],"nz":[1,2]},{"size":2,"px":[4,18],"py":[3,8],"pz":[2,0],"nx":[8,4],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[13,7],"py":[2,11],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[2,3,5,6,1],"py":[7,14,2,2,4],"pz":[1,0,0,0,2],"nx":[8,4,4,7,7],"ny":[7,5,4,9,9],"nz":[1,2,2,1,-1]},{"size":2,"px":[5,3],"py":[6,3],"pz":[1,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[7,20,4,10,10],"py":[9,16,4,10,8],"pz":[1,0,2,1,1],"nx":[4,2,3,5,3],"ny":[11,5,6,12,5],"nz":[0,1,1,0,-1]},{"size":2,"px":[6,11],"py":[4,18],"pz":[1,-1],"nx":[8,6],"ny":[4,9],"nz":[1,1]},{"size":2,"px":[2,8],"py":[5,23],"pz":[2,0],"nx":[9,4],"ny":[0,2],"nz":[1,-1]},{"size":5,"px":[3,1,2,2,2],"py":[12,6,12,11,11],"pz":[0,1,0,0,-1],"nx":[0,0,0,0,0],"ny":[13,12,11,14,7],"nz":[0,0,0,0,1]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,4],"ny":[4,14],"nz":[1,-1]},{"size":5,"px":[11,23,23,22,22],"py":[8,12,6,13,14],"pz":[1,0,0,0,0],"nx":[13,8,7,6,6],"ny":[6,3,3,9,9],"nz":[0,1,1,0,-1]},{"size":4,"px":[9,23,23,22],"py":[7,12,6,13],"pz":[1,-1,-1,-1],"nx":[11,23,23,23],"ny":[6,13,17,10],"nz":[1,0,0,0]},{"size":5,"px":[0,0,0,0,0],"py":[19,5,9,16,10],"pz":[0,2,1,0,1],"nx":[5,2,1,2,2],"ny":[18,10,5,9,9],"nz":[0,1,2,1,-1]},{"size":2,"px":[11,5],"py":[10,4],"pz":[1,2],"nx":[23,14],"ny":[23,3],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[8,10],"py":[4,8],"pz":[0,-1],"nx":[8,8],"ny":[2,3],"nz":[0,0]},{"size":3,"px":[7,10,11],"py":[1,6,13],"pz":[0,-1,-1],"nx":[4,4,2],"ny":[3,8,2],"nz":[1,1,2]},{"size":2,"px":[8,4],"py":[8,2],"pz":[1,2],"nx":[10,5],"ny":[10,0],"nz":[0,-1]},{"size":2,"px":[7,16],"py":[20,21],"pz":[0,-1],"nx":[2,4],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[3,10],"py":[7,8],"pz":[1,-1],"nx":[7,4],"ny":[20,7],"nz":[0,1]},{"size":5,"px":[11,11,11,11,11],"py":[10,12,13,11,11],"pz":[0,0,0,0,-1],"nx":[11,12,16,3,8],"ny":[6,6,10,1,8],"nz":[0,0,0,2,0]},{"size":2,"px":[12,6],"py":[4,2],"pz":[0,1],"nx":[7,7],"ny":[8,1],"nz":[0,-1]},{"size":5,"px":[23,23,23,23,23],"py":[22,20,21,19,19],"pz":[0,0,0,0,-1],"nx":[4,6,3,4,3],"ny":[19,23,15,20,16],"nz":[0,0,0,0,0]},{"size":3,"px":[8,4,14],"py":[12,3,8],"pz":[0,-1,-1],"nx":[4,2,10],"ny":[10,3,13],"nz":[1,2,0]},{"size":2,"px":[11,18],"py":[13,23],"pz":[0,-1],"nx":[5,5],"ny":[1,2],"nz":[2,2]},{"size":3,"px":[11,2,10],"py":[17,4,17],"pz":[0,2,0],"nx":[11,0,22],"ny":[15,2,4],"nz":[0,-1,-1]},{"size":3,"px":[11,3,0],"py":[15,4,8],"pz":[0,-1,-1],"nx":[14,11,4],"ny":[9,17,7],"nz":[0,0,1]},{"size":2,"px":[17,16],"py":[2,1],"pz":[0,0],"nx":[9,11],"ny":[4,6],"nz":[1,-1]},{"size":2,"px":[3,4],"py":[21,23],"pz":[0,0],"nx":[4,0],"ny":[3,3],"nz":[1,-1]},{"size":2,"px":[18,2],"py":[20,0],"pz":[0,-1],"nx":[4,9],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[9,1],"py":[19,3],"pz":[0,-1],"nx":[0,0],"ny":[9,21],"nz":[1,0]},{"size":2,"px":[19,19],"py":[21,22],"pz":[0,0],"nx":[19,0],"ny":[23,0],"nz":[0,-1]},{"size":4,"px":[11,2,3,2],"py":[6,6,9,4],"pz":[0,-1,-1,-1],"nx":[4,9,19,19],"ny":[5,10,17,18],"nz":[2,1,0,0]},{"size":2,"px":[2,4],"py":[4,8],"pz":[2,1],"nx":[4,9],"ny":[10,10],"nz":[1,-1]},{"size":2,"px":[23,22],"py":[8,12],"pz":[0,-1],"nx":[7,4],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[12,1],"py":[5,2],"pz":[0,-1],"nx":[9,11],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[4,4],"py":[2,2],"pz":[0,-1],"nx":[3,2],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[17,9],"py":[13,7],"pz":[0,1],"nx":[9,5],"ny":[4,0],"nz":[1,-1]},{"size":4,"px":[0,0,9,13],"py":[3,3,7,3],"pz":[2,-1,-1,-1],"nx":[2,4,4,11],"ny":[1,2,8,5],"nz":[2,1,1,0]},{"size":5,"px":[3,6,5,6,6],"py":[0,0,2,1,1],"pz":[1,0,0,0,-1],"nx":[2,2,2,1,1],"ny":[21,19,20,16,17],"nz":[0,0,0,0,0]},{"size":2,"px":[13,3],"py":[22,10],"pz":[0,-1],"nx":[7,4],"ny":[10,5],"nz":[1,2]},{"size":2,"px":[3,2],"py":[7,3],"pz":[1,2],"nx":[8,4],"ny":[4,5],"nz":[1,-1]},{"size":5,"px":[17,8,15,7,15],"py":[13,6,16,5,12],"pz":[0,1,0,1,0],"nx":[5,4,6,3,4],"ny":[1,2,1,0,3],"nz":[0,0,0,1,-1]},{"size":5,"px":[12,9,11,12,10],"py":[0,1,2,2,0],"pz":[0,0,0,0,0],"nx":[8,16,7,4,4],"ny":[9,23,9,3,2],"nz":[1,0,1,2,-1]},{"size":2,"px":[4,11],"py":[1,4],"pz":[2,-1],"nx":[8,7],"ny":[4,4],"nz":[0,0]},{"size":4,"px":[7,4,5,8],"py":[13,2,1,3],"pz":[0,-1,-1,-1],"nx":[9,4,9,9],"ny":[9,5,10,11],"nz":[0,1,0,0]},{"size":2,"px":[10,11],"py":[10,11],"pz":[0,-1],"nx":[2,6],"ny":[2,2],"nz":[2,1]},{"size":2,"px":[21,3],"py":[11,2],"pz":[0,-1],"nx":[22,22],"ny":[20,18],"nz":[0,0]},{"size":2,"px":[7,6],"py":[1,2],"pz":[0,0],"nx":[5,10],"ny":[1,0],"nz":[0,-1]},{"size":2,"px":[21,3],"py":[18,1],"pz":[0,-1],"nx":[16,15],"ny":[4,4],"nz":[0,0]},{"size":2,"px":[12,7],"py":[4,1],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[13,11],"py":[23,17],"pz":[0,0],"nx":[11,21],"ny":[16,0],"nz":[0,-1]},{"size":2,"px":[1,2],"py":[0,6],"pz":[1,-1],"nx":[16,16],"ny":[9,11],"nz":[0,0]},{"size":2,"px":[12,13],"py":[20,20],"pz":[0,0],"nx":[11,3],"ny":[21,7],"nz":[0,-1]},{"size":3,"px":[19,20,9],"py":[21,18,11],"pz":[0,0,1],"nx":[17,4,11],"ny":[19,2,0],"nz":[0,-1,-1]},{"size":2,"px":[12,5],"py":[5,2],"pz":[0,1],"nx":[7,9],"ny":[7,8],"nz":[0,-1]},{"size":5,"px":[8,4,4,8,4],"py":[4,4,5,10,3],"pz":[1,1,2,0,2],"nx":[11,22,11,23,23],"ny":[0,0,1,3,3],"nz":[1,0,1,0,-1]},{"size":2,"px":[8,14],"py":[10,23],"pz":[1,0],"nx":[7,2],"ny":[10,9],"nz":[1,-1]},{"size":2,"px":[5,14],"py":[6,23],"pz":[1,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[11,2],"py":[19,3],"pz":[0,-1],"nx":[10,12],"ny":[18,18],"nz":[0,0]},{"size":2,"px":[12,3],"py":[4,1],"pz":[0,2],"nx":[6,6],"ny":[11,11],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[18,10,20,19,19],"pz":[0,1,0,0,-1],"nx":[11,10,14,12,13],"ny":[2,2,2,2,2],"nz":[0,0,0,0,0]},{"size":3,"px":[12,2,9],"py":[14,5,10],"pz":[0,-1,-1],"nx":[11,10,5],"ny":[10,13,5],"nz":[0,0,1]},{"size":2,"px":[2,3],"py":[3,7],"pz":[2,1],"nx":[3,10],"ny":[4,13],"nz":[1,-1]},{"size":2,"px":[9,3],"py":[21,7],"pz":[0,-1],"nx":[10,21],"ny":[7,15],"nz":[1,0]},{"size":2,"px":[21,10],"py":[16,8],"pz":[0,1],"nx":[8,2],"ny":[10,8],"nz":[1,-1]},{"size":2,"px":[8,8],"py":[6,7],"pz":[1,-1],"nx":[12,11],"ny":[11,7],"nz":[0,1]},{"size":2,"px":[3,11],"py":[4,20],"pz":[2,0],"nx":[11,10],"ny":[19,1],"nz":[0,-1]},{"size":2,"px":[17,5],"py":[13,3],"pz":[0,-1],"nx":[7,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[7,1],"py":[23,3],"pz":[0,2],"nx":[14,6],"ny":[12,9],"nz":[0,-1]},{"size":2,"px":[12,5],"py":[11,2],"pz":[0,-1],"nx":[11,7],"ny":[3,1],"nz":[0,1]},{"size":2,"px":[9,6],"py":[2,17],"pz":[0,-1],"nx":[4,6],"ny":[4,12],"nz":[1,0]},{"size":2,"px":[14,19],"py":[5,6],"pz":[0,-1],"nx":[9,3],"ny":[9,1],"nz":[0,2]},{"size":5,"px":[12,13,13,13,12],"py":[9,11,12,13,10],"pz":[0,0,0,0,0],"nx":[2,4,4,4,4],"ny":[7,18,17,14,14],"nz":[1,0,0,0,-1]},{"size":2,"px":[10,10],"py":[6,6],"pz":[1,-1],"nx":[20,18],"ny":[18,23],"nz":[0,0]},{"size":2,"px":[5,6],"py":[4,14],"pz":[1,-1],"nx":[9,4],"ny":[2,1],"nz":[1,2]},{"size":2,"px":[11,9],"py":[4,18],"pz":[0,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[15,0],"py":[18,4],"pz":[0,-1],"nx":[3,4],"ny":[5,4],"nz":[2,2]},{"size":4,"px":[7,3,6,6],"py":[8,4,6,5],"pz":[1,2,1,1],"nx":[10,4,13,0],"ny":[10,4,9,22],"nz":[0,-1,-1,-1]},{"size":2,"px":[10,8],"py":[18,11],"pz":[0,-1],"nx":[5,4],"ny":[8,10],"nz":[1,1]},{"size":4,"px":[17,2,10,2],"py":[14,1,10,3],"pz":[0,-1,-1,-1],"nx":[8,8,17,8],"ny":[4,5,12,6],"nz":[1,1,0,1]},{"size":5,"px":[9,11,9,4,10],"py":[1,1,0,0,1],"pz":[0,0,0,1,0],"nx":[8,4,7,15,15],"ny":[7,2,4,17,17],"nz":[1,2,1,0,-1]},{"size":2,"px":[4,3],"py":[11,8],"pz":[0,-1],"nx":[2,2],"ny":[1,2],"nz":[2,2]},{"size":2,"px":[11,3],"py":[13,8],"pz":[0,-1],"nx":[1,1],"ny":[5,2],"nz":[1,2]},{"size":2,"px":[6,2],"py":[8,3],"pz":[0,2],"nx":[3,1],"ny":[5,2],"nz":[1,-1]},{"size":5,"px":[10,5,7,8,6],"py":[9,7,7,7,7],"pz":[0,0,0,0,0],"nx":[7,3,0,2,15],"ny":[8,0,1,18,17],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[17,8],"py":[12,6],"pz":[0,1],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[3,11,8,10,12],"py":[0,2,10,2,3],"pz":[2,0,0,0,0],"nx":[3,2,10,2,2],"ny":[6,4,11,3,3],"nz":[0,1,0,1,-1]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[8,19],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[2,2],"py":[1,1],"pz":[2,-1],"nx":[7,17],"ny":[1,2],"nz":[1,0]},{"size":5,"px":[16,15,14,13,7],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[6,4,8,3,11],"ny":[3,4,4,1,6],"nz":[1,1,1,2,0]},{"size":2,"px":[11,1],"py":[8,5],"pz":[0,-1],"nx":[13,4],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[4,9],"py":[0,2],"pz":[2,1],"nx":[4,11],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[15,15],"py":[2,2],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[8,17],"py":[9,22],"pz":[1,0],"nx":[8,20],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[14,22],"pz":[0,-1],"nx":[3,11],"ny":[3,3],"nz":[1,0]},{"size":2,"px":[4,2],"py":[1,0],"pz":[1,2],"nx":[5,8],"ny":[3,9],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[4,8],"pz":[2,1],"nx":[9,5],"ny":[15,19],"nz":[0,-1]},{"size":2,"px":[5,2],"py":[1,1],"pz":[0,1],"nx":[10,10],"ny":[6,6],"nz":[0,-1]},{"size":2,"px":[17,6],"py":[10,2],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[13,7,3],"py":[5,2,6],"pz":[0,1,-1],"nx":[17,16,17],"ny":[1,1,2],"nz":[0,0,0]},{"size":2,"px":[11,10],"py":[3,3],"pz":[0,0],"nx":[8,4],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[4,8],"py":[0,8],"pz":[2,-1],"nx":[3,4],"ny":[0,0],"nz":[1,1]},{"size":5,"px":[9,2,4,1,2],"py":[13,3,9,2,5],"pz":[0,2,1,2,2],"nx":[9,5,10,4,10],"ny":[5,1,3,0,0],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[6,12],"py":[5,9],"pz":[1,0],"nx":[0,2],"ny":[23,9],"nz":[0,-1]},{"size":2,"px":[22,11],"py":[21,8],"pz":[0,1],"nx":[10,0],"ny":[17,2],"nz":[0,-1]},{"size":2,"px":[3,1],"py":[22,9],"pz":[0,1],"nx":[22,5],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[5,6],"ny":[10,9],"nz":[1,-1]},{"size":4,"px":[7,3,17,7],"py":[8,2,10,11],"pz":[0,2,0,1],"nx":[6,10,5,23],"ny":[9,21,1,23],"nz":[0,-1,-1,-1]},{"size":2,"px":[8,3],"py":[7,2],"pz":[1,2],"nx":[8,9],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[9,5],"py":[14,6],"pz":[0,1],"nx":[8,8],"ny":[13,13],"nz":[0,-1]},{"size":3,"px":[11,6,8],"py":[20,3,20],"pz":[0,-1,-1],"nx":[5,3,12],"ny":[9,5,18],"nz":[1,2,0]},{"size":2,"px":[3,9],"py":[1,3],"pz":[1,0],"nx":[2,8],"ny":[5,8],"nz":[0,-1]},{"size":2,"px":[15,9],"py":[21,3],"pz":[0,-1],"nx":[3,4],"ny":[5,5],"nz":[2,2]},{"size":2,"px":[2,9],"py":[7,11],"pz":[1,-1],"nx":[2,2],"ny":[8,9],"nz":[1,1]},{"size":4,"px":[3,4,3,1],"py":[14,21,19,6],"pz":[0,0,0,1],"nx":[10,16,4,5],"ny":[8,1,7,6],"nz":[0,-1,-1,-1]},{"size":4,"px":[10,4,3,1],"py":[5,21,19,6],"pz":[1,-1,-1,-1],"nx":[21,10,5,11],"ny":[4,2,3,4],"nz":[0,1,2,1]},{"size":2,"px":[4,17],"py":[3,8],"pz":[2,0],"nx":[17,2],"ny":[9,22],"nz":[0,-1]},{"size":2,"px":[17,12],"py":[14,20],"pz":[0,-1],"nx":[7,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,12],"py":[9,20],"pz":[0,-1],"nx":[11,23],"ny":[8,18],"nz":[1,0]},{"size":2,"px":[5,11],"py":[4,7],"pz":[2,1],"nx":[8,15],"ny":[7,5],"nz":[1,-1]},{"size":2,"px":[11,15],"py":[13,8],"pz":[0,-1],"nx":[11,11],"ny":[6,7],"nz":[1,1]},{"size":2,"px":[6,15],"py":[14,8],"pz":[0,-1],"nx":[4,4],"ny":[12,13],"nz":[0,0]},{"size":2,"px":[5,5],"py":[0,1],"pz":[2,2],"nx":[15,4],"ny":[5,5],"nz":[0,-1]},{"size":2,"px":[16,17],"py":[2,2],"pz":[0,0],"nx":[20,8],"ny":[3,7],"nz":[0,-1]},{"size":3,"px":[6,3,2],"py":[10,6,1],"pz":[0,-1,-1],"nx":[4,3,2],"ny":[3,4,2],"nz":[1,1,2]},{"size":2,"px":[10,6],"py":[4,6],"pz":[0,-1],"nx":[6,13],"ny":[0,1],"nz":[1,0]},{"size":2,"px":[10,10],"py":[8,7],"pz":[1,1],"nx":[8,2],"ny":[7,2],"nz":[1,-1]},{"size":2,"px":[7,1],"py":[12,4],"pz":[0,-1],"nx":[3,4],"ny":[5,5],"nz":[1,1]},{"size":2,"px":[11,15],"py":[15,14],"pz":[0,-1],"nx":[3,11],"ny":[4,13],"nz":[1,0]},{"size":5,"px":[13,9,11,14,12],"py":[0,2,0,0,2],"pz":[0,0,0,0,0],"nx":[5,4,4,3,4],"ny":[4,4,18,7,17],"nz":[1,1,0,1,0]},{"size":3,"px":[13,12,11],"py":[22,22,22],"pz":[0,0,0],"nx":[11,12,13],"ny":[20,20,20],"nz":[0,0,0]},{"size":2,"px":[6,13],"py":[2,4],"pz":[1,0],"nx":[7,6],"ny":[8,9],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[23,4],"pz":[0,-1],"nx":[5,9],"ny":[1,1],"nz":[1,0]},{"size":2,"px":[14,14],"py":[19,19],"pz":[0,-1],"nx":[11,11],"ny":[10,9],"nz":[1,1]},{"size":2,"px":[23,23],"py":[11,9],"pz":[0,0],"nx":[23,23],"ny":[0,11],"nz":[0,-1]},{"size":2,"px":[23,3],"py":[23,5],"pz":[0,-1],"nx":[4,1],"ny":[23,10],"nz":[0,1]},{"size":2,"px":[9,1],"py":[7,4],"pz":[1,-1],"nx":[19,10],"ny":[20,9],"nz":[0,1]},{"size":2,"px":[16,1],"py":[9,4],"pz":[0,-1],"nx":[7,8],"ny":[3,3],"nz":[1,1]},{"size":2,"px":[7,6],"py":[13,13],"pz":[0,0],"nx":[4,5],"ny":[4,11],"nz":[1,-1]},{"size":5,"px":[19,20,20,10,10],"py":[0,0,2,0,1],"pz":[0,0,0,1,1],"nx":[7,7,15,4,4],"ny":[4,13,7,4,4],"nz":[1,0,0,1,-1]},{"size":2,"px":[12,23],"py":[6,5],"pz":[0,-1],"nx":[18,18],"ny":[17,16],"nz":[0,0]},{"size":2,"px":[6,3],"py":[9,2],"pz":[1,2],"nx":[14,18],"ny":[9,1],"nz":[0,-1]},{"size":2,"px":[9,13],"py":[16,5],"pz":[0,-1],"nx":[5,4],"ny":[7,9],"nz":[1,1]},{"size":2,"px":[10,10],"py":[8,10],"pz":[1,1],"nx":[4,1],"ny":[5,3],"nz":[2,-1]},{"size":2,"px":[12,11],"py":[13,4],"pz":[0,-1],"nx":[0,0],"ny":[14,15],"nz":[0,0]},{"size":2,"px":[2,1],"py":[20,17],"pz":[0,0],"nx":[12,12],"ny":[22,2],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[6,7],"pz":[1,-1],"nx":[21,21],"ny":[13,12],"nz":[0,0]},{"size":2,"px":[3,10],"py":[4,23],"pz":[2,0],"nx":[10,2],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[6,12],"py":[3,6],"pz":[1,0],"nx":[11,0],"ny":[17,1],"nz":[0,-1]},{"size":2,"px":[11,4],"py":[21,9],"pz":[0,-1],"nx":[2,3],"ny":[18,22],"nz":[0,0]},{"size":2,"px":[13,5],"py":[18,9],"pz":[0,-1],"nx":[6,7],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[21,4],"py":[16,3],"pz":[0,-1],"nx":[23,23],"ny":[16,15],"nz":[0,0]},{"size":2,"px":[2,0],"py":[7,4],"pz":[1,-1],"nx":[3,8],"ny":[7,4],"nz":[1,1]},{"size":2,"px":[15,16],"py":[11,12],"pz":[0,0],"nx":[8,5],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[7,5],"pz":[0,0],"nx":[17,17],"ny":[11,10],"nz":[0,-1]},{"size":5,"px":[8,13,12,3,3],"py":[6,23,23,3,3],"pz":[1,0,0,2,-1],"nx":[0,1,0,0,0],"ny":[2,13,4,5,6],"nz":[2,0,1,1,1]},{"size":2,"px":[0,1],"py":[7,8],"pz":[1,-1],"nx":[0,0],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[2,12],"py":[1,7],"pz":[1,-1],"nx":[0,0],"ny":[12,14],"nz":[0,0]},{"size":2,"px":[5,1],"py":[7,4],"pz":[1,2],"nx":[8,0],"ny":[15,14],"nz":[0,-1]},{"size":2,"px":[7,4],"py":[14,8],"pz":[0,-1],"nx":[2,4],"ny":[1,4],"nz":[2,1]},{"size":2,"px":[5,3],"py":[3,1],"pz":[2,-1],"nx":[9,9],"ny":[5,6],"nz":[1,1]},{"size":2,"px":[4,5],"py":[2,3],"pz":[1,-1],"nx":[11,12],"ny":[23,23],"nz":[0,0]},{"size":2,"px":[10,5],"py":[7,0],"pz":[1,-1],"nx":[22,22],"ny":[19,18],"nz":[0,0]},{"size":3,"px":[10,2,9],"py":[20,9,4],"pz":[0,-1,-1],"nx":[1,10,11],"ny":[2,11,9],"nz":[2,0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[9,3],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[17,6],"py":[7,16],"pz":[0,-1],"nx":[17,17],"ny":[9,6],"nz":[0,0]},{"size":3,"px":[8,1,9],"py":[6,3,4],"pz":[1,-1,-1],"nx":[2,9,2],"ny":[5,13,3],"nz":[2,0,2]},{"size":4,"px":[10,10,9,2],"py":[12,11,2,10],"pz":[0,0,-1,-1],"nx":[6,11,3,13],"ny":[2,4,1,4],"nz":[1,0,2,0]},{"size":2,"px":[3,3],"py":[7,1],"pz":[1,-1],"nx":[4,3],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[0,0],"py":[4,8],"pz":[2,1],"nx":[4,4],"ny":[15,5],"nz":[0,-1]},{"size":2,"px":[5,0],"py":[4,8],"pz":[1,-1],"nx":[13,13],"ny":[9,10],"nz":[0,0]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[8,17],"ny":[4,12],"nz":[1,-1]},{"size":2,"px":[15,16],"py":[11,6],"pz":[0,0],"nx":[16,17],"ny":[5,12],"nz":[0,-1]},{"size":2,"px":[13,11],"py":[9,7],"pz":[0,-1],"nx":[0,1],"ny":[9,20],"nz":[1,0]},{"size":3,"px":[16,11,20],"py":[4,7,23],"pz":[0,-1,-1],"nx":[8,9,4],"ny":[4,6,4],"nz":[1,1,2]},{"size":2,"px":[1,1],"py":[18,17],"pz":[0,0],"nx":[9,6],"ny":[7,11],"nz":[0,-1]},{"size":3,"px":[4,4,19],"py":[3,2,9],"pz":[2,2,0],"nx":[2,14,11],"ny":[5,3,9],"nz":[1,-1,-1]},{"size":2,"px":[11,19],"py":[13,9],"pz":[0,-1],"nx":[11,11],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[13,7],"py":[19,2],"pz":[0,-1],"nx":[3,5],"ny":[6,12],"nz":[1,0]},{"size":4,"px":[9,4,4,2],"py":[13,9,8,4],"pz":[0,1,1,2],"nx":[13,0,0,14],"ny":[18,11,6,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[11,15],"py":[8,10],"pz":[0,0],"nx":[14,11],"ny":[9,2],"nz":[0,-1]},{"size":2,"px":[3,2],"py":[8,5],"pz":[1,2],"nx":[4,4],"ny":[10,10],"nz":[1,-1]},{"size":4,"px":[4,6,16,14],"py":[1,1,1,7],"pz":[2,1,0,0],"nx":[10,1,1,2],"ny":[8,5,10,3],"nz":[0,-1,-1,-1]},{"size":4,"px":[2,3,1,2],"py":[3,1,0,2],"pz":[0,0,1,0],"nx":[0,0,0,0],"ny":[1,1,2,0],"nz":[0,1,0,1]},{"size":2,"px":[8,8],"py":[6,7],"pz":[1,1],"nx":[8,0],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[3,0],"pz":[0,1],"nx":[2,2],"ny":[1,16],"nz":[1,-1]},{"size":2,"px":[6,6],"py":[19,18],"pz":[0,0],"nx":[2,10],"ny":[5,8],"nz":[2,-1]},{"size":2,"px":[8,5],"py":[21,11],"pz":[0,-1],"nx":[3,2],"ny":[11,5],"nz":[1,2]},{"size":2,"px":[4,9],"py":[4,7],"pz":[2,1],"nx":[8,7],"ny":[10,4],"nz":[1,-1]},{"size":5,"px":[4,18,19,16,19],"py":[3,12,12,23,13],"pz":[2,0,0,0,0],"nx":[2,8,3,2,2],"ny":[4,23,10,5,5],"nz":[2,0,1,2,-1]},{"size":2,"px":[4,8],"py":[6,11],"pz":[1,0],"nx":[8,3],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[3,12],"py":[4,13],"pz":[2,0],"nx":[10,5],"ny":[15,21],"nz":[0,-1]},{"size":2,"px":[2,9],"py":[4,23],"pz":[2,0],"nx":[19,4],"ny":[9,3],"nz":[0,2]},{"size":2,"px":[3,6],"py":[8,15],"pz":[1,0],"nx":[6,1],"ny":[18,5],"nz":[0,-1]},{"size":2,"px":[9,0],"py":[20,3],"pz":[0,-1],"nx":[2,10],"ny":[5,17],"nz":[2,0]},{"size":3,"px":[10,6,3],"py":[2,7,3],"pz":[0,-1,-1],"nx":[5,4,2],"ny":[9,7,2],"nz":[1,1,2]},{"size":2,"px":[14,6],"py":[12,7],"pz":[0,-1],"nx":[2,10],"ny":[0,1],"nz":[2,0]},{"size":3,"px":[10,5,1],"py":[15,5,4],"pz":[0,-1,-1],"nx":[9,4,18],"ny":[2,0,4],"nz":[1,2,0]},{"size":2,"px":[17,2],"py":[12,6],"pz":[0,-1],"nx":[8,16],"ny":[4,11],"nz":[1,0]},{"size":3,"px":[7,13,4],"py":[0,0,1],"pz":[1,0,-1],"nx":[18,4,4],"ny":[13,2,3],"nz":[0,2,2]},{"size":2,"px":[1,11],"py":[10,6],"pz":[0,-1],"nx":[0,1],"ny":[15,17],"nz":[0,0]},{"size":3,"px":[9,12,8],"py":[8,17,11],"pz":[1,0,1],"nx":[12,0,20],"ny":[16,9,13],"nz":[0,-1,-1]},{"size":2,"px":[11,4],"py":[5,8],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[16,3],"py":[9,8],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[6,3],"py":[11,5],"pz":[1,2],"nx":[11,5],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[11,13],"py":[1,1],"pz":[0,0],"nx":[4,4],"ny":[5,5],"nz":[1,-1]},{"size":2,"px":[14,4],"py":[4,3],"pz":[0,-1],"nx":[12,10],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[9,7],"ny":[9,7],"nz":[0,-1]},{"size":3,"px":[5,6,6],"py":[4,4,4],"pz":[1,-1,-1],"nx":[13,8,7],"ny":[8,3,4],"nz":[0,1,1]},{"size":2,"px":[5,5],"py":[2,11],"pz":[1,1],"nx":[10,11],"ny":[22,22],"nz":[0,0]},{"size":2,"px":[16,9],"py":[13,7],"pz":[0,1],"nx":[8,14],"ny":[4,12],"nz":[1,-1]},{"size":2,"px":[13,5],"py":[13,3],"pz":[0,2],"nx":[16,22],"ny":[13,6],"nz":[0,-1]},{"size":4,"px":[4,4,3,4],"py":[4,3,4,5],"pz":[2,2,2,2],"nx":[21,5,17,7],"ny":[0,2,5,23],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,16],"py":[0,1],"pz":[2,0],"nx":[15,1],"ny":[23,10],"nz":[0,-1]},{"size":2,"px":[4,6],"py":[11,2],"pz":[0,-1],"nx":[15,6],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":3,"px":[13,14,5],"py":[9,15,2],"pz":[0,-1,-1],"nx":[11,1,11],"ny":[10,3,11],"nz":[0,1,0]},{"size":2,"px":[5,1],"py":[6,2],"pz":[1,-1],"nx":[1,1],"ny":[2,5],"nz":[2,1]},{"size":2,"px":[11,5],"py":[1,0],"pz":[1,2],"nx":[10,4],"ny":[2,3],"nz":[1,-1]},{"size":2,"px":[11,11],"py":[8,9],"pz":[1,1],"nx":[23,4],"ny":[23,2],"nz":[0,-1]},{"size":2,"px":[5,2],"py":[10,2],"pz":[0,-1],"nx":[18,10],"ny":[0,1],"nz":[0,1]},{"size":2,"px":[20,4],"py":[7,3],"pz":[0,2],"nx":[8,4],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[10,4],"py":[5,4],"pz":[1,-1],"nx":[11,11],"ny":[5,6],"nz":[1,1]},{"size":3,"px":[14,15,16],"py":[0,0,1],"pz":[0,0,0],"nx":[8,5,15],"ny":[7,2,10],"nz":[1,-1,-1]},{"size":2,"px":[2,2],"py":[1,1],"pz":[2,-1],"nx":[17,18],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[13,8],"py":[15,7],"pz":[0,-1],"nx":[9,4],"ny":[5,2],"nz":[0,1]},{"size":2,"px":[4,0],"py":[6,17],"pz":[1,-1],"nx":[3,2],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[14,8],"py":[17,9],"pz":[0,-1],"nx":[7,6],"ny":[8,8],"nz":[1,1]},{"size":2,"px":[10,4],"py":[7,1],"pz":[1,-1],"nx":[15,6],"ny":[14,4],"nz":[0,1]},{"size":2,"px":[3,12],"py":[8,19],"pz":[1,0],"nx":[13,10],"ny":[17,9],"nz":[0,-1]},{"size":2,"px":[7,12],"py":[2,4],"pz":[1,0],"nx":[6,11],"ny":[3,2],"nz":[0,-1]},{"size":4,"px":[2,1,6,1],"py":[10,3,23,8],"pz":[1,2,0,1],"nx":[17,10,23,0],"ny":[9,2,20,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[9,9],"py":[2,8],"pz":[0,-1],"nx":[2,2],"ny":[4,2],"nz":[2,2]},{"size":2,"px":[3,16],"py":[1,6],"pz":[2,0],"nx":[8,4],"ny":[2,5],"nz":[1,-1]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[5,6],"py":[3,0],"pz":[2,-1],"nx":[9,5],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[3,16],"py":[5,23],"pz":[1,-1],"nx":[0,0],"ny":[6,3],"nz":[1,2]},{"size":4,"px":[0,0,0,0],"py":[3,2,12,5],"pz":[2,2,0,1],"nx":[2,3,2,13],"ny":[5,5,2,19],"nz":[1,-1,-1,-1]},{"size":2,"px":[11,11],"py":[10,11],"pz":[0,0],"nx":[5,5],"ny":[1,1],"nz":[2,-1]},{"size":2,"px":[5,2],"py":[0,4],"pz":[2,-1],"nx":[2,2],"ny":[10,8],"nz":[1,1]},{"size":4,"px":[16,2,8,4],"py":[14,0,11,5],"pz":[0,-1,-1,-1],"nx":[18,14,7,7],"ny":[13,14,8,6],"nz":[0,0,1,1]},{"size":2,"px":[8,9],"py":[2,2],"pz":[0,0],"nx":[5,14],"ny":[4,14],"nz":[1,-1]},{"size":2,"px":[3,5],"py":[11,20],"pz":[1,0],"nx":[11,4],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[2,2],"py":[3,4],"pz":[2,2],"nx":[3,4],"ny":[4,2],"nz":[1,-1]},{"size":3,"px":[10,4,3],"py":[5,5,3],"pz":[0,-1,-1],"nx":[11,3,10],"ny":[2,0,2],"nz":[0,2,0]},{"size":2,"px":[15,15],"py":[1,1],"pz":[0,-1],"nx":[7,4],"ny":[5,2],"nz":[1,2]},{"size":4,"px":[9,5,2,6],"py":[22,8,4,19],"pz":[0,1,2,0],"nx":[9,5,0,3],"ny":[20,5,22,4],"nz":[0,-1,-1,-1]},{"size":3,"px":[1,4,10],"py":[3,9,12],"pz":[2,1,0],"nx":[0,10,0],"ny":[0,5,0],"nz":[0,-1,-1]},{"size":2,"px":[1,6],"py":[0,7],"pz":[0,-1],"nx":[20,19],"ny":[14,14],"nz":[0,0]},{"size":2,"px":[13,4],"py":[14,15],"pz":[0,-1],"nx":[2,1],"ny":[5,7],"nz":[0,0]},{"size":2,"px":[17,7],"py":[9,11],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[17,9],"py":[12,6],"pz":[0,1],"nx":[15,10],"ny":[9,8],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[0,1],"pz":[2,2],"nx":[9,7],"ny":[6,17],"nz":[1,-1]},{"size":3,"px":[3,3,15],"py":[3,4,6],"pz":[2,1,0],"nx":[0,2,22],"ny":[5,8,9],"nz":[0,-1,-1]},{"size":4,"px":[15,15,15,1],"py":[12,6,6,1],"pz":[0,-1,-1,-1],"nx":[4,7,13,4],"ny":[4,7,12,2],"nz":[2,1,0,2]},{"size":2,"px":[3,15],"py":[12,6],"pz":[0,-1],"nx":[9,1],"ny":[14,2],"nz":[0,2]},{"size":2,"px":[12,12],"py":[11,12],"pz":[0,0],"nx":[9,5],"ny":[4,4],"nz":[1,-1]},{"size":3,"px":[23,6,7],"py":[23,3,4],"pz":[0,-1,-1],"nx":[19,16,17],"ny":[17,14,15],"nz":[0,0,0]},{"size":2,"px":[9,5],"py":[2,7],"pz":[1,-1],"nx":[11,23],"ny":[10,18],"nz":[1,0]},{"size":3,"px":[0,0,0],"py":[4,9,2],"pz":[1,0,2],"nx":[2,0,0],"ny":[9,2,1],"nz":[0,-1,-1]},{"size":2,"px":[12,0],"py":[11,9],"pz":[0,-1],"nx":[1,0],"ny":[18,5],"nz":[0,2]},{"size":2,"px":[5,4],"py":[10,6],"pz":[0,1],"nx":[10,6],"ny":[10,18],"nz":[0,-1]},{"size":2,"px":[13,12],"py":[13,13],"pz":[0,-1],"nx":[5,11],"ny":[1,3],"nz":[2,1]},{"size":2,"px":[10,19],"py":[5,22],"pz":[1,-1],"nx":[4,12],"ny":[1,5],"nz":[2,0]},{"size":2,"px":[8,6],"py":[0,0],"pz":[0,0],"nx":[3,12],"ny":[0,3],"nz":[0,-1]},{"size":2,"px":[9,6],"py":[7,0],"pz":[1,-1],"nx":[12,12],"ny":[10,11],"nz":[0,0]},{"size":4,"px":[3,1,3,2],"py":[20,9,21,19],"pz":[0,1,0,0],"nx":[20,20,5,12],"ny":[10,15,2,10],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,1],"ny":[4,6],"nz":[1,-1]},{"size":3,"px":[5,11,11],"py":[1,3,4],"pz":[2,1,1],"nx":[3,3,7],"ny":[5,5,0],"nz":[1,-1,-1]},{"size":3,"px":[8,6,7],"py":[10,5,6],"pz":[1,1,1],"nx":[23,3,7],"ny":[0,5,0],"nz":[0,-1,-1]},{"size":2,"px":[2,7],"py":[2,14],"pz":[1,-1],"nx":[7,3],"ny":[12,4],"nz":[0,1]},{"size":2,"px":[5,3],"py":[6,3],"pz":[1,2],"nx":[13,3],"ny":[12,4],"nz":[0,-1]},{"size":2,"px":[11,18],"py":[11,4],"pz":[0,-1],"nx":[23,11],"ny":[19,10],"nz":[0,1]},{"size":2,"px":[7,2],"py":[12,3],"pz":[0,-1],"nx":[8,4],"ny":[11,5],"nz":[0,1]},{"size":2,"px":[11,11],"py":[0,11],"pz":[1,-1],"nx":[3,3],"ny":[19,18],"nz":[0,0]},{"size":2,"px":[11,1],"py":[11,11],"pz":[1,-1],"nx":[13,15],"ny":[6,5],"nz":[0,0]},{"size":2,"px":[8,8],"py":[9,9],"pz":[0,-1],"nx":[5,11],"ny":[1,3],"nz":[2,1]},{"size":4,"px":[6,4,8,3],"py":[6,2,4,3],"pz":[0,2,1,2],"nx":[7,0,15,8],"ny":[8,8,16,7],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,3],"py":[22,20],"pz":[0,0],"nx":[2,8],"ny":[5,4],"nz":[2,-1]},{"size":2,"px":[12,6],"py":[11,0],"pz":[0,-1],"nx":[0,0],"ny":[3,1],"nz":[1,2]},{"size":2,"px":[0,0],"py":[12,7],"pz":[0,1],"nx":[3,1],"ny":[23,9],"nz":[0,-1]},{"size":2,"px":[7,0],"py":[11,5],"pz":[1,-1],"nx":[0,0],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[8,8],"py":[10,10],"pz":[0,-1],"nx":[4,3],"ny":[5,4],"nz":[2,2]},{"size":2,"px":[13,3],"py":[2,4],"pz":[0,-1],"nx":[4,3],"ny":[3,5],"nz":[2,2]},{"size":2,"px":[1,1],"py":[23,22],"pz":[0,0],"nx":[9,0],"ny":[7,3],"nz":[0,-1]},{"size":2,"px":[1,0],"py":[16,15],"pz":[0,0],"nx":[0,14],"ny":[23,12],"nz":[0,-1]},{"size":2,"px":[13,8],"py":[22,0],"pz":[0,-1],"nx":[5,3],"ny":[0,1],"nz":[1,1]},{"size":2,"px":[13,13],"py":[7,7],"pz":[0,-1],"nx":[3,2],"ny":[17,10],"nz":[0,1]},{"size":2,"px":[20,20],"py":[15,16],"pz":[0,0],"nx":[7,3],"ny":[9,17],"nz":[1,-1]},{"size":5,"px":[10,12,11,13,11],"py":[2,2,1,2,2],"pz":[0,0,0,0,0],"nx":[10,18,21,21,19],"ny":[3,1,13,11,2],"nz":[1,0,0,0,0]},{"size":2,"px":[16,3],"py":[6,1],"pz":[0,2],"nx":[15,18],"ny":[8,1],"nz":[0,-1]},{"size":2,"px":[19,3],"py":[8,1],"pz":[0,-1],"nx":[9,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,3],"py":[15,18],"pz":[0,-1],"nx":[3,3],"ny":[0,1],"nz":[2,2]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[7,3],"ny":[11,1],"nz":[1,-1]},{"size":2,"px":[11,10],"py":[17,9],"pz":[0,-1],"nx":[11,10],"ny":[15,15],"nz":[0,0]},{"size":2,"px":[5,10],"py":[2,4],"pz":[1,0],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[9,10],"py":[3,4],"pz":[0,-1],"nx":[9,10],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[23,11],"py":[13,10],"pz":[0,1],"nx":[14,7],"ny":[5,14],"nz":[0,-1]},{"size":2,"px":[4,4],"py":[5,4],"pz":[2,2],"nx":[9,8],"ny":[3,3],"nz":[1,-1]},{"size":3,"px":[12,4,15],"py":[5,4,7],"pz":[0,-1,-1],"nx":[3,4,2],"ny":[7,11,5],"nz":[1,1,2]},{"size":2,"px":[11,4],"py":[15,4],"pz":[0,-1],"nx":[5,9],"ny":[7,15],"nz":[1,0]},{"size":2,"px":[9,7],"py":[0,1],"pz":[1,-1],"nx":[11,11],"ny":[8,7],"nz":[1,1]},{"size":5,"px":[1,1,1,1,1],"py":[11,12,10,9,9],"pz":[0,0,0,0,-1],"nx":[4,5,8,16,11],"ny":[4,3,8,8,6],"nz":[1,1,0,0,0]}],"alpha":[-1.059083e+00,1.059083e+00,-7.846122e-01,7.846122e-01,-4.451160e-01,4.451160e-01,-4.483277e-01,4.483277e-01,-3.905999e-01,3.905999e-01,-3.789250e-01,3.789250e-01,-3.874610e-01,3.874610e-01,-3.110541e-01,3.110541e-01,-3.565056e-01,3.565056e-01,-3.812617e-01,3.812617e-01,-3.325142e-01,3.325142e-01,-2.787282e-01,2.787282e-01,-3.238869e-01,3.238869e-01,-2.993499e-01,2.993499e-01,-2.807737e-01,2.807737e-01,-2.855285e-01,2.855285e-01,-2.277550e-01,2.277550e-01,-2.031261e-01,2.031261e-01,-2.071574e-01,2.071574e-01,-2.534142e-01,2.534142e-01,-2.266871e-01,2.266871e-01,-2.229078e-01,2.229078e-01,-2.716325e-01,2.716325e-01,-3.046938e-01,3.046938e-01,-2.271601e-01,2.271601e-01,-1.987651e-01,1.987651e-01,-1.953664e-01,1.953664e-01,-2.178737e-01,2.178737e-01,-2.285148e-01,2.285148e-01,-1.891073e-01,1.891073e-01,-2.926469e-01,2.926469e-01,-2.094783e-01,2.094783e-01,-1.478037e-01,1.478037e-01,-1.707579e-01,1.707579e-01,-1.464390e-01,1.464390e-01,-2.462321e-01,2.462321e-01,-2.319978e-01,2.319978e-01,-1.781651e-01,1.781651e-01,-1.471349e-01,1.471349e-01,-1.953006e-01,1.953006e-01,-2.145108e-01,2.145108e-01,-1.567881e-01,1.567881e-01,-2.024617e-01,2.024617e-01,-1.883198e-01,1.883198e-01,-1.996976e-01,1.996976e-01,-1.292330e-01,1.292330e-01,-2.142242e-01,2.142242e-01,-2.473748e-01,2.473748e-01,-1.880902e-01,1.880902e-01,-1.874572e-01,1.874572e-01,-1.495984e-01,1.495984e-01,-1.608525e-01,1.608525e-01,-1.698402e-01,1.698402e-01,-1.898871e-01,1.898871e-01,-1.350238e-01,1.350238e-01,-1.727032e-01,1.727032e-01,-1.593352e-01,1.593352e-01,-1.476968e-01,1.476968e-01,-1.428431e-01,1.428431e-01,-1.766261e-01,1.766261e-01,-1.453226e-01,1.453226e-01,-1.929885e-01,1.929885e-01,-1.337582e-01,1.337582e-01,-1.629078e-01,1.629078e-01,-9.973085e-02,9.973085e-02,-1.172760e-01,1.172760e-01,-1.399242e-01,1.399242e-01,-1.613189e-01,1.613189e-01,-1.145695e-01,1.145695e-01,-1.191093e-01,1.191093e-01,-1.225900e-01,1.225900e-01,-1.641114e-01,1.641114e-01,-1.419878e-01,1.419878e-01,-2.183465e-01,2.183465e-01,-1.566968e-01,1.566968e-01,-1.288216e-01,1.288216e-01,-1.422831e-01,1.422831e-01,-2.000107e-01,2.000107e-01,-1.817265e-01,1.817265e-01,-1.793796e-01,1.793796e-01,-1.428926e-01,1.428926e-01,-1.182032e-01,1.182032e-01,-1.150421e-01,1.150421e-01,-1.336584e-01,1.336584e-01,-1.656178e-01,1.656178e-01,-1.386549e-01,1.386549e-01,-1.387461e-01,1.387461e-01,-1.313023e-01,1.313023e-01,-1.360391e-01,1.360391e-01,-1.305505e-01,1.305505e-01,-1.323399e-01,1.323399e-01,-1.502891e-01,1.502891e-01,-1.488859e-01,1.488859e-01,-1.126628e-01,1.126628e-01,-1.233623e-01,1.233623e-01,-1.702106e-01,1.702106e-01,-1.629639e-01,1.629639e-01,-1.337706e-01,1.337706e-01,-1.290384e-01,1.290384e-01,-1.165519e-01,1.165519e-01,-1.412778e-01,1.412778e-01,-1.470204e-01,1.470204e-01,-2.213780e-01,2.213780e-01,-1.472619e-01,1.472619e-01,-1.357071e-01,1.357071e-01,-1.416513e-01,1.416513e-01,-1.050208e-01,1.050208e-01,-1.480033e-01,1.480033e-01,-1.899871e-01,1.899871e-01,-1.466249e-01,1.466249e-01,-1.076952e-01,1.076952e-01,-1.035096e-01,1.035096e-01,-1.566970e-01,1.566970e-01,-1.364115e-01,1.364115e-01,-1.512889e-01,1.512889e-01,-1.252851e-01,1.252851e-01,-1.206300e-01,1.206300e-01,-1.059134e-01,1.059134e-01,-1.140398e-01,1.140398e-01,-1.359912e-01,1.359912e-01,-1.231201e-01,1.231201e-01,-1.231867e-01,1.231867e-01,-9.789923e-02,9.789923e-02,-1.590213e-01,1.590213e-01,-1.002206e-01,1.002206e-01,-1.518339e-01,1.518339e-01,-1.055203e-01,1.055203e-01,-1.012579e-01,1.012579e-01,-1.094956e-01,1.094956e-01,-1.429592e-01,1.429592e-01,-1.108838e-01,1.108838e-01,-1.116475e-01,1.116475e-01,-1.735371e-01,1.735371e-01,-1.067758e-01,1.067758e-01,-1.290406e-01,1.290406e-01,-1.156822e-01,1.156822e-01,-9.668217e-02,9.668217e-02,-1.170053e-01,1.170053e-01,-1.252092e-01,1.252092e-01,-1.135158e-01,1.135158e-01,-1.105896e-01,1.105896e-01,-1.038175e-01,1.038175e-01,-1.210459e-01,1.210459e-01,-1.078878e-01,1.078878e-01,-1.050808e-01,1.050808e-01,-1.428227e-01,1.428227e-01,-1.664600e-01,1.664600e-01,-1.013508e-01,1.013508e-01,-1.206930e-01,1.206930e-01,-1.088972e-01,1.088972e-01,-1.381026e-01,1.381026e-01,-1.109115e-01,1.109115e-01,-7.921549e-02,7.921549e-02,-1.057832e-01,1.057832e-01,-9.385827e-02,9.385827e-02,-1.486035e-01,1.486035e-01,-1.247401e-01,1.247401e-01,-9.451327e-02,9.451327e-02,-1.272805e-01,1.272805e-01,-9.616206e-02,9.616206e-02,-9.051084e-02,9.051084e-02,-1.138458e-01,1.138458e-01,-1.047581e-01,1.047581e-01,-1.382394e-01,1.382394e-01,-1.122203e-01,1.122203e-01,-1.052936e-01,1.052936e-01,-1.239318e-01,1.239318e-01,-1.241439e-01,1.241439e-01,-1.259012e-01,1.259012e-01,-1.211701e-01,1.211701e-01,-1.344131e-01,1.344131e-01,-1.127778e-01,1.127778e-01,-1.609745e-01,1.609745e-01,-1.901382e-01,1.901382e-01,-1.618962e-01,1.618962e-01,-1.230398e-01,1.230398e-01,-1.319311e-01,1.319311e-01,-1.431410e-01,1.431410e-01,-1.143306e-01,1.143306e-01,-9.390938e-02,9.390938e-02,-1.154161e-01,1.154161e-01,-1.141205e-01,1.141205e-01,-1.098048e-01,1.098048e-01,-8.870072e-02,8.870072e-02,-1.122444e-01,1.122444e-01,-1.114147e-01,1.114147e-01,-1.185710e-01,1.185710e-01,-1.107775e-01,1.107775e-01,-1.259167e-01,1.259167e-01,-1.105176e-01,1.105176e-01,-1.020691e-01,1.020691e-01,-9.607863e-02,9.607863e-02,-9.573700e-02,9.573700e-02,-1.054349e-01,1.054349e-01,-1.137856e-01,1.137856e-01,-1.192043e-01,1.192043e-01,-1.113264e-01,1.113264e-01,-1.093137e-01,1.093137e-01,-1.010919e-01,1.010919e-01,-9.625901e-02,9.625901e-02,-9.338459e-02,9.338459e-02,-1.142944e-01,1.142944e-01,-1.038877e-01,1.038877e-01,-9.772862e-02,9.772862e-02,-1.375298e-01,1.375298e-01,-1.394776e-01,1.394776e-01,-9.454765e-02,9.454765e-02,-1.203246e-01,1.203246e-01,-8.684943e-02,8.684943e-02,-1.135622e-01,1.135622e-01,-1.058181e-01,1.058181e-01,-1.082152e-01,1.082152e-01,-1.411355e-01,1.411355e-01,-9.978846e-02,9.978846e-02,-1.057874e-01,1.057874e-01,-1.415366e-01,1.415366e-01,-9.981014e-02,9.981014e-02,-9.261151e-02,9.261151e-02,-1.737173e-01,1.737173e-01,-1.580335e-01,1.580335e-01,-9.594668e-02,9.594668e-02,-9.336013e-02,9.336013e-02,-1.102373e-01,1.102373e-01,-8.546557e-02,8.546557e-02,-9.945057e-02,9.945057e-02,-1.146358e-01,1.146358e-01,-1.324734e-01,1.324734e-01,-1.422296e-01,1.422296e-01,-9.937990e-02,9.937990e-02,-8.381049e-02,8.381049e-02,-1.270714e-01,1.270714e-01,-1.091738e-01,1.091738e-01,-1.314881e-01,1.314881e-01,-1.085159e-01,1.085159e-01,-9.247554e-02,9.247554e-02,-8.121645e-02,8.121645e-02,-1.059589e-01,1.059589e-01,-8.307793e-02,8.307793e-02,-1.033103e-01,1.033103e-01,-1.056706e-01,1.056706e-01,-1.032803e-01,1.032803e-01,-1.266840e-01,1.266840e-01,-9.341601e-02,9.341601e-02,-7.683570e-02,7.683570e-02,-1.030530e-01,1.030530e-01,-1.051872e-01,1.051872e-01,-9.114946e-02,9.114946e-02,-1.329341e-01,1.329341e-01,-9.270830e-02,9.270830e-02,-1.141750e-01,1.141750e-01,-9.889318e-02,9.889318e-02,-8.856485e-02,8.856485e-02,-1.054210e-01,1.054210e-01,-1.092704e-01,1.092704e-01,-8.729085e-02,8.729085e-02,-1.141057e-01,1.141057e-01,-1.530774e-01,1.530774e-01,-8.129720e-02,8.129720e-02,-1.143335e-01,1.143335e-01,-1.175777e-01,1.175777e-01,-1.371729e-01,1.371729e-01,-1.394356e-01,1.394356e-01,-1.016308e-01,1.016308e-01,-1.125547e-01,1.125547e-01,-9.672600e-02,9.672600e-02,-1.036631e-01,1.036631e-01,-8.702514e-02,8.702514e-02,-1.264807e-01,1.264807e-01,-1.465688e-01,1.465688e-01,-8.781464e-02,8.781464e-02,-8.552605e-02,8.552605e-02,-1.145072e-01,1.145072e-01,-1.378489e-01,1.378489e-01,-1.013312e-01,1.013312e-01,-1.020083e-01,1.020083e-01,-1.015816e-01,1.015816e-01,-8.407101e-02,8.407101e-02,-8.296485e-02,8.296485e-02,-8.033655e-02,8.033655e-02,-9.003615e-02,9.003615e-02,-7.504954e-02,7.504954e-02,-1.224941e-01,1.224941e-01,-9.347814e-02,9.347814e-02,-9.555575e-02,9.555575e-02,-9.810025e-02,9.810025e-02,-1.237068e-01,1.237068e-01,-1.283586e-01,1.283586e-01,-1.082763e-01,1.082763e-01,-1.018145e-01,1.018145e-01,-1.175161e-01,1.175161e-01,-1.252279e-01,1.252279e-01,-1.370559e-01,1.370559e-01,-9.941339e-02,9.941339e-02,-8.506938e-02,8.506938e-02,-1.260902e-01,1.260902e-01,-1.014152e-01,1.014152e-01,-9.728694e-02,9.728694e-02,-9.374910e-02,9.374910e-02,-9.587429e-02,9.587429e-02,-9.516036e-02,9.516036e-02,-7.375173e-02,7.375173e-02,-9.332487e-02,9.332487e-02,-9.020733e-02,9.020733e-02,-1.133381e-01,1.133381e-01,-1.542180e-01,1.542180e-01,-9.692168e-02,9.692168e-02,-7.960904e-02,7.960904e-02,-8.947089e-02,8.947089e-02,-7.830286e-02,7.830286e-02,-9.900050e-02,9.900050e-02,-1.041293e-01,1.041293e-01,-9.572501e-02,9.572501e-02,-8.230575e-02,8.230575e-02,-9.194901e-02,9.194901e-02,-1.076971e-01,1.076971e-01,-1.027782e-01,1.027782e-01,-1.028538e-01,1.028538e-01,-1.013992e-01,1.013992e-01,-9.087585e-02,9.087585e-02,-1.100706e-01,1.100706e-01,-1.094934e-01,1.094934e-01,-1.107879e-01,1.107879e-01,-1.026915e-01,1.026915e-01,-1.017572e-01,1.017572e-01,-7.984776e-02,7.984776e-02,-9.015413e-02,9.015413e-02,-1.299870e-01,1.299870e-01,-9.164982e-02,9.164982e-02,-1.062788e-01,1.062788e-01,-1.160203e-01,1.160203e-01,-8.858603e-02,8.858603e-02,-9.762964e-02,9.762964e-02,-1.070694e-01,1.070694e-01,-9.549046e-02,9.549046e-02,-1.533034e-01,1.533034e-01,-8.663316e-02,8.663316e-02,-9.303018e-02,9.303018e-02,-9.853582e-02,9.853582e-02,-9.733371e-02,9.733371e-02,-1.048555e-01,1.048555e-01,-9.056041e-02,9.056041e-02,-7.552283e-02,7.552283e-02,-8.780631e-02,8.780631e-02,-1.123953e-01,1.123953e-01,-1.452948e-01,1.452948e-01,-1.156423e-01,1.156423e-01,-8.701142e-02,8.701142e-02,-9.713334e-02,9.713334e-02,-9.970888e-02,9.970888e-02,-8.614129e-02,8.614129e-02,-7.459861e-02,7.459861e-02,-9.253517e-02,9.253517e-02,-9.570092e-02,9.570092e-02,-9.485535e-02,9.485535e-02,-1.148365e-01,1.148365e-01,-1.063193e-01,1.063193e-01,-9.986686e-02,9.986686e-02,-7.523412e-02,7.523412e-02,-1.005881e-01,1.005881e-01,-8.249716e-02,8.249716e-02,-1.055866e-01,1.055866e-01,-1.343050e-01,1.343050e-01,-1.371056e-01,1.371056e-01,-9.604689e-02,9.604689e-02,-1.224268e-01,1.224268e-01,-9.211478e-02,9.211478e-02,-1.108371e-01,1.108371e-01,-1.100547e-01,1.100547e-01,-8.938970e-02,8.938970e-02,-8.655951e-02,8.655951e-02,-7.085816e-02,7.085816e-02,-8.101028e-02,8.101028e-02,-8.338046e-02,8.338046e-02,-8.309588e-02,8.309588e-02,-9.090584e-02,9.090584e-02,-8.124564e-02,8.124564e-02,-9.367843e-02,9.367843e-02,-1.011747e-01,1.011747e-01,-9.885045e-02,9.885045e-02,-8.944266e-02,8.944266e-02,-8.453859e-02,8.453859e-02,-8.308847e-02,8.308847e-02,-1.367280e-01,1.367280e-01,-1.295144e-01,1.295144e-01,-1.063965e-01,1.063965e-01,-7.752328e-02,7.752328e-02,-9.681524e-02,9.681524e-02,-7.862345e-02,7.862345e-02,-8.767746e-02,8.767746e-02,-9.198041e-02,9.198041e-02,-9.686489e-02,9.686489e-02]},{"count":564,"threshold":-4.517456e+00,"feature":[{"size":5,"px":[15,9,8,12,11],"py":[3,6,3,0,8],"pz":[0,1,0,0,0],"nx":[6,14,9,22,23],"ny":[8,7,8,17,3],"nz":[1,0,0,0,0]},{"size":5,"px":[12,13,11,14,12],"py":[9,4,4,4,5],"pz":[0,0,0,0,0],"nx":[4,6,10,4,15],"ny":[3,8,7,10,9],"nz":[1,1,0,1,0]},{"size":5,"px":[7,5,6,8,8],"py":[2,13,2,1,1],"pz":[0,0,0,0,-1],"nx":[3,0,4,1,0],"ny":[4,3,10,3,13],"nz":[1,1,1,0,0]},{"size":5,"px":[11,2,2,11,16],"py":[9,4,2,7,11],"pz":[0,2,2,0,0],"nx":[8,4,1,14,0],"ny":[4,4,16,5,13],"nz":[1,1,-1,-1,-1]},{"size":2,"px":[14,14],"py":[18,18],"pz":[0,-1],"nx":[8,13],"ny":[10,16],"nz":[1,0]},{"size":5,"px":[15,17,16,8,18],"py":[1,2,1,0,2],"pz":[0,0,0,1,0],"nx":[21,22,22,22,22],"ny":[1,5,3,4,2],"nz":[0,0,0,0,-1]},{"size":2,"px":[15,4],"py":[23,3],"pz":[0,2],"nx":[7,3],"ny":[10,6],"nz":[1,-1]},{"size":5,"px":[3,6,4,3,11],"py":[10,11,8,3,8],"pz":[1,0,1,1,0],"nx":[3,5,6,3,0],"ny":[4,9,9,9,0],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[11,11,2],"py":[11,13,16],"pz":[0,0,-1],"nx":[10,10,9],"ny":[10,11,14],"nz":[0,0,0]},{"size":2,"px":[8,4],"py":[12,6],"pz":[0,1],"nx":[4,5],"ny":[11,11],"nz":[1,-1]},{"size":5,"px":[10,11,13,3,12],"py":[3,4,3,0,1],"pz":[0,0,0,2,0],"nx":[14,18,20,19,15],"ny":[13,1,15,2,18],"nz":[0,0,0,0,0]},{"size":5,"px":[20,14,10,12,12],"py":[12,12,4,10,11],"pz":[0,0,1,0,0],"nx":[9,2,9,9,9],"ny":[4,12,5,9,14],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[3,3,3,4,2],"py":[15,16,14,21,12],"pz":[0,0,0,0,0],"nx":[0,0,0,0,0],"ny":[20,10,5,21,21],"nz":[0,1,2,0,-1]},{"size":2,"px":[18,8],"py":[16,7],"pz":[0,1],"nx":[14,0],"ny":[8,10],"nz":[0,-1]},{"size":4,"px":[12,4,16,1],"py":[14,3,8,3],"pz":[0,-1,-1,-1],"nx":[14,10,20,13],"ny":[13,5,16,9],"nz":[0,1,0,0]},{"size":5,"px":[3,8,2,3,3],"py":[7,2,1,2,4],"pz":[1,-1,-1,-1,-1],"nx":[1,9,2,1,1],"ny":[3,14,9,7,2],"nz":[1,0,1,1,1]},{"size":5,"px":[4,1,3,2,3],"py":[2,1,2,4,3],"pz":[0,1,0,0,0],"nx":[0,0,0,0,0],"ny":[3,1,2,0,0],"nz":[0,1,0,2,-1]},{"size":4,"px":[4,8,7,9],"py":[6,11,11,10],"pz":[1,0,0,0],"nx":[3,10,2,20],"ny":[4,4,4,8],"nz":[1,-1,-1,-1]},{"size":2,"px":[1,8],"py":[3,11],"pz":[2,-1],"nx":[8,2],"ny":[15,5],"nz":[0,2]},{"size":2,"px":[17,0],"py":[13,10],"pz":[0,-1],"nx":[14,14],"ny":[11,10],"nz":[0,0]},{"size":5,"px":[22,22,22,5,22],"py":[16,18,17,2,15],"pz":[0,0,0,2,0],"nx":[8,4,15,6,6],"ny":[4,2,7,11,11],"nz":[1,2,0,1,-1]},{"size":5,"px":[16,9,8,17,15],"py":[12,6,6,22,12],"pz":[0,1,1,0,0],"nx":[11,23,23,23,22],"ny":[11,23,22,21,23],"nz":[1,0,0,0,-1]},{"size":5,"px":[5,2,4,4,9],"py":[22,3,15,20,18],"pz":[0,2,0,0,0],"nx":[9,4,23,7,22],"ny":[8,4,22,19,23],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[8,6,9,7,3],"py":[3,3,3,3,1],"pz":[0,0,0,0,1],"nx":[5,5,4,4,4],"ny":[0,1,1,2,0],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,3],"py":[3,3],"pz":[2,2],"nx":[3,6],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[1,1,0,1,0],"py":[17,15,6,16,10],"pz":[0,0,1,0,0],"nx":[4,4,7,4,8],"ny":[2,5,9,4,4],"nz":[2,2,1,2,-1]},{"size":5,"px":[12,12,12,13,13],"py":[10,9,11,13,13],"pz":[0,0,0,0,-1],"nx":[4,3,3,5,3],"ny":[21,18,17,23,16],"nz":[0,0,0,0,0]},{"size":4,"px":[5,6,5,9],"py":[13,7,9,23],"pz":[0,0,1,0],"nx":[6,15,7,5],"ny":[9,20,7,23],"nz":[0,-1,-1,-1]},{"size":2,"px":[6,3],"py":[4,2],"pz":[1,2],"nx":[8,23],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[9,7],"py":[18,0],"pz":[0,0],"nx":[5,7],"ny":[8,10],"nz":[1,1]},{"size":2,"px":[4,6],"py":[11,16],"pz":[1,0],"nx":[10,9],"ny":[16,7],"nz":[0,-1]},{"size":4,"px":[11,11,11,11],"py":[11,10,12,13],"pz":[0,0,0,0],"nx":[13,13,13,9],"ny":[11,9,10,4],"nz":[0,0,0,1]},{"size":4,"px":[12,6,7,6],"py":[7,11,8,4],"pz":[0,1,1,1],"nx":[10,0,19,7],"ny":[21,3,12,11],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,4],"py":[3,4],"pz":[2,2],"nx":[9,1],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[19,19],"py":[21,20],"pz":[0,0],"nx":[7,7],"ny":[3,13],"nz":[1,-1]},{"size":5,"px":[12,9,13,11,5],"py":[0,2,2,0,0],"pz":[0,0,0,0,1],"nx":[6,4,5,5,5],"ny":[1,3,5,2,6],"nz":[0,0,1,0,1]},{"size":5,"px":[4,3,2,5,7],"py":[11,3,3,7,17],"pz":[1,2,2,0,0],"nx":[23,5,11,5,5],"ny":[0,4,10,2,6],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[20,17],"py":[12,3],"pz":[0,-1],"nx":[20,19],"ny":[21,23],"nz":[0,0]},{"size":2,"px":[2,1],"py":[12,8],"pz":[0,0],"nx":[2,8],"ny":[2,16],"nz":[2,-1]},{"size":2,"px":[16,5],"py":[4,5],"pz":[0,-1],"nx":[7,8],"ny":[9,1],"nz":[1,1]},{"size":2,"px":[2,2],"py":[0,1],"pz":[1,1],"nx":[1,8],"ny":[5,1],"nz":[0,-1]},{"size":2,"px":[1,1],"py":[12,10],"pz":[0,1],"nx":[2,20],"ny":[23,9],"nz":[0,-1]},{"size":4,"px":[11,0,0,2],"py":[14,3,9,22],"pz":[0,-1,-1,-1],"nx":[13,14,7,3],"ny":[6,7,11,1],"nz":[0,0,0,2]},{"size":2,"px":[14,0],"py":[2,3],"pz":[0,-1],"nx":[4,4],"ny":[4,3],"nz":[2,2]},{"size":2,"px":[23,11],"py":[18,11],"pz":[0,1],"nx":[3,2],"ny":[1,21],"nz":[1,-1]},{"size":2,"px":[9,9],"py":[17,14],"pz":[0,-1],"nx":[4,5],"ny":[10,8],"nz":[1,1]},{"size":2,"px":[9,18],"py":[7,14],"pz":[1,0],"nx":[18,9],"ny":[17,8],"nz":[0,-1]},{"size":2,"px":[2,8],"py":[4,22],"pz":[2,0],"nx":[4,3],"ny":[10,1],"nz":[1,-1]},{"size":2,"px":[5,22],"py":[4,9],"pz":[2,-1],"nx":[11,23],"ny":[8,14],"nz":[1,0]},{"size":3,"px":[23,5,5],"py":[8,2,1],"pz":[0,2,2],"nx":[10,10,2],"ny":[4,4,2],"nz":[1,-1,-1]},{"size":2,"px":[11,11],"py":[14,23],"pz":[0,-1],"nx":[3,11],"ny":[4,13],"nz":[1,0]},{"size":2,"px":[3,2],"py":[7,0],"pz":[1,-1],"nx":[4,3],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[12,1],"py":[19,13],"pz":[0,-1],"nx":[9,12],"ny":[10,18],"nz":[1,0]},{"size":2,"px":[10,10],"py":[11,10],"pz":[1,1],"nx":[4,1],"ny":[5,11],"nz":[2,-1]},{"size":5,"px":[9,12,4,8,8],"py":[3,5,2,9,8],"pz":[1,0,2,1,1],"nx":[23,23,23,23,23],"ny":[3,4,6,5,5],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,9],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[13,13,13,7,7],"py":[11,10,9,6,6],"pz":[0,0,0,1,-1],"nx":[5,5,15,5,2],"ny":[5,15,9,9,1],"nz":[0,0,0,1,2]},{"size":2,"px":[19,7],"py":[21,7],"pz":[0,1],"nx":[14,10],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[5,5],"py":[3,4],"pz":[2,2],"nx":[21,0],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[2,0],"py":[0,0],"pz":[1,-1],"nx":[3,2],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[9,0],"py":[4,0],"pz":[0,-1],"nx":[5,12],"ny":[0,1],"nz":[1,0]},{"size":5,"px":[14,16,12,15,13],"py":[0,1,0,0,0],"pz":[0,0,0,0,0],"nx":[4,8,8,4,9],"ny":[2,3,4,1,3],"nz":[2,1,1,2,-1]},{"size":3,"px":[4,17,2],"py":[11,14,1],"pz":[1,-1,-1],"nx":[9,8,17],"ny":[1,4,0],"nz":[1,1,0]},{"size":2,"px":[18,9],"py":[17,7],"pz":[0,1],"nx":[8,4],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[3,0],"pz":[1,2],"nx":[10,11],"ny":[6,5],"nz":[1,-1]},{"size":5,"px":[21,21,21,21,20],"py":[17,16,19,18,21],"pz":[0,0,0,0,0],"nx":[0,0,0,0,0],"ny":[4,9,11,6,6],"nz":[1,0,0,1,-1]},{"size":2,"px":[12,0],"py":[7,1],"pz":[0,-1],"nx":[8,11],"ny":[4,17],"nz":[1,0]},{"size":4,"px":[13,0,0,0],"py":[15,0,0,0],"pz":[0,-1,-1,-1],"nx":[3,7,4,6],"ny":[2,7,5,9],"nz":[2,1,2,1]},{"size":2,"px":[2,9],"py":[3,12],"pz":[2,0],"nx":[2,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[10,3],"py":[6,1],"pz":[1,-1],"nx":[20,21],"ny":[19,14],"nz":[0,0]},{"size":5,"px":[5,22,22,11,22],"py":[1,4,3,3,2],"pz":[2,0,0,1,-1],"nx":[7,13,14,8,15],"ny":[3,6,6,3,7],"nz":[1,0,0,1,0]},{"size":2,"px":[12,19],"py":[5,15],"pz":[0,-1],"nx":[16,4],"ny":[8,2],"nz":[0,2]},{"size":2,"px":[1,0],"py":[11,9],"pz":[1,1],"nx":[5,0],"ny":[3,3],"nz":[1,-1]},{"size":4,"px":[8,3,4,2],"py":[6,7,5,3],"pz":[1,-1,-1,-1],"nx":[13,14,11,11],"ny":[11,13,3,5],"nz":[0,0,1,1]},{"size":2,"px":[11,11],"py":[5,6],"pz":[0,0],"nx":[8,4],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[5,9],"py":[6,17],"pz":[1,0],"nx":[9,4],"ny":[15,11],"nz":[0,-1]},{"size":3,"px":[6,3,6],"py":[6,3,5],"pz":[1,2,1],"nx":[11,10,4],"ny":[8,11,5],"nz":[0,0,-1]},{"size":2,"px":[8,16],"py":[0,1],"pz":[1,-1],"nx":[19,17],"ny":[1,0],"nz":[0,0]},{"size":2,"px":[21,20],"py":[4,1],"pz":[0,0],"nx":[11,5],"ny":[0,0],"nz":[1,2]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[8,9],"ny":[4,10],"nz":[1,-1]},{"size":2,"px":[10,1],"py":[0,0],"pz":[1,-1],"nx":[13,12],"ny":[6,5],"nz":[0,0]},{"size":2,"px":[5,4],"py":[3,11],"pz":[1,-1],"nx":[3,17],"ny":[1,3],"nz":[2,0]},{"size":2,"px":[12,13],"py":[4,4],"pz":[0,0],"nx":[3,3],"ny":[1,1],"nz":[2,-1]},{"size":2,"px":[3,18],"py":[2,7],"pz":[2,0],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[16,6],"py":[8,2],"pz":[0,1],"nx":[8,9],"ny":[4,19],"nz":[1,-1]},{"size":3,"px":[12,3,14],"py":[13,3,15],"pz":[0,-1,-1],"nx":[0,1,0],"ny":[16,18,15],"nz":[0,0,0]},{"size":2,"px":[3,1],"py":[3,4],"pz":[2,-1],"nx":[7,14],"ny":[10,14],"nz":[1,0]},{"size":2,"px":[9,16],"py":[6,10],"pz":[1,0],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[7,11],"py":[4,4],"pz":[0,0],"nx":[7,23],"ny":[3,11],"nz":[0,-1]},{"size":5,"px":[2,4,3,4,4],"py":[1,2,0,1,1],"pz":[1,0,1,0,-1],"nx":[11,9,4,9,5],"ny":[6,5,3,6,3],"nz":[0,0,1,0,1]},{"size":2,"px":[6,0],"py":[14,1],"pz":[0,-1],"nx":[2,5],"ny":[2,9],"nz":[2,1]},{"size":2,"px":[6,7],"py":[7,12],"pz":[0,0],"nx":[3,22],"ny":[3,16],"nz":[1,-1]},{"size":2,"px":[10,4],"py":[1,1],"pz":[0,1],"nx":[2,6],"ny":[2,21],"nz":[2,-1]},{"size":2,"px":[13,1],"py":[11,6],"pz":[0,-1],"nx":[12,6],"ny":[5,2],"nz":[0,1]},{"size":5,"px":[10,5,11,10,10],"py":[4,3,4,6,5],"pz":[0,1,0,0,0],"nx":[4,7,13,8,4],"ny":[2,8,9,4,4],"nz":[2,1,0,1,-1]},{"size":4,"px":[7,8,7,8],"py":[11,3,4,7],"pz":[1,1,1,1],"nx":[0,7,3,8],"ny":[0,12,2,4],"nz":[0,-1,-1,-1]},{"size":2,"px":[0,0],"py":[4,7],"pz":[2,1],"nx":[10,1],"ny":[7,0],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[19,5],"pz":[0,-1],"nx":[11,5],"ny":[17,10],"nz":[0,1]},{"size":2,"px":[11,12],"py":[4,4],"pz":[0,0],"nx":[7,5],"ny":[8,3],"nz":[0,-1]},{"size":3,"px":[4,8,4],"py":[2,9,4],"pz":[2,1,2],"nx":[3,19,3],"ny":[1,16,5],"nz":[1,-1,-1]},{"size":2,"px":[3,7],"py":[0,1],"pz":[1,0],"nx":[2,3],"ny":[15,2],"nz":[0,-1]},{"size":2,"px":[0,4],"py":[2,0],"pz":[2,-1],"nx":[9,16],"ny":[5,11],"nz":[1,0]},{"size":2,"px":[14,15],"py":[23,16],"pz":[0,0],"nx":[13,3],"ny":[15,1],"nz":[0,-1]},{"size":2,"px":[4,3],"py":[0,1],"pz":[1,-1],"nx":[3,7],"ny":[0,0],"nz":[1,0]},{"size":2,"px":[7,6],"py":[12,12],"pz":[0,0],"nx":[4,8],"ny":[5,4],"nz":[1,-1]},{"size":5,"px":[4,1,2,4,5],"py":[1,0,0,0,6],"pz":[0,2,1,0,1],"nx":[4,8,7,8,6],"ny":[4,10,11,4,4],"nz":[1,0,0,1,1]},{"size":2,"px":[12,12],"py":[15,8],"pz":[0,-1],"nx":[7,15],"ny":[16,14],"nz":[0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[4,6],"ny":[2,8],"nz":[2,-1]},{"size":2,"px":[14,4],"py":[19,23],"pz":[0,-1],"nx":[7,14],"ny":[11,18],"nz":[1,0]},{"size":2,"px":[4,2],"py":[7,4],"pz":[1,2],"nx":[2,22],"ny":[5,19],"nz":[2,-1]},{"size":2,"px":[8,15],"py":[7,17],"pz":[1,0],"nx":[14,4],"ny":[15,5],"nz":[0,2]},{"size":2,"px":[10,11],"py":[9,8],"pz":[1,-1],"nx":[23,5],"ny":[19,4],"nz":[0,2]},{"size":2,"px":[11,1],"py":[7,9],"pz":[0,-1],"nx":[4,4],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[14,7],"py":[6,9],"pz":[0,0],"nx":[4,11],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[5,4],"py":[0,5],"pz":[0,-1],"nx":[2,2],"ny":[0,4],"nz":[1,0]},{"size":2,"px":[10,22],"py":[5,20],"pz":[0,-1],"nx":[3,4],"ny":[1,2],"nz":[2,2]},{"size":3,"px":[23,11,11],"py":[17,9,8],"pz":[0,1,1],"nx":[13,8,8],"ny":[5,3,3],"nz":[0,1,-1]},{"size":2,"px":[18,9],"py":[0,21],"pz":[0,-1],"nx":[10,10],"ny":[2,1],"nz":[1,1]},{"size":5,"px":[11,10,11,11,11],"py":[11,13,10,12,12],"pz":[0,0,0,0,-1],"nx":[11,13,12,3,8],"ny":[5,5,5,1,10],"nz":[0,0,0,2,0]},{"size":2,"px":[7,8],"py":[11,11],"pz":[0,0],"nx":[9,16],"ny":[9,19],"nz":[0,-1]},{"size":2,"px":[9,18],"py":[23,7],"pz":[0,-1],"nx":[21,21],"ny":[7,13],"nz":[0,0]},{"size":2,"px":[8,8],"py":[7,8],"pz":[1,1],"nx":[5,21],"ny":[9,13],"nz":[1,-1]},{"size":2,"px":[17,8],"py":[22,8],"pz":[0,-1],"nx":[4,8],"ny":[5,10],"nz":[2,1]},{"size":5,"px":[2,5,8,8,4],"py":[3,9,13,23,7],"pz":[2,1,0,0,1],"nx":[9,17,18,19,20],"ny":[0,0,0,2,3],"nz":[1,0,0,0,0]},{"size":3,"px":[16,15,2],"py":[3,3,13],"pz":[0,0,-1],"nx":[4,8,4],"ny":[3,6,2],"nz":[2,1,2]},{"size":2,"px":[4,7],"py":[3,7],"pz":[2,1],"nx":[15,1],"ny":[15,0],"nz":[0,-1]},{"size":2,"px":[3,6],"py":[2,3],"pz":[2,1],"nx":[3,18],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[2,4],"py":[2,4],"pz":[2,1],"nx":[3,0],"ny":[5,0],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[10,0],"pz":[0,-1],"nx":[9,4],"ny":[2,0],"nz":[1,2]},{"size":2,"px":[2,0],"py":[8,3],"pz":[1,-1],"nx":[4,8],"ny":[4,14],"nz":[1,0]},{"size":2,"px":[13,18],"py":[14,14],"pz":[0,-1],"nx":[1,1],"ny":[15,13],"nz":[0,0]},{"size":3,"px":[3,2,2],"py":[17,10,15],"pz":[0,1,0],"nx":[13,2,7],"ny":[19,11,0],"nz":[0,-1,-1]},{"size":2,"px":[4,17],"py":[0,2],"pz":[2,0],"nx":[8,5],"ny":[11,3],"nz":[1,-1]},{"size":2,"px":[15,21],"py":[5,4],"pz":[0,-1],"nx":[15,10],"ny":[3,0],"nz":[0,1]},{"size":2,"px":[7,3],"py":[13,8],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[7,22],"py":[3,4],"pz":[1,-1],"nx":[4,2],"ny":[2,3],"nz":[1,1]},{"size":4,"px":[6,2,6,5],"py":[21,10,22,20],"pz":[0,1,0,0],"nx":[2,3,4,4],"ny":[11,21,23,23],"nz":[1,0,0,-1]},{"size":2,"px":[7,2],"py":[6,8],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":4,"px":[11,11,5,11],"py":[6,5,2,4],"pz":[1,1,2,1],"nx":[13,7,8,3],"ny":[7,3,5,2],"nz":[0,1,-1,-1]},{"size":2,"px":[3,3],"py":[7,8],"pz":[1,0],"nx":[3,11],"ny":[4,2],"nz":[1,-1]},{"size":3,"px":[16,1,5],"py":[3,3,11],"pz":[0,-1,-1],"nx":[16,4,8],"ny":[2,0,1],"nz":[0,2,1]},{"size":2,"px":[10,0],"py":[8,1],"pz":[0,-1],"nx":[19,18],"ny":[20,23],"nz":[0,0]},{"size":2,"px":[17,4],"py":[10,4],"pz":[0,-1],"nx":[4,14],"ny":[2,9],"nz":[2,0]},{"size":5,"px":[11,12,9,10,11],"py":[2,3,2,2,3],"pz":[0,0,0,0,0],"nx":[6,4,2,2,2],"ny":[18,9,3,2,2],"nz":[0,1,2,2,-1]},{"size":2,"px":[0,1],"py":[6,16],"pz":[1,0],"nx":[8,16],"ny":[5,16],"nz":[0,-1]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[8,17],"ny":[4,9],"nz":[1,-1]},{"size":3,"px":[2,5,2],"py":[5,6,4],"pz":[1,-1,-1],"nx":[0,0,0],"ny":[3,5,6],"nz":[2,1,1]},{"size":5,"px":[0,0,0,0,0],"py":[6,15,16,13,14],"pz":[1,0,0,0,0],"nx":[4,5,8,6,8],"ny":[4,16,8,15,4],"nz":[1,0,0,0,-1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,5],"ny":[4,16],"nz":[1,-1]},{"size":5,"px":[21,19,21,21,21],"py":[17,23,18,19,20],"pz":[0,0,0,0,0],"nx":[5,2,3,6,6],"ny":[12,5,5,12,12],"nz":[0,1,1,0,-1]},{"size":2,"px":[5,2],"py":[11,1],"pz":[1,-1],"nx":[5,11],"ny":[3,5],"nz":[2,1]},{"size":2,"px":[10,5],"py":[5,3],"pz":[0,1],"nx":[6,15],"ny":[11,5],"nz":[1,-1]},{"size":2,"px":[6,2],"py":[4,2],"pz":[1,-1],"nx":[4,3],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[10,6],"py":[20,6],"pz":[0,-1],"nx":[5,10],"ny":[11,17],"nz":[1,0]},{"size":4,"px":[8,4,7,11],"py":[7,4,5,8],"pz":[1,2,1,0],"nx":[13,10,5,21],"ny":[9,3,5,4],"nz":[0,-1,-1,-1]},{"size":2,"px":[7,13],"py":[10,7],"pz":[0,0],"nx":[10,8],"ny":[9,18],"nz":[0,-1]},{"size":2,"px":[3,3],"py":[1,0],"pz":[2,2],"nx":[8,5],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[5,2,5,8,4],"py":[8,4,14,23,7],"pz":[1,2,0,0,1],"nx":[18,4,16,17,17],"ny":[1,0,0,1,1],"nz":[0,2,0,0,-1]},{"size":2,"px":[6,2],"py":[2,4],"pz":[1,-1],"nx":[8,8],"ny":[4,3],"nz":[1,1]},{"size":2,"px":[6,1],"py":[8,15],"pz":[0,-1],"nx":[8,3],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,1],"py":[7,2],"pz":[1,-1],"nx":[6,6],"ny":[9,4],"nz":[1,1]},{"size":2,"px":[4,1],"py":[6,2],"pz":[1,-1],"nx":[1,10],"ny":[16,12],"nz":[0,0]},{"size":2,"px":[8,4],"py":[7,2],"pz":[1,-1],"nx":[8,9],"ny":[8,10],"nz":[1,1]},{"size":5,"px":[4,8,7,6,6],"py":[0,0,0,1,1],"pz":[1,0,0,0,-1],"nx":[11,5,8,4,10],"ny":[5,3,4,4,5],"nz":[0,1,1,1,0]},{"size":2,"px":[5,6],"py":[8,5],"pz":[0,0],"nx":[6,6],"ny":[8,3],"nz":[0,-1]},{"size":2,"px":[18,5],"py":[19,5],"pz":[0,-1],"nx":[4,21],"ny":[5,19],"nz":[2,0]},{"size":2,"px":[9,5],"py":[13,6],"pz":[0,1],"nx":[2,2],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[10,4],"py":[17,6],"pz":[0,1],"nx":[10,2],"ny":[15,4],"nz":[0,-1]},{"size":3,"px":[13,13,19],"py":[11,12,8],"pz":[0,0,-1],"nx":[12,3,8],"ny":[4,1,4],"nz":[0,2,1]},{"size":3,"px":[11,7,4],"py":[5,2,1],"pz":[0,-1,-1],"nx":[9,2,4],"ny":[11,3,6],"nz":[0,2,1]},{"size":2,"px":[10,7],"py":[15,2],"pz":[0,-1],"nx":[4,4],"ny":[0,1],"nz":[2,2]},{"size":5,"px":[8,9,16,18,18],"py":[0,1,1,1,1],"pz":[1,1,0,0,-1],"nx":[5,5,6,4,4],"ny":[21,20,23,17,18],"nz":[0,0,0,0,0]},{"size":2,"px":[6,7],"py":[1,1],"pz":[1,1],"nx":[20,19],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[2,2],"py":[10,11],"pz":[1,1],"nx":[3,3],"ny":[10,10],"nz":[1,-1]},{"size":2,"px":[9,5],"py":[23,1],"pz":[0,-1],"nx":[4,3],"ny":[10,4],"nz":[1,1]},{"size":2,"px":[1,10],"py":[4,7],"pz":[2,-1],"nx":[4,3],"ny":[23,21],"nz":[0,0]},{"size":2,"px":[10,21],"py":[11,18],"pz":[1,0],"nx":[10,4],"ny":[18,1],"nz":[0,-1]},{"size":2,"px":[11,23],"py":[11,15],"pz":[0,-1],"nx":[11,11],"ny":[7,9],"nz":[1,1]},{"size":2,"px":[10,1],"py":[7,7],"pz":[1,-1],"nx":[15,4],"ny":[14,4],"nz":[0,2]},{"size":2,"px":[1,2],"py":[9,20],"pz":[1,0],"nx":[21,3],"ny":[12,20],"nz":[0,-1]},{"size":2,"px":[7,4],"py":[0,0],"pz":[1,2],"nx":[4,2],"ny":[0,19],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[5,1],"py":[5,0],"pz":[1,-1],"nx":[12,10],"ny":[11,4],"nz":[0,1]},{"size":2,"px":[11,12],"py":[11,14],"pz":[1,-1],"nx":[18,16],"ny":[21,15],"nz":[0,0]},{"size":2,"px":[3,18],"py":[1,5],"pz":[2,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[9,10],"py":[18,7],"pz":[0,-1],"nx":[3,6],"ny":[0,0],"nz":[2,1]},{"size":2,"px":[19,2],"py":[1,4],"pz":[0,-1],"nx":[22,22],"ny":[13,15],"nz":[0,0]},{"size":3,"px":[13,15,20],"py":[14,21,10],"pz":[0,-1,-1],"nx":[15,7,7],"ny":[13,6,8],"nz":[0,1,1]},{"size":2,"px":[9,9],"py":[6,7],"pz":[1,1],"nx":[8,7],"ny":[4,8],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,3],"pz":[1,2],"nx":[5,10],"ny":[2,9],"nz":[1,-1]},{"size":2,"px":[14,11],"py":[7,16],"pz":[0,-1],"nx":[1,0],"ny":[17,4],"nz":[0,2]},{"size":2,"px":[14,18],"py":[17,18],"pz":[0,-1],"nx":[8,14],"ny":[10,16],"nz":[1,0]},{"size":2,"px":[6,11],"py":[13,11],"pz":[0,-1],"nx":[8,9],"ny":[12,9],"nz":[0,0]},{"size":2,"px":[8,9],"py":[2,2],"pz":[0,0],"nx":[3,3],"ny":[2,2],"nz":[2,-1]},{"size":3,"px":[21,21,21],"py":[14,16,15],"pz":[0,0,0],"nx":[14,12,0],"ny":[5,12,6],"nz":[0,-1,-1]},{"size":2,"px":[4,21],"py":[6,15],"pz":[1,-1],"nx":[5,1],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[8,0],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[13,2],"py":[9,1],"pz":[0,-1],"nx":[3,5],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[16,1],"py":[5,4],"pz":[0,-1],"nx":[17,8],"ny":[3,2],"nz":[0,1]},{"size":2,"px":[9,2],"py":[7,1],"pz":[1,-1],"nx":[20,20],"ny":[17,16],"nz":[0,0]},{"size":2,"px":[5,7],"py":[3,6],"pz":[2,-1],"nx":[9,9],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[11,17],"py":[4,1],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[15,2],"py":[11,0],"pz":[0,-1],"nx":[5,14],"ny":[1,12],"nz":[2,0]},{"size":2,"px":[22,19],"py":[3,0],"pz":[0,-1],"nx":[9,4],"ny":[6,4],"nz":[1,1]},{"size":2,"px":[1,22],"py":[3,21],"pz":[0,-1],"nx":[0,0],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[11,11],"py":[11,12],"pz":[0,0],"nx":[1,2],"ny":[1,4],"nz":[2,-1]},{"size":2,"px":[18,3],"py":[8,1],"pz":[0,2],"nx":[13,1],"ny":[8,5],"nz":[0,-1]},{"size":2,"px":[13,6],"py":[21,3],"pz":[0,-1],"nx":[11,11],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[15,14],"py":[4,4],"pz":[0,0],"nx":[17,1],"ny":[12,5],"nz":[0,-1]},{"size":2,"px":[11,3],"py":[12,1],"pz":[0,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[3,2],"py":[7,3],"pz":[0,1],"nx":[16,2],"ny":[3,5],"nz":[0,-1]},{"size":2,"px":[10,5],"py":[7,20],"pz":[1,-1],"nx":[9,8],"ny":[4,6],"nz":[1,1]},{"size":2,"px":[19,2],"py":[10,2],"pz":[0,-1],"nx":[9,4],"ny":[3,1],"nz":[1,2]},{"size":2,"px":[14,9],"py":[0,23],"pz":[0,-1],"nx":[4,4],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[6,9],"py":[4,10],"pz":[1,0],"nx":[10,9],"ny":[9,0],"nz":[0,-1]},{"size":4,"px":[6,9,10,8],"py":[20,23,18,23],"pz":[0,0,0,0],"nx":[9,22,1,2],"ny":[21,14,2,5],"nz":[0,-1,-1,-1]},{"size":2,"px":[17,18],"py":[13,6],"pz":[0,-1],"nx":[6,7],"ny":[9,11],"nz":[1,1]},{"size":5,"px":[18,19,20,19,20],"py":[15,19,16,20,17],"pz":[0,0,0,0,0],"nx":[11,22,23,23,23],"ny":[10,22,20,19,19],"nz":[1,0,0,0,-1]},{"size":2,"px":[10,10],"py":[1,0],"pz":[1,1],"nx":[21,11],"ny":[0,4],"nz":[0,-1]},{"size":2,"px":[11,0],"py":[9,3],"pz":[0,-1],"nx":[9,4],"ny":[2,1],"nz":[1,2]},{"size":2,"px":[14,23],"py":[2,18],"pz":[0,-1],"nx":[15,18],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[9,3],"py":[0,0],"pz":[1,-1],"nx":[3,12],"ny":[1,5],"nz":[2,0]},{"size":2,"px":[8,8],"py":[7,8],"pz":[1,1],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[1,0],"py":[1,3],"pz":[2,-1],"nx":[7,19],"ny":[9,15],"nz":[1,0]},{"size":3,"px":[16,6,4],"py":[21,5,4],"pz":[0,-1,-1],"nx":[4,19,8],"ny":[5,21,11],"nz":[2,0,1]},{"size":2,"px":[5,5],"py":[6,6],"pz":[1,-1],"nx":[10,10],"ny":[10,12],"nz":[0,0]},{"size":2,"px":[6,11],"py":[2,5],"pz":[1,0],"nx":[3,4],"ny":[4,7],"nz":[1,-1]},{"size":3,"px":[8,6,2],"py":[4,10,2],"pz":[1,1,2],"nx":[2,18,5],"ny":[0,11,5],"nz":[0,-1,-1]},{"size":2,"px":[11,7],"py":[9,7],"pz":[0,-1],"nx":[12,3],"ny":[9,5],"nz":[0,1]},{"size":2,"px":[14,13],"py":[20,20],"pz":[0,0],"nx":[13,3],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[13,7],"py":[5,3],"pz":[0,-1],"nx":[3,4],"ny":[1,4],"nz":[2,1]},{"size":2,"px":[6,2],"py":[21,5],"pz":[0,-1],"nx":[2,3],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[23,5],"py":[6,0],"pz":[0,2],"nx":[21,4],"ny":[6,1],"nz":[0,-1]},{"size":2,"px":[9,9],"py":[7,6],"pz":[1,1],"nx":[8,2],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[22,11],"py":[20,9],"pz":[0,1],"nx":[8,8],"ny":[10,10],"nz":[1,-1]},{"size":2,"px":[8,16],"py":[21,12],"pz":[0,-1],"nx":[2,7],"ny":[5,23],"nz":[2,0]},{"size":5,"px":[0,1,1,1,1],"py":[3,1,9,4,7],"pz":[2,2,1,1,1],"nx":[11,22,22,23,23],"ny":[10,21,22,19,20],"nz":[1,0,0,0,-1]},{"size":2,"px":[17,5],"py":[12,4],"pz":[0,-1],"nx":[8,8],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[16,4],"py":[7,10],"pz":[0,-1],"nx":[9,15],"ny":[4,6],"nz":[1,0]},{"size":2,"px":[3,6],"py":[3,5],"pz":[2,1],"nx":[11,12],"ny":[11,23],"nz":[0,-1]},{"size":2,"px":[5,2],"py":[14,7],"pz":[0,1],"nx":[4,17],"ny":[18,16],"nz":[0,-1]},{"size":3,"px":[10,1,1],"py":[12,5,4],"pz":[0,-1,-1],"nx":[7,11,5],"ny":[1,2,1],"nz":[1,0,1]},{"size":2,"px":[7,6],"py":[3,9],"pz":[0,-1],"nx":[2,2],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[13,6],"py":[22,9],"pz":[0,-1],"nx":[8,4],"ny":[4,3],"nz":[1,2]},{"size":5,"px":[12,9,10,11,11],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[16,5,10,4,8],"ny":[10,3,6,4,4],"nz":[0,1,0,1,1]},{"size":2,"px":[18,19],"py":[23,20],"pz":[0,0],"nx":[8,5],"ny":[11,3],"nz":[1,-1]},{"size":2,"px":[8,3],"py":[7,2],"pz":[1,2],"nx":[8,4],"ny":[4,3],"nz":[1,-1]},{"size":5,"px":[8,14,8,7,4],"py":[6,12,8,6,3],"pz":[1,0,1,1,2],"nx":[2,6,6,7,7],"ny":[0,1,2,0,0],"nz":[2,0,0,0,-1]},{"size":3,"px":[1,2,3],"py":[15,18,21],"pz":[0,0,0],"nx":[19,5,18],"ny":[23,5,8],"nz":[0,-1,-1]},{"size":2,"px":[6,2],"py":[6,1],"pz":[1,-1],"nx":[0,0],"ny":[12,4],"nz":[0,1]},{"size":2,"px":[3,5],"py":[5,11],"pz":[2,1],"nx":[14,5],"ny":[19,5],"nz":[0,-1]},{"size":2,"px":[10,4],"py":[4,4],"pz":[1,-1],"nx":[11,5],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[18,4],"py":[6,4],"pz":[0,-1],"nx":[4,8],"ny":[5,4],"nz":[1,1]},{"size":2,"px":[6,12],"py":[2,4],"pz":[1,0],"nx":[8,8],"ny":[3,4],"nz":[1,-1]},{"size":2,"px":[1,0],"py":[1,1],"pz":[1,2],"nx":[7,2],"ny":[4,7],"nz":[0,-1]},{"size":2,"px":[8,0],"py":[20,0],"pz":[0,-1],"nx":[4,5],"ny":[10,11],"nz":[1,1]},{"size":2,"px":[6,14],"py":[5,2],"pz":[1,-1],"nx":[0,0],"ny":[0,2],"nz":[1,0]},{"size":2,"px":[5,15],"py":[4,7],"pz":[1,-1],"nx":[4,7],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[7,5],"py":[2,1],"pz":[0,1],"nx":[3,1],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[8,9],"py":[4,2],"pz":[0,-1],"nx":[11,9],"ny":[1,3],"nz":[0,0]},{"size":2,"px":[6,3],"py":[2,4],"pz":[1,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[3,7],"py":[3,7],"pz":[2,1],"nx":[6,8],"ny":[14,4],"nz":[0,-1]},{"size":2,"px":[3,0],"py":[21,3],"pz":[0,2],"nx":[20,8],"ny":[10,4],"nz":[0,-1]},{"size":2,"px":[6,3],"py":[5,8],"pz":[0,-1],"nx":[4,3],"ny":[4,2],"nz":[0,1]},{"size":2,"px":[3,6],"py":[7,13],"pz":[1,0],"nx":[3,2],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[16,10],"py":[9,7],"pz":[0,1],"nx":[7,9],"ny":[3,10],"nz":[1,-1]},{"size":2,"px":[13,10],"py":[6,7],"pz":[0,-1],"nx":[8,17],"ny":[4,12],"nz":[1,0]},{"size":2,"px":[5,10],"py":[4,10],"pz":[2,1],"nx":[5,4],"ny":[9,2],"nz":[1,-1]},{"size":4,"px":[15,3,5,0],"py":[12,4,2,3],"pz":[0,-1,-1,-1],"nx":[13,7,5,7],"ny":[12,6,0,7],"nz":[0,1,2,1]},{"size":4,"px":[2,3,16,17],"py":[3,4,6,6],"pz":[2,1,0,0],"nx":[16,16,8,16],"ny":[8,3,10,13],"nz":[0,-1,-1,-1]},{"size":2,"px":[16,8],"py":[1,4],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[9,14],"py":[6,2],"pz":[1,-1],"nx":[8,8],"ny":[6,4],"nz":[1,1]},{"size":2,"px":[8,4],"py":[10,4],"pz":[1,2],"nx":[10,0],"ny":[5,7],"nz":[1,-1]},{"size":2,"px":[9,10],"py":[4,4],"pz":[0,0],"nx":[9,7],"ny":[3,5],"nz":[0,-1]},{"size":5,"px":[11,10,13,6,12],"py":[2,2,2,1,2],"pz":[0,0,0,1,0],"nx":[4,18,18,13,13],"ny":[2,18,19,7,7],"nz":[2,0,0,0,-1]},{"size":4,"px":[13,13,13,2],"py":[13,12,11,3],"pz":[0,0,0,-1],"nx":[4,6,8,11],"ny":[2,2,4,4],"nz":[2,1,1,0]},{"size":2,"px":[4,7],"py":[6,13],"pz":[1,0],"nx":[8,10],"ny":[4,22],"nz":[1,-1]},{"size":2,"px":[0,7],"py":[4,17],"pz":[1,-1],"nx":[0,1],"ny":[5,21],"nz":[2,0]},{"size":2,"px":[12,13],"py":[22,22],"pz":[0,0],"nx":[2,2],"ny":[13,13],"nz":[0,-1]},{"size":3,"px":[4,4,3],"py":[22,23,19],"pz":[0,0,0],"nx":[8,12,3],"ny":[22,15,2],"nz":[0,-1,-1]},{"size":2,"px":[10,12],"py":[3,13],"pz":[0,-1],"nx":[15,2],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[1,1],"py":[3,3],"pz":[2,-1],"nx":[8,4],"ny":[0,0],"nz":[1,2]},{"size":2,"px":[6,12],"py":[6,18],"pz":[1,0],"nx":[12,19],"ny":[17,16],"nz":[0,-1]},{"size":2,"px":[10,5],"py":[2,1],"pz":[0,1],"nx":[5,4],"ny":[4,17],"nz":[0,-1]},{"size":3,"px":[3,12,11],"py":[5,23,23],"pz":[2,0,0],"nx":[12,4,4],"ny":[21,17,1],"nz":[0,-1,-1]},{"size":2,"px":[12,0],"py":[21,5],"pz":[0,-1],"nx":[0,0],"ny":[7,9],"nz":[1,1]},{"size":2,"px":[17,17],"py":[12,11],"pz":[0,0],"nx":[8,11],"ny":[4,11],"nz":[1,-1]},{"size":2,"px":[11,0],"py":[22,1],"pz":[0,-1],"nx":[4,6],"ny":[1,0],"nz":[1,1]},{"size":2,"px":[11,11],"py":[9,5],"pz":[1,1],"nx":[23,11],"ny":[23,20],"nz":[0,-1]},{"size":5,"px":[4,12,11,9,8],"py":[0,1,1,0,1],"pz":[1,0,0,0,0],"nx":[4,17,8,7,7],"ny":[2,13,4,4,4],"nz":[2,0,1,1,-1]},{"size":2,"px":[11,13],"py":[12,12],"pz":[0,-1],"nx":[1,1],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[23,4],"py":[23,2],"pz":[0,-1],"nx":[5,2],"ny":[23,6],"nz":[0,1]},{"size":3,"px":[8,16,0],"py":[5,15,6],"pz":[1,-1,-1],"nx":[23,23,11],"ny":[18,17,8],"nz":[0,0,1]},{"size":2,"px":[1,16],"py":[4,15],"pz":[2,-1],"nx":[2,2],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[3,8],"py":[7,9],"pz":[1,-1],"nx":[4,2],"ny":[10,5],"nz":[1,2]},{"size":3,"px":[22,1,9],"py":[23,2,3],"pz":[0,-1,-1],"nx":[2,2,5],"ny":[5,4,19],"nz":[2,2,0]},{"size":2,"px":[2,20],"py":[5,15],"pz":[1,-1],"nx":[2,1],"ny":[1,2],"nz":[2,2]},{"size":2,"px":[4,8],"py":[1,19],"pz":[1,-1],"nx":[2,2],"ny":[5,4],"nz":[2,2]},{"size":2,"px":[9,10],"py":[21,0],"pz":[0,-1],"nx":[6,5],"ny":[1,1],"nz":[1,1]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[9,2],"ny":[4,1],"nz":[1,-1]},{"size":3,"px":[17,3,10],"py":[8,0,2],"pz":[0,2,0],"nx":[13,2,6],"ny":[15,5,1],"nz":[0,-1,-1]},{"size":2,"px":[9,6],"py":[20,21],"pz":[0,-1],"nx":[4,2],"ny":[10,5],"nz":[1,2]},{"size":2,"px":[3,7],"py":[0,1],"pz":[2,1],"nx":[7,20],"ny":[1,19],"nz":[0,-1]},{"size":2,"px":[4,5],"py":[0,1],"pz":[1,0],"nx":[3,2],"ny":[4,2],"nz":[0,-1]},{"size":2,"px":[2,7],"py":[4,19],"pz":[2,0],"nx":[5,2],"ny":[10,2],"nz":[1,-1]},{"size":5,"px":[3,3,4,7,7],"py":[1,0,0,0,1],"pz":[1,1,1,0,0],"nx":[5,4,10,8,8],"ny":[3,3,5,4,4],"nz":[1,1,0,1,-1]},{"size":2,"px":[1,5],"py":[0,3],"pz":[1,-1],"nx":[1,0],"ny":[0,1],"nz":[0,1]},{"size":2,"px":[10,0],"py":[5,5],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[0,9],"py":[0,4],"pz":[2,-1],"nx":[13,10],"ny":[0,0],"nz":[0,0]},{"size":2,"px":[13,4],"py":[14,5],"pz":[0,-1],"nx":[4,2],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[17,4],"py":[13,3],"pz":[0,-1],"nx":[4,2],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[1,0],"py":[6,2],"pz":[1,-1],"nx":[1,6],"ny":[2,12],"nz":[2,0]},{"size":2,"px":[12,4],"py":[6,0],"pz":[0,-1],"nx":[3,3],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[1,5],"py":[1,5],"pz":[1,-1],"nx":[17,17],"ny":[13,7],"nz":[0,0]},{"size":2,"px":[7,3],"py":[12,6],"pz":[0,1],"nx":[3,4],"ny":[4,11],"nz":[1,-1]},{"size":2,"px":[6,17],"py":[2,8],"pz":[1,0],"nx":[3,3],"ny":[1,2],"nz":[1,-1]},{"size":3,"px":[13,6,6],"py":[22,11,10],"pz":[0,1,1],"nx":[13,12,11],"ny":[20,20,20],"nz":[0,0,0]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,12],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[5,2],"py":[1,1],"pz":[1,-1],"nx":[13,6],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[2,8],"py":[3,9],"pz":[2,0],"nx":[8,16],"ny":[5,17],"nz":[0,-1]},{"size":2,"px":[16,15],"py":[1,1],"pz":[0,0],"nx":[7,11],"ny":[8,0],"nz":[1,-1]},{"size":2,"px":[11,18],"py":[21,23],"pz":[0,-1],"nx":[1,1],"ny":[4,3],"nz":[1,2]},{"size":2,"px":[1,5],"py":[0,2],"pz":[1,-1],"nx":[15,11],"ny":[8,7],"nz":[0,0]},{"size":2,"px":[5,4],"py":[7,8],"pz":[1,-1],"nx":[9,10],"ny":[13,11],"nz":[0,0]},{"size":2,"px":[7,4],"py":[10,4],"pz":[1,2],"nx":[22,4],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[11,3],"py":[3,1],"pz":[0,2],"nx":[8,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[5,21],"py":[11,22],"pz":[0,-1],"nx":[10,11],"ny":[11,9],"nz":[0,0]},{"size":2,"px":[5,5],"py":[0,1],"pz":[2,2],"nx":[2,21],"ny":[6,14],"nz":[0,-1]},{"size":3,"px":[10,10,1],"py":[11,0,5],"pz":[0,-1,-1],"nx":[6,12,5],"ny":[2,5,2],"nz":[1,0,1]},{"size":2,"px":[9,10],"py":[5,6],"pz":[0,0],"nx":[12,19],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[9,6],"pz":[0,1],"nx":[21,0],"ny":[23,0],"nz":[0,-1]},{"size":2,"px":[13,12],"py":[19,15],"pz":[0,0],"nx":[13,0],"ny":[17,0],"nz":[0,-1]},{"size":2,"px":[14,0],"py":[17,3],"pz":[0,-1],"nx":[7,16],"ny":[8,19],"nz":[1,0]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[13,10],"py":[23,20],"pz":[0,-1],"nx":[4,7],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[16,9],"py":[22,5],"pz":[0,-1],"nx":[4,2],"ny":[10,3],"nz":[1,2]},{"size":4,"px":[3,1,1,5],"py":[4,2,1,2],"pz":[0,2,2,1],"nx":[13,5,8,0],"ny":[22,2,9,2],"nz":[0,-1,-1,-1]},{"size":2,"px":[9,9],"py":[0,0],"pz":[1,-1],"nx":[19,20],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[7,22],"py":[6,8],"pz":[1,0],"nx":[4,4],"ny":[2,4],"nz":[2,-1]},{"size":2,"px":[3,6],"py":[4,4],"pz":[2,1],"nx":[10,20],"ny":[10,6],"nz":[0,-1]},{"size":2,"px":[6,12],"py":[6,15],"pz":[1,-1],"nx":[0,0],"ny":[2,5],"nz":[2,1]},{"size":2,"px":[2,7],"py":[4,10],"pz":[2,-1],"nx":[3,6],"ny":[4,8],"nz":[2,1]},{"size":3,"px":[11,11,4],"py":[0,5,7],"pz":[1,-1,-1],"nx":[6,12,12],"ny":[1,1,2],"nz":[1,0,0]},{"size":2,"px":[11,17],"py":[4,18],"pz":[0,-1],"nx":[8,2],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[17,17],"py":[10,18],"pz":[0,-1],"nx":[8,8],"ny":[2,3],"nz":[1,1]},{"size":2,"px":[9,9],"py":[7,7],"pz":[1,-1],"nx":[7,4],"ny":[6,3],"nz":[1,2]},{"size":2,"px":[18,21],"py":[0,0],"pz":[0,-1],"nx":[11,6],"ny":[5,3],"nz":[0,1]},{"size":2,"px":[5,2],"py":[8,4],"pz":[0,2],"nx":[5,8],"ny":[9,16],"nz":[0,-1]},{"size":2,"px":[12,2],"py":[5,4],"pz":[0,-1],"nx":[4,15],"ny":[4,8],"nz":[1,0]},{"size":2,"px":[1,1],"py":[4,6],"pz":[1,1],"nx":[11,3],"ny":[7,9],"nz":[0,-1]},{"size":2,"px":[2,1],"py":[3,3],"pz":[2,2],"nx":[2,2],"ny":[15,16],"nz":[0,0]},{"size":2,"px":[17,18],"py":[5,5],"pz":[0,0],"nx":[9,21],"ny":[2,10],"nz":[1,-1]},{"size":2,"px":[6,3],"py":[14,7],"pz":[0,1],"nx":[3,4],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[0,3],"py":[3,1],"pz":[1,-1],"nx":[19,10],"ny":[12,4],"nz":[0,1]},{"size":2,"px":[6,16],"py":[3,8],"pz":[1,0],"nx":[8,10],"ny":[20,4],"nz":[0,-1]},{"size":3,"px":[5,5,2],"py":[21,8,4],"pz":[0,1,2],"nx":[10,6,3],"ny":[15,2,1],"nz":[0,-1,-1]},{"size":2,"px":[11,10],"py":[10,12],"pz":[0,0],"nx":[11,11],"ny":[2,1],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[3,2],"pz":[1,1],"nx":[8,11],"ny":[3,5],"nz":[1,-1]},{"size":2,"px":[13,3],"py":[5,8],"pz":[0,-1],"nx":[12,3],"ny":[3,1],"nz":[0,2]},{"size":2,"px":[13,7],"py":[2,1],"pz":[0,1],"nx":[5,5],"ny":[1,1],"nz":[0,-1]},{"size":2,"px":[11,10],"py":[10,8],"pz":[0,-1],"nx":[14,16],"ny":[10,15],"nz":[0,0]},{"size":2,"px":[2,10],"py":[7,8],"pz":[1,-1],"nx":[2,6],"ny":[5,6],"nz":[2,1]},{"size":2,"px":[10,10],"py":[1,8],"pz":[0,-1],"nx":[2,2],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[4,0],"py":[5,2],"pz":[1,-1],"nx":[1,2],"ny":[2,3],"nz":[2,1]},{"size":2,"px":[1,12],"py":[1,9],"pz":[2,-1],"nx":[16,17],"ny":[3,3],"nz":[0,0]},{"size":2,"px":[12,6],"py":[5,8],"pz":[0,-1],"nx":[3,4],"ny":[7,4],"nz":[1,1]},{"size":2,"px":[14,3],"py":[11,5],"pz":[0,-1],"nx":[11,4],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[6,10],"py":[6,6],"pz":[1,-1],"nx":[0,0],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[3,7],"py":[0,7],"pz":[1,-1],"nx":[15,13],"ny":[8,4],"nz":[0,0]},{"size":2,"px":[18,1],"py":[15,0],"pz":[0,-1],"nx":[18,18],"ny":[18,17],"nz":[0,0]},{"size":2,"px":[5,2],"py":[4,4],"pz":[0,-1],"nx":[4,18],"ny":[4,15],"nz":[1,0]},{"size":3,"px":[3,14,13],"py":[2,7,8],"pz":[2,0,0],"nx":[10,0,2],"ny":[8,3,2],"nz":[0,-1,-1]},{"size":2,"px":[16,0],"py":[14,3],"pz":[0,-1],"nx":[18,3],"ny":[12,5],"nz":[0,2]},{"size":2,"px":[5,3],"py":[8,3],"pz":[1,2],"nx":[13,4],"ny":[10,4],"nz":[0,-1]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,1],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[8,3],"pz":[1,-1],"nx":[12,7],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[17,3],"py":[9,2],"pz":[0,2],"nx":[7,6],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[12,1],"py":[2,1],"pz":[0,-1],"nx":[4,4],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[22,5],"py":[15,3],"pz":[0,2],"nx":[16,17],"ny":[14,2],"nz":[0,-1]},{"size":2,"px":[8,11],"py":[19,13],"pz":[0,-1],"nx":[0,0],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[8,11],"py":[8,1],"pz":[1,-1],"nx":[3,3],"ny":[2,5],"nz":[1,2]},{"size":3,"px":[3,8,0],"py":[7,7,5],"pz":[1,-1,-1],"nx":[11,5,1],"ny":[11,7,5],"nz":[0,1,1]},{"size":2,"px":[12,6],"py":[12,6],"pz":[0,1],"nx":[9,0],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[16,12],"py":[7,1],"pz":[0,-1],"nx":[16,7],"ny":[6,4],"nz":[0,1]},{"size":2,"px":[13,5],"py":[14,0],"pz":[0,-1],"nx":[13,10],"ny":[0,0],"nz":[0,0]},{"size":5,"px":[11,12,13,12,7],"py":[0,1,0,0,0],"pz":[0,0,0,0,1],"nx":[13,16,14,4,4],"ny":[18,23,18,5,5],"nz":[0,0,0,2,-1]},{"size":2,"px":[14,5],"py":[12,4],"pz":[0,-1],"nx":[7,7],"ny":[8,2],"nz":[1,1]},{"size":2,"px":[19,3],"py":[2,5],"pz":[0,-1],"nx":[11,23],"ny":[7,13],"nz":[1,0]},{"size":2,"px":[0,0],"py":[19,20],"pz":[0,0],"nx":[9,4],"ny":[5,2],"nz":[0,-1]},{"size":2,"px":[15,4],"py":[12,3],"pz":[0,2],"nx":[9,5],"ny":[4,5],"nz":[1,-1]},{"size":4,"px":[8,0,1,21],"py":[6,0,7,16],"pz":[1,-1,-1,-1],"nx":[11,6,11,5],"ny":[8,6,4,3],"nz":[1,1,1,2]},{"size":2,"px":[11,11],"py":[7,5],"pz":[0,-1],"nx":[9,10],"ny":[6,7],"nz":[0,0]},{"size":2,"px":[2,4],"py":[1,2],"pz":[2,1],"nx":[16,6],"ny":[0,1],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[5,3],"pz":[1,2],"nx":[1,21],"ny":[23,8],"nz":[0,-1]},{"size":2,"px":[10,0],"py":[7,0],"pz":[0,-1],"nx":[4,13],"ny":[4,10],"nz":[1,0]},{"size":2,"px":[11,4],"py":[0,4],"pz":[1,-1],"nx":[4,2],"ny":[16,8],"nz":[0,1]},{"size":2,"px":[5,3],"py":[12,6],"pz":[0,1],"nx":[3,3],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[19,11],"pz":[0,-1],"nx":[9,5],"ny":[21,9],"nz":[0,1]},{"size":2,"px":[0,0],"py":[17,9],"pz":[0,1],"nx":[0,5],"ny":[0,9],"nz":[2,-1]},{"size":2,"px":[4,5],"py":[2,4],"pz":[0,-1],"nx":[4,4],"ny":[5,6],"nz":[1,1]},{"size":2,"px":[8,4],"py":[1,0],"pz":[1,2],"nx":[4,3],"ny":[3,6],"nz":[0,-1]},{"size":2,"px":[11,0],"py":[7,2],"pz":[1,-1],"nx":[5,5],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[13,0],"py":[17,2],"pz":[0,-1],"nx":[3,6],"ny":[5,8],"nz":[2,1]},{"size":2,"px":[2,1],"py":[0,5],"pz":[2,-1],"nx":[4,9],"ny":[2,7],"nz":[2,1]},{"size":2,"px":[12,5],"py":[13,8],"pz":[0,-1],"nx":[23,11],"ny":[13,7],"nz":[0,1]},{"size":2,"px":[0,0],"py":[0,2],"pz":[1,0],"nx":[3,6],"ny":[11,18],"nz":[0,-1]},{"size":2,"px":[4,3],"py":[6,5],"pz":[0,-1],"nx":[1,1],"ny":[1,3],"nz":[2,1]},{"size":4,"px":[3,6,3,6],"py":[3,6,2,5],"pz":[2,1,2,1],"nx":[0,4,1,1],"ny":[0,22,17,0],"nz":[0,-1,-1,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[9,15],"ny":[4,8],"nz":[1,-1]},{"size":2,"px":[8,18],"py":[7,8],"pz":[1,0],"nx":[8,5],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[4,5],"pz":[1,-1],"nx":[5,6],"ny":[0,0],"nz":[1,1]},{"size":2,"px":[13,18],"py":[23,19],"pz":[0,0],"nx":[7,13],"ny":[10,20],"nz":[1,-1]},{"size":2,"px":[10,6],"py":[2,0],"pz":[0,1],"nx":[4,1],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[1,1],"py":[5,4],"pz":[2,2],"nx":[0,20],"ny":[4,4],"nz":[2,-1]},{"size":2,"px":[5,5],"py":[1,0],"pz":[2,2],"nx":[12,6],"ny":[18,11],"nz":[0,-1]},{"size":5,"px":[2,1,3,1,5],"py":[3,3,7,4,9],"pz":[2,2,1,2,1],"nx":[9,3,8,16,10],"ny":[5,3,10,6,7],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[4,1],"py":[12,3],"pz":[0,-1],"nx":[10,1],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[19,0],"py":[10,7],"pz":[0,-1],"nx":[14,7],"ny":[6,3],"nz":[0,1]},{"size":2,"px":[7,4],"py":[2,1],"pz":[1,2],"nx":[6,0],"ny":[2,18],"nz":[0,-1]},{"size":2,"px":[14,8],"py":[3,0],"pz":[0,1],"nx":[17,1],"ny":[1,4],"nz":[0,-1]},{"size":2,"px":[18,19],"py":[1,17],"pz":[0,-1],"nx":[5,11],"ny":[2,5],"nz":[2,1]},{"size":5,"px":[12,12,12,6,12],"py":[10,11,12,6,9],"pz":[0,0,0,1,0],"nx":[13,3,12,6,6],"ny":[4,1,4,2,2],"nz":[0,2,0,1,-1]},{"size":2,"px":[11,10],"py":[3,3],"pz":[0,0],"nx":[4,9],"ny":[4,17],"nz":[1,-1]},{"size":2,"px":[11,0],"py":[13,5],"pz":[0,2],"nx":[8,18],"ny":[15,15],"nz":[0,-1]},{"size":2,"px":[3,4],"py":[6,5],"pz":[1,1],"nx":[0,0],"ny":[9,4],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[1,0],"pz":[2,2],"nx":[2,15],"ny":[2,1],"nz":[2,-1]},{"size":3,"px":[2,4,2],"py":[4,9,5],"pz":[2,1,2],"nx":[2,5,14],"ny":[0,1,4],"nz":[0,-1,-1]},{"size":2,"px":[11,12],"py":[20,20],"pz":[0,0],"nx":[6,10],"ny":[9,19],"nz":[1,-1]},{"size":2,"px":[7,0],"py":[16,8],"pz":[0,-1],"nx":[2,3],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[16,17,15,16,15],"py":[1,1,1,0,0],"pz":[0,0,0,0,0],"nx":[8,8,4,12,12],"ny":[8,7,2,23,23],"nz":[1,1,2,0,-1]},{"size":2,"px":[2,4],"py":[6,12],"pz":[1,-1],"nx":[8,13],"ny":[1,1],"nz":[1,0]},{"size":2,"px":[9,2],"py":[3,2],"pz":[0,-1],"nx":[3,4],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[10,8],"py":[6,1],"pz":[1,-1],"nx":[11,8],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[9,3],"py":[7,0],"pz":[1,-1],"nx":[19,19],"ny":[18,16],"nz":[0,0]},{"size":2,"px":[3,2],"py":[1,1],"pz":[2,2],"nx":[22,11],"ny":[4,0],"nz":[0,-1]},{"size":2,"px":[10,10],"py":[9,8],"pz":[1,1],"nx":[4,4],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[0,1],"py":[0,5],"pz":[0,-1],"nx":[10,8],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[8,2],"ny":[8,3],"nz":[0,-1]},{"size":2,"px":[13,5],"py":[21,3],"pz":[0,-1],"nx":[13,3],"ny":[20,5],"nz":[0,2]},{"size":2,"px":[12,5],"py":[11,2],"pz":[0,-1],"nx":[1,0],"ny":[19,9],"nz":[0,1]},{"size":2,"px":[7,10],"py":[9,10],"pz":[1,1],"nx":[8,4],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,9],"pz":[2,1],"nx":[2,11],"ny":[9,19],"nz":[1,-1]},{"size":2,"px":[3,5],"py":[1,2],"pz":[2,1],"nx":[8,23],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[3,4],"py":[2,4],"pz":[2,1],"nx":[5,9],"ny":[2,5],"nz":[2,-1]},{"size":2,"px":[11,11],"py":[2,3],"pz":[1,1],"nx":[19,9],"ny":[6,5],"nz":[0,-1]},{"size":2,"px":[9,4],"py":[5,10],"pz":[1,-1],"nx":[10,22],"ny":[0,16],"nz":[1,0]},{"size":3,"px":[19,9,19],"py":[3,1,2],"pz":[0,1,0],"nx":[6,3,6],"ny":[10,3,0],"nz":[1,-1,-1]},{"size":2,"px":[8,3],"py":[10,3],"pz":[1,2],"nx":[23,14],"ny":[3,18],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[19,0],"pz":[0,-1],"nx":[4,16],"ny":[4,11],"nz":[1,0]},{"size":2,"px":[22,23],"py":[3,22],"pz":[0,-1],"nx":[9,3],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[7,2],"py":[12,4],"pz":[0,-1],"nx":[8,4],"ny":[10,5],"nz":[0,1]},{"size":2,"px":[12,13],"py":[5,13],"pz":[0,-1],"nx":[11,3],"ny":[2,0],"nz":[0,2]},{"size":2,"px":[3,17],"py":[0,16],"pz":[1,-1],"nx":[12,12],"ny":[5,6],"nz":[0,0]},{"size":2,"px":[4,3],"py":[1,0],"pz":[2,2],"nx":[4,3],"ny":[0,3],"nz":[0,-1]},{"size":2,"px":[10,3],"py":[12,0],"pz":[0,-1],"nx":[12,12],"ny":[13,12],"nz":[0,0]},{"size":2,"px":[13,4],"py":[11,14],"pz":[0,-1],"nx":[0,0],"ny":[4,6],"nz":[1,0]},{"size":2,"px":[8,7],"py":[7,8],"pz":[1,1],"nx":[3,0],"ny":[5,21],"nz":[2,-1]},{"size":2,"px":[1,3],"py":[4,14],"pz":[2,0],"nx":[8,8],"ny":[7,7],"nz":[1,-1]},{"size":2,"px":[13,11],"py":[20,7],"pz":[0,-1],"nx":[21,21],"ny":[20,18],"nz":[0,0]},{"size":2,"px":[2,1],"py":[11,0],"pz":[0,-1],"nx":[2,2],"ny":[15,14],"nz":[0,0]},{"size":2,"px":[10,1],"py":[8,0],"pz":[1,-1],"nx":[8,4],"ny":[7,4],"nz":[1,2]},{"size":2,"px":[17,6],"py":[13,1],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[7,15],"py":[1,3],"pz":[1,0],"nx":[15,5],"ny":[1,8],"nz":[0,-1]},{"size":2,"px":[16,1],"py":[20,10],"pz":[0,-1],"nx":[6,8],"ny":[11,10],"nz":[1,1]},{"size":2,"px":[7,14],"py":[0,0],"pz":[1,0],"nx":[7,8],"ny":[7,3],"nz":[1,-1]},{"size":2,"px":[12,5],"py":[17,4],"pz":[0,-1],"nx":[12,5],"ny":[16,10],"nz":[0,1]},{"size":2,"px":[13,3],"py":[15,0],"pz":[0,-1],"nx":[12,7],"ny":[17,8],"nz":[0,1]},{"size":2,"px":[7,1],"py":[14,1],"pz":[0,-1],"nx":[4,6],"ny":[6,12],"nz":[1,0]},{"size":2,"px":[8,7],"py":[0,0],"pz":[0,0],"nx":[6,20],"ny":[5,5],"nz":[0,-1]},{"size":2,"px":[10,2],"py":[22,5],"pz":[0,-1],"nx":[4,8],"ny":[4,9],"nz":[2,1]},{"size":4,"px":[8,2,2,9],"py":[6,5,3,11],"pz":[1,-1,-1,-1],"nx":[2,7,4,3],"ny":[2,1,0,2],"nz":[2,0,1,2]},{"size":2,"px":[12,6],"py":[12,6],"pz":[0,1],"nx":[8,2],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[13,11],"py":[19,8],"pz":[0,-1],"nx":[13,13],"ny":[20,17],"nz":[0,0]},{"size":2,"px":[11,19],"py":[5,14],"pz":[0,-1],"nx":[3,4],"ny":[8,4],"nz":[1,1]},{"size":2,"px":[10,0],"py":[8,6],"pz":[1,-1],"nx":[21,21],"ny":[16,15],"nz":[0,0]},{"size":2,"px":[1,12],"py":[7,6],"pz":[1,-1],"nx":[2,7],"ny":[5,14],"nz":[2,0]},{"size":2,"px":[2,9],"py":[7,5],"pz":[1,-1],"nx":[2,5],"ny":[5,9],"nz":[2,1]},{"size":2,"px":[12,5],"py":[15,6],"pz":[0,-1],"nx":[3,12],"ny":[0,2],"nz":[2,0]},{"size":2,"px":[23,22],"py":[23,1],"pz":[0,-1],"nx":[0,0],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,0],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[5,1],"py":[9,1],"pz":[0,-1],"nx":[4,2],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[0,1],"py":[0,0],"pz":[2,0],"nx":[2,3],"ny":[9,10],"nz":[0,-1]},{"size":2,"px":[6,0],"py":[16,14],"pz":[0,-1],"nx":[6,3],"ny":[23,14],"nz":[0,0]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,1],"nx":[13,3],"ny":[19,14],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[8,18],"pz":[0,-1],"nx":[4,7],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[4,4],"py":[5,6],"pz":[1,1],"nx":[2,2],"ny":[5,3],"nz":[2,-1]},{"size":2,"px":[7,3],"py":[13,7],"pz":[0,1],"nx":[4,3],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,6],"pz":[1,0],"nx":[2,1],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[7,14],"py":[3,5],"pz":[1,0],"nx":[5,0],"ny":[16,7],"nz":[0,-1]},{"size":2,"px":[11,2],"py":[18,5],"pz":[0,2],"nx":[11,4],"ny":[16,4],"nz":[0,-1]},{"size":2,"px":[6,16],"py":[19,20],"pz":[0,-1],"nx":[3,2],"ny":[10,5],"nz":[1,2]},{"size":2,"px":[5,3],"py":[3,1],"pz":[0,1],"nx":[1,3],"ny":[4,8],"nz":[0,-1]},{"size":2,"px":[12,6],"py":[13,6],"pz":[0,1],"nx":[10,1],"ny":[12,2],"nz":[0,-1]},{"size":2,"px":[8,3],"py":[6,2],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[9,3],"py":[21,2],"pz":[0,-1],"nx":[8,4],"ny":[1,0],"nz":[1,2]},{"size":2,"px":[8,4],"py":[1,0],"pz":[1,-1],"nx":[8,6],"ny":[4,2],"nz":[1,1]},{"size":2,"px":[2,7],"py":[1,6],"pz":[2,-1],"nx":[7,9],"ny":[6,4],"nz":[1,1]},{"size":2,"px":[6,3],"py":[8,3],"pz":[1,2],"nx":[10,5],"ny":[19,11],"nz":[0,-1]},{"size":2,"px":[2,2],"py":[3,4],"pz":[2,2],"nx":[3,6],"ny":[4,6],"nz":[1,-1]},{"size":2,"px":[3,11],"py":[5,20],"pz":[2,0],"nx":[11,5],"ny":[21,8],"nz":[0,-1]},{"size":3,"px":[5,9,5],"py":[4,7,5],"pz":[2,0,2],"nx":[23,10,4],"ny":[23,3,22],"nz":[0,-1,-1]},{"size":4,"px":[11,9,7,1],"py":[13,8,11,10],"pz":[0,-1,-1,-1],"nx":[8,2,11,12],"ny":[4,2,4,4],"nz":[1,2,0,0]},{"size":2,"px":[0,0],"py":[7,6],"pz":[1,1],"nx":[0,4],"ny":[1,0],"nz":[2,-1]},{"size":2,"px":[19,20],"py":[0,1],"pz":[0,0],"nx":[21,1],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[8,5],"py":[11,0],"pz":[0,-1],"nx":[11,0],"ny":[12,1],"nz":[0,2]},{"size":2,"px":[11,11],"py":[1,1],"pz":[0,-1],"nx":[4,7],"ny":[5,4],"nz":[1,1]},{"size":2,"px":[5,12],"py":[4,23],"pz":[2,-1],"nx":[13,15],"ny":[5,4],"nz":[0,0]},{"size":2,"px":[12,20],"py":[4,16],"pz":[0,-1],"nx":[9,4],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[12,13],"py":[2,2],"pz":[0,0],"nx":[4,16],"ny":[2,11],"nz":[2,0]},{"size":2,"px":[19,14],"py":[10,17],"pz":[0,-1],"nx":[3,8],"ny":[0,2],"nz":[2,0]},{"size":2,"px":[8,12],"py":[1,2],"pz":[1,0],"nx":[19,10],"ny":[3,1],"nz":[0,-1]},{"size":4,"px":[17,2,3,10],"py":[8,6,2,12],"pz":[0,1,2,0],"nx":[17,9,12,2],"ny":[9,22,13,5],"nz":[0,-1,-1,-1]},{"size":2,"px":[20,10],"py":[15,7],"pz":[0,1],"nx":[13,9],"ny":[7,3],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[1,0],"pz":[2,2],"nx":[10,3],"ny":[9,2],"nz":[1,-1]},{"size":2,"px":[4,3],"py":[1,0],"pz":[2,2],"nx":[0,22],"ny":[14,6],"nz":[0,-1]},{"size":2,"px":[16,3],"py":[4,0],"pz":[0,2],"nx":[16,3],"ny":[2,0],"nz":[0,-1]},{"size":2,"px":[8,16],"py":[6,12],"pz":[1,0],"nx":[8,12],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[5,11],"py":[0,5],"pz":[2,1],"nx":[10,1],"ny":[5,5],"nz":[1,-1]},{"size":2,"px":[7,4],"py":[5,5],"pz":[0,-1],"nx":[3,6],"ny":[2,3],"nz":[1,0]},{"size":2,"px":[11,11],"py":[11,12],"pz":[0,0],"nx":[23,7],"ny":[20,2],"nz":[0,-1]},{"size":2,"px":[16,8],"py":[12,5],"pz":[0,1],"nx":[8,2],"ny":[2,1],"nz":[1,-1]},{"size":3,"px":[6,11,11],"py":[11,23,20],"pz":[1,0,0],"nx":[11,3,22],"ny":[21,3,16],"nz":[0,-1,-1]},{"size":2,"px":[17,15],"py":[3,2],"pz":[0,-1],"nx":[4,4],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[21,21],"py":[11,10],"pz":[0,0],"nx":[11,3],"ny":[6,2],"nz":[1,-1]},{"size":2,"px":[23,21],"py":[22,10],"pz":[0,-1],"nx":[20,10],"ny":[18,10],"nz":[0,1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,2],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[16,0],"py":[18,11],"pz":[0,-1],"nx":[8,7],"ny":[4,4],"nz":[0,0]},{"size":2,"px":[6,21],"py":[3,16],"pz":[0,-1],"nx":[1,8],"ny":[2,14],"nz":[2,0]},{"size":2,"px":[8,1],"py":[3,0],"pz":[0,-1],"nx":[11,11],"ny":[2,1],"nz":[0,0]},{"size":3,"px":[11,11,11],"py":[9,10,8],"pz":[1,1,1],"nx":[23,1,0],"ny":[23,9,11],"nz":[0,-1,-1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[7,1],"ny":[8,2],"nz":[0,-1]},{"size":2,"px":[10,17],"py":[17,19],"pz":[0,-1],"nx":[10,4],"ny":[16,9],"nz":[0,1]},{"size":2,"px":[3,6],"py":[7,1],"pz":[1,-1],"nx":[11,0],"ny":[11,8],"nz":[0,1]},{"size":2,"px":[10,5],"py":[11,4],"pz":[1,2],"nx":[5,5],"ny":[0,0],"nz":[2,-1]},{"size":2,"px":[3,6],"py":[3,6],"pz":[2,1],"nx":[8,0],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[14,1],"py":[20,2],"pz":[0,-1],"nx":[7,7],"ny":[11,9],"nz":[1,1]},{"size":3,"px":[11,13,4],"py":[16,21,3],"pz":[0,0,2],"nx":[14,16,5],"ny":[20,14,9],"nz":[0,-1,-1]},{"size":2,"px":[7,0],"py":[1,1],"pz":[1,-1],"nx":[4,7],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[23,11],"py":[9,4],"pz":[0,1],"nx":[11,3],"ny":[1,3],"nz":[0,-1]},{"size":2,"px":[11,13],"py":[23,23],"pz":[0,0],"nx":[13,13],"ny":[20,20],"nz":[0,-1]},{"size":2,"px":[10,8],"py":[5,11],"pz":[0,-1],"nx":[20,19],"ny":[18,20],"nz":[0,0]},{"size":2,"px":[19,5],"py":[22,4],"pz":[0,-1],"nx":[2,9],"ny":[3,17],"nz":[1,0]},{"size":2,"px":[15,2],"py":[13,7],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[14,13],"py":[17,2],"pz":[0,-1],"nx":[15,13],"ny":[19,15],"nz":[0,0]},{"size":2,"px":[12,23],"py":[8,22],"pz":[0,-1],"nx":[7,10],"ny":[5,9],"nz":[1,0]},{"size":2,"px":[2,6],"py":[21,10],"pz":[0,-1],"nx":[3,4],"ny":[3,3],"nz":[1,1]},{"size":2,"px":[15,11],"py":[5,0],"pz":[0,-1],"nx":[3,4],"ny":[17,16],"nz":[0,0]},{"size":2,"px":[3,1],"py":[18,8],"pz":[0,1],"nx":[14,4],"ny":[17,7],"nz":[0,-1]},{"size":2,"px":[15,3],"py":[18,3],"pz":[0,2],"nx":[1,22],"ny":[0,1],"nz":[0,-1]},{"size":2,"px":[13,3],"py":[9,3],"pz":[0,-1],"nx":[0,1],"ny":[9,20],"nz":[1,0]},{"size":2,"px":[1,1],"py":[1,0],"pz":[2,2],"nx":[9,23],"ny":[10,12],"nz":[1,-1]},{"size":4,"px":[9,0,9,1],"py":[8,0,0,10],"pz":[1,-1,-1,-1],"nx":[23,7,5,23],"ny":[20,7,5,19],"nz":[0,1,2,0]},{"size":2,"px":[18,18],"py":[12,12],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":3,"px":[0,4,1],"py":[3,5,3],"pz":[1,-1,-1],"nx":[16,11,8],"ny":[8,5,6],"nz":[0,0,0]},{"size":5,"px":[9,10,14,11,11],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[8,3,4,6,2],"ny":[22,9,5,4,0],"nz":[0,1,0,0,2]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[7,3],"ny":[8,7],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[15,2],"pz":[0,-1],"nx":[3,10],"ny":[0,1],"nz":[2,0]},{"size":2,"px":[0,11],"py":[11,12],"pz":[1,-1],"nx":[22,22],"ny":[14,13],"nz":[0,0]},{"size":2,"px":[2,2],"py":[15,14],"pz":[0,0],"nx":[1,2],"ny":[11,8],"nz":[1,-1]},{"size":2,"px":[11,6],"py":[0,7],"pz":[1,-1],"nx":[19,5],"ny":[3,0],"nz":[0,2]},{"size":2,"px":[2,3],"py":[3,7],"pz":[2,1],"nx":[1,5],"ny":[5,0],"nz":[1,-1]},{"size":2,"px":[10,14],"py":[4,5],"pz":[0,-1],"nx":[4,18],"ny":[2,12],"nz":[2,0]},{"size":2,"px":[19,10],"py":[12,2],"pz":[0,-1],"nx":[13,4],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[6,1],"py":[21,6],"pz":[0,-1],"nx":[6,5],"ny":[0,0],"nz":[1,1]}],"alpha":[-1.044179e+00,1.044179e+00,-6.003138e-01,6.003138e-01,-4.091282e-01,4.091282e-01,-4.590148e-01,4.590148e-01,-4.294004e-01,4.294004e-01,-3.360846e-01,3.360846e-01,-3.054186e-01,3.054186e-01,-2.901743e-01,2.901743e-01,-3.522417e-01,3.522417e-01,-3.195838e-01,3.195838e-01,-2.957309e-01,2.957309e-01,-2.876727e-01,2.876727e-01,-2.637460e-01,2.637460e-01,-2.607900e-01,2.607900e-01,-2.455714e-01,2.455714e-01,-2.749847e-01,2.749847e-01,-2.314217e-01,2.314217e-01,-2.540871e-01,2.540871e-01,-2.143416e-01,2.143416e-01,-2.565697e-01,2.565697e-01,-1.901272e-01,1.901272e-01,-2.259981e-01,2.259981e-01,-2.012333e-01,2.012333e-01,-2.448460e-01,2.448460e-01,-2.192845e-01,2.192845e-01,-2.005951e-01,2.005951e-01,-2.259000e-01,2.259000e-01,-1.955758e-01,1.955758e-01,-2.235332e-01,2.235332e-01,-1.704490e-01,1.704490e-01,-1.584628e-01,1.584628e-01,-2.167710e-01,2.167710e-01,-1.592909e-01,1.592909e-01,-1.967292e-01,1.967292e-01,-1.432268e-01,1.432268e-01,-2.039949e-01,2.039949e-01,-1.404068e-01,1.404068e-01,-1.788201e-01,1.788201e-01,-1.498714e-01,1.498714e-01,-1.282541e-01,1.282541e-01,-1.630182e-01,1.630182e-01,-1.398111e-01,1.398111e-01,-1.464143e-01,1.464143e-01,-1.281712e-01,1.281712e-01,-1.417014e-01,1.417014e-01,-1.779164e-01,1.779164e-01,-2.067174e-01,2.067174e-01,-1.344947e-01,1.344947e-01,-1.357351e-01,1.357351e-01,-1.683191e-01,1.683191e-01,-1.821768e-01,1.821768e-01,-2.158307e-01,2.158307e-01,-1.812857e-01,1.812857e-01,-1.635445e-01,1.635445e-01,-1.474934e-01,1.474934e-01,-1.771993e-01,1.771993e-01,-1.517620e-01,1.517620e-01,-1.283184e-01,1.283184e-01,-1.862675e-01,1.862675e-01,-1.420491e-01,1.420491e-01,-1.232165e-01,1.232165e-01,-1.472696e-01,1.472696e-01,-1.192156e-01,1.192156e-01,-1.602034e-01,1.602034e-01,-1.321473e-01,1.321473e-01,-1.358101e-01,1.358101e-01,-1.295821e-01,1.295821e-01,-1.289102e-01,1.289102e-01,-1.232520e-01,1.232520e-01,-1.332227e-01,1.332227e-01,-1.358887e-01,1.358887e-01,-1.179559e-01,1.179559e-01,-1.263694e-01,1.263694e-01,-1.444876e-01,1.444876e-01,-1.933141e-01,1.933141e-01,-1.917886e-01,1.917886e-01,-1.199760e-01,1.199760e-01,-1.359937e-01,1.359937e-01,-1.690073e-01,1.690073e-01,-1.894222e-01,1.894222e-01,-1.699422e-01,1.699422e-01,-1.340361e-01,1.340361e-01,-1.840622e-01,1.840622e-01,-1.277397e-01,1.277397e-01,-1.381610e-01,1.381610e-01,-1.282241e-01,1.282241e-01,-1.211334e-01,1.211334e-01,-1.264628e-01,1.264628e-01,-1.373010e-01,1.373010e-01,-1.363356e-01,1.363356e-01,-1.562568e-01,1.562568e-01,-1.268735e-01,1.268735e-01,-1.037859e-01,1.037859e-01,-1.394322e-01,1.394322e-01,-1.449225e-01,1.449225e-01,-1.109657e-01,1.109657e-01,-1.086931e-01,1.086931e-01,-1.379135e-01,1.379135e-01,-1.881974e-01,1.881974e-01,-1.304956e-01,1.304956e-01,-9.921777e-02,9.921777e-02,-1.398624e-01,1.398624e-01,-1.216469e-01,1.216469e-01,-1.272741e-01,1.272741e-01,-1.878236e-01,1.878236e-01,-1.336894e-01,1.336894e-01,-1.256289e-01,1.256289e-01,-1.247231e-01,1.247231e-01,-1.853400e-01,1.853400e-01,-1.087805e-01,1.087805e-01,-1.205676e-01,1.205676e-01,-1.023182e-01,1.023182e-01,-1.268422e-01,1.268422e-01,-1.422900e-01,1.422900e-01,-1.098174e-01,1.098174e-01,-1.317018e-01,1.317018e-01,-1.378142e-01,1.378142e-01,-1.274550e-01,1.274550e-01,-1.142944e-01,1.142944e-01,-1.713488e-01,1.713488e-01,-1.103035e-01,1.103035e-01,-1.045221e-01,1.045221e-01,-1.293015e-01,1.293015e-01,-9.763183e-02,9.763183e-02,-1.387213e-01,1.387213e-01,-9.031167e-02,9.031167e-02,-1.283052e-01,1.283052e-01,-1.133462e-01,1.133462e-01,-9.370681e-02,9.370681e-02,-1.079269e-01,1.079269e-01,-1.331913e-01,1.331913e-01,-8.969902e-02,8.969902e-02,-1.044560e-01,1.044560e-01,-9.387466e-02,9.387466e-02,-1.208988e-01,1.208988e-01,-1.252011e-01,1.252011e-01,-1.401277e-01,1.401277e-01,-1.461381e-01,1.461381e-01,-1.323763e-01,1.323763e-01,-9.923889e-02,9.923889e-02,-1.142899e-01,1.142899e-01,-9.110853e-02,9.110853e-02,-1.106607e-01,1.106607e-01,-1.253140e-01,1.253140e-01,-9.657895e-02,9.657895e-02,-1.030010e-01,1.030010e-01,-1.348857e-01,1.348857e-01,-1.237793e-01,1.237793e-01,-1.296943e-01,1.296943e-01,-1.323385e-01,1.323385e-01,-8.331554e-02,8.331554e-02,-8.417589e-02,8.417589e-02,-1.104431e-01,1.104431e-01,-1.170710e-01,1.170710e-01,-1.391725e-01,1.391725e-01,-1.485189e-01,1.485189e-01,-1.840393e-01,1.840393e-01,-1.238250e-01,1.238250e-01,-1.095287e-01,1.095287e-01,-1.177869e-01,1.177869e-01,-1.036409e-01,1.036409e-01,-9.802581e-02,9.802581e-02,-9.364054e-02,9.364054e-02,-9.936022e-02,9.936022e-02,-1.117201e-01,1.117201e-01,-1.081300e-01,1.081300e-01,-1.331861e-01,1.331861e-01,-1.192122e-01,1.192122e-01,-9.889761e-02,9.889761e-02,-1.173456e-01,1.173456e-01,-1.032917e-01,1.032917e-01,-9.268551e-02,9.268551e-02,-1.178563e-01,1.178563e-01,-1.215065e-01,1.215065e-01,-1.060437e-01,1.060437e-01,-1.010044e-01,1.010044e-01,-1.021683e-01,1.021683e-01,-9.974968e-02,9.974968e-02,-1.161528e-01,1.161528e-01,-8.686721e-02,8.686721e-02,-8.145259e-02,8.145259e-02,-9.937060e-02,9.937060e-02,-1.170885e-01,1.170885e-01,-7.693779e-02,7.693779e-02,-9.047233e-02,9.047233e-02,-9.168442e-02,9.168442e-02,-1.054105e-01,1.054105e-01,-9.036177e-02,9.036177e-02,-1.251949e-01,1.251949e-01,-9.523847e-02,9.523847e-02,-1.038930e-01,1.038930e-01,-1.433660e-01,1.433660e-01,-1.489830e-01,1.489830e-01,-8.393174e-02,8.393174e-02,-8.888026e-02,8.888026e-02,-9.347861e-02,9.347861e-02,-1.044838e-01,1.044838e-01,-1.102144e-01,1.102144e-01,-1.383415e-01,1.383415e-01,-1.466476e-01,1.466476e-01,-1.129741e-01,1.129741e-01,-1.310915e-01,1.310915e-01,-1.070648e-01,1.070648e-01,-7.559007e-02,7.559007e-02,-8.812082e-02,8.812082e-02,-1.234272e-01,1.234272e-01,-1.088022e-01,1.088022e-01,-8.388703e-02,8.388703e-02,-7.179593e-02,7.179593e-02,-1.008961e-01,1.008961e-01,-9.030070e-02,9.030070e-02,-8.581345e-02,8.581345e-02,-9.023431e-02,9.023431e-02,-9.807321e-02,9.807321e-02,-9.621402e-02,9.621402e-02,-1.730195e-01,1.730195e-01,-8.984631e-02,8.984631e-02,-9.556661e-02,9.556661e-02,-1.047576e-01,1.047576e-01,-7.854313e-02,7.854313e-02,-8.682118e-02,8.682118e-02,-1.159761e-01,1.159761e-01,-1.339540e-01,1.339540e-01,-1.003048e-01,1.003048e-01,-9.747544e-02,9.747544e-02,-9.501058e-02,9.501058e-02,-1.321566e-01,1.321566e-01,-9.194706e-02,9.194706e-02,-9.359276e-02,9.359276e-02,-1.015916e-01,1.015916e-01,-1.174192e-01,1.174192e-01,-1.039931e-01,1.039931e-01,-9.746733e-02,9.746733e-02,-1.286120e-01,1.286120e-01,-1.044899e-01,1.044899e-01,-1.066385e-01,1.066385e-01,-8.368626e-02,8.368626e-02,-1.271919e-01,1.271919e-01,-1.055946e-01,1.055946e-01,-8.272876e-02,8.272876e-02,-1.370564e-01,1.370564e-01,-8.539379e-02,8.539379e-02,-1.100343e-01,1.100343e-01,-8.102170e-02,8.102170e-02,-1.028728e-01,1.028728e-01,-1.305065e-01,1.305065e-01,-1.059506e-01,1.059506e-01,-1.264646e-01,1.264646e-01,-8.383843e-02,8.383843e-02,-9.357698e-02,9.357698e-02,-7.474400e-02,7.474400e-02,-7.814045e-02,7.814045e-02,-8.600970e-02,8.600970e-02,-1.206090e-01,1.206090e-01,-9.986512e-02,9.986512e-02,-8.516476e-02,8.516476e-02,-7.198783e-02,7.198783e-02,-7.838409e-02,7.838409e-02,-1.005142e-01,1.005142e-01,-9.951857e-02,9.951857e-02,-7.253998e-02,7.253998e-02,-9.913739e-02,9.913739e-02,-7.500360e-02,7.500360e-02,-9.258090e-02,9.258090e-02,-1.400287e-01,1.400287e-01,-1.044404e-01,1.044404e-01,-7.404339e-02,7.404339e-02,-7.256833e-02,7.256833e-02,-1.006995e-01,1.006995e-01,-1.426043e-01,1.426043e-01,-1.036529e-01,1.036529e-01,-1.208443e-01,1.208443e-01,-1.074245e-01,1.074245e-01,-1.141448e-01,1.141448e-01,-1.015809e-01,1.015809e-01,-1.028822e-01,1.028822e-01,-1.055682e-01,1.055682e-01,-9.468699e-02,9.468699e-02,-1.010098e-01,1.010098e-01,-1.205054e-01,1.205054e-01,-8.392956e-02,8.392956e-02,-8.052297e-02,8.052297e-02,-9.576507e-02,9.576507e-02,-9.515692e-02,9.515692e-02,-1.564745e-01,1.564745e-01,-7.357238e-02,7.357238e-02,-1.129262e-01,1.129262e-01,-1.013265e-01,1.013265e-01,-8.760761e-02,8.760761e-02,-8.714771e-02,8.714771e-02,-9.605039e-02,9.605039e-02,-9.064677e-02,9.064677e-02,-8.243857e-02,8.243857e-02,-8.495858e-02,8.495858e-02,-8.350249e-02,8.350249e-02,-7.423234e-02,7.423234e-02,-7.930799e-02,7.930799e-02,-6.620023e-02,6.620023e-02,-7.311919e-02,7.311919e-02,-1.237938e-01,1.237938e-01,-1.086814e-01,1.086814e-01,-6.379798e-02,6.379798e-02,-7.526021e-02,7.526021e-02,-8.297097e-02,8.297097e-02,-8.186337e-02,8.186337e-02,-7.627362e-02,7.627362e-02,-1.061638e-01,1.061638e-01,-8.328494e-02,8.328494e-02,-1.040895e-01,1.040895e-01,-7.649056e-02,7.649056e-02,-7.299058e-02,7.299058e-02,-9.195198e-02,9.195198e-02,-7.990880e-02,7.990880e-02,-7.429346e-02,7.429346e-02,-9.991702e-02,9.991702e-02,-9.755385e-02,9.755385e-02,-1.344138e-01,1.344138e-01,-1.707917e-01,1.707917e-01,-8.325450e-02,8.325450e-02,-8.137793e-02,8.137793e-02,-8.308659e-02,8.308659e-02,-7.440414e-02,7.440414e-02,-7.012744e-02,7.012744e-02,-8.122943e-02,8.122943e-02,-8.845462e-02,8.845462e-02,-8.803450e-02,8.803450e-02,-9.653392e-02,9.653392e-02,-8.795691e-02,8.795691e-02,-1.119045e-01,1.119045e-01,-1.068308e-01,1.068308e-01,-8.406359e-02,8.406359e-02,-1.220414e-01,1.220414e-01,-1.024235e-01,1.024235e-01,-1.252897e-01,1.252897e-01,-1.121234e-01,1.121234e-01,-9.054150e-02,9.054150e-02,-8.974435e-02,8.974435e-02,-1.351578e-01,1.351578e-01,-1.106442e-01,1.106442e-01,-8.093913e-02,8.093913e-02,-9.800762e-02,9.800762e-02,-7.012823e-02,7.012823e-02,-7.434949e-02,7.434949e-02,-8.684816e-02,8.684816e-02,-8.916388e-02,8.916388e-02,-8.773159e-02,8.773159e-02,-7.709608e-02,7.709608e-02,-7.230518e-02,7.230518e-02,-9.662156e-02,9.662156e-02,-7.957632e-02,7.957632e-02,-7.628441e-02,7.628441e-02,-8.050202e-02,8.050202e-02,-1.290593e-01,1.290593e-01,-9.246182e-02,9.246182e-02,-9.703662e-02,9.703662e-02,-7.866445e-02,7.866445e-02,-1.064783e-01,1.064783e-01,-1.012339e-01,1.012339e-01,-6.828389e-02,6.828389e-02,-1.005039e-01,1.005039e-01,-7.559687e-02,7.559687e-02,-6.359878e-02,6.359878e-02,-8.387002e-02,8.387002e-02,-7.851323e-02,7.851323e-02,-8.878569e-02,8.878569e-02,-7.767654e-02,7.767654e-02,-8.033338e-02,8.033338e-02,-9.142797e-02,9.142797e-02,-8.590585e-02,8.590585e-02,-1.052318e-01,1.052318e-01,-8.760062e-02,8.760062e-02,-9.222192e-02,9.222192e-02,-7.548828e-02,7.548828e-02,-8.003344e-02,8.003344e-02,-1.177076e-01,1.177076e-01,-1.064964e-01,1.064964e-01,-8.655553e-02,8.655553e-02,-9.418112e-02,9.418112e-02,-7.248163e-02,7.248163e-02,-7.120974e-02,7.120974e-02,-6.393114e-02,6.393114e-02,-7.997487e-02,7.997487e-02,-1.220941e-01,1.220941e-01,-9.892518e-02,9.892518e-02,-8.270271e-02,8.270271e-02,-1.069400e-01,1.069400e-01,-5.860771e-02,5.860771e-02,-9.126600e-02,9.126600e-02,-6.212559e-02,6.212559e-02,-9.397538e-02,9.397538e-02,-8.070447e-02,8.070447e-02,-8.415587e-02,8.415587e-02,-8.564455e-02,8.564455e-02,-7.791811e-02,7.791811e-02,-6.642259e-02,6.642259e-02,-8.266167e-02,8.266167e-02,-1.134986e-01,1.134986e-01,-1.045267e-01,1.045267e-01,-7.122085e-02,7.122085e-02,-7.979415e-02,7.979415e-02,-7.922347e-02,7.922347e-02,-9.003421e-02,9.003421e-02,-8.796449e-02,8.796449e-02,-7.933279e-02,7.933279e-02,-8.307947e-02,8.307947e-02,-8.946349e-02,8.946349e-02,-7.643384e-02,7.643384e-02,-7.818534e-02,7.818534e-02,-7.990991e-02,7.990991e-02,-9.885664e-02,9.885664e-02,-8.071329e-02,8.071329e-02,-6.952112e-02,6.952112e-02,-6.429706e-02,6.429706e-02,-6.307229e-02,6.307229e-02,-8.100137e-02,8.100137e-02,-7.693623e-02,7.693623e-02,-6.906625e-02,6.906625e-02,-7.390462e-02,7.390462e-02,-6.487217e-02,6.487217e-02,-1.233681e-01,1.233681e-01,-6.979273e-02,6.979273e-02,-8.358669e-02,8.358669e-02,-1.095420e-01,1.095420e-01,-8.519717e-02,8.519717e-02,-7.599857e-02,7.599857e-02,-6.042816e-02,6.042816e-02,-6.546304e-02,6.546304e-02,-1.016245e-01,1.016245e-01,-8.308787e-02,8.308787e-02,-7.385708e-02,7.385708e-02,-6.751630e-02,6.751630e-02,-9.036695e-02,9.036695e-02,-9.371335e-02,9.371335e-02,-1.116088e-01,1.116088e-01,-5.693741e-02,5.693741e-02,-6.383983e-02,6.383983e-02,-5.389843e-02,5.389843e-02,-8.383191e-02,8.383191e-02,-7.820822e-02,7.820822e-02,-7.067557e-02,7.067557e-02,-7.971948e-02,7.971948e-02,-7.360668e-02,7.360668e-02,-7.008027e-02,7.008027e-02,-8.013378e-02,8.013378e-02,-8.331605e-02,8.331605e-02,-7.145702e-02,7.145702e-02,-7.863940e-02,7.863940e-02,-6.992679e-02,6.992679e-02,-5.716495e-02,5.716495e-02,-5.306006e-02,5.306006e-02,-8.855639e-02,8.855639e-02,-7.656397e-02,7.656397e-02,-6.939272e-02,6.939272e-02,-7.523742e-02,7.523742e-02,-8.472299e-02,8.472299e-02,-8.114341e-02,8.114341e-02,-6.795517e-02,6.795517e-02,-7.890130e-02,7.890130e-02,-7.488741e-02,7.488741e-02,-9.281972e-02,9.281972e-02,-9.325498e-02,9.325498e-02,-1.401587e-01,1.401587e-01,-1.176284e-01,1.176284e-01,-8.867597e-02,8.867597e-02,-8.124232e-02,8.124232e-02,-9.441235e-02,9.441235e-02,-8.029452e-02,8.029452e-02,-8.581848e-02,8.581848e-02,-1.029819e-01,1.029819e-01,-9.569118e-02,9.569118e-02,-7.690893e-02,7.690893e-02,-9.018228e-02,9.018228e-02,-1.049209e-01,1.049209e-01,-8.969413e-02,8.969413e-02,-8.651891e-02,8.651891e-02,-8.613331e-02,8.613331e-02,-7.120468e-02,7.120468e-02,-8.743959e-02,8.743959e-02,-7.607158e-02,7.607158e-02,-1.015547e-01,1.015547e-01,-8.090879e-02,8.090879e-02,-7.114079e-02,7.114079e-02,-8.744835e-02,8.744835e-02,-6.074904e-02,6.074904e-02,-6.919871e-02,6.919871e-02,-7.607774e-02,7.607774e-02,-9.444600e-02,9.444600e-02,-7.833429e-02,7.833429e-02,-6.817555e-02,6.817555e-02,-8.997390e-02,8.997390e-02,-9.845223e-02,9.845223e-02,-7.894180e-02,7.894180e-02,-7.921373e-02,7.921373e-02,-7.448032e-02,7.448032e-02,-1.178165e-01,1.178165e-01,-8.216686e-02,8.216686e-02,-8.103286e-02,8.103286e-02,-6.981470e-02,6.981470e-02,-8.709008e-02,8.709008e-02,-8.336259e-02,8.336259e-02,-6.213589e-02,6.213589e-02,-7.068045e-02,7.068045e-02,-6.915676e-02,6.915676e-02,-7.103416e-02,7.103416e-02,-6.523849e-02,6.523849e-02,-7.634760e-02,7.634760e-02,-7.263038e-02,7.263038e-02,-7.164396e-02,7.164396e-02,-8.745559e-02,8.745559e-02,-6.960181e-02,6.960181e-02,-8.500098e-02,8.500098e-02,-6.523260e-02,6.523260e-02,-7.319714e-02,7.319714e-02,-6.268125e-02,6.268125e-02,-7.083135e-02,7.083135e-02,-7.984517e-02,7.984517e-02,-1.256265e-01,1.256265e-01,-1.065412e-01,1.065412e-01,-8.524323e-02,8.524323e-02,-9.291364e-02,9.291364e-02,-7.936567e-02,7.936567e-02,-8.607723e-02,8.607723e-02,-7.583416e-02,7.583416e-02,-7.931928e-02,7.931928e-02,-7.408357e-02,7.408357e-02,-1.034404e-01,1.034404e-01,-1.012127e-01,1.012127e-01,-7.916689e-02,7.916689e-02,-8.753651e-02,8.753651e-02,-6.090366e-02,6.090366e-02,-7.500103e-02,7.500103e-02,-1.228709e-01,1.228709e-01,-6.318201e-02,6.318201e-02,-7.585420e-02,7.585420e-02,-7.089090e-02,7.089090e-02,-1.053542e-01,1.053542e-01,-8.549521e-02,8.549521e-02,-7.906308e-02,7.906308e-02,-6.338780e-02,6.338780e-02,-8.417910e-02,8.417910e-02,-7.115511e-02,7.115511e-02,-7.693949e-02,7.693949e-02,-7.446749e-02,7.446749e-02,-1.037929e-01,1.037929e-01,-7.991005e-02,7.991005e-02,-7.119439e-02,7.119439e-02,-7.071340e-02,7.071340e-02,-8.587362e-02,8.587362e-02,-7.001236e-02,7.001236e-02,-7.567115e-02,7.567115e-02,-7.118930e-02,7.118930e-02,-6.844895e-02,6.844895e-02,-1.035118e-01,1.035118e-01,-8.156618e-02,8.156618e-02,-7.449593e-02,7.449593e-02,-8.154360e-02,8.154360e-02,-9.110878e-02,9.110878e-02,-6.222534e-02,6.222534e-02,-1.033841e-01,1.033841e-01,-6.811687e-02,6.811687e-02,-6.828443e-02,6.828443e-02,-5.769408e-02,5.769408e-02,-5.917684e-02,5.917684e-02,-8.358868e-02,8.358868e-02]}]};

/*** <End:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/glasses/face.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/glasses/stackblur.js"> ***/
/*

StackBlur - a fast almost Gaussian Blur For Canvas

Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr: 
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

var mul_table = [
        512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
        454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
        482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
        437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
        497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
        320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
        446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
        329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
        505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
        399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
        324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
        268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
        451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
        385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
        332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
        289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];
        
   
var shg_table = [
	     9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 
		17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 
		19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
		20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
		21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
		21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 
		22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
		22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 
		23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
		23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
		23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 
		23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 
		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

function stackBlurImage( imageID, canvasID, radius, blurAlphaChannel )
{
			
 	var img = document.getElementById( imageID );
	var w = img.naturalWidth;
    var h = img.naturalHeight;
       
	var canvas = document.getElementById( canvasID );
      
    canvas.style.width  = w + "px";
    canvas.style.height = h + "px";
    canvas.width = w;
    canvas.height = h;
    
    var context = canvas.getContext("2d");
    context.clearRect( 0, 0, w, h );
    context.drawImage( img, 0, 0 );

	if ( isNaN(radius) || radius < 1 ) return;
	
	if ( blurAlphaChannel )
		stackBlurCanvasRGBA( canvasID, 0, 0, w, h, radius );
	else 
		stackBlurCanvasRGB( canvasID, 0, 0, w, h, radius );
}


function stackBlurCanvasRGBA( id, top_x, top_y, width, height, radius )
{
	if ( isNaN(radius) || radius < 1 ) return;
	radius |= 0;
	
	var canvas  = document.getElementById( id );
	var context = canvas.getContext("2d");
	var imageData;
	
	try {
	  try {
		imageData = context.getImageData( top_x, top_y, width, height );
	  } catch(e) {
	  
		// NOTE: this part is supposedly only needed if you want to work with local files
		// so it might be okay to remove the whole try/catch block and just use
		// imageData = context.getImageData( top_x, top_y, width, height );
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
			imageData = context.getImageData( top_x, top_y, width, height );
		} catch(e) {
			alert("Cannot access local image");
			throw new Error("unable to access local image data: " + e);
			return;
		}
	  }
	} catch(e) {
	  alert("Cannot access image");
	  throw new Error("unable to access image data: " + e);
	}
			
	var pixels = imageData.data;
			
	var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, 
	r_out_sum, g_out_sum, b_out_sum, a_out_sum,
	r_in_sum, g_in_sum, b_in_sum, a_in_sum, 
	pr, pg, pb, pa, rbs;
			
	var div = radius + radius + 1;
	var w4 = width << 2;
	var widthMinus1  = width - 1;
	var heightMinus1 = height - 1;
	var radiusPlus1  = radius + 1;
	var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
	
	var stackStart = new BlurStack();
	var stack = stackStart;
	for ( i = 1; i < div; i++ )
	{
		stack = stack.next = new BlurStack();
		if ( i == radiusPlus1 ) var stackEnd = stack;
	}
	stack.next = stackStart;
	var stackIn = null;
	var stackOut = null;
	
	yw = yi = 0;
	
	var mul_sum = mul_table[radius];
	var shg_sum = shg_table[radius];
	
	for ( y = 0; y < height; y++ )
	{
		r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
		
		r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
		g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
		b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
		a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );
		
		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		a_sum += sumFactor * pa;
		
		stack = stackStart;
		
		for( i = 0; i < radiusPlus1; i++ )
		{
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack.a = pa;
			stack = stack.next;
		}
		
		for( i = 1; i < radiusPlus1; i++ )
		{
			p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
			r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
			g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
			b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
			a_sum += ( stack.a = ( pa = pixels[p+3])) * rbs;
			
			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			a_in_sum += pa;
			
			stack = stack.next;
		}
		
		
		stackIn = stackStart;
		stackOut = stackEnd;
		for ( x = 0; x < width; x++ )
		{
			pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
			if ( pa != 0 )
			{
				pa = 255 / pa;
				pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
				pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
				pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
			} else {
				pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
			}
			
			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			a_sum -= a_out_sum;
			
			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			a_out_sum -= stackIn.a;
			
			p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
			
			r_in_sum += ( stackIn.r = pixels[p]);
			g_in_sum += ( stackIn.g = pixels[p+1]);
			b_in_sum += ( stackIn.b = pixels[p+2]);
			a_in_sum += ( stackIn.a = pixels[p+3]);
			
			r_sum += r_in_sum;
			g_sum += g_in_sum;
			b_sum += b_in_sum;
			a_sum += a_in_sum;
			
			stackIn = stackIn.next;
			
			r_out_sum += ( pr = stackOut.r );
			g_out_sum += ( pg = stackOut.g );
			b_out_sum += ( pb = stackOut.b );
			a_out_sum += ( pa = stackOut.a );
			
			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			a_in_sum -= pa;
			
			stackOut = stackOut.next;

			yi += 4;
		}
		yw += width;
	}

	
	for ( x = 0; x < width; x++ )
	{
		g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
		
		yi = x << 2;
		r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
		g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
		b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
		a_out_sum = radiusPlus1 * ( pa = pixels[yi+3]);
		
		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		a_sum += sumFactor * pa;
		
		stack = stackStart;
		
		for( i = 0; i < radiusPlus1; i++ )
		{
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack.a = pa;
			stack = stack.next;
		}
		
		yp = width;
		
		for( i = 1; i <= radius; i++ )
		{
			yi = ( yp + x ) << 2;
			
			r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
			g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
			b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
			a_sum += ( stack.a = ( pa = pixels[yi+3])) * rbs;
		   
			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			a_in_sum += pa;
			
			stack = stack.next;
		
			if( i < heightMinus1 )
			{
				yp += width;
			}
		}
		
		yi = x;
		stackIn = stackStart;
		stackOut = stackEnd;
		for ( y = 0; y < height; y++ )
		{
			p = yi << 2;
			pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
			if ( pa > 0 )
			{
				pa = 255 / pa;
				pixels[p]   = ((r_sum * mul_sum) >> shg_sum ) * pa;
				pixels[p+1] = ((g_sum * mul_sum) >> shg_sum ) * pa;
				pixels[p+2] = ((b_sum * mul_sum) >> shg_sum ) * pa;
			} else {
				pixels[p] = pixels[p+1] = pixels[p+2] = 0;
			}
			
			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			a_sum -= a_out_sum;
		   
			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			a_out_sum -= stackIn.a;
			
			p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
			
			r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
			g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
			b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
			a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3]));
		   
			stackIn = stackIn.next;
			
			r_out_sum += ( pr = stackOut.r );
			g_out_sum += ( pg = stackOut.g );
			b_out_sum += ( pb = stackOut.b );
			a_out_sum += ( pa = stackOut.a );
			
			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			a_in_sum -= pa;
			
			stackOut = stackOut.next;
			
			yi += width;
		}
	}
	
	context.putImageData( imageData, top_x, top_y );
	
}


function stackBlurCanvasRGB( id, top_x, top_y, width, height, radius )
{
	if ( isNaN(radius) || radius < 1 ) return;
	radius |= 0;
	
	var canvas  = document.getElementById( id );
	var context = canvas.getContext("2d");
	var imageData;
	
	try {
	  try {
		imageData = context.getImageData( top_x, top_y, width, height );
	  } catch(e) {
	  
		// NOTE: this part is supposedly only needed if you want to work with local files
		// so it might be okay to remove the whole try/catch block and just use
		// imageData = context.getImageData( top_x, top_y, width, height );
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
			imageData = context.getImageData( top_x, top_y, width, height );
		} catch(e) {
			alert("Cannot access local image");
			throw new Error("unable to access local image data: " + e);
			return;
		}
	  }
	} catch(e) {
	  alert("Cannot access image");
	  throw new Error("unable to access image data: " + e);
	}
			
	var pixels = imageData.data;
			
	var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
	r_out_sum, g_out_sum, b_out_sum,
	r_in_sum, g_in_sum, b_in_sum,
	pr, pg, pb, rbs;
			
	var div = radius + radius + 1;
	var w4 = width << 2;
	var widthMinus1  = width - 1;
	var heightMinus1 = height - 1;
	var radiusPlus1  = radius + 1;
	var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
	
	var stackStart = new BlurStack();
	var stack = stackStart;
	for ( i = 1; i < div; i++ )
	{
		stack = stack.next = new BlurStack();
		if ( i == radiusPlus1 ) var stackEnd = stack;
	}
	stack.next = stackStart;
	var stackIn = null;
	var stackOut = null;
	
	yw = yi = 0;
	
	var mul_sum = mul_table[radius];
	var shg_sum = shg_table[radius];
	
	for ( y = 0; y < height; y++ )
	{
		r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
		
		r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
		g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
		b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
		
		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		
		stack = stackStart;
		
		for( i = 0; i < radiusPlus1; i++ )
		{
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack = stack.next;
		}
		
		for( i = 1; i < radiusPlus1; i++ )
		{
			p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
			r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
			g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
			b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
			
			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			
			stack = stack.next;
		}
		
		
		stackIn = stackStart;
		stackOut = stackEnd;
		for ( x = 0; x < width; x++ )
		{
			pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
			pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
			pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
			
			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			
			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			
			p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
			
			r_in_sum += ( stackIn.r = pixels[p]);
			g_in_sum += ( stackIn.g = pixels[p+1]);
			b_in_sum += ( stackIn.b = pixels[p+2]);
			
			r_sum += r_in_sum;
			g_sum += g_in_sum;
			b_sum += b_in_sum;
			
			stackIn = stackIn.next;
			
			r_out_sum += ( pr = stackOut.r );
			g_out_sum += ( pg = stackOut.g );
			b_out_sum += ( pb = stackOut.b );
			
			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			
			stackOut = stackOut.next;

			yi += 4;
		}
		yw += width;
	}

	
	for ( x = 0; x < width; x++ )
	{
		g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
		
		yi = x << 2;
		r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
		g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
		b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
		
		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		
		stack = stackStart;
		
		for( i = 0; i < radiusPlus1; i++ )
		{
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack = stack.next;
		}
		
		yp = width;
		
		for( i = 1; i <= radius; i++ )
		{
			yi = ( yp + x ) << 2;
			
			r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
			g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
			b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
			
			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			
			stack = stack.next;
		
			if( i < heightMinus1 )
			{
				yp += width;
			}
		}
		
		yi = x;
		stackIn = stackStart;
		stackOut = stackEnd;
		for ( y = 0; y < height; y++ )
		{
			p = yi << 2;
			pixels[p]   = (r_sum * mul_sum) >> shg_sum;
			pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
			pixels[p+2] = (b_sum * mul_sum) >> shg_sum;
			
			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			
			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			
			p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
			
			r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
			g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
			b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
			
			stackIn = stackIn.next;
			
			r_out_sum += ( pr = stackOut.r );
			g_out_sum += ( pg = stackOut.g );
			b_out_sum += ( pb = stackOut.b );
			
			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			
			stackOut = stackOut.next;
			
			yi += width;
		}
	}
	
	context.putImageData( imageData, top_x, top_y );
	
}

function BlurStack()
{
	this.r = 0;
	this.g = 0;
	this.b = 0;
	this.a = 0;
	this.next = null;
}
/*** <End:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/glasses/stackblur.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/jquery-1.7.1.min.js"> ***/
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*** <End:getusermedia LoadJs:"components/getusermedia/face-detection-demo/js/jquery-1.7.1.min.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/lib/getUserMedia.js"> ***/
/*global navigator, document */
;(function (window, document) {
    "use strict";

    window.getUserMedia = function (options, successCallback, errorCallback) {

        // Options are required
        if (options !== undefined) {

            // getUserMedia() feature detection
            navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

            if ( !! navigator.getUserMedia_) {


                // constructing a getUserMedia config-object and 
                // an string (we will try both)
                var option_object = {};
                var option_string = '';
                var getUserMediaOptions, container, temp, video, ow, oh;

                if (options.video === true) {
                    option_object.video = true;
                    option_string = 'video';
                }
                if (options.audio === true) {
                    option_object.audio = true;
                    if (option_string !== '') {
                        option_string = option_string + ', ';
                    }
                    option_string = option_string + 'audio';
                }

                container = document.getElementById(options.el);
                temp = document.createElement('video');

                // Fix for ratio
                ow = parseInt(container.offsetWidth, 10);
                oh = parseInt(container.offsetHeight, 10);

                if (options.width < ow && options.height < oh) {
                    options.width = ow;
                    options.height = oh;
                }

                // configure the interim video
                temp.width = options.width;
                temp.height = options.height;
                temp.autoplay = true;
                container.appendChild(temp);
                video = temp;

                // referenced for use in your applications
                options.videoEl = video;
                options.context = 'webrtc';

                // first we try if getUserMedia supports the config object
                try {
                    // try object
                    navigator.getUserMedia_(option_object, successCallback, errorCallback);
                } catch (e) {
                    // option object fails
                    try {
                        // try string syntax
                        // if the config object failes, we try a config string
                        navigator.getUserMedia_(option_string, successCallback, errorCallback);
                    } catch (e2) {
                        // both failed
                        // neither object nor string works
                        return undefined;
                    }
                }
            } else {

                // Act as a plain getUserMedia shield if no fallback is required
                if (options.noFallback === undefined || options.noFallback === false) {

                    // Fallback to flash
                    var source, el, cam;

                    source = '<!--[if IE]>'+
                    '<object id="XwebcamXobjectX" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + options.width + '" height="' + options.height + '">'+
                    '<param name="movie" value="' + options.swffile + '" />'+
                    '<![endif]-->'+
                    '<!--[if !IE]>-->'+
                    '<object id="XwebcamXobjectX" type="application/x-shockwave-flash" data="' + options.swffile + '" width="' + options.width + '" height="' + options.height + '">'+
                    '<!--<![endif]-->'+
                    '<param name="FlashVars" value="mode=' + options.mode + '&amp;quality=' + options.quality + '" />'+
                    '<param name="allowScriptAccess" value="always" />'+
                    '</object>';
                    el = document.getElementById(options.el);
                    el.innerHTML = source;


                    (function register(run) {

                        cam = document.getElementById('XwebcamXobjectX');

                        if (cam.capture !== undefined) {

                            // Simple callback methods are not allowed 
                            options.capture = function (x) {
                                try {
                                    return cam.capture(x);
                                } catch (e) {}
                            };
                            options.save = function (x) {
                                try {
                                    return cam.save(x);
                                } catch (e) {

                                }
                            };
                            options.setCamera = function (x) {
                                try {
                                    return cam.setCamera(x);
                                } catch (e) {}
                            };
                            options.getCameraList = function () {
                                try {
                                    return cam.getCameraList();
                                } catch (e) {}
                            };

                            // options.onLoad();
                            options.context = 'flash';
                            options.onLoad = successCallback;

                        } else if (run === 0) {
                            // options.debug("error", "Flash movie not yet registered!");
                            errorCallback();
                        } else {
                            // Flash interface not ready yet 
                            window.setTimeout(register, 1000 * (4 - run), run - 1);
                        }
                    }(3));

                }

            }
        }
    };

}(this, document));

/*** <End:getusermedia LoadJs:"components/getusermedia/lib/getUserMedia.js"> ***/
/*** <Start:getusermedia LoadJs:"components/getusermedia/lib/getUserMedia.noFallback.js"> ***/
/*global navigator, document */
/*this is a special version of the library with flash fallback support
stripped out, for anyone that wants it*/
;(function (window, document) {
    "use strict";

    window.getUserMedia = function (options, successCallback, errorCallback) {

        // Options are required
        if (options !== undefined) {

            // getUserMedia() feature detection
            navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

            if ( !! navigator.getUserMedia_) {

                // constructing a getUserMedia config-object and 
                // an string (we will try both)
                var option_object = {};
                var option_string = '';
                var container, temp, video, ow, oh;

                if (options.video === true) {
                    option_object.video = true;
                    option_string = 'video';
                }
                if (options.audio === true) {
                    option_object.audio = true;
                    if (option_string !== '') {
                        option_string = option_string + ', ';
                    }
                    option_string = option_string + 'audio';
                }

                container = document.getElementById(options.el);
                temp = document.createElement('video');

                // Fix for ratio
                ow = parseInt(container.offsetWidth, 10);
                oh = parseInt(container.offsetHeight, 10);

                if (options.width < ow && options.height < oh) {
                    options.width = ow;
                    options.height = oh;
                }

                // configure the interim video
                temp.width = options.width;
                temp.height = options.height;
                temp.autoplay = true;
                container.appendChild(temp);
                video = temp;

                // referenced for use in your applications
                options.videoEl = video;
                options.context = 'webrtc';

                // first we try if getUserMedia supports the config object
                try {
                    // try object
                    navigator.getUserMedia_(option_object, successCallback, errorCallback);
                } catch (e) {
                    // option object fails
                    try {
                        // try string syntax
                        // if the config object failes, we try a config string
                        navigator.getUserMedia_(option_string, successCallback, errorCallback);
                    } catch (e2) {
                        // both failed
                        // neither object nor string works
                        return undefined;
                    }
                }
            } 
        }
    };

}(this, document));
/*** <End:getusermedia LoadJs:"components/getusermedia/lib/getUserMedia.noFallback.js"> ***/
/*** <End:getusermedia> ***/