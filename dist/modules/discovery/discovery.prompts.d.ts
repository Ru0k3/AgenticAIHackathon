import { ExecutionContext } from '@nitrostack/core';
/**
 * Discovery Prompts
 *
 * TODO: Add description
 */
export declare class DiscoveryPrompts {
    helpPrompt(args: Record<string, unknown>, context: ExecutionContext): Promise<{
        role: "user";
        content: {
            type: "text";
            text: string;
        };
    }[]>;
}
//# sourceMappingURL=discovery.prompts.d.ts.map