import * as core from '@actions/core';

export async function run(path: string, extensions: string): Promise<void> {
  try {
    const ext = extensions.split(',').filter((extension) => extension);

    console.log(ext);

    return;
  } catch (error) {
    core.setFailed(error.message);
  }
}

export const runner = () => {
  return run(core.getInput('gradle-build-path'), core.getInput('result-extensions'));
};

export default runner;
