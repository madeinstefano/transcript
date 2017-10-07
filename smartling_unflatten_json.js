const fs = require( 'fs' );
const unflatten = require( './lib/unflatten_object' ).unflatten;

const [ file, output ] = process.argv.slice( 2 );

const content = JSON.parse( fs.readFileSync( file ) );

const unflattenedContent = unflatten( content.strings[0] );

fs.writeFileSync( output, JSON.stringify( unflattenedContent, null, 2 ) );
