var t=function(){var t,r,e,n,i,a={},o=256,f=499,u=491,c=487,l=503,s=3*l,h=o-1,w=4,v=100,y=16,d=1<<y,g=10,B=10,p=d>>B,b=d<<g-B,m=o>>3,k=6,x=1<<k,F=m*x,A=30,I=10,E=1<<I,_=8,U=1<<_,G=I+_,C=1<<G,T=[],z=[],D=[],S=[],R=a.NeuQuant=function(t,a,f){var u,c;for(r=t,e=a,n=f,i=new Array(o),u=0;u<o;u++)i[u]=new Array(4),(c=i[u])[0]=c[1]=c[2]=(u<<w+8)/o,D[u]=d/o,z[u]=0},M=function(){for(var t=[],r=new Array(o),e=0;e<o;e++)r[i[e][3]]=e;for(var n=0,a=0;a<o;a++){var f=r[a];t[n++]=i[f][0],t[n++]=i[f][1],t[n++]=i[f][2]}return t},P=function(){var t,r,e,n,a,f,u,c;for(u=0,c=0,t=0;t<o;t++){for(e=t,n=(a=i[t])[1],r=t+1;r<o;r++)(f=i[r])[1]<n&&(e=r,n=f[1]);if(f=i[e],t!=e&&(r=f[0],f[0]=a[0],a[0]=r,r=f[1],f[1]=a[1],a[1]=r,r=f[2],f[2]=a[2],a[2]=r,r=f[3],f[3]=a[3],a[3]=r),n!=u){for(T[u]=c+t>>1,r=u+1;r<n;r++)T[r]=t;u=n,c=t}}for(T[u]=c+h>>1,r=u+1;r<256;r++)T[r]=h},W=function(){var i,a,o,h,y,d,g,B,p,b,m,x,I,_;for(e<s&&(n=1),t=30+(n-1)/3,x=r,I=0,_=e,b=(m=e/(3*n))/v|0,B=E,(g=(d=F)>>k)<=1&&(g=0),i=0;i<g;i++)S[i]=B*((g*g-i*i)*U/(g*g));for(p=e<s?3:e%f!=0?3*f:e%u!=0?3*u:e%c!=0?3*c:3*l,i=0;i<m;)if(o=(255&x[I+0])<<w,h=(255&x[I+1])<<w,y=(255&x[I+2])<<w,a=L(o,h,y),Q(B,a,o,h,y),0!==g&&N(g,a,o,h,y),(I+=p)>=_&&(I-=e),0===b&&(b=1),++i%b==0)for(B-=B/t,(g=(d-=d/A)>>k)<=1&&(g=0),a=0;a<g;a++)S[a]=B*((g*g-a*a)*U/(g*g))},j=(a.map=function(t,r,e){var n,a,f,u,c,l,s;for(c=1e3,s=-1,a=(n=T[r])-1;n<o||a>=0;)n<o&&((f=(l=i[n])[1]-r)>=c?n=o:(n++,f<0&&(f=-f),(u=l[0]-t)<0&&(u=-u),(f+=u)<c&&((u=l[2]-e)<0&&(u=-u),(f+=u)<c&&(c=f,s=l[3])))),a>=0&&((f=r-(l=i[a])[1])>=c?a=-1:(a--,f<0&&(f=-f),(u=l[0]-t)<0&&(u=-u),(f+=u)<c&&((u=l[2]-e)<0&&(u=-u),(f+=u)<c&&(c=f,s=l[3]))));return s},a.process=function(){return W(),j(),P(),M()},function(){var t;for(t=0;t<o;t++)i[t][0]>>=w,i[t][1]>>=w,i[t][2]>>=w,i[t][3]=t}),N=function(t,r,e,n,a){var f,u,c,l,s,h,w;for((c=r-t)<-1&&(c=-1),(l=r+t)>o&&(l=o),f=r+1,u=r-1,h=1;f<l||u>c;){if(s=S[h++],f<l){w=i[f++];try{w[0]-=s*(w[0]-e)/C,w[1]-=s*(w[1]-n)/C,w[2]-=s*(w[2]-a)/C}catch(t){}}if(u>c){w=i[u--];try{w[0]-=s*(w[0]-e)/C,w[1]-=s*(w[1]-n)/C,w[2]-=s*(w[2]-a)/C}catch(t){}}}},Q=function(t,r,e,n,a){var o=i[r];o[0]-=t*(o[0]-e)/E,o[1]-=t*(o[1]-n)/E,o[2]-=t*(o[2]-a)/E},L=function(t,r,e){var n,a,f,u,c,l,s,h,v,d;for(v=h=~(1<<31),s=l=-1,n=0;n<o;n++)(a=(d=i[n])[0]-t)<0&&(a=-a),(f=d[1]-r)<0&&(f=-f),a+=f,(f=d[2]-e)<0&&(f=-f),(a+=f)<h&&(h=a,l=n),(u=a-(z[n]>>y-w))<v&&(v=u,s=n),c=D[n]>>B,D[n]-=c,z[n]+=c<<g;return D[l]+=p,z[l]-=b,s};return R.apply(this,arguments),a},r=function(){var t,r,e,n,i,a,o,f,u,c,l,s,h={},w=-1,v=12,y=5003,d=v,g=1<<v,B=[],p=[],b=y,m=0,k=!1,x=0,F=0,A=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],I=[],E=h.LZWEncoder=function(i,a,o,f){t=i,r=a,e=o,n=Math.max(2,f)},_=function(t,r){I[s++]=t,s>=254&&T(r)},U=function(t){G(b),m=c+2,k=!0,S(c,t)},G=function(t){for(var r=0;r<t;++r)B[r]=-1},C=h.compress=function(t,r){var e,n,i,a,h,v,y;for(k=!1,f=z(o=u=t),l=(c=1<<t-1)+1,m=c+2,s=0,a=D(),y=0,e=b;e<65536;e*=2)++y;y=8-y,G(v=b),S(c,r);t:for(;(i=D())!=w;)if(e=(i<<d)+a,B[n=i<<y^a]!=e){if(B[n]>=0){h=v-n,0===n&&(h=1);do{if((n-=h)<0&&(n+=v),B[n]==e){a=p[n];continue t}}while(B[n]>=0)}S(a,r),a=i,m<g?(p[n]=m++,B[n]=e):U(r)}else a=p[n];S(a,r),S(l,r)},T=(h.encode=function(e){e.writeByte(n),i=t*r,a=0,C(n+1,e),e.writeByte(0)},function(t){s>0&&(t.writeByte(s),t.writeBytes(I,0,s),s=0)}),z=function(t){return(1<<t)-1},D=function(){return 0===i?w:(--i,255&e[a++])},S=function(t,r){for(x&=A[F],F>0?x|=t<<F:x=t,F+=o;F>=8;)_(255&x,r),x>>=8,F-=8;if((m>f||k)&&(k?(f=z(o=u),k=!1):(++o,f=o==d?g:z(o))),t==l){for(;F>0;)_(255&x,r),x>>=8,F-=8;T(r)}};return E.apply(this,arguments),h};function e(t,r,e,n){for(var i=t[r++],a=1<<i,o=a+1,f=o+1,u=i+1,c=(1<<u)-1,l=0,s=0,h=0,w=t[r++],v=new Int32Array(4096),y=null;;){for(;l<16&&0!==w;)s|=t[r++]<<l,l+=8,1===w?w=t[r++]:--w;if(l<u)break;var d=s&c;if(s>>=u,l-=u,d!==a){if(d===o)break;for(var g=d<f?d:y,B=0,p=g;p>a;)p=v[p]>>8,++B;var b=p;if(h+B+(g!==d?1:0)>n)return void console.log("Warning, gif stream longer than expected.");e[h++]=b;var m=h+=B;for(g!==d&&(e[h++]=b),p=g;B--;)p=v[p],e[--m]=255&p,p>>=8;null!==y&&f<4096&&(v[f++]=y<<8|b,f>=c+1&&u<12&&(++u,c=c<<1|1)),y=d}else f=o+1,c=(1<<(u=i+1))-1,y=null}return h!==n&&console.log("Warning, gif stream shorter than expected."),e}var n={GIFEncoder:function(){for(var e=0,n={};e<256;e++)n[e]=String.fromCharCode(e);function i(){this.bin=[]}i.prototype.getData=function(){for(var t="",r=this.bin.length,e=0;e<r;e++)t+=n[this.bin[e]];return t},i.prototype.getUnit8Array=function(){for(var t=new Uint8Array(this.bin.length),r=this.bin.length,e=0;e<r;e++)t[e]=this.bin[e];return t},i.prototype.writeByte=function(t){this.bin.push(t)},i.prototype.writeUTFBytes=function(t){for(var r=t.length,e=0;e<r;e++)this.writeByte(t.charCodeAt(e))},i.prototype.writeBytes=function(t,r,e){for(var n=e||t.length,i=r||0;i<n;i++)this.writeByte(t[i])};var a,o,f,u,c,l,s,h,w,v={},y=null,d=-1,g=0,B=!1,p=[],b=7,m=-1,k=!0,x=!1,F=10,A="Generated by jsgif (https://github.com/antimatter15/jsgif/)",I=(v.setDelay=function(t){g=Math.round(t/10)},v.setDispose=function(t){t>=0&&(m=t)},v.setRepeat=function(t){t>=0&&(d=t)},v.setTransparent=function(t){y=t},v.setComment=function(t){A=t},v.addFrame=function(t,r){if(null===t||!B||null===u)throw new Error("Please call start method before calling addFrame");var e=!0;try{r?c=t:(c=t.getImageData(0,0,t.canvas.width,t.canvas.height).data,x||E(t.canvas.width,t.canvas.height)),G(),_(),k&&(D(),R(),d>=0&&S()),C(),""!==A&&T(),z(),k||R(),P(),k=!1}catch(t){e=!1}return e},v.finish=function(){if(!B)return!1;var t=!0;B=!1;try{u.writeByte(59)}catch(r){t=!1}return t},function(){f=0,c=null,l=null,s=null,w=null,k=!0}),E=(v.setFrameRate=function(t){15!=t&&(g=Math.round(100/t))},v.setQuality=function(t){t<1&&(t=1),F=t},v.setSize=function(t,r){B&&!k||((a=t)<1&&(a=320),(o=r)<1&&(o=240),x=!0)}),_=(v.start=function(){I();var t=!0;u=new i;try{u.writeUTFBytes("GIF89a")}catch(r){t=!1}return B=t},v.cont=function(){I();return u=new i,B=!0},function(){var r=l.length,e=r/3;s=[];var n=new t(l,r,F);w=n.process();for(var i=0,a=0;a<e;a++){var o=n.map(255&l[i++],255&l[i++],255&l[i++]);p[o]=!0,s[a]=o}l=null,h=8,b=7,null!==y&&(f=U(y))}),U=function(t){if(null===w)return-1;for(var r=(16711680&t)>>16,e=(65280&t)>>8,n=255&t,i=0,a=16777216,o=w.length,f=0;f<o;){var u=r-(255&w[f++]),c=e-(255&w[f++]),l=n-(255&w[f]),s=u*u+c*c+l*l,h=f/3;p[h]&&s<a&&(a=s,i=h),f++}return i},G=function(){var t=a,r=o;l=[];for(var e=c,n=0,i=0;i<r;i++)for(var f=0;f<t;f++){var u=i*t*4+4*f;l[n++]=e[u],l[n++]=e[u+1],l[n++]=e[u+2]}},C=function(){var t,r;u.writeByte(33),u.writeByte(249),u.writeByte(4),null===y?(t=0,r=0):(t=1,r=2),m>=0&&(r=7&m),r<<=2,u.writeByte(0|r|t),M(g),u.writeByte(f),u.writeByte(0)},T=function(){u.writeByte(33),u.writeByte(254),u.writeByte(A.length),u.writeUTFBytes(A),u.writeByte(0)},z=function(){u.writeByte(44),M(0),M(0),M(a),M(o),k?u.writeByte(0):u.writeByte(128|b)},D=function(){M(a),M(o),u.writeByte(240|b),u.writeByte(0),u.writeByte(0)},S=function(){u.writeByte(33),u.writeByte(255),u.writeByte(11),u.writeUTFBytes("NETSCAPE2.0"),u.writeByte(3),u.writeByte(1),M(d),u.writeByte(0)},R=function(){u.writeBytes(w);for(var t=768-w.length,r=0;r<t;r++)u.writeByte(0)},M=function(t){u.writeByte(255&t),u.writeByte(t>>8&255)},P=function(){new r(a,o,s,h).encode(u)};v.stream=function(){return u},v.setProperties=function(t,r){B=t,k=r};return v},GIFDecoder:function(t){var r=0;if(71!==t[r++]||73!==t[r++]||70!==t[r++]||56!==t[r++]||56!=(t[r++]+1&253)||97!==t[r++])throw new Error("Invalid GIF 87a/89a header.");var n=t[r++]|t[r++]<<8,i=t[r++]|t[r++]<<8,a=t[r++],o=a>>7,f=1<<(7&a)+1;t[r++],t[r++];var u=null,c=null;o&&(u=r,c=f,r+=3*f);var l=!0,s=[],h=0,w=null,v=0,y=null;for(this.width=n,this.height=i;l&&r<t.length;)switch(t[r++]){case 33:switch(t[r++]){case 255:if(11!==t[r]||78==t[r+1]&&69==t[r+2]&&84==t[r+3]&&83==t[r+4]&&67==t[r+5]&&65==t[r+6]&&80==t[r+7]&&69==t[r+8]&&50==t[r+9]&&46==t[r+10]&&48==t[r+11]&&3==t[r+12]&&1==t[r+13]&&0==t[r+16])r+=14,y=t[r++]|t[r++]<<8,r++;else for(r+=12;;){if(!((_=t[r++])>=0))throw Error("Invalid block size");if(0===_)break;r+=_}break;case 249:if(4!==t[r++]||0!==t[r+4])throw new Error("Invalid graphics extension block.");var d=t[r++];h=t[r++]|t[r++]<<8,w=t[r++],0==(1&d)&&(w=null),v=d>>2&7,r++;break;case 1:case 254:for(;;){if(!((_=t[r++])>=0))throw Error("Invalid block size");if(0===_)break;r+=_}break;default:throw new Error("Unknown graphic control label: 0x"+t[r-1].toString(16))}break;case 44:var g=t[r++]|t[r++]<<8,B=t[r++]|t[r++]<<8,p=t[r++]|t[r++]<<8,b=t[r++]|t[r++]<<8,m=t[r++],k=m>>6&1,x=1<<(7&m)+1,F=u,A=c,I=!1;if(m>>7){I=!0;F=r,A=x,r+=3*x}var E=r;for(r++;;){var _;if(!((_=t[r++])>=0))throw Error("Invalid block size");if(0===_)break;r+=_}s.push({x:g,y:B,width:p,height:b,has_local_palette:I,palette_offset:F,palette_size:A,data_offset:E,data_length:r-E,transparent_index:w,interlaced:!!k,delay:h,disposal:v});break;case 59:l=!1;break;default:throw new Error("Unknown gif block: 0x"+t[r-1].toString(16))}this.numFrames=function(){return s.length},this.loopCount=function(){return y},this.frameInfo=function(t){if(t<0||t>=s.length)throw new Error("Frame index out of range.");return s[t]},this.decodeAndBlitFrameBGRA=function(r,i){var a=this.frameInfo(r),o=a.width*a.height,f=new Uint8Array(o);e(t,a.data_offset,f,o);var u=a.palette_offset,c=a.transparent_index;null===c&&(c=256);var l=a.width,s=n-l,h=l,w=4*(a.y*n+a.x),v=4*((a.y+a.height)*n+a.x),y=w,d=4*s;!0===a.interlaced&&(d+=4*n*7);for(var g=8,B=0,p=f.length;B<p;++B){var b=f[B];if(0===h&&(h=l,(y+=d)>=v&&(d=4*s+4*n*(g-1),y=w+(l+s)*(g<<1),g>>=1)),b===c)y+=4;else{var m=t[u+3*b],k=t[u+3*b+1],x=t[u+3*b+2];i[y++]=x,i[y++]=k,i[y++]=m,i[y++]=255}--h}},this.decodeAndBlitFrameRGBA=function(r,i){var a=this.frameInfo(r),o=a.width*a.height,f=new Uint8Array(o);e(t,a.data_offset,f,o);var u=a.palette_offset,c=a.transparent_index;null===c&&(c=256);var l=a.width,s=n-l,h=l,w=4*(a.y*n+a.x),v=4*((a.y+a.height)*n+a.x),y=w,d=4*s;!0===a.interlaced&&(d+=4*n*7);for(var g=8,B=0,p=f.length;B<p;++B){var b=f[B];if(0===h&&(h=l,(y+=d)>=v&&(d=4*s+4*n*(g-1),y=w+(l+s)*(g<<1),g>>=1)),b===c)y+=4;else{var m=t[u+3*b],k=t[u+3*b+1],x=t[u+3*b+2];i[y++]=m,i[y++]=k,i[y++]=x,i[y++]=255}--h}}}};export default n;
