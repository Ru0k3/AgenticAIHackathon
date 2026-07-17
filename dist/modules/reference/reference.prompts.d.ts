import { ExecutionContext } from '@nitrostack/core';
/**
 * Reference Prompts
 *
 * TODO: Add description
 */
export declare class ReferencePrompts {
    helpPrompt(args: Record<string, unknown>, context: ExecutionContext): Promise<{
        role: "user";
        content: {
            type: "text";
            text: string;
        };
    }[]>;
}
//# sourceMappingURL=reference.prompts.d.ts.map