(function () {
    'use strict';

    class Common {
        static titleCase(s) {
            var i, ss = s.toLowerCase().split(/\s+/);
            for (i = 0; i < ss.length; i++) {
                ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
            }
            return ss.join(' ');
        }
        static numFixed(num, len) {
            return parseFloat(parseFloat(num).toFixed(len));
        }
        static parseMoney(value) {
            if (isNaN(value))
                return 0.00;
            return parseFloat(parseFloat(value).toFixed(2));
        }
        static formatMoney(value) {
            let retValue = "0";
            if (isNaN(value))
                value = 0;
            if (value < 9999) {
                retValue = parseInt(`${value}`);
            }
            else if (value < 9999999) {
                retValue = parseFloat(`${value / 1000}`).toFixed(1) + "K";
            }
            else
                retValue = parseFloat(`${value / 10000}`).toFixed(1) + "W";
            return retValue;
        }
        static formatDiamond(value) {
            let retValue = "0";
            if (isNaN(value))
                value = 0;
            if (value < 9999) {
                retValue = parseFloat(value).toFixed(0);
            }
            else if (value < 9999999) {
                retValue = parseFloat(`${value / 1000}`).toFixed(0) + "K";
            }
            else {
                retValue = parseFloat(`${value / 1000000}`).toFixed(0) + "M";
            }
            return retValue;
        }
        static objKeySort(obj) {
            var newkey = Object.keys(obj).sort();
            var newObj = {};
            for (var i = 0; i < newkey.length; i++) {
                newObj[newkey[i]] = obj[newkey[i]];
            }
            return newObj;
        }
        static isWeChat() {
            return !!window["wx"];
        }
        static isQQPlay() {
            return false;
        }
        static isObject(x) {
            var type = typeof x;
            return x !== null && (type === 'object' || type === 'function');
        }
        static object2Query(obj) {
            var args = [];
            for (var k in obj)
                args.push(k + "=" + obj[k]);
            return args.join("&");
        }
        static format() {
            var str = arguments[0];
            if (typeof (str) == "undefined" || str == null || str == '' || str == 'undefined')
                return str;
            for (var i = 1; i < arguments.length; i++) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }
            return str;
        }
        static isFunction(fun) {
            if (typeof fun == 'function')
                return true;
            return false;
        }
        static isEmpty(obj) {
            if (typeof obj == 'object') {
                var name;
                for (name in obj)
                    return false;
                return true;
            }
            else if (obj === null || obj === undefined || obj === 'null' || obj === 'undefined' || obj === '')
                return true;
            return false;
        }
        static dateFtt(fmt, date) {
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds()
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
        static formatTime(date) {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            const second = date.getSeconds();
            return [year, month, day].map(this.formatNumber).join('/');
        }
        static millisecondToDate(msd) {
            return this.secondToDate(msd / 1000);
        }
        static secondToDate(time) {
            let retValue = "";
            if (time) {
                if (time < 60) {
                    retValue = this.formatNumber(0) + ":" + this.formatNumber(time);
                }
                if (time > 60 && time < 60 * 60) {
                    let minute = parseInt(`${time / 60.0}`);
                    let second = time - minute * 60;
                    retValue = this.formatNumber(minute) + ":" + this.formatNumber(second);
                }
            }
            return retValue;
        }
        static getzf(num) {
            let retValue = "";
            if (parseInt(`${num}`) < 10) {
                retValue = '0' + num;
            }
            else
                retValue = `${num}`;
            return retValue;
        }
        static formatNumber(n) {
            n = n.toString();
            return n[1] ? n : '0' + n;
        }
        static colorRGB2Hex(color) {
            var rgb = color.split(',');
            var r = parseInt(rgb[0].split('(')[1]);
            var g = parseInt(rgb[1]);
            var b = parseInt(rgb[2].split(')')[0]);
            var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            return hex;
        }
        static copy(from, target) {
            for (let k in from) {
                target[k] = from[k];
            }
        }
        static randomNumBoth(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range);
            return num;
        }
        static randomToRatio(start, end, range) {
            var num = this.randomNumBoth(start, end);
            if (num <= range) {
                return true;
            }
            return false;
        }
        static randName() {
            var names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var randName = "";
            for (var int = 0; int < 8; int++) {
                var rand = names[this.randomNumBoth(0, names.length - 1)];
                if (rand)
                    randName += rand;
            }
            randName += this.randomNumBoth(100, 999);
            return randName;
        }
        static generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            uuid = uuid.replace(/-/g, "");
            return uuid;
        }
        ;
        static isNumber(obj) {
            return typeof obj == 'number' || Object.prototype.toString.call(obj) == '[object Number]';
        }
        static isArray(obj) {
            return Object.prototype.toString.call(obj) == '[object Array]';
        }
        static isString(obj) {
            return Object.prototype.toString.call(obj) === "[object String]";
        }
        static setCenter(obj) {
            let sp = obj;
            sp.pos((Laya.stage.width - sp.width) / 2, (Laya.stage.height - sp.height) / 2);
        }
        static setFullView(obj) {
            let owner = obj;
            owner.width = Laya.stage.width;
            owner.height = Laya.stage.height;
        }
        static setChildFullView(parent) {
            Common.setFullView(parent);
            for (let i = 0; i < parent.numChildren; i++) {
                let child = parent.getChildAt(i);
                if (child instanceof Laya.Image)
                    continue;
                Common.setFullView(child);
                if (child.numChildren > 0)
                    Common.setChildFullView(child);
            }
        }
        static popOpenAnim(node) {
            return new Promise(resolve => {
                node.scale(0.8, 0.8);
                Laya.Tween.to(node, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(node, () => {
                    Laya.Tween.to(node, { scaleX: 1.0, scaleY: 1.0 }, 50, null, Laya.Handler.create(node, () => {
                        resolve();
                    }));
                }));
            });
        }
        static popCloseAnim(node) {
            return new Promise(resolve => {
                node.scale(1, 1);
                Laya.Tween.to(node, { scaleX: 0, scaleY: 0 }, 100, null, Laya.Handler.create(node, () => {
                    resolve();
                }));
            });
        }
        static alphaCloseAnim(node) {
            return new Promise(resolve => {
                Laya.Tween.to(node, { alpha: 0 }, 100, null, Laya.Handler.create(node, () => {
                    resolve();
                }));
            });
        }
    }

    class BaseModule extends Laya.Script {
        constructor() {
            super();
            this.moduleName = "";
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class ArrayUtil {
        shuffle(array) {
            var iLength = array.length, i = iLength, mTemp, iRandom;
            while (i--) {
                if (i !== (iRandom = Math.floor(Math.random() * iLength))) {
                    mTemp = array[i];
                    array[i] = array[iRandom];
                    array[iRandom] = mTemp;
                }
            }
            return array;
        }
        indexOf(searchArray, searchElement) {
            var result = -1;
            for (var i = 0, length = searchArray.length; i < length; i++) {
                if (searchArray[i] == searchElement) {
                    result = i;
                    break;
                }
            }
            return result;
        }
        replace(replaceArray, fromIndex, toIndex) {
            var from = replaceArray[fromIndex];
            var to = replaceArray[toIndex];
            replaceArray[toIndex] = from;
            replaceArray[fromIndex] = to;
        }
        merge(mergefrom, mergeto) {
            for (var i = 0, length = mergefrom.length; i < length; i++) {
                mergeto.push(mergefrom[i]);
            }
            return mergeto;
        }
        static clone(from) {
            var newarray = new Array();
            newarray = from.slice(0);
            return newarray;
        }
        static remove(origin, item) {
            for (let i = 0; i < origin.length; i++) {
                if (origin[i] == item) {
                    origin.splice(i, 1);
                    i--;
                    return;
                }
            }
        }
    }

    class EventModule extends BaseModule {
        constructor() {
            super();
            this._eventList = [];
            this._waitingForSendList = [];
            this._eventList = [];
            this._waitingForSendList = [];
        }
        addListener(eventName, target, callback) {
            this._addListener(eventName, target, false, callback);
        }
        addToSendQueue(eventName, data) {
            this._addToSendList(eventName, data);
        }
        sendEventImmediately(eventName, data = null) {
            this._sendEvent(eventName, data);
        }
        removeListener(eventName, target) {
            var isEventNameAvailable = eventName != null && eventName != '';
            if (!isEventNameAvailable) {
                console.error('eventName:' + eventName + '不合法！');
                return;
            }
            for (let i = 0; i < this._eventList.length; i++) {
                let event = this._eventList[i];
                if (event.eventName === eventName) {
                    for (let j = 0; j < event.listeners.length; j++) {
                        let listener = event.listeners[j];
                        if (listener.target === target) {
                            ArrayUtil.remove(event.listeners, listener);
                            break;
                        }
                    }
                    if (event.listeners.length == 0) {
                        ArrayUtil.remove(this._eventList, event);
                    }
                    break;
                }
            }
        }
        removeAllListener() {
            this._eventList.length = 0;
            this._eventList = [];
            this._waitingForSendList.length = 0;
            this._waitingForSendList = [];
        }
        _addListener(eventName, target, once, callback) {
            var isEventNameAvailable = eventName != null && eventName != '';
            if (!isEventNameAvailable) {
                console.error('eventName:' + eventName + '不合法！');
                return;
            }
            let listener = new MListener();
            callback instanceof Function ? listener.callback = callback : console.error('callback不是一个方法');
            target ? listener.target = target : console.error('target为空');
            listener.once = once;
            let hasSameEvent = false;
            if (this._eventList.length > 0) {
                for (let i = 0; i < this._eventList.length; i++) {
                    let tempEvent = this._eventList[i];
                    if (eventName === tempEvent.eventName) {
                        tempEvent.listeners.push(listener);
                        hasSameEvent = true;
                        return;
                    }
                }
                if (!hasSameEvent) {
                    let event = new MLEvent();
                    event.eventName = eventName;
                    event.listeners.push(listener);
                    this._eventList.push(event);
                }
            }
            else {
                let event = new MLEvent();
                event.eventName = eventName;
                event.listeners.push(listener);
                this._eventList.push(event);
            }
        }
        _addToSendList(eventName, data) {
            var isEventNameAvailable = eventName != null && eventName != '';
            if (!isEventNameAvailable) {
                console.error('eventName:' + eventName + '不合法！');
                return;
            }
            let toBeSend = {
                eventName: eventName,
                data: data
            };
            this._waitingForSendList.push(toBeSend);
        }
        _sendEvent(eventName, data) {
            let copyedEventList = this._eventList;
            for (let i = 0; i < copyedEventList.length; i++) {
                let event = copyedEventList[i];
                if (event.eventName === eventName) {
                    let listeners = event.listeners;
                    for (let j = listeners.length - 1; j >= 0; j--) {
                        let listener = listeners[j];
                        let callback = listener.callback;
                        let target = listener.target;
                        if (!target) {
                            ArrayUtil.remove(this._eventList[i].listeners, listener);
                            j--;
                            continue;
                        }
                        callback.call(target, data);
                        if (listener.once) {
                            if (this._eventList[i].listeners[j]) {
                                ArrayUtil.remove(this._eventList[i].listeners, listener);
                                i--;
                            }
                        }
                    }
                }
            }
        }
        onUpdate() {
            if (this._waitingForSendList.length == 0) {
                return;
            }
            for (let i = 0; i < this._waitingForSendList.length; i++) {
                let event = this._waitingForSendList[i];
                this._sendEvent(event.eventName, event.data);
                ArrayUtil.remove(this._waitingForSendList, event);
                i--;
            }
        }
        onDisable() {
        }
    }
    class MListener {
        constructor() {
            this.callback = null;
            this.target = [];
            this.once = false;
            this.callback = null;
            this.target = null;
            this.once = false;
        }
    }
    class MLEvent {
        constructor() {
            this.eventName = "";
            this.listeners = [];
            this.eventName = '';
            this.listeners = [];
        }
    }

    class NodeModule extends BaseModule {
        constructor() {
            super();
        }
        onEnable() {
        }
        showNode(node) {
            node.visible = true;
        }
        hideNode(node) {
            node.visible = false;
        }
        removeNode(node) {
            node.removeSelf();
        }
        pop(node) {
            node.destroy(true);
        }
        onDisable() {
        }
    }

    class UIForm extends Laya.Script {
        constructor() {
            super();
            this.isPopEffect = false;
            this.isMask = false;
            this.formName = "";
            this.formName = "";
        }
        onAwake() {
            Common.setFullView(this.owner);
            if (this.isMask) {
                let skin = "comp/img_mask.png";
                let mask = this.owner.addChildAt(new Laya.Image(skin), 0);
                mask.sizeGrid = "1,2,2,1";
                Common.setFullView(mask);
                mask.on(Laya.Event.MOUSE_DOWN, this, this.onMaskMouseDown);
            }
        }
        onMaskMouseDown(e) {
            e.stopPropagation();
        }
        hide() {
        }
        get FormData() {
            return this.mFormData;
        }
        willShow(data) {
            this.mFormData = data;
        }
        onShow(data) {
        }
        willHide(data) {
        }
        onHide(data) {
        }
        onEnable() {
        }
        onDisable() {
        }
        hideAnim(cb) {
            cb();
        }
    }

    var timeLine = new Laya.TimeLine();
    class ToastForm extends UIForm {
        constructor() {
            super();
            this.msgText = null;
        }
        onAwake() {
            super.onAwake();
        }
        show(msg) {
            let owner = this.owner;
            Laya.timer.clear(this, this.hide);
            timeLine.reset();
            this.msgText.text = msg;
            owner.scale(1, 1);
            owner.visible = true;
            timeLine.to(owner, { scaleX: 1.2, scaleY: 1.2 }, 100).to(owner, { scaleX: 1, scaleY: 1 }, 100);
            timeLine.play();
            Laya.timer.once(1000, this, this.hide);
        }
        hide() {
            let owner = this.owner;
            owner.visible = false;
        }
    }

    class FormModel {
        constructor() {
            this.name = "";
            this.node = null;
            this.UIForm = null;
            this.zIndex = 0;
            this.name = "";
            this.node = null;
            this.UIForm = null;
            this.zIndex = 0;
        }
    }
    class UIModule extends BaseModule {
        constructor() {
            super();
            this.layerIndex = 0;
            this.UIRoot = "";
            this.UIFormStack = [];
            this.cachedUIForms = [];
            this.toastForm = null;
            this.rootCanvas = null;
            this.layerIndex = 0;
            this.UIRoot = 'prefab/form/';
            this.UIFormStack = [];
            this.cachedUIForms = [];
            this.toastForm = null;
            this.rootCanvas = Laya.stage;
        }
        onEnable() {
        }
        showToast(msg) {
            let self = this;
            if (self.toastForm == null) {
                this._createUINode('ToastForm', 9999, function (node, index) {
                    Laya.stage.addChild(node);
                    self.toastForm = node.getComponent(ToastForm);
                    node.zOrder = index;
                    self.toastForm.show(msg);
                });
            }
            else {
                self.toastForm.show(msg);
            }
        }
        showLoading(title) {
            if (Laya.Browser.onMiniGame) {
                Lite.platform.showLoading(title);
            }
            else {
                Lite.platform.showLoading(title);
            }
        }
        hideLoading() {
            if (Laya.Browser.onMiniGame) {
                Lite.platform.hideLoading();
            }
        }
        showModal(title, content, cancelTitle, confirmTitle, confirm) {
            if (Laya.Browser.onMiniGame) {
                Lite.platform.showModal(title, content, cancelTitle, confirmTitle, confirm);
            }
        }
        showModalWithoutCancel(title, content, confirmTitle, confirm) {
            if (Laya.Browser.onMiniGame) {
                Lite.platform.showModalWithoutCancel(title, content, confirmTitle, confirm);
            }
        }
        pushUIForm(name, data, callback) {
            let self = this;
            let cachedFormModel = this._getUINodeFromCacheByName(name);
            if (cachedFormModel == null) {
                this._createUIFormModel(name, function (formModel) {
                    self._showUIForm(formModel, data);
                    if (callback) {
                        callback(formModel, data);
                    }
                });
            }
            else {
                cachedFormModel.zIndex = this.layerIndex++;
                this.UIFormStack.push(cachedFormModel);
                this._showUIForm(cachedFormModel, data);
                if (callback) {
                    callback(cachedFormModel, data);
                }
            }
        }
        pop(destroy = false, cb) {
            if (this.UIFormStack.length == 0)
                return;
            let formModel = this.UIFormStack.pop();
            if (destroy) {
                this._destroyUIForm(formModel, null);
            }
            else {
                this._hideUIForm(formModel, null, cb);
            }
        }
        getUIFrom(name) {
            for (let i = 0; i < this.UIFormStack.length; i++) {
                const formModel = this.UIFormStack[i];
                if (formModel.name == name) {
                    return formModel.UIForm;
                }
            }
        }
        hideUIForm(name, data, cb) {
            for (let i = 0; i < this.UIFormStack.length; i++) {
                const formModel = this.UIFormStack[i];
                if (formModel.name == name) {
                    this._hideUIForm(formModel, data, cb);
                }
            }
        }
        hideAllUIForm() {
            for (let i = this.UIFormStack.length - 1; i >= 0; i--) {
                const formModel = this.UIFormStack[i];
                this._hideUIForm(formModel, null);
            }
        }
        destroyUIForm(name, data) {
            for (let i = 0; i < this.UIFormStack.length; i++) {
                const formModel = this.UIFormStack[i];
                if (formModel.name == name) {
                    this._destroyUIForm(formModel, data);
                }
            }
        }
        _formatUIFormName(name) {
            return name.replace(/\//g, "_");
        }
        _createUINode(name, formId, callback) {
            let path = this.UIRoot + name + '.json';
            Lite.resource.loadAsset(path, Laya.Loader.PREFAB, (err, prefab) => {
                let pooName = this._formatUIFormName(name);
                var formNode = Laya.Pool.getItemByCreateFun(pooName, prefab.create, prefab);
                formNode.name = name;
                if (callback)
                    callback(formNode, formId);
            });
        }
        _createUIFormModel(name, callback) {
            let self = this;
            let formModel = new FormModel();
            formModel.name = name;
            let index = this.layerIndex++;
            formModel.zIndex = index;
            this.UIFormStack.push(formModel);
            this._createUINode(name, index, function (node, index) {
                for (let i = 0; i < self.UIFormStack.length; i++) {
                    const tempFormModel = self.UIFormStack[i];
                    if (tempFormModel.zIndex == index && tempFormModel.name == node.name) {
                        if (node == null) {
                            this._removeStack(i);
                            return;
                        }
                        else {
                            let form = node.getComponent(UIForm);
                            form.formName = name;
                            tempFormModel.UIForm = form;
                            tempFormModel.node = node;
                            if (callback) {
                                callback(formModel);
                            }
                            return;
                        }
                    }
                }
            });
        }
        _getUINodeFromCacheByName(name) {
            for (let i = 0; i < this.cachedUIForms.length; i++) {
                const element = this.cachedUIForms[i];
                if (element.node != null && element.name == name) {
                    this.cachedUIForms.splice(i, 1);
                    return element;
                }
            }
            return null;
        }
        _showUIForm(formModel, data) {
            this.rootCanvas.addChild(formModel.node);
            formModel.UIForm.willShow(data);
            formModel.node.visible = true;
            formModel.node.alpha = 1;
            formModel.node.zOrder = formModel.zIndex;
            formModel.UIForm.onShow(data);
            if (formModel.UIForm.isPopEffect) {
                let owner = formModel.node;
                Common.popOpenAnim(owner);
            }
        }
        _hideUIForm(formModel, data, cb) {
            formModel.UIForm.willHide(data);
            formModel.UIForm.onHide(data);
            this._removeStack(formModel);
            this.cachedUIForms.push(formModel);
            if (formModel.UIForm.isPopEffect) {
                let owner = formModel.node;
                Common.alphaCloseAnim(owner).then(() => {
                    formModel.node.visible = false;
                    if (cb)
                        cb();
                });
            }
            else {
                formModel.UIForm.hideAnim(() => {
                    formModel.node.visible = false;
                    if (cb)
                        cb();
                });
            }
        }
        _destroyUIForm(formModel, data) {
            formModel.UIForm.willHide(data);
            formModel.node.removeSelf();
            formModel.UIForm.onHide(data);
            formModel.node.visible = false;
            this._removeStack(formModel);
            formModel.node.destroy(true);
        }
        _removeStack(removeItem) {
            if (isNaN(removeItem)) {
                this.UIFormStack.forEach((item, idx) => {
                    if (item == removeItem) {
                        this.UIFormStack.splice(idx, 1);
                    }
                });
            }
            else
                this.UIFormStack.splice(removeItem, 1);
        }
    }

    class MathUtils {
        constructor() {
        }
        static getAngle(radian) {
            return 180 * radian / Math.PI;
        }
        static getRadian(angle) {
            return angle / 180 * Math.PI;
        }
        static getRadianByPoint(pointA, pointB) {
            return Math.atan2((pointB.y - pointA.y), (pointB.x - pointA.x));
        }
        static getAngleByPoint(pointA, pointB) {
            return this.getRadianByPoint(pointA, pointB) * 180 / Math.PI;
        }
        static vecRotate(vec, angle) {
            let radians = MathUtils.getRadian(angle);
            let sin = Math.sin(radians);
            let cos = Math.cos(radians);
            let x1 = cos * vec.x - sin * vec.y;
            let y1 = sin * vec.x + cos * vec.y;
            return MathUtils.point(x1, y1);
        }
        static getRadianTwoPoint(p1, p2) {
            let xdis = p2.x - p1.x;
            let ydis = p2.y - p1.y;
            return Math.atan2(ydis, xdis);
        }
        static getAngleTwoPoint(p1, p2) {
            let vy = p2.y - p1.y;
            let vx = p2.x - p1.x;
            let ang;
            if (vy == 0) {
                if (vx < 0) {
                    return 180;
                }
                return 0;
            }
            if (vx == 0) {
                if (vy > 0) {
                    ang = 90;
                }
                else if (vy < 0) {
                    ang = 270;
                }
                return ang;
            }
            ang = this.getAngle(Math.atan(Math.abs(vy) / Math.abs(vx)));
            if (vx > 0) {
                if (vy < 0) {
                    ang = 360 - ang;
                }
            }
            else {
                if (vy > 0) {
                    ang = 180 - ang;
                }
                else {
                    ang = 180 + ang;
                }
            }
            return ang;
        }
        static getAngleTwoVec(p1, p2) {
            let radian = Math.atan2(p2.y, p2.x) - Math.atan2(p1.y, p1.x);
            return this.getAngle(radian);
        }
        static getDistance(p1, p2) {
            let disX = p2.x - p1.x;
            let disY = p2.y - p1.y;
            let disQ = Math.pow(disX, 2) + Math.pow(disY, 2);
            return Math.sqrt(disQ);
        }
        static getCirclePointByRadian(center, r, radian) {
            return this.point(center.x + r * Math.cos(radian), center.y + r * Math.sin(radian));
        }
        static exactCount(exactValue, count = 0) {
            let num = Math.pow(10, count);
            let value = (exactValue * num) | 0;
            return value / num;
        }
        static getBezierCutAngle(p0, p1, p2, t) {
            let _x = 2 * (p0.x * (t - 1) + p1.x * (1 - 2 * t) + p2.x * t);
            let _y = 2 * (p0.y * (t - 1) + p1.y * (1 - 2 * t) + p2.y * t);
            let angle = this.getAngle(Math.atan2(_y, _x));
            return angle;
        }
        static getBezierPoint(p0, p1, p2, t, point = null) {
            if (!point) {
                point = new Laya.Point();
            }
            point.x = (1 - t) * (1 - t) * p0.x + 2 * t * (1 - t) * p1.x + t * t * p2.x;
            point.y = (1 - t) * (1 - t) * p0.y + 2 * t * (1 - t) * p1.y + t * t * p2.y;
            return point;
        }
        static getBezier3Point(p0, p1, p2, p3, t, point = null) {
            if (!point) {
                point = new Laya.Point();
            }
            let cx = 3 * (p1.x - p0.x);
            let bx = 3 * (p2.x - p1.x) - cx;
            let ax = p3.x - p0.x - cx - bx;
            let cy = 3 * (p1.y - p0.y);
            let by = 3 * (p2.y - p1.y) - cy;
            let ay = p3.y - p0.y - cy - by;
            point.x = ax * t * t * t + bx * t * t + cx * t + p0.x;
            point.y = ay * t * t * t + by * t * t + cy * t + p0.y;
            return point;
        }
        static getBezier3CutAngle(p0, p1, p2, p3, t) {
            let _x = p0.x * 3 * (1 - t) * (1 - t) * (-1) +
                3 * p1.x * ((1 - t) * (1 - t) + t * 2 * (1 - t) * (-1)) +
                3 * p2.x * (2 * t * (1 - t) + t * t * (-1)) +
                p3.x * 3 * t * t;
            let _y = p0.y * 3 * (1 - t) * (1 - t) * (-1) +
                3 * p1.y * ((1 - t) * (1 - t) + t * 2 * (1 - t) * (-1)) +
                3 * p2.y * (2 * t * (1 - t) + t * t * (-1)) +
                p3.y * 3 * t * t;
            let angle = this.getAngle(Math.atan2(_y, _x));
            return angle;
        }
        static subPoint(v1, v2) {
            return Laya.Point.create().setTo(v1.x - v2.x, v1.y - v2.y);
        }
        static point(x, y) {
            return Laya.Point.create().setTo(x, y);
        }
        static randomNumBoth(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range);
            return num;
        }
        static probabilityCanHappen(num) {
            let random = MathUtils.randomNumBoth(0, 100);
            return random <= num;
        }
        static probabilitys(parr) {
            var arr = 0;
            var pres = [...parr];
            var probabilityCount = 0;
            for (let i = 0; i < pres.length; i++) {
                probabilityCount += pres[i];
            }
            if (probabilityCount != 100) {
                throw '所有概率值总和不等于100%';
            }
            var nums = new Array();
            for (let i = 0; i < pres.length; i++) {
                const element = pres[i];
                for (let index = 0; index < element; index++) {
                    nums.push(arr);
                }
                arr++;
            }
            var random = this.randomNumBoth(0, 99);
            var targetIndex = nums[random];
            return targetIndex;
        }
    }

    class AppConfig extends BaseModule {
        constructor() {
            super();
            this.mistouchNum = 0;
            this.mistouchPosNum = 0;
            this.bannerShowCountLimit = 10;
            this.mistouchInterval = 2;
            this.mAdData = null;
            this.configData = null;
            this.gameNum = 0;
            this.gameNumPos = 0;
        }
        onEnable() {
        }
        getAd() {
            let arr = [...this.adData.indexLeft];
            return arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        }
        getRandomAd() {
            let arr = this.mAdData.indexLeft;
            let i = MathUtils.randomNumBoth(0, arr.length - 1);
            return arr[i];
        }
        set adData(v) {
            this.mAdData = v;
        }
        get adData() {
            this.mAdData.indexLeft.sort(() => Math.random() > 0.5 ? 1 : -1);
            return this.mAdData;
        }
        addGameNum() {
            this.gameNum++;
            this.gameNumPos++;
        }
        isMistouch() {
            if (this.gameNum >= this.mistouchNum && this.mistouchNum != 0) {
                this.gameNum = 0;
                return true;
            }
            return false;
        }
        isMistouchPos() {
            if (this.gameNumPos >= this.mistouchPosNum && this.mistouchPosNum != 0) {
                this.gameNumPos = 0;
                return true;
            }
            return false;
        }
        onDisable() {
        }
    }
    AppConfig.remoteUrl = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/3DTetris/";

    class AudioModule extends BaseModule {
        constructor() {
            super();
            this.IS_MUTE = "isMute";
            this.IS_MUTE_MUSIC = "isMuteMusic";
            this.IS_MUTE_SOUND = "isMuteSound";
            this.VOLUME_MUSIC = "volumeMusic";
            this.VOLUME_SOUND = "volumeSound";
            this._volumeMusic = 1;
            this._volumeSound = 1;
            this._isMuteMusic = false;
            this._isMuteSound = false;
            this._isMute = false;
            this.gameCoinTime = 0;
            this.getSave();
        }
        onEnable() {
        }
        playGameMusic() {
            this.playMusic("audio/bg.mp3");
        }
        playClickEffect() {
            this.playSound("audio/btnSound.mp3");
        }
        playFailEffect() {
            this.playSound("audio/fail.mp3");
        }
        playWinEffect() {
            this.playSound("audio/win.mp3");
        }
        playClearEffect() {
            this.playSound("audio/clear.mp3");
        }
        playClear1Effect() {
            this.playSound("audio/clear1.mp3");
        }
        playClear2Effect() {
            this.playSound("audio/clear2.mp3");
        }
        playClear3Effect() {
            this.playSound("audio/clear3.mp3");
        }
        playDownEffect() {
            this.playSound("audio/down.mp3");
        }
        playRotationEffect() {
            this.playSound("audio/rotation.mp3");
        }
        destroySound(url) {
            Laya.SoundManager.destroySound(url);
        }
        stopAll() {
            Laya.SoundManager.stopAll();
        }
        stopAllSound() {
            Laya.SoundManager.stopAllSound();
        }
        stopMusic() {
            Laya.SoundManager.stopMusic();
        }
        stopSound(url) {
            Laya.SoundManager.stopSound(url);
        }
        playSound(url, loops = 1, complete = null, soundClass = null, startTime = 0) {
            Laya.SoundManager.playSound(url, loops, complete, soundClass, startTime);
        }
        playMusic(url, loops = 0, complete = null, startTime = 0) {
            Laya.SoundManager.playMusic(url, loops, complete, startTime);
        }
        get volumeMusic() {
            return this._volumeMusic;
        }
        set volumeMusic(value) {
            this._volumeMusic = value;
            Laya.SoundManager.setMusicVolume(value);
            this.save();
        }
        get volumeSound() {
            return this._volumeSound;
        }
        set volumeSound(value) {
            this._volumeSound = value;
            Laya.SoundManager.setSoundVolume(value);
            this.save();
        }
        get isMuteMusic() {
            return this._isMuteMusic;
        }
        set isMuteMusic(value) {
            this._isMuteMusic = value;
            Laya.SoundManager.musicMuted = value;
            this.save();
        }
        get isMuteSound() {
            return this._isMuteSound;
        }
        set isMuteSound(value) {
            this._isMuteSound = value;
            Laya.SoundManager.soundMuted = value;
            this.save();
        }
        get isMute() {
            return this._isMute;
        }
        set isMute(value) {
            this._isMute = value;
            Laya.SoundManager.muted = value;
            this.save();
        }
        save() {
            Laya.LocalStorage.setItem(this.IS_MUTE, "" + this.isMute);
            Laya.LocalStorage.setItem(this.IS_MUTE_MUSIC, "" + this.isMuteMusic);
            Laya.LocalStorage.setItem(this.IS_MUTE_SOUND, "" + this.isMuteSound);
        }
        getSave() {
            this.isMute = Laya.LocalStorage.getItem(this.IS_MUTE) == "true" ? true : false;
            this.isMuteMusic = Laya.LocalStorage.getItem(this.IS_MUTE_MUSIC) == "true" ? true : false;
            this.isMuteSound = Laya.LocalStorage.getItem(this.IS_MUTE_SOUND) == "true" ? true : false;
        }
        onDisable() {
        }
    }

    class ResourceModule extends BaseModule {
        constructor() {
            super();
        }
        onEnable() {
        }
        loadAsset(url, assetType, callback) {
            let res = Laya.loader.getRes(url);
            if (res) {
                if (callback) {
                    callback(null, res);
                }
                return;
            }
            Laya.loader.create(url, Laya.Handler.create(this, (res) => {
                callback(null, res);
            }), null, assetType);
        }
        onDisable() {
        }
    }

    class EventType {
    }
    EventType.GAME_STATE_START = "GAME_STATE_START";
    EventType.GAME_STATE_OVER = "GAME_STATE_OVER";
    EventType.GAME_STATE_END = "GAME_STATE_END";
    EventType.GAME_STATE_RESPAWN = "GAME_STATE_RESPAWN";
    EventType.GAME_STATE_PAUSE = "GAME_STATE_PAUSE";
    EventType.GAME_STATE_RESUME = "GAME_STATE_RESUME";
    EventType.GAME_STATE_NEXT = "GAME_STATE_NEXT";
    EventType.GAME_STATE_RESET = "GAME_STATE_RESET";
    EventType.GAME_COIN = "GAME_COIN";
    EventType.GAME_NOT_COIN = "GAME_NOT_COIN";
    EventType.LAYOUT_LOADED = "LAYOUT_LOADED";
    EventType.GAME_LOGIN = "GAMELOGIN";
    EventType.VIBRATESWITCH_CHANGED = "VIBRATESWITCH_CHANGED";
    EventType.SOUNDSWITCH_CHANGED = "SOUNDSWITCH_CHANGED";
    EventType.MUSICSWITCH_CHANGED = "MUSICSWITCH_CHANGED";
    EventType.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
    EventType.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
    EventType.TOUCH_UP = "TOUCH_UP";
    EventType.TOUCH_MOVE = "TOUCH_MOVE";
    EventType.TOUCH_DOWN = "TOUCH_DOWN";
    EventType.AD_LOADED = "AD_LOADED";
    EventType.OPEN_EXPORT = "OPEN_EXPORT";
    EventType.SCENE_LOADED = "SCENE_LOADED";
    EventType.SHOW_LEFT_AD = "SHOW_LEFT_AD";
    EventType.HIDE_LEFT_AD = "HIDE_LEFT_AD";
    EventType.SHOW_BOTTOM_AD = "SHOW_BOTTOM_AD";
    EventType.HIDE_BOTTOM_AD = "HIDE_BOTTOM_AD";
    EventType.SHOW_FLOAT_AD = "SHOW_FLOAT_AD";
    EventType.HIDE_FLOAT_AD = "SHOW_FLOAT_AD";
    EventType.LEVEL_CHANGED = "LEVEL_CHANGED";
    EventType.ATTR_CHANGED = "ATTR_CHANGED";
    EventType.COIN_CHANGED = "COIN_CHANGED";
    EventType.KEY_CHANGED = "KEY_CHANGED";
    EventType.DIAMOND_CHANGED = "DIAMOND_CHANGED";
    EventType.SHOW_REWARD_COIN = "SHOW_REWARD_COIN";
    EventType.HIDE_COIN = "HIDE_COIN";
    EventType.SKIN_CHANGED = "SKIN_CHANGED";
    EventType.CYLINDER_SKIN_CHANGED = "CYLINDER_SKIN_CHANGED";
    EventType.SKIN_GET = "SKIN_GET";
    EventType.GAME_COIN_CHANGED = "GAME_COIN_CHANGED";
    EventType.SKILL_CLICK = "SKILL_CLICK";
    EventType.SKIN_SELECTED = "SKIN_SELECTED";
    EventType.LOADING_PROGRESS = "LOADING_PROGRESS";
    EventType.SHOW_WIND_Effect = "SHOW_WIND_Effect";
    EventType.STOP_WIND_Effect = "STOP_WIND_Effect";
    EventType.SHOW_WIN_Effect = "SHOW_WIN_Effect";
    EventType.SHOW_BOOM_Effect = "SHOW_BOOM_Effect";
    EventType.SHOW_COIN_BOOM_Effect = "SHOW_COIN_BOOM_Effect";
    EventType.SHOW_JUMP_Effect = "SHOW_JUMP_Effect";
    EventType.SHOW_JUMP_DOWN_Effect = "SHOW_JUMP_DOWN_Effect";
    EventType.RESET_CAMERA = "RESET_CAMERA";
    EventType.CTL_CAMERA = "CTL_CAMERA";
    EventType.SPEED_UP = "SPEED_UP";
    EventType.SPEED_NORMAL = "SPEED_NORMAL";
    EventType.RESET_PLAYER = "RESET_PLAYER";
    EventType.RESPAWN_PLAYER = "RESPAWN_PLAYER";
    EventType.CHANGE_COLOR = "CHANGE_COLOR";
    EventType.FORM_CHANGE_COLOR = "FORM_CHANGE_COLOR";
    EventType.SHAPE_DOWN = "SHAPE_DOWN";
    EventType.SHAPE_ELIMINATE = "SHAPE_ELIMINATE";
    EventType.SHAPE_COPY = "SHAPE_COPY";
    EventType.SHAPE_REMOVE = "SHAPE_REMOVE";
    EventType.SHAPE_NEXT = "SHAPE_NEXT";
    EventType.SHOW_AD = "SHOW_AD";
    EventType.HIDE_AD = "HIDE_AD";
    EventType.SHOW_BANNER = "SHOW_BANNER";
    EventType.HIDE_BANNER = "HIDE_BANNER";

    class LeveLCfgBase {
    }
    class LevelChanceBase {
    }
    class SkinBase {
    }
    class GameToolsBase {
    }
    class ConfigBase {
    }

    class SheetManager {
        static loadDB(url) {
            return new Promise((resolve => {
                Laya.loader.load(url, Laya.Handler.create(this, function () {
                    var json = Laya.loader.getRes(url);
                    this.data = json;
                    Laya.loader.clearRes(url);
                    resolve();
                }), null, Laya.Loader.JSON);
            }));
        }
        static get(table, id, clz) {
            var value = this.data[table][id];
            if (!value)
                return;
            var keys = this.getKeys(this.data[table].keys);
            var v;
            var vo = new clz();
            for (var i = 0; i < keys.length; i++) {
                v = this.data.dic[value[i]];
                vo[keys[i]] = v !== "null" ? v : null;
            }
            clz[id] = vo;
            return vo;
        }
        static getKeys(indexs) {
            var keys = [];
            for (var i = 0; i < indexs.length; i++) {
                var index = indexs[i];
                keys.push(this.data.dic[index]);
            }
            return keys;
        }
        static getTableLength(tableName) {
            var obj = this.data[tableName];
            if (obj.length)
                return obj.length;
            var count = 0;
            for (var key in obj) {
                count++;
            }
            obj.length = count - 1;
            return count - 1;
        }
        static getList(table) {
            return this.data[table];
        }
        static getComplexLength(table, id) {
            return this.data[table][id].length;
        }
        static getComplex(table, id, cls) {
            var arr = this.getList(table)[id];
            var keys = this.getKeys(this.data[table].keys);
            var vos = [];
            for (var j = 0; j < arr.length; j++) {
                var v;
                var vo = new cls();
                for (var i = 0; i < keys.length; i++) {
                    v = this.data.dic[arr[j][i]];
                    vo[keys[i]] = v !== "null" ? v : null;
                }
                vos.push(vo);
            }
            return vos;
        }
        static getAllSheets(table, clz) {
            var obj = this.getList(table);
            var arr = [];
            for (var key in obj) {
                if (key != "keys")
                    arr.push(this.get(table, key, clz));
            }
            return arr;
        }
    }

    class Skin extends SkinBase {
        static get(id) {
            if (this[id])
                return this[id];
            return SheetManager.get("Skin", id, Skin);
        }
        static getAll() {
            return SheetManager.getAllSheets("Skin", Skin);
        }
    }

    class LeveLCfg extends LeveLCfgBase {
        static get(id) {
            if (this[id])
                return this[id];
            return SheetManager.get("LeveLCfg", id, LeveLCfg);
        }
        static getAll() {
            return SheetManager.getAllSheets("LeveLCfg", LeveLCfg);
        }
    }

    class GameDataCenter extends BaseModule {
        constructor() {
            super();
            this.CURRENT_NEW_USER = "CURRENT_NEW_USER";
            this.IS_UPDATE = "IS_UPDATE";
            this.MUSIC_SWITCH = "MUSIC_SWITCH";
            this.SOUND_SWITCH = "SOUND_SWITCH";
            this.SKIN_VIDEO_NUM = "SKIN_VIDEO_NUM";
            this.VIBRATE_SWITCH = "VIBRATE_SWITCH";
            this.CURRENT_LEVEL = "CURRENT_LEVEL";
            this.VIRTUAL_LEVEL = "VIRTUAL_LEVEL";
            this.TOKEN = "token";
            this.OPEN_ID = "OPEN_ID";
            this.CHANNEL_ID = "CHANNEL_ID";
            this.ATTR = "ATTR";
            this.COIN = "COIN";
            this.KEY = "KEY";
            this.DIAMOND = "DIAMOND";
            this.LAST_COIN_REWARD = "LAST_COIN_REWARD";
            this.SIGN_NUM = "SIGN_NUM";
            this.SIGN_DATE = "SIGN_DATE";
            this.SIGN_VIDEO_DATE = "SIGN_VIDEO_DATE";
            this.CURRENT_SKIN = "CURRENT_SKIN";
            this.HAS_SKINS = "HAS_SKINS";
            this.WIN_NUM = "WIN_NUM";
            this.CURRENT_GUN = "CURRENT_GUN";
            this.CURRENT_USE_GUN = "CURRENT_USE_GUN";
            this.GAME_OUT_TIME = "GAME_OUT_TIME";
            this.SHOP_SUMMARY = "SHOP_SUMMARY";
            this.RECORD_COIN = "RECORD_COIN";
            this.RECORD_KEY = "RECORD_KEY";
            this.vibrate_switch = null;
            this.mVirtualLevel = 0;
            this.mCoin = 0;
            this.mKey = 0;
            this.initNewData();
        }
        getIsNew() {
            return Lite.setting.getBool(this.CURRENT_NEW_USER, true);
        }
        setIsNew(on) {
            Lite.setting.setBool(this.CURRENT_NEW_USER, on);
        }
        getToken() {
            return Lite.setting.getString(this.TOKEN, "");
        }
        setToken(v) {
            Lite.setting.setValue(this.TOKEN, v);
        }
        getChannelId() {
            return Lite.setting.getInt(this.CHANNEL_ID, 0);
        }
        setChannelId(v) {
            Lite.setting.setValue(this.CHANNEL_ID, v);
        }
        getOpenid() {
            return Lite.setting.getString(this.OPEN_ID, "");
        }
        setOpenid(v) {
            Lite.setting.setValue(this.OPEN_ID, v);
        }
        getVibrateSetting() {
            if (this.vibrate_switch == null) {
                this.vibrate_switch = Lite.setting.getBool(this.VIBRATE_SWITCH, true);
            }
            return this.vibrate_switch;
        }
        setVibrateSetting(on) {
            Lite.setting.setBool(this.VIBRATE_SWITCH, on);
            this.vibrate_switch = on;
            Lite.event.sendEventImmediately(EventType.VIBRATESWITCH_CHANGED, on);
        }
        convertSpeedByDelta(speed, delta) {
            if (delta > 167)
                delta = 16.67;
            return (speed * (delta / 1000));
        }
        initNewData() {
            if (this.getToken())
                return;
            this.setCurrentLevel(1);
            this.setHasSkins([10001]);
            Lite.setting.setValue(this.CURRENT_SKIN, 10001);
            this.setToken(Common.generateUUID());
        }
        getCurrentLevel() {
            return Lite.setting.getInt(this.CURRENT_LEVEL, 1);
        }
        setCurrentLevel(value) {
            Lite.setting.setValue(this.CURRENT_LEVEL, value);
            Lite.event.sendEventImmediately(EventType.LEVEL_CHANGED, value);
        }
        addCurrentLevel(value = 1) {
            let v = this.getCurrentLevel() + 1;
            this.setCurrentLevel(v);
        }
        getCurrentLevelDetail() {
            let level = this.getCurrentLevel();
            return LeveLCfg.get(this.getIdbyLevel(level));
        }
        getCurrentLevelStr() {
            let lv = this.getCurrentLevel();
            return lv;
        }
        getLevelById(id) {
            return id - 10000;
        }
        getIdbyLevel(level) {
            return 10000 + level;
        }
        getVirtualLevel() {
            if (this.mVirtualLevel == 0)
                this.mVirtualLevel = Lite.setting.getInt(this.VIRTUAL_LEVEL, 0);
            return this.mVirtualLevel;
        }
        addVirtualLevel(v) {
            this.mVirtualLevel += v;
            this.saveVirtualLevel();
        }
        setVirtualLevel(v) {
            this.mVirtualLevel = v;
            this.saveVirtualLevel();
        }
        saveVirtualLevel() {
            Lite.setting.setValue(this.VIRTUAL_LEVEL, this.mVirtualLevel);
        }
        getCoin() {
            if (this.mCoin == 0)
                this.mCoin = Lite.setting.getInt(this.COIN, 0);
            return this.mCoin;
        }
        subCoin(v) {
            this.mCoin -= v;
            this.saveCoin();
        }
        addCoin(v) {
            this.mCoin += v;
        }
        setCoin(v) {
            this.mCoin = v;
            this.saveCoin();
        }
        saveCoin() {
            Lite.setting.setValue(this.COIN, this.mCoin);
            Lite.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
        }
        getRecordCoin() {
            return Lite.setting.getObject(this.RECORD_COIN, null);
        }
        recordCoin(name) {
            let level = this.getCurrentLevelStr();
            let recordCoin = this.getRecordCoin() || {};
            !recordCoin[level] && (recordCoin[level] = {});
            recordCoin[level][name] = true;
            Lite.setting.setObject(this.RECORD_COIN, recordCoin);
        }
        getIsRecordCoin(name) {
            let level = this.getCurrentLevelStr();
            let recordCoin = this.getRecordCoin();
            return !!(recordCoin && recordCoin[level] && recordCoin[level][name]);
        }
        getKey() {
            if (this.mKey == 0)
                this.mKey = Lite.setting.getInt(this.KEY, 0);
            return this.mKey;
        }
        subKey(v) {
            this.mKey -= v;
            this.saveKey();
        }
        addKey(v) {
            this.mKey += v;
            this.mKey = this.mKey > 3 ? 3 : this.mKey;
            this.saveKey();
        }
        setKey(v) {
            this.mKey = v;
            this.saveKey();
        }
        saveKey() {
            Lite.setting.setValue(this.KEY, this.mKey);
            Lite.event.sendEventImmediately(EventType.KEY_CHANGED, this.mKey);
        }
        getRecordKey() {
            return Lite.setting.getObject(this.RECORD_KEY, null);
        }
        recordKey(name) {
            let level = this.getCurrentLevelStr();
            let recordKey = this.getRecordKey() || {};
            !recordKey[level] && (recordKey[level] = {});
            recordKey[level][name] = true;
            Lite.setting.setObject(this.RECORD_KEY, recordKey);
        }
        getIsRecordKey(name) {
            let level = this.getCurrentLevelStr();
            let recordKey = this.getRecordKey();
            return !!(recordKey && recordKey[level] && recordKey[level][name]);
        }
        getSignNum() {
            return Lite.setting.getInt(this.SIGN_NUM, 0);
        }
        addSignNum() {
            Lite.setting.appendInt(this.SIGN_NUM, 1);
            Lite.setting.setValue(this.SIGN_DATE, Common.formatTime(new Date()));
        }
        setVideoSign() {
            Lite.setting.setValue(this.SIGN_VIDEO_DATE, Common.formatTime(new Date()));
        }
        getIsSign() {
            let now = Common.formatTime(new Date());
            return (now == Lite.setting.getString(this.SIGN_DATE, ""));
        }
        getIsVideoSign() {
            let now = Common.formatTime(new Date());
            return (now == Lite.setting.getString(this.SIGN_VIDEO_DATE, ""));
        }
        getHasSkins() {
            return Lite.setting.getObject(this.HAS_SKINS, null);
        }
        addHasSkins(v) {
            let arr = this.getHasSkins() || [];
            arr.push(v);
            this.setHasSkins(arr);
            Lite.event.sendEventImmediately(EventType.SKIN_GET, v);
        }
        setHasSkins(v) {
            Lite.setting.setObject(this.HAS_SKINS, v);
        }
        getIsHasSkin(v) {
            let arr = this.getHasSkins();
            for (let i = 0, len = arr.length; i < len; i++) {
                if (arr[i] == v)
                    return true;
            }
            return false;
        }
        getHasNoSkins() {
            let allSkins = Skin.getAll();
            let skins = [];
            for (let i = 0, len = allSkins.length; i < len; i++) {
                let skin = allSkins[i];
                if (!this.getIsHasSkin(skin.ID)) {
                    skins.push(skin);
                }
            }
            return skins;
        }
        getRandomHasNoSkin() {
            let skins = this.getHasNoSkins();
            if (skins.length > 0) {
                let i = MathUtils.randomNumBoth(0, skins.length - 1);
                return skins[i];
            }
            return null;
        }
        getSkinVideoNum(id) {
            return Lite.setting.getInt(`${this.SKIN_VIDEO_NUM}_${id}`, 0);
        }
        setSkinVideoNum(id, num) {
            Lite.setting.setValue(`${this.SKIN_VIDEO_NUM}_${id}`, num);
            return num;
        }
        addSkinVideoNum(id, v = 1) {
            let num = this.getSkinVideoNum(id);
            num += v;
            this.setSkinVideoNum(id, num);
            return num;
        }
        getCurrentSkin() {
            return Lite.setting.getInt(this.CURRENT_SKIN, 10001);
        }
        setCurrentSkin(v) {
            Lite.setting.setValue(this.CURRENT_SKIN, v);
            Lite.event.sendEventImmediately(EventType.SKIN_CHANGED, this.getCurrentSkinDetail());
        }
        getCurrentSkinDetail() {
            let skinId = this.getCurrentSkin();
            return Skin.get(skinId);
        }
        addWinNum() {
            let num = this.getWinNum();
            num += 1;
            let nowTime = Common.formatTime(new Date());
            Lite.setting.setObject(this.WIN_NUM, {
                [nowTime]: num
            });
        }
        getWinNum() {
            let nowTime = Common.formatTime(new Date());
            let key = Lite.setting.getObject(this.WIN_NUM, "{}");
            if (isNaN(key.nowTime)) {
                key = {};
                key[nowTime] = 1;
            }
            return key[nowTime];
        }
    }

    class SettingModule extends BaseModule {
        constructor() {
            super();
        }
        onEnable() {
        }
        getInt(k, defaultValue) {
            var v = this._getValue(k, defaultValue);
            return parseInt(v);
        }
        getFloat(k, defaultValue) {
            var v = this._getValue(k, defaultValue);
            return parseFloat(v);
        }
        getBool(k, defaultValue) {
            let defaultValueTemp;
            if (defaultValue == true) {
                defaultValueTemp = 'true';
            }
            else {
                defaultValueTemp = 'false';
            }
            var v = this.getString(k, defaultValueTemp);
            if (v == 'true') {
                return true;
            }
            return false;
        }
        getString(k, defaultValue) {
            return this._getValue(k, defaultValue);
        }
        getObject(k, defaultValue) {
            var v = this._getValue(k, defaultValue);
            if (!v || v == '') {
                return null;
            }
            return JSON.parse(v);
        }
        setObject(k, v) {
            let vStr = '';
            if (v) {
                vStr = JSON.stringify(v);
            }
            this.setValue(k, vStr);
        }
        setBool(k, v) {
            if (v == true) {
                this.setValue(k, 'true');
            }
            else {
                this.setValue(k, 'false');
            }
        }
        setValue(k, v) {
            Laya.LocalStorage.setItem(k, v);
        }
        appendInt(k, v) {
            let vint = this.getInt(k, 0);
            let v2Save = parseInt(v) + vint;
            this.setValue(k, v2Save);
            return v2Save;
        }
        appendFloat(k, v) {
            let vf = this.getFloat(k, 0);
            let v2Save = parseFloat(v) + vf;
            this.setValue(k, v2Save);
        }
        removeValueOfKey(key) {
            Laya.LocalStorage.removeItem(key);
        }
        removeAll() {
            Laya.LocalStorage.clear();
        }
        _getValue(k, defaultValue) {
            let value = Laya.LocalStorage.getItem(k);
            if (value == null || value == '') {
                value = defaultValue;
            }
            return value;
        }
        onDisable() {
        }
    }

    class UIForms {
    }
    UIForms.AdForm = "AdForm";
    UIForms.HomeForm = "HomeForm";
    UIForms.GameForm = "GameForm";
    UIForms.GameOver = "GameOver";
    UIForms.ShopForm = "ShopForm";
    UIForms.SetForm = "SetForm";
    UIForms.NewGuidForm = "NewGuidForm";
    UIForms.LoadingForm = "LoadingForm";
    UIForms.TrialSkinForm = "TrialSkinForm";
    UIForms.RespawnForm = "RespawnForm";
    UIForms.MistouchForm = "MistouchForm";

    var timeline = new Laya.TimeLine();
    class GameState extends BaseModule {
        constructor() {
            super();
            this.gameLogic = null;
            this.gamePause = true;
            this.gameStarted = false;
            this.respawnNum = 0;
            this.gameCoin = 0;
            this.canRespawnNum = 0;
            this.gameLevel = 0;
            this.rootNode = null;
            this.globalBoards = new Array(10);
            Lite.event.addListener(EventType.GAME_STATE_START, this, this.startGame);
            Lite.event.addListener(EventType.GAME_STATE_OVER, this, this.gameOver);
            Lite.event.addListener(EventType.GAME_STATE_RESPAWN, this, this.respawn);
            Lite.event.addListener(EventType.GAME_STATE_RESUME, this, this.resumeGame);
            Lite.event.addListener(EventType.GAME_STATE_PAUSE, this, this.pauseGame);
            Lite.event.addListener(EventType.GAME_STATE_NEXT, this, this.nextGame);
            Lite.event.addListener(EventType.ON_PLATFORM_HIDE, this, this.stopMusic);
            Lite.event.addListener(EventType.ON_PLATFORM_SHOW, this, this.playBgMusic);
        }
        init(sence) {
            this.rootNode = sence.getChildByName('root');
        }
        playBgMusic() {
            if (this.gameStarted)
                Lite.audio.playGameMusic();
        }
        stopMusic() {
            Lite.audio.stopMusic();
        }
        startGame(arg) {
            this.respawnNum = 0;
            Lite.audio.stopMusic();
            Lite.ui.hideUIForm(UIForms.HomeForm, null, () => {
                Lite.ui.pushUIForm(UIForms.GameForm, arg);
                moosnow.http.startGame(Lite.myGame.gameLevel + "");
                this.gamePause = false;
                this.gameStarted = true;
                this.playBgMusic();
            });
        }
        pauseGame() {
            this.gamePause = true;
        }
        resumeGame() {
            this.gamePause = false;
        }
        respawn(e) {
            if (!this.gameStarted)
                return;
            if (this.gamePause)
                return;
            this.respawnNum++;
            this.gamePause = true;
            Lite.ui.pushUIForm(UIForms.RespawnForm, e);
        }
        gameOver(e) {
            if (!this.gameStarted)
                return;
            this.gameStarted = false;
            this.vibrate(true);
            Lite.event.sendEventImmediately(EventType.GAME_STATE_PAUSE, null);
            Lite.audio.stopMusic();
            let t = 1000;
            if (e.isWin) {
                Lite.audio.playWinEffect();
                if (Lite.data.getCurrentLevel() == Lite.myGame.gameLevel)
                    Lite.data.addCurrentLevel();
            }
            else {
                Lite.audio.playFailEffect();
            }
            moosnow.http.endGame(Lite.data.getCurrentLevelStr() + "", e.isWin);
            Lite.ui.hideUIForm(UIForms.GameForm, null);
            Laya.timer.once(t, this, () => {
                Lite.ui.pushUIForm(UIForms.GameOver, { isWin: e.isWin });
            });
        }
        endGame() {
        }
        nextGame(data) {
            if (this.gameStarted)
                return;
            this.gameCoin = 0;
            this.canRespawnNum = 0;
            Lite.ui.pushUIForm(UIForms.HomeForm, { isAd: true });
        }
        addGameCoin(v) {
            this.gameCoin += v;
        }
        vibrate(isLong = false) {
            if (!Lite.data.getVibrateSetting())
                return;
            if (isLong)
                moosnow.platform.vibrateLong();
            else
                moosnow.platform.vibrateShort();
        }
    }

    class EntityLogic extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
        }
        start() {
        }
        willShow(data) { }
        onShow(data) { }
        onFwUpdate(delta) { }
        willHide(data) { }
        onHide(data) { }
        onCollision(other) {
        }
        unuse() {
        }
        reuse() {
        }
        pause() {
        }
        resume() {
        }
        onDisable() {
        }
    }

    class Utils3D {
        static get defalutVec3() {
            var vect = this.mDefalutVec3 || (this.mDefalutVec3 = new Laya.Vector3);
            vect.toDefault();
            return vect;
        }
        static changeSkin(sprite, url, isShare = false) {
            return new Promise(resolve => {
                Laya.Texture2D.load(url, Laya.Handler.create(this, function (e) {
                    if (isShare) {
                        if (sprite.skinnedMeshRenderer && sprite.skinnedMeshRenderer.sharedMaterial)
                            sprite.skinnedMeshRenderer.sharedMaterial.albedoTexture = e;
                    }
                    else {
                        if (sprite.skinnedMeshRenderer && sprite.skinnedMeshRenderer.material)
                            sprite.skinnedMeshRenderer.material.albedoTexture = e;
                    }
                    resolve();
                }));
            });
        }
        static changeSkinMesh(sprite, url, isShare = false) {
            return new Promise(resolve => {
                Laya.Texture2D.load(url, Laya.Handler.create(this, function (e) {
                    if (isShare) {
                        if (sprite.meshRenderer && sprite.meshRenderer.sharedMaterial)
                            sprite.meshRenderer.sharedMaterial.albedoTexture = e;
                    }
                    else {
                        if (sprite.meshRenderer && sprite.meshRenderer.material)
                            sprite.meshRenderer.material.albedoTexture = e;
                    }
                    resolve();
                }));
            });
        }
        static changeMaterial(sprite, url, isShare = false) {
            return new Promise(resolve => {
                Laya.BaseMaterial.load(url, Laya.Handler.create(null, (mat) => {
                    if (sprite.meshRenderer && sprite.meshRenderer.material)
                        sprite.meshRenderer.material = mat;
                    if (isShare) {
                        if (sprite.meshRenderer && sprite.meshRenderer.sharedMaterial)
                            sprite.meshRenderer.sharedMaterial = mat;
                    }
                    else {
                    }
                    resolve();
                }));
            });
        }
        static setToVec3(vec3, x, y, z) {
            vec3.x = x;
            vec3.y = y;
            vec3.z = z;
            return vec3;
        }
        static position(target, x, y, z) {
            var vec3 = target.transform.position;
            vec3.x = x;
            vec3.y = y;
            vec3.z = z;
            target.transform.position = vec3;
        }
        static localPosition(target, x, y, z) {
            var vec3 = target.transform.localPosition;
            vec3.x = x;
            vec3.y = y;
            vec3.z = z;
            target.transform.localPosition = target.transform.localPosition;
        }
        static localPositionByVec3(target, vec3) {
            var vec3_1 = target.transform.localPosition;
            vec3_1.x = vec3.x;
            vec3_1.y = vec3.y;
            vec3_1.z = vec3.z;
            target.transform.localPosition = target.transform.localPosition;
        }
        static rotation(target, x, y, z) {
            var vec3 = this.setToVec3(this.defalutVec3, x, y, z);
            var a = 180 / Math.PI;
            Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
            target.transform.localRotation = target.transform.localRotation;
        }
        static rotationByVec3(target, vec3) {
            var a = 180 / Math.PI;
            Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
            target.transform.localRotation = target.transform.localRotation;
        }
        static rotationByEuler(target, x, y, z) {
            var vec3 = target.transform.localRotationEuler;
            vec3.x = x;
            vec3.y = y;
            vec3.z = z;
            target.transform.localRotationEuler = vec3;
        }
        static rotationZByEuler(target, v) {
            let vec = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
            let euler = target.transform.localRotationEuler;
            this.setToVec3(vec, euler.x, euler.y, v);
            target.transform.localRotationEuler = vec;
        }
        static positionX(target, x) {
            var vec3 = target.transform.position;
            vec3.x = x;
            target.transform.position = target.transform.position;
        }
        static positionY(target, y) {
            var vec3 = target.transform.position;
            vec3.y = y;
            target.transform.position = target.transform.position;
        }
        static positionZ(target, z) {
            var vec3 = target.transform.position;
            vec3.z = z;
            target.transform.position = target.transform.position;
            return vec3.z;
        }
        static localPositionX(target, x) {
            var vec3 = target.transform.localPosition;
            vec3.x = x;
            target.transform.localPosition = target.transform.localPosition;
        }
        static localPositionY(target, y) {
            var vec3 = target.transform.localPosition;
            vec3.y = y;
            target.transform.localPosition = target.transform.localPosition;
        }
        static localPositionZ(target, z) {
            var vec3 = target.transform.localPosition;
            vec3.z = z;
            target.transform.localPosition = target.transform.localPosition;
            return vec3.z;
        }
        static rotationX(target, x) {
            var vec3 = this.setToVec3(this.defalutVec3, x, 0, 0);
            var a = 180 / Math.PI;
            Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
            target.transform.localRotation = target.transform.localRotation;
        }
        static rotationY(target, y) {
            var transform = target.transform || target['_transform'];
            var vec3 = this.setToVec3(this.defalutVec3, 0, y, 0);
            var a = 180 / Math.PI;
            Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, transform.localRotation);
            transform.localRotation = transform.localRotation;
        }
        static rotationYBy(target, y) {
            var transform = target.transform || target['_transform'];
            var _y = transform.position.y;
            var vec3 = this.setToVec3(this.defalutVec3, 0, y + _y, 0);
            var a = 180 / Math.PI;
            Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, transform.localRotation);
            transform.localRotation = transform.localRotation;
        }
        static rotationZ(target, z) {
            var vec3 = this.setToVec3(this.defalutVec3, 0, 0, z);
            var a = 180 / Math.PI;
            Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
            target.transform.localRotation = target.transform.localRotation;
        }
        static getVec3() {
            var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
            this.setToVec3(vect, 0, 0, 0);
            return vect;
        }
        static tweenScale(target, timer, x, y, z, tx, ty, tz, ease = null) {
            return new Promise((reslove) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, x, y, z);
                var tween = Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer, Laya.Ease.bounceOut, Laya.Handler.create(this, () => {
                    reslove();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform) {
                        reslove();
                        return;
                    }
                    this.scale(target, vect.x, vect.y, vect.z);
                }, null, false);
            });
        }
        static tweenAlpha(target, timer, alpha, toAlpha, ease = null) {
            return new Promise((reslove) => {
                var vect = new Laya.Vector2(alpha, 0);
                var tween = Laya.Tween.to(vect, { x: toAlpha }, timer, ease, Laya.Handler.create(this, () => {
                    reslove();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target) {
                        reslove();
                        return;
                    }
                    this.alpha(target, vect.x);
                }, null, false);
            });
        }
        static alpha(target, alpha) {
            target.meshRenderer.material.albedoColorA = alpha;
        }
        static scale(target, x, y, z) {
            let vec = target.transform.getWorldLossyScale();
            vec.x = x;
            vec.y = y;
            vec.z = z;
            target.transform.setWorldLossyScale(vec);
        }
        static scaleByVec3(target, vec3) {
            target.transform.scale = vec3;
        }
        static scaleX(target, x) {
            let vec = target.transform.getWorldLossyScale();
            vec.x = x;
            target.transform.setWorldLossyScale(vec);
        }
        static scaleY(target, y) {
            let vec = target.transform.getWorldLossyScale();
            vec.y = y;
            target.transform.setWorldLossyScale(vec);
        }
        static scaleZ(target, z) {
            let vec = target.transform.getWorldLossyScale();
            vec.z = z;
            target.transform.setWorldLossyScale(vec);
        }
        static tweenRotate(target, timer, x, y, z, tx, ty, tz) {
        }
        static rotateEuler(target, timer, x, y, z, tx, ty, tz) {
            return new Promise((reslove) => {
                var vect = new Laya.Vector3();
                this.setToVec3(vect, x, y, z);
                Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer, null, Laya.Handler.create(this, () => {
                    reslove();
                })).update = new Laya.Handler(this, () => {
                    if (!target.transform)
                        return;
                    target.transform.rotationEuler = vect;
                }, null, false);
            });
        }
        static tweenRotateByLayTween(target, timer, x, y, z, tx, ty, tz) {
            var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
            this.setToVec3(vect, x, y, z);
            Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer).update = new Laya.Handler(this, () => {
                if (!target.transform)
                    return;
                this.rotationByVec3(target, vect);
            }, null, false);
        }
        static tweenLocalRotate(target, timer, x, y, z, tx, ty, tz) {
        }
        static tweenLocalPosition(target, timer, x, y, z, tx, ty, tz, ease = null) {
            var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
            this.setToVec3(vect, x, y, z);
            var tween = Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer, ease);
            tween.update = Laya.Handler.create(this, () => {
                if (!target.transform)
                    return;
                this.localPosition(target, vect.x, vect.y, vect.z);
            }, null, false);
        }
        static tweenLocalRotationEuler(target, timer, x, y, z, tx, ty, tz, ease = null) {
            return new Promise((resolve) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, x, y, z);
                var tween = Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer, ease, Laya.Handler.create(this, () => {
                    resolve();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target || !target.transform) {
                        resolve();
                        return;
                    }
                    this.rotationByEuler(target, vect.x, vect.y, vect.z);
                }, null, false);
            });
        }
        static tweenLocalPositionPromise(target, timer, x, y, z, tx, ty, tz, ease = null) {
            return new Promise((resolve) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, x, y, z);
                var tween = Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer, ease, Laya.Handler.create(this, () => {
                    resolve();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform) {
                        resolve();
                        return;
                    }
                    this.localPosition(target, vect.x, vect.y, vect.z);
                }, null, false);
            });
        }
        static tweenLocalPositionYPromise(target, timer, y, ty, ease = null) {
            return new Promise((resolve) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, 0, y, 0);
                var tween = Laya.Tween.to(vect, { y: ty }, timer, ease, Laya.Handler.create(this, () => {
                    resolve();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform) {
                        resolve();
                        return;
                    }
                    this.localPositionY(target, vect.y);
                }, null, false);
            });
        }
        static tweenPosition(target, timer, x, y, z, tx, ty, tz, ease = null, update = null) {
            return new Promise((reslove) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, x, y, z);
                var tween = Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer, ease, Laya.Handler.create(this, () => {
                    reslove();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform) {
                        reslove();
                        return;
                    }
                    this.position(target, vect.x, vect.y, vect.z);
                    update && update.runWith(vect);
                }, null, false);
            });
        }
        static tweenPositionX(target, timer, x, tx, ease = null, update = null) {
            return new Promise((reslove) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, x, 0, 0);
                var tween = Laya.Tween.to(vect, { x: tx }, timer, ease, Laya.Handler.create(this, () => {
                    reslove();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform) {
                        reslove();
                        return;
                    }
                    this.positionX(target, vect.x);
                    update && update.runWith(vect);
                }, null, false);
            });
        }
        static tweenPositionY(target, timer, y, ty, ease = null, update = null) {
            return new Promise((reslove) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, y, 0, 0);
                var tween = Laya.Tween.to(vect, { y: ty }, timer, ease, Laya.Handler.create(this, () => {
                    reslove();
                }), 0, false, true);
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform) {
                        reslove();
                        return;
                    }
                    this.positionY(target, vect.y);
                    update && update.runWith(vect);
                }, null, false);
            });
        }
        static tweenRotationY(target, timer, y, ty, ease = null, update = null) {
            return new Promise((reslove) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, 0, y, 0);
                var tween = Laya.Tween.to(vect, { x: 0, y: ty, z: 0 }, timer, ease, Laya.Handler.create(this, () => {
                    reslove();
                }));
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform)
                        return;
                    this.rotationY(target, vect.y);
                }, null, false);
            });
        }
        static tweenRotationX(target, timer, x, tx, ease = null, update = null) {
            return new Promise((reslove) => {
                var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
                this.setToVec3(vect, x, 0, 0);
                var tween = Laya.Tween.to(vect, { x: tx, y: 0, z: 0 }, timer, ease, Laya.Handler.create(this, () => {
                    reslove();
                }));
                tween.update = Laya.Handler.create(this, () => {
                    if (!target.transform)
                        return;
                    this.rotationX(target, vect.y);
                }, null, false);
            });
        }
        static tweenRotation(target, timer, x, y, z, tx, ty, tz, ease = null, update = null) {
            var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
            this.setToVec3(vect, x, y, z);
            var tween = Laya.Tween.to(vect, { x: tx, y: ty, z: tz }, timer, ease);
            tween.update = Laya.Handler.create(this, () => {
                if (!target.transform)
                    return;
                this.rotation(target, vect.x, vect.y, vect.z);
            }, null, false);
        }
    }

    class Entity3DLogic extends Laya.Script3D {
        constructor() {
            super();
            this.url = "";
            this.poolName = "";
        }
        onAwake() {
            this.mOwner = this.owner;
        }
        getOwnerNode() {
            return this.owner;
        }
        get LogicData() {
            return this.mLogicData;
        }
        willShow(data) {
            let target = this.owner;
            if (data) {
                if (data.position) {
                    Utils3D.position(target, data.position.x, data.position.y, data.position.z);
                }
                if (data.rotation)
                    Utils3D.rotation(target, data.rotation.x, data.rotation.y, data.rotation.z);
                if (data.scale)
                    Utils3D.scale(target, data.scale.x, data.scale.y, data.scale.z);
            }
            this.mLogicData = data;
        }
        onShow(data) {
        }
        onFwUpdate(delta) { }
        willHide(data) { }
        onHide(data) { }
        onCollision(other) {
        }
        onDisable() {
        }
    }
    Entity3DLogic.url = "";
    Entity3DLogic.preLoad = true;

    class LoaderManager {
        static preLoad3D(urls) {
            return new Promise((resolve) => {
                if (urls.length == 0) {
                    resolve();
                }
                else {
                    Laya.Sprite3D.load(urls, Laya.Handler.create(this, () => {
                        resolve();
                    }, null, false));
                }
            });
        }
        static preLoad(urls) {
            return new Promise((resolve) => {
                if (urls.length == 0) {
                    resolve();
                }
                else {
                    Laya.loader.load(urls, Laya.Handler.create(this, () => {
                        resolve();
                    }, null, false));
                }
            });
        }
        static preLoadTexture2D(urls) {
            return new Promise((resolve) => {
                this.load(urls, resolve);
            });
        }
        static load(urls, resolve) {
            var url = urls.pop();
            if (!url) {
                resolve();
            }
            else {
                Laya.Texture2D.load(url, Laya.Handler.create(this, (r) => {
                    this.load(urls, resolve);
                }, null, false));
            }
        }
        static get3D(url, name, clone = true) {
            var sp = Laya.loader.getRes(url);
            if (!clone)
                return sp.getChildByName(name);
            return sp.getChildByName(name).clone();
        }
        static get3DTo(url, name) {
            var sp = Laya.loader.getRes(url);
            var cSp = sp.getChildByName(name);
            var souce = new Laya.Sprite3D();
            souce = cSp.clone();
            return souce;
        }
        static getCamera(url, name, clone = true) {
            var sp = Laya.loader.getRes(url);
            var camera = sp.getChildByName(name);
            if (!clone)
                return camera;
            return camera.clone();
        }
        static getLight(url, name) {
            var sp = Laya.loader.getRes(url);
            var light = sp.getChildByName(name);
            return light;
        }
        static loadSounds(urls) {
            return new Promise((resovle) => {
                this.preDownFlie(urls, resovle);
            });
        }
        static preDownFlie(urls, resovle) {
            var url = urls.pop();
            if (!url) {
                resovle();
                return;
            }
            url = this.soundBaseUrl + url;
            if (Laya['BMiniAdapter']) {
                Laya['BMiniAdapter'].downLoadFile(url, "sound", Laya.Handler.create(this, () => {
                    this.preDownFlie(urls, resovle);
                }));
            }
            else if (Laya.MiniAdpter) {
                if (!window["tt"]) {
                }
                Laya.MiniAdpter.downLoadFile(url, "sound", Laya.Handler.create(this, () => {
                    this.preDownFlie(urls, resovle);
                }));
            }
            else {
                Laya.loader.load(url, Laya.Handler.create(this, () => {
                    this.preDownFlie(urls, resovle);
                }), null, Laya.Loader.SOUND);
            }
        }
        static registerFont(fontUrl, fontName) {
            return new Promise(resolve => {
                var mBitmapFont = new Laya.BitmapFont();
                mBitmapFont.loadFont(fontUrl, Laya.Handler.create(this, () => {
                    Laya.Text.registerBitmapFont(fontName, mBitmapFont);
                    resolve();
                }));
            });
        }
        static preLoadJson(urls) {
            return new Promise(resolve => {
                if (urls.length == 0) {
                    resolve();
                }
                else {
                    Laya.loader.load(urls, Laya.Handler.create(this, () => {
                        resolve();
                    }), null, Laya.Loader.JSON);
                }
            });
        }
    }
    LoaderManager.soundBaseUrl = "";

    class GameSceneLogic extends Entity3DLogic {
    }

    class ModelMapping {
        static getList() {
            let arr = [];
            for (let key in ModelMapping) {
                if (ModelMapping[key].preLoad)
                    arr.push(ModelMapping[key].url);
            }
            return arr;
        }
    }
    ModelMapping.gameScene = GameSceneLogic;

    class SceneLogic extends Entity3DLogic {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
        }
        init() {
            let scene = this.owner;
            let camera = scene.getChildByName('Main Camera');
            camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            this.mCylinder = this.owner.getChildByName("cylinder");
            this.changeMaterial();
            Lite.event.addListener(EventType.CYLINDER_SKIN_CHANGED, this, this.changeMaterial);
        }
        changeMaterial() {
            Utils3D.changeMaterial(this.mCylinder.getChildByName("cylinder1"), `3DAssets/LayaScene_SampleScene/Conventional/Assets/Materials/${Common.randomNumBoth(1, 4)}/cylinder.lmat`, true);
        }
        onUpdate() {
        }
    }

    class EntityModule extends BaseModule {
        constructor() {
            super();
            this.entityLogics = [];
            this._serializeId = 0;
            this.paused = true;
            this.prefabPath = "prefab/entity/";
            this.mEntity3DPools = [];
            this.mEntity3DLogics = [];
            this.entityLogics = [];
            this.mEntity3DPools = [];
            this.mEntity3DLogics = [];
            this._serializeId = 0;
        }
        onEnable() {
        }
        onUpdate() {
            if (this.paused)
                return;
            for (let i = 0; i < this.entityLogics.length; i++) {
                let element = this.entityLogics[i];
                element.onFwUpdate(Laya.timer.delta);
            }
        }
        pause() {
            this.paused = true;
        }
        resume() {
            this.paused = false;
        }
        getEntityLogicByName(name) {
            if (typeof name == "string")
                if (ModelMapping[name])
                    return new ModelMapping[name];
                else
                    return null;
            return new name();
        }
        showEntity(name, parentNode, data) {
            let logic = this._showEntity(name);
            logic.eid = this._serializeId--;
            parentNode.addChild(logic.owner);
            logic.willShow(data);
            logic.owner.visible = true;
            logic.onShow(data);
            this.entityLogics.push(logic);
            return logic;
        }
        hideEntity(logic, data) {
            this._hideEntity(logic, data);
        }
        preLoad3D(name) {
            if (name instanceof Entity3DLogic)
                return LoaderManager.preLoad3D([name.url]);
            else {
                let url = ModelMapping[name.toString()].url;
                return LoaderManager.preLoad3D([url]);
            }
        }
        getAllEntity3D(name) {
            return this.mEntity3DLogics.filter(item => item.poolName == name);
        }
        new3DUrlLogic(name, url) {
            let logic = new ModelMapping[name];
            let node = Laya.Loader.getRes(url).clone();
            node.addComponentIntance(logic);
            return logic;
        }
        getOrNewLogicByUrl(name, url) {
            return this.new3DUrlLogic(name, url);
        }
        showEntity3DByUrl(name, url, parentNode, data, callback) {
            Laya.Sprite3D.load(url, Laya.Handler.create(this, (parentOwner, entityData, call) => {
                let logic = this.getOrNewLogicByUrl(name, url);
                if (!logic.owner.parent)
                    parentOwner.addChild(logic.owner);
                else if (logic.owner.parent != parentOwner) {
                    parentOwner.addChild(logic.owner);
                }
                logic.poolName = name;
                logic.willShow(entityData);
                logic.owner.active = true;
                logic.onShow(entityData);
                this.mEntity3DLogics.push(logic);
                if (call)
                    call(logic);
            }, [parentNode, data, callback]));
        }
        destroy3D() {
            this.mEntity3DPools.forEach(item => {
                item.pool = null;
                item.pool = [];
            });
            this.mEntity3DPools = null;
            this.mEntity3DLogics = null;
            this.mEntity3DPools = [];
            this.mEntity3DLogics = [];
        }
        clearNode(node, isDestroy) {
            if (!node)
                return;
            node.removeSelf();
            node.destroy();
            if (isDestroy) {
                Laya.Resource.destroyUnusedResources();
            }
        }
        _destroy(node) {
            if (node.numChildren > 0) {
                for (let i = 0; i < node.numChildren; i++) {
                    let item = node.getChildAt(i);
                    this._destroy(item);
                }
                this._destroy(node);
            }
            else {
                console.log('node.destroy()', node.name);
                node.destroy(true);
            }
        }
        showEntity3D(name, parentNode, data) {
            let logic = this.getOrNewEntityLogic(name);
            if (!logic)
                return;
            if (!logic.owner.parent)
                parentNode.addChild(logic.owner);
            else if (logic.owner.parent != parentNode) {
                parentNode.addChild(logic.owner);
            }
            logic.poolName = name;
            logic.willShow(data);
            logic.owner.active = true;
            logic.onShow(data);
            this.mEntity3DLogics.push(logic);
            return logic;
        }
        hideEntity3D(logic, data, isDestroy = false) {
            if (!logic)
                return;
            logic.willHide(data);
            logic.owner.active = false;
            logic.owner.removeSelf();
            logic.onHide(data);
            for (let i = 0; i < this.mEntity3DLogics.length; i++) {
                if (this.mEntity3DLogics[i] == logic) {
                    this.mEntity3DLogics.splice(i, 1);
                    break;
                }
            }
            if (isDestroy) {
                this.clearNode(logic.owner, false);
            }
            else {
                let pool = this.getLogicPoolByName(logic.poolName);
                if (pool == null) {
                    let poolGroup = this.newLogicPool(logic.poolName);
                    pool = poolGroup.pool;
                }
                pool.push(logic);
            }
        }
        hideAllEntity3D(name, data, isDestroy = false) {
            for (let i = 0; i < this.mEntity3DLogics.length; i++) {
                let item = this.mEntity3DLogics[i];
                if (item.poolName == name) {
                    this.hideEntity3D(item, data, isDestroy);
                    i--;
                }
            }
        }
        newEntityLogic(name) {
            let node;
            if (!ModelMapping[name])
                return null;
            let url = ModelMapping[name].url;
            let logic = this.getEntityLogicByName(name);
            if (url) {
                node = Laya.Loader.getRes(url);
                let entity;
                if (node instanceof Laya.LightSprite
                    || node instanceof Laya.Scene3D)
                    entity = node;
                else {
                    entity = node.clone();
                }
                entity.addComponentIntance(logic);
            }
            else {
                if (logic instanceof SceneLogic) {
                    node = new Laya.Scene3D();
                    node.addComponentIntance(logic);
                }
            }
            return logic;
        }
        getOrNewEntityLogic(name) {
            let pool = this.getLogicPoolByName(name);
            if (pool == null) {
                let logic = this.newEntityLogic(name);
                this.newLogicPool(name);
                return logic;
            }
            else if (pool.length == 0) {
                let logic = this.newEntityLogic(name);
                return logic;
            }
            else {
                return pool.splice(0, 1)[0];
            }
        }
        getLogicPoolByName(name) {
            let pool = this.getEntityPool(name);
            if (pool) {
                return pool;
            }
            return null;
        }
        newLogicPool(name) {
            let pool = { name: name, pool: [] };
            this.mEntity3DPools.push(pool);
            return pool;
        }
        getEntityPool(poolName) {
            for (let i = 0; i < this.mEntity3DPools.length; i++) {
                let poolGroup = this.mEntity3DPools[i];
                if (poolGroup.name === poolName) {
                    return poolGroup.pool;
                }
            }
            return null;
        }
        _showEntity(name) {
            let entity = this._createEntity(name);
            let logic;
            if (!entity.logic) {
                logic = entity.getComponent(EntityLogic);
                logic.poolName = name;
            }
            else {
                logic = entity.logic;
            }
            return logic;
        }
        _hideEntity(logic, data) {
            logic.willHide(data);
            Laya.Pool.recover(logic.poolName, logic.owner);
            logic.owner.visible = false;
            logic.onHide(data);
            for (let i = 0; i < this.entityLogics.length; i++) {
                if (this.entityLogics[i] == logic) {
                    this.entityLogics.splice(i, 1);
                    return;
                }
            }
        }
        _createEntity(name) {
            if (!this[name]) {
                this[name] = new Laya.Prefab();
                this[name].json = Laya.loader.getRes(this.prefabPath + name + ".json");
            }
            let node = Laya.Pool.getItemByCreateFun(name, this[name].create, this[name]);
            return node;
        }
        onDisable() {
        }
    }

    class Scene3DModule extends BaseModule {
        constructor() {
            super();
            this.scenePath = "3DAssets/LayaScene_";
            this.loadingForm = "";
            this.currentScene = null;
            this.sceneLogic = null;
        }
        init(sceneLogic, loadingForm = "") {
            this.loadingForm = loadingForm;
            this.sceneLogic = sceneLogic;
        }
        preloadScene(scene) {
            return new Promise((resolve) => {
                if (!scene) {
                    resolve();
                }
                else {
                    let path = this._getPath(scene);
                    Laya.Scene3D.load(`${path}${scene}/Conventional/${scene}.ls`, Laya.Handler.create(this, () => {
                        resolve();
                    }, null, false));
                }
            });
        }
        loadScene(scene, isDestroy = true, isLoadingForm = true, callback = null) {
            let path = this._getPath(scene);
            this._clearScene(isDestroy);
            let res = Laya.loader.getRes(`${path}${scene}/Conventional/${scene}.ls`);
            isLoadingForm && !res && this.loadingForm && Lite.ui.pushUIForm(this.loadingForm);
            this._loadScene(scene).then((retScene) => {
                retScene.addComponent(this.sceneLogic).init();
                let addScene = Laya.stage.addChild(retScene);
                addScene.zOrder = -1;
                this.currentScene = retScene;
                isLoadingForm && !res && this.loadingForm && Lite.ui.hideUIForm(this.loadingForm);
                if (callback)
                    callback(retScene);
            });
        }
        _loadScene(scene) {
            return new Promise((resolve) => {
                if (!scene) {
                    resolve();
                }
                else {
                    let path = this._getPath(scene);
                    Laya.Scene3D.load(`${path}${scene}/Conventional/${scene}.ls`, Laya.Handler.create(this, (retScene) => {
                        resolve(retScene);
                    }, null, false));
                }
            });
        }
        _getPath(scene) {
            return this.scenePath;
        }
        _clearScene(isDestroy) {
            if (!this.currentScene)
                return;
            this.currentScene.removeSelf();
            this._destroy(this.currentScene);
            this.currentScene = null;
            if (isDestroy) {
                Laya.Resource.destroyUnusedResources();
            }
        }
        _destroy(node) {
            if (node.numChildren > 0) {
                for (let i = 0; i < node.numChildren; i++) {
                    let item = node.getChildAt(i);
                    this._destroy(item);
                }
                this._destroy(node);
            }
            else {
                node.destroy();
            }
        }
    }

    class gameEntry {
        constructor() {
            this.mEvent = new EventModule();
            this.mNode = new NodeModule();
            this.mUi = new UIModule();
            this.mEntity = new EntityModule();
            this.mConfig = new AppConfig();
            this.mAudio = new AudioModule();
            this.mResource = new ResourceModule();
            this.mSetting = new SettingModule();
            window["Lite"] = this;
            this.mMyGame = new GameState();
            this.mData = new GameDataCenter();
            this.mScene3D = new Scene3DModule();
            this.mScene3D.init(SceneLogic);
        }
        get scene3D() {
            return this.mScene3D;
        }
        get http() {
            return this.mHttp;
        }
        get myGame() {
            return this.mMyGame;
        }
        get event() {
            return this.mEvent;
        }
        get data() {
            return this.mData;
        }
        get node() {
            return this.mNode;
        }
        get platform() {
            return this.mPlatform;
        }
        get ui() {
            return this.mUi;
        }
        get entity() {
            return this.mEntity;
        }
        get config() {
            return this.mConfig;
        }
        get audio() {
            return this.mAudio;
        }
        get resource() {
            return this.mResource;
        }
        get setting() {
            return this.mSetting;
        }
    }

    class ConfigData extends ConfigBase {
        static init() {
            var obj = SheetManager.getList("Config");
            var vo;
            for (var key in obj) {
                key != "keys" && (vo = ConfigData.get(key));
                vo && (this[vo.name] = vo.value, vo = null);
            }
        }
        static get(id) {
            if (this[id])
                return this[id];
            return SheetManager.get("Config", id, Config);
        }
        static getConfigByName(name) {
            if (this[name])
                return this[name];
            return null;
        }
    }

    class LoadingView extends Laya.Script {
        constructor() {
            super();
            this.progressBar = null;
        }
        onAwake() {
            new gameEntry();
            Common.setFullView(this.owner);
        }
        onEnable() {
            this.loadData();
        }
        loadData() {
            this.progressBar.width = this.progressMaxWidth * 0.1;
            let cfg = `data/cfg.json`;
            this.startAutoLoading();
            Promise.all([
                SheetManager.loadDB(cfg),
                Lite.scene3D.preloadScene("SampleScene"),
                LoaderManager.registerFont('font/home.fnt', 'home'),
                LoaderManager.registerFont('font/shop1.fnt', 'shop1'),
                LoaderManager.registerFont('font/shop2.fnt', 'shop2')
            ])
                .then(() => {
                ConfigData.init();
                moosnow.platform.login(() => {
                    console.log('登录成功');
                    moosnow.http.getAllConfig(res => {
                        console.log('游戏的所有配置数据 ', res);
                        Lite.config.mistouchNum = res.mistouchNum;
                        Lite.config.mistouchPosNum = res.mistouchPosNum;
                        moosnow.ad.getAd((res) => {
                            Lite.config.adData = res;
                            this.stopAutoLoading();
                            this.loadMainScene();
                        });
                    });
                });
            });
        }
        startAutoLoading() {
            Laya.timer.loop(200, this, this.autoLoading);
        }
        stopAutoLoading() {
            Laya.timer.clear(this, this.autoLoading);
        }
        autoLoading() {
            let p = this.progressBar.width + this.progressMaxWidth * 0.03;
            if (p >= this.progressMaxWidth * 0.9) {
                p = this.progressMaxWidth * 0.9;
                this.progressBar.width = p;
                this.stopAutoLoading();
            }
            else {
                this.progressBar.width = p;
            }
        }
        loadMainScene() {
            Laya.Scene.open('scene/Main.scene', true, null, Laya.Handler.create(this, () => {
                this.progressBar.width = this.progressMaxWidth;
            }), new Laya.Handler(this, (e) => {
                this.progressBar.width = this.progressMaxWidth * 0.9 + (this.progressMaxWidth * e) * 0.1;
            }));
        }
        onDisable() {
        }
    }

    window.moosnowConfig = {
        debug: 'wx',
        /**
         * 微信平台
         */
        wx: {
            bannerId: "adunit-b9f7585830c7c03d",   //请填写你自己的APP banner id
            videoId: "adunit-dfe8be0e91e0b089",    //请填写你自己的APP video id
            interId: "", //请填写你自己的APP inter id   
            nativeId: "",
            moosnowAppId: "wx83950c1bb0aae3a3",
            version: "1.0.0"
        },
        oppo: {
            bannerId: "168776",
            videoId: "168781",
            interId: "168777",
            nativeId: ["168779", "168780"],
            moosnowAppId: "30251588",
            version: "1.1.0",
            url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_hzyx_config_wx.json",
        },
        qq: {
            bannerId: "393fd2c197f4fdda1f9729ef36737890",
            videoId: "009f6251b101f9eeb54fb202d537e6d6",
            interId: "",
            boxId: "32b9a79d89010c17850ba54da9dab60f", //qq游戏特有的广告
            nativeId: ["", ""],
            moosnowAppId: "1110381022",
            version: "1.1.0",
            url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
        },
        bd: {
            bannerId: "168776",
            videoId: "168781",
            interId: "168777",
            nativeId: ["168779", "168780"],
            moosnowAppId: "30251588",
            version: "1.1.0",
            url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
        },
        byte: {
            bannerId: "168776",
            videoId: "168781",
            interId: "168777",
            nativeId: ["168779", "168780"],
            moosnowAppId: "30251588",
            version: "1.1.0",
            url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
        }
    };

    var mx=function(){"use strict";var n=function(t,o){return (n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o;}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);})(t,o)};function t(t,o){function e(){this.constructor=t;}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e);}var s=function(){return (s=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var i in o=arguments[e])Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);return t}).apply(this,arguments)};function h(){for(var t=0,o=0,e=arguments.length;o<e;o++)t+=arguments[o].length;for(var n=Array(t),i=0,o=0;o<e;o++)for(var r=arguments[o],a=0,s=r.length;a<s;a++,i++)n[i]=r[a];return n}var i,o,l=(e.randomNumBoth=function(t,o){var e=o-t,n=Math.random();return t+Math.round(n*e)},e.probabilitys=function(t){for(var o=0,e=h(t),n=0,i=0;i<e.length;i++)n+=e[i];if(100!=n)throw"所有概率值总和不等于100%";for(var r=new Array,i=0;i<e.length;i++){for(var a=e[i],s=0;s<a;s++)r.push(o);o++;}return r[this.randomNumBoth(0,99)]},e);function e(){}(o=i=i||{})[o.WX=0]="WX",o[o.BYTEDANCE=1]="BYTEDANCE",o[o.OPPO=2]="OPPO",o[o.OPPO_ZS=3]="OPPO_ZS",o[o.BAIDU=4]="BAIDU",o[o.QQ=5]="QQ",o[o.PC=6]="PC",o[o.VIVO=7]="VIVO";var r="cc",a="Laya",c="",p=(d.titleCase=function(t){for(var o=t.toLowerCase().split(/\s+/),e=0;e<o.length;e++)o[e]=o[e].slice(0,1).toUpperCase()+o[e].slice(1);return o.join(" ")},d.numFixed=function(t,o){return parseFloat(parseFloat(t).toFixed(o))},d.parseMoney=function(t){return isNaN(t)?0:parseFloat(parseFloat(t).toFixed(2))},d.objKeySort=function(t){for(var o=Object.keys(t).sort(),e={},n=0;n<o.length;n++)e[o[n]]=t[o[n]];return e},d.isObject=function(t){var o=typeof t;return null!==t&&("object"==o||"function"==o)},d.object2Query=function(t){var o=[];for(var e in t)o.push(e+"="+t[e]);return o.join("&")},d.isFunction=function(t){return "function"==typeof t},d.isEmpty=function(t){if("object"!=typeof t)return null==t||"null"===t||"undefined"===t||""===t;var o;for(o in t)return !1;return !0},d.formatTime=function(t){return [t.getHours(),t.getMinutes()].map(this.formatNumber).join(":")},d.formatNumber=function(t){return (t=t.toString())[1]?t:"0"+t},d.copy=function(t,o){for(var e in t)o[e]=t[e];},d.randomNumBoth=function(t,o){var e=o-t,n=Math.random();return t+Math.round(n*e)},d.randomFloat=function(t,o){return t+Math.random()*o},d.randomToRatio=function(t,o,e){return this.randomNumBoth(t,o)<=e},d.generateUUID=function(){var e=(new Date).getTime();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var o=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?o:3&o|8).toString(16)})},d.isNumber=function(t){return "number"==typeof t||"[object Number]"==Object.prototype.toString.call(t)},d.isArray=function(t){return "[object Array]"==Object.prototype.toString.call(t)},d.isString=function(t){return "[object String]"===Object.prototype.toString.call(t)},Object.defineProperty(d,"platform",{get:function(){if(this.mPlatform)return this.mPlatform;var t,o=window.moosnowConfig;return window.tt?this.mPlatform=i.BYTEDANCE:window.swan?this.mPlatform=i.BAIDU:window.qq?this.mPlatform=i.QQ:window.qg?window.qg&&window.qg.getSystemInfoSync?(t=window.qg.getSystemInfoSync(),console.log("平台判断",JSON.stringify(t)),t&&t.brand&&-1!=t.brand.toLocaleLowerCase().indexOf("vivo")?this.mPlatform=i.VIVO:-1!=o.oppo.url.indexOf("platform.qwpo2018.com")?this.mPlatform=i.OPPO_ZS:this.mPlatform=i.OPPO):-1!=o.oppo.url.indexOf("platform.qwpo2018.com")?this.mPlatform=i.OPPO_ZS:this.mPlatform=i.OPPO:window.wx?this.mPlatform=i.WX:o.debug&&o[o.debug]?"wx"==o.debug?this.mPlatform=i.WX:"oppo"==o.debug?-1!=o.oppo.url.indexOf("platform.qwpo2018.com")?this.mPlatform=i.OPPO_ZS:this.mPlatform=i.OPPO:"bd"==o.debug?this.mPlatform=i.BAIDU:"byte"==o.debug?this.mPlatform=i.BYTEDANCE:"qq"==o.debug?this.mPlatform=i.QQ:"vivo"==o.debug?this.mPlatform=i.VIVO:this.mPlatform=i.PC:this.mPlatform=i.PC,this.mPlatform},enumerable:!0,configurable:!0}),Object.defineProperty(d,"isOnlyUI",{get:function(){return 1==window.onlyUI},enumerable:!0,configurable:!0}),Object.defineProperty(d,"isPC",{get:function(){return cc.sys.browserType===cc.sys.BROWSER_TYPE_CHROME},enumerable:!0,configurable:!0}),Object.defineProperty(d,"config",{get:function(){var t=window.moosnowConfig,o=d.platform==i.WX?t.wx:d.platform==i.OPPO||d.platform==i.OPPO_ZS?t.oppo:d.platform==i.VIVO?t.vivo:d.platform==i.QQ?t.qq:d.platform==i.BAIDU?t.bd:d.platform==i.BYTEDANCE?t.byte:t.wx;return o},enumerable:!0,configurable:!0}),d.colorRGB2Hex=function(t){var o=t.split(",");return "#"+((1<<24)+(parseInt(o[0].split("(")[1])<<16)+(parseInt(o[1])<<8)+parseInt(o[2].split(")")[0])).toString(16).slice(1)},d.deepCopy=function(t){var o=Array.isArray(t)?[]:{};if(t&&"object"==typeof t)for(var e in t)t.hasOwnProperty(e)&&(t[e]&&"object"==typeof t[e]?o[e]=this.deepCopy(t[e]):o[e]=t[e]);return o},d.getEngine=function(){return window[r]?r:window[a]?a:c},d.popOpenAnim=function(t,o){if(this.getEngine()==r)return t.scale=.8,void t.runAction(cc.sequence(cc.scaleTo(.1,1.2,1.2),cc.scaleTo(.1,1,1),cc.callFunc(function(){o&&o();},this)));o();},d.popCloseAnim=function(t,o){if(this.getEngine()==r)return t.scale=1,void t.runAction(cc.sequence(cc.scaleTo(.1,0,0),cc.callFunc(function(){o&&o();},this)));o();},d.format=function(t){for(var o=[],e=1;e<arguments.length;e++)o[e-1]=arguments[e];if(void 0===t||null==t||""==t||"undefined"==t)return t;for(var n=0;n<o.length;n++){var i=new RegExp("\\{"+n+"\\}","gm");t=t.replace(i,o[n]);}return t},d.formatMoney=function(t){return isNaN(t)&&(t=0),t<9999?parseInt(""+t):t<9999999?parseFloat(""+t/1e3).toFixed(2)+"K":t<9999999999?parseFloat(""+t/1e6).toFixed(2)+"M":t<9999999999999?parseFloat(""+t/1e9).toFixed(2)+"G":t<1e16?parseFloat(""+t/1e12).toFixed(2)+"T":t<1e19?parseFloat(""+t/1e15).toFixed(2)+"P":t<1e22?parseFloat(""+t/1e18).toFixed(2)+"E":parseFloat(""+t/1e21).toFixed(2)+"B"},d);function d(){}var u=(f.prototype.schedule=function(t,o){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var i=this,r=setInterval(function(){t&&t.apply.apply(t,h([i],e));},1e3*o,i);this.mIntervalArr[this.mScheduleIndex]={handle:r,callback:t},this.mScheduleIndex++;},f.prototype.unschedule=function(t){for(var o in this.mIntervalArr)this.mIntervalArr[o].callback==t&&clearInterval(parseInt(this.mIntervalArr[o].handle));},f.prototype.scheduleOnce=function(t,o){var e=this,n=setTimeout(function(){clearTimeout(n),t&&t.apply(e);},1e3*o);this.mTimeoutArr[this.mScheduleIndex]={handle:n,callback:t},this.mScheduleIndex++;},f.prototype.unscheduleOnce=function(t){for(var o in this.mTimeoutArr)this.mTimeoutArr[o].callback==t&&clearInterval(parseInt(this.mTimeoutArr[o].handle));},f.schedule=function(t,o){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var i=this,r=setInterval(function(){t&&t.apply.apply(t,h([i],e));},1e3*o,i);this.mIntervalArr[this.mScheduleIndex]={handle:r,callback:t},this.mScheduleIndex++;},f.unschedule=function(t){for(var o in this.mIntervalArr)this.mIntervalArr[o].callback==t&&clearInterval(parseInt(this.mIntervalArr[o].handle));},f.scheduleOnce=function(t,o){var e=this,n=setTimeout(function(){clearTimeout(n),t&&t.apply(e);},1e3*o);this.mTimeoutArr[this.mScheduleIndex]={handle:n,callback:t},this.mScheduleIndex++;},f.unscheduleOnce=function(t){for(var o in this.mTimeoutArr)this.mTimeoutArr[o].callback==t&&clearInterval(parseInt(this.mTimeoutArr[o].handle));},f.prototype.initProperty=function(t){for(var o in t)this.hasOwnProperty(o)&&(this[o]=t[o]);},f.prototype.preload=function(t,o){o&&o();},f.prototype._findComponent=function(t,o){for(var e=null,n=0;n<t._components.length;n++){var i=t._components[n];if(i.willHide&&i.willShow){e=i;break}}return e},f.prototype._findComponentByName=function(t,o){return !!t&&(t.name==o||this._findComponentByName(t.$super,o))},f.mIntervalArr={},f.mTimeoutArr={},f.mScheduleIndex=0,f);function f(){this.moduleName="",this.mIntervalArr={},this.mTimeoutArr={},this.mScheduleIndex=0,this.mMaping={};}var m={TOP:"__banner_top",CENTER:"__banner_center",BOTTOM:"__banner_bottom",CUSTOM:"__banner_custom"},w={END:"__video_end",NOTEND:"__video_not_end",ERR:"__video_error"},g=(v.VIBRATESWITCH_CHANGED="VIBRATESWITCH_CHANGED",v.SOUNDSWITCH_CHANGED="SOUNDSWITCH_CHANGED",v.MUSICSWITCH_CHANGED="MUSICSWITCH_CHANGED",v.ON_PLATFORM_SHOW="ON_PLATFORM_SHOW",v.ON_PLATFORM_HIDE="ON_PLATFORM_HIDE",v.ON_BANNER_ERROR="ON_BANNER_ERROR",v.ON_BANNER_HIDE="ON_BANNER_HIDE",v.ON_AD_SHOW="ON_AD_SHOW",v.AD_VIEW_CHANGE="AD_VIEW_CHANGE",v.AD_VIEW_REFRESH="AD_VIEW_REFRESH",v.COIN_CHANGED="COIN_CHANGED",v.RANDOWM_NAVIGATE="RANDOWM_NAVIGATE",v.COMPONENT_CHECKBOX_TOGGLE="COMPONENT_CHECKBOX_TOGGLE",v.PRIZE_BOX_UNLOCAK="PRIZE_BOX_UNLOCAK",v);function v(){}var y,b="隐藏banner",N="banner id 没有配置",I="显示BANNER",_="banner位置或大小被重新设置",S="跳转太频繁 >>>>>>>>>>>>>>>>>>>>>",C="跳转数据",A="设备信息",O="video id 没有配置",E="加载video成功回调",B="video关闭回调",T="video加载错误",x="加载原生广告成功",L="原生广告加载出错,使用新ID加载原生广告",P="原生广告加载出错，本次没有广告",M="原生广告ID已经用完，本次没有广告",R="点击了原生广告",k="上报原生广告",D="原生广告数据没有，回调Null",H="原生广告销毁",V="插屏广告ID为空，系统不加载",F="阿拉丁文件未引入",U="版本过低 平台不支持",W=(t(j,y=u),Object.defineProperty(j.prototype,"bannerId",{get:function(){var t=p.config.bannerId;if(t instanceof Array){this.mBannerIndex>t.length-1&&(this.mBannerIndex=0);var o=t[this.mBannerIndex];return this.mBannerIndex++,console.log("使用banner id ",o),o}return t},enumerable:!0,configurable:!0}),Object.defineProperty(j.prototype,"videoId",{get:function(){var t=p.config.videoId;if(t instanceof Array){this.mBannerIndex>t.length-1&&(this.mBannerIndex=0);var o=t[this.mBannerIndex];return this.mBannerIndex++,console.log("使用 video id ",o),o}return t},enumerable:!0,configurable:!0}),j.prototype.onEnable=function(){},j.prototype.vibrateSwitch=function(t){this.vibrateOn=t;},j.prototype.initAppConfig=function(){this.moosnowConfig=p.config,this.interId=this.moosnowConfig.interId,this.boxId=this.moosnowConfig.boxId,this.nativeId=this.moosnowConfig.nativeId,console.log("moosnowConfig ",JSON.stringify(this.moosnowConfig));},j.prototype.isIphoneXModel=function(){if(window[this.platformName]){var t=this.getSystemInfoSync();return !!/iphone x/.test(t.model.toLowerCase())}},j.prototype.isIphone=function(){if(window[this.platformName]){var t=this.getSystemInfoSync();return !!/iphone/.test(t.model.toLowerCase())}},j.prototype.isIphoneX=function(){if(window[this.platformName]){var t=this.getSystemInfoSync(),o=t.screenHeight,e=t.screenWidth/o;return e<=.5||2<=e}},j.prototype.compareVersion=function(t,o){t=t.split("."),o=o.split(".");for(var e=Math.max(t.length,o.length);t.length<e;)t.push("0");for(;o.length<e;)o.push("0");for(var n=0;n<e;n++){var i=parseInt(t[n]),r=parseInt(o[n]);if(r<i)return 1;if(i<r)return -1}return 0},j.prototype.supportVersion=function(t){var o=this.getSystemInfoSync().SDKVersion;return 0<=this.compareVersion(o,t)},j.prototype.supportFunction=function(t){return !!window[this.platformName]&&!!window[this.platformName][t]},j.prototype.checkVersion=function(t,o){null==this.versionRet?this._checkConfigVersion(o):o(this.versionRet);},j.prototype._checkRemoteVersion=function(o){var e=this,t=this.baseUrl+"admin/wx_list/getAppConfig",n={appid:this.moosnowConfig.moosnowAppId};moosnow.http.request(t,n,"POST",function(t){e.versionRet=e.checkLog(t.data.version),o(e.versionRet);},function(){console.log("checkVersion fail");},function(){console.log("checkVersion complete");});},j.prototype._checkConfigVersion=function(o){var e=this;moosnow.http.getAllConfig(function(t){t&&t.version?(e.versionRet=e.checkLog(t.version),o(e.versionRet)):e._checkRemoteVersion(o);});},j.prototype.checkLog=function(t){var o=moosnow.platform.moosnowConfig.version,e=t==o;return console.log("版本检查 后台版本"+t+" 配置文件版本"+o),console.log("获取广告开关：",e),e},j.prototype.isSmallWidth=function(){if(window[this.platformName]){var t=this.getSystemInfoSync(),o=t.screenHeight;return t.screenWidth,o<667&&(console.log("高度不够",o),!0)}},j.prototype.login=function(t,o){var e;p.isFunction(t)&&((e=moosnow.data.getToken())||(e=(e=p.generateUUID()).replace(/-/g,""),moosnow.data.setToken(e)),t(e));},j.prototype.postMessage=function(t){window[this.platformName]&&window[this.platformName].getOpenDataContext&&window[this.platformName].getOpenDataContext().postMessage(t);},j.prototype.navigate2Mini=function(o,e,n,i){var r,a,s,h=this;console.log(C,o),Date.now()-this.prevNavigate<300?console.log(S):(this.prevNavigate=Date.now(),window[this.platformName]?(r=o.appid,a=o.path,s=(s=o.extraData)||{},moosnow.http.navigate(r,function(t){window[h.platformName].navigateToMiniProgram({appId:r,path:a,extraData:s,success:function(){moosnow.http.point("跳转",{position:o.position,appid:r,img:o.atlas||o.img}),moosnow.http.navigateEnd(t.code),moosnow.http.exportUser(),e&&e();},fail:function(t){console.log("navigateToMini fail ",t," fail callback ",!!n),n&&n();},complete:function(){i&&i();}});})):n&&n());},j.prototype.updateProgram=function(){var o,e=this;window[this.platformName]&&"function"==typeof window[this.platformName].getUpdateManager&&((o=window[this.platformName].getUpdateManager()).onCheckForUpdate(function(t){}),o.onUpdateReady(function(t){e.showModal("发现新版本","新版本已经准备好，是否更新？","取消","更新",function(t){t&&o.applyUpdate();});}),o.onUpdateFailed(function(){}));},j.prototype.vibrateShort=function(){window[this.platformName]&&(window[this.platformName]&&!window[this.platformName].vibrateShort||window[this.platformName].vibrateShort());},j.prototype.vibrateLong=function(){window[this.platformName]&&(window[this.platformName]&&!window[this.platformName].vibrateLong||window[this.platformName].vibrateLong());},j.prototype.showLoading=function(t){window[this.platformName]?window[this.platformName].showLoading({title:t,mask:!1,success:null,fail:null,complete:null}):console.log("showLoading",t);},j.prototype.hideLoading=function(){window[this.platformName]&&window[this.platformName].hideLoading();},j.prototype.showModal=function(t,o,e,n,i){window[this.platformName]&&window[this.platformName].showModal({title:t,content:o,cancelText:e,confirmText:n,showCancel:!0,cancelColor:"#000000",confirmColor:"#3CC51F",fail:null,complete:null,success:function(t){t.confirm?i&&i(!0):t.cancel&&i&&i(!1);}});},j.prototype.showModalWithoutCancel=function(t,o,e,n){window[this.platformName]&&window[this.platformName].showModal({title:t,content:o,showCancel:!1,confirmText:e,cancelColor:"#000000",confirmColor:"#3CC51F",cancelText:"",fail:null,complete:null,success:function(t){t.confirm?n&&n(!0):t.cancel&&n&&n(!1);}});},j.prototype.showToast=function(t,o,e){void 0===o&&(o="none"),void 0===e&&(e=!1),window[this.platformName]&&window[this.platformName].showToast({title:t,icon:o,duration:2e3,mask:e,image:null,success:null,fail:null,complete:null});},j.prototype.authOrGetUserInfo=function(o){var e;window[this.platformName]&&(e=this).getSetting(function(t){console.log("授权信息",t),t["scope.userInfo"]?e.getUserInfo(function(t){console.log("获取用户信息：",t),o(t,!1);},function(t){}):e.showUserInfoButton(function(t){o(t,!0),console.log("授权获取用户信息：",t);});},function(t){e.showUserInfoButton(function(t){o(t,!0),console.log("授权获取用户信息：",t);});});},j.prototype.showUserInfoButton=function(o){var t={type:"text",text:"",style:this._initLoginButton()},e=window[this.platformName].createUserInfoButton(t);e.onTap(function(t){t.userInfo&&t.userInfo.nickName?(o(t.userInfo),e.hide()):o(null);}),e.show();},j.prototype.getSetting=function(o,t){window[this.platformName].getSetting({success:function(t){o(t.authSetting);},fail:function(){t();},complete:null});},j.prototype.getUserInfo=function(o,t){window[this.platformName].getUserInfo({success:function(t){o(t.userInfo);},fail:function(){t();},withCredentials:!1,complete:null,lang:"en"});},j.prototype.getLaunchOption=function(){return window[this.platformName]&&window[this.platformName].getLaunchOptionsSync?window[this.platformName].getLaunchOptionsSync():{}},j.prototype.getSystemInfoSync=function(){return null==this.systemInfo&&(window[this.platformName]&&window[this.platformName].getSystemInfoSync?this.systemInfo=window[this.platformName].getSystemInfoSync():this.systemInfo={},console.log(A,this.systemInfo)),this.systemInfo},j.prototype.isLandscape=function(t,o){return t<o},j.prototype.initShare=function(t){var o=this;window[this.platformName]&&window[this.platformName].showShareMenu&&(this.shareInfoArr=t,window[this.platformName].showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"],success:null,fail:null,complete:null}),window[this.platformName].onShareAppMessage&&window[this.platformName].onShareAppMessage(function(){return o._buildShareInfo()}),window[this.platformName].onShareTimeline&&window[this.platformName].onShareTimeline(function(){return o._buildShareInfo()}));},j.prototype.getShareInfo=function(t,o,e){void 0===e&&(e=null),window[this.platformName]&&window[this.platformName].getShareInfo({shareTicket:t,success:function(t){o(t.encryptedData,t.iv);},fail:function(){e&&e();},complete:null});},j.prototype.share=function(t,o,e){void 0===t&&(t={}),window[this.platformName]?(this.currentShareCallback=o,this.currentShortCall=e,this.share_clickTime=Date.now(),this.shareFail=!1,this._share(t)):o&&o(!0);},j.prototype.shareWithoutCheck=function(t,o){void 0===t&&(t={}),window[this.platformName]||o&&o(!0),this.currentShareCallback=o,this.share_clickTime=1,this.shareFail=!1,this._share(t);},j.prototype._share=function(t){var o;void 0===t&&(t=null),window[this.platformName]&&window[this.platformName].shareAppMessage?(o=this._buildShareInfo(t),console.log("分享数据：",o),window[this.platformName].shareAppMessage(o)):this.currentShareCallback(!0);},j.prototype._buildShareInfo=function(t){void 0===t&&(t=null);var o,e="",n="";return 0<this.shareInfoArr.length&&(e=(o=this.shareInfoArr[l.randomNumBoth(0,this.shareInfoArr.length-1)]).title,n=o.img),{title:e,imageUrl:n,query:t}},j.prototype._onShareback=function(){var t=this;setTimeout(function(){t.share_clickTime&&t.currentShareCallback&&(!t.shareFail&&(1==t.share_clickTime||3e3<=Date.now()-t.share_clickTime)?t.currentShareCallback(!0):t.currentShareCallback(!1)),t.shareFail=!1,t.currentShareCallback=null,t.share_clickTime=null;},100);},j.prototype._initLoginButton=function(){if(window[this.platformName]){var t=window[this.platformName].getSystemInfoSync();return {left:0,top:0,width:t.screenWidth,height:t.screenHeight,lineHeight:40,color:"#ffffff",type:"text",text:"获取用户信息",textAlign:"center",fontSize:28}}},j.prototype.initRecord=function(){},j.prototype.clipRecord=function(t){void 0===t&&(t=[2,2]);},j.prototype.startRecord=function(t,o){void 0===t&&(t=300),void 0===o&&(o=null),this.recordObj||o&&o(!1);},j.prototype.stopRecord=function(t){void 0===t&&(t=null),this.recordObj||t&&t(!1);},j.prototype.pauseRecord=function(){},j.prototype.resumeRecord=function(){},j.prototype.showShareButton=function(t,o,e){},j.prototype.hideShareButton=function(){},j.prototype._regisiterWXCallback=function(){window[this.platformName]&&(this._regisiterOnShow(),this._regisiterOnHide());},j.prototype._regisiterOnShow=function(){var o;window[this.platformName].onShow&&window[(o=this).platformName].onShow(function(t){o._onShowCallback(t);});},j.prototype._onShowCallback=function(t){this._onShareback(),console.log("on show ",t),moosnow.event.sendEventImmediately(g.ON_PLATFORM_SHOW,t);},j.prototype._regisiterOnHide=function(){var o;window[this.platformName].onHide&&window[(o=this).platformName].onHide(function(t){o._onHideCallback(t);});},j.prototype._onHideCallback=function(t){console.log("on show ",t),moosnow.event.sendEventImmediately(g.ON_PLATFORM_HIDE,t),console.log("on hide ",t);var o=t&&(8==t.targetAction||9==t.targetAction||10==t.targetAction)&&50<t.targetPagePath.length;o&&moosnow.http.clickBanner(),this.bannerCb?this.bannerCb(o):console.log("banner callback is null ");},j.prototype.initBanner=function(){window[this.platformName]&&this._prepareBanner();},j.prototype._prepareBanner=function(){var t,o;window[this.platformName].createBannerAd&&(o=(t=this.getSystemInfoSync()).windowWidth,t.windowHeight<t.windowWidth&&!(o<this.bannerWidth)||(this.bannerWidth=o),this.banner&&(this.banner.offResize(this._bottomCenterBanner),this.banner.offError(this._onBannerError),this.banner.offLoad(this._onBannerLoad),this.banner.destroy(),this.banner=null),this.banner=this._createBannerAd(),this.banner&&(this.banner.onResize(this._bottomCenterBanner.bind(this)),this.banner.onError(this._onBannerError.bind(this)),this.banner.onLoad(this._onBannerLoad.bind(this))));},j.prototype._createBannerAd=function(){if(window[this.platformName]&&window[this.platformName].createBannerAd){var t=this.getSystemInfoSync(),o=t.windowWidth,e=t.windowHeight,n=(o-this.bannerWidth)/2,i=this.bannerId;if(!p.isEmpty(i))return this.bannerShowTime=Date.now(),window[this.platformName].createBannerAd({adUnitId:i,style:{top:e-this.bannerHeigth,left:n,width:this.bannerWidth}});console.warn(N);}},j.prototype._onBannerLoad=function(){this.bannerShowCount=0;},j.prototype._onBannerError=function(t){console.warn("banner___error:",t.errCode,t.errMsg),this.banner=null,this.isBannerShow=!1,moosnow.event.sendEventImmediately(g.ON_BANNER_HIDE,null),moosnow.event.sendEventImmediately(g.ON_BANNER_ERROR,null);},j.prototype._bottomCenterBanner=function(t){var o=this.getSystemInfoSync().windowWidth;this.banner.style.left=(o-t.width)/2,this.bannerWidth=this.banner.style.realWidth,this.bannerHeigth=this.banner.style.realHeight,console.log("_bottomCenterBanner",this.banner.style);},j.prototype._resetBanenrStyle=function(t){var o,e,n;p.isEmpty(t)?console.log("设置的banner尺寸为空,不做调整"):((o=this.getSystemInfoSync()).windowWidth,e=o.windowHeight,n=0,this.bannerPosition==m.BOTTOM?n=e-this.bannerHeigth:this.bannerPosition==m.CENTER?n=(e-this.bannerHeigth)/2:this.bannerPosition==m.TOP&&(n=0),this.bannerStyle?this.banner.style=this.bannerStyle:(this.banner.style.top=n,console.log(_,this.banner.style,"set top ",n)));},j.prototype.showBanner=function(t,o,e,n){var i=this;void 0===t&&(t=!0),void 0===e&&(e=m.BOTTOM),console.log(I),this.bannerCb=o,this.isBannerShow=!0,window[this.platformName]&&(this.bannerPosition=e,this.bannerStyle=n,this.mTimeoutId&&(clearTimeout(this.mTimeoutId),this.mTimeoutId=null),t?moosnow.http.getAllConfig(function(t){0!=t.mistouchNum?(console.log("后台开启了banner，执行显示"),i._showBanner()):console.log("后台关闭了banner，不执行显示");}):this._showBanner());},j.prototype._showBanner=function(){var t,o=this;this.banner&&(console.log("show banner style ",this.banner.style),this.banner.hide(),this._resetBanenrStyle({width:this.banner.style.width,height:this.banner.style.realHeight}),(t=this.banner.show())&&t.then(function(){o._resetBanenrStyle({width:o.banner.style.width,height:o.banner.style.realHeight});}));},j.prototype.showAutoBanner=function(e){var n=this;void 0===e&&(e=m.BOTTOM),console.log("执行自动显示和隐藏Banner功能"),moosnow.http.getAllConfig(function(t){var o;t&&1==t.gameBanner&&(moosnow.platform.showBanner(!0,function(){},e),o=isNaN(t.gameBanenrHideTime)?1:parseFloat(t.gameBanenrHideTime),n.mTimeoutId=setTimeout(function(){console.log("自动隐藏时间已到，开始隐藏Banner"),n.isBannerShow,n.hideBanner();},1e3*o));});},j.prototype.exitApplication=function(){},j.prototype.showIntervalBanner=function(e){var n=this;void 0===e&&(e=m.BOTTOM),console.log("执行 showIntervalBanner"),moosnow.http.getAllConfig(function(t){var o=t&&!isNaN(t.gameBannerInterval)?parseFloat(t.gameBannerInterval):20;n.showAutoBanner(e),n.schedule(n.showAutoBanner,o,[e]);});},j.prototype.clearIntervalBanner=function(){console.log("执行 clearIntervalBanner"),this.unschedule(this.showAutoBanner);},j.prototype.hideBanner=function(){console.log(b),this.isBannerShow&&(this.isBannerShow=!1,window[this.platformName]&&(this.bannerShowCount++,this.banner?0==this.bannerLimitType?this.bannerShowCount>=this.bannerShowCountLimit?(console.log("次数满足,销毁banner"),this.banner.hide(),this.banner.destroy(),this.banner=null,this._prepareBanner()):this.banner.hide():Date.now()-this.bannerShowTime>1e3*this.bannerShowTimeLimit?(console.log("时间满足，销毁banner"),this.banner.hide(),this.banner.destroy(),this.banner=null,this._prepareBanner()):(console.log("时间太短，隐藏banner"),this.banner.hide()):this._prepareBanner()));},j.prototype.initVideo=function(){this.createRewardAD(!1);},j.prototype.createRewardAD=function(t){var o=this;if(!this.videoLoading)if(window[this.platformName])if(window[this.platformName].createRewardedVideoAd){var e=this.videoId;if(p.isEmpty(e))return console.warn(O),void(moosnow.platform.videoCb&&moosnow.platform.videoCb(w.END));if(!this.video){if(this.video=window[this.platformName].createRewardedVideoAd({adUnitId:e}),!this.video)return void console.warn("创建视频广告失败");this.video.onError(this._onVideoError),this.video.onClose(this._onVideoClose),this.video.onLoad(this._onVideoLoad);}moosnow.platform.videoLoading=!0,moosnow.platform.videoPlaying=!1,this.video.load().then(function(){t&&o.video.show().then(function(){}).catch(function(t){o._onVideoError(t.errMsg,t.errCode),console.log(t.errMsg);});}).catch(function(t){o._onVideoError(t.errMsg,t.errCode),console.log(t.errMsg);});}else moosnow.platform.videoCb&&moosnow.platform.videoCb(w.END);else moosnow.platform.videoCb&&moosnow.platform.videoCb(w.END);},j.prototype._onVideoError=function(t,o){console.log(T,t,o),moosnow.platform.videoLoading=!1,moosnow.platform.videoPlaying=!1,moosnow.platform.videoCb&&(moosnow.platform.videoCb(w.ERR),moosnow.platform.videoCb=null);},j.prototype._onVideoClose=function(t){var o;console.log(B,t.isEnded),moosnow.platform.videoLoading=!1,moosnow.platform.videoPlaying=!1,t.isEnded&&moosnow.http.clickVideo(),moosnow.platform.videoCb&&(o=t.isEnded?w.END:w.NOTEND,setTimeout(function(){moosnow.platform.videoCb(o);},50));},j.prototype._onVideoLoad=function(){console.log(E),moosnow.platform.videoLoading=!1;},j.prototype.showVideo=function(t){void 0===t&&(t=null),console.log("显示video"),moosnow.platform.videoCb=t,this.createRewardAD(!0);},j.prototype.initInter=function(){this.prepareInter();},j.prototype.prepareInter=function(){window[this.platformName]&&"function"==typeof window[this.platformName].createInterstitialAd&&this.supportVersion("2.8.0")&&(p.isEmpty(this.interId)?console.warn(V):(this.inter=window[this.platformName].createInterstitialAd({adUnitId:this.interId}),this.inter.onLoad(this._onInterLoad.bind(this)),this.inter.onClose(this._onInterClose.bind(this))));},j.prototype.showInter=function(){this.inter&&this.isInterLoaded&&this.inter.show();},j.prototype._onInterLoad=function(){this.interShowCount=0,this.isInterLoaded=!0,console.log("插屏广告加载完成");},j.prototype._onInterClose=function(){this.interShowCount++,this.interShowCount>=this.interShowCountLimit&&(this.isInterLoaded=!1,this.inter.load());},j.prototype._onInterError=function(t){console.log("插屏广告出错：",t);},j.prototype._prepareNative=function(){},j.prototype._onNativeLoad=function(t){},j.prototype._onNativeError=function(t){},j.prototype._destroyNative=function(){},j.prototype.showNativeAd=function(t){p.isFunction(t)&&t();},j.prototype.clickNative=function(t){},j.prototype.showAppBox=function(t,o){void 0===o&&(o=!0),p.isFunction(t)&&t();},j.prototype.hideAppBox=function(t){p.isFunction(t)&&t();},j.prototype.reportMonitor=function(t,o){},j.prototype.showMoreGameButton=function(t,o,e){void 0===e&&(e=null),o&&o();},j.prototype.initRank=function(){this.postMessage({action:1});},j.prototype.showRank=function(){this.postMessage({action:10});},j.prototype.updateUserScore=function(t){var o={action:13,data:t};this.postMessage(o);},j.prototype.hideRank=function(){this.postMessage({action:20});},j.prototype.checkFollowAwemeSate=function(t,o){t&&t(!0);},j.prototype.openAwemeUserProile=function(t,o){t&&t(!0);},j.prototype.hasShortcutInstalled=function(t){t(!1);},j.prototype.installShortcut=function(t,o){void 0===o&&(o="方便下次快速启动");},j.prototype.onDisable=function(){},j);function j(){var t=y.call(this)||this;return t.baseUrl="https://api.liteplay.com.cn/",t.currentShareCallback=null,t.currentShortCall=null,t.shareFail=null,t.vibrateOn=!1,t.systemInfo=null,t.banner=null,t.video=null,t.inter=null,t.native=null,t.box=null,t.platformName="wx",t.mBannerId="",t.mBannerIndex=0,t.mVideoIndex=0,t.interId="",t.boxId="",t.nativeId=[],t.nativeIdIndex=0,t.bannerWidth=300,t.bannerHeigth=96,t.bannerShowCount=0,t.bannerShowCountLimit=3,t.bannerShowTime=0,t.bannerShowTimeLimit=15,t.bannerLimitType=0,t.bannerCb=null,t.bannerPosition=m.BOTTOM,t.bannerStyle=null,t.isBannerShow=!1,t.videoCb=null,t.videoLoading=!1,t.videoPlaying=!1,t.interShowCount=0,t.interShowCountLimit=3,t.isInterLoaded=!1,t.nativeAdResult=null,t.nativeCb=null,t.nativeLoading=!1,t.recordObj=null,t.shareInfoArr=[],t.versionRet=null,t.prevNavigate=Date.now(),t.initAppConfig(),t.initShare(!0),t.share_clickTime=null,t.currentShareCallback=null,t.shareFail=!1,t.updateProgram(),t.initRecord(),t}var G,q=(t(z,G=W),z.prototype.login=function(o,t){moosnow.http.getAllConfig(function(t){});var e=this,n=moosnow.data.getToken();n?e.getUserToken("",n,o):window[this.platformName]&&window[this.platformName].login?window[this.platformName].login({success:function(t){t.code?e.getUserToken(t.code,"",o):p.isFunction(o)&&o();},fail:function(){}}):G.prototype.login.call(this,o,t);},z.prototype.getUserToken=function(t,o,e){var n=this.getLaunchOption(),i=n.scene,r=n.query&&n.query.channel_id?n.query.channel_id:"0",a=n.referrerInfo&&n.referrerInfo.appId?n.referrerInfo.appId:"0";moosnow.data.setChannelAppId(a),moosnow.data.setChannelId(r);var s=n.referrerInfo?n.referrerInfo.appId:"未知";window[this.platformName]&&window[this.platformName].aldSendEvent&&window[this.platformName].aldSendEvent("来源",{origin:s,path:n.query.from||0}),moosnow.http.request(this.baseUrl+"api/channel/login.html",{appid:p.config.moosnowAppId,code:t,user_id:o,channel_id:r,channel_appid:a,scene:i,fromApp:s},"POST",function(t){0==t.code&&t.data&&t.data.user_id&&moosnow.data.setToken(t.data.user_id),p.isFunction(e)&&e(t);},function(){p.isFunction(e)&&e({});});},z.prototype.initRecord=function(){window[this.platformName]&&window[this.platformName].getGameRecorder&&(this.recordObj=window[this.platformName].getGameRecorder());},z.prototype.startRecord=function(t,o){var e=this;void 0===t&&(t=300),void 0===o&&(o=null),console.log("record startRecord"),this.recordObj?this.recordObj.start().then(function(t){e.recordObj.on("timeUpdate",function(t){console.log("视频时长: "+t.currentTime),e.writeTime=Math.min(t.currentTime,6e4);}),e.recordObj.on("start",function(){o&&o();}),e.recordObj.on("stop",function(t){console.log("对局回放时长: ",t),e.recordCb&&e.recordCb(t);});}):o&&o(!1);},z.prototype.stopRecord=function(t){var o,e=this;void 0===t&&(t=null),console.log(" stop Record  callback  ",!!t),this.recordObj?(this.recordCb=t,(o=this.recordObj.stop())&&o.then(function(t){t.error.code||e.recordObj.off("timeUpdate"),console.log(" stop Record  then  ",t);}).catch(function(t){console.log(" stop Record  catch  ",t);})):t&&t(!1);},z.prototype.pauseRecord=function(){this.recordObj&&this.recordObj.pause();},z.prototype.resumeRecord=function(){this.recordObj&&this.recordObj.resume();},z.prototype.showShareButton=function(o,e,n){var i=this;window[this.platformName]&&window[this.platformName].createGameRecorderShareButton&&(e=e||[[0,this.writeTime]],moosnow.http.getAllConfig(function(t){i.mShareButton=window[i.platformName].createGameRecorderShareButton({style:s(s({left:10,top:150,height:50},o),{color:"#ffffff",textAlign:"center",fontSize:16,borderRadius:4,iconMarginRight:16,paddingLeft:1,paddingRight:30}),text:t.shareButtonText||"",image:t.shareBgImage||"",icon:t.shareIconImage||"",share:{query:"a=1&b=2",bgm:"",timeRange:e}}),i.mShareButton.show(),i.mShareButton.onTap(function(t){console.log("错误码："+t.error.code+"，错误信息："+t.error.message),n&&n(t);});}));},z.prototype.hideShareButton=function(){this.mShareButton&&this.mShareButton.hide();},z);function z(){var t=G.call(this)||this;return t.platformName="wx",t.writeTime=0,t.recordCb=null,t._regisiterWXCallback(),t.initBanner(),t.initInter(),setTimeout(function(){t.initVideo();},1),t}var K,X=(t(Q,K=u),Q.prototype.getDistinctAd=function(t){for(var o=[],e=[],n=t.sort(function(t,o){return .5<Math.random()?1:-1}),i=0;i<n.length;i++){for(var r=n[i],a=!0,s=0;s<o.length;s++)if(o[s].appid==r.appid){a=!1;break}a?o.push(r):e.push(r);}return h(o,e)},Q.prototype.getAd=function(i){var t,o,r=this,a=this.getCache();p.isEmpty(a.indexLeft)?this.getRemoteAd(function(t){var o=r.initRetValue();t.forEach(function(t){o=r.formatRow(o,t);}),r.setCache(o);var e=r.getDistinctAd(o.indexLeft),n=s(s({},a),{indexLeft:e});i(n);}):(t=this.getDistinctAd(a.indexLeft),o=s(s({},a),{indexLeft:t}),i(o));},Q.prototype.getRemoteAd=function(t){t([]);},Q.prototype.loadCacheImage=function(t){var o=this;this.cacheImage?t(this.cacheImage):wx.getStorage({key:this.cacheKey,success:function(t){this.cacheImage=t.data,console.log("cacheKey data  ",t.data);},fail:function(){o.cacheImage={},console.log("cacheKey error ");},complete:function(){t(this.this.cacheImage);}});},Q.prototype.initRetValue=function(){return {indexBanner:[],indexFloat:[],indexLeft:[],gameEndPage:[],gameRespawnPage:[],exportPage:[]}},Q.prototype.formatRow=function(t,o){switch(o.position){case"1":t.indexLeft.push(o);break;case"2":t.indexFloat.push(o);break;case"3":t.indexBanner.push(o);break;case"4":t.gameEndPage.push(o);break;case"5":t.gameRespawnPage.push(o);break;case"6":t.exportPage.push(o);break;default:t.indexLeft.push(o);}return t},Q.prototype.downloadImage=function(e,n){window.wx?wx.downloadFile({header:{},url:e,success:function(t){var o=this;200===t.statusCode&&wx.saveFile({tempFilePath:t.tempFilePath,success:function(t){o.cacheImage[""+e]=t.savedFilePath,n(t.savedFilePath);},fail:function(){n(e);},complete:function(){}});},fail:function(){n(e);},complete:function(){}}):n(e);},Q);function Q(){var t=K.call(this)||this;return t.baseUrl="https://api.liteplay.com.cn/admin/",t.cacheImage=null,t.cacheKey="cacheUrl",t.getResUrl=function(t){for(var o in this.this.cacheImage)if(this.this.cacheImage[o]==t)return o;return ""},t.convertToCacheUrl=function(t,o){this.cacheImage[t]?o(this.cacheImage[t]):this.downloadImage(t,function(t){o(t);});},t.saveCacheUrl=function(t){var o=[],e=window.wx.getFileSystemManager();for(var n in this.cacheImage){var i=!0;for(var r in t)for(var a=0;a<t[r].length;a++)t[r][a].atlas!=this.cacheImage[n]&&t[r][a].img!=this.cacheImage[n]||(i=!1);i&&o.push(n);}for(a=0;a<o.length;a++){if(o[a]){console.log("clear file ",o[a]);try{e.removeSavedFile(o[a]);}catch(t){console.log("clear file error ",o[a]);}}delete this.cacheImage[o[a]];}window.wx&&window.wx.setStorage({key:this.cacheKey,data:this.cacheImage,success:function(){},fail:function(){},complete:function(){}});},t.mMemory={},t.getCache=function(){return this.mMemory},t.setCache=function(t){this.mMemory=t;},t}var Z,Y="https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com",J=(t($,Z=u),Object.defineProperty($.prototype,"appLaunchOptions",{get:function(){return this.mLaunchOptions||moosnow.platform&&moosnow.platform.getLaunchOption&&(this.mLaunchOptions=moosnow.platform.getLaunchOption()),this.mLaunchOptions},enumerable:!0,configurable:!0}),$.prototype.request=function(t,o,e,n,i,r){var a=t,s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==s.readyState){var o=s.responseText;if(200<=s.status&&s.status<400){var t={};try{t=JSON.parse(o);}catch(t){console.error("json parse error ",o),i&&i(t);}n&&n(t);}else console.warn("error ",o),i&&i(o);}},s.timeout=1e4,s.ontimeout=function(t){console.error("error ",t),i&&i(t);},"POST"==e?(s.open("POST",a),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(this._object2Query(o))):(s.open(e,a,!0),s.send());},$.prototype._object2Query=function(t){var o=[];for(var e in t)o.push(e+"="+t[e]);return o.join("&")},$.prototype.isDisableArea=function(t){},$.prototype.finishLoading=function(){this.postData("api/channel/validUser.html");},$.prototype.clickBanner=function(){this.postData("api/channel/clickBanner.html");},$.prototype.clickVideo=function(){this.postData("api/channel/clickVideo.html");},$.prototype.exportUser=function(){this.postData("api/channel/exportUser.html");},$.prototype.navigate=function(t,o){var e=moosnow.data.getToken();this.request(this.baseUrl+"api/jump/record",{appid:p.config.moosnowAppId,uid:e,jump_appid:t},"POST",function(t){console.log("navigate",t),o&&o(t.data);});},$.prototype.navigateEnd=function(o){this.request(this.baseUrl+"api/jump/status",{code:o},"POST",function(t){console.log("navigateEnd code ",o,t);});},$.prototype.postData=function(t){var o=moosnow.data.getToken();if(!p.isEmpty(o)&&"0"!=moosnow.data.getChannelId()&&"0"!=moosnow.data.getChannelAppId())try{this.request(""+this.baseUrl+t,{appid:p.config.moosnowAppId,user_id:o,channel_id:moosnow.data.getChannelId(),channel_appid:moosnow.data.getChannelAppId()},"POST",function(t){});}catch(t){console.log("postData error ",t);}},$.prototype.point=function(t,o){void 0===o&&(o=null),p.platform==i.WX&&window.wx&&window.wx.aldSendEvent&&window.wx.aldSendEvent(t,o);},$.prototype.startGame=function(t){p.platform==i.WX&&(window.wx&&window.wx.aldStage?window.wx.aldStage.onStart({stageId:""+t,stageName:""+t,userId:moosnow.data.getToken()}):console.warn(F));},$.prototype.endGame=function(t,o){var e,n;p.platform==i.WX&&(e=o?"complete":"fail",n=o?"关卡完成":"关卡失败",window.wx&&window.wx.aldStage?window.wx.aldStage.onEnd({stageId:""+t,stageName:""+t,userId:moosnow.data.getToken(),event:e,params:{desc:n}}):console.warn(F));},$.prototype.videoPoint=function(t,o,e){var n;p.platform==i.WX&&(n=0==t?"点击视频":"观看完成视频",window.wx&&window.wx.aldSendEvent?window.wx.aldSendEvent(n,{info:o,level:e+""}):console.warn(F));},$.prototype.getAllConfig=function(n){var o=this;this.loadCfg(function(e){o.loadArea(function(t){o.disableAd(e,t,function(t){var o=0;t?(1==e.exportAutoNavigate&&(o=0),2==e.exportAutoNavigate&&(o=1),n(s(s({},e),{mistouchNum:0,mistouchPosNum:0,mistouchInterval:0,exportBtnNavigate:0,checkBoxMistouch:0,exportAutoNavigate:o,bannerShowCountLimit:1,isLimitArea:1,nativeErrorShowInter:0,bannerErrorShowInter:0}))):(1==e.exportAutoNavigate&&(o=1),2==e.exportAutoNavigate&&(o=1),n(s(s({},e),{exportAutoNavigate:o,isLimitArea:0})));});});});},$.prototype.loadCfg=function(t){var e=this;if(p.isEmpty(this.cfgData)){if(this._cfgQuene.push(t),1<this._cfgQuene.length)return;var o="",o=p.config.url?p.config.url+"?t="+Date.now():Y+"/config/"+p.config.moosnowAppId+".json?t="+Date.now();this.request(o,{},"GET",function(t){var o=!(!t||1!=t.mistouchOn);o||console.log("总开关已关闭----------------"),e.cfgData=s(s({checkBoxProbabilitys:[100,0,0,0,0]},p.deepCopy(t)),{zs_native_click_switch:t&&t.mx_native_click_switch?t.mx_native_click_switch:0,zs_jump_switch:t&&t.mx_jump_switch?t.mx_jump_switch:0,mistouchNum:o?t.mistouchNum:0,mistouchPosNum:o?t.mistouchPosNum:0,mistouchInterval:o?t.mistouchInterval:0,exportAutoNavigate:o?t.exportAutoNavigate:0,exportBtnNavigate:o?t.exportBtnNavigate:0,checkBoxMistouch:o?t.checkBoxMistouch:0,nativeErrorShowInter:o?t.nativeErrorShowInter:0,bannerErrorShowInter:o?t.bannerErrorShowInter:0}),moosnow.platform&&t&&(isNaN(t.bannerShowCountLimit)||(moosnow.platform.bannerShowCountLimit=parseInt(t.bannerShowCountLimit)),isNaN(t.bannerLimitType)||(moosnow.platform.bannerLimitType=parseInt(t.bannerLimitType)),isNaN(t.bannerShowTimeLimit)||(moosnow.platform.bannerShowTimeLimit=parseInt(t.bannerShowTimeLimit))),e._cfgQuene.forEach(function(t){t(e.cfgData);}),e._cfgQuene=[];},function(){e._cfgQuene.forEach(function(t){t({checkBoxMistouch:0,checkBoxProbabilitys:[100,0,0,0,0],mistouchNum:0,mistouchPosNum:0,bannerShowCountLimit:1,exportAutoNavigate:0});}),e._cfgQuene=[],console.log("load config json fail");});}else t(this.cfgData);},$.prototype.loadArea=function(t){var o=this;if(this.areaData)t(this.areaData);else{if(this._localQuene.push(t),1<this._localQuene.length)return;var e=this.baseUrl+"admin/wx_config/getLocation";this.request(e,{},"GET",function(t){o.areaData=t,o._localQuene.forEach(function(t){t(o.areaData);}),o._localQuene=[];},function(){o._localQuene.forEach(function(t){t(o.areaData);}),o._localQuene=[];});}},$.prototype.getForceExport=function(e){var n=this;this.loadCfg(function(o){n.loadArea(function(t){n.disabledForceExport(o,t,function(t){e(t);});});});},$.prototype.disabledForceExport=function(t,o,e){var n=p.formatTime(new Date),i=!1;if(t.disabledForceExport)for(var r=0;r<t.disabledForceExport.length;r++){var a=t.disabledForceExport[r];if(-1!=o.data.city.indexOf(a)||-1!=o.data.province.indexOf(a)||-1!=o.data.area.indexOf(a)){i=!0;break}}i&&(!t.forceExportTime||2!=t.forceExportTime.length||n>t.forceExportTime[0]&&n<t.forceExportTime[1])?e(!0):e(!1);},$.prototype.getMisTouchNum=function(e){var n=this;this.loadCfg(function(o){n.loadArea(function(t){n.disableAd(o,t,function(t){t?(e(0),console.log("getMisTouchNum",0,"disableAd",t)):(e(parseInt(o.mistouchNum)),console.log("getMisTouchNum",o.mistouchNum,"disableAd",t));});});});},$.prototype.getMistouchPosNum=function(e){var n=this;this.loadCfg(function(o){n.loadArea(function(t){n.disableAd(o,t,function(t){t?(e(0),console.log("getMistouchPosNum",0,"disableAd",t)):(e(parseInt(o.mistouchPosNum)),console.log("getMistouchPosNum",o.mistouchPosNum,"disableAd",t));});});});},$.prototype.getBannerShowCountLimit=function(o){this.loadCfg(function(t){isNaN(t.bannerShowCountLimit)?o(5):o(parseInt(t.bannerShowCountLimit));});},$.prototype.disableAd=function(t,o,e){var n=p.formatTime(new Date),i=!1;if(t&&t.disabledRegion)for(var r=0;r<t.disabledRegion.length;r++){var a=t.disabledRegion[r];if(o&&o.data&&(-1!=o.data.city.indexOf(a)||-1!=o.data.province.indexOf(a)||-1!=o.data.area.indexOf(a))){i=!0;break}}if(this.appLaunchOptions&&t&&(console.log("后台禁止场景 1 ",t.seachEntryScene),console.log("后台禁止场景 2 ",t.shareEntryScene),1==t.seachEntryOn&&t.seachEntryScene&&-1!=t.seachEntryScene.indexOf(this.appLaunchOptions.scene)||1==t.shareEntryOn&&t.shareEntryScene&&-1!=t.shareEntryScene.indexOf(this.appLaunchOptions.scene)))return e(!0),void console.log("后台禁止场景 ",this.appLaunchOptions.scene);i&&(!t.disabledTime||2!=t.disabledTime.length||n>t.disabledTime[0]&&n<t.disabledTime[1])?e(!0):e(!1);},$.prototype.getShareInfo=function(o){var t=this;this.request(Y+"/share/"+p.config.moosnowAppId+".json",{appid:p.config.moosnowAppId},"GET",function(t){o(t),moosnow.platform.initShare(t);},function(){t.request(t.baseUrl+"admin/wx_share/getShare",{appid:p.config.moosnowAppId},"POST",function(t){console.log("分享数据",t.data),o(t.data),moosnow.platform.initShare(t.data);});});},$);function $(){var o=Z.call(this)||this;o.appid="",o.secret="",o.versionNumber="",o.version="2.1.0",o.baseUrl="https://api.liteplay.com.cn/",o.mLaunchOptions={},o.cfgData=null,o.areaData=null,o._cfgQuene=[],o._localQuene=[];var t=Y+"/SDK/version.json?t="+Date.now();return p.platform==i.PC?o.request(t,{},"GET",function(t){o.version<t.version&&(console.warn("您的SDK版本号["+o.version+"]不是最新版本，请尽快升级，最新版本["+t.version+"]  下载地址："+t.download),p.isEmpty(t.memo)||console.warn(""+t.memo));}):p.platform==i.WX&&window.wx&&o.request(t,{},"GET",function(t){var o=window.wx.aldVersion;(!o||o&&o<t.aldVersion)&&console.warn("阿拉丁文件错误，请重新下载"+t.aldUrl);}),o.getShareInfo(function(t){moosnow.platform.initShare(t);}),o.loadCfg(function(t){console.log("remote config ",t);}),o}var tt,ot=(t(et,tt=W),et.prototype.initAdService=function(){var o;window[this.platformName]&&(o=this,window[this.platformName].initAdService?window[this.platformName].initAdService({isDebug:!0,appId:this.moosnowConfig.moosnowAppId,success:function(t){console.log("初始化广告"),o.initBanner(),o.initInter(),o._prepareNative();},fail:function(t){console.warn("初始化广告错误 "+t.code+"  "+t.msg);},complete:function(t){console.log("initAdService  complete");}}):(console.log("初始化广告"),o.initBanner(),o.initInter(),o._prepareNative()),moosnow.event.addListener(g.ON_PLATFORM_SHOW,this,this.onAppShow));},et.prototype.navigate2Mini=function(t,o,e,n){var i,r,a,s,h=this;console.log(C,t),Date.now()-this.prevNavigate<300?console.log(S):(this.prevNavigate=Date.now(),window[this.platformName]?(i=t.appid,r=t.path,s=t.extraData,a=t.pkgName,s=s||{},this.supportVersion(1044)?window[this.platformName].navigateToMiniGame({appId:i,path:r,pkgName:a||i,extraData:s,success:function(){window[h.platformName]&&window[h.platformName].aldSendEvent&&window[h.platformName].aldSendEvent("跳转",{position:t.position,appid:i,img:t.atlas||t.img}),moosnow.http.exportUser(),o&&o();},fail:function(t){console.log("navigateToMiniProgram error ",t),e&&e();},complete:function(){n&&n();}}):console.log(U)):o&&o());},et.prototype.supportVersion=function(t){return this.getSystemInfoSync().platformVersion>=t},et.prototype._onBannerError=function(t){console.warn("banner___error:",t.errCode," msg ",t.errMsg),this.banner&&(this.banner.hide(),this.banner.offResize(this._bottomCenterBanner),this.banner.offError(this._onBannerError),this.banner.offLoad(this._onBannerLoad),this.banner.offHide(),this.banner.destroy(),this.banner=null);},et.prototype._prepareBanner=function(){var t,o;window[this.platformName].createBannerAd&&(o=(t=this.getSystemInfoSync()).windowWidth,(!this.isLandscape(t.windowHeight,t.windowWidth)||o<this.bannerWidth)&&(this.bannerWidth=o),this.banner&&(this.banner.offResize(this._bottomCenterBanner),this.banner.offError(this._onBannerError),this.banner.offLoad(this._onBannerLoad),this.banner.offHide()),this.banner=this._createBannerAd(),this.banner.onResize(this._bottomCenterBanner.bind(this)),this.banner.onError(this._onBannerError.bind(this)),this.banner.onLoad(this._onBannerLoad.bind(this)),this.banner.onHide(this._onBannerHide.bind(this)));},et.prototype._createBannerAd=function(){if(window[this.platformName]&&window[this.platformName].createBannerAd){var t=this.getSystemInfoSync(),o=t.windowWidth,e=t.windowHeight,n=(o-this.bannerWidth)/2;if(!p.isEmpty(this.bannerId)){var i=e-this.bannerHeigth;return window[this.platformName].createBannerAd({adUnitId:this.bannerId,style:{top:i,left:n,width:this.bannerWidth}})}console.warn(N);}},et.prototype._bottomCenterBanner=function(t){var o=this.getSystemInfoSync(),e=o.windowWidth,n=o.windowHeight,i=o.statusBarHeight,r=o.notchHeight||0;this.bannerWidth=t.width,this.bannerHeigth=t.height,this.banner.style.left=(e-t.width)/2;var a=n-this.bannerHeigth,a=this.bannerPosition==m.BOTTOM?n-this.bannerHeigth:this.bannerPosition==m.CENTER?(n-this.bannerHeigth)/2:this.bannerPosition==m.TOP?this.isLandscape(o.windowHeight,o.windowWidth)?0:i+r:this.bannerStyle.top;this.banner.style.top=a,console.log("_bottomCenterBanner  ",this.banner.style);},et.prototype._resetBanenrStyle=function(t){var o=this.getSystemInfoSync(),e=(o.windowWidth,o.windowHeight),n=o.statusBarHeight,i=o.notchHeight||0;isNaN(this.bannerWidth)||(this.banner.style.width=this.bannerWidth),isNaN(this.bannerHeight)||(this.banner.style.height=this.bannerHeight);var r=e-this.bannerHeigth,r=this.bannerPosition==m.BOTTOM?e-this.bannerHeigth:this.bannerPosition==m.CENTER?(e-this.bannerHeigth)/2:this.bannerPosition==m.TOP?this.isLandscape(o.windowHeight,o.windowWidth)?0:n+i:this.bannerStyle.top;this.banner.style.top=r,console.log("_resetBanenrStyle ",this.banner.style,"set styleTop ",r);},et.prototype._onBannerHide=function(){console.log("banner 已隐藏 ");},et.prototype.destroyBanner=function(){this.banner&&(this.banner.hide(),this.banner.offResize(this._bottomCenterBanner),this.banner.offError(this._onBannerError),this.banner.offLoad(this._onBannerLoad),this.banner.offHide(),this.banner.destroy(),this.banner=null);},et.prototype.showBanner=function(t,o,e,n){var i=this;void 0===t&&(t=!0),void 0===e&&(e=m.BOTTOM),console.log(I),this.bannerCb=o,this.isBannerShow=!0,window[this.platformName]&&(t?moosnow.http.getAllConfig(function(t){0!=t.mistouchNum?(console.log("后台开启了banner，执行显示"),i._showBanner()):console.log("后台关闭了banner，不执行显示");}):this._showBanner());},et.prototype._showBanner=function(){var t=this;this.banner?(this._resetBanenrStyle({width:this.banner.style.width,height:this.banner.style.height}),this.banner.show(),setTimeout(function(){t._resetBanenrStyle({width:t.banner.style.width,height:t.banner.style.height});},500)):this.initBanner();},et.prototype.hideBanner=function(){console.log(b),this.isBannerShow&&window[this.platformName]&&(this.bannerShowCount++,this.banner?this.bannerShowCount>=this.bannerShowCountLimit?(console.log("banner destroy"),this.banner.hide(),this.banner.offResize(this._bottomCenterBanner),this.banner.offError(this._onBannerError),this.banner.offLoad(this._onBannerLoad),this.banner.offHide(),this.banner.destroy(),this.banner=null,console.log("重新创建banner"),this._prepareBanner()):this.banner.hide():this._prepareBanner(),this.isBannerShow=!1);},et.prototype.createRewardAD=function(t){if(!moosnow.platform.videoLoading)if(window[this.platformName]){if(window[this.platformName].createRewardedVideoAd){if(this.video)this.video.offClose(this._onVideoClose),this.video.offError(this._onVideoError),this.video.offLoad(this._onVideoLoad);else{if(p.isEmpty(this.videoId))return void console.warn(O);this.video=window[this.platformName].createRewardedVideoAd({adUnitId:this.videoId});}this.video.onError(this._onVideoError.bind(this)),this.video.onClose(this._onVideoClose.bind(this)),this.video.onLoad(this._onVideoLoad.bind(this)),moosnow.platform.videoLoading=!0,this.video.load();}}else moosnow.platform.videoCb(w.END);},et.prototype._onVideoLoad=function(){console.log(E),moosnow.platform.videoLoading=!1,this.video&&this.video.show();},et.prototype.prepareInter=function(){if(p.isEmpty(this.interId))console.warn(V);else if(window[this.platformName])if(this.supportVersion("1061")){if("function"!=typeof window[this.platformName].createInterstitialAd)return;this.inter=window[this.platformName].createInterstitialAd({adUnitId:this.interId}),this.inter.onLoad(this._onInterLoad.bind(this)),this.inter.onClose(this._onInterClose.bind(this)),this.inter.load();}else{if("function"!=typeof window[this.platformName].createInsertAd)return;this.inter=window[this.platformName].createInsertAd({adUnitId:this.interId}),this.inter.onLoad(this._onInterLoad.bind(this)),this.inter.onShow(this._onInterOnShow.bind(this)),this.inter.load();}},et.prototype.showInter=function(){this.inter?this.inter.show():this.interLoadedShow=!0;},et.prototype._onInterLoad=function(){this.interLoadedShow&&(this.inter?this.inter.show():this.interLoadedShow=!1);},et.prototype._onInterOnShow=function(){this.inter&&this.inter.load();},et.prototype.showAutoBanner=function(){console.log(" oppo 不支持自动");},et.prototype.reportMonitor=function(t,o){window[this.platformName]&&window[this.platformName].reportMonitor&&window[this.platformName].reportMonitor("game_scene",0);},et.prototype._prepareNative=function(){window[this.platformName]&&"function"==typeof window[this.platformName].createNativeAd&&(this.native=window[this.platformName].createNativeAd({adUnitId:parseInt(""+this.nativeId[this.nativeIdIndex])}),this.native.onLoad(this._onNativeLoad.bind(this)),this.native.onError(this._onNativeError.bind(this)),this.nativeLoading=!0);},et.prototype._onNativeLoad=function(t){this.nativeLoading=!1,console.log(x,t),t&&t.adList&&0<t.adList.length?(this.nativeAdResult=t.adList[0],p.isEmpty(this.nativeAdResult.adId)||(console.log(k),this.native.reportAdShow({adId:this.nativeAdResult.adId})),p.isFunction(this.nativeCb)&&this.nativeCb(p.deepCopy(this.nativeAdResult))):(console.log(D),p.isFunction(this.nativeCb)&&this.nativeCb(null));},et.prototype._onNativeError=function(t){this.nativeLoading=!1,this.nativeAdResult=null,20003==t.code?this.nativeIdIndex<this.nativeId.length-1?(console.log(L,t),this.nativeIdIndex+=1,this._destroyNative(),this._prepareNative(),this.nativeCb(null)):(console.log(M),this.nativeIdIndex=0,p.isFunction(this.nativeCb)&&this.nativeCb(null)):(console.log(P,t),p.isFunction(this.nativeCb)&&this.nativeCb(null));},et.prototype._destroyNative=function(){this.nativeLoading=!1,this.native.offLoad(),this.native.offError(),this.native.destroy(),console.log(H);},et.prototype.showNativeAd=function(t){this.nativeCb=t,this.native&&this.native.load();},et.prototype.clickNative=function(t){this.nativeAdResult&&!p.isEmpty(this.nativeAdResult.adId)&&(this.mClickedNativeCallback=t,this.mIsClickedNative=!0,console.log(M,this.nativeAdResult.adId),this.native.reportAdClick({adId:this.nativeAdResult.adId}));},et.prototype.onAppShow=function(){this.mIsClickedNative&&(this.mIsClickedNative=!1,p.isFunction(this.mClickedNativeCallback)&&this.mClickedNativeCallback());},et);function et(){var t=tt.call(this)||this;return t.platformName="qg",t.appSid="",t.bannerWidth=760,t.bannerHeight=96,t.interLoadedShow=!1,t.prevNavigate=Date.now(),t.mIsClickedNative=!1,t._regisiterWXCallback(),t.initAdService(),t}var nt,it=(t(rt,nt=u),rt.prototype.initCoin=function(t){null==moosnow.setting._getValue(this.COIN,null)&&moosnow.setting.setValue(this.COIN,t);},rt.prototype.getCoin=function(){return 0==this.mCoin&&(this.mCoin=moosnow.setting.getInt(this.COIN,0)),this.mCoin},rt.prototype.subCoin=function(t){this.mCoin-=t,moosnow.event.sendEventImmediately(g.COIN_CHANGED,this.mCoin);},rt.prototype.addCoin=function(t){this.mCoin+=t,moosnow.event.sendEventImmediately(g.COIN_CHANGED,this.mCoin);},rt.prototype.setCoin=function(t){this.mCoin=t,moosnow.event.sendEventImmediately(g.COIN_CHANGED,this.mCoin);},rt.prototype.saveCoin=function(){moosnow.setting.setValue(this.COIN,this.mCoin);},rt.prototype.getToken=function(){return p.isEmpty(this.mUserToken)&&(this.mUserToken=moosnow.setting.getString(this.TOKEN,"")),this.mUserToken},rt.prototype.setToken=function(t){moosnow.setting.setValue(this.TOKEN,t);},rt.prototype.getCurrentMisTouchCount=function(){return this.mCurrentMisTouchCount},rt.prototype.setCurrentMisTouchCount=function(t){this.mCurrentMisTouchCount=t;},rt.prototype.getChannelId=function(){return this.mChannel_id},rt.prototype.setChannelId=function(t){this.mChannel_id=t;},rt.prototype.getChannelAppId=function(){return this.mChannel_appid},rt.prototype.setChannelAppId=function(t){this.mChannel_appid=t;},rt.prototype.getVibrateSetting=function(){return moosnow.setting.getBool(this.VIBRATE_SWITCH,!0)},rt.prototype.setVibrateSetting=function(t){moosnow.setting.setBool(this.VIBRATE_SWITCH,t),moosnow.event.sendEventImmediately(g.VIBRATESWITCH_CHANGED,t);},rt.prototype.getPrizeBox=function(){return this.mPrizeBox||(this.mPrizeBox={}),this.mPrizeBox},rt.prototype.clearPrizeBox=function(){this.mPrizeBox={};},rt.prototype.lockPrizeBox=function(t,o,e){void 0===e&&(e=0);var n=this.getPrizeBox();n[t]={prizeId:t,type:0==o?0:1,coinNum:e},this.mPrizeBox=n;},rt.prototype.getUserPrizeBoxById=function(t){return this.getPrizeBox()[t]},rt.prototype.getPrizeKey=function(){return null==this.mPrizeKey&&(this.mPrizeKey=3),this.mPrizeKey},rt.prototype.addPrizeKey=function(t){this.mPrizeKey+=t;},rt.prototype.clearPrizeKey=function(){this.mPrizeKey=null,moosnow.setting.setValue(this.USER_PRIZE_KEY,"");},rt);function rt(){var t=null!==nt&&nt.apply(this,arguments)||this;return t.TOKEN="MOOSNOW_SDK_TOKEN",t.COIN="MOOSNOW_SDK_COIN",t.mUserToken="",t.VIBRATE_SWITCH="MOOSNOW_VIBRATE_SWITCH",t.USER_PRIZE_KEY="MOOSNOW_USER_PRIZE_KEY",t.mCoin=0,t.mCurrentMisTouchCount=0,t.mChannel_id="0",t.mChannel_appid="0",t}var at,st=(t(ht,at=u),ht.prototype.onEnable=function(){},ht.prototype.getInt=function(t,o){var e=this._getValue(t,o);return parseInt(e)},ht.prototype.getFloat=function(t,o){var e=this._getValue(t,o);return parseFloat(e)},ht.prototype.getBool=function(t,o){var e=1==o?"true":"false";return "true"==this.getString(t,e)},ht.prototype.getString=function(t,o){return this._getValue(t,o)},ht.prototype.getObject=function(t,o){var e=this._getValue(t,o);return e&&""!=e?JSON.parse(e):null},ht.prototype.setObject=function(t,o){var e="";o&&(e=JSON.stringify(o)),this.setValue(t,e);},ht.prototype.setBool=function(t,o){1==o?this.setValue(t,"true"):this.setValue(t,"false");},ht.prototype.setValue=function(t,o){window.localStorage.setItem(t,o);},ht.prototype.appendInt=function(t,o){var e=this.getInt(t,0),n=parseInt(o)+e;return this.setValue(t,n),n},ht.prototype.appendFloat=function(t,o){var e=this.getFloat(t,0),n=parseFloat(o)+e;this.setValue(t,n);},ht.prototype.removeValueOfKey=function(t){window.localStorage.removeItem(t);},ht.prototype.removeAll=function(){window.localStorage.clear();},ht.prototype._getValue=function(t,o){var e=window.localStorage.getItem(t);return null!=e&&""!=e||(e=o),e},ht);function ht(){return at.call(this)||this}var lt,ct=(t(pt,lt=X),pt.prototype.getRemoteAd=function(o){var t=this,e=Y+"/exportConfig/"+p.config.moosnowAppId+".json?t="+Date.now();moosnow.http.request(e,{},"GET",function(t){o(t),console.log("WXAdModule getRemoteAd",t);},function(){lt.prototype.getRemoteAd.call(t,o),console.log("getRemoteAd fail");},function(){console.log("getRemoteAd complete");});},pt);function pt(){return null!==lt&&lt.apply(this,arguments)||this}var dt,ut=(t(ft,dt=X),ft.prototype.getRemoteAd=function(o){var e=this,t=Y+"/exportConfig/"+p.config.moosnowAppId+".json?t="+Date.now();moosnow.http.request(t,{},"GET",function(t){o(t),console.log("WXAdModule getRemoteAd",t);},function(t){e.mErrorNum++,e.mErrorNum<4?e.getRemoteAd(o):(e.mErrorNum=0,e.repairAd(o)),console.log("getRemoteAd fail");},function(){console.log("getRemoteAd complete");});},ft.prototype.repairAd=function(o){var t=this.baseUrl+"wx_export/getExport",e={appid:p.config.moosnowAppId};moosnow.http.request(t,e,"POST",function(t){t.data.sort(function(){return .5<Math.random()?1:-1}),o&&o(t.data);},function(){o([]),console.log("getRemoteAd fail");},function(){console.log("getRemoteAd complete");});},ft);function ft(){var t=null!==dt&&dt.apply(this,arguments)||this;return t.mErrorNum=0,t}var mt,wt={ARTICLE:"article",VIDEO:"video",TOKEN:"token",LINK:""},gt=function(){},vt=(t(yt,mt=W),yt.prototype._registerTTCallback=function(){var o=this;window[this.platformName]&&(window[this.platformName].onMoreGamesModalClose&&window[this.platformName].onMoreGamesModalClose(function(t){console.log("modal closed",t),o.moreGameCb&&o.moreGameCb(0);}),window[this.platformName].onNavigateToMiniGameBox?window[this.platformName].onNavigateToMiniGameBox(function(t){console.log("onNavigateToMiniGameBox",t);}):window[this.platformName].onNavigateToMiniProgram&&window[this.platformName].onNavigateToMiniProgram(function(t){console.log("onNavigateToMiniProgram",t);}));},yt.prototype.showInter=function(){var t,o=this;window[this.platformName]&&window[this.platformName].createInterstitialAd&&(p.isEmpty(this.interId)?console.warn(V):(this.inter&&this.inter.destroy(),this.inter=window[this.platformName].createInterstitialAd({adUnitId:this.interId}),(t=this.inter.load())&&t.then(function(){o.inter.show();}).catch(function(t){console.log(t);})));},yt.prototype._bottomCenterBanner=function(t){var o=this.getSystemInfoSync(),e=o.windowWidth,n=o.windowHeight;this.bannerWidth=t.width,this.bannerHeigth=t.height;var i=n-this.bannerHeigth;this.banner&&(this.banner.style.top=i,this.banner.style.left=(e-this.bannerWidth)/2);},yt.prototype.initRecord=function(){window[this.platformName]&&window[this.platformName].getGameRecorderManager&&(this.recordObj=window[this.platformName].getGameRecorderManager());},yt.prototype.clipRecord=function(t){void 0===t&&(t=[2,2]),this.recordObj&&(this.recordNumber++,console.log("clipRecord",this.recordNumber),this.recordObj.recordClip({timeRange:t,success:function(t){console.log("clipRecord 成功 ",t);}}));},yt.prototype.startRecord=function(t,o){var e=this;void 0===t&&(t=300),void 0===o&&(o=null),console.log("record startRecord"),this.recordObj?(this.recordNumber=0,this.recordCb=null,this.recordRes=null,this.recordObj.onStart(function(t){console.log("record onStart"),o&&o(t);}),this.recordRes,this.recordObj.onStop(function(t){console.log("on stop ",t),4<=e.recordNumber?e.recordObj.clipVideo({path:t.videoPath,success:function(t){console.log("record clip succes:",t),e.recordRes=t,console.log("record clip recordRes :",e.recordRes),e.recordCb&&e.recordCb(t);},fail:function(){console.log("record clip fail:",t),e.recordRes=t,e.recordCb&&e.recordCb(t);}}):(e.recordRes=t,e.recordCb&&e.recordCb(t));}),this.recordObj.start({duration:t})):o&&o(!1);},yt.prototype.stopRecord=function(t){void 0===t&&(t=null),console.log(" stop Record  callback  ",!!t),this.recordObj?(console.log("record stop recordRes ",this.recordRes),this.recordRes?p.isFunction(t)&&t(this.recordRes):(this.recordCb=t,this.recordObj.stop(),console.log("record stop  ",this.recordRes))):t&&t(!1);},yt.prototype.pauseRecord=function(){this.recordObj&&this.recordObj.pause();},yt.prototype.resumeRecord=function(){this.recordObj&&this.recordObj.resume();},yt.prototype.share=function(t,o,e){void 0===t&&(t={}),this.currentShareCallback=o,this.currentShortCall=e,console.log("是否有回调：",e);var n=this._buildShareInfo(t);console.log("shareInfo:",n),window[this.platformName]&&window[this.platformName].shareAppMessage?window[this.platformName].shareAppMessage(n):this.currentShareCallback(!0);},yt.prototype._buildShareInfo=function(t){var o,e=this,n="",i="";0<this.shareInfoArr.length&&(n=(o=this.shareInfoArr[l.randomNumBoth(0,this.shareInfoArr.length-1)]).title,i=o.img);var r=wt.LINK;t&&-1!=[wt.LINK,wt.ARTICLE,wt.TOKEN,wt.VIDEO].indexOf(t.channel)&&(r=t.channel);var a=this.recordRes&&this.recordRes.videoPath?this.recordRes.videoPath:"";return console.log("video path ",a),{channel:r,title:n,imageUrl:i,query:moosnow.http._object2Query(t),extra:{videoPath:a,videoTopics:[n]},success:function(){console.log("share video success "),e.currentShareCallback&&e.currentShareCallback(!0);},fail:function(t){console.log("share video fail ",t),console.log("index of : ",t.errMsg.indexOf("short")),t&&t.errMsg&&-1!=t.errMsg.indexOf("short")&&e.currentShortCall&&(console.log("时间太短 执行回调",e.currentShortCall),e.currentShortCall(t)),e.currentShareCallback&&e.currentShareCallback(!1);}}},yt.prototype._onBannerLoad=function(){this.bannerShowCount=0,this.mBannerLoaded=!0,this.isBannerShow&&this.showBanner();},yt.prototype._prepareBanner=function(){this.mBannerLoaded=!1,mt.prototype._prepareBanner.call(this);},yt.prototype._resetBanenrStyle=function(t){var o,e,n,i;p.isEmpty(t)?console.log("设置的banner尺寸为空,不做调整"):(e=(o=this.getSystemInfoSync()).windowWidth,n=o.windowHeight,i=0,this.isLandscape(n,e),this.bannerPosition==m.BOTTOM?i=n-this.bannerHeigth-30:this.bannerPosition==m.CENTER?i=(n-this.bannerHeigth)/2:this.bannerPosition==m.TOP&&(i=0),this.bannerStyle?this.banner.style=this.bannerStyle:(this.banner.style.top=i,console.log(_,this.banner.style,this.banner)));},yt.prototype.showBanner=function(t,o,e,n){var i=this;void 0===t&&(t=!0),void 0===e&&(e=m.BOTTOM),console.log(I),this.bannerCb=o,this.isBannerShow=!0,this.mBannerLoaded&&window[this.platformName]&&(this.bannerPosition=e,this.bannerStyle=n,t?moosnow.http.getAllConfig(function(t){0!=t.mistouchNum?(console.log("后台开启了banner，执行显示"),i._showBanner()):console.log("后台关闭了banner，不执行显示");}):this._showBanner());},yt.prototype._showBanner=function(){var t,o=this;this.banner&&(console.log("show banner style ",this.banner.style),this.banner.hide(),this._resetBanenrStyle({width:this.banner.style.width,height:this.banner.style.realHeight}),(t=this.banner.show())&&t.then(function(){o._resetBanenrStyle({width:o.banner.style.width,height:o.banner.style.realHeight});}));},yt.prototype.showAppBox=function(t,o){var e=this;void 0===o&&(o=!0),this.moreGameCb=t,window[this.platformName]&&window[this.platformName].showMoreGamesModal&&moosnow.http.getAllConfig(function(t){(!o||t&&1==t.showAppBox)&&e._showMoreGamesModal();});},yt.prototype._getAppLaunchOptions=function(o){var e=[];moosnow.ad.getAd(function(t){0!=t.indexLeft.length&&(t.indexLeft.forEach(function(t){var o=new gt;o.appId=t.appid,o.query=t.path||"1=1",o.extraData=t.extraData||{},e.push(o);}),console.log("appLaunchOptions",e),o(e));});},yt.prototype._showMoreGamesModal=function(){var o=this;"ios"!=this.getSystemInfoSync().platform&&this._getAppLaunchOptions(function(t){console.log("_showMoreGamesModal appLaunchOption",t),window[o.platformName].showMoreGamesModal({appLaunchOptions:t,success:function(t){console.log("show app box success",t);},fail:function(t){console.log("show app box fail",t);}});});},yt.prototype.showMoreGameBanner=function(){var t,e,o;window[this.platformName]&&(!window[this.platformName].createMoreGamesBanner||"ios"!=(t=this.getSystemInfoSync()).platform&&"ios"!==t.platform&&(e=[],moosnow.ad.getAd(function(t){0!=t.indexLeft.length&&t.indexLeft.forEach(function(t){var o=new gt;o.appId=t.appid,o.query=t.path||"1=1",o.extraData=t.extraData||{},e.push(o);});}),(o=window[this.platformName].createMoreGamesBanner({style:{left:20,top:0,width:150,height:40},appLaunchOptions:e,success:function(t){console.log("show app box success",t.errMsg);},fail:function(t){console.log("show app box fail",t.errMsg);}})).show(),o.onTap(function(){console.log("点击跳转游戏盒子");})));},yt.prototype.showMoreGameButton=function(t,n,o){var e,i,r=this;void 0===o&&(o=null),window[this.platformName]&&window[this.platformName].createMoreGamesButton&&(e={left:this.getSystemInfoSync().windowWidth-80-30,top:40,width:80,height:80,lineHeight:80,backgroundColor:"#ff0000",textColor:"#ffffff",textAlign:"center",fontSize:16,borderRadius:0,borderWidth:1,borderColor:"#ff0000"},i=s(s({},e),o),this._moreGameBotton?this._moreGameBotton.show():this._getAppLaunchOptions(function(e){cc.loader.loadRes("texture/game/more.png",cc.Texture2D,function(t,o){t||(r._moreGameBotton=window[r.platformName].createMoreGamesButton({type:"image",image:o.url,actionType:"box",style:i,appLaunchOptions:e,onNavigateToMiniGame:function(t){console.log("跳转其他小游戏",t),n&&n(1,t);}}),r._moreGameBotton.show(),r._moreGameBotton.onTap(function(){console.log("点击更多游戏"),n&&n(2,null);}));});}));},yt.prototype.hideMoreGameButton=function(){this._moreGameBotton&&this._moreGameBotton.hide();},yt.prototype.isIphone=function(){return !!window[this.platformName]&&"ios"==this.getSystemInfoSync().platform},yt.prototype.navigate2Mini=function(t,o,e,n){console.log("tt navigate2Mini "),this.showAppBox(function(){console.log("tt showAppBox close ");},!1);},yt.prototype.checkFollowAwemeSate=function(e,o){window[this.platformName]&&window[this.platformName].checkFollowAwemeState?window[this.platformName].checkFollowAwemeState({success:function(t){console.log("---- check success, res:",t);var o=t.hasFollowed;e(o);},fail:function(t){o(t);},complete:function(t){}}):e(!0);},yt.prototype.openAwemeUserProile=function(e,o){window[this.platformName]&&window[this.platformName].openAwemeUserProfile?window[this.platformName].openAwemeUserProfile({success:function(t){console.log("---- open success, res: ",t);var o=t.hasFollowed;e(o);},fail:function(t){o(t);},complete:function(t){}}):e(!0);},yt);function yt(){var t=mt.call(this)||this;return t.platformName="tt",t.recordRes=null,t.recordCb=null,t.recordNumber=0,t.moreGameCb=null,t.mBannerLoaded=!1,t._regisiterWXCallback(),t._registerTTCallback(),t.initBanner(),t.initRecord(),t.scheduleOnce(function(){t.initVideo();},1),t.bannerWidth=208,t}var bt,Nt=(t(It,bt=W),It.prototype._createBannerAd=function(){if(window[this.platformName]&&window[this.platformName].createBannerAd){var t=this.bannerHeigth=Math.round(this.bannerWidth/300*72.8071),o=this.getSystemInfoSync(),e=o.screenWidth,n=o.screenHeight,i=(e-this.bannerWidth)/2,r=n-t/2;if(!p.isEmpty(this.bannerId)){console.log("create banner by banner id ",this.bannerId);var a={top:r,left:i,width:this.bannerWidth,height:t};return console.log("create banner style ",a),window[this.platformName].createBannerAd({adUnitId:this.bannerId,style:a})}console.warn(N);}},It.prototype.showBanner=function(t,o,e,n){var i=this;void 0===t&&(t=!0),void 0===e&&(e=m.BOTTOM),console.log(I),this.bannerCb=o,this.isBannerShow=!0,window[this.platformName]&&(this.bannerPosition=e,this.bannerStyle=n,t?moosnow.http.getAllConfig(function(t){0!=t.mistouchNum?(console.log("后台开启了banner，执行显示"),i._showBanner()):console.log("后台关闭了banner，不执行显示");}):this._showBanner());},It.prototype._showBanner=function(){var t,o=this;!this.banner||(t=this.banner.show())&&t.then(function(){o._resetBanenrStyle({});});},It.prototype._bottomCenterBanner=function(t){console.log("Resize后正式宽高:",t.width,t.height);},It.prototype._resetBanenrStyle=function(t){var o=this.getSystemInfoSync(),e=(o.windowWidth,o.windowHeight),n=0,n=this.bannerPosition==m.BOTTOM?e-this.bannerHeigth:this.bannerPosition==m.CENTER?(e-this.bannerHeigth)/2:this.bannerPosition==m.TOP?0:this.bannerStyle.top;this.banner&&this.banner.style&&(this.banner.style.top=n);},It.prototype.showAppBox=function(t,o){var e=this;void 0===o&&(o=!0),window[this.platformName]&&window[this.platformName].createAppBox&&(this.mOnBoxCallback=t,console.log("showAppBox"),moosnow.http.getAllConfig(function(t){!o||t&&1==t.showAppBox?(e.box||(e.box=window[e.platformName].createAppBox({adUnitId:e.moosnowConfig.boxId}),e.box.onClose(e.onBoxClose.bind(e))),e.box.load().then(function(){e.box.show();})):(p.isFunction(e.mOnBoxCallback)&&e.mOnBoxCallback(-1),console.log("后台不允许显示Box，如有需要请联系运营"));}));},It.prototype.hideAppBox=function(t){var o,e=this;this.box&&(this.box.offClose(this.onBoxClose),o=this.box.destroy(),console.log("box destroy ",o),o&&o.then(function(){console.log("destroy successfully ",o),e.box=null,p.isFunction(t)&&t(!0);}).catch(function(){console.log("destroy fail ",o),e.box=null,p.isFunction(t)&&t(!1);}));},It.prototype.onBoxClose=function(){p.isFunction(this.mOnBoxCallback)&&this.mOnBoxCallback(0);},It);function It(){var t=bt.call(this)||this;return t.platformName="qq",t._regisiterWXCallback(),t.initBanner(),t}var _t,St=function(){this.appid="",this.boxAppid="",this.desc="",this.img="",this.path="",this.title="",this.atlas="",this.pkgName="",this.extraData="",this.position="",this.onCancel=null,this.index=0,this.refresh=!1,this.showIds=null,this.source=null;},Ct=(t(At,_t=X),At.prototype.getRemoteAd=function(a){var t={apk_id:moosnow.platform.moosnowConfig.moosnowAppId};moosnow.http.request("https://platform.qwpo2018.com/api/apk_ad/index",t,"POST",function(t){var o=t.data;if(o.sort(function(){return .5<Math.random()?1:-1}),console.log("接口数据",t.data),a){for(var e=[],n=0;n<o.length;n++){var i=o[n],r=new St;r.appid=i.link_appid,r.img=i.link_img,r.path=i.link_path,r.title=i.link_name,r.pkgName=i.link_page,r.desc=i.link_des,e.push(r);}a(e);}},function(){a([]),console.log("getRemoteAd fail");},function(){console.log("getRemoteAd complete");});},At);function At(){return null!==_t&&_t.apply(this,arguments)||this}var Ot,Et=(t(Bt,Ot=ot),Bt.prototype.checkVersion=function(t,e){var n=this;moosnow.http.loadCfg(function(t){var o=Ot.prototype.checkLog.call(n,t.zs_version);e(o);});},Bt.prototype.login=function(o,e){window[this.platformName]?window[this.platformName].login({success:function(t){moosnow.http.request("https://platform.qwpo2018.com/api/oppo_login/index",{apk_id:moosnow.platform.moosnowConfig.moosnowAppId,code:t.data.token},"POST",function(t){moosnow.data.setToken(t.data.user_id),o&&o(t.data),console.log("platformLogin success ",t);},function(t){o&&o(null),console.log("platformLogin fail ",t);});},fail:function(t){e&&e(t);}}):o&&o();},Bt.prototype.navigate2Mini=function(t,o,e,n){var i=this;Ot.prototype.navigate2Mini.call(this,t,function(){i.navigateCallback(t.appid),p.isFunction(o)&&o();},e,n);},Bt.prototype.navigateCallback=function(t){var o={user_id:moosnow.data.getToken(),apk_id:moosnow.platform.moosnowConfig.moosnowAppId,appid:t,link_id:t};console.log("跳转数据上报",o),moosnow.http.request("https://platform.qwpo2018.com/api/apk_ad/click_log",o,"POST",function(t){console.log("跳转数据上报成功",t);},function(t){console.log("跳转数据上报失败",t);},function(){console.log("upload navigate complete");});},Bt);function Bt(){return null!==Ot&&Ot.apply(this,arguments)||this}var Tt,xt=(t(Lt,Tt=W),Lt.prototype._createBannerAd=function(){if(window[this.platformName]&&window[this.platformName].createBannerAd){var t=this.getSystemInfoSync(),o=t.screenWidth,e=t.screenHeight;if(!p.isEmpty(this.bannerId))return window[this.platformName].createBannerAd({adUnitId:this.bannerId,appSid:this.appSid,style:{top:e,width:o}});console.warn(N);}},Lt.prototype.createRewardAD=function(t){var o=this;this.videoLoading||window[this.platformName].createRewardedVideoAd&&(this.video?(this.video.offClose(this._onVideoClose),this.video.offError(this._onVideoError),this.video.offLoad(this._onVideoLoad)):this.video=window[this.platformName].createRewardedVideoAd({adUnitId:this.videoId,appSid:this.appSid}),this.video.onError(this._onVideoError),this.video.onClose(this._onVideoClose),this.video.onLoad(this._onVideoLoad),this.videoLoading=!0,this.video.load().then(function(){t&&o.video.show().then(function(){}).catch(function(t){o._onVideoError(t.errMsg,t.errCode),console.log(t.errMsg);});}).catch(function(t){o._onVideoError(t.errMsg,t.errCode),console.log(t.errMsg);}));},Lt.prototype.initRecord=function(){var t;window[this.platformName]&&(t=this.getSystemInfoSync().brand.toLowerCase(),/huawei/.test(t)||/honor/.test(t)||(this.recordObj=window[this.platformName].getVideoRecorderManager()));},Lt.prototype.startRecord=function(t,o){var e=this;void 0===t&&(t=120),void 0===o&&(o=null),console.log("record startRecord"),this.recordRes=null,this.recordCb=null,this.recordObj?(this.recordObj.onStart(function(t){console.log("record onStart"),o&&o(t);}),this.recordObj.onStop(function(t){e.recordRes=t,e.recordCb&&(console.log("stop 2"),e.recordCb(t));}),this.recordObj.start({duration:t})):o&&o(!1);},Lt.prototype.stopRecord=function(t){void 0===t&&(t=null),console.log("record stopRecord"),this.recordObj?this.recordRes?(console.log("stop 1"),t(this.recordRes)):(this.recordCb=t,this.recordObj.stop()):t&&t(!1);},Lt);function Lt(){var t=Tt.call(this)||this;return t.platformName="swan",t.bannerId="",t.videoId="",t.appSid="",t.recordRes=null,t.recordCb=null,t}var Pt,Mt=(t(Rt,Pt=J),Rt.prototype.getMisTouchNum=function(o){this.loadCfg(function(t){o(parseInt(t.mistouchNum));});},Rt.prototype.getMistouchPosNum=function(o){this.loadCfg(function(t){o(parseInt(t.mistouchPosNum));});},Rt.prototype.getBannerShowCountLimit=function(o){this.loadCfg(function(t){isNaN(t.bannerShowCountLimit)?o(5):o(parseInt(t.bannerShowCountLimit));});},Rt.prototype.getAllConfig=function(o){this.loadCfg(function(t){o(t);});},Rt.prototype.loadCfg=function(e){var t,n=this;this.cfgData?e(this.cfgData):(t=moosnow.platform.moosnowConfig.url+"?t="+Date.now(),console.log("appid ",moosnow.platform.moosnowConfig.moosnowAppId),this.request(t,{apk_id:moosnow.platform.moosnowConfig.moosnowAppId},"POST",function(t){var o=t.data.zs_version==moosnow.platform.moosnowConfig.version;n.cfgData=s(s({},p.deepCopy(t.data)),{mistouchNum:t.data.zs_switch,mistouchPosNum:t.data.zs_switch,showNative:o,showInter:o,showExportAd:o,mx_native_click_switch:1==t.zs_native_click_switch,mx_jump_switch:1==t.zs_jump_switch,bannerShowCountLimit:isNaN(t.data.bannerShowCountLimit)?1:t.data.bannerShowCountLimit}),moosnow.platform&&(moosnow.platform.bannerShowCountLimit=parseInt(t.data.bannerShowCountLimit)),e(n.cfgData);},function(){e({}),console.log("load config json fail");}));},Rt);function Rt(){return null!==Pt&&Pt.apply(this,arguments)||this}var kt={FAIL:"请分享到群！"},Dt={ERR:"视频正在加载中,请稍后",NOTEND:"请完整观看完视频！"},Ht=(Vt.prototype.shuffle=function(t){for(var o,e,n=t.length,i=n;i--;)i!==(e=Math.floor(Math.random()*n))&&(o=t[i],t[i]=t[e],t[e]=o);return t},Vt.prototype.indexOf=function(t,o){for(var e=-1,n=0,i=t.length;n<i;n++)if(t[n]==o){e=n;break}return e},Vt.prototype.replace=function(t,o,e){var n=t[o],i=t[e];t[e]=n,t[o]=i;},Vt.prototype.merge=function(t,o){for(var e=0,n=t.length;e<n;e++)o.push(t[e]);return o},Vt.clone=function(t){return new Array,t.slice(0)},Vt.remove=function(t,o){for(var e=0;e<t.length;e++)if(t[e]==o)return t.splice(e,1),void e--},Vt);function Vt(){}var Ft,Ut=(t(Wt,Ft=u),Wt.prototype.addListener=function(t,o,e){this._addListener(t,o,!1,e);},Wt.prototype.addToSendQueue=function(t,o){this._addToSendList(t,o);},Wt.prototype.sendEventImmediately=function(t,o){this._sendEvent(t,o),this.onUpdate();},Wt.prototype.removeListener=function(t,o){if(null!=t&&""!=t)for(var e=0;e<this._eventList.length;e++){var n=this._eventList[e];if(n.eventName===t){for(var i=0;i<n.listeners.length;i++){var r=n.listeners[i];if(r.target===o){Ht.remove(n.listeners,r);break}}0==n.listeners.length&&Ht.remove(this._eventList,n);break}}else console.error("eventName:"+t+"不合法！");},Wt.prototype.removeAllListener=function(){this._eventList.length=0,this._eventList=[],this._waitingForSendList.length=0,this._waitingForSendList=[];},Wt.prototype._addListener=function(t,o,e,n){if(null!=t&&""!=t){var i=new Gt;n instanceof Function?i.callback=n:console.error("callback不是一个方法"),o?i.target=o:console.error("target为空"),i.once=e;var r=!1;if(0<this._eventList.length){for(var a,s=0;s<this._eventList.length;s++){var h=this._eventList[s];if(t===h.eventName)return h.listeners.push(i),void(r=!0)}r||((a=new qt).eventName=t,a.listeners.push(i),this._eventList.push(a));}else{var l=new qt;l.eventName=t,l.listeners.push(i),this._eventList.push(l);}}else console.error("eventName:"+t+"不合法！");},Wt.prototype._addToSendList=function(t,o){var e;null!=t&&""!=t?(e={eventName:t,data:o},this._waitingForSendList.push(e)):console.error("eventName:"+t+"不合法！");},Wt.prototype._sendEvent=function(t,o){for(var e=this._eventList,n=0;n<e.length;n++){var i=e[n];if(i.eventName===t)for(var r=i.listeners,a=r.length-1;0<=a;a--){var s=r[a],h=s.callback,l=s.target;l?(h.call(l,o),s.once&&this._eventList[n].listeners[a]&&(Ht.remove(this._eventList[n].listeners,s),n--)):(Ht.remove(this._eventList[n].listeners,s),a--);}}},Wt.prototype.onUpdate=function(){if(0!=this._waitingForSendList.length)for(var t=0;t<this._waitingForSendList.length;t++){var o=this._waitingForSendList[t];this._sendEvent(o.eventName,o.data),Ht.remove(this._waitingForSendList,o),t--;}},Wt.prototype.onDisable=function(){},Wt);function Wt(){var t=Ft.call(this)||this;return t._eventList=[],t._waitingForSendList=[],t._eventList=[],t._waitingForSendList=[],t}var jt,Gt=function(){this.callback=null,this.target=[],this.once=!1,this.callback=null,this.target=null,this.once=!1;},qt=function(){this.eventName="",this.listeners=[],this.eventName="",this.listeners=[];},zt=(t(Kt,jt=W),Kt.prototype.initAdService=function(){this._prepareNative(),moosnow.event.addListener(g.ON_PLATFORM_SHOW,this,this.onAppShow);},Kt.prototype.navigate2Mini=function(t,o,e,n){var i,r,a,s,h=this;console.log(C,t),Date.now()-this.prevNavigate<300?console.log(S):(this.prevNavigate=Date.now(),window[this.platformName]?(i=t.appid,r=t.path,s=t.extraData,a=t.pkgName,s=s||{},this.supportVersion(1044)?window[this.platformName].navigateToMiniGame({appId:i,path:r,pkgName:a||i,extraData:s,success:function(){window[h.platformName]&&window[h.platformName].aldSendEvent&&window[h.platformName].aldSendEvent("跳转",{position:t.position,appid:i,img:t.atlas||t.img}),moosnow.http.exportUser(),o&&o();},fail:function(t){console.log("navigateToMiniProgram error ",t),e&&e();},complete:function(){n&&n();}}):console.log(U)):o&&o());},Kt.prototype.supportVersion=function(t){return this.getSystemInfoSync().platformVersionCode>=t},Kt.prototype._onBannerError=function(t){console.warn("banner___error:",t.errCode," msg ",t.errMsg);},Kt.prototype.getSystemInfoSync=function(){return null==this.systemInfo&&(window[this.platformName]&&window[this.platformName].getSystemInfoSync?this.systemInfo=window[this.platformName].getSystemInfoSync():this.systemInfo={},console.log(A,this.systemInfo)),this.systemInfo},Kt.prototype._createBannerAd=function(){if(window[this.platformName]&&window[this.platformName].createBannerAd){var t=Date.now();if(this.mShowTime||(this.mShowTime=t),!this.mShowTime||this.mShowTime&&t-this.mShowTime<=1e3*this.mMinInterval)console.log("banner创建太频繁了 "+this.mMinInterval+"秒内只能显示一次");else{this.mShowTime=Date.now();var o=this.getSystemInfoSync(),e=o.screenWidth,n=o.screenHeight,i=o.statusBarHeight,r=(o.pixelRatio,this.getNotchHeight()),a=(e-this.bannerWidth)/2;if(!p.isEmpty(this.bannerId)){var s={top:this.bannerPosition==m.BOTTOM?n-this.bannerHeight:this.bannerPosition==m.CENTER?(n-this.bannerHeight)/2:this.bannerPosition==m.TOP?this.isLandscape(o.screenHeight,o.screenWidth)?0:i+r:this.bannerStyle.top,left:a,width:this.bannerWidth,height:this.bannerHeight};return window[this.platformName].createBannerAd({posId:this.bannerId,style:s})}console.warn(N);}}},Kt.prototype.getNotchHeight=function(){var t=0;return window[this.platformName].getNotchHeightSync&&(t=window[this.platformName].getNotchHeightSync().height),t},Kt.prototype._bottomCenterBanner=function(t){this.bannerHeight=t.realHeight,this.bannerWidth=t.realWidth,console.log("onSize callback  ",t);},Kt.prototype._onBannerClose=function(){console.log("banner 已关闭 ");},Kt.prototype._onBannerHide=function(){console.log("banner 已隐藏 ");},Kt.prototype.showBanner=function(t,o,e,n){var i=this;void 0===t&&(t=!0),void 0===e&&(e=m.BOTTOM),this.bannerCb=o,this.isBannerShow=!0,window[this.platformName]&&(this.bannerPosition=e,this.bannerStyle=n,t?moosnow.http.getAllConfig(function(t){0!=t.mistouchNum?(console.log("后台开启了banner，执行显示"),i._showBanner()):console.log("后台关闭了banner，不执行显示");}):this._showBanner());},Kt.prototype._showBanner=function(){var t,o=this;this.banner&&(this.banner.hide(),this.banner.destroy(),this.banner=null),this.banner=this._createBannerAd(),this.banner&&this.banner.show&&(t=this.banner.show())&&t.then(function(){console.log("banner广告展示成功");}).catch(function(t){switch(moosnow.http.getAllConfig(function(t){1==t.bannerErrorShowInter&&(console.log("banner加载出错，用插屏代替"),o.showInter());}),t.code){case 30003:console.log("新用户1天内不能曝光Banner，请将手机时间调整为1天后，退出游戏重新进入");break;case 30009:console.log("10秒内调用广告次数超过1次，10秒后再调用");break;case 30002:console.log("加载广告失败，重新加载广告");break;default:console.log("banner广告展示失败"),console.log(JSON.stringify(t));}});},Kt.prototype.hideBanner=function(){console.log(b),window[this.platformName]&&this.banner&&(console.log("隐藏和销毁banner"),this.banner.hide(),this.banner.destroy(),this.banner=null);},Kt.prototype.createRewardAD=function(t){moosnow.platform.videoLoading||(window[this.platformName]?window[this.platformName].createRewardedVideoAd&&(p.isEmpty(this.videoId)?console.warn(O):this.video?this.video.load():(moosnow.platform.videoLoading=!0,this.video=window[this.platformName].createRewardedVideoAd({posId:this.videoId}),this.video.onError(this._onVideoError.bind(this)),this.video.onClose(this._onVideoClose.bind(this)),this.video.onLoad(this._onVideoLoad.bind(this)))):moosnow.platform.videoCb(w.END));},Kt.prototype._onVideoLoad=function(){var t=this;console.log(E),moosnow.platform.videoLoading=!1,this.video&&this.video.show().then(function(){t.videoPlaying=!0,moosnow.event.sendEventImmediately(g.ON_PLATFORM_HIDE,{}),console.log("激励视频广告展示完成");}).catch(function(t){console.log("激励视频广告展示失败",JSON.stringify(t));});},Kt.prototype._onVideoClose=function(t){var o;console.log(B,t.isEnded),moosnow.platform.videoLoading=!1,this.videoPlaying=!1,t.isEnded&&moosnow.http.clickVideo(),moosnow.event.sendEventImmediately(g.ON_PLATFORM_SHOW,{}),moosnow.platform.videoCb&&(o=t.isEnded?w.END:w.NOTEND,moosnow.platform.videoCb(o));},Kt.prototype.prepareInter=function(){p.isEmpty(this.interId)?console.warn(V):window[this.platformName]&&window[this.platformName].createInterstitialAd&&(this.inter&&(this.inter.offLoad(),this.inter.offClose(),this.inter.offError(),this.inter=null),console.log("创建插屏广告"),this.inter=window[this.platformName].createInterstitialAd({posId:this.interId}),this.inter.onLoad(this._onInterLoad.bind(this)),this.inter.onClose(this._onInterClose.bind(this)),this.inter.onError(this._onInterError.bind(this)),this.inter.load());},Kt.prototype.showInter=function(){this.prepareInter();},Kt.prototype._onInterLoad=function(){var t;!this.inter||(t=this.inter.show())&&t.then(function(){console.log("插屏广告展示完成");}).catch(function(t){console.log("插屏广告展示失败",t);});},Kt.prototype._onInterOnShow=function(){this.inter&&this.inter.load();},Kt.prototype.showAutoBanner=function(){console.log(" vivo 不支持自动");},Kt.prototype.reportMonitor=function(t,o){window[this.platformName]&&window[this.platformName].reportMonitor&&window[this.platformName].reportMonitor("game_scene",0);},Kt.prototype._prepareNative=function(t){void 0===t&&(t=!1),window[this.platformName]&&window[this.platformName].createNativeAd&&(this._destroyNative(),this.native=window[this.platformName].createNativeAd({posId:this.nativeId[this.nativeIdIndex]}),this.native.onLoad(this._onNativeLoad.bind(this)),this.native.onError(this._onNativeError.bind(this)),this.nativeLoading=!0,t&&this.native.load());},Kt.prototype._onNativeLoad=function(t){var o=this;this.nativeLoading=!1,console.log(x,t),t&&t.adList&&0<t.adList.length?(this.nativeAdResult=t.adList[t.adList.length-1],p.isEmpty(this.nativeAdResult.adId)||(console.log(k),this.native.reportAdShow({adId:this.nativeAdResult.adId})),p.isFunction(this.nativeCb)&&this.nativeCb(p.deepCopy(this.nativeAdResult))):(console.log(D),p.isFunction(this.nativeCb)&&moosnow.http.getAllConfig(function(t){1==t.nativeErrorShowInter?(console.log("原生加载出错，用插屏代替"),o.showInter()):o.nativeCb(null);}));},Kt.prototype._onNativeError=function(t){var o=this;this.nativeLoading=!1,this.nativeAdResult=null,20003==t.code?this.nativeIdIndex<this.nativeId.length-1?(console.log(L,t),this.nativeIdIndex+=1,this._destroyNative()):(console.log(M),this.nativeIdIndex=0):console.log(P,t),moosnow.http.getAllConfig(function(t){1==t.nativeErrorShowInter?(console.log("原生加载出错，用插屏代替"),o.showInter()):o.nativeCb&&o.nativeCb(null);});},Kt.prototype._destroyNative=function(){this.nativeLoading=!1,this.native&&(this.native.offLoad(),this.native.offError(),this.native.destroy()),console.log(H);},Kt.prototype.showNativeAd=function(t){var o,e=this;this.nativeCb=t,this.native?(o=this.native.load())&&o.then(function(){console.log("原生广告加载完成");}).catch(function(t){console.log("原生广告加载失败"),moosnow.http.getAllConfig(function(t){1==t.nativeErrorShowInter?(console.log("原生加载出错，用插屏代替"),e.nativeCb(null),e.showInter()):e.nativeCb(null);});}):this._prepareNative(!0);},Kt.prototype.clickNative=function(t){this.nativeAdResult&&!p.isEmpty(this.nativeAdResult.adId)&&(this.mClickedNativeCallback=t,this.mIsClickedNative=!0,console.log(R,this.nativeAdResult.adId),this.native.reportAdClick({adId:this.nativeAdResult.adId}));},Kt.prototype.onAppShow=function(){this.mIsClickedNative&&(this.mIsClickedNative=!1,p.isFunction(this.mClickedNativeCallback)&&this.mClickedNativeCallback());},Kt.prototype.hasShortcutInstalled=function(o){window[this.platformName]&&window[this.platformName].hasShortcutInstalled&&window[this.platformName].hasShortcutInstalled({success:function(t){o&&o(!!t),t?console.log("已创建"):console.log("未创建");}});},Kt.prototype.installShortcut=function(o,t){void 0===t&&(t="方便下次快速启动"),window[this.platformName]&&window[this.platformName].installShortcut&&window[this.platformName].installShortcut({message:t,success:function(t){o&&o(),console.log("创建成功");}});},Kt.prototype.exitApplication=function(){window[this.platformName]&&window[this.platformName].exitApplication&&window[this.platformName].exitApplication();},Kt);function Kt(){var t=jt.call(this)||this;return t.platformName="qg",t.appSid="",t.bannerWidth=720,t.bannerHeight=114,t.interLoadedShow=!1,t.prevNavigate=Date.now(),t.mMinInterval=10,t.mIsClickedNative=!1,t._regisiterWXCallback(),t.initAdService(),t}var Xt,Qt={NONE:0,BANNER:1,FLOAT:2,SIDE:4,CENTER:8,EXPORT:16,BACK:32,MASK:64,WAIT:128,LEFTRIGHT:256,EXPORT_FIXED:512,ROTATE:1024,EXTEND2:2048,EXTEND3:4096,EXTEND4:8192,TOP:32768,RECOVER:16384},Zt=(t(Yt,Xt=u),Yt.prototype.onEnable=function(){},Yt.prototype.loadAsset=function(t,o,e){var n;if(p.getEngine()==r)cc.resources?cc.resources.load(t,o,function(t,o){t?console.log(" cc.resources.load ",t):e&&e(t,o);}):n=cc.loader.load(t,o,function(t,o){t?console.log(" cc.loader.load ",t):e&&e(null,n);});else if(p.getEngine()==a){var i=Laya.loader.getRes(t);if(i)return void(e&&e(null,i));Laya.loader.create(t,Laya.Handler.create(this,function(t){e(null,t);}),null,o);}},Yt.prototype.loadAssetDir=function(t,o,i,e){p.getEngine()==r?cc.loader.loadResDir(t,o,function(t,o,e){var n=t/o*100,n=Math.ceil(n);i&&i(n);},function(t,o){e&&e(t,o);}):console.warn("不支持loadAssetDir");},Yt.prototype.onDisable=function(){},Yt);function Yt(){return Xt.call(this)||this}var Jt,$t=(t(to,Jt=u),Object.defineProperty(to.prototype,"btnSound",{get:function(){return this.mBtnSound},set:function(t){this.mBtnSound=t;},enumerable:!0,configurable:!0}),to.prototype.playClickEffect=function(){this.mBtnSound?this.playSound(this.mBtnSound):console.log("没有点击音效");},Object.defineProperty(to.prototype,"isMuteSound",{get:function(){return this._isMuteSound},set:function(t){this._isMuteSound=t,this.save();},enumerable:!0,configurable:!0}),Object.defineProperty(to.prototype,"isMute",{get:function(){return this._isMute},set:function(t){this._isMute=t,this.save();},enumerable:!0,configurable:!0}),Object.defineProperty(to.prototype,"isMuteMusic",{get:function(){return this._isMuteMusic},set:function(t){this._isMuteMusic=t,this.save();},enumerable:!0,configurable:!0}),Object.defineProperty(to.prototype,"volumeSound",{get:function(){return this._volumeSound},set:function(t){this._volumeSound=t,this.save();},enumerable:!0,configurable:!0}),to.prototype.playSound=function(t,o,e,n,i){if(void 0===o&&(o=!1),void 0===e&&(e=null),void 0===n&&(n=null),void 0===i&&(i=0),!this.isMute){var r=cc.audioEngine.playEffect(t,o);return cc.audioEngine.setFinishCallback(r,function(t){e&&e(t),o||cc.audioEngine.stop(r);}),r}},to.prototype._replayMusic=function(){this.playMusic(this._musicClip,this._musicLoops,this._musicComplete);},to.prototype.playMusic=function(t,o,e){if(void 0===o&&(o=!0),void 0===e&&(e=null),!this.isMute){if(this._musicClip=t,this._musicLoops=o,this._musicComplete=e,p.getEngine()==r){if(!cc.audioEngine)return;if(!cc.audioEngine.playMusic)return;var n=cc.audioEngine.playMusic(t,o);return cc.audioEngine.setFinishCallback(n,function(t){e&&e(t);}),n}p.getEngine()==a&&Laya.SoundManager.playMusic(""+t,1,new Laya.Handler(this,function(t){e&&e(t);}));}},to.prototype.stopMusic=function(){p.getEngine()==r?cc.audioEngine.stopMusic():p.getEngine()==a&&Laya.SoundManager.stopMusic();},to.prototype.save=function(){moosnow.setting.setValue(this.IS_MUTE,""+this.isMute),moosnow.setting.setValue(this.IS_MUTE_MUSIC,""+this.isMuteMusic),moosnow.setting.setValue(this.IS_MUTE_SOUND,""+this.isMuteSound);},to.prototype.getSave=function(){this.isMute="true"==moosnow.setting.getString(this.IS_MUTE,"false"),this.isMuteMusic="true"==moosnow.setting.getString(this.IS_MUTE_MUSIC,"false");},to);function to(){var t=Jt.call(this)||this;return t.mBtnSound=null,t.IS_MUTE="isMute",t.IS_MUTE_MUSIC="isMuteMusic",t.IS_MUTE_SOUND="isMuteSound",t.VOLUME_MUSIC="volumeMusic",t.VOLUME_SOUND="volumeSound",t._volumeMusic=1,t._volumeSound=1,t._isMuteMusic=!1,t._isMuteSound=!1,t._isMute=!1,t}var oo=(eo.prototype.getAppPlatform=function(){return p.platform},eo.prototype.initHttp=function(){p.platform!=i.WX&&p.platform==i.OPPO_ZS?this.mHttp=new Mt:this.mHttp=new J;},eo.prototype.initPlatform=function(){p.platform==i.WX?this.mPlatform=new q:p.platform==i.OPPO?this.mPlatform=new ot:p.platform==i.VIVO?this.mPlatform=new zt:p.platform==i.OPPO_ZS?this.mPlatform=new Et:p.platform==i.BYTEDANCE?this.mPlatform=new vt:p.platform==i.QQ?this.mPlatform=new Nt:p.platform==i.BAIDU?this.mPlatform=new xt:this.mPlatform=new W;},eo.prototype.initAd=function(){p.platform==i.WX||p.platform==i.PC||p.platform==i.BYTEDANCE?this.mAd=new ut:p.platform==i.OPPO?this.mAd=new ct:p.platform==i.OPPO_ZS?this.mAd=new Ct:this.mAd=new X;},Object.defineProperty(eo.prototype,"platform",{get:function(){return this.mPlatform},enumerable:!0,configurable:!0}),Object.defineProperty(eo.prototype,"ad",{get:function(){return this.mAd},enumerable:!0,configurable:!0}),Object.defineProperty(eo.prototype,"http",{get:function(){return this.mHttp},enumerable:!0,configurable:!0}),Object.defineProperty(eo.prototype,"data",{get:function(){return this.mData},enumerable:!0,configurable:!0}),Object.defineProperty(eo.prototype,"resource",{get:function(){return this.mResource},enumerable:!0,configurable:!0}),Object.defineProperty(eo.prototype,"setting",{get:function(){return this.mSetting},enumerable:!0,configurable:!0}),Object.defineProperty(eo.prototype,"event",{get:function(){return this.mEvent},enumerable:!0,configurable:!0}),Object.defineProperty(eo.prototype,"audio",{get:function(){return this.mAudio},set:function(t){this.mAudio=t;},enumerable:!0,configurable:!0}),eo);function eo(){this.VIDEO_STATUS=w,this.VIDEO_MSG=Dt,this.SHARE_MSG=kt,this.BANNER_POSITION=m,this.SHARE_CHANNEL=wt,this.APP_PLATFORM=i,this.PLATFORM_EVENT=g,this.Common=p,this.AD_POSITION=Qt,this.mData=new it,this.mResource=new Zt,this.mSetting=new st,this.mEvent=new Ut,(window.moosnow=this).mData=new it,this.mSetting=new st,this.initPlatform(),this.initHttp(),this.initAd(),this.mAudio=new $t;}return new oo,oo}();

    class MainView extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            Common.setChildFullView(this.owner);
            Lite.myGame.init(this.owner);
            moosnow.http.finishLoading();
        }
        onEnable() {
            Lite.ui.pushUIForm(UIForms.AdForm, null, () => {
                Lite.ui.pushUIForm(UIForms.HomeForm, null, () => {
                });
            });
        }
        addEvent() {
        }
        removeEvent() {
        }
        onDisable() {
        }
    }

    class adItem extends Laya.Script {
        constructor() {
            super();
            this.appItem = null;
        }
        onEnable() {
            this.owner.on(Laya.Event.CLICK, this, this.onClick);
            this.getBgColor();
        }
        init(appItem) {
            let img = this.owner.getChildByName('img');
            let title = this.owner.getChildByName('title');
            let clip = this.owner.getChildByName('clip');
            this.appItem = appItem;
            title && (title.text = this.appItem.title);
            if (clip && this.appItem.atlas) {
                clip.skin = this.appItem.atlas;
                clip.visible = true;
                img.visible = false;
            }
            else {
                img.skin = this.appItem.img;
                img.visible = true;
                clip && (clip.visible = false);
            }
        }
        getBgColor() {
            let bgImg = this.owner.getChildByName('img_bg');
            if (bgImg) {
                let i = MathUtils.randomNumBoth(0, 8);
                bgImg.skin = `ad/img_ad_box_title_bg${i}.png`;
            }
        }
        onDisable() {
            this.owner.off(Laya.Event.CLICK, this, this.onClick);
        }
        onClick() {
            console.log(`navigatTomini ${this.appItem.title} ${this.appItem.appid}`);
            moosnow.platform.navigate2Mini(this.appItem);
        }
    }

    class adItemFloat extends adItem {
        onClick() {
            super.onClick();
            this.random();
        }
        init(data) {
            super.init(data);
            this.anim();
        }
        random() {
            super.init(Lite.config.getRandomAd());
        }
        anim() {
            let node = this.owner;
            Laya.Tween.from(node, { x: node.x - 750 }, 300);
            Laya.Tween.from(node, { rotation: -360 }, 300);
        }
    }

    class ButtonEx extends Laya.Script {
        constructor() {
            super();
            this.enableEffect = true;
            this.enableMusic = true;
            this.autoScale = false;
            this.scaleMax = 1;
            this.scaleMin = 1;
            this.enableLogPoint = false;
            this.logPointName = "";
            this.mDownEffect = false;
        }
        onAwake() {
            if (this.autoScale)
                this.autoScaleZoomOut();
        }
        onEnable() {
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUpEffect);
        }
        onMouseDown() {
            if (this.mDownEffect)
                return;
            this.mDownEffect = true;
            if (this.enableMusic)
                Lite.audio.playClickEffect();
            if (this.enableEffect)
                this.mouseDownEffect();
        }
        removeMouseEffect() {
            this.owner.off(Laya.Event.MOUSE_DOWN, this, this.mouseDownEffect);
            this.owner.off(Laya.Event.MOUSE_UP, this, this.mouseUpEffect);
        }
        mouseDownEffect() {
            Laya.Tween.to(this.owner, { scaleX: 0.7, scaleY: 0.7 }, 100, null, Laya.Handler.create(this, () => {
                this.mouseUpEffect();
            }));
        }
        mouseUpEffect() {
            Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 100, null, Laya.Handler.create(this, () => {
                this.mDownEffect = false;
            }));
        }
        autoScaleZoomOut() {
            Laya.Tween.to(this.owner, { scaleX: this.scaleMin, scaleY: this.scaleMin }, 1000, Laya.Ease.circOut, Laya.Handler.create(this, () => {
                this.autoScaleZoomIn();
            }));
        }
        autoScaleZoomIn() {
            Laya.Tween.to(this.owner, { scaleX: this.scaleMax, scaleY: this.scaleMax }, 1000, Laya.Ease.circInOut, Laya.Handler.create(this, () => {
                this.autoScaleZoomOut();
            }));
        }
        onDisable() {
            this.removeMouseEffect();
        }
    }

    class ADType {
    }
    ADType.TOP = "TOP";
    ADType.CENTER = "CENTER";
    ADType.EXPORT = "EXPORT";
    ADType.GAME = "GAME";
    class AdForm extends UIForm {
        constructor() {
            super();
            this.boxTop = null;
            this.boxCenter = null;
            this.boxExport = null;
            this.btnGoon = null;
            this.topList = null;
            this.centerList = null;
            this.exportList2 = null;
            this.topBg = null;
            this.scrollIdx = 0;
            this.scrollDir = 1;
        }
        onAwake() {
            this.reset();
            this.initData();
            this.addEvent();
        }
        addEvent() {
            this.btnGoon.on(Laya.Event.CLICK, this, () => {
                this.boxExport.visible = false;
                if (Lite.ui.getUIFrom(UIForms.GameForm) && !Lite.ui.getUIFrom(UIForms.RespawnForm))
                    return;
                moosnow.platform.showBanner(false);
            });
            Lite.event.addListener(EventType.SHOW_AD, this, this.showAd);
            Lite.event.addListener(EventType.HIDE_AD, this, this.hideAd);
            this.exportList2.on(Laya.Event.MOUSE_UP, this, this.scrollExport2);
            this.exportList2.on(Laya.Event.MOUSE_OUT, this, this.scrollExport2);
        }
        onShow() {
            let node = this.owner;
            node.zOrder = 9999;
        }
        initData() {
            this.topList.renderHandler = new Laya.Handler(this, this.updateItem);
            this.centerList.renderHandler = new Laya.Handler(this, this.updateItem);
            this.exportList2.renderHandler = new Laya.Handler(this, this.updateItem);
            this.exportList2.array = Lite.config.getAd();
            this.topList.array = Lite.config.getAd();
            this.topList.hScrollBarSkin = "";
            this.exportList2.vScrollBarSkin = "";
            this.exportList2.height = Laya.stage.height - 230;
            Laya.timer.loop(2000, this, this.scrollTop);
        }
        showAd(types) {
            this.reset();
            let typeStr = types.join(',');
            if (typeStr.indexOf(ADType.TOP) != -1) {
                this.showBoxTop();
            }
            if (typeStr.indexOf(ADType.CENTER) != -1) {
                this.showBoxCenter();
            }
            if (typeStr.indexOf(ADType.EXPORT) != -1) {
                this.showBoxExport();
            }
            if (typeStr.indexOf(ADType.GAME) != -1) {
                this.showGameTop();
            }
        }
        showBoxTop() {
            this.boxTop.visible = true;
            this.topBg.y = Laya.stage.height - this.topBg.height;
            Lite.config.getAd();
        }
        showGameTop() {
            this.boxTop.visible = true;
            this.topBg.y = 80;
            Lite.config.getAd();
        }
        showBoxCenter() {
            this.boxCenter.visible = true;
            this.centerList.array = Lite.config.getAd();
        }
        showBoxExport() {
            if (this.boxExport.visible)
                return;
            this.exportList2.array = Lite.config.getAd();
            this.boxExport.visible = true;
            this.exportList2.scrollTo(0);
            this.scrollExport2();
            moosnow.platform.hideBanner();
            this.btnGoon.visible = false;
            Laya.timer.once(3000, this, () => {
                this.btnGoon.visible = true;
            });
        }
        scrollTop() {
            this.scrollIdx += this.scrollDir;
            this.topList.tweenTo(this.scrollIdx, 200);
            let len = this.topList.array.length;
            if (this.scrollIdx == len - 4 || this.scrollIdx == 0) {
                this.scrollDir = -this.scrollDir;
            }
        }
        scrollExport2() {
            let len = this.exportList2.array.length;
            let startIdx = this.exportList2.startIndex;
            this.exportList2.tweenTo(len - 6, 400 * (len - startIdx), Laya.Handler.create(this, () => {
                this.exportList2.tweenTo(0, 400 * len, Laya.Handler.create(this, () => {
                    this.scrollExport2();
                }));
            }));
        }
        reset() {
            this.boxCenter.visible = this.boxExport.visible = this.boxTop.visible = false;
        }
        updateItem(cell, index) {
            cell.getComponent(adItem).init(cell.dataSource);
        }
        hideAd() {
            moosnow.platform.hideBanner();
        }
    }

    class TouchManager extends Laya.Script {
        constructor() {
            super();
            this.mListen = ["HomeForm"];
        }
        onEnable() {
            this.addListener();
        }
        addListener() {
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        }
        mouseDown(e) {
            if (!Lite.myGame.gameStarted || Lite.myGame.gamePause)
                return;
            Lite.event.sendEventImmediately(EventType.TOUCH_DOWN, e);
        }
        mouseMove(e) {
            if (!Lite.myGame.gameStarted || Lite.myGame.gamePause)
                return;
            Lite.event.sendEventImmediately(EventType.TOUCH_MOVE, e);
        }
        mouseUp(e) {
            if (!Lite.myGame.gameStarted || Lite.myGame.gamePause)
                return;
            Lite.event.sendEventImmediately(EventType.TOUCH_UP, e);
        }
        removeListener() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        }
        onDisable() {
            this.removeListener();
        }
    }

    class GameTools extends GameToolsBase {
        static get(id) {
            if (this[id])
                return this[id];
            return SheetManager.get("GameTools", id, GameTools);
        }
    }

    class GameForm extends UIForm {
        constructor() {
            super();
            this.btnCopy = null;
            this.btnCopyCoin = null;
            this.btnCopyVideo = null;
            this.btnRemove = null;
            this.btnRemoveCoin = null;
            this.btnRemoveVideo = null;
            this.btnNext = null;
            this.btnNextCoin = null;
            this.btnNextVideo = null;
            this.btnSet = null;
            this.levelBar = null;
            this.guide1 = null;
            this.guide2 = null;
            this.star1 = null;
            this.star2 = null;
            this.star3 = null;
            this.txtLv = null;
            this.txtCoin = null;
            this.isGuid = false;
            this.guidNum = 0;
            this.mCopyCoin = 0;
            this.mRemoveCoin = 0;
            this.mNextCoin = 0;
            this.mCopyUseNum = 0;
            this.mRemoveUseNum = 0;
            this.mNextUseNum = 0;
        }
        onAwake() {
            super.onAwake();
            this.addListener();
        }
        addListener() {
            this.btnRemove.on(Laya.Event.MOUSE_DOWN, this, this.onRemove);
            this.btnNext.on(Laya.Event.MOUSE_DOWN, this, this.onNext);
            this.btnCopy.on(Laya.Event.MOUSE_DOWN, this, this.onCopy);
            this.btnSet.on(Laya.Event.MOUSE_DOWN, this, this.onSet);
            this.btnRemove.on(Laya.Event.MOUSE_UP, this, this.onNull);
            this.btnNext.on(Laya.Event.MOUSE_UP, this, this.onNull);
            this.btnCopy.on(Laya.Event.MOUSE_UP, this, this.onNull);
            this.btnSet.on(Laya.Event.MOUSE_UP, this, this.onNull);
            this.btnRemove.on(Laya.Event.CLICK, this, this.onNull);
            this.btnNext.on(Laya.Event.CLICK, this, this.onNull);
            this.btnCopy.on(Laya.Event.CLICK, this, this.onNull);
            this.btnSet.on(Laya.Event.CLICK, this, this.onNull);
            this.btnRemove.on(Laya.Event.MOUSE_MOVE, this, this.onNull);
            this.btnNext.on(Laya.Event.MOUSE_MOVE, this, this.onNull);
            this.btnCopy.on(Laya.Event.MOUSE_MOVE, this, this.onNull);
            this.btnSet.on(Laya.Event.MOUSE_MOVE, this, this.onNull);
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
            Lite.event.addListener(EventType.SHAPE_ELIMINATE, this, this.updateScore);
            Lite.event.addListener(EventType.COIN_CHANGED, this, this.onChangeCoin);
        }
        onNull(e) {
            e.stopPropagation();
        }
        onChangeCoin(v) {
            this.txtCoin.text = Common.formatMoney(v);
        }
        updateScore(e) {
            this.levelBar.width = 393 * e.score / e.winScore;
            this.updateStar(this.star1, e);
            this.updateStar(this.star2, e);
            this.updateStar(this.star3, e);
        }
        updateStar(star, e) {
            if (e.score / e.winScore > (star.x + star.width / 2) / 393) {
                star.skin = "comp/img_home_star_active.png";
            }
            else {
                star.skin = "comp/img_home_star.png";
            }
        }
        onRemove(e) {
            if (Lite.data.getCoin() >= this.mRemoveCoin) {
                this.mRemoveUseNum++;
                Lite.data.subCoin(this.mRemoveCoin);
                Lite.event.sendEventImmediately(EventType.SHAPE_REMOVE, 1);
                this.showGameTool();
            }
            else
                moosnow.platform.showVideo(res => {
                    switch (res) {
                        case moosnow.VIDEO_STATUS.NOTEND:
                            Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                            break;
                        case moosnow.VIDEO_STATUS.ERR:
                            Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                            break;
                        case moosnow.VIDEO_STATUS.END:
                            Lite.event.sendEventImmediately(EventType.SHAPE_REMOVE, 1);
                            this.showGameTool();
                            break;
                        default:
                            break;
                    }
                });
            e.stopPropagation();
        }
        onNext(e) {
            if (Lite.data.getCoin() >= this.mNextCoin) {
                this.mNextUseNum++;
                Lite.data.subCoin(this.mNextCoin);
                Lite.event.sendEventImmediately(EventType.SHAPE_NEXT, 1);
                this.showGameTool();
            }
            else
                moosnow.platform.showVideo(res => {
                    switch (res) {
                        case moosnow.VIDEO_STATUS.NOTEND:
                            Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                            break;
                        case moosnow.VIDEO_STATUS.ERR:
                            Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                            break;
                        case moosnow.VIDEO_STATUS.END:
                            Lite.event.sendEventImmediately(EventType.SHAPE_NEXT, 1);
                            this.showGameTool();
                            break;
                        default:
                            break;
                    }
                });
            e.stopPropagation();
        }
        onCopy(e) {
            if (Lite.data.getCoin() >= this.mCopyCoin) {
                this.mCopyUseNum++;
                Lite.data.subCoin(this.mCopyCoin);
                Lite.event.sendEventImmediately(EventType.SHAPE_COPY, 1);
                this.showGameTool();
            }
            else
                moosnow.platform.showVideo(res => {
                    switch (res) {
                        case moosnow.VIDEO_STATUS.NOTEND:
                            Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                            break;
                        case moosnow.VIDEO_STATUS.ERR:
                            Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                            break;
                        case moosnow.VIDEO_STATUS.END:
                            Lite.event.sendEventImmediately(EventType.SHAPE_COPY, 1);
                            this.showGameTool();
                            break;
                        default:
                            break;
                    }
                });
            e.stopPropagation();
        }
        onSet(e) {
            Lite.ui.pushUIForm(UIForms.SetForm, { isGame: true });
            e.stopPropagation();
        }
        showGameTool() {
            let gameTool = GameTools.get(10001);
            this.mCopyCoin = gameTool.price + gameTool.usePrice * this.mCopyUseNum;
            this.btnCopyCoin.text = Common.formatMoney(this.mCopyCoin);
            this.btnCopyCoin.visible = Lite.data.getCoin() >= gameTool.price && this.mCopyUseNum < gameTool.useNum;
            this.btnCopyVideo.visible = !this.btnCopyCoin.visible;
            let gameTool2 = GameTools.get(10002);
            this.mRemoveCoin = gameTool2.price + gameTool2.usePrice * this.mRemoveUseNum;
            this.btnRemoveCoin.text = Common.formatMoney(this.mRemoveCoin);
            this.btnRemoveCoin.visible = Lite.data.getCoin() >= gameTool2.price && this.mRemoveUseNum < gameTool2.useNum;
            this.btnRemoveVideo.visible = !this.btnRemoveCoin.visible;
            let gameTool3 = GameTools.get(10003);
            this.mNextCoin = gameTool3.price + gameTool2.usePrice * this.mNextUseNum;
            this.btnNextCoin.text = Common.formatMoney(this.mNextCoin);
            this.btnNextCoin.visible = Lite.data.getCoin() >= gameTool3.price && this.mNextUseNum < gameTool2.useNum;
            this.btnNextVideo.visible = !this.btnNextCoin.visible;
        }
        onShow() {
            this.mCopyCoin = 0;
            this.mRemoveCoin = 0;
            this.mNextCoin = 0;
            this.mCopyUseNum = 0;
            this.mRemoveUseNum = 0;
            this.mNextUseNum = 0;
            Lite.event.sendEventImmediately(EventType.SHOW_AD, []);
            moosnow.platform.showAutoBanner();
            this.guide1.visible = true;
            let t = new Laya.TimeLine();
            this.guide2.x = 0;
            this.txtLv.changeText(`第${Lite.myGame.gameLevel}关`);
            this.onChangeCoin(Lite.data.getCoin());
            this.showGameTool();
            t.addLabel("guide", 0).to(this.guide2, { x: 386 }, 1000).to(this.guide2, { x: 0 }, 1000);
            t.play("guide", true);
        }
        onTouchDown() {
            this.guide1.visible = false;
        }
        willHide() {
        }
        onUpdate() {
        }
    }

    class GameOver extends UIForm {
        constructor() {
            super();
            this.btnEnd = null;
            this.btnReceive = null;
            this.btnThree = null;
            this.txtThree = null;
            this.txtVideoCoin = null;
            this.imgWin = null;
            this.imgFail = null;
            this.txtCoin = null;
            this.txtCoin2 = null;
            this.boxAction = null;
            this.checkboxBg = null;
            this.checkboxYes = null;
            this.checkboxTitle = null;
            this.txtVideoNum = null;
            this.coin = 0;
            this.isPopEffect = false;
            this.isMask = true;
            this.isWin = false;
            this.canClick = false;
            this.mVideNum = 2;
            this.mChecked = true;
        }
        onAwake() {
            super.onAwake();
            this.addEvent();
        }
        addEvent() {
            this.btnEnd.on(Laya.Event.CLICK, this, this.onClickBtnEnd);
            this.btnThree.on(Laya.Event.CLICK, this, this.onClickBtnThree);
            this.btnReceive.on(Laya.Event.CLICK, this, this.onClickBtnEnd);
            this.checkboxBg.on(Laya.Event.CLICK, this, this.onCheckChange);
        }
        onCheckChange() {
            this.mChecked = !this.mChecked;
            this.checkboxYes.visible = this.mChecked;
            this.btnEnd.visible = this.isWin && !this.mChecked;
            this.btnThree.visible = this.isWin && this.mChecked;
        }
        willShow(data) {
            super.willShow(data);
            this.isWin = data.isWin;
            this.imgWin.visible = this.isWin;
            this.imgFail.visible = !this.isWin;
            this.mChecked = true;
            this.checkboxYes.visible = this.mChecked;
            this.btnEnd.visible = this.isWin && !this.mChecked;
            this.btnThree.visible = this.isWin && this.mChecked;
            this.checkboxBg.visible = this.isWin;
            this.btnReceive.visible = !this.isWin;
            if (this.isWin) {
                let num = Lite.data.getWinNum();
                if (num == 1) {
                    this.mVideNum = 4;
                }
                else {
                    this.mVideNum = 2;
                }
            }
            let levelCfg = LeveLCfg.get(Lite.data.getIdbyLevel(Lite.myGame.gameLevel));
            this.coin = this.isWin ? levelCfg.winCoin : levelCfg.failCoin;
            this.coin += Lite.myGame.gameCoin;
            this.txtVideoNum.text = "" + this.mVideNum;
            this.checkboxTitle.text = this.mVideNum + "倍金币";
            this.txtThree.text = this.mVideNum + "";
            this.txtVideoCoin.text = Common.formatMoney(this.coin * this.mVideNum) + "";
            this.txtCoin.text = Common.formatMoney(this.coin) + "";
            this.txtCoin2.text = Common.formatMoney(this.coin) + "";
            Lite.event.sendEventImmediately(EventType.CYLINDER_SKIN_CHANGED, null);
        }
        willHide() {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.boxAction);
            Lite.event.sendEventImmediately(EventType.HIDE_AD);
        }
        onShow(data) {
            Lite.event.sendEventImmediately(EventType.SHOW_AD, [ADType.CENTER]);
            if (Lite.config.isMistouchPos()) {
                this.canClick = false;
                moosnow.platform.hideBanner();
                this.boxAction.bottom = 40;
                Laya.timer.once(2500, this, () => {
                    moosnow.platform.showBanner(true);
                    Laya.timer.once(500, this, () => {
                        Laya.Tween.to(this.boxAction, { bottom: 300 }, 400, null, Laya.Handler.create(this, () => {
                            this.canClick = true;
                        }));
                    });
                });
            }
            else {
                this.canClick = true;
                this.boxAction.bottom = 300;
            }
        }
        onClickBtnThree() {
            if (!this.canClick)
                return;
            moosnow.platform.showVideo(res => {
                switch (res) {
                    case moosnow.VIDEO_STATUS.NOTEND:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                        break;
                    case moosnow.VIDEO_STATUS.ERR:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                        break;
                    case moosnow.VIDEO_STATUS.END:
                        Lite.ui.showToast(`获得 ${this.coin * this.mVideNum} 金币`);
                        Lite.data.addCoin(this.coin * this.mVideNum);
                        Lite.data.saveCoin();
                        this.close(this.isWin);
                        break;
                    default:
                        break;
                }
            });
        }
        onClickBtnEnd() {
            if (!this.canClick)
                return;
            Lite.ui.showToast(`获得 ${this.coin} 金币`);
            Lite.data.addCoin(this.coin);
            Lite.data.saveCoin();
            this.close(this.isWin);
        }
        close(isWin, e = null, cb = null) {
            Lite.event.sendEventImmediately(EventType.SHOW_AD, []);
            Lite.ui.hideUIForm(UIForms.GameOver, null, () => {
                Lite.event.sendEventImmediately(EventType.GAME_STATE_NEXT, { isWin, cb });
            });
        }
    }

    class MapViewItem extends Laya.Script {
        constructor() {
            super();
            this.mBg = null;
            this.mLock = null;
            this.mStar1 = null;
            this.mStar2 = null;
            this.mStar3 = null;
            this.mTxtLv = null;
            this.mCurLevel = null;
        }
        onAwake() {
            this.mBg = this.owner.getChildByName("levelBg");
            this.mStar1 = this.owner.getChildByName("imgStar3");
            this.mStar2 = this.owner.getChildByName("imgStar2");
            this.mStar3 = this.owner.getChildByName("imgStar1");
            this.mLock = this.owner.getChildByName("imgLock");
            this.mTxtLv = this.owner.getChildByName("txtLv");
        }
        updateItem(cell, index) {
            this.mCurLevel = cell;
            let gameLevel = Lite.data.getLevelById(cell.ID);
            this.mLock.visible = Lite.data.getCurrentLevel() < gameLevel;
            this.mTxtLv.visible = !this.mLock.visible;
            if (this.mLock.visible) {
                this.mBg.skin = "comp/img_home_level.png";
                this.mStar1.skin = this.mStar2.skin = this.mStar3.skin = "comp/img_home_star.png";
            }
            else {
                this.mBg.skin = "comp/img_home_level_active.png";
                if (Lite.data.getCurrentLevel() == gameLevel)
                    this.mStar1.skin = this.mStar2.skin = this.mStar3.skin = "comp/img_home_star.png";
                else
                    this.mStar1.skin = this.mStar2.skin = this.mStar3.skin = "comp/img_home_star_active.png";
            }
            this.mTxtLv.changeText("" + gameLevel);
        }
        onEnable() {
            Lite.event.addListener(EventType.SKIN_SELECTED, this, this.onSelect);
            this.owner.on(Laya.Event.CLICK, this, this.onClick);
        }
        onDisable() {
            Lite.event.removeListener(EventType.SKIN_SELECTED, this);
            this.owner.off(Laya.Event.CLICK, this, this.onClick);
        }
        onClick() {
            let startLevel = this.mCurLevel.ID - 10000;
            Lite.myGame.gameLevel = startLevel;
            if (Lite.config.isMistouch()) {
                Lite.ui.pushUIForm(UIForms.MistouchForm);
            }
            else {
                let skins = Lite.data.getHasNoSkins();
                if (skins.length != 0) {
                    let i = MathUtils.randomNumBoth(0, skins.length - 1);
                    let skin = skins[i];
                    Lite.ui.pushUIForm(UIForms.TrialSkinForm, Object.assign({}, skin));
                }
                else {
                    Lite.event.sendEventImmediately(EventType.GAME_STATE_START);
                }
            }
        }
        onSelect(ID) {
        }
    }

    var firstSkin = [10005, 10008];
    var BuyType = {
        COIN: 0,
        VIDEO: 1
    };
    class HomeForm extends UIForm {
        constructor() {
            super();
            this.btnStart = null;
            this.btnSet = null;
            this.btnShop = null;
            this.textCoin = null;
            this.imgSet = null;
            this.txtLevel = null;
            this.startPoint = null;
            this.mapList = null;
            this.time = 0;
            this.touchOnPoint = null;
            this.isStart = false;
        }
        onAwake() {
            super.onAwake();
            this.addEvent();
            this.initData();
        }
        willShow() {
            this.isStart = false;
        }
        initMap() {
            this.mapList.renderHandler = new Laya.Handler(this, this.updateItem);
            this.mapList.array = LeveLCfg.getAll();
            this.mapList.vScrollBarSkin = "";
            this.mapList.selectedIndex = Lite.data.getCurrentLevel();
        }
        updateItem(cell, index) {
            let item = cell.getComponent(MapViewItem);
            item.updateItem(cell.dataSource, index);
        }
        onShow(data) {
            if (data && data.isAd) {
                Lite.event.sendEventImmediately(EventType.SHOW_AD, [ADType.TOP, ADType.EXPORT]);
            }
            else {
                Lite.event.sendEventImmediately(EventType.SHOW_AD, [ADType.TOP]);
                moosnow.platform.showBanner(false);
            }
            this.initMap();
        }
        willHide() {
            Lite.event.sendEventImmediately(EventType.HIDE_AD);
        }
        initData() {
            this.onCoinChanged(Lite.data.getCoin());
        }
        addEvent() {
            this.btnSet.on(Laya.Event.CLICK, this, this.onSet);
            this.btnShop.on(Laya.Event.CLICK, this, this.onShop);
            Lite.event.addListener(EventType.COIN_CHANGED, this, this.onCoinChanged);
            Lite.event.addListener(EventType.LEVEL_CHANGED, this, this.onLevelChanged);
        }
        onNullMove(e) {
            e.stopPropagation();
        }
        onTouchDown(e) {
            let touch = e.touches[0];
            this.touchOnPoint = MathUtils.point(touch.stageX, touch.stageY);
        }
        onTouchUp(e) {
            if (!this.touchOnPoint)
                return;
            let dis = this.touchOnPoint.distance(e.stageX, e.stageY);
            if (dis >= 100) {
                this.startGame();
            }
            this.touchOnPoint = null;
        }
        startAnim() {
            Laya.Tween.to(this.startPoint, { x: 292 }, 800, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.startPoint, { x: 4 }, 800, null, Laya.Handler.create(this, () => {
                    this.startAnim();
                }));
            }));
        }
        buySkin() {
            if (Lite.data.getCoin() < this.nowSkin.price) {
                Lite.ui.showToast('金币不够，加油闯关吧！');
                return;
            }
            Lite.ui.showToast(`恭喜获得 ${this.nowSkin.name} 皮肤`);
            Lite.data.addHasSkins(this.nowSkin.ID);
            Lite.data.subCoin(this.nowSkin.price);
            this.validate(this.nowSkin.ID);
        }
        buySkinVideo() {
            moosnow.platform.showVideo(res => {
                switch (res) {
                    case moosnow.VIDEO_STATUS.NOTEND:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                        break;
                    case moosnow.VIDEO_STATUS.ERR:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                        break;
                    case moosnow.VIDEO_STATUS.END:
                        Lite.ui.showToast(`恭喜获得 ${this.nowSkin.name} 皮肤`);
                        Lite.data.addHasSkins(this.nowSkin.ID);
                        this.validate(this.nowSkin.ID);
                        break;
                    default:
                        break;
                }
            });
        }
        validate(ID) {
            this.nowSkin = Skin.get(ID);
            let has = Lite.data.getIsHasSkin(ID);
            this.btnStart.visible = has;
        }
        onLevelChanged(v) {
            this.txtLevel.text = `${v}`;
        }
        onCoinChanged(v) {
            this.textCoin.text = `${Common.formatMoney(v)}`;
        }
        onSet() {
            Lite.ui.pushUIForm(UIForms.SetForm);
        }
        onShop() {
            Lite.ui.pushUIForm(UIForms.ShopForm);
        }
        startGame() {
            if (this.isStart || !this.btnStart.visible)
                return;
            this.isStart = true;
            Lite.config.addGameNum();
        }
    }

    class MistouchForm extends UIForm {
        constructor() {
            super();
            this.imgPro = null;
            this.btnRespawn = null;
            this.isMitoush = false;
            this._progress = 0;
            this.imgBox = null;
        }
        onAwake() {
            super.onAwake();
            this.addEvent();
        }
        addEvent() {
            this.btnRespawn.on(Laya.Event.CLICK, this, this.onOpenBox);
        }
        onShow(data) {
            this.imgBox.skin = "comp/img_coin_box_1.png";
            Lite.event.sendEventImmediately(EventType.SHOW_AD, []);
            this.isMitoush = true;
            moosnow.platform.hideBanner();
            this.imgPro.width = 0;
            this._progress = 0;
            this.setBoxProgress(0);
            this.boxProgressTimer();
        }
        willHide() {
            this.owner['ani1'].stop();
            moosnow.platform.hideBanner();
            Laya.timer.clearAll(this);
        }
        boxProgressTimer() {
            Laya.timer.loop(100, this, this.reduceProgress);
        }
        reduceProgress() {
            this._progress -= 0.05;
            if (this._progress <= 0)
                this._progress = 0;
            this.setBoxProgress(this._progress);
        }
        onOpenBox() {
            if (!this.owner['ani1'].isPlaying)
                this.owner['ani1'].play(0, false);
            this._progress += 0.2;
            let i = MathUtils.randomNumBoth(3, 8) / 10;
            if (this._progress >= i && this.isMitoush) {
                Laya.timer.clear(this, this.resetBanner);
                this.isMitoush = false;
                moosnow.platform.showBanner(true, (isOpend) => {
                    if (isOpend) {
                        this.getCoin();
                    }
                });
                Laya.timer.once(1500, this, this.resetBanner);
            }
            if (this._progress >= 1) {
                this.getCoin();
            }
            this.setBoxProgress(this._progress);
        }
        resetBanner() {
            Laya.timer.clear(this, this.reduceProgress);
            moosnow.platform.hideBanner();
            this._progress = 0;
            this.isMitoush = true;
            this.setBoxProgress(0);
            this.boxProgressTimer();
        }
        setBoxProgress(v) {
            this.imgPro.width = 380 * v;
        }
        getCoin() {
            Lite.ui.hideUIForm(UIForms.MistouchForm, null, () => {
                let levelCfg = LeveLCfg.get(Lite.data.getIdbyLevel(Lite.myGame.gameLevel));
                let coin = MathUtils.randomNumBoth(levelCfg.mistouchCoin[0], levelCfg.mistouchCoin[1]);
                Lite.data.addCoin(coin);
                Lite.ui.showToast('恭喜获得金币' + coin);
                let skins = Lite.data.getHasNoSkins();
                if (skins.length != 0) {
                    let i = MathUtils.randomNumBoth(0, skins.length - 1);
                    let skin = skins[i];
                    Lite.ui.pushUIForm(UIForms.TrialSkinForm, skin);
                }
                else {
                    Lite.event.sendEventImmediately(EventType.GAME_STATE_START, this.FormData);
                }
            });
        }
    }

    class RespawnForm extends UIForm {
        constructor() {
            super();
            this.btnRespawn = null;
            this.btnExit = null;
            this.isPopEffect = false;
            this.isMask = true;
            this.isMitoush = false;
            this._progress = 0;
        }
        onAwake() {
            super.onAwake();
            this.addEvent();
        }
        addEvent() {
            this.btnRespawn.on(Laya.Event.CLICK, this, this.onVideo);
            this.btnExit.on(Laya.Event.CLICK, this, this.onExit);
        }
        willShow(isVideo) {
            this.btnExit.visible = false;
            moosnow.http.getAllConfig(res => {
                if (res && res.delayShow > 0) {
                    Laya.timer.once(res.delayShow * 1000, this, () => {
                        this.btnExit.visible = true;
                    });
                }
                else {
                    this.btnExit.visible = true;
                }
            });
        }
        willHide() {
            Lite.event.sendEventImmediately(EventType.HIDE_AD);
            Lite.event.sendEventImmediately(EventType.SHOW_AD, []);
            Lite.event.sendEventImmediately(EventType.GAME_STATE_RESUME);
            Laya.timer.clearAll(this);
        }
        onShow(data) {
            this.isMitoush = Lite.config.isMistouch();
            if (this.isMitoush) {
                moosnow.platform.hideBanner();
                this._progress = 0;
                this.setBoxProgress(0);
                this.boxProgressTimer();
            }
        }
        onExit() {
            Lite.ui.hideUIForm(UIForms.RespawnForm);
            Lite.event.sendEventImmediately(EventType.GAME_STATE_OVER, { isWin: false });
        }
        onVideo() {
            moosnow.platform.showVideo(res => {
                switch (res) {
                    case moosnow.VIDEO_STATUS.NOTEND:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                        break;
                    case moosnow.VIDEO_STATUS.ERR:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                        break;
                    case moosnow.VIDEO_STATUS.END:
                        this.respawn();
                        break;
                    default:
                        break;
                }
            });
        }
        onBtnClick() {
            if (this.isMitoush) {
                this.onOpenBox();
            }
            else {
                this.respawn();
            }
        }
        boxProgressTimer() {
            Laya.timer.loop(100, this, this.reduceProgress);
        }
        reduceProgress() {
            this._progress -= 0.05;
            if (this._progress <= 0)
                this._progress = 0;
            this.setBoxProgress(this._progress);
        }
        onOpenBox() {
            this._progress += 0.2;
            let i = MathUtils.randomNumBoth(5, 9) / 10;
            if (this._progress >= i) {
                this._progress = 1;
                Laya.timer.clear(this, this.reduceProgress);
                Laya.timer.clear(this, this.resetBanner);
                moosnow.platform.showBanner(true, (isOpend) => {
                    if (isOpend) {
                        this.isMitoush = false;
                    }
                });
                Laya.timer.once(1000, this, this.resetBanner);
            }
            this.setBoxProgress(this._progress);
        }
        resetBanner() {
            moosnow.platform.hideBanner();
            this._progress = 0;
            this.setBoxProgress(0);
            this.boxProgressTimer();
        }
        setBoxProgress(v) {
        }
        respawn() {
            Lite.ui.hideUIForm(UIForms.RespawnForm, null, () => {
                Lite.event.sendEventImmediately(EventType.GAME_STATE_RESUME);
                Lite.event.sendEventImmediately(EventType.RESPAWN_PLAYER);
            });
        }
    }

    class SetForm extends UIForm {
        constructor() {
            super();
            this.btnSound = null;
            this.btnVibrate = null;
            this.imgSound = null;
            this.imgVibrate = null;
            this.btnClose = null;
            this.btnHome = null;
            this.btnAgain = null;
            this.isMask = true;
        }
        onAwake() {
            super.onAwake();
            this.addListener();
        }
        addListener() {
            this.btnVibrate.on(Laya.Event.CLICK, this, this.vibrateSwitch);
            this.btnSound.on(Laya.Event.CLICK, this, this.musicSwitch);
            this.btnClose.on(Laya.Event.CLICK, this, this.hideForm);
            this.btnHome.on(Laya.Event.CLICK, this, this.toHome);
            this.btnAgain.on(Laya.Event.CLICK, this, this.onAgain);
        }
        hideForm() {
            Lite.ui.hideUIForm(UIForms.SetForm);
        }
        onAgain() {
            Lite.event.sendEventImmediately(EventType.GAME_STATE_RESET);
            Lite.ui.hideUIForm(UIForms.SetForm, null, () => {
            });
        }
        toHome() {
            Lite.event.sendEventImmediately(EventType.GAME_STATE_OVER, { isWin: false });
            Lite.ui.hideUIForm(UIForms.SetForm, null, () => {
            });
        }
        vibrateSwitch() {
            Lite.data.setVibrateSetting(!Lite.data.getVibrateSetting());
            this.showCheckbox();
        }
        musicSwitch() {
            Lite.audio.isMute = !Lite.audio.isMute;
            this.showCheckbox();
        }
        showCheckbox() {
            console.log('Lite.audio.isMute', Lite.audio.isMute);
            this.imgSound.visible = !Lite.audio.isMute;
            console.log('  this.imgSound.active ', this.imgSound.active);
            this.imgVibrate.visible = !Lite.data.getVibrateSetting();
        }
        willShow(data) {
            super.willShow(data);
            this.showCheckbox();
            let isGame = data && data.isGame;
            this.btnAgain.visible = isGame;
            this.btnHome.visible = isGame;
        }
        onUpdate() {
        }
    }

    class ShopViewItem extends Laya.Script {
        constructor() {
            super();
            this.mSkin = null;
            this.mBg = null;
            this.mBgActive = null;
            this.mLock = null;
            this.mCurSkin = null;
        }
        onAwake() {
            this.mSkin = this.owner.getChildByName("imgSkin");
            this.mBg = this.owner.getChildByName("imgBg");
            this.mBgActive = this.owner.getChildByName("imgBgActive");
            this.mLock = this.owner.getChildByName("imgLock");
        }
        updateItem(cell, index) {
            this.mCurSkin = cell;
            this.mLock.visible = !Lite.data.getIsHasSkin(cell.ID);
            this.mSkin.skin = cell.img;
            if (this.mLock.visible) {
                this.mBg.skin = "comp/img_skin_item_bg_lock.png";
            }
            else {
                this.mBg.skin = "comp/img_skin_item_bg.png";
            }
        }
        onEnable() {
            Lite.event.addListener(EventType.SKIN_SELECTED, this, this.onSelect);
            this.owner.on(Laya.Event.CLICK, this, this.onClick);
        }
        onDisable() {
            Lite.event.removeListener(EventType.SKIN_SELECTED, this);
            this.owner.off(Laya.Event.CLICK, this, this.onClick);
        }
        onClick() {
            Lite.event.sendEventImmediately(EventType.SKIN_SELECTED, this.mCurSkin.ID);
        }
        onSelect(ID) {
            if (this.mCurSkin && ID == this.mCurSkin.ID) {
                this.mBg.skin = "comp/img_skin_item_bg_active.png";
            }
            else {
                if (this.mLock.visible) {
                    this.mBg.skin = "comp/img_skin_item_bg_lock.png";
                }
                else {
                    this.mBg.skin = "comp/img_skin_item_bg.png";
                }
            }
        }
    }

    var Turn;
    (function (Turn) {
        Turn[Turn["Left"] = 0] = "Left";
        Turn[Turn["Right"] = 1] = "Right";
    })(Turn || (Turn = {}));
    class ShopForm extends UIForm {
        constructor() {
            super();
            this.shopList0 = null;
            this.close = null;
            this.btnBuy = null;
            this.btnVideoBuy = null;
            this.textNeedCoin = null;
            this.textNeedVideo = null;
            this.textCoin = null;
            this._curSkin = null;
            this.isMask = true;
        }
        onEnable() {
            this.initShopView();
        }
        onShow() {
            Lite.event.sendEventImmediately(EventType.SHOW_AD, []);
            this.initData();
        }
        initData() {
            this.onCoinChanged(Lite.data.getCoin());
        }
        onCoinChanged(v) {
            this.textCoin.text = Common.formatMoney(v);
        }
        initShopView() {
            this.shopList0.renderHandler = new Laya.Handler(this, this.updateItem);
            this.shopList0.array = Skin.getAll();
            this.shopList0.vScrollBarSkin = "";
            this.btnBuy.visible = false;
            this.btnVideoBuy.visible = false;
            this.resetSelect();
        }
        resetSelect() {
            this._curSkin = null;
            this.textNeedCoin.text = "0";
            Lite.event.sendEventImmediately(EventType.SKIN_SELECTED, -1);
        }
        onSelect(ID) {
            this._curSkin = Skin.get(ID);
            if (!this._curSkin)
                return;
            this.textNeedCoin.text = Common.formatMoney(this._curSkin.price) + "";
            this.textNeedVideo.text = `（${Lite.data.getSkinVideoNum(this._curSkin.ID)}/${this._curSkin.videoNum}）`;
            if (Lite.data.getIsHasSkin(ID)) {
                this.btnBuy.visible = false;
                this.btnVideoBuy.visible = false;
                Lite.data.setCurrentSkin(ID);
                return;
            }
            else {
                this.btnBuy.visible = true;
                this.btnVideoBuy.visible = true;
            }
        }
        onBtnBuy() {
            let f = this.buyTest();
            if (!f)
                return;
            if (Lite.data.getCoin() < this._curSkin.price) {
                Lite.ui.showToast('金币不够！');
                return;
            }
            Lite.ui.showToast(`恭喜获得 ${this._curSkin.name} 皮肤`);
            Lite.data.addHasSkins(this._curSkin.ID);
            Lite.data.subCoin(this._curSkin.price);
            Lite.data.setCurrentSkin(this._curSkin.ID);
            this.shopList0.refresh();
        }
        onBtnVideoBuy() {
            let f = this.buyTest();
            if (!f)
                return;
            moosnow.platform.showVideo(res => {
                switch (res) {
                    case moosnow.VIDEO_STATUS.NOTEND:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                        break;
                    case moosnow.VIDEO_STATUS.ERR:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                        break;
                    case moosnow.VIDEO_STATUS.END:
                        let num = Lite.data.addSkinVideoNum(this._curSkin.ID);
                        if (num >= this._curSkin.videoNum) {
                            Lite.ui.showToast(`恭喜获得 ${this._curSkin.name} 皮肤`);
                            Lite.data.addHasSkins(this._curSkin.ID);
                            this.shopList0.refresh();
                        }
                        else {
                            Lite.ui.showToast(`离获得 ${this._curSkin.name} 皮肤又进了一点`);
                        }
                        this.onSelect(this._curSkin.ID);
                        break;
                    default:
                        break;
                }
            });
        }
        buyTest() {
            if (!this._curSkin) {
                Lite.ui.showToast('请先选中需要购买的皮肤！');
                return false;
            }
            if (Lite.data.getIsHasSkin(this._curSkin.ID)) {
                Lite.ui.showToast('已经拥有此皮肤');
                return false;
            }
            return true;
        }
        willShow() {
            this.addEvent();
        }
        willHide() {
            this.removeEvent();
        }
        updateItem(cell, index) {
            let item = cell.getComponent(ShopViewItem);
            item.updateItem(cell.dataSource, index);
        }
        addEvent() {
            this.close.on(Laya.Event.CLICK, this, this.onClose);
            this.btnBuy.on(Laya.Event.CLICK, this, this.onBtnBuy);
            this.btnVideoBuy.on(Laya.Event.CLICK, this, this.onBtnVideoBuy);
            Lite.event.addListener(EventType.COIN_CHANGED, this, this.onCoinChanged);
            Lite.event.addListener(EventType.SKIN_SELECTED, this, this.onSelect);
        }
        removeEvent() {
            this.close.off(Laya.Event.CLICK, this, this.onClose);
            this.btnBuy.off(Laya.Event.CLICK, this, this.onBtnBuy);
            this.btnVideoBuy.off(Laya.Event.CLICK, this, this.onBtnVideoBuy);
            Lite.event.removeListener(EventType.SKIN_SELECTED, this);
            Lite.event.removeListener(EventType.COIN_CHANGED, this);
        }
        onClose() {
            Lite.ui.hideUIForm(UIForms.ShopForm, null);
        }
        onDisable() {
        }
    }

    class TrailSkinForm extends UIForm {
        constructor() {
            super();
            this.imgSkin = null;
            this.btnClose = null;
            this.btnVideoSkin = null;
            this.skin = null;
            this.isMask = true;
        }
        onAwake() {
            super.onAwake();
            this.addEvent();
        }
        addEvent() {
            this.btnVideoSkin.on(Laya.Event.CLICK, this, this.onVideoSkin);
            this.btnClose.on(Laya.Event.CLICK, this, this.goOn);
        }
        willShow(skin) {
            super.willShow(skin);
            this.skin = skin;
            this.imgSkin.skin = this.skin.img;
            this.btnClose.visible = false;
            moosnow.http.getAllConfig(res => {
                if (res && res.delayShow > 0) {
                    Laya.timer.once(res.delayShow * 1000, this, () => {
                        this.btnClose.visible = true;
                    });
                }
                else {
                    this.btnClose.visible = true;
                }
            });
        }
        onShow() {
            Lite.event.sendEventImmediately(EventType.SHOW_AD, [ADType.GAME]);
            moosnow.platform.showBanner(false);
        }
        onVideoSkin() {
            moosnow.platform.showVideo(res => {
                switch (res) {
                    case moosnow.VIDEO_STATUS.NOTEND:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                        break;
                    case moosnow.VIDEO_STATUS.ERR:
                        Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                        break;
                    case moosnow.VIDEO_STATUS.END:
                        Lite.data.setCurrentSkin(this.skin.ID);
                        Lite.ui.showToast(`试用 ${this.skin.name} 皮肤`);
                        this.goOn();
                        break;
                    default:
                        break;
                }
            });
        }
        goOn() {
            Lite.ui.hideUIForm(UIForms.TrialSkinForm, null, () => {
                Lite.event.sendEventImmediately(EventType.GAME_STATE_START, this.FormData);
            });
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("logic/scene/LoadingView.ts", LoadingView);
            reg("logic/scene/MainView.ts", MainView);
            reg("logic/form/adItem.ts", adItem);
            reg("logic/form/adItemFloat.ts", adItemFloat);
            reg("extends/ButtonEffect.ts", ButtonEx);
            reg("logic/form/AdForm.ts", AdForm);
            reg("framework/TouchManager.ts", TouchManager);
            reg("logic/form/GameForm.ts", GameForm);
            reg("logic/form/GameOver.ts", GameOver);
            reg("logic/form/HomeForm.ts", HomeForm);
            reg("logic/form/MapViewItem.ts", MapViewItem);
            reg("logic/form/MistouchForm.ts", MistouchForm);
            reg("logic/form/RespawnForm.ts", RespawnForm);
            reg("logic/form/SetForm.ts", SetForm);
            reg("logic/form/ShopViewItem.ts", ShopViewItem);
            reg("logic/form/ShopForm.ts", ShopForm);
            reg("framework/ui/ToastForm.ts", ToastForm);
            reg("logic/form/TrailSkinForm.ts", TrailSkinForm);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "center";
    GameConfig.startScene = "scene/Loading.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
