export declare function isNode(): boolean;
export declare function isBrowser(): boolean;

export declare function capitalize(str: string): string;
export declare function trim(str: string): string;
export declare function toCamelCase(str: string): string;
export declare function toKebabCase(str: string): string;

export declare function unique<T>(arr: T[]): T[];
export declare function flatten(arr: any[]): any[];
export declare function chunk<T>(arr: T[], size: number): T[];

export declare function formatDate(date: Date | string, format?: string): string;
export declare function addDays(date: Date, days: number): Date;
export declare function subtractDays(date: Date, days: number): Date;

export declare function get(url: string, config?: object): Promise<any>;
export declare function post(url: string, data: any, config?: object): Promise<any>;
export declare function put(url: string, data: any, config?: object): Promise<any>;
export declare function del(url: string, config?: object): Promise<any>;

export declare function hashString(str: string, algorithm?: string): string;
export declare function generateRandomBytes(size?: number): string;
export declare function encrypt(text: string, key: string): string;
export declare function decrypt(encryptedText: string, key: string): string;

export declare function log(message: string, level?: string): void;

export declare function measureExecutionTime(fn: () => void): number;

export declare function isEmail(str: string): boolean;
export declare function isURL(str: string): boolean;
export declare function isEmpty(value: any): boolean;

export declare function add(a: number, b: number): number;
export declare function subtract(a: number, b: number): number;
export declare function multiply(a: number, b: number): number;
export declare function divide(a: number, b: number): number;
export declare function random(min?: number, max?: number): number;
export declare function clamp(number: number, min: number, max: number): number;