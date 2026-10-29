(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var A0=0,jd=1,C0=2;var tc=1,sh=2,Eo=3,or=0,Ln=1,zn=2,fs=0,To=1,ec=2,Qd=3,tf=4,R0=5;var Pr=100,I0=101,P0=102,L0=103,D0=104,N0=200,U0=201,F0=202,O0=203,ef=204,nf=205,B0=206,z0=207,k0=208,V0=209,G0=210,H0=211,W0=212,X0=213,q0=214,yl=0,Ml=1,bl=2,ho=3,Sl=4,El=5,Tl=6,wl=7,rh=0,Y0=1,$0=2,Yi=0,sf=1,rf=2,of=3,af=4,cf=5,lf=6,nc=7;var hf=300,ar=301,Lr=302,oh=303,ah=304,ic=306,Is=1e3,cs=1001,Al=1002,Sn=1003,Z0=1004;var sc=1005;var Rn=1006,ch=1007;var cr=1008;var ni=1009,uf=1010,df=1011,wo=1012,lh=1013,$i=1014,Ti=1015,Zi=1016,hh=1017,uh=1018,Ao=1020,ff=35902,pf=35899,mf=1021,gf=1022,wi=1023,ls=1026,lr=1027,dh=1028,fh=1029,hr=1030,ph=1031;var mh=1033,rc=33776,oc=33777,ac=33778,cc=33779,gh=35840,_h=35841,xh=35842,vh=35843,yh=36196,Mh=37492,bh=37496,Sh=37488,Eh=37489,lc=37490,Th=37491,wh=37808,Ah=37809,Ch=37810,Rh=37811,Ih=37812,Ph=37813,Lh=37814,Dh=37815,Nh=37816,Uh=37817,Fh=37818,Oh=37819,Bh=37820,zh=37821,kh=36492,Vh=36494,Gh=36495,Hh=36283,Wh=36284,hc=36285,Xh=36286;var Ra=2300,Cl=2301,xl=2302,Wd=2303,Xd=2400,qd=2401,Yd=2402;var J0=3200;var qh=0,K0=1,Ds="",en="srgb",Ia="srgb-linear",Pa="linear",Me="srgb";var vl=7680;var j0=519,Q0=512,tg=513,eg=514,Yh=515,ng=516,ig=517,$h=518,sg=519,rg=35044;var _f="300 es",Xi=2e3,uo=2001;function Fv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ov(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function La(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function og(){let e=La("canvas");return e.style.display="block",e}var jm={},fo=null;function xf(...e){let t="THREE."+e.shift();fo?fo("log",t,...e):console.log(t,...e)}function ag(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Yt(...e){e=ag(e);let t="THREE."+e.shift();if(fo)fo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function $t(...e){e=ag(e);let t="THREE."+e.shift();if(fo)fo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Rr(...e){let t=e.join(" ");t in jm||(jm[t]=!0,Yt(...e))}function cg(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var lg={[yl]:Ml,[bl]:Tl,[Sl]:wl,[ho]:El,[Ml]:yl,[Tl]:bl,[wl]:Sl,[El]:ho},hs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qm=1234567,Ta=Math.PI/180,po=180/Math.PI;function Co(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[e&255]+Un[e>>8&255]+Un[e>>16&255]+Un[e>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function vf(e,t){return(e%t+t)%t}function Bv(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function zv(e,t,n){return e!==t?(n-e)/(t-e):0}function wa(e,t,n){return(1-n)*e+n*t}function kv(e,t,n,i){return wa(e,t,1-Math.exp(-n*i))}function Vv(e,t=1){return t-Math.abs(vf(e,t*2)-t)}function Gv(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Hv(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Wv(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Xv(e,t){return e+Math.random()*(t-e)}function qv(e){return e*(.5-Math.random())}function Yv(e){e!==void 0&&(Qm=e);let t=Qm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $v(e){return e*Ta}function Zv(e){return e*po}function Jv(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Kv(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function jv(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Qv(e,t,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":e.set(a*h,c*d,c*u,a*l);break;case"YZY":e.set(c*u,a*h,c*d,a*l);break;case"ZXZ":e.set(c*d,c*u,a*h,a*l);break;case"XZX":e.set(a*h,c*g,c*f,a*l);break;case"YXY":e.set(c*f,a*h,c*g,a*l);break;case"ZYZ":e.set(c*g,c*f,a*h,a*l);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function co(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yf={DEG2RAD:Ta,RAD2DEG:po,generateUUID:Co,clamp:oe,euclideanModulo:vf,mapLinear:Bv,inverseLerp:zv,lerp:wa,damp:kv,pingpong:Vv,smoothstep:Gv,smootherstep:Hv,randInt:Wv,randFloat:Xv,randFloatSpread:qv,seededRandom:Yv,degToRad:$v,radToDeg:Zv,isPowerOfTwo:Jv,ceilPowerOfTwo:Kv,floorPowerOfTwo:jv,setQuaternionFromProperEuler:Qv,normalize:Xn,denormalize:co},wf=class wf{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wf.prototype.isVector2=!0;var Nt=wf,gn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+y*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+y*a;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[n]=a*g+h*d+c*f-l*u,t[n+1]=c*g+h*u+l*d-a*f,t[n+2]=l*g+h*f+a*u-c*d,t[n+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-n;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,n=Math.sin(n*l)/h,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Af=class Af{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(t0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(t0.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Af.prototype.isVector3=!0;var P=Af,yd=new P,t0=new gn,Cf=class Cf{constructor(t,n,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l)}set(t,n,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],M=s[1],w=s[4],v=s[7],T=s[2],E=s[5],R=s[8];return r[0]=o*y+a*M+c*T,r[3]=o*m+a*w+c*E,r[6]=o*p+a*v+c*R,r[1]=l*y+h*M+d*T,r[4]=l*m+h*w+d*E,r[7]=l*p+h*v+d*R,r[2]=u*y+f*M+g*T,r[5]=u*m+f*w+g*E,r[8]=u*p+f*v+g*R,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return n*o*h-n*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=n*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*l-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=u*y,t[4]=(h*n-s*c)*y,t[5]=(s*r-a*n)*y,t[6]=f*y,t[7]=(i*c-l*n)*y,t[8]=(o*n-i*r)*y,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Md.makeScale(t,n)),this}rotate(t){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Md.makeRotation(-t)),this}translate(t,n){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Md.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Cf.prototype.isMatrix3=!0;var Jt=Cf,Md=new Jt,e0=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ty(){let e={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ds?Pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ia]:{primaries:t,whitePoint:i,transfer:Pa,toXYZ:e0,fromXYZ:n0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:Me,toXYZ:e0,fromXYZ:n0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),e}var ue=ty();function Rs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function lo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var $r,Rl=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$r===void 0&&($r=La("canvas")),$r.width=t.width,$r.height=t.height;let s=$r.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let n=La("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Rs(n[i]/255)*255):n[i]=Rs(n[i]);return{data:n,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ey=0,mo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Co(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame!="undefined"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bd(s[o].image)):r.push(bd(s[o]))}else r=bd(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function bd(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?Rl.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var ny=0,Sd=new P,qn=class e extends hs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=cs,s=cs,r=Rn,o=cr,a=wi,c=ni,l=e.DEFAULT_ANISOTROPY,h=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Co(),this.name="",this.source=new mo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sd).x}get height(){return this.source.getSize(Sd).y}get depth(){return this.source.getSize(Sd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Yt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Yt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case Al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case Al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=hf;qn.DEFAULT_ANISOTROPY=1;var Rf=class Rf{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let w=(l+1)/2,v=(f+1)/2,T=(p+1)/2,E=(h+u)/4,R=(d+y)/4,_=(g+m)/4;return w>v&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=R/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=_/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this.w=oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this.w=oe(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rf.prototype.isVector4=!0;var Ve=Rf,Il=class extends hs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ve(0,0,t,n),this.scissorTest=!1,this.viewport=new Ve(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new qn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new mo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Il{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Da=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ih=class ih{constructor(t,n,i,s,r,o,a,c,l,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l,h,d,u,f,g,y,m)}set(t,n,i,s,r,o,a,c,l,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ih().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Zr.setFromMatrixColumn(t,0).length(),r=1/Zr.setFromMatrixColumn(t,1).length(),o=1/Zr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;n[0]=c*h,n[4]=-c*d,n[8]=l,n[1]=f+g*l,n[5]=u-y*l,n[9]=-a*c,n[2]=y-u*l,n[6]=g+f*l,n[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,y=l*d;n[0]=u+y*a,n[4]=g*a-f,n[8]=o*l,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-g,n[6]=y+u*a,n[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,y=l*d;n[0]=u-y*a,n[4]=-o*d,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*h,n[9]=y-u*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;n[0]=c*h,n[4]=g*l-f,n[8]=u*l+y,n[1]=c*d,n[5]=y*l+u,n[9]=f*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,y=a*l;n[0]=c*h,n[4]=y-u*d,n[8]=g*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-l*h,n[6]=f*d+g,n[10]=u-y*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,y=a*l;n[0]=c*h,n[4]=-d,n[8]=l*h,n[1]=u*d+y,n[5]=o*h,n[9]=f*d-g,n[2]=g*d-f,n[6]=a*h,n[10]=y*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iy,t,sy)}lookAt(t,n,i){let s=this.elements;return ci.subVectors(t,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Js.crossVectors(i,ci),Js.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Js.crossVectors(i,ci)),Js.normalize(),Jc.crossVectors(ci,Js),s[0]=Js.x,s[4]=Jc.x,s[8]=ci.x,s[1]=Js.y,s[5]=Jc.y,s[9]=ci.y,s[2]=Js.z,s[6]=Jc.z,s[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],M=i[3],w=i[7],v=i[11],T=i[15],E=s[0],R=s[4],_=s[8],S=s[12],I=s[1],D=s[5],N=s[9],W=s[13],F=s[2],$=s[6],tt=s[10],j=s[14],lt=s[3],Q=s[7],G=s[11],C=s[15];return r[0]=o*E+a*I+c*F+l*lt,r[4]=o*R+a*D+c*$+l*Q,r[8]=o*_+a*N+c*tt+l*G,r[12]=o*S+a*W+c*j+l*C,r[1]=h*E+d*I+u*F+f*lt,r[5]=h*R+d*D+u*$+f*Q,r[9]=h*_+d*N+u*tt+f*G,r[13]=h*S+d*W+u*j+f*C,r[2]=g*E+y*I+m*F+p*lt,r[6]=g*R+y*D+m*$+p*Q,r[10]=g*_+y*N+m*tt+p*G,r[14]=g*S+y*W+m*j+p*C,r[3]=M*E+w*I+v*F+T*lt,r[7]=M*R+w*D+v*$+T*Q,r[11]=M*_+w*N+v*tt+T*G,r[15]=M*S+w*W+v*j+T*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],M=c*f-l*u,w=a*f-l*d,v=a*u-c*d,T=o*f-l*h,E=o*u-c*h,R=o*d-a*h;return n*(y*M-m*w+p*v)-i*(g*M-m*T+p*E)+s*(g*w-y*T+p*R)-r*(g*v-y*E+m*R)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return n*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],M=n*a-i*o,w=n*c-s*o,v=n*l-r*o,T=i*c-s*a,E=i*l-r*a,R=s*l-r*c,_=h*y-d*g,S=h*m-u*g,I=h*p-f*g,D=d*m-u*y,N=d*p-f*y,W=u*p-f*m,F=M*W-w*N+v*D+T*I-E*S+R*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/F;return t[0]=(a*W-c*N+l*D)*$,t[1]=(s*N-i*W-r*D)*$,t[2]=(y*R-m*E+p*T)*$,t[3]=(u*E-d*R-f*T)*$,t[4]=(c*I-o*W-l*S)*$,t[5]=(n*W-s*I+r*S)*$,t[6]=(m*v-g*R-p*w)*$,t[7]=(h*R-u*v+f*w)*$,t[8]=(o*N-a*I+l*_)*$,t[9]=(i*I-n*N-r*_)*$,t[10]=(g*E-y*v+p*M)*$,t[11]=(d*v-h*E-f*M)*$,t[12]=(a*S-o*D-c*_)*$,t[13]=(n*D-i*S+s*_)*$,t[14]=(y*w-g*T-m*M)*$,t[15]=(h*T-d*w+u*M)*$,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,M=c*l,w=c*h,v=c*d,T=i.x,E=i.y,R=i.z;return s[0]=(1-(y+p))*T,s[1]=(f+v)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(u+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+w)*R,s[9]=(m-M)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Zr.set(s[0],s[1],s[2]).length(),a=Zr.set(s[4],s[5],s[6]).length(),c=Zr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vi.copy(this);let l=1/o,h=1/a,d=1/c;return Vi.elements[0]*=l,Vi.elements[1]*=l,Vi.elements[2]*=l,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=d,Vi.elements[9]*=d,Vi.elements[10]*=d,n.setFromRotationMatrix(Vi),i.x=o,i.y=a,i.z=c,this}makePerspective(t,n,i,s,r,o,a=Xi,c=!1){let l=this.elements,h=2*r/(n-t),d=2*r/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===Xi)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===uo)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=Xi,c=!1){let l=this.elements,h=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===Xi)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===uo)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};ih.prototype.isMatrix4=!0;var de=ih,Zr=new P,Vi=new de,iy=new P(0,0,0),sy=new P(1,1,1),Js=new P,Jc=new P,ci=new P,i0=new de,s0=new gn,Yn=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return i0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return s0.setFromEuler(this),this.setFromQuaternion(s0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ry=0,r0=new P,Jr=new gn,Es=new de,Kc=new P,va=new P,oy=new P,ay=new gn,o0=new P(1,0,0),a0=new P(0,1,0),c0=new P(0,0,1),l0={type:"added"},cy={type:"removed"},Kr={type:"childadded",child:null},Ed={type:"childremoved",child:null},In=class e extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new Yn,i=new gn,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(o0,t)}rotateY(t){return this.rotateOnAxis(a0,t)}rotateZ(t){return this.rotateOnAxis(c0,t)}translateOnAxis(t,n){return r0.copy(t).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(o0,t)}translateY(t){return this.translateOnAxis(a0,t)}translateZ(t){return this.translateOnAxis(c0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Kc.copy(t):Kc.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(va,Kc,this.up):Es.lookAt(Kc,va,this.up),this.quaternion.setFromRotationMatrix(Es),s&&(Es.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(Es),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(l0),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cy),Ed.child=t,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Es.multiply(t.parent.matrixWorld)),t.applyMatrix4(Es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(l0),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,oy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,ay,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(n){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};In.DEFAULT_UP=new P(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}},ly={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=n.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ly)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},jc={h:0,s:0,l:0};function Td(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Gt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ue.workingColorSpace){return this.r=t,this.g=n,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ue.workingColorSpace){if(t=vf(t,1),n=oe(n,0,1),i=oe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Td(o,r,t+1/3),this.g=Td(o,r,t),this.b=Td(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,n=en){function i(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=en){let i=hg[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ue.workingToColorSpace(Fn.copy(this),t),Math.round(oe(Fn.r*255,0,255))*65536+Math.round(oe(Fn.g*255,0,255))*256+Math.round(oe(Fn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ue.workingColorSpace){ue.workingToColorSpace(Fn.copy(this),n);let i=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=ue.workingColorSpace){return ue.workingToColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=en){ue.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,i=Fn.g,s=Fn.b;return t!==en?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ks),this.setHSL(Ks.h+t,Ks.s+n,Ks.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ks),t.getHSL(jc);let i=wa(Ks.h,jc.h,n),s=wa(Ks.s,jc.s,n),r=wa(Ks.l,jc.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Gt;Gt.NAMES=hg;var Ua=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fa=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Gi=new P,Ts=new P,wd=new P,ws=new P,jr=new P,Qr=new P,h0=new P,Ad=new P,Cd=new P,Rd=new P,Id=new Ve,Pd=new Ve,Ld=new Ve,er=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Gi.subVectors(t,n),s.cross(Gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Gi.subVectors(s,n),Ts.subVectors(i,n),wd.subVectors(t,n);let o=Gi.dot(Gi),a=Gi.dot(Ts),c=Gi.dot(wd),l=Ts.dot(Ts),h=Ts.dot(wd),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(t,n,i,s,r,o,a,c){return this.getBarycoord(t,n,i,s,ws)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ws.x),c.addScaledVector(o,ws.y),c.addScaledVector(a,ws.z),c)}static getInterpolatedAttribute(t,n,i,s,r,o){return Id.setScalar(0),Pd.setScalar(0),Ld.setScalar(0),Id.fromBufferAttribute(t,n),Pd.fromBufferAttribute(t,i),Ld.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Id,r.x),o.addScaledVector(Pd,r.y),o.addScaledVector(Ld,r.z),o}static isFrontFacing(t,n,i,s){return Gi.subVectors(i,n),Ts.subVectors(t,n),Gi.cross(Ts).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Gi.cross(Ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,o,a;jr.subVectors(s,i),Qr.subVectors(r,i),Ad.subVectors(t,i);let c=jr.dot(Ad),l=Qr.dot(Ad);if(c<=0&&l<=0)return n.copy(i);Cd.subVectors(t,s);let h=jr.dot(Cd),d=Qr.dot(Cd);if(h>=0&&d<=h)return n.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(jr,o);Rd.subVectors(t,r);let f=jr.dot(Rd),g=Qr.dot(Rd);if(g>=0&&f<=g)return n.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Qr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return h0.subVectors(r,s),a=(d-h)/(d-h+(f-g)),n.copy(s).addScaledVector(h0,a);let p=1/(m+y+u);return o=y*p,a=u*p,n.copy(i).addScaledVector(jr,o).addScaledVector(Qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},us=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qc.copy(i.boundingBox)),Qc.applyMatrix4(t.matrixWorld),this.union(Qc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ya),tl.subVectors(this.max,ya),to.subVectors(t.a,ya),eo.subVectors(t.b,ya),no.subVectors(t.c,ya),js.subVectors(eo,to),Qs.subVectors(no,eo),Tr.subVectors(to,no);let n=[0,-js.z,js.y,0,-Qs.z,Qs.y,0,-Tr.z,Tr.y,js.z,0,-js.x,Qs.z,0,-Qs.x,Tr.z,0,-Tr.x,-js.y,js.x,0,-Qs.y,Qs.x,0,-Tr.y,Tr.x,0];return!Dd(n,to,eo,no,tl)||(n=[1,0,0,0,1,0,0,0,1],!Dd(n,to,eo,no,tl))?!1:(el.crossVectors(js,Qs),n=[el.x,el.y,el.z],Dd(n,to,eo,no,tl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(As),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},As=[new P,new P,new P,new P,new P,new P,new P,new P],Hi=new P,Qc=new us,to=new P,eo=new P,no=new P,js=new P,Qs=new P,Tr=new P,ya=new P,tl=new P,el=new P,wr=new P;function Dd(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){wr.fromArray(e,r);let a=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),c=t.dot(wr),l=n.dot(wr),h=i.dot(wr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hn=new P,nl=new Nt,hy=0,ke=class extends hs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hy++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=rg,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(t),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=co(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=co(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=co(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=co(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=co(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),s=Xn(s,this.array),r=Xn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Oa=class extends ke{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Ba=class extends ke{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ce=class extends ke{constructor(t,n,i){super(new Float32Array(t),n,i)}},uy=new us,Ma=new P,Nd=new P,Ps=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):uy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ma.subVectors(t,this.center);let n=Ma.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ma,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ma.copy(t.center).add(Nd)),this.expandByPoint(Ma.copy(t.center).sub(Nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dy=0,Si=new de,Ud=new In,io=new P,li=new us,ba=new us,bn=new P,qe=class e extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fv(t)?Ba:Oa)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,n,i){return Si.makeTranslation(t,n,i),this.applyMatrix4(Si),this}scale(t,n,i){return Si.makeScale(t,n,i),this.applyMatrix4(Si),this}lookAt(t){return Ud.lookAt(t),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];li.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(li.min,ba.min),li.expandByPoint(bn),bn.addVectors(li.max,ba.max),li.expandByPoint(bn)):(li.expandByPoint(ba.min),li.expandByPoint(ba.max))}li.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)bn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(bn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bn.fromBufferAttribute(a,l),c&&(io.fromBufferAttribute(t,l),bn.add(io)),s=Math.max(s,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new P,c[_]=new P;let l=new P,h=new P,d=new P,u=new Nt,f=new Nt,g=new Nt,y=new P,m=new P;function p(_,S,I){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,I),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[_].add(y),a[S].add(y),a[I].add(y),c[_].add(m),c[S].add(m),c[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,S=M.length;_<S;++_){let I=M[_],D=I.start,N=I.count;for(let W=D,F=D+N;W<F;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let w=new P,v=new P,T=new P,E=new P;function R(_){T.fromBufferAttribute(s,_),E.copy(T);let S=a[_];w.copy(S),w.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(E,S);let D=v.dot(c[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,S=M.length;_<S;++_){let I=M[_],D=I.start,N=I.count;for(let W=D,F=D+N;W<F;W+=3)R(t.getX(W+0)),R(t.getX(W+1)),R(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ke(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new ke(u,h,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);n.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,i);c.push(f)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(n))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fd=new P,fy=new P,py=new Jt,Wi=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Fd.subVectors(i,n).cross(fy.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Fd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||py.getNormalMatrix(t),s=this.coplanarPoint(Fd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},my=0,Ls=class extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=To,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=nf,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vl,this.stencilZFail=vl,this.stencilZPass=vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Yt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Yt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(n){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Wi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Cs=new P,Od=new P,il=new P,sl=new P,za=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Cs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Cs.copy(this.origin).addScaledVector(this.direction,n),Cs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Od.copy(t).add(n).multiplyScalar(.5),il.copy(n).sub(t).normalize(),sl.copy(this.origin).sub(Od);let r=t.distanceTo(n)*.5,o=-this.direction.dot(il),a=sl.dot(this.direction),c=-sl.dot(il),l=sl.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Od).addScaledVector(il,u),f}intersectSphere(t,n){if(t.radius<0)return null;Cs.subVectors(t.center,this.origin);let i=Cs.dot(this.direction),s=Cs.dot(Cs)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Cs)!==null}intersectTriangle(t,n,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=n.x-o.x,y=n.y-o.y,m=n.z-o.z,p=i.x-o.x,M=i.y-o.y,w=i.z-o.z,v=Math.abs(c),T=Math.abs(l),E=Math.abs(h),R,_,S,I,D,N,W,F,$,tt,j,lt;if(v>=T&&v>=E?(S=c,N=d,$=g,lt=p,c>=0?(R=l,_=h,I=u,D=f,W=y,F=m,tt=M,j=w):(R=h,_=l,I=f,D=u,W=m,F=y,tt=w,j=M)):T>=E?(S=l,N=u,$=y,lt=M,l>=0?(R=h,_=c,I=f,D=d,W=m,F=g,tt=w,j=p):(R=c,_=h,I=d,D=f,W=g,F=m,tt=p,j=w)):(S=h,N=f,$=m,lt=w,h>=0?(R=c,_=l,I=d,D=u,W=g,F=y,tt=p,j=M):(R=l,_=c,I=u,D=d,W=y,F=g,tt=M,j=p)),S===0)return null;let Q=R/S,G=_/S,C=1/S,U=I-Q*N,X=D-G*N,at=W-Q*$,K=F-G*$,nt=tt-Q*lt,B=j-G*lt,L=nt*K-B*at,ot=U*B-X*nt,_t=at*X-K*U;if(s){if(L<0||ot<0||_t<0)return null}else if((L<0||ot<0||_t<0)&&(L>0||ot>0||_t>0))return null;let ut=L+ot+_t;if(ut===0)return null;let Wt=C*(L*N+ot*$+_t*lt);return(ut>0?Wt<0:Wt>0)?null:this.at(Wt/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},u0=new de,Ar=new za,rl=new Ps,d0=new P,ol=new P,al=new P,cl=new P,Bd=new P,ll=new P,f0=new P,hl=new P,Ft=class extends In{constructor(t=new qe,n=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ll.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Bd.fromBufferAttribute(d,t),o?ll.addScaledVector(Bd,h):ll.addScaledVector(Bd.sub(n),h))}n.add(ll)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),Ar.copy(t.ray).recast(t.near),!(rl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(rl,d0)===null||Ar.origin.distanceToSquared(d0)>(t.far-t.near)**2))&&(u0.copy(r).invert(),Ar.copy(t.ray).applyMatrix4(u0),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ar)))}_computeIntersections(t,n,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=w;v<T;v+=3){let E=a.getX(v),R=a.getX(v+1),_=a.getX(v+2);s=ul(this,p,t,i,l,h,d,E,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=ul(this,o,t,i,l,h,d,M,w,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=w;v<T;v+=3){let E=v,R=v+1,_=v+2;s=ul(this,p,t,i,l,h,d,E,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,w=m+1,v=m+2;s=ul(this,o,t,i,l,h,d,M,w,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function gy(e,t,n,i,s,r,o,a){let c;if(t.side===Ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===or,a),c===null)return null;hl.copy(a),hl.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(hl);return l<n.near||l>n.far?null:{distance:l,point:hl.clone(),object:e}}function ul(e,t,n,i,s,r,o,a,c,l){e.getVertexPosition(a,ol),e.getVertexPosition(c,al),e.getVertexPosition(l,cl);let h=gy(e,t,n,i,ol,al,cl,f0);if(h){let d=new P;er.getBarycoord(f0,ol,al,cl,d),s&&(h.uv=er.getInterpolatedAttribute(s,a,c,l,d,new Nt)),r&&(h.uv1=er.getInterpolatedAttribute(r,a,c,l,d,new Nt)),o&&(h.normal=er.getInterpolatedAttribute(o,a,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};er.getNormal(ol,al,cl,u.normal),h.face=u,h.barycoord=d}return h}var ka=class extends qn{constructor(t=null,n=1,i=1,s,r,o,a,c,l=Sn,h=Sn,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _o=class extends ke{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},so=new de,p0=new de,dl=[],m0=new us,_y=new de,Sa=new Ft,Ea=new Ps,ei=class extends Ft{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,_y)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,so),m0.copy(t.boundingBox).applyMatrix4(so),this.boundingBox.union(m0)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,so),Ea.copy(t.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Ea)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),t.ray.intersectsSphere(Ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,so),p0.multiplyMatrices(i,so),Sa.matrixWorld=p0,Sa.raycast(t,dl);for(let o=0,a=dl.length;o<a;o++){let c=dl[o];c.instanceId=r,c.object=this,n.push(c)}dl.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ka(new Float32Array(s*this.count),s,this.count,dh,Ti));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cr=new Ps,xy=new Nt(.5,.5),fl=new P,xo=class{constructor(t=new Wi,n=new Wi,i=new Wi,s=new Wi,r=new Wi,o=new Wi){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Xi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,f-h,p-g,T-M).normalize(),s[1].setComponents(l+o,f+h,p+g,T+M).normalize(),s[2].setComponents(l+a,f+d,p+y,T+w).normalize(),s[3].setComponents(l-a,f-d,p-y,T-w).normalize(),i)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,p-m,T-v).normalize();else if(s[4].setComponents(l-c,f-u,p-m,T-v).normalize(),n===Xi)s[5].setComponents(l+c,f+u,p+m,T+v).normalize();else if(n===uo)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){Cr.center.set(0,0,0);let n=xy.distanceTo(t.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(fl.x=s.normal.x>0?t.max.x:t.min.x,fl.y=s.normal.y>0?t.max.y:t.min.y,fl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fl)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vo=class extends Ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},g0=new de,$d=new za,pl=new Ps,ml=new P,Va=class extends In{constructor(t=new qe,n=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,t.ray.intersectsSphere(pl)===!1)return;g0.copy(s).invert(),$d.copy(t.ray).applyMatrix4(g0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=l.getX(g);ml.fromBufferAttribute(d,m),_0(ml,m,c,s,t,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)ml.fromBufferAttribute(d,g),_0(ml,g,c,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _0(e,t,n,i,s,r,o){let a=$d.distanceSqToPoint(e);if(a<n){let c=new P;$d.closestPointToPoint(e,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ga=class extends qn{constructor(t=[],n=ar,i,s,r,o,a,c,l,h){super(t,n,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qi=class extends qn{constructor(t,n,i,s,r,o,a,c,l){super(t,n,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var nr=class extends qn{constructor(t,n,i=$i,s,r,o,a=Sn,c=Sn,l,h=ls,d=1){if(h!==ls&&h!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:d};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Ll=class extends nr{constructor(t,n=$i,i=ar,s,r,o=Sn,a=Sn,c,l=ls){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ha=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Te=class e extends qe{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(y,m,p,M,w,v,T,E,R,_,S){let I=v/R,D=T/_,N=v/2,W=T/2,F=E/2,$=R+1,tt=_+1,j=0,lt=0,Q=new P;for(let G=0;G<tt;G++){let C=G*D-W;for(let U=0;U<$;U++){let X=U*I-N;Q[y]=X*M,Q[m]=C*w,Q[p]=F,l.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(U/R),d.push(1-G/_),j+=1}}for(let G=0;G<_;G++)for(let C=0;C<R;C++){let U=u+C+$*G,X=u+C+$*(G+1),at=u+(C+1)+$*(G+1),K=u+(C+1)+$*G;c.push(U,X,K),c.push(X,at,K),lt+=6}a.addGroup(f,lt,S),f+=lt,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wa=class e extends qe{constructor(t=1,n=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:s,heightSegments:r},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=n/2,d=Math.PI/2*t,u=n,f=2*d+u,g=i*2+r,y=s+1,m=new P,p=new P;for(let M=0;M<=g;M++){let w=0,v=0,T=0,E=0;if(M<=i){let S=M/i,I=S*Math.PI/2;v=-h-t*Math.cos(I),T=t*Math.sin(I),E=-t*Math.cos(I),w=S*d}else if(M<=i+r){let S=(M-i)/r;v=-h+S*n,T=t,E=0,w=d+S*u}else{let S=(M-i-r)/i,I=S*Math.PI/2;v=h+t*Math.sin(I),T=t*Math.cos(I),E=t*Math.sin(I),w=d+u+S*d}let R=Math.max(0,Math.min(1,w/f)),_=0;M===0?_=.5/s:M===g&&(_=-.5/s);for(let S=0;S<=s;S++){let I=S/s,D=I*Math.PI*2,N=Math.sin(D),W=Math.cos(D);p.x=-T*W,p.y=v,p.z=T*N,a.push(p.x,p.y,p.z),m.set(-T*W,E,T*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(I+_,R)}if(M>0){let S=(M-1)*y;for(let I=0;I<s;I++){let D=S+I,N=S+I+1,W=M*y+I,F=M*y+I+1;o.push(D,N,W),o.push(N,F,W)}}}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ir=class e extends qe{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],c=[],l=new P,h=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let f=i+d/n*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pn=class e extends qe{constructor(t=1,n=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;M(),o===!1&&(t>0&&w(!0),n>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function M(){let v=new P,T=new P,E=0,R=(n-t)/i;for(let _=0;_<=r;_++){let S=[],I=_/r,D=I*(n-t)+t;for(let N=0;N<=s;N++){let W=N/s,F=W*c+a,$=Math.sin(F),tt=Math.cos(F);T.x=D*$,T.y=-I*i+m,T.z=D*tt,d.push(T.x,T.y,T.z),v.set($,R,tt).normalize(),u.push(v.x,v.y,v.z),f.push(W,1-I),S.push(g++)}y.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let I=y[S][_],D=y[S+1][_],N=y[S+1][_+1],W=y[S][_+1];(t>0||S!==0)&&(h.push(I,D,W),E+=3),(n>0||S!==r-1)&&(h.push(D,N,W),E+=3)}l.addGroup(p,E,0),p+=E}function w(v){let T=g,E=new Nt,R=new P,_=0,S=v===!0?t:n,I=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;let D=g;for(let N=0;N<=s;N++){let F=N/s*c+a,$=Math.cos(F),tt=Math.sin(F);R.x=S*tt,R.y=m*I,R.z=S*$,d.push(R.x,R.y,R.z),u.push(0,I,0),E.x=$*.5+.5,E.y=tt*.5*I+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){let W=T+N,F=D+N;v===!0?h.push(F,F+1,W):h.push(F+1,F,W),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yo=class e extends Pn{constructor(t=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dl=class e extends qe{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new P,v=new P,T=new P;for(let E=0;E<n.length;E+=3)f(n[E+0],w),f(n[E+1],v),f(n[E+2],T),c(w,v,T,M)}function c(M,w,v,T){let E=T+1,R=[];for(let _=0;_<=E;_++){R[_]=[];let S=M.clone().lerp(v,_/E),I=w.clone().lerp(v,_/E),D=E-_;for(let N=0;N<=D;N++)N===0&&_===E?R[_][N]=S:R[_][N]=S.clone().lerp(I,N/D)}for(let _=0;_<E;_++)for(let S=0;S<2*(E-_)-1;S++){let I=Math.floor(S/2);S%2===0?(u(R[_][I+1]),u(R[_+1][I]),u(R[_][I])):(u(R[_][I+1]),u(R[_+1][I+1]),u(R[_+1][I]))}}function l(M){let w=new P;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(M),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(v,1-T)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){let w=o[M+0],v=o[M+2],T=o[M+4],E=Math.max(w,v,T),R=Math.min(w,v,T);E>.9&&R<.1&&(w<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){let v=M*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let M=new P,w=new P,v=new P,T=new P,E=new Nt,R=new Nt,_=new Nt;for(let S=0,I=0;S<r.length;S+=9,I+=6){M.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),_.set(o[I+4],o[I+5]),T.copy(M).add(w).add(v).divideScalar(3);let D=m(T);y(E,I+0,M,D),y(R,I+2,w,D),y(_,I+4,v,D)}}function y(M,w,v,T){T<0&&M.x===1&&(o[w]=M.x-1),v.x===0&&v.z===0&&(o[w]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}};var Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,n){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=n||(o.isVector2?new Nt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new P,s=[],r=[],o=[],a=new P,c=new de;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xa=class extends Ei{constructor(t=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,n=new Nt){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nl=class extends Xa{constructor(t,n,i,s,r,o){super(t,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mf(){let e=0,t=0,n=0,i=0;function s(r,o,a,c){e=r,t=a,n=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return e+t*r+n*o+i*a}}}var x0=new P,v0=new P,zd=new Mf,kd=new Mf,Vd=new Mf,Mo=class extends Ei{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new P){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(v0.subVectors(s[0],s[1]).add(s[0]),l=v0);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(x0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=x0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),zd.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,y,m),kd.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,y,m),Vd.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(zd.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),kd.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Vd.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(zd.calc(c),kd.calc(c),Vd.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function y0(e,t,n,i,s){let r=(i-t)*.5,o=(s-n)*.5,a=e*e,c=e*a;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*a+r*e+n}function vy(e,t){let n=1-e;return n*n*t}function yy(e,t){return 2*(1-e)*e*t}function My(e,t){return e*e*t}function Aa(e,t,n,i){return vy(e,t)+yy(e,n)+My(e,i)}function by(e,t){let n=1-e;return n*n*n*t}function Sy(e,t){let n=1-e;return 3*n*n*e*t}function Ey(e,t){return 3*(1-e)*e*e*t}function Ty(e,t){return e*e*e*t}function Ca(e,t,n,i,s){return by(e,t)+Sy(e,n)+Ey(e,i)+Ty(e,s)}var Ul=class extends Ei{constructor(t=new Nt,n=new Nt,i=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new Nt){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ca(t,s.x,r.x,o.x,a.x),Ca(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fl=class extends Ei{constructor(t=new P,n=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new P){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ca(t,s.x,r.x,o.x,a.x),Ca(t,s.y,r.y,o.y,a.y),Ca(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ol=class extends Ei{constructor(t=new Nt,n=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Nt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Nt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bl=class extends Ei{constructor(t=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new P){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends Ei{constructor(t=new Nt,n=new Nt,i=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new Nt){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Aa(t,s.x,r.x,o.x),Aa(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends Ei{constructor(t=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new P){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Aa(t,s.x,r.x,o.x),Aa(t,s.y,r.y,o.y),Aa(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kl=class extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Nt){let i=n,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(y0(a,c.x,l.x,h.x,d.x),y0(a,c.y,l.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new Nt().fromArray(s))}return this}},wy=Object.freeze({__proto__:null,ArcCurve:Nl,CatmullRomCurve3:Mo,CubicBezierCurve:Ul,CubicBezierCurve3:Fl,EllipseCurve:Xa,LineCurve:Ol,LineCurve3:Bl,QuadraticBezierCurve:zl,QuadraticBezierCurve3:qa,SplineCurve:kl});var ds=class e extends Dl{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var Bn=class e extends qe{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=n/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let w=0;w<l;w++){let v=w*d-r;g.push(v,-M,0),y.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let w=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),E=M+1+l*p;f.push(w,v,E),f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},bo=class e extends qe{constructor(t=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(n-t)/s,f=new P,g=new Nt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let M=p+m,w=M,v=M+i+1,T=M+i+2,E=M+1;a.push(w,v,E),a.push(v,T,E)}}this.setIndex(a),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var hi=class e extends qe{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new P,u=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let M=[],w=p/i,v=o+w*a,T=t*Math.cos(v),E=Math.sqrt(t*t-T*T),R=0;p===0&&o===0?R=.5/n:p===i&&c===Math.PI&&(R=-.5/n);for(let _=0;_<=n;_++){let S=_/n,I=s+S*r;d.x=-E*Math.cos(I),d.y=T,d.z=E*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(S+R,1-w),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<n;M++){let w=h[p][M+1],v=h[p][M],T=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(w,v,E),(p!==i-1||c<Math.PI)&&f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ya=class e extends qe{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new P,f=new P,g=new P;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+n*Math.cos(m))*Math.cos(M),f.y=(t+n*Math.cos(m))*Math.sin(M),f.z=n*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,v=(s+1)*y+m;c.push(p,M,v),c.push(M,w,v)}this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var $a=class e extends qe{constructor(t=new qa(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new Nt,h=new P,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function y(){for(let w=0;w<n;w++)m(w);m(r===!1?n:0),M(),p()}function m(w){h=t.getPointAt(w/n,h);let v=o.normals[w],T=o.binormals[w];for(let E=0;E<=s;E++){let R=E/s*Math.PI*2,_=Math.sin(R),S=-Math.cos(R);c.x=S*v.x+_*T.x,c.y=S*v.y+_*T.y,c.z=S*v.z+_*T.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=n;w++)for(let v=1;v<=s;v++){let T=(s+1)*(w-1)+(v-1),E=(s+1)*w+(v-1),R=(s+1)*w+v,_=(s+1)*(w-1)+v;g.push(T,E,_),g.push(E,R,_)}}function M(){for(let w=0;w<=n;w++)for(let v=0;v<=s;v++)l.x=w/n,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new wy[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Dr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(M0(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(M0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function kn(e){let t={};for(let n=0;n<e.length;n++){let i=Dr(e[n]);for(let s in i)t[s]=i[s]}return t}function M0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ay(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function bf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var ug={clone:Dr,merge:kn},Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Ay(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new de().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vl=class extends ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var un=class extends Ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=rh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gl=class extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hl=class extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ro(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Gd(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ir=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break n}if(!(t>=r)){let a=n[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wl=class extends ir{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xd,endingEnd:Xd}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qd:r=t,a=2*n-i;break;case Yd:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case qd:o=t,c=2*i-n;break;case Yd:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+M*o[l+T]+w*o[c+T]+v*o[d+T];return r}},Xl=class extends ir{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},ql=class extends ir{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Yl=class extends ir{interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-n)/(s-n),y=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],p=f*u+g*2,M=d[p],w=d[p+1],v=t*u+g*2,T=h[v],E=h[v+1],R=Py(i,n,M,T,s);r[g]=dg(R,y,w,E,m)}return r}};function dg(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function Iy(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function Py(e,t,n,i,s){let r=(e-t)/(s-t);for(let o=0;o<8;o++){let a=dg(r,t,n,i,s)-e;if(Math.abs(a)<1e-10)break;let c=Iy(r,t,n,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var di=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ro(n,this.TimeBufferType),this.values=ro(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ro(t.times,Array),values:ro(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Gd(t.settings)&&(i.settings={inTangents:ro(t.settings.inTangents,Array),outTangents:ro(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Yl(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Ra:n=this.InterpolantFactoryMethodDiscrete;break;case Cl:n=this.InterpolantFactoryMethodLinear;break;case xl:n=this.InterpolantFactoryMethodSmooth;break;case Wd:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Yt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return Wd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Gd(this.settings)&&(b0(this.settings.inTangents,t),b0(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){$t("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){$t("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ov(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){$t("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=n[d+g];if(y!==n[u+g]||y!==n[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)n[c+l]=n[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Gd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function b0(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Cl;var sr=class extends di{constructor(t,n,i){super(t,n,i)}};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Ra;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};$l.prototype.ValueTypeName="color";var Zl=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};Zl.prototype.ValueTypeName="number";var Jl=class extends ir{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-n)/(s-n),l=t*a;for(let h=l+a;l!==h;l+=4)gn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Za=class extends di{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends di{constructor(t,n,i){super(t,n,i)}};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Ra;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};Kl.prototype.ValueTypeName="vector";var jl=class{constructor(t,n,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fg=new jl,Ql=class{constructor(t){this.manager=t!==void 0?t:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ja=class extends In{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Ka=class extends Ja{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},Hd=new de,S0=new P,E0=new P,th=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;S0.setFromMatrixPosition(t.matrixWorld),n.position.copy(S0),E0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(E0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){Hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Hd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===uo||t.reversedDepth?n.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),n.multiply(Hd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gl=new P,_l=new gn,as=new P,ja=class extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(gl,_l,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,as.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(gl,_l,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,as.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new P,T0=new Nt,w0=new Nt,On=class extends ja{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-t/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-t/tr.z)}getViewSize(t,n){return this.getViewBounds(t,T0,w0),n.subVectors(w0,T0)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var So=class extends ja{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Zd=class extends th{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qa=class extends Ja{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new Zd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var oo=-90,ao=1,eh=class extends In{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(oo,ao,t,n);s.layers=this.layers,this.add(s);let r=new On(oo,ao,t,n);r.layers=this.layers,this.add(r);let o=new On(oo,ao,t,n);o.layers=this.layers,this.add(o);let a=new On(oo,ao,t,n);a.layers=this.layers,this.add(a);let c=new On(oo,ao,t,n);c.layers=this.layers,this.add(c);let l=new On(oo,ao,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(let l of n)this.remove(l);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nh=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sf="\\[\\]\\.:\\/",Ly=new RegExp("["+Sf+"]","g"),Ef="[^"+Sf+"]",Dy="[^"+Sf.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Ef),Uy=/(WCOD+)?/.source.replace("WCOD",Dy),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ef),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ef),By=new RegExp("^"+Ny+Uy+Fy+Oy+"$"),zy=["material","materials","bones","map"],Jd=class{constructor(t,n,i){let s=i||Oe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Oe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(t){let n=By.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=n.nodeName;$t("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Jd;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FT=new Float32Array(1);var If=class If{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};If.prototype.isMatrix2=!0;var Kd=If;function Tf(e,t,n,i){let s=ky(i);switch(n){case mf:return e*t;case dh:return e*t/s.components*s.byteLength;case fh:return e*t/s.components*s.byteLength;case hr:return e*t*2/s.components*s.byteLength;case ph:return e*t*2/s.components*s.byteLength;case gf:return e*t*3/s.components*s.byteLength;case wi:return e*t*4/s.components*s.byteLength;case mh:return e*t*4/s.components*s.byteLength;case rc:case oc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ac:case cc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _h:case vh:return Math.max(e,16)*Math.max(t,8)/4;case gh:case xh:return Math.max(e,8)*Math.max(t,8)/2;case yh:case Mh:case Sh:case Eh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bh:case lc:case Th:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case kh:case Vh:case Gh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Hh:case Wh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case hc:case Xh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ky(e){switch(e){case ni:case uf:return{byteLength:1,components:1};case wo:case df:case Zi:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case $i:case lh:case Ti:return{byteLength:4,components:1};case ff:case pf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ug(){let e=null,t=!1,n=null,i=null;function s(r,o){i=e.requestAnimationFrame(s),n(r,o)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Yy(e){let t=new WeakMap;function n(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=e.createBuffer();e.bindBuffer(c,u),e.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=e.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=e.SHORT;else if(l instanceof Uint32Array)f=e.UNSIGNED_INT;else if(l instanceof Int32Array)f=e.INT;else if(l instanceof Int8Array)f=e.BYTE;else if(l instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let h=c.array,d=c.updateRanges;if(e.bindBuffer(l,a),d.length===0)e.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];e.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(e.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t2=`#ifdef USE_AOMAP
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
#endif`,e2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n2=`#ifdef USE_BATCHING
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
#endif`,i2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a2=`#ifdef USE_IRIDESCENCE
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
#endif`,c2=`#ifdef USE_BUMPMAP
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
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_2=`#define PI 3.141592653589793
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
} // validated`,x2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v2=`vec3 transformedNormal = objectNormal;
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
#endif`,y2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E2="gl_FragColor = linearToOutputTexel( gl_FragColor );",T2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w2=`#ifdef USE_ENVMAP
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
#endif`,A2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
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
#endif`,R2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I2=`#ifdef USE_ENVMAP
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
#endif`,P2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U2=`#ifdef USE_GRADIENTMAP
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
}`,F2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k2=`#ifdef USE_ENVMAP
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
#endif`,V2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X2=`PhysicalMaterial material;
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
#endif`,q2=`uniform sampler2D dfgLUT;
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
}`,Y2=`
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
#endif`,$2=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,K2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s3=`#if defined( USE_POINTS_UV )
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
#endif`,r3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h3=`#ifdef USE_MORPHTARGETS
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
#endif`,u3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_3=`#ifdef USE_NORMALMAP
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
#endif`,x3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D3=`float getShadowMask() {
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
}`,N3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U3=`#ifdef USE_SKINNING
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
#endif`,F3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O3=`#ifdef USE_SKINNING
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
#endif`,B3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#ifdef USE_TRANSMISSION
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
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z3=`uniform sampler2D t2D;
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
}`,J3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,eM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,aM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,lM=`uniform vec3 diffuse;
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
}`,hM=`#define LAMBERT
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
}`,uM=`#define LAMBERT
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
}`,dM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,_M=`#define PHONG
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
}`,xM=`#define STANDARD
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
}`,vM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,MM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,SM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,wM=`uniform float rotation;
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
}`,AM=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:$y,alphahash_pars_fragment:Zy,alphamap_fragment:Jy,alphamap_pars_fragment:Ky,alphatest_fragment:jy,alphatest_pars_fragment:Qy,aomap_fragment:t2,aomap_pars_fragment:e2,batching_pars_vertex:n2,batching_vertex:i2,begin_vertex:s2,beginnormal_vertex:r2,bsdfs:o2,iridescence_fragment:a2,bumpmap_pars_fragment:c2,clipping_planes_fragment:l2,clipping_planes_pars_fragment:h2,clipping_planes_pars_vertex:u2,clipping_planes_vertex:d2,color_fragment:f2,color_pars_fragment:p2,color_pars_vertex:m2,color_vertex:g2,common:_2,cube_uv_reflection_fragment:x2,defaultnormal_vertex:v2,displacementmap_pars_vertex:y2,displacementmap_vertex:M2,emissivemap_fragment:b2,emissivemap_pars_fragment:S2,colorspace_fragment:E2,colorspace_pars_fragment:T2,envmap_fragment:w2,envmap_common_pars_fragment:A2,envmap_pars_fragment:C2,envmap_pars_vertex:R2,envmap_physical_pars_fragment:k2,envmap_vertex:I2,fog_vertex:P2,fog_pars_vertex:L2,fog_fragment:D2,fog_pars_fragment:N2,gradientmap_pars_fragment:U2,lightmap_pars_fragment:F2,lights_lambert_fragment:O2,lights_lambert_pars_fragment:B2,lights_pars_begin:z2,lights_toon_fragment:V2,lights_toon_pars_fragment:G2,lights_phong_fragment:H2,lights_phong_pars_fragment:W2,lights_physical_fragment:X2,lights_physical_pars_fragment:q2,lights_fragment_begin:Y2,lights_fragment_maps:$2,lights_fragment_end:Z2,lightprobes_pars_fragment:J2,logdepthbuf_fragment:K2,logdepthbuf_pars_fragment:j2,logdepthbuf_pars_vertex:Q2,logdepthbuf_vertex:t3,map_fragment:e3,map_pars_fragment:n3,map_particle_fragment:i3,map_particle_pars_fragment:s3,metalnessmap_fragment:r3,metalnessmap_pars_fragment:o3,morphinstance_vertex:a3,morphcolor_vertex:c3,morphnormal_vertex:l3,morphtarget_pars_vertex:h3,morphtarget_vertex:u3,normal_fragment_begin:d3,normal_fragment_maps:f3,normal_pars_fragment:p3,normal_pars_vertex:m3,normal_vertex:g3,normalmap_pars_fragment:_3,clearcoat_normal_fragment_begin:x3,clearcoat_normal_fragment_maps:v3,clearcoat_pars_fragment:y3,iridescence_pars_fragment:M3,opaque_fragment:b3,packing:S3,premultiplied_alpha_fragment:E3,project_vertex:T3,dithering_fragment:w3,dithering_pars_fragment:A3,roughnessmap_fragment:C3,roughnessmap_pars_fragment:R3,shadowmap_pars_fragment:I3,shadowmap_pars_vertex:P3,shadowmap_vertex:L3,shadowmask_pars_fragment:D3,skinbase_vertex:N3,skinning_pars_vertex:U3,skinning_vertex:F3,skinnormal_vertex:O3,specularmap_fragment:B3,specularmap_pars_fragment:z3,tonemapping_fragment:k3,tonemapping_pars_fragment:V3,transmission_fragment:G3,transmission_pars_fragment:H3,uv_pars_fragment:W3,uv_pars_vertex:X3,uv_vertex:q3,worldpos_vertex:Y3,background_vert:$3,background_frag:Z3,backgroundCube_vert:J3,backgroundCube_frag:K3,cube_vert:j3,cube_frag:Q3,depth_vert:tM,depth_frag:eM,distance_vert:nM,distance_frag:iM,equirect_vert:sM,equirect_frag:rM,linedashed_vert:oM,linedashed_frag:aM,meshbasic_vert:cM,meshbasic_frag:lM,meshlambert_vert:hM,meshlambert_frag:uM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:_M,meshphysical_vert:xM,meshphysical_frag:vM,meshtoon_vert:yM,meshtoon_frag:MM,points_vert:bM,points_frag:SM,shadow_vert:EM,shadow_frag:TM,sprite_vert:wM,sprite_frag:AM},yt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ms={basic:{uniforms:kn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:kn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:kn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:kn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:kn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:kn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:kn([yt.points,yt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:kn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:kn([yt.common,yt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:kn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:kn([yt.sprite,yt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:kn([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:kn([yt.lights,yt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ms.physical={uniforms:kn([ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Zh={r:0,b:0,g:0},CM=new de,Fg=new Jt;Fg.set(-1,0,0,0,1,0,0,0,1);function RM(e,t,n,i,s,r){let o=new Gt(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(M){let w=!1,v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(M,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===ic)?(l===void 0&&(l=new Ft(new Te(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Dr(ms.backgroundCube.uniforms),vertexShader:ms.backgroundCube.vertexShader,fragmentShader:ms.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fg),l.material.toneMapped=ue.getTransfer(v.colorSpace)!==Me,(h!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new Bn(2,2),new ui({name:"BackgroundMaterial",uniforms:Dr(ms.background.uniforms),vertexShader:ms.background.vertexShader,fragmentShader:ms.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ue.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(Zh,bf(e)),n.buffers.color.setClear(Zh.r,Zh.g,Zh.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:p}}function IM(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(D,N,W,F,$){let tt=!1,j=d(D,F,W,N);r!==j&&(r=j,l(r.object)),tt=f(D,F,W,$),tt&&g(D,F,W,$),$!==null&&t.update($,e.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,v(D,N,W,F),$!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return e.createVertexArray()}function l(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function d(D,N,W,F){let $=F.wireframe===!0,tt=i[N.id];tt===void 0&&(tt={},i[N.id]=tt);let j=D.isInstancedMesh===!0?D.id:0,lt=tt[j];lt===void 0&&(lt={},tt[j]=lt);let Q=lt[W.id];Q===void 0&&(Q={},lt[W.id]=Q);let G=Q[$];return G===void 0&&(G=u(c()),Q[$]=G),G}function u(D){let N=[],W=[],F=[];for(let $=0;$<n;$++)N[$]=0,W[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:F,object:D,attributes:{},index:null}}function f(D,N,W,F){let $=r.attributes,tt=N.attributes,j=0,lt=W.getAttributes();for(let Q in lt)if(lt[Q].location>=0){let C=$[Q],U=tt[Q];if(U===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),C===void 0||C.attribute!==U||U&&C.data!==U.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function g(D,N,W,F){let $={},tt=N.attributes,j=0,lt=W.getAttributes();for(let Q in lt)if(lt[Q].location>=0){let C=tt[Q];C===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(C=D.instanceColor));let U={};U.attribute=C,C&&C.data&&(U.data=C.data),$[Q]=U,j++}r.attributes=$,r.attributesNum=j,r.index=F}function y(){let D=r.newAttributes;for(let N=0,W=D.length;N<W;N++)D[N]=0}function m(D){p(D,0)}function p(D,N){let W=r.newAttributes,F=r.enabledAttributes,$=r.attributeDivisors;W[D]=1,F[D]===0&&(e.enableVertexAttribArray(D),F[D]=1),$[D]!==N&&(e.vertexAttribDivisor(D,N),$[D]=N)}function M(){let D=r.newAttributes,N=r.enabledAttributes;for(let W=0,F=N.length;W<F;W++)N[W]!==D[W]&&(e.disableVertexAttribArray(W),N[W]=0)}function w(D,N,W,F,$,tt,j){j===!0?e.vertexAttribIPointer(D,N,W,$,tt):e.vertexAttribPointer(D,N,W,F,$,tt)}function v(D,N,W,F){y();let $=F.attributes,tt=W.getAttributes(),j=N.defaultAttributeValues;for(let lt in tt){let Q=tt[lt];if(Q.location>=0){let G=$[lt];if(G===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){let C=G.normalized,U=G.itemSize,X=t.get(G);if(X===void 0)continue;let at=X.buffer,K=X.type,nt=X.bytesPerElement,B=K===e.INT||K===e.UNSIGNED_INT||G.gpuType===lh;if(G.isInterleavedBufferAttribute){let L=G.data,ot=L.stride,_t=G.offset;if(L.isInstancedInterleavedBuffer){for(let ut=0;ut<Q.locationSize;ut++)p(Q.location+ut,L.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ut=0;ut<Q.locationSize;ut++)m(Q.location+ut);e.bindBuffer(e.ARRAY_BUFFER,at);for(let ut=0;ut<Q.locationSize;ut++)w(Q.location+ut,U/Q.locationSize,K,C,ot*nt,(_t+U/Q.locationSize*ut)*nt,B)}else{if(G.isInstancedBufferAttribute){for(let L=0;L<Q.locationSize;L++)p(Q.location+L,G.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let L=0;L<Q.locationSize;L++)m(Q.location+L);e.bindBuffer(e.ARRAY_BUFFER,at);for(let L=0;L<Q.locationSize;L++)w(Q.location+L,U/Q.locationSize,K,C,U*nt,U/Q.locationSize*L*nt,B)}}else if(j!==void 0){let C=j[lt];if(C!==void 0)switch(C.length){case 2:e.vertexAttrib2fv(Q.location,C);break;case 3:e.vertexAttrib3fv(Q.location,C);break;case 4:e.vertexAttrib4fv(Q.location,C);break;default:e.vertexAttrib1fv(Q.location,C)}}}}M()}function T(){S();for(let D in i){let N=i[D];for(let W in N){let F=N[W];for(let $ in F){let tt=F[$];for(let j in tt)h(tt[j].object),delete tt[j];delete F[$]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let N=i[D.id];for(let W in N){let F=N[W];for(let $ in F){let tt=F[$];for(let j in tt)h(tt[j].object),delete tt[j];delete F[$]}}delete i[D.id]}function R(D){for(let N in i){let W=i[N];for(let F in W){let $=W[F];if($[D.id]===void 0)continue;let tt=$[D.id];for(let j in tt)h(tt[j].object),delete tt[j];delete $[D.id]}}}function _(D){for(let N in i){let W=i[N],F=D.isInstancedMesh===!0?D.id:0,$=W[F];if($!==void 0){for(let tt in $){let j=$[tt];for(let lt in j)h(j[lt].object),delete j[lt];delete $[tt]}delete W[F],Object.keys(W).length===0&&delete i[N]}}}function S(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function PM(e,t,n){let i;function s(c){i=c}function r(c,l){e.drawArrays(i,c,l),n.update(l,i,1)}function o(c,l,h){h!==0&&(e.drawArraysInstanced(i,c,l,h),n.update(l,i,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function LM(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==wi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let _=R===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&R!==Ti&&!_&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",h=c(l);h!==l&&(Yt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:E}}function DM(e){let t=this,n=null,i=0,s=!1,r=!1,o=new Wi,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,w=M*4,v=p.clippingState||null;c.value=v,v=h(g,u,w,f);for(let T=0;T!==w;++T)v[T]=n[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Io=4,NM=6,UM=20,FM=256,uc=new So,pg=new Gt,Pf=null,Lf=0,Df=0,Nf=!1,OM=new P,Nr=new P,Kh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=OM}=r;Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pf,Lf,Df),this._renderer.xr.enabled=Nf,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ar||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Zi,format:wi,colorSpace:Ia,depthBuffer:!1},s=mg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=BM(r)),this._blurMaterial=kM(r,t,n),this._ggxMaterial=zM(r,t,n)}return s}_compileMaterial(t){let n=new Ft(new qe,t);this._renderer.compile(n,uc)}_sceneToCubeUV(t,n,i,s,r){let c=new On(90,1,n,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(pg),d.toneMapping=Yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new Te,new nn({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(pg),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let T=this._cubeSize;Ro(s,v*T,w>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(y,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ar||t.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ro(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,uc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Io?i-g+Io:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-n,Ro(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,uc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Ro(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,uc)}_blur(t,n,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,n,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,n,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Io?s-this._lodMax+Io:0),u=4*(this._cubeSize-h);Ro(n,d,u,3*h,2*h),o.setRenderTarget(n),o.render(c,uc)}};function BM(e){let t=[],n=[],i=e,s=e-Io+1+NM;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,w=p>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(v,f*u*p);for(let T=0;T<u;T++){let E=h[T*2]*2-1,R=h[T*2+1]*2-1;p===0?Nr.set(1,R,E):p===1?Nr.set(-E,1,-R):p===2?Nr.set(-E,R,1):p===3?Nr.set(-1,R,-E):p===4?Nr.set(-E,-1,R):Nr.set(E,R,-1),Nr.toArray(y,(p*u+T)*f)}}let m=new qe;m.setAttribute("position",new ke(g,f)),m.setAttribute("outputDirection",new ke(y,f)),n.push(new Ft(m,null)),i>Io&&i--}return{lodMeshes:n,sizeLods:t}}function mg(e,t,n){let i=new ti(e,t,n);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function zM(e,t,n){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function kM(e,t,n){return new ui({name:"SphericalGaussianBlur",defines:{SAMPLES:UM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function gg(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function _g(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jh=class extends ti{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ga(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:fs});r.uniforms.tEquirect.value=n;let o=new Ft(s,r),a=n.minFilter;return n.minFilter===cr&&(n.minFilter=Rn),new eh(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}};function VM(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===oh||f===ah)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new jh(g.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===oh||f===ah,y=f===ar||f===Lr;if(g||y){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Kh(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&c(M)?(i===null&&(i=new Kh(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===oh?u.mapping=ar:f===ah&&(u.mapping=Lr),u}function c(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function GM(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Rr("WebGLRenderer: "+i+" extension not supported."),s}}}function HM(e,t,n,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,n.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let w=0,v=M.length;w<v;w+=3){let T=M[w+0],E=M[w+1],R=M[w+2];u.push(T,E,E,R,R,T)}}else{let M=g.array;y=g.version;for(let w=0,v=M.length/3-1;w<v;w+=3){let T=w+0,E=w+1,R=w+2;u.push(T,E,E,R,R,T)}}let m=new(g.count>=65535?Ba:Oa)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function WM(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){e.drawElements(i,u,r,d*o),n.update(u,i,1)}function l(d,u,f){f!==0&&(e.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];n.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function XM(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function qM(e,t,n){let i=new WeakMap,s=new Ve;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=a.attributes.position.count*w,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*T*4*d),R=new Da(E,v,T,d);R.type=Ti,R.needsUpdate=!0;let _=w*4;for(let I=0;I<d;I++){let D=m[I],N=p[I],W=M[I],F=v*T*4*I;for(let $=0;$<D.count;$++){let tt=$*_;f===!0&&(s.fromBufferAttribute(D,$),E[F+tt+0]=s.x,E[F+tt+1]=s.y,E[F+tt+2]=s.z,E[F+tt+3]=0),g===!0&&(s.fromBufferAttribute(N,$),E[F+tt+4]=s.x,E[F+tt+5]=s.y,E[F+tt+6]=s.z,E[F+tt+7]=0),y===!0&&(s.fromBufferAttribute(W,$),E[F+tt+8]=s.x,E[F+tt+9]=s.y,E[F+tt+10]=s.z,E[F+tt+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Nt(v,T)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(e,"morphTargetBaseInfluence",g),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function YM(e,t,n,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var $M={[sf]:"LINEAR_TONE_MAPPING",[rf]:"REINHARD_TONE_MAPPING",[of]:"CINEON_TONE_MAPPING",[af]:"ACES_FILMIC_TONE_MAPPING",[lf]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[cf]:"CUSTOM_TONE_MAPPING"};function ZM(e,t,n,i,s,r){let o=new ti(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new qe;l.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new Vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(l,h),u=new So(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,M=[],w=!1;this.setSize=function(v,T){o.setSize(v,T),a!==null&&a.setSize(v,T),c!==null&&c.setSize(v,T);for(let E=0;E<M.length;E++){let R=M[E];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;let T=o.width,E=o.height;M.length>0&&a===null&&(a=new ti(T,E,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),c=new ti(T,E,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let _=M[R];_.setSize&&_.setSize(T,E)}},this.begin=function(v,T){if(y||v.toneMapping===Yi&&M.length===0)return!1;if(p=T,T!==null){let E=T.width,R=T.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Yi,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=m,y=!0;let E=o,R=a;for(let _=0;_<M.length;_++){let S=M[_];S.enabled!==!1&&(S.render(v,R,E,T),S.needsSwap!==!1&&(E=R,R=R===a?c:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},ue.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let _=$M[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Og=new qn,Of=new nr(1,1),Bg=new Da,zg=new Pl,kg=new Ga,xg=[],vg=[],yg=new Float32Array(16),Mg=new Float32Array(9),bg=new Float32Array(4);function Lo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=xg[s];if(r===void 0&&(r=new Float32Array(s),xg[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function _n(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function xn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function eu(e,t){let n=vg[t];n===void 0&&(n=new Int32Array(t),vg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function JM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function KM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2fv(this.addr,t),xn(n,t)}}function jM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;e.uniform3fv(this.addr,t),xn(n,t)}}function QM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4fv(this.addr,t),xn(n,t)}}function tb(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,i))return;bg.set(i),e.uniformMatrix2fv(this.addr,!1,bg),xn(n,i)}}function eb(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,i))return;Mg.set(i),e.uniformMatrix3fv(this.addr,!1,Mg),xn(n,i)}}function nb(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,i))return;yg.set(i),e.uniformMatrix4fv(this.addr,!1,yg),xn(n,i)}}function ib(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function sb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2iv(this.addr,t),xn(n,t)}}function rb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;e.uniform3iv(this.addr,t),xn(n,t)}}function ob(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4iv(this.addr,t),xn(n,t)}}function ab(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2uiv(this.addr,t),xn(n,t)}}function lb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;e.uniform3uiv(this.addr,t),xn(n,t)}}function hb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4uiv(this.addr,t),xn(n,t)}}function ub(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Of.compareFunction=n.isReversedDepthBuffer()?$h:Yh,r=Of):r=Og,n.setTexture2D(t||r,s)}function db(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||zg,s)}function fb(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||kg,s)}function pb(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Bg,s)}function mb(e){switch(e){case 5126:return JM;case 35664:return KM;case 35665:return jM;case 35666:return QM;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return cb;case 36295:return lb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(e,t){e.uniform1fv(this.addr,t)}function _b(e,t){let n=Lo(t,this.size,2);e.uniform2fv(this.addr,n)}function xb(e,t){let n=Lo(t,this.size,3);e.uniform3fv(this.addr,n)}function vb(e,t){let n=Lo(t,this.size,4);e.uniform4fv(this.addr,n)}function yb(e,t){let n=Lo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Mb(e,t){let n=Lo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bb(e,t){let n=Lo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Sb(e,t){e.uniform1iv(this.addr,t)}function Eb(e,t){e.uniform2iv(this.addr,t)}function Tb(e,t){e.uniform3iv(this.addr,t)}function wb(e,t){e.uniform4iv(this.addr,t)}function Ab(e,t){e.uniform1uiv(this.addr,t)}function Cb(e,t){e.uniform2uiv(this.addr,t)}function Rb(e,t){e.uniform3uiv(this.addr,t)}function Ib(e,t){e.uniform4uiv(this.addr,t)}function Pb(e,t,n){let i=this.cache,s=t.length,r=eu(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),xn(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=Of:o=Og;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function Lb(e,t,n){let i=this.cache,s=t.length,r=eu(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||zg,r[o])}function Db(e,t,n){let i=this.cache,s=t.length,r=eu(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||kg,r[o])}function Nb(e,t,n){let i=this.cache,s=t.length,r=eu(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||Bg,r[o])}function Ub(e){switch(e){case 5126:return gb;case 35664:return _b;case 35665:return xb;case 35666:return vb;case 35674:return yb;case 35675:return Mb;case 35676:return bb;case 5124:case 35670:return Sb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return wb;case 5125:return Ab;case 36294:return Cb;case 36295:return Rb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Nb}}var Bf=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mb(n.type)}},zf=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ub(n.type)}},kf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,n[a.id],i)}}},Uf=/(\w+)(\])?(\[|\.)?/g;function Sg(e,t){e.seq.push(t),e.map[t.id]=t}function Fb(e,t,n){let i=e.name,s=i.length;for(Uf.lastIndex=0;;){let r=Uf.exec(i),o=Uf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sg(n,l===void 0?new Bf(a,e,t):new zf(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new kf(a),Sg(n,d)),n=d}}}var Po=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(n,o),c=t.getUniformLocation(n,a.name);Fb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in n&&i.push(o)}return i}};function Eg(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Ob=37297,Bb=0;function zb(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Tg=new Jt;function kb(e){ue._getMatrix(Tg,ue.workingColorSpace,e);let t=`mat3( ${Tg.elements.map(n=>n.toFixed(4))} )`;switch(ue.getTransfer(e)){case Pa:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function wg(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+zb(e.getShaderSource(t),a)}else return r}function Vb(e,t){let n=kb(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Gb={[sf]:"Linear",[rf]:"Reinhard",[of]:"Cineon",[af]:"ACESFilmic",[lf]:"AgX",[nc]:"Neutral",[cf]:"Custom"};function Hb(e,t){let n=Gb[t];return n===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Jh=new P;function Wb(){ue.getLuminanceCoefficients(Jh);let e=Jh.x.toFixed(4),t=Jh.y.toFixed(4),n=Jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fc).join(`
`)}function qb(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Yb(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function fc(e){return e!==""}function Ag(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(e){return e.replace($b,Jb)}var Zb=new Map;function Jb(e,t){let n=se[t];if(n===void 0){let i=Zb.get(t);if(i!==void 0)n=se[i],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vf(n)}var Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(e){return e.replace(Kb,jb)}function jb(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ig(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Qb={[tc]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function tS(e){return Qb[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eS={[ar]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[ic]:"ENVMAP_TYPE_CUBE_UV"};function nS(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":eS[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var iS={[Lr]:"ENVMAP_MODE_REFRACTION"};function sS(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":iS[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rS={[rh]:"ENVMAP_BLENDING_MULTIPLY",[Y0]:"ENVMAP_BLENDING_MIX",[$0]:"ENVMAP_BLENDING_ADD"};function oS(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":rS[e.combine]||"ENVMAP_BLENDING_NONE"}function aS(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function cS(e,t,n,i){let s=e.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,c=tS(n),l=nS(n),h=sS(n),d=oS(n),u=aS(n),f=Xb(n),g=qb(r),y=s.createProgram(),m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fc).join(`
`),p.length>0&&(p+=`
`)):(m=[Ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fc).join(`
`),p=[Ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?se.tonemapping_pars_fragment:"",n.toneMapping!==Yi?Hb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Vb("linearToOutputTexel",n.outputColorSpace),Wb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fc).join(`
`)),o=Vf(o),o=Ag(o,n),o=Cg(o,n),a=Vf(a),a=Ag(a,n),a=Cg(a,n),o=Rg(o),a=Rg(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===_f?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+o,v=M+p+a,T=Eg(s,s.VERTEX_SHADER,w),E=Eg(s,s.FRAGMENT_SHADER,v);s.attachShader(y,T),s.attachShader(y,E),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(e.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",W=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(E)||"",$=N.trim(),tt=W.trim(),j=F.trim(),lt=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(lt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,y,T,E);else{let G=wg(s,T,"vertex"),C=wg(s,E,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+G+`
`+C)}else $!==""?Yt("WebGLProgram: Program Info Log:",$):(tt===""||j==="")&&(Q=!1);Q&&(D.diagnostics={runnable:lt,programLog:$,vertexShader:{log:tt,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(T),s.deleteShader(E),_=new Po(s,y),S=Yb(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,Ob)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bb++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var lS=0,Gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Hf(t),n.set(t,i)),i}},Hf=class{constructor(t){this.id=lS++,this.code=t,this.usedTimes=0}};function hS(e){return e===hr||e===lc||e===hc}function uS(e,t,n,i,s,r){let o=new Na,a=new Gf,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,S,I,D,N,W){let F=D.fog,$=N.geometry,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,lt=t.get(_.envMap||tt,j),Q=lt&&lt.mapping===ic?lt.image.height:null,G=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Yt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let C=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,U=C!==void 0?C.length:0,X=0;$.morphAttributes.position!==void 0&&(X=1),$.morphAttributes.normal!==void 0&&(X=2),$.morphAttributes.color!==void 0&&(X=3);let at,K,nt,B;if(G){let Le=ms[G];at=Le.vertexShader,K=Le.fragmentShader}else{at=_.vertexShader,K=_.fragmentShader;let Le=a.getVertexShaderStage(_),ve=a.getFragmentShaderStage(_);a.update(_,Le,ve),nt=Le.id,B=ve.id}let L=e.getRenderTarget(),ot=e.state.buffers.depth.getReversed(),_t=N.isInstancedMesh===!0,ut=N.isBatchedMesh===!0,Wt=!!_.map,le=!!_.matcap,Xt=!!lt,te=!!_.aoMap,xe=!!_.lightMap,ee=!!_.bumpMap&&_.wireframe===!1,Re=!!_.normalMap,Qe=!!_.displacementMap,Kt=!!_.emissiveMap,jt=!!_.metalnessMap,ne=!!_.roughnessMap,O=_.anisotropy>0,Xe=_.clearcoat>0,he=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,H=_.sheen>0,Z=_.transmission>0,et=O&&!!_.anisotropyMap,ht=Xe&&!!_.clearcoatMap,dt=Xe&&!!_.clearcoatNormalMap,it=Xe&&!!_.clearcoatRoughnessMap,rt=x&&!!_.iridescenceMap,ft=x&&!!_.iridescenceThicknessMap,Ot=H&&!!_.sheenColorMap,vt=H&&!!_.sheenRoughnessMap,pt=!!_.specularMap,Bt=!!_.specularColorMap,qt=!!_.specularIntensityMap,Qt=Z&&!!_.transmissionMap,k=Z&&!!_.thicknessMap,mt=!!_.gradientMap,st=!!_.alphaMap,gt=_.alphaTest>0,St=!!_.alphaHash,ct=!!_.extensions,Vt=Yi;_.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Vt=e.toneMapping);let Lt={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:at,fragmentShader:K,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ut,batchingColor:ut&&N._colorsTexture!==null,instancing:_t,instancingColor:_t&&N.instanceColor!==null,instancingMorph:_t&&N.morphTexture!==null,outputColorSpace:L===null?e.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Wt,matcap:le,envMap:Xt,envMapMode:Xt&&lt.mapping,envMapCubeUVHeight:Q,aoMap:te,lightMap:xe,bumpMap:ee,normalMap:Re,displacementMap:Qe,emissiveMap:Kt,normalMapObjectSpace:Re&&_.normalMapType===K0,normalMapTangentSpace:Re&&_.normalMapType===qh,packedNormalMap:Re&&_.normalMapType===qh&&hS(_.normalMap.format),metalnessMap:jt,roughnessMap:ne,anisotropy:O,anisotropyMap:et,clearcoat:Xe,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:it,dispersion:he,retroreflection:A,iridescence:x,iridescenceMap:rt,iridescenceThicknessMap:ft,sheen:H,sheenColorMap:Ot,sheenRoughnessMap:vt,specularMap:pt,specularColorMap:Bt,specularIntensityMap:qt,transmission:Z,transmissionMap:Qt,thicknessMap:k,gradientMap:mt,opaque:_.transparent===!1&&_.blending===To&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:gt,alphaHash:St,combine:_.combine,mapUv:Wt&&g(_.map.channel),aoMapUv:te&&g(_.aoMap.channel),lightMapUv:xe&&g(_.lightMap.channel),bumpMapUv:ee&&g(_.bumpMap.channel),normalMapUv:Re&&g(_.normalMap.channel),displacementMapUv:Qe&&g(_.displacementMap.channel),emissiveMapUv:Kt&&g(_.emissiveMap.channel),metalnessMapUv:jt&&g(_.metalnessMap.channel),roughnessMapUv:ne&&g(_.roughnessMap.channel),anisotropyMapUv:et&&g(_.anisotropyMap.channel),clearcoatMapUv:ht&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(_.sheenRoughnessMap.channel),specularMapUv:pt&&g(_.specularMap.channel),specularColorMapUv:Bt&&g(_.specularColorMap.channel),specularIntensityMapUv:qt&&g(_.specularIntensityMap.channel),transmissionMapUv:Qt&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:st&&g(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Re||O),vertexNormals:!!$.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(Wt||st),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||$.attributes.normal===void 0&&Re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ot,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Wt&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===Me,decodeVideoTextureEmissive:Kt&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zn,flipSided:_.side===Ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function m(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(S,_),M(S,_),S.push(e.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let S=f[_.type],I;if(S){let D=ms[S];I=ug.clone(D.uniforms)}else I=_.uniforms;return I}function v(_,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new cS(e,S,_,s),l.push(I),h.set(S,I)),I}function T(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:R}}function dS(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,c){e.get(o)[a]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function fS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Pg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Lg(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let M=e[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},e[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function c(u,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let w=a(u,f,g,y,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):n.push(w)}function l(u,f,g,y,m,p){let M=a(u,f,g,y,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function h(u,f){n.length>1&&n.sort(u||fS),i.length>1&&i.sort(f||Pg),s.length>1&&s.sort(f||Pg)}function d(){for(let u=t,f=e.length;u<f;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function pS(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;return r===void 0?(o=new Lg,e.set(i,[o])):s>=r.length?(o=new Lg,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function mS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new P,color:new Gt};break;case"SpotLight":n={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function gS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var _S=0;function xS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function vS(e){let t=new mS,n=gS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let s=new P,r=new de,o=new de;function a(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,w=0,v=0,T=0,E=0,R=0,_=0,S=0,I=0;l.sort(xS);for(let N=0,W=l.length;N<W;N++){let F=l[N],$=F.color,tt=F.intensity,j=F.distance,lt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===hr?lt=F.shadow.map.texture:lt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=$.r*tt,d+=$.g*tt,u+=$.b*tt;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(F.sh.coefficients[Q],tt);I++}else if(F.isSunLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let G=F.shadow,C=n.get(F);C.shadowIntensity=G.intensity,C.shadowBias=G.bias,C.shadowNormalBias=G.normalBias,C.shadowRadius=G.radius,C.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=C,i.sunShadowMap[g]=lt;let U=G.getViewportCount();for(let X=0;X<U;X++)i.sunShadowMatrix[y+X]=G.getMatrix(X),i.sunShadowCascade[y+X]=G._cascadeData[X];y+=U,g++}i.sun[f]=Q,f++}else if(F.isDirectionalLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let G=F.shadow,C=n.get(F);C.shadowIntensity=G.intensity,C.shadowBias=G.bias,C.shadowNormalBias=G.normalBias,C.shadowRadius=G.radius,C.shadowMapSize=G.mapSize,i.directionalShadow[m]=C,i.directionalShadowMap[m]=lt,i.directionalShadowMatrix[m]=F.shadow.matrix,T++}i.directional[m]=Q,m++}else if(F.isSpotLight){let Q=t.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy($).multiplyScalar(tt),Q.distance=j,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,i.spot[M]=Q;let G=F.shadow;if(F.map&&(i.spotLightMap[_]=F.map,_++,G.updateMatrices(F),F.castShadow&&S++),i.spotLightMatrix[M]=G.matrix,F.castShadow){let C=n.get(F);C.shadowIntensity=G.intensity,C.shadowBias=G.bias,C.shadowNormalBias=G.normalBias,C.shadowRadius=G.radius,C.shadowMapSize=G.mapSize,i.spotShadow[M]=C,i.spotShadowMap[M]=lt,R++}M++}else if(F.isRectAreaLight){let Q=t.get(F);Q.color.copy($).multiplyScalar(tt),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),i.rectArea[w]=Q,w++}else if(F.isPointLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){let G=F.shadow,C=n.get(F);C.shadowIntensity=G.intensity,C.shadowBias=G.bias,C.shadowNormalBias=G.normalBias,C.shadowRadius=G.radius,C.shadowMapSize=G.mapSize,C.shadowCameraNear=G.camera.near,C.shadowCameraFar=G.camera.far,i.pointShadow[p]=C,i.pointShadowMap[p]=lt,i.pointShadowMatrix[p]=F.shadow.matrix,E++}i.point[p]=Q,p++}else if(F.isHemisphereLight){let Q=t.get(F);Q.skyColor.copy(F.color).multiplyScalar(tt),Q.groundColor.copy(F.groundColor).multiplyScalar(tt),i.hemi[v]=Q,v++}}w>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-S,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=I,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=I,i.version=_S++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){let v=l[M];if(v.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(v.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Dg(e){let t=new vS(e),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(n)}function h(u){t.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function yS(e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Dg(e),t.set(s,[a])):r>=o.length?(a=new Dg(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var MS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bS=`uniform sampler2D shadow_pass;
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
}`,SS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],ES=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ng=new de,dc=new P,Ff=new P;function TS(e,t,n){let i=new xo,s=new Nt,r=new Nt,o=new Ve,a=new Gl,c=new Hl,l={},h=n.maxTextureSize,d={[or]:Ln,[Ln]:or,[zn]:zn},u=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:MS,fragmentShader:bS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===sh&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tc);let S=e.getRenderTarget(),I=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),N=e.state;N.setBlending(fs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let W=p!==this.type;W&&R.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach($=>$.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,$=E.length;F<$;F++){let tt=E[F],j=tt.shadow;if(j===void 0){Yt("WebGLShadowMap:",tt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let lt=j.getFrameExtents();s.multiply(lt),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,j.mapSize.y=r.y));let Q=e.state.buffers.depth.getReversed();if(j.camera._reversedDepth=Q,j.map===null||W===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Eo){if(tt.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ti(s.x,s.y,{format:hr,type:Zi,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),j.map.texture.name=tt.name+".shadowMap",j.map.depthTexture=new nr(s.x,s.y,Ti),j.map.depthTexture.name=tt.name+".shadowMapDepth",j.map.depthTexture.format=ls,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Sn,j.map.depthTexture.magFilter=Sn}else tt.isPointLight?(j.map=new jh(s.x),j.map.depthTexture=new Ll(s.x,$i)):(j.map=new ti(s.x,s.y),j.map.depthTexture=new nr(s.x,s.y,$i)),j.map.depthTexture.name=tt.name+".shadowMap",j.map.depthTexture.format=ls,this.type===tc?(j.map.depthTexture.compareFunction=Q?$h:Yh,j.map.depthTexture.minFilter=Rn,j.map.depthTexture.magFilter=Rn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Sn,j.map.depthTexture.magFilter=Sn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let G=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();tt.isPointLight!==!0&&j.updateMatrices(tt,_);for(let C=0;C<G;C++){let U=j.getCamera(C);if(tt.isPointLight){let X=j.camera,at=j.matrix,K=tt.distance||X.far;K!==X.far&&(X.far=K,X.updateProjectionMatrix()),dc.setFromMatrixPosition(tt.matrixWorld),X.position.copy(dc),Ff.copy(X.position),Ff.add(SS[C]),X.up.copy(ES[C]),X.lookAt(Ff),X.updateMatrixWorld(),at.makeTranslation(-dc.x,-dc.y,-dc.z),Ng.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Ng,X.coordinateSystem,X.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)e.setRenderTarget(j.map,C),e.clear();else{C===0&&(e.setRenderTarget(j.map),e.clear());let X=j.getViewport(C);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),N.viewport(o)}i=j.getFrustum(C),v(R,_,U,tt,this.type)}j.isPointLightShadow!==!0&&this.type===Eo&&M(j,_),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(S,I,D)};function M(E,R){let _=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ti(s.x,s.y,{format:hr,type:Zi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(R,null,_,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(R,null,_,f,y,null)}function w(E,R,_,S){let I=null,D=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)I=D;else if(I=_.isPointLight===!0?c:a,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=I.uuid,W=R.uuid,F=l[N];F===void 0&&(F={},l[N]=F);let $=F[W];$===void 0&&($=I.clone(),F[W]=$,R.addEventListener("dispose",T)),I=$}if(I.visible=R.visible,I.wireframe=R.wireframe,S===Eo?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=e.properties.get(I);N.light=_}return I}function v(E,R,_,S,I){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Eo)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let W=t.update(E),F=E.material;if(Array.isArray(F)){let $=W.groups;for(let tt=0,j=$.length;tt<j;tt++){let lt=$[tt],Q=F[lt.materialIndex];if(Q&&Q.visible){let G=w(E,Q,S,I);E.onBeforeShadow(e,E,R,_,W,G,lt),e.renderBufferDirect(_,null,W,G,E,lt),E.onAfterShadow(e,E,R,_,W,G,lt)}}}else if(F.visible){let $=w(E,F,S,I);E.onBeforeShadow(e,E,R,_,W,$,null),e.renderBufferDirect(_,null,W,$,E,null),E.onAfterShadow(e,E,R,_,W,$,null)}}let N=E.children;for(let W=0,F=N.length;W<F;W++)v(N[W],R,_,S,I)}function T(E){E.target.removeEventListener("dispose",T);for(let _ in l){let S=l[_],I=E.target.uuid;I in S&&(S[I].dispose(),delete S[I])}}}function wS(e,t){function n(){let k=!1,mt=new Ve,st=null,gt=new Ve(0,0,0,0);return{setMask:function(St){st!==St&&!k&&(e.colorMask(St,St,St,St),st=St)},setLocked:function(St){k=St},setClear:function(St,ct,Vt,Lt,Le){Le===!0&&(St*=Lt,ct*=Lt,Vt*=Lt),mt.set(St,ct,Vt,Lt),gt.equals(mt)===!1&&(e.clearColor(St,ct,Vt,Lt),gt.copy(mt))},reset:function(){k=!1,st=null,gt.set(-1,0,0,0)}}}function i(){let k=!1,mt=!1,st=null,gt=null,St=null;return{setReversed:function(ct){if(mt!==ct){let Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),mt=ct;let Lt=St;St=null,this.setClear(Lt)}},getReversed:function(){return mt},setTest:function(ct){ct?L(e.DEPTH_TEST):ot(e.DEPTH_TEST)},setMask:function(ct){st!==ct&&!k&&(e.depthMask(ct),st=ct)},setFunc:function(ct){if(mt&&(ct=lg[ct]),gt!==ct){switch(ct){case yl:e.depthFunc(e.NEVER);break;case Ml:e.depthFunc(e.ALWAYS);break;case bl:e.depthFunc(e.LESS);break;case ho:e.depthFunc(e.LEQUAL);break;case Sl:e.depthFunc(e.EQUAL);break;case El:e.depthFunc(e.GEQUAL);break;case Tl:e.depthFunc(e.GREATER);break;case wl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}gt=ct}},setLocked:function(ct){k=ct},setClear:function(ct){St!==ct&&(St=ct,mt&&(ct=1-ct),e.clearDepth(ct))},reset:function(){k=!1,st=null,gt=null,St=null,mt=!1}}}function s(){let k=!1,mt=null,st=null,gt=null,St=null,ct=null,Vt=null,Lt=null,Le=null;return{setTest:function(ve){k||(ve?L(e.STENCIL_TEST):ot(e.STENCIL_TEST))},setMask:function(ve){mt!==ve&&!k&&(e.stencilMask(ve),mt=ve)},setFunc:function(ve,ki,rs){(st!==ve||gt!==ki||St!==rs)&&(e.stencilFunc(ve,ki,rs),st=ve,gt=ki,St=rs)},setOp:function(ve,ki,rs){(ct!==ve||Vt!==ki||Lt!==rs)&&(e.stencilOp(ve,ki,rs),ct=ve,Vt=ki,Lt=rs)},setLocked:function(ve){k=ve},setClear:function(ve){Le!==ve&&(e.clearStencil(ve),Le=ve)},reset:function(){k=!1,mt=null,st=null,gt=null,St=null,ct=null,Vt=null,Lt=null,Le=null}}}let r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,v=null,T=null,E=null,R=null,_=new Gt(0,0,0),S=0,I=!1,D=null,N=null,W=null,F=null,$=null,tt=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,lt=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=lt>=1):Q.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=lt>=2);let G=null,C={},U=e.getParameter(e.SCISSOR_BOX),X=e.getParameter(e.VIEWPORT),at=new Ve().fromArray(U),K=new Ve().fromArray(X);function nt(k,mt,st,gt){let St=new Uint8Array(4),ct=e.createTexture();e.bindTexture(k,ct),e.texParameteri(k,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(k,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Vt=0;Vt<st;Vt++)k===e.TEXTURE_3D||k===e.TEXTURE_2D_ARRAY?e.texImage3D(mt,0,e.RGBA,1,1,gt,0,e.RGBA,e.UNSIGNED_BYTE,St):e.texImage2D(mt+Vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,St);return ct}let B={};B[e.TEXTURE_2D]=nt(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=nt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=nt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=nt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(e.DEPTH_TEST),o.setFunc(ho),ee(!1),Re(jd),L(e.CULL_FACE),te(fs);function L(k){h[k]!==!0&&(e.enable(k),h[k]=!0)}function ot(k){h[k]!==!1&&(e.disable(k),h[k]=!1)}function _t(k,mt){return u[k]!==mt?(e.bindFramebuffer(k,mt),u[k]=mt,k===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=mt),k===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=mt),!0):!1}function ut(k,mt){let st=g,gt=!1;if(k){st=f.get(mt),st===void 0&&(st=[],f.set(mt,st));let St=k.textures;if(st.length!==St.length||st[0]!==e.COLOR_ATTACHMENT0){for(let ct=0,Vt=St.length;ct<Vt;ct++)st[ct]=e.COLOR_ATTACHMENT0+ct;st.length=St.length,gt=!0}}else st[0]!==e.BACK&&(st[0]=e.BACK,gt=!0);gt&&e.drawBuffers(st)}function Wt(k){return y!==k?(e.useProgram(k),y=k,!0):!1}let le={[Pr]:e.FUNC_ADD,[I0]:e.FUNC_SUBTRACT,[P0]:e.FUNC_REVERSE_SUBTRACT};le[L0]=e.MIN,le[D0]=e.MAX;let Xt={[N0]:e.ZERO,[U0]:e.ONE,[F0]:e.SRC_COLOR,[ef]:e.SRC_ALPHA,[G0]:e.SRC_ALPHA_SATURATE,[k0]:e.DST_COLOR,[B0]:e.DST_ALPHA,[O0]:e.ONE_MINUS_SRC_COLOR,[nf]:e.ONE_MINUS_SRC_ALPHA,[V0]:e.ONE_MINUS_DST_COLOR,[z0]:e.ONE_MINUS_DST_ALPHA,[H0]:e.CONSTANT_COLOR,[W0]:e.ONE_MINUS_CONSTANT_COLOR,[X0]:e.CONSTANT_ALPHA,[q0]:e.ONE_MINUS_CONSTANT_ALPHA};function te(k,mt,st,gt,St,ct,Vt,Lt,Le,ve){if(k===fs){m===!0&&(ot(e.BLEND),m=!1);return}if(m===!1&&(L(e.BLEND),m=!0),k!==R0){if(k!==p||ve!==I){if((M!==Pr||T!==Pr)&&(e.blendEquation(e.FUNC_ADD),M=Pr,T=Pr),ve)switch(k){case To:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ec:e.blendFunc(e.ONE,e.ONE);break;case Qd:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tf:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:$t("WebGLState: Invalid blending: ",k);break}else switch(k){case To:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ec:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Qd:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tf:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",k);break}w=null,v=null,E=null,R=null,_.set(0,0,0),S=0,p=k,I=ve}return}St=St||mt,ct=ct||st,Vt=Vt||gt,(mt!==M||St!==T)&&(e.blendEquationSeparate(le[mt],le[St]),M=mt,T=St),(st!==w||gt!==v||ct!==E||Vt!==R)&&(e.blendFuncSeparate(Xt[st],Xt[gt],Xt[ct],Xt[Vt]),w=st,v=gt,E=ct,R=Vt),(Lt.equals(_)===!1||Le!==S)&&(e.blendColor(Lt.r,Lt.g,Lt.b,Le),_.copy(Lt),S=Le),p=k,I=!1}function xe(k,mt){k.side===zn?ot(e.CULL_FACE):L(e.CULL_FACE);let st=k.side===Ln;mt&&(st=!st),ee(st),k.blending===To&&k.transparent===!1?te(fs):te(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let gt=k.stencilWrite;a.setTest(gt),gt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):ot(e.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){D!==k&&(k?e.frontFace(e.CW):e.frontFace(e.CCW),D=k)}function Re(k){k!==A0?(L(e.CULL_FACE),k!==N&&(k===jd?e.cullFace(e.BACK):k===C0?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ot(e.CULL_FACE),N=k}function Qe(k){k!==W&&(j&&e.lineWidth(k),W=k)}function Kt(k,mt,st){k?(L(e.POLYGON_OFFSET_FILL),(F!==mt||$!==st)&&(F=mt,$=st,o.getReversed()&&(mt=-mt),e.polygonOffset(mt,st))):ot(e.POLYGON_OFFSET_FILL)}function jt(k){k?L(e.SCISSOR_TEST):ot(e.SCISSOR_TEST)}function ne(k){k===void 0&&(k=e.TEXTURE0+tt-1),G!==k&&(e.activeTexture(k),G=k)}function O(k,mt,st){st===void 0&&(G===null?st=e.TEXTURE0+tt-1:st=G);let gt=C[st];gt===void 0&&(gt={type:void 0,texture:void 0},C[st]=gt),(gt.type!==k||gt.texture!==mt)&&(G!==st&&(e.activeTexture(st),G=st),e.bindTexture(k,mt||B[k]),gt.type=k,gt.texture=mt)}function Xe(){let k=C[G];k!==void 0&&k.type!==void 0&&(e.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function x(){try{e.texSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function H(){try{e.texSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function et(){try{e.compressedTexSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function ht(){try{e.texStorage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function dt(){try{e.texStorage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function it(){try{e.texImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function rt(){try{e.texImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function ft(k){return d[k]!==void 0?d[k]:e.getParameter(k)}function Ot(k,mt){d[k]!==mt&&(e.pixelStorei(k,mt),d[k]=mt)}function vt(k){at.equals(k)===!1&&(e.scissor(k.x,k.y,k.z,k.w),at.copy(k))}function pt(k){K.equals(k)===!1&&(e.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function Bt(k,mt){let st=l.get(mt);st===void 0&&(st=new WeakMap,l.set(mt,st));let gt=st.get(k);gt===void 0&&(gt=e.getUniformBlockIndex(mt,k.name),st.set(k,gt))}function qt(k,mt){let gt=l.get(mt).get(k);c.get(mt)!==gt&&(e.uniformBlockBinding(mt,gt,k.__bindingPointIndex),c.set(mt,gt))}function Qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,C={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,v=null,T=null,E=null,R=null,_=new Gt(0,0,0),S=0,I=!1,D=null,N=null,W=null,F=null,$=null,at.set(0,0,e.canvas.width,e.canvas.height),K.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:ot,bindFramebuffer:_t,drawBuffers:ut,useProgram:Wt,setBlending:te,setMaterial:xe,setFlipSided:ee,setCullFace:Re,setLineWidth:Qe,setPolygonOffset:Kt,setScissorTest:jt,activeTexture:ne,bindTexture:O,unbindTexture:Xe,compressedTexImage2D:he,compressedTexImage3D:A,texImage2D:it,texImage3D:rt,pixelStorei:Ot,getParameter:ft,updateUBOMapping:Bt,uniformBlockBinding:qt,texStorage2D:ht,texStorage3D:dt,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:Z,compressedTexSubImage3D:et,scissor:vt,viewport:pt,reset:Qt}}function AS(e,t,n,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return g?new OffscreenCanvas(A,x):La("canvas")}function m(A,x,H){let Z=1,et=he(A);if((et.width>H||et.height>H)&&(Z=H/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ht=Math.floor(Z*et.width),dt=Math.floor(Z*et.height);u===void 0&&(u=y(ht,dt));let it=x?y(ht,dt):u;return it.width=ht,it.height=dt,it.getContext("2d").drawImage(A,0,0,ht,dt),Yt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ht+"x"+dt+")."),it}else return"data"in A&&Yt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){e.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(A,x,H,Z,et,ht=!1){if(A!==null){if(e[A]!==void 0)return e[A];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;Z&&(dt=t.get("EXT_texture_norm16"),dt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=x;if(x===e.RED&&(H===e.FLOAT&&(it=e.R32F),H===e.HALF_FLOAT&&(it=e.R16F),H===e.UNSIGNED_BYTE&&(it=e.R8),H===e.UNSIGNED_SHORT&&dt&&(it=dt.R16_EXT),H===e.SHORT&&dt&&(it=dt.R16_SNORM_EXT)),x===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(it=e.R8UI),H===e.UNSIGNED_SHORT&&(it=e.R16UI),H===e.UNSIGNED_INT&&(it=e.R32UI),H===e.BYTE&&(it=e.R8I),H===e.SHORT&&(it=e.R16I),H===e.INT&&(it=e.R32I)),x===e.RG&&(H===e.FLOAT&&(it=e.RG32F),H===e.HALF_FLOAT&&(it=e.RG16F),H===e.UNSIGNED_BYTE&&(it=e.RG8),H===e.UNSIGNED_SHORT&&dt&&(it=dt.RG16_EXT),H===e.SHORT&&dt&&(it=dt.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(it=e.RG8UI),H===e.UNSIGNED_SHORT&&(it=e.RG16UI),H===e.UNSIGNED_INT&&(it=e.RG32UI),H===e.BYTE&&(it=e.RG8I),H===e.SHORT&&(it=e.RG16I),H===e.INT&&(it=e.RG32I)),x===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(it=e.RGB8UI),H===e.UNSIGNED_SHORT&&(it=e.RGB16UI),H===e.UNSIGNED_INT&&(it=e.RGB32UI),H===e.BYTE&&(it=e.RGB8I),H===e.SHORT&&(it=e.RGB16I),H===e.INT&&(it=e.RGB32I)),x===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(it=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(it=e.RGBA16UI),H===e.UNSIGNED_INT&&(it=e.RGBA32UI),H===e.BYTE&&(it=e.RGBA8I),H===e.SHORT&&(it=e.RGBA16I),H===e.INT&&(it=e.RGBA32I)),x===e.RGB&&(H===e.UNSIGNED_SHORT&&dt&&(it=dt.RGB16_EXT),H===e.SHORT&&dt&&(it=dt.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(it=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(it=e.R11F_G11F_B10F)),x===e.RGBA){let rt=ht?Pa:ue.getTransfer(et);H===e.FLOAT&&(it=e.RGBA32F),H===e.HALF_FLOAT&&(it=e.RGBA16F),H===e.UNSIGNED_BYTE&&(it=rt===Me?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&dt&&(it=dt.RGBA16_EXT),H===e.SHORT&&dt&&(it=dt.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(it=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(it=e.RGB5_A1)}return(it===e.R16F||it===e.R32F||it===e.RG16F||it===e.RG32F||it===e.RGBA16F||it===e.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function T(A,x){let H;return A?x===null||x===$i||x===Ao?H=e.DEPTH24_STENCIL8:x===Ti?H=e.DEPTH32F_STENCIL8:x===wo&&(H=e.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$i||x===Ao?H=e.DEPTH_COMPONENT24:x===Ti?H=e.DEPTH_COMPONENT32F:x===wo&&(H=e.DEPTH_COMPONENT16),H}function E(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Sn&&A.minFilter!==Rn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){let x=A.target;x.removeEventListener("dispose",R),S(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),D(x)}function S(A){let x=i.get(A);if(x.__webglInit===void 0)return;let H=A.source,Z=f.get(H);if(Z){let et=Z[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(A),Object.keys(Z).length===0&&f.delete(H)}i.remove(A)}function I(A){let x=i.get(A);e.deleteTexture(x.__webglTexture);let H=A.source,Z=f.get(H);delete Z[x.__cacheKey],o.memory.textures--}function D(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let et=0;et<x.__webglFramebuffer[Z].length;et++)e.deleteFramebuffer(x.__webglFramebuffer[Z][et]);else e.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)e.deleteFramebuffer(x.__webglFramebuffer[Z]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=A.textures;for(let Z=0,et=H.length;Z<et;Z++){let ht=i.get(H[Z]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(A)}let N=0;function W(){N=0}function F(){return N}function $(A){N=A}function tt(){let A=N;return A>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function j(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function lt(A,x){let H=i.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let Z=A.image;if(Z===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+x)}function Q(A,x){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ot(H,A,x);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+x)}function G(A,x){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ot(H,A,x);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+x)}function C(A,x){let H=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){_t(H,A,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+x)}let U={[Is]:e.REPEAT,[cs]:e.CLAMP_TO_EDGE,[Al]:e.MIRRORED_REPEAT},X={[Sn]:e.NEAREST,[Z0]:e.NEAREST_MIPMAP_NEAREST,[sc]:e.NEAREST_MIPMAP_LINEAR,[Rn]:e.LINEAR,[ch]:e.LINEAR_MIPMAP_NEAREST,[cr]:e.LINEAR_MIPMAP_LINEAR},at={[Q0]:e.NEVER,[sg]:e.ALWAYS,[tg]:e.LESS,[Yh]:e.LEQUAL,[eg]:e.EQUAL,[$h]:e.GEQUAL,[ng]:e.GREATER,[ig]:e.NOTEQUAL};function K(A,x){if(x.type===Ti&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Rn||x.magFilter===ch||x.magFilter===sc||x.magFilter===cr||x.minFilter===Rn||x.minFilter===ch||x.minFilter===sc||x.minFilter===cr)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,U[x.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,U[x.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,U[x.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,X[x.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,X[x.minFilter]),x.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Sn||x.minFilter!==sc&&x.minFilter!==cr||x.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));let Z=x.source,et=f.get(Z);et===void 0&&(et={},f.set(Z,et));let ht=j(x);if(ht!==A.__cacheKey){et[ht]===void 0&&(et[ht]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[ht].usedTimes++;let dt=et[A.__cacheKey];dt!==void 0&&(et[A.__cacheKey].usedTimes--,dt.usedTimes===0&&I(x)),A.__cacheKey=ht,A.__webglTexture=et[ht].texture}return H}function B(A,x,H){return Math.floor(Math.floor(A/H)/x)}function L(A,x,H,Z){let ht=A.updateRanges;if(ht.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,H,Z,x.data);else{ht.sort((Ot,vt)=>Ot.start-vt.start);let dt=0;for(let Ot=1;Ot<ht.length;Ot++){let vt=ht[dt],pt=ht[Ot],Bt=vt.start+vt.count,qt=B(pt.start,x.width,4),Qt=B(vt.start,x.width,4);pt.start<=Bt+1&&qt===Qt&&B(pt.start+pt.count-1,x.width,4)===qt?vt.count=Math.max(vt.count,pt.start+pt.count-vt.start):(++dt,ht[dt]=pt)}ht.length=dt+1;let it=n.getParameter(e.UNPACK_ROW_LENGTH),rt=n.getParameter(e.UNPACK_SKIP_PIXELS),ft=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Ot=0,vt=ht.length;Ot<vt;Ot++){let pt=ht[Ot],Bt=Math.floor(pt.start/4),qt=Math.ceil(pt.count/4),Qt=Bt%x.width,k=Math.floor(Bt/x.width),mt=qt,st=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Qt),n.pixelStorei(e.UNPACK_SKIP_ROWS,k),n.texSubImage2D(e.TEXTURE_2D,0,Qt,k,mt,st,H,Z,x.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,it),n.pixelStorei(e.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(e.UNPACK_SKIP_ROWS,ft)}}function ot(A,x,H){let Z=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=e.TEXTURE_3D);let et=nt(A,x),ht=x.source;n.bindTexture(Z,A.__webglTexture,e.TEXTURE0+H);let dt=i.get(ht);if(ht.version!==dt.__version||et===!0){if(n.activeTexture(e.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let st=ue.getPrimaries(ue.workingColorSpace),gt=x.colorSpace===Ds?null:ue.getPrimaries(x.colorSpace),St=x.colorSpace===Ds||st===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let rt=m(x.image,!1,s.maxTextureSize);rt=Xe(x,rt);let ft=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type),vt=v(x.internalFormat,ft,Ot,x.normalized,x.colorSpace,x.isVideoTexture);K(Z,x);let pt,Bt=x.mipmaps,qt=x.isVideoTexture!==!0,Qt=dt.__version===void 0||et===!0,k=ht.dataReady,mt=E(x,rt);if(x.isDepthTexture)vt=T(x.format===lr,x.type),Qt&&(qt?n.texStorage2D(e.TEXTURE_2D,1,vt,rt.width,rt.height):n.texImage2D(e.TEXTURE_2D,0,vt,rt.width,rt.height,0,ft,Ot,null));else if(x.isDataTexture)if(Bt.length>0){qt&&Qt&&n.texStorage2D(e.TEXTURE_2D,mt,vt,Bt[0].width,Bt[0].height);for(let st=0,gt=Bt.length;st<gt;st++)pt=Bt[st],qt?k&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,pt.width,pt.height,ft,Ot,pt.data):n.texImage2D(e.TEXTURE_2D,st,vt,pt.width,pt.height,0,ft,Ot,pt.data);x.generateMipmaps=!1}else qt?(Qt&&n.texStorage2D(e.TEXTURE_2D,mt,vt,rt.width,rt.height),k&&L(x,rt,ft,Ot)):n.texImage2D(e.TEXTURE_2D,0,vt,rt.width,rt.height,0,ft,Ot,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&Qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,vt,Bt[0].width,Bt[0].height,rt.depth);for(let st=0,gt=Bt.length;st<gt;st++)if(pt=Bt[st],x.format!==wi)if(ft!==null)if(qt){if(k)if(x.layerUpdates.size>0){let St=Tf(pt.width,pt.height,x.format,x.type);for(let ct of x.layerUpdates){let Vt=pt.data.subarray(ct*St/pt.data.BYTES_PER_ELEMENT,(ct+1)*St/pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,ct,pt.width,pt.height,1,ft,Vt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,rt.depth,ft,pt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,st,vt,pt.width,pt.height,rt.depth,0,pt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,rt.depth,ft,Ot,pt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,st,vt,pt.width,pt.height,rt.depth,0,ft,Ot,pt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{qt&&Qt&&n.texStorage2D(e.TEXTURE_2D,mt,vt,Bt[0].width,Bt[0].height);for(let st=0,gt=Bt.length;st<gt;st++)pt=Bt[st],x.format!==wi?ft!==null?qt?k&&n.compressedTexSubImage2D(e.TEXTURE_2D,st,0,0,pt.width,pt.height,ft,pt.data):n.compressedTexImage2D(e.TEXTURE_2D,st,vt,pt.width,pt.height,0,pt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,pt.width,pt.height,ft,Ot,pt.data):n.texImage2D(e.TEXTURE_2D,st,vt,pt.width,pt.height,0,ft,Ot,pt.data)}else if(x.isDataArrayTexture)if(qt){if(Qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,vt,rt.width,rt.height,rt.depth),k)if(x.layerUpdates.size>0){let st=Tf(rt.width,rt.height,x.format,x.type);for(let gt of x.layerUpdates){let St=rt.data.subarray(gt*st/rt.data.BYTES_PER_ELEMENT,(gt+1)*st/rt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,gt,rt.width,rt.height,1,ft,Ot,St)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ft,Ot,rt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,ft,Ot,rt.data);else if(x.isData3DTexture)qt?(Qt&&n.texStorage3D(e.TEXTURE_3D,mt,vt,rt.width,rt.height,rt.depth),k&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ft,Ot,rt.data)):n.texImage3D(e.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,ft,Ot,rt.data);else if(x.isFramebufferTexture){if(Qt)if(qt)n.texStorage2D(e.TEXTURE_2D,mt,vt,rt.width,rt.height);else{let st=rt.width,gt=rt.height;for(let St=0;St<mt;St++)n.texImage2D(e.TEXTURE_2D,St,vt,st,gt,0,ft,Ot,null),st>>=1,gt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let st=e.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),d.add(x),st.onpaint=gt=>{let St=gt.changedElements;for(let ct of d)St.includes(ct.image)&&(ct.needsUpdate=!0)},st.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,rt);else{let St=e.RGBA,ct=e.RGBA,Vt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,St,ct,Vt,rt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(qt&&Qt){let st=he(Bt[0]);n.texStorage2D(e.TEXTURE_2D,mt,vt,st.width,st.height)}for(let st=0,gt=Bt.length;st<gt;st++)pt=Bt[st],qt?k&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,ft,Ot,pt):n.texImage2D(e.TEXTURE_2D,st,vt,ft,Ot,pt);x.generateMipmaps=!1}else if(qt){if(Qt){let st=he(rt);n.texStorage2D(e.TEXTURE_2D,mt,vt,st.width,st.height)}k&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Ot,rt)}else n.texImage2D(e.TEXTURE_2D,0,vt,ft,Ot,rt);p(x)&&M(Z),dt.__version=ht.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function _t(A,x,H){if(x.image.length!==6)return;let Z=nt(A,x),et=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+H);let ht=i.get(et);if(et.version!==ht.__version||Z===!0){n.activeTexture(e.TEXTURE0+H);let dt=ue.getPrimaries(ue.workingColorSpace),it=x.colorSpace===Ds?null:ue.getPrimaries(x.colorSpace),rt=x.colorSpace===Ds||dt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let ct=0;ct<6;ct++)!ft&&!Ot?vt[ct]=m(x.image[ct],!0,s.maxCubemapSize):vt[ct]=Ot?x.image[ct].image:x.image[ct],vt[ct]=Xe(x,vt[ct]);let pt=vt[0],Bt=r.convert(x.format,x.colorSpace),qt=r.convert(x.type),Qt=v(x.internalFormat,Bt,qt,x.normalized,x.colorSpace),k=x.isVideoTexture!==!0,mt=ht.__version===void 0||Z===!0,st=et.dataReady,gt=E(x,pt);K(e.TEXTURE_CUBE_MAP,x);let St;if(ft){k&&mt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Qt,pt.width,pt.height);for(let ct=0;ct<6;ct++){St=vt[ct].mipmaps;for(let Vt=0;Vt<St.length;Vt++){let Lt=St[Vt];x.format!==wi?Bt!==null?k?st&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Lt.width,Lt.height,Bt,Lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,Qt,Lt.width,Lt.height,0,Lt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Lt.width,Lt.height,Bt,qt,Lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,Qt,Lt.width,Lt.height,0,Bt,qt,Lt.data)}}}else{if(St=x.mipmaps,k&&mt){St.length>0&&gt++;let ct=he(vt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Qt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ot){k?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,vt[ct].width,vt[ct].height,Bt,qt,vt[ct].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Qt,vt[ct].width,vt[ct].height,0,Bt,qt,vt[ct].data);for(let Vt=0;Vt<St.length;Vt++){let Le=St[Vt].image[ct].image;k?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Le.width,Le.height,Bt,qt,Le.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,Qt,Le.width,Le.height,0,Bt,qt,Le.data)}}else{k?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Bt,qt,vt[ct]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Qt,Bt,qt,vt[ct]);for(let Vt=0;Vt<St.length;Vt++){let Lt=St[Vt];k?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Bt,qt,Lt.image[ct]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,Qt,Bt,qt,Lt.image[ct])}}}p(x)&&M(e.TEXTURE_CUBE_MAP),ht.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ut(A,x,H,Z,et,ht){let dt=r.convert(H.format,H.colorSpace),it=r.convert(H.type),rt=v(H.internalFormat,dt,it,H.normalized,H.colorSpace),ft=i.get(x),Ot=i.get(H);if(Ot.__renderTarget=x,!ft.__hasExternalTextures){let vt=Math.max(1,x.width>>ht),pt=Math.max(1,x.height>>ht);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,ht,rt,vt,pt,x.depth,0,dt,it,null):n.texImage2D(et,ht,rt,vt,pt,0,dt,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),ne(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,et,Ot.__webglTexture,0,jt(x)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,et,Ot.__webglTexture,ht),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Wt(A,x,H){if(e.bindRenderbuffer(e.RENDERBUFFER,A),x.depthBuffer){let Z=x.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,ht=T(x.stencilBuffer,et),dt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ne(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,jt(x),ht,x.width,x.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,jt(x),ht,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ht,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,A)}else{let Z=x.textures;for(let et=0;et<Z.length;et++){let ht=Z[et],dt=r.convert(ht.format,ht.colorSpace),it=r.convert(ht.type),rt=v(ht.internalFormat,dt,it,ht.normalized,ht.colorSpace);ne(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,jt(x),rt,x.width,x.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,jt(x),rt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,rt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(A,x,H){let Z=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=i.get(x.depthTexture);if(et.__renderTarget=x,(!et.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(et.__webglInit===void 0&&(et.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),K(e.TEXTURE_CUBE_MAP,x.depthTexture);let ft=r.convert(x.depthTexture.format),Ot=r.convert(x.depthTexture.type),vt;x.depthTexture.format===ls?vt=e.DEPTH_COMPONENT24:x.depthTexture.format===lr&&(vt=e.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,vt,x.width,x.height,0,ft,Ot,null)}}else lt(x.depthTexture,0);let ht=et.__webglTexture,dt=jt(x),it=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,rt=x.depthTexture.format===lr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===ls)ne(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,rt,it,ht,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,rt,it,ht,0);else if(x.depthTexture.format===lr)ne(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,rt,it,ht,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,rt,it,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(A){let x=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)le(x.__webglFramebuffer[Z],A,Z);else{let Z=A.texture.mipmaps;Z&&Z.length>0?le(x.__webglFramebuffer[0],A,0):le(x.__webglFramebuffer,A,0)}else if(H){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=e.createRenderbuffer(),Wt(x.__webglDepthbuffer[Z],A,!1);else{let et=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,ht)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Wt(x.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,ht)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function te(A,x,H){let Z=i.get(A);x!==void 0&&ut(Z.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&Xt(A)}function xe(A){let x=A.texture,H=i.get(A),Z=i.get(x);A.addEventListener("dispose",_);let et=A.textures,ht=A.isWebGLCubeRenderTarget===!0,dt=et.length>1;if(dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=x.version,o.memory.textures++),ht){H.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[it]=[];for(let rt=0;rt<x.mipmaps.length;rt++)H.__webglFramebuffer[it][rt]=e.createFramebuffer()}else H.__webglFramebuffer[it]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)H.__webglFramebuffer[it]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(dt)for(let it=0,rt=et.length;it<rt;it++){let ft=i.get(et[it]);ft.__webglTexture===void 0&&(ft.__webglTexture=e.createTexture(),o.memory.textures++)}if(A.samples>0&&ne(A)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let rt=et[it];H.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[it]);let ft=r.convert(rt.format,rt.colorSpace),Ot=r.convert(rt.type),vt=v(rt.internalFormat,ft,Ot,rt.normalized,rt.colorSpace,A.isXRRenderTarget===!0),pt=jt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,pt,vt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,H.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Wt(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ht){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),K(e.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)ut(H.__webglFramebuffer[it][rt],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else ut(H.__webglFramebuffer[it],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(x)&&M(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(dt){for(let it=0,rt=et.length;it<rt;it++){let ft=et[it],Ot=i.get(ft),vt=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(vt,Ot.__webglTexture),K(vt,ft),ut(H.__webglFramebuffer,A,ft,e.COLOR_ATTACHMENT0+it,vt,0),p(ft)&&M(vt)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,Z.__webglTexture),K(it,x),x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)ut(H.__webglFramebuffer[rt],A,x,e.COLOR_ATTACHMENT0,it,rt);else ut(H.__webglFramebuffer,A,x,e.COLOR_ATTACHMENT0,it,0);p(x)&&M(it),n.unbindTexture()}A.depthBuffer&&Xt(A)}function ee(A){let x=A.textures;for(let H=0,Z=x.length;H<Z;H++){let et=x[H];if(p(et)){let ht=w(A),dt=i.get(et).__webglTexture;n.bindTexture(ht,dt),M(ht),n.unbindTexture()}}}let Re=[],Qe=[];function Kt(A){if(A.samples>0){if(ne(A)===!1){let x=A.textures,H=A.width,Z=A.height,et=e.COLOR_BUFFER_BIT,ht=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(A),it=x.length>1;if(it)for(let ft=0;ft<x.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let rt=A.texture.mipmaps;rt&&rt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);let Ot=i.get(x[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ot,0)}e.blitFramebuffer(0,0,H,Z,0,0,H,Z,et,e.NEAREST),c===!0&&(Re.length=0,Qe.length=0,Re.push(e.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Re.push(ht),Qe.push(ht),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Qe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let ft=0;ft<x.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);let Ot=i.get(x[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,Ot,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function jt(A){return Math.min(s.maxSamples,A.samples)}function ne(A){let x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Xe(A,x){let H=A.colorSpace,Z=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Ia&&H!==Ds&&(ue.getTransfer(H)===Me?(Z!==wi||et!==ni)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",H)),x}function he(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=tt,this.resetTextureUnits=W,this.getTextureUnits=F,this.setTextureUnits=$,this.setTexture2D=lt,this.setTexture2DArray=Q,this.setTexture3D=G,this.setTextureCube=C,this.rebindTextures=te,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function CS(e,t){function n(i,s=Ds){let r,o=ue.getTransfer(s);if(i===ni)return e.UNSIGNED_BYTE;if(i===hh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ff)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===pf)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===uf)return e.BYTE;if(i===df)return e.SHORT;if(i===wo)return e.UNSIGNED_SHORT;if(i===lh)return e.INT;if(i===$i)return e.UNSIGNED_INT;if(i===Ti)return e.FLOAT;if(i===Zi)return e.HALF_FLOAT;if(i===mf)return e.ALPHA;if(i===gf)return e.RGB;if(i===wi)return e.RGBA;if(i===ls)return e.DEPTH_COMPONENT;if(i===lr)return e.DEPTH_STENCIL;if(i===dh)return e.RED;if(i===fh)return e.RED_INTEGER;if(i===hr)return e.RG;if(i===ph)return e.RG_INTEGER;if(i===mh)return e.RGBA_INTEGER;if(i===rc||i===oc||i===ac||i===cc)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===_h||i===xh||i===vh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===Mh||i===bh||i===Sh||i===Eh||i===lc||i===Th)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yh||i===Mh)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sh)return r.COMPRESSED_R11_EAC;if(i===Eh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===lc)return r.COMPRESSED_RG11_EAC;if(i===Th)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wh||i===Ah||i===Ch||i===Rh||i===Ih||i===Ph||i===Lh||i===Dh||i===Nh||i===Uh||i===Fh||i===Oh||i===Bh||i===zh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ah)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ih)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kh||i===Vh||i===Gh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===kh)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hh||i===Wh||i===hc||i===Xh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var RS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IS=`
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

}`,Wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Ha(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ui({vertexShader:RS,fragmentShader:IS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ft(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xf=class extends hs{constructor(t,n){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new Wf,p={},M=n.getContextAttributes(),w=null,v=null,T=[],E=[],R=new Nt,_=null,S=null,I=new On;I.viewport=new Ve;let D=new On;D.viewport=new Ve;let N=[I,D],W=new nh,F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let L=T[B];return L===void 0&&(L=new go,T[B]=L),L.getTargetRaySpace()},this.getControllerGrip=function(B){let L=T[B];return L===void 0&&(L=new go,T[B]=L),L.getGripSpace()},this.getHand=function(B){let L=T[B];return L===void 0&&(L=new go,T[B]=L),L.getHandSpace()};function tt(B){let L=E.indexOf(B.inputSource);if(L===-1)return;let ot=T[L];ot!==void 0&&(ot.update(B.inputSource,B.frame,l||o),ot.dispatchEvent({type:B.type,data:B.inputSource}))}function j(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",lt);for(let B=0;B<T.length;B++){let L=E[B];L!==null&&(E[B]=null,T[B].disconnect(L))}F=null,$=null,m.reset();for(let B in p)delete p[B];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,v=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),S!==null){let B=S.camera;B.fov=S.fov,B.zoom=S.zoom,B.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",j),s.addEventListener("inputsourceschange",lt),M.xrCompatible!==!0&&await n.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,_t=null,ut=null;M.depth&&(ut=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ot=M.stencil?lr:ls,_t=M.stencil?Ao:$i);let Wt={colorFormat:n.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ti(u.textureWidth,u.textureHeight,{format:wi,type:ni,depthTexture:new nr(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ti(f.framebufferWidth,f.framebufferHeight,{format:wi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(B){for(let L=0;L<B.removed.length;L++){let ot=B.removed[L],_t=E.indexOf(ot);_t>=0&&(E[_t]=null,T[_t].disconnect(ot))}for(let L=0;L<B.added.length;L++){let ot=B.added[L],_t=E.indexOf(ot);if(_t===-1){for(let Wt=0;Wt<T.length;Wt++)if(Wt>=E.length){E.push(ot),_t=Wt;break}else if(E[Wt]===null){E[Wt]=ot,_t=Wt;break}if(_t===-1)break}let ut=T[_t];ut&&ut.connect(ot)}}let Q=new P,G=new P;function C(B,L,ot){Q.setFromMatrixPosition(L.matrixWorld),G.setFromMatrixPosition(ot.matrixWorld);let _t=Q.distanceTo(G),ut=L.projectionMatrix.elements,Wt=ot.projectionMatrix.elements,le=ut[14]/(ut[10]-1),Xt=ut[14]/(ut[10]+1),te=(ut[9]+1)/ut[5],xe=(ut[9]-1)/ut[5],ee=(ut[8]-1)/ut[0],Re=(Wt[8]+1)/Wt[0],Qe=le*ee,Kt=le*Re,jt=_t/(-ee+Re),ne=jt*-ee;if(L.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ne),B.translateZ(jt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ut[10]===-1)B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let O=le+jt,Xe=Xt+jt,he=Qe-ne,A=Kt+(_t-ne),x=te*Xt/Xe*O,H=xe*Xt/Xe*O;B.projectionMatrix.makePerspective(he,A,x,H,O,Xe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function U(B,L){L===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(L.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let L=B.near,ot=B.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),W.near=D.near=I.near=L,W.far=D.far=I.far=ot,(F!==W.near||$!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),F=W.near,$=W.far),W.layers.mask=B.layers.mask|6,I.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;let _t=B.parent,ut=W.cameras;U(W,_t);for(let Wt=0;Wt<ut.length;Wt++)U(ut[Wt],_t);ut.length===2?C(W,I,D):W.projectionMatrix.copy(I.projectionMatrix),S===null&&B.isPerspectiveCamera&&(S={camera:B,fov:B.fov,zoom:B.zoom}),X(B,W,_t)};function X(B,L,ot){ot===null?B.matrix.copy(L.matrixWorld):(B.matrix.copy(ot.matrixWorld),B.matrix.invert(),B.matrix.multiply(L.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=po*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(B){return p[B]};let at=null;function K(B,L){if(h=L.getViewerPose(l||o),g=L,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let _t=!1;ot.length!==W.cameras.length&&(W.cameras.length=0,_t=!0);for(let Xt=0;Xt<ot.length;Xt++){let te=ot[Xt],xe=null;if(f!==null)xe=f.getViewport(te);else{let Re=d.getViewSubImage(u,te);xe=Re.viewport,Xt===0&&(t.setRenderTargetTextures(v,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(v))}let ee=N[Xt];ee===void 0&&(ee=new On,ee.layers.enable(Xt),ee.viewport=new Ve,N[Xt]=ee),ee.matrix.fromArray(te.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(te.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(xe.x,xe.y,xe.width,xe.height),Xt===0&&(W.matrix.copy(ee.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),_t===!0&&W.cameras.push(ee)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Xt=d.getDepthInformation(ot[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Xt=0;Xt<ot.length;Xt++){let te=ot[Xt].camera;if(te){let xe=p[te];xe||(xe=new Ha,p[te]=xe);let ee=d.getCameraImage(te);xe.sourceTexture=ee}}}}for(let ot=0;ot<T.length;ot++){let _t=E[ot],ut=T[ot];_t!==null&&ut!==void 0&&ut.update(_t,L,l||o)}at&&at(B,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),g=null}let nt=new Ug;nt.setAnimationLoop(K),this.setAnimationLoop=function(B){at=B},this.dispose=function(){}}},PS=new de,Vg=new Jt;Vg.set(-1,0,0,0,1,0,0,0,1);function LS(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bf(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(PS.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function DS(e,t,n,i){let s={},r={},o=[],a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){let E=T.program;i.uniformBlockBinding(v,E)}function l(v,T){let E=s[v.id];E===void 0&&(m(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",M));let R=T.program;i.updateUBOMapping(v,R);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let T=d();v.__bindingPointIndex=T;let E=e.createBuffer(),R=v.__size,_=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,R,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],E=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let _=0,S=E.length;_<S;_++){let I=E[_];if(Array.isArray(I))for(let D=0,N=I.length;D<N;D++)f(I[D],_,D,R);else f(I,_,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,T,E,R){if(y(v,T,E,R)===!0){let _=v.__offset,S=v.value;if(Array.isArray(S)){let I=0;for(let D=0;D<S.length;D++){let N=S[D],W=p(N);g(N,v.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function y(v,T,E,R){let _=v.value,S=T+"_"+E;if(R[S]===void 0)return typeof _=="number"||typeof _=="boolean"?R[S]=_:ArrayBuffer.isView(_)?R[S]=_.slice():R[S]=_.clone(),!0;{let I=R[S];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(v){let T=v.uniforms,E=0,R=16;for(let S=0,I=T.length;S<I;S++){let D=Array.isArray(T[S])?T[S]:[T[S]];for(let N=0,W=D.length;N<W;N++){let F=D[N],$=Array.isArray(F.value)?F.value:[F.value];for(let tt=0,j=$.length;tt<j;tt++){let lt=$[tt],Q=p(lt),G=E%R,C=G%Q.boundary,U=G+C;E+=C,U!==0&&R-U<Q.storage&&(E+=R-U),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=Q.storage}}}let _=E%R;return _>0&&(E+=R-_),v.__size=E,v.__cache={},this}function p(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){let T=v.target;T.removeEventListener("dispose",M);let E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let v in s)e.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var NS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ps=null;function US(){return ps===null&&(ps=new ka(NS,16,16,hr,Zi),ps.name="DFG_LUT",ps.minFilter=Rn,ps.magFilter=Rn,ps.wrapS=cs,ps.wrapT=cs,ps.generateMipmaps=!1,ps.needsUpdate=!0),ps}var Qh=class{constructor(t={}){let{canvas:n=og(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ni}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=f,m=new Set([mh,ph,fh]),p=new Set([ni,$i,wo,Ao,hh,uh]),M=new Uint32Array(4),w=new Int32Array(4),v=new P,T=null,E=null,R=[],_=[],S=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,N=null,W=null,F=null,$=null;this._outputColorSpace=en;let tt=0,j=0,lt=null,Q=-1,G=null,C=new Ve,U=new Ve,X=null,at=new Gt(0),K=0,nt=n.width,B=n.height,L=1,ot=null,_t=null,ut=new Ve(0,0,nt,B),Wt=new Ve(0,0,nt,B),le=!1,Xt=new xo,te=!1,xe=!1,ee=new de,Re=new P,Qe=new Ve,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ne(){return lt===null?L:1}let O=i;function Xe(b,z){return n.getContext(b,z)}let he,A,x,H,Z,et,ht,dt,it,rt,ft,Ot,vt,pt,Bt,qt,Qt,k,mt,st,gt,St,ct;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",ki,!1),O===null){let z="webgl2";if(O=Xe(z,b),O===null)throw Xe(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(b){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",ki,!1),$t("WebGLRenderer: "+b.message),b}function Vt(){he=new GM(O),he.init(),gt=new CS(O,he),A=new LM(O,he,t,gt),x=new wS(O,he),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=O.createFramebuffer(),F=O.createFramebuffer(),$=O.createFramebuffer(),H=new XM(O),Z=new dS,et=new AS(O,he,x,Z,A,gt,H),ht=new VM(I),dt=new Yy(O),St=new IM(O,dt),it=new HM(O,dt,H,St),rt=new YM(O,it,dt,St,H),k=new qM(O,A,et),Bt=new DM(Z),ft=new uS(I,ht,he,A,St,Bt),Ot=new LS(I,Z),vt=new pS,pt=new yS(he),Qt=new RM(I,ht,x,rt,g,c),qt=new TS(I,rt,A),ct=new DS(O,H,A,x),mt=new PM(O,he,H),st=new WM(O,he,H),H.programs=ft.programs,I.capabilities=A,I.extensions=he,I.properties=Z,I.renderLists=vt,I.shadowMap=qt,I.state=x,I.info=H}y!==ni&&(S=new ZM(y,n.width,n.height,a,s,r));let Lt=new Xf(I,O);this.xr=Lt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=he.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=he.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(b){b!==void 0&&(L=b,this.setSize(nt,B,!1))},this.getSize=function(b){return b.set(nt,B)},this.setSize=function(b,z,J=!0){if(Lt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=b,B=z,n.width=Math.floor(b*L),n.height=Math.floor(z*L),J===!0&&(n.style.width=b+"px",n.style.height=z+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(nt*L,B*L).floor()},this.setDrawingBufferSize=function(b,z,J){nt=b,B=z,L=J,n.width=Math.floor(b*J),n.height=Math.floor(z*J),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(y===ni){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,z,J,q){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,z,J,q),x.viewport(C.copy(ut).multiplyScalar(L).round())},this.getScissor=function(b){return b.copy(Wt)},this.setScissor=function(b,z,J,q){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,z,J,q),x.scissor(U.copy(Wt).multiplyScalar(L).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){x.setScissorTest(le=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,J=!0){let q=0;if(b){let Y=!1;if(lt!==null){let bt=lt.texture.format;Y=m.has(bt)}if(Y){let bt=lt.texture.type,wt=p.has(bt),Mt=Qt.getClearColor(),Rt=Qt.getClearAlpha(),Dt=Mt.r,ie=Mt.g,ae=Mt.b;wt?(M[0]=Dt,M[1]=ie,M[2]=ae,M[3]=Rt,O.clearBufferuiv(O.COLOR,0,M)):(w[0]=Dt,w[1]=ie,w[2]=ae,w[3]=Rt,O.clearBufferiv(O.COLOR,0,w))}else q|=O.COLOR_BUFFER_BIT}z&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",ki,!1),Qt.dispose(),vt.dispose(),pt.dispose(),Z.dispose(),ht.dispose(),rt.dispose(),St.dispose(),ct.dispose(),ft.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Hm),Lt.removeEventListener("sessionend",Wm),Er.stop()};function Le(b){b.preventDefault(),xf("WebGLRenderer: Context Lost."),D=!0}function ve(){xf("WebGLRenderer: Context Restored."),D=!1;let b=H.autoReset,z=qt.enabled,J=qt.autoUpdate,q=qt.needsUpdate,Y=qt.type;Vt(),H.autoReset=b,qt.enabled=z,qt.autoUpdate=J,qt.needsUpdate=q,qt.type=Y}function ki(b){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rs(b){let z=b.target;z.removeEventListener("dispose",rs),Rv(z)}function Rv(b){Iv(b),Z.remove(b)}function Iv(b){let z=Z.get(b).programs;z!==void 0&&(z.forEach(function(J){ft.releaseProgram(J)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,J,q,Y,bt){z===null&&(z=Kt);let wt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Mt=Dv(b,z,J,q,Y);x.setMaterial(q,wt);let Rt=J.index,Dt=1;if(q.wireframe===!0){if(Rt=it.getWireframeAttribute(J),Rt===void 0)return;Dt=2}let ie=J.drawRange,ae=J.attributes.position,It=ie.start*Dt,ye=(ie.start+ie.count)*Dt;bt!==null&&(It=Math.max(It,bt.start*Dt),ye=Math.min(ye,(bt.start+bt.count)*Dt)),Rt!==null?(It=Math.max(It,0),ye=Math.min(ye,Rt.count)):ae!=null&&(It=Math.max(It,0),ye=Math.min(ye,ae.count));let ln=ye-It;if(ln<0||ln===1/0)return;St.setup(Y,q,Mt,J,Rt);let Fe,Ie=mt;if(Rt!==null&&(Fe=dt.get(Rt),Ie=st,Ie.setIndex(Fe)),Y.isMesh)q.wireframe===!0?(x.setLineWidth(q.wireframeLinewidth*ne()),Ie.setMode(O.LINES)):Ie.setMode(O.TRIANGLES);else if(Y.isLine){let Nn=q.linewidth;Nn===void 0&&(Nn=1),x.setLineWidth(Nn*ne()),Y.isLineSegments?Ie.setMode(O.LINES):Y.isLineLoop?Ie.setMode(O.LINE_LOOP):Ie.setMode(O.LINE_STRIP)}else Y.isPoints?Ie.setMode(O.POINTS):Y.isSprite&&Ie.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Nn=Y._multiDrawStarts,Tt=Y._multiDrawCounts,Wn=Y._multiDrawCount,me=Rt?dt.get(Rt).bytesPerElement:1,bi=Z.get(q).currentProgram.getUniforms();for(let os=0;os<Wn;os++)bi.setValue(O,"_gl_DrawID",os),Ie.render(Nn[os]/me,Tt[os])}else if(Y.isInstancedMesh)Ie.renderInstances(It,ln,Y.count);else if(J.isInstancedBufferGeometry){let Nn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tt=Math.min(J.instanceCount,Nn);Ie.renderInstances(It,ln,Tt)}else Ie.render(It,ln)};function Gm(b,z,J,q){N!==null&&b.isNodeMaterial&&N.setObject(q,b),te===!0&&Bt.setState(b,J,!1),b.transparent===!0&&b.side===zn&&b.forceSinglePass===!1?(b.side=Ln,b.needsUpdate=!0,Zc(b,z,q),b.side=or,b.needsUpdate=!0,Zc(b,z,q),b.side=zn):Zc(b,z,q)}this.compile=function(b,z,J=null){J===null&&(J=b),N!==null&&N.renderStart(b,z,J),E=pt.get(J),E.init(z),_.push(E),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),b!==J&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),xe=this.localClippingEnabled,te=Bt.init(this.clippingPlanes,xe),te===!0&&Bt.setGlobalState(this.clippingPlanes,z),N!==null&&qt.render(E.state.shadowsArray,J,z);let q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let bt=Y.material;if(bt)if(Array.isArray(bt))for(let wt=0;wt<bt.length;wt++){let Mt=bt[wt];Gm(Mt,J,z,Y),q.add(Mt)}else Gm(bt,J,z,Y),q.add(bt)}),E=_.pop(),N!==null&&N.renderEnd(),q},this.compileAsync=function(b,z,J=null){let q=this.compile(b,z,J);return new Promise(Y=>{function bt(){if(q.forEach(function(wt){let Rt=Z.get(wt).currentProgram;(Rt===void 0||Rt.isReady())&&q.delete(wt)}),q.size===0){Y(b);return}setTimeout(bt,10)}he.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xd=null;function Pv(b){xd&&xd(b)}function Hm(){Er.stop()}function Wm(){Er.start()}let Er=new Ug;Er.setAnimationLoop(Pv),typeof self!="undefined"&&Er.setContext(self),this.setAnimationLoop=function(b){xd=b,Lt.setAnimationLoop(b),b===null?Er.stop():Er.start()},Lt.addEventListener("sessionstart",Hm),Lt.addEventListener("sessionend",Wm),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(b,z);let J=Lt.enabled===!0&&Lt.isPresenting===!0,q=S!==null&&(lt===null||J)&&S.begin(I,lt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(z),z=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,z,lt),E=pt.get(b,_.length),E.init(z),E.state.textureUnits=et.getTextureUnits(),_.push(E),ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xt.setFromProjectionMatrix(ee,Xi,z.reversedDepth),xe=this.localClippingEnabled,te=Bt.init(this.clippingPlanes,xe),T=vt.get(b,R.length),T.init(),R.push(T),Lt.enabled===!0&&Lt.isPresenting===!0){let wt=I.xr.getDepthSensingMesh();wt!==null&&vd(wt,z,-1/0,I.sortObjects)}vd(b,z,0,I.sortObjects),T.finish(),N!==null&&N.updateLights(E.state.lightsArray),I.sortObjects===!0&&T.sort(ot,_t),jt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,jt&&Qt.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&Bt.beginShadows();let Y=E.state.shadowsArray;if(qt.render(Y,b,z),te===!0&&Bt.endShadows(),(q&&S.hasRenderPass())===!1){let wt=T.opaque,Mt=T.transmissive;if(E.setupLights(),z.isArrayCamera){let Rt=z.cameras;if(Mt.length>0)for(let Dt=0,ie=Rt.length;Dt<ie;Dt++){let ae=Rt[Dt];qm(wt,Mt,b,ae)}jt&&Qt.render(b);for(let Dt=0,ie=Rt.length;Dt<ie;Dt++){let ae=Rt[Dt];Xm(T,b,ae,ae.viewport)}}else Mt.length>0&&qm(wt,Mt,b,z),jt&&Qt.render(b),Xm(T,b,z)}lt!==null&&j===0&&(et.updateMultisampleRenderTarget(lt),et.updateRenderTargetMipmap(lt)),q&&S.end(I),b.isScene===!0&&b.onAfterRender(I,b,z),St.resetDefaultState(),Q=-1,G=null,_.pop(),_.length>0?(E=_[_.length-1],et.setTextureUnits(E.state.textureUnits),te===!0&&Bt.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,N!==null&&N.renderEnd()};function vd(b,z,J,q){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Xt)){q&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);let wt=rt.update(b),Mt=b.material;Mt.visible&&T.push(b,wt,Mt,J,Qe.z,null,z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Xt))){let wt=rt.update(b),Mt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Qe.copy(wt.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Mt)){let Rt=wt.groups;for(let Dt=0,ie=Rt.length;Dt<ie;Dt++){let ae=Rt[Dt],It=Mt[ae.materialIndex];It&&It.visible&&T.push(b,wt,It,J,Qe.z,ae,z)}}else Mt.visible&&T.push(b,wt,Mt,J,Qe.z,null,z)}}let bt=b.children;for(let wt=0,Mt=bt.length;wt<Mt;wt++)vd(bt[wt],z,J,q)}function Xm(b,z,J,q){let{opaque:Y,transmissive:bt,transparent:wt}=b;E.setupLightsView(J),te===!0&&Bt.setGlobalState(I.clippingPlanes,J),q&&x.viewport(C.copy(q)),Y.length>0&&$c(Y,z,J),bt.length>0&&$c(bt,z,J),wt.length>0&&$c(wt,z,J),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function qm(b,z,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let It=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new ti(1,1,{generateMipmaps:!0,type:It?Zi:ni,minFilter:cr,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let bt=E.state.transmissionRenderTarget[q.id],wt=q.viewport||C;bt.setSize(wt.z*I.transmissionResolutionScale,wt.w*I.transmissionResolutionScale);let Mt=I.getRenderTarget(),Rt=I.getActiveCubeFace(),Dt=I.getActiveMipmapLevel();I.setRenderTarget(bt),I.getClearColor(at),K=I.getClearAlpha(),K<1&&I.setClearColor(16777215,.5),I.clear(),jt&&Qt.render(J);let ie=I.toneMapping;I.toneMapping=Yi;let ae=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),te===!0&&Bt.setGlobalState(I.clippingPlanes,q),$c(b,J,q),et.updateMultisampleRenderTarget(bt),et.updateRenderTargetMipmap(bt),he.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ye=0,ln=z.length;ye<ln;ye++){let Fe=z[ye],{object:Ie,geometry:Nn,material:Tt,group:Wn}=Fe;if(Tt.side===zn&&Ie.layers.test(q.layers)){let me=Tt.side;Tt.side=Ln,Tt.needsUpdate=!0,Ym(Ie,J,q,Nn,Tt,Wn),Tt.side=me,Tt.needsUpdate=!0,It=!0}}It===!0&&(et.updateMultisampleRenderTarget(bt),et.updateRenderTargetMipmap(bt))}I.setRenderTarget(Mt,Rt,Dt),I.setClearColor(at,K),ae!==void 0&&(q.viewport=ae),I.toneMapping=ie}function $c(b,z,J){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,bt=b.length;Y<bt;Y++){let wt=b[Y],{object:Mt,geometry:Rt,group:Dt}=wt,ie=wt.material;ie.allowOverride===!0&&q!==null&&(ie=q),Mt.layers.test(J.layers)&&Ym(Mt,z,J,Rt,ie,Dt)}}function Ym(b,z,J,q,Y,bt){N!==null&&Y.isNodeMaterial&&N.setObject(b,Y),b.onBeforeRender(I,z,J,q,Y,bt),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(I,z,J,q,b,bt),Y.transparent===!0&&Y.side===zn&&Y.forceSinglePass===!1?(Y.side=Ln,Y.needsUpdate=!0,I.renderBufferDirect(J,z,q,Y,b,bt),Y.side=or,Y.needsUpdate=!0,I.renderBufferDirect(J,z,q,Y,b,bt),Y.side=zn):I.renderBufferDirect(J,z,q,Y,b,bt),b.onAfterRender(I,z,J,q,Y,bt)}function Zc(b,z,J){z.isScene!==!0&&(z=Kt);let q=Z.get(b),Y=E.state.lights,bt=E.state.shadowsArray,wt=Y.state.version,Mt=ft.getParameters(b,Y.state,bt,z,J,E.state.lightProbeGridArray),Rt=ft.getProgramCacheKey(Mt),Dt=q.programs;q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;q.envMap=ht.get(b.envMap||q.environment,ie),q.envMapRotation=q.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",rs),Dt=new Map,q.programs=Dt);let ae=Dt.get(Rt);if(ae!==void 0){if(q.currentProgram===ae&&q.lightsStateVersion===wt)return Zm(b,Mt),ae}else Mt.uniforms=ft.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,J,Mt),b.onBeforeCompile(Mt,I),ae=ft.acquireProgram(Mt,Rt),Dt.set(Rt,ae),q.uniforms=Mt.uniforms;let It=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=Bt.uniform),Zm(b,Mt),q.needsLights=Uv(b),q.lightsStateVersion=wt,q.needsLights&&(It.ambientLightColor.value=Y.state.ambient,It.lightProbe.value=Y.state.probe,It.sunLights.value=Y.state.sun,It.sunLightShadows.value=Y.state.sunShadow,It.directionalLights.value=Y.state.directional,It.directionalLightShadows.value=Y.state.directionalShadow,It.spotLights.value=Y.state.spot,It.spotLightShadows.value=Y.state.spotShadow,It.rectAreaLights.value=Y.state.rectArea,It.ltc_1.value=Y.state.rectAreaLTC1,It.ltc_2.value=Y.state.rectAreaLTC2,It.pointLights.value=Y.state.point,It.pointLightShadows.value=Y.state.pointShadow,It.hemisphereLights.value=Y.state.hemi,It.sunShadowMatrix.value=Y.state.sunShadowMatrix,It.sunShadowCascade.value=Y.state.sunShadowCascade,It.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,It.spotLightMatrix.value=Y.state.spotLightMatrix,It.spotLightMap.value=Y.state.spotLightMap,It.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=ae,q.uniformsList=null,ae}function $m(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Po.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Zm(b,z){let J=Z.get(b);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Lv(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let J=0,q=b.length;J<q;J++){let Y=b[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(v))return Y}return null}function Dv(b,z,J,q,Y){z.isScene!==!0&&(z=Kt),et.resetTextureUnits();let bt=z.fog,wt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Mt=lt===null?I.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ue.workingColorSpace,Rt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Dt=ht.get(q.envMap||wt,Rt),ie=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ae=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!J.morphAttributes.position,ye=!!J.morphAttributes.normal,ln=!!J.morphAttributes.color,Fe=Yi;q.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Fe=I.toneMapping);let Ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Nn=Ie!==void 0?Ie.length:0,Tt=Z.get(q),Wn=E.state.lights;if(te===!0&&(xe===!0||b!==G)){let De=b===G&&q.id===Q;Bt.setState(q,b,De)}let me=!1;q.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Wn.state.version||Tt.outputColorSpace!==Mt||Y.isBatchedMesh&&Tt.batching===!1||!Y.isBatchedMesh&&Tt.batching===!0||Y.isBatchedMesh&&Tt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Tt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Tt.instancing===!1||!Y.isInstancedMesh&&Tt.instancing===!0||Y.isSkinnedMesh&&Tt.skinning===!1||!Y.isSkinnedMesh&&Tt.skinning===!0||Y.isInstancedMesh&&Tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Tt.instancingMorph===!1&&Y.morphTexture!==null||Tt.envMap!==Dt||q.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Bt.numPlanes||Tt.numIntersection!==Bt.numIntersection)||Tt.vertexAlphas!==ie||Tt.vertexTangents!==ae||Tt.morphTargets!==It||Tt.morphNormals!==ye||Tt.morphColors!==ln||Tt.toneMapping!==Fe||Tt.morphTargetsCount!==Nn||!!Tt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Tt.__version=q.version);let bi=Tt.currentProgram;me===!0&&(bi=Zc(q,z,Y),N&&q.isNodeMaterial&&N.onUpdateProgram(q,bi,Tt));let os=!1,Ys=!1,qr=!1,Ee=bi.getUniforms(),tn=Tt.uniforms;if(x.useProgram(bi.program)&&(os=!0,Ys=!0,qr=!0),q.id!==Q&&(Q=q.id,Ys=!0),Tt.needsLights){let De=Lv(E.state.lightProbeGridArray,Y);Tt.lightProbeGrid!==De&&(Tt.lightProbeGrid=De,Ys=!0)}if(os||G!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ee.setValue(O,"projectionMatrix",b.projectionMatrix),Ee.setValue(O,"viewMatrix",b.matrixWorldInverse);let Zs=Ee.map.cameraPosition;Zs!==void 0&&Zs.setValue(O,Re.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&Ee.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ee.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ys=!0,qr=!0)}if(Tt.needsLights&&(Wn.state.sunShadowMap.length>0&&Ee.setValue(O,"sunShadowMap",Wn.state.sunShadowMap,et),Wn.state.directionalShadowMap.length>0&&Ee.setValue(O,"directionalShadowMap",Wn.state.directionalShadowMap,et),Wn.state.spotShadowMap.length>0&&Ee.setValue(O,"spotShadowMap",Wn.state.spotShadowMap,et),Wn.state.pointShadowMap.length>0&&Ee.setValue(O,"pointShadowMap",Wn.state.pointShadowMap,et)),Y.isSkinnedMesh){Ee.setOptional(O,Y,"bindMatrix"),Ee.setOptional(O,Y,"bindMatrixInverse");let De=Y.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ee.setValue(O,"boneTexture",De.boneTexture,et))}Y.isBatchedMesh&&(Ee.setOptional(O,Y,"batchingTexture"),Ee.setValue(O,"batchingTexture",Y._matricesTexture,et),Ee.setOptional(O,Y,"batchingIdTexture"),Ee.setValue(O,"batchingIdTexture",Y._indirectTexture,et),Ee.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ee.setValue(O,"batchingColorTexture",Y._colorsTexture,et));let $s=J.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&k.update(Y,J,bi),(Ys||Tt.receiveShadow!==Y.receiveShadow)&&(Tt.receiveShadow=Y.receiveShadow,Ee.setValue(O,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=US()),Ys){if(Ee.setValue(O,"toneMappingExposure",I.toneMappingExposure),Tt.needsLights&&Nv(tn,qr),bt&&q.fog===!0&&Ot.refreshFogUniforms(tn,bt),Ot.refreshMaterialUniforms(tn,q,L,B,E.state.transmissionRenderTarget[b.id]),Tt.needsLights&&Tt.lightProbeGrid){let De=Tt.lightProbeGrid;tn.probesSH.value=De.texture,tn.probesMin.value.copy(De.boundingBox.min),tn.probesMax.value.copy(De.boundingBox.max),tn.probesResolution.value.copy(De.resolution)}Po.upload(O,$m(Tt),tn,et)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Po.upload(O,$m(Tt),tn,et),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ee.setValue(O,"center",Y.center),Ee.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Ee.setValue(O,"normalMatrix",Y.normalMatrix),Ee.setValue(O,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let De=q.uniformsGroups;for(let Zs=0,Yr=De.length;Zs<Yr;Zs++){let Km=De[Zs];ct.update(Km,bi),ct.bind(Km,bi)}}return bi}function Nv(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.sunLights.needsUpdate=z,b.sunLightShadows.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Uv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(b,z,J){let q=Z.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(b.texture).__webglTexture=z,Z.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){let J=Z.get(b);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,J=0){lt=b,tt=z,j=J;let q=null,Y=!1,bt=!1;if(b){let Mt=Z.get(b);if(Mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),C.copy(b.viewport),U.copy(b.scissor),X=b.scissorTest,x.viewport(C),x.scissor(U),x.setScissorTest(X),Q=-1;return}else if(Mt.__webglFramebuffer===void 0)et.setupRenderTarget(b);else if(Mt.__hasExternalTextures)et.rebindTextures(b,Z.get(b.texture).__webglTexture,Z.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ie=b.depthTexture;if(Mt.__boundDepthTexture!==ie){if(ie!==null&&Z.has(ie)&&(b.width!==ie.image.width||b.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(bt=!0);let Dt=Z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?q=Dt[z][J]:q=Dt[z],Y=!0):b.samples>0&&et.useMultisampledRTT(b)===!1?q=Z.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?q=Dt[J]:q=Dt,C.copy(b.viewport),U.copy(b.scissor),X=b.scissorTest}else C.copy(ut).multiplyScalar(L).floor(),U.copy(Wt).multiplyScalar(L).floor(),X=le;if(J!==0&&(q=W),x.bindFramebuffer(O.FRAMEBUFFER,q)&&x.drawBuffers(b,q),x.viewport(C),x.scissor(U),x.setScissorTest(X),Y){let Mt=Z.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,J)}else if(bt){let Mt=z;for(let Rt=0;Rt<b.textures.length;Rt++){let Dt=Z.get(b.textures[Rt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,J,Mt)}}else if(b!==null&&J!==0){let Mt=Z.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,J)}Q=-1};function Jm(b){let z=Z.get(b);return(z.__readFormat!==b.format||z.__readType!==b.type)&&(z.__readFormat=b.format,z.__readType=b.type,z.__formatReadable=A.textureFormatReadable(b.format),z.__typeReadable=A.textureTypeReadable(b.type)),z}this.readRenderTargetPixels=function(b,z,J,q,Y,bt,wt,Mt=0){if(!(b&&b.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){x.bindFramebuffer(O.FRAMEBUFFER,Rt);try{let Dt=b.textures[Mt],ie=Dt.format,ae=Dt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let It=Jm(Dt);if(It.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-q&&J>=0&&J<=b.height-Y&&O.readPixels(z,J,q,Y,gt.convert(ie),gt.convert(ae),bt)}finally{let Dt=lt!==null?Z.get(lt).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,z,J,q,Y,bt,wt,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt)if(z>=0&&z<=b.width-q&&J>=0&&J<=b.height-Y){x.bindFramebuffer(O.FRAMEBUFFER,Rt);let Dt=b.textures[Mt],ie=Dt.format,ae=Dt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let It=Jm(Dt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ye),O.bufferData(O.PIXEL_PACK_BUFFER,bt.byteLength,O.STREAM_READ),O.readPixels(z,J,q,Y,gt.convert(ie),gt.convert(ae),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let ln=lt!==null?Z.get(lt).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,ln);let Fe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cg(O,Fe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ye),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,bt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ye),O.deleteSync(Fe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(b.image.width*q),bt=Math.floor(b.image.height*q),wt=z!==null?z.x:0,Mt=z!==null?z.y:0;et.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,wt,Mt,Y,bt),x.unbindTexture()},this.copyTextureToTexture=function(b,z,J=null,q=null,Y=0,bt=0){let wt,Mt,Rt,Dt,ie,ae,It,ye,ln,Fe=b.isCompressedTexture?b.mipmaps[bt]:b.image;if(J!==null)wt=J.max.x-J.min.x,Mt=J.max.y-J.min.y,Rt=J.isBox3?J.max.z-J.min.z:1,Dt=J.min.x,ie=J.min.y,ae=J.isBox3?J.min.z:0;else{let tn=Math.pow(2,-Y);wt=Math.floor(Fe.width*tn),Mt=Math.floor(Fe.height*tn),b.isDataArrayTexture?Rt=Fe.depth:b.isData3DTexture?Rt=Math.floor(Fe.depth*tn):Rt=1,Dt=0,ie=0,ae=0}q!==null?(It=q.x,ye=q.y,ln=q.z):(It=0,ye=0,ln=0);let Ie=gt.convert(z.format),Nn=gt.convert(z.type),Tt;z.isData3DTexture?(et.setTexture3D(z,0),Tt=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(et.setTexture2DArray(z,0),Tt=O.TEXTURE_2D_ARRAY):(et.setTexture2D(z,0),Tt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Wn=x.getParameter(O.UNPACK_ROW_LENGTH),me=x.getParameter(O.UNPACK_IMAGE_HEIGHT),bi=x.getParameter(O.UNPACK_SKIP_PIXELS),os=x.getParameter(O.UNPACK_SKIP_ROWS),Ys=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,Fe.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Fe.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(O.UNPACK_SKIP_ROWS,ie),x.pixelStorei(O.UNPACK_SKIP_IMAGES,ae);let qr=b.isDataArrayTexture||b.isData3DTexture,Ee=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){let tn=Z.get(b),$s=Z.get(z),De=Z.get(tn.__renderTarget),Zs=Z.get($s.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,De.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let Yr=0;Yr<Rt;Yr++)qr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(b).__webglTexture,Y,ae+Yr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(z).__webglTexture,bt,ln+Yr)),O.blitFramebuffer(Dt,ie,wt,Mt,It,ye,wt,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Z.has(b)){let tn=Z.get(b),$s=Z.get(z);x.bindFramebuffer(O.READ_FRAMEBUFFER,F),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,$);for(let De=0;De<Rt;De++)qr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,Y,ae+De):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,Y),Ee?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$s.__webglTexture,bt,ln+De):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$s.__webglTexture,bt),Y!==0?O.blitFramebuffer(Dt,ie,wt,Mt,It,ye,wt,Mt,O.COLOR_BUFFER_BIT,O.NEAREST):Ee?O.copyTexSubImage3D(Tt,bt,It,ye,ln+De,Dt,ie,wt,Mt):O.copyTexSubImage2D(Tt,bt,It,ye,Dt,ie,wt,Mt);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ee?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Tt,bt,It,ye,ln,wt,Mt,Rt,Ie,Nn,Fe.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Tt,bt,It,ye,ln,wt,Mt,Rt,Ie,Fe.data):O.texSubImage3D(Tt,bt,It,ye,ln,wt,Mt,Rt,Ie,Nn,Fe):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,bt,It,ye,wt,Mt,Ie,Nn,Fe.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,bt,It,ye,Fe.width,Fe.height,Ie,Fe.data):O.texSubImage2D(O.TEXTURE_2D,bt,It,ye,wt,Mt,Ie,Nn,Fe);x.pixelStorei(O.UNPACK_ROW_LENGTH,Wn),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),x.pixelStorei(O.UNPACK_SKIP_PIXELS,bi),x.pixelStorei(O.UNPACK_SKIP_ROWS,os),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Ys),bt===0&&z.generateMipmaps&&O.generateMipmap(Tt),x.unbindTexture()},this.initRenderTarget=function(b){Z.get(b).__webglFramebuffer===void 0&&et.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?et.setTextureCube(b,0):b.isData3DTexture?et.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?et.setTexture2DArray(b,0):et.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){tt=0,j=0,lt=null,x.reset(),St.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=ue._getUnpackColorSpace()}};function Hg(e,t=!1){let n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),r={},o={},a=e[0].morphTargetsRelative,c=new qe,l=0;for(let h=0;h<e.length;++h){let d=e[h],u=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(n)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(n){let h=0,d=[];for(let u=0;u<e.length;++u){let f=e[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=e[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Gg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let g=Gg(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Gg(e){let t,n,i,s=-1,r=0;for(let l=0;l<e.length;++l){let h=e[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new t(r),a=new ke(o,n,i),c=0;for(let l=0;l<e.length;++l){let h=e[l];if(h.isInterleavedBufferAttribute){let d=c/n;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<n;g++){let y=h.getComponent(u,g);a.setComponent(u+d,g,y)}}else o.set(h.array,c);c+=h.count*n}return s!==void 0&&(a.gpuType=s),a}var qf='"Trebuchet MS","Segoe UI",Verdana,Tahoma,Arial,sans-serif';function Ur(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Wg=new Map;function En(e,t={}){let n=e+JSON.stringify(t),i=Wg.get(n);return i||(i=new un({color:e,flatShading:!0,...t}),Wg.set(n,i)),i}var $f=new un({color:16777215,vertexColors:!0,flatShading:!0}),Xg=new de,qg=new gn,Yg=new Yn,$g=new P,Yf=new P(1,1,1),nu=new Gt,dn=class{constructor(t=0,n=0,i=0){this.o=new P(t,n,i),this.lista=[]}_add(t,n,i,s,r,o,a){Yg.set((o==null?void 0:o[0])||0,(o==null?void 0:o[1])||0,(o==null?void 0:o[2])||0),qg.setFromEuler(Yg),$g.set(i+this.o.x,s+this.o.y,r+this.o.z),a?Yf.set(a[0],a[1],a[2]):Yf.set(1,1,1),Xg.compose($g,qg,Yf),t.applyMatrix4(Xg);let c=t.index?t.toNonIndexed():t;c!==t&&t.dispose();for(let d of Object.keys(c.attributes))d!=="position"&&d!=="normal"&&d!=="uv"&&c.deleteAttribute(d);c.attributes.uv||c.setAttribute("uv",new ke(new Float32Array(c.attributes.position.count*2),2)),nu.set(n);let l=c.attributes.position.count,h=new Float32Array(l*3);for(let d=0;d<l;d++)h[d*3]=nu.r,h[d*3+1]=nu.g,h[d*3+2]=nu.b;c.setAttribute("color",new ke(h,3)),this.lista.push(c)}box(t,n,i,s,r=0,o=0,a=0,c,l){this._add(new Te(t,n,i).translate(0,n/2,0),s,r,o,a,c,l)}cyl(t,n,i,s,r=0,o=0,a=0,c=12,l,h){this._add(new Pn(t,n,i,c).translate(0,i/2,0),s,r,o,a,l,h)}cone(t,n,i,s=0,r=0,o=0,a=8,c,l){this._add(new yo(t,n,a).translate(0,n/2,0),i,s,r,o,c,l)}sphere(t,n,i=0,s=0,r=0,o,a=8){this._add(new hi(t,a,Math.max(4,a-3)).translate(0,t,0),n,i,s,r,null,o)}domo(t,n,i=0,s=0,r=0,o=14){this._add(new hi(t,o,7,0,Math.PI*2,0,Math.PI/2),n,i,s,r)}gable(t,n,i,s,r=0,o=0,a=0){let c=new Pn(1,1,1,3);c.rotateX(-Math.PI/2),c.scale(t/1.732,n/1.5,i),c.translate(0,n/3,0),this._add(c,s,r,o,a)}piramide(t,n,i,s,r=0,o=0,a=0){let c=new yo(1,1,4);c.rotateY(Math.PI/4),c.scale(t/1.4142,n,i/1.4142),c.translate(0,n/2,0),this._add(c,s,r,o,a)}geo(t,n,i=0,s=0,r=0,o,a){this._add(t,n,i,s,r,o,a)}build({cast:t=!0,receive:n=!0,material:i=$f}={}){let s=Hg(this.lista,!1);this.lista.forEach(o=>o.dispose()),this.lista=[];let r=new Ft(s,i);return r.castShadow=t,r.receiveShadow=n,r}};function Tn(e,{ancho:t=1024,alto:n=256,fondo:i=["#1b2a4a","#2c4a8a"],borde:s="#ffc83d",insignia:r=null}={}){let o=document.createElement("canvas");o.width=t,o.height=n;let a=o.getContext("2d"),c=a.createLinearGradient(0,0,t,n);c.addColorStop(0,i[0]),c.addColorStop(1,i[1]),a.fillStyle=c,a.fillRect(0,0,t,n),a.lineWidth=Math.round(n*.045),a.strokeStyle=s,a.strokeRect(a.lineWidth/2,a.lineWidth/2,t-a.lineWidth,n-a.lineWidth);let l=n*.12;if(r){let g=n*.32;a.fillStyle=s,a.beginPath(),a.arc(n*.52,n/2,g,0,Math.PI*2),a.fill(),a.fillStyle="#1b2a4a",a.font=`900 ${Math.round(g*1.3)}px ${qf}`,a.textAlign="center",a.textBaseline="middle",a.fillText(String(r),n*.52,n/2+g*.06),l=n*1}a.textAlign=r?"left":"center",a.textBaseline="middle";let h=r?l:t/2,d=t-l-n*.12,u=e.length;e.forEach((g,y)=>{let m=g.tam||(y===0?.3:.2),p=Math.round(n*m),M=g.peso||(y===0?900:700);for(a.font=`${M} ${p}px ${qf}`;a.measureText(g.texto).width>d&&p>12;)p-=2,a.font=`${M} ${p}px ${qf}`;a.fillStyle=g.color||(y===0?"#ffffff":"#ffd96b");let w=n*((y+1)/(u+1));a.fillText(g.texto,h,w)});let f=new qi(o);return f.colorSpace=en,f.anisotropy=4,f}function wn(e,t,n){return new Ft(new Bn(t,n),new nn({map:e,toneMapped:!1}))}function FS(e,t,n){return e+(t-e)*n}function pc(e,t,n){return Math.max(t,Math.min(n,e))}function ur(e,t,n,i){return FS(e,t,1-Math.exp(-n*i))}var dr=[-2.6,0,2.6],Zg=90,OS=-75,we=8,Ye=e=>OS-e*Zg,No=e=>Ye(e)+12,Ai=Ye(we-1)-95,gc=Ai+12,Ns=Ye(6),_c=new P(.4,.72,.56).normalize();function mc(e){let t=e-Ns,n=.95;return t>-6?0:t>-14?n*((-6-t)/8):t>-34?n:t>-42?n*((t+42)/8):0}var Ct={tierra:"#b9674a",cordon:"#e3cfa8",pasto:"#7cc05c",madera:"#8b5a2b",maderaOsc:"#5e3a1d",barro:"#c4906a",paja:"#d9b765",ladrillo:"#c0563a",blanco:"#f6f1e6",rojo:"#d8452f",azul:"#2f8fd0",verde:"#4f9d3f",verdeOsc:"#3a7d34",amarillo:"#ffc83d",gris:"#9aa5b1",chapa:"#c9d3da",negro:"#2b2b33"};function Zf(e,t,n,i=1,s="#4f9d3f"){e.cyl(.22*i,.34*i,2.4*i,"#7a4e2b",t,0,n,6),e.sphere(1.9*i,s,t,1.6*i,n,[1.15,.85,1.15],7),e.sphere(1.3*i,"#5eb04a",t+.5*i,2.7*i,n-.3*i,[1,.8,1],7)}function BS(e,t,n,i=1.4,s=Ct.madera){e.box(.16,i,.16,s,t,0,n)}function gs(e,t,n,i,s,r=[.6,1.1],o=2.4,a=Ct.madera){let c=i-t,l=s-n,h=Math.hypot(c,l),d=Math.max(1,Math.round(h/o)),u=Math.max(...r)+.25;for(let g=0;g<=d;g++)BS(e,t+c*g/d,n+l*g/d,u,a);let f=Math.atan2(-l,c);for(let g of r)e.box(h,.07,.07,a,(t+i)/2,g,(n+s)/2,[0,f,0])}function iu(e,t,n,i=0,s=!0){let r=(m,p)=>i===0?[m,p]:[p,m],[o,a]=r(1.9,.9);if(e.box(o,1,a,"#f4f1ea",t,.7,n),s){let[m,p]=r(.7,.95);e.box(m,.5,p,"#2b2b33",t+(i===0?.3:0),1.05,n+(i===0?0:.3))}let[c,l]=i===0?[.6,.3]:[.3,.6];for(let m of[-1,1])for(let p of[-1,1])e.box(.22,.72,.22,"#3b3b44",t+m*c,0,n+p*l);let h=i===0?1.15:0,d=i===0?0:1.15,[u,f]=r(.7,.55);e.box(u,.55,f,"#f4f1ea",t+h,1.05,n+d);let[g,y]=r(.2,.3);e.box(g,.25,y,"#e8a0a0",t+h*1.28,1,n+d*1.28)}function zS(){let e=document.createElement("canvas");e.width=192,e.height=128;let t=e.getContext("2d");t.fillStyle="#75aadb",t.fillRect(0,0,192,128),t.fillStyle="#ffffff",t.fillRect(0,43,192,42),t.fillStyle="#f6b40e",t.beginPath(),t.arc(96,64,13,0,Math.PI*2),t.fill();let n=new qi(e);return n.colorSpace=en,n}function kS(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle="#d7b07a",t.fillRect(0,0,256,256);let n=Ur(31);for(let s=0;s<900;s++)t.fillStyle=n()>.5?"rgba(160,110,60,0.18)":"rgba(255,240,200,0.14)",t.beginPath(),t.arc(n()*256,n()*256,1+n()*4,0,Math.PI*2),t.fill();t.fillStyle="rgba(120,80,40,0.32)",t.fillRect(60,0,10,256),t.fillRect(186,0,10,256);let i=new qi(e);return i.wrapS=i.wrapT=Is,i.colorSpace=en,i}function VS(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256);let n=Ur(77);for(let s=0;s<90;s++){let r=n()*256,o=n()*256,a=20+n()*70;t.fillStyle=n()>.5?"rgba(210,175,160,0.55)":"rgba(255,240,225,0.7)",t.fillRect(o,r,a,2+n()*3),t.fillRect(o-256,r,a,2+n()*3)}let i=new qi(e);return i.wrapS=i.wrapT=Is,i.colorSpace=en,i}var GS={puerto(e,t){e.box(5,.25,120,"#dcc08a",12.5,0,0),e.box(20,.3,4.6,Ct.madera,21,.5,-4);for(let h=0;h<18;h++)e.box(.08,.02,4.6,Ct.maderaOsc,12.5+h*1.1,.8,-4);for(let h=0;h<6;h++)for(let d of[-6.1,-1.9])e.cyl(.22,.22,1.9,Ct.maderaOsc,14+h*3.6,0,d,7);e.box(1.3,1.3,1.3,"#c98a4b",18,.8,-3.2),e.box(1.3,1.3,1.3,"#b97a3d",19.5,.8,-3.8),e.box(1.2,1.2,1.2,"#c98a4b",18.7,2.1,-3.5),e.cyl(.55,.55,1.2,Ct.rojo,25,.8,-4.5,10),e.cyl(.57,.57,.12,Ct.negro,25,1.35,-4.5,10);let n=44,i=-13;e.box(16,1.3,5,"#7c2a22",n,.05,i),e.box(12.5,1.3,4.5,Ct.blanco,n+.8,1.35,i),e.box(6.5,1.7,3.8,Ct.blanco,n+1,2.65,i),e.box(7.2,.22,4.2,Ct.rojo,n+1,4.35,i);for(let h=0;h<4;h++)e.box(.15,.8,.9,"#5aa9e6",n-1.5+h*1.6,3,i+1.93);for(let h=0;h<4;h++)e.box(.15,.8,.9,"#5aa9e6",n-1.5+h*1.6,3,i-1.93);e.cyl(.5,.6,3.2,Ct.negro,n+2.8,4.5,i,10),e.cyl(.62,.62,.5,Ct.rojo,n+2.8,7.3,i,10),e.cone(2.45,3.2,"#7c2a22",n-8,.7,i,4,[0,0,Math.PI/2],[.5,1,1]),e.sphere(1,Ct.maderaOsc,24,.12,5,[2.3,.4,.62]),e.box(.1,.5,.9,Ct.madera,24,.4,5),e.box(.2,2.6,.2,Ct.madera,-8,0,5);let s=t.agua(190,130,15,-2);s.position.set(110,.06,0),t.g.add(s);let r=new Be;r.position.set(n+8.4,1.9,i);let o=En(Ct.rojo);for(let h=0;h<8;h++){let d=new Ft(new Te(.25,1.9,3.6),o);d.rotation.z=h/8*Math.PI*2,d.position.set(Math.sin(d.rotation.z)*-.9*0,0,0),r.add(d)}t.g.add(r),t.anim.push((h,d)=>{r.rotation.z-=d*1.4});let a=[];for(let h=0;h<5;h++){let d=new Ft(new ds(.7,0),new un({color:"#eceff3",transparent:!0,opacity:.8}));d.userData.f=h/5,t.g.add(d),a.push(d)}t.anim.push((h,d)=>{for(let u of a){u.userData.f=(u.userData.f+d*.15)%1;let f=u.userData.f;u.position.set(n+2.8-f*3,7.9+f*6,i),u.scale.setScalar(.6+f*1.8),u.material.opacity=.8*(1-f)}});let c=Tn([{texto:"KM 192",tam:.38},{texto:"N.R.B.",tam:.3,color:"#ffd96b"}],{ancho:512,alto:256,fondo:["#7c2a22","#b8573a"]}),l=wn(c,2.6,1.3);l.position.set(-8,2.9,5.15),t.g.add(l)},subcomisaria(e,t){e.box(9,3.2,6.5,Ct.barro,-15,0,-3),e.box(9.2,.5,6.7,"#a8764f",-15,0,-3);for(let o=0;o<9;o++)e.box(.18,3.2,.18,"#7a5236",-15+4.55,0,-3-3.1+o*.8);e.piramide(11.8,3.4,9,Ct.paja,-15,3.2,-3),e.piramide(12.2,.5,9.4,"#b78f45",-15,3.1,-3),e.box(.2,2.3,1.6,"#4a2f1c",-15+4.5,0,-3),e.box(.2,1,1.2,"#3a2a20",-15+4.5,1.2,-3+2.2),e.box(.2,1,1.2,"#3a2a20",-15+4.5,1.2,-3-2.2);for(let o of[-3.3,3.3])e.box(.26,2.7,.26,Ct.maderaOsc,-15+6.3,0,-3+o);e.box(2.4,.2,7.2,Ct.madera,-15+5.4,2.7,-3);for(let o of[5,9])e.box(.22,1.5,.22,Ct.maderaOsc,-8.2,0,o);e.box(.2,.2,4.4,Ct.madera,-8.2,1.2,7),e.cyl(.6,.6,1.4,"#5b7a8a",-15+2.5,0,-3+6.5,10);for(let o=0;o<4;o++)e.cyl(.18,.18,1.6,"#6a4a2a",-18+o*.4,0,3,6,[0,0,Math.PI/2]);gs(e,9,-12,9,6,[.5,1,1.5],2.4),gs(e,9,6,24,6,[.5,1,1.5],2.4),gs(e,9,-12,24,-12,[.5,1,1.5],2.4),e.box(1.6,.9,1.6,"#e0c55a",18,0,-6),e.box(1.6,.9,1.6,"#e0c55a",19.8,0,-5.5);let s=Tn([{texto:"SUBCOMISAR\xCDA"},{texto:"\xABBERMEJO\xBB \xB7 1936",tam:.22}],{ancho:768,alto:256,fondo:["#1f3a6e","#2f5aa8"]}),r=wn(s,4,1.34);r.position.set(-15+4.65,2.75,-3),r.rotation.y=Math.PI/2,t.g.add(r)},registro(e,t){e.box(10,3.4,7.5,"#f3e7cf",14.5,0,-3),e.box(10.2,.5,7.7,"#cdb88f",14.5,0,-3),e.gable(11.8,2.6,8.6,"#b5472f",14.5,3.4,-3),e.box(.2,2.3,1.5,"#4a2f1c",14.5-5.05,0,-3),e.box(.12,.5,7.2,"#2f6fa8",14.5-5.06,2.9,-3),e.box(3,7,3,"#4a5868",14.5+3.6,0,-4);for(let u=0;u<8;u++){let f=u/8*Math.PI*2;e.sphere(.13,"#ffd23f",14.5+5.2,5.2+Math.sin(f)*1.1,-4+Math.cos(f)*1.1,null,5)}for(let u of[2.6,-2.6])e.box(.2,1.3,1.2,"#8ec5e8",14.5-5.05,1.1,-3+u);for(let u=0;u<6;u++)e.box(2.1,.14,1,u%2?Ct.blanco:Ct.rojo,14.5-6.1,2.75-0,-6+u*1-0+0,[0,0,-.18]);for(let u of[-3.1,3.1])e.box(.2,2.7,.2,Ct.maderaOsc,14.5-7.1,0,-3+u);e.box(4.5,2.8,5.5,"#f0d9b5",14.5-.5,0,4),e.gable(5.4,1.6,6.2,"#b5472f",14.5-.5,2.8,4);for(let u=0;u<5;u++)e.box(1.6,.14,.9,u%2?Ct.blanco:Ct.azul,14.5-3.4,2.4,2+u*.9,[0,0,-.2]);e.box(.2,1.8,1.8,"#4a2f1c",14.5-2.8,0,4),e.cyl(.22,.3,1.2,Ct.maderaOsc,8,0,3.5,8),e.box(1.4,.09,1,"#7b2a1d",8,1.2,3.5,[0,0,0]),e.box(.62,.07,.86,"#ffffff",7.67,1.29,3.5,[0,0,.12]),e.box(.62,.07,.86,"#fffaf0",8.33,1.29,3.5,[0,0,-.12]);let s=-13,r=4;e.box(3.4,.2,1.8,Ct.madera,s,.8,r);for(let u of[-1,1])e.cyl(.8,.8,.14,Ct.maderaOsc,s-.6,.8,r+u*1.05,14,[Math.PI/2,0,0]);for(let u of[-1,1])e.cyl(.8,.8,.14,Ct.maderaOsc,s+.6,.8,r+u*1.05,14,[Math.PI/2,0,0]);e.box(3.4,.14,.14,Ct.maderaOsc,s-3.3,.9,r-.6),e.box(3.4,.14,.14,Ct.maderaOsc,s-3.3,.9,r+.6);for(let u=0;u<3;u++)e.sphere(.55,"#e9dfc8",s-.8+u*.8,1,r,[1,1.1,.9]);let o=Tn([{texto:"REGISTRO CIVIL"},{texto:"desde agosto de 1938",tam:.2}],{ancho:768,alto:256,fondo:["#6e2a1e","#a8442f"]}),a=wn(o,4,1.34);a.position.set(14.5-5.18,3,-3),a.rotation.y=-Math.PI/2,t.g.add(a);let c=Tn([{texto:"CARNICER\xCDA"}],{ancho:512,alto:160,fondo:["#1f5a3a","#2f8a5a"]}),l=wn(c,2.6,.8);l.position.set(14.5-2.92,2.6,4-1.7),l.rotation.y=-Math.PI/2,t.g.add(l);let h=Tn([{texto:"ACTA N.\xBA 1",tam:.3},{texto:"27 de agosto de 1938",tam:.2}],{ancho:512,alto:200,fondo:["#5a3a1a","#8a5a2b"]}),d=wn(h,2.4,.94);d.position.set(7.9,2.1,3.5),d.rotation.y=-Math.PI/2,d.position.x=8.9,t.g.add(d),e.box(.12,2,.12,Ct.maderaOsc,8.95,0,4.7),e.box(.12,2,.12,Ct.maderaOsc,8.95,0,2.3)},desmotadora(e,t){e.box(16,6,12,"#9fb2bf",-17.5,0,-3),e.box(16.2,.7,12.2,"#7d8f9c",-17.5,0,-3),e.gable(17.6,3.2,13,Ct.chapa,-17.5,6,-3),e.cyl(.95,1.2,15,"#b5523a",-17.5-5.5,0,-3-7.5,10),e.cyl(1.2,1.2,.7,Ct.negro,-17.5-5.5,14.4,-3-7.5,10),e.box(.2,4.2,5.4,"#3a4350",-17.5+8.05,0,-3);for(let d=0;d<5;d++)e.box(.22,.12,5.5,"#566271",-17.5+8.06,.7+d*.8,-3);e.box(2.2,.9,11,"#8b6a47",-8.6,0,-3);let s=(d,u,f)=>{e.box(1.8,1.2,1.2,"#f6f4ee",d,u,f),e.box(1.86,.1,1.26,"#555b66",d,u+.3,f),e.box(1.86,.1,1.26,"#555b66",d,u+.8,f)};s(-8.6,.9,.5),s(-8.6,.9,-1.5),s(-8.6,.9,-3.5),s(-8.6,2.1,-.5),s(-8.6,2.1,-2.5),s(-7.4,0,7),s(-7.4,1.2,7),s(-7.4,0,8.4);let r=-11.5,o=10;e.box(2.5,.5,6.6,"#7a2e22",r,.65,o),e.box(2.4,1.9,2.2,Ct.rojo,r,.65,o+2.2),e.box(2.2,.7,.1,"#bfe3f5",r,1.9,o+3.35);for(let d of[-2,2.4])for(let u of[-1.25,1.25])e.cyl(.55,.55,.4,Ct.negro,r+u,.55,o+d,12,[0,0,Math.PI/2]);e.sphere(1.1,"#fbfaf5",r,1,o-1.2,[1.1,1,1.1]),e.sphere(1,"#fbfaf5",r,1,o+.2,[1.1,1,1.1]),e.sphere(.9,"#f4f1ea",r,1.9,o-.5),gs(e,9,-13,9,12,[.55,1],2.4),gs(e,9,12,32,12,[.55,1],2.4),gs(e,9,-13,32,-13,[.55,1],2.4);for(let d=0;d<4;d++){e.box(20,.35,1.1,"#6b4a35",20,0,-9+d*4.5);for(let u=0;u<14;u++)e.sphere(.5,Ct.verdeOsc,11.5+u*1.4,.3,-9+d*4.5,[1,.9,1],6),e.sphere(.2,"#ffffff",11.5+u*1.4+.2,.9,-9+d*4.5+.2,null,5)}e.box(5,2.6,3.4,"#cfeadf",29,0,5),e.gable(5.4,1.4,3.8,"#e8f5ef",29,2.6,5);for(let d=0;d<3;d++)e.box(.12,2.6,3.5,"#ffffff",26.7+d*2.3,0,5);let a=Tn([{texto:"CHACRA EXPERIMENTAL",tam:.24},{texto:"(actual INTA)",tam:.2}],{ancho:640,alto:220,fondo:["#2d5a2a","#4f9d3f"]}),c=wn(a,3.6,1.24);c.position.set(8.2,2,5),c.rotation.y=-Math.PI/2,t.g.add(c),e.box(.14,2,.14,Ct.maderaOsc,8.15,0,6.8),e.box(.14,2,.14,Ct.maderaOsc,8.15,0,3.2);let l=Tn([{texto:"DESMOTADORA OFICIAL",tam:.22},{texto:"Junta Nacional del Algod\xF3n",tam:.17}],{ancho:768,alto:220,fondo:["#33414f","#566a7c"]}),h=wn(l,4.6,1.32);h.position.set(-17.5+8.2,4.9,-3),h.rotation.y=Math.PI/2,t.g.add(h)},escuela(e,t){e.box(8,2.8,5.5,"#b98253",-14,0,3);for(let d=0;d<9;d++)e.box(.2,2.8,.2,"#6e4528",-14+4.05,0,3-2.6+d*.65);e.piramide(10,3,7.5,Ct.paja,-14,2.8,3),e.box(.2,2.1,1.3,"#4a2f1c",-10,0,3),e.box(.2,.9,1,"#3a2a20",-10,1.2,3+1.9),e.box(2.4,.6,1.3,Ct.ladrillo,-8.5,0,-4),e.box(2.2,.6,1.2,"#cf6444",-8.5,.6,-4),e.box(2,.6,1.1,Ct.ladrillo,-8.5,1.2,-4),e.box(2.4,.6,1.3,"#cf6444",-8.5,0,-6),e.box(2.2,.6,1.2,Ct.ladrillo,-8.5,.6,-6);let s=-29,r=-9;e.box(20,4.6,9,"#c0563a",s,0,r),e.box(20.3,.7,9.3,"#f0e8d8",s,0,r);for(let d=0;d<7;d++)e.box(.18,1.6,1.4,"#9fd6f2",s+10,1.5,r-7.5+d*2.5);e.box(.22,2.5,2.2,"#f3e9d2",s+10,0,r),e.gable(21.6,2.8,9.8,"#6e4a38",s,4.6,r),e.cyl(.07,.1,8.5,"#c8ced6",-12,0,-6,6),e.sphere(.2,"#ffc83d",-12,8.4,-6),e.box(26,.04,28,"#8fd06a",24,0,-1);for(let d of[-12,10])e.box(.14,2.2,.14,"#ffffff",21,0,d-1.7),e.box(.14,2.2,.14,"#ffffff",21,0,d+1.7),e.box(.14,.14,3.6,"#ffffff",21,2.2,d);e.sphere(.35,"#ffffff",22,0,-1.5);for(let d of[-14,12])e.cyl(.08,.08,4.4,Ct.maderaOsc,8.6,0,d,6);let o=["#d8452f","#ffd23f","#2f8fd0","#4f9d3f"];for(let d=0;d<14;d++){let u=(d+.5)/14;e.box(.55,.55,.05,o[d%4],8.6,4-Math.sin(u*Math.PI)*.7-.3,-14+u*26,[0,Math.PI/2,Math.PI/4])}e.box(2.6,.7,.9,"#33343a",12,.4,5),e.box(2.4,.08,.7,"#ff7a2f",12,1.1,5);for(let d of[-.3,.3])for(let u of[-1.1,1.1])e.box(.1,.5,.1,"#33343a",12+u,0,5+d);let a=Tn([{texto:"ESCUELA N.\xBA 116",tam:.27},{texto:"rancho de estaqueo \xB7 1942",tam:.18}],{ancho:640,alto:220,fondo:["#6e4528","#a9744c"]}),c=wn(a,3.8,1.3);c.position.set(-14+4.2,3.6,3),c.rotation.y=Math.PI/2,t.g.add(c);let l=Tn([{texto:"EPEP N.\xBA 166",tam:.27},{texto:"edificio de material \xB7 1947",tam:.17}],{ancho:720,alto:220,fondo:["#7a2e22","#c0563a"]}),h=wn(l,4.2,1.28);h.position.set(s+10.2,3.1,r+5.5),h.rotation.y=Math.PI/2,h.visible=!0,t.g.add(h),t.bandera(-12,7.2,-6)},plaza(e,t){e.box(33,.05,36,"#93d474",-26+.5,0,-2),e.box(26,.07,2.4,"#e6d2a8",-19.5,0,-2),e.box(2.4,.07,34,"#e6d2a8",-26,0,-2),e.cyl(5,5,.08,"#e6d2a8",-26,0,-2,24),e.cyl(3.4,3.4,.14,"#2f8fd0",-26,0,-2,32);let s=[.35,.6,.85,1.1,1.35];gs(e,-9,-20,-9,-3.4,s,3.1,"#6e4a2a"),gs(e,-9,-.6,-9,16,s,3.1,"#6e4a2a"),gs(e,-9,16,-43,16,s,3.1,"#6e4a2a"),gs(e,-9,-20,-43,-20,s,3.1,"#6e4a2a"),e.cyl(2.3,2.5,.5,"#bdb7a6",-26,0,-2,16),e.box(1.9,2.4,1.9,"#d3cdbb",-26,.5,-2),e.box(2.3,.3,2.3,"#bdb7a6",-26,2.9,-2),e.box(1.2,.6,.8,"#a9a391",-26,3.2,-2),e.sphere(.55,"#a9a391",-26,3.7,-2);for(let l=0;l<12;l++){let h=l/12*Math.PI*2;e.sphere(.32,["#ff6fa3","#ffd23f","#ffffff","#ff7a2f"][l%4],-26+Math.cos(h)*3.7,0,-2+Math.sin(h)*3.7,null,5)}for(let[l,h,d]of[[-19.5,1.6,0],[-19.5,-5.6,0],[-26+2.4,8,1],[-26-2.4,8,1]])e.box(2,.12,.6,"#8b5a2b",l,.5,h),e.box(2,.5,.1,"#8b5a2b",l,.6,h-.3),e.box(.1,.5,.5,"#33343a",l-.8,0,h),e.box(.1,.5,.5,"#33343a",l+.8,0,h);for(let[l,h]of[[-14,-2],[-14,8],[-14,-12],[-32,-8]])e.cyl(.08,.1,3.4,"#33343a",l,0,h,6),e.sphere(.3,"#fff2b0",l,3.3,h);for(let[l,h,d]of[[-14,-15,1.3],[-14,11,1.3],[-36,-14,1.5],[-37,10,1.4],[-32,-4,1.2],[-20,12,1.2],[-20,-16,1.2]])Zf(e,l,h,d,"#3f9a3c");for(let l of[-23,-27,-31])Zf(e,l,-5.6,1.1,"#3f9a3c"),Zf(e,l,1.6,1.1,"#3f9a3c");iu(e,11,-4,0),iu(e,16,5,1),iu(e,13,-10,0,!1),iu(e,-17,20,0),e.cyl(.07,.1,8.5,"#c8ced6",-13,0,-8.5,6),e.sphere(.2,"#ffc83d",-13,8.4,-8.5),t.bandera(-13,7.2,-8.5);let r=Tn([{texto:"BUSTO A SAN MART\xCDN",tam:.22},{texto:"17 de agosto de 1950",tam:.2}],{ancho:640,alto:200,fondo:["#4a4a52","#6b6b78"]}),o=wn(r,1.7,.53);o.position.set(-26+.97,1.6,-2),o.rotation.y=Math.PI/2,t.g.add(o);let a=Tn([{texto:"PLAZA GENERAL SAN MART\xCDN",tam:.2},{texto:"alambrado de cinco hilos",tam:.17}],{ancho:720,alto:200,fondo:["#1f5a3a","#2f8a5a"]}),c=wn(a,3.8,1.05);c.position.set(-9.4,2.2,-2),c.rotation.y=Math.PI/2,t.g.add(c),e.box(.14,2.2,.14,Ct.maderaOsc,-9.3,0,-.1),e.box(.14,2.2,.14,Ct.maderaOsc,-9.3,0,-3.9)},puente(e,t){let i="#c5ccd4",s=Math.atan2(.95,8);e.geo(new Te(11.6,.45,8.06),"#8f949c",0,.95/2-.225,-10,[s,0,0]),e.box(11.6,.45,20,"#8f949c",0,.95-.45,-24),e.geo(new Te(11.6,.45,8.06),"#8f949c",0,.95/2-.225,-38,[-s,0,0]),e.box(10.8,.04,20,"#5f636b",0,.95-.01,-24);for(let h=0;h<7;h++)e.box(.16,.02,1.8,"#ffffff",0,.95+.03,-15.5-h*3);for(let h of[-17,-24,-31])for(let d of[-4,4])e.cyl(.7,.9,3.6,"#a8a49a",d,-2.75,h,8);for(let h of[-5.6,5.6]){e.box(.14,.14,20,Ct.rojo,h,.95+1.45,-24),e.box(.1,.1,20,"#e9e4d8",h,.95+.9,-24);for(let d=0;d<=10;d++)e.box(.14,1.2,.14,"#e9e4d8",h,.95,-14-d*2)}for(let h of[-17,-24,-31])e.geo(new Ya(5.7,.25,6,14,Math.PI),i,0,.95+.05,h);for(let h of[-5.7,5.7])e.box(.3,.3,14,i,h,.95+5.7,-24);e.box(7,.4,4.5,Ct.madera,-22,.06,-22);for(let h=0;h<6;h++)e.box(.1,.03,4.5,Ct.maderaOsc,-25+h*1.2,.46,-22);e.cyl(.5,.5,1.1,Ct.rojo,-20.5,.46,-21,10),e.cyl(.5,.5,1.1,"#2f8fd0",-22.5,.46,-23,10),e.box(.2,1.8,.2,Ct.maderaOsc,-24.5,.46,-20.2),e.sphere(1,Ct.maderaOsc,20,.1,-30,[2.4,.4,.62]);let r=t.agua(700,34,14,2);r.position.set(0,.07,-24.5),t.g.add(r);let o=Tn([{texto:"PUENTE LIBERTAD",tam:.28},{texto:"inaugurado el 8 de febrero de 1958",tam:.17}],{ancho:900,alto:220,fondo:["#1f3a6e","#2f5aa8"]}),a=wn(o,5.6,1.37);a.position.set(-8.6,2.6,-6.5),a.rotation.y=Math.PI/2*0,t.g.add(a),e.box(.14,2.2,.14,Ct.maderaOsc,-8.6,0,-6.4);let c=Tn([{texto:"Antes: canoas y balsas",tam:.24}],{ancho:640,alto:160,fondo:["#7a4e2a","#a9744c"]}),l=wn(c,3.6,.9);l.position.set(-22,2.6,-22),t.g.add(l),e.box(.12,2,.12,Ct.maderaOsc,-22,0,-22.1)},casas(e,t){let n=(m,p,M,w=3.4,v="#c25a35")=>{e.cyl(M,M,w,v,m,0,p,22),e.cyl(M+.1,M+.1,.4,"#e0b48a",m,w-.4,p,22);for(let T=0;T<16;T++){let E=T/16*Math.PI*2;e.box(.06,w-.9,.06,"#d89066",m+Math.cos(E)*(M+.02),.2,p+Math.sin(E)*(M+.02))}e.domo(M,"#d9784a",m,w,p,18),e.sphere(.35,"#e0b48a",m,w+M-.2,p),e.box(.3,2.2,1.3,"#3a2a20",m-M+.02,0,p),e.box(.3,.9,.9,"#3a2a20",m-M*.7,1.4,p+M*.7)};n(14,-4,3.7),n(23,6,3.2,3.2,"#b84f2e"),n(25,-15,3.4,3.4),e.cyl(7.4,7.4,.04,"#d9a672",14,0,-4,36),e.cyl(4.6,4.6,.05,"#7cc05c",14,0,-4,36);let i=(m,p,M,w)=>{e.cyl(M,M,w,"#c7633c",m,0,p,20),e.domo(M,"#d9784a",m,w,p,18);let v=[],T=4.5;for(let E=0;E<=120;E++){let R=E/120,_=R*T*Math.PI*2;v.push(new P(Math.cos(_)*(M+.06),.5+R*(w-1),Math.sin(_)*(M+.06)))}e.geo(new $a(new Mo(v),180,.17,5),"#f1d3a7",m,0,p)};i(9,13,2.1,9),i(31,-4,1.9,7.5);let s=new Be,r=En(Ct.madera),o=En(Ct.maderaOsc),a=new Ft(new Te(1.5,.16,2.3),r);a.position.y=.95,s.add(a);let c=new Ft(new Te(.9,.5,.9),En("#e9dfc8"));c.position.set(0,1.3,0),s.add(c);for(let m of[-.8,.8]){let p=new Ft(new Te(.1,.1,3.2),o);p.position.set(m,.95,2.4),s.add(p)}let l=[];for(let m of[-.95,.95]){let p=new Be;p.position.set(m,.85,0);let M=new Ft(new Pn(.85,.85,.14,16),o);M.rotation.z=Math.PI/2,p.add(M);let w=new Ft(new Te(.2,1.65,.1),r);p.add(w);let v=new Ft(new Te(.2,.1,1.65),r);p.add(v),s.add(p),l.push(p)}let h=En("#8a5a3a"),d=new Ft(new Te(.7,.8,1.9),h);d.position.set(0,1.35,4.2),s.add(d);let u=new Ft(new Te(.4,.45,.8),h);u.position.set(0,1.85,5.35),s.add(u);for(let m of[-.22,.22])for(let p of[3.6,4.8]){let M=new Ft(new Te(.16,1,.16),En("#3b2a1c"));M.position.set(m,.5,p),s.add(M)}t.g.add(s);let f=0;t.anim.push((m,p)=>{f+=p*.32;let M=5.9;s.position.set(14+Math.cos(f)*M,0,-4+Math.sin(f)*M),s.rotation.y=-f+Math.PI;for(let w of l)w.rotation.x+=p*.32*M/.85});let g=Tn([{texto:"CASAS REDONDAS",tam:.28},{texto:"Jorge Telbiz \xB7 d\xE9cada de 1950",tam:.17}],{ancho:760,alto:220,fondo:["#7a2e22","#c0563a"]}),y=wn(g,4.4,1.27);y.position.set(8.3,2.4,12),y.rotation.y=-Math.PI/2,t.g.add(y),e.box(.14,2.2,.14,Ct.maderaOsc,8.35,0,10.3),e.box(.14,2.2,.14,Ct.maderaOsc,8.35,0,13.7)}};function Jg(e,t){let n=new Be;e.add(n);let i=[],s=Ur(20261027),r=(()=>{let C=new hi(520,24,14),U=C.attributes.position,X=new Float32Array(U.count*3),at=new Gt("#4a9fe6"),K=new Gt("#b5e0f7"),nt=new Gt("#fff0d4"),B=new Gt;for(let ot=0;ot<U.count;ot++){let _t=U.getY(ot)/520;_t>.35?B.copy(K).lerp(at,Math.min(1,(_t-.35)/.65)):_t>0?B.copy(nt).lerp(K,_t/.35):B.copy(nt),X[ot*3]=B.r,X[ot*3+1]=B.g,X[ot*3+2]=B.b}C.setAttribute("color",new ke(X,3));let L=new Ft(C,new nn({vertexColors:!0,side:Ln,fog:!1,depthWrite:!1}));return L.renderOrder=-10,L.frustumCulled=!1,L})();n.add(r);let o=new Ft(new hi(26,16,12),new nn({color:"#fff3b0",fog:!1}));o.frustumCulled=!1,n.add(o);let a=new Ft(new hi(44,16,12),new nn({color:"#fff3b0",fog:!1,transparent:!0,opacity:.22,depthWrite:!1}));a.frustumCulled=!1,n.add(a);{let C=new dn;for(let X=0;X<26;X++){let at=(s()-.5)*700,K=70+s()*60,nt=-s()*1e3+120,B=3+Math.floor(s()*3);for(let L=0;L<B;L++)C.sphere(9+s()*7,"#ffffff",at+L*11-B*5,K+s()*4,nt+(s()-.5)*8,[1.6,.7,1],7)}let U=C.build({cast:!1,receive:!1,material:new nn({vertexColors:!0,fog:!1,transparent:!0,opacity:.95})});n.add(U),i.push(X=>{U.position.x=Math.sin(X*.02)*40})}let c=1100,l=-430;{let C=new Bn(900,c,90,110);C.rotateX(-Math.PI/2);let U=C.attributes.position,X=new Float32Array(U.count*3),at=new Gt("#79bd57"),K=new Gt("#9ccf6a"),nt=new Gt("#6aa94c"),B=new Gt;for(let ot=0;ot<U.count;ot++){let _t=U.getX(ot),ut=U.getZ(ot)+l,Wt=Math.sin(_t*.045)*Math.cos(ut*.05)+Math.sin(_t*.13+ut*.09)*.5;B.copy(at),Wt>.35?B.lerp(K,Math.min(1,(Wt-.35)*1.2)):Wt<-.4&&B.lerp(nt,Math.min(1,(-.4-Wt)*1.1)),X[ot*3]=B.r,X[ot*3+1]=B.g,X[ot*3+2]=B.b}C.setAttribute("color",new ke(X,3));let L=new Ft(C,new un({vertexColors:!0}));L.position.set(0,0,l),L.receiveShadow=!0,n.add(L)}{let C=new dn,U=[[40,Ns-6],[Ns-42,Ai-40]];for(let[K,nt]of U){let B=K-nt,L=(K+nt)/2;C.box(11,.1,B,Ct.tierra,0,0,L),C.box(.5,.2,B,Ct.cordon,-5.75,0,L),C.box(.5,.2,B,Ct.cordon,5.75,0,L);for(let ot=K-2;ot>nt;ot-=6)C.box(.16,.02,2.4,"#fff3d0",-1.3,.1,ot),C.box(.16,.02,2.4,"#fff3d0",1.3,.1,ot)}for(let K=0;K<we;K++)for(let nt of[34,28,22]){let B=Ye(K)+nt;C.box(1.5,.02,.32,"#ffd23f",-.55,.11,B,[0,.63,0]),C.box(1.5,.02,.32,"#ffd23f",.55,.11,B,[0,-.63,0])}for(let K=20;K>Ai-30;K-=30)C.cyl(.1,.12,6.4,"#6b5a48",-7.2,0,K,6),C.box(1.8,.14,.14,"#6b5a48",-7.2,6.1,K);let X=C.build({cast:!1,receive:!0});n.add(X);let at=kS();for(let[K,nt]of U){let B=at.clone();B.wrapS=B.wrapT=Is,B.repeat.set(1,(K-nt)/14),B.needsUpdate=!0;let L=new Ft(new Bn(10.6,K-nt).rotateX(-Math.PI/2),new un({map:B}));L.position.set(0,.07,(K+nt)/2),L.receiveShadow=!0,n.add(L)}}{let C=new dn;for(let U=0;U<46;U++){let at=(U%2?1:-1)*(190+s()*160),K=60-s()*1e3,nt=30+s()*50;C.sphere(nt,["#6aa86a","#7eb877","#5f9d62"][U%3],at,-nt*.6,K,[1.6,.55,1.4],8)}n.add(C.build({cast:!1,receive:!1}))}{let C=[];for(let Kt=0;Kt<we;Kt++)C.push([Ye(Kt)-26,Ye(Kt)+30,-48,48]);C.push([Ns-46,Ns-4,-400,400]),C.push([Ai-14,Ai+30,-24,24]),C.push([-54,-8,6,14]);let U=[];for(let Kt=30;Kt>Ai-60;Kt-=3+s()*5)for(let jt of[-1,1]){if(s()<.25)continue;let ne=jt*(9.5+Math.pow(s(),1.4)*60);C.some(([O,Xe,he,A])=>Kt<Xe&&Kt>O&&ne>he&&ne<A)||U.push([ne,Kt,.8+s()*.9])}let X=new Pn(.2,.32,2.4,6).translate(0,1.2,0),at=new ds(1.9,0).scale(1.2,.85,1.2).translate(0,3.4,0),K=new ei(X,En("#7a4e2b"),U.length),nt=new ei(at,new un({color:16777215,flatShading:!0}),U.length),B=new de,L=new Gt,ot=["#4f9d3f","#5eb04a","#3f8a3a","#6cbc50","#4a9a5a"],_t=[];U.forEach(([Kt,jt,ne],O)=>{let Xe=s()*6,he=ne*(.9+s()*.3);_t.push({x:Kt,z:jt,s:ne,sy:he,yaw:Xe,fase:s()*6}),B.compose(new P(Kt,0,jt),new gn().setFromAxisAngle(new P(0,1,0),Xe),new P(ne,he,ne)),K.setMatrixAt(O,B),nt.setMatrixAt(O,B),L.set(ot[O%ot.length]),nt.setColorAt(O,L)});let ut=new P,Wt=new gn,le=new P,Xt=new Yn;i.push(Kt=>{_t.forEach((jt,ne)=>{ut.set(jt.x,0,jt.z),Xt.set(Math.sin(Kt*1.3+jt.fase)*.035,jt.yaw,Math.cos(Kt*1.1+jt.fase)*.035),Wt.setFromEuler(Xt),le.set(jt.s,jt.sy,jt.s),B.compose(ut,Wt,le),nt.setMatrixAt(ne,B)}),nt.instanceMatrix.needsUpdate=!0}),K.castShadow=nt.castShadow=!0,n.add(K,nt);let te=[],xe=[];for(let Kt=28;Kt>Ai-30;Kt-=1.8+s()*2.6)for(let jt of[-1,1]){if(s()<.4)continue;let ne=jt*(6.4+s()*3.2);C.some(([O,Xe,he,A])=>Kt<Xe&&Kt>O&&Math.abs(ne)<10&&Math.abs(he)>30),!(Kt<Ns-4&&Kt>Ns-44)&&(s()<.35?xe:te).push([ne,Kt])}let ee=new ei(new ds(.15,0).translate(0,.32,0),new un({color:16777215,flatShading:!0}),te.length),Re=["#ff6fa3","#ffd23f","#ffffff","#ff7a2f","#b58cff"];te.forEach(([Kt,jt],ne)=>{B.makeTranslation(Kt,0,jt),ee.setMatrixAt(ne,B),L.set(Re[ne%Re.length]),ee.setColorAt(ne,L)});let Qe=new ei(new ds(.75,0).scale(1.2,.8,1.2).translate(0,.55,0),En("#3f8a3a"),xe.length);xe.forEach(([Kt,jt],ne)=>{B.makeTranslation(Kt,0,jt),Qe.setMatrixAt(ne,B)}),n.add(ee,Qe)}{let C=[];for(let L=-1;L<we;L++){let ot=L<0?Ye(0)+70:Ye(L)-Zg/2,_t=L%2?1:-1;ot<Ns+45&&ot>Ns-90||C.push([_t,ot])}let U=[],X=[],at=new dn;for(let[L,ot]of C){at.box(30,.05,36,"#8a6246",L*30,0,ot);for(let _t=0;_t<11;_t++)for(let ut=0;ut<15;ut++){let Wt=L*(17+_t*2.3),le=ot-16+ut*2.3;U.push([Wt,le]),s()<.8&&X.push([Wt+(s()-.5)*.3,le+(s()-.5)*.3])}}n.add(at.build({cast:!1,receive:!0}));let K=new de,nt=new ei(new ds(.55,0).scale(1,.85,1).translate(0,.45,0),En("#3a7d34"),U.length);U.forEach(([L,ot],_t)=>{K.makeTranslation(L,0,ot),nt.setMatrixAt(_t,K)});let B=new ei(new ds(.2,0).translate(0,.95,0),new un({color:"#ffffff",emissive:"#555555",flatShading:!0}),X.length);X.forEach(([L,ot],_t)=>{K.makeTranslation(L,0,ot),B.setMatrixAt(_t,K)}),n.add(nt,B)}let h=VS(),d=[],u=(C,U,X,at)=>{let K=h.clone();K.needsUpdate=!0,K.wrapS=K.wrapT=Is,K.repeat.set(C/22,U/22);let nt=new Ft(new Bn(C,U).rotateX(-Math.PI/2),new un({color:"#b8583b",map:K}));return nt.receiveShadow=!0,d.push({t:K,v:at}),nt};i.push((C,U)=>{for(let X of d)X.t.offset.y+=U*.012*(X.v||1),X.t.offset.x+=U*.004});let f=zS(),g=[];function y(C,U,X,at){let K=new Bn(2.4,1.6,12,1),nt=Float32Array.from(K.attributes.position.array),B=new Ft(K,new nn({map:f,side:zn}));B.position.set(U+1.2,X,at),C.add(B),g.push({m:B,orig:nt})}i.push(C=>{for(let{m:U,orig:X}of g){let at=U.geometry.attributes.position;for(let K=0;K<at.count;K++){let nt=X[K*3];at.setZ(K,Math.sin(nt*2.6-C*4.2)*.14*((nt+1.2)/2.4))}at.needsUpdate=!0}});let m=[],p=["#ff9f43","#4aa8ff","#ff6f91","#ffd23f","#a06cff","#34d399","#4aa8ff","#ff7a2f"];t.forEach((C,U)=>{let X=Ye(U),at=new Be;at.position.z=X,n.add(at);let K=new dn,nt={g:at,anim:i,agua:u,bandera:(le,Xt,te)=>y(at,le,Xt,te)};(GS[C.escena]||(()=>{}))(K,nt),K.box(.6,8.2,.6,"#7a4e2b",-6.9,0,0),K.box(.6,8.2,.6,"#7a4e2b",6.9,0,0),K.box(14.6,.7,.7,"#5e3a1d",0,7.6,0),K.box(.3,1.6,.3,"#5e3a1d",-6,6,0,[0,0,-.6]),K.box(.3,1.6,.3,"#5e3a1d",6,6,0,[0,0,.6]);for(let le of[18,15])K.box(1.5,.02,.32,"#ffd23f",-.55,.11,le,[0,.63,0]),K.box(1.5,.02,.32,"#ffd23f",.55,.11,le,[0,-.63,0]);at.add(K.build());let B=Tn([{texto:C.lugar,tam:.3},{texto:C.anio,tam:.22}],{ancho:1536,alto:384,insignia:C.orden,fondo:["#1b2a4a","#2c4a8a"]}),L=wn(B,12.4,3.1);L.position.set(0,5.6,.36),at.add(L);let ot=new Ft(new Pn(.45,.45,70,12,1,!0),new nn({color:p[U],transparent:!0,opacity:.3,depthWrite:!1,side:zn}));ot.position.set(0,35,-1),at.add(ot);let _t=new Be,ut=new Ft(new bo(1.5,2.1,36).rotateX(-Math.PI/2),new nn({color:"#ffd23f",transparent:!0,opacity:.9,side:zn})),Wt=new Ft(new Ir(1.5,36).rotateX(-Math.PI/2),new nn({color:"#ffd23f",transparent:!0,opacity:.28,side:zn}));_t.add(ut,Wt),_t.position.set(0,.14,12),at.add(_t),i.push(le=>{let Xt=1+Math.sin(le*3+U)*.08;_t.scale.set(Xt,1,Xt)}),m.push({i:U,z:X,zParada:No(U),g:at,baliza:ot,marca:_t,hecho:!1})});{let C=new dn,U=(nt,B,L)=>{C.box(.7,L,.7,"#7a4e2b",-B/2,0,nt),C.box(.7,L,.7,"#7a4e2b",B/2,0,nt),C.box(B+.7,.8,.8,"#5e3a1d",0,L-.4,nt)};U(-14,14.6,7.6),U(Ai,15.6,9);let X=["#d8452f","#ffd23f","#2f8fd0","#4f9d3f","#ff6fa3"];for(let nt=0;nt<18;nt++){let B=(nt+.5)/18;C.box(.7,.7,.06,X[nt%5],-7.8+B*15.6,8.4-Math.sin(B*Math.PI)*1.2,Ai+.5,[0,0,Math.PI/4])}n.add(C.build());let at=wn(Tn([{texto:"SALIDA",tam:.36},{texto:"Camin\xE1 hacia la primera estaci\xF3n",tam:.17}],{ancho:1024,alto:256,fondo:["#7c2a22","#b8573a"]}),11,2.75);at.position.set(0,4.7,-13.6),n.add(at);let K=wn(Tn([{texto:"\xA1LLEGASTE A EL COLORADO!",tam:.27},{texto:"Misi\xF3n Bermejo cumplida",tam:.2}],{ancho:1280,alto:320,fondo:["#1f5a3a","#2f8a5a"]}),12.8,3.2);K.position.set(0,6.2,Ai+.45),n.add(K);for(let nt of[-10,10])M(n,nt,Ai+2)}function M(C,U,X){let at=new dn;at.cyl(.08,.1,8.5,"#c8ced6",U,0,X,6),at.sphere(.2,"#ffc83d",U,8.4,X),C.add(at.build()),y(C,U,7.2,X)}let w=[],v=[];{let C=[[-8,Ye(0)+30]];for(let X=0;X<we-1;X++)C.push([Ye(X)-14,Ye(X+1)+30]);C.push([Ye(we-1)-14,Ai+30]);let U=Ur(4242);C.forEach(([X,at],K)=>{let nt=1+Math.floor(U()*3)-1,B=X-4,L=0;for(;B>at+8&&L<4;){for(let Xt=0;Xt<3;Xt++){let te=B-Xt*3.2;w.push({x:dr[nt],z:te,y:mc(te),got:!1,seg:K})}B-=3*3.2+2;let _t=(nt+1+Math.floor(U()*2))%3,ut=[0,1,2].filter(Xt=>Xt!==nt&&Xt!==_t),Wt=ut.length?ut[Math.floor(U()*ut.length)]:(nt+1)%3,le=B-2.2;le>at+8&&v.push({x:dr[Wt],z:le,y:mc(le),tipo:Math.floor(U()*3),golpeado:!1,seg:K}),B-=7,nt=_t,L++}})}let T=(()=>{let C=new dn;return C.sphere(.34,"#ffffff",0,0,0,null,8),C.sphere(.3,"#fbfdff",.28,.12,.1,null,8),C.sphere(.3,"#fbfdff",-.26,.1,.12,null,8),C.sphere(.28,"#ffffff",0,.3,-.18,null,8),C.cone(.3,.3,"#3f8a3a",0,-.2,0,5,[Math.PI,0,0]),C.build({cast:!1,receive:!1}).geometry})(),E=new un({color:16777215,vertexColors:!0,flatShading:!0,emissive:"#6a6f78"}),R=new ei(T,E,Math.max(1,w.length));R.frustumCulled=!1,n.add(R);let _=new ei(new bo(.6,.85,24).rotateX(-Math.PI/2),new nn({color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,side:zn}),Math.max(1,w.length));_.frustumCulled=!1,n.add(_);let S=new de,I=new gn,D=new P,N=new P,W=new P(0,1,0),F=new gn;function $(C,U){w.forEach((X,at)=>{let K=X.got||Math.abs(X.z-U)>110;K?(N.set(0,0,0),D.set(0,-20,X.z),I.identity()):(D.set(X.x,X.y+1.15+Math.sin(C*2.4+at)*.12,X.z),I.setFromAxisAngle(W,C*1.8+at),N.set(1,1,1)),S.compose(D,I,N),R.setMatrixAt(at,S),K?(D.set(0,-20,X.z),N.set(0,0,0)):(D.set(X.x,X.y+.06,X.z),N.setScalar(1+Math.sin(C*3+at)*.08)),S.compose(D,F,N),_.setMatrixAt(at,S)}),R.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0}let tt=[(()=>{let C=new dn;return C.box(1.4,1.2,1.4,"#c98a4b"),C.box(1.46,.16,1.46,"#8b5a2b",0,.1),C.box(1.46,.16,1.46,"#8b5a2b",0,.94),C.box(.16,1.22,1.46,"#8b5a2b",.4,0),C.box(.16,1.22,1.46,"#8b5a2b",-.4,0),C.build({receive:!1}).geometry})(),(()=>{let C=new dn;return C.cyl(.62,.62,1.3,"#d8452f",0,0,0,12),C.cyl(.65,.65,.14,"#33343a",0,.25,0,12),C.cyl(.65,.65,.14,"#33343a",0,.95,0,12),C.cyl(.55,.55,.05,"#eee",0,1.3,0,12),C.build({receive:!1}).geometry})(),(()=>{let C=new dn;return C.box(1.7,1.1,1.2,"#f2efe6"),C.box(1.76,.1,1.26,"#4b5260",0,.3),C.box(1.76,.1,1.26,"#4b5260",0,.75),C.sphere(.45,"#ffffff",0,1,0,[1.4,.8,1],6),C.build({receive:!1}).geometry})()],j=new Be;n.add(j),v.forEach(C=>{let U=new Ft(tt[C.tipo],$f);U.position.set(C.x,C.y,C.z),U.rotation.y=C.z*7.3%1,U.castShadow=!0,C.mesh=U,j.add(U)});function lt(){w.forEach(C=>C.got=!1),v.forEach(C=>{C.golpeado=!1,C.mesh.rotation.x=0,C.mesh.rotation.z=0,C.mesh.position.y=C.y}),m.forEach(C=>{C.hecho=!1,C.baliza.visible=!0})}function Q(C){j.visible=C}function G(C,U,X,at,K){r.position.copy(at.position),o.position.copy(at.position).addScaledVector(_c,430),a.position.copy(o.position);for(let nt of i)nt(C,U);$(C,X);for(let nt of v)nt.golpeado&&(nt.mesh.rotation.x=Math.min(1.45,nt.mesh.rotation.x+U*6),nt.mesh.position.y=nt.y+Math.max(-.3,.2-nt.mesh.rotation.x*.2));for(let nt of m)nt.baliza.visible=!nt.hecho,nt.baliza.material.opacity=.26+Math.sin(C*2+nt.i)*.07,nt.marca.visible=!nt.hecho}return{raiz:n,anim:i,paradas:m,algodones:w,obstaculos:v,actualizar:G,reiniciarItems:lt,mostrarObstaculos:Q,zParada:No,zEstacion:Ye,alturaEn:mc}}function Kg(){let e=new Be,t=En("#e0a77a"),n=En("#2d7fd3"),i=En("#33405e"),s=En("#d8452f"),r=En("#ecc96a"),o=En("#2b2b33"),a=_=>(_.castShadow=!0,_),c=a(new Ft(new Te(.74,.88,.44),n));c.position.y=1.5;let l=a(new Ft(new hi(.31,14,10),t));l.position.y=2.2;let h=a(new Ft(new Pn(.58,.58,.05,16),r));h.position.y=2.42;let d=a(new Ft(new Pn(.27,.32,.26,12),r));d.position.y=2.55;let u=new Ft(new Pn(.33,.33,.07,12),En("#d8452f"));u.position.y=2.47;let f=a(new Ft(new Te(.54,.66,.24),s));f.position.set(0,1.52,.34);let g=_=>{let S=new Be;S.position.set(_,1.08,0);let I=a(new Ft(new Te(.28,.82,.3),i));I.position.y=-.41;let D=a(new Ft(new Te(.3,.16,.42),o));return D.position.set(0,-.86,-.06),S.add(I,D),S},y=_=>{let S=new Be;S.position.set(_,1.86,0);let I=a(new Ft(new Te(.2,.72,.22),n));I.position.y=-.34;let D=a(new Ft(new hi(.12,8,6),t));return D.position.y=-.74,S.add(I,D),S},m=g(-.2),p=g(.2),M=y(-.5),w=y(.5),v=new Be;v.add(c,l,h,d,u,f,m,p,M,w),e.add(v);let T=new Ft(new Ir(.6,16).rotateX(-Math.PI/2),new nn({color:0,transparent:!0,opacity:.25,depthWrite:!1}));T.position.y=.04,e.add(T);let E=0,R=0;return{objeto:e,sombraFalsa:T,actualizar(_,S,I,D=0,N=!1){R+=_;let W=Math.min(1,S/5);E+=_*(2+S*1.25);let F=Math.sin(E)*.95*W;m.rotation.x=F,p.rotation.x=-F,M.rotation.x=-F*.8,I?w.rotation.x=Math.PI*.88+Math.sin(R*7)*.22:w.rotation.x=F*.8,v.position.y=Math.abs(Math.sin(E))*.09*W+(W<.05?Math.sin(R*2)*.012:0),v.rotation.z=D*.14,v.rotation.x=N?-.25:0}}}var su=class{constructor(t,n=420){this.max=n,this.pos=new Float32Array(n*3),this.col=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.vida=new Float32Array(n),this.dur=new Float32Array(n),this.base=new Float32Array(n*3),this.grav=new Float32Array(n),this.sig=0;let i=new qe;i.setAttribute("position",new ke(this.pos,3)),i.setAttribute("color",new ke(this.col,3));for(let s=0;s<n;s++)this.pos[s*3+1]=-100;this.puntos=new Va(i,new vo({size:.42,vertexColors:!0,transparent:!0,depthWrite:!1,blending:ec,sizeAttenuation:!0})),this.puntos.frustumCulled=!1,t.add(this.puntos),this.reducido=!1}emitir(t,n,i,s,r=14,o=3.5,a=.7,c=5){this.reducido&&(r=Math.ceil(r*.3));let l=new Gt(s);for(let h=0;h<r;h++){let d=this.sig;this.sig=(this.sig+1)%this.max;let u=Math.random()*Math.PI*2,f=Math.random()*1.2-.1;this.pos[d*3]=t,this.pos[d*3+1]=n,this.pos[d*3+2]=i,this.vel[d*3]=Math.cos(u)*o*(.4+Math.random()*.6),this.vel[d*3+1]=(1.5+f*o)*(.6+Math.random()*.6),this.vel[d*3+2]=Math.sin(u)*o*(.4+Math.random()*.6),this.base[d*3]=l.r,this.base[d*3+1]=l.g,this.base[d*3+2]=l.b,this.vida[d]=this.dur[d]=a*(.7+Math.random()*.6),this.grav[d]=c}}confeti(t,n,i){["#ff4d6d","#ffd23f","#4aa8ff","#6fe39b","#ff9f43","#b58cff"].forEach(r=>this.emitir(t+(Math.random()-.5)*8,n+Math.random()*3,i,r,22,5,1.8,3))}actualizar(t){for(let n=0;n<this.max;n++){if(this.vida[n]<=0){this.col[n*3]=this.col[n*3+1]=this.col[n*3+2]=0;continue}this.vida[n]-=t,this.vel[n*3+1]-=this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let i=Math.max(0,this.vida[n]/this.dur[n]);this.col[n*3]=this.base[n*3]*i,this.col[n*3+1]=this.base[n*3+1]*i,this.col[n*3+2]=this.base[n*3+2]*i}this.puntos.geometry.attributes.position.needsUpdate=!0,this.puntos.geometry.attributes.color.needsUpdate=!0}};var ru=class{constructor(){this.ctx=null,this.activo=!0,this.maestro=null}iniciar(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.maestro=this.ctx.createGain(),this.maestro.gain.value=.5,this.maestro.connect(this.ctx.destination))}_nota(t,n,i,{tipo:s="sine",vol:r=.3,hasta:o=null}={}){if(!this.activo||!this.ctx)return;let a=this.ctx.currentTime+n,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=s,c.frequency.setValueAtTime(t,a),o&&c.frequency.exponentialRampToValueAtTime(o,a+i),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(r,a+.015),l.gain.exponentialRampToValueAtTime(1e-4,a+i),c.connect(l).connect(this.maestro),c.start(a),c.stop(a+i+.05)}algodon(){this._nota(880,0,.12,{tipo:"triangle"}),this._nota(1320,.07,.16,{tipo:"triangle"})}llegada(){[523,659,784].forEach((t,n)=>this._nota(t,n*.11,.25,{tipo:"triangle",vol:.25}))}acierto(){[523,659,784,1047].forEach((t,n)=>this._nota(t,n*.09,.3,{tipo:"triangle",vol:.28}))}error(){this._nota(300,0,.28,{tipo:"sine",vol:.25,hasta:200})}golpe(){this._nota(160,0,.18,{tipo:"square",vol:.18,hasta:70})}clic(){this._nota(660,0,.06,{tipo:"sine",vol:.18})}coleccion(){[784,988,1175,1568].forEach((t,n)=>this._nota(t,n*.07,.22,{tipo:"triangle",vol:.26}))}salpicadura(){this._nota(700,0,.22,{tipo:"sine",vol:.12,hasta:260})}final(){[523,659,784,1047,784,1047,1319].forEach((t,n)=>this._nota(t,n*.13,.35,{tipo:"triangle",vol:.26}))}};var kr=typeof self!="undefined"?self:{};function Fr(){throw Error("Invalid UTF8")}function jg(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var ou,Jf,HS=typeof TextDecoder!="undefined",Qg,WS=typeof TextEncoder!="undefined";function g_(e){if(WS)e=(Qg||(Qg=new TextEncoder)).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var Ip,yu;t:{for(Kf=["CLOSURE_FLAGS"],au=kr,cu=0;cu<Kf.length;cu++)if((au=au[Kf[cu]])==null){yu=null;break t}yu=au}var Kf,au,cu,Rc,t1=yu&&yu[610401301];Ip=t1!=null&&t1;var e1=kr.navigator;function lp(e){return!!Ip&&!!Rc&&Rc.brands.some((({brand:t})=>t&&t.indexOf(e)!=-1))}function Pi(e){var t;return(t=kr.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function pr(){return!!Ip&&!!Rc&&Rc.brands.length>0}function jf(){return pr()?lp("Chromium"):(Pi("Chrome")||Pi("CriOS"))&&!(!pr()&&Pi("Edge"))||Pi("Silk")}function Pp(e){return Pp[" "](e),e}Rc=e1&&e1.userAgentData||null,Pp[" "]=function(){};var XS=!pr()&&(Pi("Trident")||Pi("MSIE"));!Pi("Android")||jf(),jf(),Pi("Safari")&&(jf()||!pr()&&Pi("Coast")||!pr()&&Pi("Opera")||!pr()&&Pi("Edge")||(pr()?lp("Microsoft Edge"):Pi("Edg/"))||pr()&&lp("Opera"));var __={},Mc=null;function qS(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);let i=new Uint8Array(n),s=0;return(function(r,o){function a(l){for(;c<r.length;){let h=r.charAt(c++),d=Mc[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}x_();let c=0;for(;;){let l=a(-1),h=a(0),d=a(64),u=a(64);if(u===64&&l===-1)break;o(l<<2|h>>4),d!=64&&(o(h<<4&240|d>>2),u!=64&&o(d<<6&192|u))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function x_(){if(!Mc){Mc={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));__[n]=i;for(let s=0;s<i.length;s++){let r=i[s];Mc[r]===void 0&&(Mc[r]=s)}}}}var v_=typeof Uint8Array!="undefined",y_=!XS&&typeof btoa=="function";function n1(e){if(!y_){var t;t===void 0&&(t=0),x_(),t=__[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let c=0,l=0;for(;c<e.length-2;c+=3){var s=e[c],r=e[c+1],o=e[c+2],a=t[s>>2];s=t[(3&s)<<4|r>>4],r=t[(15&r)<<2|o>>6],o=t[63&o],n[l++]=a+s+r+o}switch(a=0,o=i,e.length-c){case 2:o=t[(15&(a=e[c+1]))<<2]||i;case 1:e=e[c],n[l]=t[e>>2]+t[(3&e)<<4|a>>4]+o+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}var i1=/[-_.]/g,YS={"-":"+",_:"/",".":"="};function $S(e){return YS[e]||""}function M_(e){if(!y_)return qS(e);i1.test(e)&&(e=e.replace(i1,$S)),e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Nc(e){return v_&&e!=null&&e instanceof Uint8Array}var Wo={};function Vr(){return s1||(s1=new zs(null,Wo))}function Lp(e){b_(Wo);var t=e.g;return(t=t==null||Nc(t)?t:typeof t=="string"?M_(t):null)==null?t:e.g=t}var zs=class{h(){return new Uint8Array(Lp(this)||0)}constructor(e,t){if(b_(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}},s1,lu;function b_(e){if(e!==Wo)throw Error("illegal external caller")}function S_(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function hp(e){return S_(e=Error(e),"warning"),e}var Pu=typeof Symbol=="function"&&typeof Symbol()=="symbol",ZS=new Set;function Uc(e,t,n=!1,i=!1){return e=typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t,n&&ZS.add(e),e}var JS=Uc("jas",void 0,!0,!0),r1=Uc(void 0,"0di"),Qf=Uc(void 0,"2ex"),xc=Uc(void 0,"1oa",!0),Xo=Uc(void 0,Symbol(),!0),kt=Pu?JS:"Ga",E_={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},T_=Object.defineProperties;function Lu(e,t){Pu||kt in e||T_(e,E_),e[kt]|=t}function fn(e,t){Pu||kt in e||T_(e,E_),e[kt]=t}function ta(e){return Lu(e,34),e}function KS(e,t){fn(t,-30975&(0|e))}function up(e,t){fn(t,-30941&(34|e))}function Dp(){return typeof BigInt=="function"}function si(e){return Array.prototype.slice.call(e)}var Np,Fc={},w_={};function o1(e){return!(!e||typeof e!="object"||e.Ia!==w_)}function Up(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function Fp(e,t){if(e!=null){if(typeof e=="string")e=e?new zs(e,Wo):Vr();else if(e.constructor!==zs)if(Nc(e))e=e.length?new zs(new Uint8Array(e),Wo):Vr();else{if(!t)throw Error();e=void 0}}return e}function Mu(e){return!(!Array.isArray(e)||e.length)&&!!(1&(0|e[kt]))}var a1=[];function Mr(e){if(2&e)throw Error()}fn(a1,55),Np=Object.freeze(a1);var bu=class e{constructor(t,n,i){this.l=0,this.g=t,this.h=n,this.m=i}next(){if(this.l<this.g.length){let t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new e(this.g,this.h,this.m)}};function Op(e){return Xo?e[Xo]:void 0}var jS=Object.freeze({});function Du(e){return e.Qa=!0,e}var QS=Du((e=>typeof e=="number")),c1=Du((e=>typeof e=="string")),tE=Du((e=>typeof e=="boolean")),Nu=typeof kr.BigInt=="function"&&typeof kr.BigInt(0)=="bigint",dp=Du((e=>Nu?e>=nE&&e<=sE:e[0]==="-"?l1(e,eE):l1(e,iE))),eE=Number.MIN_SAFE_INTEGER.toString(),nE=Nu?BigInt(Number.MIN_SAFE_INTEGER):void 0,iE=Number.MAX_SAFE_INTEGER.toString(),sE=Nu?BigInt(Number.MAX_SAFE_INTEGER):void 0;function l1(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var rE=typeof Uint8Array.prototype.slice=="function",Su,Pe=0,Ke=0;function h1(e){let t=e>>>0;Pe=t,Ke=(e-t)/4294967296>>>0}function qo(e){if(e<0){h1(-e);let[t,n]=Vp(Pe,Ke);Pe=t>>>0,Ke=n>>>0}else h1(e)}function Bp(e){let t=Su||(Su=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ke=0,Pe=t.getUint32(0,!0)}function zp(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Ic(e,t)}function kp(e,t){let n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=zp(e,t))=="number"?n?-e:e:n?"-"+e:e}function Ic(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Dp()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+u1(n)+u1(e));return n}function u1(e){return e=String(e),"0000000".slice(e.length)+e}function Uu(e){if(e.length<16)qo(Number(e));else if(Dp())e=BigInt(e),Pe=Number(e&BigInt(4294967295))>>>0,Ke=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");Ke=Pe=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));Ke*=1e6,Pe=1e6*Pe+r,Pe>=4294967296&&(Ke+=Math.trunc(Pe/4294967296),Ke>>>=0,Pe>>>=0)}if(t){let[i,s]=Vp(Pe,Ke);Pe=i,Ke=s}}}function Vp(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}var Gp=typeof BigInt=="function"?BigInt.asIntN:void 0,oE=typeof BigInt=="function"?BigInt.asUintN:void 0,zo=Number.isSafeInteger,Fu=Number.isFinite,Eu=Math.trunc;function br(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function A_(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}var aE=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ou(e){switch(typeof e){case"bigint":return!0;case"number":return Fu(e);case"string":return aE.test(e);default:return!1}}function ea(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Fu(e)?0|e:void 0}function C_(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Fu(e)?e>>>0:void 0}function d1(e){if(e[0]==="-")return!1;let t=e.length;return t<20||t===20&&Number(e.substring(0,6))<184467}function Hp(e){return e=Eu(e),zo(e)||(qo(e),e=kp(Pe,Ke)),e}function Wp(e){var t=Eu(Number(e));if(zo(t))return String(t);if((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),t=e.length,!(e[0]==="-"?t<20||t===20&&Number(e.substring(0,7))>-922337:t<19||t===19&&Number(e.substring(0,6))<922337))if(Uu(e),e=Pe,2147483648&(t=Ke))if(Dp())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=Vp(e,t);e="-"+Ic(n,i)}else e=Ic(e,t);return e}function Tu(e){return e==null?e:typeof e=="bigint"?(dp(e)?e=Number(e):(e=Gp(64,e),e=dp(e)?Number(e):String(e)),e):Ou(e)?typeof e=="number"?Hp(e):Wp(e):void 0}function cE(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(oE(64,e));if(Ou(e)){if(t==="string")return t=Eu(Number(e)),zo(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),d1(e)||(Uu(e),e=Ic(Pe,Ke))),e;if(t==="number")return(e=Eu(e))>=0&&zo(e)?e:(function(n){if(n<0){qo(n);var i=Ic(Pe,Ke);return n=Number(i),zo(n)?n:i}return d1(i=String(n))?i:(qo(n),zp(Pe,Ke))})(e)}}function R_(e){if(typeof e!="string")throw Error();return e}function na(e){if(e!=null&&typeof e!="string")throw Error();return e}function Yo(e){return e==null||typeof e=="string"?e:void 0}function Xp(e,t,n,i){if(e!=null&&typeof e=="object"&&e.W===Fc)return e;if(!Array.isArray(e))return n?2&i?((e=t[r1])||(ta((e=new t).u),e=t[r1]=e),t=e):t=new t:t=void 0,t;let s=n=0|e[kt];return s===0&&(s|=32&i),s|=2&i,s!==n&&fn(e,s),new t(e)}function lE(e,t,n){if(t)t:{if(!Ou(t=e))throw hp("int64");switch(typeof t){case"string":t=Wp(t);break t;case"bigint":if(e=t=Gp(64,t),c1(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(QS(e)&&!Number.isSafeInteger(e))throw Error(String(e));t=Nu?BigInt(t):tE(t)?t?"1":"0":c1(t)?t.trim()||"0":String(t);break t;default:t=Hp(t)}}else t=Tu(e);return typeof(n=(e=t)==null?n?0:void 0:e)=="string"&&zo(t=+n)?t:n}var hE={},uE=(function(){try{return Pp(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Tc=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},dE=uE?(Object.setPrototypeOf(Tc.prototype,Map.prototype),Object.defineProperties(Tc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Tc):class extends Map{constructor(){super()}};function f1(e){return e}function tp(e){if(2&e.L)throw Error("Cannot mutate an immutable Map")}var Di=class extends dE{constructor(e,t,n=f1,i=f1){super();let s=0|e[kt];s|=64,fn(e,s),this.L=s,this.S=t,this.R=n,this.Y=this.S?fE:i;for(let r=0;r<e.length;r++){let o=e[r],a=n(o[0],!1,!0),c=o[1];t?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,s),super.set(a,c)}}na(e=p1){if(this.size!==0)return this.X(e)}X(e=p1){let t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){tp(this),super.clear()}delete(e){return tp(this),super.delete(this.R(e,!0,!1))}entries(){var e=this.ma();return new bu(e,pE,this)}keys(){return this.Ha()}values(){var e=this.ma();return new bu(e,Di.prototype.get,this)}forEach(e,t){super.forEach(((n,i)=>{e.call(t,this.get(i),i,this)}))}set(e,t){return tp(this),(e=this.R(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.Y(t,!0,!0,this.S,!1,this.L))}Na(e){let t=this.R(e[0],!1,!0);e=e[1],e=this.S?e===void 0?null:e:this.Y(e,!1,!0,void 0,!1,this.L),super.set(t,e)}has(e){return super.has(this.R(e,!1,!1))}get(e){e=this.R(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.S;return n?((n=this.Y(t,!1,!0,n,this.ra,this.L))!==t&&super.set(e,n),n):t}}ma(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function fE(e,t,n,i,s,r){return e=Xp(e,i,n,r),s&&(e=zu(e)),e}function p1(e){return e}function pE(e){return[e,this.get(e)]}var m1,fp,g1;function _1(){return m1||(m1=new Di(ta([]),void 0,void 0,void 0,hE))}function qp(e,t,n,i,s){if(e!=null){if(Array.isArray(e))e=Mu(e)?void 0:s&&2&(0|e[kt])?e:Yp(e,t,n,i!==void 0,s);else if(Up(e)){let r={};for(let o in e)r[o]=qp(e[o],t,n,i,s);e=r}else e=t(e,i);return e}}function Yp(e,t,n,i,s){let r=i||n?0|e[kt]:0,o=i?!!(32&r):void 0;i=si(e);for(let a=0;a<i.length;a++)i[a]=qp(i[a],t,n,o,s);return n&&((e=Op(e))&&(i[Xo]=si(e)),n(r,i)),i}function mE(e){return qp(e,I_,void 0,void 0,!1)}function I_(e){return e.W===Fc?e.toJSON():e instanceof Di?e.na(mE):(function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return dp(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(Mu(t))return}else{if(Nc(t))return n1(t);if(t instanceof zs){let n=t.g;return n==null?"":typeof n=="string"?n:t.g=n1(n)}if(t instanceof Di)return t.na()}}return t})(e)}function P_(e){return Yp(e,I_,void 0,void 0,!1)}function gr(e,t,n){return e=L_(e,t[0],t[1],n?1:2),t!==fp&&n&&Lu(e,16384),e}function L_(e,t,n,i){if(e==null){var s=96;n?(e=[n],s|=512):e=[],t&&(s=-33521665&s|(1023&t)<<15)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(s=0|e[kt]))throw Error("farr");if(64&s)return e;if(i===1||i===2||(s|=64),n&&(s|=512,n!==e[0]))throw Error("mid");t:{if(i=(n=e).length){let r=i-1;if(Up(n[r])){if((t=r-(512&(s|=256)?0:-1))>=1024)throw Error("pvtlmt");s=-33521665&s|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,i-(512&s?0:-1)))>1024)throw Error("spvt");s=-33521665&s|(1023&t)<<15}}}return fn(e,s),e}function pp(e,t,n=up){if(e!=null){if(v_&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=0|e[kt];return 2&i?e:(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),t?(fn(e,-12293&(34|i)),e):Yp(e,pp,4&i?up:n,!0,!0))}return e.W===Fc?e=2&(i=0|(n=e.u)[kt])?e:new e.constructor(Bu(n,i,!0)):e instanceof Di&&!(2&e.L)&&(n=ta(e.X(pp)),e=new Di(n,e.S,e.R,e.Y)),e}}function Bu(e,t,n){let i=n||2&t?up:KS,s=!!(32&t);return e=(function(r,o,a){let c=si(r);var l=c.length;let h=256&o?c[l-1]:void 0;for(l+=h?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(h){o=c[o]={};for(let d in h)o[d]=a(h[d])}return(r=Op(r))&&(c[Xo]=si(r)),c})(e,t,(r=>pp(r,s,i))),Lu(e,32|(n?2:0)),e}function zu(e){let t=e.u,n=0|t[kt];return 2&n?new e.constructor(Bu(t,n,!1)):e}function $o(e,t){return Hs(e=e.u,0|e[kt],t)}function Hs(e,t,n,i){if(n===-1)return null;var s=n+(512&t?0:-1);let r=e.length-1;return s>=r&&256&t?e[r][n]:i&&256&t&&(t=e[r][n])!=null?(e[s]!=null&&Qf!=null&&((s=(e=lu!=null?lu:lu={})[Qf]||0)>=4||(e[Qf]=s+1,S_(e=Error(),"incident"),(function(o){kr.setTimeout((()=>{throw o}),0)})(e))),t):s<=r?e[s]:void 0}function Ne(e,t,n){let i=e.u,s=0|i[kt];return Mr(s),$e(i,s,t,n),e}function $e(e,t,n,i){let s=512&t?0:-1,r=n+s;var o=e.length-1;return r>=o&&256&t?(e[o][n]=i,t):r<=o?(e[r]=i,256&t&&n in(e=e[o])&&delete e[n],t):(i!==void 0&&(n>=(o=t>>15&1023||536870912)?i!=null&&(e[o+s]={[n]:i},fn(e,t|=256)):e[r]=i),t)}function pu(e,t){let n=0|(e=e.u)[kt],i=Hs(e,n,t),s=br(i);return s!=null&&s!==i&&$e(e,n,t,s),s}function D_(e){let t=0|(e=e.u)[kt],n=Hs(e,t,1),i=Fp(n,!0);return i!=null&&i!==n&&$e(e,t,1,i),i}function Or(){return jS===void 0?2:4}function Br(e,t,n,i,s){let r=e.u,o=2&(e=0|r[kt])?1:i;s=!!s;let a=0|(i=$p(r,e,t))[kt];if(!(4&a)){4&a&&(i=si(i),a=ks(a,e),e=$e(r,e,t,i));let c=0,l=0;for(;c<i.length;c++){let h=n(i[c]);h!=null&&(i[l++]=h)}l<c&&(i.length=l),a=Zp(a,e),n=-4097&(20|a),a=n&=-8193,fn(i,a),2&a&&Object.freeze(i)}return o===1||o===4&&32&a?Bs(a)||(s=a,a|=2,a!==s&&fn(i,a),Object.freeze(i)):(o===2&&Bs(a)&&(i=si(i),a=ks(a,e),a=_r(a,e,s),fn(i,a),e=$e(r,e,t,i)),Bs(a)||(t=a,a=_r(a,e,s),a!==t&&fn(i,a))),i}function $p(e,t,n,i){return e=Hs(e,t,n,i),Array.isArray(e)?e:Np}function Zp(e,t){return e===0&&(e=ks(e,t)),1|e}function Bs(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function N_(e){e=si(e);for(let t=0;t<e.length;t++){let n=e[t]=si(e[t]);Array.isArray(n[1])&&(n[1]=ta(n[1]))}return e}function mp(e,t,n,i){let s=0|(e=e.u)[kt];Mr(s),$e(e,s,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ia(e,t,n,i,s){Mr(t);var r=!(!(64&t)&&16384&t);let o=(s=$p(e,t,n,s))!==Np;if(r||!o){let a=r=o?0|s[kt]:0;(!o||2&a||Bs(a)||4&a&&!(32&a))&&(s=si(s),a=ks(a,t),t=$e(e,t,n,s)),a=-13&Zp(a,t),a=_r(i?-17&a:16|a,t,!0),a!==r&&fn(s,a)}return s}function ep(e,t){var n=Mx;return Kp(Jp(e=e.u),e,0|e[kt],n)===t?t:-1}function Jp(e){var n;if(Pu)return(n=e[xc])!=null?n:e[xc]=new Map;if(xc in e)return e[xc];let t=new Map;return Object.defineProperty(e,xc,{value:t}),t}function U_(e,t,n,i){let s=Jp(e),r=Kp(s,e,t,n);return r!==i&&(r&&(t=$e(e,t,r)),s.set(n,i)),t}function Kp(e,t,n,i){let s=e.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){let o=i[r];Hs(t,n,o)!=null&&(s!==0&&(n=$e(t,n,s)),s=o)}return e.set(i,s),s}function jp(e,t,n,i){let s,r=0|e[kt];if((i=Hs(e,r,n,i))!=null&&i.W===Fc)return(t=zu(i))!==i&&$e(e,r,n,t),t.u;if(Array.isArray(i)){let o=0|i[kt];s=2&o?gr(Bu(i,o,!1),t,!0):64&o?i:gr(s,t,!0)}else s=gr(void 0,t,!0);return s!==i&&$e(e,r,n,s),s}function F_(e,t,n,i){let s=0|(e=e.u)[kt];return(t=Xp(i=Hs(e,s,n,i),t,!1,s))!==i&&t!=null&&$e(e,s,n,t),t}function ge(e,t,n,i=!1){if((t=F_(e,t,n,i))==null)return t;if(!(2&(i=0|(e=e.u)[kt]))){let s=zu(t);s!==t&&$e(e,i,n,t=s)}return t}function O_(e,t,n,i,s,r,o){e=e.u;var a=!!(2&t);let c=a?1:s;r=!!r,o&&(o=!a);var l=0|(s=$p(e,t,i))[kt];if(!(a=!!(4&l))){var h=s,d=t;let u=!!(2&(l=Zp(l,t)));u&&(d|=2);let f=!u,g=!0,y=0,m=0;for(;y<h.length;y++){let p=Xp(h[y],n,!1,d);if(p instanceof n){if(!u){let M=!!(2&(0|p.u[kt]));f&&(f=!M),g&&(g=M)}h[m++]=p}}m<y&&(h.length=m),l|=4,l=g?16|l:-17&l,fn(h,l=f?8|l:-9&l),u&&Object.freeze(h)}if(o&&!(8&l||!s.length&&(c===1||c===4&&32&l))){for(Bs(l)&&(s=si(s),l=ks(l,t),t=$e(e,t,i,s)),n=s,o=l,h=0;h<n.length;h++)(l=n[h])!==(d=zu(l))&&(n[h]=d);o|=8,fn(n,o=n.length?-17&o:16|o),l=o}return c===1||c===4&&32&l?Bs(l)||(t=l,(l|=!s.length||16&l&&(!a||32&l)?2:2048)!==t&&fn(s,l),Object.freeze(s)):(c===2&&Bs(l)&&(fn(s=si(s),l=_r(l=ks(l,t),t,r)),t=$e(e,t,i,s)),Bs(l)||(i=l,(l=_r(l,t,r))!==i&&fn(s,l))),s}function Vs(e,t,n){let i=0|e.u[kt];return O_(e,i,t,n,Or(),!1,!(2&i))}function Ht(e,t,n,i){return i==null&&(i=void 0),Ne(e,n,i)}function wc(e,t,n,i){i==null&&(i=void 0);t:{let s=0|(e=e.u)[kt];if(Mr(s),i==null){let r=Jp(e);if(Kp(r,e,s,n)!==t)break t;r.set(n,0)}else s=U_(e,s,n,t);$e(e,s,t,i)}}function ks(e,t){return-2049&(e=32|(2&t?2|e:-3&e))}function _r(e,t,n){return 32&t&&n||(e&=-33),e}function wu(e,t,n,i){let s=0|e.u[kt];Mr(s),e=O_(e,s,n,t,2,!0),i=i!=null?i:new n,e.push(i),e[kt]=2&(0|i.u[kt])?-9&e[kt]:-17&e[kt]}function Li(e,t){return ea($o(e,t))}function Ni(e,t){return Yo($o(e,t))}function sn(e,t){var n;return(n=pu(e,t))!=null?n:0}function Pc(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);Ne(e,t,n)}function Ms(e,t,n){if(n!=null){if(typeof n!="number"||!Fu(n))throw hp("int32");n|=0}Ne(e,t,n)}function Ut(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);Ne(e,t,n)}function Au(e,t,n){{let o=e.u,a=0|o[kt];if(Mr(a),n==null)$e(o,a,t);else{var i=e=0|n[kt],s=Bs(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=si(n),i=0,e=_r(e=ks(e,a),a,!0),r=!1),e|=21,s=0;s<n.length;s++){let c=n[s],l=R_(c);Object.is(c,l)||(r&&(n=si(n),i=0,e=_r(e=ks(e,a),a,!0),r=!1),n[s]=l)}e!==i&&(r&&(n=si(n),e=_r(e=ks(e,a),a,!0)),fn(n,e)),$e(o,a,t,n)}}}function ku(e,t,n){Mr(0|e.u[kt]),Br(e,t,Yo,2,!0).push(R_(n))}function B_(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function Qp(){return Error("Failed to read varint, encoding is invalid.")}function z_(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function tm(e){if(typeof e=="string")return{buffer:M_(e),N:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),N:!1};if(e.constructor===Uint8Array)return{buffer:e,N:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),N:!1};if(e.constructor===zs)return{buffer:Lp(e)||new Uint8Array(0),N:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),N:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function em(e,t){let n,i=0,s=0,r=0,o=e.h,a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(zr(e,a),n<128)return t(i>>>0,s>>>0);throw Qp()}function nm(e){let t=0,n=e.g,i=n+10,s=e.h;for(;n<i;){let r=s[n++];if(t|=r,(128&r)==0)return zr(e,n),!!(127&t)}throw Qp()}function xr(e){let t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Qp();return zr(e,n),s}function Gs(e){return xr(e)>>>0}function gp(e){var t=e.h;let n=e.g,i=t[n],s=t[n+1],r=t[n+2];return t=t[n+3],zr(e,e.g+4),(i<<0|s<<8|r<<16|t<<24)>>>0}function _p(e){var t=gp(e);e=2*(t>>31)+1;let n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function gE(e){return xr(e)}function np(e,t,{ba:n=!1}={}){e.ba=n,t&&(t=tm(t),e.h=t.buffer,e.m=t.N,e.j=0,e.l=e.h.length,e.g=e.j)}function zr(e,t){if(e.g=t,t>e.l)throw z_(e.l,t)}function k_(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);let n=e.g,i=n+t;if(i>e.l)throw z_(t,e.l-n);return e.g=i,n}function V_(e,t){if(t==0)return Vr();var n=k_(e,t);return e.ba&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):rE?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?Vr():new zs(n,Wo)}Di.prototype.toJSON=void 0,Di.prototype.Ia=w_;var x1=[];function G_(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Gs(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw B_(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function mu(e){switch(e.h){case 0:e.h!=0?mu(e):nm(e.g);break;case 1:zr(e=e.g,e.g+8);break;case 2:if(e.h!=2)mu(e);else{var t=Gs(e.g);zr(e=e.g,e.g+t)}break;case 5:zr(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!G_(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}mu(e)}break;default:throw B_(e.h,e.l)}}function Oc(e,t,n){let i=e.g.l,s=Gs(e.g),r=e.g.g+s,o=r-i;if(o<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),o=r-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=r,e.g.l=i,t}function im(e){var t=Gs(e.g),n=k_(e=e.g,t);if(e=e.h,HS){var i,s=e;(i=Jf)||(i=Jf=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(ou===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ou=!0}catch{ou=!1}}throw!ou&&(Jf=void 0),a}}else{t=(r=n)+t,n=[];let a,c=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?Fr():(a=e[r++],o<194||(192&a)!=128?(r--,Fr()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?Fr():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,Fr()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?Fr():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,Fr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Fr(),n.length>=8192&&(c=jg(c,n),n.length=0)}r=jg(c,n)}return r}function H_(e){let t=Gs(e.g);return V_(e.g,t)}function Vu(e,t,n){var i=Gs(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var hu=[];function _E(e){return e}var ko;function Ji(e,t,n){t.g?t.m(e,t.g,t.h,n):t.m(e,t.h,n)}var Pt=class{constructor(e,t){this.u=L_(e,t)}toJSON(){let e=!ko;try{return e&&(ko=P_),W_(this)}finally{e&&(ko=void 0)}}l(){var e=JE;return e.g?e.l(this,e.g,e.h,!0):e.l(this,e.h,e.defaultValue,!0)}clone(){let e=this.u;return new this.constructor(Bu(e,0|e[kt],!1))}N(){return!!(2&(0|this.u[kt]))}};function W_(e){var t=e.u;{t=(e=ko(t))!==t;let l=e.length;if(l){var n=e[l-1],i=Up(n);i?l--:n=void 0;var s=e;if(i){t:{var r,o=n,a=!1;if(o)for(let h in o)isNaN(+h)?(r!=null?r:r={})[h]=o[h]:(i=o[h],Array.isArray(i)&&(Mu(i)||o1(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((r!=null?r:r={})[h]=i));if(a||(r=o),r)for(let h in r){a=r;break t}a=null}o=a==null?n!=null:a!==n}for(;l>0&&((r=s[l-1])==null||Mu(r)||o1(r)&&r.size===0);l--)var c=!0;(s!==e||o||c)&&(t?(c||o||a)&&(s.length=l):s=Array.prototype.slice.call(s,0,l),a&&s.push(a)),c=s}else c=e}return c}function v1(e){return e?/^\d+$/.test(e)?(Uu(e),new xp(Pe,Ke)):null:y1||(y1=new xp(0,0))}Pt.prototype.W=Fc,Pt.prototype.toString=function(){try{return ko=_E,W_(this).toString()}finally{ko=void 0}};var xp=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},y1;function M1(e){return e?/^-?\d+$/.test(e)?(Uu(e),new vp(Pe,Ke)):null:b1||(b1=new vp(0,0))}var vp=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},b1;function Vo(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function sa(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Gu(e,t){if(t>=0)sa(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Lc(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Zo(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function _i(e,t,n){sa(e.g,8*t+n)}function sm(e,t){return _i(e,t,2),t=e.g.end(),Zo(e,t),t.push(e.h),t}function rm(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Hu(e,t,n){_i(e,t,2),sa(e.g,n.length),Zo(e,e.g.end()),Zo(e,n)}function Cu(e,t,n,i){n!=null&&(t=sm(e,t),i(n,e),rm(e,t))}function Ki(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var om=Ki(),X_=Ki(),am=Ki(),cm=Ki(),q_=Ki(),Y_=Ki(),lm=Ki(),$_=Ki(),Z_=Ki(),ra=class{constructor(e,t,n){this.g=e,this.h=t,e=om,this.l=!!e&&n===e||!1}};function Wu(e,t){return new ra(e,t,om)}function J_(e,t,n,i,s){Cu(e,n,j_(t,i),s)}var xE=Wu((function(e,t,n,i,s){return e.h===2&&(Oc(e,jp(t,i,n),s),!0)}),J_),vE=Wu((function(e,t,n,i,s){return e.h===2&&(Oc(e,jp(t,i,n,!0),s),!0)}),J_),Xu=Symbol(),hm=Symbol(),S1=Symbol(),E1=Symbol(),bc,Sc;function Gr(e,t,n,i){var s=i[e];if(s)return s;(s={}).Pa=i,s.V=(function(d){switch(typeof d){case"boolean":return fp||(fp=[0,void 0,!0]);case"number":return d>0?void 0:d===0?g1||(g1=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ga=r,typeof(r=i[++o])=="function"&&(s.la=!0,bc!=null||(bc=r),Sc!=null||(Sc=i[o+1]),r=i[o+=2]));let a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)a[r[c]]=r;r=i[++o]}for(c=1;r!==void 0;){let d;typeof r=="number"&&(c+=r,r=i[++o]);var l=void 0;if(r instanceof ra?d=r:(d=xE,o--),d==null?void 0:d.l){r=i[++o],l=i;var h=o;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);c<h;c++){let u=a[c];l?n(s,c,d,l,u):t(s,c,d,u)}}return i[e]=s}function K_(e){return Array.isArray(e)?e[0]instanceof ra?e:[vE,e]:[e,void 0]}function j_(e,t){return e instanceof Pt?e.u:Array.isArray(e)?gr(e,t,!1):void 0}function um(e,t,n,i){let s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function dm(e,t,n,i,s){let r=n.g,o,a;e[t]=(c,l,h)=>r(c,l,h,a||(a=Gr(hm,um,dm,i).V),o||(o=fm(i)),s)}function fm(e){let t=e[S1];if(t!=null)return t;let n=Gr(hm,um,dm,e);return t=n.la?(i,s)=>bc(i,s,n):(i,s)=>{let r=0|i[kt];for(;G_(s)&&s.h!=4;){var o=s.m,a=n[o];if(a==null){var c=n.ga;c&&(c=c[o])&&(c=yE(c))!=null&&(a=n[o]=c)}a!=null&&a(s,i,o)||(o=(a=s).l,mu(a),a.fa?a=void 0:(c=a.g.g-o,a.g.g=o,a=V_(a.g,c)),o=i,a&&((c=o[Xo])?c.push(a):o[Xo]=[a]))}return 16384&r&&ta(i),!0},e[S1]=t}function yE(e){let t=(e=K_(e))[0].g;if(e=e[1]){let n=fm(e),i=Gr(hm,um,dm,e).V;return(s,r,o)=>t(s,r,o,i,n)}return t}function qu(e,t,n){e[t]=n.h}function Yu(e,t,n,i){let s,r,o=n.h;e[t]=(a,c,l)=>o(a,c,l,r||(r=Gr(Xu,qu,Yu,i).V),s||(s=Q_(i)))}function Q_(e){let t=e[E1];if(!t){let n=Gr(Xu,qu,Yu,e);t=(i,s)=>tx(i,s,n),e[E1]=t}return t}function tx(e,t,n){for(var i=0|e[kt],s=512&i?0:-1,r=e.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){let c=e[o];if(c==null)continue;let l=o-s,h=T1(n,l);h&&h(t,c,l)}if(256&i){i=e[r-1];for(let c in i)s=+c,Number.isNaN(s)||(r=i[s])!=null&&(a=T1(n,s))&&a(t,r,s)}if(e=Op(e))for(Zo(t,t.g.end()),n=0;n<e.length;n++)Zo(t,Lp(e[n])||new Uint8Array(0))}function T1(e,t){var n=e[t];if(n)return n;if((n=e.ga)&&(n=n[t])){var i=(n=K_(n))[0].h;if(n=n[1]){let s=Q_(n),r=Gr(Xu,qu,Yu,n).V;n=e.la?Sc(r,s):(o,a,c)=>i(o,a,c,r,s)}else n=i;return e[t]=n}}function oa(e,t){if(Array.isArray(t)){var n=0|t[kt];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){let r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),fn(t,-12289&(5|n)),2&n&&Object.freeze(t),t}}function Kn(e,t,n){return new ra(e,t,n)}function aa(e,t,n){return new ra(e,t,n)}function jn(e,t,n){$e(e,0|e[kt],t,n)}var ME=Wu((function(e,t,n,i,s){return e.h===2&&(e=Oc(e,gr([void 0,void 0],i,!0),s),Mr(i=0|t[kt]),(s=Hs(t,i,n))instanceof Di?(2&s.L)!=0?((s=s.X()).push(e),$e(t,i,n,s)):s.Na(e):Array.isArray(s)?(2&(0|s[kt])&&$e(t,i,n,s=N_(s)),s.push(e)):$e(t,i,n,[e]),!0)}),(function(e,t,n,i,s){if(t instanceof Di)t.forEach(((r,o)=>{Cu(e,n,gr([o,r],i,!1),s)}));else if(Array.isArray(t))for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)&&Cu(e,n,gr(o,i,!1),s)}}));function ex(e,t,n){if(t=(function(i){if(i==null)return i;let s=typeof i;if(s==="bigint")return String(Gp(64,i));if(Ou(i)){if(s==="string")return Wp(i);if(s==="number")return Hp(i)}})(t),t!=null&&(typeof t=="string"&&M1(t),t!=null))switch(_i(e,n,0),typeof t){case"number":e=e.g,qo(t),Vo(e,Pe,Ke);break;case"bigint":n=BigInt.asUintN(64,t),n=new vp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Vo(e.g,n.h,n.g);break;default:n=M1(t),Vo(e.g,n.h,n.g)}}function nx(e,t,n){(t=ea(t))!=null&&t!=null&&(_i(e,n,0),Gu(e.g,t))}function ix(e,t,n){(t=A_(t))!=null&&(_i(e,n,0),e.g.g.push(t?1:0))}function sx(e,t,n){(t=Yo(t))!=null&&Hu(e,n,g_(t))}function rx(e,t,n,i,s){Cu(e,n,j_(t,i),s)}function ox(e,t,n){(t=t==null||typeof t=="string"||Nc(t)||t instanceof zs?t:void 0)!=null&&Hu(e,n,tm(t).buffer)}function ax(e,t,n){return(e.h===5||e.h===2)&&(t=ia(t,0|t[kt],n,!1,!1),e.h==2?Vu(e,_p,t):t.push(_p(e.g)),!0)}var Fs=Kn((function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=gp(i);let s=gp(i);i=2*(s>>31)+1;let r=s>>>20&2047;return e=4294967296*(1048575&s)+e,jn(t,n,r==2047?e?NaN:i*(1/0):r==0?5e-324*i*e:i*Math.pow(2,r-1075)*(e+4503599627370496)),!0}),(function(e,t,n){(t=br(t))!=null&&(_i(e,n,1),e=e.g,(n=Su||(Su=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),Pe=n.getUint32(0,!0),Ke=n.getUint32(4,!0),Lc(e,Pe),Lc(e,Ke))}),Ki()),pn=Kn((function(e,t,n){return e.h===5&&(jn(t,n,_p(e.g)),!0)}),(function(e,t,n){(t=br(t))!=null&&(_i(e,n,5),e=e.g,Bp(t),Lc(e,Pe))}),lm),bE=aa(ax,(function(e,t,n){if((t=oa(br,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(_i(i,s,5),i=i.g,Bp(r),Lc(i,Pe))}}),lm),pm=aa(ax,(function(e,t,n){if((t=oa(br,t))!=null&&t.length){_i(e,n,2),sa(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Bp(t[i]),Lc(n,Pe)}}),lm),vr=Kn((function(e,t,n){return e.h===0&&(jn(t,n,em(e.g,kp)),!0)}),ex,Y_),ip=Kn((function(e,t,n){return e.h===0&&(jn(t,n,(e=em(e.g,kp))===0?void 0:e),!0)}),ex,Y_),SE=Kn((function(e,t,n){return e.h===0&&(jn(t,n,em(e.g,zp)),!0)}),(function(e,t,n){if((t=cE(t))!=null&&(typeof t=="string"&&v1(t),t!=null))switch(_i(e,n,0),typeof t){case"number":e=e.g,qo(t),Vo(e,Pe,Ke);break;case"bigint":n=BigInt.asUintN(64,t),n=new xp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Vo(e.g,n.h,n.g);break;default:n=v1(t),Vo(e.g,n.h,n.g)}}),Ki()),je=Kn((function(e,t,n){return e.h===0&&(jn(t,n,xr(e.g)),!0)}),nx,cm),$u=aa((function(e,t,n){return(e.h===0||e.h===2)&&(t=ia(t,0|t[kt],n,!1,!1),e.h==2?Vu(e,xr,t):t.push(xr(e.g)),!0)}),(function(e,t,n){if((t=oa(ea,t))!=null&&t.length){n=sm(e,n);for(let i=0;i<t.length;i++)Gu(e.g,t[i]);rm(e,n)}}),cm),Bo=Kn((function(e,t,n){return e.h===0&&(jn(t,n,(e=xr(e.g))===0?void 0:e),!0)}),nx,cm),He=Kn((function(e,t,n){return e.h===0&&(jn(t,n,nm(e.g)),!0)}),ix,X_),Go=Kn((function(e,t,n){return e.h===0&&(jn(t,n,(e=nm(e.g))===!1?void 0:e),!0)}),ix,X_),Gn=aa((function(e,t,n){return e.h===2&&(e=im(e),ia(t,0|t[kt],n,!1).push(e),!0)}),(function(e,t,n){if((t=oa(Yo,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&Hu(i,s,g_(r))}}),am),mr=Kn((function(e,t,n){return e.h===2&&(jn(t,n,(e=im(e))===""?void 0:e),!0)}),sx,am),be=Kn((function(e,t,n){return e.h===2&&(jn(t,n,im(e)),!0)}),sx,am),yn=(function(e,t,n=om){return new ra(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=gr(void 0,i,!0),ia(t,0|t[kt],n,!0).push(i),Oc(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t))for(let r=0;r<t.length;r++)rx(e,t[r],n,i,s)})),Se=Wu((function(e,t,n,i,s,r){return e.h===2&&(U_(t,0|t[kt],r,n),Oc(e,t=jp(t,i,n),s),!0)}),rx),cx=Kn((function(e,t,n){return e.h===2&&(jn(t,n,H_(e)),!0)}),ox,$_),EE=aa((function(e,t,n){return(e.h===0||e.h===2)&&(t=ia(t,0|t[kt],n,!1,!1),e.h==2?Vu(e,Gs,t):t.push(Gs(e.g)),!0)}),(function(e,t,n){if((t=oa(C_,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(_i(i,s,0),sa(i.g,r))}}),q_),TE=Kn((function(e,t,n){return e.h===0&&(jn(t,n,(e=Gs(e.g))===0?void 0:e),!0)}),(function(e,t,n){(t=C_(t))!=null&&t!=null&&(_i(e,n,0),sa(e.g,t))}),q_),Ui=Kn((function(e,t,n){return e.h===0&&(jn(t,n,xr(e.g)),!0)}),(function(e,t,n){(t=ea(t))!=null&&(t=parseInt(t,10),_i(e,n,0),Gu(e.g,t))}),Z_),yp=class{constructor(t,n){this.h=t,this.g=n,this.l=ge,this.m=Ht,this.defaultValue=void 0}};function ji(e,t){return new yp(e,t)}function Sr(e,t){return(n,i)=>{if(hu.length){let r=hu.pop();r.o(i),np(r.g,n,i),n=r}else n=new class{constructor(r,o){if(x1.length){let a=x1.pop();np(a,r,o),r=a}else r=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,np(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ba=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({fa:r=!1}={}){this.fa=r}}(n,i);try{let r=new e,o=r.u;fm(t)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,hu.length<100&&hu.push(n)}return s}}function Zu(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};tx(this.u,t,Gr(Xu,qu,Yu,e)),Zo(t,t.g.end());let n=new Uint8Array(t.h),i=t.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var w1=class extends Pt{constructor(e){super(e)}},A1=[0,mr,Kn((function(e,t,n){return e.h===2&&(jn(t,n,(e=H_(e))===Vr()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Pt){let i=t.Ra;return void(i&&(t=i(t),t!=null&&Hu(e,n,tm(t).buffer)))}if(Array.isArray(t))return}ox(e,t,n)}),$_)],sp,C1=globalThis.trustedTypes;function R1(e){sp===void 0&&(sp=(function(){let n=null;if(!C1)return n;try{let i=s=>s;n=C1.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var t=sp;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function wE(e,...t){if(t.length===0)return R1(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return R1(n)}var lx=[0,je,Ui,He,-1,$u,Ui,-1],AE=class extends Pt{constructor(e){super(e)}},hx=[0,He,be,He,Ui,-1,aa((function(e,t,n){return(e.h===0||e.h===2)&&(t=ia(t,0|t[kt],n,!1,!1),e.h==2?Vu(e,gE,t):t.push(xr(e.g)),!0)}),(function(e,t,n){if((t=oa(ea,t))!=null&&t.length){n=sm(e,n);for(let i=0;i<t.length;i++)Gu(e.g,t[i]);rm(e,n)}}),Z_),be,-1,[0,He,-1],Ui,He,-1],ux=[0,be,-2],I1=class extends Pt{constructor(e){super(e)}},dx=[0],fx=[0,je,He,1,He,-3],gi=class extends Pt{constructor(e){super(e,2)}},mn={};mn[336783863]=[0,be,He,-1,je,[0,[1,2,3,4,5,6,7,8],Se,dx,Se,hx,Se,ux,Se,fx,Se,lx,Se,[0,be,-2],Se,[0,be,Ui],Se,[0,Ui,be]],[0,be],He,[0,[1,3],[2,4],Se,[0,$u],-1,Se,[0,Gn],-1,yn,[0,be,-1]],be];var P1=[0,ip,-1,Go,-3,ip,$u,mr,Bo,ip,-1,Go,Bo,Go,-2,mr];function xi(e,t){mp(e,2,na(t),"")}function Ue(e,t){ku(e,3,t)}function pe(e,t){ku(e,4,t)}var Jn=class extends Pt{constructor(e){super(e,500)}o(e){return Ht(this,0,7,e)}},Ac=[-1,{}],L1=[0,be,1,Ac],D1=[0,be,Gn,Ac];function vi(e,t){wu(e,1,Jn,t)}function ze(e,t){ku(e,10,t)}function _e(e,t){ku(e,15,t)}var oi=class extends Pt{constructor(e){super(e,500)}o(e){return Ht(this,0,1001,e)}},px=[-500,yn,[-500,mr,-1,Gn,-3,[-2,mn,He],yn,A1,Bo,-1,L1,D1,yn,[0,mr,Go],mr,P1,Bo,Gn,987,Gn],4,yn,[-500,be,-1,[-1,{}],998,be],yn,[-500,be,Gn,-1,[-2,{},He],997,Gn,-1],Bo,yn,[-500,be,Gn,Ac,998,Gn],Gn,Bo,L1,D1,yn,[0,mr,-1,Ac],Gn,-2,P1,mr,-1,Go,[0,Go,TE],978,Ac,yn,A1];oi.prototype.g=Zu(px);var CE=Sr(oi,px),RE=class extends Pt{constructor(e){super(e)}},mx=class extends Pt{constructor(e){super(e)}g(){return Vs(this,RE,1)}},gx=[0,yn,[0,je,pn,be,-1]],Ju=Sr(mx,gx),IE=class extends Pt{constructor(e){super(e)}},PE=class extends Pt{constructor(e){super(e)}},rp=class extends Pt{constructor(e){super(e)}h(){return ge(this,IE,2)}g(){return Vs(this,PE,5)}},_x=Sr(class extends Pt{constructor(e){super(e)}},[0,Gn,$u,pm,[0,Ui,[0,je,-3],[0,pn,-3],[0,je,-1,[0,yn,[0,je,-2]]],yn,[0,pn,-1,be,pn]],be,-1,vr,yn,[0,je,pn],Gn,vr]),xx=class extends Pt{constructor(e){super(e)}},Ho=Sr(class extends Pt{constructor(e){super(e)}},[0,yn,[0,pn,-4]]),vx=class extends Pt{constructor(e){super(e)}},Bc=Sr(class extends Pt{constructor(e){super(e)}},[0,yn,[0,pn,-4]]),LE=class extends Pt{constructor(e){super(e)}},DE=[0,je,-1,pm,Ui],yx=class extends Pt{constructor(e){super(e)}};yx.prototype.g=Zu([0,pn,-4,vr]);var NE=class extends Pt{constructor(e){super(e)}},UE=Sr(class extends Pt{constructor(e){super(e)}},[0,yn,[0,1,je,be,gx],vr]),N1=class extends Pt{constructor(e){super(e)}},FE=class extends Pt{constructor(e){super(e)}oa(){let e=D_(this);return e==null?Vr():e}},OE=class extends Pt{constructor(e){super(e)}},Mx=[1,2],BE=Sr(class extends Pt{constructor(e){super(e)}},[0,yn,[0,Mx,Se,[0,pm],Se,[0,cx],je,be],vr]),mm=class extends Pt{constructor(e){super(e)}},bx=[0,be,je,pn,Gn,-1],U1=class extends Pt{constructor(e){super(e)}},zE=[0,He,-1],F1=class extends Pt{constructor(e){super(e)}},gu=[1,2,3,4,5],Ru=class extends Pt{constructor(e){super(e)}g(){return D_(this)!=null}h(){return Ni(this,2)!=null}},We=class extends Pt{constructor(e){super(e)}g(){var e;return(e=A_($o(this,2)))!=null?e:!1}},Sx=[0,cx,be,[0,je,vr,-1],[0,SE,vr]],rn=[0,Sx,He,[0,gu,Se,fx,Se,hx,Se,lx,Se,dx,Se,ux],Ui],Ku=class extends Pt{constructor(e){super(e)}},gm=[0,rn,pn,-1,je],kE=ji(502141897,Ku);mn[502141897]=gm;var VE=Sr(class extends Pt{constructor(e){super(e)}},[0,[0,Ui,-1,bE,EE],DE]),Ex=class extends Pt{constructor(e){super(e)}},Tx=class extends Pt{constructor(e){super(e)}},_m=[0,rn,pn,[0,rn],He],wx=[0,rn,gm,_m,pn,[0,[0,Sx]]],GE=ji(508968150,Tx);mn[508968150]=wx,mn[508968149]=_m;var Ax=class extends Pt{constructor(e){super(e)}},HE=ji(513916220,Ax);mn[513916220]=[0,rn,wx,je];var Uo=class extends Pt{constructor(e){super(e)}h(){return ge(this,mm,2)}g(){Ne(this,2)}},Cx=[0,rn,bx];mn[478825465]=Cx;var WE=class extends Pt{constructor(e){super(e)}},Rx=class extends Pt{constructor(e){super(e)}},xm=class extends Pt{constructor(e){super(e)}},vm=class extends Pt{constructor(e){super(e)}},Ix=class extends Pt{constructor(e){super(e)}},O1=[0,rn,[0,rn],Cx,-1],Px=[0,rn,pn,je],ym=[0,rn,pn],Lx=[0,rn,Px,ym,pn],XE=ji(479097054,Ix);mn[479097054]=[0,rn,Lx,O1],mn[463370452]=O1,mn[464864288]=Px;var qE=ji(462713202,vm);mn[462713202]=Lx,mn[474472470]=ym;var YE=class extends Pt{constructor(e){super(e)}},Dx=class extends Pt{constructor(e){super(e)}},Nx=class extends Pt{constructor(e){super(e)}},Ux=class extends Pt{constructor(e){super(e)}},Mm=[0,rn,pn,-1,je],Mp=[0,rn,pn,He];Ux.prototype.g=Zu([0,rn,ym,[0,rn],gm,_m,Mm,Mp]);var Fx=class extends Pt{constructor(e){super(e)}},$E=ji(456383383,Fx);mn[456383383]=[0,rn,bx];var Ox=class extends Pt{constructor(e){super(e)}},ZE=ji(476348187,Ox);mn[476348187]=[0,rn,zE];var Bx=class extends Pt{constructor(e){super(e)}},B1=class extends Pt{constructor(e){super(e)}},zx=[0,Ui,-1],JE=ji(458105876,class extends Pt{constructor(e){super(e)}g(){var e=this.u;let t=0|e[kt],n=2&t;return e=(function(i,s,r){var o=B1;let a=2&s,c=!1;if(r==null){if(a)return _1();r=[]}else if(r.constructor===Di){if((2&r.L)==0||a)return r;r=r.X()}else Array.isArray(r)?c=!!(2&(0|r[kt])):r=[];if(a){if(!r.length)return _1();c||(c=!0,ta(r))}else c&&(c=!1,r=N_(r));return c||(64&(0|r[kt])?r[kt]&=-33:32&s&&Lu(r,32)),$e(i,s,2,o=new Di(r,o,lE,void 0)),o})(e,t,Hs(e,t,2)),!n&&B1&&(e.ra=!0),e}});mn[458105876]=[0,zx,ME,[!0,vr,[0,be,-1,Gn]]];var bm=class extends Pt{constructor(e){super(e)}},kx=ji(458105758,bm);mn[458105758]=[0,rn,be,zx];var Vx=class extends Pt{constructor(e){super(e)}},KE=ji(443442058,Vx);mn[443442058]=[0,rn,be,je,pn,Gn,-1,He,pn],mn[514774813]=Mm;var Gx=class extends Pt{constructor(e){super(e)}},jE=ji(516587230,Gx);function bp(e,t){return t=t?t.clone():new mm,e.displayNamesLocale!==void 0?Ne(t,1,na(e.displayNamesLocale)):e.displayNamesLocale===void 0&&Ne(t,1),e.maxResults!==void 0?Ms(t,2,e.maxResults):"maxResults"in e&&Ne(t,2),e.scoreThreshold!==void 0?Ut(t,3,e.scoreThreshold):"scoreThreshold"in e&&Ne(t,3),e.categoryAllowlist!==void 0?Au(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&Ne(t,4),e.categoryDenylist!==void 0?Au(t,5,e.categoryDenylist):"categoryDenylist"in e&&Ne(t,5),t}function Sm(e,t=-1,n=""){return{categories:e.map((i=>{var s,r,o,a,c,l,h;return{index:(r=(s=Li(i,1))!=null?s:0)!=null?r:-1,score:(o=sn(i,2))!=null?o:0,categoryName:(c=(a=Ni(i,3))!=null?a:"")!=null?c:"",displayName:(h=(l=Ni(i,4))!=null?l:"")!=null?h:""}})),headIndex:t,headName:n}}function Hx(e){var o,a,c,l,h,d,u,f,g,y,m,p,M;var t=Br(e,3,br,Or()),n=Br(e,2,ea,Or()),i=Br(e,1,Yo,Or()),s=Br(e,9,Yo,Or());let r={categories:[],keypoints:[]};for(let w=0;w<t.length;w++)r.categories.push({score:t[w],index:(o=n[w])!=null?o:-1,categoryName:(a=i[w])!=null?a:"",displayName:(c=s[w])!=null?c:""});if((t=(l=ge(e,rp,4))==null?void 0:l.h())&&(r.boundingBox={originX:(h=Li(t,1))!=null?h:0,originY:(d=Li(t,2))!=null?d:0,width:(u=Li(t,3))!=null?u:0,height:(f=Li(t,4))!=null?f:0,angle:0}),(g=ge(e,rp,4))==null?void 0:g.g().length)for(let w of ge(e,rp,4).g())r.keypoints.push({x:(y=pu(w,1))!=null?y:0,y:(m=pu(w,2))!=null?m:0,score:(p=pu(w,4))!=null?p:0,label:(M=Ni(w,3))!=null?M:""});return r}function ju(e){var n,i,s,r;let t=[];for(let o of Vs(e,vx,1))t.push({x:(n=sn(o,1))!=null?n:0,y:(i=sn(o,2))!=null?i:0,z:(s=sn(o,3))!=null?s:0,visibility:(r=sn(o,4))!=null?r:0});return t}function Cc(e){var n,i,s,r;let t=[];for(let o of Vs(e,xx,1))t.push({x:(n=sn(o,1))!=null?n:0,y:(i=sn(o,2))!=null?i:0,z:(s=sn(o,3))!=null?s:0,visibility:(r=sn(o,4))!=null?r:0});return t}function z1(e){return Array.from(e,(t=>t>127?t-256:t))}function k1(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var uu;mn[516587230]=[0,rn,Mm,Mp,pn],mn[518928384]=Mp;var QE=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Wx(){if(uu===void 0)try{await WebAssembly.instantiate(QE),uu=!0}catch{uu=!1}return uu}async function vc(e,t=wE``){let n=await Wx()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Fo=class{};function Xx(){var e=navigator;return typeof OffscreenCanvas!="undefined"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function V1(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}importScripts(e.toString())}function qx(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function zt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function G1(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=qx(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function H1(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function _s(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function fr(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}Fo.forVisionTasks=function(e){return vc("vision",e)},Fo.forTextTasks=function(e){return vc("text",e)},Fo.forGenAiExperimentalTasks=function(e){return vc("genai_experimental",e)},Fo.forGenAiTasks=function(e){return vc("genai",e)},Fo.forAudioTasks=function(e){return vc("audio",e)},Fo.isSimdSupported=function(){return Wx()};async function tT(e,t,n,i){return e=await(async(s,r,o,a,c)=>{if(r&&await V1(r),!self.ModuleFactory||o&&(await V1(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function op(e,t){let n=ge(e.baseOptions,Ru,1)||new Ru;typeof t=="string"?(Ne(n,2,na(t)),Ne(n,1)):t instanceof Uint8Array&&(Ne(n,1,Fp(t,!1)),Ne(n,2)),Ht(e.baseOptions,0,1,n)}function W1(e){try{let t=e.G.length;if(t===1)throw Error(e.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.G.map((n=>n.message)).join(", "))}finally{e.G=[]}}function At(e,t){e.B=Math.max(e.B,t)}function Qu(e,t){e.A=new Jn,xi(e.A,"PassThroughCalculator"),Ue(e.A,"free_memory"),pe(e.A,"free_memory_unused_out"),ze(t,"free_memory"),vi(t,e.A)}function Jo(e,t){Ue(e.A,t),pe(e.A,t+"_unused_out")}function td(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var _u=class{constructor(e){this.g=e,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,s,r,o,a;if(t){let c=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=ge(this.baseOptions,Ru,1))!=null&&s.g()||(r=ge(this.baseOptions,Ru,1))!=null&&r.h()||(o=e.baseOptions)!=null&&o.modelAssetBuffer||(a=e.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(l,h){let d=ge(l.baseOptions,F1,3);if(!d){var u=d=new F1,f=new I1;wc(u,4,gu,f)}"delegate"in h&&(h.delegate==="GPU"?(h=d,u=new AE,wc(h,2,gu,u)):(h=d,u=new I1,wc(h,4,gu,u))),Ht(l.baseOptions,0,3,d)})(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then((l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)})).then((l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),op(this,"/model.dat"),this.m(),this.I()}));if(c.modelAssetBuffer instanceof Uint8Array)op(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return(async function(l){let h=[];for(var d=0;;){let{done:u,value:f}=await l.read();if(u)break;h.push(f),d+=f.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(d),d=0;for(let u of h)l.set(u,d),d+=u.length;return l})(c.modelAssetBuffer).then((l=>{op(this,l),this.m(),this.I()}))}return this.m(),this.I(),Promise.resolve()}I(){}da(){let e;if(this.g.da((t=>{e=CE(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.La(),this.g.setGraph(e,t),this.A=void 0,W1(this)}finishProcessing(){this.g.finishProcessing(),W1(this)}close(){this.A=void 0,this.g.closeGraph()}};function Zn(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}_u.prototype.close=_u.prototype.close,(function(e,t){e=e.split(".");var n,i=kr;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t})("TaskRunner",_u);var Sp=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function X1(e,t,n){let i=e.g;if(n=Zn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function q1(e,t){let n=e.g,i=Zn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=Zn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=Zn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.I),n.vertexAttribPointer(e.I,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Sp(n,i,s,r)}function Em(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function zc(e,t,n,i){return Em(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=q1(e,!0)),n=e.s):(e.v||(e.v=q1(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function yr(e,t,n){return Em(e,t),e=Zn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n!=null?n:t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n!=null?n:t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function ed(e,t,n){Em(e,t),e.A||(e.A=Zn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function Tm(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var ca=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=Zn(e.createProgram(),"Failed to create WebGL program"),this.aa=X1(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.Z=X1(this,this.G(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.I=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.aa),e.deleteShader(this.Z)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},eT=class extends ca{G(){return`
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
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.B=yr(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=yr(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.K=Zn(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.T=Zn(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.J=Zn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.J,0),e.uniform1i(this.K,1),e.uniform1i(this.T,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},nT=class extends ca{G(){return`
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
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=yr(this,e),e.activeTexture(e.TEXTURE2),this.B=yr(this,e)}m(){super.m();let e=this.g;this.J=Zn(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.K=Zn(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.H=Zn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.H,0),e.uniform1i(this.J,1),e.uniform1i(this.K,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Os(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture!="undefined"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Ep(e){var t=Os(e,1);if(!t){if(t=Os(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);let i=Ko(e);var n=wm(e);if(ed(n,i,Yx(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function Yx(e){let t=Os(e,2);if(!t){let n=Ko(e);t=Zx(e);let i=Ep(e),s=$x(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),Tp(e)}return t}function Ko(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Zn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function $x(e){if(e=Ko(e),!du)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))du=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");du=e.R16F}return du}function wm(e){return e.l||(e.l=new ca),e.l}function Zx(e){let t=Ko(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Os(e,2);return n||(n=yr(wm(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Tp(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var du,vn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Y1===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Os(this,0)}ja(){return!!Os(this,1)}P(){return!!Os(this,2)}ia(){return(t=Os(e=this,0))||(t=Ep(e),t=new Uint8Array(t.map((n=>255*n))),e.g.push(t)),t;var e,t}ha(){return Ep(this)}M(){return Yx(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=Ko(this),s=wm(this);i.activeTexture(i.TEXTURE1),n=yr(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=$x(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),ed(s,i,n),zc(s,i,!1,(()=>{Zx(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Tp(this)})),Tm(s),Tp(this)}}e.push(n)}return new vn(e,this.m,this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ko(this).deleteTexture(Os(this,2)),Y1=-1}};vn.prototype.close=vn.prototype.close,vn.prototype.clone=vn.prototype.clone,vn.prototype.getAsWebGLTexture=vn.prototype.M,vn.prototype.getAsFloat32Array=vn.prototype.ha,vn.prototype.getAsUint8Array=vn.prototype.ia,vn.prototype.hasWebGLTexture=vn.prototype.P,vn.prototype.hasFloat32Array=vn.prototype.ja,vn.prototype.hasUint8Array=vn.prototype.Fa;var Y1=250,iT={color:"white",lineWidth:4,radius:6};function ap(e){return{...iT,fillColor:(e=e||{}).color,...e}}function Us(e,t){return e instanceof Function?e(t):e}function $1(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function yc(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function Dc(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function Z1(e,t,n){var i;if(t.P())n(t.M());else{let s=t.ja()?t.ha():t.ia();e.m=(i=e.m)!=null?i:new ca;let r=Dc(e);n((e=new vn([s],t.m,!1,r.canvas,e.m,t.width,t.height)).M()),e.close()}}function J1(e,t,n,i){let s=(function(a){return a.g||(a.g=new eT),a.g})(e),r=Dc(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;zc(s,r,!0,(()=>{(function(c,l,h,d){let u=c.g;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,l),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,c.B),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),c.H&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[m,p]of f){f=m;let M=p;var y=g.next();if(y.done)return!1;let[w,v]=y.value;if(y=v,f!==w||M[0]!==y[0]||M[1]!==y[1]||M[2]!==y[2]||M[3]!==y[3])return!1}return!!g.next().done})(c.H,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.j);else{c.H=d;let f=Array(1024).fill(0);d.forEach(((g,y)=>{if(g.length!==4)throw Error(`Color at index ${y} is not a four-channel value.`);f[4*y]=g[0],f[4*y+1]=g[1],f[4*y+2]=g[2],f[4*y+3]=g[3]})),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.j),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(f))}})(s,t,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)}))}function K1(e,t,n,i){let s=Dc(e),r=(function(c){return c.h||(c.h=new nT),c.h})(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;zc(r,s,!0,(()=>{var c=r.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.j),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.B),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)}))}var ii=class{constructor(e,t){e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}ya(e,t){if(e){var n=yc(this);t=ap(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=Us(t.fillColor,{index:s,from:r}),n.strokeStyle=Us(t.color,{index:s,from:r}),n.lineWidth=Us(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,Us(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}xa(e,t,n){if(e&&t){var i=yc(this);n=ap(n),i.save();var s=i.canvas,r=0;for(let o of t){i.beginPath(),t=e[o.start];let a=e[o.end];t&&a&&(i.strokeStyle=Us(n.color,{index:r,from:t,to:a}),i.lineWidth=Us(n.lineWidth,{index:r,from:t,to:a}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}ua(e,t){let n=yc(this);t=ap(t),n.save(),n.beginPath(),n.lineWidth=Us(t.lineWidth,{}),n.strokeStyle=Us(t.color,{}),n.fillStyle=Us(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}va(e,t,n=[0,0,0,255]){this.l?(function(i,s,r,o){let a=Dc(i);Z1(i,s,(c=>{J1(i,c,r,o),(c=yc(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,n,t):J1(this,e.M(),n,t)}wa(e,t,n){this.l?(function(i,s,r,o){let a=Dc(i);Z1(i,s,(c=>{K1(i,c,r,o),(c=yc(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,t,n):K1(this,e.M(),t,n)}close(){var e,t,n;(e=this.g)==null||e.close(),this.g=void 0,(t=this.h)==null||t.close(),this.h=void 0,(n=this.m)==null||n.close(),this.m=void 0}};function ys(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture!="undefined"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Jx(e){var t=ys(e,0);if(!t){t=jo(e);let n=nd(e),i=new Uint8Array(e.width*e.height*4);ed(n,t,xu(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),Tm(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function xu(e){let t=ys(e,2);if(!t){let n=jo(e);t=vu(e);let i=ys(e,1)||Jx(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Ec(e)}return t}function jo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Zn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function nd(e){return e.l||(e.l=new ca),e.l}function vu(e){let t=jo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=ys(e,2);return n||(n=yr(nd(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Ec(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function j1(e){let t=jo(e);return zc(nd(e),t,!0,(()=>(function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}ii.prototype.close=ii.prototype.close,ii.prototype.drawConfidenceMask=ii.prototype.wa,ii.prototype.drawCategoryMask=ii.prototype.va,ii.prototype.drawBoundingBox=ii.prototype.ua,ii.prototype.drawConnectors=ii.prototype.xa,ii.prototype.drawLandmarks=ii.prototype.ya,ii.lerp=function(e,t,n,i,s){return $1(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},ii.clamp=$1;var An=class{constructor(e,t,n,i,s,r,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--Q1===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!ys(this,0)}ka(){return!!ys(this,1)}P(){return!!ys(this,2)}Ca(){return Jx(this)}Ba(){var e=ys(this,1);return e||(xu(this),vu(this),e=j1(this),Ec(this),this.g.push(e),this.j=!0),e}M(){return xu(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=jo(this),s=nd(this);i.activeTexture(i.TEXTURE1),n=yr(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),ed(s,i,n),zc(s,i,!1,(()=>{vu(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ec(this)})),Tm(s),Ec(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);xu(this),vu(this),n=j1(this),Ec(this)}e.push(n)}return new An(e,this.ka(),this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ys(this,1).close(),this.m&&jo(this).deleteTexture(ys(this,2)),Q1=-1}};An.prototype.close=An.prototype.close,An.prototype.clone=An.prototype.clone,An.prototype.getAsWebGLTexture=An.prototype.M,An.prototype.getAsImageBitmap=An.prototype.Ba,An.prototype.getAsImageData=An.prototype.Ca,An.prototype.hasWebGLTexture=An.prototype.P,An.prototype.hasImageBitmap=An.prototype.ka,An.prototype.hasImageData=An.prototype.Ea;var Q1=250;function Qi(...e){return e.map((([t,n])=>({start:t,end:n})))}var sT=(function(e){return class extends e{La(){this.i._registerModelResourcesGraphService()}}})((t_=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:Xx()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),zt(this,i||"input_audio",(r=>{zt(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,e,t!=null?t:0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}da(e){_s(this,"__graph_config__",(t=>{e(t)})),zt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){let r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),zt(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)}))}addGpuBufferToStream(e,t,n){zt(this,t,(i=>{let[s,r]=G1(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){zt(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){zt(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){zt(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){zt(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){zt(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){zt(this,t,(i=>{zt(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){zt(this,t,(i=>{H1(this,Object.keys(e),(s=>{H1(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){zt(this,n,(s=>{zt(this,t,(r=>{let o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){zt(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){zt(this,t,(i=>{let s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)zt(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){zt(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){zt(this,t,(n=>{zt(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){zt(this,n,(i=>{zt(this,t,(s=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){zt(this,t,(n=>{let i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)zt(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){_s(this,e,t),zt(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){fr(this,e,t),zt(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){_s(this,e,t),zt(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){fr(this,e,t),zt(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){_s(this,e,t),zt(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){fr(this,e,t),zt(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){_s(this,e,t),zt(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){fr(this,e,t),zt(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){_s(this,e,t),zt(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){fr(this,e,t),zt(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){_s(this,e,t),zt(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){fr(this,e,t),zt(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){_s(this,e,t),zt(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){fr(this,e,t),zt(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),_s(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),zt(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends t_{get ea(){return this.i}qa(e,t,n){zt(this,t,(i=>{let[s,r]=G1(this,e,i);this.ea._addBoundTextureAsImageToStream(i,s,r,n)}))}U(e,t){_s(this,e,t),zt(this,e,(n=>{this.ea._attachImageListener(n)}))}ca(e,t){fr(this,e,t),zt(this,e,(n=>{this.ea._attachImageVectorListener(n)}))}})),t_,Fi=class extends sT{};async function fe(e,t,n){var i;return(async function(s,r,o,a){return tT(s,r,o,a)})(e,(i=n.canvas)!=null?i:Xx()?void 0:document.createElement("canvas"),t,n)}function Kx(e,t,n,i){if(e.T){let r=new yx;if(n!=null&&n.regionOfInterest){if(!e.pa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ut(r,1,(s.left+s.right)/2),Ut(r,2,(s.top+s.bottom)/2),Ut(r,4,s.right-s.left),Ut(r,3,s.bottom-s.top)}else Ut(r,1,.5),Ut(r,2,.5),Ut(r,4,1),Ut(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ut(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){let[o,a]=qx(t);n=sn(r,3)*a/o,s=sn(r,4)*o/a,Ut(r,4,n),Ut(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.T,i)}e.g.qa(t,e.aa,i!=null?i:performance.now()),e.finishProcessing()}function Oi(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Kx(e,t,n,e.B+1)}function bs(e,t,n,i){var s;if(!((s=e.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Kx(e,t,n,i)}function Qo(e,t,n,i){var s=t.data;let r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new vn([s],n,!1,e.g.i.canvas,e.O,r,t),i?e.clone():e}var ri=class extends _u{constructor(e,t,n,i){super(e),this.g=e,this.aa=t,this.T=n,this.pa=i,this.O=new ca}l(e,t=!0){if("runningMode"in e&&Pc(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.O.close(),super.close()}};ri.prototype.close=ri.prototype.close;var Ci=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Ht(e=this.h=new Ku,0,1,t=new We),Ut(this.h,2,.5),Ut(this.h,3,.3)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t,n;return"minDetectionConfidence"in e&&Ut(this.h,2,(t=e.minDetectionConfidence)!=null?t:.5),"minSuppressionThreshold"in e&&Ut(this.h,3,(n=e.minSuppressionThreshold)!=null?n:.3),this.l(e)}D(e,t){return this.j={detections:[]},Oi(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},bs(this,e,n,t),this.j}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect_in"),_e(e,"detections");let t=new gi;Ji(t,kE,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect_in"),pe(n,"DETECTIONS:detections"),n.o(t),vi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=_x(r),this.j.detections.push(Hx(i));At(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ci.prototype.detectForVideo=Ci.prototype.F,Ci.prototype.detect=Ci.prototype.D,Ci.prototype.setOptions=Ci.prototype.o,Ci.createFromModelPath=async function(e,t){return fe(Ci,e,{baseOptions:{modelAssetPath:t}})},Ci.createFromModelBuffer=function(e,t){return fe(Ci,e,{baseOptions:{modelAssetBuffer:t}})},Ci.createFromOptions=function(e,t){return fe(Ci,e,t)};var Am=Qi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Cm=Qi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Rm=Qi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),jx=Qi([474,475],[475,476],[476,477],[477,474]),Im=Qi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Pm=Qi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Qx=Qi([469,470],[470,471],[471,472],[472,469]),Lm=Qi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),tv=[...Am,...Cm,...Rm,...Im,...Pm,...Lm],ev=Qi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function e_(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Je=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ht(e=this.h=new Tx,0,1,t=new We),this.v=new Ex,Ht(this.h,0,3,this.v),this.s=new Ku,Ht(this.h,0,2,this.s),Ms(this.s,4,1),Ut(this.s,2,.5),Ut(this.v,2,.5),Ut(this.h,4,.5)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t,n,i,s;return"numFaces"in e&&Ms(this.s,4,(t=e.numFaces)!=null?t:1),"minFaceDetectionConfidence"in e&&Ut(this.s,2,(n=e.minFaceDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ut(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minFacePresenceConfidence"in e&&Ut(this.v,2,(s=e.minFacePresenceConfidence)!=null?s:.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return e_(this),Oi(this,e,t),this.j}F(e,t,n){return e_(this),bs(this,e,n,t),this.j}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect"),_e(e,"face_landmarks");let t=new gi;Ji(t,GE,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),vi(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(let r of i)i=Bc(r),this.j.faceLandmarks.push(ju(i));At(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{At(this,i)})),this.outputFaceBlendshapes&&(_e(e,"blendshapes"),pe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{var r;if(this.outputFaceBlendshapes)for(let o of i)i=Ju(o),this.j.faceBlendshapes.push(Sm((r=i.g())!=null?r:[]));At(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{At(this,i)}))),this.outputFacialTransformationMatrixes&&(_e(e,"face_geometry"),pe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{var r,o,a,c,l;if(this.outputFacialTransformationMatrixes)for(let h of i)(i=ge(VE(h),LE,2))&&this.j.facialTransformationMatrixes.push({rows:(o=(r=Li(i,1))!=null?r:0)!=null?o:0,columns:(c=(a=Li(i,2))!=null?a:0)!=null?c:0,data:(l=Br(i,3,br,Or()).slice())!=null?l:[]});At(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{At(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Je.prototype.detectForVideo=Je.prototype.F,Je.prototype.detect=Je.prototype.D,Je.prototype.setOptions=Je.prototype.o,Je.createFromModelPath=function(e,t){return fe(Je,e,{baseOptions:{modelAssetPath:t}})},Je.createFromModelBuffer=function(e,t){return fe(Je,e,{baseOptions:{modelAssetBuffer:t}})},Je.createFromOptions=function(e,t){return fe(Je,e,t)},Je.FACE_LANDMARKS_LIPS=Am,Je.FACE_LANDMARKS_LEFT_EYE=Cm,Je.FACE_LANDMARKS_LEFT_EYEBROW=Rm,Je.FACE_LANDMARKS_LEFT_IRIS=jx,Je.FACE_LANDMARKS_RIGHT_EYE=Im,Je.FACE_LANDMARKS_RIGHT_EYEBROW=Pm,Je.FACE_LANDMARKS_RIGHT_IRIS=Qx,Je.FACE_LANDMARKS_FACE_OVAL=Lm,Je.FACE_LANDMARKS_CONTOURS=tv,Je.FACE_LANDMARKS_TESSELATION=ev;var xs=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect",!0),Ht(e=this.j=new Ax,0,1,t=new We)}get baseOptions(){return ge(this.j,We,1)}set baseOptions(e){Ht(this.j,0,1,e)}o(e){return super.l(e)}Oa(e,t,n){let i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,Oi(this,e,i!=null?i:{}),!this.h)return this.s}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect"),_e(e,"stylized_image");let t=new gi;Ji(t,HE,this.j);let n=new Jn;xi(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),vi(e,n),this.g.U("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;let c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){let l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=o[3*h],l[4*h+1]=o[3*h+1],l[4*h+2]=o[3*h+2],l[4*h+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new An([o],!1,!1,this.g.i.canvas,this.O,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),At(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};xs.prototype.stylize=xs.prototype.Oa,xs.prototype.setOptions=xs.prototype.o,xs.createFromModelPath=function(e,t){return fe(xs,e,{baseOptions:{modelAssetPath:t}})},xs.createFromModelBuffer=function(e,t){return fe(xs,e,{baseOptions:{modelAssetBuffer:t}})},xs.createFromOptions=function(e,t){return fe(xs,e,t)};var Dm=Qi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function n_(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function i_(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function s_(e,t=!0){var s,r,o,a,c,l;let n=[];for(let h of e){var i=Ju(h);e=[];for(let d of i.g())i=t&&Li(d,1)!=null?(s=Li(d,1))!=null?s:0:-1,e.push({score:(r=sn(d,2))!=null?r:0,index:i,categoryName:(a=(o=Ni(d,3))!=null?o:"")!=null?a:"",displayName:(l=(c=Ni(d,4))!=null?c:"")!=null?l:""});n.push(e)}return n}var fi=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ht(e=this.j=new Ix,0,1,t=new We),this.s=new vm,Ht(this.j,0,2,this.s),this.C=new xm,Ht(this.s,0,3,this.C),this.v=new Rx,Ht(this.s,0,2,this.v),this.h=new WE,Ht(this.j,0,3,this.h),Ut(this.v,2,.5),Ut(this.s,4,.5),Ut(this.C,2,.5)}get baseOptions(){return ge(this.j,We,1)}set baseOptions(e){Ht(this.j,0,1,e)}o(e){var s,r,o,a,c,l,h,d;if(Ms(this.v,3,(s=e.numHands)!=null?s:1),"minHandDetectionConfidence"in e&&Ut(this.v,2,(r=e.minHandDetectionConfidence)!=null?r:.5),"minTrackingConfidence"in e&&Ut(this.s,4,(o=e.minTrackingConfidence)!=null?o:.5),"minHandPresenceConfidence"in e&&Ut(this.C,2,(a=e.minHandPresenceConfidence)!=null?a:.5),e.cannedGesturesClassifierOptions){var t=new Uo,n=t,i=bp(e.cannedGesturesClassifierOptions,(c=ge(this.h,Uo,3))==null?void 0:c.h());Ht(n,0,2,i),Ht(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((l=ge(this.h,Uo,3))==null||l.g());return e.customGesturesClassifierOptions?(Ht(n=t=new Uo,0,2,i=bp(e.customGesturesClassifierOptions,(h=ge(this.h,Uo,4))==null?void 0:h.h())),Ht(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((d=ge(this.h,Uo,4))==null||d.g()),this.l(e)}Ja(e,t){return n_(this),Oi(this,e,t),i_(this)}Ka(e,t,n){return n_(this),bs(this,e,n,t),i_(this)}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect"),_e(e,"hand_gestures"),_e(e,"hand_landmarks"),_e(e,"world_hand_landmarks"),_e(e,"handedness");let t=new gi;Ji(t,XE,this.j);let n=new Jn;xi(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"HAND_GESTURES:hand_gestures"),pe(n,"LANDMARKS:hand_landmarks"),pe(n,"WORLD_LANDMARKS:world_hand_landmarks"),pe(n,"HANDEDNESS:handedness"),n.o(t),vi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{var r,o,a,c;for(let l of i){i=Bc(l);let h=[];for(let d of Vs(i,vx,1))h.push({x:(r=sn(d,1))!=null?r:0,y:(o=sn(d,2))!=null?o:0,z:(a=sn(d,3))!=null?a:0,visibility:(c=sn(d,4))!=null?c:0});this.landmarks.push(h)}At(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{var r,o,a,c;for(let l of i){i=Ho(l);let h=[];for(let d of Vs(i,xx,1))h.push({x:(r=sn(d,1))!=null?r:0,y:(o=sn(d,2))!=null?o:0,z:(a=sn(d,3))!=null?a:0,visibility:(c=sn(d,4))!=null?c:0});this.worldLandmarks.push(h)}At(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...s_(i,!1)),At(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{At(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...s_(i)),At(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function r_(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}fi.prototype.recognizeForVideo=fi.prototype.Ka,fi.prototype.recognize=fi.prototype.Ja,fi.prototype.setOptions=fi.prototype.o,fi.createFromModelPath=function(e,t){return fe(fi,e,{baseOptions:{modelAssetPath:t}})},fi.createFromModelBuffer=function(e,t){return fe(fi,e,{baseOptions:{modelAssetBuffer:t}})},fi.createFromOptions=function(e,t){return fe(fi,e,t)},fi.HAND_CONNECTIONS=Dm;var pi=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ht(e=this.h=new vm,0,1,t=new We),this.s=new xm,Ht(this.h,0,3,this.s),this.j=new Rx,Ht(this.h,0,2,this.j),Ms(this.j,3,1),Ut(this.j,2,.5),Ut(this.s,2,.5),Ut(this.h,4,.5)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t,n,i,s;return"numHands"in e&&Ms(this.j,3,(t=e.numHands)!=null?t:1),"minHandDetectionConfidence"in e&&Ut(this.j,2,(n=e.minHandDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ut(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minHandPresenceConfidence"in e&&Ut(this.s,2,(s=e.minHandPresenceConfidence)!=null?s:.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Oi(this,e,t),r_(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],bs(this,e,n,t),r_(this)}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect"),_e(e,"hand_landmarks"),_e(e,"world_hand_landmarks"),_e(e,"handedness");let t=new gi;Ji(t,qE,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"LANDMARKS:hand_landmarks"),pe(n,"WORLD_LANDMARKS:world_hand_landmarks"),pe(n,"HANDEDNESS:handedness"),n.o(t),vi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i)i=Bc(r),this.landmarks.push(ju(i));At(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i)i=Ho(r),this.worldLandmarks.push(Cc(i));At(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var c,l,h,d,u,f,g;var r=this.handedness,o=r.push;let a=[];for(let y of i){i=Ju(y);let m=[];for(let p of i.g())m.push({score:(c=sn(p,2))!=null?c:0,index:(h=(l=Li(p,1))!=null?l:0)!=null?h:-1,categoryName:(u=(d=Ni(p,3))!=null?d:"")!=null?u:"",displayName:(g=(f=Ni(p,4))!=null?f:"")!=null?g:""});a.push(m)}o.call(r,...a),At(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};pi.prototype.detectForVideo=pi.prototype.F,pi.prototype.detect=pi.prototype.D,pi.prototype.setOptions=pi.prototype.o,pi.createFromModelPath=function(e,t){return fe(pi,e,{baseOptions:{modelAssetPath:t}})},pi.createFromModelBuffer=function(e,t){return fe(pi,e,{baseOptions:{modelAssetBuffer:t}})},pi.createFromOptions=function(e,t){return fe(pi,e,t)},pi.HAND_CONNECTIONS=Dm;var nv=Qi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function o_(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function a_(e){try{if(!e.C)return e.h;e.C(e.h)}finally{td(e)}}function fu(e,t){e=Bc(e),t.push(ju(e))}var Ge=class extends ri{constructor(e,t){super(new Fi(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ht(e=this.j=new Ux,0,1,t=new We),this.J=new xm,Ht(this.j,0,2,this.J),this.Z=new YE,Ht(this.j,0,3,this.Z),this.s=new Ku,Ht(this.j,0,4,this.s),this.H=new Ex,Ht(this.j,0,5,this.H),this.v=new Dx,Ht(this.j,0,6,this.v),this.K=new Nx,Ht(this.j,0,7,this.K),Ut(this.s,2,.5),Ut(this.s,3,.3),Ut(this.H,2,.5),Ut(this.v,2,.5),Ut(this.v,3,.3),Ut(this.K,2,.5),Ut(this.J,2,.5)}get baseOptions(){return ge(this.j,We,1)}set baseOptions(e){Ht(this.j,0,1,e)}o(e){var t,n,i,s,r,o,a;return"minFaceDetectionConfidence"in e&&Ut(this.s,2,(t=e.minFaceDetectionConfidence)!=null?t:.5),"minFaceSuppressionThreshold"in e&&Ut(this.s,3,(n=e.minFaceSuppressionThreshold)!=null?n:.3),"minFacePresenceConfidence"in e&&Ut(this.H,2,(i=e.minFacePresenceConfidence)!=null?i:.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Ut(this.v,2,(s=e.minPoseDetectionConfidence)!=null?s:.5),"minPoseSuppressionThreshold"in e&&Ut(this.v,3,(r=e.minPoseSuppressionThreshold)!=null?r:.3),"minPosePresenceConfidence"in e&&Ut(this.K,2,(o=e.minPosePresenceConfidence)!=null?o:.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Ut(this.J,2,(a=e.minHandLandmarksConfidence)!=null?a:.5),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,o_(this),Oi(this,e,i),a_(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,o_(this),bs(this,e,s,t),a_(this)}m(){var e=new oi;ze(e,"input_frames_image"),_e(e,"pose_landmarks"),_e(e,"pose_world_landmarks"),_e(e,"face_landmarks"),_e(e,"left_hand_landmarks"),_e(e,"left_hand_world_landmarks"),_e(e,"right_hand_landmarks"),_e(e,"right_hand_world_landmarks");let t=new gi,n=new w1;mp(n,1,na("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))Ne(s,2,P_(r));else{if(!(typeof r=="string"||r instanceof zs||Nc(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");mp(s,2,Fp(r,!1),Vr())}})(n,this.j.g());let i=new Jn;xi(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),wu(i,8,w1,n),Ue(i,"IMAGE:input_frames_image"),pe(i,"POSE_LANDMARKS:pose_landmarks"),pe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),pe(i,"FACE_LANDMARKS:face_landmarks"),pe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),pe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),pe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),pe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),vi(e,i),Qu(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{fu(s,this.h.poseLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=Ho(s),o.push(Cc(s)),At(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{At(this,s)})),this.outputPoseSegmentationMasks&&(pe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Jo(this,"pose_segmentation_mask"),this.g.U("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Qo(this,s,!0,!this.C)],At(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],At(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{fu(s,this.h.faceLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{At(this,s)})),this.outputFaceBlendshapes&&(_e(e,"extra_blendshapes"),pe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var a;var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Ju(s),o.push(Sm((a=s.g())!=null?a:[]))),At(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{At(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{fu(s,this.h.leftHandLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=Ho(s),o.push(Cc(s)),At(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{fu(s,this.h.rightHandLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=Ho(s),o.push(Cc(s)),At(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{At(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ge.prototype.detectForVideo=Ge.prototype.F,Ge.prototype.detect=Ge.prototype.D,Ge.prototype.setOptions=Ge.prototype.o,Ge.createFromModelPath=function(e,t){return fe(Ge,e,{baseOptions:{modelAssetPath:t}})},Ge.createFromModelBuffer=function(e,t){return fe(Ge,e,{baseOptions:{modelAssetBuffer:t}})},Ge.createFromOptions=function(e,t){return fe(Ge,e,t)},Ge.HAND_CONNECTIONS=Dm,Ge.POSE_CONNECTIONS=nv,Ge.FACE_LANDMARKS_LIPS=Am,Ge.FACE_LANDMARKS_LEFT_EYE=Cm,Ge.FACE_LANDMARKS_LEFT_EYEBROW=Rm,Ge.FACE_LANDMARKS_LEFT_IRIS=jx,Ge.FACE_LANDMARKS_RIGHT_EYE=Im,Ge.FACE_LANDMARKS_RIGHT_EYEBROW=Pm,Ge.FACE_LANDMARKS_RIGHT_IRIS=Qx,Ge.FACE_LANDMARKS_FACE_OVAL=Lm,Ge.FACE_LANDMARKS_CONTOURS=tv,Ge.FACE_LANDMARKS_TESSELATION=ev;var Ri=class extends ri{constructor(e,t){super(new Fi(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Ht(e=this.h=new Fx,0,1,t=new We)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return Ht(this.h,0,2,bp(e,ge(this.h,mm,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},Oi(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},bs(this,e,n,t),this.j}m(){var e=new oi;ze(e,"input_image"),ze(e,"norm_rect"),_e(e,"classifications");let t=new gi;Ji(t,$E,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ue(n,"IMAGE:input_image"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"CLASSIFICATIONS:classifications"),n.o(t),vi(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){var a;let o={classifications:Vs(r,NE,1).map((c=>{var l,h,d,u;return Sm((h=(l=ge(c,mx,4))==null?void 0:l.g())!=null?h:[],(d=Li(c,2))!=null?d:0,(u=Ni(c,3))!=null?u:"")}))};return Tu($o(r,2))!=null&&(o.timestampMs=(a=Tu($o(r,2)))!=null?a:0),o})(UE(i)),At(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ri.prototype.classifyForVideo=Ri.prototype.ta,Ri.prototype.classify=Ri.prototype.sa,Ri.prototype.setOptions=Ri.prototype.o,Ri.createFromModelPath=function(e,t){return fe(Ri,e,{baseOptions:{modelAssetPath:t}})},Ri.createFromModelBuffer=function(e,t){return fe(Ri,e,{baseOptions:{modelAssetBuffer:t}})},Ri.createFromOptions=function(e,t){return fe(Ri,e,t)};var mi=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect",!0),this.h=new Ox,this.embeddings={embeddings:[]},Ht(e=this.h,0,1,t=new We)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t=this.h,n=ge(this.h,U1,2);return n=n?n.clone():new U1,e.l2Normalize!==void 0?Pc(n,1,e.l2Normalize):"l2Normalize"in e&&Ne(n,1),e.quantize!==void 0?Pc(n,2,e.quantize):"quantize"in e&&Ne(n,2),Ht(t,0,2,n),this.l(e)}za(e,t){return Oi(this,e,t),this.embeddings}Aa(e,t,n){return bs(this,e,n,t),this.embeddings}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect"),_e(e,"embeddings_out");let t=new gi;Ji(t,ZE,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"EMBEDDINGS:embeddings_out"),n.o(t),vi(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=BE(i),this.embeddings=(function(r){var o;return{embeddings:Vs(r,OE,1).map((a=>{var l,h,d,u,f,g,y;let c={headIndex:(h=(l=Li(a,3))!=null?l:0)!=null?h:-1,headName:(u=(d=Ni(a,4))!=null?d:"")!=null?u:""};if(F_(a,N1,ep(a,1))!==void 0)a=Br(a=ge(a,N1,ep(a,1)),1,br,Or()),c.floatEmbedding=a.slice();else{let m=new Uint8Array(0);c.quantizedEmbedding=(y=(g=(f=ge(a,FE,ep(a,2)))==null?void 0:f.oa())==null?void 0:g.h())!=null?y:m}return c})),timestampMs:(o=Tu($o(r,2)))!=null?o:0}})(i),At(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};mi.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=k1(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=k1(z1(e.quantizedEmbedding),z1(t.quantizedEmbedding))}return e},mi.prototype.embedForVideo=mi.prototype.Aa,mi.prototype.embed=mi.prototype.za,mi.prototype.setOptions=mi.prototype.o,mi.createFromModelPath=function(e,t){return fe(mi,e,{baseOptions:{modelAssetPath:t}})},mi.createFromModelBuffer=function(e,t){return fe(mi,e,{baseOptions:{modelAssetBuffer:t}})},mi.createFromOptions=function(e,t){return fe(mi,e,t)};var wp=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};function c_(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function l_(e){try{let t=new wp(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{td(e)}}wp.prototype.close=wp.prototype.close;var Vn=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new bm,this.v=new Bx,Ht(this.h,0,3,this.v),Ht(e=this.h,0,1,t=new We)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t,n;return e.displayNamesLocale!==void 0?Ne(this.h,2,na(e.displayNamesLocale)):"displayNamesLocale"in e&&Ne(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=(t=e.outputCategoryMask)!=null?t:!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=(n=e.outputConfidenceMasks)!=null?n:!0),super.l(e)}I(){(function(e){var n,i,s;let t=Vs(e.da(),Jn,1).filter((r=>{var o;return((o=Ni(r,1))!=null?o:"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")}));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&((s=(i=(n=ge(t[0],gi,7))==null?void 0:n.l())==null?void 0:i.g())!=null?s:new Map).forEach(((r,o)=>{var a;e.s[Number(o)]=(a=Ni(r,1))!=null?a:""}))})(this)}segment(e,t,n){let i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,c_(this),Oi(this,e,i),l_(this)}Ma(e,t,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,c_(this),bs(this,e,s,t),l_(this)}Da(){return this.s}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect");let t=new gi;Ji(t,kx,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect"),n.o(t),vi(e,n),Qu(this,e),this.outputConfidenceMasks&&(_e(e,"confidence_masks"),pe(n,"CONFIDENCE_MASKS:confidence_masks"),Jo(this,"confidence_masks"),this.g.ca("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Qo(this,r,!0,!this.j))),At(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],At(this,i)}))),this.outputCategoryMask&&(_e(e,"category_mask"),pe(n,"CATEGORY_MASK:category_mask"),Jo(this,"category_mask"),this.g.U("category_mask",((i,s)=>{this.categoryMask=Qo(this,i,!1,!this.j),At(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,At(this,i)}))),_e(e,"quality_scores"),pe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,At(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Vn.prototype.getLabels=Vn.prototype.Da,Vn.prototype.segmentForVideo=Vn.prototype.Ma,Vn.prototype.segment=Vn.prototype.segment,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=function(e,t){return fe(Vn,e,{baseOptions:{modelAssetPath:t}})},Vn.createFromModelBuffer=function(e,t){return fe(Vn,e,{baseOptions:{modelAssetBuffer:t}})},Vn.createFromOptions=function(e,t){return fe(Vn,e,t)};var Ap=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};Ap.prototype.close=Ap.prototype.close;var rT=class extends Pt{constructor(e){super(e)}},Oo=[0,je,-2],Iu=[0,Fs,-3,He,Fs,-1],h_=[0,Iu],u_=[0,Iu,je,-1],cp=class extends Pt{constructor(e){super(e)}},d_=[0,Fs,-1,He],oT=class extends Pt{constructor(e){super(e)}},f_=class extends Pt{constructor(e){super(e)}},Cp=[1,2,3,4,5,6,7,8,9,10,14,15],iv=class extends Pt{constructor(e){super(e)}};iv.prototype.g=Zu([0,yn,[0,Cp,Se,Iu,Se,[0,Iu,Oo],Se,h_,Se,[0,h_,Oo],Se,d_,Se,[0,Fs,-3,He,Ui],Se,[0,Fs,-3,He],Se,[0,be,Fs,-2,He,je,He,-1,2,Fs,Oo],Se,u_,Se,[0,u_,Oo],Fs,Oo,be,Se,[0,Fs,-3,He,Oo,-1],Se,[0,yn,d_]],be,[0,be,je,-1,He]]);var vs=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new bm,this.s=new Bx,Ht(this.h,0,3,this.s),Ht(e=this.h,0,1,t=new We)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t,n;return"outputCategoryMask"in e&&(this.outputCategoryMask=(t=e.outputCategoryMask)!=null?t:!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=(n=e.outputConfidenceMasks)!=null?n:!0),super.l(e)}segment(e,t,n,i){let s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new iv;let r=new f_;var o=new rT;if(Ms(o,1,255),Ht(r,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new cp;Pc(a,3,!0),Ut(a,1,t.keypoint.x),Ut(a,2,t.keypoint.y),wc(r,5,Cp,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new oT,t.scribble))Pc(t=new cp,3,!0),Ut(t,1,a.x),Ut(t,2,a.y),wu(o,1,cp,t);wc(r,15,Cp,o)}wu(i,1,f_,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),Oi(this,e,s);t:{try{let l=new Ap(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{td(this)}c=void 0}return c}m(){var e=new oi;ze(e,"image_in"),ze(e,"roi_in"),ze(e,"norm_rect_in");let t=new gi;Ji(t,kx,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"ROI:roi_in"),Ue(n,"NORM_RECT:norm_rect_in"),n.o(t),vi(e,n),Qu(this,e),this.outputConfidenceMasks&&(_e(e,"confidence_masks"),pe(n,"CONFIDENCE_MASKS:confidence_masks"),Jo(this,"confidence_masks"),this.g.ca("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Qo(this,r,!0,!this.j))),At(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],At(this,i)}))),this.outputCategoryMask&&(_e(e,"category_mask"),pe(n,"CATEGORY_MASK:category_mask"),Jo(this,"category_mask"),this.g.U("category_mask",((i,s)=>{this.categoryMask=Qo(this,i,!1,!this.j),At(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,At(this,i)}))),_e(e,"quality_scores"),pe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,At(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};vs.prototype.segment=vs.prototype.segment,vs.prototype.setOptions=vs.prototype.o,vs.createFromModelPath=function(e,t){return fe(vs,e,{baseOptions:{modelAssetPath:t}})},vs.createFromModelBuffer=function(e,t){return fe(vs,e,{baseOptions:{modelAssetBuffer:t}})},vs.createFromOptions=function(e,t){return fe(vs,e,t)};var Ii=class extends ri{constructor(e,t){super(new Fi(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ht(e=this.h=new Vx,0,1,t=new We)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Ne(this.h,2,na(e.displayNamesLocale)):"displayNamesLocale"in e&&Ne(this.h,2),e.maxResults!==void 0?Ms(this.h,3,e.maxResults):"maxResults"in e&&Ne(this.h,3),e.scoreThreshold!==void 0?Ut(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&Ne(this.h,4),e.categoryAllowlist!==void 0?Au(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&Ne(this.h,5),e.categoryDenylist!==void 0?Au(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&Ne(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},Oi(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},bs(this,e,n,t),this.j}m(){var e=new oi;ze(e,"input_frame_gpu"),ze(e,"norm_rect"),_e(e,"detections");let t=new gi;Ji(t,KE,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ue(n,"IMAGE:input_frame_gpu"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"DETECTIONS:detections"),n.o(t),vi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=_x(r),this.j.detections.push(Hx(i));At(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ii.prototype.detectForVideo=Ii.prototype.F,Ii.prototype.detect=Ii.prototype.D,Ii.prototype.setOptions=Ii.prototype.o,Ii.createFromModelPath=async function(e,t){return fe(Ii,e,{baseOptions:{modelAssetPath:t}})},Ii.createFromModelBuffer=function(e,t){return fe(Ii,e,{baseOptions:{modelAssetBuffer:t}})},Ii.createFromOptions=function(e,t){return fe(Ii,e,t)};var Rp=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach((t=>{t.close()}))}};function p_(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function m_(e){try{let t=new Rp(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{td(e)}}Rp.prototype.close=Rp.prototype.close;var $n=class extends ri{constructor(e,t){super(new Fi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ht(e=this.h=new Gx,0,1,t=new We),this.v=new Nx,Ht(this.h,0,3,this.v),this.j=new Dx,Ht(this.h,0,2,this.j),Ms(this.j,4,1),Ut(this.j,2,.5),Ut(this.v,2,.5),Ut(this.h,4,.5)}get baseOptions(){return ge(this.h,We,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t,n,i,s,r;return"numPoses"in e&&Ms(this.j,4,(t=e.numPoses)!=null?t:1),"minPoseDetectionConfidence"in e&&Ut(this.j,2,(n=e.minPoseDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ut(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minPosePresenceConfidence"in e&&Ut(this.v,2,(s=e.minPosePresenceConfidence)!=null?s:.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=(r=e.outputSegmentationMasks)!=null?r:!1),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,p_(this),Oi(this,e,i),m_(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,p_(this),bs(this,e,s,t),m_(this)}m(){var e=new oi;ze(e,"image_in"),ze(e,"norm_rect"),_e(e,"normalized_landmarks"),_e(e,"world_landmarks"),_e(e,"segmentation_masks");let t=new gi;Ji(t,jE,this.h);let n=new Jn;xi(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ue(n,"IMAGE:image_in"),Ue(n,"NORM_RECT:norm_rect"),pe(n,"NORM_LANDMARKS:normalized_landmarks"),pe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),vi(e,n),Qu(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(let r of i)i=Bc(r),this.landmarks.push(ju(i));At(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],At(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(let r of i)i=Ho(r),this.worldLandmarks.push(Cc(i));At(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],At(this,i)})),this.outputSegmentationMasks&&(pe(n,"SEGMENTATION_MASK:segmentation_masks"),Jo(this,"segmentation_masks"),this.g.ca("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Qo(this,r,!0,!this.s))),At(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],At(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};$n.prototype.detectForVideo=$n.prototype.F,$n.prototype.detect=$n.prototype.D,$n.prototype.setOptions=$n.prototype.o,$n.createFromModelPath=function(e,t){return fe($n,e,{baseOptions:{modelAssetPath:t}})},$n.createFromModelBuffer=function(e,t){return fe($n,e,{baseOptions:{modelAssetBuffer:t}})},$n.createFromOptions=function(e,t){return fe($n,e,t)},$n.POSE_CONNECTIONS=nv;var aT="assets/mediapipe/datos.js",Ae={hombroI:11,hombroD:12,munecaI:15,munecaD:16,caderaI:23,caderaD:24,rodillaI:25,rodillaD:26,tobilloI:27,tobilloD:28},cT=.5,lT=.035,Nm=3,sv=.1,hT=.3,rv=.6,Um=.6;function uT(e){return new Promise((t,n)=>{let i=document.createElement("script");i.src=e,i.onload=()=>t(),i.onerror=()=>n(new Error("No se pudieron leer los archivos de MediaPipe (assets/mediapipe/datos.js).")),document.head.appendChild(i)})}function id(e){let t=atob(e),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}function ov(e,t){return URL.createObjectURL(new Blob([e],{type:t}))}async function av(e,t,n,i){let s=null;for(let r of["GPU","CPU"])try{return await e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},...i})}catch(o){s=o}throw s}var sd=class{constructor(){this.activo=!1,this.listo=!1,this.stream=null,this.video=document.createElement("video"),this.video.muted=!0,this.video.playsInline=!0,this.lienzo=document.createElement("canvas"),this.lienzo.width=320,this.lienzo.height=240,this.ctx=this.lienzo.getContext("2d"),this.lienzoVideo=document.createElement("canvas"),this.lienzoVideo.width=320,this.lienzoVideo.height=240,this.ctxVideo=this.lienzoVideo.getContext("2d",{willReadFrequently:!0}),this.poseLM=null,this.segmentador=null,this.ultimoTVideo=-1,this.nuevaSilueta=!1,this.sentado=!1,this.lm=null,this.reiniciarCalibracion()}reiniciarCalibracion(){this.calibrado=!1,this.progreso=0,this.tCal=0,this.sumX=0,this.sumA=0,this.nCal=0,this.prevX=null,this.baseX=.5,this.anchoH=.25,this.pasos=0,this.ultimoPaso=-99,this.lado=0,this.tiempo=0,this.caminando=!1,this.latEstado=0,this.tIzq=0,this.tDer=0,this.tAmbas=0,this.dispIzq=!1,this.dispDer=!1,this.dispAmbas=!1,this.prevIzq=!1,this.prevDer=!1,this.eventos=[],this.visible=!1,this.estadoTexto="Buscando tu cuerpo\u2026",this.tSinPose=0}async iniciar(t=()=>{}){if(!this.activo){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Este navegador no permite usar la c\xE1mara. Prob\xE1 con Chrome o Edge actualizados.");t("Pidiendo permiso para usar la c\xE1mara\u2026"),this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1}),this.video.srcObject=this.stream,await this.video.play();let n=this.video.videoWidth||640,i=this.video.videoHeight||480;this.lienzo.height=Math.round(this.lienzo.width*i/n),this.lienzoVideo.height=this.lienzo.height,this.activo=!0}if(!this.listo){t("Cargando MediaPipe (la primera vez tarda unos segundos)\u2026"),window.MB_MEDIAPIPE||await uT(aT);let n=window.MB_MEDIAPIPE;if(!n)throw new Error("No se encontraron los archivos de MediaPipe en assets/mediapipe/datos.js.");let i={wasmLoaderPath:ov(id(n.loader),"text/javascript"),wasmBinaryPath:ov(id(n.wasm),"application/wasm")};this.poseLM=await av($n,i,id(n.pose),{runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5}),this.segmentador=await av(Vn,i,id(n.seg),{runningMode:"VIDEO",outputCategoryMask:!1,outputConfidenceMasks:!0}),this.listo=!0}}detener(){this.stream&&this.stream.getTracks().forEach(t=>t.stop()),this.stream=null,this.video.srcObject=null,this.activo=!1,this.ultimoTVideo=-1,this.reiniciarCalibracion()}actualizar(t){if(!this.activo||!this.listo||this.video.readyState<2)return;this.tiempo+=t;let n=this.video.currentTime;if(n===this.ultimoTVideo)return;this.ultimoTVideo=n;let i=performance.now(),s=null;try{let r=this.poseLM.detectForVideo(this.video,i);s=r.landmarks&&r.landmarks[0]?r.landmarks[0]:null}catch{s=null}this.lm=s,this.segmentar(i),this.analizar(s,t)}segmentar(t){let n;try{n=this.segmentador.segmentForVideo(this.video,t)}catch{return}let i=n.confidenceMasks;if(!i||!i.length)return;let s=i.length>1?i[1]:i[0],r=s.getAsFloat32Array(),o=s.width,a=s.height,c=this.lienzo.width,l=this.lienzo.height;this.ctxVideo.save(),this.ctxVideo.translate(c,0),this.ctxVideo.scale(-1,1),this.ctxVideo.drawImage(this.video,0,0,c,l),this.ctxVideo.restore();let h=this.ctxVideo.getImageData(0,0,c,l),d=h.data;for(let u=0;u<l;u++){let f=Math.min(a-1,Math.floor(u*a/l));for(let g=0;g<c;g++){let y=Math.min(o-1,Math.floor((c-1-g)*o/c)),m=r[f*o+y],p=m<=.35?0:m>=.65?1:(m-.35)/.3;d[(u*c+g)*4+3]=p*255}}this.ctx.clearRect(0,0,c,l),this.ctx.putImageData(h,0,0),s.close&&s.close(),i.forEach(u=>{u!==s&&u.close&&u.close()}),this.nuevaSilueta=!0}analizar(t,n){if(!t){this.tSinPose+=n,this.visible=!1,this.caminando=!1,this.estadoTexto="No te veo: ubicate de cuerpo entero, de frente y con buena luz";return}this.tSinPose=0;let i=u=>{var f;return((f=t[u].visibility)!=null?f:1)>=cT},s=i(Ae.hombroI)&&i(Ae.hombroD),r=i(Ae.caderaI)&&i(Ae.caderaD);if(this.visible=s,!this.visible){this.estadoTexto="Ubicate de frente: no te veo los hombros",this.caminando=!1;return}let o=u=>1-t[u].x,a=!this.sentado&&r?(o(Ae.caderaI)+o(Ae.caderaD))/2:(o(Ae.hombroI)+o(Ae.hombroD))/2,c=Math.max(.06,Math.abs(o(Ae.hombroI)-o(Ae.hombroD)));if(!this.calibrado){let u=this.prevX===null||Math.abs(a-this.prevX)<lT;this.prevX=a,u?(this.tCal+=n,this.sumX+=a,this.sumA+=c,this.nCal++):(this.tCal=0,this.sumX=0,this.sumA=0,this.nCal=0),this.progreso=Math.min(1,this.tCal/Nm),this.estadoTexto=u?`Quedate quieto\u2026 ${Math.max(0,Math.ceil(Nm-this.tCal))}`:"Quedate quieto y de frente",this.tCal>=Nm&&this.nCal>0&&(this.baseX=this.sumX/this.nCal,this.anchoH=this.sumA/this.nCal,this.calibrado=!0,this.estadoTexto="\xA1Listo!");return}let l=(a-this.baseX)/Math.max(.06,this.anchoH);if(this.latEstado===0?l>rv?(this.latEstado=1,this.eventos.push({tipo:"carril",d:1})):l<-rv&&(this.latEstado=-1,this.eventos.push({tipo:"carril",d:-1})):Math.abs(l)<.25&&(this.latEstado=0),!this.sentado){let u=g=>{var y;return((y=t[g].visibility)!=null?y:1)>=hT},f=u(Ae.rodillaI)&&u(Ae.rodillaD)?[Ae.rodillaI,Ae.rodillaD]:u(Ae.tobilloI)&&u(Ae.tobilloD)?[Ae.tobilloI,Ae.tobilloD]:null;if(this.piernasOK=!!f,f){let g=(t[Ae.hombroI].y+t[Ae.hombroD].y)/2,y=r?(t[Ae.caderaI].y+t[Ae.caderaD].y)/2:g+c*2.2,m=Math.max(.08,Math.abs(y-g)),p=(t[f[1]].y-t[f[0]].y)/m,M=p>sv?1:p<-sv?-1:0;M!==0&&M!==this.lado&&(this.lado!==0&&(this.pasos++,this.ultimoPaso=this.tiempo),this.lado=M)}}this.caminando=this.tiempo-this.ultimoPaso<.8;let h=i(Ae.munecaI)&&t[Ae.munecaI].y<t[Ae.hombroI].y,d=i(Ae.munecaD)&&t[Ae.munecaD].y<t[Ae.hombroD].y;h&&!this.prevIzq&&this.eventos.push({tipo:"recoge",lado:"izq"}),d&&!this.prevDer&&this.eventos.push({tipo:"recoge",lado:"der"}),this.prevIzq=h,this.prevDer=d,h&&d?(this.tAmbas+=n,this.tIzq=0,this.tDer=0,this.tAmbas>=Um&&!this.dispAmbas&&(this.dispAmbas=!0,this.eventos.push({tipo:"responde",lado:"ambas"}))):(this.tAmbas=0,this.dispAmbas=!1,h?(this.tIzq+=n,this.tIzq>=Um&&!this.dispIzq&&(this.dispIzq=!0,this.eventos.push({tipo:"responde",lado:"izq"}))):(this.tIzq=0,this.dispIzq=!1),d?(this.tDer+=n,this.tDer>=Um&&!this.dispDer&&(this.dispDer=!0,this.eventos.push({tipo:"responde",lado:"der"}))):(this.tDer=0,this.dispDer=!1)),this.estadoTexto=`Pasos: ${this.pasos} \xB7 ${this.caminando?"caminando":"quieto"}${this.piernasOK?"":" \xB7 no veo tus piernas"}`}consumirEventos(){let t=this.eventos;return this.eventos=[],t}};var ts={x:7.2,ancho:2.4,z0:-50,z1:-12},kc=(e,t,n)=>e+(t-e)*n;function cv({raiz:e,anim:t,particulas:n,sfx:i}){let s=Ur(9091),r=new de,o=new gn,a=new Yn,c=new P,l=new P;function h(G,C,U,X,at,K=0,nt=1){c.set(U,X,at),a.set(0,K,0),o.setFromEuler(a),l.setScalar(nt),r.compose(c,o,l),G.setMatrixAt(C,r)}let d=[],u=[],f=[];for(let G=0;G<we;G++){let C=Ye(G)+44,U=G%2?1:-1;f.push([U*(7+s()*.8),C]),f.push([U*(7.4+s()*.8),C-10])}for(let[G,C]of f){let U=new Be;U.position.set(G,0,C),e.add(U);let X=new dn;X.cyl(.24,.36,3.4,"#6e4a2a",0,0,0,7),U.add(X.build());let at=new dn;at.sphere(2.3,"#6f9e3c",0,4.3,0,[1.25,.72,1.2],7),at.sphere(1.6,"#86b34a",1.5,4.8,.5,[1,.7,1],7),at.sphere(1.5,"#5f8f36",-1.4,4.5,-.7,[1,.7,1],7);let K=at.build();U.add(K);let nt=s()*6;t.push(L=>{K.rotation.z=Math.sin(L*1.2+nt)*.035,K.rotation.x=Math.cos(L*.9+nt)*.025});let B={x:G,z:C,activo:!1};d.push(B);for(let L=0;L<3;L++)u.push({arbol:B,i:u.length,lx:(s()-.5)*3.2,ly:2.7+s()*.9,lz:(s()-.5)*1.6,gx:Math.sign(G)*(2+s()*1.4),gz:C+(s()-.5)*8,retraso:L*.28,estado:"colgada",t:0,got:!1})}let g=new Wa(.08,.36,3,6).rotateZ(Math.PI/2),y=new ei(g,new un({color:"#8a5a2b"}),u.length);y.castShadow=!0,y.frustumCulled=!1,e.add(y);function m(G,C){for(let U of d)!U.activo&&U.z<C&&C-U.z<42&&(U.activo=!0);for(let U of u){let X=U.arbol;U.estado==="colgada"&&X.activo&&(U.estado="cayendo",U.t=-U.retraso);let at=X.x+U.lx,K=U.ly,nt=X.z+U.lz,B=0;if(U.estado==="cayendo"&&(U.t+=G,U.t>0)){let L=Math.min(1,U.t/.9);at=kc(at,U.gx,L),K=kc(U.ly,.12,L*L),nt=kc(nt,U.gz,L),B=U.t*5,L>=1&&(U.estado="suelo",K=.12)}U.estado==="suelo"&&(at=U.gx,K=.12,nt=U.gz),h(y,U.i,at,K,nt,B,U.got?0:1)}y.instanceMatrix.needsUpdate=!0}let p=[],M=ts.z1-ts.z0,w=(ts.z0+ts.z1)/2;{let G=new Ft(new Bn(ts.ancho,M).rotateX(-Math.PI/2),new un({color:"#3fa7d6",transparent:!0,opacity:.92}));G.position.set(ts.x,.03,w),e.add(G);let C=new un({color:"#c9a66b"});for(let X of[-1,1]){let at=new Ft(new Te(.3,.12,M),C);at.position.set(ts.x+X*(ts.ancho/2+.15),.04,w),e.add(at)}["sabalo","sabalo","dorado","sabalo","dorado","sabalo","dorado","sabalo","dorado"].forEach(X=>{let at=new Be,K=new dn,nt=X==="dorado"?"#ffb703":"#c9d6df";K.sphere(.26,nt,0,0,0,[2.2,.85,.65],6),K.cone(.2,.36,X==="dorado"?"#e69500":"#9fb2bf",-.55,0,0,4,[0,0,Math.PI/2]),at.add(K.build({cast:!1,receive:!1})),e.add(at),p.push({tipo:X,g:at,x:ts.x+(s()-.5)*(ts.ancho-.5),z:ts.z0+2+s()*(M-4),P:2.8+s()*1.6,ph:s()*9,enAire:!1,got:!1,s:0})})}let v=p.filter(G=>G.tipo==="dorado").length;function T(G,C,U,X){n.emitir(G,.2,C,"#e8f8ff",Math.round(16*U),3*U+1,.8,9),Math.abs(X-C)<45&&i&&i.salpicadura()}function E(G,C){for(let U of p){if(U.got){U.g.visible=!1;continue}let X=(G+U.ph)%U.P,at=X<.9;if(at!==U.enAire&&T(U.x,U.z,at?1:.6,C),U.enAire=at,U.g.visible=at,!at)continue;let K=X/.9;U.s=K,U.g.position.set(U.x+(K-.5)*.4,6.4*K*(1-K)+.1,U.z),U.g.rotation.set(0,0,(.5-K)*1.1)}}let R=[];for(let G=0;G<we;G++){let C=new Be,U=G%2===0,X=new dn;X.box(1.1,.1,.72,"#fff4d6"),U?X.box(1.12,.12,.12,"#d8452f"):X.sphere(.13,"#b5472f",0,.12,0,null,6),C.add(X.build({cast:!1,receive:!1}));let at=dr[(G+1)%3],K=Ye(G)+40;C.position.set(at,1.1,K),e.add(C),R.push({indice:G,esTelegrama:U,g:C,x:at,z:K,got:!1})}let _=new Be;{let G=new dn;G.sphere(.45,"#1f1f24",0,0,0,[1.6,1,1],8),G.sphere(.3,"#ffd23f",.35,-.05,0,[1,1,1],7),G.cone(.2,.7,"#ff7a2f",.85,.05,0,5,[0,0,-Math.PI/2]),G.box(1,.12,.7,"#1f1f24",-.25,.3,0,[0,0,.35]),_.add(G.build({cast:!1,receive:!1})),_.visible=!1,e.add(_)}let S=[],I=new Pn(.13,.13,.7,8).rotateZ(Math.PI/2),D=new un({color:"#f6e7bf"});for(let G=0;G<we;G++){let C=new Ft(I,D);C.visible=!1,C.castShadow=!0,e.add(C),S.push({indice:G,m:C,z:Ye(G)+26,estado:"espera",t:0,got:!1})}let N={activo:!1,i:-1,t:0},W=Array(we).fill(!1),F=6,$=3;function tt(G,C){if(!N.activo)for(let U=0;U<we;U++){let X=C-S[U].z;if(!W[U]&&X<75&&X>-10){W[U]=!0,N.activo=!0,N.i=U,N.t=0;break}}if(N.activo){N.t+=G;let U=Math.min(1,N.t/F),X=S[N.i];_.visible=!0,_.position.set(kc(-55,55,U),11+Math.sin(N.t*2.2)*.4,X.z),_.rotation.y=Math.sin(N.t*3)*.15,X.estado==="espera"&&N.t>=$&&(X.estado="cayendo",X.t=0,X.m.visible=!0),U>=1&&(N.activo=!1,_.visible=!1)}for(let U of S){if(U.estado!=="cayendo")continue;U.t+=G;let X=Math.min(1,U.t/.9);U.m.position.set(0,kc(9,.2,X*X),U.z),X>=1&&(U.estado="suelo")}}function j(G,C,U){tt(C,U),m(C,U),E(G,U);for(let X of R)X.got||(X.g.position.y=1.1+Math.sin(G*2.2+X.indice)*.12,X.g.rotation.y=G*.8+X.indice)}function lt(G,C,U){let X=(L,ot)=>U?Math.abs(L)<=1.7&&ot>=-1.5&&ot<=12:Math.abs(L)<=1.4&&Math.abs(ot)<=1.3,at=(L,ot)=>U?Math.abs(L)<=5.6&&Math.abs(ot)<=6:Math.abs(L)<=5.2&&Math.abs(ot)<=4,K=[];for(let L of u)L.estado==="suelo"&&!L.got&&K.push({tipo:"vaina",ref:L,x:L.gx,y:.3,z:L.gz,ok:X(L.gx-G,C-L.gz)});for(let L of R)L.got||K.push({tipo:"carta",ref:L,x:L.x,y:1.1,z:L.z,ok:X(L.x-G,C-L.z),indice:L.indice});for(let L of p)if(L.tipo==="dorado"&&!L.got&&L.enAire&&L.s>.15&&L.s<.85){let ot=L.g.position.x,_t=L.g.position.y;K.push({tipo:"dorado",ref:L,x:ot,y:_t,z:L.z,ok:at(ot-G,C-L.z)})}for(let L of S)L.estado==="suelo"&&!L.got&&K.push({tipo:"pergamino",ref:L,x:0,y:.3,z:L.z,ok:X(-G,C-L.z),indice:L.indice});let nt=null,B=1/0;for(let L of K){if(!L.ok)continue;let ot=Math.abs(C-L.z)+Math.abs(L.x-G);ot<B&&(B=ot,nt=L)}return nt?(nt.ref.got=!0,nt.tipo==="carta"&&(nt.ref.g.visible=!1),nt.tipo==="pergamino"&&(nt.ref.m.visible=!1),{tipo:nt.tipo,x:nt.x,y:nt.y,z:nt.z,indice:nt.indice}):null}function Q(){for(let G of u)G.estado="colgada",G.t=0,G.got=!1;for(let G of d)G.activo=!1;for(let G of p)G.got=!1,G.enAire=!1;for(let G of R)G.got=!1,G.g.visible=!0;N.activo=!1,N.t=0,_.visible=!1,W.fill(!1);for(let G of S)G.estado="espera",G.t=0,G.got=!1,G.m.visible=!1;y.instanceMatrix.needsUpdate=!0}return{actualizar:j,recoger:lt,reiniciar:Q,totalDorados:v,totalVainas:u.length,totalCartas:R.length}}var V=e=>document.getElementById(e),Mn=window.MB_ESTACIONES,_v="misionBermejo3d.opciones.v1",ua=[.9,1,1.15,1.3,1.5,1.75],dT={texto:1,velocidad:1,sentado:!1,contraste:!1,movimiento:!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),obstaculos:!0,sonido:!0,liviano:!1,tactil:!0,peso:null,equipo:!1},Zt={...dT};try{Object.assign(Zt,JSON.parse(localStorage.getItem(_v)||"{}"))}catch{}function hd(){try{localStorage.setItem(_v,JSON.stringify(Zt))}catch{}}function xv(e){V("errorWebglTexto").textContent=e,V("errorWebgl").classList.remove("oculto"),V("pantallaInicio").classList.add("oculto")}if(!Array.isArray(Mn)||Mn.length!==we)throw xv("No se pudieron cargar los contenidos hist\xF3ricos (assets/js/estaciones.js). Verific\xE1 que el archivo exista junto a index.html."),new Error("Faltan estaciones");var Ws;try{Ws=new Qh({canvas:V("mundo"),antialias:!0,powerPreference:"high-performance"})}catch(e){throw xv("Tu navegador o computadora no permite WebGL, que es necesario para el mundo 3D. Prob\xE1 con Chrome o Edge actualizados."),e}Ws.shadowMap.enabled=!0;Ws.shadowMap.type=sh;Ws.toneMapping=nc;Ws.toneMappingExposure=1;var Xs=new Fa;Xs.background=new Gt("#f7ead6");Xs.fog=new Ua("#f3e6cf",90,340);var Ze=new On(62,1,.2,1400);Ze.position.set(0,4,12);var fT=new Ka("#fff3dc","#b08a5c",1.5);Xs.add(fT);var ns=new Qa("#ffe0a3",2.4);ns.castShadow=!0;ns.shadow.mapSize.set(1024,1024);var ma=ns.shadow.camera;ma.left=-34;ma.right=34;ma.top=34;ma.bottom=-34;ma.near=5;ma.far=160;ns.shadow.bias=-6e-4;ns.shadow.normalBias=.04;Xs.add(ns,ns.target);var is=Jg(Xs,Mn),Gc=Kg();Xs.add(Gc.objeto);var ai=new su(Xs),an=new ru,Ss=cv({raiz:is.raiz,anim:is.anim,particulas:ai,sfx:an}),Ce=new sd,cn=!1,ud=0,dd=0,Bm=new qi(Ce.lienzo);Bm.colorSpace=en;var Hr=new Ft(new Bn(1,1),new nn({map:Bm,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}));Hr.renderOrder=999;Hr.frustumCulled=!1;Hr.visible=!1;Ze.add(Hr);Xs.add(Ze);var lv=6;function pT(){let e=2*lv*Math.tan(yf.degToRad(Ze.fov/2)),t=e*Ze.aspect,n=e*.78,i=n*(Ce.lienzo.width/Ce.lienzo.height);Hr.scale.set(i,n,1);let s=pc((xt.x-Ze.position.x)*.75,-t*.3,t*.3);Hr.position.set(s,-e/2+n/2-e*.04,-lv)}var Et="inicio",Cn=!1,mT="caminando",on=null,Fm=null,Qn=!1,gT=[[18,-6],[-15,-3],[14,-3],[-17,-4],[-21,-6],[-24,-2],[0,-26],[18,-3]],xt={x:0,z:0,y:0,lane:1,v:0,golpe:0,saludo:!1},re=0,yi=0,Wc=0,ha=0,zm=0,ad=0,ga=0,Xc=0,km=0,Bi=[],Dn="historia",es=[0,1,2],qc={avance:!1},cd=!1,da=0;function fd(){Object.assign(xt,{x:0,z:0,y:0,lane:1,v:0,golpe:0,saludo:!1}),re=0,yi=0,Wc=0,ha=0,zm=0,ad=0,ud=0,dd=0,Bi=Mn.map(()=>({intentos:0,estado:null,puntos:0})),is.reiniciarItems(),Ss.reiniciar(),ga=0,Xc=0,km=0,qs()}function pd(){document.documentElement.style.setProperty("--fs",`${Math.round(20*Zt.texto)}px`),document.body.classList.toggle("alto-contraste",Zt.contraste),document.body.classList.toggle("mov-reducido",Zt.movimiento),an.activo=Zt.sonido,ns.castShadow=!Zt.liviano,Ws.setPixelRatio(Zt.liviano?.8:Math.min(window.devicePixelRatio||1,1.5)),Gc.sombraFalsa.visible=Zt.liviano,ai.reducido=Zt.movimiento,is.mostrarObstaculos(Zt.obstaculos),V("btnSonido").textContent=Zt.sonido?"\u{1F50A}":"\u{1F507}",V("opcTexto").textContent=`${Math.round(Zt.texto*100)}%`,V("opcVelocidad").value=String(Zt.velocidad),V("opcSentado").checked=Zt.sentado,V("opcContraste").checked=Zt.contraste,V("opcMovimiento").checked=Zt.movimiento,V("opcObstaculos").checked=Zt.obstaculos,V("opcSonido").checked=Zt.sonido,V("opcLiviano").checked=Zt.liviano,V("opcTactil").checked=Zt.tactil,V("opcPeso").value=Zt.peso||"",V("opcEquipo").checked=Zt.equipo,Ce.sentado=Zt.sentado,vv(),Hn()}function vv(){let e=window.innerWidth,t=window.innerHeight;Ws.setSize(e,t,!1),Ze.aspect=e/t,Ze.fov=e/t<1.2?72:62,Ze.updateProjectionMatrix()}window.addEventListener("resize",vv);var Yc=["pantallaPausa","pantallaOpciones","pantallaAyuda","pantallaAcerca","pantallaFinal","pantallaCamara","pantallaCreditos","pantallaCarta"];function zi(e,t=null){Yc.forEach(i=>V(i).classList.add("oculto")),Fm=t,on=e,V(e).classList.remove("oculto");let n=V(e).querySelector(".btn-principal")||V(e).querySelector("button");n&&setTimeout(()=>n.focus(),30),Hn()}function ss(){if(!on)return;V(on).classList.add("oculto"),on==="pantallaCarta"&&(Cn=!1);let e=Fm;on=null,Fm=null,e?zi(e):Hn()}function _T(){let e=V("credLista");e.innerHTML="",Mn.filter(t=>t.foto).forEach(t=>{let n=t.foto,i=document.createElement("div");i.className="credito";let s=document.createElement("b");s.textContent=`${t.orden}. ${n.titulo}`;let r=document.createElement("p");r.textContent=n.autor?`Foto: ${n.autor} (${n.anio}) \xB7 ${n.licencia}`:"Autor y licencia: pendientes de confirmar (no publicar hasta tenerlos)";let o=document.createElement("p");if(o.textContent=`Cambios: ${n.cambios}`,i.append(s,r,o),n.url){let a=document.createElement("a");a.href=n.url,a.target="_blank",a.rel="noopener",a.textContent="Ver la p\xE1gina original",i.append(a)}e.appendChild(i)}),e.children.length||(e.textContent="Todav\xEDa no hay fotos con cr\xE9dito en el juego.")}var hv=0;function Mi(e,t="",n=1800){let i=V("aviso");i.textContent=e,i.className=`ver ${t}`,clearTimeout(hv),hv=setTimeout(()=>{i.className=""},n)}function xT(){let e=V("hudProgreso");e.innerHTML="",Mn.forEach((t,n)=>{let i=document.createElement("li");i.textContent=String(n+1),i.title=t.lugar,e.appendChild(i)})}function qs(){V("hudPuntos").textContent=String(yi),V("hudAlgodon").textContent=String(Wc),V("hudCartas").textContent=`${ga}/${Ss.totalCartas}`,V("hudPeces").textContent=`${Xc}/${Ss.totalDorados}`,[...V("hudProgreso").children].forEach((e,t)=>{e.className="";let n=Bi[t];n&&n.estado==="no"?e.classList.add("parcial"):n&&n.estado&&e.classList.add("ok"),t===re&&re<we&&e.classList.add("actual"),n&&n.estado?e.textContent="\u2713":e.textContent=String(t+1)})}function vT(){let e=V("hudDestino");if(Et!=="caminando"){e.style.visibility="hidden";return}if(e.style.visibility="visible",re<we){let t=Math.max(0,Math.round(xt.z-No(re)));e.textContent=`Pr\xF3xima parada ${re+1}: ${Mn[re].lugar} \xB7 ${t} m`}else e.textContent=`\xA1A la meta! \xB7 ${Math.max(0,Math.round(xt.z-gc))} m`}function yT(){let e=n=>`<kbd>${n}</kbd>`;if(Et==="cartel"&&Qn)return`${e("Enter")} volver al cartel`;if(Et==="calibrando")return"Quedate quieto y de frente para calibrar";let t=Zt.equipo?" \xB7 compa\xF1ero/a: "+e("1")+e("2")+e("3")+" o "+e("A")+e("B")+e("C"):"";return Et==="cartel"&&Dn==="vf"?cn?"\u270B izquierda = verdadero \xB7 derecha = falso":`${e("T")} verdadero \xB7 ${e("F")} falso`:Et==="cartel"&&cn?Dn==="historia"?"\u270B levant\xE1 una mano para ir a la pregunta":"\u270B izquierda = A \xB7 derecha = B \xB7 las dos = C"+t:Et==="cartel"?(Dn==="historia"?`${e("Enter")} ir a la pregunta`:`${e("1")} ${e("2")} ${e("3")} elegir respuesta`)+t:cn?Zt.sentado?"Modo sentado: avanz\xE1s solo \xB7 inclinate a los costados para cambiar de carril":"Camin\xE1 en el lugar \xB7 pasos a los costados para cambiar de carril \xB7 \u270B levant\xE1 la mano para recoger algod\xF3n":Zt.sentado?`Modo sentado: avanz\xE1s solo \xB7 ${e("\u2190")} ${e("\u2192")} cambiar de carril`:`${e("\u2191")} caminar \xB7 ${e("\u2190")} ${e("\u2192")} cambiar de carril \xB7 ${e("P")} pausa`}var uv="";function Hn(){let e=Et!=="inicio"&&Et!=="final";V("hud").classList.toggle("oculto",!e);let t=V("ayuda"),n=yT();n!==uv&&(t.innerHTML=n,uv=n),t.classList.toggle("oculto",!e||!!on),V("controlesTactiles").classList.toggle("oculto",!(Zt.tactil&&Et==="caminando"&&!on)),V("tcAvanzar").classList.toggle("oculto",Zt.sentado),V("pantallaInicio").classList.toggle("oculto",Et!=="inicio"),V("calibracion").classList.toggle("oculto",Et!=="calibrando"),V("camEstado").classList.toggle("oculto",!(cn&&Ce.activo&&e&&!on))}function MT(){if(!cn||!Ce.activo)return;let e=V("camEstado");e.textContent!==Ce.estadoTexto&&(e.textContent=Ce.estadoTexto),Et==="calibrando"&&(V("calibracionBarra").style.width=`${Math.round(Ce.progreso*100)}%`,V("calibracionTexto").textContent=Ce.estadoTexto)}function bT(){return"speechSynthesis"in window&&window.speechSynthesis.getVoices().find(t=>/^es/i.test(t.lang)&&t.localService)||null}function yv(e){if(!("speechSynthesis"in window)){Mi("Este navegador no puede leer en voz alta.","",2200);return}let t=window.speechSynthesis;if(t.speaking){t.cancel();return}let n=bT();if(!n){Mi("No hay una voz en espa\xF1ol instalada en esta computadora.","",2600);return}let i=new SpeechSynthesisUtterance(e);i.voice=n,i.lang=n.lang,i.rate=.95,t.speak(i)}function Xr(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Mv(e){let t=Mn[e];Et="cartel",Dn="historia",Qn=!1,V("btnVolverCartel").classList.add("oculto"),V("cartel").classList.remove("paso-pregunta"),xt.saludo=!0,V("cartelNum").textContent=String(t.orden),V("cartelSup").textContent=`Estaci\xF3n ${t.orden} de ${we}`,V("cartelTitulo").textContent=t.titulo,V("cartelAnio").textContent=t.anio,V("textoAnio").textContent=`\u{1F5D3} ${t.anioTexto}`,V("textoHistoria").textContent=t.historia;let n=t.foto;V("cartelFoto").classList.toggle("oculto",!n),n&&(V("cartelFotoImg").src=n.archivo,V("cartelFotoImg").alt=n.titulo,V("cartelFotoCred").textContent=n.autor&&n.licencia==="Foto propia"?`Foto: ${n.autor} (${n.anio}) \xB7 Foto propia \xB7 Estado actual, no hist\xF3rico`:n.autor?`Foto: ${n.autor} (${n.anio}) \xB7 ${n.licencia} \xB7 Wikimedia Commons \xB7 Estado actual, no hist\xF3rico`:"Foto de referencia: estado actual, no hist\xF3rico \xB7 cr\xE9dito pendiente de confirmar"),V("textoCuriosidad").textContent=t.curiosidad,V("textoPregunta").textContent=t.pregunta,V("cartelFuente").textContent=(t.foto?"":"Escena provisional: todav\xEDa no tiene fotograf\xEDa de referencia. ")+`Fuente indicada por NotebookLM: ${t.fuente}`,V("retro").textContent="",V("retro").className="retro";let i=V("opciones");if(i.innerHTML="",es=[0,1,2],(window.MB_CONFIG||{}).mezclarOpciones!==!1)for(let s=2;s>0;s--){let r=Math.floor(Math.random()*(s+1));[es[s],es[r]]=[es[r],es[s]]}es.map(s=>t.opciones[s]).forEach((s,r)=>{let o=document.createElement("button");o.className="opcion",o.type="button",o.innerHTML=`<span class="letra">${"ABC"[r]}</span><span class="txt"></span><small>tecla ${r+1}</small>`,o.querySelector(".txt").textContent=s,o.addEventListener("click",()=>gd(r)),i.appendChild(o)}),V("btnSeguir").classList.add("oculto"),V("cartelHistoria").classList.remove("oculto"),V("cartelPregunta").classList.add("oculto"),V("cartelVF").classList.add("oculto"),V("cartel").classList.remove("oculto"),V("cartel").scrollTop=0,an.llegada(),Mi(`Estaci\xF3n ${t.orden}: ${t.lugar}`,"",1700),Hn(),setTimeout(()=>V("btnAPregunta").focus(),60)}function fa(e){Et==="cartel"&&(Qn=e===void 0?!Qn:e,V("cartel").classList.toggle("oculto",Qn),V("btnVolverCartel").classList.toggle("oculto",!Qn),Xr(),Qn?(V("btnVolverCartel").focus(),Mi("Mir\xE1 el lugar en 3D","",1200)):setTimeout(()=>{var t;return(t=Dn==="historia"?V("btnAPregunta"):V("btnSeguir").classList.contains("oculto")?V("opciones").querySelector("button:not(:disabled)"):V("btnSeguir"))==null?void 0:t.focus()},40),Hn())}function md(){Et!=="cartel"||Dn!=="historia"||(Xr(),Dn="pregunta",V("cartel").classList.add("paso-pregunta"),an.clic(),V("cartelHistoria").classList.add("oculto"),V("cartelPregunta").classList.remove("oculto"),V("cartel").scrollTop=0,Hn(),setTimeout(()=>{let e=V("opciones").querySelector("button");e&&e.focus()},40))}function gd(e){if(Et!=="cartel"||Dn!=="pregunta")return;let t=Mn[re],n=Bi[re];if(n.estado)return;let i=[...V("opciones").children];if(i[e].disabled)return;n.intentos++;let s=V("retro"),r=es.indexOf(t.correcta);if(e===r){let o=n.intentos===1?100:50;n.estado=n.intentos===1?"primera":"segunda",n.puntos=o,yi+=o,ha++,i.forEach(a=>a.disabled=!0),i[e].classList.add("correcta"),s.textContent=`\xA1Correcto! +${o} puntos`,s.className="retro bien",an.acierto(),ai.emitir(xt.x,2.6,xt.z,"#ffd23f",30,4.5,1.1,4),ai.emitir(xt.x,2.6,xt.z,"#6fe39b",20,4,1.1,4),dv()}else if(i[e].classList.add("incorrecta"),i[e].disabled=!0,an.error(),n.intentos===1){s.textContent="Casi\u2026 prob\xE1 con otra opci\xF3n. Si acert\xE1s ahora gan\xE1s 50 puntos.",s.className="retro mal";let o=i.find(a=>!a.disabled);o&&o.focus()}else n.estado="no",n.puntos=0,i.forEach(o=>o.disabled=!0),i[r].classList.add("correcta"),s.textContent=`La respuesta correcta era: ${t.opciones[t.correcta]}.`,s.className="retro mal",dv();qs()}function dv(){let e=V("btnSeguir");e.classList.remove("oculto"),e.textContent="Verdadero o falso \u279C",setTimeout(()=>{e.focus(),e.scrollIntoView({block:"nearest"})},80)}function Vm(){Et!=="cartel"||Dn!=="pregunta"||!Bi[re].estado||(Xr(),Dn="vf",an.clic(),V("cartelPregunta").classList.add("oculto"),V("cartelVF").classList.remove("oculto"),V("textoVF").textContent=Mn[re].vf.afirmacion,V("retroVF").textContent="",V("retroVF").className="retro",V("btnVerdadero").disabled=!1,V("btnFalso").disabled=!1,V("btnSeguirVF").classList.add("oculto"),V("cartel").scrollTop=0,Hn(),setTimeout(()=>V("btnVerdadero").focus(),40))}function pa(e){if(Et!=="cartel"||Dn!=="vf")return;let t=Bi[re];if(t.vf!==void 0)return;let n=Mn[re],i=e===n.vf.verdadera;t.vf=i;let s=V("retroVF");i?(yi+=20,zm++,s.textContent=`\xA1Correcto! +20 puntos. ${n.vf.explicacion}`,s.className="retro bien",an.acierto()):(s.textContent=`No era as\xED. ${n.vf.explicacion}`,s.className="retro mal",an.error()),V("btnVerdadero").disabled=!0,V("btnFalso").disabled=!0,V("btnSeguirVF").textContent=re>=we-1?"Ir hacia la meta \u279C":"Seguir el recorrido \u279C",V("btnSeguirVF").classList.remove("oculto"),qs(),setTimeout(()=>{V("btnSeguirVF").focus()},80)}function _d(){Et!=="cartel"||!Bi[re].estado||Bi[re].vf===void 0||(Xr(),V("cartel").classList.add("oculto"),Qn=!1,is.paradas[re].hecho=!0,re++,Et="caminando",xt.saludo=!1,qs(),Hn(),Mi(re>=we?"\xA1Ya casi! Segu\xED hasta la meta":"\xA1Segu\xED adelante!","",1300))}function Hc(e){if(Et!=="caminando"||Cn||on)return;let t=pc(xt.lane+e,0,2);t!==xt.lane&&(xt.lane=t,an.clic())}function bv(e){Wc++,yi+=10,an.algodon(),ai.emitir(e.x,e.y+1.2,e.z,"#ffffff",10,2.6,.5,3),qs()}function Sv(e){e.tipo==="vaina"?(km++,yi+=8,an.algodon(),ai.emitir(e.x,e.y+.4,e.z,"#c98a4b",10,2.4,.6,4),Mi("\xA1Vaina de algarrobo! +8","",1e3)):e.tipo==="dorado"?(Xc++,yi+=30,an.coleccion(),ai.emitir(e.x,e.y,e.z,"#ffd23f",26,4.5,.9,5),Mi("\xA1Pez dorado coleccionado! +30","bueno",1400)):e.tipo==="pergamino"?(yi+=10,an.coleccion(),ai.emitir(e.x,e.y,e.z,"#f6e7bf",18,3,.8,4),fv(e.indice,!0)):e.tipo==="carta"&&(ga++,yi+=25,an.coleccion(),ai.emitir(e.x,e.y,e.z,"#fff4d6",24,4,.9,3),fv(e.indice)),qs()}function fv(e,t=!1){let n=Mn[e],i=e%2===0;V("cartaTitulo").textContent=`Estaci\xF3n ${n.orden}: ${n.lugar}`,t?(V("cartaTipo").textContent="Pergamino del tuc\xE1n",V("cartaTexto").textContent=n.pregunta,V("cartaNota").textContent="Esta es la pregunta que trajo el tuc\xE1n. Respondela en el cartel de la estaci\xF3n, con las manos o con el teclado.",V("cartaFuente").textContent=""):(V("cartaTipo").textContent=i?"Telegrama":"Carta de \xE9poca",V("cartaTexto").textContent=n.curiosidad,V("cartaNota").textContent=i?"Recreaci\xF3n ficticia: el papel y el formato del telegrama son ilustrativos. El dato de arriba es de la investigaci\xF3n.":"Recreaci\xF3n ilustrativa del formato de carta. El dato de arriba es de la investigaci\xF3n.",V("cartaFuente").textContent=`Fuente indicada por NotebookLM: ${n.fuente}`),V("cartaContador").textContent=`Cartas y telegramas: ${ga}/${Ss.totalCartas}`,Cn=!0,zi("pantallaCarta"),setTimeout(()=>V("btnCerrarCarta").focus(),60)}function ST(){let e=null,t=1/0;for(let i of is.algodones){if(i.got)continue;let s=xt.z-i.z;s<-1.5||s>12||Math.abs(i.x-xt.x)>1.6||Math.abs(s)<t&&(t=Math.abs(s),e=i)}if(e){e.got=!0,bv(e);return}let n=Ss.recoger(xt.x,xt.z,!0);n?Sv(n):Mi("No hay nada cerca: acercate y levant\xE1 la mano","",1e3)}function ET(e){if(!(Et!=="cartel"||Qn)){if(Dn==="historia"){md();return}if(Dn==="pregunta"){if(Bi[re].estado){Vm();return}gd(e==="izq"?0:e==="der"?1:2);return}if(Bi[re].vf!==void 0){_d();return}e==="izq"?pa(!0):e==="der"&&pa(!1)}}function TT(){let e=Ce.consumirEventos();if(on==="pantallaCarta"&&e.some(t=>t.tipo==="responde"||t.tipo==="recoge")){ss();return}if(!(Cn||on))for(let t of e)t.tipo==="carril"&&Et==="caminando"?Hc(t.d):t.tipo==="recoge"&&Et==="caminando"?ST():t.tipo==="responde"&&ET(t.lado)}function wT(e){if(e.golpeado=!0,xt.golpe=.55,xt.v*=.2,yi=Math.max(0,yi-5),an.golpe(),ai.emitir(e.x,1,e.z,"#ffb26b",14,3,.6,7),Mi("\xA1Uy! Un obst\xE1culo (\u22125)","malo",900),!Zt.movimiento){let t=V("destello");t.classList.add("ver"),setTimeout(()=>t.classList.remove("ver"),90)}qs()}function AT(e){let t=7.6*Zt.velocidad,n=re<we?No(re):gc,i=cn&&Ce.activo&&Ce.caminando,s=qc.avance||cd||Zt.sentado||i?t:0,r=xt.z-n;s*=pc(r/7,.2,1),xt.golpe>0&&(xt.golpe-=e,s=0),xt.v=ur(xt.v,s,7,e);let o=xt.v*e;if(xt.z-=o,dd+=Math.max(0,o),xt.v>.3&&(ud+=e),xt.x=ur(xt.x,dr[xt.lane],12,e),xt.y=mc(xt.z),ad+=e,!cn){for(let c of is.algodones)!c.got&&Math.abs(c.z-xt.z)<1.25&&Math.abs(c.x-xt.x)<1.3&&(c.got=!0,bv(c));let a=Ss.recoger(xt.x,xt.z,!1);a&&Sv(a)}if(Zt.obstaculos)for(let a of is.obstaculos)!a.golpeado&&Math.abs(a.z-xt.z)<1&&Math.abs(a.x-xt.x)<1.2&&wT(a);xt.z<=n+.02&&(xt.z=n,xt.v=0,re<we?Mv(re):CT())}var Om=0;function CT(){Et="celebracion",Om=0,xt.saludo=!0,an.final(),ai.confeti(0,3,gc-8),Mi("\xA1Llegaste a El Colorado!","bueno bajo",2600),Hn()}function pv(e){let t=Math.round(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function RT(){Et="final",xt.saludo=!1;let e=cn?Ce.pasos:Math.round(dd/.75);V("finalPasos").textContent=String(e),V("finalMov").textContent=pv(ud);let t=Number(Zt.peso);V("finalCalorias").textContent=t>0?`${Math.round(3.5*t*(ad/3600))} kcal`:"Ingres\xE1 tu peso",V("finalNotaEstim").textContent=`Las calor\xEDas son una estimaci\xF3n (3,5 \xD7 peso en kg \xD7 horas de juego), no una medici\xF3n.${cn?" Los pasos se contaron con la c\xE1mara.":" Los pasos se estimaron seg\xFAn la distancia recorrida."}`,V("finalPuntos").textContent=String(yi),V("finalAciertos").textContent=`${ha}/${we}`,V("finalVF").textContent=`${zm}/${we}`,V("finalCartas").textContent=`${ga}/${Ss.totalCartas}`,V("finalDorados").textContent=`${Xc}/${Ss.totalDorados}`,V("finalAlgodon").textContent=String(Wc),V("finalTiempo").textContent=pv(ad),cn&&Ce.detener();let n=ha>=8?3:ha>=6?2:ha>=3?1:0;V("finalEstrellas").innerHTML=[0,1,2].map(s=>`<span class="${s<n?"on":""}">\u2605</span>`).join(""),V("finalMedalla").textContent=["\xA1Segu\xED explorando! Cada estaci\xF3n te cuenta algo nuevo.","\xA1Buen comienzo! Volv\xE9 a jugar para descubrir m\xE1s.","\xA1Muy buen recorrido por la historia de El Colorado!","\xA1Excelente! Conoc\xE9s muy bien la historia de El Colorado."][n];let i=V("finalLista");i.innerHTML="",Mn.forEach((s,r)=>{let o=Bi[r],a=document.createElement("li"),c=o.estado==="primera"?"s1":o.estado==="segunda"?"s2":"s0",l=o.estado==="primera"||o.estado==="segunda"?"\u2713":"\u2717";a.innerHTML=`<span class="sello ${c}">${l}</span><span></span><em>${o.puntos||0}</em>`,a.children[1].textContent=`${s.orden}. ${s.lugar}`,i.appendChild(a)}),Hn(),zi("pantallaFinal")}function _a(e=!1){an.iniciar(),cn=e&&Ce.activo,Qn=!1,V("btnVolverCartel").classList.add("oculto"),fd(),Yc.forEach(t=>V(t).classList.add("oculto")),on=null,V("cartel").classList.add("oculto"),Cn=!1,cn?(Ce.reiniciarCalibracion(),Et="calibrando"):Et="caminando",qs(),Hn(),Mi(cn?"Calibraci\xF3n: quedate quieto y de frente":"\xA1Empez\xF3 la misi\xF3n! Camin\xE1 hacia la primera estaci\xF3n","",2400)}async function IT(){Yc.forEach(e=>V(e).classList.add("oculto")),on=null,V("cargando").classList.remove("oculto");try{await Ce.iniciar(e=>{V("cargandoTexto").textContent=e}),V("cargando").classList.add("oculto"),_a(!0)}catch(e){V("cargando").classList.add("oculto"),Ce.detener(),cn=!1,V("inicioError").textContent=`No se pudo usar la c\xE1mara: ${e.message||e} Pod\xE9s jugar con el teclado.`,V("inicioError").classList.remove("oculto"),Hn(),setTimeout(()=>V("btnJugarTeclado").focus(),30)}}function Ev(){if(cn&&!Ce.activo){zi("pantallaCamara");return}_a(cn)}function Tv(){Xr(),Qn=!1,V("btnVolverCartel").classList.add("oculto"),Yc.forEach(e=>V(e).classList.add("oculto")),on=null,V("cartel").classList.add("oculto"),Ce.detener(),cn=!1,Et="inicio",Cn=!1,fd(),V("inicioError").classList.add("oculto"),Hn(),setTimeout(()=>V("btnJugarCamara").focus(),30)}function Wr(){Cn||Et!=="caminando"&&Et!=="cartel"&&Et!=="calibrando"||(Cn=!0,mT=Et,Xr(),zi("pantallaPausa"))}function ld(){Cn&&(Cn=!1,ss(),Et==="cartel"&&setTimeout(()=>{var e;return(e=V("btnSeguir").classList.contains("oculto")?V("cartelHistoria").classList.contains("oculto")?V("opciones").querySelector("button:not(:disabled)"):V("btnAPregunta"):V("btnSeguir"))==null?void 0:e.focus()},40))}function wv(e){Qn=!1,V("btnVolverCartel").classList.add("oculto"),Yc.forEach(n=>V(n).classList.add("oculto")),on=null,Cn=!1,V("cartel").classList.add("oculto"),Xr(),(Et==="inicio"||Et==="final")&&(an.iniciar(),fd()),re=pc(e,0,we);let t=re<we?No(re):gc;Object.assign(xt,{z:t+22,x:0,lane:1,v:0,golpe:0,saludo:!1}),is.paradas.forEach((n,i)=>n.hecho=i<re),Et="caminando",qs(),Hn()}function PT(){let e=V("saltos");e.innerHTML="";for(let t=0;t<=we;t++){let n=document.createElement("button");n.className="btn btn-chico",n.textContent=t<we?String(t+1):"Meta",n.title=t<we?Mn[t].lugar:"Meta",n.addEventListener("click",()=>wv(t)),e.appendChild(n)}}var LT=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyW","KeyA","KeyS","KeyD"]);window.addEventListener("keydown",e=>{let t=e.code,n=e.target&&(e.target.tagName==="BUTTON"||e.target.tagName==="SELECT"||e.target.tagName==="INPUT"||e.target.tagName==="SUMMARY");if(LT.has(t)&&!n&&e.preventDefault(),!(e.altKey||e.ctrlKey||e.metaKey)){if(t==="Escape"){if(on&&on!=="pantallaPausa"&&on!=="pantallaFinal"){ss();return}if(Cn){ld();return}if(Et==="cartel"&&Qn){fa(!1);return}(Et==="caminando"||Et==="cartel"||Et==="calibrando")&&Wr();return}if(t==="KeyP"&&!e.repeat){Cn?ld():Wr();return}if(t==="KeyM"&&!e.repeat){Zt.sonido=!Zt.sonido,hd(),pd();return}if(t==="KeyO"&&!e.repeat&&Et!=="inicio"&&!on){Av();return}if(on==="pantallaCarta"&&!e.repeat&&(t==="Enter"||t==="Space")){ss();return}if(!on){if(Et==="cartel"&&t==="KeyV"&&!e.repeat){fa();return}if(Et==="cartel"&&Qn){(t==="Enter"||t==="Space")&&!n&&fa(!1);return}if(Et==="inicio"){(t==="Enter"||t==="Space")&&!n&&_a();return}if(Et==="caminando"){(t==="ArrowUp"||t==="KeyW")&&(qc.avance=!0),e.repeat||((t==="ArrowLeft"||t==="KeyA")&&Hc(-1),(t==="ArrowRight"||t==="KeyD")&&Hc(1));return}if(Et==="cartel"&&!e.repeat)if(Dn==="historia")(t==="Enter"||t==="Space")&&!n&&md();else if(Dn==="pregunta"){let i={Digit1:0,Digit2:1,Digit3:2,Numpad1:0,Numpad2:1,Numpad3:2,KeyA:0,KeyB:1,KeyC:2}[t];i!==void 0?gd(i):(t==="Enter"||t==="Space")&&!n&&Bi[re].estado&&Vm()}else Dn==="vf"&&(t==="KeyT"?pa(!0):t==="KeyF"?pa(!1):(t==="Enter"||t==="Space")&&!n&&Bi[re].vf!==void 0&&_d())}}});window.addEventListener("keyup",e=>{(e.code==="ArrowUp"||e.code==="KeyW")&&(qc.avance=!1)});window.addEventListener("blur",()=>{qc.avance=!1,cd=!1,(Et==="caminando"||Et==="calibrando")&&Wr()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Et==="caminando"||Et==="calibrando")&&Wr()});function Av(){Cn||Wr(),zi("pantallaOpciones",Cn?"pantallaPausa":null)}function DT(e,t,n){let i=r=>{r.preventDefault(),e.classList.add("on"),t()},s=()=>{e.classList.remove("on"),n()};e.addEventListener("pointerdown",i),e.addEventListener("pointerup",s),e.addEventListener("pointerleave",s),e.addEventListener("pointercancel",s)}DT(V("tcAvanzar"),()=>{cd=!0,an.iniciar()},()=>{cd=!1});V("tcIzq").addEventListener("click",()=>Hc(-1));V("tcDer").addEventListener("click",()=>Hc(1));V("btnJugarCamara").addEventListener("click",()=>{V("inicioError").classList.add("oculto"),zi("pantallaCamara")});V("btnJugarTeclado").addEventListener("click",()=>_a(!1));V("btnAceptarCamara").addEventListener("click",IT);V("btnTecladoCamara").addEventListener("click",()=>{ss(),_a(!1)});V("btnVolverCamara").addEventListener("click",()=>{ss(),setTimeout(()=>V("btnJugarCamara").focus(),30)});V("opcPeso").addEventListener("change",e=>{let t=parseFloat(e.target.value);xa({peso:t>0&&t<300?Math.round(t):null})});V("btnComoSeJuega").addEventListener("click",()=>zi("pantallaAyuda"));V("btnOpcionesInicio").addEventListener("click",()=>zi("pantallaOpciones"));V("btnAcerca").addEventListener("click",()=>zi("pantallaAcerca"));V("btnCreditos").addEventListener("click",()=>zi("pantallaCreditos"));V("btnCerrarCreditos").addEventListener("click",ss);V("btnCerrarCarta").addEventListener("click",ss);V("btnCerrarAyuda").addEventListener("click",ss);V("btnCerrarAcerca").addEventListener("click",ss);V("btnCerrarOpciones").addEventListener("click",()=>{hd(),ss()});V("btnPausa").addEventListener("click",Wr);V("btnAccesib").addEventListener("click",Av);V("btnSonido").addEventListener("click",()=>{an.iniciar(),Zt.sonido=!Zt.sonido,hd(),pd()});V("btnContinuar").addEventListener("click",ld);V("btnOpcionesPausa").addEventListener("click",()=>zi("pantallaOpciones","pantallaPausa"));V("btnReiniciar").addEventListener("click",Ev);V("btnAlInicio").addEventListener("click",Tv);V("btnOtraVez").addEventListener("click",Ev);V("btnFinalInicio").addEventListener("click",Tv);V("btnAPregunta").addEventListener("click",md);V("btnVerLugar").addEventListener("click",()=>fa(!0));V("btnVolverCartel").addEventListener("click",()=>fa(!1));V("btnSeguir").addEventListener("click",Vm);V("btnVerdadero").addEventListener("click",()=>pa(!0));V("btnFalso").addEventListener("click",()=>pa(!1));V("btnSeguirVF").addEventListener("click",_d);V("btnLeer").addEventListener("click",()=>{Et==="cartel"&&yv(`${Mn[re].titulo}. ${Mn[re].anioTexto} ${Mn[re].historia} \xBFSab\xEDas que? ${Mn[re].curiosidad}`)});V("btnLeerPregunta").addEventListener("click",()=>{if(Et==="cartel"){let e=Mn[re];yv(`${e.pregunta} Opci\xF3n A: ${e.opciones[es[0]]}. Opci\xF3n B: ${e.opciones[es[1]]}. Opci\xF3n C: ${e.opciones[es[2]]}.`)}});var xa=e=>{Zt={...Zt,...e},hd(),pd()};V("opcTextoMenos").addEventListener("click",()=>{let e=Math.max(0,ua.indexOf(Zt.texto)-1);xa({texto:ua[e]})});V("opcTextoMas").addEventListener("click",()=>{let e=ua.indexOf(Zt.texto);xa({texto:ua[Math.min(ua.length-1,(e<0?1:e)+1)]})});V("opcVelocidad").addEventListener("change",e=>xa({velocidad:parseFloat(e.target.value)}));for(let[e,t]of[["opcSentado","sentado"],["opcContraste","contraste"],["opcMovimiento","movimiento"],["opcObstaculos","obstaculos"],["opcSonido","sonido"],["opcLiviano","liviano"],["opcTactil","tactil"],["opcEquipo","equipo"]])V(e).addEventListener("change",n=>xa({[t]:n.target.checked}));ua.includes(Zt.texto)||(Zt.texto=1);var mv=performance.now(),la=new P,gv=new P;function NT(e){if(window.__camLibre)return;if(Et==="inicio"||Et==="final"){let i=.55+.45*Math.sin(da*.11),s=16,r=Ye(0)-2;Ze.position.set(s+Math.sin(i)*40-8,7.5+Math.sin(da*.17)*1.2,r+Math.cos(i)*36),la.set(s+6,4.2,r-4),Ze.lookAt(la);return}if(Et==="cartel"&&Qn){let[i,s]=gT[re],r=Ye(re),o=i<0?1:-1,a=i===0?36:31,c=(i===0?0:o*.62)+Math.sin(da*.3)*.38;gv.set(i+Math.sin(c)*a,8.5,r+s+Math.cos(c)*a),Ze.position.lerp(gv,1-Math.exp(-3*e)),la.set(i,2.6+(i===0?1.2:0),r+s),Ze.lookAt(la);return}let t=xt.golpe>0&&!Zt.movimiento?(Math.random()-.5)*.18:0,n=xt.x*.6;Ze.position.x=ur(Ze.position.x,n,7,e)+t,Ze.position.y=ur(Ze.position.y,3.3+xt.y,6,e),Ze.position.z=ur(Ze.position.z,xt.z+7.6+xt.v*.06,14,e),la.set(xt.x*.75,1.55+xt.y,xt.z-9),Ze.lookAt(la)}var rd=0,Vc=0,od=0;function UT(e){if(window.__noAutoLiviano||Zt.liviano||cn||Et!=="caminando"||Cn){rd=0,Vc=0;return}rd+=e,Vc++,Vc>=90&&(od=rd/Vc>.05?od+1:0,rd=0,Vc=0,od>=2&&(xa({liviano:!0}),Mi("Activamos los gr\xE1ficos livianos para que vaya m\xE1s fluido","",3200),od=0))}function Cv(){requestAnimationFrame(Cv);let e=performance.now(),t=Math.min((e-mv)/1e3,.05);mv=e,Cn||(da+=t);let n=!Cn;UT(t),cn&&Ce.activo&&(Ce.actualizar(n?t:0),Ce.nuevaSilueta&&(Bm.needsUpdate=!0,Ce.nuevaSilueta=!1),TT(),n&&Et==="calibrando"&&Ce.calibrado&&(Et="caminando",Mi("\xA1Listo! Camin\xE1 en el lugar para avanzar","",2e3),Hn()),n&&MT());let i=cn&&Ce.activo&&Et!=="inicio"&&Et!=="final";Hr.visible=i,i&&pT(),n&&Et==="caminando"?AT(t):n&&(Et==="cartel"||Et==="calibrando")?(xt.v=ur(xt.v,0,8,t),xt.x=ur(xt.x,dr[xt.lane],12,t)):n&&Et==="celebracion"&&(xt.v=0,Om+=t,Math.random()<t*2.2&&ai.confeti(xt.x,3,xt.z-6),Om>3.2&&RT());let s=Et!=="inicio"&&Et!=="final";Gc.objeto.visible=s&&!i,s&&(Gc.objeto.position.set(xt.x,xt.y,xt.z),Gc.actualizar(n?t:0,xt.v,xt.saludo,(dr[xt.lane]-xt.x)*.5,xt.golpe>0)),n&&(NT(t),is.actualizar(da,t,s?xt.z:Ye(0),Ze),Ss.actualizar(da,t,xt.z),Et==="caminando"&&Math.random()<t*3&&ai.emitir(xt.x+(Math.random()-.5)*16,.5+Math.random()*4,xt.z-6-Math.random()*40,"#fff3c4",1,.3,3,.15),ai.actualizar(t));let r=s?xt.z:Ye(0);ns.target.position.set(xt.x,0,r-8),ns.position.set(xt.x+_c.x*70,_c.y*70,r-8+_c.z*70),ns.target.updateMatrixWorld(),s?vT():V("hudDestino").style.visibility="hidden",Ws.render(Xs,Ze)}xT();PT();_T();fd();pd();Hn();Cv();setTimeout(()=>V("btnJugarCamara").focus(),50);window.__MB={cuerpo:Ce,get modoCamara(){return cn},get tMov(){return ud},get distRec(){return dd},alternarVerLugar:fa,jugar:_a,irAEstacion:wv,abrirCartel:Mv,irAPregunta:md,responder:gd,cerrarCartel:_d,pausar:Wr,continuar:ld,get ordenOpc(){return es},get estado(){return Et},get paso(){return Dn},get estacion(){return re},get puntos(){return yi},get algodon(){return Wc},get cartasRec(){return ga},get doradosRec(){return Xc},get vainas(){return km},extras:Ss,J:xt,mundo:is,camara:Ze,renderer:Ws,teclas:qc};})();
