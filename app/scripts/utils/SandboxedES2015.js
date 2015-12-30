import * as babel from 'babel-core';
import SandboxedModule from 'sandboxed-module';

const SandboxedEsModule = {
	require: (moduleId, options) => {
		return SandboxedModule.require(moduleId, Object.assign({
			sourceTransformers: {
				babel: (source) => {
					source = babel.transform(source, {
						presets: ['es2015'],
						plugins: ['add-module-exports']
					}).code;

					return source;
				}
			}
		}, options));
	}
};

export default SandboxedEsModule;
