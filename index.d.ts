declare namespace mwpUtil{
  export function insert(arr: [], index: number): any[]
  export function append(arr: [], newArr: any): any[]
  export function sum (arr: number[]): number
  export function prepend (arr: [], options: any): any[]
  export function remove(arr: [], index: number): any[]
  export function reduceFn (callback: ()=> any): () => any[]
  export function url (name: string): string
}

declare module "mwp-util" {
  export = mwpUtil
}