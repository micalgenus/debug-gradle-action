import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    return;
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

export default run;
