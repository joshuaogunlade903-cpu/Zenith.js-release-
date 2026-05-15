import {Zenith} from 'zenith'

// Motion Tag

function Pack_Motion({ from, to, transition='all 1s linear', duration='100',click='',enter='',clickduration='800',select='*',leave=''}={}) {
  const children=this.selectAll(select)
  from.split(';').forEach(e=>{
    const p=e.split(':')
    children.forEach(e=>e.prop(p[0],p[1]))
  })
  
  if(click){children.forEach(z=>
    z.on('click',()=>{
    click.split(';').forEach(e => {
      const p = e.split(':')
      z.prop(p[0],p[1])
    })
    Zenith.Clock.register_once(() => {
      to.split(';').forEach(e => {
        const p = e.split(':')
        z.prop(p[0],p[1])
      })
    }, Number(clickduration))
  }))}
  
  if(enter){children.forEach(z=>
    z.on('pointerenter',()=>{
    enter.split(';').forEach(e => {
      const p = e.split(':')
      z.prop(p[0],p[1])
    })
  }))}
  
  if(leave){children.forEach(z=>
    z.on('pointerleave',()=>{
    enter.split(';').forEach(e => {
      const p = e.split(':')
      z.prop(p[0],p[1])
    })
  }))}
  
  
  this.child(0).prop('transition',transition)
  
  Zenith.Clock.register_once(()=>{
    to.split(';').forEach(e => {
      const p = e.split(':')
      children.forEach(e=>e.prop(p[0],p[1]))
    })
  },Number(duration))
}
Zenith.RegisterTag(Pack_Motion)


// Style Tag
function Pack_Style(attr){
  Object.entries(attr).forEach(([k,v])=>{
    if(k&&attr.hasOwnProperty(k))this.prop(k,v)
  })
}
Zenith.RegisterTag(Pack_Style)