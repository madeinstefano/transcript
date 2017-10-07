const objProto = Reflect.getPrototypeOf( { } );
const isObj = v => Object.getPrototypeOf( v ) === objProto;

function flatKeys( object, parent = '', arr = [] ) {
  Object.entries( object ).forEach( kv => {
    const key = [ parent, kv[0] ].filter( v => !!v ).join( '.' );
    if ( isObj( kv[1] ) ) {
      flatKeys( kv[1], key, arr );
    } else {
      arr.push( key );
    }
  } );
  return arr;
}

module.exports = {
  flatten( object ) {
    return flatKeys( object );
  }
};
