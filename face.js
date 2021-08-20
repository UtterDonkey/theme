/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArgumentType = __webpack_require__(61);

var BlockType = __webpack_require__(47);

var Clone = __webpack_require__(103);

var MathUtil = __webpack_require__(60);

var formatMessage = __webpack_require__(69);

var Video = __webpack_require__(308);

var TargetType = __webpack_require__(301); // const Posenet = require('@tensorflow-models/posenet');


var Blazeface = __webpack_require__(1130); // import * as Blazeface from '@tensorflow-models/blazeface';

/**
 * Icon svg to be displayed in the blocks category menu, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len


var menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM0Qzk3RkYiIGN4PSIxNS41IiBjeT0iMTcuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjNEM5N0ZGIiBjeD0iMjQuNSIgY3k9IjE3LjUiIHI9IjEuNSIvPjxwYXRoIGQ9Ik0yMCA5QzEzLjkyNSA5IDkgMTMuOTI1IDkgMjBzNC45MjUgMTEgMTEgMTEgMTEtNC45MjUgMTEtMTFTMjYuMDc1IDkgMjAgOXptMCAyYTkgOSAwIDExMCAxOCA5IDkgMCAwMTAtMTh6IiBmaWxsPSIjNEM5N0ZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMzUgNGExIDEgMCAwMS45OTMuODgzTDM2IDV2NmExIDEgMCAwMS0xLjk5My4xMTdMMzQgMTFWNmgtNWExIDEgMCAwMS0uOTkzLS44ODNMMjggNWExIDEgMCAwMS44ODMtLjk5M0wyOSA0aDZ6TTUgMzZhMSAxIDAgMDEtLjk5My0uODgzTDQgMzV2LTZhMSAxIDAgMDExLjk5My0uMTE3TDYgMjl2NWg1YTEgMSAwIDAxLjk5My44ODNMMTIgMzVhMSAxIDAgMDEtLjg4My45OTNMMTEgMzZINXoiIGZpbGwtb3BhY2l0eT0iLjUiIGZpbGw9IiM0RDk3RkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0yMi4xNjggMjEuOTQ1YTEgMSAwIDExMS42NjQgMS4xMUMyMi45NzQgMjQuMzQyIDIxLjY1OCAyNSAyMCAyNXMtMi45NzQtLjY1OC0zLjgzMi0xLjk0NWExIDEgMCAxMTEuNjY0LTEuMTFDMTguMzA3IDIyLjY1OCAxOC45OTIgMjMgMjAgMjNjMS4wMDkgMCAxLjY5My0uMzQyIDIuMTY4LTEuMDU1eiIgZmlsbD0iIzRDOTdGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTI5LjcyIDI0LjAyOGEyLjU1NyAyLjU1NyAwIDAwMS44MDgtMS44MDhsLjU0NC0yLjAwOWMuMjUyLS45NDggMS42LS45NDggMS44NTYgMGwuNTQgMi4wMDlhMi41NjMgMi41NjMgMCAwMDEuODEzIDEuODA4bDIuMDA4LjU0NGMuOTQ4LjI1Mi45NDggMS42IDAgMS44NTdsLTIuMDA4LjU0YTIuNTYzIDIuNTYzIDAgMDAtMS44MTMgMS44MDhsLS41NCAyLjAwOWMtLjI1Ni45NTItMS42MDQuOTUyLTEuODU2IDBsLS41NDQtMi4wMDlhMi41NTcgMi41NTcgMCAwMC0xLjgwOS0xLjgwOGwtMi4wMDgtLjU0Yy0uOTQ4LS4yNTYtLjk0OC0xLjYwNSAwLTEuODU3bDIuMDA4LS41NDR6TTUuMDQgNi4zOTZBMS45MTggMS45MTggMCAwMDYuMzk2IDUuMDRsLjQwOC0xLjUwN2MuMTg5LS43MSAxLjItLjcxIDEuMzkyIDBsLjQwNSAxLjUwN2ExLjkyMiAxLjkyMiAwIDAwMS4zNiAxLjM1NmwxLjUwNi40MDhjLjcxLjE5LjcxIDEuMiAwIDEuMzkzbC0xLjUwNy40MDVhMS45MjIgMS45MjIgMCAwMC0xLjM1OSAxLjM1NmwtLjQwNSAxLjUwNmMtLjE5Mi43MTUtMS4yMDMuNzE1LTEuMzkyIDBsLS40MDgtMS41MDZBMS45MTggMS45MTggMCAwMDUuMDQgOC42MDJsLTEuNTA3LS40MDVjLS43MS0uMTkyLS43MS0xLjIwNCAwLTEuMzkzbDEuNTA3LS40MDh6IiBmaWxsPSIjRkZCRjAwIi8+PHBhdGggZD0iTTMxLjU4OSAyMC4wODNsLS41NDQgMi4wMDZhMi4wNTggMi4wNTggMCAwMS0xLjQ1NyAxLjQ1N2wtMi4wMDguNTQ0Yy0xLjQ0LjM4My0xLjQ0IDIuNDMyIDAgMi44MjFsMi4wMS41NGMuNzEuMTkgMS4yNjQuNzQ2IDEuNDU1IDEuNDU2bC41NDQgMi4wMWMuMzgzIDEuNDQ1IDIuNDMzIDEuNDQ1IDIuODIyLS4wMDFsLjU0LTIuMDA5YTIuMDYzIDIuMDYzIDAgMDExLjQ1OS0xLjQ1NWwyLjAwOS0uNTRjMS40NDItLjM5IDEuNDQyLTIuNDQtLjAwMi0yLjgyM2wtMi4wMDYtLjU0M2EyLjA2MiAyLjA2MiAwIDAxLTEuNDYtMS40NTVsLS41NC0yLjAxYy0uMzktMS40NDItMi40MzktMS40NDItMi44MjIuMDAyem0xLjg1Ni4yNTlsLjU0IDIuMDA4YTMuMDYyIDMuMDYyIDAgMDAyLjE2NSAyLjE2bDIuMDA4LjU0NWMuNDU2LjEyLjQ1Ni43NjggMCAuODkxbC0yLjAwNy41NGEzLjA2MiAzLjA2MiAwIDAwLTIuMTY2IDIuMTYybC0uNTQgMi4wMDhjLS4xMjMuNDU4LS43NjkuNDU4LS44OS4wMDJsLS41NDUtMi4wMTFhMy4wNTcgMy4wNTcgMCAwMC0yLjE2Mi0yLjE2MWwtMi4wMDctLjU0Yy0uNDU1LS4xMjMtLjQ1NS0uNzctLjAwMS0uODlsMi4wMS0uNTQ1YTMuMDU3IDMuMDU3IDAgMDAyLjE2LTIuMTYybC41NDQtMi4wMDdjLjEyMi0uNDU2Ljc2OS0uNDU2Ljg5MSAweiIgZmlsbC1vcGFjaXR5PSIuNSIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTYuMzIgMy40MDVsLS40MDcgMS41MDRjLS4xMy40OS0uNTExLjg3LTEuMDA0IDEuMDA1bC0xLjUwNi40MDhjLTEuMjA0LjMyLTEuMjA0IDIuMDMyIDAgMi4zNTdsMS41MDcuNDA1Yy40OS4xMzEuODcyLjUxNCAxLjAwMyAxLjAwM2wuNDA4IDEuNTA4Yy4zMiAxLjIwNyAyLjAzMyAxLjIwNyAyLjM1OCAwbC40MDUtMS41MDdhMS40MjIgMS40MjIgMCAwMTEuMDA1LTEuMDAzbDEuNTA4LS40MDZjMS4yMDQtLjMyNSAxLjIwNC0yLjAzNy0uMDAyLTIuMzU4bC0xLjUwNC0uNDA4YTEuNDIyIDEuNDIyIDAgMDEtMS4wMDctMS4wMDJMOC42OCAzLjQwM2MtLjMyNS0xLjIwNC0yLjAzOC0xLjIwNC0yLjM1OC4wMDJ6bTEuMzkzLjI1OWwuNDA1IDEuNTA2QTIuNDIxIDIuNDIxIDAgMDA5LjgzIDYuODc5bDEuNTA3LjQwOGMuMjE4LjA1OC4yMTguMzY4IDAgLjQyN2wtMS41MDUuNDA1YTIuNDIyIDIuNDIyIDAgMDAtMS43MTMgMS43MWwtLjQwNSAxLjUwNmMtLjA1OS4yMi0uMzY4LjIyLS40MjYuMDAxbC0uNDA5LTEuNTA5YTIuNDE3IDIuNDE3IDAgMDAtMS43MS0xLjcwOGwtMS41MDUtLjQwNWMtLjIxNy0uMDU5LS4yMTctLjM3LS4wMDEtLjQyN0w1LjE3IDYuODhhMi40MTggMi40MTggMCAwMDEuNzA5LTEuNzFsLjQwNy0xLjUwNWMuMDU5LS4yMTguMzY5LS4yMTguNDI3IDB6IiBmaWxsLW9wYWNpdHk9Ii40IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+';
/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len

var blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6IzBmYmQ4YyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMEZCRDhDIiBkPSJNMCAwaDQwdjQwSDB6Ii8+PGNpcmNsZSBmaWxsPSIjRkZGIiBjeD0iMTUuNSIgY3k9IjE3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgY3g9IjI0LjUiIGN5PSIxNy41IiByPSIxLjUiLz48cGF0aCBkPSJNMjAgOUMxMy45MjUgOSA5IDEzLjkyNSA5IDIwczQuOTI1IDExIDExIDExIDExLTQuOTI1IDExLTExUzI2LjA3NSA5IDIwIDl6bTAgMmE5IDkgMCAxMTAgMTggOSA5IDAgMDEwLTE4eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTM1IDRhMSAxIDAgMDEuOTkzLjg4M0wzNiA1djZhMSAxIDAgMDEtMS45OTMuMTE3TDM0IDExVjZoLTVhMSAxIDAgMDEtLjk5My0uODgzTDI4IDVhMSAxIDAgMDEuODgzLS45OTNMMjkgNGg2ek01IDM2YTEgMSAwIDAxLS45OTMtLjg4M0w0IDM1di02YTEgMSAwIDAxMS45OTMtLjExN0w2IDI5djVoNWExIDEgMCAwMS45OTMuODgzTDEyIDM1YTEgMSAwIDAxLS44ODMuOTkzTDExIDM2SDV6IiBmaWxsLW9wYWNpdHk9Ii4yNSIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTI5LjcyIDI0LjAyOGEyLjU1NyAyLjU1NyAwIDAwMS44MDgtMS44MDhsLjU0NC0yLjAwOWMuMjUyLS45NDggMS42LS45NDggMS44NTYgMGwuNTQgMi4wMDlhMi41NjMgMi41NjMgMCAwMDEuODEzIDEuODA4bDIuMDA4LjU0NGMuOTQ4LjI1Mi45NDggMS42IDAgMS44NTdsLTIuMDA4LjU0YTIuNTYzIDIuNTYzIDAgMDAtMS44MTMgMS44MDhsLS41NCAyLjAwOWMtLjI1Ni45NTItMS42MDQuOTUyLTEuODU2IDBsLS41NDQtMi4wMDlhMi41NTcgMi41NTcgMCAwMC0xLjgwOS0xLjgwOGwtMi4wMDgtLjU0Yy0uOTQ4LS4yNTYtLjk0OC0xLjYwNSAwLTEuODU3bDIuMDA4LS41NDR6TTUuMDQgNi4zOTZBMS45MTggMS45MTggMCAwMDYuMzk2IDUuMDRsLjQwOC0xLjUwN2MuMTg5LS43MSAxLjItLjcxIDEuMzkyIDBsLjQwNSAxLjUwN2ExLjkyMiAxLjkyMiAwIDAwMS4zNiAxLjM1NmwxLjUwNi40MDhjLjcxLjE5LjcxIDEuMiAwIDEuMzkzbC0xLjUwNy40MDVhMS45MjIgMS45MjIgMCAwMC0xLjM1OSAxLjM1NmwtLjQwNSAxLjUwNmMtLjE5Mi43MTUtMS4yMDMuNzE1LTEuMzkyIDBsLS40MDgtMS41MDZBMS45MTggMS45MTggMCAwMDUuMDQgOC42MDJsLTEuNTA3LS40MDVjLS43MS0uMTkyLS43MS0xLjIwNCAwLTEuMzkzbDEuNTA3LS40MDh6IiBmaWxsPSIjRkZCRjAwIi8+PHBhdGggZD0iTTIyLjE2OCAyMS45NDVhMSAxIDAgMTExLjY2NCAxLjExQzIyLjk3NCAyNC4zNDIgMjEuNjU4IDI1IDIwIDI1cy0yLjk3NC0uNjU4LTMuODMyLTEuOTQ1YTEgMSAwIDExMS42NjQtMS4xMUMxOC4zMDcgMjIuNjU4IDE4Ljk5MiAyMyAyMCAyM2MxLjAwOSAwIDEuNjkzLS4zNDIgMi4xNjgtMS4wNTV6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMzEuNTg5IDIwLjA4M2wtLjU0NCAyLjAwNmEyLjA1OCAyLjA1OCAwIDAxLTEuNDU3IDEuNDU3bC0yLjAwOC41NDRjLTEuNDQuMzgzLTEuNDQgMi40MzIgMCAyLjgyMWwyLjAxLjU0Yy43MS4xOSAxLjI2NC43NDYgMS40NTUgMS40NTZsLjU0NCAyLjAxYy4zODMgMS40NDUgMi40MzMgMS40NDUgMi44MjItLjAwMWwuNTQtMi4wMDlhMi4wNjMgMi4wNjMgMCAwMTEuNDU5LTEuNDU1bDIuMDA5LS41NGMxLjQ0Mi0uMzkgMS40NDItMi40NC0uMDAyLTIuODIzbC0yLjAwNi0uNTQzYTIuMDYyIDIuMDYyIDAgMDEtMS40Ni0xLjQ1NWwtLjU0LTIuMDFjLS4zOS0xLjQ0Mi0yLjQzOS0xLjQ0Mi0yLjgyMi4wMDJ6bTEuODU2LjI1OWwuNTQgMi4wMDhhMy4wNjIgMy4wNjIgMCAwMDIuMTY1IDIuMTZsMi4wMDguNTQ1Yy40NTYuMTIuNDU2Ljc2OCAwIC44OTFsLTIuMDA3LjU0YTMuMDYyIDMuMDYyIDAgMDAtMi4xNjYgMi4xNjJsLS41NCAyLjAwOGMtLjEyMy40NTgtLjc2OS40NTgtLjg5LjAwMmwtLjU0NS0yLjAxMWEzLjA1NyAzLjA1NyAwIDAwLTIuMTYyLTIuMTYxbC0yLjAwNy0uNTRjLS40NTUtLjEyMy0uNDU1LS43Ny0uMDAxLS44OWwyLjAxLS41NDVhMy4wNTcgMy4wNTcgMCAwMDIuMTYtMi4xNjJsLjU0NC0yLjAwN2MuMTIyLS40NTYuNzY5LS40NTYuODkxIDB6IiBmaWxsLW9wYWNpdHk9Ii41IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNi4zMiAzLjQwNWwtLjQwNyAxLjUwNGMtLjEzLjQ5LS41MTEuODctMS4wMDQgMS4wMDVsLTEuNTA2LjQwOGMtMS4yMDQuMzItMS4yMDQgMi4wMzIgMCAyLjM1N2wxLjUwNy40MDVjLjQ5LjEzMS44NzIuNTE0IDEuMDAzIDEuMDAzbC40MDggMS41MDhjLjMyIDEuMjA3IDIuMDMzIDEuMjA3IDIuMzU4IDBsLjQwNS0xLjUwN2ExLjQyMiAxLjQyMiAwIDAxMS4wMDUtMS4wMDNsMS41MDgtLjQwNmMxLjIwNC0uMzI1IDEuMjA0LTIuMDM3LS4wMDItMi4zNThsLTEuNTA0LS40MDhhMS40MjIgMS40MjIgMCAwMS0xLjAwNy0xLjAwMkw4LjY4IDMuNDAzYy0uMzI1LTEuMjA0LTIuMDM4LTEuMjA0LTIuMzU4LjAwMnptMS4zOTMuMjU5bC40MDUgMS41MDZBMi40MjEgMi40MjEgMCAwMDkuODMgNi44NzlsMS41MDcuNDA4Yy4yMTguMDU4LjIxOC4zNjggMCAuNDI3bC0xLjUwNS40MDVhMi40MjIgMi40MjIgMCAwMC0xLjcxMyAxLjcxbC0uNDA1IDEuNTA2Yy0uMDU5LjIyLS4zNjguMjItLjQyNi4wMDFsLS40MDktMS41MDlhMi40MTcgMi40MTcgMCAwMC0xLjcxLTEuNzA4bC0xLjUwNS0uNDA1Yy0uMjE3LS4wNTktLjIxNy0uMzctLjAwMS0uNDI3TDUuMTcgNi44OGEyLjQxOCAyLjQxOCAwIDAwMS43MDktMS43MWwuNDA3LTEuNTA1Yy4wNTktLjIxOC4zNjktLjIxOC40MjcgMHoiIGZpbGwtb3BhY2l0eT0iLjQiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=';
/**
 * Class for the motion-related blocks in Scratch 3.0
 * @param {Runtime} runtime - the runtime instantiating this block package.
 * @constructor
 */

var Scratch3FaceSensingBlocks = /*#__PURE__*/function () {
  function Scratch3FaceSensingBlocks(runtime) {
    var _this = this;

    _classCallCheck(this, Scratch3FaceSensingBlocks);

    /**
     * The runtime instantiating this block package.
     * @type {Runtime}
     */
    this.runtime = runtime;
    this.runtime.emit('EXTENSION_DATA_LOADING', true);
    Blazeface.load().then(function (model) {
      _this.blazeface = model;

      if (_this.runtime.ioDevices) {
        // Kick off looping the analysis logic.
        _this._loop();
      }
    });
    this.cachedSize = 100;
    this.cachedTilt = 90; // Array of recent boolean values for whether or not a face was detected

    this.isDetectedArrayLength = 5;
    this.isDetectedArray = new Array(this.isDetectedArrayLength);
    this.isDetectedArray.fill(false, 0, this.isDetectedArrayLength); // Smoothed value for whether or not a face was detected

    this.smoothedIsDetected = false;
    this._clearAttachments = this._clearAttachments.bind(this);
    this.runtime.on('PROJECT_STOP_ALL', this._clearAttachments);
  }
  /**
   * After analyzing a frame the amount of milliseconds until another frame
   * is analyzed.
   * @type {number}
   */


  _createClass(Scratch3FaceSensingBlocks, [{
    key: "reset",

    /**
     * Reset the extension's data motion detection data. This will clear out
     * for example old frames, so the first analyzed frame will not be compared
     * against a frame from before reset was called.
     */
    value: function reset() {}
    /**
     * Occasionally step a loop to sample the video, stamp it to the preview
     * skin, and add a TypedArray copy of the canvas's pixel data.
     * @private
     */

  }, {
    key: "_loop",
    value: function _loop() {
      var _this2 = this;

      setTimeout(this._loop.bind(this), Math.max(this.runtime.currentStepTime, Scratch3FaceSensingBlocks.INTERVAL));
      var frame = this.runtime.ioDevices.video.getFrame({
        format: Video.FORMAT_IMAGE_DATA,
        dimensions: Scratch3FaceSensingBlocks.DIMENSIONS,
        cacheTimeout: this.runtime.currentStepTime
      });

      if (frame) {
        this.blazeface.estimateFaces(frame, false).then(function (faces) {
          if (faces) {
            if (!_this2.firstTime) {
              _this2.firstTime = true;

              _this2.runtime.emit('EXTENSION_DATA_LOADING', false);
            }

            _this2.currentFace = faces[0];

            _this2.updateIsDetected();
          }
        });
      }
    }
  }, {
    key: "updateIsDetected",
    value: function updateIsDetected() {
      this.isDetectedArray.push(!!this.currentFace);

      if (this.isDetectedArray.length > this.isDetectedArrayLength) {
        this.isDetectedArray.shift();
      } // if every recent detection is false, set to false


      if (this.isDetectedArray.every(function (item) {
        return item === false;
      })) {
        this.smoothedIsDetected = false;
      } // if every recent detection is true, set to true


      if (this.isDetectedArray.every(function (item) {
        return item === true;
      })) {
        this.smoothedIsDetected = true;
      } // if there's a mix of true and false values, do not change the result

    }
  }, {
    key: "_getFaceSensingState",
    value: function _getFaceSensingState(target) {
      var faceSensingState = target.getCustomState(Scratch3FaceSensingBlocks.STATE_KEY);

      if (!faceSensingState) {
        faceSensingState = Clone.simple(Scratch3FaceSensingBlocks.DEFAULT_FACE_SENSING_STATE);
        target.setCustomState(Scratch3FaceSensingBlocks.STATE_KEY, faceSensingState);
      }

      return faceSensingState;
    }
  }, {
    key: "getInfo",

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    value: function getInfo() {
      // Enable the video layer
      this.runtime.ioDevices.video.enableVideo(); // Return extension definition

      return {
        id: 'faceSensing',
        name: formatMessage({
          id: 'faceSensing.categoryName',
          "default": 'Face Sensing',
          description: 'Name of face sensing extension'
        }),
        blockIconURI: blockIconURI,
        menuIconURI: menuIconURI,
        blocks: [{
          opcode: 'goToPart',
          text: formatMessage({
            id: 'faceSensing.goToPart',
            "default": 'go to [PART]',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          arguments: {
            PART: {
              type: ArgumentType.STRING,
              menu: 'PART',
              defaultValue: '2'
            }
          },
          filter: [TargetType.SPRITE]
        }, {
          opcode: 'pointInFaceTiltDirection',
          text: formatMessage({
            id: 'faceSensing.pointInFaceTiltDirection',
            "default": 'point in direction of face tilt',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE]
        }, {
          opcode: 'setSizeToFaceSize',
          text: formatMessage({
            id: 'faceSensing.setSizeToFaceSize',
            "default": 'set size to face size',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE]
        }, '---', {
          opcode: 'whenTilted',
          text: formatMessage({
            id: 'faceSensing.whenTilted',
            "default": 'when face tilts [DIRECTION]',
            description: ''
          }),
          blockType: BlockType.HAT,
          arguments: {
            DIRECTION: {
              type: ArgumentType.STRING,
              menu: 'TILT',
              defaultValue: 'left'
            }
          }
        }, {
          opcode: 'whenSpriteTouchesPart',
          text: formatMessage({
            id: 'faceSensing.whenSpriteTouchesPart',
            "default": 'when this sprite touches a[PART]',
            description: ''
          }),
          arguments: {
            PART: {
              type: ArgumentType.STRING,
              menu: 'PART',
              defaultValue: '2'
            }
          },
          blockType: BlockType.HAT,
          filter: [TargetType.SPRITE]
        }, {
          opcode: 'whenFaceDetected',
          text: formatMessage({
            id: 'faceSensing.whenFaceDetected',
            "default": 'when a face is detected',
            description: ''
          }),
          blockType: BlockType.HAT
        }, '---', {
          opcode: 'faceIsDetected',
          text: formatMessage({
            id: 'faceSensing.faceDetected',
            "default": 'a face is detected?',
            description: ''
          }),
          blockType: BlockType.BOOLEAN
        }, // {
        //     opcode: 'attachToPart',
        //     text: formatMessage({
        //         id: 'faceSensing.attachToPart',
        //         default: 'attach to [PART]',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         PART: {
        //             type: ArgumentType.STRING,
        //             menu: 'PART',
        //             defaultValue: '2'
        //         }
        //     }
        // },
        {
          opcode: 'faceTilt',
          text: formatMessage({
            id: 'faceSensing.faceTilt',
            "default": 'face tilt',
            description: ''
          }),
          blockType: BlockType.REPORTER
        }, // {
        //     opcode: 'partX',
        //     text: formatMessage({
        //         id: 'faceSensing.partX',
        //         default: 'x position of [PART]',
        //         description: ''
        //     }),
        //     arguments: {
        //         PART: {
        //             type: ArgumentType.NUMBER,
        //             menu: 'PART',
        //             defaultValue: '2'
        //         }
        //     },
        //     blockType: BlockType.REPORTER
        // },
        // {
        //     opcode: 'partY',
        //     text: formatMessage({
        //         id: 'faceSensing.partY',
        //         default: 'y position of [PART]',
        //         description: ''
        //     }),
        //     arguments: {
        //         PART: {
        //             type: ArgumentType.NUMBER,
        //             menu: 'PART',
        //             defaultValue: '2'
        //         }
        //     },
        //     blockType: BlockType.REPORTER
        // },
        {
          opcode: 'faceSize',
          text: formatMessage({
            id: 'faceSensing.faceSize',
            "default": 'face size',
            description: ''
          }),
          blockType: BlockType.REPORTER
        } // {
        //     opcode: 'probability',
        //     text: formatMessage({
        //         id: 'faceSensing.probability',
        //         default: 'probability of face detection',
        //         description: ''
        //     }),
        //     blockType: BlockType.REPORTER
        // },
        // {
        //     opcode: 'numberOfFaces',
        //     text: formatMessage({
        //         id: 'faceSensing.numberOfFaces',
        //         default: 'number of faces',
        //         description: ''
        //     }),
        //     blockType: BlockType.REPORTER
        // }
        ],
        menus: {
          PART: [{
            text: 'nose',
            value: '2'
          }, {
            text: 'mouth',
            value: '3'
          }, {
            text: 'left eye',
            value: '0'
          }, {
            text: 'right eye',
            value: '1'
          }, {
            text: 'between eyes',
            value: '6'
          }, {
            text: 'left ear',
            value: '4'
          }, {
            text: 'right ear',
            value: '5'
          }, {
            text: 'top of head',
            value: '7'
          }],
          TILT: [{
            text: 'left',
            value: 'left'
          }, {
            text: 'right',
            value: 'right'
          }]
        }
      };
    }
  }, {
    key: "getBetweenEyesPosition",
    value: function getBetweenEyesPosition() {
      // center point of a line between the eyes
      var leftEye = this.getPartPosition(0);
      var rightEye = this.getPartPosition(1);
      var betweenEyes = {
        x: 0,
        y: 0
      };
      betweenEyes.x = leftEye.x + (rightEye.x - leftEye.x) / 2;
      betweenEyes.y = leftEye.y + (rightEye.y - leftEye.y) / 2;
      return betweenEyes;
    }
  }, {
    key: "getTopOfHeadPosition",
    value: function getTopOfHeadPosition() {
      // Estimated top of the head point:
      // Make a line perpendicular to the line between the eyes, through
      // its center, and move upward along it the distance from the point
      // between the eyes to the mouth.
      var leftEyePos = this.getPartPosition(0);
      var rightEyePos = this.getPartPosition(1);
      var mouthPos = this.getPartPosition(3);
      var dx = rightEyePos.x - leftEyePos.x;
      var dy = rightEyePos.y - leftEyePos.y;
      var directionRads = Math.atan2(dy, dx) + Math.PI / 2;
      var betweenEyesPos = this.getBetweenEyesPosition();
      var mouthDistance = this.distance(betweenEyesPos, mouthPos);
      var topOfHeadPosition = {
        x: 0,
        y: 0
      };
      topOfHeadPosition.x = betweenEyesPos.x + mouthDistance * Math.cos(directionRads);
      topOfHeadPosition.y = betweenEyesPos.y + mouthDistance * Math.sin(directionRads);
      return topOfHeadPosition;
    }
  }, {
    key: "distance",
    value: function distance(pointA, pointB) {
      var dx = pointA.x - pointB.x;
      var dy = pointA.y - pointB.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: "whenSpriteTouchesPart",
    value: function whenSpriteTouchesPart(args, util) {
      if (!this.currentFace) return false;
      if (!this.currentFace.landmarks) return false;
      var pos = this.getPartPosition(args.PART);
      return util.target.isTouchingScratchPoint(pos.x, pos.y);
    }
  }, {
    key: "whenFaceDetected",
    value: function whenFaceDetected() {
      return this.smoothedIsDetected;
    }
  }, {
    key: "faceIsDetected",
    value: function faceIsDetected() {
      return this.smoothedIsDetected;
    }
  }, {
    key: "numberOfFaces",
    value: function numberOfFaces() {
      return this.allFaces.length;
    }
  }, {
    key: "probability",
    value: function probability() {
      if (this.currentFace) {
        return Math.round(this.currentFace.probability * 100);
      }

      return 0;
    }
  }, {
    key: "faceSize",
    value: function faceSize() {
      if (!this.currentFace) return this.cachedSize;
      var size = Math.round(this.currentFace.bottomRight[0] - this.currentFace.topLeft[0]);
      this.cachedSize = size;
      return size;
    }
  }, {
    key: "getPartPosition",
    value: function getPartPosition(part) {
      var defaultPos = {
        x: 0,
        y: 0
      };
      if (!this.currentFace) return defaultPos;
      if (!this.currentFace.landmarks) return defaultPos;

      if (Number(part) === 6) {
        return this.getBetweenEyesPosition();
      }

      if (Number(part) === 7) {
        return this.getTopOfHeadPosition();
      }

      var result = this.currentFace.landmarks[Number(part)];

      if (result) {
        return this.toScratchCoords(result);
      }

      return defaultPos;
    }
  }, {
    key: "toScratchCoords",
    value: function toScratchCoords(position) {
      return {
        x: position[0] - 240,
        y: 180 - position[1]
      };
    }
  }, {
    key: "partX",
    value: function partX(args) {
      return this.getPartPosition(args.PART).x;
    }
  }, {
    key: "partY",
    value: function partY(args) {
      return this.getPartPosition(args.PART).y;
    }
  }, {
    key: "whenTilted",
    value: function whenTilted(args) {
      var TILT_THRESHOLD = 10;

      if (args.DIRECTION === 'left') {
        return this.faceTilt() < 90 - TILT_THRESHOLD;
      }

      if (args.DIRECTION === 'right') {
        return this.faceTilt() > 90 + TILT_THRESHOLD;
      }

      return false;
    }
  }, {
    key: "goToPart",
    value: function goToPart(args, util) {
      if (!this.currentFace) return;
      var pos = this.getPartPosition(args.PART);
      util.target.setXY(pos.x, pos.y);
    }
  }, {
    key: "pointInFaceTiltDirection",
    value: function pointInFaceTiltDirection(args, util) {
      if (!this.currentFace) return;
      util.target.setDirection(this.faceTilt());
    }
  }, {
    key: "setSizeToFaceSize",
    value: function setSizeToFaceSize(args, util) {
      if (!this.currentFace) return;
      util.target.setSize(this.faceSize());
    }
  }, {
    key: "attachToPart",
    value: function attachToPart(args, util) {
      var state = this._getFaceSensingState(util.target);

      state.attachedToPartNumber = args.PART;
      state.offsetX = 0;
      state.offsetY = 0;
      state.prevX = util.target.x;
      state.prevY = util.target.y;
      state.offsetDirection = 0;
      state.prevDirection = util.target.direction;
      state.offsetSize = 0;
      state.prevSize = util.target.size;
    }
  }, {
    key: "updateAttachments",
    value: function updateAttachments() {
      var _this3 = this;

      this.runtime.targets.forEach(function (target) {
        var state = _this3._getFaceSensingState(target);

        if (state.attachedToPartNumber) {
          var partPos = _this3.getPartPosition(state.attachedToPartNumber);

          if (target.x !== state.prevX) {
            state.offsetX += target.x - state.prevX;
          }

          if (target.y !== state.prevY) {
            state.offsetY += target.y - state.prevY;
          }

          if (target.direction !== state.prevDirection) {
            state.offsetDirection += target.direction - state.prevDirection;
          }

          if (target.size !== state.prevSize) {
            state.offsetSize += target.size - state.prevSize;
          }

          target.setXY(partPos.x + state.offsetX, partPos.y + state.offsetY);
          target.setDirection(_this3.faceTilt() + state.offsetDirection);
          target.setSize(_this3.faceSize() + state.offsetSize);
          state.prevX = target.x;
          state.prevY = target.y;
          state.prevDirection = target.direction;
          state.prevSize = target.size;
        }
      });
    }
  }, {
    key: "_clearAttachments",
    value: function _clearAttachments() {
      var _this4 = this;

      this.runtime.targets.forEach(function (target) {
        var state = _this4._getFaceSensingState(target);

        state.attachedToPartNumber = null;
      });
    }
  }, {
    key: "faceTilt",
    value: function faceTilt() {
      if (!this.currentFace) return this.cachedTilt;
      var leftEyePos = this.getPartPosition(0);
      var rightEyePos = this.getPartPosition(1);
      var dx = rightEyePos.x - leftEyePos.x;
      var dy = rightEyePos.y - leftEyePos.y;
      var direction = 90 - MathUtil.radToDeg(Math.atan2(dy, dx));
      var tilt = Math.round(direction);
      this.cachedTilt = tilt;
      return tilt;
    }
  }], [{
    key: "INTERVAL",
    get: function get() {
      return 1000 / 15;
    }
    /**
     * Dimensions the video stream is analyzed at after its rendered to the
     * sample canvas.
     * @type {Array.<number>}
     */

  }, {
    key: "DIMENSIONS",
    get: function get() {
      return [480, 360];
    }
  }, {
    key: "STATE_KEY",
    get: function get() {
      return 'Scratch.faceSensing';
    }
  }, {
    key: "DEFAULT_FACE_SENSING_STATE",
    get: function get() {
      return {
        attachedToPartNumber: null,
        prevX: 0,
        offsetX: 0,
        prevY: 0,
        offsetY: 0,
        prevSize: 100,
        offsetSize: 0,
        prevDirection: 0,
        offsetDirection: 0
      };
    }
  }]);

  return Scratch3FaceSensingBlocks;
}();

module.exports = Scratch3FaceSensingBlocks;
