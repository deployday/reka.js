import { invariant } from '@rekajs/utils';
import { runInAction } from 'mobx';

import { ExtensionDefinition } from './definition';
import { Extension } from './extension';

import { Reka } from '../reka';
import { ExtensionVolatileStateKey } from '../symbols';

export class ExtensionRegistry {
  private keyToExtension: Map<string, Extension> = new Map();
  extensions: Extension[] = [];

  constructor(readonly reka: Reka, definitions: ExtensionDefinition[]) {
    definitions.forEach((definition) => {
      const extension = new Extension(this.reka, definition);
      this.keyToExtension.set(definition.key, extension);
      this.extensions.push(extension);

      runInAction(() => {
        Object.assign(this.reka.externals.states, extension.definition.globals);

        this.reka.volatile[ExtensionVolatileStateKey][
          extension.definition.key
        ] = {
          ...(extension.definition.volatile || {}),
        };
      });
    });
  }

  init() {
    this.reka.change(() => {
      this.extensions.map((extension) => extension.init());
    });
  }

  dispose() {
    this.extensions.map((extension) => extension.dispose());
  }

  getExtensionFromDefinition<D extends ExtensionDefinition<any>>(
    definition: D
  ): Extension<D> {
    const extension = this.keyToExtension.get(definition.key);
    invariant(extension, `Extension "${definition.key}" not found`);
    return extension;
  }

  getExtensionStateValue<D extends ExtensionDefinition<any>>(definition: D) {
    const extension = this.getExtensionFromDefinition(definition);
    return extension.state as D['state'];
  }
}
