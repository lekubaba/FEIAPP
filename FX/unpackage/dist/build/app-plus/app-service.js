var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
Z([3,'_view center-top'])
Z([[7],[3,'isQRCODE']])
Z([[7],[3,'isActivity']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
Z([[7],[3,'isUpdate']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'undefined'])
Z([3,'_view reward-cons'])
Z([[7],[3,'isSeenB']])
Z([[7],[3,'isSeenC']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'undefined'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','./pages/agent/agent.vue.wxml','./pages/agent/agent.wxml','./agent.vue.wxml','./pages/alipay/alipay.vue.wxml','./pages/alipay/alipay.wxml','./alipay.vue.wxml','./pages/center/center.vue.wxml','./pages/center/center.wxml','./center.vue.wxml','./pages/groups/groups.vue.wxml','./pages/groups/groups.wxml','./groups.vue.wxml','./pages/guize/guize.vue.wxml','./pages/guize/guize.wxml','./guize.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/methods/methods.vue.wxml','./pages/methods/methods.wxml','./methods.vue.wxml','./pages/myself/myself.vue.wxml','./pages/myself/myself.wxml','./myself.vue.wxml','./pages/profile/profile.vue.wxml','./pages/profile/profile.wxml','./profile.vue.wxml','./pages/reward/reward.vue.wxml','./pages/reward/reward.wxml','./reward.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/agent/agent.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
var fE=_v()
_(r,fE)
cs.push("./pages/agent/agent.wxml:template:2:6")
var cF=_oz(z,1,e,s,gg)
var hG=_gd(x[2],cF,e_,d_)
if(hG){
var oH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[2],2,18)
cs.pop()
oD.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/alipay/alipay.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lK=e_[x[5]].i
_ai(lK,x[6],e_,x[5],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/alipay/alipay.wxml:template:2:6")
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[5],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[5],2,18)
cs.pop()
lK.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/center/center.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./pages/center/center.vue.wxml:view:1:28")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/center/center.vue.wxml:view:1:948")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/center/center.vue.wxml:view:1:1363")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oR=e_[x[8]].i
_ai(oR,x[9],e_,x[8],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/center/center.wxml:template:2:6")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[8],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[8],2,18)
cs.pop()
oR.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[10]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/groups/groups.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lY=e_[x[11]].i
_ai(lY,x[12],e_,x[11],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/groups/groups.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[11],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[11],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[11]]={f:m8,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[13]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/guize/guize.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o6=e_[x[14]].i
_ai(o6,x[15],e_,x[14],1,1)
var f7=_v()
_(r,f7)
cs.push("./pages/guize/guize.wxml:template:2:6")
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[14],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[14],2,18)
cs.pop()
o6.pop()
return r
}
e_[x[14]]={f:m10,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[16]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:1:575")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lCB=e_[x[17]].i
_ai(lCB,x[18],e_,x[17],1,1)
var aDB=_v()
_(r,aDB)
cs.push("./pages/index/index.wxml:template:2:6")
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[17],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[17],2,18)
cs.pop()
lCB.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[19]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oJB=e_[x[20]].i
_ai(oJB,x[21],e_,x[20],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/login/login.wxml:template:2:6")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[20],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[20],2,18)
cs.pop()
oJB.pop()
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[22]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/methods/methods.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lQB=e_[x[23]].i
_ai(lQB,x[24],e_,x[23],1,1)
var aRB=_v()
_(r,aRB)
cs.push("./pages/methods/methods.wxml:template:2:6")
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[23],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[23],2,18)
cs.pop()
lQB.pop()
return r
}
e_[x[23]]={f:m16,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[25]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myself/myself.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[25]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oXB=e_[x[26]].i
_ai(oXB,x[27],e_,x[26],1,1)
var fYB=_v()
_(r,fYB)
cs.push("./pages/myself/myself.wxml:template:2:6")
var cZB=_oz(z,1,e,s,gg)
var h1B=_gd(x[26],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[26],2,18)
cs.pop()
oXB.pop()
return r
}
e_[x[26]]={f:m18,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[28]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/profile/profile.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[28]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var l5B=e_[x[29]].i
_ai(l5B,x[30],e_,x[29],1,1)
var a6B=_v()
_(r,a6B)
cs.push("./pages/profile/profile.wxml:template:2:6")
var t7B=_oz(z,1,e,s,gg)
var e8B=_gd(x[29],t7B,e_,d_)
if(e8B){
var b9B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a6B.wxXCkey=3
e8B(b9B,b9B,a6B,gg)
gg.f=cur_globalf
}
else _w(t7B,x[29],2,18)
cs.pop()
l5B.pop()
return r
}
e_[x[29]]={f:m20,j:[],i:[],ti:[x[30]],ic:[]}
d_[x[31]]={}
d_[x[31]]["undefined"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[31]+':undefined'
r.wxVkey=b
gg.f=$gdc(f_["./pages/reward/reward.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
cs.push("./pages/reward/reward.vue.wxml:view:1:55")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/reward/reward.vue.wxml:view:1:469")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/reward/reward.vue.wxml:view:1:1577")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[31]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oBC=e_[x[32]].i
_ai(oBC,x[33],e_,x[32],1,1)
var fCC=_v()
_(r,fCC)
cs.push("./pages/reward/reward.wxml:template:2:6")
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[32],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[32],2,18)
cs.pop()
oBC.pop()
return r
}
e_[x[32]]={f:m22,j:[],i:[],ti:[x[33]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/guize/guize","pages/login/login","pages/center/center","pages/methods/methods","pages/groups/groups","pages/myself/myself","pages/agent/agent","pages/profile/profile","pages/reward/reward","pages/alipay/alipay"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"飞侠","navigationBarBackgroundColor":"#28303B","backgroundColor":"#E6E8EC","backgroundColorTop":"#E6E8EC","backgroundColorBottom":"#E6E8EC","onPullDownRefresh":true,"onReachBottomDistance":50},"usingComponents":{},"tabBar":{"color":"#b9bbbc","selectedColor":"#c53b34","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/center/center","iconPath":"static/images/tab_icon/home.png","selectedIconPath":"static/images/tab_icon/home_fill.png","text":"首页"},{"pagePath":"pages/methods/methods","iconPath":"static/images/tab_icon/methods.png","selectedIconPath":"static/images/tab_icon/methods_fill.png","text":"锦囊"},{"pagePath":"pages/groups/groups","iconPath":"static/images/tab_icon/group.png","selectedIconPath":"static/images/tab_icon/group_fill.png","text":"代理"},{"pagePath":"pages/myself/myself","iconPath":"static/images/tab_icon/mine.png","selectedIconPath":"static/images/tab_icon/mine_fill.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"飞侠","compilerVersion":"1.9.4"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/agent/agent.json']={"usingComponents":{},"navigationBarTitleText":"添加代理"};
__wxAppCode__['pages/agent/agent.wxml']=$gwx('./pages/agent/agent.wxml');

__wxAppCode__['pages/alipay/alipay.json']={"usingComponents":{},"navigationBarTitleText":"绑定支付宝"};
__wxAppCode__['pages/alipay/alipay.wxml']=$gwx('./pages/alipay/alipay.wxml');

__wxAppCode__['pages/center/center.json']={"usingComponents":{},"navigationBarTitleText":"","enablePullDownRefresh":false,"onReachBottomDistance":50};
__wxAppCode__['pages/center/center.wxml']=$gwx('./pages/center/center.wxml');

__wxAppCode__['pages/groups/groups.json']={"usingComponents":{},"navigationBarTitleText":"我的代理","onReachBottomDistance":50};
__wxAppCode__['pages/groups/groups.wxml']=$gwx('./pages/groups/groups.wxml');

__wxAppCode__['pages/guize/guize.json']={"usingComponents":{},"navigationBarTitleText":"三级返佣规则","navigationBarBackgroundColor":"#28303B","navigationBarTextStyle":"white","backgroundColorTop":"#E6E8EC","backgroundColorBottom":"#E6E8EC"};
__wxAppCode__['pages/guize/guize.wxml']=$gwx('./pages/guize/guize.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"navigationBarTitleText":"","navigationBarBackgroundColor":"#E6E8EC","backgroundColorTop":"#E6E8EC","backgroundColorBottom":"#E6E8EC","enablePullDownRefresh":false,"titleNView":false};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{},"navigationBarTitleText":"代理登录","navigationBarBackgroundColor":"#28303B","navigationBarTextStyle":"white","backgroundColorTop":"#E6E8EC","backgroundColorBottom":"#E6E8EC"};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/methods/methods.json']={"usingComponents":{},"titleNView":false,"statusbar":{"background":"#E43D3D"}};
__wxAppCode__['pages/methods/methods.wxml']=$gwx('./pages/methods/methods.wxml');

__wxAppCode__['pages/myself/myself.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/myself/myself.wxml']=$gwx('./pages/myself/myself.wxml');

__wxAppCode__['pages/profile/profile.json']={"usingComponents":{},"navigationBarTitleText":"本月详情"};
__wxAppCode__['pages/profile/profile.wxml']=$gwx('./pages/profile/profile.wxml');

__wxAppCode__['pages/reward/reward.json']={"usingComponents":{},"navigationBarTitleText":"奖金自动发至支付宝"};
__wxAppCode__['pages/reward/reward.wxml']=$gwx('./pages/reward/reward.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{4173:function(t,e,n){"use strict";n.r(e);var o=n("8d67"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"8d67":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log("App Launch"),plus.screen.lockOrientation("portrait-primary"),t.request({url:"http://wx.feidaijun.com/appUpdate",data:{appid:"__UNI__DE0106F",version:"1.0.2"},success:function(e){if(200==e.statusCode&&e.data.isUpdate){"iOS"===plus.os.name?e.data.iOS:e.data.Android;if(!t.getStorageSync("userInfo"))return void t.setStorageSync("AppUpdata",e.data);t.removeStorage({key:"userInfo",success:function(){t.setStorageSync("AppUpdata",e.data)}})}}})},onShow:function(){},onHide:function(){}};e.default=n}).call(this,n("6e42")["default"])},"958c":function(t,e,n){"use strict";n.r(e);var o=n("4173");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("fae7");var r,u,c=n("2877"),i=Object(c["a"])(o["default"],r,u,!1,null,null,null);e["default"]=i.exports},c434:function(t,e,n){},fae7:function(t,e,n){"use strict";var o=n("c434"),a=n.n(o);a.a},fe3f:function(t,e,n){"use strict";n("5964");var o=r(n("f3d3")),a=r(n("958c"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,o.default.prototype.$FXUrl="http://wx.feidaijun.com",a.default.mpType="app";var i=new o.default(u({},a.default));i.$mount()}},[["fe3f","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},5964:function(t,e,n){},"6e42":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=gt,e.createPage=wt,e.createComponent=At,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function c(t){return"function"===typeof t}function u(t){return"string"===typeof t}function f(t){return"[object Object]"===a.call(t)}function p(t,e){return s.call(t,e)}function l(){}function d(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var h=/-(\w)/g,v=d(function(t){return t.replace(h,function(t,e){return e?e.toUpperCase():""})}),_=/requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,y=/^create|Manager$/,m=/^on/;function g(t){return y.test(t)}function $(t){return _.test(t)}function b(t){return m.test(t)}function w(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function x(t){return!(g(t)||$(t)||b(t))}function A(t,e){return x(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return c(t.success)||c(t.fail)||c(t.complete)?e.apply(void 0,[t].concat(r)):w(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}:e}var O=1e-4,k=750,C=!1,S=0,P=0;function j(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;S=r,P=n,C="ios"===e}function E(t,e){if(0===S&&j(),t=Number(t),0===t)return 0;var n=t/k*(e||S);return n<0&&(n=-n),n=Math.floor(n+O),0===n?1!==P&&C?.5:1:t<0?-n:n}var I={},T=["success","fail","cancel","complete"];function D(t,e,n){return function(r){return e(M(t,r,n))}}function N(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(f(e)){var i=!0===o?e:{};for(var a in c(n)&&(n=n(e,i)||{}),e)if(p(n,a)){var s=n[a];c(s)&&(s=s(e[a],e,i)),s?u(s)?i[s]=e[a]:f(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==T.indexOf(a)?i[a]=D(t,e[a],r):o||(i[a]=e[a]);return i}return c(e)&&(e=D(t,e,r)),e}function M(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(I.returnValue)&&(e=I.returnValue(t,e)),N(t,e,n,{},r)}function R(t,e){if(p(I,t)){var n=I[t];return n?function(e,r){var o=n;c(n)&&(o=n(e)),e=N(t,e,o.args,o.returnValue);var i=wx[o.name||t](e,r);return $(t)?M(t,i,o.returnValue,g(t)):i}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var B=Object.create(null),V=["subscribePush","unsubscribePush","onPush","offPush","share"];function U(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};c(n)&&n(o),c(r)&&r(o)}}function L(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}V.forEach(function(t){B[t]=U(t)});var W=Object.freeze({requireNativePlugin:L}),F=Page,H=Component,z=/:/g,J=d(function(t){return v(t.replace(z,"-"))});function q(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[J(n)].concat(o))}}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="onLoad",n=t[e];return t[e]=n?function(){q(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){q(this)},F(t)};var K=Behavior({created:function(){q(this)}});Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t.behaviors||(t.behaviors=[])).unshift(K),H(t)};var G=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function X(t,e){t.triggerEvent("__l",t.$vm||e,{bubbles:!0,composed:!0})}function Z(t){t.detail.$mp?t.detail.$parent||(t.detail.$parent=this.$vm,t.detail.$parent.$children.push(t.detail),t.detail.$root=this.$vm.$root):t.detail.parent||(t.detail.parent=this.$vm)}function Q(t){Y(t)}function Y(t){t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))}}function tt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){p(n,e)&&(t[e]=n[e])})}function et(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm.__call_hook(e,t)}})}function nt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return f(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||p(n,t)||(n[t]=r[t])}),n}var rt=[String,Number,Boolean,Object,Array,null];function ot(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function it(t){var e=t["behaviors"],n=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var i=[];return Array.isArray(e)&&e.forEach(function(t){i.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]=String,o["value"]=null))}),f(n)&&n.props&&i.push(Behavior({properties:st(n.props,!0)})),Array.isArray(r)&&r.forEach(function(t){f(t)&&t.props&&i.push(Behavior({properties:st(t.props,!0)}))}),i}function at(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function st(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:ot(t)}}):f(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(f(o)){var i=o["default"];c(i)&&(i=i()),o.type=at(e,o.type,i,n),r[e]={type:-1!==rt.indexOf(o.type)?o.type:null,value:i,observer:ot(e)}}else{var a=at(e,o,null,n);r[e]={type:-1!==rt.indexOf(a)?a:null,observer:ot(e)}}}),r}function ct(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=l,t.preventDefault=l,t.target=t.target||{},p(t,"detail")||(t.detail={}),f(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function ut(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):f(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function ft(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=ut(t,e)}),r}function pt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=ft(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(pt(t)):"string"===typeof t&&p(s,t)?c.push(s[t]):c.push(t)}),c}var dt="~",ht="^";function vt(t){var e=this;t=ct(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===ht;o=a?o.slice(1):o;var s=o.charAt(0)===dt;o=s?o.slice(1):o,i&&r===o&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm[r];if(!c(o))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(e.$vm,lt(e.$vm,t,n[1],n[2],a,r))}})})}function _t(t){var e=t.$mp[t.mpType];Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}var yt=["onHide","onError","onPageNotFound","onUniNViewMessage"];function mt(t){this.$vm||(this.$vm=t,this.$vm.$mp={app:this})}function gt(t){r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(_t(this),tt(this,G)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var e={onLaunch:function(e){mt.call(this,t),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onLaunch",e)},onShow:function(e){mt.call(this,t),this.$vm.__call_hook("onShow",e)}};return e.globalData=t.$options.globalData||{},et(e,yt),App(e),t}var $t=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function bt(t){this.$vm||(this.$vm=new t({mpType:"page",mpInstance:this}),this.$vm.__call_hook("created"),this.$vm.$mount())}function wt(t){var e;t=t.default||t,c(t)?(e=t,t=e.extendOptions):e=r.default.extend(t);var n={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),lifetimes:{attached:function(){bt.call(this,e)},ready:function(){this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},methods:{onLoad:function(t){bt.call(this,e),this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},onUnload:function(){this.$vm.__call_hook("onUnload")},__e:vt,__l:Z}};return et(n.methods,$t),Q(n),Component(n)}function xt(t){if(!this.$vm){var e={mpType:"component",mpInstance:this,propsData:this.properties};this.$vm=new t(e);var n=this.properties.vueSlots;if(Array.isArray(n)&&n.length){var r=Object.create(null);n.forEach(function(t){r[t]=!0}),this.$vm.$scopedSlots=this.$vm.$slots=r}this.$vm.$mount()}}function At(t){t=t.default||t;var e=it(t),n=st(t.props,!1,t.__file),o=r.default.extend(t),i={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),behaviors:e,properties:n,lifetimes:{attached:function(){xt.call(this,o)},ready:function(){xt.call(this,o),X(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__e:vt,__l:Z}};return Y(i),Component(i)}var Ot={};"undefined"!==typeof Proxy?Ot=new Proxy({},{get:function(t,e){return"upx2px"===e?E:W[e]?A(e,W[e]):p(wx,e)||p(I,e)?A(e,R(e,wx[e])):void 0}}):(Ot.upx2px=E,Object.keys(W).forEach(function(t){Ot[t]=A(t,W[t])}),Object.keys(wx).forEach(function(t){(p(wx,t)||p(I,t))&&(Ot[t]=A(t,R(t,wx[t])))}));var kt=Ot,Ct=kt;e.default=Ct},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function $(t,e){return g.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/([^-])([A-Z])/g,k=b(function(t){return t.replace(O,"$1-$2").replace(O,"$1-$2").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function E(t,e,n){}var I=function(t,e,n){return!1},T=function(t){return t};function D(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function N(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:E,parsePlatformTagName:T,mustUseProp:I,_lifecycleHooks:V},L=Object.freeze({});function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function F(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function z(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J=E;function q(t,e,n){if(U.errorHandler)U.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var K,G="__proto__"in{},X="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===K&&(K=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),K},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(E)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){q(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){m(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function pt(t){ut.target&&ft.push(ut.target),ut.target=t}function lt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];F(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),_t={shouldConvert:!0},yt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,F(t,"__ob__",this),Array.isArray(t)){var e=G?mt:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function gt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];F(t,i,e[i])}}function $t(t,e){var n;if(u(t))return $(t,"__ob__")&&t.__ob__ instanceof yt?n=t.__ob__:_t.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new yt(t)),e&&n&&n.vmCount++,n}function bt(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&$t(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&At(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&$t(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if($(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(bt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||$(t,e)&&(delete t[e],n&&n.dep.notify())}}function At(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&At(e)}yt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)bt(t,e[n],t[e[n]])},yt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)$t(t[e])};var Ot=U.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],$(t,n)?p(r)&&p(o)&&kt(r,o):wt(t,n,o);return t}function Ct(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function St(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Pt(t,e){var n=Object.create(t||null);return e?P(n,e):n}Ot.data=function(t,e,n){return n?Ct(t,e,n):e&&"function"!==typeof e?t:Ct.call(this,t,e)},V.forEach(function(t){Ot[t]=St}),B.forEach(function(t){Ot[t+"s"]=Pt}),Ot.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in P(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},Ot.props=Ot.methods=Ot.inject=Ot.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return P(n,t),P(n,e),n},Ot.provide=Ct;var jt=function(t,e){return void 0===e?t:e};function Et(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=x(a),i[o]=p(r)?r:{type:r};t.props=i}}function It(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Dt(t,e,n){"function"===typeof e&&(e=e.options),Et(e),It(e),Tt(e);var r=e.extends;if(r&&(t=Dt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Dt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)$(t,a)||c(a);function c(r){var o=Ot[r]||jt;s[r]=o(t[r],e[r],n,r)}return s}function Nt(t,e,n,r){if("string"===typeof n){var o=t[e];if($(o,n))return o[n];var i=x(n);if($(o,i))return o[i];var a=A(i);if($(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Mt(t,e,n,r){var o=e[t],i=!$(n,t),a=n[t];if(Vt(Boolean,o.type)&&(i&&!$(o,"default")?a=!1:Vt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Rt(r,o,t);var s=_t.shouldConvert;_t.shouldConvert=!0,$t(a),_t.shouldConvert=s}return a}function Rt(t,e,n){if($(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Vt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Ut=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Lt={child:{}};Lt.child.get=function(){return this.componentInstance},Object.defineProperties(Ut.prototype,Lt);var Wt=function(t){void 0===t&&(t="");var e=new Ut;return e.text=t,e.isComment=!0,e};function Ft(t){return new Ut(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Ut(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function zt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var Jt,qt=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Kt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Gt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=qt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Kt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=qt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Zt(a,c,u,f,!0)||Zt(a,s,u,f,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if($(e,n))return t[n]=e[n],o||delete e[n],!0;if($(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Ft(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Ft(r)):te(r)&&te(s)?u[u.length-1]=Ft(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Wt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=M(function(n){t.resolved=ne(n,e),s||c()}),p=M(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(f,p);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Jt.$once(t,e):Jt.$on(t,e)}function ce(t,e){Jt.$off(t,e)}function ue(t,e,n){Jt=t,Gt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?S(r):r;for(var o=S(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){q(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function _e(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ye(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Wt),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Me(t,r,E),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==L);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){_t.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Mt(u,t.$options.props,e,t)}_t.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $e(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"activated")}}function be(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){q(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Ae=[],Oe={},ke=!1,Ce=!1,Se=0;function Pe(){Se=xe.length=Ae.length=0,Oe={},ke=Ce=!1}function je(){var t,e;for(Ce=!0,xe.sort(function(t,e){return t.id-e.id}),Se=0;Se<xe.length;Se++)t=xe[Se],e=t.id,Oe[e]=null,t.run();var n=Ae.slice(),r=xe.slice();Pe(),Te(n),Ee(r),rt&&U.devtools&&rt.emit("flush")}function Ee(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Ie(t){t._inactive=!1,Ae.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$e(t[e],!0)}function De(t){var e=t.id;if(null==Oe[e]){if(Oe[e]=!0,Ce){var n=xe.length-1;while(n>Se&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(je))}}var Ne=0,Me=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Me.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;q(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),lt(),this.cleanupDeps()}return t},Me.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Me.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Me.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():De(this)},Me.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){q(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Me.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Me.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Me.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Re=new it;function Be(t){Re.clear(),Ve(t,Re)}function Ve(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ve(t[r[n]],e)}}}var Ue={enumerable:!0,configurable:!0,get:E,set:E};function Le(t,e,n){Ue.get=function(){return this[e][n]},Ue.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ue)}function We(t){t._watchers=[];var e=t.$options;e.props&&Fe(t,e.props),e.methods&&Xe(t,e.methods),e.data?He(t):$t(t._data={},!0),e.computed&&qe(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function Fe(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;_t.shouldConvert=i;var a=function(i){o.push(i);var a=Mt(i,e,n,t);bt(r,i,a),i in t||Le(t,"_props",i)};for(var s in e)a(s);_t.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?ze(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&$(r,i)||W(i)||Le(t,"_data",i)}$t(e,!0)}function ze(t,e){try{return t.call(e)}catch(n){return q(n,e,"data()"),{}}}var Je={lazy:!0};function qe(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Me(t,i,E,Je),r in t||Ke(t,r,o)}}function Ke(t,e,n){"function"===typeof n?(Ue.get=Ge(e),Ue.set=E):(Ue.get=n.get?!1!==n.cache?Ge(e):n.get:E,Ue.set=n.set?n.set:E),Object.defineProperty(t,e,Ue)}function Ge(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?E:C(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new Me(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(_t.shouldConvert=!1,Object.keys(e).forEach(function(n){bt(t,n,e[n])}),_t.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Mt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof Ut&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ie(n):$e(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?be(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&ln(t.options,e);var p=Xt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Ut("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),_n(t,e,n,r,o)}function _n(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Wt();if(i(n)&&i(n.is)&&(e=n.is),!e)return Wt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=U.getTagNamespace(e),a=U.isReservedTag(e)?new Ut(U.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Nt(t.$options,"components",e))?cn(c,n,t,r,e):new Ut(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&yn(a,s),a):Wt()}function yn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&yn(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=P(P({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function $n(t){return Nt(this.$options,"filters",t,!0)||T}function bn(t,e,n){var r=U.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=j(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?zt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),On(n,"__static__"+t,!1),n)}function An(t,e,n){return On(t,"__once__"+e+(n?"_"+n:""),!0),t}function On(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Cn(t,e){if(e)if(p(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Sn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=L,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;bt(t,"$attrs",r&&r.attrs,null,!0),bt(t,"$listeners",r&&r.on,null,!0)}function Pn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=zt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||L,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){q(n,e,"render function"),t=e._vnode}return t instanceof Ut||(t=Wt()),t.parent=a,t},t.prototype._o=An,t.prototype._n=v,t.prototype._s=h,t.prototype._l=mn,t.prototype._t=gn,t.prototype._q=D,t.prototype._i=N,t.prototype._m=xn,t.prototype._f=$n,t.prototype._k=bn,t.prototype._b=wn,t.prototype._v=Ft,t.prototype._e=Wt,t.prototype._u=de,t.prototype._g=Cn}var jn=0;function En(t){t.prototype._init=function(t){var e=this;e._uid=jn++,e._isVue=!0,t&&t._isComponent?In(e,t):e.$options=Dt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Sn(e),we(e,"beforeCreate"),en(e),We(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function In(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Dn(t);o&&P(t.extendOptions,o),e=t.options=Dt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Dn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Nn(n[i],r[i],o[i]));return e}function Nn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Mn(t){this._init(t)}function Rn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Dt(this.options,t),this}}function Vn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Dt(n.options,t),a["super"]=n,a.options.props&&Un(a),a.options.computed&&Ln(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function Un(t){var e=t.options.props;for(var n in e)Le(t.prototype,"_props",n)}function Ln(t){var e=t.options.computed;for(var n in e)Ke(t.prototype,n,e[n])}function Wn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}En(Mn),Ye(Mn),fe(Mn),_e(Mn),Pn(Mn);var Fn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function zn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Jn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&qn(o),t[r]=null)}}}function qn(t){t&&t.componentInstance.$destroy()}var Kn={name:"keep-alive",abstract:!0,props:{include:Fn,exclude:Fn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)qn(t.cache[e])},watch:{include:function(t){Jn(this.cache,this._vnode,function(e){return zn(t,e)})},exclude:function(t){Jn(this.cache,this._vnode,function(e){return!zn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!zn(this.include,n)||this.exclude&&zn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Gn={KeepAlive:Kn};function Xn(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:J,extend:P,mergeOptions:Dt,defineReactive:bt},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,Gn),Rn(t),Bn(t),Vn(t),Wn(t)}Xn(Mn),Object.defineProperty(Mn.prototype,"$isServer",{get:nt}),Object.defineProperty(Mn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Mn.version="2.4.1",Mn.mpvueVersion="1.0.12";var Zn=_("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=_("style,class");_("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),_("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function _r(t,e,n){return or}var yr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:_r}),mr={create:function(t,e){gr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(gr(t,!0),gr(e))},destroy:function(t){gr(t,!0)}};function gr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var $r=new Ut("",{},[]),br=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Ar(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Or(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<br.length;++e)for(r[br[e]]=[],n=0;n<s.length;++n)i(s[n][br[e]])&&r[br[e]].push(s[n][br[e]]);function f(t){return new Ut(u.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),w(t),g(t,c,e),i(s)&&b(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,r)):(t.elm=u.createTextNode(t.text),m(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&y(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,$(t)?(b(t,e),w(t)):(gr(t),e.push(t))}function y(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a]($r,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function $(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function b(t,n){for(var o=0;o<r.create.length;++o)r.create[o]($r,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create($r,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function A(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),A(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function C(t,e,n,r,a){var s,c,f,p,l=0,h=0,v=e.length-1,_=e[0],y=e[v],m=n.length-1,g=n[0],$=n[m],b=!a;while(l<=v&&h<=m)o(_)?_=e[++l]:o(y)?y=e[--v]:wr(_,g)?(S(_,g,r),_=e[++l],g=n[++h]):wr(y,$)?(S(y,$,r),y=e[--v],$=n[--m]):wr(_,$)?(S(_,$,r),b&&u.insertBefore(t,_.elm,u.nextSibling(y.elm)),_=e[++l],$=n[--m]):wr(y,g)?(S(y,g,r),b&&u.insertBefore(t,y.elm,_.elm),y=e[--v],g=n[++h]):(o(s)&&(s=Ar(e,l,v)),c=i(g.key)?s[g.key]:null,o(c)?(d(g,r,t,_.elm),g=n[++h]):(f=e[c],wr(f,g)?(S(f,g,r),e[c]=void 0,b&&u.insertBefore(t,f.elm,_.elm),g=n[++h]):(d(g,r,t,_.elm),g=n[++h])));l>v?(p=o(n[m+1])?null:n[m+1].elm,x(t,p,n,h,m,r)):h>m&&O(t,e,l,v)}function S(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?E(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,d=e.children;if(i(p)&&$(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(d)?l!==d&&C(c,l,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(l)?O(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function P(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var j=_("attrs,style,class,staticClass,staticStyle,key");function E(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!E(f,c[p],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else g(n,c,r);if(i(s))for(var l in s)if(!j(l)){b(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,p){if(!o(e)){var l=!1,h=[];if(o(t))l=!0,d(e,h,c,p);else{var v=i(t.nodeType);if(!v&&wr(t,e))S(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),a(n)&&E(t,e,h))return P(e,h,!0),t;t=f(t)}var _=t.elm,y=u.parentNode(_);if(d(e,h,_._leaveCb?null:y,u.nextSibling(_)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if($(e))for(var g=0;g<r.create.length;++g)r.create[g]($r,e.parent)}i(y)?O(y,[t],0,0):i(t.tag)&&A(t)}}return P(e,h,l),e.elm}i(t)&&A(t)}}var kr=[mr],Cr=Or({nodeOps:yr,modules:kr});function Sr(){Cr.apply(this,arguments),this.$updateDataToMP()}function Pr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){q(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Pr(t,e,r)}),o}function jr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Er(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=x(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Ir(t){var e=t.$options.properties,n=t.$options.props,r={};return Er(e,r,t),Er(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Le(t,"_mpProps",n),e[n]=void 0)}),$t(e,!0)}function Dr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Pr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Pr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Pr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Pr(r,"onShow",t)},onHide:function(){o.status="hide",Pr(r,"onHide")},onError:function(t){Pr(r,"onError",t)},onUniNViewMessage:function(t){Pr(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Ir(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Pr(r,"attached")},ready:function(){o.status="ready",Pr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Pr(r,"moved")},detached:function(){o.status="detached",Pr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",jr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Pr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",Pr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Pr(r,"onReady"),n()},onHide:function(){o.status="hide",Pr(r,"onHide")},onUnload:function(){o.status="unload",Pr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Pr(r,"onPullDownRefresh")},onReachBottom:function(){Pr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Pr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Pr(r,"onPageScroll",t)},onTabItemTap:function(t){Pr(r,"onTabItemTap",t)}})}}function Nr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Mr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Mr(r,e):e):e}function Rr(t){var e=Mr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Nr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Rr(t))}function Vr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Ur=Vr(function(t,e){t&&t(e)},50);function Lr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Wr(){var t=Lr(this);if(t){var e=JSON.parse(JSON.stringify(Rr(this)));Ur(t.setData.bind(t),r(e,t.data))}}function Fr(){var t=Lr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function zr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(zr(t,e,n))})}):a.forEach(function(t){r=r.concat(zr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Jr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:E,preventDefault:E};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function qr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],p=zr(u._vnode,c,f);if(p.length){var l=Jr(t);if(1===p.length){var d=p[0](l);return d}p.forEach(function(t){return t(l)})}}}return Mn.config.mustUseProp=Yn,Mn.config.isReservedTag=Zn,Mn.config.isReservedAttr=Qn,Mn.config.getTagNamespace=tr,Mn.config.isUnknownElement=er,Mn.prototype.__patch__=Sr,Mn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return ye(n,void 0,void 0)})}return ye(this,void 0,void 0)},Mn.prototype._initMP=Dr,Mn.prototype.$updateDataToMP=Wr,Mn.prototype._initDataToMP=Fr,Mn.prototype.$handleProxyWithVue=qr,Mn})}).call(this,n("c8ba"))}}]);
});
define('static/font/iconfont.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

!function (o) {
  var t,
      l = '<svg><symbol id="icon-yiwen" viewBox="0 0 1024 1024"><path d="M563.363941 572.337203c-0.662107-10.635221 5.985569-21.937638 19.948145-33.908274 13.962576-11.964496 29.591164-25.264407 46.879625-39.893592 17.288461-14.628162 33.242474-31.083949 47.872273-49.365314 14.630823-18.286482 22.606806-39.397289 23.936137-63.332421 1.330354-25.932626-1.329331-50.199309-7.977007-72.810283-6.647676-22.604834-17.620026-42.050722-32.910909-58.33971-15.297023-16.290011-35.079386-29.258371-59.347087-38.900985-24.267702-9.636474-52.694294-14.45727-85.274661-14.45727-40.563514 0-74.308452 7.148817-101.239931 21.441335-26.925339 14.293541-48.705279 31.581276-65.326516 51.864228-16.621237 20.276812-28.26081 41.222867-34.908486 62.829977-6.647676 21.60711-9.641996 39.727817-8.974772 54.358025 0.662107 17.282618 6.150328 29.92045 16.455454 37.897122 10.305126 7.976672 21.442235 12.135388 33.413373 12.466939 11.964998 0.331551 22.937348-2.989077 32.910909-9.973142 9.973561-6.984065 14.960341-17.121959 14.960341-30.416753 0-7.982812 2.493902-17.790178 7.480682-29.424146s11.805356-22.771633 20.450609-33.411971c8.643207-10.635221 19.115139-19.615757 31.416819-26.924209 12.30168-7.315616 26.098473-10.971889 41.39038-10.971889 29.921706 0 53.857842 7.480368 71.81455 22.440082 17.950567 14.959713 26.263233 33.742499 24.934925 56.348356 0 11.302417-3.325885 21.772886-9.973561 31.4155-6.652793 9.642614-15.131241 18.948561-25.43739 27.929096-10.304103 8.974395-21.276452 17.949814-32.910909 26.924209-11.639573 8.974395-22.606806 18.286482-32.917049 27.929096-10.304103 9.636474-18.949356 20.111037-25.927574 31.4155-6.984358 11.302417-10.806567 23.603581-11.474814 36.898375l0.998789 37.903262c0 9.973142 4.656239 19.444864 13.962576 28.4254 9.311454 8.975419 21.613134 13.796214 36.906064 14.458293 15.29293-0.662079 27.427804-5.64865 36.403599-14.959713 8.974772-9.30697 13.134686-19.947308 12.467463-31.911804L563.365987 572.337203zM512.496324 817.685098c17.289484 0 31.753501-5.814426 43.387957-17.453511 11.639573-11.633968 17.454243-25.761734 17.454243-42.387389 0-17.287735-5.81467-31.747051-17.454243-43.386136-11.634456-11.633968-26.098473-17.453511-43.387957-17.453511-17.283344 0-31.747361 5.819542-43.381817 17.453511-11.639573 11.639085-17.454243 26.098401-17.454243 43.386136 0 16.625656 5.81467 30.753421 17.454243 42.387389C480.748964 811.870672 495.212981 817.685098 512.496324 817.685098zM511.503676 65.687048c61.834849 0 119.851582 11.799744 174.04099 35.403325 54.194524 23.604604 101.570473 55.522548 142.127847 95.746668 40.56249 40.225143 72.476657 87.433328 95.750687 141.625578 23.27403 54.187133 34.908486 112.201431 34.908486 174.033685 0 61.838394-11.634456 119.6818-34.908486 173.543521-23.27403 53.855582-55.188196 101.063767-95.750687 141.619438-40.557374 40.560788-87.933322 72.473615-142.127847 95.746668-54.189408 23.273053-112.206141 34.907021-174.04099 34.907021-61.840989 0-119.686823-11.633968-173.550806-34.907021-53.857842-23.273053-101.068009-55.18588-141.625382-95.746668-40.56249-40.555671-72.476657-87.763856-95.750687-141.619438C77.302771 632.17708 65.668315 574.333674 65.668315 512.496304c0-61.832254 11.634456-119.846552 34.908486-174.033685 23.27403-54.19225 55.188196-101.400435 95.750687-141.625578 40.557374-40.22412 87.76754-72.142064 141.625382-95.746668C391.816852 77.486792 449.662687 65.687048 511.503676 65.687048z"  ></path></symbol><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M720.275046 956.335924 333.570703 956.335924c-95.126544 0-148.269905-20.939915-148.269905-131.341351L185.300798 502.951927c0-14.728446 13.530155-26.669406 28.257577-26.669406l600.057545 0c14.728446 0 25.080212 11.94096 25.080212 26.669406l0 322.042647C838.697155 920.316569 829.932538 956.335924 720.275046 956.335924zM238.63961 529.621333l0 295.373241c0 67.794036 13.803377 78.003562 94.931093 78.003562l386.704342 0c66.672492 0 65.084321 0 65.084321-78.003562L785.359366 529.621333 238.63961 529.621333z"  ></path><path d="M305.313126 742.982722c-7.370875 0-13.334703-5.963829-13.334703-13.334703L291.978423 582.961168c0-7.370875 7.552-13.334703 14.922874-13.334703l66.673515 0c7.357572 0 13.334703 5.963829 13.334703 13.334703 0 7.368828-5.977132 13.332656-13.334703 13.332656l-54.926984 0 0 133.353171C318.647829 737.018893 312.670697 742.982722 305.313126 742.982722z"  ></path><path d="M305.313126 809.655214c-7.370875 0-13.334703-5.963829-13.334703-13.334703L291.978423 782.985808c0-7.370875 5.963829-13.334703 13.334703-13.334703 7.357572 0 13.334703 5.963829 13.334703 13.334703l0 13.334703C318.647829 803.691385 312.670697 809.655214 305.313126 809.655214z"  ></path><path d="M718.685851 516.28663c-14.728446 0-26.669406-11.94096-26.669406-26.669406L692.016445 293.883307c0-96.28595-75.240635-177.6347-166.186973-177.6347l-1.641383 0c-94.449115 0-178.870854 83.002412-178.870854 177.6347l0 195.73494c0 14.728446-11.94096 26.669406-26.669406 26.669406s-26.669406-11.94096-26.669406-26.669406L291.978423 293.883307c0-123.046431 109.346407-230.972489 232.209666-230.972489L525.829472 62.910818c121.924887 0 219.525786 103.616916 219.525786 230.972489l0 195.73494C745.355257 504.34567 733.414297 516.28663 718.685851 516.28663z"  ></path></symbol><symbol id="icon-shouji" viewBox="0 0 1024 1024"><path d="M744 121a44 44 0 0 1 44 44v696a44 44 0 0 1-44 44H280a44 44 0 0 1-44-44V165a44 44 0 0 1 44-44h464m0-20H280a64 64 0 0 0-64 64v696a64 64 0 0 0 64 64h464a64 64 0 0 0 64-64V165a64 64 0 0 0-64-64z" fill="#26263D" ></path><path d="M746 151a12 12 0 0 1 12 12v700a12 12 0 0 1-12 12H278a12 12 0 0 1-12-12V163a12 12 0 0 1 12-12h468m0-20H278a32 32 0 0 0-32 32v700a32 32 0 0 0 32 32h468a32 32 0 0 0 32-32V163a32 32 0 0 0-32-32z" fill="#26263D" ></path><path d="M362 815l300 0 0 20-300 0 0-20Z" fill="#26263D" ></path><path d="M346.575765 281.287514l70.710678-70.710678 14.142135 14.142135-70.710678 70.710679-14.142135-14.142136Z" fill="#26263D" ></path><path d="M334.571753 378.279283l97.708015-97.708015 14.142136 14.142135-97.708015 97.708015-14.142136-14.142135Z" fill="#26263D" ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !o.__iconfont__svg__cssinject__) {
    o.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (n = t, a = o.document, i = !1, c = function c() {
      i || (i = !0, n());
    }, (_l = function l() {
      try {
        a.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_l, 50);
      }

      c();
    })(), a.onreadystatechange = function () {
      "complete" == a.readyState && (a.onreadystatechange = null, c());
    });

    var n, a, i, c, _l;
  }(function () {
    var t, e, n, a, i, c;
    (t = document.createElement("div")).innerHTML = l, l = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", n = e, (a = document.body).firstChild ? (i = n, (c = a.firstChild).parentNode.insertBefore(i, c)) : a.appendChild(n));
  });
}(window);
});
define('static/js/agent.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  onload: function onload() {},
  methods: {
    agentCheck: function agentCheck(e) {
      var ownername = e.detail.value.ownername.replace(/^\s+|\s+$/g, '');
      var ownerNumber = e.detail.value.ownerNumber.replace(/^\s+|\s+$/g, '');
      var z_number = uni.getStorageSync('userInfo').ownerNumber;
      var creg = /^[\u2E80-\u9FFF]+$/;
      var nreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;

      if (ownername.length === 0) {
        return uni.showToast({
          icon: 'none',
          title: '请输入姓名',
          duration: 1500
        });
      } else if (!creg.test(ownername)) {
        return uni.showToast({
          icon: 'none',
          title: '姓名格式错误',
          duration: 1500
        });
      } else if (ownerNumber.length === 0) {
        return uni.showToast({
          icon: 'none',
          title: '输入手机号',
          duration: 1500
        });
      } else if (!nreg.test(ownerNumber)) {
        return uni.showToast({
          icon: 'none',
          title: '手机号格式错误',
          duration: 1500
        });
      } else {
        uni.request({
          url: this.$FXUrl + '/activity_gonghao_add',
          method: 'POST',
          data: {
            z_number: z_number,
            ownername: ownername,
            ownerNumber: ownerNumber
          },
          success: function success(res) {
            if (res.data.code === 320) {
              return uni.showToast({
                icon: 'none',
                title: '请重新登陆',
                duration: 2000
              });
            } else if (res.data.code === 330) {
              return uni.showToast({
                icon: 'none',
                title: '手机号被占用',
                duration: 2000
              });
            } else if (res.data.code === 310) {
              return uni.showToast({
                icon: 'none',
                title: '手机号被占用',
                duration: 2000
              });
            } else if (res.data.code === 200) {
              return uni.showToast({
                icon: 'none',
                title: '添加成功',
                duration: 2000
              });
            }
          }
        });
      }
    }
  }
};
exports.default = _default;
});
define('static/js/alipay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      userInfo: ''
    };
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {
    this.userInfo = uni.getStorageSync('userInfo');
  },
  onReady: function onReady() {},
  methods: {
    alipayCheck: function alipayCheck(e) {
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      var alipay = e.detail.value.alipay.replace(/^\s+|\s+$/g, '');
      var nreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;

      if (alipay.length === 0) {
        return uni.showToast({
          icon: 'none',
          title: '输入支付宝手机号',
          duration: 2500
        });
      } else if (!nreg.test(alipay)) {
        return uni.showToast({
          icon: 'none',
          title: '支付宝绑定的手机号',
          duration: 2500
        });
      } else {
        uni.request({
          url: this.$FXUrl + '/feixiaAlipay?' + "alipay=" + alipay + "&gonghao=" + gonghao,
          method: 'GET',
          success: function success(res) {
            if (res.data.code === 200) {
              return uni.showToast({
                icon: 'none',
                title: '已经绑过了',
                duration: 1500
              });
            } else if (res.data.code === 600) {
              return uni.showToast({
                icon: 'none',
                title: '系统错误',
                duration: 1500
              });
            } else if (res.data.code === 205) {
              return uni.showToast({
                icon: 'none',
                title: '支付宝绑定成功',
                duration: 1500
              });
            }
          }
        });
      }
    }
  }
};
exports.default = _default;
});
define('static/js/center.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wxqrcode = _interopRequireDefault(require("../../utils/wxqrcode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 引入二维码 */
// 二维码生成器
var _default = {
  data: function data() {
    return {
      zsAndTgImg: "",
      total: '',
      isQRCODE: false,
      isActivity: true,
      qrcodeBase64: '',
      userInfo: ''
    };
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {},
  onReady: function onReady() {
    this.userInfo = uni.getStorageSync('userInfo');
    var that = this;
    var gonghao = uni.getStorageSync('userInfo').gonghao;
    uni.request({
      url: this.$FXUrl + '/thisMonth?gonghao=' + gonghao,
      method: 'GET',
      success: function success(ret) {
        that.total = ret.data;
      }
    });
  },
  methods: {
    showQrcode: function showQrcode(e) {
      var number = uni.getStorageSync('userInfo').ownerNumber;

      var qrcodeBase64 = _wxqrcode.default.createQrCodeImg('http://wx.feidaijun.com/newEnter/' + number, {
        size: parseInt(200) //二维码大小

      });

      this.qrcodeBase64 = qrcodeBase64;
      this.zsAndTgImg = 'http://feidaijun.xiaohongxian.com/feidaijun_tg.png?v=20190506';
      this.isQRCODE = true;
    },
    hideQrcode: function hideQrcode(e) {
      this.isQRCODE = false;
    },
    hideAct: function hideAct(e) {
      this.isActivity = false;
    },
    toAgent: function toAgent(e) {
      var number = uni.getStorageSync('userInfo').ownerNumber;

      var qrcodeBase64 = _wxqrcode.default.createQrCodeImg('http://wx.feidaijun.com/chaedu_activity_zs/' + number, {
        size: parseInt(200) //二维码大小

      });

      this.qrcodeBase64 = qrcodeBase64;
      this.zsAndTgImg = 'http://feidaijun.xiaohongxian.com/zs_code_2.png';
      this.isQRCODE = true;
    },
    toProfile: function toProfile(e) {
      uni.navigateTo({
        url: '/pages/profile/profile'
      });
    },
    toWEBVIEW: function toWEBVIEW(e) {
      uni.navigateTo({
        url: '/pages/agent/agent'
      });
    }
  }
};
exports.default = _default;
});
define('static/js/groups.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      activeA: '#E43d3d',
      activeB: '#999',
      activeC: '#999',
      activeD: '#999',
      levelData: '',
      counter: '',
      all_yeji: '',
      grade: 'zero'
    };
  },
  onload: function onload() {},
  onShow: function onShow() {},
  onReady: function onReady() {
    var gonghao = uni.getStorageSync('userInfo').gonghao;
    var that = this;
    uni.request({
      url: this.$FXUrl + '/daili_mySelf?gonghao=' + gonghao,
      method: 'GET',
      success: function success(ret) {
        that.levelData = ret.data.datas;
        that.counter = ret.data.counts;
        that.all_yeji = ret.data.z_yeji;
      }
    });
  },
  methods: {
    activeAa: function activeAa(e) {
      this.activeA = '#E43d3d';
      this.activeB = '#999';
      this.activeC = '#999';
      this.activeD = '#999';
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      var that = this;
      uni.request({
        url: this.$FXUrl + '/daili_mySelf?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.datas;
          that.counter = ret.data.counts;
          that.all_yeji = ret.data.z_yeji;
          that.levelX = 'zero';
        }
      });
    },
    activeBb: function activeBb(e) {
      this.activeB = '#E43d3d';
      this.activeA = '#999';
      this.activeC = '#999';
      this.activeD = '#999';
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      var that = this;
      uni.request({
        url: this.$FXUrl + '/daili_one?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.datas;
          that.counter = ret.data.counts;
          that.all_yeji = ret.data.z_yeji;
          that.grade = 'one';
        }
      });
    },
    activeCc: function activeCc(e) {
      this.activeC = '#E43d3d';
      this.activeB = '#999';
      this.activeA = '#999';
      this.activeD = '#999';
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      var that = this;
      uni.request({
        url: this.$FXUrl + '/daili_two?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.datas;
          that.counter = ret.data.counts;
          that.all_yeji = ret.data.z_yeji;
          that.grade = 'two';
        }
      });
    },
    activeDd: function activeDd(e) {
      this.activeC = '#999';
      this.activeB = '#999';
      this.activeA = '#999';
      this.activeD = '#E43d3d';
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      var that = this;
      uni.request({
        url: this.$FXUrl + '/daili_top?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.datas;
          that.counter = ret.data.counts;
          that.all_yeji = ret.data.z_yeji;
          that.grade = 'top';
        }
      });
    }
  },
  onReachBottom: function onReachBottom() {
    var that = this;
    var len = this.levelData.length;
    var gonghao = uni.getStorageSync('userInfo').gonghao;

    if (that.grade === 'one') {
      uni.request({
        url: that.$FXUrl + '/daili_oneplus?len=' + len + '&gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = that.levelData.concat(ret.data.datas);
        }
      });
    } else if (that.grade === 'two') {
      uni.request({
        url: that.$FXUrl + '/daili_twoplus?len=' + len + '&gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = that.levelData.concat(ret.data.datas);
        }
      });
    } else if (that.grade === 'top') {
      uni.request({
        url: that.$FXUrl + '/daili_topplus?len=' + len + '&gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = that.levelData.concat(ret.data.datas);
        }
      });
    }
  }
};
exports.default = _default;
});
define('static/js/guize.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      title: '三级返佣规则',
      rets: ''
    };
  },
  onLoad: function onLoad() {
    var that = this;
    uni.request({
      url: that.$FXUrl + '/getMoneyDetail',
      method: 'GET',
      success: function success(res) {
        that.rets = res.data;
      }
    });
  },
  onReady: function onReady() {
    var that = this;
    uni.request({
      url: that.$FXUrl + '/getMoneyDetail',
      method: 'GET',
      success: function success(res) {
        that.rets = res.data;
      }
    });
  },
  methods: {}
};
exports.default = _default;
});
define('static/js/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      title: '三级返佣规则',
      isUpdate: false
    };
  },
  onLoad: function onLoad() {
    if (uni.getStorageSync('userInfo')) {
      uni.switchTab({
        url: '/pages/center/center'
      });
    } else {
      return;
    }
  },
  onShow: function onShow() {
    if (uni.getStorageSync('AppUpdata')) {
      this.isUpdate = uni.getStorageSync('AppUpdata').isUpdate;
    } else {
      this.isUpdate = false;
    }
  },
  methods: {
    toGuize: function toGuize(e) {
      uni.navigateTo({
        url: '/pages/guize/guize'
      });
    },
    toLogin: function toLogin(e) {
      if (uni.getStorageSync('AppUpdata')) {
        this.isUpdate = uni.getStorageSync('AppUpdata').isUpdate;
        return;
      } else {
        uni.navigateTo({
          url: '/pages/login/login'
        });
      }
    },
    notUpdate: function notUpdate(e) {
      this.isUpdate = false;
    },
    goUpdate: function goUpdate(e) {
      var AppUpdata = uni.getStorageSync('AppUpdata');
      var openUrl = plus.os.name === 'iOS' ? AppUpdata.iOS : AppUpdata.Android;
      plus.runtime.openURL(openUrl);
      /* 暂时清理，实际不需要清理，APP升级以后自动清理了 */
      // uni.removeStorageSync('AppUpdata');
    }
  }
};
exports.default = _default;
});
define('static/js/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  onload: function onload() {},
  methods: {
    loginCheck: function loginCheck(e) {
      var username = e.detail.value.username.replace(/^\s+|\s+$/g, '');
      var gonghao = e.detail.value.gonghao.replace(/^\s+|\s+$/g, '');
      var creg = /^[\u2E80-\u9FFF]+$/;
      var myreg = /^\d{8}$/;

      if (username.length === 0) {
        return uni.showToast({
          icon: 'none',
          title: '请输入姓名',
          duration: 1500
        });
      } else if (!creg.test(username)) {
        return uni.showToast({
          icon: 'none',
          title: '姓名格式错误',
          duration: 1500
        });
      } else if (gonghao.length === 0) {
        return uni.showToast({
          icon: 'none',
          title: '输入工号或手机号后8位',
          duration: 1500
        });
      } else if (!myreg.test(gonghao)) {
        return uni.showToast({
          icon: 'none',
          title: '工号格式错误',
          duration: 1500
        });
      } else {
        uni.request({
          url: this.$FXUrl + '/appLogin?' + "username=" + username + "&gonghao=" + gonghao,
          method: 'GET',
          success: function success(res) {
            var ownerNumber = res.data.ownerNumber;
            var alipay = res.data.alipay;

            if (res.data.code === 300) {
              return uni.showToast({
                icon: 'none',
                title: '用户不存在',
                duration: 1500
              });
            } else if (res.data.code === 200) {
              uni.showLoading({
                title: '加载中...',
                success: function success() {
                  var goTab = function goTab() {
                    uni.switchTab({
                      url: '/pages/center/center',
                      success: function success() {
                        uni.setStorage({
                          key: 'userInfo',
                          data: {
                            username: username,
                            gonghao: gonghao,
                            ownerNumber: ownerNumber,
                            alipay: alipay
                          },
                          success: function success() {
                            uni.hideLoading();
                          }
                        });
                      }
                    });
                  };

                  setTimeout(goTab, 1000);
                }
              });
            }
          }
        });
      }
    }
  }
};
exports.default = _default;
});
define('static/js/methods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      webviewStyles: {
        progress: {
          color: '#41A863'
        }
      },
      webUrl: ''
    };
  },
  onload: function onload() {},
  onShow: function onShow() {
    var that = this;
    var gonghao = uni.getStorageSync('userInfo').gonghao;
    uni.request({
      url: this.$FXUrl + '/webcontent?gonghao=' + gonghao,
      method: 'GET',
      success: function success(rets) {
        that.webUrl = rets.data.webUrl;
      }
    });
  },
  methods: {}
};
exports.default = _default;
});
define('static/js/myself.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      userInfo: ''
    };
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {
    this.userInfo = uni.getStorageSync('userInfo');
  },
  onReady: function onReady() {},
  methods: {
    toReward: function toReward(e) {
      uni.navigateTo({
        url: '/pages/reward/reward'
      });
    },
    toGuize: function toGuize(e) {
      uni.navigateTo({
        url: '/pages/guize/guize'
      });
    },
    toAlipay: function toAlipay(e) {
      uni.navigateTo({
        url: '/pages/alipay/alipay'
      });
    },
    loginOut: function loginOut(e) {
      uni.removeStorage({
        key: 'userInfo',
        success: function success(ret) {
          uni.reLaunch({
            url: '/pages/index/index'
          });
        }
      });
    }
  }
};
exports.default = _default;
});
define('static/js/profile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      number: 9008000,
      activeA: '#E43d3d',
      activeB: '#999',
      activeC: '#999',
      activeD: '#999',
      levelData: '',
      seen: true
    };
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {},
  onReady: function onReady() {
    var that = this;
    var gonghao = uni.getStorageSync('userInfo').gonghao;
    uni.request({
      url: that.$FXUrl + '/myself_yeji?gonghao=' + gonghao,
      method: 'GET',
      success: function success(ret) {
        that.levelData = ret.data.myYeji;
      }
    });
  },
  methods: {
    activeAa: function activeAa(e) {
      this.activeA = '#E43d3d';
      this.activeB = '#999';
      this.activeC = '#999';
      this.activeD = '#999';
      var that = this;
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      uni.request({
        url: that.$FXUrl + '/myself_yeji?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.myYeji;
        }
      });
    },
    activeBb: function activeBb(e) {
      this.activeB = '#E43d3d';
      this.activeA = '#999';
      this.activeC = '#999';
      this.activeD = '#999';
      var that = this;
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      uni.request({
        url: that.$FXUrl + '/one_yeji?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.oneYeji;
        }
      });
    },
    activeCc: function activeCc(e) {
      this.activeC = '#E43d3d';
      this.activeB = '#999';
      this.activeA = '#999';
      this.activeD = '#999';
      var that = this;
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      uni.request({
        url: that.$FXUrl + '/two_yeji?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.twoYeji;
        }
      });
    },
    activeDd: function activeDd(e) {
      this.activeC = '#999';
      this.activeB = '#999';
      this.activeA = '#999';
      this.activeD = '#E43d3d';
      var that = this;
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      uni.request({
        url: that.$FXUrl + '/top_yeji?gonghao=' + gonghao,
        method: 'GET',
        success: function success(ret) {
          that.levelData = ret.data.topYeji;
        }
      });
    }
  }
};
exports.default = _default;
});
define('static/js/reward.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      activeB: "#E43D3D",
      activeC: "#474747",
      levelData: '',
      reward: '',
      isSeenB: true,
      isSeenC: false,
      gonghao: ''
    };
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {
    this.gonghao = Number(uni.getStorageSync('userInfo').gonghao);
  },
  onReady: function onReady() {
    var that = this;
    var gonghao = uni.getStorageSync('userInfo').gonghao;
    uni.request({
      url: that.$FXUrl + '/lastMonthOk?gonghao=' + gonghao,
      method: 'GET',
      success: function success(res) {
        that.levelData = res.data.hadCustom;
      }
    });
  },
  methods: {
    toGuize: function toGuize(e) {
      uni.navigateTo({
        url: '/pages/guize/guize'
      });
    },
    activeBb: function activeBb(e) {
      var that = this;
      this.activeB = '#E43d3d';
      this.activeC = '#474747';
      this.isSeenB = true;
      this.isSeenC = false;
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      uni.request({
        url: that.$FXUrl + '/lastMonthOk?gonghao=' + gonghao,
        method: 'GET',
        success: function success(res) {
          that.levelData = res.data.hadCustom;
        }
      });
    },
    activeCc: function activeCc(e) {
      var that = this;
      this.activeC = '#E43d3d';
      this.activeB = '#474747';
      this.isSeenC = true;
      this.isSeenB = false;
      var gonghao = uni.getStorageSync('userInfo').gonghao;
      uni.request({
        url: that.$FXUrl + '/lastMonthNotOk?gonghao=' + gonghao,
        method: 'GET',
        success: function success(res) {
          that.levelData = res.data.hadCustom;
        }
      });
    }
  }
};
exports.default = _default;
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"097c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"三级返佣规则",isUpdate:!1}},onLoad:function(){t.getStorageSync("userInfo")&&t.switchTab({url:"/pages/center/center"})},onShow:function(){t.getStorageSync("AppUpdata")?this.isUpdate=t.getStorageSync("AppUpdata").isUpdate:this.isUpdate=!1},methods:{toGuize:function(e){t.navigateTo({url:"/pages/guize/guize"})},toLogin:function(e){t.getStorageSync("AppUpdata")?this.isUpdate=t.getStorageSync("AppUpdata").isUpdate:t.navigateTo({url:"/pages/login/login"})},notUpdate:function(t){this.isUpdate=!1},goUpdate:function(e){var a=t.getStorageSync("AppUpdata"),n="iOS"===plus.os.name?a.iOS:a.Android;plus.runtime.openURL(n)}}};e.default=a}).call(this,a("6e42")["default"])},"38f0":function(t,e,a){},"8d8f":function(t,e,a){"use strict";a("5964");var n=s(a("b0ce")),i=s(a("a396"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},a396:function(t,e,a){"use strict";a.r(e);var n=a("befa"),i=a("f8ea");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("dac7");var c=a("2877"),o=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},befa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"index"},[a("view",{staticClass:"index-top",class:{active:t.isUpdate}},[a("image",{attrs:{src:"../../static/images/logo.png",mode:"aspectFit"}}),a("view",{staticClass:"index-title"},[a("text",{staticClass:"index-t-bold"},[t._v("飞贷代理 三级返佣")]),a("text",{staticClass:"iconfont icon-yiwen index-t-s",attrs:{eventid:"68fea472-0"},on:{click:t.toGuize}},[t._v(t._s(t.title))])]),a("view",{staticClass:"index-login",attrs:{eventid:"68fea472-1"},on:{click:t.toLogin}},[t._v("代理登录")])]),t.isUpdate?a("view",{staticClass:"index-update"},[a("view",{staticClass:"update-c"},[a("text",{staticClass:"update-remind"},[t._v("— 小提示 —")]),a("text",{staticClass:"update-content"},[t._v("您需要升级飞侠才可以继续使用飞侠的服务，请及时升级。请您删除APP重新安装即可。")]),a("view",{staticClass:"update-button"},[a("text",{staticClass:"update-cancel",attrs:{eventid:"68fea472-2"},on:{click:t.notUpdate}},[t._v("暂不升级")]),a("text",{staticClass:"update-confirm",attrs:{eventid:"68fea472-3"},on:{click:t.goUpdate}},[t._v("马上升级")])])])]):t._e()])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},dac7:function(t,e,a){"use strict";var n=a("38f0"),i=a.n(n);i.a},f8ea:function(t,e,a){"use strict";a.r(e);var n=a("097c"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a}},[["8d8f","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/guize/guize';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/guize/guize.js';

define('pages/guize/guize.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guize/guize"],{"052b":function(t,e,s){"use strict";s.r(e);var n=s("4eb5"),i=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},"4eb5":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{title:"三级返佣规则",rets:""}},onLoad:function(){var e=this;t.request({url:e.$FXUrl+"/getMoneyDetail",method:"GET",success:function(t){e.rets=t.data}})},onReady:function(){var e=this;t.request({url:e.$FXUrl+"/getMoneyDetail",method:"GET",success:function(t){e.rets=t.data}})},methods:{}};e.default=s}).call(this,s("6e42")["default"])},b809:function(t,e,s){"use strict";s.r(e);var n=s("ee4d"),i=s("052b");for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);s("f51e");var o=s("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},d1de:function(t,e,s){},ee4d:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"guize-top"},[s("view",{staticClass:"guize-content"},[s("view",{staticClass:"guize-one"},[s("text",{staticClass:"one-title"},[t._v("规则A : 自身+直属代理总业绩,决定自身佣金比例")]),t._m(0),s("view",{staticClass:"one-cont"},[s("text",[t._v(t._s(t.rets.one))]),s("text",[t._v(t._s(t.rets.ones))])]),s("view",{staticClass:"one-cont"},[s("text",[t._v(t._s(t.rets.two))]),s("text",[t._v(t._s(t.rets.twos))])]),s("view",{staticClass:"one-cont"},[s("text",[t._v(t._s(t.rets.three))]),s("text",[t._v(t._s(t.rets.threes))])]),s("view",{staticClass:"one-cont"},[s("text",[t._v(t._s(t.rets.four))]),s("text",[t._v(t._s(t.rets.fours))])]),s("view",{staticClass:"one-cont"},[s("text",[t._v(t._s(t.rets.five))]),s("text",[t._v(t._s(t.rets.fives))])]),s("view",{staticClass:"one-lip"},[s("text",[t._v(t._s(t.rets.profile1))])])]),s("view",{staticClass:"guize-two guize-one"},[s("text",{staticClass:"two-title"},[t._v("规则B : 拿一级、二级全部客户点位")]),t._m(1),s("view",{staticClass:"one-cont"},[s("text",[t._v(t._s(t.rets.t1))]),s("text",[t._v(t._s(t.rets.t2))])]),s("view",{staticClass:"one-lip"},[s("text",[t._v(t._s(t.rets.profile2))]),s("text",[t._v(t._s(t.rets.profile3))]),s("text",[t._v(t._s(t.rets.profile4))])])]),s("view",{staticClass:"xiaozhushou"},[t._v(t._s(t.rets.profile5))])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"one-conts"},[s("text",[t._v("自身+直属代理总业绩(月)")]),s("text",[t._v("佣金比例")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"one-conts"},[s("text",[t._v("拿一级（全部客户Z）")]),s("text",[t._v("拿二级（全部客户Z）")])])}];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return i})},f51e:function(t,e,s){"use strict";var n=s("d1de"),i=s.n(n);i.a},f6c1:function(t,e,s){"use strict";s("5964");var n=a(s("b0ce")),i=a(s("b809"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))}},[["f6c1","common/runtime","common/vendor"]]]);
});
require('pages/guize/guize.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"08b5":function(t,n,e){},1088:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},onload:function(){},methods:{loginCheck:function(n){var e=n.detail.value.username.replace(/^\s+|\s+$/g,""),a=n.detail.value.gonghao.replace(/^\s+|\s+$/g,""),o=/^[\u2E80-\u9FFF]+$/,i=/^\d{8}$/;return 0===e.length?t.showToast({icon:"none",title:"请输入姓名",duration:1500}):o.test(e)?0===a.length?t.showToast({icon:"none",title:"输入工号或手机号后8位",duration:1500}):i.test(a)?void t.request({url:this.$FXUrl+"/appLogin?username="+e+"&gonghao="+a,method:"GET",success:function(n){var o=n.data.ownerNumber,i=n.data.alipay;if(300===n.data.code)return t.showToast({icon:"none",title:"用户不存在",duration:1500});200===n.data.code&&t.showLoading({title:"加载中...",success:function(){var n=function(){t.switchTab({url:"/pages/center/center",success:function(){t.setStorage({key:"userInfo",data:{username:e,gonghao:a,ownerNumber:o,alipay:i},success:function(){t.hideLoading()}})}})};setTimeout(n,1e3)}})}}):t.showToast({icon:"none",title:"工号格式错误",duration:1500}):t.showToast({icon:"none",title:"姓名格式错误",duration:1500})}}};n.default=e}).call(this,e("6e42")["default"])},"366e":function(t,n,e){"use strict";var a=e("08b5"),o=e.n(a);o.a},4636:function(t,n,e){"use strict";e("5964");var a=i(e("b0ce")),o=i(e("f7f8"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},"9f5e":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"login"},[t._m(0),e("form",{attrs:{eventid:"6c12a496-0"},on:{submit:t.loginCheck}},[e("view",{staticClass:"login-input"},[e("input",{staticClass:"iconfont icon-shouji login-username",attrs:{type:"text",name:"username",placeholder:"输入代理姓名",maxlength:"5"}}),e("view",{staticClass:"login-line"}),e("input",{staticClass:"iconfont icon-mima login-code",attrs:{type:"number",name:"gonghao",placeholder:"输入工号或手机号后8位",maxlength:"8"}})]),e("button",{staticClass:"login-button",attrs:{formType:"submit"}},[t._v("确认登陆")])],1)],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"login-header"},[e("text",{staticClass:"login-b"},[t._v("欢迎回到飞侠")]),e("text",{staticClass:"login-s"},[t._v("让我们更好的为您服务")])])}];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},f7f8:function(t,n,e){"use strict";e.r(n);var a=e("9f5e"),o=e("fd76");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("366e");var s=e("2877"),u=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},fd76:function(t,n,e){"use strict";e.r(n);var a=e("1088"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a}},[["4636","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/center/center';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/center/center.js';

define('pages/center/center.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"601b":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("view",{staticClass:"center-top"},[e("view",{staticClass:"center"},[e("view",{staticClass:"center-uname"},[t._v(t._s(t.userInfo.username)+"，您好！")]),e("view",{staticClass:"center-card",attrs:{eventid:"52f5ef41-0"},on:{click:t.toProfile}},[e("view",{staticClass:"center-total"},[e("text",{staticClass:"center-t-a"},[t._v("本月业绩 "+t._s(t.total.yeji))]),e("view",{staticClass:"center-t-b"},[t._v("查看详情 》")])]),t._m(0),e("view",{staticClass:"center-number"},[e("text",[t._v(t._s(t.total.reward))])])]),e("view",{staticClass:"center-b center-extends",attrs:{eventid:"52f5ef41-1"},on:{click:t.showQrcode}},[e("text",[t._v("专属推广二维码")])]),e("view",{staticClass:"center-b center-teams",attrs:{eventid:"52f5ef41-2"},on:{click:t.toAgent}},[e("text",[t._v("专属招商二维码")])])]),t.isQRCODE?e("view",{staticClass:"qrcode"},[e("image",{staticClass:"qrcode-a",attrs:{src:t.zsAndTgImg,mode:"aspectFit"}}),e("view",{staticClass:"isqrcodea"},[e("image",{staticClass:"isqrcode",attrs:{src:t.qrcodeBase64,mode:"aspectFit"}})]),e("image",{staticClass:"qrcode-b",attrs:{src:"../../static/images/close.png",mode:"aspectFit",eventid:"52f5ef41-3"},on:{click:t.hideQrcode}})]):t._e(),t.isActivity?e("view",{staticClass:"activity"},[e("image",{staticClass:"act_img",attrs:{src:t.total.activityImg}}),e("image",{staticClass:"qrcode-b",attrs:{src:"../../static/images/close.png",mode:"aspectFit",eventid:"52f5ef41-4"},on:{click:t.hideAct}})]):t._e()])},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("view",{staticClass:"center-title"},[e("text",[t._v("预计佣金")])])}];e.d(r,"a",function(){return n}),e.d(r,"b",function(){return o})},"68fd":function(t,r,e){"use strict";(function(t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(e("86d6"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{zsAndTgImg:"",total:"",isQRCODE:!1,isActivity:!0,qrcodeBase64:"",userInfo:""}},onLoad:function(){},onShow:function(){},onReady:function(){this.userInfo=t.getStorageSync("userInfo");var r=this,e=t.getStorageSync("userInfo").gonghao;t.request({url:this.$FXUrl+"/thisMonth?gonghao="+e,method:"GET",success:function(t){r.total=t.data}})},methods:{showQrcode:function(r){var e=t.getStorageSync("userInfo").ownerNumber,o=n.default.createQrCodeImg("http://wx.feidaijun.com/newEnter/"+e,{size:parseInt(200)});this.qrcodeBase64=o,this.zsAndTgImg="http://feidaijun.xiaohongxian.com/feidaijun_tg.png?v=20190506",this.isQRCODE=!0},hideQrcode:function(t){this.isQRCODE=!1},hideAct:function(t){this.isActivity=!1},toAgent:function(r){var e=t.getStorageSync("userInfo").ownerNumber,o=n.default.createQrCodeImg("http://wx.feidaijun.com/chaedu_activity_zs/"+e,{size:parseInt(200)});this.qrcodeBase64=o,this.zsAndTgImg="http://feidaijun.xiaohongxian.com/zs_code_2.png",this.isQRCODE=!0},toProfile:function(r){t.navigateTo({url:"/pages/profile/profile"})},toWEBVIEW:function(r){t.navigateTo({url:"/pages/agent/agent"})}}};r.default=i}).call(this,e("6e42")["default"])},"80a2":function(t,r,e){"use strict";e.r(r);var n=e("68fd"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(r,t,function(){return n[t]})}(i);r["default"]=o.a},"86d6":function(t,r,e){"use strict";var n=function(t,r){var e=236,n=17,o=t,a=i[r],f=null,h=0,d=null,v=new Array,w={},p=function(t,r){h=4*o+17,f=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(h),A(0,0),A(h-7,0),A(0,h-7),B(),E(),T(t,r),o>=7&&C(t),null==d&&(d=D(o,a,v)),M(d,r)},A=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||h<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||h<=r+n||(f[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},m=function(){for(var t=0,r=0,e=0;e<8;e+=1){p(!0,e);var n=u.getLostPoint(w);(0==e||t>n)&&(t=n,r=e)}return r},E=function(){for(var t=8;t<h-8;t+=1)null==f[t][6]&&(f[t][6]=t%2==0);for(var r=8;r<h-8;r+=1)null==f[6][r]&&(f[6][r]=r%2==0)},B=function(){for(var t=u.getPatternPosition(o),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],i=t[e];if(null==f[n][i])for(var a=-2;a<=2;a+=1)for(var c=-2;c<=2;c+=1)f[n+a][i+c]=-2==a||2==a||-2==c||2==c||0==a&&0==c}},C=function(t){for(var r=u.getBCHTypeNumber(o),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);f[Math.floor(e/3)][e%3+h-8-3]=n}for(e=0;e<18;e+=1){n=!t&&1==(r>>e&1);f[e%3+h-8-3][Math.floor(e/3)]=n}},T=function(t,r){for(var e=a<<3|r,n=u.getBCHTypeInfo(e),o=0;o<15;o+=1){var i=!t&&1==(n>>o&1);o<6?f[o][8]=i:o<8?f[o+1][8]=i:f[h-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(n>>o&1);o<8?f[8][h-o-1]=i:o<9?f[8][15-o-1+1]=i:f[8][15-o-1]=i}f[h-8][8]=!t},M=function(t,r){for(var e=-1,n=h-1,o=7,i=0,a=u.getMaskFunction(r),c=h-1;c>0;c-=2){6==c&&(c-=1);while(1){for(var s=0;s<2;s+=1)if(null==f[n][c-s]){var l=!1;i<t.length&&(l=1==(t[i]>>>o&1));var g=a(n,c-s);g&&(l=!l),f[n][c-s]=l,o-=1,-1==o&&(i+=1,o=7)}if(n+=e,n<0||h<=n){n-=e,e=-e;break}}}},_=function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),f=0;f<r.length;f+=1){var s=r[f].dataCount,l=r[f].totalCount-s;n=Math.max(n,s),o=Math.max(o,l),i[f]=new Array(s);for(var g=0;g<i[f].length;g+=1)i[f][g]=255&t.getBuffer()[g+e];e+=s;var h=u.getErrorCorrectPolynomial(l),d=c(i[f],h.getLength()-1),v=d.mod(h);a[f]=new Array(h.getLength()-1);for(g=0;g<a[f].length;g+=1){var w=g+v.getLength()-a[f].length;a[f][g]=w>=0?v.getAt(w):0}}var y=0;for(g=0;g<r.length;g+=1)y+=r[g].totalCount;var p=new Array(y),A=0;for(g=0;g<n;g+=1)for(f=0;f<r.length;f+=1)g<i[f].length&&(p[A]=i[f][g],A+=1);for(g=0;g<o;g+=1)for(f=0;f<r.length;f+=1)g<a[f].length&&(p[A]=a[f][g],A+=1);return p},D=function(t,r,o){for(var i=s.getRSBlocks(t,r),a=l(),f=0;f<o.length;f+=1){var c=o[f];a.put(c.getMode(),4),a.put(c.getLength(),u.getLengthInBits(c.getMode(),t)),c.write(a)}var g=0;for(f=0;f<i.length;f+=1)g+=i[f].dataCount;if(a.getLengthInBits()>8*g)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*g+")");a.getLengthInBits()+4<=8*g&&a.put(0,4);while(a.getLengthInBits()%8!=0)a.putBit(!1);while(1){if(a.getLengthInBits()>=8*g)break;if(a.put(e,8),a.getLengthInBits()>=8*g)break;a.put(n,8)}return _(a,i)};return w.addData=function(t){var r=g(t);v.push(r),d=null},w.isDark=function(t,r){if(t<0||h<=t||r<0||h<=r)throw new Error(t+","+r);return f[t][r]},w.getModuleCount=function(){return h},w.make=function(){p(!1,m())},w.createTableTag=function(t,r){t=t||2,r="undefined"==typeof r?4*t:r;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+r+"px;",e+='">',e+="<tbody>";for(var n=0;n<w.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<w.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=w.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>",e},w.createImgTag=function(t,r,e){t=t||2,r="undefined"==typeof r?4*t:r;var n=r,o=w.getModuleCount()*t+r;return y(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return w.isDark(a,i)?0:1}return 1})},w};n.stringToBytes=function(t){for(var r=new Array,e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r},n.createStringToBytes=function(t,r){var e=function(){var e=v(t),n=function(){var t=e.read();if(-1==t)throw new Error;return t},o=0,i={};while(1){var a=e.read();if(-1==a)break;var u=n(),f=n(),c=n(),s=String.fromCharCode(a<<8|u),l=f<<8|c;i[s]=l,o+=1}if(o!=r)throw new Error(o+" != "+r);return i}(),n="?".charCodeAt(0);return function(t){for(var r=new Array,o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},u=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r=1335,e=7973,n=21522,i={},u=function(t){var r=0;while(0!=t)r+=1,t>>>=1;return r};return i.getBCHTypeInfo=function(t){var e=t<<10;while(u(e)-u(r)>=0)e^=r<<u(e)-u(r);return(t<<10|e)^n},i.getBCHTypeNumber=function(t){var r=t<<12;while(u(r)-u(e)>=0)r^=e<<u(r)-u(e);return t<<12|r},i.getPatternPosition=function(r){return t[r-1]},i.getMaskFunction=function(t){switch(t){case a.PATTERN000:return function(t,r){return(t+r)%2==0};case a.PATTERN001:return function(t,r){return t%2==0};case a.PATTERN010:return function(t,r){return r%3==0};case a.PATTERN011:return function(t,r){return(t+r)%3==0};case a.PATTERN100:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case a.PATTERN101:return function(t,r){return t*r%2+t*r%3==0};case a.PATTERN110:return function(t,r){return(t*r%2+t*r%3)%2==0};case a.PATTERN111:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},i.getErrorCorrectPolynomial=function(t){for(var r=c([1],0),e=0;e<t;e+=1)r=r.multiply(c([1,f.gexp(e)],0));return r},i.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:return 8;case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(r<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(r<41))throw new Error("type:"+r);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},i.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var s=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(s+=1);var l=Math.abs(100*s/r/r-50)/5;return e+=10*l,e},i}(),f=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r[t]},gexp:function(r){while(r<0)r+=255;while(r>=256)r-=255;return t[r]}};return n}();function c(t,r){if("undefined"==typeof t.length)throw new Error(t.length+"/"+r);var e=function(){var e=0;while(e<t.length&&0==t[e])e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=f.gexp(f.glog(n.getAt(e))+f.glog(t.getAt(o)));return c(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=f.glog(n.getAt(0))-f.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=f.gexp(f.glog(t.getAt(o))+r);return c(e,0).mod(t)}};return n}var s=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={},n=function(r,e){switch(e){case i.L:return t[4*(r-1)+0];case i.M:return t[4*(r-1)+1];case i.Q:return t[4*(r-1)+2];case i.H:return t[4*(r-1)+3];default:return}};return e.getRSBlocks=function(t,e){var o=n(t,e);if("undefined"==typeof o)throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=o.length/3,a=new Array,u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],s=o[3*u+2],l=0;l<f;l+=1)a.push(r(c,s));return a},e}(),l=function(){var t=new Array,r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},g=function(t){for(var r=o.MODE_8BIT_BYTE,e=t,n=[],i={},a=0,u=e.length;a<u;a++){var f=[],c=e.charCodeAt(a);c>65536?(f[0]=240|(1835008&c)>>>18,f[1]=128|(258048&c)>>>12,f[2]=128|(4032&c)>>>6,f[3]=128|63&c):c>2048?(f[0]=224|(61440&c)>>>12,f[1]=128|(4032&c)>>>6,f[2]=128|63&c):c>128?(f[0]=192|(1984&c)>>>6,f[1]=128|63&c):f[0]=c,n.push(f)}n=Array.prototype.concat.apply([],n),n.length!=e.length&&(n.unshift(191),n.unshift(187),n.unshift(239));var s=n;return i.getMode=function(){return r},i.getLength=function(t){return s.length},i.write=function(t){for(var r=0;r<s.length;r+=1)t.put(s[r],8)},i},h=function(){var t=new Array,r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]",r}};return r},d=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw new Error("n:"+t)};return o.writeByte=function(n){t=t<<8|255&n,r+=8,e+=1;while(r>=6)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o},v=function(t){var r=t,e=0,n=0,o=0,i={read:function(){while(o<8){if(e>=r.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw new Error("c:"+t)};return i},w=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=2,o=u(r);t.writeByte(r);var i=0;while(o.length-i>255)t.writeByte(255),t.writeBytes(o,i,255),i+=255;t.writeByte(o.length-i),t.writeBytes(o,i,o.length-i),t.writeByte(0),t.writeString(";")}},a=function(t){var r=t,e=0,n=0,o={write:function(t,o){if(t>>>o!=0)throw new Error("length over");while(e+o>=8)r.writeByte(255&(t<<e|n)),o-=8-e,t>>>=8-e,n=0,e=0;n|=t<<e,e+=o},flush:function(){e>0&&r.writeByte(n)}};return o},u=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=f(),u=0;u<r;u+=1)i.add(String.fromCharCode(u));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var c=h(),s=a(c);s.write(r,n);var l=0,g=String.fromCharCode(o[l]);l+=1;while(l<o.length){var d=String.fromCharCode(o[l]);l+=1,i.contains(g+d)?g+=d:(s.write(i.indexOf(g),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(g+d)),g=d)}return s.write(i.indexOf(g),n),s.write(e,n),s.flush(),c.toByteArray()},f=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw new Error("dup key:"+n);t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return"undefined"!=typeof t[r]}};return e};return i},y=function(t,r,e,n){for(var o=w(t,r),i=0;i<r;i+=1)for(var a=0;a<t;a+=1)o.setPixel(a,i,e(a,i));var u=h();o.write(u);for(var f=d(),c=u.toByteArray(),s=0;s<c.length;s+=1)f.writeByte(c[s]);f.flush();var l="";return l+="data:image/gif;base64,",l+=f,l},p=function(t,r){r=r||{};var e,o=r.typeNumber||4,i=r.errorCorrectLevel||"M",a=r.size||500;try{e=n(o,i||"M"),e.addData(t),e.make()}catch(c){if(o>=40)throw new Error("Text too long to encode");return gen(t,{size:a,errorCorrectLevel:i,typeNumber:o+1})}var u=parseInt(a/e.getModuleCount()),f=parseInt((a-e.getModuleCount()*u)/2);return e.createImgTag(u,f,a)};t.exports={createQrCodeImg:p}},e7e9:function(t,r,e){"use strict";var n=e("ee5c"),o=e.n(n);o.a},e99d:function(t,r,e){"use strict";e.r(r);var n=e("601b"),o=e("80a2");for(var i in o)"default"!==i&&function(t){e.d(r,t,function(){return o[t]})}(i);e("e7e9");var a=e("2877"),u=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);r["default"]=u.exports},ee5c:function(t,r,e){},f564:function(t,r,e){"use strict";e("5964");var n=i(e("b0ce")),o=i(e("e99d"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))}},[["f564","common/runtime","common/vendor"]]]);
});
require('pages/center/center.js');
__wxRoute = 'pages/methods/methods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/methods/methods.js';

define('pages/methods/methods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/methods/methods"],{5134:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{webviewStyles:{progress:{color:"#41A863"}},webUrl:""}},onload:function(){},onShow:function(){var t=this,n=e.getStorageSync("userInfo").gonghao;e.request({url:this.$FXUrl+"/webcontent?gonghao="+n,method:"GET",success:function(e){t.webUrl=e.data.webUrl}})},methods:{}};t.default=n}).call(this,n("6e42")["default"])},5359:function(e,t,n){"use strict";n.r(t);var u=n("5e15"),r=n("e61b");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("5ebf");var a=n("2877"),s=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=s.exports},"5e15":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[e._m(0),n("web-view",{attrs:{"webview-styles":e.webviewStyles,src:e.webUrl,mpcomid:"7fba75c7-0"}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"status-contents"},[n("view",{staticClass:"status top-view"})])}];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},"5ebf":function(e,t,n){"use strict";var u=n("d6ee"),r=n.n(u);r.a},b602:function(e,t,n){"use strict";n("5964");var u=o(n("b0ce")),r=o(n("5359"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,u.default)(r.default))},d6ee:function(e,t,n){},e61b:function(e,t,n){"use strict";n.r(t);var u=n("5134"),r=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=r.a}},[["b602","common/runtime","common/vendor"]]]);
});
require('pages/methods/methods.js');
__wxRoute = 'pages/groups/groups';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/groups/groups.js';

define('pages/groups/groups.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/groups/groups"],{"1c00":function(t,e,a){"use strict";a.r(e);var s=a("2357"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},2357:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{activeA:"#E43d3d",activeB:"#999",activeC:"#999",activeD:"#999",levelData:"",counter:"",all_yeji:"",grade:"zero"}},onload:function(){},onShow:function(){},onReady:function(){var e=t.getStorageSync("userInfo").gonghao,a=this;t.request({url:this.$FXUrl+"/daili_mySelf?gonghao="+e,method:"GET",success:function(t){a.levelData=t.data.datas,a.counter=t.data.counts,a.all_yeji=t.data.z_yeji}})},methods:{activeAa:function(e){this.activeA="#E43d3d",this.activeB="#999",this.activeC="#999",this.activeD="#999";var a=t.getStorageSync("userInfo").gonghao,s=this;t.request({url:this.$FXUrl+"/daili_mySelf?gonghao="+a,method:"GET",success:function(t){s.levelData=t.data.datas,s.counter=t.data.counts,s.all_yeji=t.data.z_yeji,s.levelX="zero"}})},activeBb:function(e){this.activeB="#E43d3d",this.activeA="#999",this.activeC="#999",this.activeD="#999";var a=t.getStorageSync("userInfo").gonghao,s=this;t.request({url:this.$FXUrl+"/daili_one?gonghao="+a,method:"GET",success:function(t){s.levelData=t.data.datas,s.counter=t.data.counts,s.all_yeji=t.data.z_yeji,s.grade="one"}})},activeCc:function(e){this.activeC="#E43d3d",this.activeB="#999",this.activeA="#999",this.activeD="#999";var a=t.getStorageSync("userInfo").gonghao,s=this;t.request({url:this.$FXUrl+"/daili_two?gonghao="+a,method:"GET",success:function(t){s.levelData=t.data.datas,s.counter=t.data.counts,s.all_yeji=t.data.z_yeji,s.grade="two"}})},activeDd:function(e){this.activeC="#999",this.activeB="#999",this.activeA="#999",this.activeD="#E43d3d";var a=t.getStorageSync("userInfo").gonghao,s=this;t.request({url:this.$FXUrl+"/daili_top?gonghao="+a,method:"GET",success:function(t){s.levelData=t.data.datas,s.counter=t.data.counts,s.all_yeji=t.data.z_yeji,s.grade="top"}})}},onReachBottom:function(){var e=this,a=this.levelData.length,s=t.getStorageSync("userInfo").gonghao;"one"===e.grade?t.request({url:e.$FXUrl+"/daili_oneplus?len="+a+"&gonghao="+s,method:"GET",success:function(t){e.levelData=e.levelData.concat(t.data.datas)}}):"two"===e.grade?t.request({url:e.$FXUrl+"/daili_twoplus?len="+a+"&gonghao="+s,method:"GET",success:function(t){e.levelData=e.levelData.concat(t.data.datas)}}):"top"===e.grade&&t.request({url:e.$FXUrl+"/daili_topplus?len="+a+"&gonghao="+s,method:"GET",success:function(t){e.levelData=e.levelData.concat(t.data.datas)}})}};e.default=a}).call(this,a("6e42")["default"])},"498e":function(t,e,a){"use strict";a("5964");var s=n(a("b0ce")),i=n(a("6edd"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},"5ce7":function(t,e,a){},"627f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"groups"},[a("view",{staticClass:"groups-list"},[a("view",{style:{backgroundColor:t.activeA},attrs:{id:"list-a",eventid:"6edadb3e-0"},on:{click:t.activeAa}},[t._v("自身")]),a("view",{style:{backgroundColor:t.activeB},attrs:{id:"list-b",eventid:"6edadb3e-1"},on:{click:t.activeBb}},[t._v("一级")]),a("view",{style:{backgroundColor:t.activeC},attrs:{id:"list-c",eventid:"6edadb3e-2"},on:{click:t.activeCc}},[t._v("二级")]),a("view",{style:{backgroundColor:t.activeD},attrs:{id:"list-d",eventid:"6edadb3e-3"},on:{click:t.activeDd}},[t._v("···")])]),a("view",{staticClass:"groups-num"},[a("view",{staticClass:"num-b"},[a("text",[t._v("人数:"+t._s(t.counter))]),a("text",[t._v("总业绩:"+t._s(t.all_yeji))])])]),a("view",{staticClass:"groups-all"},[t._m(0),t._l(t.levelData,function(e,s){return a("view",{key:e.id,staticClass:"menu-s"},[a("text",{staticClass:"groups-c"},[t._v(t._s(e.ownername))]),a("text",{staticClass:"groups-c"},[t._v(t._s(e.ownerNumber))]),a("text",{staticClass:"groups-c"},[t._v(t._s(e.all_yeji))]),a("text",{staticClass:"groups-c"},[t._v("--")])])})],2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"menu-s"},[a("text",{staticClass:"groups-menu"},[t._v("姓名")]),a("text",{staticClass:"groups-menu"},[t._v("手机号")]),a("text",{staticClass:"groups-menu"},[t._v("总业绩")]),a("text",{staticClass:"groups-menu"},[t._v("其他")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},"6edd":function(t,e,a){"use strict";a.r(e);var s=a("627f"),i=a("1c00");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("fba5");var o=a("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},fba5:function(t,e,a){"use strict";var s=a("5ce7"),i=a.n(s);i.a}},[["498e","common/runtime","common/vendor"]]]);
});
require('pages/groups/groups.js');
__wxRoute = 'pages/myself/myself';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myself/myself.js';

define('pages/myself/myself.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myself/myself"],{2292:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{userInfo:""}},onLoad:function(){},onShow:function(){this.userInfo=t.getStorageSync("userInfo")},onReady:function(){},methods:{toReward:function(e){t.navigateTo({url:"/pages/reward/reward"})},toGuize:function(e){t.navigateTo({url:"/pages/guize/guize"})},toAlipay:function(e){t.navigateTo({url:"/pages/alipay/alipay"})},loginOut:function(e){t.removeStorage({key:"userInfo",success:function(e){t.reLaunch({url:"/pages/index/index"})}})}}};e.default=n}).call(this,n("6e42")["default"])},"475f":function(t,e,n){},"5d48":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"myself"},[n("view",{staticClass:"my-avatar"},[n("image",{staticClass:"my-img",attrs:{src:"../../static/images/feixia.png",mode:"aspectFit"}}),n("text",[t._v(t._s(t.userInfo.username))])]),n("view",{staticClass:"my-money",attrs:{eventid:"179c41e1-0"},on:{click:t.toReward}},[n("text",{staticClass:"iconfont-m icon-jin"},[t._v("我的奖金")]),n("view",{staticClass:"my-profile"},[t._v("》")])]),n("view",{staticClass:"my-money",attrs:{eventid:"179c41e1-1"},on:{click:t.toGuize}},[n("text",{staticClass:"iconfont-m icon-guize"},[t._v("返佣规则")]),n("view",{staticClass:"my-profile"},[t._v("》")])]),n("view",{staticClass:"my-money",attrs:{eventid:"179c41e1-2"},on:{click:t.toAlipay}},[n("text",{staticClass:"iconfont-m icon-alipay"},[t._v("绑定支付宝")]),n("view",{staticClass:"my-profile"},[t._v("》")])]),n("button",{staticClass:"clearCookies",attrs:{eventid:"179c41e1-3"},on:{click:t.loginOut}},[t._v("退出")])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"7de4":function(t,e,n){"use strict";n.r(e);var a=n("5d48"),i=n("e2c9");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("c803");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},bbba:function(t,e,n){"use strict";n("5964");var a=s(n("b0ce")),i=s(n("7de4"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},c803:function(t,e,n){"use strict";var a=n("475f"),i=n.n(a);i.a},e2c9:function(t,e,n){"use strict";n.r(e);var a=n("2292"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a}},[["bbba","common/runtime","common/vendor"]]]);
});
require('pages/myself/myself.js');
__wxRoute = 'pages/agent/agent';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/agent/agent.js';

define('pages/agent/agent.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/agent/agent"],{"1b15":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"agent"},[t._m(0),n("form",{attrs:{eventid:"4509a026-0"},on:{submit:t.agentCheck}},[n("view",{staticClass:"agent-input"},[n("input",{staticClass:"iconfont icon-shouji agent-username",attrs:{name:"ownername",type:"text",placeholder:"输入代理姓名",maxlength:"5"}}),n("view",{staticClass:"agent-line"}),n("input",{staticClass:"iconfont icon-mima agent-code",attrs:{name:"ownerNumber",type:"number",placeholder:"输入代理手机号",maxlength:"11"}})]),n("button",{staticClass:"agent-button",attrs:{formType:"submit"}},[t._v("确认添加")])],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"agent-header"},[n("text",{staticClass:"agent-b"},[t._v("平均一位代理")]),n("text",{staticClass:"agent-s"},[t._v("能创造1000元收益")])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"2d88":function(t,e,n){"use strict";var a=n("4416"),o=n.n(a);o.a},4416:function(t,e,n){},"58ba":function(t,e,n){"use strict";n.r(e);var a=n("aaec"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"88a4":function(t,e,n){"use strict";n.r(e);var a=n("1b15"),o=n("58ba");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("2d88");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},aaec:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},onload:function(){},methods:{agentCheck:function(e){var n=e.detail.value.ownername.replace(/^\s+|\s+$/g,""),a=e.detail.value.ownerNumber.replace(/^\s+|\s+$/g,""),o=t.getStorageSync("userInfo").ownerNumber,i=/^[\u2E80-\u9FFF]+$/,s=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;return 0===n.length?t.showToast({icon:"none",title:"请输入姓名",duration:1500}):i.test(n)?0===a.length?t.showToast({icon:"none",title:"输入手机号",duration:1500}):s.test(a)?void t.request({url:this.$FXUrl+"/activity_gonghao_add",method:"POST",data:{z_number:o,ownername:n,ownerNumber:a},success:function(e){return 320===e.data.code?t.showToast({icon:"none",title:"请重新登陆",duration:2e3}):330===e.data.code?t.showToast({icon:"none",title:"手机号被占用",duration:2e3}):310===e.data.code?t.showToast({icon:"none",title:"手机号被占用",duration:2e3}):200===e.data.code?t.showToast({icon:"none",title:"添加成功",duration:2e3}):void 0}}):t.showToast({icon:"none",title:"手机号格式错误",duration:1500}):t.showToast({icon:"none",title:"姓名格式错误",duration:1500})}}};e.default=n}).call(this,n("6e42")["default"])},f943:function(t,e,n){"use strict";n("5964");var a=i(n("b0ce")),o=i(n("88a4"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))}},[["f943","common/runtime","common/vendor"]]]);
});
require('pages/agent/agent.js');
__wxRoute = 'pages/profile/profile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/profile/profile.js';

define('pages/profile/profile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/profile"],{"3e7d":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{number:9008e3,activeA:"#E43d3d",activeB:"#999",activeC:"#999",activeD:"#999",levelData:"",seen:!0}},onLoad:function(){},onShow:function(){},onReady:function(){var e=this,a=t.getStorageSync("userInfo").gonghao;t.request({url:e.$FXUrl+"/myself_yeji?gonghao="+a,method:"GET",success:function(t){e.levelData=t.data.myYeji}})},methods:{activeAa:function(e){this.activeA="#E43d3d",this.activeB="#999",this.activeC="#999",this.activeD="#999";var a=this,i=t.getStorageSync("userInfo").gonghao;t.request({url:a.$FXUrl+"/myself_yeji?gonghao="+i,method:"GET",success:function(t){a.levelData=t.data.myYeji}})},activeBb:function(e){this.activeB="#E43d3d",this.activeA="#999",this.activeC="#999",this.activeD="#999";var a=this,i=t.getStorageSync("userInfo").gonghao;t.request({url:a.$FXUrl+"/one_yeji?gonghao="+i,method:"GET",success:function(t){a.levelData=t.data.oneYeji}})},activeCc:function(e){this.activeC="#E43d3d",this.activeB="#999",this.activeA="#999",this.activeD="#999";var a=this,i=t.getStorageSync("userInfo").gonghao;t.request({url:a.$FXUrl+"/two_yeji?gonghao="+i,method:"GET",success:function(t){a.levelData=t.data.twoYeji}})},activeDd:function(e){this.activeC="#999",this.activeB="#999",this.activeA="#999",this.activeD="#E43d3d";var a=this,i=t.getStorageSync("userInfo").gonghao;t.request({url:a.$FXUrl+"/top_yeji?gonghao="+i,method:"GET",success:function(t){a.levelData=t.data.topYeji}})}}};e.default=a}).call(this,a("6e42")["default"])},"5d85":function(t,e,a){"use strict";a.r(e);var i=a("3e7d"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},7251:function(t,e,a){"use strict";a.r(e);var i=a("af9d"),n=a("5d85");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("e035");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},af9d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"profile"},[a("view",{staticClass:"profile-cons"},[t._m(0),a("view",{staticClass:"profile-level"},[a("text",{style:{backgroundColor:t.activeA},attrs:{id:"level-a",eventid:"0b690ab5-0"},on:{click:t.activeAa}},[t._v("自身战绩")]),a("text",{style:{backgroundColor:t.activeB},attrs:{id:"level-b",eventid:"0b690ab5-1"},on:{click:t.activeBb}},[t._v("一级战绩")]),a("text",{style:{backgroundColor:t.activeC},attrs:{id:"level-c",eventid:"0b690ab5-2"},on:{click:t.activeCc}},[t._v("二级战绩")]),a("text",{style:{backgroundColor:t.activeD},attrs:{id:"level-d",eventid:"0b690ab5-3"},on:{click:t.activeDd}},[t._v("···")])]),t._m(1),0===t.levelData.length?[a("view",{staticClass:"nots"},[t._v("这一级暂无业绩！")])]:t._l(t.levelData,function(e,i){return a("view",{key:e.id,staticClass:"profile-profile"},[a("view",{staticClass:"p-p-a"},[a("text",[t._v(t._s(e.username))]),a("text",[t._v(t._s(e.number))])]),a("view",{staticClass:"p-p-a"},[a("text",[t._v(t._s(e.shenqingTime))]),a("text",[t._v(t._s(e.xiakuanEdu))])]),a("view",{staticClass:"p-p-b"},[a("text",[t._v(t._s(e.shengxiaoTime))]),a("text",[t._v(t._s(e.ownername))]),a("text",[t._v(t._s(e.ownerNumber))])])])})],2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"profile-title"},[a("view",{staticClass:"title-content"},[a("text",{staticClass:"iconfont icon-zhanji"}),a("text",{staticClass:"zhanji-title"},[t._v("我的战绩")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"profile-t"},[a("text",{staticClass:"p-title"},[t._v("受邀人")]),a("text",{staticClass:"p-title"},[t._v("进度")]),a("text",{staticClass:"p-title"},[t._v("生效/归属")])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},b5c3:function(t,e,a){"use strict";a("5964");var i=s(a("b0ce")),n=s(a("7251"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},e035:function(t,e,a){"use strict";var i=a("e0ed"),n=a.n(i);n.a},e0ed:function(t,e,a){}},[["b5c3","common/runtime","common/vendor"]]]);
});
require('pages/profile/profile.js');
__wxRoute = 'pages/reward/reward';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reward/reward.js';

define('pages/reward/reward.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reward/reward"],{"29e2":function(t,e,a){"use strict";var s=a("f04c"),n=a.n(s);n.a},"2e65":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"reward"},[a("view",{staticClass:"reward-cons"},[a("view",{staticClass:"reward-level"},[a("text",{style:{color:t.activeB},attrs:{id:"reward-b",eventid:"59ffe601-0"},on:{click:t.activeBb}},[t._v("已生效客户")]),a("text",{style:{color:t.activeC},attrs:{id:"reward-c",eventid:"59ffe601-1"},on:{click:t.activeCc}},[t._v("上月未生效")])]),t.isSeenB?a("view",{staticClass:"shengxiao"},[t._m(0),t._l(t.levelData,function(e,s){return a("view",{key:e.id,staticClass:"profile-profile"},[a("view",{staticClass:"p-p-a"},[a("text",[t._v(t._s(e.username))]),a("text",[t._v(t._s(e.number))])]),a("view",{staticClass:"p-p-a"},[a("text",[t._v(t._s(e.shengxiaoTime))]),a("text",[t._v(t._s(e.xiakuanEdu))])]),e.gonghao===t.gonghao?[t._m(1,!0)]:t.gonghao===e.z_gonghao?[a("view",{staticClass:"p-p-b"},[a("text"),a("text",[t._v(t._s(e.ownername)+"·一级")]),a("text",[t._v(t._s(e.ownerNumber))])])]:[a("view",{staticClass:"p-p-b"},[a("text",[t._v(t._s(e.ownername)+"·二级")]),a("text",[t._v(t._s(e.ownerNumber))])])]],2)})],2):t._e(),t.isSeenC?a("view",{staticClass:"shangyue"},[t._m(2),t._l(t.levelData,function(e,s){return a("view",{key:e.id,staticClass:"profile-profile"},[a("view",{staticClass:"p-p-a"},[a("text",[t._v(t._s(e.username))]),a("text",[t._v(t._s(e.number))])]),a("view",{staticClass:"p-p-a"},[a("text",[t._v(t._s(e.shengxiaoTime))]),a("text",[t._v(t._s(e.xiakuanEdu))])]),e.gonghao===t.gonghao?[t._m(3,!0)]:t.gonghao===e.z_gonghao?[a("view",{staticClass:"p-p-b"},[a("text"),a("text",[t._v(t._s(e.ownername)+"·一级")]),a("text",[t._v(t._s(e.ownerNumber))])])]:[a("view",{staticClass:"p-p-b"},[a("text",[t._v(t._s(e.ownername)+"·二级")]),a("text",[t._v(t._s(e.ownerNumber))])])]],2)})],2):t._e()])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"profile-t"},[a("text",{staticClass:"p-title"},[t._v("受邀人")]),a("text",{staticClass:"p-title"},[t._v("生效时间/额度")]),a("text",{staticClass:"p-title"},[t._v("归属")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"p-p-b"},[a("text",[t._v("自身")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"profile-t"},[a("text",{staticClass:"p-title"},[t._v("受邀人")]),a("text",{staticClass:"p-title"},[t._v("生效时间/额度")]),a("text",{staticClass:"p-title"},[t._v("归属")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"p-p-b"},[a("text",[t._v("自身")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},"4f16":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{activeB:"#E43D3D",activeC:"#474747",levelData:"",reward:"",isSeenB:!0,isSeenC:!1,gonghao:""}},onLoad:function(){},onShow:function(){this.gonghao=Number(t.getStorageSync("userInfo").gonghao)},onReady:function(){var e=this,a=t.getStorageSync("userInfo").gonghao;t.request({url:e.$FXUrl+"/lastMonthOk?gonghao="+a,method:"GET",success:function(t){e.levelData=t.data.hadCustom}})},methods:{toGuize:function(e){t.navigateTo({url:"/pages/guize/guize"})},activeBb:function(e){var a=this;this.activeB="#E43d3d",this.activeC="#474747",this.isSeenB=!0,this.isSeenC=!1;var s=t.getStorageSync("userInfo").gonghao;t.request({url:a.$FXUrl+"/lastMonthOk?gonghao="+s,method:"GET",success:function(t){a.levelData=t.data.hadCustom}})},activeCc:function(e){var a=this;this.activeC="#E43d3d",this.activeB="#474747",this.isSeenC=!0,this.isSeenB=!1;var s=t.getStorageSync("userInfo").gonghao;t.request({url:a.$FXUrl+"/lastMonthNotOk?gonghao="+s,method:"GET",success:function(t){a.levelData=t.data.hadCustom}})}}};e.default=a}).call(this,a("6e42")["default"])},"699d":function(t,e,a){"use strict";a.r(e);var s=a("4f16"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=n.a},"99ca":function(t,e,a){"use strict";a("5964");var s=i(a("b0ce")),n=i(a("fa7b"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},f04c:function(t,e,a){},fa7b:function(t,e,a){"use strict";a.r(e);var s=a("2e65"),n=a("699d");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("29e2");var o=a("2877"),r=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports}},[["99ca","common/runtime","common/vendor"]]]);
});
require('pages/reward/reward.js');
__wxRoute = 'pages/alipay/alipay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/alipay/alipay.js';

define('pages/alipay/alipay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/alipay/alipay"],{1333:function(t,a,n){"use strict";n("5964");var e=i(n("b0ce")),o=i(n("9fb0"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(o.default))},"485e":function(t,a,n){"use strict";var e=n("6759"),o=n.n(e);o.a},6759:function(t,a,n){},7499:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{userInfo:""}},onLoad:function(){},onShow:function(){this.userInfo=t.getStorageSync("userInfo")},onReady:function(){},methods:{alipayCheck:function(a){var n=t.getStorageSync("userInfo").gonghao,e=a.detail.value.alipay.replace(/^\s+|\s+$/g,""),o=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;return 0===e.length?t.showToast({icon:"none",title:"输入支付宝手机号",duration:2500}):o.test(e)?void t.request({url:this.$FXUrl+"/feixiaAlipay?alipay="+e+"&gonghao="+n,method:"GET",success:function(a){return 200===a.data.code?t.showToast({icon:"none",title:"已经绑过了",duration:1500}):600===a.data.code?t.showToast({icon:"none",title:"系统错误",duration:1500}):205===a.data.code?t.showToast({icon:"none",title:"支付宝绑定成功",duration:1500}):void 0}}):t.showToast({icon:"none",title:"支付宝绑定的手机号",duration:2500})}}};a.default=n}).call(this,n("6e42")["default"])},"8bbe":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("view",{staticClass:"alipay"},[t._m(0),n("form",{attrs:{eventid:"753b41a1-0"},on:{submit:t.alipayCheck}},[n("view",{staticClass:"alipay-input"},[t.userInfo.alipay?n("input",{staticClass:"iconfont icon-shouji alipay-username",attrs:{type:"number",name:"alipay",placeholder:"已绑定:"+t.userInfo.alipay,maxlength:"11"}}):n("input",{staticClass:"iconfont icon-shouji alipay-username",attrs:{type:"number",name:"alipay",placeholder:"输入支付宝绑定的手机号",maxlength:"11"}})]),n("button",{staticClass:"alipay-button",attrs:{formType:"submit"}},[t._v("确认绑定")])],1)],1)},o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("view",{staticClass:"alipay-header"},[n("text",{staticClass:"alipay-b"},[t._v("绑定支付宝")]),n("text",{staticClass:"alipay-s"},[t._v("佣金直达代理支付宝账户")])])}];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return o})},9788:function(t,a,n){"use strict";n.r(a);var e=n("7499"),o=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,function(){return e[t]})}(i);a["default"]=o.a},"9fb0":function(t,a,n){"use strict";n.r(a);var e=n("8bbe"),o=n("9788");for(var i in o)"default"!==i&&function(t){n.d(a,t,function(){return o[t]})}(i);n("485e");var u=n("2877"),s=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,null,null);a["default"]=s.exports}},[["1333","common/runtime","common/vendor"]]]);
});
require('pages/alipay/alipay.js');


