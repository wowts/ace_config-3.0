import { Constructor, Library} from "@wowts/tslib";

export interface AceConfig {
    RegisterOptionsTable(appName: string, options: any, title?:string):void;
}

const lib: Library<AceConfig> = {
    Embed<T extends Constructor<{}>>(Base: T): Constructor<AceConfig> & T {
        return class extends Base {
            public RegisterOptionsTable(appName: string, options: any, title?:string):void {
            }
        };
    },
};
export default lib;

