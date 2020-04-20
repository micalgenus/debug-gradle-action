import * as core from '@actions/core';
import { testBuildPath, testResultExtensions } from '@/utils/test';

const isTest = process.env.NODE_ENV === 'test';

const buildPath = isTest ? testBuildPath : core.getInput('gradle-build-path');
const resultExtensions = isTest ? testResultExtensions : core.getInput('result-extensions');

async function run(): Promise<void> {
  try {
    const extensions = resultExtensions.split(',').filter((extension) => extension);

    console.log(buildPath);
    console.log(extensions);

    return;
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

export default run;
