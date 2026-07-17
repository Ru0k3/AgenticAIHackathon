var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nitrostack/core';
import { ReferenceTools } from './reference.tools.js';
import { ReferenceResources } from './reference.resources.js';
import { ReferencePrompts } from './reference.prompts.js';
let ReferenceModule = class ReferenceModule {
};
ReferenceModule = __decorate([
    Module({
        name: 'reference',
        description: 'TODO: Add description',
        controllers: [ReferenceTools, ReferenceResources, ReferencePrompts],
    })
], ReferenceModule);
export { ReferenceModule };
//# sourceMappingURL=reference.module.js.map