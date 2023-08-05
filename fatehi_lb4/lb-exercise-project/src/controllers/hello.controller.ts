import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    console.log();
    return 'Hello world!';
  }
}
