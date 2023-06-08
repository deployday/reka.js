import React, { useEffect, useState } from 'react'
import { observer, useReka } from '@rekajs/react';
import * as t from '@rekajs/types';

export type TextProps = {
  id: String
  className: string
  fontSize: string
  textAlign: string
  fontWeight: string
  color: Record<'r' | 'g' | 'b' | 'a', string>
  shadow: number
  text: string
  margin: [string, string, string, string]
}

const Text = (props) => {
  const { reka } = useReka();
      console.log('ZZZ', reka)
  const enabled = true
  const [text] = useState(props.text)
  const onChange = (e) => {
    const newText = e.target.innerText
      // console.log('changing;', JSON.stringify(props.id.template, null, 2))
    const node = reka.getNodeFromId(props.id.template.id)
        reka.change(() => {
      const myFrame = reka.getFrame(props.frame)
          // myFrame.setProps({ value: 'asdasd'})

          // console.log('PROPPSSS', JSON.stringify(node.props, null, 2))
          // node.props.value.value = newText
          node.props.value = t.literal({ value: newText })
    // node.children.push(
    //       t.tagTemplate({
    //               tag: 'button',
    //               props: {},
    //               children: [
    //                         t.tagTemplate({
    //                                     tag: 'text',
    //                                     props: {
    //                                                 value: t.literal({ value: 'OPPA' }),
    //                                                 },
    //                                     children: [],
    //                                   }),
    //                       ],
    //             })
    // )
        })
      // console.log('MYFRAME', JSON.stringify(props.frame, null,2))
//     if (myFrame) {
//         reka.change(() => {
//           // node.props.value = newText
//           // component.props.find(
//           //                 (prop) => prop.name === id
//           //               );
//       const appComponent = reka.program.components[0];
//       // t.assert(appComponent.template, t.TagTemplate).tag = 'div';
//           // console.log('TEMPLTE', JSON.stringify(appComponent.template, null, 2))
//           myFrame.setProps({ value: newText })
//           // const node = reka.getNodeFromId(props.id)
//           // console.log('NODEEEE', JSON.stringify(reka.toJSON(), null, 2))
//           // reka.state = reka.toJSON();
//           console.log('IUPDATED VIEW', myFrame.view)
//     appComponent.template.children.push(
//           t.tagTemplate({
//                   tag: 'button',
//                   props: {},
//                   children: [
//                             t.tagTemplate({
//                                         tag: 'text',
//                                         props: {
//                                                     value: t.literal({ value: 'OPPA' }),
//                                                     },
//                                         children: [],
//                                       }),
//                           ],
//                 })
//         );
//           // console.log('appCOMPONNET', appComponent)
//           // myView.props.value = newText
//           // console.log(JSON.stringify(reka.program, null, 2))
//       const myView = myFrame.getViewFromId(props.id)
//       if (myView) {
// //         console.log('MyView PROPS', myView)
// // myView.template.props.init = { value: newText }
// // myView.template.props.value = newText
//       }
//           reka.removeFrame(myFrame)
//         })
//
//
//       // const appComponent = reka.program.components[0];
//       // t.assert(appComponent.template, t.TagTemplate).tag = 'div';
//     };
    // actions.setProp((prop) => {
    //   if (!prop[props.id]) prop[props.id] = {}
    //   prop[props.id].text = e.target.innerText
    // }, 500)
  }
  const onClick = (e) => {
    if (enabled) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return enabled ? (
    <span
      // ref={(ref) => connectors.connect(ref as HTMLElement)}
      contentEditable
      suppressContentEditableWarning={true}
      className={props.className}
      onClick={onClick}
      onInput={onChange}
    >
      {props.text}
    </span>
  ) : (
    <span className={props.className} style={{ ...props }}>
      {props.text}
    </span>
  )
}

export { Text }

Text.craft = {
  displayName: 'Text',
  props: {
    text: '',
  },
  related: {},
}
