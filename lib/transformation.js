const flatten = require( './flatten_object' ).flatten;
const unflatten = require( './unflatten_object' ).unflatten;

function extractValue( flatKey, object ) {
  return flatKey.split( '.' ).reduce( ( o, k ) => ( o === undefined ? undefined : o[k] ), object );
}

function apply( base, target ) {
  const baseSchema = flatten( base );
  const flatFile = baseSchema.reduce( ( obj, k ) => {
    obj[k] = extractValue( k, target ) || extractValue( k, base );
    return obj;
  }, {} );

  return unflatten( flatFile );
}

module.exports = {
  run( baseContent, targetContent ) {
    return apply( baseContent, targetContent );
  }
};
