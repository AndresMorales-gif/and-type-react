export declare namespace And {

  type PropsAndWithChildren<P> = P & {children?: andElement[]};  

  interface andElement{
    type: string | Function;
    props: { [key: string]: string | boolean | number | unknown } & {children: andElement[]};
  }

  type FC<P = {}> = FunctionComponent<P>;

  interface FunctionComponent<P = {}> {
    (props: PropsAndWithChildren<P>): andElement | null;
  }
}
