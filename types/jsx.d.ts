import {And} from './and'

declare global {
  namespace JSX {
      interface Element extends And.andElement { }
      
      interface IntrinsicElements {
          // HTML
          a: unknown;
          button: unknown;
          div: unknown;
          form: unknown;
          input: unknown;
          option: unknown;
          select: unknown;           
      }
  }
}