# ⚡ Zenith.js

> **Stop building bridges. Start building apps.**

A complete JavaScript framework built from scratch — with everything your app needs, built in from day one. No npm install. No build step. No compiler. One script tag and you're shipping.

[![License: MIT](https://img.shields.io/badge/License-MIT-F0A500?style=flat&labelColor=0d0d0d)](LICENSE)
[![JavaScript](https://img.shields.io/badge/Vanilla-JavaScript-F0A500?style=flat&labelColor=0d0d0d&logo=javascript&logoColor=F0A500)](https://github.com/joshuaogunlade903cpu/zenith.js)
[![Built by](https://img.shields.io/badge/Built%20by-Joshua%20Ogunlade-F0A500?style=flat&labelColor=0d0d0d)](https://github.com/joshuaogunlade903cpu)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-F0A500?style=flat&labelColor=0d0d0d)

---

## 🚀 Quick Start

```html
<script src="zenith.js"></script>
<div id="app"></div>

<script>
const { ZNative, DOM, BindingManager, SetupBind } = Zenith

const app = new ZNative('div', {}, `
  <BoxVLayout gap="16px" align="center" fillX>
    <TH1>Count: <Bind>count</Bind></TH1>
    <PushButton _z_click="inc()">+ Add</PushButton>
  </BoxVLayout>
`)

app.runIn(DOM.body)
SetupBind()

let n = 0
window.inc = () => BindingManager.set('count', ++n)
</script>
```

That's it. No webpack. No Vite. No Babel. **Just works.**

---

## 📦 What's Built In

Everything your app needs — zero external packages required.

| Category | What you get |
|---|---|
| 🧩 **DOM Engine** | `DOMElement` · `Template` · `ZNative` · `ZNativeFrom` |
| 🎨 **Layout** | `BoxHLayout` · `BoxVLayout` · `GridLayout` · `StackLayout` |
| 🔁 **State / Binding** | `BindingManager` · `Binding` · `State` · two-way reactive |
| 🧭 **Routing** | `Router` · `InternalRouter` · `RouteWrapper` + auth guards |
| 📋 **Forms** | `FormValidator` · `FormHandle` · declarative rules |
| 🗂 **Storage (4 layers)** | `FileSystem` · `Writer` · `FileManager` · `DataBase` |
| 🧵 **Concurrency** | `Thread` · `Threads` · `SubProcess` · `Clock` |
| 📷 **Camera** | `Camera` · `CameraConfig` · `FacingMode` · `VideoRecorder` |
| 🎙 **Audio** | `Microphone` · `MicrophoneConfig` · `AudioRecorder` |
| 📡 **Events** | `Emitter` — named pub/sub |
| 🌊 **Streaming** | `Stream` — push-controlled data pipeline |
| 🔒 **Types** | `Type` · `CN.Number` · `CN.String` — runtime enforcement |
| 🎬 **Animation** | `zenithAnimate()` on every DOM element |
| 🔗 **Links** | `Link.openWhatsApp` · `openEmail` · `openTelegram` · etc |
| 🌐 **Network** | `request()` — built-in XHR wrapper |
| 💾 **Service Worker** | `ServiceWorker` — PWA support |

---

## 🏗 ZNative — The Template Language

ZNative is Zenith's declarative component format. Write UI like you're describing it, not programming it.

```xml
<BoxHLayout gap="12px" spaceEvenly fillX>
  <BoxVLayout gap="8px" align="center">
    <Image src="avatar.png" width="80px"></Image>
    <TH2>Joshua</TH2>
    <TP>Creator of Zenith.js</TP>
  </BoxVLayout>

  <BoxVLayout gap="8px" justify="center">
    <PushButton _z_click="follow()">Follow</PushButton>
    <PushButton _z_click="message()">Message</PushButton>
  </BoxVLayout>
</BoxHLayout>
```

### All ZNative tags

| Tag | Renders as |
|---|---|
| `<BoxHLayout>` | Horizontal flex container |
| `<BoxVLayout>` | Vertical flex container |
| `<GridLayout>` | CSS Grid container |
| `<StackLayout>` | Stacked / overlapping container |
| `<PushButton>` | `<button>` |
| `<SubmitButton>` | `<button type="submit">` |
| `<Input>` | `<input>` |
| `<TextArea>` | `<textarea>` |
| `<Image>` | `<img>` |
| `<Video>` | `<video>` |
| `<Audio>` | `<audio>` |
| `<PDF>` | PDF viewer |
| `<WebView>` | `<iframe>` |
| `<Canvas>` | `<canvas>` |
| `<Bind>` | Reactive binding node |
| `<For>` | Declarative loop |
| `<StyleSheet>` | Scoped CSS |
| `<TH1>`–`<TH6>` | `<h1>`–`<h6>` |
| `<TP>` | `<p>` |
| `<Text>` | `<pre>` |
| `<Part>` | `<section>` |
| `<Layout>` | `<div>` |
| `<Inline>` | `<span>` |
| `_z_click` | `onclick` |
| `_z_input` | `oninput` |
| `_z_change` | `onchange` |

---

## 📷 Camera App Example

A fully working camera app — capture, zoom, flip, save to disk.

```js
const { ZNativeFrom, DOM, Camera, CameraConfig, FacingMode, FileManager, Clock } = Zenith

const ui = ZNativeFrom(`
<Type>div</Type>
<StyleSheet>
  video { display: none; }
  canvas { width: 100%; height: 100vh; display: block; }
</StyleSheet>

<video></video>
<Canvas></Canvas>
<div class="capture-btn"></div>
`)

ui.runIn(DOM.body)

const video  = ui.child(1)
const canvas = ui.child(2)
canvas.root.width  = window.innerWidth
canvas.root.height = window.innerHeight

// Render loop — draw camera to canvas every frame
Clock.register_loop(() => {
  canvas.ctx.clearRect(0, 0, canvas.root.width, canvas.root.height)
  canvas.ctx.drawImage(video.root, 0, 0, window.innerWidth, window.innerHeight)
})

// Start camera
const cam = Camera({ ready: () => { cam.connect(video); video.root.play() } })

// Capture and save
document.querySelector('.capture-btn').onclick = () => {
  canvas.root.toBlob(blob => FileManager().saveFile('photo.png', blob), 'image/png')
}
```

---

## 🗂 4-Layer Storage

```js
const { FileSystem, Writer, FileManager, DataBase } = Zenith

// Layer 1 — FileSystem (Cache API, persistent)
FileSystem.saveFile({ folder: 'docs', filename: 'note.txt', file: new Blob(['Hello']) }, res => {})
FileSystem.openFile({ folder: 'docs', filename: 'note.txt' }, res => console.log(res))

// Layer 2 — Writer (localStorage / sessionStorage)
const w = new Writer({ key: 'myapp', config: 'local' })
w.pen = { user: 'Joshua', theme: 'dark' }
w.store()
w.recover()

// Layer 3 — FileManager (native file picker + saver)
const fm = FileManager()
fm.getFile('.pdf', false)
fm.saveFile('export.json', new Blob([JSON.stringify(data)]))

// Layer 4 — DataBase (in-memory + IndexedDB sync)
const db = DataBase()
db.createStore('users')
db.putData('users', 'u1', { name: 'Joshua', age: 16 })
db.storeInIndexDB('myapp', 'users')
```

---

## 🧵 Threading

```js
const { Threads } = Zenith

const worker = Threads.create('background')
worker.loadFromText(
  Threads.script(`
    import threadhelp
    <e> $out(e.data * 2) </e>
  `)
)
worker.run()
worker.onMessage = e => console.log('Result:', e.data)
worker.send(21) // → 42
```

---

## 🧭 Routing with Auth Guard

```js
const { ZNative, Router, RouteWrapper } = Zenith

const home  = new ZNative('div', {}, `<TH1>Home</TH1>`)
const dash  = new ZNative('div', {}, `<TH1>Dashboard</TH1>`)

const router = new Router({
  'home': RouteWrapper({ template: home }),
  'dash': RouteWrapper({
    template: dash,
    apiCheck: () => isLoggedIn(),
    breachAction: () => router.routeTo('home')
  })
})

router.routeTo('home')
```

---

## 📁 Component Files

Zenith supports two importable component formats:

**`.znt.n.xml`** — ZNative format (native-feel tag language)
```xml
<Type>div</Type>
<JS>
  template.child(0).on('click', () => alert('Hello!'))
</JS>

<BoxVLayout gap="12px" align="center">
  <TH2>My Component</TH2>
  <PushButton>Click</PushButton>
</BoxVLayout>
```

**`.znt.xml`** — Template format (standard HTML)
```xml
<type>div</type>
<js>
  template.child(0).on('click', () => alert('Hello!'))
</js>

<div>
  <h2>My Component</h2>
  <button>Click</button>
</div>
```

Import either at runtime — no build needed:
```js
const comp = Zenith.ZNativeImport('./components/mycomp')   // .znt.n.xml
const tmpl = Zenith.TemplateImport('./components/mycomp')  // .znt.xml
comp.runIn(DOM.body)
```

---

## ⚡ Zenith vs The World

| | Zenith.js | React | Vue | Angular | React Native |
|---|---|---|---|---|---|
| Build step | ❌ None | ✅ Required | ✅ Required | ✅ Required | ✅ Required |
| Routing | ✅ Built-in | ❌ Package | ❌ Package | ✅ Verbose | ❌ 5 packages |
| State | ✅ Built-in | ❌ Package | ❌ Package | ✅ Complex | ❌ Package |
| Forms | ✅ Built-in | ❌ Package | ❌ Package | ✅ Verbose | ❌ Package |
| Storage | ✅ 4 layers | ❌ None | ❌ None | ❌ None | ❌ Package |
| Camera | ✅ Built-in | ❌ Package | ❌ Package | ❌ Package | ❌ Package |
| Threading | ✅ Built-in | ❌ None | ❌ None | ❌ None | ❌ None |
| PDF/Video/Audio | ✅ Built-in | ❌ Package | ❌ Package | ❌ Package | ❌ Package |
| Bundle size | ✅ 1 file | ❌ Heavy | ❌ Medium | ❌ Heavy | ❌ 500MB+ |

---

## 🙏 About

Built solo by **Joshua Ogunlade** — 16 years old, Akure, Nigeria 🇳🇬 · Student at FUTA.

No team. No funding. No compiler. Just code.

> *"Stop building bridges. Start building apps."*

---

## 📄 License

MIT — free to use, modify, and distribute.
* **🧵 True Multi-Threading:** Built-in `Thread` and `SubProcess` modules for heavy background logic.
* **📱 ZNative Engine:** A revolutionary declarative templating engine that feels like writing native code.
* **🔋 Batteries Included:** 40+ Integrated APIs including Camera, Video/Audio Recording, IndexedDB, and 2-way Data Binding.
* **🌍 Run Anywhere:** One codebase for PWA, SPA, Electron, Capacitor, or any WebView on Android/iOS.

---
#### <a href="https://zenith-gap.vercel.app">Other advantages click here </a>

## 🛠 Integrated API Suite
Zenith.js packs a massive amount of power into a microscopic footprint:

### **Hardware & Media**
* **Camera & VideoRecorder:** Real-time, configurable native camera feeds.
* **Microphone & AudioRecorder:** Stream-based, high-fidelity audio capture.
* **APP API:** Access vibrations, notifications, and device hardware specs directly.

### **Performance & System**
* **Threads & SubProcess:** True background processing and sandboxed environments.
* **Clock:** High-precision render loops for games and real-time graphics.
* **Binary & Stream:** Simplified ArrayBuffer and real-time data streaming.

### **State & UI Logic**
* **BindingManager:** Automated, hyper-reactive 2-way data binding.
* **Router & RouteWrapper:** Advanced state-aware routing with Auth-guards.
* **FileManager:** Native-style file imports/exports and storage management.
* **Database:** In-memory DB integrated with IndexedDB for persistence.

---

## 🎨 ZNative: The Bridge Killer
ZNative allows you to describe your UI and logic in a single, high-performance template. No JSX, no Virtual DOM diffing overhead.

```xml
<ZNative>
  <StyleSheet>
    body { background: #141414; color: gold; }
    .btn { border-left: 4px solid goldenrod; background: #282828; }
  </StyleSheet>

  <TH2>Zenith Counter</TH2>
  <PushButton class="btn" id="inc">
    Count: <Bind>count</Bind>
  </PushButton>

  <JS>
    // Direct, synchronous control
    const m = Zenith.$bind("count");
    m.value = 0;
    
    Z.DOM.select("#inc").on("click", () => {
      m.value++;
    });
  </JS>
</ZNative>
```

TUTORIAL SITE:
https://zenith-tutorial-site.vercel.app/

============================<br>
List Of Modules or APIs in Zenith.js

1. Writer - for internal storage(LocalStorage)
2. Template - for Templating
3. DOM - Managing Zenith.js DOMElements
4. APP - Audio,Video Streams,Camera access,time,date,vibrations ,notifications ,lazyload
5. Process - Managing Subprocesses
6. Threads - Manageing Threads
7. StorageTester - Checking amount of Storage Used
8. Clock - Registering advanced timing sequences
9. ServiceWorker - registering service workers
10. Binary - Simplified arraybuffer control
11. Stream - For streaming apps
12. request - synchronous retrival of resources 
13. Router - Integrated for changing templates
14. Emitter - For Comunication between Sandboxed Environments
15. Thread - Actual Thread used for heavy processing in the background 
16. SubProcess - Actual Subprocess runs on a thread
17. FileManager - for external file management (imports and exports)
18. DataBase - for inMemory DB integrated with IndexedDB
19. Type - For type checks, type coresion and runtime type work
20. Flex - For Flexible coding
21. BindingManager - for 2way binding
22. SetupBind - for setting up Binding Manager
23. Empty - Empty function 
24. FormValidator - can handle form validation checks
25. FormHandle - can handle form data and response
26. DefaultLoad - Simple Loading Template
27. Binding - Simplified and automated Binding
28. Camera - For realtime configurable camera feed that behaves natively
29. VideoRecorder - Automated Video recorder that uses streams for real time data or video recording
30. CameraConfig - Camera helper for zoom torch etc
31. FacingMode - Camera helper for facing mode
32. Microphone - real time microphone feed
33. AudioRecorder - Simplified stream based audio recording
34. MicrophoneConfig - Helper for configuring things like sampleRate etc on the Mirophone
35. ZNative - Native like templating engine
36. ZNativeFrom - allows creating a template from any string
37. ZNativeImport - allows importing znative scripts (.znt.n.xml)
38. TemplateImport - allows importing html templates (.znt.xml)
39. CNumber - allows limiting and clamping of numbers to a certain range of value it for runtime controled numbers
40. CN - contains raw classes for CNumber and CString

<h3>Zenith.js Now Has all in one templating engine with html and znative support</h3>

All in 80.8kb
===============================
