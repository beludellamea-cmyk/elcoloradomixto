(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var x0=0,Xd=1,v0=2;var Cr=1,y0=2,Mo=3,tr=0,Tn=1,Dn=2,cs=0,So=1,$a=2,qd=3,Yd=4,M0=5;var Rr=100,S0=101,b0=102,E0=103,T0=104,w0=200,A0=201,C0=202,R0=203,$d=204,Zd=205,I0=206,P0=207,L0=208,D0=209,N0=210,U0=211,F0=212,O0=213,B0=214,fl=0,pl=1,ml=2,ao=3,gl=4,_l=5,xl=6,vl=7,Kl=0,z0=1,k0=2,Gi=0,Jd=1,Kd=2,jd=3,Qd=4,tf=5,ef=6,Za=7;var nf=300,er=301,Ir=302,jl=303,Ql=304,Ja=306,wr=1e3,ns=1001,yl=1002,gn=1003,V0=1004;var Ka=1005;var bn=1006,th=1007;var nr=1008;var jn=1009,sf=1010,rf=1011,bo=1012,eh=1013,Hi=1014,Mi=1015,Wi=1016,nh=1017,ih=1018,Eo=1020,of=35902,af=35899,cf=1021,lf=1022,Si=1023,is=1026,ir=1027,sh=1028,rh=1029,sr=1030,oh=1031;var ah=1033,ja=33776,Qa=33777,tc=33778,ec=33779,ch=35840,lh=35841,hh=35842,uh=35843,dh=36196,fh=37492,ph=37496,mh=37488,gh=37489,nc=37490,_h=37491,xh=37808,vh=37809,yh=37810,Mh=37811,Sh=37812,bh=37813,Eh=37814,Th=37815,wh=37816,Ah=37817,Ch=37818,Rh=37819,Ih=37820,Ph=37821,Lh=36492,Dh=36494,Nh=36495,Uh=36283,Fh=36284,ic=36285,Oh=36286;var Ea=2300,Ml=2301,ul=2302,Od=2303,Bd=2400,zd=2401,kd=2402;var G0=3200;var Bh=0,H0=1,ws="",sn="srgb",Ta="srgb-linear",wa="linear",xe="srgb";var dl=7680;var W0=519,X0=512,q0=513,Y0=514,zh=515,$0=516,Z0=517,kh=518,J0=519,K0=35044;var hf="300 es",ki=2e3,co=2001;function Tv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wv(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Aa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function j0(){let e=Aa("canvas");return e.style.display="block",e}var Hm={},lo=null;function uf(...e){let t="THREE."+e.shift();lo?lo("log",t,...e):console.log(t,...e)}function Q0(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Zt(...e){e=Q0(e);let t="THREE."+e.shift();if(lo)lo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Jt(...e){e=Q0(e);let t="THREE."+e.shift();if(lo)lo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Tr(...e){let t=e.join(" ");t in Hm||(Hm[t]=!0,Zt(...e))}function tg(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var eg={[fl]:pl,[ml]:xl,[gl]:vl,[ao]:_l,[pl]:fl,[xl]:ml,[vl]:gl,[_l]:ao},ss=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wm=1234567,ya=Math.PI/180,ho=180/Math.PI;function To(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[e&255]+Rn[e>>8&255]+Rn[e>>16&255]+Rn[e>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function ie(e,t,n){return Math.max(t,Math.min(n,e))}function df(e,t){return(e%t+t)%t}function Av(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Cv(e,t,n){return e!==t?(n-e)/(t-e):0}function Ma(e,t,n){return(1-n)*e+n*t}function Rv(e,t,n,i){return Ma(e,t,1-Math.exp(-n*i))}function Iv(e,t=1){return t-Math.abs(df(e,t*2)-t)}function Pv(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Lv(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Dv(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Nv(e,t){return e+Math.random()*(t-e)}function Uv(e){return e*(.5-Math.random())}function Fv(e){e!==void 0&&(Wm=e);let t=Wm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ov(e){return e*ya}function Bv(e){return e*ho}function zv(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function kv(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Vv(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Gv(e,t,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":e.set(a*h,c*d,c*u,a*l);break;case"YZY":e.set(c*u,a*h,c*d,a*l);break;case"ZXZ":e.set(c*d,c*u,a*h,a*l);break;case"XZX":e.set(a*h,c*g,c*f,a*l);break;case"YXY":e.set(c*f,a*h,c*g,a*l);break;case"ZYZ":e.set(c*g,c*f,a*h,a*l);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ro(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ff={DEG2RAD:ya,RAD2DEG:ho,generateUUID:To,clamp:ie,euclideanModulo:df,mapLinear:Av,inverseLerp:Cv,lerp:Ma,damp:Rv,pingpong:Iv,smoothstep:Pv,smootherstep:Lv,randInt:Dv,randFloat:Nv,randFloatSpread:Uv,seededRandom:Fv,degToRad:Ov,radToDeg:Bv,isPowerOfTwo:zv,ceilPowerOfTwo:kv,floorPowerOfTwo:Vv,setQuaternionFromProperEuler:Gv,normalize:Vn,denormalize:ro},vf=class vf{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vf.prototype.isVector2=!0;var Ut=vf,Ln=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,a=Math.sin(a*S)/w,c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+y*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+y*a;let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[n]=a*g+h*d+c*f-l*u,t[n+1]=c*g+h*u+l*d-a*f,t[n+2]=l*g+h*f+a*u-c*d,t[n+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-n;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,n=Math.sin(n*l)/h,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yf=class yf{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Xm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Xm.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fd.copy(this).projectOnVector(t),this.sub(fd)}reflect(t){return this.sub(fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yf.prototype.isVector3=!0;var P=yf,fd=new P,Xm=new Ln,Mf=class Mf{constructor(t,n,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l)}set(t,n,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],S=s[1],w=s[4],v=s[7],E=s[2],b=s[5],C=s[8];return r[0]=o*y+a*S+c*E,r[3]=o*m+a*w+c*b,r[6]=o*p+a*v+c*C,r[1]=l*y+h*S+d*E,r[4]=l*m+h*w+d*b,r[7]=l*p+h*v+d*C,r[2]=u*y+f*S+g*E,r[5]=u*m+f*w+g*b,r[8]=u*p+f*v+g*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return n*o*h-n*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=n*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*l-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=u*y,t[4]=(h*n-s*c)*y,t[5]=(s*r-a*n)*y,t[6]=f*y,t[7]=(i*c-l*n)*y,t[8]=(o*n-i*r)*y,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pd.makeScale(t,n)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pd.makeRotation(-t)),this}translate(t,n){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mf.prototype.isMatrix3=!0;var jt=Mf,pd=new jt,qm=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){let e={enabled:!0,workingColorSpace:Ta,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ta]:{primaries:t,whitePoint:i,transfer:wa,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),e}var ae=Hv();function bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function oo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Xr,Sl=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xr===void 0&&(Xr=Aa("canvas")),Xr.width=t.width,Xr.height=t.height;let s=Xr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Xr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let n=Aa("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wv=0,uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=To(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame!="undefined"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(md(s[o].image)):r.push(md(s[o]))}else r=md(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function md(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?Sl.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Xv=0,gd=new P,Gn=class e extends ss{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ns,s=ns,r=bn,o=nr,a=Si,c=jn,l=e.DEFAULT_ANISOTROPY,h=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=To(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Zt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Zt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=nf;Gn.DEFAULT_ANISOTROPY=1;var Sf=class Sf{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let w=(l+1)/2,v=(f+1)/2,E=(p+1)/2,b=(h+u)/4,C=(d+y)/4,x=(g+m)/4;return w>v&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=C/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=x/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=C/r,s=x/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this.w=ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this.w=ie(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sf.prototype.isVector4=!0;var Oe=Sf,bl=class extends ss{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Oe(0,0,t,n),this.scissorTest=!1,this.viewport=new Oe(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new Gn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new uo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends bl{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ca=class extends Gn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Gn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Jl=class Jl{constructor(t,n,i,s,r,o,a,c,l,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l,h,d,u,f,g,y,m)}set(t,n,i,s,r,o,a,c,l,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jl().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/qr.setFromMatrixColumn(t,0).length(),r=1/qr.setFromMatrixColumn(t,1).length(),o=1/qr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;n[0]=c*h,n[4]=-c*d,n[8]=l,n[1]=f+g*l,n[5]=u-y*l,n[9]=-a*c,n[2]=y-u*l,n[6]=g+f*l,n[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,y=l*d;n[0]=u+y*a,n[4]=g*a-f,n[8]=o*l,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-g,n[6]=y+u*a,n[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,y=l*d;n[0]=u-y*a,n[4]=-o*d,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*h,n[9]=y-u*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;n[0]=c*h,n[4]=g*l-f,n[8]=u*l+y,n[1]=c*d,n[5]=y*l+u,n[9]=f*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,y=a*l;n[0]=c*h,n[4]=y-u*d,n[8]=g*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-l*h,n[6]=f*d+g,n[10]=u-y*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,y=a*l;n[0]=c*h,n[4]=-d,n[8]=l*h,n[1]=u*d+y,n[5]=o*h,n[9]=f*d-g,n[2]=g*d-f,n[6]=a*h,n[10]=y*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qv,t,Yv)}lookAt(t,n,i){let s=this.elements;return si.subVectors(t,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Ws.crossVectors(i,si),Ws.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ws.crossVectors(i,si)),Ws.normalize(),Hc.crossVectors(si,Ws),s[0]=Ws.x,s[4]=Hc.x,s[8]=si.x,s[1]=Ws.y,s[5]=Hc.y,s[9]=si.y,s[2]=Ws.z,s[6]=Hc.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],w=i[7],v=i[11],E=i[15],b=s[0],C=s[4],x=s[8],T=s[12],R=s[1],D=s[5],O=s[9],H=s[13],L=s[2],X=s[6],K=s[10],$=s[14],rt=s[3],Z=s[7],it=s[11],I=s[15];return r[0]=o*b+a*R+c*L+l*rt,r[4]=o*C+a*D+c*X+l*Z,r[8]=o*x+a*O+c*K+l*it,r[12]=o*T+a*H+c*$+l*I,r[1]=h*b+d*R+u*L+f*rt,r[5]=h*C+d*D+u*X+f*Z,r[9]=h*x+d*O+u*K+f*it,r[13]=h*T+d*H+u*$+f*I,r[2]=g*b+y*R+m*L+p*rt,r[6]=g*C+y*D+m*X+p*Z,r[10]=g*x+y*O+m*K+p*it,r[14]=g*T+y*H+m*$+p*I,r[3]=S*b+w*R+v*L+E*rt,r[7]=S*C+w*D+v*X+E*Z,r[11]=S*x+w*O+v*K+E*it,r[15]=S*T+w*H+v*$+E*I,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],S=c*f-l*u,w=a*f-l*d,v=a*u-c*d,E=o*f-l*h,b=o*u-c*h,C=o*d-a*h;return n*(y*S-m*w+p*v)-i*(g*S-m*E+p*b)+s*(g*w-y*E+p*C)-r*(g*v-y*b+m*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return n*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],S=n*a-i*o,w=n*c-s*o,v=n*l-r*o,E=i*c-s*a,b=i*l-r*a,C=s*l-r*c,x=h*y-d*g,T=h*m-u*g,R=h*p-f*g,D=d*m-u*y,O=d*p-f*y,H=u*p-f*m,L=S*H-w*O+v*D+E*R-b*T+C*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/L;return t[0]=(a*H-c*O+l*D)*X,t[1]=(s*O-i*H-r*D)*X,t[2]=(y*C-m*b+p*E)*X,t[3]=(u*b-d*C-f*E)*X,t[4]=(c*R-o*H-l*T)*X,t[5]=(n*H-s*R+r*T)*X,t[6]=(m*v-g*C-p*w)*X,t[7]=(h*C-u*v+f*w)*X,t[8]=(o*O-a*R+l*x)*X,t[9]=(i*R-n*O-r*x)*X,t[10]=(g*b-y*v+p*S)*X,t[11]=(d*v-h*b-f*S)*X,t[12]=(a*T-o*D-c*x)*X,t[13]=(n*D-i*T+s*x)*X,t[14]=(y*w-g*E-m*S)*X,t[15]=(h*E-d*w+u*S)*X,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,S=c*l,w=c*h,v=c*d,E=i.x,b=i.y,C=i.z;return s[0]=(1-(y+p))*E,s[1]=(f+v)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+w)*C,s[9]=(m-S)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=qr.set(s[0],s[1],s[2]).length(),a=qr.set(s[4],s[5],s[6]).length(),c=qr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fi.copy(this);let l=1/o,h=1/a,d=1/c;return Fi.elements[0]*=l,Fi.elements[1]*=l,Fi.elements[2]*=l,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,n.setFromRotationMatrix(Fi),i.x=o,i.y=a,i.z=c,this}makePerspective(t,n,i,s,r,o,a=ki,c=!1){let l=this.elements,h=2*r/(n-t),d=2*r/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===ki)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===co)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=ki,c=!1){let l=this.elements,h=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===ki)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===co)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Jl.prototype.isMatrix4=!0;var he=Jl,qr=new P,Fi=new he,qv=new P(0,0,0),Yv=new P(1,1,1),Ws=new P,Hc=new P,si=new P,$m=new he,Zm=new Ln,Vi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return $m.makeRotationFromQuaternion(t),this.setFromRotationMatrix($m,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$v=0,Jm=new P,Yr=new Ln,xs=new he,Wc=new P,pa=new P,Zv=new P,Jv=new Ln,Km=new P(1,0,0),jm=new P(0,1,0),Qm=new P(0,0,1),t0={type:"added"},Kv={type:"removed"},$r={type:"childadded",child:null},_d={type:"childremoved",child:null},En=class e extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new Vi,i=new Ln,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new jt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Yr.setFromAxisAngle(t,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,n){return Yr.setFromAxisAngle(t,n),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(Km,t)}rotateY(t){return this.rotateOnAxis(jm,t)}rotateZ(t){return this.rotateOnAxis(Qm,t)}translateOnAxis(t,n){return Jm.copy(t).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Km,t)}translateY(t){return this.translateOnAxis(jm,t)}translateZ(t){return this.translateOnAxis(Qm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Wc.copy(t):Wc.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(pa,Wc,this.up):xs.lookAt(Wc,pa,this.up),this.quaternion.setFromRotationMatrix(xs),s&&(xs.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(xs),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(t0),$r.child=t,this.dispatchEvent($r),$r.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Kv),_d.child=t,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xs.multiply(t.parent.matrixWorld)),t.applyMatrix4(xs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(t0),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,Zv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,Jv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(n){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new P(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},jv={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=n.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function xd(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Gt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ae.workingColorSpace){return this.r=t,this.g=n,this.b=i,ae.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ae.workingColorSpace){if(t=df(t,1),n=ie(n,0,1),i=ie(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=xd(o,r,t+1/3),this.g=xd(o,r,t),this.b=xd(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,n=sn){function i(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=sn){let i=ng[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return ae.workingToColorSpace(In.copy(this),t),Math.round(ie(In.r*255,0,255))*65536+Math.round(ie(In.g*255,0,255))*256+Math.round(ie(In.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ae.workingColorSpace){ae.workingToColorSpace(In.copy(this),n);let i=In.r,s=In.g,r=In.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=ae.workingColorSpace){return ae.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=sn){ae.workingToColorSpace(In.copy(this),t);let n=In.r,i=In.g,s=In.b;return t!==sn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Xs),this.setHSL(Xs.h+t,Xs.s+n,Xs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Xs),t.getHSL(Xc);let i=Ma(Xs.h,Xc.h,n),s=Ma(Xs.s,Xc.s,n),r=Ma(Xs.l,Xc.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Gt;Gt.NAMES=ng;var Ia=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pa=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Oi=new P,vs=new P,vd=new P,ys=new P,Zr=new P,Jr=new P,e0=new P,yd=new P,Md=new P,Sd=new P,bd=new Oe,Ed=new Oe,Td=new Oe,Zs=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Oi.subVectors(t,n),s.cross(Oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Oi.subVectors(s,n),vs.subVectors(i,n),vd.subVectors(t,n);let o=Oi.dot(Oi),a=Oi.dot(vs),c=Oi.dot(vd),l=vs.dot(vs),h=vs.dot(vd),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ys)===null?!1:ys.x>=0&&ys.y>=0&&ys.x+ys.y<=1}static getInterpolation(t,n,i,s,r,o,a,c){return this.getBarycoord(t,n,i,s,ys)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ys.x),c.addScaledVector(o,ys.y),c.addScaledVector(a,ys.z),c)}static getInterpolatedAttribute(t,n,i,s,r,o){return bd.setScalar(0),Ed.setScalar(0),Td.setScalar(0),bd.fromBufferAttribute(t,n),Ed.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bd,r.x),o.addScaledVector(Ed,r.y),o.addScaledVector(Td,r.z),o}static isFrontFacing(t,n,i,s){return Oi.subVectors(i,n),vs.subVectors(t,n),Oi.cross(vs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),Oi.cross(vs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,o,a;Zr.subVectors(s,i),Jr.subVectors(r,i),yd.subVectors(t,i);let c=Zr.dot(yd),l=Jr.dot(yd);if(c<=0&&l<=0)return n.copy(i);Md.subVectors(t,s);let h=Zr.dot(Md),d=Jr.dot(Md);if(h>=0&&d<=h)return n.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(Zr,o);Sd.subVectors(t,r);let f=Zr.dot(Sd),g=Jr.dot(Sd);if(g>=0&&f<=g)return n.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Jr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return e0.subVectors(r,s),a=(d-h)/(d-h+(f-g)),n.copy(s).addScaledVector(e0,a);let p=1/(m+y+u);return o=y*p,a=u*p,n.copy(i).addScaledVector(Zr,o).addScaledVector(Jr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rs=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bi):Bi.fromBufferAttribute(r,o),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qc.copy(i.boundingBox)),qc.applyMatrix4(t.matrixWorld),this.union(qc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ma),Yc.subVectors(this.max,ma),Kr.subVectors(t.a,ma),jr.subVectors(t.b,ma),Qr.subVectors(t.c,ma),qs.subVectors(jr,Kr),Ys.subVectors(Qr,jr),Mr.subVectors(Kr,Qr);let n=[0,-qs.z,qs.y,0,-Ys.z,Ys.y,0,-Mr.z,Mr.y,qs.z,0,-qs.x,Ys.z,0,-Ys.x,Mr.z,0,-Mr.x,-qs.y,qs.x,0,-Ys.y,Ys.x,0,-Mr.y,Mr.x,0];return!wd(n,Kr,jr,Qr,Yc)||(n=[1,0,0,0,1,0,0,0,1],!wd(n,Kr,jr,Qr,Yc))?!1:($c.crossVectors(qs,Ys),n=[$c.x,$c.y,$c.z],wd(n,Kr,jr,Qr,Yc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ms=[new P,new P,new P,new P,new P,new P,new P,new P],Bi=new P,qc=new rs,Kr=new P,jr=new P,Qr=new P,qs=new P,Ys=new P,Mr=new P,ma=new P,Yc=new P,$c=new P,Sr=new P;function wd(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Sr.fromArray(e,r);let a=s.x*Math.abs(Sr.x)+s.y*Math.abs(Sr.y)+s.z*Math.abs(Sr.z),c=t.dot(Sr),l=n.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var nn=new P,Zc=new Ut,Qv=0,Fe=class extends ss{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qv++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=K0,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zc.fromBufferAttribute(this,n),Zc.applyMatrix3(t),this.setXY(n,Zc.x,Zc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ro(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ro(n,this.array)),n}setX(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ro(n,this.array)),n}setY(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ro(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ro(n,this.array)),n}setW(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array),s=Vn(s,this.array),r=Vn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var La=class extends Fe{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Da=class extends Fe{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ue=class extends Fe{constructor(t,n,i){super(new Float32Array(t),n,i)}},ty=new rs,ga=new P,Ad=new P,Es=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):ty.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ga.subVectors(t,this.center);let n=ga.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ga,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ga.copy(t.center).add(Ad)),this.expandByPoint(ga.copy(t.center).sub(Ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ey=0,xi=new he,Cd=new En,to=new P,ri=new rs,_a=new rs,mn=new P,We=class e extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tv(t)?Da:La)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,n,i){return xi.makeTranslation(t,n,i),this.applyMatrix4(xi),this}scale(t,n,i){return xi.makeScale(t,n,i),this.applyMatrix4(xi),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ri.min,_a.min),ri.expandByPoint(mn),mn.addVectors(ri.max,_a.max),ri.expandByPoint(mn)):(ri.expandByPoint(_a.min),ri.expandByPoint(_a.max))}ri.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(mn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)mn.fromBufferAttribute(a,l),c&&(to.fromBufferAttribute(t,l),mn.add(to)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new P,c[x]=new P;let l=new P,h=new P,d=new P,u=new Ut,f=new Ut,g=new Ut,y=new P,m=new P;function p(x,T,R){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[x].add(y),a[T].add(y),a[R].add(y),c[x].add(m),c[T].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){let R=S[x],D=R.start,O=R.count;for(let H=D,L=D+O;H<L;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let w=new P,v=new P,E=new P,b=new P;function C(x){E.fromBufferAttribute(s,x),b.copy(E);let T=a[x];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(b,T);let D=v.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,D)}for(let x=0,T=S.length;x<T;++x){let R=S[x],D=R.start,O=R.count;for(let H=D,L=D+O;H<L;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Fe(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)mn.fromBufferAttribute(t,n),mn.normalize(),t.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Fe(u,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);n.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,i);c.push(f)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(n))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rd=new P,ny=new P,iy=new jt,zi=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Rd.subVectors(i,n).cross(ny.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Rd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||iy.getNormalMatrix(t),s=this.coplanarPoint(Rd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sy=0,Ts=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=To(),this.name="",this.type="Material",this.blending=So,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=Zd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Zt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Zt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(n){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new zi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ut().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ss=new P,Id=new P,Jc=new P,Kc=new P,Na=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ss)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ss.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ss.copy(this.origin).addScaledVector(this.direction,n),Ss.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Id.copy(t).add(n).multiplyScalar(.5),Jc.copy(n).sub(t).normalize(),Kc.copy(this.origin).sub(Id);let r=t.distanceTo(n)*.5,o=-this.direction.dot(Jc),a=Kc.dot(this.direction),c=-Kc.dot(Jc),l=Kc.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Id).addScaledVector(Jc,u),f}intersectSphere(t,n){if(t.radius<0)return null;Ss.subVectors(t.center,this.origin);let i=Ss.dot(this.direction),s=Ss.dot(Ss)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ss)!==null}intersectTriangle(t,n,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=n.x-o.x,y=n.y-o.y,m=n.z-o.z,p=i.x-o.x,S=i.y-o.y,w=i.z-o.z,v=Math.abs(c),E=Math.abs(l),b=Math.abs(h),C,x,T,R,D,O,H,L,X,K,$,rt;if(v>=E&&v>=b?(T=c,O=d,X=g,rt=p,c>=0?(C=l,x=h,R=u,D=f,H=y,L=m,K=S,$=w):(C=h,x=l,R=f,D=u,H=m,L=y,K=w,$=S)):E>=b?(T=l,O=u,X=y,rt=S,l>=0?(C=h,x=c,R=f,D=d,H=m,L=g,K=w,$=p):(C=c,x=h,R=d,D=f,H=g,L=m,K=p,$=w)):(T=h,O=f,X=m,rt=w,h>=0?(C=c,x=l,R=d,D=u,H=g,L=y,K=p,$=S):(C=l,x=c,R=u,D=d,H=y,L=g,K=S,$=p)),T===0)return null;let Z=C/T,it=x/T,I=1/T,Q=R-Z*O,et=D-it*O,lt=H-Z*X,ct=L-it*X,ot=K-Z*rt,B=$-it*rt,W=ot*ct-B*lt,at=Q*B-et*ot,_t=lt*et-ct*Q;if(s){if(W<0||at<0||_t<0)return null}else if((W<0||at<0||_t<0)&&(W>0||at>0||_t>0))return null;let ut=W+at+_t;if(ut===0)return null;let Ht=I*(W*O+at*X+_t*rt);return(ut>0?Ht<0:Ht>0)?null:this.at(Ht/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class extends Ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},n0=new he,br=new Na,jc=new Es,i0=new P,Qc=new P,tl=new P,el=new P,Pd=new P,nl=new P,s0=new P,il=new P,qt=class extends En{constructor(t=new We,n=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){nl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Pd.fromBufferAttribute(d,t),o?nl.addScaledVector(Pd,h):nl.addScaledVector(Pd.sub(n),h))}n.add(nl)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jc.copy(i.boundingSphere),jc.applyMatrix4(r),br.copy(t.ray).recast(t.near),!(jc.containsPoint(br.origin)===!1&&(br.intersectSphere(jc,i0)===null||br.origin.distanceToSquared(i0)>(t.far-t.near)**2))&&(n0.copy(r).invert(),br.copy(t.ray).applyMatrix4(n0),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,br)))}_computeIntersections(t,n,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=w;v<E;v+=3){let b=a.getX(v),C=a.getX(v+1),x=a.getX(v+2);s=sl(this,p,t,i,l,h,d,b,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=sl(this,o,t,i,l,h,d,S,w,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=w;v<E;v+=3){let b=v,C=v+1,x=v+2;s=sl(this,p,t,i,l,h,d,b,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,w=m+1,v=m+2;s=sl(this,o,t,i,l,h,d,S,w,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function ry(e,t,n,i,s,r,o,a){let c;if(t.side===Tn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===tr,a),c===null)return null;il.copy(a),il.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(il);return l<n.near||l>n.far?null:{distance:l,point:il.clone(),object:e}}function sl(e,t,n,i,s,r,o,a,c,l){e.getVertexPosition(a,Qc),e.getVertexPosition(c,tl),e.getVertexPosition(l,el);let h=ry(e,t,n,i,Qc,tl,el,s0);if(h){let d=new P;Zs.getBarycoord(s0,Qc,tl,el,d),s&&(h.uv=Zs.getInterpolatedAttribute(s,a,c,l,d,new Ut)),r&&(h.uv1=Zs.getInterpolatedAttribute(r,a,c,l,d,new Ut)),o&&(h.normal=Zs.getInterpolatedAttribute(o,a,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};Zs.getNormal(Qc,tl,el,u.normal),h.face=u,h.barycoord=d}return h}var Ua=class extends Gn{constructor(t=null,n=1,i=1,s,r,o,a,c,l=gn,h=gn,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var po=class extends Fe{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},eo=new he,r0=new he,rl=[],o0=new rs,oy=new he,xa=new qt,va=new Es,vi=class extends qt{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,oy)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,eo),o0.copy(t.boundingBox).applyMatrix4(eo),this.boundingBox.union(o0)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,eo),va.copy(t.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(va)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),t.ray.intersectsSphere(va)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,eo),r0.multiplyMatrices(i,eo),xa.matrixWorld=r0,xa.raycast(t,rl);for(let o=0,a=rl.length;o<a;o++){let c=rl[o];c.instanceId=r,c.object=this,n.push(c)}rl.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(s*this.count),s,this.count,sh,Mi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Er=new Es,ay=new Ut(.5,.5),ol=new P,mo=class{constructor(t=new zi,n=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ki,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],w=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-o,f-h,p-g,E-S).normalize(),s[1].setComponents(l+o,f+h,p+g,E+S).normalize(),s[2].setComponents(l+a,f+d,p+y,E+w).normalize(),s[3].setComponents(l-a,f-d,p-y,E-w).normalize(),i)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,p-m,E-v).normalize();else if(s[4].setComponents(l-c,f-u,p-m,E-v).normalize(),n===ki)s[5].setComponents(l+c,f+u,p+m,E+v).normalize();else if(n===co)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){Er.center.set(0,0,0);let n=ay.distanceTo(t.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(ol.x=s.normal.x>0?t.max.x:t.min.x,ol.y=s.normal.y>0?t.max.y:t.min.y,ol.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var go=class extends Ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},a0=new he,Vd=new Na,al=new Es,cl=new P,Fa=class extends En{constructor(t=new We,n=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),al.radius+=r,t.ray.intersectsSphere(al)===!1)return;a0.copy(s).invert(),Vd.copy(t.ray).applyMatrix4(a0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=l.getX(g);cl.fromBufferAttribute(d,m),c0(cl,m,c,s,t,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)cl.fromBufferAttribute(d,g),c0(cl,g,c,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function c0(e,t,n,i,s,r,o){let a=Vd.distanceSqToPoint(e);if(a<n){let c=new P;Vd.closestPointToPoint(e,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Oa=class extends Gn{constructor(t=[],n=er,i,s,r,o,a,c,l,h){super(t,n,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},os=class extends Gn{constructor(t,n,i,s,r,o,a,c,l){super(t,n,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Js=class extends Gn{constructor(t,n,i=Hi,s,r,o,a=gn,c=gn,l,h=is,d=1){if(h!==is&&h!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:d};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Tl=class extends Js{constructor(t,n=Hi,i=er,s,r,o=gn,a=gn,c,l=is){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ba=class extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ie=class e extends We{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function g(y,m,p,S,w,v,E,b,C,x,T){let R=v/C,D=E/x,O=v/2,H=E/2,L=b/2,X=C+1,K=x+1,$=0,rt=0,Z=new P;for(let it=0;it<K;it++){let I=it*D-H;for(let Q=0;Q<X;Q++){let et=Q*R-O;Z[y]=et*S,Z[m]=I*w,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[y]=0,Z[m]=0,Z[p]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Q/C),d.push(1-it/x),$+=1}}for(let it=0;it<x;it++)for(let I=0;I<C;I++){let Q=u+I+X*it,et=u+I+X*(it+1),lt=u+(I+1)+X*(it+1),ct=u+(I+1)+X*it;c.push(Q,et,ct),c.push(et,lt,ct),rt+=6}a.addGroup(f,rt,T),f+=rt,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ar=class e extends We{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],c=[],l=new P,h=new Ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let f=i+d/n*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Hn=class e extends We{constructor(t=1,n=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;S(),o===!1&&(t>0&&w(!0),n>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function S(){let v=new P,E=new P,b=0,C=(n-t)/i;for(let x=0;x<=r;x++){let T=[],R=x/r,D=R*(n-t)+t;for(let O=0;O<=s;O++){let H=O/s,L=H*c+a,X=Math.sin(L),K=Math.cos(L);E.x=D*X,E.y=-R*i+m,E.z=D*K,d.push(E.x,E.y,E.z),v.set(X,C,K).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-R),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let R=y[T][x],D=y[T+1][x],O=y[T+1][x+1],H=y[T][x+1];(t>0||T!==0)&&(h.push(R,D,H),b+=3),(n>0||T!==r-1)&&(h.push(D,O,H),b+=3)}l.addGroup(p,b,0),p+=b}function w(v){let E=g,b=new Ut,C=new P,x=0,T=v===!0?t:n,R=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let L=O/s*c+a,X=Math.cos(L),K=Math.sin(L);C.x=T*K,C.y=m*R,C.z=T*X,d.push(C.x,C.y,C.z),u.push(0,R,0),b.x=X*.5+.5,b.y=K*.5*R+.5,f.push(b.x,b.y),g++}for(let O=0;O<s;O++){let H=E+O,L=D+O;v===!0?h.push(L,L+1,H):h.push(L+1,L,H),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_o=class e extends Hn{constructor(t=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wl=class e extends We{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let w=new P,v=new P,E=new P;for(let b=0;b<n.length;b+=3)f(n[b+0],w),f(n[b+1],v),f(n[b+2],E),c(w,v,E,S)}function c(S,w,v,E){let b=E+1,C=[];for(let x=0;x<=b;x++){C[x]=[];let T=S.clone().lerp(v,x/b),R=w.clone().lerp(v,x/b),D=b-x;for(let O=0;O<=D;O++)O===0&&x===b?C[x][O]=T:C[x][O]=T.clone().lerp(R,O/D)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){let R=Math.floor(T/2);T%2===0?(u(C[x][R+1]),u(C[x+1][R]),u(C[x][R])):(u(C[x][R+1]),u(C[x+1][R+1]),u(C[x+1][R]))}}function l(S){let w=new P;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let S=new P;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;o.push(v,1-E)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){let w=o[S+0],v=o[S+2],E=o[S+4],b=Math.max(w,v,E),C=Math.min(w,v,E);b>.9&&C<.1&&(w<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,w){let v=S*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let S=new P,w=new P,v=new P,E=new P,b=new Ut,C=new Ut,x=new Ut;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),b.set(o[R+0],o[R+1]),C.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),E.copy(S).add(w).add(v).divideScalar(3);let D=m(E);y(b,R+0,S,D),y(C,R+2,w,D),y(x,R+4,v,D)}}function y(S,w,v,E){E<0&&S.x===1&&(o[w]=S.x-1),v.x===0&&v.z===0&&(o[w]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}};var yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,n){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=n||(o.isVector2?new Ut:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new P,s=[],r=[],o=[],a=new P,c=new he;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},za=class extends yi{constructor(t=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,n=new Ut){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Al=class extends za{constructor(t,n,i,s,r,o){super(t,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pf(){let e=0,t=0,n=0,i=0;function s(r,o,a,c){e=r,t=a,n=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return e+t*r+n*o+i*a}}}var l0=new P,h0=new P,Ld=new pf,Dd=new pf,Nd=new pf,xo=class extends yi{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new P){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(h0.subVectors(s[0],s[1]).add(s[0]),l=h0);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(l0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=l0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ld.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,y,m),Dd.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,y,m),Nd.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ld.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Dd.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Nd.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(Ld.calc(c),Dd.calc(c),Nd.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function u0(e,t,n,i,s){let r=(i-t)*.5,o=(s-n)*.5,a=e*e,c=e*a;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*a+r*e+n}function cy(e,t){let n=1-e;return n*n*t}function ly(e,t){return 2*(1-e)*e*t}function hy(e,t){return e*e*t}function Sa(e,t,n,i){return cy(e,t)+ly(e,n)+hy(e,i)}function uy(e,t){let n=1-e;return n*n*n*t}function dy(e,t){let n=1-e;return 3*n*n*e*t}function fy(e,t){return 3*(1-e)*e*e*t}function py(e,t){return e*e*e*t}function ba(e,t,n,i,s){return uy(e,t)+dy(e,n)+fy(e,i)+py(e,s)}var Cl=class extends yi{constructor(t=new Ut,n=new Ut,i=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new Ut){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ba(t,s.x,r.x,o.x,a.x),ba(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rl=class extends yi{constructor(t=new P,n=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new P){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ba(t,s.x,r.x,o.x,a.x),ba(t,s.y,r.y,o.y,a.y),ba(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends yi{constructor(t=new Ut,n=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ut){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ut){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends yi{constructor(t=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new P){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends yi{constructor(t=new Ut,n=new Ut,i=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new Ut){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Sa(t,s.x,r.x,o.x),Sa(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends yi{constructor(t=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new P){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Sa(t,s.x,r.x,o.x),Sa(t,s.y,r.y,o.y),Sa(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ut){let i=n,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(u0(a,c.x,l.x,h.x,d.x),u0(a,c.y,l.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new Ut().fromArray(s))}return this}},my=Object.freeze({__proto__:null,ArcCurve:Al,CatmullRomCurve3:xo,CubicBezierCurve:Cl,CubicBezierCurve3:Rl,EllipseCurve:za,LineCurve:Il,LineCurve3:Pl,QuadraticBezierCurve:Ll,QuadraticBezierCurve3:ka,SplineCurve:Dl});var as=class e extends wl{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var oi=class e extends We{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=n/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let S=p*u-o;for(let w=0;w<l;w++){let v=w*d-r;g.push(v,-S,0),y.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let w=S+l*p,v=S+l*(p+1),E=S+1+l*(p+1),b=S+1+l*p;f.push(w,v,b),f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},vo=class e extends We{constructor(t=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(n-t)/s,f=new P,g=new Ut;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let S=p+m,w=S,v=S+i+1,E=S+i+2,b=S+1;a.push(w,v,b),a.push(v,E,b)}}this.setIndex(a),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ai=class e extends We{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new P,u=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let S=[],w=p/i,v=o+w*a,E=t*Math.cos(v),b=Math.sqrt(t*t-E*E),C=0;p===0&&o===0?C=.5/n:p===i&&c===Math.PI&&(C=-.5/n);for(let x=0;x<=n;x++){let T=x/n,R=s+T*r;d.x=-b*Math.cos(R),d.y=E,d.z=b*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+C,1-w),S.push(l++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<n;S++){let w=h[p][S+1],v=h[p][S],E=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&f.push(w,v,b),(p!==i-1||c<Math.PI)&&f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Va=class e extends We{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new P,f=new P,g=new P;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+n*Math.cos(m))*Math.cos(S),f.y=(t+n*Math.cos(m))*Math.sin(S),f.z=n*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,v=(s+1)*y+m;c.push(p,S,v),c.push(S,w,v)}this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ga=class e extends We{constructor(t=new ka(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new Ut,h=new P,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function y(){for(let w=0;w<n;w++)m(w);m(r===!1?n:0),S(),p()}function m(w){h=t.getPointAt(w/n,h);let v=o.normals[w],E=o.binormals[w];for(let b=0;b<=s;b++){let C=b/s*Math.PI*2,x=Math.sin(C),T=-Math.cos(C);c.x=T*v.x+x*E.x,c.y=T*v.y+x*E.y,c.z=T*v.z+x*E.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=n;w++)for(let v=1;v<=s;v++){let E=(s+1)*(w-1)+(v-1),b=(s+1)*w+(v-1),C=(s+1)*w+v,x=(s+1)*(w-1)+v;g.push(E,b,x),g.push(b,C,x)}}function S(){for(let w=0;w<=n;w++)for(let v=0;v<=s;v++)l.x=w/n,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new my[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Pr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(d0(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(d0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Nn(e){let t={};for(let n=0;n<e.length;n++){let i=Pr(e[n]);for(let s in i)t[s]=i[s]}return t}function d0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function gy(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function mf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var ig={clone:Pr,merge:Nn},_y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends Ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=gy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Nl=class extends ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Kn=class extends Ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Kl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ul=class extends Ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fl=class extends Ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function no(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Ud(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ks=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break n}if(!(t>=r)){let a=n[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends Ks{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bd,endingEnd:Bd}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zd:r=t,a=2*n-i;break;case kd:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case zd:o=t,c=2*i-n;break;case kd:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,S=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+S*o[l+E]+w*o[c+E]+v*o[d+E];return r}},Bl=class extends Ks{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},zl=class extends Ks{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kl=class extends Ks{interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-n)/(s-n),y=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],p=f*u+g*2,S=d[p],w=d[p+1],v=t*u+g*2,E=h[v],b=h[v+1],C=yy(i,n,S,E,s);r[g]=sg(C,y,w,b,m)}return r}};function sg(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function vy(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function yy(e,t,n,i,s){let r=(e-t)/(s-t);for(let o=0;o<8;o++){let a=sg(r,t,n,i,s)-e;if(Math.abs(a)<1e-10)break;let c=vy(r,t,n,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var li=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=no(n,this.TimeBufferType),this.values=no(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:no(t.times,Array),values:no(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ud(t.settings)&&(i.settings={inTangents:no(t.settings.inTangents,Array),outTangents:no(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new kl(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Ea:n=this.InterpolantFactoryMethodDiscrete;break;case Ml:n=this.InterpolantFactoryMethodLinear;break;case ul:n=this.InterpolantFactoryMethodSmooth;break;case Od:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Ml;case this.InterpolantFactoryMethodSmooth:return ul;case this.InterpolantFactoryMethodBezier:return Od}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Ud(this.settings)&&(f0(this.settings.inTangents,t),f0(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Jt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&wv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Jt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ul,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=n[d+g];if(y!==n[u+g]||y!==n[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)n[c+l]=n[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Ud(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function f0(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Ml;var js=class extends li{constructor(t,n,i){super(t,n,i)}};js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Ea;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends li{constructor(t,n,i,s){super(t,n,i,s)}};Vl.prototype.ValueTypeName="color";var Gl=class extends li{constructor(t,n,i,s){super(t,n,i,s)}};Gl.prototype.ValueTypeName="number";var Hl=class extends Ks{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-n)/(s-n),l=t*a;for(let h=l+a;l!==h;l+=4)Ln.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ha=class extends li{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Qs=class extends li{constructor(t,n,i){super(t,n,i)}};Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Ea;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends li{constructor(t,n,i,s){super(t,n,i,s)}};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(t,n,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rg=new Xl,ql=class{constructor(t){this.manager=t!==void 0?t:rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wa=class extends En{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Xa=class extends Wa{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},Fd=new he,p0=new P,m0=new P,Yl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;p0.setFromMatrixPosition(t.matrixWorld),n.position.copy(p0),m0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(m0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){Fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Fd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===co||t.reversedDepth?n.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),n.multiply(Fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ll=new P,hl=new Ln,es=new P,qa=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ll,hl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,hl,es.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ll,hl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,hl,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$s=new P,g0=new Ut,_0=new Ut,Pn=class extends qa{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){$s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($s.x,$s.y).multiplyScalar(-t/$s.z),$s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($s.x,$s.y).multiplyScalar(-t/$s.z)}getViewSize(t,n){return this.getViewBounds(t,g0,_0),n.subVectors(_0,g0)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(ya*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var yo=class extends qa{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Gd=class extends Yl{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ya=class extends Wa{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Gd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var io=-90,so=1,$l=class extends En{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(io,so,t,n);s.layers=this.layers,this.add(s);let r=new Pn(io,so,t,n);r.layers=this.layers,this.add(r);let o=new Pn(io,so,t,n);o.layers=this.layers,this.add(o);let a=new Pn(io,so,t,n);a.layers=this.layers,this.add(a);let c=new Pn(io,so,t,n);c.layers=this.layers,this.add(c);let l=new Pn(io,so,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(let l of n)this.remove(l);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Zl=class extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gf="\\[\\]\\.:\\/",My=new RegExp("["+gf+"]","g"),_f="[^"+gf+"]",Sy="[^"+gf.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",_f),Ey=/(WCOD+)?/.source.replace("WCOD",Sy),Ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),wy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),Ay=new RegExp("^"+by+Ey+Ty+wy+"$"),Cy=["material","materials","bones","map"],Hd=class{constructor(t,n,i){let s=i||Ne.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ne=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(My,"")}static parseTrackName(t){let n=Ay.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Cy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=n.nodeName;Jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Hd;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TT=new Float32Array(1);var bf=class bf{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};bf.prototype.isMatrix2=!0;var Wd=bf;function xf(e,t,n,i){let s=Ry(i);switch(n){case cf:return e*t;case sh:return e*t/s.components*s.byteLength;case rh:return e*t/s.components*s.byteLength;case sr:return e*t*2/s.components*s.byteLength;case oh:return e*t*2/s.components*s.byteLength;case lf:return e*t*3/s.components*s.byteLength;case Si:return e*t*4/s.components*s.byteLength;case ah:return e*t*4/s.components*s.byteLength;case ja:case Qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case tc:case ec:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lh:case uh:return Math.max(e,16)*Math.max(t,8)/4;case ch:case hh:return Math.max(e,8)*Math.max(t,8)/2;case dh:case fh:case mh:case gh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ph:case nc:case _h:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case yh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case bh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Rh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Lh:case Dh:case Nh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Uh:case Fh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ic:case Oh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ry(e){switch(e){case jn:case sf:return{byteLength:1,components:1};case bo:case rf:case Wi:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Hi:case eh:case Mi:return{byteLength:4,components:1};case of:case af:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ag(){let e=null,t=!1,n=null,i=null;function s(r,o){i=e.requestAnimationFrame(s),n(r,o)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Fy(e){let t=new WeakMap;function n(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=e.createBuffer();e.bindBuffer(c,u),e.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=e.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=e.SHORT;else if(l instanceof Uint32Array)f=e.UNSIGNED_INT;else if(l instanceof Int32Array)f=e.INT;else if(l instanceof Int8Array)f=e.BYTE;else if(l instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let h=c.array,d=c.updateRanges;if(e.bindBuffer(l,a),d.length===0)e.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];e.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(e.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,By=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,r2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f2="gl_FragColor = linearToOutputTexel( gl_FragColor );",p2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,R2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,I2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,k2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,y3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Oy,alphahash_pars_fragment:By,alphamap_fragment:zy,alphamap_pars_fragment:ky,alphatest_fragment:Vy,alphatest_pars_fragment:Gy,aomap_fragment:Hy,aomap_pars_fragment:Wy,batching_pars_vertex:Xy,batching_vertex:qy,begin_vertex:Yy,beginnormal_vertex:$y,bsdfs:Zy,iridescence_fragment:Jy,bumpmap_pars_fragment:Ky,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:t2,clipping_planes_vertex:e2,color_fragment:n2,color_pars_fragment:i2,color_pars_vertex:s2,color_vertex:r2,common:o2,cube_uv_reflection_fragment:a2,defaultnormal_vertex:c2,displacementmap_pars_vertex:l2,displacementmap_vertex:h2,emissivemap_fragment:u2,emissivemap_pars_fragment:d2,colorspace_fragment:f2,colorspace_pars_fragment:p2,envmap_fragment:m2,envmap_common_pars_fragment:g2,envmap_pars_fragment:_2,envmap_pars_vertex:x2,envmap_physical_pars_fragment:R2,envmap_vertex:v2,fog_vertex:y2,fog_pars_vertex:M2,fog_fragment:S2,fog_pars_fragment:b2,gradientmap_pars_fragment:E2,lightmap_pars_fragment:T2,lights_lambert_fragment:w2,lights_lambert_pars_fragment:A2,lights_pars_begin:C2,lights_toon_fragment:I2,lights_toon_pars_fragment:P2,lights_phong_fragment:L2,lights_phong_pars_fragment:D2,lights_physical_fragment:N2,lights_physical_pars_fragment:U2,lights_fragment_begin:F2,lights_fragment_maps:O2,lights_fragment_end:B2,lightprobes_pars_fragment:z2,logdepthbuf_fragment:k2,logdepthbuf_pars_fragment:V2,logdepthbuf_pars_vertex:G2,logdepthbuf_vertex:H2,map_fragment:W2,map_pars_fragment:X2,map_particle_fragment:q2,map_particle_pars_fragment:Y2,metalnessmap_fragment:$2,metalnessmap_pars_fragment:Z2,morphinstance_vertex:J2,morphcolor_vertex:K2,morphnormal_vertex:j2,morphtarget_pars_vertex:Q2,morphtarget_vertex:t3,normal_fragment_begin:e3,normal_fragment_maps:n3,normal_pars_fragment:i3,normal_pars_vertex:s3,normal_vertex:r3,normalmap_pars_fragment:o3,clearcoat_normal_fragment_begin:a3,clearcoat_normal_fragment_maps:c3,clearcoat_pars_fragment:l3,iridescence_pars_fragment:h3,opaque_fragment:u3,packing:d3,premultiplied_alpha_fragment:f3,project_vertex:p3,dithering_fragment:m3,dithering_pars_fragment:g3,roughnessmap_fragment:_3,roughnessmap_pars_fragment:x3,shadowmap_pars_fragment:v3,shadowmap_pars_vertex:y3,shadowmap_vertex:M3,shadowmask_pars_fragment:S3,skinbase_vertex:b3,skinning_pars_vertex:E3,skinning_vertex:T3,skinnormal_vertex:w3,specularmap_fragment:A3,specularmap_pars_fragment:C3,tonemapping_fragment:R3,tonemapping_pars_fragment:I3,transmission_fragment:P3,transmission_pars_fragment:L3,uv_pars_fragment:D3,uv_pars_vertex:N3,uv_vertex:U3,worldpos_vertex:F3,background_vert:O3,background_frag:B3,backgroundCube_vert:z3,backgroundCube_frag:k3,cube_vert:V3,cube_frag:G3,depth_vert:H3,depth_frag:W3,distance_vert:X3,distance_frag:q3,equirect_vert:Y3,equirect_frag:$3,linedashed_vert:Z3,linedashed_frag:J3,meshbasic_vert:K3,meshbasic_frag:j3,meshlambert_vert:Q3,meshlambert_frag:tM,meshmatcap_vert:eM,meshmatcap_frag:nM,meshnormal_vert:iM,meshnormal_frag:sM,meshphong_vert:rM,meshphong_frag:oM,meshphysical_vert:aM,meshphysical_frag:cM,meshtoon_vert:lM,meshtoon_frag:hM,points_vert:uM,points_frag:dM,shadow_vert:fM,shadow_frag:pM,sprite_vert:mM,sprite_frag:gM},vt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},hs={basic:{uniforms:Nn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Nn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Nn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Nn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Nn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Nn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Nn([vt.points,vt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Nn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Nn([vt.common,vt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Nn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Nn([vt.sprite,vt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Nn([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Nn([vt.lights,vt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};hs.physical={uniforms:Nn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Vh={r:0,b:0,g:0},_M=new he,Cg=new jt;Cg.set(-1,0,0,0,1,0,0,0,1);function xM(e,t,n,i,s,r){let o=new Gt(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(S){let w=!1,v=f(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(S,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Ja)?(l===void 0&&(l=new qt(new Ie(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Pr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_M.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cg),l.material.toneMapped=ae.getTransfer(v.colorSpace)!==xe,(h!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new qt(new oi(2,2),new ci({name:"BackgroundMaterial",uniforms:Pr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ae.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(Vh,mf(e)),n.buffers.color.setClear(Vh.r,Vh.g,Vh.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function vM(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(D,O,H,L,X){let K=!1,$=d(D,L,H,O);r!==$&&(r=$,l(r.object)),K=f(D,L,H,X),K&&g(D,L,H,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(D,O,H,L),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return e.createVertexArray()}function l(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function d(D,O,H,L){let X=L.wireframe===!0,K=i[O.id];K===void 0&&(K={},i[O.id]=K);let $=D.isInstancedMesh===!0?D.id:0,rt=K[$];rt===void 0&&(rt={},K[$]=rt);let Z=rt[H.id];Z===void 0&&(Z={},rt[H.id]=Z);let it=Z[X];return it===void 0&&(it=u(c()),Z[X]=it),it}function u(D){let O=[],H=[],L=[];for(let X=0;X<n;X++)O[X]=0,H[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,O,H,L){let X=r.attributes,K=O.attributes,$=0,rt=H.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let I=X[Z],Q=K[Z];if(Q===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;$++}return r.attributesNum!==$||r.index!==L}function g(D,O,H,L){let X={},K=O.attributes,$=0,rt=H.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let I=K[Z];I===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(I=D.instanceColor));let Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),X[Z]=Q,$++}r.attributes=X,r.attributesNum=$,r.index=L}function y(){let D=r.newAttributes;for(let O=0,H=D.length;O<H;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){let H=r.newAttributes,L=r.enabledAttributes,X=r.attributeDivisors;H[D]=1,L[D]===0&&(e.enableVertexAttribArray(D),L[D]=1),X[D]!==O&&(e.vertexAttribDivisor(D,O),X[D]=O)}function S(){let D=r.newAttributes,O=r.enabledAttributes;for(let H=0,L=O.length;H<L;H++)O[H]!==D[H]&&(e.disableVertexAttribArray(H),O[H]=0)}function w(D,O,H,L,X,K,$){$===!0?e.vertexAttribIPointer(D,O,H,X,K):e.vertexAttribPointer(D,O,H,L,X,K)}function v(D,O,H,L){y();let X=L.attributes,K=H.getAttributes(),$=O.defaultAttributeValues;for(let rt in K){let Z=K[rt];if(Z.location>=0){let it=X[rt];if(it===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){let I=it.normalized,Q=it.itemSize,et=t.get(it);if(et===void 0)continue;let lt=et.buffer,ct=et.type,ot=et.bytesPerElement,B=ct===e.INT||ct===e.UNSIGNED_INT||it.gpuType===eh;if(it.isInterleavedBufferAttribute){let W=it.data,at=W.stride,_t=it.offset;if(W.isInstancedInterleavedBuffer){for(let ut=0;ut<Z.locationSize;ut++)p(Z.location+ut,W.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ut=0;ut<Z.locationSize;ut++)m(Z.location+ut);e.bindBuffer(e.ARRAY_BUFFER,lt);for(let ut=0;ut<Z.locationSize;ut++)w(Z.location+ut,Q/Z.locationSize,ct,I,at*ot,(_t+Q/Z.locationSize*ut)*ot,B)}else{if(it.isInstancedBufferAttribute){for(let W=0;W<Z.locationSize;W++)p(Z.location+W,it.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let W=0;W<Z.locationSize;W++)m(Z.location+W);e.bindBuffer(e.ARRAY_BUFFER,lt);for(let W=0;W<Z.locationSize;W++)w(Z.location+W,Q/Z.locationSize,ct,I,Q*ot,Q/Z.locationSize*W*ot,B)}}else if($!==void 0){let I=$[rt];if(I!==void 0)switch(I.length){case 2:e.vertexAttrib2fv(Z.location,I);break;case 3:e.vertexAttrib3fv(Z.location,I);break;case 4:e.vertexAttrib4fv(Z.location,I);break;default:e.vertexAttrib1fv(Z.location,I)}}}}S()}function E(){T();for(let D in i){let O=i[D];for(let H in O){let L=O[H];for(let X in L){let K=L[X];for(let $ in K)h(K[$].object),delete K[$];delete L[X]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let H in O){let L=O[H];for(let X in L){let K=L[X];for(let $ in K)h(K[$].object),delete K[$];delete L[X]}}delete i[D.id]}function C(D){for(let O in i){let H=i[O];for(let L in H){let X=H[L];if(X[D.id]===void 0)continue;let K=X[D.id];for(let $ in K)h(K[$].object),delete K[$];delete X[D.id]}}}function x(D){for(let O in i){let H=i[O],L=D.isInstancedMesh===!0?D.id:0,X=H[L];if(X!==void 0){for(let K in X){let $=X[K];for(let rt in $)h($[rt].object),delete $[rt];delete X[K]}delete H[L],Object.keys(H).length===0&&delete i[O]}}}function T(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function yM(e,t,n){let i;function s(c){i=c}function r(c,l){e.drawArrays(i,c,l),n.update(l,i,1)}function o(c,l,h){h!==0&&(e.drawArraysInstanced(i,c,l,h),n.update(l,i,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function MM(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Si&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jn&&C!==Mi&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",h=c(l);h!==l&&(Zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:b}}function SM(e){let t=this,n=null,i=0,s=!1,r=!1,o=new zi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:i,w=S*4,v=p.clippingState||null;c.value=v,v=h(g,u,w,f);for(let E=0;E!==w;++E)v[E]=n[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)o.copy(d[w]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Ao=4,bM=6,EM=20,TM=256,sc=new yo,og=new Gt,Ef=null,Tf=0,wf=0,Af=!1,wM=new P,Lr=new P,Hh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=wM}=r;Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ef,Tf,wf),this._renderer.xr.enabled=Af,t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===er||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Wi,format:Si,colorSpace:Ta,depthBuffer:!1},s=ag(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=AM(r)),this._blurMaterial=RM(r,t,n),this._ggxMaterial=CM(r,t,n)}return s}_compileMaterial(t){let n=new qt(new We,t);this._renderer.compile(n,sc)}_sceneToCubeUV(t,n,i,s,r){let c=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(og),d.toneMapping=Gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Ie,new Je({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(og),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;wo(s,v*E,w>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(y,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===er||t.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;wo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,sc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Ao?i-g+Ao:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-n,wo(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,sc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,wo(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,sc)}_blur(t,n,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,n,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,n,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ao?s-this._lodMax+Ao:0),u=4*(this._cubeSize-h);wo(n,d,u,3*h,2*h),o.setRenderTarget(n),o.render(c,sc)}};function AM(e){let t=[],n=[],i=e,s=e-Ao+1+bM;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,w=p>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(v,f*u*p);for(let E=0;E<u;E++){let b=h[E*2]*2-1,C=h[E*2+1]*2-1;p===0?Lr.set(1,C,b):p===1?Lr.set(-b,1,-C):p===2?Lr.set(-b,C,1):p===3?Lr.set(-1,C,-b):p===4?Lr.set(-b,-1,C):Lr.set(b,C,-1),Lr.toArray(y,(p*u+E)*f)}}let m=new We;m.setAttribute("position",new Fe(g,f)),m.setAttribute("outputDirection",new Fe(y,f)),n.push(new qt(m,null)),i>Ao&&i--}return{lodMeshes:n,sizeLods:t}}function ag(e,t,n){let i=new Jn(e,t,n);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function CM(e,t,n){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function RM(e,t,n){return new ci({name:"SphericalGaussianBlur",defines:{SAMPLES:EM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function cg(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function lg(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wh=class extends Jn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Oa(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ie(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:cs});r.uniforms.tEquirect.value=n;let o=new qt(s,r),a=n.minFilter;return n.minFilter===nr&&(n.minFilter=bn),new $l(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}};function IM(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===jl||f===Ql)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Wh(g.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===jl||f===Ql,y=f===er||f===Ir;if(g||y){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Hh(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||y&&S&&c(S)?(i===null&&(i=new Hh(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===jl?u.mapping=er:f===Ql&&(u.mapping=Ir),u}function c(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function PM(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Tr("WebGLRenderer: "+i+" extension not supported."),s}}}function LM(e,t,n,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,n.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let w=0,v=S.length;w<v;w+=3){let E=S[w+0],b=S[w+1],C=S[w+2];u.push(E,b,b,C,C,E)}}else{let S=g.array;y=g.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let E=w+0,b=w+1,C=w+2;u.push(E,b,b,C,C,E)}}let m=new(g.count>=65535?Da:La)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function DM(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){e.drawElements(i,u,r,d*o),n.update(u,i,1)}function l(d,u,f){f!==0&&(e.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];n.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function NM(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function UM(e,t,n){let i=new WeakMap,s=new Oe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=a.attributes.position.count*w,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*E*4*d),C=new Ca(b,v,E,d);C.type=Mi,C.needsUpdate=!0;let x=w*4;for(let R=0;R<d;R++){let D=m[R],O=p[R],H=S[R],L=v*E*4*R;for(let X=0;X<D.count;X++){let K=X*x;f===!0&&(s.fromBufferAttribute(D,X),b[L+K+0]=s.x,b[L+K+1]=s.y,b[L+K+2]=s.z,b[L+K+3]=0),g===!0&&(s.fromBufferAttribute(O,X),b[L+K+4]=s.x,b[L+K+5]=s.y,b[L+K+6]=s.z,b[L+K+7]=0),y===!0&&(s.fromBufferAttribute(H,X),b[L+K+8]=s.x,b[L+K+9]=s.y,b[L+K+10]=s.z,b[L+K+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Ut(v,E)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(e,"morphTargetBaseInfluence",g),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function FM(e,t,n,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var OM={[Jd]:"LINEAR_TONE_MAPPING",[Kd]:"REINHARD_TONE_MAPPING",[jd]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[ef]:"AGX_TONE_MAPPING",[Za]:"NEUTRAL_TONE_MAPPING",[tf]:"CUSTOM_TONE_MAPPING"};function BM(e,t,n,i,s,r){let o=new Jn(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new We;l.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ue([0,2,0,0,2,0],2));let h=new Nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qt(l,h),u=new yo(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],w=!1;this.setSize=function(v,E){o.setSize(v,E),a!==null&&a.setSize(v,E),c!==null&&c.setSize(v,E);for(let b=0;b<S.length;b++){let C=S[b];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let E=o.width,b=o.height;S.length>0&&a===null&&(a=new Jn(E,b,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),c=new Jn(E,b,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let x=S[C];x.setSize&&x.setSize(E,b)}},this.begin=function(v,E){if(y||v.toneMapping===Gi&&S.length===0)return!1;if(p=E,E!==null){let b=E.width,C=E.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Gi,!0},this.hasRenderPass=function(){return w},this.end=function(v,E){v.toneMapping=m,y=!0;let b=o,C=a;for(let x=0;x<S.length;x++){let T=S[x];T.enabled!==!1&&(T.render(v,C,b,E),T.needsSwap!==!1&&(b=C,C=C===a?c:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},ae.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let x=OM[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Rg=new Gn,If=new Js(1,1),Ig=new Ca,Pg=new El,Lg=new Oa,hg=[],ug=[],dg=new Float32Array(16),fg=new Float32Array(9),pg=new Float32Array(4);function Ro(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=hg[s];if(r===void 0&&(r=new Float32Array(s),hg[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function ln(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Yh(e,t){let n=ug[t];n===void 0&&(n=new Int32Array(t),ug[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function zM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function kM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2fv(this.addr,t),hn(n,t)}}function VM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ln(n,t))return;e.uniform3fv(this.addr,t),hn(n,t)}}function GM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4fv(this.addr,t),hn(n,t)}}function HM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(ln(n,i))return;pg.set(i),e.uniformMatrix2fv(this.addr,!1,pg),hn(n,i)}}function WM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(ln(n,i))return;fg.set(i),e.uniformMatrix3fv(this.addr,!1,fg),hn(n,i)}}function XM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(ln(n,i))return;dg.set(i),e.uniformMatrix4fv(this.addr,!1,dg),hn(n,i)}}function qM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function YM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2iv(this.addr,t),hn(n,t)}}function $M(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ln(n,t))return;e.uniform3iv(this.addr,t),hn(n,t)}}function ZM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4iv(this.addr,t),hn(n,t)}}function JM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function KM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2uiv(this.addr,t),hn(n,t)}}function jM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ln(n,t))return;e.uniform3uiv(this.addr,t),hn(n,t)}}function QM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4uiv(this.addr,t),hn(n,t)}}function tS(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(If.compareFunction=n.isReversedDepthBuffer()?kh:zh,r=If):r=Rg,n.setTexture2D(t||r,s)}function eS(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Pg,s)}function nS(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Lg,s)}function iS(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Ig,s)}function sS(e){switch(e){case 5126:return zM;case 35664:return kM;case 35665:return VM;case 35666:return GM;case 35674:return HM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return KM;case 36295:return jM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}function rS(e,t){e.uniform1fv(this.addr,t)}function oS(e,t){let n=Ro(t,this.size,2);e.uniform2fv(this.addr,n)}function aS(e,t){let n=Ro(t,this.size,3);e.uniform3fv(this.addr,n)}function cS(e,t){let n=Ro(t,this.size,4);e.uniform4fv(this.addr,n)}function lS(e,t){let n=Ro(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hS(e,t){let n=Ro(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function uS(e,t){let n=Ro(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function dS(e,t){e.uniform1iv(this.addr,t)}function fS(e,t){e.uniform2iv(this.addr,t)}function pS(e,t){e.uniform3iv(this.addr,t)}function mS(e,t){e.uniform4iv(this.addr,t)}function gS(e,t){e.uniform1uiv(this.addr,t)}function _S(e,t){e.uniform2uiv(this.addr,t)}function xS(e,t){e.uniform3uiv(this.addr,t)}function vS(e,t){e.uniform4uiv(this.addr,t)}function yS(e,t,n){let i=this.cache,s=t.length,r=Yh(n,s);ln(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=If:o=Rg;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function MS(e,t,n){let i=this.cache,s=t.length,r=Yh(n,s);ln(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||Pg,r[o])}function SS(e,t,n){let i=this.cache,s=t.length,r=Yh(n,s);ln(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||Lg,r[o])}function bS(e,t,n){let i=this.cache,s=t.length,r=Yh(n,s);ln(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||Ig,r[o])}function ES(e){switch(e){case 5126:return rS;case 35664:return oS;case 35665:return aS;case 35666:return cS;case 35674:return lS;case 35675:return hS;case 35676:return uS;case 5124:case 35670:return dS;case 35667:case 35671:return fS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return _S;case 36295:return xS;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return bS}}var Pf=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sS(n.type)}},Lf=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ES(n.type)}},Df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,n[a.id],i)}}},Cf=/(\w+)(\])?(\[|\.)?/g;function mg(e,t){e.seq.push(t),e.map[t.id]=t}function TS(e,t,n){let i=e.name,s=i.length;for(Cf.lastIndex=0;;){let r=Cf.exec(i),o=Cf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){mg(n,l===void 0?new Pf(a,e,t):new Lf(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new Df(a),mg(n,d)),n=d}}}var Co=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(n,o),c=t.getUniformLocation(n,a.name);TS(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in n&&i.push(o)}return i}};function gg(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var wS=37297,AS=0;function CS(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var _g=new jt;function RS(e){ae._getMatrix(_g,ae.workingColorSpace,e);let t=`mat3( ${_g.elements.map(n=>n.toFixed(4))} )`;switch(ae.getTransfer(e)){case wa:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function xg(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+CS(e.getShaderSource(t),a)}else return r}function IS(e,t){let n=RS(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var PS={[Jd]:"Linear",[Kd]:"Reinhard",[jd]:"Cineon",[Qd]:"ACESFilmic",[ef]:"AgX",[Za]:"Neutral",[tf]:"Custom"};function LS(e,t){let n=PS[t];return n===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Gh=new P;function DS(){ae.getLuminanceCoefficients(Gh);let e=Gh.x.toFixed(4),t=Gh.y.toFixed(4),n=Gh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NS(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oc).join(`
`)}function US(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function FS(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function oc(e){return e!==""}function vg(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var OS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(e){return e.replace(OS,zS)}var BS=new Map;function zS(e,t){let n=ee[t];if(n===void 0){let i=BS.get(t);if(i!==void 0)n=ee[i],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nf(n)}var kS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mg(e){return e.replace(kS,VS)}function VS(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var GS={[Cr]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function HS(e){return GS[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var WS={[er]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Ja]:"ENVMAP_TYPE_CUBE_UV"};function XS(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":WS[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var qS={[Ir]:"ENVMAP_MODE_REFRACTION"};function YS(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":qS[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $S={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[z0]:"ENVMAP_BLENDING_MIX",[k0]:"ENVMAP_BLENDING_ADD"};function ZS(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":$S[e.combine]||"ENVMAP_BLENDING_NONE"}function JS(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function KS(e,t,n,i){let s=e.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,c=HS(n),l=XS(n),h=YS(n),d=ZS(n),u=JS(n),f=NS(n),g=US(r),y=s.createProgram(),m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oc).join(`
`),p.length>0&&(p+=`
`)):(m=[Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oc).join(`
`),p=[Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?ee.tonemapping_pars_fragment:"",n.toneMapping!==Gi?LS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,IS("linearToOutputTexel",n.outputColorSpace),DS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oc).join(`
`)),o=Nf(o),o=vg(o,n),o=yg(o,n),a=Nf(a),a=vg(a,n),a=yg(a,n),o=Mg(o),a=Mg(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=S+m+o,v=S+p+a,E=gg(s,s.VERTEX_SHADER,w),b=gg(s,s.FRAGMENT_SHADER,v);s.attachShader(y,E),s.attachShader(y,b),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(D){if(e.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(b)||"",X=O.trim(),K=H.trim(),$=L.trim(),rt=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(rt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,y,E,b);else{let it=xg(s,E,"vertex"),I=xg(s,b,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+it+`
`+I)}else X!==""?Zt("WebGLProgram: Program Info Log:",X):(K===""||$==="")&&(Z=!1);Z&&(D.diagnostics={runnable:rt,programLog:X,vertexShader:{log:K,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(E),s.deleteShader(b),x=new Co(s,y),T=FS(s,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,wS)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AS++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}var jS=0,Uf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Ff(t),n.set(t,i)),i}},Ff=class{constructor(t){this.id=jS++,this.code=t,this.usedTimes=0}};function QS(e){return e===sr||e===nc||e===ic}function tb(e,t,n,i,s,r){let o=new Ra,a=new Uf,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,R,D,O,H){let L=D.fog,X=O.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,rt=t.get(x.envMap||K,$),Z=rt&&rt.mapping===Ja?rt.image.height:null,it=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=I!==void 0?I.length:0,et=0;X.morphAttributes.position!==void 0&&(et=1),X.morphAttributes.normal!==void 0&&(et=2),X.morphAttributes.color!==void 0&&(et=3);let lt,ct,ot,B;if(it){let Ce=hs[it];lt=Ce.vertexShader,ct=Ce.fragmentShader}else{lt=x.vertexShader,ct=x.fragmentShader;let Ce=a.getVertexShaderStage(x),ge=a.getFragmentShaderStage(x);a.update(x,Ce,ge),ot=Ce.id,B=ge.id}let W=e.getRenderTarget(),at=e.state.buffers.depth.getReversed(),_t=O.isInstancedMesh===!0,ut=O.isBatchedMesh===!0,Ht=!!x.map,re=!!x.matcap,Yt=!!rt,Rt=!!x.aoMap,oe=!!x.lightMap,Xt=!!x.bumpMap&&x.wireframe===!1,de=!!x.normalMap,He=!!x.displacementMap,pn=!!x.emissiveMap,Ae=!!x.metalnessMap,tn=!!x.roughnessMap,F=x.anisotropy>0,An=x.clearcoat>0,ye=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,q=x.transmission>0,J=F&&!!x.anisotropyMap,ht=An&&!!x.clearcoatMap,dt=An&&!!x.clearcoatNormalMap,j=An&&!!x.clearcoatRoughnessMap,nt=_&&!!x.iridescenceMap,ft=_&&!!x.iridescenceThicknessMap,Ot=k&&!!x.sheenColorMap,xt=k&&!!x.sheenRoughnessMap,pt=!!x.specularMap,Bt=!!x.specularColorMap,$t=!!x.specularIntensityMap,Qt=q&&!!x.transmissionMap,U=q&&!!x.thicknessMap,mt=!!x.gradientMap,tt=!!x.alphaMap,gt=x.alphaTest>0,St=!!x.alphaHash,st=!!x.extensions,Vt=Gi;x.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Vt=e.toneMapping);let Dt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:lt,fragmentShader:ct,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:B,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ut,batchingColor:ut&&O._colorsTexture!==null,instancing:_t,instancingColor:_t&&O.instanceColor!==null,instancingMorph:_t&&O.morphTexture!==null,outputColorSpace:W===null?e.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:re,envMap:Yt,envMapMode:Yt&&rt.mapping,envMapCubeUVHeight:Z,aoMap:Rt,lightMap:oe,bumpMap:Xt,normalMap:de,displacementMap:He,emissiveMap:pn,normalMapObjectSpace:de&&x.normalMapType===H0,normalMapTangentSpace:de&&x.normalMapType===Bh,packedNormalMap:de&&x.normalMapType===Bh&&QS(x.normalMap.format),metalnessMap:Ae,roughnessMap:tn,anisotropy:F,anisotropyMap:J,clearcoat:An,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:j,dispersion:ye,retroreflection:A,iridescence:_,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:k,sheenColorMap:Ot,sheenRoughnessMap:xt,specularMap:pt,specularColorMap:Bt,specularIntensityMap:$t,transmission:q,transmissionMap:Qt,thicknessMap:U,gradientMap:mt,opaque:x.transparent===!1&&x.blending===So&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:St,combine:x.combine,mapUv:Ht&&g(x.map.channel),aoMapUv:Rt&&g(x.aoMap.channel),lightMapUv:oe&&g(x.lightMap.channel),bumpMapUv:Xt&&g(x.bumpMap.channel),normalMapUv:de&&g(x.normalMap.channel),displacementMapUv:He&&g(x.displacementMap.channel),emissiveMapUv:pn&&g(x.emissiveMap.channel),metalnessMapUv:Ae&&g(x.metalnessMap.channel),roughnessMapUv:tn&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(x.sheenRoughnessMap.channel),specularMapUv:pt&&g(x.specularMap.channel),specularColorMapUv:Bt&&g(x.specularColorMap.channel),specularIntensityMapUv:$t&&g(x.specularIntensityMap.channel),transmissionMapUv:Qt&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:tt&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(de||F),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Ht||tt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&de===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:at,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:pn&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(e.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let T=f[x.type],R;if(T){let D=hs[T];R=ig.clone(D.uniforms)}else R=x.uniforms;return R}function v(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new KS(e,T,x,s),l.push(R),h.set(T,R)),R}function E(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:C}}function eb(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,c){e.get(o)[a]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function nb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function bg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Eg(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let S=e[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},e[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function c(u,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let w=a(u,f,g,y,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):n.push(w)}function l(u,f,g,y,m,p){let S=a(u,f,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):n.unshift(S)}function h(u,f){n.length>1&&n.sort(u||nb),i.length>1&&i.sort(f||bg),s.length>1&&s.sort(f||bg)}function d(){for(let u=t,f=e.length;u<f;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function ib(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;return r===void 0?(o=new Eg,e.set(i,[o])):s>=r.length?(o=new Eg,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function sb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new P,color:new Gt};break;case"SpotLight":n={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function rb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ob=0;function ab(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function cb(e){let t=new sb,n=rb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let s=new P,r=new he,o=new he;function a(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,w=0,v=0,E=0,b=0,C=0,x=0,T=0,R=0;l.sort(ab);for(let O=0,H=l.length;O<H;O++){let L=l[O],X=L.color,K=L.intensity,$=L.distance,rt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===sr?rt=L.shadow.map.texture:rt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=X.r*K,d+=X.g*K,u+=X.b*K;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],K);R++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,I=n.get(L);I.shadowIntensity=it.intensity,I.shadowBias=it.bias,I.shadowNormalBias=it.normalBias,I.shadowRadius=it.radius,I.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[g]=I,i.sunShadowMap[g]=rt;let Q=it.getViewportCount();for(let et=0;et<Q;et++)i.sunShadowMatrix[y+et]=it.getMatrix(et),i.sunShadowCascade[y+et]=it._cascadeData[et];y+=Q,g++}i.sun[f]=Z,f++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,I=n.get(L);I.shadowIntensity=it.intensity,I.shadowBias=it.bias,I.shadowNormalBias=it.normalBias,I.shadowRadius=it.radius,I.shadowMapSize=it.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=Z,m++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(X).multiplyScalar(K),Z.distance=$,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[S]=Z;let it=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,it.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[S]=it.matrix,L.castShadow){let I=n.get(L);I.shadowIntensity=it.intensity,I.shadowBias=it.bias,I.shadowNormalBias=it.normalBias,I.shadowRadius=it.radius,I.shadowMapSize=it.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=rt,C++}S++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(X).multiplyScalar(K),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=Z,w++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let it=L.shadow,I=n.get(L);I.shadowIntensity=it.intensity,I.shadowBias=it.bias,I.shadowNormalBias=it.normalBias,I.shadowRadius=it.radius,I.shadowMapSize=it.mapSize,I.shadowCameraNear=it.camera.near,I.shadowCameraFar=it.camera.far,i.pointShadow[p]=I,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(K),Z.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[v]=Z,v++}}w>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==w||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==C||D.numSpotMaps!==x||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=S,i.rectArea.length=w,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=w,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=C,D.numSpotMaps=x,D.numLightProbes=R,i.version=ob++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){let v=l[S];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Tg(e){let t=new cb(e),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(n)}function h(u){t.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function lb(e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Tg(e),t.set(s,[a])):r>=o.length?(a=new Tg(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,db=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],wg=new he,rc=new P,Rf=new P;function pb(e,t,n){let i=new mo,s=new Ut,r=new Ut,o=new Oe,a=new Ul,c=new Fl,l={},h=n.maxTextureSize,d={[tr]:Tn,[Tn]:tr,[Dn]:Dn},u=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:hb,fragmentShader:ub}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new We;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let p=this.type;this.render=function(b,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===y0&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let T=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),O=e.state;O.setBlending(cs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==this.type;H&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(X=>X.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,X=b.length;L<X;L++){let K=b[L],$=K.shadow;if($===void 0){Zt("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let rt=$.getFrameExtents();s.multiply(rt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,$.mapSize.y=r.y));let Z=e.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||H===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Mo){if(K.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Jn(s.x,s.y,{format:sr,type:Wi,minFilter:bn,magFilter:bn,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new Js(s.x,s.y,Mi),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=is,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=gn,$.map.depthTexture.magFilter=gn}else K.isPointLight?($.map=new Wh(s.x),$.map.depthTexture=new Tl(s.x,Hi)):($.map=new Jn(s.x,s.y),$.map.depthTexture=new Js(s.x,s.y,Hi)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=is,this.type===Cr?($.map.depthTexture.compareFunction=Z?kh:zh,$.map.depthTexture.minFilter=bn,$.map.depthTexture.magFilter=bn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=gn,$.map.depthTexture.magFilter=gn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let it=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();K.isPointLight!==!0&&$.updateMatrices(K,x);for(let I=0;I<it;I++){let Q=$.getCamera(I);if(K.isPointLight){let et=$.camera,lt=$.matrix,ct=K.distance||et.far;ct!==et.far&&(et.far=ct,et.updateProjectionMatrix()),rc.setFromMatrixPosition(K.matrixWorld),et.position.copy(rc),Rf.copy(et.position),Rf.add(db[I]),et.up.copy(fb[I]),et.lookAt(Rf),et.updateMatrixWorld(),lt.makeTranslation(-rc.x,-rc.y,-rc.z),wg.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),$._frustum.setFromProjectionMatrix(wg,et.coordinateSystem,et.reversedDepth)}if($.map.isWebGLCubeRenderTarget)e.setRenderTarget($.map,I),e.clear();else{I===0&&(e.setRenderTarget($.map),e.clear());let et=$.getViewport(I);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),O.viewport(o)}i=$.getFrustum(I),v(C,x,Q,K,this.type)}$.isPointLightShadow!==!0&&this.type===Mo&&S($,x),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(T,R,D)};function S(b,C){let x=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Jn(s.x,s.y,{format:sr,type:Wi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(C,null,x,f,y,null)}function w(b,C,x,T){let R=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?c:a,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=R.uuid,H=C.uuid,L=l[O];L===void 0&&(L={},l[O]=L);let X=L[H];X===void 0&&(X=R.clone(),L[H]=X,C.addEventListener("dispose",E)),R=X}if(R.visible=C.visible,R.wireframe=C.wireframe,T===Mo?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=e.properties.get(R);O.light=x}return R}function v(b,C,x,T,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Mo)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let H=t.update(b),L=b.material;if(Array.isArray(L)){let X=H.groups;for(let K=0,$=X.length;K<$;K++){let rt=X[K],Z=L[rt.materialIndex];if(Z&&Z.visible){let it=w(b,Z,T,R);b.onBeforeShadow(e,b,C,x,H,it,rt),e.renderBufferDirect(x,null,H,it,b,rt),b.onAfterShadow(e,b,C,x,H,it,rt)}}}else if(L.visible){let X=w(b,L,T,R);b.onBeforeShadow(e,b,C,x,H,X,null),e.renderBufferDirect(x,null,H,X,b,null),b.onAfterShadow(e,b,C,x,H,X,null)}}let O=b.children;for(let H=0,L=O.length;H<L;H++)v(O[H],C,x,T,R)}function E(b){b.target.removeEventListener("dispose",E);for(let x in l){let T=l[x],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function mb(e,t){function n(){let U=!1,mt=new Oe,tt=null,gt=new Oe(0,0,0,0);return{setMask:function(St){tt!==St&&!U&&(e.colorMask(St,St,St,St),tt=St)},setLocked:function(St){U=St},setClear:function(St,st,Vt,Dt,Ce){Ce===!0&&(St*=Dt,st*=Dt,Vt*=Dt),mt.set(St,st,Vt,Dt),gt.equals(mt)===!1&&(e.clearColor(St,st,Vt,Dt),gt.copy(mt))},reset:function(){U=!1,tt=null,gt.set(-1,0,0,0)}}}function i(){let U=!1,mt=!1,tt=null,gt=null,St=null;return{setReversed:function(st){if(mt!==st){let Vt=t.get("EXT_clip_control");st?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),mt=st;let Dt=St;St=null,this.setClear(Dt)}},getReversed:function(){return mt},setTest:function(st){st?W(e.DEPTH_TEST):at(e.DEPTH_TEST)},setMask:function(st){tt!==st&&!U&&(e.depthMask(st),tt=st)},setFunc:function(st){if(mt&&(st=eg[st]),gt!==st){switch(st){case fl:e.depthFunc(e.NEVER);break;case pl:e.depthFunc(e.ALWAYS);break;case ml:e.depthFunc(e.LESS);break;case ao:e.depthFunc(e.LEQUAL);break;case gl:e.depthFunc(e.EQUAL);break;case _l:e.depthFunc(e.GEQUAL);break;case xl:e.depthFunc(e.GREATER);break;case vl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}gt=st}},setLocked:function(st){U=st},setClear:function(st){St!==st&&(St=st,mt&&(st=1-st),e.clearDepth(st))},reset:function(){U=!1,tt=null,gt=null,St=null,mt=!1}}}function s(){let U=!1,mt=null,tt=null,gt=null,St=null,st=null,Vt=null,Dt=null,Ce=null;return{setTest:function(ge){U||(ge?W(e.STENCIL_TEST):at(e.STENCIL_TEST))},setMask:function(ge){mt!==ge&&!U&&(e.stencilMask(ge),mt=ge)},setFunc:function(ge,Ui,Qi){(tt!==ge||gt!==Ui||St!==Qi)&&(e.stencilFunc(ge,Ui,Qi),tt=ge,gt=Ui,St=Qi)},setOp:function(ge,Ui,Qi){(st!==ge||Vt!==Ui||Dt!==Qi)&&(e.stencilOp(ge,Ui,Qi),st=ge,Vt=Ui,Dt=Qi)},setLocked:function(ge){U=ge},setClear:function(ge){Ce!==ge&&(e.clearStencil(ge),Ce=ge)},reset:function(){U=!1,mt=null,tt=null,gt=null,St=null,st=null,Vt=null,Dt=null,Ce=null}}}let r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,w=null,v=null,E=null,b=null,C=null,x=new Gt(0,0,0),T=0,R=!1,D=null,O=null,H=null,L=null,X=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,rt=0,Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=rt>=2);let it=null,I={},Q=e.getParameter(e.SCISSOR_BOX),et=e.getParameter(e.VIEWPORT),lt=new Oe().fromArray(Q),ct=new Oe().fromArray(et);function ot(U,mt,tt,gt){let St=new Uint8Array(4),st=e.createTexture();e.bindTexture(U,st),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Vt=0;Vt<tt;Vt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(mt,0,e.RGBA,1,1,gt,0,e.RGBA,e.UNSIGNED_BYTE,St):e.texImage2D(mt+Vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,St);return st}let B={};B[e.TEXTURE_2D]=ot(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=ot(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=ot(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=ot(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(e.DEPTH_TEST),o.setFunc(ao),Xt(!1),de(Xd),W(e.CULL_FACE),Rt(cs);function W(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function at(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function _t(U,mt){return u[U]!==mt?(e.bindFramebuffer(U,mt),u[U]=mt,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=mt),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=mt),!0):!1}function ut(U,mt){let tt=g,gt=!1;if(U){tt=f.get(mt),tt===void 0&&(tt=[],f.set(mt,tt));let St=U.textures;if(tt.length!==St.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Vt=St.length;st<Vt;st++)tt[st]=e.COLOR_ATTACHMENT0+st;tt.length=St.length,gt=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,gt=!0);gt&&e.drawBuffers(tt)}function Ht(U){return y!==U?(e.useProgram(U),y=U,!0):!1}let re={[Rr]:e.FUNC_ADD,[S0]:e.FUNC_SUBTRACT,[b0]:e.FUNC_REVERSE_SUBTRACT};re[E0]=e.MIN,re[T0]=e.MAX;let Yt={[w0]:e.ZERO,[A0]:e.ONE,[C0]:e.SRC_COLOR,[$d]:e.SRC_ALPHA,[N0]:e.SRC_ALPHA_SATURATE,[L0]:e.DST_COLOR,[I0]:e.DST_ALPHA,[R0]:e.ONE_MINUS_SRC_COLOR,[Zd]:e.ONE_MINUS_SRC_ALPHA,[D0]:e.ONE_MINUS_DST_COLOR,[P0]:e.ONE_MINUS_DST_ALPHA,[U0]:e.CONSTANT_COLOR,[F0]:e.ONE_MINUS_CONSTANT_COLOR,[O0]:e.CONSTANT_ALPHA,[B0]:e.ONE_MINUS_CONSTANT_ALPHA};function Rt(U,mt,tt,gt,St,st,Vt,Dt,Ce,ge){if(U===cs){m===!0&&(at(e.BLEND),m=!1);return}if(m===!1&&(W(e.BLEND),m=!0),U!==M0){if(U!==p||ge!==R){if((S!==Rr||E!==Rr)&&(e.blendEquation(e.FUNC_ADD),S=Rr,E=Rr),ge)switch(U){case So:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $a:e.blendFunc(e.ONE,e.ONE);break;case qd:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Yd:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Jt("WebGLState: Invalid blending: ",U);break}else switch(U){case So:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $a:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case qd:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yd:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",U);break}w=null,v=null,b=null,C=null,x.set(0,0,0),T=0,p=U,R=ge}return}St=St||mt,st=st||tt,Vt=Vt||gt,(mt!==S||St!==E)&&(e.blendEquationSeparate(re[mt],re[St]),S=mt,E=St),(tt!==w||gt!==v||st!==b||Vt!==C)&&(e.blendFuncSeparate(Yt[tt],Yt[gt],Yt[st],Yt[Vt]),w=tt,v=gt,b=st,C=Vt),(Dt.equals(x)===!1||Ce!==T)&&(e.blendColor(Dt.r,Dt.g,Dt.b,Ce),x.copy(Dt),T=Ce),p=U,R=!1}function oe(U,mt){U.side===Dn?at(e.CULL_FACE):W(e.CULL_FACE);let tt=U.side===Tn;mt&&(tt=!tt),Xt(tt),U.blending===So&&U.transparent===!1?Rt(cs):Rt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let gt=U.stencilWrite;a.setTest(gt),gt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),pn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?W(e.SAMPLE_ALPHA_TO_COVERAGE):at(e.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function de(U){U!==x0?(W(e.CULL_FACE),U!==O&&(U===Xd?e.cullFace(e.BACK):U===v0?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):at(e.CULL_FACE),O=U}function He(U){U!==H&&($&&e.lineWidth(U),H=U)}function pn(U,mt,tt){U?(W(e.POLYGON_OFFSET_FILL),(L!==mt||X!==tt)&&(L=mt,X=tt,o.getReversed()&&(mt=-mt),e.polygonOffset(mt,tt))):at(e.POLYGON_OFFSET_FILL)}function Ae(U){U?W(e.SCISSOR_TEST):at(e.SCISSOR_TEST)}function tn(U){U===void 0&&(U=e.TEXTURE0+K-1),it!==U&&(e.activeTexture(U),it=U)}function F(U,mt,tt){tt===void 0&&(it===null?tt=e.TEXTURE0+K-1:tt=it);let gt=I[tt];gt===void 0&&(gt={type:void 0,texture:void 0},I[tt]=gt),(gt.type!==U||gt.texture!==mt)&&(it!==tt&&(e.activeTexture(tt),it=tt),e.bindTexture(U,mt||B[U]),gt.type=U,gt.texture=mt)}function An(){let U=I[it];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function _(){try{e.texSubImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function k(){try{e.texSubImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function J(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function ht(){try{e.texStorage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function dt(){try{e.texStorage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function j(){try{e.texImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function nt(){try{e.texImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function ft(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function Ot(U,mt){d[U]!==mt&&(e.pixelStorei(U,mt),d[U]=mt)}function xt(U){lt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function pt(U){ct.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),ct.copy(U))}function Bt(U,mt){let tt=l.get(mt);tt===void 0&&(tt=new WeakMap,l.set(mt,tt));let gt=tt.get(U);gt===void 0&&(gt=e.getUniformBlockIndex(mt,U.name),tt.set(U,gt))}function $t(U,mt){let gt=l.get(mt).get(U);c.get(mt)!==gt&&(e.uniformBlockBinding(mt,gt,U.__bindingPointIndex),c.set(mt,gt))}function Qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,I={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,w=null,v=null,E=null,b=null,C=null,x=new Gt(0,0,0),T=0,R=!1,D=null,O=null,H=null,L=null,X=null,lt.set(0,0,e.canvas.width,e.canvas.height),ct.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:at,bindFramebuffer:_t,drawBuffers:ut,useProgram:Ht,setBlending:Rt,setMaterial:oe,setFlipSided:Xt,setCullFace:de,setLineWidth:He,setPolygonOffset:pn,setScissorTest:Ae,activeTexture:tn,bindTexture:F,unbindTexture:An,compressedTexImage2D:ye,compressedTexImage3D:A,texImage2D:j,texImage3D:nt,pixelStorei:Ot,getParameter:ft,updateUBOMapping:Bt,uniformBlockBinding:$t,texStorage2D:ht,texStorage3D:dt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:xt,viewport:pt,reset:Qt}}function gb(e,t,n,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,_){return g?new OffscreenCanvas(A,_):Aa("canvas")}function m(A,_,k){let q=1,J=ye(A);if((J.width>k||J.height>k)&&(q=k/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ht=Math.floor(q*J.width),dt=Math.floor(q*J.height);u===void 0&&(u=y(ht,dt));let j=_?y(ht,dt):u;return j.width=ht,j.height=dt,j.getContext("2d").drawImage(A,0,0,ht,dt),Zt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ht+"x"+dt+")."),j}else return"data"in A&&Zt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){e.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(A,_,k,q,J,ht=!1){if(A!==null){if(e[A]!==void 0)return e[A];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;q&&(dt=t.get("EXT_texture_norm16"),dt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===e.RED&&(k===e.FLOAT&&(j=e.R32F),k===e.HALF_FLOAT&&(j=e.R16F),k===e.UNSIGNED_BYTE&&(j=e.R8),k===e.UNSIGNED_SHORT&&dt&&(j=dt.R16_EXT),k===e.SHORT&&dt&&(j=dt.R16_SNORM_EXT)),_===e.RED_INTEGER&&(k===e.UNSIGNED_BYTE&&(j=e.R8UI),k===e.UNSIGNED_SHORT&&(j=e.R16UI),k===e.UNSIGNED_INT&&(j=e.R32UI),k===e.BYTE&&(j=e.R8I),k===e.SHORT&&(j=e.R16I),k===e.INT&&(j=e.R32I)),_===e.RG&&(k===e.FLOAT&&(j=e.RG32F),k===e.HALF_FLOAT&&(j=e.RG16F),k===e.UNSIGNED_BYTE&&(j=e.RG8),k===e.UNSIGNED_SHORT&&dt&&(j=dt.RG16_EXT),k===e.SHORT&&dt&&(j=dt.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(k===e.UNSIGNED_BYTE&&(j=e.RG8UI),k===e.UNSIGNED_SHORT&&(j=e.RG16UI),k===e.UNSIGNED_INT&&(j=e.RG32UI),k===e.BYTE&&(j=e.RG8I),k===e.SHORT&&(j=e.RG16I),k===e.INT&&(j=e.RG32I)),_===e.RGB_INTEGER&&(k===e.UNSIGNED_BYTE&&(j=e.RGB8UI),k===e.UNSIGNED_SHORT&&(j=e.RGB16UI),k===e.UNSIGNED_INT&&(j=e.RGB32UI),k===e.BYTE&&(j=e.RGB8I),k===e.SHORT&&(j=e.RGB16I),k===e.INT&&(j=e.RGB32I)),_===e.RGBA_INTEGER&&(k===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),k===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),k===e.UNSIGNED_INT&&(j=e.RGBA32UI),k===e.BYTE&&(j=e.RGBA8I),k===e.SHORT&&(j=e.RGBA16I),k===e.INT&&(j=e.RGBA32I)),_===e.RGB&&(k===e.UNSIGNED_SHORT&&dt&&(j=dt.RGB16_EXT),k===e.SHORT&&dt&&(j=dt.RGB16_SNORM_EXT),k===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),k===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),_===e.RGBA){let nt=ht?wa:ae.getTransfer(J);k===e.FLOAT&&(j=e.RGBA32F),k===e.HALF_FLOAT&&(j=e.RGBA16F),k===e.UNSIGNED_BYTE&&(j=nt===xe?e.SRGB8_ALPHA8:e.RGBA8),k===e.UNSIGNED_SHORT&&dt&&(j=dt.RGBA16_EXT),k===e.SHORT&&dt&&(j=dt.RGBA16_SNORM_EXT),k===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),k===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(A,_){let k;return A?_===null||_===Hi||_===Eo?k=e.DEPTH24_STENCIL8:_===Mi?k=e.DEPTH32F_STENCIL8:_===bo&&(k=e.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hi||_===Eo?k=e.DEPTH_COMPONENT24:_===Mi?k=e.DEPTH_COMPONENT32F:_===bo&&(k=e.DEPTH_COMPONENT16),k}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==bn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){let _=A.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),D(_)}function T(A){let _=i.get(A);if(_.__webglInit===void 0)return;let k=A.source,q=f.get(k);if(q){let J=q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(q).length===0&&f.delete(k)}i.remove(A)}function R(A){let _=i.get(A);e.deleteTexture(_.__webglTexture);let k=A.source,q=f.get(k);delete q[_.__cacheKey],o.memory.textures--}function D(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let J=0;J<_.__webglFramebuffer[q].length;J++)e.deleteFramebuffer(_.__webglFramebuffer[q][J]);else e.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)e.deleteFramebuffer(_.__webglFramebuffer[q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=A.textures;for(let q=0,J=k.length;q<J;q++){let ht=i.get(k[q]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(k[q])}i.remove(A)}let O=0;function H(){O=0}function L(){return O}function X(A){O=A}function K(){let A=O;return A>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function $(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function rt(A,_){let k=i.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let q=A.image;if(q===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,A,_);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+_)}function Z(A,_){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){at(k,A,_);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+_)}function it(A,_){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){at(k,A,_);return}n.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+_)}function I(A,_){let k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){_t(k,A,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+_)}let Q={[wr]:e.REPEAT,[ns]:e.CLAMP_TO_EDGE,[yl]:e.MIRRORED_REPEAT},et={[gn]:e.NEAREST,[V0]:e.NEAREST_MIPMAP_NEAREST,[Ka]:e.NEAREST_MIPMAP_LINEAR,[bn]:e.LINEAR,[th]:e.LINEAR_MIPMAP_NEAREST,[nr]:e.LINEAR_MIPMAP_LINEAR},lt={[X0]:e.NEVER,[J0]:e.ALWAYS,[q0]:e.LESS,[zh]:e.LEQUAL,[Y0]:e.EQUAL,[kh]:e.GEQUAL,[$0]:e.GREATER,[Z0]:e.NOTEQUAL};function ct(A,_){if(_.type===Mi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===bn||_.magFilter===th||_.magFilter===Ka||_.magFilter===nr||_.minFilter===bn||_.minFilter===th||_.minFilter===Ka||_.minFilter===nr)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Q[_.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Q[_.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Q[_.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,et[_.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Ka&&_.minFilter!==nr||_.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ot(A,_){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));let q=_.source,J=f.get(q);J===void 0&&(J={},f.set(q,J));let ht=$(_);if(ht!==A.__cacheKey){J[ht]===void 0&&(J[ht]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[ht].usedTimes++;let dt=J[A.__cacheKey];dt!==void 0&&(J[A.__cacheKey].usedTimes--,dt.usedTimes===0&&R(_)),A.__cacheKey=ht,A.__webglTexture=J[ht].texture}return k}function B(A,_,k){return Math.floor(Math.floor(A/k)/_)}function W(A,_,k,q){let ht=A.updateRanges;if(ht.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,k,q,_.data);else{ht.sort((Ot,xt)=>Ot.start-xt.start);let dt=0;for(let Ot=1;Ot<ht.length;Ot++){let xt=ht[dt],pt=ht[Ot],Bt=xt.start+xt.count,$t=B(pt.start,_.width,4),Qt=B(xt.start,_.width,4);pt.start<=Bt+1&&$t===Qt&&B(pt.start+pt.count-1,_.width,4)===$t?xt.count=Math.max(xt.count,pt.start+pt.count-xt.start):(++dt,ht[dt]=pt)}ht.length=dt+1;let j=n.getParameter(e.UNPACK_ROW_LENGTH),nt=n.getParameter(e.UNPACK_SKIP_PIXELS),ft=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Ot=0,xt=ht.length;Ot<xt;Ot++){let pt=ht[Ot],Bt=Math.floor(pt.start/4),$t=Math.ceil(pt.count/4),Qt=Bt%_.width,U=Math.floor(Bt/_.width),mt=$t,tt=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Qt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Qt,U,mt,tt,k,q,_.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,j),n.pixelStorei(e.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(e.UNPACK_SKIP_ROWS,ft)}}function at(A,_,k){let q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=e.TEXTURE_3D);let J=ot(A,_),ht=_.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+k);let dt=i.get(ht);if(ht.version!==dt.__version||J===!0){if(n.activeTexture(e.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let tt=ae.getPrimaries(ae.workingColorSpace),gt=_.colorSpace===ws?null:ae.getPrimaries(_.colorSpace),St=_.colorSpace===ws||tt===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let nt=m(_.image,!1,s.maxTextureSize);nt=An(_,nt);let ft=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),xt=v(_.internalFormat,ft,Ot,_.normalized,_.colorSpace,_.isVideoTexture);ct(q,_);let pt,Bt=_.mipmaps,$t=_.isVideoTexture!==!0,Qt=dt.__version===void 0||J===!0,U=ht.dataReady,mt=b(_,nt);if(_.isDepthTexture)xt=E(_.format===ir,_.type),Qt&&($t?n.texStorage2D(e.TEXTURE_2D,1,xt,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,xt,nt.width,nt.height,0,ft,Ot,null));else if(_.isDataTexture)if(Bt.length>0){$t&&Qt&&n.texStorage2D(e.TEXTURE_2D,mt,xt,Bt[0].width,Bt[0].height);for(let tt=0,gt=Bt.length;tt<gt;tt++)pt=Bt[tt],$t?U&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,pt.width,pt.height,ft,Ot,pt.data):n.texImage2D(e.TEXTURE_2D,tt,xt,pt.width,pt.height,0,ft,Ot,pt.data);_.generateMipmaps=!1}else $t?(Qt&&n.texStorage2D(e.TEXTURE_2D,mt,xt,nt.width,nt.height),U&&W(_,nt,ft,Ot)):n.texImage2D(e.TEXTURE_2D,0,xt,nt.width,nt.height,0,ft,Ot,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$t&&Qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,xt,Bt[0].width,Bt[0].height,nt.depth);for(let tt=0,gt=Bt.length;tt<gt;tt++)if(pt=Bt[tt],_.format!==Si)if(ft!==null)if($t){if(U)if(_.layerUpdates.size>0){let St=xf(pt.width,pt.height,_.format,_.type);for(let st of _.layerUpdates){let Vt=pt.data.subarray(st*St/pt.data.BYTES_PER_ELEMENT,(st+1)*St/pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,st,pt.width,pt.height,1,ft,Vt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,ft,pt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,xt,pt.width,pt.height,nt.depth,0,pt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,ft,Ot,pt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,xt,pt.width,pt.height,nt.depth,0,ft,Ot,pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{$t&&Qt&&n.texStorage2D(e.TEXTURE_2D,mt,xt,Bt[0].width,Bt[0].height);for(let tt=0,gt=Bt.length;tt<gt;tt++)pt=Bt[tt],_.format!==Si?ft!==null?$t?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,pt.width,pt.height,ft,pt.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,xt,pt.width,pt.height,0,pt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?U&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,pt.width,pt.height,ft,Ot,pt.data):n.texImage2D(e.TEXTURE_2D,tt,xt,pt.width,pt.height,0,ft,Ot,pt.data)}else if(_.isDataArrayTexture)if($t){if(Qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,xt,nt.width,nt.height,nt.depth),U)if(_.layerUpdates.size>0){let tt=xf(nt.width,nt.height,_.format,_.type);for(let gt of _.layerUpdates){let St=nt.data.subarray(gt*tt/nt.data.BYTES_PER_ELEMENT,(gt+1)*tt/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,gt,nt.width,nt.height,1,ft,Ot,St)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Ot,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,xt,nt.width,nt.height,nt.depth,0,ft,Ot,nt.data);else if(_.isData3DTexture)$t?(Qt&&n.texStorage3D(e.TEXTURE_3D,mt,xt,nt.width,nt.height,nt.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Ot,nt.data)):n.texImage3D(e.TEXTURE_3D,0,xt,nt.width,nt.height,nt.depth,0,ft,Ot,nt.data);else if(_.isFramebufferTexture){if(Qt)if($t)n.texStorage2D(e.TEXTURE_2D,mt,xt,nt.width,nt.height);else{let tt=nt.width,gt=nt.height;for(let St=0;St<mt;St++)n.texImage2D(e.TEXTURE_2D,St,xt,tt,gt,0,ft,Ot,null),tt>>=1,gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let tt=e.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),d.add(_),tt.onpaint=gt=>{let St=gt.changedElements;for(let st of d)St.includes(st.image)&&(st.needsUpdate=!0)},tt.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,nt);else{let St=e.RGBA,st=e.RGBA,Vt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,St,st,Vt,nt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Bt.length>0){if($t&&Qt){let tt=ye(Bt[0]);n.texStorage2D(e.TEXTURE_2D,mt,xt,tt.width,tt.height)}for(let tt=0,gt=Bt.length;tt<gt;tt++)pt=Bt[tt],$t?U&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ft,Ot,pt):n.texImage2D(e.TEXTURE_2D,tt,xt,ft,Ot,pt);_.generateMipmaps=!1}else if($t){if(Qt){let tt=ye(nt);n.texStorage2D(e.TEXTURE_2D,mt,xt,tt.width,tt.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Ot,nt)}else n.texImage2D(e.TEXTURE_2D,0,xt,ft,Ot,nt);p(_)&&S(q),dt.__version=ht.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function _t(A,_,k){if(_.image.length!==6)return;let q=ot(A,_),J=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+k);let ht=i.get(J);if(J.version!==ht.__version||q===!0){n.activeTexture(e.TEXTURE0+k);let dt=ae.getPrimaries(ae.workingColorSpace),j=_.colorSpace===ws?null:ae.getPrimaries(_.colorSpace),nt=_.colorSpace===ws||dt===j?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ft=_.isCompressedTexture||_.image[0].isCompressedTexture,Ot=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!ft&&!Ot?xt[st]=m(_.image[st],!0,s.maxCubemapSize):xt[st]=Ot?_.image[st].image:_.image[st],xt[st]=An(_,xt[st]);let pt=xt[0],Bt=r.convert(_.format,_.colorSpace),$t=r.convert(_.type),Qt=v(_.internalFormat,Bt,$t,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,mt=ht.__version===void 0||q===!0,tt=J.dataReady,gt=b(_,pt);ct(e.TEXTURE_CUBE_MAP,_);let St;if(ft){U&&mt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Qt,pt.width,pt.height);for(let st=0;st<6;st++){St=xt[st].mipmaps;for(let Vt=0;Vt<St.length;Vt++){let Dt=St[Vt];_.format!==Si?Bt!==null?U?tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt,0,0,Dt.width,Dt.height,Bt,Dt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt,Qt,Dt.width,Dt.height,0,Dt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt,0,0,Dt.width,Dt.height,Bt,$t,Dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt,Qt,Dt.width,Dt.height,0,Bt,$t,Dt.data)}}}else{if(St=_.mipmaps,U&&mt){St.length>0&&gt++;let st=ye(xt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(Ot){U?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Bt,$t,xt[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,xt[st].width,xt[st].height,0,Bt,$t,xt[st].data);for(let Vt=0;Vt<St.length;Vt++){let Ce=St[Vt].image[st].image;U?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt+1,0,0,Ce.width,Ce.height,Bt,$t,Ce.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt+1,Qt,Ce.width,Ce.height,0,Bt,$t,Ce.data)}}else{U?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Bt,$t,xt[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Bt,$t,xt[st]);for(let Vt=0;Vt<St.length;Vt++){let Dt=St[Vt];U?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt+1,0,0,Bt,$t,Dt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt+1,Qt,Bt,$t,Dt.image[st])}}}p(_)&&S(e.TEXTURE_CUBE_MAP),ht.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ut(A,_,k,q,J,ht){let dt=r.convert(k.format,k.colorSpace),j=r.convert(k.type),nt=v(k.internalFormat,dt,j,k.normalized,k.colorSpace),ft=i.get(_),Ot=i.get(k);if(Ot.__renderTarget=_,!ft.__hasExternalTextures){let xt=Math.max(1,_.width>>ht),pt=Math.max(1,_.height>>ht);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,ht,nt,xt,pt,_.depth,0,dt,j,null):n.texImage2D(J,ht,nt,xt,pt,0,dt,j,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),tn(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,J,Ot.__webglTexture,0,Ae(_)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,J,Ot.__webglTexture,ht),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(A,_,k){if(e.bindRenderbuffer(e.RENDERBUFFER,A),_.depthBuffer){let q=_.depthTexture,J=q&&q.isDepthTexture?q.type:null,ht=E(_.stencilBuffer,J),dt=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;tn(_)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(_),ht,_.width,_.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(_),ht,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ht,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,A)}else{let q=_.textures;for(let J=0;J<q.length;J++){let ht=q[J],dt=r.convert(ht.format,ht.colorSpace),j=r.convert(ht.type),nt=v(ht.internalFormat,dt,j,ht.normalized,ht.colorSpace);tn(_)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(_),nt,_.width,_.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(_),nt,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,nt,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function re(A,_,k){let q=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),ct(e.TEXTURE_CUBE_MAP,_.depthTexture);let ft=r.convert(_.depthTexture.format),Ot=r.convert(_.depthTexture.type),xt;_.depthTexture.format===is?xt=e.DEPTH_COMPONENT24:_.depthTexture.format===ir&&(xt=e.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,xt,_.width,_.height,0,ft,Ot,null)}}else rt(_.depthTexture,0);let ht=J.__webglTexture,dt=Ae(_),j=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+k:e.TEXTURE_2D,nt=_.depthTexture.format===ir?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===is)tn(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,nt,j,ht,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,nt,j,ht,0);else if(_.depthTexture.format===ir)tn(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,nt,j,ht,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,nt,j,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(A){let _=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)re(_.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?re(_.__webglFramebuffer[0],A,0):re(_.__webglFramebuffer,A,0)}else if(k){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=e.createRenderbuffer(),Ht(_.__webglDepthbuffer[q],A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ht)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ht(_.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ht)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Rt(A,_,k){let q=i.get(A);_!==void 0&&ut(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),k!==void 0&&Yt(A)}function oe(A){let _=A.texture,k=i.get(A),q=i.get(_);A.addEventListener("dispose",x);let J=A.textures,ht=A.isWebGLCubeRenderTarget===!0,dt=J.length>1;if(dt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=_.version,o.memory.textures++),ht){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let nt=0;nt<_.mipmaps.length;nt++)k.__webglFramebuffer[j][nt]=e.createFramebuffer()}else k.__webglFramebuffer[j]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)k.__webglFramebuffer[j]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(dt)for(let j=0,nt=J.length;j<nt;j++){let ft=i.get(J[j]);ft.__webglTexture===void 0&&(ft.__webglTexture=e.createTexture(),o.memory.textures++)}if(A.samples>0&&tn(A)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let nt=J[j];k.__webglColorRenderbuffer[j]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let ft=r.convert(nt.format,nt.colorSpace),Ot=r.convert(nt.type),xt=v(nt.internalFormat,ft,Ot,nt.normalized,nt.colorSpace,A.isXRRenderTarget===!0),pt=Ae(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,pt,xt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.RENDERBUFFER,k.__webglColorRenderbuffer[j])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=e.createRenderbuffer(),Ht(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ht){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),ct(e.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)ut(k.__webglFramebuffer[j][nt],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else ut(k.__webglFramebuffer[j],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(_)&&S(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(dt){for(let j=0,nt=J.length;j<nt;j++){let ft=J[j],Ot=i.get(ft),xt=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(xt,Ot.__webglTexture),ct(xt,ft),ut(k.__webglFramebuffer,A,ft,e.COLOR_ATTACHMENT0+j,xt,0),p(ft)&&S(xt)}n.unbindTexture()}else{let j=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(j,q.__webglTexture),ct(j,_),_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)ut(k.__webglFramebuffer[nt],A,_,e.COLOR_ATTACHMENT0,j,nt);else ut(k.__webglFramebuffer,A,_,e.COLOR_ATTACHMENT0,j,0);p(_)&&S(j),n.unbindTexture()}A.depthBuffer&&Yt(A)}function Xt(A){let _=A.textures;for(let k=0,q=_.length;k<q;k++){let J=_[k];if(p(J)){let ht=w(A),dt=i.get(J).__webglTexture;n.bindTexture(ht,dt),S(ht),n.unbindTexture()}}}let de=[],He=[];function pn(A){if(A.samples>0){if(tn(A)===!1){let _=A.textures,k=A.width,q=A.height,J=e.COLOR_BUFFER_BIT,ht=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(A),j=_.length>1;if(j)for(let ft=0;ft<_.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let nt=A.texture.mipmaps;nt&&nt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),j){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);let Ot=i.get(_[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ot,0)}e.blitFramebuffer(0,0,k,q,0,0,k,q,J,e.NEAREST),c===!0&&(de.length=0,He.length=0,de.push(e.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(de.push(ht),He.push(ht),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,He)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),j)for(let ft=0;ft<_.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);let Ot=i.get(_[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,Ot,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Ae(A){return Math.min(s.maxSamples,A.samples)}function tn(A){let _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function An(A,_){let k=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ta&&k!==ws&&(ae.getTransfer(k)===xe?(q!==Si||J!==jn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",k)),_}function ye(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=X,this.setTexture2D=rt,this.setTexture2DArray=Z,this.setTexture3D=it,this.setTextureCube=I,this.rebindTextures=Rt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _b(e,t){function n(i,s=ws){let r,o=ae.getTransfer(s);if(i===jn)return e.UNSIGNED_BYTE;if(i===nh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ih)return e.UNSIGNED_SHORT_5_5_5_1;if(i===of)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===af)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===sf)return e.BYTE;if(i===rf)return e.SHORT;if(i===bo)return e.UNSIGNED_SHORT;if(i===eh)return e.INT;if(i===Hi)return e.UNSIGNED_INT;if(i===Mi)return e.FLOAT;if(i===Wi)return e.HALF_FLOAT;if(i===cf)return e.ALPHA;if(i===lf)return e.RGB;if(i===Si)return e.RGBA;if(i===is)return e.DEPTH_COMPONENT;if(i===ir)return e.DEPTH_STENCIL;if(i===sh)return e.RED;if(i===rh)return e.RED_INTEGER;if(i===sr)return e.RG;if(i===oh)return e.RG_INTEGER;if(i===ah)return e.RGBA_INTEGER;if(i===ja||i===Qa||i===tc||i===ec)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ec)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===lh||i===hh||i===uh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ch)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dh||i===fh||i===ph||i===mh||i===gh||i===nc||i===_h)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dh||i===fh)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ph)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===mh)return r.COMPRESSED_R11_EAC;if(i===gh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===nc)return r.COMPRESSED_RG11_EAC;if(i===_h)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xh||i===vh||i===yh||i===Mh||i===Sh||i===bh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===Ih||i===Ph)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Th)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ah)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ch)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ih)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ph)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lh||i===Dh||i===Nh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Lh)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uh||i===Fh||i===ic||i===Oh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Ba(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ci({vertexShader:xb,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qt(new oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends ss{constructor(t,n){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new Of,p={},S=n.getContextAttributes(),w=null,v=null,E=[],b=[],C=new Ut,x=null,T=null,R=new Pn;R.viewport=new Oe;let D=new Pn;D.viewport=new Oe;let O=[R,D],H=new Zl,L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=E[B];return W===void 0&&(W=new fo,E[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=E[B];return W===void 0&&(W=new fo,E[B]=W),W.getGripSpace()},this.getHand=function(B){let W=E[B];return W===void 0&&(W=new fo,E[B]=W),W.getHandSpace()};function K(B){let W=b.indexOf(B.inputSource);if(W===-1)return;let at=E[W];at!==void 0&&(at.update(B.inputSource,B.frame,l||o),at.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",rt);for(let B=0;B<E.length;B++){let W=b[B];W!==null&&(b[B]=null,E[B].disconnect(W))}L=null,X=null,m.reset();for(let B in p)delete p[B];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,v=null,ot.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){let B=T.camera;B.fov=T.fov,B.zoom=T.zoom,B.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",$),s.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,_t=null,ut=null;S.depth&&(ut=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,at=S.stencil?ir:is,_t=S.stencil?Eo:Hi);let Ht={colorFormat:n.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Jn(u.textureWidth,u.textureHeight,{format:Si,type:jn,depthTexture:new Js(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let at={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Si,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(B){for(let W=0;W<B.removed.length;W++){let at=B.removed[W],_t=b.indexOf(at);_t>=0&&(b[_t]=null,E[_t].disconnect(at))}for(let W=0;W<B.added.length;W++){let at=B.added[W],_t=b.indexOf(at);if(_t===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=b.length){b.push(at),_t=Ht;break}else if(b[Ht]===null){b[Ht]=at,_t=Ht;break}if(_t===-1)break}let ut=E[_t];ut&&ut.connect(at)}}let Z=new P,it=new P;function I(B,W,at){Z.setFromMatrixPosition(W.matrixWorld),it.setFromMatrixPosition(at.matrixWorld);let _t=Z.distanceTo(it),ut=W.projectionMatrix.elements,Ht=at.projectionMatrix.elements,re=ut[14]/(ut[10]-1),Yt=ut[14]/(ut[10]+1),Rt=(ut[9]+1)/ut[5],oe=(ut[9]-1)/ut[5],Xt=(ut[8]-1)/ut[0],de=(Ht[8]+1)/Ht[0],He=re*Xt,pn=re*de,Ae=_t/(-Xt+de),tn=Ae*-Xt;if(W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(tn),B.translateZ(Ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ut[10]===-1)B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let F=re+Ae,An=Yt+Ae,ye=He-tn,A=pn+(_t-tn),_=Rt*Yt/An*F,k=oe*Yt/An*F;B.projectionMatrix.makePerspective(ye,A,_,k,F,An),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Q(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let W=B.near,at=B.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(at=m.depthFar)),H.near=D.near=R.near=W,H.far=D.far=R.far=at,(L!==H.near||X!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,X=H.far),H.layers.mask=B.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let _t=B.parent,ut=H.cameras;Q(H,_t);for(let Ht=0;Ht<ut.length;Ht++)Q(ut[Ht],_t);ut.length===2?I(H,R,D):H.projectionMatrix.copy(R.projectionMatrix),T===null&&B.isPerspectiveCamera&&(T={camera:B,fov:B.fov,zoom:B.zoom}),et(B,H,_t)};function et(B,W,at){at===null?B.matrix.copy(W.matrixWorld):(B.matrix.copy(at.matrixWorld),B.matrix.invert(),B.matrix.multiply(W.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ho*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(B){return p[B]};let lt=null;function ct(B,W){if(h=W.getViewerPose(l||o),g=W,h!==null){let at=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let _t=!1;at.length!==H.cameras.length&&(H.cameras.length=0,_t=!0);for(let Yt=0;Yt<at.length;Yt++){let Rt=at[Yt],oe=null;if(f!==null)oe=f.getViewport(Rt);else{let de=d.getViewSubImage(u,Rt);oe=de.viewport,Yt===0&&(t.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(v))}let Xt=O[Yt];Xt===void 0&&(Xt=new Pn,Xt.layers.enable(Yt),Xt.viewport=new Oe,O[Yt]=Xt),Xt.matrix.fromArray(Rt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Rt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(oe.x,oe.y,oe.width,oe.height),Yt===0&&(H.matrix.copy(Xt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),_t===!0&&H.cameras.push(Xt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Yt=d.getDepthInformation(at[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Yt=0;Yt<at.length;Yt++){let Rt=at[Yt].camera;if(Rt){let oe=p[Rt];oe||(oe=new Ba,p[Rt]=oe);let Xt=d.getCameraImage(Rt);oe.sourceTexture=Xt}}}}for(let at=0;at<E.length;at++){let _t=b[at],ut=E[at];_t!==null&&ut!==void 0&&ut.update(_t,W,l||o)}lt&&lt(B,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}let ot=new Ag;ot.setAnimationLoop(ct),this.setAnimationLoop=function(B){lt=B},this.dispose=function(){}}},yb=new he,Dg=new jt;Dg.set(-1,0,0,0,1,0,0,0,1);function Mb(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mf(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,v=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sb(e,t,n,i){let s={},r={},o=[],a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){let b=E.program;i.uniformBlockBinding(v,b)}function l(v,E){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",S));let C=E.program;i.updateUBOMapping(v,C);let x=t.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let E=d();v.__bindingPointIndex=E;let b=e.createBuffer(),C=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,b),b}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],b=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){let R=b[x];if(Array.isArray(R))for(let D=0,O=R.length;D<O;D++)f(R[D],x,D,C);else f(R,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,E,b,C){if(y(v,E,b,C)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let O=T[D],H=p(O);g(O,v.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function g(v,E,b){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,b)}function y(v,E,b,C){let x=v.value,T=E+"_"+b;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let R=C[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){let E=v.uniforms,b=0,C=16;for(let T=0,R=E.length;T<R;T++){let D=Array.isArray(E[T])?E[T]:[E[T]];for(let O=0,H=D.length;O<H;O++){let L=D[O],X=Array.isArray(L.value)?L.value:[L.value];for(let K=0,$=X.length;K<$;K++){let rt=X[K],Z=p(rt),it=b%C,I=it%Z.boundary,Q=it+I;b+=I,Q!==0&&C-Q<Z.storage&&(b+=C-Q),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Z.storage}}}let x=b%C;return x>0&&(b+=C-x),v.__size=b,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),E}function S(v){let E=v.target;E.removeEventListener("dispose",S);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let v in s)e.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var bb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;function Eb(){return ls===null&&(ls=new Ua(bb,16,16,sr,Wi),ls.name="DFG_LUT",ls.minFilter=bn,ls.magFilter=bn,ls.wrapS=ns,ls.wrapT=ns,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var Xh=class{constructor(t={}){let{canvas:n=j0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=jn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=f,m=new Set([ah,oh,rh]),p=new Set([jn,Hi,bo,Eo,nh,ih]),S=new Uint32Array(4),w=new Int32Array(4),v=new P,E=null,b=null,C=[],x=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,O=null,H=null,L=null,X=null;this._outputColorSpace=sn;let K=0,$=0,rt=null,Z=-1,it=null,I=new Oe,Q=new Oe,et=null,lt=new Gt(0),ct=0,ot=n.width,B=n.height,W=1,at=null,_t=null,ut=new Oe(0,0,ot,B),Ht=new Oe(0,0,ot,B),re=!1,Yt=new mo,Rt=!1,oe=!1,Xt=new he,de=new P,He=new Oe,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function tn(){return rt===null?W:1}let F=i;function An(M,N){return n.getContext(M,N)}let ye,A,_,k,q,J,ht,dt,j,nt,ft,Ot,xt,pt,Bt,$t,Qt,U,mt,tt,gt,St,st;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",Ui,!1),F===null){let N="webgl2";if(F=An(N,M),F===null)throw An(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(M){throw n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Ui,!1),Jt("WebGLRenderer: "+M.message),M}function Vt(){ye=new PM(F),ye.init(),gt=new _b(F,ye),A=new MM(F,ye,t,gt),_=new mb(F,ye),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),H=F.createFramebuffer(),L=F.createFramebuffer(),X=F.createFramebuffer(),k=new NM(F),q=new eb,J=new gb(F,ye,_,q,A,gt,k),ht=new IM(R),dt=new Fy(F),St=new vM(F,dt),j=new LM(F,dt,k,St),nt=new FM(F,j,dt,St,k),U=new UM(F,A,J),Bt=new SM(q),ft=new tb(R,ht,ye,A,St,Bt),Ot=new Mb(R,q),xt=new ib,pt=new lb(ye),Qt=new xM(R,ht,_,nt,g,c),$t=new pb(R,nt,A),st=new Sb(F,k,A,_),mt=new yM(F,ye,k),tt=new DM(F,ye,k),k.programs=ft.programs,R.capabilities=A,R.extensions=ye,R.properties=q,R.renderLists=xt,R.shadowMap=$t,R.state=_,R.info=k}y!==jn&&(T=new BM(y,n.width,n.height,a,s,r));let Dt=new Bf(R,F);this.xr=Dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(ot,B,!1))},this.getSize=function(M){return M.set(ot,B)},this.setSize=function(M,N,Y=!0){if(Dt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=M,B=N,n.width=Math.floor(M*W),n.height=Math.floor(N*W),Y===!0&&(n.style.width=M+"px",n.style.height=N+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(ot*W,B*W).floor()},this.setDrawingBufferSize=function(M,N,Y){ot=M,B=N,W=Y,n.width=Math.floor(M*Y),n.height=Math.floor(N*Y),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(y===jn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(ut)},this.setViewport=function(M,N,Y,V){M.isVector4?ut.set(M.x,M.y,M.z,M.w):ut.set(M,N,Y,V),_.viewport(I.copy(ut).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,N,Y,V){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,N,Y,V),_.scissor(Q.copy(Ht).multiplyScalar(W).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){_.setScissorTest(re=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){_t=M},this.getClearColor=function(M){return M.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,Y=!0){let V=0;if(M){let G=!1;if(rt!==null){let Mt=rt.texture.format;G=m.has(Mt)}if(G){let Mt=rt.texture.type,wt=p.has(Mt),yt=Qt.getClearColor(),It=Qt.getClearAlpha(),Nt=yt.r,te=yt.g,se=yt.b;wt?(S[0]=Nt,S[1]=te,S[2]=se,S[3]=It,F.clearBufferuiv(F.COLOR,0,S)):(w[0]=Nt,w[1]=te,w[2]=se,w[3]=It,F.clearBufferiv(F.COLOR,0,w))}else V|=F.COLOR_BUFFER_BIT}N&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Ui,!1),Qt.dispose(),xt.dispose(),pt.dispose(),q.dispose(),ht.dispose(),nt.dispose(),St.dispose(),st.dispose(),ft.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Nm),Dt.removeEventListener("sessionend",Um),yr.stop()};function Ce(M){M.preventDefault(),uf("WebGLRenderer: Context Lost."),D=!0}function ge(){uf("WebGLRenderer: Context Restored."),D=!1;let M=k.autoReset,N=$t.enabled,Y=$t.autoUpdate,V=$t.needsUpdate,G=$t.type;Vt(),k.autoReset=M,$t.enabled=N,$t.autoUpdate=Y,$t.needsUpdate=V,$t.type=G}function Ui(M){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Qi(M){let N=M.target;N.removeEventListener("dispose",Qi),xv(N)}function xv(M){vv(M),q.remove(M)}function vv(M){let N=q.get(M).programs;N!==void 0&&(N.forEach(function(Y){ft.releaseProgram(Y)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,Y,V,G,Mt){N===null&&(N=pn);let wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=Sv(M,N,Y,V,G);_.setMaterial(V,wt);let It=Y.index,Nt=1;if(V.wireframe===!0){if(It=j.getWireframeAttribute(Y),It===void 0)return;Nt=2}let te=Y.drawRange,se=Y.attributes.position,Pt=te.start*Nt,_e=(te.start+te.count)*Nt;Mt!==null&&(Pt=Math.max(Pt,Mt.start*Nt),_e=Math.min(_e,(Mt.start+Mt.count)*Nt)),It!==null?(Pt=Math.max(Pt,0),_e=Math.min(_e,It.count)):se!=null&&(Pt=Math.max(Pt,0),_e=Math.min(_e,se.count));let en=_e-Pt;if(en<0||en===1/0)return;St.setup(G,V,yt,Y,It);let De,Te=mt;if(It!==null&&(De=dt.get(It),Te=tt,Te.setIndex(De)),G.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*tn()),Te.setMode(F.LINES)):Te.setMode(F.TRIANGLES);else if(G.isLine){let Cn=V.linewidth;Cn===void 0&&(Cn=1),_.setLineWidth(Cn*tn()),G.isLineSegments?Te.setMode(F.LINES):G.isLineLoop?Te.setMode(F.LINE_LOOP):Te.setMode(F.LINE_STRIP)}else G.isPoints?Te.setMode(F.POINTS):G.isSprite&&Te.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Cn=G._multiDrawStarts,Tt=G._multiDrawCounts,kn=G._multiDrawCount,fe=It?dt.get(It).bytesPerElement:1,_i=q.get(V).currentProgram.getUniforms();for(let ts=0;ts<kn;ts++)_i.setValue(F,"_gl_DrawID",ts),Te.render(Cn[ts]/fe,Tt[ts])}else if(G.isInstancedMesh)Te.renderInstances(Pt,en,G.count);else if(Y.isInstancedBufferGeometry){let Cn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Tt=Math.min(Y.instanceCount,Cn);Te.renderInstances(Pt,en,Tt)}else Te.render(Pt,en)};function Dm(M,N,Y,V){O!==null&&M.isNodeMaterial&&O.setObject(V,M),Rt===!0&&Bt.setState(M,Y,!1),M.transparent===!0&&M.side===Dn&&M.forceSinglePass===!1?(M.side=Tn,M.needsUpdate=!0,Gc(M,N,V),M.side=tr,M.needsUpdate=!0,Gc(M,N,V),M.side=Dn):Gc(M,N,V)}this.compile=function(M,N,Y=null){Y===null&&(Y=M),O!==null&&O.renderStart(M,N,Y),b=pt.get(Y),b.init(N),x.push(b),Y.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),M!==Y&&M.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,Rt=Bt.init(this.clippingPlanes,oe),Rt===!0&&Bt.setGlobalState(this.clippingPlanes,N),O!==null&&$t.render(b.state.shadowsArray,Y,N);let V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let wt=0;wt<Mt.length;wt++){let yt=Mt[wt];Dm(yt,Y,N,G),V.add(yt)}else Dm(Mt,Y,N,G),V.add(Mt)}),b=x.pop(),O!==null&&O.renderEnd(),V},this.compileAsync=function(M,N,Y=null){let V=this.compile(M,N,Y);return new Promise(G=>{function Mt(){if(V.forEach(function(wt){let It=q.get(wt).currentProgram;(It===void 0||It.isReady())&&V.delete(wt)}),V.size===0){G(M);return}setTimeout(Mt,10)}ye.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ud=null;function yv(M){ud&&ud(M)}function Nm(){yr.stop()}function Um(){yr.start()}let yr=new Ag;yr.setAnimationLoop(yv),typeof self!="undefined"&&yr.setContext(self),this.setAnimationLoop=function(M){ud=M,Dt.setAnimationLoop(M),M===null?yr.stop():yr.start()},Dt.addEventListener("sessionstart",Nm),Dt.addEventListener("sessionend",Um),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,N);let Y=Dt.enabled===!0&&Dt.isPresenting===!0,V=T!==null&&(rt===null||Y)&&T.begin(R,rt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(N),N=Dt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,N,rt),b=pt.get(M,x.length),b.init(N),b.state.textureUnits=J.getTextureUnits(),x.push(b),Xt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Yt.setFromProjectionMatrix(Xt,ki,N.reversedDepth),oe=this.localClippingEnabled,Rt=Bt.init(this.clippingPlanes,oe),E=xt.get(M,C.length),E.init(),C.push(E),Dt.enabled===!0&&Dt.isPresenting===!0){let wt=R.xr.getDepthSensingMesh();wt!==null&&dd(wt,N,-1/0,R.sortObjects)}dd(M,N,0,R.sortObjects),E.finish(),O!==null&&O.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(at,_t),Ae=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Ae&&Qt.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Bt.beginShadows();let G=b.state.shadowsArray;if($t.render(G,M,N),Rt===!0&&Bt.endShadows(),(V&&T.hasRenderPass())===!1){let wt=E.opaque,yt=E.transmissive;if(b.setupLights(),N.isArrayCamera){let It=N.cameras;if(yt.length>0)for(let Nt=0,te=It.length;Nt<te;Nt++){let se=It[Nt];Om(wt,yt,M,se)}Ae&&Qt.render(M);for(let Nt=0,te=It.length;Nt<te;Nt++){let se=It[Nt];Fm(E,M,se,se.viewport)}}else yt.length>0&&Om(wt,yt,M,N),Ae&&Qt.render(M),Fm(E,M,N)}rt!==null&&$===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),V&&T.end(R),M.isScene===!0&&M.onAfterRender(R,M,N),St.resetDefaultState(),Z=-1,it=null,x.pop(),x.length>0?(b=x[x.length-1],J.setTextureUnits(b.state.textureUnits),Rt===!0&&Bt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,O!==null&&O.renderEnd()};function dd(M,N,Y,V){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Yt)){V&&He.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xt);let wt=nt.update(M),yt=M.material;yt.visible&&E.push(M,wt,yt,Y,He.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Yt))){let wt=nt.update(M),yt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),He.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),He.copy(wt.boundingSphere.center)),He.applyMatrix4(M.matrixWorld).applyMatrix4(Xt)),Array.isArray(yt)){let It=wt.groups;for(let Nt=0,te=It.length;Nt<te;Nt++){let se=It[Nt],Pt=yt[se.materialIndex];Pt&&Pt.visible&&E.push(M,wt,Pt,Y,He.z,se,N)}}else yt.visible&&E.push(M,wt,yt,Y,He.z,null,N)}}let Mt=M.children;for(let wt=0,yt=Mt.length;wt<yt;wt++)dd(Mt[wt],N,Y,V)}function Fm(M,N,Y,V){let{opaque:G,transmissive:Mt,transparent:wt}=M;b.setupLightsView(Y),Rt===!0&&Bt.setGlobalState(R.clippingPlanes,Y),V&&_.viewport(I.copy(V)),G.length>0&&Vc(G,N,Y),Mt.length>0&&Vc(Mt,N,Y),wt.length>0&&Vc(wt,N,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Om(M,N,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Pt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Jn(1,1,{generateMipmaps:!0,type:Pt?Wi:jn,minFilter:nr,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Mt=b.state.transmissionRenderTarget[V.id],wt=V.viewport||I;Mt.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),It=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(lt),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),Ae&&Qt.render(Y);let te=R.toneMapping;R.toneMapping=Gi;let se=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Rt===!0&&Bt.setGlobalState(R.clippingPlanes,V),Vc(M,Y,V),J.updateMultisampleRenderTarget(Mt),J.updateRenderTargetMipmap(Mt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let _e=0,en=N.length;_e<en;_e++){let De=N[_e],{object:Te,geometry:Cn,material:Tt,group:kn}=De;if(Tt.side===Dn&&Te.layers.test(V.layers)){let fe=Tt.side;Tt.side=Tn,Tt.needsUpdate=!0,Bm(Te,Y,V,Cn,Tt,kn),Tt.side=fe,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(J.updateMultisampleRenderTarget(Mt),J.updateRenderTargetMipmap(Mt))}R.setRenderTarget(yt,It,Nt),R.setClearColor(lt,ct),se!==void 0&&(V.viewport=se),R.toneMapping=te}function Vc(M,N,Y){let V=N.isScene===!0?N.overrideMaterial:null;for(let G=0,Mt=M.length;G<Mt;G++){let wt=M[G],{object:yt,geometry:It,group:Nt}=wt,te=wt.material;te.allowOverride===!0&&V!==null&&(te=V),yt.layers.test(Y.layers)&&Bm(yt,N,Y,It,te,Nt)}}function Bm(M,N,Y,V,G,Mt){O!==null&&G.isNodeMaterial&&O.setObject(M,G),M.onBeforeRender(R,N,Y,V,G,Mt),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(R,N,Y,V,M,Mt),G.transparent===!0&&G.side===Dn&&G.forceSinglePass===!1?(G.side=Tn,G.needsUpdate=!0,R.renderBufferDirect(Y,N,V,G,M,Mt),G.side=tr,G.needsUpdate=!0,R.renderBufferDirect(Y,N,V,G,M,Mt),G.side=Dn):R.renderBufferDirect(Y,N,V,G,M,Mt),M.onAfterRender(R,N,Y,V,G,Mt)}function Gc(M,N,Y){N.isScene!==!0&&(N=pn);let V=q.get(M),G=b.state.lights,Mt=b.state.shadowsArray,wt=G.state.version,yt=ft.getParameters(M,G.state,Mt,N,Y,b.state.lightProbeGridArray),It=ft.getProgramCacheKey(yt),Nt=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=ht.get(M.envMap||V.environment,te),V.envMapRotation=V.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",Qi),Nt=new Map,V.programs=Nt);let se=Nt.get(It);if(se!==void 0){if(V.currentProgram===se&&V.lightsStateVersion===wt)return km(M,yt),se}else yt.uniforms=ft.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,Y,yt),M.onBeforeCompile(yt,R),se=ft.acquireProgram(yt,It),Nt.set(It,se),V.uniforms=yt.uniforms;let Pt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=Bt.uniform),km(M,yt),V.needsLights=Ev(M),V.lightsStateVersion=wt,V.needsLights&&(Pt.ambientLightColor.value=G.state.ambient,Pt.lightProbe.value=G.state.probe,Pt.sunLights.value=G.state.sun,Pt.sunLightShadows.value=G.state.sunShadow,Pt.directionalLights.value=G.state.directional,Pt.directionalLightShadows.value=G.state.directionalShadow,Pt.spotLights.value=G.state.spot,Pt.spotLightShadows.value=G.state.spotShadow,Pt.rectAreaLights.value=G.state.rectArea,Pt.ltc_1.value=G.state.rectAreaLTC1,Pt.ltc_2.value=G.state.rectAreaLTC2,Pt.pointLights.value=G.state.point,Pt.pointLightShadows.value=G.state.pointShadow,Pt.hemisphereLights.value=G.state.hemi,Pt.sunShadowMatrix.value=G.state.sunShadowMatrix,Pt.sunShadowCascade.value=G.state.sunShadowCascade,Pt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pt.spotLightMatrix.value=G.state.spotLightMatrix,Pt.spotLightMap.value=G.state.spotLightMap,Pt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=se,V.uniformsList=null,se}function zm(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Co.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function km(M,N){let Y=q.get(M);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Mv(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let Y=0,V=M.length;Y<V;Y++){let G=M[Y];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function Sv(M,N,Y,V,G){N.isScene!==!0&&(N=pn),J.resetTextureUnits();let Mt=N.fog,wt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,yt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ae.workingColorSpace,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Nt=ht.get(V.envMap||wt,It),te=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!Y.morphAttributes.position,_e=!!Y.morphAttributes.normal,en=!!Y.morphAttributes.color,De=Gi;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(De=R.toneMapping);let Te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Cn=Te!==void 0?Te.length:0,Tt=q.get(V),kn=b.state.lights;if(Rt===!0&&(oe===!0||M!==it)){let Re=M===it&&V.id===Z;Bt.setState(V,M,Re)}let fe=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==kn.state.version||Tt.outputColorSpace!==yt||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==Nt||V.fog===!0&&Tt.fog!==Mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Bt.numPlanes||Tt.numIntersection!==Bt.numIntersection)||Tt.vertexAlphas!==te||Tt.vertexTangents!==se||Tt.morphTargets!==Pt||Tt.morphNormals!==_e||Tt.morphColors!==en||Tt.toneMapping!==De||Tt.morphTargetsCount!==Cn||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Tt.__version=V.version);let _i=Tt.currentProgram;fe===!0&&(_i=Gc(V,N,G),O&&V.isNodeMaterial&&O.onUpdateProgram(V,_i,Tt));let ts=!1,Vs=!1,Hr=!1,Se=_i.getUniforms(),Ze=Tt.uniforms;if(_.useProgram(_i.program)&&(ts=!0,Vs=!0,Hr=!0),V.id!==Z&&(Z=V.id,Vs=!0),Tt.needsLights){let Re=Mv(b.state.lightProbeGridArray,G);Tt.lightProbeGrid!==Re&&(Tt.lightProbeGrid=Re,Vs=!0)}if(ts||it!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Se.setValue(F,"projectionMatrix",M.projectionMatrix),Se.setValue(F,"viewMatrix",M.matrixWorldInverse);let Hs=Se.map.cameraPosition;Hs!==void 0&&Hs.setValue(F,de.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&Se.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),it!==M&&(it=M,Vs=!0,Hr=!0)}if(Tt.needsLights&&(kn.state.sunShadowMap.length>0&&Se.setValue(F,"sunShadowMap",kn.state.sunShadowMap,J),kn.state.directionalShadowMap.length>0&&Se.setValue(F,"directionalShadowMap",kn.state.directionalShadowMap,J),kn.state.spotShadowMap.length>0&&Se.setValue(F,"spotShadowMap",kn.state.spotShadowMap,J),kn.state.pointShadowMap.length>0&&Se.setValue(F,"pointShadowMap",kn.state.pointShadowMap,J)),G.isSkinnedMesh){Se.setOptional(F,G,"bindMatrix"),Se.setOptional(F,G,"bindMatrixInverse");let Re=G.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Se.setValue(F,"boneTexture",Re.boneTexture,J))}G.isBatchedMesh&&(Se.setOptional(F,G,"batchingTexture"),Se.setValue(F,"batchingTexture",G._matricesTexture,J),Se.setOptional(F,G,"batchingIdTexture"),Se.setValue(F,"batchingIdTexture",G._indirectTexture,J),Se.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Se.setValue(F,"batchingColorTexture",G._colorsTexture,J));let Gs=Y.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&U.update(G,Y,_i),(Vs||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,Se.setValue(F,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Ze.envMapIntensity.value=N.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Eb()),Vs){if(Se.setValue(F,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&bv(Ze,Hr),Mt&&V.fog===!0&&Ot.refreshFogUniforms(Ze,Mt),Ot.refreshMaterialUniforms(Ze,V,W,B,b.state.transmissionRenderTarget[M.id]),Tt.needsLights&&Tt.lightProbeGrid){let Re=Tt.lightProbeGrid;Ze.probesSH.value=Re.texture,Ze.probesMin.value.copy(Re.boundingBox.min),Ze.probesMax.value.copy(Re.boundingBox.max),Ze.probesResolution.value.copy(Re.resolution)}Co.upload(F,zm(Tt),Ze,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Co.upload(F,zm(Tt),Ze,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(F,"center",G.center),Se.setValue(F,"modelViewMatrix",G.modelViewMatrix),Se.setValue(F,"normalMatrix",G.normalMatrix),Se.setValue(F,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Re=V.uniformsGroups;for(let Hs=0,Wr=Re.length;Hs<Wr;Hs++){let Gm=Re[Hs];st.update(Gm,_i),st.bind(Gm,_i)}}return _i}function bv(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Ev(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(M,N,Y){let V=q.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=N,q.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let Y=q.get(M);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,Y=0){rt=M,K=N,$=Y;let V=null,G=!1,Mt=!1;if(M){let yt=q.get(M);if(yt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),I.copy(M.viewport),Q.copy(M.scissor),et=M.scissorTest,_.viewport(I),_.scissor(Q),_.setScissorTest(et),Z=-1;return}else if(yt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(yt.__hasExternalTextures)J.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let te=M.depthTexture;if(yt.__boundDepthTexture!==te){if(te!==null&&q.has(te)&&(M.width!==te.image.width||M.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Mt=!0);let Nt=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?V=Nt[N][Y]:V=Nt[N],G=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?V=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[Y]:V=Nt,I.copy(M.viewport),Q.copy(M.scissor),et=M.scissorTest}else I.copy(ut).multiplyScalar(W).floor(),Q.copy(Ht).multiplyScalar(W).floor(),et=re;if(Y!==0&&(V=H),_.bindFramebuffer(F.FRAMEBUFFER,V)&&_.drawBuffers(M,V),_.viewport(I),_.scissor(Q),_.setScissorTest(et),G){let yt=q.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,Y)}else if(Mt){let yt=N;for(let It=0;It<M.textures.length;It++){let Nt=q.get(M.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,Nt.__webglTexture,Y,yt)}}else if(M!==null&&Y!==0){let yt=q.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Y)}Z=-1};function Vm(M){let N=q.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=A.textureFormatReadable(M.format),N.__typeReadable=A.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,Y,V,G,Mt,wt,yt=0){if(!(M&&M.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){_.bindFramebuffer(F.FRAMEBUFFER,It);try{let Nt=M.textures[yt],te=Nt.format,se=Nt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=Vm(Nt);if(Pt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-V&&Y>=0&&Y<=M.height-G&&F.readPixels(N,Y,V,G,gt.convert(te),gt.convert(se),Mt)}finally{let Nt=rt!==null?q.get(rt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,N,Y,V,G,Mt,wt,yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(N>=0&&N<=M.width-V&&Y>=0&&Y<=M.height-G){_.bindFramebuffer(F.FRAMEBUFFER,It);let Nt=M.textures[yt],te=Nt.format,se=Nt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=Vm(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.bufferData(F.PIXEL_PACK_BUFFER,Mt.byteLength,F.STREAM_READ),F.readPixels(N,Y,V,G,gt.convert(te),gt.convert(se),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let en=rt!==null?q.get(rt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,en);let De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tg(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(_e),F.deleteSync(De),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,Y=0){let V=Math.pow(2,-Y),G=Math.floor(M.image.width*V),Mt=Math.floor(M.image.height*V),wt=N!==null?N.x:0,yt=N!==null?N.y:0;J.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,wt,yt,G,Mt),_.unbindTexture()},this.copyTextureToTexture=function(M,N,Y=null,V=null,G=0,Mt=0){let wt,yt,It,Nt,te,se,Pt,_e,en,De=M.isCompressedTexture?M.mipmaps[Mt]:M.image;if(Y!==null)wt=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,te=Y.min.y,se=Y.isBox3?Y.min.z:0;else{let Ze=Math.pow(2,-G);wt=Math.floor(De.width*Ze),yt=Math.floor(De.height*Ze),M.isDataArrayTexture?It=De.depth:M.isData3DTexture?It=Math.floor(De.depth*Ze):It=1,Nt=0,te=0,se=0}V!==null?(Pt=V.x,_e=V.y,en=V.z):(Pt=0,_e=0,en=0);let Te=gt.convert(N.format),Cn=gt.convert(N.type),Tt;N.isData3DTexture?(J.setTexture3D(N,0),Tt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Tt=F.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Tt=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let kn=_.getParameter(F.UNPACK_ROW_LENGTH),fe=_.getParameter(F.UNPACK_IMAGE_HEIGHT),_i=_.getParameter(F.UNPACK_SKIP_PIXELS),ts=_.getParameter(F.UNPACK_SKIP_ROWS),Vs=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),_.pixelStorei(F.UNPACK_SKIP_ROWS,te),_.pixelStorei(F.UNPACK_SKIP_IMAGES,se);let Hr=M.isDataArrayTexture||M.isData3DTexture,Se=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let Ze=q.get(M),Gs=q.get(N),Re=q.get(Ze.__renderTarget),Hs=q.get(Gs.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,Re.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Wr=0;Wr<It;Wr++)Hr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(M).__webglTexture,G,se+Wr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(N).__webglTexture,Mt,en+Wr)),F.blitFramebuffer(Nt,te,wt,yt,Pt,_e,wt,yt,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||q.has(M)){let Ze=q.get(M),Gs=q.get(N);_.bindFramebuffer(F.READ_FRAMEBUFFER,L),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,X);for(let Re=0;Re<It;Re++)Hr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.__webglTexture,G,se+Re):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ze.__webglTexture,G),Se?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gs.__webglTexture,Mt,en+Re):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Gs.__webglTexture,Mt),G!==0?F.blitFramebuffer(Nt,te,wt,yt,Pt,_e,wt,yt,F.COLOR_BUFFER_BIT,F.NEAREST):Se?F.copyTexSubImage3D(Tt,Mt,Pt,_e,en+Re,Nt,te,wt,yt):F.copyTexSubImage2D(Tt,Mt,Pt,_e,Nt,te,wt,yt);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Se?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Tt,Mt,Pt,_e,en,wt,yt,It,Te,Cn,De.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,Mt,Pt,_e,en,wt,yt,It,Te,De.data):F.texSubImage3D(Tt,Mt,Pt,_e,en,wt,yt,It,Te,Cn,De):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Mt,Pt,_e,wt,yt,Te,Cn,De.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Mt,Pt,_e,De.width,De.height,Te,De.data):F.texSubImage2D(F.TEXTURE_2D,Mt,Pt,_e,wt,yt,Te,Cn,De);_.pixelStorei(F.UNPACK_ROW_LENGTH,kn),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),_.pixelStorei(F.UNPACK_SKIP_PIXELS,_i),_.pixelStorei(F.UNPACK_SKIP_ROWS,ts),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Vs),Mt===0&&N.generateMipmaps&&F.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){K=0,$=0,rt=null,_.reset(),St.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=ae._getUnpackColorSpace()}};function Ug(e,t=!1){let n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),r={},o={},a=e[0].morphTargetsRelative,c=new We,l=0;for(let h=0;h<e.length;++h){let d=e[h],u=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(n)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(n){let h=0,d=[];for(let u=0;u<e.length;++u){let f=e[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=e[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Ng(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let g=Ng(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Ng(e){let t,n,i,s=-1,r=0;for(let l=0;l<e.length;++l){let h=e[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new t(r),a=new Fe(o,n,i),c=0;for(let l=0;l<e.length;++l){let h=e[l];if(h.isInterleavedBufferAttribute){let d=c/n;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<n;g++){let y=h.getComponent(u,g);a.setComponent(u+d,g,y)}}else o.set(h.array,c);c+=h.count*n}return s!==void 0&&(a.gpuType=s),a}var zf='"Trebuchet MS","Segoe UI",Verdana,Tahoma,Arial,sans-serif';function Zh(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Fg=new Map;function _n(e,t={}){let n=e+JSON.stringify(t),i=Fg.get(n);return i||(i=new Kn({color:e,flatShading:!0,...t}),Fg.set(n,i)),i}var Vf=new Kn({color:16777215,vertexColors:!0,flatShading:!0}),Og=new he,Bg=new Ln,zg=new Vi,kg=new P,kf=new P(1,1,1),$h=new Gt,Qn=class{constructor(t=0,n=0,i=0){this.o=new P(t,n,i),this.lista=[]}_add(t,n,i,s,r,o,a){zg.set((o==null?void 0:o[0])||0,(o==null?void 0:o[1])||0,(o==null?void 0:o[2])||0),Bg.setFromEuler(zg),kg.set(i+this.o.x,s+this.o.y,r+this.o.z),a?kf.set(a[0],a[1],a[2]):kf.set(1,1,1),Og.compose(kg,Bg,kf),t.applyMatrix4(Og);let c=t.index?t.toNonIndexed():t;c!==t&&t.dispose();for(let d of Object.keys(c.attributes))d!=="position"&&d!=="normal"&&d!=="uv"&&c.deleteAttribute(d);c.attributes.uv||c.setAttribute("uv",new Fe(new Float32Array(c.attributes.position.count*2),2)),$h.set(n);let l=c.attributes.position.count,h=new Float32Array(l*3);for(let d=0;d<l;d++)h[d*3]=$h.r,h[d*3+1]=$h.g,h[d*3+2]=$h.b;c.setAttribute("color",new Fe(h,3)),this.lista.push(c)}box(t,n,i,s,r=0,o=0,a=0,c,l){this._add(new Ie(t,n,i).translate(0,n/2,0),s,r,o,a,c,l)}cyl(t,n,i,s,r=0,o=0,a=0,c=12,l,h){this._add(new Hn(t,n,i,c).translate(0,i/2,0),s,r,o,a,l,h)}cone(t,n,i,s=0,r=0,o=0,a=8,c,l){this._add(new _o(t,n,a).translate(0,n/2,0),i,s,r,o,c,l)}sphere(t,n,i=0,s=0,r=0,o,a=8){this._add(new ai(t,a,Math.max(4,a-3)).translate(0,t,0),n,i,s,r,null,o)}domo(t,n,i=0,s=0,r=0,o=14){this._add(new ai(t,o,7,0,Math.PI*2,0,Math.PI/2),n,i,s,r)}gable(t,n,i,s,r=0,o=0,a=0){let c=new Hn(1,1,1,3);c.rotateX(-Math.PI/2),c.scale(t/1.732,n/1.5,i),c.translate(0,n/3,0),this._add(c,s,r,o,a)}piramide(t,n,i,s,r=0,o=0,a=0){let c=new _o(1,1,4);c.rotateY(Math.PI/4),c.scale(t/1.4142,n,i/1.4142),c.translate(0,n/2,0),this._add(c,s,r,o,a)}geo(t,n,i=0,s=0,r=0,o,a){this._add(t,n,i,s,r,o,a)}build({cast:t=!0,receive:n=!0,material:i=Vf}={}){let s=Ug(this.lista,!1);this.lista.forEach(o=>o.dispose()),this.lista=[];let r=new qt(s,i);return r.castShadow=t,r.receiveShadow=n,r}};function xn(e,{ancho:t=1024,alto:n=256,fondo:i=["#1b2a4a","#2c4a8a"],borde:s="#ffc83d",insignia:r=null}={}){let o=document.createElement("canvas");o.width=t,o.height=n;let a=o.getContext("2d"),c=a.createLinearGradient(0,0,t,n);c.addColorStop(0,i[0]),c.addColorStop(1,i[1]),a.fillStyle=c,a.fillRect(0,0,t,n),a.lineWidth=Math.round(n*.045),a.strokeStyle=s,a.strokeRect(a.lineWidth/2,a.lineWidth/2,t-a.lineWidth,n-a.lineWidth);let l=n*.12;if(r){let g=n*.32;a.fillStyle=s,a.beginPath(),a.arc(n*.52,n/2,g,0,Math.PI*2),a.fill(),a.fillStyle="#1b2a4a",a.font=`900 ${Math.round(g*1.3)}px ${zf}`,a.textAlign="center",a.textBaseline="middle",a.fillText(String(r),n*.52,n/2+g*.06),l=n*1}a.textAlign=r?"left":"center",a.textBaseline="middle";let h=r?l:t/2,d=t-l-n*.12,u=e.length;e.forEach((g,y)=>{let m=g.tam||(y===0?.3:.2),p=Math.round(n*m),S=g.peso||(y===0?900:700);for(a.font=`${S} ${p}px ${zf}`;a.measureText(g.texto).width>d&&p>12;)p-=2,a.font=`${S} ${p}px ${zf}`;a.fillStyle=g.color||(y===0?"#ffffff":"#ffd96b");let w=n*((y+1)/(u+1));a.fillText(g.texto,h,w)});let f=new os(o);return f.colorSpace=sn,f.anisotropy=4,f}function vn(e,t,n){return new qt(new oi(t,n),new Je({map:e,toneMapped:!1}))}function Tb(e,t,n){return e+(t-e)*n}function cc(e,t,n){return Math.max(t,Math.min(n,e))}function rr(e,t,n,i){return Tb(e,t,1-Math.exp(-n*i))}var Io=[-2.6,0,2.6],Vg=90,wb=-75,Xe=8,un=e=>wb-e*Vg,Po=e=>un(e)+12,bi=un(Xe-1)-95,hc=bi+12,As=un(6),uc=new P(.4,.72,.56).normalize();function lc(e){let t=e-As,n=.95;return t>-6?0:t>-14?n*((-6-t)/8):t>-34?n:t>-42?n*((t+42)/8):0}var Ct={tierra:"#b9674a",cordon:"#e3cfa8",pasto:"#7cc05c",madera:"#8b5a2b",maderaOsc:"#5e3a1d",barro:"#c4906a",paja:"#d9b765",ladrillo:"#c0563a",blanco:"#f6f1e6",rojo:"#d8452f",azul:"#2f8fd0",verde:"#4f9d3f",verdeOsc:"#3a7d34",amarillo:"#ffc83d",gris:"#9aa5b1",chapa:"#c9d3da",negro:"#2b2b33"};function Ab(e,t,n,i=1,s="#4f9d3f"){e.cyl(.22*i,.34*i,2.4*i,"#7a4e2b",t,0,n,6),e.sphere(1.9*i,s,t,1.6*i,n,[1.15,.85,1.15],7),e.sphere(1.3*i,"#5eb04a",t+.5*i,2.7*i,n-.3*i,[1,.8,1],7)}function Cb(e,t,n,i=1.4,s=Ct.madera){e.box(.16,i,.16,s,t,0,n)}function us(e,t,n,i,s,r=[.6,1.1],o=2.4,a=Ct.madera){let c=i-t,l=s-n,h=Math.hypot(c,l),d=Math.max(1,Math.round(h/o)),u=Math.max(...r)+.25;for(let g=0;g<=d;g++)Cb(e,t+c*g/d,n+l*g/d,u,a);let f=Math.atan2(-l,c);for(let g of r)e.box(h,.07,.07,a,(t+i)/2,g,(n+s)/2,[0,f,0])}function Jh(e,t,n,i=0,s=!0){let r=(m,p)=>i===0?[m,p]:[p,m],[o,a]=r(1.9,.9);if(e.box(o,1,a,"#f4f1ea",t,.7,n),s){let[m,p]=r(.7,.95);e.box(m,.5,p,"#2b2b33",t+(i===0?.3:0),1.05,n+(i===0?0:.3))}let[c,l]=i===0?[.6,.3]:[.3,.6];for(let m of[-1,1])for(let p of[-1,1])e.box(.22,.72,.22,"#3b3b44",t+m*c,0,n+p*l);let h=i===0?1.15:0,d=i===0?0:1.15,[u,f]=r(.7,.55);e.box(u,.55,f,"#f4f1ea",t+h,1.05,n+d);let[g,y]=r(.2,.3);e.box(g,.25,y,"#e8a0a0",t+h*1.28,1,n+d*1.28)}function Rb(){let e=document.createElement("canvas");e.width=192,e.height=128;let t=e.getContext("2d");t.fillStyle="#75aadb",t.fillRect(0,0,192,128),t.fillStyle="#ffffff",t.fillRect(0,43,192,42),t.fillStyle="#f6b40e",t.beginPath(),t.arc(96,64,13,0,Math.PI*2),t.fill();let n=new os(e);return n.colorSpace=sn,n}function Ib(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256);let n=Zh(77);for(let s=0;s<90;s++){let r=n()*256,o=n()*256,a=20+n()*70;t.fillStyle=n()>.5?"rgba(210,175,160,0.55)":"rgba(255,240,225,0.7)",t.fillRect(o,r,a,2+n()*3),t.fillRect(o-256,r,a,2+n()*3)}let i=new os(e);return i.wrapS=i.wrapT=wr,i.colorSpace=sn,i}var Pb={puerto(e,t){e.box(5,.25,120,"#dcc08a",12.5,0,0),e.box(20,.3,4.6,Ct.madera,21,.5,-4);for(let h=0;h<18;h++)e.box(.08,.02,4.6,Ct.maderaOsc,12.5+h*1.1,.8,-4);for(let h=0;h<6;h++)for(let d of[-6.1,-1.9])e.cyl(.22,.22,1.9,Ct.maderaOsc,14+h*3.6,0,d,7);e.box(1.3,1.3,1.3,"#c98a4b",18,.8,-3.2),e.box(1.3,1.3,1.3,"#b97a3d",19.5,.8,-3.8),e.box(1.2,1.2,1.2,"#c98a4b",18.7,2.1,-3.5),e.cyl(.55,.55,1.2,Ct.rojo,25,.8,-4.5,10),e.cyl(.57,.57,.12,Ct.negro,25,1.35,-4.5,10);let n=44,i=-13;e.box(16,1.3,5,"#7c2a22",n,.05,i),e.box(12.5,1.3,4.5,Ct.blanco,n+.8,1.35,i),e.box(6.5,1.7,3.8,Ct.blanco,n+1,2.65,i),e.box(7.2,.22,4.2,Ct.rojo,n+1,4.35,i);for(let h=0;h<4;h++)e.box(.15,.8,.9,"#5aa9e6",n-1.5+h*1.6,3,i+1.93);for(let h=0;h<4;h++)e.box(.15,.8,.9,"#5aa9e6",n-1.5+h*1.6,3,i-1.93);e.cyl(.5,.6,3.2,Ct.negro,n+2.8,4.5,i,10),e.cyl(.62,.62,.5,Ct.rojo,n+2.8,7.3,i,10),e.cone(2.45,3.2,"#7c2a22",n-8,.7,i,4,[0,0,Math.PI/2],[.5,1,1]),e.sphere(1,Ct.maderaOsc,24,.12,5,[2.3,.4,.62]),e.box(.1,.5,.9,Ct.madera,24,.4,5),e.box(.2,2.6,.2,Ct.madera,-8,0,5);let s=t.agua(190,130,15,-2);s.position.set(110,.06,0),t.g.add(s);let r=new rn;r.position.set(n+8.4,1.9,i);let o=_n(Ct.rojo);for(let h=0;h<8;h++){let d=new qt(new Ie(.25,1.9,3.6),o);d.rotation.z=h/8*Math.PI*2,d.position.set(Math.sin(d.rotation.z)*-.9*0,0,0),r.add(d)}t.g.add(r),t.anim.push((h,d)=>{r.rotation.z-=d*1.4});let a=[];for(let h=0;h<5;h++){let d=new qt(new as(.7,0),new Kn({color:"#eceff3",transparent:!0,opacity:.8}));d.userData.f=h/5,t.g.add(d),a.push(d)}t.anim.push((h,d)=>{for(let u of a){u.userData.f=(u.userData.f+d*.15)%1;let f=u.userData.f;u.position.set(n+2.8-f*3,7.9+f*6,i),u.scale.setScalar(.6+f*1.8),u.material.opacity=.8*(1-f)}});let c=xn([{texto:"KM 192",tam:.38},{texto:"N.R.B.",tam:.3,color:"#ffd96b"}],{ancho:512,alto:256,fondo:["#7c2a22","#b8573a"]}),l=vn(c,2.6,1.3);l.position.set(-8,2.9,5.15),t.g.add(l)},subcomisaria(e,t){e.box(9,3.2,6.5,Ct.barro,-15,0,-3),e.box(9.2,.5,6.7,"#a8764f",-15,0,-3);for(let o=0;o<9;o++)e.box(.18,3.2,.18,"#7a5236",-15+4.55,0,-3-3.1+o*.8);e.piramide(11.8,3.4,9,Ct.paja,-15,3.2,-3),e.piramide(12.2,.5,9.4,"#b78f45",-15,3.1,-3),e.box(.2,2.3,1.6,"#4a2f1c",-15+4.5,0,-3),e.box(.2,1,1.2,"#3a2a20",-15+4.5,1.2,-3+2.2),e.box(.2,1,1.2,"#3a2a20",-15+4.5,1.2,-3-2.2);for(let o of[-3.3,3.3])e.box(.26,2.7,.26,Ct.maderaOsc,-15+6.3,0,-3+o);e.box(2.4,.2,7.2,Ct.madera,-15+5.4,2.7,-3);for(let o of[5,9])e.box(.22,1.5,.22,Ct.maderaOsc,-8.2,0,o);e.box(.2,.2,4.4,Ct.madera,-8.2,1.2,7),e.cyl(.6,.6,1.4,"#5b7a8a",-15+2.5,0,-3+6.5,10);for(let o=0;o<4;o++)e.cyl(.18,.18,1.6,"#6a4a2a",-18+o*.4,0,3,6,[0,0,Math.PI/2]);us(e,9,-12,9,6,[.5,1,1.5],2.4),us(e,9,6,24,6,[.5,1,1.5],2.4),us(e,9,-12,24,-12,[.5,1,1.5],2.4),e.box(1.6,.9,1.6,"#e0c55a",18,0,-6),e.box(1.6,.9,1.6,"#e0c55a",19.8,0,-5.5);let s=xn([{texto:"SUBCOMISAR\xCDA"},{texto:"\xABBERMEJO\xBB \xB7 1936",tam:.22}],{ancho:768,alto:256,fondo:["#1f3a6e","#2f5aa8"]}),r=vn(s,4,1.34);r.position.set(-15+4.65,2.75,-3),r.rotation.y=Math.PI/2,t.g.add(r)},registro(e,t){e.box(10,3.4,7.5,"#f3e7cf",14.5,0,-3),e.box(10.2,.5,7.7,"#cdb88f",14.5,0,-3),e.gable(11.8,2.6,8.6,"#b5472f",14.5,3.4,-3),e.box(.2,2.3,1.5,"#4a2f1c",14.5-5.05,0,-3);for(let u of[2.6,-2.6])e.box(.2,1.3,1.2,"#8ec5e8",14.5-5.05,1.1,-3+u);for(let u=0;u<6;u++)e.box(2.1,.14,1,u%2?Ct.blanco:Ct.rojo,14.5-6.1,2.75-0,-6+u*1-0+0,[0,0,-.18]);for(let u of[-3.1,3.1])e.box(.2,2.7,.2,Ct.maderaOsc,14.5-7.1,0,-3+u);e.box(4.5,2.8,5.5,"#f0d9b5",14.5-.5,0,4),e.gable(5.4,1.6,6.2,"#b5472f",14.5-.5,2.8,4);for(let u=0;u<5;u++)e.box(1.6,.14,.9,u%2?Ct.blanco:Ct.azul,14.5-3.4,2.4,2+u*.9,[0,0,-.2]);e.box(.2,1.8,1.8,"#4a2f1c",14.5-2.8,0,4),e.cyl(.22,.3,1.2,Ct.maderaOsc,8,0,3.5,8),e.box(1.4,.09,1,"#7b2a1d",8,1.2,3.5,[0,0,0]),e.box(.62,.07,.86,"#ffffff",7.67,1.29,3.5,[0,0,.12]),e.box(.62,.07,.86,"#fffaf0",8.33,1.29,3.5,[0,0,-.12]);let s=-13,r=4;e.box(3.4,.2,1.8,Ct.madera,s,.8,r);for(let u of[-1,1])e.cyl(.8,.8,.14,Ct.maderaOsc,s-.6,.8,r+u*1.05,14,[Math.PI/2,0,0]);for(let u of[-1,1])e.cyl(.8,.8,.14,Ct.maderaOsc,s+.6,.8,r+u*1.05,14,[Math.PI/2,0,0]);e.box(3.4,.14,.14,Ct.maderaOsc,s-3.3,.9,r-.6),e.box(3.4,.14,.14,Ct.maderaOsc,s-3.3,.9,r+.6);for(let u=0;u<3;u++)e.sphere(.55,"#e9dfc8",s-.8+u*.8,1,r,[1,1.1,.9]);let o=xn([{texto:"REGISTRO CIVIL"},{texto:"desde agosto de 1938",tam:.2}],{ancho:768,alto:256,fondo:["#6e2a1e","#a8442f"]}),a=vn(o,4,1.34);a.position.set(14.5-5.18,3,-3),a.rotation.y=-Math.PI/2,t.g.add(a);let c=xn([{texto:"CARNICER\xCDA"}],{ancho:512,alto:160,fondo:["#1f5a3a","#2f8a5a"]}),l=vn(c,2.6,.8);l.position.set(14.5-2.92,2.6,4-1.7),l.rotation.y=-Math.PI/2,t.g.add(l);let h=xn([{texto:"ACTA N.\xBA 1",tam:.3},{texto:"27 de agosto de 1938",tam:.2}],{ancho:512,alto:200,fondo:["#5a3a1a","#8a5a2b"]}),d=vn(h,2.4,.94);d.position.set(7.9,2.1,3.5),d.rotation.y=-Math.PI/2,d.position.x=8.9,t.g.add(d),e.box(.12,2,.12,Ct.maderaOsc,8.95,0,4.7),e.box(.12,2,.12,Ct.maderaOsc,8.95,0,2.3)},desmotadora(e,t){e.box(16,6,12,"#9fb2bf",-17.5,0,-3),e.box(16.2,.7,12.2,"#7d8f9c",-17.5,0,-3),e.gable(17.6,3.2,13,Ct.chapa,-17.5,6,-3),e.cyl(.95,1.2,15,"#b5523a",-17.5-5.5,0,-3-7.5,10),e.cyl(1.2,1.2,.7,Ct.negro,-17.5-5.5,14.4,-3-7.5,10),e.box(.2,4.2,5.4,"#3a4350",-17.5+8.05,0,-3);for(let d=0;d<5;d++)e.box(.22,.12,5.5,"#566271",-17.5+8.06,.7+d*.8,-3);e.box(2.2,.9,11,"#8b6a47",-8.6,0,-3);let s=(d,u,f)=>{e.box(1.8,1.2,1.2,"#f6f4ee",d,u,f),e.box(1.86,.1,1.26,"#555b66",d,u+.3,f),e.box(1.86,.1,1.26,"#555b66",d,u+.8,f)};s(-8.6,.9,.5),s(-8.6,.9,-1.5),s(-8.6,.9,-3.5),s(-8.6,2.1,-.5),s(-8.6,2.1,-2.5),s(-7.4,0,7),s(-7.4,1.2,7),s(-7.4,0,8.4);let r=-11.5,o=10;e.box(2.5,.5,6.6,"#7a2e22",r,.65,o),e.box(2.4,1.9,2.2,Ct.rojo,r,.65,o+2.2),e.box(2.2,.7,.1,"#bfe3f5",r,1.9,o+3.35);for(let d of[-2,2.4])for(let u of[-1.25,1.25])e.cyl(.55,.55,.4,Ct.negro,r+u,.55,o+d,12,[0,0,Math.PI/2]);e.sphere(1.1,"#fbfaf5",r,1,o-1.2,[1.1,1,1.1]),e.sphere(1,"#fbfaf5",r,1,o+.2,[1.1,1,1.1]),e.sphere(.9,"#f4f1ea",r,1.9,o-.5),us(e,9,-13,9,12,[.55,1],2.4),us(e,9,12,32,12,[.55,1],2.4),us(e,9,-13,32,-13,[.55,1],2.4);for(let d=0;d<4;d++){e.box(20,.35,1.1,"#6b4a35",20,0,-9+d*4.5);for(let u=0;u<14;u++)e.sphere(.5,Ct.verdeOsc,11.5+u*1.4,.3,-9+d*4.5,[1,.9,1],6),e.sphere(.2,"#ffffff",11.5+u*1.4+.2,.9,-9+d*4.5+.2,null,5)}e.box(5,2.6,3.4,"#cfeadf",29,0,5),e.gable(5.4,1.4,3.8,"#e8f5ef",29,2.6,5);for(let d=0;d<3;d++)e.box(.12,2.6,3.5,"#ffffff",26.7+d*2.3,0,5);let a=xn([{texto:"CHACRA EXPERIMENTAL",tam:.24},{texto:"(actual INTA)",tam:.2}],{ancho:640,alto:220,fondo:["#2d5a2a","#4f9d3f"]}),c=vn(a,3.6,1.24);c.position.set(8.2,2,5),c.rotation.y=-Math.PI/2,t.g.add(c),e.box(.14,2,.14,Ct.maderaOsc,8.15,0,6.8),e.box(.14,2,.14,Ct.maderaOsc,8.15,0,3.2);let l=xn([{texto:"DESMOTADORA OFICIAL",tam:.22},{texto:"Junta Nacional del Algod\xF3n",tam:.17}],{ancho:768,alto:220,fondo:["#33414f","#566a7c"]}),h=vn(l,4.6,1.32);h.position.set(-17.5+8.2,4.9,-3),h.rotation.y=Math.PI/2,t.g.add(h)},escuela(e,t){e.box(8,2.8,5.5,"#b98253",-14,0,3);for(let d=0;d<9;d++)e.box(.2,2.8,.2,"#6e4528",-14+4.05,0,3-2.6+d*.65);e.piramide(10,3,7.5,Ct.paja,-14,2.8,3),e.box(.2,2.1,1.3,"#4a2f1c",-10,0,3),e.box(.2,.9,1,"#3a2a20",-10,1.2,3+1.9),e.box(2.4,.6,1.3,Ct.ladrillo,-8.5,0,-4),e.box(2.2,.6,1.2,"#cf6444",-8.5,.6,-4),e.box(2,.6,1.1,Ct.ladrillo,-8.5,1.2,-4),e.box(2.4,.6,1.3,"#cf6444",-8.5,0,-6),e.box(2.2,.6,1.2,Ct.ladrillo,-8.5,.6,-6);let s=-29,r=-9;e.box(20,4.6,9,"#c0563a",s,0,r),e.box(20.3,.7,9.3,"#f0e8d8",s,0,r);for(let d=0;d<7;d++)e.box(.18,1.6,1.4,"#9fd6f2",s+10,1.5,r-7.5+d*2.5);e.box(.22,2.5,2.2,"#f3e9d2",s+10,0,r),e.gable(21.6,2.8,9.8,"#6e4a38",s,4.6,r),e.cyl(.07,.1,8.5,"#c8ced6",-12,0,-6,6),e.sphere(.2,"#ffc83d",-12,8.4,-6),e.box(26,.04,28,"#8fd06a",24,0,-1);for(let d of[-12,10])e.box(.14,2.2,.14,"#ffffff",21,0,d-1.7),e.box(.14,2.2,.14,"#ffffff",21,0,d+1.7),e.box(.14,.14,3.6,"#ffffff",21,2.2,d);e.sphere(.35,"#ffffff",22,0,-1.5);for(let d of[-14,12])e.cyl(.08,.08,4.4,Ct.maderaOsc,8.6,0,d,6);let o=["#d8452f","#ffd23f","#2f8fd0","#4f9d3f"];for(let d=0;d<14;d++){let u=(d+.5)/14;e.box(.55,.55,.05,o[d%4],8.6,4-Math.sin(u*Math.PI)*.7-.3,-14+u*26,[0,Math.PI/2,Math.PI/4])}e.box(2.6,.7,.9,"#33343a",12,.4,5),e.box(2.4,.08,.7,"#ff7a2f",12,1.1,5);for(let d of[-.3,.3])for(let u of[-1.1,1.1])e.box(.1,.5,.1,"#33343a",12+u,0,5+d);let a=xn([{texto:"ESCUELA N.\xBA 116",tam:.27},{texto:"rancho de estaqueo \xB7 1942",tam:.18}],{ancho:640,alto:220,fondo:["#6e4528","#a9744c"]}),c=vn(a,3.8,1.3);c.position.set(-14+4.2,3.6,3),c.rotation.y=Math.PI/2,t.g.add(c);let l=xn([{texto:"EPEP N.\xBA 166",tam:.27},{texto:"edificio de material \xB7 1947",tam:.17}],{ancho:720,alto:220,fondo:["#7a2e22","#c0563a"]}),h=vn(l,4.2,1.28);h.position.set(s+10.2,3.1,r+5.5),h.rotation.y=Math.PI/2,h.visible=!0,t.g.add(h),t.bandera(-12,7.2,-6)},plaza(e,t){e.box(33,.05,36,"#93d474",-26+.5,0,-2),e.box(26,.07,2.4,"#e6d2a8",-19.5,0,-2),e.box(2.4,.07,34,"#e6d2a8",-26,0,-2),e.cyl(5,5,.08,"#e6d2a8",-26,0,-2,24);let s=[.35,.6,.85,1.1,1.35];us(e,-9,-20,-9,-3.4,s,3.1,"#6e4a2a"),us(e,-9,-.6,-9,16,s,3.1,"#6e4a2a"),us(e,-9,16,-43,16,s,3.1,"#6e4a2a"),us(e,-9,-20,-43,-20,s,3.1,"#6e4a2a"),e.cyl(2.3,2.5,.5,"#bdb7a6",-26,0,-2,16),e.box(1.9,2.4,1.9,"#d3cdbb",-26,.5,-2),e.box(2.3,.3,2.3,"#bdb7a6",-26,2.9,-2),e.box(1.2,.6,.8,"#a9a391",-26,3.2,-2),e.sphere(.55,"#a9a391",-26,3.7,-2);for(let l=0;l<12;l++){let h=l/12*Math.PI*2;e.sphere(.32,["#ff6fa3","#ffd23f","#ffffff","#ff7a2f"][l%4],-26+Math.cos(h)*3.7,0,-2+Math.sin(h)*3.7,null,5)}for(let[l,h,d]of[[-19.5,1.6,0],[-19.5,-5.6,0],[-26+2.4,8,1],[-26-2.4,8,1]])e.box(2,.12,.6,"#8b5a2b",l,.5,h),e.box(2,.5,.1,"#8b5a2b",l,.6,h-.3),e.box(.1,.5,.5,"#33343a",l-.8,0,h),e.box(.1,.5,.5,"#33343a",l+.8,0,h);for(let[l,h]of[[-14,-2],[-14,8],[-14,-12],[-32,-8]])e.cyl(.08,.1,3.4,"#33343a",l,0,h,6),e.sphere(.3,"#fff2b0",l,3.3,h);for(let[l,h,d]of[[-14,-15,1.3],[-14,11,1.3],[-36,-14,1.5],[-37,10,1.4],[-32,-4,1.2],[-20,12,1.2],[-20,-16,1.2]])Ab(e,l,h,d,"#3f9a3c");Jh(e,11,-4,0),Jh(e,16,5,1),Jh(e,13,-10,0,!1),Jh(e,-17,20,0),e.cyl(.07,.1,8.5,"#c8ced6",-13,0,-8.5,6),e.sphere(.2,"#ffc83d",-13,8.4,-8.5),t.bandera(-13,7.2,-8.5);let r=xn([{texto:"BUSTO A SAN MART\xCDN",tam:.22},{texto:"17 de agosto de 1950",tam:.2}],{ancho:640,alto:200,fondo:["#4a4a52","#6b6b78"]}),o=vn(r,1.7,.53);o.position.set(-26+.97,1.6,-2),o.rotation.y=Math.PI/2,t.g.add(o);let a=xn([{texto:"PLAZA GENERAL SAN MART\xCDN",tam:.2},{texto:"alambrado de cinco hilos",tam:.17}],{ancho:720,alto:200,fondo:["#1f5a3a","#2f8a5a"]}),c=vn(a,3.8,1.05);c.position.set(-9.4,2.2,-2),c.rotation.y=Math.PI/2,t.g.add(c),e.box(.14,2.2,.14,Ct.maderaOsc,-9.3,0,-.1),e.box(.14,2.2,.14,Ct.maderaOsc,-9.3,0,-3.9)},puente(e,t){let i="#c5ccd4",s=Math.atan2(.95,8);e.geo(new Ie(11.6,.45,8.06),"#8f949c",0,.95/2-.225,-10,[s,0,0]),e.box(11.6,.45,20,"#8f949c",0,.95-.45,-24),e.geo(new Ie(11.6,.45,8.06),"#8f949c",0,.95/2-.225,-38,[-s,0,0]),e.box(10.8,.04,20,"#5f636b",0,.95-.01,-24);for(let h=0;h<7;h++)e.box(.16,.02,1.8,"#ffffff",0,.95+.03,-15.5-h*3);for(let h of[-17,-24,-31])for(let d of[-4,4])e.cyl(.7,.9,3.6,"#a8a49a",d,-2.75,h,8);for(let h of[-5.6,5.6]){e.box(.14,.14,20,Ct.rojo,h,.95+1.45,-24),e.box(.1,.1,20,"#e9e4d8",h,.95+.9,-24);for(let d=0;d<=10;d++)e.box(.14,1.2,.14,"#e9e4d8",h,.95,-14-d*2)}for(let h of[-17,-24,-31])e.geo(new Va(5.7,.25,6,14,Math.PI),i,0,.95+.05,h);for(let h of[-5.7,5.7])e.box(.3,.3,14,i,h,.95+5.7,-24);e.box(7,.4,4.5,Ct.madera,-22,.06,-22);for(let h=0;h<6;h++)e.box(.1,.03,4.5,Ct.maderaOsc,-25+h*1.2,.46,-22);e.cyl(.5,.5,1.1,Ct.rojo,-20.5,.46,-21,10),e.cyl(.5,.5,1.1,"#2f8fd0",-22.5,.46,-23,10),e.box(.2,1.8,.2,Ct.maderaOsc,-24.5,.46,-20.2),e.sphere(1,Ct.maderaOsc,20,.1,-30,[2.4,.4,.62]);let r=t.agua(700,34,14,2);r.position.set(0,.07,-24.5),t.g.add(r);let o=xn([{texto:"PUENTE LIBERTAD",tam:.28},{texto:"inaugurado el 8 de febrero de 1958",tam:.17}],{ancho:900,alto:220,fondo:["#1f3a6e","#2f5aa8"]}),a=vn(o,5.6,1.37);a.position.set(-8.6,2.6,-6.5),a.rotation.y=Math.PI/2*0,t.g.add(a),e.box(.14,2.2,.14,Ct.maderaOsc,-8.6,0,-6.4);let c=xn([{texto:"Antes: canoas y balsas",tam:.24}],{ancho:640,alto:160,fondo:["#7a4e2a","#a9744c"]}),l=vn(c,3.6,.9);l.position.set(-22,2.6,-22),t.g.add(l),e.box(.12,2,.12,Ct.maderaOsc,-22,0,-22.1)},casas(e,t){let n=(m,p,S,w=3.4,v="#c25a35")=>{e.cyl(S,S,w,v,m,0,p,22),e.cyl(S+.1,S+.1,.4,"#e0b48a",m,w-.4,p,22);for(let E=0;E<16;E++){let b=E/16*Math.PI*2;e.box(.06,w-.9,.06,"#d89066",m+Math.cos(b)*(S+.02),.2,p+Math.sin(b)*(S+.02))}e.domo(S,"#d9784a",m,w,p,18),e.sphere(.35,"#e0b48a",m,w+S-.2,p),e.box(.3,2.2,1.3,"#3a2a20",m-S+.02,0,p),e.box(.3,.9,.9,"#3a2a20",m-S*.7,1.4,p+S*.7)};n(14,-4,3.7),n(23,6,3.2,3.2,"#b84f2e"),n(25,-15,3.4,3.4),e.cyl(7.4,7.4,.04,"#d9a672",14,0,-4,36),e.cyl(4.6,4.6,.05,"#7cc05c",14,0,-4,36);let i=(m,p,S,w)=>{e.cyl(S,S,w,"#c7633c",m,0,p,20),e.domo(S,"#d9784a",m,w,p,18);let v=[],E=4.5;for(let b=0;b<=120;b++){let C=b/120,x=C*E*Math.PI*2;v.push(new P(Math.cos(x)*(S+.06),.5+C*(w-1),Math.sin(x)*(S+.06)))}e.geo(new Ga(new xo(v),180,.17,5),"#f1d3a7",m,0,p)};i(9,13,2.1,9),i(31,-4,1.9,7.5);let s=new rn,r=_n(Ct.madera),o=_n(Ct.maderaOsc),a=new qt(new Ie(1.5,.16,2.3),r);a.position.y=.95,s.add(a);let c=new qt(new Ie(.9,.5,.9),_n("#e9dfc8"));c.position.set(0,1.3,0),s.add(c);for(let m of[-.8,.8]){let p=new qt(new Ie(.1,.1,3.2),o);p.position.set(m,.95,2.4),s.add(p)}let l=[];for(let m of[-.95,.95]){let p=new rn;p.position.set(m,.85,0);let S=new qt(new Hn(.85,.85,.14,16),o);S.rotation.z=Math.PI/2,p.add(S);let w=new qt(new Ie(.2,1.65,.1),r);p.add(w);let v=new qt(new Ie(.2,.1,1.65),r);p.add(v),s.add(p),l.push(p)}let h=_n("#8a5a3a"),d=new qt(new Ie(.7,.8,1.9),h);d.position.set(0,1.35,4.2),s.add(d);let u=new qt(new Ie(.4,.45,.8),h);u.position.set(0,1.85,5.35),s.add(u);for(let m of[-.22,.22])for(let p of[3.6,4.8]){let S=new qt(new Ie(.16,1,.16),_n("#3b2a1c"));S.position.set(m,.5,p),s.add(S)}t.g.add(s);let f=0;t.anim.push((m,p)=>{f+=p*.32;let S=5.9;s.position.set(14+Math.cos(f)*S,0,-4+Math.sin(f)*S),s.rotation.y=-f+Math.PI;for(let w of l)w.rotation.x+=p*.32*S/.85});let g=xn([{texto:"CASAS REDONDAS",tam:.28},{texto:"Jorge Telbiz \xB7 d\xE9cada de 1950",tam:.17}],{ancho:760,alto:220,fondo:["#7a2e22","#c0563a"]}),y=vn(g,4.4,1.27);y.position.set(8.3,2.4,12),y.rotation.y=-Math.PI/2,t.g.add(y),e.box(.14,2.2,.14,Ct.maderaOsc,8.35,0,10.3),e.box(.14,2.2,.14,Ct.maderaOsc,8.35,0,13.7)}};function Gg(e,t){let n=new rn;e.add(n);let i=[],s=Zh(20261027),r=(()=>{let I=new ai(520,24,14),Q=I.attributes.position,et=new Float32Array(Q.count*3),lt=new Gt("#3f8fe0"),ct=new Gt("#9fd3f5"),ot=new Gt("#e9f6fc"),B=new Gt;for(let at=0;at<Q.count;at++){let _t=Q.getY(at)/520;_t>.35?B.copy(ct).lerp(lt,Math.min(1,(_t-.35)/.65)):_t>0?B.copy(ot).lerp(ct,_t/.35):B.copy(ot),et[at*3]=B.r,et[at*3+1]=B.g,et[at*3+2]=B.b}I.setAttribute("color",new Fe(et,3));let W=new qt(I,new Je({vertexColors:!0,side:Tn,fog:!1,depthWrite:!1}));return W.renderOrder=-10,W.frustumCulled=!1,W})();n.add(r);let o=new qt(new ai(26,16,12),new Je({color:"#fff3b0",fog:!1}));o.frustumCulled=!1,n.add(o);let a=new qt(new ai(44,16,12),new Je({color:"#fff3b0",fog:!1,transparent:!0,opacity:.22,depthWrite:!1}));a.frustumCulled=!1,n.add(a);{let I=new Qn;for(let et=0;et<26;et++){let lt=(s()-.5)*700,ct=70+s()*60,ot=-s()*1e3+120,B=3+Math.floor(s()*3);for(let W=0;W<B;W++)I.sphere(9+s()*7,"#ffffff",lt+W*11-B*5,ct+s()*4,ot+(s()-.5)*8,[1.6,.7,1],7)}let Q=I.build({cast:!1,receive:!1,material:new Je({vertexColors:!0,fog:!1,transparent:!0,opacity:.95})});n.add(Q),i.push(et=>{Q.position.x=Math.sin(et*.02)*40})}let c=1100,l=-430;{let I=new oi(900,c,90,110);I.rotateX(-Math.PI/2);let Q=I.attributes.position,et=new Float32Array(Q.count*3),lt=new Gt("#79bd57"),ct=new Gt("#9ccf6a"),ot=new Gt("#6aa94c"),B=new Gt;for(let at=0;at<Q.count;at++){let _t=Q.getX(at),ut=Q.getZ(at)+l,Ht=Math.sin(_t*.045)*Math.cos(ut*.05)+Math.sin(_t*.13+ut*.09)*.5;B.copy(lt),Ht>.35?B.lerp(ct,Math.min(1,(Ht-.35)*1.2)):Ht<-.4&&B.lerp(ot,Math.min(1,(-.4-Ht)*1.1)),et[at*3]=B.r,et[at*3+1]=B.g,et[at*3+2]=B.b}I.setAttribute("color",new Fe(et,3));let W=new qt(I,new Kn({vertexColors:!0}));W.position.set(0,0,l),W.receiveShadow=!0,n.add(W)}{let I=new Qn,Q=[[40,As-6],[As-42,bi-40]];for(let[lt,ct]of Q){let ot=lt-ct,B=(lt+ct)/2;I.box(11,.1,ot,Ct.tierra,0,0,B),I.box(.5,.2,ot,Ct.cordon,-5.75,0,B),I.box(.5,.2,ot,Ct.cordon,5.75,0,B);for(let W=lt-2;W>ct;W-=6)I.box(.16,.02,2.4,"#fff3d0",-1.3,.1,W),I.box(.16,.02,2.4,"#fff3d0",1.3,.1,W)}for(let lt=0;lt<Xe;lt++)for(let ct of[34,28,22]){let ot=un(lt)+ct;I.box(1.5,.02,.32,"#ffd23f",-.55,.11,ot,[0,.63,0]),I.box(1.5,.02,.32,"#ffd23f",.55,.11,ot,[0,-.63,0])}for(let lt=20;lt>bi-30;lt-=30)I.cyl(.1,.12,6.4,"#6b5a48",-7.2,0,lt,6),I.box(1.8,.14,.14,"#6b5a48",-7.2,6.1,lt);let et=I.build({cast:!1,receive:!0});n.add(et)}{let I=new Qn;for(let Q=0;Q<46;Q++){let lt=(Q%2?1:-1)*(190+s()*160),ct=60-s()*1e3,ot=30+s()*50;I.sphere(ot,["#6aa86a","#7eb877","#5f9d62"][Q%3],lt,-ot*.6,ct,[1.6,.55,1.4],8)}n.add(I.build({cast:!1,receive:!1}))}{let I=[];for(let Rt=0;Rt<Xe;Rt++)I.push([un(Rt)-26,un(Rt)+30,-48,48]);I.push([As-46,As-4,-400,400]),I.push([bi-14,bi+30,-24,24]);let Q=[];for(let Rt=30;Rt>bi-60;Rt-=3+s()*5)for(let oe of[-1,1]){if(s()<.25)continue;let Xt=oe*(9.5+Math.pow(s(),1.4)*60);I.some(([de,He,pn,Ae])=>Rt<He&&Rt>de&&Xt>pn&&Xt<Ae)||Q.push([Xt,Rt,.8+s()*.9])}let et=new Hn(.2,.32,2.4,6).translate(0,1.2,0),lt=new as(1.9,0).scale(1.2,.85,1.2).translate(0,3.4,0),ct=new vi(et,_n("#7a4e2b"),Q.length),ot=new vi(lt,new Kn({color:16777215,flatShading:!0}),Q.length),B=new he,W=new Gt,at=["#4f9d3f","#5eb04a","#3f8a3a","#6cbc50","#4a9a5a"];Q.forEach(([Rt,oe,Xt],de)=>{B.compose(new P(Rt,0,oe),new Ln().setFromAxisAngle(new P(0,1,0),s()*6),new P(Xt,Xt*(.9+s()*.3),Xt)),ct.setMatrixAt(de,B),ot.setMatrixAt(de,B),W.set(at[de%at.length]),ot.setColorAt(de,W)}),ct.castShadow=ot.castShadow=!0,n.add(ct,ot);let _t=[],ut=[];for(let Rt=28;Rt>bi-30;Rt-=1.8+s()*2.6)for(let oe of[-1,1]){if(s()<.4)continue;let Xt=oe*(6.4+s()*3.2);I.some(([de,He,pn,Ae])=>Rt<He&&Rt>de&&Math.abs(Xt)<10&&Math.abs(pn)>30),!(Rt<As-4&&Rt>As-44)&&(s()<.35?ut:_t).push([Xt,Rt])}let Ht=new vi(new as(.15,0).translate(0,.32,0),new Kn({color:16777215,flatShading:!0}),_t.length),re=["#ff6fa3","#ffd23f","#ffffff","#ff7a2f","#b58cff"];_t.forEach(([Rt,oe],Xt)=>{B.makeTranslation(Rt,0,oe),Ht.setMatrixAt(Xt,B),W.set(re[Xt%re.length]),Ht.setColorAt(Xt,W)});let Yt=new vi(new as(.75,0).scale(1.2,.8,1.2).translate(0,.55,0),_n("#3f8a3a"),ut.length);ut.forEach(([Rt,oe],Xt)=>{B.makeTranslation(Rt,0,oe),Yt.setMatrixAt(Xt,B)}),n.add(Ht,Yt)}{let I=[];for(let W=-1;W<Xe;W++){let at=W<0?un(0)+70:un(W)-Vg/2,_t=W%2?1:-1;at<As+45&&at>As-90||I.push([_t,at])}let Q=[],et=[],lt=new Qn;for(let[W,at]of I){lt.box(30,.05,36,"#8a6246",W*30,0,at);for(let _t=0;_t<11;_t++)for(let ut=0;ut<15;ut++){let Ht=W*(17+_t*2.3),re=at-16+ut*2.3;Q.push([Ht,re]),s()<.8&&et.push([Ht+(s()-.5)*.3,re+(s()-.5)*.3])}}n.add(lt.build({cast:!1,receive:!0}));let ct=new he,ot=new vi(new as(.55,0).scale(1,.85,1).translate(0,.45,0),_n("#3a7d34"),Q.length);Q.forEach(([W,at],_t)=>{ct.makeTranslation(W,0,at),ot.setMatrixAt(_t,ct)});let B=new vi(new as(.2,0).translate(0,.95,0),new Kn({color:"#ffffff",emissive:"#555555",flatShading:!0}),et.length);et.forEach(([W,at],_t)=>{ct.makeTranslation(W,0,at),B.setMatrixAt(_t,ct)}),n.add(ot,B)}let h=Ib(),d=[],u=(I,Q,et,lt)=>{let ct=h.clone();ct.needsUpdate=!0,ct.wrapS=ct.wrapT=wr,ct.repeat.set(I/22,Q/22);let ot=new qt(new oi(I,Q).rotateX(-Math.PI/2),new Kn({color:"#b8583b",map:ct}));return ot.receiveShadow=!0,d.push({t:ct,v:lt}),ot};i.push((I,Q)=>{for(let et of d)et.t.offset.y+=Q*.012*(et.v||1),et.t.offset.x+=Q*.004});let f=Rb(),g=[];function y(I,Q,et,lt){let ct=new oi(2.4,1.6,12,1),ot=Float32Array.from(ct.attributes.position.array),B=new qt(ct,new Je({map:f,side:Dn}));B.position.set(Q+1.2,et,lt),I.add(B),g.push({m:B,orig:ot})}i.push(I=>{for(let{m:Q,orig:et}of g){let lt=Q.geometry.attributes.position;for(let ct=0;ct<lt.count;ct++){let ot=et[ct*3];lt.setZ(ct,Math.sin(ot*2.6-I*4.2)*.14*((ot+1.2)/2.4))}lt.needsUpdate=!0}});let m=[],p=["#ff9f43","#4aa8ff","#ff6f91","#ffd23f","#a06cff","#34d399","#4aa8ff","#ff7a2f"];t.forEach((I,Q)=>{let et=un(Q),lt=new rn;lt.position.z=et,n.add(lt);let ct=new Qn,ot={g:lt,anim:i,agua:u,bandera:(re,Yt,Rt)=>y(lt,re,Yt,Rt)};(Pb[I.escena]||(()=>{}))(ct,ot),ct.box(.6,8.2,.6,"#7a4e2b",-6.9,0,0),ct.box(.6,8.2,.6,"#7a4e2b",6.9,0,0),ct.box(14.6,.7,.7,"#5e3a1d",0,7.6,0),ct.box(.3,1.6,.3,"#5e3a1d",-6,6,0,[0,0,-.6]),ct.box(.3,1.6,.3,"#5e3a1d",6,6,0,[0,0,.6]);for(let re of[18,15])ct.box(1.5,.02,.32,"#ffd23f",-.55,.11,re,[0,.63,0]),ct.box(1.5,.02,.32,"#ffd23f",.55,.11,re,[0,-.63,0]);lt.add(ct.build());let B=xn([{texto:I.lugar,tam:.3},{texto:I.anio,tam:.22}],{ancho:1536,alto:384,insignia:I.orden,fondo:["#1b2a4a","#2c4a8a"]}),W=vn(B,12.4,3.1);W.position.set(0,5.6,.36),lt.add(W);let at=new qt(new Hn(.45,.45,70,12,1,!0),new Je({color:p[Q],transparent:!0,opacity:.3,depthWrite:!1,side:Dn}));at.position.set(0,35,-1),lt.add(at);let _t=new rn,ut=new qt(new vo(1.5,2.1,36).rotateX(-Math.PI/2),new Je({color:"#ffd23f",transparent:!0,opacity:.9,side:Dn})),Ht=new qt(new Ar(1.5,36).rotateX(-Math.PI/2),new Je({color:"#ffd23f",transparent:!0,opacity:.28,side:Dn}));_t.add(ut,Ht),_t.position.set(0,.14,12),lt.add(_t),i.push(re=>{let Yt=1+Math.sin(re*3+Q)*.08;_t.scale.set(Yt,1,Yt)}),m.push({i:Q,z:et,zParada:Po(Q),g:lt,baliza:at,marca:_t,hecho:!1})});{let I=new Qn,Q=(ot,B,W)=>{I.box(.7,W,.7,"#7a4e2b",-B/2,0,ot),I.box(.7,W,.7,"#7a4e2b",B/2,0,ot),I.box(B+.7,.8,.8,"#5e3a1d",0,W-.4,ot)};Q(-14,14.6,7.6),Q(bi,15.6,9);let et=["#d8452f","#ffd23f","#2f8fd0","#4f9d3f","#ff6fa3"];for(let ot=0;ot<18;ot++){let B=(ot+.5)/18;I.box(.7,.7,.06,et[ot%5],-7.8+B*15.6,8.4-Math.sin(B*Math.PI)*1.2,bi+.5,[0,0,Math.PI/4])}n.add(I.build());let lt=vn(xn([{texto:"SALIDA",tam:.36},{texto:"Camin\xE1 hacia la primera estaci\xF3n",tam:.17}],{ancho:1024,alto:256,fondo:["#7c2a22","#b8573a"]}),11,2.75);lt.position.set(0,4.7,-13.6),n.add(lt);let ct=vn(xn([{texto:"\xA1LLEGASTE A EL COLORADO!",tam:.27},{texto:"Misi\xF3n Bermejo cumplida",tam:.2}],{ancho:1280,alto:320,fondo:["#1f5a3a","#2f8a5a"]}),12.8,3.2);ct.position.set(0,6.2,bi+.45),n.add(ct);for(let ot of[-10,10])S(n,ot,bi+2)}function S(I,Q,et){let lt=new Qn;lt.cyl(.08,.1,8.5,"#c8ced6",Q,0,et,6),lt.sphere(.2,"#ffc83d",Q,8.4,et),I.add(lt.build()),y(I,Q,7.2,et)}let w=[],v=[];{let I=[[-8,un(0)+30]];for(let et=0;et<Xe-1;et++)I.push([un(et)-14,un(et+1)+30]);I.push([un(Xe-1)-14,bi+30]);let Q=Zh(4242);I.forEach(([et,lt],ct)=>{let ot=1+Math.floor(Q()*3)-1,B=et-4,W=0;for(;B>lt+8&&W<4;){for(let Yt=0;Yt<3;Yt++){let Rt=B-Yt*3.2;w.push({x:Io[ot],z:Rt,y:lc(Rt),got:!1,seg:ct})}B-=3*3.2+2;let _t=(ot+1+Math.floor(Q()*2))%3,ut=[0,1,2].filter(Yt=>Yt!==ot&&Yt!==_t),Ht=ut.length?ut[Math.floor(Q()*ut.length)]:(ot+1)%3,re=B-2.2;re>lt+8&&v.push({x:Io[Ht],z:re,y:lc(re),tipo:Math.floor(Q()*3),golpeado:!1,seg:ct}),B-=7,ot=_t,W++}})}let E=(()=>{let I=new Qn;return I.sphere(.34,"#ffffff",0,0,0,null,8),I.sphere(.3,"#fbfdff",.28,.12,.1,null,8),I.sphere(.3,"#fbfdff",-.26,.1,.12,null,8),I.sphere(.28,"#ffffff",0,.3,-.18,null,8),I.cone(.3,.3,"#3f8a3a",0,-.2,0,5,[Math.PI,0,0]),I.build({cast:!1,receive:!1}).geometry})(),b=new Kn({color:16777215,vertexColors:!0,flatShading:!0,emissive:"#6a6f78"}),C=new vi(E,b,Math.max(1,w.length));C.frustumCulled=!1,n.add(C);let x=new vi(new vo(.6,.85,24).rotateX(-Math.PI/2),new Je({color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,side:Dn}),Math.max(1,w.length));x.frustumCulled=!1,n.add(x);let T=new he,R=new Ln,D=new P,O=new P,H=new P(0,1,0),L=new Ln;function X(I,Q){w.forEach((et,lt)=>{let ct=et.got||Math.abs(et.z-Q)>110;ct?(O.set(0,0,0),D.set(0,-20,et.z),R.identity()):(D.set(et.x,et.y+1.15+Math.sin(I*2.4+lt)*.12,et.z),R.setFromAxisAngle(H,I*1.8+lt),O.set(1,1,1)),T.compose(D,R,O),C.setMatrixAt(lt,T),ct?(D.set(0,-20,et.z),O.set(0,0,0)):(D.set(et.x,et.y+.06,et.z),O.setScalar(1+Math.sin(I*3+lt)*.08)),T.compose(D,L,O),x.setMatrixAt(lt,T)}),C.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0}let K=[(()=>{let I=new Qn;return I.box(1.4,1.2,1.4,"#c98a4b"),I.box(1.46,.16,1.46,"#8b5a2b",0,.1),I.box(1.46,.16,1.46,"#8b5a2b",0,.94),I.box(.16,1.22,1.46,"#8b5a2b",.4,0),I.box(.16,1.22,1.46,"#8b5a2b",-.4,0),I.build({receive:!1}).geometry})(),(()=>{let I=new Qn;return I.cyl(.62,.62,1.3,"#d8452f",0,0,0,12),I.cyl(.65,.65,.14,"#33343a",0,.25,0,12),I.cyl(.65,.65,.14,"#33343a",0,.95,0,12),I.cyl(.55,.55,.05,"#eee",0,1.3,0,12),I.build({receive:!1}).geometry})(),(()=>{let I=new Qn;return I.box(1.7,1.1,1.2,"#f2efe6"),I.box(1.76,.1,1.26,"#4b5260",0,.3),I.box(1.76,.1,1.26,"#4b5260",0,.75),I.sphere(.45,"#ffffff",0,1,0,[1.4,.8,1],6),I.build({receive:!1}).geometry})()],$=new rn;n.add($),v.forEach(I=>{let Q=new qt(K[I.tipo],Vf);Q.position.set(I.x,I.y,I.z),Q.rotation.y=I.z*7.3%1,Q.castShadow=!0,I.mesh=Q,$.add(Q)});function rt(){w.forEach(I=>I.got=!1),v.forEach(I=>{I.golpeado=!1,I.mesh.rotation.x=0,I.mesh.rotation.z=0,I.mesh.position.y=I.y}),m.forEach(I=>{I.hecho=!1,I.baliza.visible=!0})}function Z(I){$.visible=I}function it(I,Q,et,lt,ct){r.position.copy(lt.position),o.position.copy(lt.position).addScaledVector(uc,430),a.position.copy(o.position);for(let ot of i)ot(I,Q);X(I,et);for(let ot of v)ot.golpeado&&(ot.mesh.rotation.x=Math.min(1.45,ot.mesh.rotation.x+Q*6),ot.mesh.position.y=ot.y+Math.max(-.3,.2-ot.mesh.rotation.x*.2));for(let ot of m)ot.baliza.visible=!ot.hecho,ot.baliza.material.opacity=.26+Math.sin(I*2+ot.i)*.07,ot.marca.visible=!ot.hecho}return{raiz:n,paradas:m,algodones:w,obstaculos:v,actualizar:it,reiniciarItems:rt,mostrarObstaculos:Z,zParada:Po,zEstacion:un,alturaEn:lc}}function Hg(){let e=new rn,t=_n("#e0a77a"),n=_n("#2d7fd3"),i=_n("#33405e"),s=_n("#d8452f"),r=_n("#ecc96a"),o=_n("#2b2b33"),a=x=>(x.castShadow=!0,x),c=a(new qt(new Ie(.74,.88,.44),n));c.position.y=1.5;let l=a(new qt(new ai(.31,14,10),t));l.position.y=2.2;let h=a(new qt(new Hn(.58,.58,.05,16),r));h.position.y=2.42;let d=a(new qt(new Hn(.27,.32,.26,12),r));d.position.y=2.55;let u=new qt(new Hn(.33,.33,.07,12),_n("#d8452f"));u.position.y=2.47;let f=a(new qt(new Ie(.54,.66,.24),s));f.position.set(0,1.52,.34);let g=x=>{let T=new rn;T.position.set(x,1.08,0);let R=a(new qt(new Ie(.28,.82,.3),i));R.position.y=-.41;let D=a(new qt(new Ie(.3,.16,.42),o));return D.position.set(0,-.86,-.06),T.add(R,D),T},y=x=>{let T=new rn;T.position.set(x,1.86,0);let R=a(new qt(new Ie(.2,.72,.22),n));R.position.y=-.34;let D=a(new qt(new ai(.12,8,6),t));return D.position.y=-.74,T.add(R,D),T},m=g(-.2),p=g(.2),S=y(-.5),w=y(.5),v=new rn;v.add(c,l,h,d,u,f,m,p,S,w),e.add(v);let E=new qt(new Ar(.6,16).rotateX(-Math.PI/2),new Je({color:0,transparent:!0,opacity:.25,depthWrite:!1}));E.position.y=.04,e.add(E);let b=0,C=0;return{objeto:e,sombraFalsa:E,actualizar(x,T,R,D=0,O=!1){C+=x;let H=Math.min(1,T/5);b+=x*(2+T*1.25);let L=Math.sin(b)*.95*H;m.rotation.x=L,p.rotation.x=-L,S.rotation.x=-L*.8,R?w.rotation.x=Math.PI*.88+Math.sin(C*7)*.22:w.rotation.x=L*.8,v.position.y=Math.abs(Math.sin(b))*.09*H+(H<.05?Math.sin(C*2)*.012:0),v.rotation.z=D*.14,v.rotation.x=O?-.25:0}}}var Kh=class{constructor(t,n=420){this.max=n,this.pos=new Float32Array(n*3),this.col=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.vida=new Float32Array(n),this.dur=new Float32Array(n),this.base=new Float32Array(n*3),this.grav=new Float32Array(n),this.sig=0;let i=new We;i.setAttribute("position",new Fe(this.pos,3)),i.setAttribute("color",new Fe(this.col,3));for(let s=0;s<n;s++)this.pos[s*3+1]=-100;this.puntos=new Fa(i,new go({size:.42,vertexColors:!0,transparent:!0,depthWrite:!1,blending:$a,sizeAttenuation:!0})),this.puntos.frustumCulled=!1,t.add(this.puntos),this.reducido=!1}emitir(t,n,i,s,r=14,o=3.5,a=.7,c=5){this.reducido&&(r=Math.ceil(r*.3));let l=new Gt(s);for(let h=0;h<r;h++){let d=this.sig;this.sig=(this.sig+1)%this.max;let u=Math.random()*Math.PI*2,f=Math.random()*1.2-.1;this.pos[d*3]=t,this.pos[d*3+1]=n,this.pos[d*3+2]=i,this.vel[d*3]=Math.cos(u)*o*(.4+Math.random()*.6),this.vel[d*3+1]=(1.5+f*o)*(.6+Math.random()*.6),this.vel[d*3+2]=Math.sin(u)*o*(.4+Math.random()*.6),this.base[d*3]=l.r,this.base[d*3+1]=l.g,this.base[d*3+2]=l.b,this.vida[d]=this.dur[d]=a*(.7+Math.random()*.6),this.grav[d]=c}}confeti(t,n,i){["#ff4d6d","#ffd23f","#4aa8ff","#6fe39b","#ff9f43","#b58cff"].forEach(r=>this.emitir(t+(Math.random()-.5)*8,n+Math.random()*3,i,r,22,5,1.8,3))}actualizar(t){for(let n=0;n<this.max;n++){if(this.vida[n]<=0){this.col[n*3]=this.col[n*3+1]=this.col[n*3+2]=0;continue}this.vida[n]-=t,this.vel[n*3+1]-=this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let i=Math.max(0,this.vida[n]/this.dur[n]);this.col[n*3]=this.base[n*3]*i,this.col[n*3+1]=this.base[n*3+1]*i,this.col[n*3+2]=this.base[n*3+2]*i}this.puntos.geometry.attributes.position.needsUpdate=!0,this.puntos.geometry.attributes.color.needsUpdate=!0}};var jh=class{constructor(){this.ctx=null,this.activo=!0,this.maestro=null}iniciar(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.maestro=this.ctx.createGain(),this.maestro.gain.value=.5,this.maestro.connect(this.ctx.destination))}_nota(t,n,i,{tipo:s="sine",vol:r=.3,hasta:o=null}={}){if(!this.activo||!this.ctx)return;let a=this.ctx.currentTime+n,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=s,c.frequency.setValueAtTime(t,a),o&&c.frequency.exponentialRampToValueAtTime(o,a+i),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(r,a+.015),l.gain.exponentialRampToValueAtTime(1e-4,a+i),c.connect(l).connect(this.maestro),c.start(a),c.stop(a+i+.05)}algodon(){this._nota(880,0,.12,{tipo:"triangle"}),this._nota(1320,.07,.16,{tipo:"triangle"})}llegada(){[523,659,784].forEach((t,n)=>this._nota(t,n*.11,.25,{tipo:"triangle",vol:.25}))}acierto(){[523,659,784,1047].forEach((t,n)=>this._nota(t,n*.09,.3,{tipo:"triangle",vol:.28}))}error(){this._nota(300,0,.28,{tipo:"sine",vol:.25,hasta:200})}golpe(){this._nota(160,0,.18,{tipo:"square",vol:.18,hasta:70})}clic(){this._nota(660,0,.06,{tipo:"sine",vol:.18})}final(){[523,659,784,1047,784,1047,1319].forEach((t,n)=>this._nota(t,n*.13,.35,{tipo:"triangle",vol:.26}))}};var Or=typeof self!="undefined"?self:{};function Dr(){throw Error("Invalid UTF8")}function Wg(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Qh,Gf,Lb=typeof TextDecoder!="undefined",Xg,Db=typeof TextEncoder!="undefined";function c_(e){if(Db)e=(Xg||(Xg=new TextEncoder)).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var Sp,fu;t:{for(Hf=["CLOSURE_FLAGS"],tu=Or,eu=0;eu<Hf.length;eu++)if((tu=tu[Hf[eu]])==null){fu=null;break t}fu=tu}var Hf,tu,eu,bc,qg=fu&&fu[610401301];Sp=qg!=null&&qg;var Yg=Or.navigator;function ep(e){return!!Sp&&!!bc&&bc.brands.some((({brand:t})=>t&&t.indexOf(e)!=-1))}function Ai(e){var t;return(t=Or.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function ar(){return!!Sp&&!!bc&&bc.brands.length>0}function Wf(){return ar()?ep("Chromium"):(Ai("Chrome")||Ai("CriOS"))&&!(!ar()&&Ai("Edge"))||Ai("Silk")}function bp(e){return bp[" "](e),e}bc=Yg&&Yg.userAgentData||null,bp[" "]=function(){};var Nb=!ar()&&(Ai("Trident")||Ai("MSIE"));!Ai("Android")||Wf(),Wf(),Ai("Safari")&&(Wf()||!ar()&&Ai("Coast")||!ar()&&Ai("Opera")||!ar()&&Ai("Edge")||(ar()?ep("Microsoft Edge"):Ai("Edg/"))||ar()&&ep("Opera"));var l_={},mc=null;function Ub(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);let i=new Uint8Array(n),s=0;return(function(r,o){function a(l){for(;c<r.length;){let h=r.charAt(c++),d=mc[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}h_();let c=0;for(;;){let l=a(-1),h=a(0),d=a(64),u=a(64);if(u===64&&l===-1)break;o(l<<2|h>>4),d!=64&&(o(h<<4&240|d>>2),u!=64&&o(d<<6&192|u))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function h_(){if(!mc){mc={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));l_[n]=i;for(let s=0;s<i.length;s++){let r=i[s];mc[r]===void 0&&(mc[r]=s)}}}}var u_=typeof Uint8Array!="undefined",d_=!Nb&&typeof btoa=="function";function $g(e){if(!d_){var t;t===void 0&&(t=0),h_(),t=l_[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let c=0,l=0;for(;c<e.length-2;c+=3){var s=e[c],r=e[c+1],o=e[c+2],a=t[s>>2];s=t[(3&s)<<4|r>>4],r=t[(15&r)<<2|o>>6],o=t[63&o],n[l++]=a+s+r+o}switch(a=0,o=i,e.length-c){case 2:o=t[(15&(a=e[c+1]))<<2]||i;case 1:e=e[c],n[l]=t[e>>2]+t[(3&e)<<4|a>>4]+o+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}var Zg=/[-_.]/g,Fb={"-":"+",_:"/",".":"="};function Ob(e){return Fb[e]||""}function f_(e){if(!d_)return Ub(e);Zg.test(e)&&(e=e.replace(Zg,Ob)),e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Cc(e){return u_&&e!=null&&e instanceof Uint8Array}var Vo={};function Br(){return Jg||(Jg=new Ls(null,Vo))}function Ep(e){p_(Vo);var t=e.g;return(t=t==null||Cc(t)?t:typeof t=="string"?f_(t):null)==null?t:e.g=t}var Ls=class{h(){return new Uint8Array(Ep(this)||0)}constructor(e,t){if(p_(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}},Jg,nu;function p_(e){if(e!==Vo)throw Error("illegal external caller")}function m_(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function np(e){return m_(e=Error(e),"warning"),e}var Eu=typeof Symbol=="function"&&typeof Symbol()=="symbol",Bb=new Set;function Rc(e,t,n=!1,i=!1){return e=typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t,n&&Bb.add(e),e}var zb=Rc("jas",void 0,!0,!0),Kg=Rc(void 0,"0di"),Xf=Rc(void 0,"2ex"),dc=Rc(void 0,"1oa",!0),Go=Rc(void 0,Symbol(),!0),kt=Eu?zb:"Ga",g_={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},__=Object.defineProperties;function Tu(e,t){Eu||kt in e||__(e,g_),e[kt]|=t}function on(e,t){Eu||kt in e||__(e,g_),e[kt]=t}function Ko(e){return Tu(e,34),e}function kb(e,t){on(t,-30975&(0|e))}function ip(e,t){on(t,-30941&(34|e))}function Tp(){return typeof BigInt=="function"}function ei(e){return Array.prototype.slice.call(e)}var wp,Ic={},x_={};function jg(e){return!(!e||typeof e!="object"||e.Ia!==x_)}function Ap(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function Cp(e,t){if(e!=null){if(typeof e=="string")e=e?new Ls(e,Vo):Br();else if(e.constructor!==Ls)if(Cc(e))e=e.length?new Ls(new Uint8Array(e),Vo):Br();else{if(!t)throw Error();e=void 0}}return e}function pu(e){return!(!Array.isArray(e)||e.length)&&!!(1&(0|e[kt]))}var Qg=[];function pr(e){if(2&e)throw Error()}on(Qg,55),wp=Object.freeze(Qg);var mu=class e{constructor(t,n,i){this.l=0,this.g=t,this.h=n,this.m=i}next(){if(this.l<this.g.length){let t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new e(this.g,this.h,this.m)}};function Rp(e){return Go?e[Go]:void 0}var Vb=Object.freeze({});function wu(e){return e.Qa=!0,e}var Gb=wu((e=>typeof e=="number")),t1=wu((e=>typeof e=="string")),Hb=wu((e=>typeof e=="boolean")),Au=typeof Or.BigInt=="function"&&typeof Or.BigInt(0)=="bigint",sp=wu((e=>Au?e>=Xb&&e<=Yb:e[0]==="-"?e1(e,Wb):e1(e,qb))),Wb=Number.MIN_SAFE_INTEGER.toString(),Xb=Au?BigInt(Number.MIN_SAFE_INTEGER):void 0,qb=Number.MAX_SAFE_INTEGER.toString(),Yb=Au?BigInt(Number.MAX_SAFE_INTEGER):void 0;function e1(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var $b=typeof Uint8Array.prototype.slice=="function",gu,we=0,Ye=0;function n1(e){let t=e>>>0;we=t,Ye=(e-t)/4294967296>>>0}function Ho(e){if(e<0){n1(-e);let[t,n]=Dp(we,Ye);we=t>>>0,Ye=n>>>0}else n1(e)}function Ip(e){let t=gu||(gu=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ye=0,we=t.getUint32(0,!0)}function Pp(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Ec(e,t)}function Lp(e,t){let n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=Pp(e,t))=="number"?n?-e:e:n?"-"+e:e}function Ec(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Tp()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+i1(n)+i1(e));return n}function i1(e){return e=String(e),"0000000".slice(e.length)+e}function Cu(e){if(e.length<16)Ho(Number(e));else if(Tp())e=BigInt(e),we=Number(e&BigInt(4294967295))>>>0,Ye=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");Ye=we=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));Ye*=1e6,we=1e6*we+r,we>=4294967296&&(Ye+=Math.trunc(we/4294967296),Ye>>>=0,we>>>=0)}if(t){let[i,s]=Dp(we,Ye);we=i,Ye=s}}}function Dp(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}var Np=typeof BigInt=="function"?BigInt.asIntN:void 0,Zb=typeof BigInt=="function"?BigInt.asUintN:void 0,Fo=Number.isSafeInteger,Ru=Number.isFinite,_u=Math.trunc;function mr(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function v_(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}var Jb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Iu(e){switch(typeof e){case"bigint":return!0;case"number":return Ru(e);case"string":return Jb.test(e);default:return!1}}function jo(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Ru(e)?0|e:void 0}function y_(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Ru(e)?e>>>0:void 0}function s1(e){if(e[0]==="-")return!1;let t=e.length;return t<20||t===20&&Number(e.substring(0,6))<184467}function Up(e){return e=_u(e),Fo(e)||(Ho(e),e=Lp(we,Ye)),e}function Fp(e){var t=_u(Number(e));if(Fo(t))return String(t);if((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),t=e.length,!(e[0]==="-"?t<20||t===20&&Number(e.substring(0,7))>-922337:t<19||t===19&&Number(e.substring(0,6))<922337))if(Cu(e),e=we,2147483648&(t=Ye))if(Tp())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=Dp(e,t);e="-"+Ec(n,i)}else e=Ec(e,t);return e}function xu(e){return e==null?e:typeof e=="bigint"?(sp(e)?e=Number(e):(e=Np(64,e),e=sp(e)?Number(e):String(e)),e):Iu(e)?typeof e=="number"?Up(e):Fp(e):void 0}function Kb(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(Zb(64,e));if(Iu(e)){if(t==="string")return t=_u(Number(e)),Fo(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),s1(e)||(Cu(e),e=Ec(we,Ye))),e;if(t==="number")return(e=_u(e))>=0&&Fo(e)?e:(function(n){if(n<0){Ho(n);var i=Ec(we,Ye);return n=Number(i),Fo(n)?n:i}return s1(i=String(n))?i:(Ho(n),Pp(we,Ye))})(e)}}function M_(e){if(typeof e!="string")throw Error();return e}function Qo(e){if(e!=null&&typeof e!="string")throw Error();return e}function Wo(e){return e==null||typeof e=="string"?e:void 0}function Op(e,t,n,i){if(e!=null&&typeof e=="object"&&e.W===Ic)return e;if(!Array.isArray(e))return n?2&i?((e=t[Kg])||(Ko((e=new t).u),e=t[Kg]=e),t=e):t=new t:t=void 0,t;let s=n=0|e[kt];return s===0&&(s|=32&i),s|=2&i,s!==n&&on(e,s),new t(e)}function jb(e,t,n){if(t)t:{if(!Iu(t=e))throw np("int64");switch(typeof t){case"string":t=Fp(t);break t;case"bigint":if(e=t=Np(64,t),t1(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Gb(e)&&!Number.isSafeInteger(e))throw Error(String(e));t=Au?BigInt(t):Hb(t)?t?"1":"0":t1(t)?t.trim()||"0":String(t);break t;default:t=Up(t)}}else t=xu(e);return typeof(n=(e=t)==null?n?0:void 0:e)=="string"&&Fo(t=+n)?t:n}var Qb={},tE=(function(){try{return bp(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),vc=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},eE=tE?(Object.setPrototypeOf(vc.prototype,Map.prototype),Object.defineProperties(vc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),vc):class extends Map{constructor(){super()}};function r1(e){return e}function qf(e){if(2&e.L)throw Error("Cannot mutate an immutable Map")}var Ri=class extends eE{constructor(e,t,n=r1,i=r1){super();let s=0|e[kt];s|=64,on(e,s),this.L=s,this.S=t,this.R=n,this.Y=this.S?nE:i;for(let r=0;r<e.length;r++){let o=e[r],a=n(o[0],!1,!0),c=o[1];t?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,s),super.set(a,c)}}na(e=o1){if(this.size!==0)return this.X(e)}X(e=o1){let t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){qf(this),super.clear()}delete(e){return qf(this),super.delete(this.R(e,!0,!1))}entries(){var e=this.ma();return new mu(e,iE,this)}keys(){return this.Ha()}values(){var e=this.ma();return new mu(e,Ri.prototype.get,this)}forEach(e,t){super.forEach(((n,i)=>{e.call(t,this.get(i),i,this)}))}set(e,t){return qf(this),(e=this.R(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.Y(t,!0,!0,this.S,!1,this.L))}Na(e){let t=this.R(e[0],!1,!0);e=e[1],e=this.S?e===void 0?null:e:this.Y(e,!1,!0,void 0,!1,this.L),super.set(t,e)}has(e){return super.has(this.R(e,!1,!1))}get(e){e=this.R(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.S;return n?((n=this.Y(t,!1,!0,n,this.ra,this.L))!==t&&super.set(e,n),n):t}}ma(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function nE(e,t,n,i,s,r){return e=Op(e,i,n,r),s&&(e=Lu(e)),e}function o1(e){return e}function iE(e){return[e,this.get(e)]}var a1,rp,c1;function l1(){return a1||(a1=new Ri(Ko([]),void 0,void 0,void 0,Qb))}function Bp(e,t,n,i,s){if(e!=null){if(Array.isArray(e))e=pu(e)?void 0:s&&2&(0|e[kt])?e:zp(e,t,n,i!==void 0,s);else if(Ap(e)){let r={};for(let o in e)r[o]=Bp(e[o],t,n,i,s);e=r}else e=t(e,i);return e}}function zp(e,t,n,i,s){let r=i||n?0|e[kt]:0,o=i?!!(32&r):void 0;i=ei(e);for(let a=0;a<i.length;a++)i[a]=Bp(i[a],t,n,o,s);return n&&((e=Rp(e))&&(i[Go]=ei(e)),n(r,i)),i}function sE(e){return Bp(e,S_,void 0,void 0,!1)}function S_(e){return e.W===Ic?e.toJSON():e instanceof Ri?e.na(sE):(function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return sp(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(pu(t))return}else{if(Cc(t))return $g(t);if(t instanceof Ls){let n=t.g;return n==null?"":typeof n=="string"?n:t.g=$g(n)}if(t instanceof Ri)return t.na()}}return t})(e)}function b_(e){return zp(e,S_,void 0,void 0,!1)}function lr(e,t,n){return e=E_(e,t[0],t[1],n?1:2),t!==rp&&n&&Tu(e,16384),e}function E_(e,t,n,i){if(e==null){var s=96;n?(e=[n],s|=512):e=[],t&&(s=-33521665&s|(1023&t)<<15)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(s=0|e[kt]))throw Error("farr");if(64&s)return e;if(i===1||i===2||(s|=64),n&&(s|=512,n!==e[0]))throw Error("mid");t:{if(i=(n=e).length){let r=i-1;if(Ap(n[r])){if((t=r-(512&(s|=256)?0:-1))>=1024)throw Error("pvtlmt");s=-33521665&s|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,i-(512&s?0:-1)))>1024)throw Error("spvt");s=-33521665&s|(1023&t)<<15}}}return on(e,s),e}function op(e,t,n=ip){if(e!=null){if(u_&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=0|e[kt];return 2&i?e:(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),t?(on(e,-12293&(34|i)),e):zp(e,op,4&i?ip:n,!0,!0))}return e.W===Ic?e=2&(i=0|(n=e.u)[kt])?e:new e.constructor(Pu(n,i,!0)):e instanceof Ri&&!(2&e.L)&&(n=Ko(e.X(op)),e=new Ri(n,e.S,e.R,e.Y)),e}}function Pu(e,t,n){let i=n||2&t?ip:kb,s=!!(32&t);return e=(function(r,o,a){let c=ei(r);var l=c.length;let h=256&o?c[l-1]:void 0;for(l+=h?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(h){o=c[o]={};for(let d in h)o[d]=a(h[d])}return(r=Rp(r))&&(c[Go]=ei(r)),c})(e,t,(r=>op(r,s,i))),Tu(e,32|(n?2:0)),e}function Lu(e){let t=e.u,n=0|t[kt];return 2&n?new e.constructor(Pu(t,n,!1)):e}function Xo(e,t){return Fs(e=e.u,0|e[kt],t)}function Fs(e,t,n,i){if(n===-1)return null;var s=n+(512&t?0:-1);let r=e.length-1;return s>=r&&256&t?e[r][n]:i&&256&t&&(t=e[r][n])!=null?(e[s]!=null&&Xf!=null&&((s=(e=nu!=null?nu:nu={})[Xf]||0)>=4||(e[Xf]=s+1,m_(e=Error(),"incident"),(function(o){Or.setTimeout((()=>{throw o}),0)})(e))),t):s<=r?e[s]:void 0}function Pe(e,t,n){let i=e.u,s=0|i[kt];return pr(s),Ve(i,s,t,n),e}function Ve(e,t,n,i){let s=512&t?0:-1,r=n+s;var o=e.length-1;return r>=o&&256&t?(e[o][n]=i,t):r<=o?(e[r]=i,256&t&&n in(e=e[o])&&delete e[n],t):(i!==void 0&&(n>=(o=t>>15&1023||536870912)?i!=null&&(e[o+s]={[n]:i},on(e,t|=256)):e[r]=i),t)}function au(e,t){let n=0|(e=e.u)[kt],i=Fs(e,n,t),s=mr(i);return s!=null&&s!==i&&Ve(e,n,t,s),s}function T_(e){let t=0|(e=e.u)[kt],n=Fs(e,t,1),i=Cp(n,!0);return i!=null&&i!==n&&Ve(e,t,1,i),i}function Nr(){return Vb===void 0?2:4}function Ur(e,t,n,i,s){let r=e.u,o=2&(e=0|r[kt])?1:i;s=!!s;let a=0|(i=kp(r,e,t))[kt];if(!(4&a)){4&a&&(i=ei(i),a=Ds(a,e),e=Ve(r,e,t,i));let c=0,l=0;for(;c<i.length;c++){let h=n(i[c]);h!=null&&(i[l++]=h)}l<c&&(i.length=l),a=Vp(a,e),n=-4097&(20|a),a=n&=-8193,on(i,a),2&a&&Object.freeze(i)}return o===1||o===4&&32&a?Ps(a)||(s=a,a|=2,a!==s&&on(i,a),Object.freeze(i)):(o===2&&Ps(a)&&(i=ei(i),a=Ds(a,e),a=hr(a,e,s),on(i,a),e=Ve(r,e,t,i)),Ps(a)||(t=a,a=hr(a,e,s),a!==t&&on(i,a))),i}function kp(e,t,n,i){return e=Fs(e,t,n,i),Array.isArray(e)?e:wp}function Vp(e,t){return e===0&&(e=Ds(e,t)),1|e}function Ps(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function w_(e){e=ei(e);for(let t=0;t<e.length;t++){let n=e[t]=ei(e[t]);Array.isArray(n[1])&&(n[1]=Ko(n[1]))}return e}function ap(e,t,n,i){let s=0|(e=e.u)[kt];pr(s),Ve(e,s,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ta(e,t,n,i,s){pr(t);var r=!(!(64&t)&&16384&t);let o=(s=kp(e,t,n,s))!==wp;if(r||!o){let a=r=o?0|s[kt]:0;(!o||2&a||Ps(a)||4&a&&!(32&a))&&(s=ei(s),a=Ds(a,t),t=Ve(e,t,n,s)),a=-13&Vp(a,t),a=hr(i?-17&a:16|a,t,!0),a!==r&&on(s,a)}return s}function Yf(e,t){var n=fx;return Hp(Gp(e=e.u),e,0|e[kt],n)===t?t:-1}function Gp(e){var n;if(Eu)return(n=e[dc])!=null?n:e[dc]=new Map;if(dc in e)return e[dc];let t=new Map;return Object.defineProperty(e,dc,{value:t}),t}function A_(e,t,n,i){let s=Gp(e),r=Hp(s,e,t,n);return r!==i&&(r&&(t=Ve(e,t,r)),s.set(n,i)),t}function Hp(e,t,n,i){let s=e.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){let o=i[r];Fs(t,n,o)!=null&&(s!==0&&(n=Ve(t,n,s)),s=o)}return e.set(i,s),s}function Wp(e,t,n,i){let s,r=0|e[kt];if((i=Fs(e,r,n,i))!=null&&i.W===Ic)return(t=Lu(i))!==i&&Ve(e,r,n,t),t.u;if(Array.isArray(i)){let o=0|i[kt];s=2&o?lr(Pu(i,o,!1),t,!0):64&o?i:lr(s,t,!0)}else s=lr(void 0,t,!0);return s!==i&&Ve(e,r,n,s),s}function C_(e,t,n,i){let s=0|(e=e.u)[kt];return(t=Op(i=Fs(e,s,n,i),t,!1,s))!==i&&t!=null&&Ve(e,s,n,t),t}function pe(e,t,n,i=!1){if((t=C_(e,t,n,i))==null)return t;if(!(2&(i=0|(e=e.u)[kt]))){let s=Lu(t);s!==t&&Ve(e,i,n,t=s)}return t}function R_(e,t,n,i,s,r,o){e=e.u;var a=!!(2&t);let c=a?1:s;r=!!r,o&&(o=!a);var l=0|(s=kp(e,t,i))[kt];if(!(a=!!(4&l))){var h=s,d=t;let u=!!(2&(l=Vp(l,t)));u&&(d|=2);let f=!u,g=!0,y=0,m=0;for(;y<h.length;y++){let p=Op(h[y],n,!1,d);if(p instanceof n){if(!u){let S=!!(2&(0|p.u[kt]));f&&(f=!S),g&&(g=S)}h[m++]=p}}m<y&&(h.length=m),l|=4,l=g?16|l:-17&l,on(h,l=f?8|l:-9&l),u&&Object.freeze(h)}if(o&&!(8&l||!s.length&&(c===1||c===4&&32&l))){for(Ps(l)&&(s=ei(s),l=Ds(l,t),t=Ve(e,t,i,s)),n=s,o=l,h=0;h<n.length;h++)(l=n[h])!==(d=Lu(l))&&(n[h]=d);o|=8,on(n,o=n.length?-17&o:16|o),l=o}return c===1||c===4&&32&l?Ps(l)||(t=l,(l|=!s.length||16&l&&(!a||32&l)?2:2048)!==t&&on(s,l),Object.freeze(s)):(c===2&&Ps(l)&&(on(s=ei(s),l=hr(l=Ds(l,t),t,r)),t=Ve(e,t,i,s)),Ps(l)||(i=l,(l=hr(l,t,r))!==i&&on(s,l))),s}function Ns(e,t,n){let i=0|e.u[kt];return R_(e,i,t,n,Nr(),!1,!(2&i))}function Wt(e,t,n,i){return i==null&&(i=void 0),Pe(e,n,i)}function yc(e,t,n,i){i==null&&(i=void 0);t:{let s=0|(e=e.u)[kt];if(pr(s),i==null){let r=Gp(e);if(Hp(r,e,s,n)!==t)break t;r.set(n,0)}else s=A_(e,s,n,t);Ve(e,s,t,i)}}function Ds(e,t){return-2049&(e=32|(2&t?2|e:-3&e))}function hr(e,t,n){return 32&t&&n||(e&=-33),e}function vu(e,t,n,i){let s=0|e.u[kt];pr(s),e=R_(e,s,n,t,2,!0),i=i!=null?i:new n,e.push(i),e[kt]=2&(0|i.u[kt])?-9&e[kt]:-17&e[kt]}function Ci(e,t){return jo(Xo(e,t))}function Ii(e,t){return Wo(Xo(e,t))}function Ke(e,t){var n;return(n=au(e,t))!=null?n:0}function Tc(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);Pe(e,t,n)}function gs(e,t,n){if(n!=null){if(typeof n!="number"||!Ru(n))throw np("int32");n|=0}Pe(e,t,n)}function Ft(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);Pe(e,t,n)}function yu(e,t,n){{let o=e.u,a=0|o[kt];if(pr(a),n==null)Ve(o,a,t);else{var i=e=0|n[kt],s=Ps(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=ei(n),i=0,e=hr(e=Ds(e,a),a,!0),r=!1),e|=21,s=0;s<n.length;s++){let c=n[s],l=M_(c);Object.is(c,l)||(r&&(n=ei(n),i=0,e=hr(e=Ds(e,a),a,!0),r=!1),n[s]=l)}e!==i&&(r&&(n=ei(n),e=hr(e=Ds(e,a),a,!0)),on(n,e)),Ve(o,a,t,n)}}}function Du(e,t,n){pr(0|e.u[kt]),Ur(e,t,Wo,2,!0).push(M_(n))}function I_(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function Xp(){return Error("Failed to read varint, encoding is invalid.")}function P_(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function qp(e){if(typeof e=="string")return{buffer:f_(e),N:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),N:!1};if(e.constructor===Uint8Array)return{buffer:e,N:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),N:!1};if(e.constructor===Ls)return{buffer:Ep(e)||new Uint8Array(0),N:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),N:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Yp(e,t){let n,i=0,s=0,r=0,o=e.h,a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Fr(e,a),n<128)return t(i>>>0,s>>>0);throw Xp()}function $p(e){let t=0,n=e.g,i=n+10,s=e.h;for(;n<i;){let r=s[n++];if(t|=r,(128&r)==0)return Fr(e,n),!!(127&t)}throw Xp()}function ur(e){let t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Xp();return Fr(e,n),s}function Us(e){return ur(e)>>>0}function cp(e){var t=e.h;let n=e.g,i=t[n],s=t[n+1],r=t[n+2];return t=t[n+3],Fr(e,e.g+4),(i<<0|s<<8|r<<16|t<<24)>>>0}function lp(e){var t=cp(e);e=2*(t>>31)+1;let n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function rE(e){return ur(e)}function $f(e,t,{ba:n=!1}={}){e.ba=n,t&&(t=qp(t),e.h=t.buffer,e.m=t.N,e.j=0,e.l=e.h.length,e.g=e.j)}function Fr(e,t){if(e.g=t,t>e.l)throw P_(e.l,t)}function L_(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);let n=e.g,i=n+t;if(i>e.l)throw P_(t,e.l-n);return e.g=i,n}function D_(e,t){if(t==0)return Br();var n=L_(e,t);return e.ba&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):$b?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?Br():new Ls(n,Vo)}Ri.prototype.toJSON=void 0,Ri.prototype.Ia=x_;var h1=[];function N_(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Us(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw I_(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function cu(e){switch(e.h){case 0:e.h!=0?cu(e):$p(e.g);break;case 1:Fr(e=e.g,e.g+8);break;case 2:if(e.h!=2)cu(e);else{var t=Us(e.g);Fr(e=e.g,e.g+t)}break;case 5:Fr(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!N_(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}cu(e)}break;default:throw I_(e.h,e.l)}}function Pc(e,t,n){let i=e.g.l,s=Us(e.g),r=e.g.g+s,o=r-i;if(o<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),o=r-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=r,e.g.l=i,t}function Zp(e){var t=Us(e.g),n=L_(e=e.g,t);if(e=e.h,Lb){var i,s=e;(i=Gf)||(i=Gf=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(Qh===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Qh=!0}catch{Qh=!1}}throw!Qh&&(Gf=void 0),a}}else{t=(r=n)+t,n=[];let a,c=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?Dr():(a=e[r++],o<194||(192&a)!=128?(r--,Dr()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?Dr():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,Dr()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?Dr():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,Dr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Dr(),n.length>=8192&&(c=Wg(c,n),n.length=0)}r=Wg(c,n)}return r}function U_(e){let t=Us(e.g);return D_(e.g,t)}function Nu(e,t,n){var i=Us(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var iu=[];function oE(e){return e}var Oo;function Xi(e,t,n){t.g?t.m(e,t.g,t.h,n):t.m(e,t.h,n)}var Lt=class{constructor(e,t){this.u=E_(e,t)}toJSON(){let e=!Oo;try{return e&&(Oo=b_),F_(this)}finally{e&&(Oo=void 0)}}l(){var e=zE;return e.g?e.l(this,e.g,e.h,!0):e.l(this,e.h,e.defaultValue,!0)}clone(){let e=this.u;return new this.constructor(Pu(e,0|e[kt],!1))}N(){return!!(2&(0|this.u[kt]))}};function F_(e){var t=e.u;{t=(e=Oo(t))!==t;let l=e.length;if(l){var n=e[l-1],i=Ap(n);i?l--:n=void 0;var s=e;if(i){t:{var r,o=n,a=!1;if(o)for(let h in o)isNaN(+h)?(r!=null?r:r={})[h]=o[h]:(i=o[h],Array.isArray(i)&&(pu(i)||jg(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((r!=null?r:r={})[h]=i));if(a||(r=o),r)for(let h in r){a=r;break t}a=null}o=a==null?n!=null:a!==n}for(;l>0&&((r=s[l-1])==null||pu(r)||jg(r)&&r.size===0);l--)var c=!0;(s!==e||o||c)&&(t?(c||o||a)&&(s.length=l):s=Array.prototype.slice.call(s,0,l),a&&s.push(a)),c=s}else c=e}return c}function u1(e){return e?/^\d+$/.test(e)?(Cu(e),new hp(we,Ye)):null:d1||(d1=new hp(0,0))}Lt.prototype.W=Ic,Lt.prototype.toString=function(){try{return Oo=oE,F_(this).toString()}finally{Oo=void 0}};var hp=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},d1;function f1(e){return e?/^-?\d+$/.test(e)?(Cu(e),new up(we,Ye)):null:p1||(p1=new up(0,0))}var up=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},p1;function Bo(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function ea(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Uu(e,t){if(t>=0)ea(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function wc(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function qo(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function pi(e,t,n){ea(e.g,8*t+n)}function Jp(e,t){return pi(e,t,2),t=e.g.end(),qo(e,t),t.push(e.h),t}function Kp(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Fu(e,t,n){pi(e,t,2),ea(e.g,n.length),qo(e,e.g.end()),qo(e,n)}function Mu(e,t,n,i){n!=null&&(t=Jp(e,t),i(n,e),Kp(e,t))}function qi(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var jp=qi(),O_=qi(),Qp=qi(),tm=qi(),B_=qi(),z_=qi(),em=qi(),k_=qi(),V_=qi(),na=class{constructor(e,t,n){this.g=e,this.h=t,e=jp,this.l=!!e&&n===e||!1}};function Ou(e,t){return new na(e,t,jp)}function G_(e,t,n,i,s){Mu(e,n,W_(t,i),s)}var aE=Ou((function(e,t,n,i,s){return e.h===2&&(Pc(e,Wp(t,i,n),s),!0)}),G_),cE=Ou((function(e,t,n,i,s){return e.h===2&&(Pc(e,Wp(t,i,n,!0),s),!0)}),G_),Bu=Symbol(),nm=Symbol(),m1=Symbol(),g1=Symbol(),gc,_c;function zr(e,t,n,i){var s=i[e];if(s)return s;(s={}).Pa=i,s.V=(function(d){switch(typeof d){case"boolean":return rp||(rp=[0,void 0,!0]);case"number":return d>0?void 0:d===0?c1||(c1=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ga=r,typeof(r=i[++o])=="function"&&(s.la=!0,gc!=null||(gc=r),_c!=null||(_c=i[o+1]),r=i[o+=2]));let a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)a[r[c]]=r;r=i[++o]}for(c=1;r!==void 0;){let d;typeof r=="number"&&(c+=r,r=i[++o]);var l=void 0;if(r instanceof na?d=r:(d=aE,o--),d==null?void 0:d.l){r=i[++o],l=i;var h=o;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);c<h;c++){let u=a[c];l?n(s,c,d,l,u):t(s,c,d,u)}}return i[e]=s}function H_(e){return Array.isArray(e)?e[0]instanceof na?e:[cE,e]:[e,void 0]}function W_(e,t){return e instanceof Lt?e.u:Array.isArray(e)?lr(e,t,!1):void 0}function im(e,t,n,i){let s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function sm(e,t,n,i,s){let r=n.g,o,a;e[t]=(c,l,h)=>r(c,l,h,a||(a=zr(nm,im,sm,i).V),o||(o=rm(i)),s)}function rm(e){let t=e[m1];if(t!=null)return t;let n=zr(nm,im,sm,e);return t=n.la?(i,s)=>gc(i,s,n):(i,s)=>{let r=0|i[kt];for(;N_(s)&&s.h!=4;){var o=s.m,a=n[o];if(a==null){var c=n.ga;c&&(c=c[o])&&(c=lE(c))!=null&&(a=n[o]=c)}a!=null&&a(s,i,o)||(o=(a=s).l,cu(a),a.fa?a=void 0:(c=a.g.g-o,a.g.g=o,a=D_(a.g,c)),o=i,a&&((c=o[Go])?c.push(a):o[Go]=[a]))}return 16384&r&&Ko(i),!0},e[m1]=t}function lE(e){let t=(e=H_(e))[0].g;if(e=e[1]){let n=rm(e),i=zr(nm,im,sm,e).V;return(s,r,o)=>t(s,r,o,i,n)}return t}function zu(e,t,n){e[t]=n.h}function ku(e,t,n,i){let s,r,o=n.h;e[t]=(a,c,l)=>o(a,c,l,r||(r=zr(Bu,zu,ku,i).V),s||(s=X_(i)))}function X_(e){let t=e[g1];if(!t){let n=zr(Bu,zu,ku,e);t=(i,s)=>q_(i,s,n),e[g1]=t}return t}function q_(e,t,n){for(var i=0|e[kt],s=512&i?0:-1,r=e.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){let c=e[o];if(c==null)continue;let l=o-s,h=_1(n,l);h&&h(t,c,l)}if(256&i){i=e[r-1];for(let c in i)s=+c,Number.isNaN(s)||(r=i[s])!=null&&(a=_1(n,s))&&a(t,r,s)}if(e=Rp(e))for(qo(t,t.g.end()),n=0;n<e.length;n++)qo(t,Ep(e[n])||new Uint8Array(0))}function _1(e,t){var n=e[t];if(n)return n;if((n=e.ga)&&(n=n[t])){var i=(n=H_(n))[0].h;if(n=n[1]){let s=X_(n),r=zr(Bu,zu,ku,n).V;n=e.la?_c(r,s):(o,a,c)=>i(o,a,c,r,s)}else n=i;return e[t]=n}}function ia(e,t){if(Array.isArray(t)){var n=0|t[kt];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){let r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),on(t,-12289&(5|n)),2&n&&Object.freeze(t),t}}function Yn(e,t,n){return new na(e,t,n)}function sa(e,t,n){return new na(e,t,n)}function $n(e,t,n){Ve(e,0|e[kt],t,n)}var hE=Ou((function(e,t,n,i,s){return e.h===2&&(e=Pc(e,lr([void 0,void 0],i,!0),s),pr(i=0|t[kt]),(s=Fs(t,i,n))instanceof Ri?(2&s.L)!=0?((s=s.X()).push(e),Ve(t,i,n,s)):s.Na(e):Array.isArray(s)?(2&(0|s[kt])&&Ve(t,i,n,s=w_(s)),s.push(e)):Ve(t,i,n,[e]),!0)}),(function(e,t,n,i,s){if(t instanceof Ri)t.forEach(((r,o)=>{Mu(e,n,lr([o,r],i,!1),s)}));else if(Array.isArray(t))for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)&&Mu(e,n,lr(o,i,!1),s)}}));function Y_(e,t,n){if(t=(function(i){if(i==null)return i;let s=typeof i;if(s==="bigint")return String(Np(64,i));if(Iu(i)){if(s==="string")return Fp(i);if(s==="number")return Up(i)}})(t),t!=null&&(typeof t=="string"&&f1(t),t!=null))switch(pi(e,n,0),typeof t){case"number":e=e.g,Ho(t),Bo(e,we,Ye);break;case"bigint":n=BigInt.asUintN(64,t),n=new up(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Bo(e.g,n.h,n.g);break;default:n=f1(t),Bo(e.g,n.h,n.g)}}function $_(e,t,n){(t=jo(t))!=null&&t!=null&&(pi(e,n,0),Uu(e.g,t))}function Z_(e,t,n){(t=v_(t))!=null&&(pi(e,n,0),e.g.g.push(t?1:0))}function J_(e,t,n){(t=Wo(t))!=null&&Fu(e,n,c_(t))}function K_(e,t,n,i,s){Mu(e,n,W_(t,i),s)}function j_(e,t,n){(t=t==null||typeof t=="string"||Cc(t)||t instanceof Ls?t:void 0)!=null&&Fu(e,n,qp(t).buffer)}function Q_(e,t,n){return(e.h===5||e.h===2)&&(t=ta(t,0|t[kt],n,!1,!1),e.h==2?Nu(e,lp,t):t.push(lp(e.g)),!0)}var Rs=Yn((function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=cp(i);let s=cp(i);i=2*(s>>31)+1;let r=s>>>20&2047;return e=4294967296*(1048575&s)+e,$n(t,n,r==2047?e?NaN:i*(1/0):r==0?5e-324*i*e:i*Math.pow(2,r-1075)*(e+4503599627370496)),!0}),(function(e,t,n){(t=mr(t))!=null&&(pi(e,n,1),e=e.g,(n=gu||(gu=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),we=n.getUint32(0,!0),Ye=n.getUint32(4,!0),wc(e,we),wc(e,Ye))}),qi()),an=Yn((function(e,t,n){return e.h===5&&($n(t,n,lp(e.g)),!0)}),(function(e,t,n){(t=mr(t))!=null&&(pi(e,n,5),e=e.g,Ip(t),wc(e,we))}),em),uE=sa(Q_,(function(e,t,n){if((t=ia(mr,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(pi(i,s,5),i=i.g,Ip(r),wc(i,we))}}),em),om=sa(Q_,(function(e,t,n){if((t=ia(mr,t))!=null&&t.length){pi(e,n,2),ea(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Ip(t[i]),wc(n,we)}}),em),dr=Yn((function(e,t,n){return e.h===0&&($n(t,n,Yp(e.g,Lp)),!0)}),Y_,z_),Zf=Yn((function(e,t,n){return e.h===0&&($n(t,n,(e=Yp(e.g,Lp))===0?void 0:e),!0)}),Y_,z_),dE=Yn((function(e,t,n){return e.h===0&&($n(t,n,Yp(e.g,Pp)),!0)}),(function(e,t,n){if((t=Kb(t))!=null&&(typeof t=="string"&&u1(t),t!=null))switch(pi(e,n,0),typeof t){case"number":e=e.g,Ho(t),Bo(e,we,Ye);break;case"bigint":n=BigInt.asUintN(64,t),n=new hp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Bo(e.g,n.h,n.g);break;default:n=u1(t),Bo(e.g,n.h,n.g)}}),qi()),$e=Yn((function(e,t,n){return e.h===0&&($n(t,n,ur(e.g)),!0)}),$_,tm),Vu=sa((function(e,t,n){return(e.h===0||e.h===2)&&(t=ta(t,0|t[kt],n,!1,!1),e.h==2?Nu(e,ur,t):t.push(ur(e.g)),!0)}),(function(e,t,n){if((t=ia(jo,t))!=null&&t.length){n=Jp(e,n);for(let i=0;i<t.length;i++)Uu(e.g,t[i]);Kp(e,n)}}),tm),Uo=Yn((function(e,t,n){return e.h===0&&($n(t,n,(e=ur(e.g))===0?void 0:e),!0)}),$_,tm),ze=Yn((function(e,t,n){return e.h===0&&($n(t,n,$p(e.g)),!0)}),Z_,O_),zo=Yn((function(e,t,n){return e.h===0&&($n(t,n,(e=$p(e.g))===!1?void 0:e),!0)}),Z_,O_),Fn=sa((function(e,t,n){return e.h===2&&(e=Zp(e),ta(t,0|t[kt],n,!1).push(e),!0)}),(function(e,t,n){if((t=ia(Wo,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&Fu(i,s,c_(r))}}),Qp),cr=Yn((function(e,t,n){return e.h===2&&($n(t,n,(e=Zp(e))===""?void 0:e),!0)}),J_,Qp),ve=Yn((function(e,t,n){return e.h===2&&($n(t,n,Zp(e)),!0)}),J_,Qp),fn=(function(e,t,n=jp){return new na(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=lr(void 0,i,!0),ta(t,0|t[kt],n,!0).push(i),Pc(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t))for(let r=0;r<t.length;r++)K_(e,t[r],n,i,s)})),Me=Ou((function(e,t,n,i,s,r){return e.h===2&&(A_(t,0|t[kt],r,n),Pc(e,t=Wp(t,i,n),s),!0)}),K_),tx=Yn((function(e,t,n){return e.h===2&&($n(t,n,U_(e)),!0)}),j_,k_),fE=sa((function(e,t,n){return(e.h===0||e.h===2)&&(t=ta(t,0|t[kt],n,!1,!1),e.h==2?Nu(e,Us,t):t.push(Us(e.g)),!0)}),(function(e,t,n){if((t=ia(y_,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(pi(i,s,0),ea(i.g,r))}}),B_),pE=Yn((function(e,t,n){return e.h===0&&($n(t,n,(e=Us(e.g))===0?void 0:e),!0)}),(function(e,t,n){(t=y_(t))!=null&&t!=null&&(pi(e,n,0),ea(e.g,t))}),B_),Pi=Yn((function(e,t,n){return e.h===0&&($n(t,n,ur(e.g)),!0)}),(function(e,t,n){(t=jo(t))!=null&&(t=parseInt(t,10),pi(e,n,0),Uu(e.g,t))}),V_),dp=class{constructor(t,n){this.h=t,this.g=n,this.l=pe,this.m=Wt,this.defaultValue=void 0}};function Yi(e,t){return new dp(e,t)}function gr(e,t){return(n,i)=>{if(iu.length){let r=iu.pop();r.o(i),$f(r.g,n,i),n=r}else n=new class{constructor(r,o){if(h1.length){let a=h1.pop();$f(a,r,o),r=a}else r=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,$f(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ba=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({fa:r=!1}={}){this.fa=r}}(n,i);try{let r=new e,o=r.u;rm(t)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,iu.length<100&&iu.push(n)}return s}}function Gu(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};q_(this.u,t,zr(Bu,zu,ku,e)),qo(t,t.g.end());let n=new Uint8Array(t.h),i=t.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var x1=class extends Lt{constructor(e){super(e)}},v1=[0,cr,Yn((function(e,t,n){return e.h===2&&($n(t,n,(e=U_(e))===Br()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Lt){let i=t.Ra;return void(i&&(t=i(t),t!=null&&Fu(e,n,qp(t).buffer)))}if(Array.isArray(t))return}j_(e,t,n)}),k_)],Jf,y1=globalThis.trustedTypes;function M1(e){Jf===void 0&&(Jf=(function(){let n=null;if(!y1)return n;try{let i=s=>s;n=y1.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var t=Jf;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function mE(e,...t){if(t.length===0)return M1(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return M1(n)}var ex=[0,$e,Pi,ze,-1,Vu,Pi,-1],gE=class extends Lt{constructor(e){super(e)}},nx=[0,ze,ve,ze,Pi,-1,sa((function(e,t,n){return(e.h===0||e.h===2)&&(t=ta(t,0|t[kt],n,!1,!1),e.h==2?Nu(e,rE,t):t.push(ur(e.g)),!0)}),(function(e,t,n){if((t=ia(jo,t))!=null&&t.length){n=Jp(e,n);for(let i=0;i<t.length;i++)Uu(e.g,t[i]);Kp(e,n)}}),V_),ve,-1,[0,ze,-1],Pi,ze,-1],ix=[0,ve,-2],S1=class extends Lt{constructor(e){super(e)}},sx=[0],rx=[0,$e,ze,1,ze,-3],fi=class extends Lt{constructor(e){super(e,2)}},cn={};cn[336783863]=[0,ve,ze,-1,$e,[0,[1,2,3,4,5,6,7,8],Me,sx,Me,nx,Me,ix,Me,rx,Me,ex,Me,[0,ve,-2],Me,[0,ve,Pi],Me,[0,Pi,ve]],[0,ve],ze,[0,[1,3],[2,4],Me,[0,Vu],-1,Me,[0,Fn],-1,fn,[0,ve,-1]],ve];var b1=[0,Zf,-1,zo,-3,Zf,Vu,cr,Uo,Zf,-1,zo,Uo,zo,-2,cr];function mi(e,t){ap(e,2,Qo(t),"")}function Le(e,t){Du(e,3,t)}function le(e,t){Du(e,4,t)}var qn=class extends Lt{constructor(e){super(e,500)}o(e){return Wt(this,0,7,e)}},Mc=[-1,{}],E1=[0,ve,1,Mc],T1=[0,ve,Fn,Mc];function gi(e,t){vu(e,1,qn,t)}function Ue(e,t){Du(e,10,t)}function me(e,t){Du(e,15,t)}var ii=class extends Lt{constructor(e){super(e,500)}o(e){return Wt(this,0,1001,e)}},ox=[-500,fn,[-500,cr,-1,Fn,-3,[-2,cn,ze],fn,v1,Uo,-1,E1,T1,fn,[0,cr,zo],cr,b1,Uo,Fn,987,Fn],4,fn,[-500,ve,-1,[-1,{}],998,ve],fn,[-500,ve,Fn,-1,[-2,{},ze],997,Fn,-1],Uo,fn,[-500,ve,Fn,Mc,998,Fn],Fn,Uo,E1,T1,fn,[0,cr,-1,Mc],Fn,-2,b1,cr,-1,zo,[0,zo,pE],978,Mc,fn,v1];ii.prototype.g=Gu(ox);var _E=gr(ii,ox),xE=class extends Lt{constructor(e){super(e)}},ax=class extends Lt{constructor(e){super(e)}g(){return Ns(this,xE,1)}},cx=[0,fn,[0,$e,an,ve,-1]],Hu=gr(ax,cx),vE=class extends Lt{constructor(e){super(e)}},yE=class extends Lt{constructor(e){super(e)}},Kf=class extends Lt{constructor(e){super(e)}h(){return pe(this,vE,2)}g(){return Ns(this,yE,5)}},lx=gr(class extends Lt{constructor(e){super(e)}},[0,Fn,Vu,om,[0,Pi,[0,$e,-3],[0,an,-3],[0,$e,-1,[0,fn,[0,$e,-2]]],fn,[0,an,-1,ve,an]],ve,-1,dr,fn,[0,$e,an],Fn,dr]),hx=class extends Lt{constructor(e){super(e)}},ko=gr(class extends Lt{constructor(e){super(e)}},[0,fn,[0,an,-4]]),ux=class extends Lt{constructor(e){super(e)}},Lc=gr(class extends Lt{constructor(e){super(e)}},[0,fn,[0,an,-4]]),ME=class extends Lt{constructor(e){super(e)}},SE=[0,$e,-1,om,Pi],dx=class extends Lt{constructor(e){super(e)}};dx.prototype.g=Gu([0,an,-4,dr]);var bE=class extends Lt{constructor(e){super(e)}},EE=gr(class extends Lt{constructor(e){super(e)}},[0,fn,[0,1,$e,ve,cx],dr]),w1=class extends Lt{constructor(e){super(e)}},TE=class extends Lt{constructor(e){super(e)}oa(){let e=T_(this);return e==null?Br():e}},wE=class extends Lt{constructor(e){super(e)}},fx=[1,2],AE=gr(class extends Lt{constructor(e){super(e)}},[0,fn,[0,fx,Me,[0,om],Me,[0,tx],$e,ve],dr]),am=class extends Lt{constructor(e){super(e)}},px=[0,ve,$e,an,Fn,-1],A1=class extends Lt{constructor(e){super(e)}},CE=[0,ze,-1],C1=class extends Lt{constructor(e){super(e)}},lu=[1,2,3,4,5],Su=class extends Lt{constructor(e){super(e)}g(){return T_(this)!=null}h(){return Ii(this,2)!=null}},ke=class extends Lt{constructor(e){super(e)}g(){var e;return(e=v_(Xo(this,2)))!=null?e:!1}},mx=[0,tx,ve,[0,$e,dr,-1],[0,dE,dr]],je=[0,mx,ze,[0,lu,Me,rx,Me,nx,Me,ex,Me,sx,Me,ix],Pi],Wu=class extends Lt{constructor(e){super(e)}},cm=[0,je,an,-1,$e],RE=Yi(502141897,Wu);cn[502141897]=cm;var IE=gr(class extends Lt{constructor(e){super(e)}},[0,[0,Pi,-1,uE,fE],SE]),gx=class extends Lt{constructor(e){super(e)}},_x=class extends Lt{constructor(e){super(e)}},lm=[0,je,an,[0,je],ze],xx=[0,je,cm,lm,an,[0,[0,mx]]],PE=Yi(508968150,_x);cn[508968150]=xx,cn[508968149]=lm;var vx=class extends Lt{constructor(e){super(e)}},LE=Yi(513916220,vx);cn[513916220]=[0,je,xx,$e];var Lo=class extends Lt{constructor(e){super(e)}h(){return pe(this,am,2)}g(){Pe(this,2)}},yx=[0,je,px];cn[478825465]=yx;var DE=class extends Lt{constructor(e){super(e)}},Mx=class extends Lt{constructor(e){super(e)}},hm=class extends Lt{constructor(e){super(e)}},um=class extends Lt{constructor(e){super(e)}},Sx=class extends Lt{constructor(e){super(e)}},R1=[0,je,[0,je],yx,-1],bx=[0,je,an,$e],dm=[0,je,an],Ex=[0,je,bx,dm,an],NE=Yi(479097054,Sx);cn[479097054]=[0,je,Ex,R1],cn[463370452]=R1,cn[464864288]=bx;var UE=Yi(462713202,um);cn[462713202]=Ex,cn[474472470]=dm;var FE=class extends Lt{constructor(e){super(e)}},Tx=class extends Lt{constructor(e){super(e)}},wx=class extends Lt{constructor(e){super(e)}},Ax=class extends Lt{constructor(e){super(e)}},fm=[0,je,an,-1,$e],fp=[0,je,an,ze];Ax.prototype.g=Gu([0,je,dm,[0,je],cm,lm,fm,fp]);var Cx=class extends Lt{constructor(e){super(e)}},OE=Yi(456383383,Cx);cn[456383383]=[0,je,px];var Rx=class extends Lt{constructor(e){super(e)}},BE=Yi(476348187,Rx);cn[476348187]=[0,je,CE];var Ix=class extends Lt{constructor(e){super(e)}},I1=class extends Lt{constructor(e){super(e)}},Px=[0,Pi,-1],zE=Yi(458105876,class extends Lt{constructor(e){super(e)}g(){var e=this.u;let t=0|e[kt],n=2&t;return e=(function(i,s,r){var o=I1;let a=2&s,c=!1;if(r==null){if(a)return l1();r=[]}else if(r.constructor===Ri){if((2&r.L)==0||a)return r;r=r.X()}else Array.isArray(r)?c=!!(2&(0|r[kt])):r=[];if(a){if(!r.length)return l1();c||(c=!0,Ko(r))}else c&&(c=!1,r=w_(r));return c||(64&(0|r[kt])?r[kt]&=-33:32&s&&Tu(r,32)),Ve(i,s,2,o=new Ri(r,o,jb,void 0)),o})(e,t,Fs(e,t,2)),!n&&I1&&(e.ra=!0),e}});cn[458105876]=[0,Px,hE,[!0,dr,[0,ve,-1,Fn]]];var pm=class extends Lt{constructor(e){super(e)}},Lx=Yi(458105758,pm);cn[458105758]=[0,je,ve,Px];var Dx=class extends Lt{constructor(e){super(e)}},kE=Yi(443442058,Dx);cn[443442058]=[0,je,ve,$e,an,Fn,-1,ze,an],cn[514774813]=fm;var Nx=class extends Lt{constructor(e){super(e)}},VE=Yi(516587230,Nx);function pp(e,t){return t=t?t.clone():new am,e.displayNamesLocale!==void 0?Pe(t,1,Qo(e.displayNamesLocale)):e.displayNamesLocale===void 0&&Pe(t,1),e.maxResults!==void 0?gs(t,2,e.maxResults):"maxResults"in e&&Pe(t,2),e.scoreThreshold!==void 0?Ft(t,3,e.scoreThreshold):"scoreThreshold"in e&&Pe(t,3),e.categoryAllowlist!==void 0?yu(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&Pe(t,4),e.categoryDenylist!==void 0?yu(t,5,e.categoryDenylist):"categoryDenylist"in e&&Pe(t,5),t}function mm(e,t=-1,n=""){return{categories:e.map((i=>{var s,r,o,a,c,l,h;return{index:(r=(s=Ci(i,1))!=null?s:0)!=null?r:-1,score:(o=Ke(i,2))!=null?o:0,categoryName:(c=(a=Ii(i,3))!=null?a:"")!=null?c:"",displayName:(h=(l=Ii(i,4))!=null?l:"")!=null?h:""}})),headIndex:t,headName:n}}function Ux(e){var o,a,c,l,h,d,u,f,g,y,m,p,S;var t=Ur(e,3,mr,Nr()),n=Ur(e,2,jo,Nr()),i=Ur(e,1,Wo,Nr()),s=Ur(e,9,Wo,Nr());let r={categories:[],keypoints:[]};for(let w=0;w<t.length;w++)r.categories.push({score:t[w],index:(o=n[w])!=null?o:-1,categoryName:(a=i[w])!=null?a:"",displayName:(c=s[w])!=null?c:""});if((t=(l=pe(e,Kf,4))==null?void 0:l.h())&&(r.boundingBox={originX:(h=Ci(t,1))!=null?h:0,originY:(d=Ci(t,2))!=null?d:0,width:(u=Ci(t,3))!=null?u:0,height:(f=Ci(t,4))!=null?f:0,angle:0}),(g=pe(e,Kf,4))==null?void 0:g.g().length)for(let w of pe(e,Kf,4).g())r.keypoints.push({x:(y=au(w,1))!=null?y:0,y:(m=au(w,2))!=null?m:0,score:(p=au(w,4))!=null?p:0,label:(S=Ii(w,3))!=null?S:""});return r}function Xu(e){var n,i,s,r;let t=[];for(let o of Ns(e,ux,1))t.push({x:(n=Ke(o,1))!=null?n:0,y:(i=Ke(o,2))!=null?i:0,z:(s=Ke(o,3))!=null?s:0,visibility:(r=Ke(o,4))!=null?r:0});return t}function Sc(e){var n,i,s,r;let t=[];for(let o of Ns(e,hx,1))t.push({x:(n=Ke(o,1))!=null?n:0,y:(i=Ke(o,2))!=null?i:0,z:(s=Ke(o,3))!=null?s:0,visibility:(r=Ke(o,4))!=null?r:0});return t}function P1(e){return Array.from(e,(t=>t>127?t-256:t))}function L1(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var su;cn[516587230]=[0,je,fm,fp,an],cn[518928384]=fp;var GE=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Fx(){if(su===void 0)try{await WebAssembly.instantiate(GE),su=!0}catch{su=!1}return su}async function fc(e,t=mE``){let n=await Fx()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Do=class{};function Ox(){var e=navigator;return typeof OffscreenCanvas!="undefined"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function D1(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}importScripts(e.toString())}function Bx(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function zt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function N1(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=Bx(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function U1(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function ds(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function or(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}Do.forVisionTasks=function(e){return fc("vision",e)},Do.forTextTasks=function(e){return fc("text",e)},Do.forGenAiExperimentalTasks=function(e){return fc("genai_experimental",e)},Do.forGenAiTasks=function(e){return fc("genai",e)},Do.forAudioTasks=function(e){return fc("audio",e)},Do.isSimdSupported=function(){return Fx()};async function HE(e,t,n,i){return e=await(async(s,r,o,a,c)=>{if(r&&await D1(r),!self.ModuleFactory||o&&(await D1(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function jf(e,t){let n=pe(e.baseOptions,Su,1)||new Su;typeof t=="string"?(Pe(n,2,Qo(t)),Pe(n,1)):t instanceof Uint8Array&&(Pe(n,1,Cp(t,!1)),Pe(n,2)),Wt(e.baseOptions,0,1,n)}function F1(e){try{let t=e.G.length;if(t===1)throw Error(e.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.G.map((n=>n.message)).join(", "))}finally{e.G=[]}}function At(e,t){e.B=Math.max(e.B,t)}function qu(e,t){e.A=new qn,mi(e.A,"PassThroughCalculator"),Le(e.A,"free_memory"),le(e.A,"free_memory_unused_out"),Ue(t,"free_memory"),gi(t,e.A)}function Yo(e,t){Le(e.A,t),le(e.A,t+"_unused_out")}function Yu(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var hu=class{constructor(e){this.g=e,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,s,r,o,a;if(t){let c=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=pe(this.baseOptions,Su,1))!=null&&s.g()||(r=pe(this.baseOptions,Su,1))!=null&&r.h()||(o=e.baseOptions)!=null&&o.modelAssetBuffer||(a=e.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(l,h){let d=pe(l.baseOptions,C1,3);if(!d){var u=d=new C1,f=new S1;yc(u,4,lu,f)}"delegate"in h&&(h.delegate==="GPU"?(h=d,u=new gE,yc(h,2,lu,u)):(h=d,u=new S1,yc(h,4,lu,u))),Wt(l.baseOptions,0,3,d)})(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then((l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)})).then((l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),jf(this,"/model.dat"),this.m(),this.I()}));if(c.modelAssetBuffer instanceof Uint8Array)jf(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return(async function(l){let h=[];for(var d=0;;){let{done:u,value:f}=await l.read();if(u)break;h.push(f),d+=f.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(d),d=0;for(let u of h)l.set(u,d),d+=u.length;return l})(c.modelAssetBuffer).then((l=>{jf(this,l),this.m(),this.I()}))}return this.m(),this.I(),Promise.resolve()}I(){}da(){let e;if(this.g.da((t=>{e=_E(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.La(),this.g.setGraph(e,t),this.A=void 0,F1(this)}finishProcessing(){this.g.finishProcessing(),F1(this)}close(){this.A=void 0,this.g.closeGraph()}};function Xn(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}hu.prototype.close=hu.prototype.close,(function(e,t){e=e.split(".");var n,i=Or;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t})("TaskRunner",hu);var mp=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function O1(e,t,n){let i=e.g;if(n=Xn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function B1(e,t){let n=e.g,i=Xn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=Xn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=Xn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.I),n.vertexAttribPointer(e.I,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new mp(n,i,s,r)}function gm(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function Dc(e,t,n,i){return gm(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=B1(e,!0)),n=e.s):(e.v||(e.v=B1(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function fr(e,t,n){return gm(e,t),e=Xn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n!=null?n:t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n!=null?n:t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function $u(e,t,n){gm(e,t),e.A||(e.A=Xn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function _m(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var ra=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=Xn(e.createProgram(),"Failed to create WebGL program"),this.aa=O1(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.Z=O1(this,this.G(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.I=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.aa),e.deleteShader(this.Z)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},WE=class extends ra{G(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.B=fr(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=fr(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.K=Xn(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.T=Xn(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.J=Xn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.J,0),e.uniform1i(this.K,1),e.uniform1i(this.T,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},XE=class extends ra{G(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=fr(this,e),e.activeTexture(e.TEXTURE2),this.B=fr(this,e)}m(){super.m();let e=this.g;this.J=Xn(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.K=Xn(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.H=Xn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.H,0),e.uniform1i(this.J,1),e.uniform1i(this.K,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Is(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture!="undefined"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function gp(e){var t=Is(e,1);if(!t){if(t=Is(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);let i=$o(e);var n=xm(e);if($u(n,i,zx(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function zx(e){let t=Is(e,2);if(!t){let n=$o(e);t=Vx(e);let i=gp(e),s=kx(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),_p(e)}return t}function $o(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Xn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function kx(e){if(e=$o(e),!ru)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))ru=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ru=e.R16F}return ru}function xm(e){return e.l||(e.l=new ra),e.l}function Vx(e){let t=$o(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Is(e,2);return n||(n=fr(xm(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function _p(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var ru,dn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--z1===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Is(this,0)}ja(){return!!Is(this,1)}P(){return!!Is(this,2)}ia(){return(t=Is(e=this,0))||(t=gp(e),t=new Uint8Array(t.map((n=>255*n))),e.g.push(t)),t;var e,t}ha(){return gp(this)}M(){return zx(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=$o(this),s=xm(this);i.activeTexture(i.TEXTURE1),n=fr(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=kx(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),$u(s,i,n),Dc(s,i,!1,(()=>{Vx(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),_p(this)})),_m(s),_p(this)}}e.push(n)}return new dn(e,this.m,this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&$o(this).deleteTexture(Is(this,2)),z1=-1}};dn.prototype.close=dn.prototype.close,dn.prototype.clone=dn.prototype.clone,dn.prototype.getAsWebGLTexture=dn.prototype.M,dn.prototype.getAsFloat32Array=dn.prototype.ha,dn.prototype.getAsUint8Array=dn.prototype.ia,dn.prototype.hasWebGLTexture=dn.prototype.P,dn.prototype.hasFloat32Array=dn.prototype.ja,dn.prototype.hasUint8Array=dn.prototype.Fa;var z1=250,qE={color:"white",lineWidth:4,radius:6};function Qf(e){return{...qE,fillColor:(e=e||{}).color,...e}}function Cs(e,t){return e instanceof Function?e(t):e}function k1(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function pc(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function Ac(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function V1(e,t,n){var i;if(t.P())n(t.M());else{let s=t.ja()?t.ha():t.ia();e.m=(i=e.m)!=null?i:new ra;let r=Ac(e);n((e=new dn([s],t.m,!1,r.canvas,e.m,t.width,t.height)).M()),e.close()}}function G1(e,t,n,i){let s=(function(a){return a.g||(a.g=new WE),a.g})(e),r=Ac(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Dc(s,r,!0,(()=>{(function(c,l,h,d){let u=c.g;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,l),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,c.B),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),c.H&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[m,p]of f){f=m;let S=p;var y=g.next();if(y.done)return!1;let[w,v]=y.value;if(y=v,f!==w||S[0]!==y[0]||S[1]!==y[1]||S[2]!==y[2]||S[3]!==y[3])return!1}return!!g.next().done})(c.H,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.j);else{c.H=d;let f=Array(1024).fill(0);d.forEach(((g,y)=>{if(g.length!==4)throw Error(`Color at index ${y} is not a four-channel value.`);f[4*y]=g[0],f[4*y+1]=g[1],f[4*y+2]=g[2],f[4*y+3]=g[3]})),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.j),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(f))}})(s,t,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)}))}function H1(e,t,n,i){let s=Ac(e),r=(function(c){return c.h||(c.h=new XE),c.h})(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Dc(r,s,!0,(()=>{var c=r.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.j),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.B),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)}))}var ti=class{constructor(e,t){e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}ya(e,t){if(e){var n=pc(this);t=Qf(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=Cs(t.fillColor,{index:s,from:r}),n.strokeStyle=Cs(t.color,{index:s,from:r}),n.lineWidth=Cs(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,Cs(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}xa(e,t,n){if(e&&t){var i=pc(this);n=Qf(n),i.save();var s=i.canvas,r=0;for(let o of t){i.beginPath(),t=e[o.start];let a=e[o.end];t&&a&&(i.strokeStyle=Cs(n.color,{index:r,from:t,to:a}),i.lineWidth=Cs(n.lineWidth,{index:r,from:t,to:a}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}ua(e,t){let n=pc(this);t=Qf(t),n.save(),n.beginPath(),n.lineWidth=Cs(t.lineWidth,{}),n.strokeStyle=Cs(t.color,{}),n.fillStyle=Cs(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}va(e,t,n=[0,0,0,255]){this.l?(function(i,s,r,o){let a=Ac(i);V1(i,s,(c=>{G1(i,c,r,o),(c=pc(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,n,t):G1(this,e.M(),n,t)}wa(e,t,n){this.l?(function(i,s,r,o){let a=Ac(i);V1(i,s,(c=>{H1(i,c,r,o),(c=pc(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,t,n):H1(this,e.M(),t,n)}close(){var e,t,n;(e=this.g)==null||e.close(),this.g=void 0,(t=this.h)==null||t.close(),this.h=void 0,(n=this.m)==null||n.close(),this.m=void 0}};function ms(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture!="undefined"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Gx(e){var t=ms(e,0);if(!t){t=Zo(e);let n=Zu(e),i=new Uint8Array(e.width*e.height*4);$u(n,t,uu(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),_m(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function uu(e){let t=ms(e,2);if(!t){let n=Zo(e);t=du(e);let i=ms(e,1)||Gx(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),xc(e)}return t}function Zo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Xn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Zu(e){return e.l||(e.l=new ra),e.l}function du(e){let t=Zo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=ms(e,2);return n||(n=fr(Zu(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function xc(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function W1(e){let t=Zo(e);return Dc(Zu(e),t,!0,(()=>(function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}ti.prototype.close=ti.prototype.close,ti.prototype.drawConfidenceMask=ti.prototype.wa,ti.prototype.drawCategoryMask=ti.prototype.va,ti.prototype.drawBoundingBox=ti.prototype.ua,ti.prototype.drawConnectors=ti.prototype.xa,ti.prototype.drawLandmarks=ti.prototype.ya,ti.lerp=function(e,t,n,i,s){return k1(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},ti.clamp=k1;var yn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--X1===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!ms(this,0)}ka(){return!!ms(this,1)}P(){return!!ms(this,2)}Ca(){return Gx(this)}Ba(){var e=ms(this,1);return e||(uu(this),du(this),e=W1(this),xc(this),this.g.push(e),this.j=!0),e}M(){return uu(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=Zo(this),s=Zu(this);i.activeTexture(i.TEXTURE1),n=fr(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),$u(s,i,n),Dc(s,i,!1,(()=>{du(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),xc(this)})),_m(s),xc(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);uu(this),du(this),n=W1(this),xc(this)}e.push(n)}return new yn(e,this.ka(),this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ms(this,1).close(),this.m&&Zo(this).deleteTexture(ms(this,2)),X1=-1}};yn.prototype.close=yn.prototype.close,yn.prototype.clone=yn.prototype.clone,yn.prototype.getAsWebGLTexture=yn.prototype.M,yn.prototype.getAsImageBitmap=yn.prototype.Ba,yn.prototype.getAsImageData=yn.prototype.Ca,yn.prototype.hasWebGLTexture=yn.prototype.P,yn.prototype.hasImageBitmap=yn.prototype.ka,yn.prototype.hasImageData=yn.prototype.Ea;var X1=250;function $i(...e){return e.map((([t,n])=>({start:t,end:n})))}var YE=(function(e){return class extends e{La(){this.i._registerModelResourcesGraphService()}}})((q1=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:Ox()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),zt(this,i||"input_audio",(r=>{zt(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,e,t!=null?t:0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}da(e){ds(this,"__graph_config__",(t=>{e(t)})),zt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){let r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),zt(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)}))}addGpuBufferToStream(e,t,n){zt(this,t,(i=>{let[s,r]=N1(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){zt(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){zt(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){zt(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){zt(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){zt(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){zt(this,t,(i=>{zt(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){zt(this,t,(i=>{U1(this,Object.keys(e),(s=>{U1(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){zt(this,n,(s=>{zt(this,t,(r=>{let o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){zt(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)zt(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){zt(this,t,(n=>{zt(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){zt(this,n,(i=>{zt(this,t,(s=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)zt(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){ds(this,e,t),zt(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){or(this,e,t),zt(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){ds(this,e,t),zt(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){or(this,e,t),zt(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){ds(this,e,t),zt(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){or(this,e,t),zt(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){ds(this,e,t),zt(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){or(this,e,t),zt(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){ds(this,e,t),zt(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){or(this,e,t),zt(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){ds(this,e,t),zt(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){or(this,e,t),zt(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){ds(this,e,t),zt(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){or(this,e,t),zt(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ds(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),zt(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends q1{get ea(){return this.i}qa(e,t,n){zt(this,t,(i=>{let[s,r]=N1(this,e,i);this.ea._addBoundTextureAsImageToStream(i,s,r,n)}))}U(e,t){ds(this,e,t),zt(this,e,(n=>{this.ea._attachImageListener(n)}))}ca(e,t){or(this,e,t),zt(this,e,(n=>{this.ea._attachImageVectorListener(n)}))}})),q1,Li=class extends YE{};async function ce(e,t,n){var i;return(async function(s,r,o,a){return HE(s,r,o,a)})(e,(i=n.canvas)!=null?i:Ox()?void 0:document.createElement("canvas"),t,n)}function Hx(e,t,n,i){if(e.T){let r=new dx;if(n!=null&&n.regionOfInterest){if(!e.pa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ft(r,1,(s.left+s.right)/2),Ft(r,2,(s.top+s.bottom)/2),Ft(r,4,s.right-s.left),Ft(r,3,s.bottom-s.top)}else Ft(r,1,.5),Ft(r,2,.5),Ft(r,4,1),Ft(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ft(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){let[o,a]=Bx(t);n=Ke(r,3)*a/o,s=Ke(r,4)*o/a,Ft(r,4,n),Ft(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.T,i)}e.g.qa(t,e.aa,i!=null?i:performance.now()),e.finishProcessing()}function Di(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Hx(e,t,n,e.B+1)}function _s(e,t,n,i){var s;if(!((s=e.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Hx(e,t,n,i)}function Jo(e,t,n,i){var s=t.data;let r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new dn([s],n,!1,e.g.i.canvas,e.O,r,t),i?e.clone():e}var ni=class extends hu{constructor(e,t,n,i){super(e),this.g=e,this.aa=t,this.T=n,this.pa=i,this.O=new ra}l(e,t=!0){if("runningMode"in e&&Tc(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.O.close(),super.close()}};ni.prototype.close=ni.prototype.close;var Ei=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Wt(e=this.h=new Wu,0,1,t=new ke),Ft(this.h,2,.5),Ft(this.h,3,.3)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){var t,n;return"minDetectionConfidence"in e&&Ft(this.h,2,(t=e.minDetectionConfidence)!=null?t:.5),"minSuppressionThreshold"in e&&Ft(this.h,3,(n=e.minSuppressionThreshold)!=null?n:.3),this.l(e)}D(e,t){return this.j={detections:[]},Di(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},_s(this,e,n,t),this.j}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect_in"),me(e,"detections");let t=new fi;Xi(t,RE,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect_in"),le(n,"DETECTIONS:detections"),n.o(t),gi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=lx(r),this.j.detections.push(Ux(i));At(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ei.prototype.detectForVideo=Ei.prototype.F,Ei.prototype.detect=Ei.prototype.D,Ei.prototype.setOptions=Ei.prototype.o,Ei.createFromModelPath=async function(e,t){return ce(Ei,e,{baseOptions:{modelAssetPath:t}})},Ei.createFromModelBuffer=function(e,t){return ce(Ei,e,{baseOptions:{modelAssetBuffer:t}})},Ei.createFromOptions=function(e,t){return ce(Ei,e,t)};var vm=$i([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),ym=$i([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Mm=$i([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Wx=$i([474,475],[475,476],[476,477],[477,474]),Sm=$i([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),bm=$i([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Xx=$i([469,470],[470,471],[471,472],[472,469]),Em=$i([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),qx=[...vm,...ym,...Mm,...Sm,...bm,...Em],Yx=$i([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Y1(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var qe=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Wt(e=this.h=new _x,0,1,t=new ke),this.v=new gx,Wt(this.h,0,3,this.v),this.s=new Wu,Wt(this.h,0,2,this.s),gs(this.s,4,1),Ft(this.s,2,.5),Ft(this.v,2,.5),Ft(this.h,4,.5)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){var t,n,i,s;return"numFaces"in e&&gs(this.s,4,(t=e.numFaces)!=null?t:1),"minFaceDetectionConfidence"in e&&Ft(this.s,2,(n=e.minFaceDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ft(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minFacePresenceConfidence"in e&&Ft(this.v,2,(s=e.minFacePresenceConfidence)!=null?s:.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return Y1(this),Di(this,e,t),this.j}F(e,t,n){return Y1(this),_s(this,e,n,t),this.j}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect"),me(e,"face_landmarks");let t=new fi;Xi(t,PE,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect"),le(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),gi(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(let r of i)i=Lc(r),this.j.faceLandmarks.push(Xu(i));At(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{At(this,i)})),this.outputFaceBlendshapes&&(me(e,"blendshapes"),le(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{var r;if(this.outputFaceBlendshapes)for(let o of i)i=Hu(o),this.j.faceBlendshapes.push(mm((r=i.g())!=null?r:[]));At(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{At(this,i)}))),this.outputFacialTransformationMatrixes&&(me(e,"face_geometry"),le(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{var r,o,a,c,l;if(this.outputFacialTransformationMatrixes)for(let h of i)(i=pe(IE(h),ME,2))&&this.j.facialTransformationMatrixes.push({rows:(o=(r=Ci(i,1))!=null?r:0)!=null?o:0,columns:(c=(a=Ci(i,2))!=null?a:0)!=null?c:0,data:(l=Ur(i,3,mr,Nr()).slice())!=null?l:[]});At(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{At(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};qe.prototype.detectForVideo=qe.prototype.F,qe.prototype.detect=qe.prototype.D,qe.prototype.setOptions=qe.prototype.o,qe.createFromModelPath=function(e,t){return ce(qe,e,{baseOptions:{modelAssetPath:t}})},qe.createFromModelBuffer=function(e,t){return ce(qe,e,{baseOptions:{modelAssetBuffer:t}})},qe.createFromOptions=function(e,t){return ce(qe,e,t)},qe.FACE_LANDMARKS_LIPS=vm,qe.FACE_LANDMARKS_LEFT_EYE=ym,qe.FACE_LANDMARKS_LEFT_EYEBROW=Mm,qe.FACE_LANDMARKS_LEFT_IRIS=Wx,qe.FACE_LANDMARKS_RIGHT_EYE=Sm,qe.FACE_LANDMARKS_RIGHT_EYEBROW=bm,qe.FACE_LANDMARKS_RIGHT_IRIS=Xx,qe.FACE_LANDMARKS_FACE_OVAL=Em,qe.FACE_LANDMARKS_CONTOURS=qx,qe.FACE_LANDMARKS_TESSELATION=Yx;var fs=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect",!0),Wt(e=this.j=new vx,0,1,t=new ke)}get baseOptions(){return pe(this.j,ke,1)}set baseOptions(e){Wt(this.j,0,1,e)}o(e){return super.l(e)}Oa(e,t,n){let i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,Di(this,e,i!=null?i:{}),!this.h)return this.s}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect"),me(e,"stylized_image");let t=new fi;Xi(t,LE,this.j);let n=new qn;mi(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect"),le(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),gi(e,n),this.g.U("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;let c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){let l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=o[3*h],l[4*h+1]=o[3*h+1],l[4*h+2]=o[3*h+2],l[4*h+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new yn([o],!1,!1,this.g.i.canvas,this.O,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),At(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};fs.prototype.stylize=fs.prototype.Oa,fs.prototype.setOptions=fs.prototype.o,fs.createFromModelPath=function(e,t){return ce(fs,e,{baseOptions:{modelAssetPath:t}})},fs.createFromModelBuffer=function(e,t){return ce(fs,e,{baseOptions:{modelAssetBuffer:t}})},fs.createFromOptions=function(e,t){return ce(fs,e,t)};var Tm=$i([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function $1(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Z1(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function J1(e,t=!0){var s,r,o,a,c,l;let n=[];for(let h of e){var i=Hu(h);e=[];for(let d of i.g())i=t&&Ci(d,1)!=null?(s=Ci(d,1))!=null?s:0:-1,e.push({score:(r=Ke(d,2))!=null?r:0,index:i,categoryName:(a=(o=Ii(d,3))!=null?o:"")!=null?a:"",displayName:(l=(c=Ii(d,4))!=null?c:"")!=null?l:""});n.push(e)}return n}var hi=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Wt(e=this.j=new Sx,0,1,t=new ke),this.s=new um,Wt(this.j,0,2,this.s),this.C=new hm,Wt(this.s,0,3,this.C),this.v=new Mx,Wt(this.s,0,2,this.v),this.h=new DE,Wt(this.j,0,3,this.h),Ft(this.v,2,.5),Ft(this.s,4,.5),Ft(this.C,2,.5)}get baseOptions(){return pe(this.j,ke,1)}set baseOptions(e){Wt(this.j,0,1,e)}o(e){var s,r,o,a,c,l,h,d;if(gs(this.v,3,(s=e.numHands)!=null?s:1),"minHandDetectionConfidence"in e&&Ft(this.v,2,(r=e.minHandDetectionConfidence)!=null?r:.5),"minTrackingConfidence"in e&&Ft(this.s,4,(o=e.minTrackingConfidence)!=null?o:.5),"minHandPresenceConfidence"in e&&Ft(this.C,2,(a=e.minHandPresenceConfidence)!=null?a:.5),e.cannedGesturesClassifierOptions){var t=new Lo,n=t,i=pp(e.cannedGesturesClassifierOptions,(c=pe(this.h,Lo,3))==null?void 0:c.h());Wt(n,0,2,i),Wt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((l=pe(this.h,Lo,3))==null||l.g());return e.customGesturesClassifierOptions?(Wt(n=t=new Lo,0,2,i=pp(e.customGesturesClassifierOptions,(h=pe(this.h,Lo,4))==null?void 0:h.h())),Wt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((d=pe(this.h,Lo,4))==null||d.g()),this.l(e)}Ja(e,t){return $1(this),Di(this,e,t),Z1(this)}Ka(e,t,n){return $1(this),_s(this,e,n,t),Z1(this)}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect"),me(e,"hand_gestures"),me(e,"hand_landmarks"),me(e,"world_hand_landmarks"),me(e,"handedness");let t=new fi;Xi(t,NE,this.j);let n=new qn;mi(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect"),le(n,"HAND_GESTURES:hand_gestures"),le(n,"LANDMARKS:hand_landmarks"),le(n,"WORLD_LANDMARKS:world_hand_landmarks"),le(n,"HANDEDNESS:handedness"),n.o(t),gi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{var r,o,a,c;for(let l of i){i=Lc(l);let h=[];for(let d of Ns(i,ux,1))h.push({x:(r=Ke(d,1))!=null?r:0,y:(o=Ke(d,2))!=null?o:0,z:(a=Ke(d,3))!=null?a:0,visibility:(c=Ke(d,4))!=null?c:0});this.landmarks.push(h)}At(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{var r,o,a,c;for(let l of i){i=ko(l);let h=[];for(let d of Ns(i,hx,1))h.push({x:(r=Ke(d,1))!=null?r:0,y:(o=Ke(d,2))!=null?o:0,z:(a=Ke(d,3))!=null?a:0,visibility:(c=Ke(d,4))!=null?c:0});this.worldLandmarks.push(h)}At(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...J1(i,!1)),At(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{At(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...J1(i)),At(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function K1(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}hi.prototype.recognizeForVideo=hi.prototype.Ka,hi.prototype.recognize=hi.prototype.Ja,hi.prototype.setOptions=hi.prototype.o,hi.createFromModelPath=function(e,t){return ce(hi,e,{baseOptions:{modelAssetPath:t}})},hi.createFromModelBuffer=function(e,t){return ce(hi,e,{baseOptions:{modelAssetBuffer:t}})},hi.createFromOptions=function(e,t){return ce(hi,e,t)},hi.HAND_CONNECTIONS=Tm;var ui=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Wt(e=this.h=new um,0,1,t=new ke),this.s=new hm,Wt(this.h,0,3,this.s),this.j=new Mx,Wt(this.h,0,2,this.j),gs(this.j,3,1),Ft(this.j,2,.5),Ft(this.s,2,.5),Ft(this.h,4,.5)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){var t,n,i,s;return"numHands"in e&&gs(this.j,3,(t=e.numHands)!=null?t:1),"minHandDetectionConfidence"in e&&Ft(this.j,2,(n=e.minHandDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ft(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minHandPresenceConfidence"in e&&Ft(this.s,2,(s=e.minHandPresenceConfidence)!=null?s:.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Di(this,e,t),K1(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],_s(this,e,n,t),K1(this)}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect"),me(e,"hand_landmarks"),me(e,"world_hand_landmarks"),me(e,"handedness");let t=new fi;Xi(t,UE,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect"),le(n,"LANDMARKS:hand_landmarks"),le(n,"WORLD_LANDMARKS:world_hand_landmarks"),le(n,"HANDEDNESS:handedness"),n.o(t),gi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i)i=Lc(r),this.landmarks.push(Xu(i));At(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i)i=ko(r),this.worldLandmarks.push(Sc(i));At(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var c,l,h,d,u,f,g;var r=this.handedness,o=r.push;let a=[];for(let y of i){i=Hu(y);let m=[];for(let p of i.g())m.push({score:(c=Ke(p,2))!=null?c:0,index:(h=(l=Ci(p,1))!=null?l:0)!=null?h:-1,categoryName:(u=(d=Ii(p,3))!=null?d:"")!=null?u:"",displayName:(g=(f=Ii(p,4))!=null?f:"")!=null?g:""});a.push(m)}o.call(r,...a),At(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ui.prototype.detectForVideo=ui.prototype.F,ui.prototype.detect=ui.prototype.D,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=function(e,t){return ce(ui,e,{baseOptions:{modelAssetPath:t}})},ui.createFromModelBuffer=function(e,t){return ce(ui,e,{baseOptions:{modelAssetBuffer:t}})},ui.createFromOptions=function(e,t){return ce(ui,e,t)},ui.HAND_CONNECTIONS=Tm;var $x=$i([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function j1(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Q1(e){try{if(!e.C)return e.h;e.C(e.h)}finally{Yu(e)}}function ou(e,t){e=Lc(e),t.push(Xu(e))}var Be=class extends ni{constructor(e,t){super(new Li(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Wt(e=this.j=new Ax,0,1,t=new ke),this.J=new hm,Wt(this.j,0,2,this.J),this.Z=new FE,Wt(this.j,0,3,this.Z),this.s=new Wu,Wt(this.j,0,4,this.s),this.H=new gx,Wt(this.j,0,5,this.H),this.v=new Tx,Wt(this.j,0,6,this.v),this.K=new wx,Wt(this.j,0,7,this.K),Ft(this.s,2,.5),Ft(this.s,3,.3),Ft(this.H,2,.5),Ft(this.v,2,.5),Ft(this.v,3,.3),Ft(this.K,2,.5),Ft(this.J,2,.5)}get baseOptions(){return pe(this.j,ke,1)}set baseOptions(e){Wt(this.j,0,1,e)}o(e){var t,n,i,s,r,o,a;return"minFaceDetectionConfidence"in e&&Ft(this.s,2,(t=e.minFaceDetectionConfidence)!=null?t:.5),"minFaceSuppressionThreshold"in e&&Ft(this.s,3,(n=e.minFaceSuppressionThreshold)!=null?n:.3),"minFacePresenceConfidence"in e&&Ft(this.H,2,(i=e.minFacePresenceConfidence)!=null?i:.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Ft(this.v,2,(s=e.minPoseDetectionConfidence)!=null?s:.5),"minPoseSuppressionThreshold"in e&&Ft(this.v,3,(r=e.minPoseSuppressionThreshold)!=null?r:.3),"minPosePresenceConfidence"in e&&Ft(this.K,2,(o=e.minPosePresenceConfidence)!=null?o:.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Ft(this.J,2,(a=e.minHandLandmarksConfidence)!=null?a:.5),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,j1(this),Di(this,e,i),Q1(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,j1(this),_s(this,e,s,t),Q1(this)}m(){var e=new ii;Ue(e,"input_frames_image"),me(e,"pose_landmarks"),me(e,"pose_world_landmarks"),me(e,"face_landmarks"),me(e,"left_hand_landmarks"),me(e,"left_hand_world_landmarks"),me(e,"right_hand_landmarks"),me(e,"right_hand_world_landmarks");let t=new fi,n=new x1;ap(n,1,Qo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))Pe(s,2,b_(r));else{if(!(typeof r=="string"||r instanceof Ls||Cc(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ap(s,2,Cp(r,!1),Br())}})(n,this.j.g());let i=new qn;mi(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),vu(i,8,x1,n),Le(i,"IMAGE:input_frames_image"),le(i,"POSE_LANDMARKS:pose_landmarks"),le(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),le(i,"FACE_LANDMARKS:face_landmarks"),le(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),le(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),le(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),le(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),gi(e,i),qu(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{ou(s,this.h.poseLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=ko(s),o.push(Sc(s)),At(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{At(this,s)})),this.outputPoseSegmentationMasks&&(le(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Yo(this,"pose_segmentation_mask"),this.g.U("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Jo(this,s,!0,!this.C)],At(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],At(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{ou(s,this.h.faceLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{At(this,s)})),this.outputFaceBlendshapes&&(me(e,"extra_blendshapes"),le(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var a;var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Hu(s),o.push(mm((a=s.g())!=null?a:[]))),At(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{At(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{ou(s,this.h.leftHandLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=ko(s),o.push(Sc(s)),At(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{ou(s,this.h.rightHandLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=ko(s),o.push(Sc(s)),At(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{At(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Be.prototype.detectForVideo=Be.prototype.F,Be.prototype.detect=Be.prototype.D,Be.prototype.setOptions=Be.prototype.o,Be.createFromModelPath=function(e,t){return ce(Be,e,{baseOptions:{modelAssetPath:t}})},Be.createFromModelBuffer=function(e,t){return ce(Be,e,{baseOptions:{modelAssetBuffer:t}})},Be.createFromOptions=function(e,t){return ce(Be,e,t)},Be.HAND_CONNECTIONS=Tm,Be.POSE_CONNECTIONS=$x,Be.FACE_LANDMARKS_LIPS=vm,Be.FACE_LANDMARKS_LEFT_EYE=ym,Be.FACE_LANDMARKS_LEFT_EYEBROW=Mm,Be.FACE_LANDMARKS_LEFT_IRIS=Wx,Be.FACE_LANDMARKS_RIGHT_EYE=Sm,Be.FACE_LANDMARKS_RIGHT_EYEBROW=bm,Be.FACE_LANDMARKS_RIGHT_IRIS=Xx,Be.FACE_LANDMARKS_FACE_OVAL=Em,Be.FACE_LANDMARKS_CONTOURS=qx,Be.FACE_LANDMARKS_TESSELATION=Yx;var Ti=class extends ni{constructor(e,t){super(new Li(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Wt(e=this.h=new Cx,0,1,t=new ke)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){return Wt(this.h,0,2,pp(e,pe(this.h,am,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},Di(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},_s(this,e,n,t),this.j}m(){var e=new ii;Ue(e,"input_image"),Ue(e,"norm_rect"),me(e,"classifications");let t=new fi;Xi(t,OE,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Le(n,"IMAGE:input_image"),Le(n,"NORM_RECT:norm_rect"),le(n,"CLASSIFICATIONS:classifications"),n.o(t),gi(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){var a;let o={classifications:Ns(r,bE,1).map((c=>{var l,h,d,u;return mm((h=(l=pe(c,ax,4))==null?void 0:l.g())!=null?h:[],(d=Ci(c,2))!=null?d:0,(u=Ii(c,3))!=null?u:"")}))};return xu(Xo(r,2))!=null&&(o.timestampMs=(a=xu(Xo(r,2)))!=null?a:0),o})(EE(i)),At(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ti.prototype.classifyForVideo=Ti.prototype.ta,Ti.prototype.classify=Ti.prototype.sa,Ti.prototype.setOptions=Ti.prototype.o,Ti.createFromModelPath=function(e,t){return ce(Ti,e,{baseOptions:{modelAssetPath:t}})},Ti.createFromModelBuffer=function(e,t){return ce(Ti,e,{baseOptions:{modelAssetBuffer:t}})},Ti.createFromOptions=function(e,t){return ce(Ti,e,t)};var di=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect",!0),this.h=new Rx,this.embeddings={embeddings:[]},Wt(e=this.h,0,1,t=new ke)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){var t=this.h,n=pe(this.h,A1,2);return n=n?n.clone():new A1,e.l2Normalize!==void 0?Tc(n,1,e.l2Normalize):"l2Normalize"in e&&Pe(n,1),e.quantize!==void 0?Tc(n,2,e.quantize):"quantize"in e&&Pe(n,2),Wt(t,0,2,n),this.l(e)}za(e,t){return Di(this,e,t),this.embeddings}Aa(e,t,n){return _s(this,e,n,t),this.embeddings}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect"),me(e,"embeddings_out");let t=new fi;Xi(t,BE,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect"),le(n,"EMBEDDINGS:embeddings_out"),n.o(t),gi(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=AE(i),this.embeddings=(function(r){var o;return{embeddings:Ns(r,wE,1).map((a=>{var l,h,d,u,f,g,y;let c={headIndex:(h=(l=Ci(a,3))!=null?l:0)!=null?h:-1,headName:(u=(d=Ii(a,4))!=null?d:"")!=null?u:""};if(C_(a,w1,Yf(a,1))!==void 0)a=Ur(a=pe(a,w1,Yf(a,1)),1,mr,Nr()),c.floatEmbedding=a.slice();else{let m=new Uint8Array(0);c.quantizedEmbedding=(y=(g=(f=pe(a,TE,Yf(a,2)))==null?void 0:f.oa())==null?void 0:g.h())!=null?y:m}return c})),timestampMs:(o=xu(Xo(r,2)))!=null?o:0}})(i),At(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};di.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=L1(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=L1(P1(e.quantizedEmbedding),P1(t.quantizedEmbedding))}return e},di.prototype.embedForVideo=di.prototype.Aa,di.prototype.embed=di.prototype.za,di.prototype.setOptions=di.prototype.o,di.createFromModelPath=function(e,t){return ce(di,e,{baseOptions:{modelAssetPath:t}})},di.createFromModelBuffer=function(e,t){return ce(di,e,{baseOptions:{modelAssetBuffer:t}})},di.createFromOptions=function(e,t){return ce(di,e,t)};var xp=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};function t_(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function e_(e){try{let t=new xp(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Yu(e)}}xp.prototype.close=xp.prototype.close;var Un=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new pm,this.v=new Ix,Wt(this.h,0,3,this.v),Wt(e=this.h,0,1,t=new ke)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){var t,n;return e.displayNamesLocale!==void 0?Pe(this.h,2,Qo(e.displayNamesLocale)):"displayNamesLocale"in e&&Pe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=(t=e.outputCategoryMask)!=null?t:!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=(n=e.outputConfidenceMasks)!=null?n:!0),super.l(e)}I(){(function(e){var n,i,s;let t=Ns(e.da(),qn,1).filter((r=>{var o;return((o=Ii(r,1))!=null?o:"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")}));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&((s=(i=(n=pe(t[0],fi,7))==null?void 0:n.l())==null?void 0:i.g())!=null?s:new Map).forEach(((r,o)=>{var a;e.s[Number(o)]=(a=Ii(r,1))!=null?a:""}))})(this)}segment(e,t,n){let i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,t_(this),Di(this,e,i),e_(this)}Ma(e,t,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,t_(this),_s(this,e,s,t),e_(this)}Da(){return this.s}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect");let t=new fi;Xi(t,Lx,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect"),n.o(t),gi(e,n),qu(this,e),this.outputConfidenceMasks&&(me(e,"confidence_masks"),le(n,"CONFIDENCE_MASKS:confidence_masks"),Yo(this,"confidence_masks"),this.g.ca("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Jo(this,r,!0,!this.j))),At(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],At(this,i)}))),this.outputCategoryMask&&(me(e,"category_mask"),le(n,"CATEGORY_MASK:category_mask"),Yo(this,"category_mask"),this.g.U("category_mask",((i,s)=>{this.categoryMask=Jo(this,i,!1,!this.j),At(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,At(this,i)}))),me(e,"quality_scores"),le(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,At(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Un.prototype.getLabels=Un.prototype.Da,Un.prototype.segmentForVideo=Un.prototype.Ma,Un.prototype.segment=Un.prototype.segment,Un.prototype.setOptions=Un.prototype.o,Un.createFromModelPath=function(e,t){return ce(Un,e,{baseOptions:{modelAssetPath:t}})},Un.createFromModelBuffer=function(e,t){return ce(Un,e,{baseOptions:{modelAssetBuffer:t}})},Un.createFromOptions=function(e,t){return ce(Un,e,t)};var vp=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};vp.prototype.close=vp.prototype.close;var $E=class extends Lt{constructor(e){super(e)}},No=[0,$e,-2],bu=[0,Rs,-3,ze,Rs,-1],n_=[0,bu],i_=[0,bu,$e,-1],tp=class extends Lt{constructor(e){super(e)}},s_=[0,Rs,-1,ze],ZE=class extends Lt{constructor(e){super(e)}},r_=class extends Lt{constructor(e){super(e)}},yp=[1,2,3,4,5,6,7,8,9,10,14,15],Zx=class extends Lt{constructor(e){super(e)}};Zx.prototype.g=Gu([0,fn,[0,yp,Me,bu,Me,[0,bu,No],Me,n_,Me,[0,n_,No],Me,s_,Me,[0,Rs,-3,ze,Pi],Me,[0,Rs,-3,ze],Me,[0,ve,Rs,-2,ze,$e,ze,-1,2,Rs,No],Me,i_,Me,[0,i_,No],Rs,No,ve,Me,[0,Rs,-3,ze,No,-1],Me,[0,fn,s_]],ve,[0,ve,$e,-1,ze]]);var ps=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new pm,this.s=new Ix,Wt(this.h,0,3,this.s),Wt(e=this.h,0,1,t=new ke)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){var t,n;return"outputCategoryMask"in e&&(this.outputCategoryMask=(t=e.outputCategoryMask)!=null?t:!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=(n=e.outputConfidenceMasks)!=null?n:!0),super.l(e)}segment(e,t,n,i){let s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Zx;let r=new r_;var o=new $E;if(gs(o,1,255),Wt(r,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new tp;Tc(a,3,!0),Ft(a,1,t.keypoint.x),Ft(a,2,t.keypoint.y),yc(r,5,yp,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new ZE,t.scribble))Tc(t=new tp,3,!0),Ft(t,1,a.x),Ft(t,2,a.y),vu(o,1,tp,t);yc(r,15,yp,o)}vu(i,1,r_,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),Di(this,e,s);t:{try{let l=new vp(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{Yu(this)}c=void 0}return c}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"roi_in"),Ue(e,"norm_rect_in");let t=new fi;Xi(t,Lx,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Le(n,"IMAGE:image_in"),Le(n,"ROI:roi_in"),Le(n,"NORM_RECT:norm_rect_in"),n.o(t),gi(e,n),qu(this,e),this.outputConfidenceMasks&&(me(e,"confidence_masks"),le(n,"CONFIDENCE_MASKS:confidence_masks"),Yo(this,"confidence_masks"),this.g.ca("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Jo(this,r,!0,!this.j))),At(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],At(this,i)}))),this.outputCategoryMask&&(me(e,"category_mask"),le(n,"CATEGORY_MASK:category_mask"),Yo(this,"category_mask"),this.g.U("category_mask",((i,s)=>{this.categoryMask=Jo(this,i,!1,!this.j),At(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,At(this,i)}))),me(e,"quality_scores"),le(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,At(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ps.prototype.segment=ps.prototype.segment,ps.prototype.setOptions=ps.prototype.o,ps.createFromModelPath=function(e,t){return ce(ps,e,{baseOptions:{modelAssetPath:t}})},ps.createFromModelBuffer=function(e,t){return ce(ps,e,{baseOptions:{modelAssetBuffer:t}})},ps.createFromOptions=function(e,t){return ce(ps,e,t)};var wi=class extends ni{constructor(e,t){super(new Li(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Wt(e=this.h=new Dx,0,1,t=new ke)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Pe(this.h,2,Qo(e.displayNamesLocale)):"displayNamesLocale"in e&&Pe(this.h,2),e.maxResults!==void 0?gs(this.h,3,e.maxResults):"maxResults"in e&&Pe(this.h,3),e.scoreThreshold!==void 0?Ft(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&Pe(this.h,4),e.categoryAllowlist!==void 0?yu(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&Pe(this.h,5),e.categoryDenylist!==void 0?yu(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&Pe(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},Di(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},_s(this,e,n,t),this.j}m(){var e=new ii;Ue(e,"input_frame_gpu"),Ue(e,"norm_rect"),me(e,"detections");let t=new fi;Xi(t,kE,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Le(n,"IMAGE:input_frame_gpu"),Le(n,"NORM_RECT:norm_rect"),le(n,"DETECTIONS:detections"),n.o(t),gi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=lx(r),this.j.detections.push(Ux(i));At(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};wi.prototype.detectForVideo=wi.prototype.F,wi.prototype.detect=wi.prototype.D,wi.prototype.setOptions=wi.prototype.o,wi.createFromModelPath=async function(e,t){return ce(wi,e,{baseOptions:{modelAssetPath:t}})},wi.createFromModelBuffer=function(e,t){return ce(wi,e,{baseOptions:{modelAssetBuffer:t}})},wi.createFromOptions=function(e,t){return ce(wi,e,t)};var Mp=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach((t=>{t.close()}))}};function o_(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function a_(e){try{let t=new Mp(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{Yu(e)}}Mp.prototype.close=Mp.prototype.close;var Wn=class extends ni{constructor(e,t){super(new Li(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Wt(e=this.h=new Nx,0,1,t=new ke),this.v=new wx,Wt(this.h,0,3,this.v),this.j=new Tx,Wt(this.h,0,2,this.j),gs(this.j,4,1),Ft(this.j,2,.5),Ft(this.v,2,.5),Ft(this.h,4,.5)}get baseOptions(){return pe(this.h,ke,1)}set baseOptions(e){Wt(this.h,0,1,e)}o(e){var t,n,i,s,r;return"numPoses"in e&&gs(this.j,4,(t=e.numPoses)!=null?t:1),"minPoseDetectionConfidence"in e&&Ft(this.j,2,(n=e.minPoseDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ft(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minPosePresenceConfidence"in e&&Ft(this.v,2,(s=e.minPosePresenceConfidence)!=null?s:.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=(r=e.outputSegmentationMasks)!=null?r:!1),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,o_(this),Di(this,e,i),a_(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,o_(this),_s(this,e,s,t),a_(this)}m(){var e=new ii;Ue(e,"image_in"),Ue(e,"norm_rect"),me(e,"normalized_landmarks"),me(e,"world_landmarks"),me(e,"segmentation_masks");let t=new fi;Xi(t,VE,this.h);let n=new qn;mi(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Le(n,"IMAGE:image_in"),Le(n,"NORM_RECT:norm_rect"),le(n,"NORM_LANDMARKS:normalized_landmarks"),le(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),gi(e,n),qu(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(let r of i)i=Lc(r),this.landmarks.push(Xu(i));At(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],At(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(let r of i)i=ko(r),this.worldLandmarks.push(Sc(i));At(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],At(this,i)})),this.outputSegmentationMasks&&(le(n,"SEGMENTATION_MASK:segmentation_masks"),Yo(this,"segmentation_masks"),this.g.ca("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Jo(this,r,!0,!this.s))),At(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],At(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.detectForVideo=Wn.prototype.F,Wn.prototype.detect=Wn.prototype.D,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(e,t){return ce(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return ce(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return ce(Wn,e,t)},Wn.POSE_CONNECTIONS=$x;var JE="assets/mediapipe/datos.js",be={hombroI:11,hombroD:12,munecaI:15,munecaD:16,caderaI:23,caderaD:24,rodillaI:25,rodillaD:26,tobilloI:27,tobilloD:28},KE=.5,jE=.035,wm=3,Jx=.1,QE=.3,Kx=.6,Am=.6;function tT(e){return new Promise((t,n)=>{let i=document.createElement("script");i.src=e,i.onload=()=>t(),i.onerror=()=>n(new Error("No se pudieron leer los archivos de MediaPipe (assets/mediapipe/datos.js).")),document.head.appendChild(i)})}function Ju(e){let t=atob(e),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}function jx(e,t){return URL.createObjectURL(new Blob([e],{type:t}))}async function Qx(e,t,n,i){let s=null;for(let r of["GPU","CPU"])try{return await e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},...i})}catch(o){s=o}throw s}var Ku=class{constructor(){this.activo=!1,this.listo=!1,this.stream=null,this.video=document.createElement("video"),this.video.muted=!0,this.video.playsInline=!0,this.lienzo=document.createElement("canvas"),this.lienzo.width=320,this.lienzo.height=240,this.ctx=this.lienzo.getContext("2d"),this.lienzoVideo=document.createElement("canvas"),this.lienzoVideo.width=320,this.lienzoVideo.height=240,this.ctxVideo=this.lienzoVideo.getContext("2d",{willReadFrequently:!0}),this.poseLM=null,this.segmentador=null,this.ultimoTVideo=-1,this.nuevaSilueta=!1,this.sentado=!1,this.lm=null,this.reiniciarCalibracion()}reiniciarCalibracion(){this.calibrado=!1,this.progreso=0,this.tCal=0,this.sumX=0,this.sumA=0,this.nCal=0,this.prevX=null,this.baseX=.5,this.anchoH=.25,this.pasos=0,this.ultimoPaso=-99,this.lado=0,this.tiempo=0,this.caminando=!1,this.latEstado=0,this.tIzq=0,this.tDer=0,this.tAmbas=0,this.dispIzq=!1,this.dispDer=!1,this.dispAmbas=!1,this.prevIzq=!1,this.prevDer=!1,this.eventos=[],this.visible=!1,this.estadoTexto="Buscando tu cuerpo\u2026",this.tSinPose=0}async iniciar(t=()=>{}){if(!this.activo){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Este navegador no permite usar la c\xE1mara. Prob\xE1 con Chrome o Edge actualizados.");t("Pidiendo permiso para usar la c\xE1mara\u2026"),this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1}),this.video.srcObject=this.stream,await this.video.play();let n=this.video.videoWidth||640,i=this.video.videoHeight||480;this.lienzo.height=Math.round(this.lienzo.width*i/n),this.lienzoVideo.height=this.lienzo.height,this.activo=!0}if(!this.listo){t("Cargando MediaPipe (la primera vez tarda unos segundos)\u2026"),window.MB_MEDIAPIPE||await tT(JE);let n=window.MB_MEDIAPIPE;if(!n)throw new Error("No se encontraron los archivos de MediaPipe en assets/mediapipe/datos.js.");let i={wasmLoaderPath:jx(Ju(n.loader),"text/javascript"),wasmBinaryPath:jx(Ju(n.wasm),"application/wasm")};this.poseLM=await Qx(Wn,i,Ju(n.pose),{runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5}),this.segmentador=await Qx(Un,i,Ju(n.seg),{runningMode:"VIDEO",outputCategoryMask:!1,outputConfidenceMasks:!0}),this.listo=!0}}detener(){this.stream&&this.stream.getTracks().forEach(t=>t.stop()),this.stream=null,this.video.srcObject=null,this.activo=!1,this.ultimoTVideo=-1,this.reiniciarCalibracion()}actualizar(t){if(!this.activo||!this.listo||this.video.readyState<2)return;this.tiempo+=t;let n=this.video.currentTime;if(n===this.ultimoTVideo)return;this.ultimoTVideo=n;let i=performance.now(),s=null;try{let r=this.poseLM.detectForVideo(this.video,i);s=r.landmarks&&r.landmarks[0]?r.landmarks[0]:null}catch{s=null}this.lm=s,this.segmentar(i),this.analizar(s,t)}segmentar(t){let n;try{n=this.segmentador.segmentForVideo(this.video,t)}catch{return}let i=n.confidenceMasks;if(!i||!i.length)return;let s=i.length>1?i[1]:i[0],r=s.getAsFloat32Array(),o=s.width,a=s.height,c=this.lienzo.width,l=this.lienzo.height;this.ctxVideo.save(),this.ctxVideo.translate(c,0),this.ctxVideo.scale(-1,1),this.ctxVideo.drawImage(this.video,0,0,c,l),this.ctxVideo.restore();let h=this.ctxVideo.getImageData(0,0,c,l),d=h.data;for(let u=0;u<l;u++){let f=Math.min(a-1,Math.floor(u*a/l));for(let g=0;g<c;g++){let y=Math.min(o-1,Math.floor((c-1-g)*o/c)),m=r[f*o+y],p=m<=.35?0:m>=.65?1:(m-.35)/.3;d[(u*c+g)*4+3]=p*255}}this.ctx.clearRect(0,0,c,l),this.ctx.putImageData(h,0,0),s.close&&s.close(),i.forEach(u=>{u!==s&&u.close&&u.close()}),this.nuevaSilueta=!0}analizar(t,n){if(!t){this.tSinPose+=n,this.visible=!1,this.caminando=!1,this.estadoTexto="No te veo: ubicate de cuerpo entero, de frente y con buena luz";return}this.tSinPose=0;let i=u=>{var f;return((f=t[u].visibility)!=null?f:1)>=KE},s=i(be.hombroI)&&i(be.hombroD),r=i(be.caderaI)&&i(be.caderaD);if(this.visible=s,!this.visible){this.estadoTexto="Ubicate de frente: no te veo los hombros",this.caminando=!1;return}let o=u=>1-t[u].x,a=!this.sentado&&r?(o(be.caderaI)+o(be.caderaD))/2:(o(be.hombroI)+o(be.hombroD))/2,c=Math.max(.06,Math.abs(o(be.hombroI)-o(be.hombroD)));if(!this.calibrado){let u=this.prevX===null||Math.abs(a-this.prevX)<jE;this.prevX=a,u?(this.tCal+=n,this.sumX+=a,this.sumA+=c,this.nCal++):(this.tCal=0,this.sumX=0,this.sumA=0,this.nCal=0),this.progreso=Math.min(1,this.tCal/wm),this.estadoTexto=u?`Quedate quieto\u2026 ${Math.max(0,Math.ceil(wm-this.tCal))}`:"Quedate quieto y de frente",this.tCal>=wm&&this.nCal>0&&(this.baseX=this.sumX/this.nCal,this.anchoH=this.sumA/this.nCal,this.calibrado=!0,this.estadoTexto="\xA1Listo!");return}let l=(a-this.baseX)/Math.max(.06,this.anchoH);if(this.latEstado===0?l>Kx?(this.latEstado=1,this.eventos.push({tipo:"carril",d:1})):l<-Kx&&(this.latEstado=-1,this.eventos.push({tipo:"carril",d:-1})):Math.abs(l)<.25&&(this.latEstado=0),!this.sentado){let u=g=>{var y;return((y=t[g].visibility)!=null?y:1)>=QE},f=u(be.rodillaI)&&u(be.rodillaD)?[be.rodillaI,be.rodillaD]:u(be.tobilloI)&&u(be.tobilloD)?[be.tobilloI,be.tobilloD]:null;if(this.piernasOK=!!f,f){let g=(t[be.hombroI].y+t[be.hombroD].y)/2,y=r?(t[be.caderaI].y+t[be.caderaD].y)/2:g+c*2.2,m=Math.max(.08,Math.abs(y-g)),p=(t[f[1]].y-t[f[0]].y)/m,S=p>Jx?1:p<-Jx?-1:0;S!==0&&S!==this.lado&&(this.lado!==0&&(this.pasos++,this.ultimoPaso=this.tiempo),this.lado=S)}}this.caminando=this.tiempo-this.ultimoPaso<.8;let h=i(be.munecaI)&&t[be.munecaI].y<t[be.hombroI].y,d=i(be.munecaD)&&t[be.munecaD].y<t[be.hombroD].y;h&&!this.prevIzq&&this.eventos.push({tipo:"recoge",lado:"izq"}),d&&!this.prevDer&&this.eventos.push({tipo:"recoge",lado:"der"}),this.prevIzq=h,this.prevDer=d,h&&d?(this.tAmbas+=n,this.tIzq=0,this.tDer=0,this.tAmbas>=Am&&!this.dispAmbas&&(this.dispAmbas=!0,this.eventos.push({tipo:"responde",lado:"ambas"}))):(this.tAmbas=0,this.dispAmbas=!1,h?(this.tIzq+=n,this.tIzq>=Am&&!this.dispIzq&&(this.dispIzq=!0,this.eventos.push({tipo:"responde",lado:"izq"}))):(this.tIzq=0,this.dispIzq=!1),d?(this.tDer+=n,this.tDer>=Am&&!this.dispDer&&(this.dispDer=!0,this.eventos.push({tipo:"responde",lado:"der"}))):(this.tDer=0,this.dispDer=!1)),this.estadoTexto=`Pasos: ${this.pasos} \xB7 ${this.caminando?"caminando":"quieto"}${this.piernasOK?"":" \xB7 no veo tus piernas"}`}consumirEventos(){let t=this.eventos;return this.eventos=[],t}};var z=e=>document.getElementById(e),Sn=window.MB_ESTACIONES,av="misionBermejo3d.opciones.v1",ca=[.9,1,1.15,1.3,1.5,1.75],eT={texto:1,velocidad:1,sentado:!1,contraste:!1,movimiento:!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),obstaculos:!0,sonido:!0,liviano:!1,tactil:!0,peso:null,equipo:!1},Kt={...eT};try{Object.assign(Kt,JSON.parse(localStorage.getItem(av)||"{}"))}catch{}function id(){try{localStorage.setItem(av,JSON.stringify(Kt))}catch{}}function cv(e){z("errorWebglTexto").textContent=e,z("errorWebgl").classList.remove("oculto"),z("pantallaInicio").classList.add("oculto")}if(!Array.isArray(Sn)||Sn.length!==Xe)throw cv("No se pudieron cargar los contenidos hist\xF3ricos (assets/js/estaciones.js). Verific\xE1 que el archivo exista junto a index.html."),new Error("Faltan estaciones");var zs;try{zs=new Xh({canvas:z("mundo"),antialias:!0,powerPreference:"high-performance"})}catch(e){throw cv("Tu navegador o computadora no permite WebGL, que es necesario para el mundo 3D. Prob\xE1 con Chrome o Edge actualizados."),e}zs.shadowMap.enabled=!0;zs.shadowMap.type=Cr;zs.toneMapping=Za;zs.toneMappingExposure=1;var ks=new Pa;ks.background=new Gt("#dff1fb");ks.fog=new Ia("#dcf0fa",90,340);var Ge=new Pn(62,1,.2,1400);Ge.position.set(0,4,12);var nT=new Xa("#d6ecff","#a8875a",1.55);ks.add(nT);var Ji=new Ya("#fff1d2",2.3);Ji.castShadow=!0;Ji.shadow.mapSize.set(1024,1024);var ua=Ji.shadow.camera;ua.left=-34;ua.right=34;ua.top=34;ua.bottom=-34;ua.near=5;ua.far=160;Ji.shadow.bias=-6e-4;Ji.shadow.normalBias=.04;ks.add(Ji,Ji.target);var Os=Gg(ks,Sn),Uc=Hg();ks.add(Uc.objeto);var _r=new Kh(ks),On=new jh,Ee=new Ku,Qe=!1,sd=0,rd=0,Im=new os(Ee.lienzo);Im.colorSpace=sn;var kr=new qt(new oi(1,1),new Je({map:Im,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}));kr.renderOrder=999;kr.frustumCulled=!1;kr.visible=!1;Ge.add(kr);ks.add(Ge);var tv=6;function iT(){let e=2*tv*Math.tan(ff.degToRad(Ge.fov/2)),t=e*Ge.aspect,n=e*.78,i=n*(Ee.lienzo.width/Ee.lienzo.height);kr.scale.set(i,n,1);let s=cc((bt.x-Ge.position.x)*.75,-t*.3,t*.3);kr.position.set(s,-e/2+n/2-e*.04,-tv)}var Et="inicio",Bn=!1,sT="caminando",Mn=null,Cm=null,Zn=!1,rT=[[18,-6],[-15,-3],[14,-3],[-17,-4],[-21,-6],[-24,-2],[0,-26],[18,-3]],bt={x:0,z:0,y:0,lane:1,v:0,golpe:0,saludo:!1},ne=0,Bs=0,Bc=0,aa=0,Pm=0,td=0,Ni=[],wn="historia",Zi=[0,1,2],zc={avance:!1},ed=!1,Fc=0;function od(){Object.assign(bt,{x:0,z:0,y:0,lane:1,v:0,golpe:0,saludo:!1}),ne=0,Bs=0,Bc=0,aa=0,Pm=0,td=0,sd=0,rd=0,Ni=Sn.map(()=>({intentos:0,estado:null,puntos:0})),Os.reiniciarItems(),vr()}function ad(){document.documentElement.style.setProperty("--fs",`${Math.round(20*Kt.texto)}px`),document.body.classList.toggle("alto-contraste",Kt.contraste),document.body.classList.toggle("mov-reducido",Kt.movimiento),On.activo=Kt.sonido,Ji.castShadow=!Kt.liviano,zs.setPixelRatio(Kt.liviano?.8:Math.min(window.devicePixelRatio||1,1.5)),Uc.sombraFalsa.visible=Kt.liviano,_r.reducido=Kt.movimiento,Os.mostrarObstaculos(Kt.obstaculos),z("btnSonido").textContent=Kt.sonido?"\u{1F50A}":"\u{1F507}",z("opcTexto").textContent=`${Math.round(Kt.texto*100)}%`,z("opcVelocidad").value=String(Kt.velocidad),z("opcSentado").checked=Kt.sentado,z("opcContraste").checked=Kt.contraste,z("opcMovimiento").checked=Kt.movimiento,z("opcObstaculos").checked=Kt.obstaculos,z("opcSonido").checked=Kt.sonido,z("opcLiviano").checked=Kt.liviano,z("opcTactil").checked=Kt.tactil,z("opcPeso").value=Kt.peso||"",z("opcEquipo").checked=Kt.equipo,Ee.sentado=Kt.sentado,lv(),zn()}function lv(){let e=window.innerWidth,t=window.innerHeight;zs.setSize(e,t,!1),Ge.aspect=e/t,Ge.fov=e/t<1.2?72:62,Ge.updateProjectionMatrix()}window.addEventListener("resize",lv);var kc=["pantallaPausa","pantallaOpciones","pantallaAyuda","pantallaAcerca","pantallaFinal","pantallaCamara","pantallaCreditos"];function ji(e,t=null){kc.forEach(i=>z(i).classList.add("oculto")),Cm=t,Mn=e,z(e).classList.remove("oculto");let n=z(e).querySelector(".btn-principal")||z(e).querySelector("button");n&&setTimeout(()=>n.focus(),30),zn()}function xr(){if(!Mn)return;z(Mn).classList.add("oculto");let e=Cm;Mn=null,Cm=null,e?ji(e):zn()}function oT(){let e=z("credLista");e.innerHTML="",Sn.filter(t=>t.foto).forEach(t=>{let n=t.foto,i=document.createElement("div");i.className="credito";let s=document.createElement("b");s.textContent=`${t.orden}. ${n.titulo}`;let r=document.createElement("p");r.textContent=n.autor?`Foto: ${n.autor} (${n.anio}) \xB7 ${n.licencia}`:"Autor y licencia: pendientes de confirmar (no publicar hasta tenerlos)";let o=document.createElement("p");if(o.textContent=`Cambios: ${n.cambios}`,i.append(s,r,o),n.url){let a=document.createElement("a");a.href=n.url,a.target="_blank",a.rel="noopener",a.textContent="Ver la p\xE1gina original",i.append(a)}e.appendChild(i)}),e.children.length||(e.textContent="Todav\xEDa no hay fotos con cr\xE9dito en el juego.")}var ev=0;function Ki(e,t="",n=1800){let i=z("aviso");i.textContent=e,i.className=`ver ${t}`,clearTimeout(ev),ev=setTimeout(()=>{i.className=""},n)}function aT(){let e=z("hudProgreso");e.innerHTML="",Sn.forEach((t,n)=>{let i=document.createElement("li");i.textContent=String(n+1),i.title=t.lugar,e.appendChild(i)})}function vr(){z("hudPuntos").textContent=String(Bs),z("hudAlgodon").textContent=String(Bc),[...z("hudProgreso").children].forEach((e,t)=>{e.className="";let n=Ni[t];n&&n.estado==="no"?e.classList.add("parcial"):n&&n.estado&&e.classList.add("ok"),t===ne&&ne<Xe&&e.classList.add("actual"),n&&n.estado?e.textContent="\u2713":e.textContent=String(t+1)})}function cT(){let e=z("hudDestino");if(Et!=="caminando"){e.style.visibility="hidden";return}if(e.style.visibility="visible",ne<Xe){let t=Math.max(0,Math.round(bt.z-Po(ne)));e.textContent=`Pr\xF3xima parada ${ne+1}: ${Sn[ne].lugar} \xB7 ${t} m`}else e.textContent=`\xA1A la meta! \xB7 ${Math.max(0,Math.round(bt.z-hc))} m`}function lT(){let e=n=>`<kbd>${n}</kbd>`;if(Et==="cartel"&&Zn)return`${e("Enter")} volver al cartel`;if(Et==="calibrando")return"Quedate quieto y de frente para calibrar";let t=Kt.equipo?" \xB7 compa\xF1ero/a: "+e("1")+e("2")+e("3")+" o "+e("A")+e("B")+e("C"):"";return Et==="cartel"&&wn==="vf"?Qe?"\u270B izquierda = verdadero \xB7 derecha = falso":`${e("T")} verdadero \xB7 ${e("F")} falso`:Et==="cartel"&&Qe?wn==="historia"?"\u270B levant\xE1 una mano para ir a la pregunta":"\u270B izquierda = A \xB7 derecha = B \xB7 las dos = C"+t:Et==="cartel"?(wn==="historia"?`${e("Enter")} ir a la pregunta`:`${e("1")} ${e("2")} ${e("3")} elegir respuesta`)+t:Qe?Kt.sentado?"Modo sentado: avanz\xE1s solo \xB7 inclinate a los costados para cambiar de carril":"Camin\xE1 en el lugar \xB7 pasos a los costados para cambiar de carril \xB7 \u270B levant\xE1 la mano para recoger algod\xF3n":Kt.sentado?`Modo sentado: avanz\xE1s solo \xB7 ${e("\u2190")} ${e("\u2192")} cambiar de carril`:`${e("\u2191")} caminar \xB7 ${e("\u2190")} ${e("\u2192")} cambiar de carril \xB7 ${e("P")} pausa`}var nv="";function zn(){let e=Et!=="inicio"&&Et!=="final";z("hud").classList.toggle("oculto",!e);let t=z("ayuda"),n=lT();n!==nv&&(t.innerHTML=n,nv=n),t.classList.toggle("oculto",!e||!!Mn),z("controlesTactiles").classList.toggle("oculto",!(Kt.tactil&&Et==="caminando"&&!Mn)),z("tcAvanzar").classList.toggle("oculto",Kt.sentado),z("pantallaInicio").classList.toggle("oculto",Et!=="inicio"),z("calibracion").classList.toggle("oculto",Et!=="calibrando"),z("camEstado").classList.toggle("oculto",!(Qe&&Ee.activo&&e&&!Mn))}function hT(){if(!Qe||!Ee.activo)return;let e=z("camEstado");e.textContent!==Ee.estadoTexto&&(e.textContent=Ee.estadoTexto),Et==="calibrando"&&(z("calibracionBarra").style.width=`${Math.round(Ee.progreso*100)}%`,z("calibracionTexto").textContent=Ee.estadoTexto)}function uT(){return"speechSynthesis"in window&&window.speechSynthesis.getVoices().find(t=>/^es/i.test(t.lang)&&t.localService)||null}function hv(e){if(!("speechSynthesis"in window)){Ki("Este navegador no puede leer en voz alta.","",2200);return}let t=window.speechSynthesis;if(t.speaking){t.cancel();return}let n=uT();if(!n){Ki("No hay una voz en espa\xF1ol instalada en esta computadora.","",2600);return}let i=new SpeechSynthesisUtterance(e);i.voice=n,i.lang=n.lang,i.rate=.95,t.speak(i)}function Gr(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function uv(e){let t=Sn[e];Et="cartel",wn="historia",Zn=!1,z("btnVolverCartel").classList.add("oculto"),z("cartel").classList.remove("paso-pregunta"),bt.saludo=!0,z("cartelNum").textContent=String(t.orden),z("cartelSup").textContent=`Estaci\xF3n ${t.orden} de ${Xe}`,z("cartelTitulo").textContent=t.titulo,z("cartelAnio").textContent=t.anio,z("textoAnio").textContent=`\u{1F5D3} ${t.anioTexto}`,z("textoHistoria").textContent=t.historia;let n=t.foto;z("cartelFoto").classList.toggle("oculto",!n),n&&(z("cartelFotoImg").src=n.archivo,z("cartelFotoImg").alt=n.titulo,z("cartelFotoCred").textContent=n.autor&&n.licencia==="Foto propia"?`Foto: ${n.autor} (${n.anio}) \xB7 Foto propia \xB7 Estado actual, no hist\xF3rico`:n.autor?`Foto: ${n.autor} (${n.anio}) \xB7 ${n.licencia} \xB7 Wikimedia Commons \xB7 Estado actual, no hist\xF3rico`:"Foto de referencia: estado actual, no hist\xF3rico \xB7 cr\xE9dito pendiente de confirmar"),z("textoCuriosidad").textContent=t.curiosidad,z("textoPregunta").textContent=t.pregunta,z("cartelFuente").textContent=`Fuente indicada por NotebookLM: ${t.fuente}`,z("retro").textContent="",z("retro").className="retro";let i=z("opciones");if(i.innerHTML="",Zi=[0,1,2],(window.MB_CONFIG||{}).mezclarOpciones!==!1)for(let s=2;s>0;s--){let r=Math.floor(Math.random()*(s+1));[Zi[s],Zi[r]]=[Zi[r],Zi[s]]}Zi.map(s=>t.opciones[s]).forEach((s,r)=>{let o=document.createElement("button");o.className="opcion",o.type="button",o.innerHTML=`<span class="letra">${"ABC"[r]}</span><span class="txt"></span><small>tecla ${r+1}</small>`,o.querySelector(".txt").textContent=s,o.addEventListener("click",()=>ld(r)),i.appendChild(o)}),z("btnSeguir").classList.add("oculto"),z("cartelHistoria").classList.remove("oculto"),z("cartelPregunta").classList.add("oculto"),z("cartelVF").classList.add("oculto"),z("cartel").classList.remove("oculto"),z("cartel").scrollTop=0,On.llegada(),Ki(`Estaci\xF3n ${t.orden}: ${t.lugar}`,"",1700),zn(),setTimeout(()=>z("btnAPregunta").focus(),60)}function la(e){Et==="cartel"&&(Zn=e===void 0?!Zn:e,z("cartel").classList.toggle("oculto",Zn),z("btnVolverCartel").classList.toggle("oculto",!Zn),Gr(),Zn?(z("btnVolverCartel").focus(),Ki("Mir\xE1 el lugar en 3D","",1200)):setTimeout(()=>{var t;return(t=wn==="historia"?z("btnAPregunta"):z("btnSeguir").classList.contains("oculto")?z("opciones").querySelector("button:not(:disabled)"):z("btnSeguir"))==null?void 0:t.focus()},40),zn())}function cd(){Et!=="cartel"||wn!=="historia"||(Gr(),wn="pregunta",z("cartel").classList.add("paso-pregunta"),On.clic(),z("cartelHistoria").classList.add("oculto"),z("cartelPregunta").classList.remove("oculto"),z("cartel").scrollTop=0,zn(),setTimeout(()=>{let e=z("opciones").querySelector("button");e&&e.focus()},40))}function ld(e){if(Et!=="cartel"||wn!=="pregunta")return;let t=Sn[ne],n=Ni[ne];if(n.estado)return;let i=[...z("opciones").children];if(i[e].disabled)return;n.intentos++;let s=z("retro"),r=Zi.indexOf(t.correcta);if(e===r){let o=n.intentos===1?100:50;n.estado=n.intentos===1?"primera":"segunda",n.puntos=o,Bs+=o,aa++,i.forEach(a=>a.disabled=!0),i[e].classList.add("correcta"),s.textContent=`\xA1Correcto! +${o} puntos`,s.className="retro bien",On.acierto(),_r.emitir(bt.x,2.6,bt.z,"#ffd23f",30,4.5,1.1,4),_r.emitir(bt.x,2.6,bt.z,"#6fe39b",20,4,1.1,4),iv()}else if(i[e].classList.add("incorrecta"),i[e].disabled=!0,On.error(),n.intentos===1){s.textContent="Casi\u2026 prob\xE1 con otra opci\xF3n. Si acert\xE1s ahora gan\xE1s 50 puntos.",s.className="retro mal";let o=i.find(a=>!a.disabled);o&&o.focus()}else n.estado="no",n.puntos=0,i.forEach(o=>o.disabled=!0),i[r].classList.add("correcta"),s.textContent=`La respuesta correcta era: ${t.opciones[t.correcta]}.`,s.className="retro mal",iv();vr()}function iv(){let e=z("btnSeguir");e.classList.remove("oculto"),e.textContent="Verdadero o falso \u279C",setTimeout(()=>{e.focus(),e.scrollIntoView({block:"nearest"})},80)}function Lm(){Et!=="cartel"||wn!=="pregunta"||!Ni[ne].estado||(Gr(),wn="vf",On.clic(),z("cartelPregunta").classList.add("oculto"),z("cartelVF").classList.remove("oculto"),z("textoVF").textContent=Sn[ne].vf.afirmacion,z("retroVF").textContent="",z("retroVF").className="retro",z("btnVerdadero").disabled=!1,z("btnFalso").disabled=!1,z("btnSeguirVF").classList.add("oculto"),z("cartel").scrollTop=0,zn(),setTimeout(()=>z("btnVerdadero").focus(),40))}function ha(e){if(Et!=="cartel"||wn!=="vf")return;let t=Ni[ne];if(t.vf!==void 0)return;let n=Sn[ne],i=e===n.vf.verdadera;t.vf=i;let s=z("retroVF");i?(Bs+=20,Pm++,s.textContent=`\xA1Correcto! +20 puntos. ${n.vf.explicacion}`,s.className="retro bien",On.acierto()):(s.textContent=`No era as\xED. ${n.vf.explicacion}`,s.className="retro mal",On.error()),z("btnVerdadero").disabled=!0,z("btnFalso").disabled=!0,z("btnSeguirVF").textContent=ne>=Xe-1?"Ir hacia la meta \u279C":"Seguir el recorrido \u279C",z("btnSeguirVF").classList.remove("oculto"),vr(),setTimeout(()=>{z("btnSeguirVF").focus()},80)}function hd(){Et!=="cartel"||!Ni[ne].estado||Ni[ne].vf===void 0||(Gr(),z("cartel").classList.add("oculto"),Zn=!1,Os.paradas[ne].hecho=!0,ne++,Et="caminando",bt.saludo=!1,vr(),zn(),Ki(ne>=Xe?"\xA1Ya casi! Segu\xED hasta la meta":"\xA1Segu\xED adelante!","",1300))}function Oc(e){if(Et!=="caminando"||Bn||Mn)return;let t=cc(bt.lane+e,0,2);t!==bt.lane&&(bt.lane=t,On.clic())}function dv(e){Bc++,Bs+=10,On.algodon(),_r.emitir(e.x,e.y+1.2,e.z,"#ffffff",10,2.6,.5,3),vr()}function dT(){let e=null,t=1/0;for(let n of Os.algodones){if(n.got)continue;let i=bt.z-n.z;i<-1.5||i>12||Math.abs(n.x-bt.x)>1.6||Math.abs(i)<t&&(t=Math.abs(i),e=n)}e?(e.got=!0,dv(e)):Ki("No hay algod\xF3n cerca: acercate y levant\xE1 la mano","",1e3)}function fT(e){if(!(Et!=="cartel"||Zn)){if(wn==="historia"){cd();return}if(wn==="pregunta"){if(Ni[ne].estado){Lm();return}ld(e==="izq"?0:e==="der"?1:2);return}if(Ni[ne].vf!==void 0){hd();return}e==="izq"?ha(!0):e==="der"&&ha(!1)}}function pT(){let e=Ee.consumirEventos();if(!(Bn||Mn))for(let t of e)t.tipo==="carril"&&Et==="caminando"?Oc(t.d):t.tipo==="recoge"&&Et==="caminando"?dT():t.tipo==="responde"&&fT(t.lado)}function mT(e){if(e.golpeado=!0,bt.golpe=.55,bt.v*=.2,Bs=Math.max(0,Bs-5),On.golpe(),_r.emitir(e.x,1,e.z,"#ffb26b",14,3,.6,7),Ki("\xA1Uy! Un obst\xE1culo (\u22125)","malo",900),!Kt.movimiento){let t=z("destello");t.classList.add("ver"),setTimeout(()=>t.classList.remove("ver"),90)}vr()}function gT(e){let t=7.6*Kt.velocidad,n=ne<Xe?Po(ne):hc,i=Qe&&Ee.activo&&Ee.caminando,s=zc.avance||ed||Kt.sentado||i?t:0,r=bt.z-n;s*=cc(r/7,.2,1),bt.golpe>0&&(bt.golpe-=e,s=0),bt.v=rr(bt.v,s,7,e);let o=bt.v*e;if(bt.z-=o,rd+=Math.max(0,o),bt.v>.3&&(sd+=e),bt.x=rr(bt.x,Io[bt.lane],12,e),bt.y=lc(bt.z),td+=e,!Qe)for(let a of Os.algodones)!a.got&&Math.abs(a.z-bt.z)<1.25&&Math.abs(a.x-bt.x)<1.3&&(a.got=!0,dv(a));if(Kt.obstaculos)for(let a of Os.obstaculos)!a.golpeado&&Math.abs(a.z-bt.z)<1&&Math.abs(a.x-bt.x)<1.2&&mT(a);bt.z<=n+.02&&(bt.z=n,bt.v=0,ne<Xe?uv(ne):_T())}var Rm=0;function _T(){Et="celebracion",Rm=0,bt.saludo=!0,On.final(),_r.confeti(0,3,hc-8),Ki("\xA1Llegaste a El Colorado!","bueno bajo",2600),zn()}function sv(e){let t=Math.round(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function xT(){Et="final",bt.saludo=!1;let e=Qe?Ee.pasos:Math.round(rd/.75);z("finalPasos").textContent=String(e),z("finalMov").textContent=sv(sd);let t=Number(Kt.peso);z("finalCalorias").textContent=t>0?`${Math.round(3.5*t*(td/3600))} kcal`:"Ingres\xE1 tu peso",z("finalNotaEstim").textContent=`Las calor\xEDas son una estimaci\xF3n (3,5 \xD7 peso en kg \xD7 horas de juego), no una medici\xF3n.${Qe?" Los pasos se contaron con la c\xE1mara.":" Los pasos se estimaron seg\xFAn la distancia recorrida."}`,z("finalPuntos").textContent=String(Bs),z("finalAciertos").textContent=`${aa}/${Xe}`,z("finalVF").textContent=`${Pm}/${Xe}`,z("finalAlgodon").textContent=String(Bc),z("finalTiempo").textContent=sv(td),Qe&&Ee.detener();let n=aa>=8?3:aa>=6?2:aa>=3?1:0;z("finalEstrellas").innerHTML=[0,1,2].map(s=>`<span class="${s<n?"on":""}">\u2605</span>`).join(""),z("finalMedalla").textContent=["\xA1Segu\xED explorando! Cada estaci\xF3n te cuenta algo nuevo.","\xA1Buen comienzo! Volv\xE9 a jugar para descubrir m\xE1s.","\xA1Muy buen recorrido por la historia de El Colorado!","\xA1Excelente! Conoc\xE9s muy bien la historia de El Colorado."][n];let i=z("finalLista");i.innerHTML="",Sn.forEach((s,r)=>{let o=Ni[r],a=document.createElement("li"),c=o.estado==="primera"?"s1":o.estado==="segunda"?"s2":"s0",l=o.estado==="primera"||o.estado==="segunda"?"\u2713":"\u2717";a.innerHTML=`<span class="sello ${c}">${l}</span><span></span><em>${o.puntos||0}</em>`,a.children[1].textContent=`${s.orden}. ${s.lugar}`,i.appendChild(a)}),zn(),ji("pantallaFinal")}function da(e=!1){On.iniciar(),Qe=e&&Ee.activo,Zn=!1,z("btnVolverCartel").classList.add("oculto"),od(),kc.forEach(t=>z(t).classList.add("oculto")),Mn=null,z("cartel").classList.add("oculto"),Bn=!1,Qe?(Ee.reiniciarCalibracion(),Et="calibrando"):Et="caminando",vr(),zn(),Ki(Qe?"Calibraci\xF3n: quedate quieto y de frente":"\xA1Empez\xF3 la misi\xF3n! Camin\xE1 hacia la primera estaci\xF3n","",2400)}async function vT(){kc.forEach(e=>z(e).classList.add("oculto")),Mn=null,z("cargando").classList.remove("oculto");try{await Ee.iniciar(e=>{z("cargandoTexto").textContent=e}),z("cargando").classList.add("oculto"),da(!0)}catch(e){z("cargando").classList.add("oculto"),Ee.detener(),Qe=!1,z("inicioError").textContent=`No se pudo usar la c\xE1mara: ${e.message||e} Pod\xE9s jugar con el teclado.`,z("inicioError").classList.remove("oculto"),zn(),setTimeout(()=>z("btnJugarTeclado").focus(),30)}}function fv(){if(Qe&&!Ee.activo){ji("pantallaCamara");return}da(Qe)}function pv(){Gr(),Zn=!1,z("btnVolverCartel").classList.add("oculto"),kc.forEach(e=>z(e).classList.add("oculto")),Mn=null,z("cartel").classList.add("oculto"),Ee.detener(),Qe=!1,Et="inicio",Bn=!1,od(),z("inicioError").classList.add("oculto"),zn(),setTimeout(()=>z("btnJugarCamara").focus(),30)}function Vr(){Bn||Et!=="caminando"&&Et!=="cartel"&&Et!=="calibrando"||(Bn=!0,sT=Et,Gr(),ji("pantallaPausa"))}function nd(){Bn&&(Bn=!1,xr(),Et==="cartel"&&setTimeout(()=>{var e;return(e=z("btnSeguir").classList.contains("oculto")?z("cartelHistoria").classList.contains("oculto")?z("opciones").querySelector("button:not(:disabled)"):z("btnAPregunta"):z("btnSeguir"))==null?void 0:e.focus()},40))}function mv(e){Zn=!1,z("btnVolverCartel").classList.add("oculto"),kc.forEach(n=>z(n).classList.add("oculto")),Mn=null,Bn=!1,z("cartel").classList.add("oculto"),Gr(),(Et==="inicio"||Et==="final")&&(On.iniciar(),od()),ne=cc(e,0,Xe);let t=ne<Xe?Po(ne):hc;Object.assign(bt,{z:t+22,x:0,lane:1,v:0,golpe:0,saludo:!1}),Os.paradas.forEach((n,i)=>n.hecho=i<ne),Et="caminando",vr(),zn()}function yT(){let e=z("saltos");e.innerHTML="";for(let t=0;t<=Xe;t++){let n=document.createElement("button");n.className="btn btn-chico",n.textContent=t<Xe?String(t+1):"Meta",n.title=t<Xe?Sn[t].lugar:"Meta",n.addEventListener("click",()=>mv(t)),e.appendChild(n)}}var MT=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyW","KeyA","KeyS","KeyD"]);window.addEventListener("keydown",e=>{let t=e.code,n=e.target&&(e.target.tagName==="BUTTON"||e.target.tagName==="SELECT"||e.target.tagName==="INPUT"||e.target.tagName==="SUMMARY");if(MT.has(t)&&!n&&e.preventDefault(),!(e.altKey||e.ctrlKey||e.metaKey)){if(t==="Escape"){if(Mn&&Mn!=="pantallaPausa"&&Mn!=="pantallaFinal"){xr();return}if(Bn){nd();return}if(Et==="cartel"&&Zn){la(!1);return}(Et==="caminando"||Et==="cartel"||Et==="calibrando")&&Vr();return}if(t==="KeyP"&&!e.repeat){Bn?nd():Vr();return}if(t==="KeyM"&&!e.repeat){Kt.sonido=!Kt.sonido,id(),ad();return}if(t==="KeyO"&&!e.repeat&&Et!=="inicio"&&!Mn){gv();return}if(!Mn){if(Et==="cartel"&&t==="KeyV"&&!e.repeat){la();return}if(Et==="cartel"&&Zn){(t==="Enter"||t==="Space")&&!n&&la(!1);return}if(Et==="inicio"){(t==="Enter"||t==="Space")&&!n&&da();return}if(Et==="caminando"){(t==="ArrowUp"||t==="KeyW")&&(zc.avance=!0),e.repeat||((t==="ArrowLeft"||t==="KeyA")&&Oc(-1),(t==="ArrowRight"||t==="KeyD")&&Oc(1));return}if(Et==="cartel"&&!e.repeat)if(wn==="historia")(t==="Enter"||t==="Space")&&!n&&cd();else if(wn==="pregunta"){let i={Digit1:0,Digit2:1,Digit3:2,Numpad1:0,Numpad2:1,Numpad3:2,KeyA:0,KeyB:1,KeyC:2}[t];i!==void 0?ld(i):(t==="Enter"||t==="Space")&&!n&&Ni[ne].estado&&Lm()}else wn==="vf"&&(t==="KeyT"?ha(!0):t==="KeyF"?ha(!1):(t==="Enter"||t==="Space")&&!n&&Ni[ne].vf!==void 0&&hd())}}});window.addEventListener("keyup",e=>{(e.code==="ArrowUp"||e.code==="KeyW")&&(zc.avance=!1)});window.addEventListener("blur",()=>{zc.avance=!1,ed=!1,(Et==="caminando"||Et==="calibrando")&&Vr()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Et==="caminando"||Et==="calibrando")&&Vr()});function gv(){Bn||Vr(),ji("pantallaOpciones",Bn?"pantallaPausa":null)}function ST(e,t,n){let i=r=>{r.preventDefault(),e.classList.add("on"),t()},s=()=>{e.classList.remove("on"),n()};e.addEventListener("pointerdown",i),e.addEventListener("pointerup",s),e.addEventListener("pointerleave",s),e.addEventListener("pointercancel",s)}ST(z("tcAvanzar"),()=>{ed=!0,On.iniciar()},()=>{ed=!1});z("tcIzq").addEventListener("click",()=>Oc(-1));z("tcDer").addEventListener("click",()=>Oc(1));z("btnJugarCamara").addEventListener("click",()=>{z("inicioError").classList.add("oculto"),ji("pantallaCamara")});z("btnJugarTeclado").addEventListener("click",()=>da(!1));z("btnAceptarCamara").addEventListener("click",vT);z("btnTecladoCamara").addEventListener("click",()=>{xr(),da(!1)});z("btnVolverCamara").addEventListener("click",()=>{xr(),setTimeout(()=>z("btnJugarCamara").focus(),30)});z("opcPeso").addEventListener("change",e=>{let t=parseFloat(e.target.value);fa({peso:t>0&&t<300?Math.round(t):null})});z("btnComoSeJuega").addEventListener("click",()=>ji("pantallaAyuda"));z("btnOpcionesInicio").addEventListener("click",()=>ji("pantallaOpciones"));z("btnAcerca").addEventListener("click",()=>ji("pantallaAcerca"));z("btnCreditos").addEventListener("click",()=>ji("pantallaCreditos"));z("btnCerrarCreditos").addEventListener("click",xr);z("btnCerrarAyuda").addEventListener("click",xr);z("btnCerrarAcerca").addEventListener("click",xr);z("btnCerrarOpciones").addEventListener("click",()=>{id(),xr()});z("btnPausa").addEventListener("click",Vr);z("btnAccesib").addEventListener("click",gv);z("btnSonido").addEventListener("click",()=>{On.iniciar(),Kt.sonido=!Kt.sonido,id(),ad()});z("btnContinuar").addEventListener("click",nd);z("btnOpcionesPausa").addEventListener("click",()=>ji("pantallaOpciones","pantallaPausa"));z("btnReiniciar").addEventListener("click",fv);z("btnAlInicio").addEventListener("click",pv);z("btnOtraVez").addEventListener("click",fv);z("btnFinalInicio").addEventListener("click",pv);z("btnAPregunta").addEventListener("click",cd);z("btnVerLugar").addEventListener("click",()=>la(!0));z("btnVolverCartel").addEventListener("click",()=>la(!1));z("btnSeguir").addEventListener("click",Lm);z("btnVerdadero").addEventListener("click",()=>ha(!0));z("btnFalso").addEventListener("click",()=>ha(!1));z("btnSeguirVF").addEventListener("click",hd);z("btnLeer").addEventListener("click",()=>{Et==="cartel"&&hv(`${Sn[ne].titulo}. ${Sn[ne].anioTexto} ${Sn[ne].historia} \xBFSab\xEDas que? ${Sn[ne].curiosidad}`)});z("btnLeerPregunta").addEventListener("click",()=>{if(Et==="cartel"){let e=Sn[ne];hv(`${e.pregunta} Opci\xF3n A: ${e.opciones[Zi[0]]}. Opci\xF3n B: ${e.opciones[Zi[1]]}. Opci\xF3n C: ${e.opciones[Zi[2]]}.`)}});var fa=e=>{Kt={...Kt,...e},id(),ad()};z("opcTextoMenos").addEventListener("click",()=>{let e=Math.max(0,ca.indexOf(Kt.texto)-1);fa({texto:ca[e]})});z("opcTextoMas").addEventListener("click",()=>{let e=ca.indexOf(Kt.texto);fa({texto:ca[Math.min(ca.length-1,(e<0?1:e)+1)]})});z("opcVelocidad").addEventListener("change",e=>fa({velocidad:parseFloat(e.target.value)}));for(let[e,t]of[["opcSentado","sentado"],["opcContraste","contraste"],["opcMovimiento","movimiento"],["opcObstaculos","obstaculos"],["opcSonido","sonido"],["opcLiviano","liviano"],["opcTactil","tactil"],["opcEquipo","equipo"]])z(e).addEventListener("change",n=>fa({[t]:n.target.checked}));ca.includes(Kt.texto)||(Kt.texto=1);var rv=performance.now(),oa=new P,ov=new P;function bT(e){if(window.__camLibre)return;if(Et==="inicio"||Et==="final"){let i=.55+.45*Math.sin(Fc*.11),s=16,r=un(0)-2;Ge.position.set(s+Math.sin(i)*40-8,7.5+Math.sin(Fc*.17)*1.2,r+Math.cos(i)*36),oa.set(s+6,4.2,r-4),Ge.lookAt(oa);return}if(Et==="cartel"&&Zn){let[i,s]=rT[ne],r=un(ne),o=i<0?1:-1,a=i===0?36:31,c=(i===0?0:o*.62)+Math.sin(Fc*.3)*.38;ov.set(i+Math.sin(c)*a,8.5,r+s+Math.cos(c)*a),Ge.position.lerp(ov,1-Math.exp(-3*e)),oa.set(i,2.6+(i===0?1.2:0),r+s),Ge.lookAt(oa);return}let t=bt.golpe>0&&!Kt.movimiento?(Math.random()-.5)*.18:0,n=bt.x*.6;Ge.position.x=rr(Ge.position.x,n,7,e)+t,Ge.position.y=rr(Ge.position.y,3.3+bt.y,6,e),Ge.position.z=rr(Ge.position.z,bt.z+7.6+bt.v*.06,14,e),oa.set(bt.x*.75,1.55+bt.y,bt.z-9),Ge.lookAt(oa)}var ju=0,Nc=0,Qu=0;function ET(e){if(window.__noAutoLiviano||Kt.liviano||Qe||Et!=="caminando"||Bn){ju=0,Nc=0;return}ju+=e,Nc++,Nc>=90&&(Qu=ju/Nc>.05?Qu+1:0,ju=0,Nc=0,Qu>=2&&(fa({liviano:!0}),Ki("Activamos los gr\xE1ficos livianos para que vaya m\xE1s fluido","",3200),Qu=0))}function _v(){requestAnimationFrame(_v);let e=performance.now(),t=Math.min((e-rv)/1e3,.05);rv=e,Bn||(Fc+=t);let n=!Bn;ET(t),Qe&&Ee.activo&&(Ee.actualizar(n?t:0),Ee.nuevaSilueta&&(Im.needsUpdate=!0,Ee.nuevaSilueta=!1),n&&pT(),n&&Et==="calibrando"&&Ee.calibrado&&(Et="caminando",Ki("\xA1Listo! Camin\xE1 en el lugar para avanzar","",2e3),zn()),n&&hT());let i=Qe&&Ee.activo&&Et!=="inicio"&&Et!=="final";kr.visible=i,i&&iT(),n&&Et==="caminando"?gT(t):n&&(Et==="cartel"||Et==="calibrando")?(bt.v=rr(bt.v,0,8,t),bt.x=rr(bt.x,Io[bt.lane],12,t)):n&&Et==="celebracion"&&(bt.v=0,Rm+=t,Math.random()<t*2.2&&_r.confeti(bt.x,3,bt.z-6),Rm>3.2&&xT());let s=Et!=="inicio"&&Et!=="final";Uc.objeto.visible=s&&!i,s&&(Uc.objeto.position.set(bt.x,bt.y,bt.z),Uc.actualizar(n?t:0,bt.v,bt.saludo,(Io[bt.lane]-bt.x)*.5,bt.golpe>0)),n&&(bT(t),Os.actualizar(Fc,t,s?bt.z:un(0),Ge),_r.actualizar(t));let r=s?bt.z:un(0);Ji.target.position.set(bt.x,0,r-8),Ji.position.set(bt.x+uc.x*70,uc.y*70,r-8+uc.z*70),Ji.target.updateMatrixWorld(),s?cT():z("hudDestino").style.visibility="hidden",zs.render(ks,Ge)}aT();yT();oT();od();ad();zn();_v();setTimeout(()=>z("btnJugarCamara").focus(),50);window.__MB={cuerpo:Ee,get modoCamara(){return Qe},get tMov(){return sd},get distRec(){return rd},alternarVerLugar:la,jugar:da,irAEstacion:mv,abrirCartel:uv,irAPregunta:cd,responder:ld,cerrarCartel:hd,pausar:Vr,continuar:nd,get ordenOpc(){return Zi},get estado(){return Et},get paso(){return wn},get estacion(){return ne},get puntos(){return Bs},get algodon(){return Bc},J:bt,mundo:Os,camara:Ge,renderer:zs,teclas:zc};})();
