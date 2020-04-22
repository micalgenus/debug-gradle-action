import * as core from '@actions/core';

export async function run(path: string, extensions: string): Promise<void> {
  try {
    const ext = extensions.split(',').filter((extension) => extension);

    ((extension: string[]) => {
      extension.map((e) => `(${e})`);
    })(ext);

    return;
  } catch (error) {
    core.setFailed(error.message);
  }
}

export const runner = () => run(core.getInput('gradle-build-path'), core.getInput('result-extensions'));

export default runner;
