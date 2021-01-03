declare namespace mwpUtil{
  export function insert(arr: array, index: number): any[]
}

declare module "mwp-util" {
  export = mwpUtil
}