(function(k){function D(l,r){var v=l[0]-r[0],d=l[1]-r[1];return v*v+d*d}function H(l){for(var r=0,v=0,d=0,f=l.length-3;d<f;d+=2){r+=l[d];v+=l[d+1]}l=(l.length-2)*2;return[r/l<<0,v/l<<0]}function ra(l){var r=l.length/2,v=new Fa(r),d=0,f=r-1,g,m,s,w,E=[],M=[],I=[];for(v[d]=v[f]=1;f;){m=0;for(g=d+1;g<f;g++){s=l[g*2];var N=l[g*2+1],$=l[d*2],P=l[d*2+1],Q=l[f*2],J=l[f*2+1],x=Q-$,K=J-P,L=void 0;if(x!==0||K!==0){L=((s-$)*x+(N-P)*K)/(x*x+K*K);if(L>1){$=Q;P=J}else if(L>0){$+=x*L;P+=K*L}}x=s-$;K=N-P;s=x*x+K*
K;if(s>m){w=g;m=s}}if(m>2){v[w]=1;E.push(d);M.push(w);E.push(w);M.push(f)}d=E.pop();f=M.pop()}for(g=0;g<r;g++)v[g]&&I.push(l[g*2],l[g*2+1]);return I}var Ga=Ga||Array,Fa=Fa||Array,Ka=Math.exp,La=Math.log,Ha=Math.tan,Ma=Math.atan,xa=Math.min,Na=Math.max,ya=k.document,R=function(){function l(d,f,g){if(g<0)g+=1;if(g>1)g-=1;if(g<1/6)return d+(f-d)*6*g;if(g<0.5)return f;if(g<2/3)return d+(f-d)*(2/3-g)*6;return d}function r(d,f,g,m){this.r=d;this.g=f;this.b=g;this.a=arguments.length<4?1:m}var v=r.prototype;
v.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join(",")+")"};v.adjustLightness=function(d){var f=R.toHSLA(this);f.l*=d;f.l=Math.min(1,Math.max(0,f.l));var g,m;if(f.s===0)d=g=m=f.l;else{m=f.l<0.5?f.l*(1+f.s):f.l+f.s-f.l*f.s;var s=2*f.l-m;d=l(s,m,f.h+1/3);g=l(s,m,f.h);m=l(s,m,f.h-1/3)}return new R(d*255<<0,g*255<<0,m*255<<0,f.a)};v.adjustAlpha=function(d){return new R(this.r,this.g,this.b,this.a*d)};r.parse=function(d){d+="";if(~d.indexOf("#")){d=d.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);
return new R(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16),d[4]?parseInt(d[4],16)/255:1)}if(d=d.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new R(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),d[4]?parseFloat(d[5],10):1)};r.toHSLA=function(d){var f=d.r/255,g=d.g/255,m=d.b/255,s=Math.max(f,g,m),w=Math.min(f,g,m),E,M=(s+w)/2,I;if(s===w)E=w=0;else{I=s-w;w=M>0.5?I/(2-s-w):I/(s+w);switch(s){case f:E=(g-m)/I+(g<m?6:0);break;case g:E=(m-f)/I+2;break;case m:E=(f-g)/I+4;break}E/=
6}return{h:E,s:w,l:M,a:d.a}};return r}(),ga=Math.PI,Ia=ga/2,Oa=ga/4,Pa=180/ga,Qa=256,za=14,ha="latitude",ia="longitude",X=0,Y=1,S=2,aa=3,sa=4,ja=5,Z=6;k.OSMBuildings=function(l){function r(a,e){var b={};a/=ka;e/=ka;b[ha]=e<=0?90:e>=1?-90:Pa*(2*Ma(Ka(ga*(1-2*e)))-Ia);b[ia]=(a===1?1:(a%1+1)%1)*360-180;return b}function v(a,e){return a.replace(/\{ *([\w_]+) *\}/g,function(b,c){return e[c]})}function d(a,e){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<
200||b.status>299||b.responseText&&e(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function f(){if(!(!Aa||O<za)){var a=r(L-x,da-K),e=r(L+Q+x,da+J+K);ta&&ta.abort();ta=d(v(Aa,{w:a[ia],n:a[ha],e:e[ia],s:e[ha],z:O}),g)}}function g(a){var e,b,c,i=[],h,j=h=0;la=za;M(O);ta=null;if(!(!a||a.meta.z!==O)){c=a.meta;b=a.data;if(A&&u&&A.z===c.z){h=A.x-c.x;j=A.y-c.y;a=0;for(e=u.length;a<e;a++)i[a]=u[a][S][0]+h+","+(u[a][S][1]+j)}A=c;u=[];a=0;for(e=b.length;a<e;a++){c=[];if(!(b[a][Y]>ma)){h=
ra(b[a][S]);if(!(h.length<8)){c[S]=h;c[sa]=H(h);c[X]=xa(b[a][X],ma);c[Y]=b[a][Y];h=c[S][0]+","+c[S][1];c[ja]=!(i&&~i.indexOf(h));c[aa]=[];c[Z]=[];u.push(c)}}}I()}}function m(a,e){var b=[],c,i,h,j,o,n,p,F,y,G=Ba-O;c=0;for(i=a.length;c<i;c++){o=a[c];F=o[Y]>>G;if(!(F>ma)){n=o[S];y=new Ga(n.length);h=0;for(j=n.length-1;h<j;h+=2){p=n[h+1];var T=xa(1,Na(0,0.5-La(Ha(Oa+Ia*n[h]/180))/ga/2));p={x:(p/360+0.5)*ka<<0,y:T*ka<<0};y[h]=p.x;y[h+1]=p.y}y=ra(y);if(!(y.length<8)){j=[];j[S]=y;j[sa]=H(y);j[X]=xa(o[X]>>
G,ma);j[Y]=F;j[ja]=e;j[aa]=o[aa];j[Z]=[];for(h=0;h<3;h++)if(j[aa][h])j[Z][h]=j[aa][h].adjustAlpha(U)+"";b.push(j)}}}return b}function s(a,e){if(typeof a==="object")E(a,!e);else{var b=ya.documentElement,c=ya.createElement("script");k.jsonpCallback=function(i){delete k.jsonpCallback;b.removeChild(c);E(i,!e)};b.insertBefore(c,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function w(a,e,b){if(b===undefined)b=[];var c,i,h,j=a[0]?a:a.features,o,n,p,F,y,G=e?1:0,T=e?0:1;if(j){c=0;for(a=j.length;c<
a;c++)w(j[c],e,b);return b}if(a.type==="Feature"){o=a.geometry;c=a.properties}if(o.type==="Polygon")n=[o.coordinates];if(o.type==="MultiPolygon")n=o.coordinates;if(n){e=c.height;if(c.color||c.wallColor)F=R.parse(c.color||c.wallColor);if(c.roofColor)y=R.parse(c.roofColor);c=0;for(a=n.length;c<a;c++){j=n[c][0];p=[];i=o=0;for(h=j.length;i<h;i++){p.push(j[i][G],j[i][T]);o+=e||j[i][2]||0}if(o){i=[];h=S;var t=void 0,q=void 0,B=void 0,V=void 0,na=0,W=void 0,Ja=void 0;W=0;for(Ja=p.length-3;W<Ja;W+=2){t=p[W];
q=p[W+1];B=p[W+2];V=p[W+3];na+=t*V-B*q}if((na/2>0?"CW":"CCW")==="CW")p=p;else{t=[];for(q=p.length-2;q>=0;q-=2)t.push(p[q],p[q+1]);p=t}i[h]=p;i[X]=o/j.length<<0;i[aa]=[F||null,F?F.adjustLightness(0.8):null,y?y:F?F.adjustLightness(1.2):ca];b.push(i)}}}return b}function E(a,e){if(a){oa=w(a,e);la=0;M(O);A={n:90,w:-180,s:-90,e:180,x:0,y:0,z:O};u=m(oa,true);I()}else{oa=null;N()}}function M(a){var e,b,c;O=a;ka=Qa<<O;U=1-(O-la)*0.3/(Ba-la);Ca=ba.adjustAlpha(U)+"";ua=va.adjustAlpha(U)+"";wa=ca.adjustAlpha(U)+
"";if(u){a=0;for(e=u.length;a<e;a++){c=u[a];c[Z]=[];for(b=0;b<3;b++)if(c[aa][b])c[Z][b]=c[aa][b].adjustAlpha(U)+""}}}function I(){ea=0;clearInterval(Da);Da=setInterval(function(){ea+=0.1;if(ea>1){clearInterval(Da);ea=1;for(var a=0,e=u.length;a<e;a++)u[a][ja]=0}N()},33)}function N(){z.clearRect(0,0,Q,J);if(A&&u)if(!(O<la||Ea)){var a,e,b,c,i,h,j,o,n,p=L-A.x,F=da-A.y,y=[pa+p,qa+F],G,T,t,q,B,V;u.sort(function(na,W){return D(W[sa],y)/W[X]-D(na[sa],y)/na[X]});a=0;for(e=u.length;a<e;a++){i=u[a];t=false;
h=i[S];G=[];b=0;for(c=h.length-1;b<c;b+=2){G[b]=o=h[b]-p;G[b+1]=n=h[b+1]-F;t||(t=o>0&&o<Q&&n>0&&n<J)}if(t){b=i[ja]?i[X]*ea:i[X];h=fa/(fa-b);if(i[Y]){b=i[ja]?i[Y]*ea:i[Y];j=fa/(fa-b)}o=[];T=[];b=0;for(c=G.length-3;b<c;b+=2){n=G[b];q=G[b+1];t=G[b+2];B=G[b+3];V=P(n,q,h);T=P(t,B,h);if(i[Y]){q=P(n,q,j);B=P(t,B,j);n=q.x;q=q.y;t=B.x;B=B.y}if((t-n)*(V.y-q)>(V.x-n)*(B-q)){T=[t+0.5,B+0.5,n+0.5,q+0.5,V.x,V.y,T.x,T.y];z.fillStyle=n<t&&q<B||n>t&&q>B?i[Z][1]||ua:i[Z][0]||Ca;$(T)}o[b]=V.x;o[b+1]=V.y}z.fillStyle=
i[Z][2]||wa;z.strokeStyle=i[Z][1]||ua;$(o,true)}}}}function $(a,e){if(a.length){z.beginPath();z.moveTo(a[0],a[1]);for(var b=2,c=a.length;b<c;b+=2)z.lineTo(a[b],a[b+1]);z.closePath();e&&z.stroke();z.fill()}}function P(a,e,b){return{x:((a-pa)*b+pa<<0)+0.5,y:((e-qa)*b+qa<<0)+0.5}}var Q=0,J=0,x=0,K=0,L=0,da=0,O,ka,ta,C,z,Aa,ba=new R(200,190,180),va=ba.adjustLightness(0.8),ca=ba.adjustLightness(1.2),Ca=ba+"",ua=va+"",wa=ca+"",oa,A,u,ea=1,Da,U=1,la=za,Ba=20,ma,pa,qa,fa,Ea;this.setStyle=function(a){a=(a=
a)||{};if(a.color||a.wallColor){ba=R.parse(a.color||a.wallColor);Ca=ba.adjustAlpha(U)+"";va=ba.adjustLightness(0.8);ua=va.adjustAlpha(U)+"";ca=ba.adjustLightness(1.2);wa=ca.adjustAlpha(U)+""}if(a.roofColor){ca=R.parse(a.roofColor);wa=ca.adjustAlpha(U)+""}N();return this};this.geoJSON=function(a,e){s(a,e);return this};this.setCamOffset=function(a,e){pa=x+a;qa=J+e};this.setMaxZoom=function(a){Ba=a};this.createCanvas=function(a){C=ya.createElement("canvas");C.style.webkitTransform="translate3d(0,0,0)";
C.style.imageRendering="optimizeSpeed";C.style.position="absolute";C.style.pointerEvents="none";C.style.left=0;C.style.top=0;a.appendChild(C);z=C.getContext("2d");z.lineCap="round";z.lineJoin="round";z.lineWidth=1;try{z.mozImageSmoothingEnabled=false}catch(e){}return C};this.destroyCanvas=function(){C.parentNode.removeChild(C)};this.loadData=f;this.onMoveEnd=function(){var a=r(L,da),e=r(L+Q,da+J);N();if(A&&(a[ha]>A.n||a[ia]<A.w||e[ha]<A.s||e[ia]>A.e))f()};this.onZoomEnd=function(a){Ea=false;M(a.zoom);
if(oa){u=m(oa);N()}else{N();f()}};this.onZoomStart=function(){Ea=true;N()};this.render=N;this.setOrigin=function(a,e){L=a;da=e};this.setSize=function(a,e){Q=a;J=e;x=Q/2<<0;K=J/2<<0;pa=x;qa=J;fa=x/Ha(45);C.width=Q;C.height=J;ma=fa-50};this.setZoom=M;Aa=l};k.OSMBuildings.VERSION="0.1.7a";k.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:false,alwaysInRange:true,dxSum:0,dySum:0,initialize:function(k){k=k||{};k.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize(this.name,k)},setOrigin:function(){var k=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),D=this.map.resolution,H=this.maxExtent;this.osmb.setOrigin(Math.round((k.lon-H.left)/D),Math.round((H.top-
k.lat)/D))},setMap:function(k){if(!this.map){OpenLayers.Layer.prototype.setMap(k);this.osmb=new OSMBuildings(this.options.url);this.osmb.createCanvas(this.div);this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin();this.osmb.loadData()}},removeMap:function(k){this.osmb.destroyCanvas();this.osmb=null;OpenLayers.Layer.prototype.removeMap(k)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize();this.osmb.onResize({width:this.map.size.w,height:this.map.size.h})},
moveTo:function(k,D,H){k=OpenLayers.Layer.prototype.moveTo(k,D,H);if(!H){H=parseInt(this.map.layerContainerDiv.style.left,10);var ra=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-H+"px";this.div.style.top=-ra+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);D?this.osmb.onZoomEnd({zoom:this.map.zoom}):this.osmb.onMoveEnd();return k},moveByPx:function(k,D){this.dxSum+=k;this.dySum+=D;var H=OpenLayers.Layer.prototype.moveByPx(k,D);this.osmb.setCamOffset(this.dxSum,
this.dySum);this.osmb.render();return H},geoJSON:function(k,D){return this.osmb.geoJSON(k,D)},setStyle:function(k){return this.osmb.setStyle(k)}});
