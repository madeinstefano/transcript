const objProto = Reflect.getPrototypeOf( { } );
const isObj = v => Object.getPrototypeOf( v ) === objProto;

function mergeDeep( target, ...sources ) {
  if ( !sources.length ) {
    return target;
  }

  const source = sources.shift();

  if ( isObj( target ) && isObj( source ) ) {
    Reflect.ownKeys( source ).forEach( key => {
      if ( isObj( source[key] ) ) {
        if ( !target[key] ) {
          Object.assign( target, { [key]: {} } );
        }
        mergeDeep( target[key], source[key] );
      } else {
        Object.assign( target, { [key]: source[key] } );
      }
    } );
  }

  return mergeDeep( target, ...sources );
}

module.exports = {
  unflatten( flat ) {
    const obj = {};
    Object.keys( flat ).forEach( flatKey => {
      const keys = flatKey.split( '.' );
      let unftn = { [keys[keys.length - 1]]: flat[flatKey] };
      for ( let i = keys.length - 1; i--; ) {
        unftn = { [keys[i]]: unftn };
      }
      mergeDeep( obj, unftn );
    } );

    return obj;
  }
};
