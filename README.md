# linkedimagedownloader_en

English translation of linkedimagedownloader by 音水 (Sound Water) for FireFox.

For original see:

  * https://addons.mozilla.org/en-US/firefox/addon/linkedimagedownloader
  * https://otomizu.work/2019/01/02/firefox-quantum-linked-image-downloader/


## Dev notes

In Chrome:

  * open More tools, then Extensions (open chrome://extensions/ )
  * then toggle Developer mode.
  * "Load unpack", select checkout directory

See http://blog.glavin.org/BurntChrome/docs/ for screenshots.

Use `chrome.extension.getBackgroundPage().console.log()` and then click on "Inspect views background page" to see console.

  * https://developer.chrome.com/extensions/extension
  * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension/getBackgroundPage
  * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage


## Firefox

  * open about:debugging#/runtime/this-firefox
  * "Load Temporary Add-on.."
  * select checkout directory, and open `manifest.json`

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

### Porting

  * https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/
  * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
