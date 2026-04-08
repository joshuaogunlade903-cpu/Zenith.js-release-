# 🌌 Zenith.js
### **STOP BUILDING BRIDGES. START BUILDING APPS.**
**The High-Performance, Sub-80kb OS Framework for the Modern Web.**

---

## 🚀 The Zenith Philosophy
Traditional hybrid frameworks (like React Native) rely on a **Bridge** to communicate between JavaScript and the device. This creates a "performance tax"—latency, bloat, and complexity. 

**Zenith.js** is built differently. It is a **Zero-Footprint, Multi-Threaded Kernel** for web applications. It provides direct, synchronous, and high-speed access to hardware, UI binding, and background processing—all without a compiler, a bundler, or a bridge.

> *"The web is powerful enough to run native apps. Zenith.js is the proof."*

---

## ✨ Key Advantages
* **⚡ Ultra-Lightweight:** Less than **80kb** total. Faster than a single "Hello World" React component.
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

All under 80kb
===============================
