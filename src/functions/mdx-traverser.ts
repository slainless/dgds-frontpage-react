import React, { ReactElement } from "react";

export function isElement(type: string | string[]): (item: any) => item is ReactElement
export function isElement(type: string | string[], item: any): item is ReactElement
export function isElement(type: string | string[], item?: any): any
{
  const _type = Array.isArray(type) ? type : [type]
  const check = (_item) => 
    React.isValidElement<any>(_item) && (
      _type.includes(_item.props.originalType) ||
      _type.includes(_item.props['data-original-type'])
    )
  if(item !== undefined) return check(item)
  return (itemCurry) => check(itemCurry)
}

export function findElement(element: ReactElement, type: string, criterion?: (el: ReactElement) => boolean) {
  const children = React.Children.toArray(element.props.children)
  return children.find(child => 
    isElement(type, child) &&
    criterion(child)
  )
}