const fs = require( 'fs' );
const yaml = require( 'js-yaml' );
const trans = require( './lib/transformation' );

const [ format, baseFile, targetFile, output ] = process.argv.slice( 2 );

const content = {};

if ( format === 'json' ) {
  content.base = JSON.parse( fs.readFileSync( baseFile, 'utf8' ) );
  content.target = JSON.parse( fs.readFileSync( targetFile, 'utf8' ) );
} else if ( format === 'yaml' ) {
  content.base = yaml.safeLoad( fs.readFileSync( baseFile, 'utf8' ) );
  content.target = yaml.safeLoad( fs.readFileSync( targetFile, 'utf8' ) );
}

const newContent = trans.run( content.base, content.target );

if ( format === 'json' ) {
  fs.writeFileSync( output, JSON.stringify( newContent, null, 2 ) + '\n' );
} else if ( format === 'yaml' ) {
  console.log( newContent );
  console.log( yaml.safeDump( newContent, { indent: 2 } ) );
  fs.writeFileSync( output, yaml.safeDump( newContent, { indent: 2, noCompatMode: true } ) );
}
