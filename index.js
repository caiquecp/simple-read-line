import { createReadStream } from 'fs'
import * as readline from 'readline'

/**
 * It gives access to a line when it's readed.
 * @callback onLineCallback
 * @param {string} line
 */

/**
 * It gives access to the error if thrown.
 * @callback onErrorCallback
 * @param {*} err
 */

/**
 * Read a file line by line through callbacks.
 * @param {string} filepath 
 * @param {onLineCallback} onLineCallback
 * @param {onErrorCallback} onErrorCallback
 * @returns {readline.Interface} A readline.Interface instance.
 * @example
 * read(
 *   'file.csv', 
 *   (line) => console.log(`file line: ${line}`),
 *   (err) => console.error(err.toString())
 * )
 */
function read(filepath, onLineCallback, onErrorCallback) {
  const readStream = createReadStream(filepath)
  const rl = readline.createInterface({
    input: readStream,
    output: null,
    terminal: false,
  })

  rl.on('line', (line) => onLineCallback(line))
  rl.on('error', (err) => onErrorCallback(err));

  return rl;
}

export default read;