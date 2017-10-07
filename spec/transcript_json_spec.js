const chai = require( 'chai' );
const execSync = require('child_process').execSync;
const fs = require('fs');

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe( 'Transcripting json files', () => {

  it( 'Should apply schema from the base folder to the target making a new file', async () => {

    const base = 'res/json/base.json'
    const target = 'res/json/target.json'
    const output = 'res/json/output.json'

    execSync(`node transcript.js json ${base} ${target} ${output}`);

    const result = JSON.parse( fs.readFileSync( output ) );

    expect(result.car.model).to.eql("335i");
    expect(result.car.goofy).to.eql(undefined);
  } );
} );
