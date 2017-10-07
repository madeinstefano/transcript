const chai = require( 'chai' );
const execSync = require('child_process').execSync;
const fs = require('fs');
const yaml = require( 'js-yaml' );

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe( 'Transcripting yaml files', () => {

  it( 'Should apply schema from the base folder to the target making a new file', async () => {

    const base = 'res/yaml/base.yml'
    const target = 'res/yaml/target.yml'
    const output = 'res/yaml/output.yml'

    execSync(`node transcript.js yaml ${base} ${target} ${output}`);

    const result = yaml.safeLoad( fs.readFileSync( output, 'utf8' ) );

    expect(result.car.model).to.eql("335i");
    expect(result.car.goofy).to.eql(undefined);
  } );
} );
