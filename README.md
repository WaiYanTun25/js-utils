# js-utils test

A comprehensive collection of utility functions for Node.js, React.js, and Vue.js environments, designed to enhance productivity and simplify common tasks.

## Installation

Install the package via npm:

```bash
npm install js-utils
```
or via yarn:
```bash
yarn add js-utils
```

## Usage

### Node.js (CommonJS)
```
const {
    capitalize,
    formatDate,
    isEmail,
    // Add other utilities as needed
} = require('js-utils');

console.log(capitalize('hello')); // Output: Hello
console.log(formatDate(new Date())); // Output: Formatted date string
console.log(isEmail('test@example.com')); // Output: true
```

### ES Modules (for modern JavaScript environments)
```
import {
    capitalize,
    formatDate,
    isEmail,
    // Add other utilities as needed
} from 'js-utils';

console.log(capitalize('hello')); // Output: Hello
console.log(formatDate(new Date())); // Output: Formatted date string
console.log(isEmail('test@example.com')); // Output: true
```

### Browser (UMD)
```
<!-- Include the script in your HTML -->
<script src="dist/index.umd.js"></script>
<script>
    // Access utilities via global variable (JsUtils)
    console.log(JsUtils.capitalize('hello')); // Output: Hello
    console.log(JsUtils.formatDate(new Date())); // Output: Formatted date string
    console.log(JsUtils.isEmail('test@example.com')); // Output: true
</script>
```

### TypeScript Support
This package includes TypeScript type definitions for enhanced type safety.
```
import {
    formatDate,
    isEmail,
    // Add other utilities as needed
} from 'js-utils';

const formattedDate: string = formatDate(new Date());
const isValidEmail: boolean = isEmail('test@example.com');
```




## API Reference

String Utilities

	•	capitalize(str: string): string: Capitalizes the first letter of a string.
	•	toCamelCase(str: string): string: Converts a string to camelCase.
	•	toKebabCase(str: string): string: Converts a string to kebab-case.

Date Utilities

	•	formatDate(date: Date | string, format?: string): string: Formats a date into a specified format.
	•	addDays(date: Date, days: number): Date: Adds specified number of days to a date.
	•	subtractDays(date: Date, days: number): Date: Subtracts specified number of days from a date.

HTTP Utilities

	•	get(url: string, config?: object): Promise<any>: Performs a GET request.
	•	post(url: string, data: any, config?: object): Promise<any>: Performs a POST request.
	•	put(url: string, data: any, config?: object): Promise<any>: Performs a PUT request.
	•	del(url: string, config?: object): Promise<any>: Performs a DELETE request.

Crypto Utilities

	•	hashString(str: string, algorithm?: string): string: Hashes a string using a specified algorithm (default is SHA-256).
	•	generateRandomBytes(size?: number): string: Generates random bytes as a hexadecimal string.
	•	encrypt(text: string, key: string): string: Encrypts text using AES-256-CBC encryption.
	•	decrypt(encryptedText: string, key: string): string: Decrypts AES-256-CBC encrypted text.

Logging Utilities

	•	log(message: string, level?: string): void: Logs a message with optional log level (default is ‘info’).

Validation Utilities

	•	isEmail(str: string): boolean: Checks if a string is a valid email address.
	•	isURL(str: string): boolean: Checks if a string is a valid URL.
	•	isEmpty(value: any): boolean: Checks if a value is empty (null, undefined, empty string, empty object/array).

Math Utilities

	•	add(a: number, b: number): number: Adds two numbers.
	•	subtract(a: number, b: number): number: Subtracts two numbers.
	•	multiply(a: number, b: number): number: Multiplies two numbers.
	•	divide(a: number, b: number): number: Divides two numbers.
	•	random(min?: number, max?: number): number: Generates a random number within a specified range.
	•	clamp(number: number, min: number, max: number): number: Clamps a number within a specified range.
## Contributing

Contributions are welcome! Fork the repo and submit a pull request with your enhancements.

## Issues

If you discover any issues or have questions, please open an issue on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

	•	This package was inspired by various utility libraries and frameworks.
	•	Special thanks to contributors and maintainers for their valuable contributions.

### Notes:

- **Usage Examples**: Provide usage examples for different environments (Node.js, ES Modules, Browser).
- **API Reference**: List and describe all utility functions available in your package, categorizing them by utility type (String, Date, HTTP, etc.).
- **TypeScript Support**: Mention TypeScript support and usage.
- **Contributing**: Encourage contributions and provide guidelines for contributing to the package.
- **Issues**: Invite users to report issues on GitHub and provide a link to your repository's issue tracker.
- **License**: Include information about the license under which your package is distributed.
- **Acknowledgements**: Optionally, acknowledge any contributors or inspirations for your package.
