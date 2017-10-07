const chai = require( 'chai' );
const execSync = require('child_process').execSync;
const fs = require('fs');

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe( 'Unflattening smart files', () => {

  it( 'Should apply schema from the base folder to the target making a new file', async () => {

    const file = 'res/smartling/file.json'
    const output = 'res/smartling/output.json'

    execSync(`node smartling_unflatten_json.js ${file} ${output}`);

    const result = JSON.parse( fs.readFileSync( output ) );

    expect(result.car.engine.power_figures.power).to.eql(330);
    expect(result.car.engine.power_figures.torque).to.eql(231);
  } );
} );
