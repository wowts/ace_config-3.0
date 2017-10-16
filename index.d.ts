import { Library } from "@wowts/tslib";
export interface AceConfig {
    RegisterOptionsTable(appName: string, options: any, title?: string): void;
}
declare const lib: Library<AceConfig>;
export default lib;
