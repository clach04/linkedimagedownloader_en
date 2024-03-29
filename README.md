# Linked Image Downloader English and Japanese

English translation of LinkedImageDownloader by 音水 (Sound Water) for FireFox.

Download/install from https://github.com/clach04/linkedimagedownloader_en/releases/latest

For original see:

  * https://addons.mozilla.org/en-US/firefox/addon/linkedimagedownloader
      * Unknown license https://addons.mozilla.org/en-US/firefox/addon/linkedimagedownloader/license/
  * https://otomizu.work/2019/01/02/firefox-quantum-linked-image-downloader/
    * https://otomizu.work/2019/06/05/google-chrome-linked-image-downloader/


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

    npm install  web-ext
    web-ext lint
    web-ext build
    web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
    web-ext sign --api-key=%AMO_JWT_ISSUER% --api-secret=%AMO_JWT_SECRET%

Uploading an **unlisted** extension will allow download of xpi for selt-hosted distribution but can never be made public. Mozilla requires a new version to be uploaded and made public at upload time (i.e. version bump required).

### Porting

  * https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/
  * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
