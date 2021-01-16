(function () {
  'use strict';

  class ProgressBar extends Laya.Script {
      constructor() {
          super(...arguments);
          this.OnValueChanged = [];
          this._Value = 0;
      }
      onAwake() {
          this.Sprite = this.owner;
          this.BackGround = this.owner;
          this.BarSelf = this.BackGround.getChildAt(0);
          this.Bar = this.BackGround.getChildAt(0).mask;
          if (false == this._Active)
              this.Sprite.alpha = 0;
      }
      set Value(inner) {
          this._Value = inner;
          this._Value = this._Value >= 1 ? 1 : this._Value;
          this._Value = this._Value <= 0 ? 0 : this._Value;
          this.Bar.width = this.BarSelf.width * this.Value;
          this.OnValueChanged.forEach((Func) => {
              Func(this._Value);
          });
      }
      get Value() {
          return this._Value;
      }
      set Active(inner) {
          this._Active = inner;
          if (inner == false) {
              Laya.Tween.to(this.Sprite, { alpha: 0 }, 400, null, Laya.Handler.create(this, () => {
              }, null, true));
          }
          else {
              Laya.Tween.to(this.Sprite, { alpha: 1 }, 400, null, null, null, true);
          }
      }
      ReSetToDisable() {
          this.Sprite.alpha = 0;
      }
      get Active() {
          return this._Active;
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
  EventType.GAME_STATE_RESURRECT = "GAME_STATE_RESURRECT";
  EventType.CAMERA_MIS = "CAMERA_MIS";
  EventType.SPEED_LOW = "SPEED_LOW";
  EventType.ADDSPEEDNUM = "ADDSPEEDNUM";
  EventType.HIDE_START_BTN = "HIDE_START_BTN";
  EventType.SHOW_START_BTN = "SHOW_START_BTN";
  EventType.SHOW_DIS = "SHOW_DIS";
  EventType.SHOW_SPEED = "SHOW_SPEED";
  EventType.SHOW_GUID = "SHOW_GUID";
  EventType.HIDE_GUID = "HIDE_GUID";
  EventType.CAMERAPOS = "CAMERAPOS";
  EventType.HOMESHOW = "HOMESHOW";
  EventType.HOMEHIDE = "HOMEHIDE";
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
  EventType.SPEED_LEVEL_CHANGED = "SPEED_LEVEL_CHANGED";
  EventType.KEY_CHANGED = "KEY_CHANGED";
  EventType.DIAMOND_CHANGED = "DIAMOND_CHANGED";
  EventType.SHOW_REWARD_COIN = "SHOW_REWARD_COIN";
  EventType.HIDE_COIN = "HIDE_COIN";
  EventType.SKIN_CHANGED = "SKIN_CHANGED";
  EventType.SKIN_GET = "SKIN_GET";
  EventType.GAME_COIN_CHANGED = "GAME_COIN_CHANGED";
  EventType.SKILL_CLICK = "SKILL_CLICK";
  EventType.SKIN_SELECTED = "SKIN_SELECTED";
  EventType.LOADING_PROGRESS = "LOADING_PROGRESS";
  EventType.SHOW_WIND_Effect = "SHOW_WIND_Effect";
  EventType.STOP_WIND_Effect = "STOP_WIND_Effect";
  EventType.SHOW_WIN_Effect = "SHOW_WIN_Effect";
  EventType.SHOW_BOOM_Effect = "SHOW_BOOM_Effect";
  EventType.SHOW_COIN_Effect = "SHOW_COIN_Effect";
  EventType.SHOW_COIN_BOOM_Effect = "SHOW_COIN_BOOM_Effect";
  EventType.SHOW_JUMP_Effect = "SHOW_JUMP_Effect";
  EventType.SHOW_JUMP_DOWN_Effect = "SHOW_JUMP_DOWN_Effect";
  EventType.CrazyClickPerformOnHide = "CrazyClickPerformOnHide";
  EventType.SHOW_AD = "SHOW_AD";
  EventType.SHOW_EXPORT = "SHOW_EXPORT";
  EventType.HIDE_AD = "HIDE_AD";
  EventType.SHOW_BANNER = "SHOW_BANNER";
  EventType.HIDE_BANNER = "HIDE_BANNER";
  EventType.CLOSE_LOADINGVIEW = "CLOSE_LOADINGVIEW";
  EventType.GotoNextProgress = "GOTO_NEXTPROGRESS";
  EventType.TrySkinGift = "TryASkin";
  EventType.ResetSkin = "ResetSkin";
  EventType.CrazyClickGift = "CrazyClickGift";
  EventType.TurnToGameCenter = "TurnToGameCenter";
  EventType.ExportStart = "ExportStart";
  EventType.ExportAchive = "ExportAchive";
  EventType.ShowLoadingForm = "ShowLoadingForm";
  EventType.HideLoadingForm = "HideLoadingForm";
  EventType.FriendHotShow = "FriendHotShow";
  EventType.FriendHotHide = "FriendHotHide";
  EventType.GameCenterShow = "GameCenterShow";
  EventType.GameCenterHide = "GameCenterHide";
  EventType.TrySkinShow = "TrySkinShow";
  EventType.TrySkinHide = "TrySkinHide";
  EventType.BoutiqueShow = "BoutiqueShow";
  EventType.BoutiqueHide = "BoutiqueHide";
  EventType.TopHotShow = "TopHotShow";
  EventType.TopHotHide = "TopHotHide";
  EventType.CrazyClickShow = "CrazyClickShow";
  EventType.CrazyClickHide = "CrazyClickHide";
  EventType.GameStateChange = "GameStateChange";

  class UIForms {
  }
  UIForms.HomeForm = "HomeFormExample";
  UIForms.InGameForm = "InGameFormExample";
  UIForms.GameOverForm = "GameOverFormExample";
  UIForms.FriendHot = "Export_FriendHot";
  UIForms.GameCenter = "Export_GameCenter";
  UIForms.TrySkin = "Ad_TrySkin";
  UIForms.Boutique = "Export_Boutique";
  UIForms.TopHot = "Export_TopHot";
  UIForms.CrazyClick = "Ad_CrazyClick";
  UIForms.FakeBanner = "Export_FakeBanner";
  UIForms.LoadingForm = "LoadingForm";

  class SiteMgr {
      constructor() {
          this.curWaitingAdsQueue = [];
          this.curMainProgress = MainProgress.Loading;
          this.couldJumpToGameCenter = false;
          this.curAldSendValue = "";
          this.nextEvent = Laya.Handler.create(this, () => {
              if (this.curWaitingAdsQueue.length > 0) {
                  let num = this.curWaitingAdsQueue.shift();
                  this.showAdForm(num);
              }
              else {
                  if (null != this.curAdFormInLine) {
                      this.curAdFormInLine.hide();
                  }
                  this.curAdFormInLine = null;
                  this.curNextProgress.method.apply(this.curNextProgress.caller, this.curNextProgress.args);
              }
          }, null, false);
          this.setCurAdForm = (innerForm, args) => {
              console.log("跳转到下一个adForm:", innerForm);
              if (null != this.curAdFormInLine) {
                  this.curAdFormInLine.hide();
              }
              this.curAdFormInLine = innerForm.UIForm;
          };
          SiteMgr.instance = this;
          moosnow.event.addListener(EventType.GotoNextProgress, this, this.goNextMainProgress);
          moosnow.event.addListener(EventType.TurnToGameCenter, this, () => {
              if (true == Lite.config.CancelToSkip && true == this.couldJumpToGameCenter) {
                  console.log("转到游戏中心页面");
                  this.couldJumpToGameCenter = false;
                  let lastcurAldSendValue = this.curAldSendValue.valueOf();
                  this.curAldSendValue = aldValue.GameCenter;
                  Lite.ui.pushUIForm(UIForms.GameCenter, Laya.Handler.create(this, () => {
                      this.curAldSendValue = lastcurAldSendValue.valueOf();
                      Lite.ui.hideUIForm(UIForms.GameCenter);
                      this.couldJumpToGameCenter = true;
                  }));
                  this.setAldPoint(aldKey.ViewOpen, aldValue.GameCenter);
              }
              else {
                  console.log("跳转游戏中心开关关闭");
              }
          });
          moosnow.event.addListener(EventType.ExportStart, this, () => {
              this.setAldPoint(aldKey.ExportStart, this.curAldSendValue);
          });
          moosnow.event.addListener(EventType.ExportAchive, this, () => {
              this.setAldPoint(aldKey.ExportAchive, this.curAldSendValue);
          });
          moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_BANNER_ERROR, this, (inner) => {
              Lite.ui.pushUIForm(UIForms.FakeBanner);
          });
          moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE, this, () => {
              Lite.ui.hideUIForm(UIForms.FakeBanner);
          });
          moosnow.event.addListener(EventType.ShowLoadingForm, this, () => {
              Lite.ui.pushUIForm(UIForms.LoadingForm);
          });
          moosnow.event.addListener(EventType.HideLoadingForm, this, () => {
              Lite.ui.hideUIForm(UIForms.LoadingForm);
          });
      }
      static get Instance() {
          return this.instance;
      }
      goNextMainProgress(args) {
          switch (this.curMainProgress) {
              case MainProgress.Loading:
                  this.transToNextForm(Lite.config.Site01, Laya.Handler.create(this, () => {
                      Lite.ui.pushUIForm(UIForms.HomeForm);
                      this.curAldSendValue = aldValue.Home;
                      this.setAldPoint(aldKey.ViewOpen, aldValue.Home);
                      this.couldJumpToGameCenter = true;
                  }));
                  this.curMainProgress = 1;
                  break;
              case MainProgress.Home:
                  Lite.ui.hideUIForm(UIForms.HomeForm);
                  this.transToNextForm(Lite.config.Site02, Laya.Handler.create(this, () => {
                      Lite.ui.pushUIForm(UIForms.InGameForm);
                      this.curAldSendValue = aldValue.InGame;
                      this.setAldPoint(aldKey.ViewOpen, aldValue.InGame);
                      this.couldJumpToGameCenter = false;
                  }));
                  this.curMainProgress = 2;
                  break;
              case MainProgress.InGame:
                  Lite.ui.hideUIForm(UIForms.InGameForm);
                  this.transToNextForm(Lite.config.Site03, Laya.Handler.create(this, () => {
                      Lite.ui.pushUIForm(UIForms.GameOverForm, args);
                      this.curAldSendValue = aldValue.GameOver;
                      this.setAldPoint(aldKey.ViewOpen, aldValue.GameOver);
                      this.couldJumpToGameCenter = true;
                  }));
                  this.curMainProgress = 3;
                  break;
              case MainProgress.GameOver:
                  Lite.ui.hideUIForm(UIForms.GameOverForm);
                  this.transToNextForm(Lite.config.Site04, Laya.Handler.create(this, () => {
                      Lite.ui.pushUIForm(UIForms.HomeForm);
                      this.curAldSendValue = aldValue.Home;
                      this.setAldPoint(aldKey.ViewOpen, aldValue.Home);
                      this.couldJumpToGameCenter = true;
                  }));
                  this.curMainProgress = 1;
                  break;
          }
      }
      transToNextForm(innerNums, nextMainProgressForm) {
          console.log("跳转到这些广告页:", innerNums);
          for (let q = 0; q < innerNums.length; q++) {
              this.curWaitingAdsQueue.push(innerNums[q]);
          }
          this.curNextProgress = nextMainProgressForm;
          this.nextEvent.method.apply(this.nextEvent.caller, this.nextEvent.args);
      }
      showAdForm(innerNum) {
          console.log("SiteMgr:打开", innerNum, "号Ad页面");
          switch (innerNum) {
              case 1:
                  this.couldJumpToGameCenter = true;
                  this.setAldPoint(aldKey.ViewOpen, aldValue.FriendHot);
                  this.curAldSendValue = aldValue.FriendHot;
                  Lite.ui.pushUIForm(UIForms.FriendHot, this.nextEvent, this.setCurAdForm);
                  break;
              case 2:
                  this.couldJumpToGameCenter = false;
                  this.setAldPoint(aldKey.ViewOpen, aldValue.GameCenter);
                  this.curAldSendValue = aldValue.GameCenter;
                  Lite.ui.pushUIForm(UIForms.GameCenter, this.nextEvent, this.setCurAdForm);
                  break;
              case 3:
                  this.couldJumpToGameCenter = false;
                  this.setAldPoint(aldKey.ViewOpen, aldValue.TrySkin);
                  this.curAldSendValue = aldValue.TrySkin;
                  Lite.ui.pushUIForm(UIForms.TrySkin, this.nextEvent, this.setCurAdForm);
                  break;
              case 4:
                  this.couldJumpToGameCenter = false;
                  this.setAldPoint(aldKey.ViewOpen, aldValue.Boutique);
                  this.curAldSendValue = aldValue.Boutique;
                  Lite.ui.pushUIForm(UIForms.Boutique, this.nextEvent, this.setCurAdForm);
                  break;
              case 5:
                  this.couldJumpToGameCenter = false;
                  this.setAldPoint(aldKey.ViewOpen, aldValue.TopHot);
                  this.curAldSendValue = aldValue.TopHot;
                  Lite.ui.pushUIForm(UIForms.TopHot, this.nextEvent, this.setCurAdForm);
                  break;
              case 6:
                  this.couldJumpToGameCenter = false;
                  Lite.ui.pushUIForm(UIForms.CrazyClick, this.nextEvent, this.setCurAdForm);
                  break;
          }
      }
      setAldPoint(key, value) {
          if (true == Lite.config.aldMonitorOn) {
              console.log("-----------------------发送阿拉丁", key, value);
              moosnow.http.point(key, value);
          }
          else {
              console.log("-----------------------阿拉丁发送关闭", key, value);
          }
      }
  }
  var MainProgress;
  (function (MainProgress) {
      MainProgress[MainProgress["Loading"] = 0] = "Loading";
      MainProgress[MainProgress["Home"] = 1] = "Home";
      MainProgress[MainProgress["InGame"] = 2] = "InGame";
      MainProgress[MainProgress["GameOver"] = 3] = "GameOver";
  })(MainProgress || (MainProgress = {}));
  class aldKey {
  }
  aldKey.ViewOpen = "页面打开次数";
  aldKey.ExportStart = "跳转打开次数";
  aldKey.ExportAchive = "跳转成功次数";
  class aldValue {
  }
  aldValue.Loading = "Loading界面";
  aldValue.Home = "游戏首页";
  aldValue.InGame = "游戏中";
  aldValue.GameOver = "结算";
  aldValue.FriendHot = "好友热玩";
  aldValue.Boutique = "精品游戏";
  aldValue.GameCenter = "游戏中心";
  aldValue.TrySkin = "皮肤试用";
  aldValue.TopHot = "热门游戏";
  var GameState;
  (function (GameState) {
      GameState[GameState["Home"] = 0] = "Home";
      GameState[GameState["InGame"] = 1] = "InGame";
      GameState[GameState["Win"] = 2] = "Win";
      GameState[GameState["Fail"] = 3] = "Fail";
  })(GameState || (GameState = {}));

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

  class GameDataCenter extends BaseModule {
      constructor() {
          super();
          this.CURRENT_NEW_USER = "CURRENT_NEW_USER";
          this.IS_UPDATE = "IS_UPDATE";
          this.MUSIC_SWITCH = "MUSIC_SWITCH";
          this.SOUND_SWITCH = "SOUND_SWITCH";
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
          this.SPEED_UP_LEVEL = "SPEED_UP_LEVEL";
          this.CURRENT_SKIN_0 = "CURRENT_SKIN_0";
          this.CURRENT_SKIN_1 = "CURRENT_SKIN_1";
          this.HAS_SKINS = "HAS_SKINS";
          this.LOCK_SKIN = "LOCK_SKIN";
          this.UNLOCKED_SKINS = "UNLOCKED_SKINS";
          this.CURRENT_SKILL = "CURRENT_SKILL";
          this.GAME_OUT_TIME = "GAME_OUT_TIME";
          this.SHOP_SUMMARY = "SHOP_SUMMARY";
          this.RECORD_COIN = "RECORD_COIN";
          this.RECORD_KEY = "RECORD_KEY";
          this.GUN_SKIN = "GUN_SKIN";
          this.HELMET_SKIN = "HELMET_SKIN";
          this.SHIELD_SKIN = "SHIELD_SKIN";
          this.CUR_GUN_SKIN = "CUR_GUN_SKIN";
          this.CUR_HELMET_SKIN = "CUR_HELMET_SKIN";
          this.CUR_SHIELD_SKIN = "CUR_SHIELD_SKIN";
          this.CUR_GUN_VALUE = "CUR_GUN_VALUE";
          this.CUR_HELMET_VALUE = "CUR_HELMET_VALUE";
          this.CUR_SHIELD_VALUE = "CUR_SHIELD_VALUE";
          this.vibrate_switch = null;
          this.sound_switch = null;
          this.mLevel = 0;
          this.mVirtualLevel = 0;
          this.mCoin = 0;
          this.mSpeedLevel = 0;
          this.initNewData();
      }
      getIsNew() {
          return moosnow.setting.getBool(this.CURRENT_NEW_USER, true);
      }
      setIsNew(on) {
          moosnow.setting.setBool(this.CURRENT_NEW_USER, on);
      }
      getToken() {
          return moosnow.setting.getString(this.TOKEN, "");
      }
      setToken(v) {
          moosnow.setting.setValue(this.TOKEN, v);
      }
      getChannelId() {
          return moosnow.setting.getInt(this.CHANNEL_ID, 0);
      }
      setChannelId(v) {
          moosnow.setting.setValue(this.CHANNEL_ID, v);
      }
      getOpenid() {
          return moosnow.setting.getString(this.OPEN_ID, "");
      }
      setOpenid(v) {
          moosnow.setting.setValue(this.OPEN_ID, v);
      }
      getVibrateSetting() {
          if (this.vibrate_switch == null) {
              this.vibrate_switch = moosnow.setting.getBool(this.VIBRATE_SWITCH, true);
          }
          return this.vibrate_switch;
      }
      setVibrateSetting(on) {
          moosnow.setting.setBool(this.VIBRATE_SWITCH, on);
          this.vibrate_switch = on;
          moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.VIBRATESWITCH_CHANGED, on);
      }
      getSoundSetting() {
          if (this.sound_switch == null) {
              this.sound_switch = moosnow.setting.getBool(this.SOUND_SWITCH, true);
          }
          return this.sound_switch;
      }
      setSoundSetting(on) {
          moosnow.setting.setBool(this.SOUND_SWITCH, on);
          this.sound_switch = on;
          moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.VIBRATESWITCH_CHANGED, on);
      }
      convertSpeedByDelta(speed, delta) {
          if (delta > 167)
              delta = 16.67;
          return speed * (delta / 1000);
      }
      initNewData() {
          if (this.getToken())
              return;
          console.log("initNewDatainitNewDatainitNewData");
          this.setCurrentLevel(1);
          this.setVirtualLevel(1);
          this.setToken(moosnow.Common.generateUUID());
          this.setSoundSetting(false);
          this.setVibrateSetting(false);
      }
      getCurrentLevelStr() {
          let lv = this.getCurrentLevel();
          return lv.toString();
      }
      getCurrentLevel() {
          if (this.mLevel == 0) {
              this.mLevel = moosnow.setting.getInt(this.CURRENT_LEVEL, 1);
          }
          return this.mLevel;
      }
      setCurrentLevel(level) {
          this.mLevel = level;
          moosnow.setting.setValue(this.CURRENT_LEVEL, this.mLevel);
          moosnow.event.sendEventImmediately(EventType.LEVEL_CHANGED, this.mLevel);
      }
      addCurrentLevel(value = 1) {
          let curLevel = this.getCurrentLevel();
          curLevel++;
          this.setCurrentLevel(curLevel);
      }
      getVirtualLevel() {
          if (this.mVirtualLevel == 0)
              this.mVirtualLevel = moosnow.setting.getInt(this.VIRTUAL_LEVEL, 1);
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
          moosnow.setting.setValue(this.VIRTUAL_LEVEL, this.mVirtualLevel);
      }
      getCoin() {
          if (this.mCoin == 0)
              this.mCoin = moosnow.setting.getInt(this.COIN, 0);
          return this.mCoin;
      }
      subCoin(v) {
          this.mCoin -= v;
          this.saveCoin();
      }
      addCoin(v) {
          this.mCoin += v;
          this.saveCoin();
      }
      setCoin(v) {
          this.mCoin = v;
          this.saveCoin();
      }
      saveCoin() {
          moosnow.setting.setValue(this.COIN, this.mCoin);
          moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
      }
      getSpeedLevel() {
          if (this.mSpeedLevel == 0)
              this.mSpeedLevel = moosnow.setting.getInt(this.SPEED_UP_LEVEL, 0);
          return this.mSpeedLevel;
      }
      addSpeedLevel(v = 1) {
          if (this.mSpeedLevel >= 125) {
              return false;
          }
          this.mSpeedLevel += v;
          this.mSpeedLevel = this.mSpeedLevel > 125 ? 125 : this.mSpeedLevel;
          this.saveSpeedLevel();
          return true;
      }
      setSpeedLevel(v) {
          this.mSpeedLevel = v;
          this.saveSpeedLevel();
      }
      saveSpeedLevel() {
          moosnow.setting.setValue(this.SPEED_UP_LEVEL, this.mSpeedLevel);
          moosnow.event.sendEventImmediately(EventType.SPEED_LEVEL_CHANGED, this.mSpeedLevel);
      }
      getSignNum() {
          return moosnow.setting.getInt(this.SIGN_NUM, 0);
      }
      addSignNum() {
          moosnow.setting.appendInt(this.SIGN_NUM, 1);
          moosnow.setting.setValue(this.SIGN_DATE, moosnow.Common.formatTime(new Date()));
      }
      setVideoSign() {
          moosnow.setting.setValue(this.SIGN_VIDEO_DATE, moosnow.Common.formatTime(new Date()));
      }
      getIsSign() {
          let now = moosnow.Common.formatTime(new Date());
          return now == moosnow.setting.getString(this.SIGN_DATE, "");
      }
      getIsVideoSign() {
          let now = moosnow.Common.formatTime(new Date());
          return now == moosnow.setting.getString(this.SIGN_VIDEO_DATE, "");
      }
      getHasSkins() {
          return moosnow.setting.getObject(this.HAS_SKINS, null);
      }
      addHasSkins(v) {
          let arr = this.getHasSkins() || [];
          arr.push(v);
          this.setHasSkins(arr);
      }
      setHasSkins(v) {
          moosnow.setting.setObject(this.HAS_SKINS, v);
      }
      getIsHasSkin(v) {
          let arr = this.getHasSkins();
          for (let i = 0, len = arr.length; i < len; i++) {
              if (arr[i] == v)
                  return true;
          }
          return false;
      }
      getUnlockedSkins() {
          return moosnow.setting.getObject(this.UNLOCKED_SKINS, [0]);
      }
      addUnlockedSkins(v) {
          let arr = this.getUnlockedSkins() || [0];
          arr.push(v);
          this.setUnlockedSkins(arr);
      }
      subUnlockedSkins(v) {
          let arr = this.getUnlockedSkins();
          if (arr != null && arr.length > 0) {
              for (let i = 0; i < arr.length; i++) {
                  if (arr[i] == v) {
                      arr.splice(i, 1);
                  }
              }
          }
          this.setUnlockedSkins(arr);
      }
      setUnlockedSkins(v) {
          moosnow.setting.setObject(this.UNLOCKED_SKINS, v);
      }
      getIsUnlockedSkin(v) {
          let arr = this.getUnlockedSkins() || [];
          for (let i = 0, len = arr.length; i < len; i++) {
              if (arr[i] == v)
                  return true;
          }
          return false;
      }
      getCurrentSkin(type) {
          if (type == 0) {
              return moosnow.setting.getInt(this.CURRENT_SKIN_0, 1);
          }
          else {
              return moosnow.setting.getInt(this.CURRENT_SKIN_1, 1);
          }
      }
      setCurrentSkin(type, v) {
          if (type == 0) {
              moosnow.setting.setValue(this.CURRENT_SKIN_0, v);
          }
          else {
              moosnow.setting.setValue(this.CURRENT_SKIN_1, v);
          }
      }
  }

  class Random {
      constructor(seed) {
          this.seed = seed;
          if (!this.seed && this.seed != 0) {
              this.seed = new Date().getTime();
          }
      }
      get value() {
          return this.range(0, 1);
      }
      get insideUnitCircle() {
          var randomAngle = this.range(0, 360);
          var randomDis = this.range(0, 1);
          var randomX = randomDis * Math.cos((randomAngle * Math.PI) / 180);
          var randomY = randomDis * Math.sin((randomAngle * Math.PI) / 180);
          return new Laya.Vector2(randomX, randomY);
      }
      get onUnitCircle() {
          var randomAngle = this.range(0, 360);
          var randomX = Math.cos((randomAngle * Math.PI) / 180);
          var randomY = Math.sin((randomAngle * Math.PI) / 180);
          return new Laya.Vector2(randomX, randomY);
      }
      range(min, max) {
          if (!this.seed && this.seed != 0) {
              this.seed = new Date().getTime();
          }
          max = max || 1;
          min = min || 0;
          this.seed = (this.seed * 9301 + 49297) % 233280;
          var rnd = this.seed / 233280.0;
          return min + rnd * (max - min);
      }
      static get value() {
          return this.range(0, 1);
      }
      static get insideUnitCircle() {
          var randomAngle = this.range(0, 360);
          var randomDis = this.range(0, 1);
          var randomX = randomDis * Math.cos((randomAngle * Math.PI) / 180);
          var randomY = randomDis * Math.sin((randomAngle * Math.PI) / 180);
          return new Laya.Vector2(randomX, randomY);
      }
      static get onUnitCircle() {
          var randomAngle = this.range(0, 360);
          var randomX = Math.cos((randomAngle * Math.PI) / 180);
          var randomY = Math.sin((randomAngle * Math.PI) / 180);
          return new Laya.Vector2(randomX, randomY);
      }
      static range(min, max) {
          if (!this.seed && this.seed != 0) {
              this.seed = new Date().getTime();
          }
          max = max || 1;
          min = min || 0;
          this.seed = (this.seed * 9301 + 49297) % 233280;
          var rnd = this.seed / 233280.0;
          return min + rnd * (max - min);
      }
      static rangeFloor(min, max) {
          return Math.floor(Random.range(min, max));
      }
      static get Boolean() {
          return this.range(0, 1) < 0.5 ? false : true;
      }
  }

  class AppConfig extends BaseModule {
      constructor() {
          super();
          this.mistouchPosNum = 0;
          this.bannerShowCountLimit = 10;
          this.mAdData = null;
          this.gameNum = 0;
          this.gameNumPos = 0;
          this.aldMonitorOn = false;
          this.Site01 = [1];
          this.Site02 = [2];
          this.Site03 = [3];
          this.Site04 = [4];
          this.mistouchNum = 1;
          this.CrazyStartLevel = 1;
          this.mistouchInterval = 1;
          this.FlashBanner01 = 1;
          this.RewardOffsetBanner = 1;
          this.GGPopWudian = 1;
          this.SkinWudian = 1;
          this.GameCenterWudian = 1;
          this.OffsetBannerDelayTime = 1000;
          this.OffsetBannerContinueTime = 1000;
          this.FlashBannerDelayTime = 1000;
          this.FlashBannerContinueTime = 1000;
          this.ForceSkip01 = false;
          this.ForceSkip02 = false;
          this.SliceSkip = false;
          this.CancelToSkip = false;
          this.SkinForceAd = false;
      }
      set allConfig(inner) {
          this._allConfig = inner;
          this.Site01 = [6];
          this._allConfig.site02 && (this.Site02 = this._allConfig.site02);
          this._allConfig.site03 && (this.Site03 = this._allConfig.site03);
          this._allConfig.site03 && (this.Site04 = this._allConfig.site04);
          this.mistouchNum = Number(this._allConfig.mistouchNum);
          this.CrazyStartLevel = Number(this._allConfig.CrazyStartLevel);
          this.mistouchInterval = Number(this._allConfig.mistouchInterval);
          this.FlashBanner01 = Number(this._allConfig.FlashBanner01);
          this.RewardOffsetBanner = Number(this._allConfig.RewardOffsetBanner);
          this.GGPopWudian = Number(this._allConfig.GGPopWudian);
          this.SkinWudian = Number(this._allConfig.SkinWudian);
          this.GameCenterWudian = Number(this._allConfig.GameCenterWudian);
          this.OffsetBannerDelayTime = Number(this._allConfig.OffsetBannerDelayTime) * 1000;
          this.OffsetBannerContinueTime = Number(this._allConfig.OffsetBannerContinueTime) * 1000;
          this.FlashBannerDelayTime = Number(this._allConfig.FlashBannerDelayTime);
          this.FlashBannerContinueTime = Number(this._allConfig.FlashBannerContinueTime);
          this.ForceSkip01 = this._allConfig.ForceSkip01 == "1" ? true : false;
          this.ForceSkip02 = this._allConfig.ForceSkip02 == "1" ? true : false;
          this.SliceSkip = this._allConfig.SliceSkip == "1" ? true : false;
          this.CancelToSkip = this._allConfig.CancelToSkip == "1" ? true : false;
          this.SkinForceAd = this._allConfig.SkinForceAd == "1" ? true : false;
          this.aldMonitorOn = this._allConfig.aldMonitorOn == "1" ? true : false;
      }
      get allConfig() {
          return this._allConfig;
      }
      onEnable() { }
      getAd() {
          let arr = [...this.adData.indexLeft];
          return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
      }
      getRandomAd(source) {
          let arr = [];
          if (source)
              arr = source;
          else
              arr = [...this.mAdData.indexLeft];
          let i = Random.range(0, arr.length - 1);
          return arr[i];
      }
      set adData(v) {
          this.mAdData = v;
      }
      get adData() {
          this.mAdData.indexLeft.sort(() => (Math.random() > 0.5 ? 1 : -1));
          return this.mAdData;
      }
      addGameNum() {
          this.gameNum++;
          this.gameNumPos++;
      }
      isMistouch() {
          return this.mistouchNum;
      }
      isMistouchPos() {
          if (this.mistouchPosNum != 0) {
              return true;
          }
          return false;
      }
      resetGameNum() {
          if (this.isMistouch())
              this.gameNum = 0;
          if (this.isMistouchPos())
              this.gameNumPos = 0;
      }
  }

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
          this._isVib = true;
          this.gameCoinTime = 0;
          this.getSave();
      }
      onEnable() {
      }
      playHomeMusci() {
          this.playMusic("subRes/audio/homeBG.mp3");
      }
      playGameMusic() {
          this.playMusic("subRes/audio/gameBG.mp3");
      }
      playClickEffect() {
          this.playSound("subRes/audio/btnSound.mp3");
      }
      playFailEffect() {
          this.playSound("subRes/audio/fail.mp3");
      }
      playWinEffect() {
          this.playSound("subRes/audio/win.mp3");
      }
      playDiamonEffect() {
          this.playSound("subRes/audio/diamon.mp3");
      }
      playHuaXianEffect() {
          this.playSound("subRes/audio/huaxian.mp3");
      }
      playChongCiEffect() {
          this.playSound("subRes/audio/chongci.mp3");
      }
      stopChongCiEffect() {
          this.stopSound("subRes/audio/chongci.mp3");
      }
      playUseMoneyEffect() {
          this.playSound("subRes/audio/useMoney.mp3");
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
      vibrateShort() {
          if (!this._isVib)
              return;
          moosnow.platform.vibrateShort();
      }
      vibrateLong() {
          if (!this._isVib)
              return;
          moosnow.platform.vibrateLong();
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
      }
      get isVib() {
          return this._isVib;
      }
      set isVib(value) {
          this._isVib = value;
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

  class Scene3DModule extends BaseModule {
      constructor() {
          super();
          this.scenePath = "subRes/LayaScene_";
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
              retScene.addComponent(this.sceneLogic);
              let addScene = Laya.stage.addChild(retScene);
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

  class UIForm extends Laya.Script {
      constructor() {
          super();
          this.isPopEffect = false;
          this.formName = "";
          this.formName = "";
      }
      get FormName() {
          return this.formName;
      }
      onAwake() {
          LoadingViewFrame.setFullView(this.owner);
      }
      onMaskMouseDown(e) {
          e.stopPropagation();
      }
      hide() {
          Lite.ui.hideUIForm(this.formName);
      }
      willShow(data) { }
      onShow(data) { }
      willHide(data) { }
      onHide(data) { }
      onEnable() { }
      onDisable() { }
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
          this.UIRoot = "prefab/form/";
          this.UIFormStack = [];
          this.cachedUIForms = [];
          this.toastForm = null;
          this.rootCanvas = Laya.stage;
      }
      onEnable() { }
      showToast(msg) {
          let self = this;
          if (self.toastForm == null) {
              this._createUINode("ToastForm", 9999, function (node, index) {
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
              moosnow.platform.showLoading(title);
          }
          else {
              moosnow.platform.showLoading(title);
          }
      }
      hideLoading() {
          if (Laya.Browser.onMiniGame) {
              moosnow.platform.hideLoading();
          }
      }
      showModal(title, content, cancelTitle, confirmTitle, confirm) {
          if (Laya.Browser.onMiniGame) {
              moosnow.platform.showModal(title, content, cancelTitle, confirmTitle, confirm);
          }
      }
      showModalWithoutCancel(title, content, confirmTitle, confirm) {
          if (Laya.Browser.onMiniGame) {
              moosnow.platform.showModalWithoutCancel(title, content, confirmTitle, confirm);
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
          let path = this.UIRoot + name + ".json";
          moosnow.resource.loadAsset(path, Laya.Loader.PREFAB, (err, prefab) => {
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
              moosnow.Common.popOpenAnim(owner);
          }
      }
      _hideUIForm(formModel, data, cb) {
          formModel.UIForm.willHide(data);
          formModel.UIForm.onHide(data);
          this._removeStack(formModel);
          this.cachedUIForms.push(formModel);
          if (formModel.UIForm.isPopEffect) {
              let owner = formModel.node;
              formModel.node.visible = false;
              formModel.node.removeSelf();
              if (cb)
                  cb();
          }
          else {
              formModel.node.visible = false;
              formModel.node.removeSelf();
              if (cb)
                  cb();
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

  class InitLite {
      constructor() {
          this.mUi = new UIModule();
          this.mScene3D = new Scene3DModule();
          this.mConfig = new AppConfig();
          this.mAudio = new AudioModule();
          window["Lite"] = this;
          this.mData = new GameDataCenter();
      }
      get data() {
          return this.mData;
      }
      get ui() {
          return this.mUi;
      }
      get scene3D() {
          return this.mScene3D;
      }
      get config() {
          return this.mConfig;
      }
      get audio() {
          return this.mAudio;
      }
  }

  class LoadingViewFrame extends Laya.Script {
      constructor() {
          super(...arguments);
          this.preLoadPacList = [];
          this.preLoadResList = [];
          this.curLoadingPackage = 0;
          this.isRealLoadingBar = false;
          this.characterList = [];
          this.characterFloatHeight = 40;
      }
      onAwake() {
          new InitLite();
          LoadingViewFrame.setFullView(this.owner);
          this.progressBar = this.owner.getChildByName("progressBar").getComponent(ProgressBar);
          let self = this;
          this.progressBar.OnValueChanged.push((innerValueChangeNum) => {
              self.onProgressBarValueChange(innerValueChangeNum);
          });
          moosnow.event.addListener(EventType.CLOSE_LOADINGVIEW, this, () => {
              Laya.Tween.to(this.progressBar, { Value: 1 }, 1000, null, Laya.Handler.create(this, () => {
                  moosnow.event.sendEventImmediately(EventType.GotoNextProgress);
                  Laya.timer.once(200, this, () => {
                      this.owner.autoDestroyAtClosed = true;
                      this.owner.close();
                      for (let q = 0; q < this.characterList.length; q++) {
                          Laya.Tween.clearAll(this.characterList[q]);
                      }
                  });
              }));
          });
          var tmp = this.owner.getChildByName("characterList");
          if (tmp != null) {
              for (let q = 0; q < tmp.numChildren; q++) {
                  this.characterList.push(tmp.getChildAt(q));
              }
              if (this.characterList.length > 0) {
                  this.characterFloat(0);
              }
          }
          this.onAwaken();
      }
      onEnable() {
          this.loadAll();
          var self = this;
          self.loadTween = Laya.Tween.to(self.progressBar, { Value: 0.6 }, 2000, null, Laya.Handler.create(this, () => {
              self.isRealLoadingBar = true;
          }));
          this.onEnabled();
      }
      loadData(self) {
          if (null != self.preLoadResList && self.preLoadResList.length > 0) {
              console.log("LoadingView:开始预加载文件:", self.preLoadResList);
              Laya.loader.load(self.preLoadResList, Laya.Handler.create(self, (ok) => {
                  if (true == ok) {
                      self.progressBar.Value = 0.95;
                      Laya.timer.once(100, self, () => {
                          LoadingViewFrame.setChildFullView(self.owner);
                          console.log("LoadingView:文件预加载完成");
                          self.onProgressLoadComplete();
                      });
                  }
                  else {
                      console.error("LoadingView:文件加载出错,检查填写路径");
                  }
              }), Laya.Handler.create(self, (res) => {
                  if (true == self.isRealLoadingBar) {
                      self.progressBar.Value = 0.85 + 0.1 * res;
                  }
              }));
          }
          else {
              self.progressBar.Value = 0.95;
              Laya.timer.once(100, self, () => {
                  console.log("LoadingView:没有文件需要预加载");
                  self.onProgressLoadComplete();
              });
          }
      }
      packageLoader(self) {
          if (window["wx"]) {
              if (self.preLoadPacList != null && self.curLoadingPackage < self.preLoadPacList.length) {
                  self.loadPackage(self.preLoadPacList[self.curLoadingPackage], self, (res) => {
                      self.curLoadingPackage++;
                      self.packageLoader(self);
                  }, (res) => {
                      self.packageLoader(self);
                  });
              }
              else {
                  self.LoadPackageComplete(self);
              }
          }
          else {
              self.LoadPackageComplete(self);
          }
      }
      LoadPackageComplete(self) {
          if (self.isRealLoadingBar != true) {
              self.loadTween.to(self.progressBar, { Value: 0.8 }, 300, null, Laya.Handler.create(self, () => {
                  self.isRealLoadingBar = true;
                  self.loadData(self);
              }));
          }
          else {
              self.loadData(self);
          }
      }
      loadPackage(packageName, caller, onSuccess, onFail) {
          var loadSubResTask = Laya.Browser.window["wx"].loadSubpackage({
              name: packageName,
              success: onSuccess,
              fail: onFail,
          });
          if (true == this.isRealLoadingBar) {
              loadSubResTask.onProgressUpdate((res) => {
                  var progress = res["progress"];
                  caller.progressBar.Value = 0.6 + 0.2 * (progress / caller.preLoadPacList.length) + 0.2 * caller.curLoadingPackage;
              });
          }
      }
      loadAll() {
          moosnow.platform.login(() => {
              console.log("LoadingView:登录成功");
              let a = new SiteMgr();
              moosnow.ad.getAd((res) => {
                  console.log("LoadingView:广告数据 ", res);
                  Lite.config.adData = res;
                  moosnow.http.getAllConfig((res) => {
                      console.log("LoadingView:游戏的所有配置数据 ", res);
                      Lite.config.allConfig = res;
                      this.onConfigLoaded(res);
                      this.packageLoader(this);
                  });
              });
          });
      }
      characterFloat(Counter) {
          let tmps = this.characterList[Counter];
          let tmpy = tmps.y;
          Laya.Tween.to(tmps, { y: tmpy - this.characterFloatHeight }, 80, null, Laya.Handler.create(this, () => {
              Laya.Tween.to(tmps, { y: tmpy }, 80, null);
              this.characterFloat(Counter + 1 == this.characterList.length ? 0 : Counter + 1);
          }));
      }
      loadComplete() {
          this.onProgressLoadComplete();
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
          this.setFullView(parent);
          for (let i = 0; i < parent.numChildren; i++) {
              let child = parent.getChildAt(i);
              if (child instanceof Laya.Image)
                  continue;
              this.setFullView(child);
              if (child.numChildren > 0)
                  this.setChildFullView(child);
          }
      }
  }

  class LoadingView extends LoadingViewFrame {
      constructor() {
          super(...arguments);
          this.preLoadPacList = ["subRes"];
          this.preLoadResList = [];
      }
      onAwaken() {
          this.ProgressNum = this.owner.getChildByName("loading");
      }
      onEnabled() { }
      onProgressBarValueChange(innerValueChangeNum) {
          this.ProgressNum.value = Math.floor(innerValueChangeNum * 100).toString();
      }
      onProgressLoadComplete() {
          console.log("整体进度读取完毕:");
          moosnow.event.sendEventImmediately(EventType.CLOSE_LOADINGVIEW);
      }
      onConfigLoaded(innerRes) {
          console.log("配置读取完毕:", innerRes);
      }
  }

  class ButtonEffect extends Laya.Script {
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
          this.ZoomBoolean = false;
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
          console.log("按按钮");
          if (this.mDownEffect)
              return;
          this.mDownEffect = true;
          if (this.enableMusic)
              Laya.SoundManager.playSound("audio/click.mp3");
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
      set ZoomInOut(inner) {
          this.ZoomBoolean = inner;
          if (true == inner) {
              this.ZoomTween();
          }
          else {
              Laya.Tween.clearAll(this.owner);
          }
      }
      ZoomTween() {
          Laya.Tween.to(this.owner, { scaleX: 0.8, scaleY: 0.8 }, 1000, null, Laya.Handler.create(this, () => {
              Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 1000, null, Laya.Handler.create(this, () => {
                  this.ZoomTween();
              }));
          }));
      }
  }

  class Ad_Base extends UIForm {
      constructor() {
          super(...arguments);
          this.goNext = null;
      }
      onShow(inner) {
          this.goNext = inner;
      }
  }

  class Export_CrazyClick extends Ad_Base {
      constructor() {
          super(...arguments);
          this.tweenProgress = 0;
          this.isSmashing = false;
          this.counter = 0;
          this.smashCount = 0;
          this.couldSmash = true;
          this.ccTimes = 0;
          this.ccTimesLimit = 0;
      }
      onAwake() {
          super.onAwake();
          this.ccTips = this.owner.getChildByName("CCTips");
          this.ccDarkBase = this.owner.getChildByName("DarkBase");
          this.ccContinueBtn = this.ccTips.getChildByName("ContinueBtn");
          this.ccText = this.owner.getChildByName("CCText");
          this.ccSelf = this.owner.getChildByName("CCSelf");
          this.crazyClickBtn = this.ccSelf.getChildByName("CCBtn");
          this.crazyClickBtn.on(Laya.Event.CLICK, this, () => {
              if (true == this.couldSmash) {
                  this.standByAnim.stop();
                  this.smashAnim.play(0, false);
                  Laya.SoundManager.playSound("audio/smash.mp3");
                  this.tweenProgress += 0.1;
                  this.ccTimes++;
                  if (this.ccTimes == this.ccTimesLimit) {
                      switch (Lite.config.mistouchNum) {
                          case 1:
                              console.log("Export_CrazyClick:弱狂点");
                              moosnow.platform.showBanner(true, null, null, null, this.preloadBannerIndex);
                              Laya.timer.once(2000, this, () => {
                                  moosnow.platform.hideBanner();
                                  moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE);
                              });
                              break;
                          case 2:
                              console.log("Export_CrazyClick:强狂点");
                              this.ccTimes = 0;
                              moosnow.platform.showBanner(true, null, null, null, this.preloadBannerIndex);
                              Laya.timer.once(2000, this, () => {
                                  moosnow.platform.hideBanner();
                                  moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE);
                              });
                              break;
                          default:
                              console.log("Export_CrazyClick:狂点关闭");
                              break;
                      }
                  }
                  if (this.tweenProgress >= 1) {
                      this.ccClear();
                  }
                  this.isSmashing = true;
                  this.counter = 0;
              }
          });
          this.crazyClickArrow = this.ccSelf.getChildByName("CCArrow");
          this.crazyClickProgress = this.ccSelf.getChildByName("Bar").getComponent(ProgressBar);
          this.smashAnim = this.owner["Smash"];
          this.openAnim = this.owner["Open"];
          this.standByAnim = this.owner["StandBy"];
          this.ccContinueBtn.on(Laya.Event.CLICK, this, () => {
              this.getGift();
          });
      }
      onShow(inner) {
          super.onShow(inner);
          if (0 == Lite.config.mistouchNum || Lite.data.getVirtualLevel() < Lite.config.CrazyStartLevel || Lite.data.getVirtualLevel() % Lite.config.mistouchInterval != 0) {
              console.log("狂点关闭:mistouchNum", Lite.config.mistouchNum, "CrazyStartLevel:", Lite.config.CrazyStartLevel, "mistouchInterval:", Lite.config.mistouchInterval, "Level:", Lite.data.getVirtualLevel());
              this.owner.visible = false;
              Laya.timer.frameOnce(2, this, () => {
                  this.goNext.method.apply(this.goNext.caller, this.goNext.args);
              });
          }
          else {
              console.log("狂点打开");
              this.ccTips.visible = false;
              this.ccDarkBase.visible = false;
              this.couldSmash = true;
              this.standByAnim.play(0, true);
              Laya.timer.loop(20, this, this.update);
              this.arrowTween();
              this.ccTimesLimit = Random.rangeFloor(2, 9);
              this.preloadBannerIndex = moosnow.platform.preloadBanner();
          }
      }
      update() {
          if (true == this.isSmashing) {
              this.counter++;
              if (this.counter > 20) {
                  this.standByAnim.play(0, true);
                  this.smashAnim.stop();
                  this.counter = 0;
                  this.isSmashing = false;
              }
          }
          if (this.tweenProgress > 0) {
              this.tweenProgress -= 0.005;
          }
          this.crazyClickProgress.Value = this.crazyClickProgress.Value + 0.5 * (this.tweenProgress - this.crazyClickProgress.Value);
      }
      onHide() {
          this.ccTimes = 0;
          this.tweenProgress = 0;
          this.crazyClickProgress.Value = 0;
          this.counter = 0;
          this.standByAnim.stop();
          this.openAnim.stop();
          this.smashAnim.stop();
          this.couldSmash = false;
          Laya.timer.clearAll(this);
          Laya.Tween.clearAll(this.crazyClickArrow);
      }
      ccClear() {
          this.onHide();
          this.openAnim.play(0, false);
          Laya.SoundManager.playSound("audio/getTreasure.mp3");
          Laya.timer.once(1500, this, () => {
              this.ccTips.visible = true;
              this.ccDarkBase.visible = true;
              this.ccTips.scale(0, 0);
              Laya.Tween.to(this.ccTips, { scaleX: 1, scaleY: 1 }, 1000, Laya.Ease.elasticOut);
          });
      }
      arrowTween() {
          Laya.Tween.to(this.crazyClickArrow, { bottom: 310 }, 200, null, Laya.Handler.create(this, () => {
              Laya.Tween.to(this.crazyClickArrow, { bottom: 360 }, 200, null, Laya.Handler.create(this, () => {
                  this.arrowTween();
              }));
          }));
      }
      getGift() {
          moosnow.event.sendEventImmediately(EventType.CrazyClickGift);
          this.goNext.method.apply(this.goNext.caller, this.goNext.args);
      }
  }

  class MistouchBtn_Base extends Laya.Script {
      constructor() {
          super(...arguments);
          this.bannerMode = BannerMode.Close;
          this.bannerBaseMode = BannerMode.Close;
          this.beenInit = false;
      }
      bannerShow() {
          moosnow.platform.showBanner(true, null, null, null, this.preloadedBannerIdIndex);
      }
      bannerHide() {
          moosnow.platform.hideBanner();
          moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE);
      }
      set Act(isAct) {
          if (true == isAct) {
              this.buttonSelf.on(Laya.Event.CLICK, this, this.btnEvent);
              if ("1" == Lite.config.allConfig.mistouchOn) {
                  this.preloadedBannerIdIndex = moosnow.platform.preloadBanner();
                  this.selectBannerShowType(this.bannerBaseMode);
              }
              else {
                  this.selectBannerShowType(BannerMode.Close);
              }
          }
          else {
              this.buttonSelf.off(Laya.Event.CLICK, this, this.btnEvent);
              Laya.timer.clearAll(this);
              this.bannerHide();
          }
      }
  }
  var BannerMode;
  (function (BannerMode) {
      BannerMode[BannerMode["Close"] = 0] = "Close";
      BannerMode[BannerMode["OnShow"] = 1] = "OnShow";
      BannerMode[BannerMode["OnFirstClickContinue"] = 2] = "OnFirstClickContinue";
      BannerMode[BannerMode["Random"] = 3] = "Random";
      BannerMode[BannerMode["NaN"] = 4] = "NaN";
  })(BannerMode || (BannerMode = {}));

  class MistouchBtn_Offset extends MistouchBtn_Base {
      constructor() {
          super(...arguments);
          this.btnFloatBottom = 200;
      }
      Init(innerFunc, innerBtnFloatBottom, innerMistouchType) {
          if (false == this.beenInit) {
              this.beenInit = true;
              this.buttonSelf = this.owner;
              this.btnFloatBottom = innerBtnFloatBottom;
              this.bannerBaseMode = innerMistouchType;
              this.innerFunc = innerFunc;
          }
      }
      btnEvent() {
          switch (this.bannerMode) {
              case BannerMode.Close:
                  this.innerFunc.method.apply(this.innerFunc.caller, this.innerFunc.args);
                  break;
              case BannerMode.OnFirstClickContinue:
                  this.selectBannerShowType(BannerMode.NaN);
                  Laya.timer.once(Lite.config.OffsetBannerDelayTime, this, () => {
                      this.bannerShow();
                      Laya.timer.once(Lite.config.OffsetBannerContinueTime, this, () => {
                          this.selectBannerShowType(BannerMode.Close);
                      });
                  });
                  break;
              default:
                  console.log("continueBtn:不准按", this.bannerMode);
                  break;
          }
      }
      selectBannerShowType(inner) {
          console.log("MistouchBtn_Offset:Banner显示状态更改为:", inner.toString());
          this.bannerMode = inner;
          switch (inner) {
              case BannerMode.Close:
                  this.buttonSelf.bottom = this.btnFloatBottom;
                  break;
              case BannerMode.OnShow:
                  this.buttonSelf.bottom = 20;
                  Laya.timer.once(Lite.config.OffsetBannerDelayTime, this, () => {
                      this.bannerShow();
                      Laya.timer.once(Lite.config.OffsetBannerContinueTime, this, () => {
                          this.selectBannerShowType(BannerMode.Close);
                      });
                  });
                  break;
              case BannerMode.OnFirstClickContinue:
                  this.buttonSelf.bottom = 20;
                  break;
              case BannerMode.Random:
                  this.selectBannerShowType(Random.rangeFloor(1, 3) == 1 ? BannerMode.OnShow : BannerMode.OnFirstClickContinue);
                  break;
          }
      }
  }

  class Ad_TrySkin extends Ad_Base {
      onAwake() {
          this.bg = this.owner.getChildByName("Bg");
          this.rollerSprite = this.bg.getChildByName("roller");
          this.skinShower = this.bg.getChildByName("SkinShow");
          this.trySkinBtn = this.bg.getChildByName("AdBtn");
          this.trySkinBtn.on(Laya.Event.CLICK, this, () => {
              moosnow.platform.showVideo((res) => {
                  switch (res) {
                      case moosnow.VIDEO_STATUS.NOTEND:
                          Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                          break;
                      case moosnow.VIDEO_STATUS.ERR:
                          Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                          break;
                      case moosnow.VIDEO_STATUS.END:
                          moosnow.event.sendEventImmediately(EventType.TrySkinGift);
                          this.goNext.method.apply(this.goNext.caller, this.goNext.args);
                          break;
                      default:
                          Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                          break;
                  }
              });
          });
          this.continueBtn = this.owner.getChildByName("ContinueBtn").addComponent(MistouchBtn_Offset);
          this.continueBtn.Init(Laya.Handler.create(this, () => {
              if (true == Lite.config.SkinForceAd) {
                  moosnow.platform.showVideo((res) => {
                      this.goNext.method.apply(this.goNext.caller, this.goNext.args);
                  });
              }
              else {
                  this.goNext.method.apply(this.goNext.caller, this.goNext.args);
              }
          }, null, false), 300, Lite.config.SkinWudian);
      }
      onShow(inner) {
          super.onShow(inner);
          this.continueBtn.Act = true;
          Laya.timer.loop(20, this, this.roller);
          this.bg.scale(0, 0);
          Laya.Tween.to(this.bg, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.elasticOut);
      }
      onHide() {
          this.continueBtn.Act = false;
          Laya.timer.clearAll(this);
      }
      roller() {
          this.rollerSprite.rotation += this.rollerSprite.rotation == 360 ? -360 : 1;
      }
  }

  class adItem extends Laya.Script {
      constructor() {
          super();
          this.appItem = null;
          this.currentAdData = null;
      }
      set redDotShow(inner) {
          if (null == this.redDot) {
              this.redDot = this.owner.getChildByName(Random.Boolean ? "RedDot" : "RedDot1");
          }
          else {
              this.redDot.visible = inner;
          }
      }
      onEnable() {
          this.owner.on(Laya.Event.CLICK, this, this.onAdClick);
          this.getBgColor();
      }
      init(appItem) {
          this.currentAdData = appItem;
          let img = this.owner.getChildByName("img");
          let title = this.owner.getChildByName("title");
          this.appItem = appItem;
          title && appItem && (title.text = appItem.title);
          img && appItem && (img.skin = appItem.img);
      }
      getBgColor() {
          let bgImg = this.owner.getChildByName("img_bg");
          if (bgImg) {
              let i = Random.rangeFloor(1, 4);
              bgImg.skin = "comp/base" + i + ".png";
          }
      }
      onDisable() {
          this.owner.off(Laya.Event.CLICK, this, this.onAdClick);
      }
      onAdClick() {
          if (null != this.appItem) {
              console.log(`navigatTomini ${this.appItem.title} ${this.appItem.appid}`);
              moosnow.event.sendEventImmediately(EventType.ExportStart);
              moosnow.platform.navigate2Mini(this.appItem, () => {
                  console.log("小游戏跳转成功");
                  moosnow.event.sendEventImmediately(EventType.ExportAchive);
              }, () => {
                  console.log("小游戏跳转失败");
                  moosnow.event.sendEventImmediately(EventType.TurnToGameCenter);
              });
          }
          else {
              console.error("没有跳转数据->appItem:", this.appItem);
          }
      }
      setCross() {
          for (let q = 0; q < this.owner.numChildren; q++) {
              this.owner.getChildAt(q).visible = false;
          }
          this.owner.getChildAt(1).visible = true;
          this.owner.getChildAt(1).skin = "comp/Boutique/x.png";
      }
  }

  class MistouchBtn_Flash extends MistouchBtn_Base {
      Init(innerFunc, innerMistouchType) {
          if (false == this.beenInit) {
              this.beenInit = true;
              this.buttonSelf = this.owner;
              this.bannerBaseMode = innerMistouchType;
              this.innerFunc = innerFunc;
              moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_FLASH_BANNER_HIDE, this, () => {
                  this.selectBannerShowType(BannerMode.Close);
              });
          }
      }
      selectBannerShowType(inner) {
          console.log("MistouchBtn_Flash:Banner显示状态更改为:", inner.toString());
          this.bannerMode = inner;
          switch (inner) {
              case BannerMode.OnShow:
                  moosnow.platform.showFlashBanner(this.preloadedBannerIdIndex);
                  break;
              case BannerMode.Random:
                  this.selectBannerShowType(Random.rangeFloor(1, 3) == 1 ? BannerMode.OnShow : BannerMode.OnFirstClickContinue);
                  break;
          }
      }
      btnEvent() {
          switch (this.bannerMode) {
              case BannerMode.Close:
                  console.log("MistouchBtn_Flash:按下:正常调用");
                  this.innerFunc.method.apply(this.innerFunc.caller, this.innerFunc.args);
                  break;
              case BannerMode.OnFirstClickContinue:
                  console.log("MistouchBtn_Flash:按下:开始计时");
                  this.selectBannerShowType(BannerMode.NaN);
                  moosnow.platform.showFlashBanner(this.preloadedBannerIdIndex);
                  break;
              default:
                  console.log("MistouchBtn_Flash:不准按", this.bannerMode);
                  break;
          }
      }
  }

  class Export_Boutique extends Ad_Base {
      onAwake() {
          super.onAwake();
          this.continueBtn = this.owner.getChildByName("ContinueBtn").addComponent(MistouchBtn_Flash);
          this.continueBtn.Init(Laya.Handler.create(this, () => {
              this.goNext.method.apply(this.goNext.caller, this.goNext.args);
          }, null, false), Lite.config.GGPopWudian);
          this.bg = this.owner.getChildByName("Bg");
          this.adList = this.bg.getChildByName("AdList");
      }
      onShow(inner) {
          super.onShow(inner);
          let arr = Lite.config.getAd();
          for (let q = 0; q < this.adList.cells.length; q++) {
              this.adList.cells[q].getComponent(adItem).init(arr[q]);
          }
          this.adList.cells[this.adList.cells.length - 1].getComponent(adItem).setCross();
          this.continueBtn.Act = true;
          this.bg.scale(0, 0);
          Laya.Tween.to(this.bg, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.elasticOut);
      }
      onHide() {
          this.continueBtn.Act = false;
      }
  }

  class ExportTool_FakeBanner extends UIForm {
      onAwake() {
          this.adList = this.owner.getChildByName("AdList");
      }
      onShow() {
          let adarr = Lite.config.getAd();
          for (let q = 0; q < this.adList.cells.length; q++) {
              if (null == this.adList.cells[q].getComponent(adItem4)) {
                  this.adList.cells[q].addComponent(adItem4).init(adarr[q]);
              }
              else {
                  this.adList.cells[q].getComponent(adItem4).init(adarr[q]);
              }
          }
      }
  }
  class adItem4 extends adItem {
      onAdClick() {
          if (null != this.appItem) {
              console.log(`navigatTomini ${this.appItem.title} ${this.appItem.appid}`);
              moosnow.event.sendEventImmediately(EventType.ExportStart);
              moosnow.platform.navigate2Mini(this.appItem, () => {
                  console.log("小游戏跳转成功");
                  moosnow.event.sendEventImmediately(EventType.ExportAchive);
              }, () => {
                  console.log("小游戏跳转失败");
              });
          }
          else {
              console.error("没有跳转数据->appItem:", this.appItem);
          }
      }
  }

  class ExportTool_Scroller extends Laya.Script {
      constructor() {
          super(...arguments);
          this.mouseMoveTime = 0;
          this.adScrollSlice = false;
      }
      set scrollX(inner) {
          if (true == inner) {
              this.adList.hScrollBarSkin = "";
          }
          else {
              this.adList.vScrollBarSkin = "";
          }
      }
      onAwake() {
          this.adList = this.owner;
          this.adList.renderHandler = new Laya.Handler(this, this.updateItem);
      }
      updateItem(cell, index) {
          cell.getComponent(adItem).init(cell.dataSource);
      }
      scroll() {
          let len = this.adList.array.length;
          let startIdx = this.adList.startIndex;
          this.adList.tweenTo(len - 6, 800 * (len - startIdx), Laya.Handler.create(this, () => {
              this.adList.tweenTo(0, 800 * len, Laya.Handler.create(this, () => {
                  this.scroll();
              }));
          }));
      }
      set Act(inner) {
          if (true == inner) {
              this.adList.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
              this.adList.on(Laya.Event.MOUSE_OUT, this, this.scroll);
              this.adList.on(Laya.Event.MOUSE_MOVE, this, this.mouseMoveEvent);
              this.adList.array = Lite.config.getAd();
              Laya.timer.once(1000, this, this.scroll);
              Laya.timer.loop(5000, this, () => {
                  this.adList.cells.forEach((inner) => {
                      inner.getComponent(adItem).redDotShow = Random.Boolean;
                  });
              });
          }
          else {
              this.adList.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
              this.adList.off(Laya.Event.MOUSE_OUT, this, this.scroll);
              this.adList.off(Laya.Event.MOUSE_MOVE, this, this.mouseMoveEvent);
              Laya.timer.clearAll(this);
          }
      }
      randomOnClick() {
          this.adList.cells[2].getComponent(adItem).onAdClick();
      }
      mouseMoveEvent() {
          this.mouseMoveTime += Laya.timer.delta;
          if (this.mouseMoveTime > 500 && this.adScrollSlice == false) {
              this.adScrollSlice = true;
              if (true == Lite.config.SliceSkip) {
                  this.adList.cells[2].getComponent(adItem).onAdClick();
              }
          }
      }
      mouseUp() {
          this.scroll();
          this.mouseMoveTime = 0;
          this.adScrollSlice = false;
      }
  }

  class Export_FriendHot extends Ad_Base {
      constructor() {
          super(...arguments);
          this.fingerAnim = new Laya.Animation();
      }
      onAwake() {
          this.adList = this.owner.getChildByName("AdList").addComponent(ExportTool_Scroller);
          this.adList.scrollX = false;
          this.continueBtn = this.owner.getChildByName("ContinueBtn");
          this.continueBtnFlashBanner = this.continueBtn.addComponent(MistouchBtn_Flash);
          this.continueBtnFlashBanner.Init(Laya.Handler.create(this, () => {
              this.goNext.method.apply(this.goNext.caller, this.goNext.args);
          }, null, false), Lite.config.FlashBanner01);
          this.fingerAnim.loadAtlas("subRes/atlas/comp/ShinningFinger.atlas", Laya.Handler.create(this, () => {
              this.owner.getChildByName("Anim").addChild(this.fingerAnim);
          }));
      }
      onShow(inner) {
          super.onShow(inner);
          this.fingerAnim.play(0, true);
          this.adList.Act = true;
          moosnow.event.sendEventImmediately(EventType.FriendHotShow);
          if (true == Lite.config.ForceSkip01) {
              Laya.timer.once(200, this, () => {
                  let tmp = () => {
                      moosnow.event.addListener(EventType.GameCenterHide, this, () => {
                          moosnow.event.removeListener(EventType.ExportAchive, this);
                          this.continueBtnFlashBanner.Act = true;
                      }, true);
                  };
                  moosnow.event.addListener(EventType.TurnToGameCenter, this, tmp, true);
                  moosnow.event.addListener(EventType.ExportAchive, this, () => {
                      moosnow.event.removeListener(EventType.GameCenterHide, this);
                      this.continueBtnFlashBanner.Act = true;
                  }, true);
                  this.adList.randomOnClick();
              });
          }
          else {
              this.continueBtnFlashBanner.Act = true;
          }
      }
      onHide() {
          this.fingerAnim.stop();
          this.continueBtnFlashBanner.Act = false;
          this.adList.Act = false;
          moosnow.event.sendEventImmediately(EventType.FriendHotHide);
      }
  }

  class Export_GameCenter extends Ad_Base {
      constructor() {
          super(...arguments);
          this.fingerAnim = new Laya.Animation();
      }
      onAwake() {
          super.onAwake();
          this.adList2 = this.owner.getChildByName("AdList2").addComponent(ExportTool_Scroller);
          this.adList2.scrollX = true;
          this.adList = this.owner.getChildByName("AdList").addComponent(ExportTool_Scroller);
          this.adList.scrollX = false;
          this.continueBtnBanner = this.owner.getChildByName("ContinueBtn").addComponent(MistouchBtn_Flash);
          this.continueBtnBanner.Init(Laya.Handler.create(this, () => {
              if (null != this.goNext) {
                  this.goNext.method.apply(this.goNext.caller, this.goNext.args);
              }
          }, null, false), Lite.config.GameCenterWudian);
          this.fingerAnim.loadAtlas("subRes/atlas/comp/ShinningFinger.atlas", Laya.Handler.create(this, () => {
              this.owner.getChildByName("Anim").addChild(this.fingerAnim);
          }));
      }
      onShow(inner) {
          super.onShow(inner);
          this.fingerAnim.play(0, true);
          this.continueBtnBanner.Act = true;
          this.adList.Act = true;
          this.adList2.Act = true;
          moosnow.event.sendEventImmediately(EventType.GameCenterShow);
          if (true == Lite.config.ForceSkip02) {
              Laya.timer.once(200, this, () => {
                  this.adList.randomOnClick();
              });
          }
      }
      onHide() {
          this.fingerAnim.stop();
          this.continueBtnBanner.Act = false;
          this.adList.Act = false;
          this.adList2.Act = false;
          moosnow.event.sendEventImmediately(EventType.GameCenterHide);
      }
  }

  class Export_TopHot extends Ad_Base {
      onAwake() {
          this.adList = this.owner.getChildByName("AdList").addComponent(ExportTool_TopHot);
          this.adList.scrollX = false;
          this.continueBtn = this.owner.getChildByName("Top").getChildByName("Gray").getChildByName("ContinueBtn");
          this.continueBtn.on(Laya.Event.CLICK, this, () => {
              this.goNext.method.apply(this.goNext.caller, this.goNext.args);
          });
      }
      onShow(inner) {
          super.onShow(inner);
          this.adList.reInitAd();
          Export_TopHot.adStr.sort(() => (Math.random() > 0.5 ? 1 : -1));
          Export_TopHot.combineStrF.sort(() => (Math.random() > 0.5 ? 1 : -1));
          Export_TopHot.combineStrL.sort(() => (Math.random() > 0.5 ? 1 : -1));
      }
  }
  Export_TopHot.adStr = ["经典玩法,爽快战斗！", "与兄弟一起,共同征战洪荒世界！", "以爱之名,还原国民梦想", "酷炫技能,感受酣畅战斗", "广积粮,筑高墙,好友齐称王！", "我这一刀下去,BOSS都要飞！", "全民王者,震颤世界", "王总喊你一起打妖怪啦", "你的老板叫你上线打怪", "你的同学正在偷你家菜", "隔壁老王玩了都说好！", "过五关斩六将,你的好友要你一起来战", "燃炸！根本停不下来", "激爽战斗！一刀一个小朋友"];
  Export_TopHot.combineStrF = ["最火爆的", "本年度最佳", "本月人气最高", "人气飙升的", "朋友正在热玩的", "火爆朋友圈的", "超爽快的", "风靡全球的", "全新玩法的", "官方正版", "轻松简单的"];
  Export_TopHot.combineStrL = ["小游戏", "动作游戏", "射击游戏", "卡牌游戏", "模拟经营游戏", "剧情游戏", "策略战斗游戏", "真人对战游戏", "益智游戏", "多人游戏", "角色扮演游戏"];
  class ExportTool_TopHot extends ExportTool_Scroller {
      constructor() {
          super(...arguments);
          this.couldChange = false;
      }
      onAwake() {
          this.adList = this.owner;
          this.adList.renderHandler = new Laya.Handler(this, this.updateItem);
      }
      reInitAd() {
          this.couldChange = true;
          let tmp = Lite.config.getAd();
          this.adList.array = tmp;
          Laya.timer.once(1000, this, () => {
              this.couldChange = false;
          });
      }
      updateItem(cell, index) {
          if (true == this.couldChange) {
              cell.getComponent(adItem_TopHot).init(cell.dataSource, index + 1);
          }
          else {
              cell.getComponent(adItem_TopHot).init2(cell.dataSource, index + 1);
          }
      }
  }

  class adItem_TopHot extends adItem {
      onEnable() { }
      init(appItem, innerNumber) {
          this.img = this.owner.getChildByName("img");
          this.title = this.owner.getChildByName("title");
          this.star = this.owner.getChildByName("star");
          this.popular = this.owner.getChildByName("popular");
          this.desc = this.owner.getChildByName("desc");
          this.playNow = this.owner.getChildByName("playNow");
          this.playNow.on(Laya.Event.CLICK, this, this.onAdClick);
          this.counter = this.owner.getChildByName("counter");
          this.currentAdData = appItem;
          this.appItem = appItem;
          this.title && (this.title.text = this.appItem.title);
          this.img.skin = this.appItem.img;
          this.star.text = Random.range(8, 10 - innerNumber * 0.1).toFixed(1);
          this.popular.text = Random.rangeFloor(30, 200 - innerNumber).toString() + "w";
          this.counter.text = innerNumber.toString();
          if (innerNumber % 2 == 0) {
              let Count = innerNumber;
              while (Count > Export_TopHot.adStr.length) {
                  Count -= Export_TopHot.adStr.length;
              }
              this.desc.text = Export_TopHot.adStr[Count - 1];
          }
          else {
              let Count = innerNumber;
              while (Count > Export_TopHot.combineStrF.length) {
                  Count -= Export_TopHot.combineStrF.length;
              }
              this.desc.text = Export_TopHot.combineStrF[Count - 1] + Export_TopHot.combineStrL[Count - 1];
          }
      }
      init2(appItem, innerNumber) {
          this.img = this.owner.getChildByName("img");
          this.title = this.owner.getChildByName("title");
          this.star = this.owner.getChildByName("star");
          this.popular = this.owner.getChildByName("popular");
          this.desc = this.owner.getChildByName("desc");
          this.playNow = this.owner.getChildByName("playNow");
          this.playNow.on(Laya.Event.CLICK, this, this.onAdClick);
          this.counter = this.owner.getChildByName("counter");
          this.currentAdData = appItem;
          this.appItem = appItem;
          this.title && (this.title.text = this.appItem.title);
          this.img.skin = this.appItem.img;
          this.counter.text = innerNumber.toString();
      }
  }

  class adItem3 extends adItem {
      scaleShake(caller, func) {
          if (null == this.Sprite) {
              this.Sprite = this.owner;
          }
          Laya.Tween.to(this.Sprite, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
              var shaketimes = 100;
              var boo = false;
              func.apply(caller);
              Laya.timer.loop(10, this, () => {
                  if (shaketimes > 0) {
                      shaketimes--;
                      if (false == boo) {
                          this.Sprite.rotation--;
                          if (this.Sprite.rotation < -15) {
                              boo = true;
                          }
                      }
                      else {
                          this.Sprite.rotation++;
                          if (this.Sprite.rotation > 15) {
                              boo = false;
                          }
                      }
                  }
                  else {
                      Laya.timer.clearAll(this);
                      Laya.Tween.to(this.Sprite, { rotation: 0, scaleX: 1, scaleY: 1 }, 100, null);
                  }
              }, null, true, true);
          }));
      }
  }

  class GameOverFormFrame extends UIForm {
      constructor() {
          super(...arguments);
          this.continueBtnRightbottom = 300;
          this.curGetMoney = 0;
      }
      onAwake() {
          super.onAwake();
          this.centerZone = this.owner.getChildByName("CenterZone");
          this.winSprite = this.centerZone.getChildByName("WinSprite");
          this.failSprite = this.centerZone.getChildByName("FailSprite");
          this.mainExportAd = this.centerZone.getChildByName("MainExportAd");
          this.addMoneyFont = this.centerZone.getChildByName("AddMoneyFont");
          this.adBtn = this.centerZone.getChildByName("AdBtn");
          this.adAddMoneyFont = this.adBtn.getChildByName("AdAddMoneyFont");
          this.continueBtn = this.centerZone.getChildByName("ContinueBtn");
          this.continueBtnMisstouch = this.continueBtn.addComponent(MistouchBtn_Offset);
          this.continueBtnMisstouch.Init(Laya.Handler.create(this, () => {
              Lite.ui.showToast("获得" + this.curGetMoney + "个金币");
              Lite.data.addCoin(this.curGetMoney);
              this.onClickContinueBtn();
          }, null, false), this.continueBtnRightbottom, Lite.config.RewardOffsetBanner);
          this.adBtn.on(Laya.Event.CLICK, this, () => {
              moosnow.platform.showVideo((res) => {
                  switch (res) {
                      case moosnow.VIDEO_STATUS.NOTEND:
                          Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                          break;
                      case moosnow.VIDEO_STATUS.ERR:
                          Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                          break;
                      case moosnow.VIDEO_STATUS.END:
                          Lite.ui.showToast("获得" + this.curGetMoney * 3 + "个金币");
                          Lite.data.addCoin(this.curGetMoney * 3);
                          moosnow.event.sendEventImmediately(EventType.GAME_STATE_OVER);
                          this.onClickContinueBtn();
                          break;
                      default:
                          Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
                          break;
                  }
              });
          });
      }
      onShow([isWin = true, getMoney = 0]) {
          this.winfailShowFunc(isWin);
          moosnow.event.sendEventImmediately(EventType.GAME_STATE_END);
          this.curGetMoney = getMoney;
          this.addMoneyFont.value = getMoney.toString();
          this.adAddMoneyFont.value = (getMoney * 3).toString();
          let adarr = Lite.config.getAd();
          for (let q = 0; q < this.mainExportAd.cells.length; q++) {
              this.mainExportAd.cells[q].getComponent(adItem).init(adarr[q]);
          }
          this.continueBtnMisstouch.Act = true;
          if (true == Lite.config.aldMonitorOn) {
              moosnow.http.endGame(Lite.data.getVirtualLevel().toString(), isWin);
          }
          if (true == isWin) {
              Lite.data.addVirtualLevel(1);
          }
      }
      onHide() {
          this.continueBtnMisstouch.Act = false;
      }
      winfailShowFunc(isWin) {
          if (true == isWin) {
              this.failSprite.visible = false;
              this.winSprite.visible = true;
          }
          else {
              this.failSprite.visible = true;
              this.winSprite.visible = false;
          }
      }
  }

  class GameOverFormExample extends GameOverFormFrame {
      onClickContinueBtn() {
          moosnow.event.sendEventImmediately(EventType.GotoNextProgress);
      }
  }

  class AutoMoney extends Laya.Script {
      onAwake() {
          this.Clip = this.owner;
          this.Clip.value = moosnow.Common.formatMoney(Lite.data.getCoin());
          moosnow.event.addListener(moosnow.PLATFORM_EVENT.COIN_CHANGED, this, (inner) => {
              this.Clip.value = moosnow.Common.formatMoney(inner);
          });
      }
  }

  class HomeFormFrame extends UIForm {
      constructor() {
          super(...arguments);
          this.levelShowZero = "000";
          this.adList = [];
      }
      onAwake() {
          super.onAwake();
          this.adBaseList = this.owner.getChildByName("AdList").addComponent(ExportTool_Scroller);
          this.adBaseList.scrollX = true;
          this.centerZone = this.owner.getChildByName("CenterZone");
          this.level = this.centerZone.getChildByName("LevelNum").getChildByName("LevelFont");
          this.skinBtn = this.centerZone.getChildByName("SkinBtn");
          this.startBtn = this.centerZone.getChildByName("StartBtn");
          this.skinBtn.on(Laya.Event.CLICK, this, this.onSkinBtn);
          this.startBtn.on(Laya.Event.CLICK, this, () => {
              this.onStartBtn();
              moosnow.event.sendEventImmediately(EventType.GAME_STATE_START);
          });
          var list = this.owner.getChildByName("adListL");
          for (let q = 0; q < list.cells.length; q++) {
              this.adList.push(list.cells[q].getComponent(adItem3));
          }
          var list2 = this.owner.getChildByName("adListR");
          for (let q = 0; q < list2.cells.length; q++) {
              this.adList.push(list2.cells[q].getComponent(adItem3));
          }
      }
      onShow() {
          this.changeExportAd();
          this.adBaseList.Act = true;
          Laya.timer.loop(5000, this, this.changeExportAd);
          this.levelNum = Lite.data.getVirtualLevel();
      }
      changeExportAd() {
          let tmpadarr = Lite.config.getAd();
          let w = 0;
          for (let q = 0; q < this.adList.length; q++, w++) {
              if (w >= this.adList.length) {
                  w = 0;
              }
              let counter = q;
              let counter2 = w;
              this.adList[q].scaleShake(this, () => {
                  this.adList[counter].init(tmpadarr[counter2]);
              });
          }
      }
      onHide() {
          this.adBaseList.Act = false;
          Laya.timer.clearAll(this);
      }
      set levelNum(innerNum) {
          let tmpstr = innerNum.toString();
          let length = tmpstr.length.valueOf();
          if (length < this.levelShowZero.length) {
              let outstr = "";
              for (let q = this.levelShowZero.length - 1; q >= length; q--) {
                  outstr += "0";
              }
              outstr += tmpstr;
              this.level.value = outstr;
          }
          else {
              this.level.value = tmpstr;
          }
      }
  }

  class HomeFormExample extends HomeFormFrame {
      onSkinBtn() {
          throw new Error("Method not implemented.");
      }
      onStartBtn() {
          moosnow.event.sendEventImmediately(EventType.ShowLoadingForm);
          Laya.timer.once(3000, this, () => {
              moosnow.event.sendEventImmediately(EventType.HideLoadingForm);
              moosnow.event.sendEventImmediately(EventType.GotoNextProgress);
          });
      }
  }

  class InGameFormFrame extends UIForm {
      constructor() {
          super(...arguments);
          this.levelShowZero = "000";
      }
      onAwake() {
          super.onAwake();
          this.centerZone = this.owner.getChildByName("CenterZone");
          this.level = this.centerZone.getChildByName("LevelNum").getChildByName("LevelFont");
      }
      onShow() {
          this.levelNum = Lite.data.getVirtualLevel();
          if (true == Lite.config.aldMonitorOn) {
              moosnow.http.startGame(Lite.data.getVirtualLevel().toString());
          }
      }
      set levelNum(innerNum) {
          let tmpstr = innerNum.toString();
          let length = tmpstr.length.valueOf();
          if (length < this.levelShowZero.length) {
              let outstr = "";
              for (let q = this.levelShowZero.length - 1; q >= length; q--) {
                  outstr += "0";
              }
              outstr += tmpstr;
              this.level.value = outstr;
          }
          else {
              this.level.value = tmpstr;
          }
      }
  }

  class InGameFormExample extends InGameFormFrame {
      onAwake() {
          super.onAwake();
          this.owner.getChildByName("WinBtn").on(Laya.Event.CLICK, this, () => {
              moosnow.event.sendEventImmediately(EventType.GotoNextProgress, [true, 666]);
          });
          this.owner.getChildByName("FailBtn").on(Laya.Event.CLICK, this, () => {
              moosnow.event.sendEventImmediately(EventType.GotoNextProgress, [false, 333]);
          });
      }
  }

  class LoadingForm extends UIForm {
      constructor() {
          super(...arguments);
          this.loadingList = [];
          this.curShinning = 0;
          this.isAllWhite = false;
      }
      onAwake() {
          this.loadingSprite = this.owner.getChildByName("All").getChildByName("Loading");
          let tmp = this.owner.getChildByName("All").getChildByName("White");
          for (let q = 0; q < tmp.numChildren; q++) {
              this.loadingList.push(tmp.getChildAt(q));
          }
      }
      onShow() {
          this.loadingList.forEach((inner) => {
              inner.visible = false;
          });
          Laya.timer.frameLoop(3, this, this.whiteRoll);
          this.owner.alpha = 0;
          Laya.Tween.to(this.owner, { alpha: 1 }, 200);
      }
      onHide() {
          Laya.timer.clear(this, this.whiteRoll);
          Laya.Tween.clearAll(this.owner);
      }
      whiteRoll() {
          this.loadingSprite.rotation -= this.loadingSprite.rotation == 360 ? -360 : 2;
          if (true == this.isAllWhite) {
              this.loadingList[this.curShinning++].visible = true;
          }
          else {
              this.loadingList[this.curShinning++].visible = false;
          }
          if (this.curShinning == this.loadingList.length) {
              this.curShinning = 0;
              this.isAllWhite = !this.isAllWhite;
          }
      }
  }

  class GameConfig {
      constructor() {
      }
      static init() {
          var reg = Laya.ClassUtils.regClass;
          reg("Tool/ProgressBar.ts", ProgressBar);
          reg("Forms/ui/scene/LoadingViewExample.ts", LoadingView);
          reg("Forms/ui/ButtonEffect.ts", ButtonEffect);
          reg("Forms/ui/scene/ExportVIews/Export_CrazyClick.ts", Export_CrazyClick);
          reg("Forms/ui/scene/ExportVIews/Ad_TrySkin.ts", Ad_TrySkin);
          reg("Forms/ui/form/adItem.ts", adItem);
          reg("Forms/ui/scene/ExportVIews/Export_Boutique.ts", Export_Boutique);
          reg("Forms/ui/scene/ExportVIews/ExportTool_FakeBanner.ts", ExportTool_FakeBanner);
          reg("Forms/ui/scene/ExportVIews/Export_FriendHot.ts", Export_FriendHot);
          reg("Forms/ui/scene/ExportVIews/Export_GameCenter.ts", Export_GameCenter);
          reg("Forms/ui/scene/ExportVIews/adItem_ExportTopHot.ts", adItem_TopHot);
          reg("Forms/ui/scene/ExportVIews/Export_TopHot.ts", Export_TopHot);
          reg("Forms/ui/scene/adItem3.ts", adItem3);
          reg("Forms/ui/scene/GameOverFormExample.ts", GameOverFormExample);
          reg("Tool/AutoMoney.ts", AutoMoney);
          reg("Forms/ui/scene/HomeFormExample.ts", HomeFormExample);
          reg("Forms/ui/scene/InGameFormExample.ts", InGameFormExample);
          reg("Forms/ui/scene/LoadingForm.ts", LoadingForm);
          reg("Forms/ui/form/ToastForm.ts", ToastForm);
      }
  }
  GameConfig.width = 750;
  GameConfig.height = 1334;
  GameConfig.scaleMode = "fixedwidth";
  GameConfig.screenMode = "vertical";
  GameConfig.alignV = "middle";
  GameConfig.alignH = "center";
  GameConfig.startScene = "scene/LoadingView.scene";
  GameConfig.sceneRoot = "";
  GameConfig.debug = false;
  GameConfig.stat = false;
  GameConfig.physicsDebug = false;
  GameConfig.exportSceneToJson = true;
  GameConfig.init();

  window.moosnowConfig = {
      debug: "wx",
      wx: {
          bannerId: ["adunit-e51b3123060eec9e"],
          videoId: "adunit-a322f5ee40076372",
          interId: "adunit-7c61767905a3940a",
          nativeId: "",
          moosnowAppId: "wx840e2e246968f224",
          version: "1.1.0",
          url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/wx7dc2c315cfb4b87d.json",
      },
      oppo: {
          bannerId: "168776",
          videoId: "168781",
          interId: "168777",
          nativeId: ["168779", "168780"],
          moosnowAppId: "30270711",
          version: "1.1.0"
      },
      vivo: {
          bannerId: "aa9a8f1e5403435fa51ec680dbbf0da2",
          videoId: "c8bf3259afd64e389e42f1b67e21e005",
          interId: "168777",
          nativeId: ["7d595c09da994cc58c02217f43ebdd40", "010b436a80974dd6b3eafffc6c94b974"],
          moosnowAppId: "100006157",
          version: "1.1.0",
          url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhc_user_vivo.json",
      },
      qq: {
          bannerId: ["34c452729bdb7803449ea3ecb964adb5", "69f3e4307a8705f64df08c872be9002c", "88f654f5096c1bf9f68fac27a16c3180", "78b1a0cf5269d54d2ea642da472fc62f"],
          videoId: "e8b4dafd255989e8978949a0207c66c7",
          interId: "",
          boxId: "51aa10cf3cbeb175be37cf7a1a336513",
          nativeId: ["", ""],
          moosnowAppId: "1110464664",
          blockId: "",
          version: "1.1.0",
          url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",
      },
      bd: {
          bannerId: "168776",
          videoId: "168781",
          interId: "168777",
          nativeId: ["168779", "168780"],
          moosnowAppId: "30251588",
          version: "1.1.0",
          url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",
      },
      byte: {
          bannerId: ["1dcg253kngk3kbk39q", "amhf8omnfif23jcw85"],
          videoId: ["fsceug9ogfdy4jaiy1", "5222hng9m46l94fgp6"],
          interId: "168777",
          nativeId: ["168779", "168780"],
          moosnowAppId: "ttccd7ba6a53fd8cfe",
          version: "1.1.0",
      },
      uc: {
          bannerId: "168776",
          videoId: "168781",
          interId: "168777",
          nativeId: ["168779", "168780"],
          moosnowAppId: "tt07e4715998dfbc8b",
          version: "1.1.0",
      },
      hw: {
          bannerId: "168776",
          videoId: "168781",
          interId: "168777",
          nativeId: ["168779", "168780"],
          moosnowAppId: "tt07e4715998dfbc8b",
          version: "1.1.0",
      }
  };

  var mx = (function () {
      "use strict";
      var extendStatics = function (d, b) {
          extendStatics =
              Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                      function (d, b) {
                          d.__proto__ = b;
                      }) ||
                  function (d, b) {
                      for (var p in b)
                          if (b.hasOwnProperty(p))
                              d[p] = b[p];
                  };
          return extendStatics(d, b);
      };
      function __extends(d, b) {
          extendStatics(d, b);
          function __() {
              this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
      }
      var __assign = function () {
          __assign =
              Object.assign ||
                  function __assign(t) {
                      for (var s, i = 1, n = arguments.length; i < n; i++) {
                          s = arguments[i];
                          for (var p in s)
                              if (Object.prototype.hasOwnProperty.call(s, p))
                                  t[p] = s[p];
                      }
                      return t;
                  };
          return __assign.apply(this, arguments);
      };
      function __rest(s, e) {
          var t = {};
          for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                  t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
              for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                  if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                      t[p[i]] = s[p[i]];
              }
          return t;
      }
      function __decorate(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
              r = Reflect.decorate(decorators, target, key, desc);
          else
              for (var i = decorators.length - 1; i >= 0; i--)
                  if ((d = decorators[i]))
                      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
      }
      function __param(paramIndex, decorator) {
          return function (target, key) {
              decorator(target, key, paramIndex);
          };
      }
      function __metadata(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
              return Reflect.metadata(metadataKey, metadataValue);
      }
      function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
              return value instanceof P
                  ? value
                  : new P(function (resolve) {
                      resolve(value);
                  });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                  try {
                      step(generator.next(value));
                  }
                  catch (e) {
                      reject(e);
                  }
              }
              function rejected(value) {
                  try {
                      step(generator["throw"](value));
                  }
                  catch (e) {
                      reject(e);
                  }
              }
              function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
      }
      function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                  if (t[0] & 1)
                      throw t[1];
                  return t[1];
              },
              trys: [],
              ops: [],
          }, f, y, t, g;
          return ((g = { next: verb(0), throw: verb(1), return: verb(2) }),
              typeof Symbol === "function" &&
                  (g[Symbol.iterator] = function () {
                      return this;
                  }),
              g);
          function verb(n) {
              return function (v) {
                  return step([n, v]);
              };
          }
          function step(op) {
              if (f)
                  throw new TypeError("Generator is already executing.");
              while (_)
                  try {
                      if (((f = 1), y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done))
                          return t;
                      if (((y = 0), t))
                          op = [op[0] & 2, t.value];
                      switch (op[0]) {
                          case 0:
                          case 1:
                              t = op;
                              break;
                          case 4:
                              _.label++;
                              return { value: op[1], done: false };
                          case 5:
                              _.label++;
                              y = op[1];
                              op = [0];
                              continue;
                          case 7:
                              op = _.ops.pop();
                              _.trys.pop();
                              continue;
                          default:
                              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                                  _ = 0;
                                  continue;
                              }
                              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                  _.label = op[1];
                                  break;
                              }
                              if (op[0] === 6 && _.label < t[1]) {
                                  _.label = t[1];
                                  t = op;
                                  break;
                              }
                              if (t && _.label < t[2]) {
                                  _.label = t[2];
                                  _.ops.push(op);
                                  break;
                              }
                              if (t[2])
                                  _.ops.pop();
                              _.trys.pop();
                              continue;
                      }
                      op = body.call(thisArg, _);
                  }
                  catch (e) {
                      op = [6, e];
                      y = 0;
                  }
                  finally {
                      f = t = 0;
                  }
              if (op[0] & 5)
                  throw op[1];
              return { value: op[0] ? op[1] : void 0, done: true };
          }
      }
      function __exportStar(m, exports) {
          for (var p in m)
              if (!exports.hasOwnProperty(p))
                  exports[p] = m[p];
      }
      function __values(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
              return m.call(o);
          if (o && typeof o.length === "number")
              return {
                  next: function () {
                      if (o && i >= o.length)
                          o = void 0;
                      return { value: o && o[i++], done: !o };
                  },
              };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function __read(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
              return o;
          var i = m.call(o), r, ar = [], e;
          try {
              while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                  ar.push(r.value);
          }
          catch (error) {
              e = { error: error };
          }
          finally {
              try {
                  if (r && !r.done && (m = i["return"]))
                      m.call(i);
              }
              finally {
                  if (e)
                      throw e.error;
              }
          }
          return ar;
      }
      function __spread() {
          for (var ar = [], i = 0; i < arguments.length; i++)
              ar = ar.concat(__read(arguments[i]));
          return ar;
      }
      function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
              s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                  r[k] = a[j];
          return r;
      }
      function __await(v) {
          return this instanceof __await ? ((this.v = v), this) : new __await(v);
      }
      function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return ((i = {}),
              verb("next"),
              verb("throw"),
              verb("return"),
              (i[Symbol.asyncIterator] = function () {
                  return this;
              }),
              i);
          function verb(n) {
              if (g[n])
                  i[n] = function (v) {
                      return new Promise(function (a, b) {
                          q.push([n, v, a, b]) > 1 || resume(n, v);
                      });
                  };
          }
          function resume(n, v) {
              try {
                  step(g[n](v));
              }
              catch (e) {
                  settle(q[0][3], e);
              }
          }
          function step(r) {
              r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
              resume("next", value);
          }
          function reject(value) {
              resume("throw", value);
          }
          function settle(f, v) {
              if ((f(v), q.shift(), q.length))
                  resume(q[0][0], q[0][1]);
          }
      }
      function __asyncDelegator(o) {
          var i, p;
          return ((i = {}),
              verb("next"),
              verb("throw", function (e) {
                  throw e;
              }),
              verb("return"),
              (i[Symbol.iterator] = function () {
                  return this;
              }),
              i);
          function verb(n, f) {
              i[n] = o[n]
                  ? function (v) {
                      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
                  }
                  : f;
          }
      }
      function __asyncValues(o) {
          if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m
              ? m.call(o)
              : ((o = typeof __values === "function" ? __values(o) : o[Symbol.iterator]()),
                  (i = {}),
                  verb("next"),
                  verb("throw"),
                  verb("return"),
                  (i[Symbol.asyncIterator] = function () {
                      return this;
                  }),
                  i);
          function verb(n) {
              i[n] =
                  o[n] &&
                      function (v) {
                          return new Promise(function (resolve, reject) {
                              (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                          });
                      };
          }
          function settle(resolve, reject, d, v) {
              Promise.resolve(v).then(function (v) {
                  resolve({ value: v, done: d });
              }, reject);
          }
      }
      function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
              Object.defineProperty(cooked, "raw", { value: raw });
          }
          else {
              cooked.raw = raw;
          }
          return cooked;
      }
      function __importStar(mod) {
          if (mod && mod.__esModule)
              return mod;
          var result = {};
          if (mod != null)
              for (var k in mod)
                  if (Object.hasOwnProperty.call(mod, k))
                      result[k] = mod[k];
          result.default = mod;
          return result;
      }
      function __importDefault(mod) {
          return mod && mod.__esModule ? mod : { default: mod };
      }
      function __classPrivateFieldGet(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
              throw new TypeError("attempted to get private field on non-instance");
          }
          return privateMap.get(receiver);
      }
      function __classPrivateFieldSet(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
              throw new TypeError("attempted to set private field on non-instance");
          }
          privateMap.set(receiver, value);
          return value;
      }
      var MathUtils = (function () {
          function MathUtils() { }
          MathUtils.randomNumBoth = function (Min, Max) {
              var Range = Max - Min;
              var Rand = Math.random();
              var num = Min + Math.round(Rand * Range);
              return num;
          };
          MathUtils.probabilitys = function (parr) {
              var arr = 0;
              var pres = __spreadArrays(parr);
              var probabilityCount = 0;
              for (var i = 0; i < pres.length; i++) {
                  probabilityCount += pres[i];
              }
              if (probabilityCount != 100) {
                  throw "所有概率值总和不等于100%";
              }
              var nums = new Array();
              for (var i = 0; i < pres.length; i++) {
                  var element = pres[i];
                  for (var index = 0; index < element; index++) {
                      nums.push(arr);
                  }
                  arr++;
              }
              var random = this.randomNumBoth(0, 99);
              var targetIndex = nums[random];
              return targetIndex;
          };
          return MathUtils;
      })();
      var APP_PLATFORM;
      (function (APP_PLATFORM) {
          APP_PLATFORM[(APP_PLATFORM["WX"] = 0)] = "WX";
          APP_PLATFORM[(APP_PLATFORM["BYTEDANCE"] = 1)] = "BYTEDANCE";
          APP_PLATFORM[(APP_PLATFORM["OPPO"] = 2)] = "OPPO";
          APP_PLATFORM[(APP_PLATFORM["OPPO_ZS"] = 3)] = "OPPO_ZS";
          APP_PLATFORM[(APP_PLATFORM["BAIDU"] = 4)] = "BAIDU";
          APP_PLATFORM[(APP_PLATFORM["QQ"] = 5)] = "QQ";
          APP_PLATFORM[(APP_PLATFORM["PC"] = 6)] = "PC";
          APP_PLATFORM[(APP_PLATFORM["VIVO"] = 7)] = "VIVO";
          APP_PLATFORM[(APP_PLATFORM["UC"] = 8)] = "UC";
          APP_PLATFORM[(APP_PLATFORM["HW"] = 9)] = "HW";
      })(APP_PLATFORM || (APP_PLATFORM = {}));
      var ENGINE_TYPE = {
          COCOS: "cc",
          LAYA: "Laya",
          NONE: "",
      };
      var Common = (function () {
          function Common() { }
          Common.titleCase = function (s) {
              var i, ss = s.toLowerCase().split(/\s+/);
              for (i = 0; i < ss.length; i++) {
                  ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
              }
              return ss.join(" ");
          };
          Common.numFixed = function (num, len) {
              return parseFloat(parseFloat(num).toFixed(len));
          };
          Common.parseMoney = function (value) {
              if (isNaN(value))
                  return 0.0;
              return parseFloat(parseFloat(value).toFixed(2));
          };
          Common.objKeySort = function (obj) {
              var newkey = Object.keys(obj).sort();
              var newObj = {};
              for (var i = 0; i < newkey.length; i++) {
                  newObj[newkey[i]] = obj[newkey[i]];
              }
              return newObj;
          };
          Common.isObject = function (x) {
              var type = typeof x;
              return x !== null && (type === "object" || type === "function");
          };
          Common.object2Query = function (obj) {
              var args = [];
              for (var k in obj)
                  args.push(k + "=" + obj[k]);
              return args.join("&");
          };
          Common.isFunction = function (fun) {
              if (typeof fun == "function")
                  return true;
              return false;
          };
          Common.isEmpty = function (obj) {
              if (typeof obj == "object") {
                  var name;
                  for (name in obj)
                      return false;
                  return true;
              }
              else if (obj === null || obj === undefined || obj === "null" || obj === "undefined" || obj === "")
                  return true;
              return false;
          };
          Common.formatTime = function (date) {
              var hour = date.getHours();
              var minute = date.getMinutes();
              return [hour, minute].map(this.formatNumber).join(":");
          };
          Common.formatNumber = function (n) {
              n = n.toString();
              return n[1] ? n : "0" + n;
          };
          Common.copy = function (from, target) {
              for (var k in from) {
                  target[k] = from[k];
              }
          };
          Common.randomNumBoth = function (Min, Max) {
              var Range = Max - Min;
              var Rand = Math.random();
              var num = Min + Math.round(Rand * Range);
              return num;
          };
          Common.randomFloat = function (Min, Max) {
              return Min + Math.random() * Max;
          };
          Common.randomToRatio = function (start, end, range) {
              var num = this.randomNumBoth(start, end);
              if (num <= range) {
                  return true;
              }
              return false;
          };
          Common.generateUUID = function () {
              var d = new Date().getTime();
              var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                  var r = (d + Math.random() * 16) % 16 | 0;
                  d = Math.floor(d / 16);
                  return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
              });
              return uuid;
          };
          Common.isNumber = function (obj) {
              return typeof obj == "number" || Object.prototype.toString.call(obj) == "[object Number]";
          };
          Common.isArray = function (obj) {
              return Object.prototype.toString.call(obj) == "[object Array]";
          };
          Common.isString = function (obj) {
              return Object.prototype.toString.call(obj) === "[object String]";
          };
          Object.defineProperty(Common, "platform", {
              get: function () {
                  if (this.mPlatform) {
                      return this.mPlatform;
                  }
                  var winCfg = window["moosnowConfig"];
                  if (window["tt"])
                      this.mPlatform = APP_PLATFORM.BYTEDANCE;
                  else if (window["swan"])
                      this.mPlatform = APP_PLATFORM.BAIDU;
                  else if (window["qq"])
                      this.mPlatform = APP_PLATFORM.QQ;
                  else if (window["qg"]) {
                      if (window["qg"] && window["qg"].getSystemInfoSync) {
                          var sys = window["qg"].getSystemInfoSync();
                          console.log("平台判断", JSON.stringify(sys));
                          if (sys && sys.brand && sys.brand.toLocaleLowerCase().indexOf("vivo") != -1) {
                              this.mPlatform = APP_PLATFORM.VIVO;
                          }
                          else if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                              this.mPlatform = APP_PLATFORM.OPPO_ZS;
                          else {
                              this.mPlatform = APP_PLATFORM.OPPO;
                          }
                      }
                      else if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                          this.mPlatform = APP_PLATFORM.OPPO_ZS;
                      else {
                          this.mPlatform = APP_PLATFORM.OPPO;
                      }
                  }
                  else if (window["uc"])
                      this.mPlatform = APP_PLATFORM.UC;
                  else if (window["hbs"])
                      this.mPlatform = APP_PLATFORM.HW;
                  else if (window["wx"])
                      this.mPlatform = APP_PLATFORM.WX;
                  else {
                      if (winCfg.debug && winCfg[winCfg.debug]) {
                          if (winCfg.debug == "wx")
                              this.mPlatform = APP_PLATFORM.WX;
                          else if (winCfg.debug == "oppo")
                              if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                                  this.mPlatform = APP_PLATFORM.OPPO_ZS;
                              else
                                  this.mPlatform = APP_PLATFORM.OPPO;
                          else if (winCfg.debug == "bd")
                              this.mPlatform = APP_PLATFORM.BAIDU;
                          else if (winCfg.debug == "byte")
                              this.mPlatform = APP_PLATFORM.BYTEDANCE;
                          else if (winCfg.debug == "qq")
                              this.mPlatform = APP_PLATFORM.QQ;
                          else if (winCfg.debug == "vivo")
                              this.mPlatform = APP_PLATFORM.VIVO;
                          else if (winCfg.debug == "uc")
                              this.mPlatform = APP_PLATFORM.UC;
                          else if (winCfg.debug == "hw")
                              this.mPlatform = APP_PLATFORM.HW;
                          else
                              this.mPlatform = APP_PLATFORM.PC;
                      }
                      else
                          this.mPlatform = APP_PLATFORM.PC;
                  }
                  return this.mPlatform;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(Common, "isOnlyUI", {
              get: function () {
                  return window["onlyUI"] == true;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(Common, "isPC", {
              get: function () {
                  return cc.sys.browserType === cc.sys.BROWSER_TYPE_CHROME;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(Common, "config", {
              get: function () {
                  var winCfg = window["moosnowConfig"];
                  var config;
                  if (Common.platform == APP_PLATFORM.WX)
                      config = winCfg.wx;
                  else if (Common.platform == APP_PLATFORM.OPPO || Common.platform == APP_PLATFORM.OPPO_ZS)
                      config = winCfg.oppo;
                  else if (Common.platform == APP_PLATFORM.VIVO)
                      config = winCfg.vivo;
                  else if (Common.platform == APP_PLATFORM.QQ)
                      config = winCfg.qq;
                  else if (Common.platform == APP_PLATFORM.BAIDU)
                      config = winCfg.bd;
                  else if (Common.platform == APP_PLATFORM.BYTEDANCE)
                      config = winCfg.byte;
                  else if (Common.platform == APP_PLATFORM.HW)
                      config = winCfg.hw;
                  else
                      config = winCfg.wx;
                  return config;
              },
              enumerable: true,
              configurable: true,
          });
          Common.colorRGB2Hex = function (color) {
              var rgb = color.split(",");
              var r = parseInt(rgb[0].split("(")[1]);
              var g = parseInt(rgb[1]);
              var b = parseInt(rgb[2].split(")")[0]);
              var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
              return hex;
          };
          Common.deepCopy = function (obj) {
              var objClone = Array.isArray(obj) ? [] : {};
              if (obj && typeof obj === "object") {
                  for (var key in obj) {
                      if (obj.hasOwnProperty(key)) {
                          if (obj[key] && typeof obj[key] === "object") {
                              objClone[key] = this.deepCopy(obj[key]);
                          }
                          else {
                              objClone[key] = obj[key];
                          }
                      }
                  }
              }
              return objClone;
          };
          Common.getEngine = function () {
              if (window[ENGINE_TYPE.COCOS]) {
                  return ENGINE_TYPE.COCOS;
              }
              else if (window[ENGINE_TYPE.LAYA]) {
                  return ENGINE_TYPE.LAYA;
              }
              else
                  return ENGINE_TYPE.NONE;
          };
          Common.popOpenAnim = function (node, callback) {
              if (this.getEngine() == ENGINE_TYPE.COCOS) {
                  node.scale = 0.8;
                  node.runAction(cc.sequence(cc.scaleTo(0.1, 1.2, 1.2), cc.scaleTo(0.1, 1, 1), cc.callFunc(function () {
                      if (callback)
                          callback();
                  }, this)));
                  return;
              }
              callback();
          };
          Common.popCloseAnim = function (node, callback) {
              if (this.getEngine() == ENGINE_TYPE.COCOS) {
                  node.scale = 1;
                  node.runAction(cc.sequence(cc.scaleTo(0.1, 0, 0), cc.callFunc(function () {
                      if (callback)
                          callback();
                  }, this)));
                  return;
              }
              callback();
          };
          Common.format = function (str) {
              var rep = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  rep[_i - 1] = arguments[_i];
              }
              if (typeof str == "undefined" || str == null || str == "" || str == "undefined")
                  return str;
              for (var i = 0; i < rep.length; i++) {
                  var re = new RegExp("\\{" + i + "\\}", "gm");
                  str = str.replace(re, rep[i]);
              }
              return str;
          };
          Common.formatMoney = function (value) {
              var retValue = "0";
              if (isNaN(value))
                  value = 0;
              if (value < 9999) {
                  retValue = parseInt("" + value);
              }
              else if (value < 9999999) {
                  retValue = parseFloat("" + value / 1000).toFixed(2) + "K";
              }
              else if (value < 9999999999) {
                  retValue = parseFloat("" + value / 1000000).toFixed(2) + "M";
              }
              else if (value < 9999999999999) {
                  retValue = parseFloat("" + value / 1000000000).toFixed(2) + "G";
              }
              else if (value < 9999999999999999) {
                  retValue = parseFloat("" + value / 1000000000000).toFixed(2) + "T";
              }
              else if (value < 9999999999999999999)
                  retValue = parseFloat("" + value / 1000000000000000).toFixed(2) + "P";
              else if (value < 9999999999999999999999)
                  retValue = parseFloat("" + value / 1000000000000000000).toFixed(2) + "E";
              else
                  retValue = parseFloat("" + value / 1000000000000000000000).toFixed(2) + "B";
              return retValue;
          };
          return Common;
      })();
      var BaseModule = (function () {
          function BaseModule() {
              this.moduleName = "";
              this.mIntervalArr = {};
              this.mTimeoutArr = {};
              this.mScheduleIndex = 0;
              this.mMaping = {};
          }
          BaseModule.prototype.schedule = function (callback, time) {
              var arg = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  arg[_i - 2] = arguments[_i];
              }
              var self = this;
              var handle = setInterval(function () {
                  if (callback)
                      callback.apply.apply(callback, __spreadArrays([self], arg));
              }, time * 1000, self);
              this.mIntervalArr[this.mScheduleIndex] = {
                  handle: handle,
                  callback: callback,
              };
              this.mScheduleIndex++;
          };
          BaseModule.prototype.unschedule = function (callback) {
              for (var idx in this.mIntervalArr) {
                  if (this.mIntervalArr[idx].callback == callback) {
                      clearInterval(parseInt(this.mIntervalArr[idx].handle));
                  }
              }
          };
          BaseModule.prototype.scheduleOnce = function (callback, time) {
              var arg = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  arg[_i - 2] = arguments[_i];
              }
              var self = this;
              var handle = setTimeout(function () {
                  clearTimeout(handle);
                  if (callback)
                      callback.apply.apply(callback, __spreadArrays([self], arg));
              }, time * 1000);
              this.mTimeoutArr[this.mScheduleIndex] = {
                  handle: handle,
                  callback: callback,
              };
              this.mScheduleIndex++;
          };
          BaseModule.prototype.unscheduleOnce = function (callback) {
              for (var idx in this.mTimeoutArr) {
                  if (this.mTimeoutArr[idx].callback == callback) {
                      clearInterval(parseInt(this.mTimeoutArr[idx].handle));
                  }
              }
          };
          BaseModule.schedule = function (callback, time) {
              var arg = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  arg[_i - 2] = arguments[_i];
              }
              var self = this;
              var handle = setInterval(function () {
                  if (callback)
                      callback.apply.apply(callback, __spreadArrays([self], arg));
              }, time * 1000, self);
              this.mIntervalArr[this.mScheduleIndex] = {
                  handle: handle,
                  callback: callback,
              };
              this.mScheduleIndex++;
          };
          BaseModule.unschedule = function (callback) {
              for (var idx in this.mIntervalArr) {
                  if (this.mIntervalArr[idx].callback == callback) {
                      clearInterval(parseInt(this.mIntervalArr[idx].handle));
                  }
              }
          };
          BaseModule.scheduleOnce = function (callback, time) {
              var self = this;
              var handle = setTimeout(function () {
                  clearTimeout(handle);
                  if (callback)
                      callback.apply(self);
              }, time * 1000);
              this.mTimeoutArr[this.mScheduleIndex] = {
                  handle: handle,
                  callback: callback,
              };
              this.mScheduleIndex++;
          };
          BaseModule.unscheduleOnce = function (callback) {
              for (var idx in this.mTimeoutArr) {
                  if (this.mTimeoutArr[idx].callback == callback) {
                      clearInterval(parseInt(this.mTimeoutArr[idx].handle));
                  }
              }
          };
          BaseModule.prototype.initProperty = function (form) {
              for (var v in form) {
                  if (this.hasOwnProperty(v)) {
                      this[v] = form[v];
                  }
              }
          };
          BaseModule.prototype.preload = function (url, callback) {
              if (callback)
                  callback();
          };
          BaseModule.prototype._findComponent = function (node, classname) {
              var retValue = null;
              for (var i = 0; i < node._components.length; i++) {
                  var logic = node._components[i];
                  if (logic.willHide && logic.willShow) {
                      retValue = logic;
                      break;
                  }
              }
              return retValue;
          };
          BaseModule.prototype._findComponentByName = function (instance, classname) {
              if (instance) {
                  if (instance.name == classname)
                      return true;
                  else
                      return this._findComponentByName(instance.$super, classname);
              }
              return false;
          };
          BaseModule.mIntervalArr = {};
          BaseModule.mTimeoutArr = {};
          BaseModule.mScheduleIndex = 0;
          return BaseModule;
      })();
      var BANNER_HORIZONTAL = (function () {
          function BANNER_HORIZONTAL() { }
          BANNER_HORIZONTAL.NONE = 0;
          BANNER_HORIZONTAL.LEFT = 1;
          BANNER_HORIZONTAL.RIGHT = 2;
          BANNER_HORIZONTAL.CENTER = 8;
          return BANNER_HORIZONTAL;
      })();
      var BANNER_VERTICAL = (function () {
          function BANNER_VERTICAL() { }
          BANNER_VERTICAL.NONE = 16;
          BANNER_VERTICAL.TOP = 32;
          BANNER_VERTICAL.CENTER = 64;
          BANNER_VERTICAL.BOTTOM = 128;
          return BANNER_VERTICAL;
      })();
      var VIDEO_STATUS = {
          END: "__video_end",
          NOTEND: "__video_not_end",
          ERR: "__video_error",
      };
      var PLATFORM_EVENT = (function () {
          function PLATFORM_EVENT() { }
          PLATFORM_EVENT.VIBRATESWITCH_CHANGED = "VIBRATESWITCH_CHANGED";
          PLATFORM_EVENT.SOUNDSWITCH_CHANGED = "SOUNDSWITCH_CHANGED";
          PLATFORM_EVENT.MUSICSWITCH_CHANGED = "MUSICSWITCH_CHANGED";
          PLATFORM_EVENT.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
          PLATFORM_EVENT.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
          PLATFORM_EVENT.ON_BANNER_ERROR = "ON_BANNER_ERROR";
          PLATFORM_EVENT.ON_BANNER_HIDE = "ON_BANNER_HIDE";
          PLATFORM_EVENT.ON_FLASH_BANNER_HIDE = "ON_FLASH_BANNER_HIDE";
          PLATFORM_EVENT.ON_AD_SHOW = "ON_AD_SHOW";
          PLATFORM_EVENT.AD_VIEW_CHANGE = "AD_VIEW_CHANGE";
          PLATFORM_EVENT.AD_VIEW_REFRESH = "AD_VIEW_REFRESH";
          PLATFORM_EVENT.COIN_CHANGED = "COIN_CHANGED";
          PLATFORM_EVENT.RANDOWM_NAVIGATE = "RANDOWM_NAVIGATE";
          PLATFORM_EVENT.COMPONENT_CHECKBOX_TOGGLE = "COMPONENT_CHECKBOX_TOGGLE";
          PLATFORM_EVENT.PRIZE_BOX_UNLOCAK = "PRIZE_BOX_UNLOCAK";
          return PLATFORM_EVENT;
      })();
      var MSG = {
          HIDE_BANNER: "隐藏banner",
          INVITE_PLAY_USER: "你的好友{0}邀请你加入",
          BANNER_KEY_IS_NULL: "banner id 没有配置",
          BANNER_SHOW: "显示BANNER",
          BANNER_RESIZE: "banner位置或大小被重新设置",
          NAVIGATE_FAST: "跳转太频繁 >>>>>>>>>>>>>>>>>>>>>",
          NAVIGATE_DATA: "跳转数据",
          SYSTEM_INFO: "设备信息",
          VIDEO_KEY_IS_NULL: "video id 没有配置",
          VIDEO_LOAD_COMPLETED: "加载video成功回调",
          VIDEO_CLOSE_COMPLETED: "video关闭回调",
          VIDEO_ERROR_COMPLETED: "video加载错误",
          NATIVE_LOAD_COMPLETED: "加载原生广告成功",
          NATIVE_ERROR: "原生广告加载出错,使用新ID加载原生广告",
          NATIVE_ERROR2: "原生广告加载出错，本次没有广告",
          NATIVE_NOT_ID_USE: "原生广告ID已经用完，本次没有广告",
          NATIVE_CLICK: "点击了原生广告",
          NATIVE_REPORT: "上报原生广告",
          NATIVE_LIST_NULL: "原生广告数据没有，回调Null",
          NATIVE_DESTROY: "原生广告销毁",
          INTER_KEY_IS_NULL: "插屏广告ID为空，系统不加载",
          ALD_FILE_NO_IMPORT: "阿拉丁文件未引入",
          PLATFORM_UNSUPPORT: "版本过低 平台不支持",
      };
      var BLOCK_HORIZONTAL = (function () {
          function BLOCK_HORIZONTAL() { }
          BLOCK_HORIZONTAL.NONE = 0;
          BLOCK_HORIZONTAL.LEFT = 1;
          BLOCK_HORIZONTAL.RIGHT = 2;
          BLOCK_HORIZONTAL.CENTER = 8;
          return BLOCK_HORIZONTAL;
      })();
      var BLOCK_VERTICAL = (function () {
          function BLOCK_VERTICAL() { }
          BLOCK_VERTICAL.NONE = 16;
          BLOCK_VERTICAL.TOP = 32;
          BLOCK_VERTICAL.CENTER = 64;
          BLOCK_VERTICAL.BOTTOM = 128;
          return BLOCK_VERTICAL;
      })();
      var PlatformModule = (function (_super) {
          __extends(PlatformModule, _super);
          function PlatformModule() {
              var _this = _super.call(this) || this;
              _this.baseUrl = "https://api.liteplay.com.cn/";
              _this.currentShortCall = null;
              _this.shareFail = null;
              _this.vibrateOn = false;
              _this.systemInfo = null;
              _this.block = null;
              _this.banner = {};
              _this.video = {};
              _this.inter = null;
              _this.native = null;
              _this.box = null;
              _this.platformName = "wx";
              _this.bannerErrorQuene = [];
              _this.nativeIdIndex = 0;
              _this.mBannerWidth = 300;
              _this.bannerHeigth = 96;
              _this.bannerHorizontal = BANNER_HORIZONTAL.NONE;
              _this.bannerVertical = BANNER_VERTICAL.NONE;
              _this.bannerShowCount = 0;
              _this.bannerShowCountLimit = 3;
              _this.bannerShowTime = 0;
              _this.bannerShowTimeLimit = 15;
              _this.bannerLimitType = 0;
              _this.bannerCb = null;
              _this.bannerStyle = null;
              _this.isBannerShow = false;
              _this.blockWidth = 300;
              _this.blockHeigth = 96;
              _this.blockHorizontal = BLOCK_HORIZONTAL.NONE;
              _this.blockVertical = BLOCK_VERTICAL.NONE;
              _this.videoCb = null;
              _this.videoLoading = false;
              _this.videoPlaying = false;
              _this.interShowCount = 0;
              _this.interShowCountLimit = 3;
              _this.isInterLoaded = false;
              _this.nativeAdResult = null;
              _this.nativeCb = null;
              _this.nativeLoading = false;
              _this.recordObj = null;
              _this.shareInfoArr = [];
              _this.versionRet = null;
              _this.prevNavigate = Date.now();
              _this.navigateEnd = true;
              _this.preloadBannerId = "";
              _this.isLoaded = false;
              _this.initShare(true);
              _this.share_clickTime = null;
              _this.currentShareCallback = null;
              _this.shareFail = false;
              _this.updateProgram();
              _this.initRecord();
              return _this;
          }
          PlatformModule.prototype.getAdId = function (idArray, index) {
              if (index === void 0) {
                  index = 0;
              }
              if (idArray instanceof Array) {
                  if (idArray.length > 0) {
                      if (index < 0) {
                          return idArray[Common.randomNumBoth(0, idArray.length - 1)];
                      }
                      else if (idArray.length - 1 < index) {
                          console.warn("id\u6570\u7EC4\u5C0F\u4E8E\u4F20\u5165\u7D22\u5F15\u503C\uFF0C\u672C\u6B21\u4F7F\u7528" + idArray[0] + "\uFF0C\u8BF7\u68C0\u67E5\u4EE3\u7801", idArray, index);
                          return idArray[0];
                      }
                      return idArray[index];
                  }
                  else {
                      console.warn("Id 配置为空");
                      return null;
                  }
              }
              else {
                  return idArray;
              }
          };
          PlatformModule.prototype.getBannerId = function (idx) {
              if (idx === void 0) {
                  idx = 0;
              }
              return this.getAdId(Common.config.bannerId, idx);
          };
          PlatformModule.prototype.getBlockId = function (idx) {
              if (idx === void 0) {
                  idx = 0;
              }
              return this.getAdId(Common.config.blockId, idx);
          };
          PlatformModule.prototype.getVideoId = function (idx) {
              if (idx === void 0) {
                  idx = 0;
              }
              return this.getAdId(Common.config.videoId, idx);
          };
          Object.defineProperty(PlatformModule.prototype, "interId", {
              get: function () {
                  return this.getAdId(Common.config.interId, -1);
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(PlatformModule.prototype, "boxId", {
              get: function () {
                  return this.getAdId(Common.config.boxId, -1);
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(PlatformModule.prototype, "nativeId", {
              get: function () {
                  return this.getAdId(Common.config.nativeId, -1);
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(PlatformModule.prototype, "bannerWidth", {
              get: function () {
                  var wxsys = this.getSystemInfoSync();
                  var windowWidth = wxsys.windowWidth;
                  if (wxsys.windowHeight < wxsys.windowWidth) {
                      if (windowWidth < 300) {
                          this.mBannerWidth = windowWidth;
                      }
                      else {
                          this.mBannerWidth = 300;
                      }
                  }
                  else {
                      this.mBannerWidth = windowWidth;
                  }
                  return this.mBannerWidth;
              },
              set: function (value) {
                  this.mBannerWidth = value;
              },
              enumerable: true,
              configurable: true,
          });
          PlatformModule.prototype.onEnable = function () { };
          PlatformModule.prototype.vibrateSwitch = function (on) {
              this.vibrateOn = on;
          };
          PlatformModule.prototype.isIphoneXModel = function () {
              if (!window[this.platformName])
                  return;
              var sysInfo = this.getSystemInfoSync();
              if (/iphone x/.test(sysInfo.model.toLowerCase())) {
                  return true;
              }
              else {
                  return false;
              }
          };
          PlatformModule.prototype.isIphone = function () {
              if (!window[this.platformName])
                  return;
              var sysInfo = this.getSystemInfoSync();
              if (/iphone/.test(sysInfo.model.toLowerCase())) {
                  return true;
              }
              else {
                  return false;
              }
          };
          PlatformModule.prototype.isIphoneX = function () {
              if (!window[this.platformName])
                  return;
              var sysInfo = this.getSystemInfoSync();
              var screenHeight = sysInfo.screenHeight;
              var screenWidth = sysInfo.screenWidth;
              var ratioWH = screenWidth / screenHeight;
              if (ratioWH <= 0.5 || ratioWH >= 2) {
                  return true;
              }
              else {
                  return false;
              }
          };
          PlatformModule.prototype.compareVersion = function (v1, v2) {
              v1 = v1.split(".");
              v2 = v2.split(".");
              var len = Math.max(v1.length, v2.length);
              while (v1.length < len) {
                  v1.push("0");
              }
              while (v2.length < len) {
                  v2.push("0");
              }
              for (var i = 0; i < len; i++) {
                  var num1 = parseInt(v1[i]);
                  var num2 = parseInt(v2[i]);
                  if (num1 > num2) {
                      return 1;
                  }
                  else if (num1 < num2) {
                      return -1;
                  }
              }
              return 0;
          };
          PlatformModule.prototype.supportVersion = function (version) {
              var sdkVersion = this.getSystemInfoSync().SDKVersion;
              return this.compareVersion(sdkVersion, version) >= 0;
          };
          PlatformModule.prototype.supportFunction = function (name) {
              if (!window[this.platformName])
                  return false;
              if (!window[this.platformName][name])
                  return false;
              return true;
          };
          PlatformModule.prototype.checkVersion = function (version, callback) {
              if (this.versionRet != null) {
                  callback(this.versionRet);
                  return;
              }
              else {
                  this._checkConfigVersion(callback);
              }
          };
          PlatformModule.prototype._checkRemoteVersion = function (callback) {
              var _this = this;
              var url = this.baseUrl + "admin/wx_list/getAppConfig";
              var signParams = {
                  appid: Common.config.moosnowAppId,
              };
              var data = signParams;
              moosnow.http.request(url, data, "POST", function (res) {
                  _this.versionRet = _this.checkLog(res.data.version);
                  callback(_this.versionRet);
              }, function () {
                  console.log("checkVersion fail");
              }, function () {
                  console.log("checkVersion complete");
              });
          };
          PlatformModule.prototype._checkConfigVersion = function (callback) {
              var _this = this;
              moosnow.http.getAllConfig(function (res) {
                  if (res && res.version) {
                      _this.versionRet = _this.checkLog(res.version);
                      callback(_this.versionRet);
                  }
                  else {
                      _this._checkRemoteVersion(callback);
                  }
              });
          };
          PlatformModule.prototype.checkLog = function (remoteVersion) {
              var configVersion = Common.config.version;
              var versionRet = remoteVersion != configVersion;
              console.log("\u7248\u672C\u68C0\u67E5 \u540E\u53F0\u7248\u672C" + remoteVersion + " \u914D\u7F6E\u6587\u4EF6\u7248\u672C" + configVersion);
              console.log("获取广告开关：", versionRet);
              return versionRet;
          };
          PlatformModule.prototype.isSmallWidth = function () {
              if (!window[this.platformName])
                  return;
              var sysInfo = this.getSystemInfoSync();
              var screenHeight = sysInfo.screenHeight;
              var screenWidth = sysInfo.screenWidth;
              if (screenHeight < 667) {
                  console.log("高度不够", screenHeight);
                  return true;
              }
              return false;
          };
          PlatformModule.prototype.login = function (success, fail) {
              if (Common.isFunction(success)) {
                  var token = moosnow.data.getToken();
                  if (token == "") {
                      token = Common.generateUUID();
                      token = token.replace(/-/g, "");
                      moosnow.data.setToken(token);
                  }
                  success(token);
              }
          };
          PlatformModule.prototype.postMessage = function (data) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].getOpenDataContext)
                  return;
              window[this.platformName].getOpenDataContext().postMessage(data);
          };
          PlatformModule.prototype.navigate2Video = function (videoid) { };
          PlatformModule.prototype.getClipboardData = function (success, fail) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].getClipboardData)
                  return;
              window[this.platformName].getClipboardData({
                  success: function (res) {
                      if (success)
                          success(res.data);
                      console.log("" + res.data);
                  },
                  fail: function (res) {
                      if (fail)
                          fail(res);
                      console.log("getClipboardData\u8C03\u7528\u5931\u8D25");
                  },
              });
          };
          PlatformModule.prototype.setClipboardData = function (msg, success, fail) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].setClipboardData)
                  return;
              window[this.platformName].setClipboardData({
                  data: msg,
                  success: function (res) {
                      if (success)
                          success(res);
                      console.log("setClipboardData\u8C03\u7528\u6210\u529F");
                  },
                  fail: function (res) {
                      if (fail)
                          fail(res);
                      console.log("setClipboardData\u8C03\u7528\u5931\u8D25");
                  },
              });
          };
          PlatformModule.prototype.navigate2Mini = function (row, success, fail, complete) {
              var _this = this;
              console.log(MSG.NAVIGATE_DATA, row);
              if (Date.now() - this.prevNavigate < 500) {
                  console.log(MSG.NAVIGATE_FAST);
                  return;
              }
              this.prevNavigate = Date.now();
              if (!this.navigateEnd) {
                  console.log("跳转未结束");
                  return;
              }
              this.navigateEnd = false;
              if (!window[this.platformName]) {
                  this.scheduleOnce(function () {
                      _this.navigateEnd = true;
                  }, 2);
                  if (fail)
                      fail();
                  return;
              }
              var launchOption = this.getLaunchOption();
              var appid = row.appid, path = row.path, extraData = row.extraData;
              extraData = extraData || {};
              var param = {
                  position: row.position,
                  appid: appid,
                  img: row.atlas || row.img,
                  scene: launchOption.scene,
                  wxgamecid: launchOption.query.wxgamecid,
              };
              moosnow.http.point("打开跳转", param);
              moosnow.http.navigate(row, function (res) { });
              window[this.platformName].navigateToMiniProgram({
                  appId: appid,
                  path: path,
                  extraData: extraData,
                  success: function () {
                      console.log("跳转参数", param);
                      moosnow.http.point("跳转", param);
                      moosnow.http.navigateEnd(moosnow.data.getNavigateToken(appid));
                      if (success)
                          success();
                  },
                  fail: function (err) {
                      moosnow.data.resetNavigateToken();
                      console.log("跳转失败 ", err, " fail callback ", !!fail);
                      if (fail)
                          fail();
                  },
                  complete: function () {
                      _this.navigateEnd = true;
                      moosnow.data.resetNavigateToken();
                      if (complete)
                          complete();
                  },
              });
          };
          PlatformModule.prototype.updateProgram = function () {
              var self = this;
              if (!window[this.platformName])
                  return;
              if (typeof window[this.platformName].getUpdateManager === "function") {
                  var updateManager_1 = window[this.platformName].getUpdateManager();
                  updateManager_1.onCheckForUpdate(function (res) {
                  });
                  updateManager_1.onUpdateReady(function (res) {
                      self.showModal("发现新版本", "新版本已经准备好，是否更新？", "取消", "更新", function (res) {
                          if (res)
                              updateManager_1.applyUpdate();
                      });
                  });
                  updateManager_1.onUpdateFailed(function () {
                  });
              }
          };
          PlatformModule.prototype.vibrateShort = function () {
              if (!window[this.platformName])
                  return;
              if (window[this.platformName] && !window[this.platformName].vibrateShort)
                  return;
              window[this.platformName].vibrateShort();
          };
          PlatformModule.prototype.vibrateLong = function () {
              if (!window[this.platformName])
                  return;
              if (window[this.platformName] && !window[this.platformName].vibrateLong)
                  return;
              window[this.platformName].vibrateLong();
          };
          PlatformModule.prototype.showLoading = function (title) {
              if (!window[this.platformName]) {
                  console.log("showLoading", title);
                  return;
              }
              window[this.platformName].showLoading({
                  title: title,
                  mask: false,
                  success: null,
                  fail: null,
                  complete: null,
              });
          };
          PlatformModule.prototype.hideLoading = function () {
              if (!window[this.platformName]) {
                  return;
              }
              window[this.platformName].hideLoading();
          };
          PlatformModule.prototype.showModal = function (title, content, cancelTitle, confirmTitle, confirm) {
              if (!window[this.platformName]) {
                  return;
              }
              window[this.platformName].showModal({
                  title: title,
                  content: content,
                  cancelText: cancelTitle,
                  confirmText: confirmTitle,
                  showCancel: true,
                  cancelColor: "#000000",
                  confirmColor: "#3CC51F",
                  fail: null,
                  complete: null,
                  success: function (res) {
                      if (res.confirm) {
                          if (confirm)
                              confirm(true);
                      }
                      else if (res.cancel) {
                          if (confirm)
                              confirm(false);
                      }
                  },
              });
          };
          PlatformModule.prototype.showModalWithoutCancel = function (title, content, confirmTitle, confirm) {
              if (!window[this.platformName]) {
                  return;
              }
              window[this.platformName].showModal({
                  title: title,
                  content: content,
                  showCancel: false,
                  confirmText: confirmTitle,
                  cancelColor: "#000000",
                  confirmColor: "#3CC51F",
                  cancelText: "",
                  fail: null,
                  complete: null,
                  success: function (res) {
                      if (res.confirm) {
                          if (confirm)
                              confirm(true);
                      }
                      else if (res.cancel) {
                          if (confirm)
                              confirm(false);
                      }
                  },
              });
          };
          PlatformModule.prototype.showToast = function (title, toastType, mask) {
              if (toastType === void 0) {
                  toastType = "none";
              }
              if (mask === void 0) {
                  mask = false;
              }
              if (!window[this.platformName]) {
                  return;
              }
              window[this.platformName].showToast({
                  title: title,
                  icon: toastType,
                  duration: 2000,
                  mask: mask,
                  image: null,
                  success: null,
                  fail: null,
                  complete: null,
              });
          };
          PlatformModule.prototype.authOrGetUserInfo = function (callback) {
              if (!window[this.platformName]) {
                  return;
              }
              var self = this;
              this.getSetting(function (setting) {
                  console.log("授权信息", setting);
                  if (setting["scope.userInfo"]) {
                      self.getUserInfo(function (userInfo) {
                          console.log("获取用户信息：", userInfo);
                          callback(userInfo, false);
                      }, function (error) {
                      });
                  }
                  else {
                      self.showUserInfoButton(function (userInfo) {
                          callback(userInfo, true);
                          console.log("授权获取用户信息：", userInfo);
                      });
                  }
              }, function (error) {
                  self.showUserInfoButton(function (userInfo) {
                      callback(userInfo, true);
                      console.log("授权获取用户信息：", userInfo);
                  });
              });
          };
          PlatformModule.prototype.showUserInfoButton = function (callback) {
              var obj = {
                  type: "text",
                  text: "",
                  style: this._initLoginButton(),
              };
              var btn = window[this.platformName].createUserInfoButton(obj);
              btn.onTap(function (res) {
                  if (res.userInfo && res.userInfo.nickName) {
                      callback(res.userInfo);
                      btn.hide();
                  }
                  else {
                      callback(null);
                  }
              });
              btn.show();
          };
          PlatformModule.prototype.getSetting = function (success, fail) {
              window[this.platformName].getSetting({
                  success: function (res) {
                      success(res.authSetting);
                  },
                  fail: function () {
                      fail();
                  },
                  complete: null,
              });
          };
          PlatformModule.prototype.getUserInfo = function (success, fail) {
              window[this.platformName].getUserInfo({
                  success: function (res) {
                      success(res.userInfo);
                  },
                  fail: function () {
                      fail();
                  },
                  withCredentials: false,
                  complete: null,
                  lang: "en",
              });
          };
          PlatformModule.prototype.getLaunchOption = function () {
              if (!this.mLaunchOption) {
                  if (window[this.platformName]) {
                      if (window[this.platformName].getEnterOptionsSync)
                          this.mLaunchOption = window[this.platformName].getEnterOptionsSync();
                      if (window[this.platformName].getLaunchOptionsSync)
                          this.mLaunchOption = window[this.platformName].getLaunchOptionsSync();
                  }
                  else {
                      this.mLaunchOption = {};
                  }
              }
              return this.mLaunchOption;
          };
          PlatformModule.prototype.getSystemInfoSync = function () {
              if (this.systemInfo == null) {
                  if (window[this.platformName] && window[this.platformName].getSystemInfoSync)
                      this.systemInfo = window[this.platformName].getSystemInfoSync();
                  else
                      this.systemInfo = {};
                  console.log(MSG.SYSTEM_INFO, this.systemInfo);
              }
              return this.systemInfo;
          };
          PlatformModule.prototype.isLandscape = function (windowHeight, windowWidth) {
              return windowHeight < windowWidth;
          };
          PlatformModule.prototype.initShare = function (shareInfoArr) {
              var _this = this;
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].showShareMenu)
                  return;
              this.shareInfoArr = shareInfoArr;
              window[this.platformName].showShareMenu({
                  withShareTicket: true,
                  menus: ["shareAppMessage", "shareTimeline"],
                  success: null,
                  fail: null,
                  complete: null,
              });
              if (window[this.platformName].onShareAppMessage)
                  window[this.platformName].onShareAppMessage(function () {
                      return _this._buildShareInfo();
                  });
              if (window[this.platformName].onShareTimeline)
                  window[this.platformName].onShareTimeline(function () {
                      return _this._buildShareInfo();
                  });
          };
          PlatformModule.prototype.getShareInfo = function (ticket, success, fail) {
              if (fail === void 0) {
                  fail = null;
              }
              if (!window[this.platformName]) {
                  return;
              }
              window[this.platformName].getShareInfo({
                  shareTicket: ticket,
                  success: function (res) {
                      success(res.encryptedData, res.iv);
                  },
                  fail: function () {
                      if (fail)
                          fail();
                  },
                  complete: null,
              });
          };
          PlatformModule.prototype.share = function (query, callback, shortCall) {
              if (query === void 0) {
                  query = {};
              }
              if (!window[this.platformName]) {
                  if (callback)
                      callback(true);
                  return;
              }
              this.currentShareCallback = callback;
              this.currentShortCall = shortCall;
              this.share_clickTime = Date.now();
              this.shareFail = false;
              this._share(query);
          };
          PlatformModule.prototype.shareWithoutCheck = function (query, callback) {
              if (query === void 0) {
                  query = {};
              }
              if (!window[this.platformName]) {
                  if (callback)
                      callback(true);
              }
              this.currentShareCallback = callback;
              this.share_clickTime = 1;
              this.shareFail = false;
              this._share(query);
          };
          PlatformModule.prototype._share = function (query) {
              if (query === void 0) {
                  query = null;
              }
              if (!window[this.platformName]) {
                  this.currentShareCallback(true);
                  return;
              }
              if (!window[this.platformName].shareAppMessage) {
                  this.currentShareCallback(true);
                  return;
              }
              var self = this;
              var shareInfo = this._buildShareInfo(query);
              console.log("分享数据：", shareInfo);
              window[this.platformName].shareAppMessage(shareInfo);
          };
          PlatformModule.prototype._buildShareInfo = function (query) {
              if (query === void 0) {
                  query = null;
              }
              var title = "", imageUrl = "";
              if (this.shareInfoArr.length > 0) {
                  var item = this.shareInfoArr[MathUtils.randomNumBoth(0, this.shareInfoArr.length - 1)];
                  title = item.title;
                  imageUrl = item.img;
              }
              var shareInfo = {
                  title: title,
                  imageUrl: imageUrl,
                  query: query,
              };
              return shareInfo;
          };
          PlatformModule.prototype._onShareback = function () {
              var _this = this;
              var self = this;
              setTimeout(function () {
                  if (_this.share_clickTime && _this.currentShareCallback) {
                      if (_this.shareFail) {
                          _this.currentShareCallback(false);
                      }
                      else {
                          if (_this.share_clickTime == 1 || Date.now() - _this.share_clickTime >= 3 * 1000) {
                              _this.currentShareCallback(true);
                          }
                          else {
                              _this.currentShareCallback(false);
                          }
                      }
                  }
                  _this.shareFail = false;
                  _this.currentShareCallback = null;
                  _this.share_clickTime = null;
              }, 100);
          };
          PlatformModule.prototype._initLoginButton = function () {
              if (!window[this.platformName])
                  return;
              var wxsys = window[this.platformName].getSystemInfoSync();
              var style = {
                  left: 0,
                  top: 0,
                  width: wxsys.screenWidth,
                  height: wxsys.screenHeight,
                  lineHeight: 40,
                  color: "#ffffff",
                  type: "text",
                  text: "获取用户信息",
                  textAlign: "center",
                  fontSize: 28,
              };
              return style;
          };
          PlatformModule.prototype.initRecord = function () { };
          PlatformModule.prototype.clipRecord = function (timeRange, callback) {
              if (timeRange === void 0) {
                  timeRange = [2, 2];
              }
          };
          PlatformModule.prototype.startRecord = function (duration, callback) {
              if (duration === void 0) {
                  duration = 300;
              }
              if (callback === void 0) {
                  callback = null;
              }
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
          };
          PlatformModule.prototype.stopRecord = function (callback) {
              if (callback === void 0) {
                  callback = null;
              }
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
          };
          PlatformModule.prototype.pauseRecord = function () { };
          PlatformModule.prototype.resumeRecord = function () { };
          PlatformModule.prototype.showShareButton = function (style, timeRange, callback) { };
          PlatformModule.prototype.hideShareButton = function () { };
          PlatformModule.prototype._regisiterWXCallback = function () {
              if (!window[this.platformName])
                  return;
              this._regisiterOnShow();
              this._regisiterOnHide();
          };
          PlatformModule.prototype._regisiterOnShow = function () {
              if (!window[this.platformName].onShow)
                  return;
              var self = this;
              window[this.platformName].onShow(function (res) {
                  self._onShowCallback(res);
              });
          };
          PlatformModule.prototype._onShowCallback = function (res) {
              this._onShareback();
              console.log("on show ", res);
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, res);
          };
          PlatformModule.prototype._regisiterOnHide = function () {
              if (!window[this.platformName].onHide)
                  return;
              var self = this;
              window[this.platformName].onHide(function (res) {
                  self._onHideCallback(res);
              });
          };
          PlatformModule.prototype._onHideCallback = function (res) {
              console.log("on show ", res);
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_HIDE, res);
              console.log("on hide ", res);
              var isOpend = res && (res.targetAction == 8 || res.targetAction == 9 || res.targetAction == 10) && res.targetPagePath.length > 50;
              if (isOpend) {
                  moosnow.http.clickBanner();
              }
              if (this.bannerCb) {
                  this.bannerCb(isOpend);
              }
              else {
                  console.log("banner callback is null ");
              }
          };
          PlatformModule.prototype.initBanner = function () {
              if (!window[this.platformName])
                  return;
          };
          PlatformModule.prototype._prepareBanner = function (bannerId) {
              if (!window[this.platformName].createBannerAd)
                  return;
              var style = this._getBannerPosition();
              if (!Common.isEmpty(this.banner[bannerId])) {
                  this.destroyBanner(bannerId);
              }
              console.log("\u4F7F\u7528id[" + bannerId + "]\u521B\u5EFAbanner");
              this.banner[bannerId] = window[this.platformName].createBannerAd({
                  adUnitId: bannerId,
                  adIntervals: 30,
                  style: {
                      top: style.top,
                      left: style.left,
                      width: this.bannerWidth,
                  },
              });
              this.banner[bannerId].isLoaded = false;
              this.banner[bannerId].bannerShowCount = 0;
              this.banner[bannerId].bannerShowTime = Date.now();
              if (this.banner[bannerId]) {
                  this.banner[bannerId].onResize(this._onBannerResize.bind(this, bannerId));
                  this.banner[bannerId].onError(this._onBannerError.bind(this, bannerId));
                  this.banner[bannerId].onLoad(this._onBannerLoad.bind(this, bannerId));
              }
          };
          PlatformModule.prototype._createBannerAd = function (adIndex) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBannerAd)
                  return;
              var bannerId = this.getBannerId(adIndex);
              if (Common.isEmpty(bannerId)) {
                  console.warn(MSG.BANNER_KEY_IS_NULL);
                  return;
              }
              if (!Common.isEmpty(this.banner[bannerId]))
                  return bannerId;
              else {
                  this._prepareBanner(bannerId);
              }
              return bannerId;
          };
          PlatformModule.prototype.triggerBannerError = function (bannerId) {
              if (this.bannerErrorQuene[bannerId].isError && this.bannerErrorQuene[bannerId].isShow) {
                  moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_ERROR, {
                      bannerId: bannerId,
                      horizontal: this.bannerHorizontal,
                      vertical: this.bannerVertical,
                  });
                  this.bannerErrorQuene[bannerId] = null;
              }
          };
          PlatformModule.prototype._onBannerLoad = function (bannerId) {
              console.log("PlatformModule ~ _onBannerLoad ~ bannerId", bannerId);
              this.bannerErrorQuene[bannerId] = null;
              this.bannerShowCount = 0;
          };
          PlatformModule.prototype._onBannerError = function (bannerId, err) {
              console.warn("banner___error:", err);
              this.banner[bannerId] = null;
              this.isBannerShow = false;
              if (!this.bannerErrorQuene[bannerId])
                  this.bannerErrorQuene[bannerId] = {};
              this.bannerErrorQuene[bannerId].isError = true;
              this.triggerBannerError(bannerId);
          };
          PlatformModule.prototype._onBannerResize = function (bannerId, size) {
              console.log("_bottomCenterBanner -> size", size);
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.windowWidth;
              if (this.banner[bannerId]) {
                  if (!isNaN(this.banner[bannerId].style.realWidth))
                      this.bannerWidth = this.banner[bannerId].style.realWidth;
                  if (!isNaN(this.banner[bannerId].style.realHeight))
                      this.bannerHeigth = this.banner[bannerId].style.realHeight;
              }
              console.log("_bottomCenterBanner -> this.banner.style", this.banner[bannerId].style);
              if (this.bannerStyle)
                  this.applyCustomStyle({
                      banner: this.banner[bannerId],
                  });
              else if (this.banner[bannerId]) {
                  this.banner[bannerId].style.left = (windowWidth - size.width) / 2;
              }
          };
          PlatformModule.prototype._resetBanenrStyle = function (e) {
              console.log("PlatformModule ~ _resetBanenrStyle ~ size", e);
              if (this.bannerStyle) {
                  this.applyCustomStyle(e);
              }
              else {
                  var style = this._getBannerPosition();
                  if (e.banner) {
                      e.banner.style.top = style.top;
                      e.banner.style.left = style.left;
                      console.log(MSG.BANNER_RESIZE, e.banner.style, "set top ", top);
                  }
              }
          };
          PlatformModule.prototype.applyCustomStyle = function (e) {
              for (var key in this.bannerStyle) {
                  if (e.banner)
                      e.banner.style[key] = this.bannerStyle[key];
              }
          };
          PlatformModule.prototype._getBannerPosition = function () {
              var horizontal = this.bannerHorizontal;
              var vertical = this.bannerVertical;
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.windowWidth;
              var windowHeight = wxsys.windowHeight;
              var top = 0;
              var left = 0;
              if (vertical == BANNER_VERTICAL.TOP) {
                  top = 0;
              }
              else if (vertical == BANNER_VERTICAL.CENTER) {
                  top = (windowHeight - this.bannerHeigth) / 2;
              }
              else if (vertical == BANNER_VERTICAL.BOTTOM) {
                  top = windowHeight - this.bannerHeigth;
              }
              if (horizontal == BANNER_HORIZONTAL.LEFT) {
                  left = 0;
              }
              else if (horizontal == BANNER_HORIZONTAL.RIGHT) {
                  left = windowWidth - this.bannerWidth;
              }
              else if (horizontal == BANNER_HORIZONTAL.CENTER) {
                  left = (windowWidth - this.bannerWidth) / 2;
              }
              console.log("PlatformModule ~ _getBannerPosition ~ left", left, top);
              return {
                  left: left,
                  top: top,
              };
          };
          PlatformModule.prototype.preloadBanner = function (idIndex) {
              if (idIndex === void 0) {
                  idIndex = -1;
              }
              this.preloadBannerId = this._createBannerAd(idIndex);
              return this.getPreloadBannerIndex();
          };
          PlatformModule.prototype.getPreloadBannerIndex = function () {
              var arr = Common.config.bannerId;
              if (arr instanceof Array) {
                  return arr.indexOf(this.preloadBannerId);
              }
              return 0;
          };
          PlatformModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = -1;
              }
              console.log(MSG.BANNER_SHOW);
              this.bannerCb = callback;
              if (!window[this.platformName]) {
                  return;
              }
              this.bannerHorizontal = horizontal;
              this.bannerVertical = vertical;
              this.bannerStyle = style;
              this._hideBanner();
              this.currentBannerId = this._createBannerAd(idIndex);
              if (!this.bannerErrorQuene[this.currentBannerId])
                  this.bannerErrorQuene[this.currentBannerId] = {};
              this.bannerErrorQuene[this.currentBannerId].isShow = true;
              this.triggerBannerError(this.currentBannerId);
              if (this.mTimeoutId) {
                  clearTimeout(this.mTimeoutId);
                  this.mTimeoutId = null;
              }
              moosnow.http.getAllConfig(function (res) {
                  if (res.BannerAll == 0) {
                      console.log("后台关闭所有banner BannerAll == 0 发送 ON_BANNER_ERROR 事件");
                      moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_ERROR, {
                          horizontal: _this.bannerHorizontal,
                          vertical: _this.bannerVertical,
                      });
                      return;
                  }
                  if (remoteOn)
                      if (res.mistouchNum == 0) {
                          console.log("后台关闭了banner 发送 ON_BANNER_ERROR 事件");
                          moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_ERROR, {
                              horizontal: _this.bannerHorizontal,
                              vertical: _this.bannerVertical,
                          });
                          return;
                      }
                      else {
                          console.log("后台开启了banner，执行显示");
                          _this._showBanner();
                      }
                  else
                      _this._showBanner();
              });
          };
          PlatformModule.prototype.showScreenOutBanner = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBannerAd)
                  return;
              this.hideScreenOutBanner();
              var bannerId = this.getBannerId(-1);
              this.mScreenOutBanner = window[this.platformName].createBannerAd({
                  adUnitId: bannerId,
                  adIntervals: 30,
                  style: {
                      top: -300,
                      left: -300,
                      width: this.bannerWidth,
                  },
              });
              this.mScreenOutBanner.onResize(function (res) {
                  console.log("外部banner onResize", res);
              });
              this.mScreenOutBanner.onError(function (err) {
                  console.log("外部banner onError", err);
              });
              this.mScreenOutBanner.onLoad(function (err) {
                  console.log("外部banner onLoad", err);
              });
              this.mScreenOutBanner.show();
          };
          PlatformModule.prototype.hideScreenOutBanner = function () {
              if (this.mScreenOutBanner) {
                  this.mScreenOutBanner.hide();
                  this.mScreenOutBanner.destroy();
                  this.mScreenOutBanner = null;
              }
          };
          PlatformModule.prototype._showBanner = function () {
              var _this = this;
              var banner = this.banner[this.currentBannerId];
              if (banner) {
                  banner.hide();
                  this._resetBanenrStyle({
                      banner: banner,
                      width: banner.style.width,
                      height: banner.style.realHeight,
                  });
                  var showPromise = banner.show();
                  showPromise &&
                      showPromise.then(function () {
                          _this._resetBanenrStyle({
                              banner: banner,
                              width: banner.style.width,
                              height: banner.style.realHeight,
                          });
                      });
              }
          };
          PlatformModule.prototype.showAutoBanner = function (horizontal, vertical, idIndex) {
              var _this = this;
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = -1;
              }
              console.log("执行自动显示和隐藏Banner功能");
              moosnow.http.getAllConfig(function (res) {
                  if (res && res.gameBanner == 1) {
                      _this.showBanner(true, function () { }, horizontal, vertical, idIndex);
                      var time = isNaN(res.gameBanenrHideTime) ? 1.5 : parseFloat(res.gameBanenrHideTime);
                      _this.mTimeoutId = setTimeout(function () {
                          console.log("自动隐藏时间已到，开始隐藏Banner");
                          _this.hideBanner();
                      }, time * 1000);
                  }
                  else {
                      console.log("后台关闭了auto banner");
                  }
              });
          };
          PlatformModule.prototype.showFlashBanner = function (horizontal, vertical, idIndex) {
              var _this = this;
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = -1;
              }
              moosnow.http.getAllConfig(function (res) {
                  if (!res)
                      return;
                  var flashBannerDelayTime = isNaN(res.FlashBannerDelayTime) ? 0 : res.FlashBannerDelayTime;
                  var flashBannerContinueTime = isNaN(res.FlashBannerContinueTime) ? 1.5 : parseFloat(res.FlashBannerContinueTime);
                  _this.unscheduleOnce(_this.showFlashBannerCallback);
                  _this.scheduleOnce(_this.showFlashBannerCallback, flashBannerDelayTime, [flashBannerContinueTime, horizontal, vertical, idIndex]);
              });
          };
          PlatformModule.prototype.showFlashBannerCallback = function (continueTime, horizontal, vertical, idIndex) {
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = -1;
              }
              this.showBanner(true, function () { }, horizontal, vertical, idIndex);
              this.unscheduleOnce(this.hideFlashBannerCallback);
              this.scheduleOnce(this.hideFlashBannerCallback, continueTime);
          };
          PlatformModule.prototype.hideFlashBannerCallback = function () {
              this.hideBanner();
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_FLASH_BANNER_HIDE, null);
          };
          PlatformModule.prototype.exitApplication = function () { };
          PlatformModule.prototype.showIntervalBanner = function (horizontal, vertical) {
              var _this = this;
              if (horizontal === void 0) {
                  horizontal = BLOCK_HORIZONTAL.NONE;
              }
              if (vertical === void 0) {
                  vertical = BLOCK_VERTICAL.NONE;
              }
              console.log("执行 showIntervalBanner");
              moosnow.http.getAllConfig(function (res) {
                  var gameBannerInterval = res && !isNaN(res.gameBannerInterval) ? parseFloat(res.gameBannerInterval) : 20;
                  _this.schedule(_this.showAutoBanner, gameBannerInterval, [horizontal, vertical]);
              });
          };
          PlatformModule.prototype.clearIntervalBanner = function () {
              console.log("执行 clearIntervalBanner");
              this.unschedule(this.showAutoBanner);
          };
          PlatformModule.prototype.hideBanner = function () {
              console.log("hideBanner ~ this.banner", this.banner);
              if (!this.banner)
                  return;
              this._hideBanner();
              if (!this.banner[this.currentBannerId])
                  return;
              this.banner[this.currentBannerId].bannerShowCount++;
              if (this.bannerLimitType == 0) {
                  if (this.banner[this.currentBannerId].bannerShowCount >= this.bannerShowCountLimit) {
                      console.log("次数满足,销毁banner");
                      this.destroyBanner(this.currentBannerId);
                      this._prepareBanner(this.currentBannerId);
                  }
              }
              else {
                  if (Date.now() - this.banner[this.currentBannerId].bannerShowTime > this.bannerShowTimeLimit * 1000) {
                      console.log("时间满足，销毁banner");
                      this.destroyBanner(this.currentBannerId);
                      this._prepareBanner(this.currentBannerId);
                  }
              }
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_HIDE, null);
          };
          PlatformModule.prototype._hideBanner = function () {
              for (var k in this.banner) {
                  if (this.banner[k] && this.banner[k].hide) {
                      this.banner[k].hide();
                  }
              }
          };
          PlatformModule.prototype.destroyBanner = function (bannerId) {
              this.banner[bannerId].offResize(this._onBannerResize);
              this.banner[bannerId].offError(this._onBannerError);
              this.banner[bannerId].offLoad(this._onBannerLoad);
              this.banner[bannerId].destroy();
              this.banner[bannerId] = null;
          };
          PlatformModule.prototype.initVideo = function () {
              this.createRewardAD(false);
          };
          PlatformModule.prototype.createRewardAD = function (show, idIndex) {
              var _this = this;
              if (idIndex === void 0) {
                  idIndex = 0;
              }
              if (this.videoLoading) {
                  return;
              }
              if (!window[this.platformName]) {
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!window[this.platformName].createRewardedVideoAd) {
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              var videoId = this.getVideoId(idIndex);
              if (Common.isEmpty(videoId)) {
                  console.warn(MSG.VIDEO_KEY_IS_NULL);
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!this.video[videoId]) {
                  this.video[videoId] = window[this.platformName].createRewardedVideoAd({
                      adUnitId: videoId,
                  });
                  if (!this.video[videoId]) {
                      console.warn("创建视频广告失败");
                      return;
                  }
                  this.video[videoId].onError(this._onVideoError);
                  this.video[videoId].onClose(this._onVideoClose);
                  this.video[videoId].onLoad(this._onVideoLoad);
              }
              moosnow.platform.videoLoading = true;
              moosnow.platform.videoPlaying = false;
              this.video[videoId]
                  .load()
                  .then(function () {
                  if (show) {
                      moosnow.platform.videoPlaying = true;
                      _this.video[videoId]
                          .show()
                          .then(function () { })
                          .catch(function (err) {
                          _this._onVideoError(err.errMsg, err.errCode);
                          console.log(err.errMsg);
                      });
                  }
              })
                  .catch(function (err) {
                  _this._onVideoError(err.errMsg, err.errCode);
                  console.log(err.errMsg);
              });
          };
          PlatformModule.prototype._onVideoError = function (msg, code) {
              console.log(MSG.VIDEO_ERROR_COMPLETED, msg, code);
              moosnow.platform.videoLoading = false;
              moosnow.platform.videoPlaying = false;
              if (moosnow.platform.videoCb) {
                  moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                  moosnow.platform.videoCb = null;
              }
          };
          PlatformModule.prototype._onVideoClose = function (isEnd) {
              console.log(MSG.VIDEO_CLOSE_COMPLETED, isEnd.isEnded);
              moosnow.platform.videoLoading = false;
              moosnow.platform.videoPlaying = false;
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, null);
              if (!!isEnd.isEnded) {
                  moosnow.http.clickVideo();
              }
              if (moosnow.platform.videoCb) {
                  var ret_1 = !!isEnd.isEnded ? VIDEO_STATUS.END : VIDEO_STATUS.NOTEND;
                  setTimeout(function () {
                      moosnow.platform.videoCb(ret_1);
                  }, 50);
              }
          };
          PlatformModule.prototype._onVideoLoad = function () {
              console.log(MSG.VIDEO_LOAD_COMPLETED);
              moosnow.platform.videoLoading = false;
          };
          PlatformModule.prototype.showVideo = function (completeCallback, idIndex) {
              if (completeCallback === void 0) {
                  completeCallback = null;
              }
              if (idIndex === void 0) {
                  idIndex = 0;
              }
              console.log("显示video");
              moosnow.platform.videoCb = completeCallback;
              this.createRewardAD(true, idIndex);
          };
          PlatformModule.prototype.initInter = function () {
              this.prepareInter();
          };
          PlatformModule.prototype.prepareInter = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createInterstitialAd)
                  return;
              if (!this.supportVersion("2.8.0"))
                  return;
              if (Common.isEmpty(this.interId)) {
                  console.warn(MSG.INTER_KEY_IS_NULL);
                  return;
              }
              this.inter = window[this.platformName].createInterstitialAd({
                  adUnitId: this.interId,
              });
              this.inter.onLoad(this._onInterLoad.bind(this));
              this.inter.onClose(this._onInterClose.bind(this));
          };
          PlatformModule.prototype.showInter = function () {
              if (!this.inter)
                  return;
              if (this.isInterLoaded)
                  this.inter.show();
          };
          PlatformModule.prototype._onInterLoad = function () {
              this.interShowCount = 0;
              this.isInterLoaded = true;
              console.log("插屏广告加载完成");
          };
          PlatformModule.prototype._onInterClose = function () {
              this.interShowCount++;
              if (this.interShowCount >= this.interShowCountLimit) {
                  this.isInterLoaded = false;
                  this.inter.load();
              }
          };
          PlatformModule.prototype._onInterError = function (err) {
              console.log("\u63D2\u5C4F\u5E7F\u544A\u51FA\u9519\uFF1A", err);
          };
          PlatformModule.prototype._prepareNative = function () { };
          PlatformModule.prototype._onNativeLoad = function (res) { };
          PlatformModule.prototype._onNativeError = function (err) { };
          PlatformModule.prototype._destroyNative = function () { };
          PlatformModule.prototype.showNativeAd = function (callback) {
              if (Common.isFunction(callback))
                  callback();
          };
          PlatformModule.prototype.clickNative = function (callback) { };
          PlatformModule.prototype.showAppBox = function (callback, remoteOn) {
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (Common.isFunction(callback))
                  callback();
          };
          PlatformModule.prototype.hideAppBox = function (callback) {
              if (Common.isFunction(callback))
                  callback();
          };
          PlatformModule.prototype.reportMonitor = function (name, value) { };
          PlatformModule.prototype.showMoreGameButton = function (url, callback, style) {
              if (style === void 0) {
                  style = null;
              }
              if (callback)
                  callback();
          };
          PlatformModule.prototype.initRank = function () {
              var data = {
                  action: 1,
              };
              this.postMessage(data);
          };
          PlatformModule.prototype.showRank = function () {
              var data = {
                  action: 10,
              };
              this.postMessage(data);
          };
          PlatformModule.prototype.updateUserScore = function (score) {
              var data = {
                  action: 13,
                  data: score,
              };
              this.postMessage(data);
          };
          PlatformModule.prototype.hideRank = function () {
              var data = {
                  action: 20,
              };
              this.postMessage(data);
          };
          PlatformModule.prototype.checkFollowAwemeSate = function (success, fail) {
              if (success)
                  success(true);
          };
          PlatformModule.prototype.openAwemeUserProile = function (success, fail) {
              if (success)
                  success(true);
          };
          PlatformModule.prototype.hasShortcutInstalled = function (success, fail) {
              success(false);
          };
          PlatformModule.prototype.installShortcut = function (success, message, fail) {
              if (message === void 0) {
                  message = "方便下次快速启动";
              }
          };
          PlatformModule.prototype.showBlock = function (horizontal, vertical, orientation, size) {
              if (horizontal === void 0) {
                  horizontal = BLOCK_HORIZONTAL.NONE;
              }
              if (vertical === void 0) {
                  vertical = BLOCK_VERTICAL.NONE;
              }
              if (orientation === void 0) {
                  orientation = 1;
              }
              if (size === void 0) {
                  size = 5;
              }
          };
          PlatformModule.prototype.hideBlock = function () { };
          PlatformModule.prototype.hideExitButton = function () {
              var _this = this;
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createVideo)
                  return;
              if (!this.isIphone())
                  return;
              if (this.isLoaded) {
                  return;
              }
              this.isLoaded = true;
              moosnow.http.getAllConfig(function (res) {
                  var isBlockClose = res && res.isBlockClose == 1;
                  if (isBlockClose) {
                      var sysInfo = _this.getSystemInfoSync();
                      var width = sysInfo.screenWidth;
                      var height = sysInfo.screenHeight;
                      var url = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/video/1.mp4";
                      var video = window["wx"].createVideo({
                          x: 0,
                          y: 0,
                          width: width,
                          height: height,
                          src: url,
                          objectFit: "contain",
                          controls: !1,
                          autoplay: !0,
                          showCenterPlayBtn: !1,
                          enableProgressGesture: !1,
                      });
                      if (sysInfo.model.indexOf("iPhone") != -1) {
                          console.log("苹果手机 播放视频");
                          video.requestFullScreen();
                      }
                      video.onEnded(function (e) {
                          video.destroy();
                          console.log("video.destroy");
                      });
                  }
              });
          };
          PlatformModule.prototype.onDisable = function () { };
          return PlatformModule;
      })(BaseModule);
      var WXModule = (function (_super) {
          __extends(WXModule, _super);
          function WXModule() {
              var _this = _super.call(this) || this;
              _this.platformName = "wx";
              _this.writeTime = 0;
              _this.recordCb = null;
              _this._regisiterWXCallback();
              _this.initBanner();
              _this.initInter();
              return _this;
          }
          WXModule.prototype.login = function (callback, fail) {
              moosnow.http.getAllConfig(function (res) { });
              var self = this;
              var userToken = moosnow.data.getToken();
              if (userToken) {
                  self.getUserToken("", userToken, callback);
              }
              else {
                  if (window[this.platformName] && window[this.platformName].login)
                      window[this.platformName].login({
                          success: function (res) {
                              if (res.code) {
                                  self.getUserToken(res.code, "", callback);
                              }
                              else {
                                  if (Common.isFunction(callback))
                                      callback();
                              }
                          },
                          fail: function () { },
                      });
                  else {
                      _super.prototype.login.call(this, callback, fail);
                  }
              }
          };
          WXModule.prototype.getUserToken = function (code, user_id, callback) {
              var options = this.getLaunchOption();
              var scene = options.scene;
              var channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
              var channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";
              moosnow.data.setChannelAppId(channel_appid);
              moosnow.data.setChannelId(channel_id);
              var fromApp = options.referrerInfo ? options.referrerInfo.appId : "未知";
              if (window[this.platformName] && window[this.platformName].aldSendEvent) {
                  window[this.platformName].aldSendEvent("来源", {
                      origin: fromApp,
                      path: options.query.from || 0,
                  });
              }
              moosnow.http.request(this.baseUrl + "api/channel/login.html", {
                  appid: Common.config.moosnowAppId,
                  code: code,
                  user_id: user_id,
                  channel_id: channel_id,
                  channel_appid: channel_appid,
                  scene: scene,
                  fromApp: fromApp,
              }, "POST", function (respone) {
                  console.log("WXModule -> getUserToken -> respone", respone);
                  if (respone.code == 0 && respone.data && respone.data.user_id) {
                      moosnow.data.setToken(respone.data.user_id);
                  }
                  if (Common.isFunction(callback))
                      callback(respone);
              }, function () {
                  if (Common.isFunction(callback))
                      callback({});
              });
          };
          WXModule.prototype.initRecord = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].getGameRecorder)
                  return;
              this.recordObj = window[this.platformName].getGameRecorder();
          };
          WXModule.prototype.startRecord = function (duration, callback) {
              var _this = this;
              if (duration === void 0) {
                  duration = 300;
              }
              if (callback === void 0) {
                  callback = null;
              }
              console.log("record startRecord");
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
              this.recordObj.start().then(function (res) {
                  _this.recordObj.on("timeUpdate", function (res) {
                      console.log("\u89C6\u9891\u65F6\u957F: " + res.currentTime);
                      _this.writeTime = Math.min(res.currentTime, 60000);
                  });
                  _this.recordObj.on("start", function () {
                      if (callback)
                          callback();
                  });
                  _this.recordObj.on("stop", function (res) {
                      console.log("\u5BF9\u5C40\u56DE\u653E\u65F6\u957F: ", res);
                      if (_this.recordCb)
                          _this.recordCb(res);
                  });
              });
          };
          WXModule.prototype.stopRecord = function (callback) {
              var _this = this;
              if (callback === void 0) {
                  callback = null;
              }
              console.log(" stop Record  callback  ", !!callback);
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
              this.recordCb = callback;
              var stopPromise = this.recordObj.stop();
              stopPromise &&
                  stopPromise
                      .then(function (res) {
                      if (!res.error.code) {
                          _this.recordObj.off("timeUpdate");
                      }
                      console.log(" stop Record  then  ", res);
                  })
                      .catch(function (res) {
                      console.log(" stop Record  catch  ", res);
                  });
          };
          WXModule.prototype.pauseRecord = function () {
              if (this.recordObj) {
                  this.recordObj.pause();
              }
          };
          WXModule.prototype.resumeRecord = function () {
              if (this.recordObj) {
                  this.recordObj.resume();
              }
          };
          WXModule.prototype.showShareButton = function (style, timeRange, callback) {
              var _this = this;
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createGameRecorderShareButton)
                  return;
              if (!timeRange)
                  timeRange = [[0, this.writeTime]];
              moosnow.http.getAllConfig(function (res) {
                  _this.mShareButton = window[_this.platformName].createGameRecorderShareButton({
                      style: __assign(__assign({ left: 10, top: 150, height: 50 }, style), { color: "#ffffff", textAlign: "center", fontSize: 16, borderRadius: 4, iconMarginRight: 16, paddingLeft: 1, paddingRight: 30 }),
                      text: res.shareButtonText || "",
                      image: res.shareBgImage || "",
                      icon: res.shareIconImage || "",
                      share: {
                          query: "a=1&b=2",
                          bgm: "",
                          timeRange: timeRange,
                      },
                  });
                  _this.mShareButton.show();
                  _this.mShareButton.onTap(function (res) {
                      console.log("\u9519\u8BEF\u7801\uFF1A" + res.error.code + "\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1A" + res.error.message);
                      if (callback)
                          callback(res);
                  });
              });
          };
          WXModule.prototype.hideShareButton = function () {
              if (this.mShareButton) {
                  this.mShareButton.hide();
              }
          };
          return WXModule;
      })(PlatformModule);
      var AdModule = (function (_super) {
          __extends(AdModule, _super);
          function AdModule() {
              var _this = _super.call(this) || this;
              _this.baseUrl = "https://api.liteplay.com.cn/admin/";
              _this.cacheImage = null;
              _this.cacheKey = "cacheUrl";
              _this.getResUrl = function (localUrl) {
                  for (var key in this.this.cacheImage) {
                      if (this.this.cacheImage[key] == localUrl)
                          return key;
                  }
                  return "";
              };
              _this.convertToCacheUrl = function (imgUrl, callback) {
                  if (!this.cacheImage[imgUrl]) {
                      this.downloadImage(imgUrl, function (url) {
                          callback(url);
                      });
                  }
                  else {
                      callback(this.cacheImage[imgUrl]);
                  }
              };
              _this.saveCacheUrl = function (retValue) {
                  var clearItem = [];
                  var fileSystemManager = window["wx"].getFileSystemManager();
                  for (var url in this.cacheImage) {
                      var removeUrl = true;
                      for (var pos in retValue) {
                          for (var i = 0; i < retValue[pos].length; i++) {
                              if (retValue[pos][i].atlas == this.cacheImage[url] || retValue[pos][i].img == this.cacheImage[url]) {
                                  removeUrl = false;
                              }
                          }
                      }
                      if (removeUrl) {
                          clearItem.push(url);
                      }
                  }
                  for (var i = 0; i < clearItem.length; i++) {
                      if (clearItem[i]) {
                          console.log("clear file ", clearItem[i]);
                          try {
                              fileSystemManager.removeSavedFile(clearItem[i]);
                          }
                          catch (e) {
                              console.log("clear file error ", clearItem[i]);
                          }
                      }
                      delete this.cacheImage[clearItem[i]];
                  }
                  if (window["wx"])
                      window["wx"].setStorage({
                          key: this.cacheKey,
                          data: this.cacheImage,
                          success: function () { },
                          fail: function () { },
                          complete: function () { },
                      });
              };
              _this.mMemory = {};
              _this.getCache = function () {
                  return this.mMemory;
              };
              _this.setCache = function (val) {
                  this.mMemory = val;
              };
              return _this;
          }
          AdModule.prototype.getDistinctAd = function (source) {
              var retValue = [];
              var retValue2 = [];
              var temp = source.sort(function (a, b) {
                  return Math.random() > 0.5 ? 1 : -1;
              });
              for (var i = 0; i < temp.length; i++) {
                  var item = temp[i];
                  var append = true;
                  for (var j = 0; j < retValue.length; j++) {
                      var retItem = retValue[j];
                      if (retItem.appid == item.appid) {
                          append = false;
                          break;
                      }
                  }
                  if (append)
                      retValue.push(item);
                  else
                      retValue2.push(item);
              }
              return __spreadArrays(retValue, retValue2);
          };
          AdModule.prototype.getAd = function (callback) {
              var _this = this;
              var cache = this.getCache();
              if (!Common.isEmpty(cache.indexLeft)) {
                  var distinctAd = this.getDistinctAd(cache.indexLeft);
                  var temp = __assign(__assign({}, cache), { indexLeft: distinctAd });
                  callback(temp);
              }
              else
                  this.getRemoteAd(function (res) {
                      var retValue = _this.initRetValue();
                      res.forEach(function (item) {
                          retValue = _this.formatRow(retValue, item);
                      });
                      _this.setCache(retValue);
                      var distinctAd = _this.getDistinctAd(retValue.indexLeft);
                      var temp = __assign(__assign({}, cache), { indexLeft: distinctAd });
                      callback(temp);
                  });
          };
          AdModule.prototype.getRemoteAd = function (cb) {
              cb([]);
          };
          AdModule.prototype.loadCacheImage = function (callback) {
              var _this = this;
              if (this.cacheImage) {
                  callback(this.cacheImage);
              }
              else
                  wx.getStorage({
                      key: this.cacheKey,
                      success: function (storageVal) {
                          this.cacheImage = storageVal.data;
                          console.log("cacheKey data  ", storageVal.data);
                      },
                      fail: function () {
                          _this.cacheImage = {};
                          console.log("cacheKey error ");
                      },
                      complete: function () {
                          callback(this.this.cacheImage);
                      },
                  });
          };
          AdModule.prototype.initRetValue = function () {
              var retValue = {
                  indexBanner: [],
                  indexFloat: [],
                  indexLeft: [],
                  gameEndPage: [],
                  gameRespawnPage: [],
                  exportPage: [],
              };
              return retValue;
          };
          AdModule.prototype.formatRow = function (retValue, item) {
              switch (item.position) {
                  case "1":
                      retValue.indexLeft.push(item);
                      break;
                  case "2":
                      retValue.indexFloat.push(item);
                      break;
                  case "3":
                      retValue.indexBanner.push(item);
                      break;
                  case "4":
                      retValue.gameEndPage.push(item);
                      break;
                  case "5":
                      retValue.gameRespawnPage.push(item);
                      break;
                  case "6":
                      retValue.exportPage.push(item);
                      break;
                  default:
                      retValue.indexLeft.push(item);
                      break;
              }
              return retValue;
          };
          AdModule.prototype.downloadImage = function (imgUrl, callback) {
              if (window["wx"])
                  wx.downloadFile({
                      header: {},
                      url: imgUrl,
                      success: function (res) {
                          var _this = this;
                          if (res.statusCode === 200) {
                              wx.saveFile({
                                  tempFilePath: res.tempFilePath,
                                  success: function (res) {
                                      _this.cacheImage["" + imgUrl] = res.savedFilePath;
                                      callback(res.savedFilePath);
                                  },
                                  fail: function () {
                                      callback(imgUrl);
                                  },
                                  complete: function () { },
                              });
                          }
                      },
                      fail: function () {
                          callback(imgUrl);
                      },
                      complete: function () { },
                  });
              else
                  callback(imgUrl);
          };
          return AdModule;
      })(BaseModule);
      var ROOT_CONFIG = {
          UI_ROOT: "moosnow/prefab/ui/",
          ENTITY_ROOT: "moosnow/prefab/entity/",
          HTTP_ROOT: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com",
      };
      var ErrorType = {
          ONERROR: "HTTP协议链接出错",
          ONTIMEOUT: "HTTP协议链接超时",
          POSTERROR: "HTTP协议请求出错",
          RETURNERROR: "服务器返回错误code",
      };
      var GAME_COMMAND = {
          VERIFY_USER: 1,
          CREATE_ROLE: 2,
          CAPTAIN: 3,
      };
      var HttpModule = (function (_super) {
          __extends(HttpModule, _super);
          function HttpModule() {
              var _this = _super.call(this) || this;
              _this.appid = "";
              _this.secret = "";
              _this.versionNumber = "";
              _this.version = "2.1.0";
              _this.baseUrl = "https://api.liteplay.com.cn/";
              _this.instanceTime = 0;
              _this.mLaunchOptions = {};
              _this.cfgData = null;
              _this.areaData = null;
              _this._cfgQuene = [];
              _this._localQuene = [];
              _this.instanceTime = Date.now();
              var versionUrl = ROOT_CONFIG.HTTP_ROOT + "/SDK/version.json?t=" + Date.now();
              if (Common.platform == APP_PLATFORM.PC) {
                  _this.request(versionUrl, {}, "GET", function (res) {
                      if (_this.version < res.version) {
                          console.warn("\u60A8\u7684SDK\u7248\u672C\u53F7[" + _this.version + "]\u4E0D\u662F\u6700\u65B0\u7248\u672C\uFF0C\u8BF7\u5C3D\u5FEB\u5347\u7EA7\uFF0C\u6700\u65B0\u7248\u672C[" + res.version + "]  \u4E0B\u8F7D\u5730\u5740\uFF1A" + res.download);
                          if (!Common.isEmpty(res.memo))
                              console.warn("" + res.memo);
                      }
                  });
              }
              else if (Common.platform == APP_PLATFORM.WX && window["wx"]) {
                  _this.request(versionUrl, {}, "GET", function (res) {
                      var aldVersion = window["wx"]["aldVersion"];
                      if (!aldVersion || (aldVersion && aldVersion < res.aldVersion))
                          console.warn("\u963F\u62C9\u4E01\u6587\u4EF6\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u4E0B\u8F7D" + res.aldUrl);
                  });
              }
              _this.getShareInfo(function (data) {
                  moosnow.platform.initShare(data);
              });
              _this.loadCfg(function (res) {
                  console.log("remote config ", res);
              });
              return _this;
          }
          Object.defineProperty(HttpModule.prototype, "appLaunchOptions", {
              get: function () {
                  if (Common.isEmpty(this.mLaunchOptions)) {
                      if (moosnow.platform && moosnow.platform.getLaunchOption)
                          this.mLaunchOptions = moosnow.platform.getLaunchOption();
                  }
                  return this.mLaunchOptions;
              },
              enumerable: true,
              configurable: true,
          });
          HttpModule.prototype.request = function (url, data, method, success, fail, complete) {
              var newUrl = "";
              newUrl = url;
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                      var response = xhr.responseText;
                      if (xhr.status >= 200 && xhr.status < 400) {
                          var result = {};
                          try {
                              result = JSON.parse(response);
                          }
                          catch (e) {
                              console.error("json parse error ", response);
                              if (fail)
                                  fail(e);
                          }
                          if (success)
                              success(result);
                      }
                      else {
                          console.warn("error ", response);
                          if (fail)
                              fail(response);
                      }
                  }
                  else {
                  }
              };
              xhr.timeout = 10000;
              xhr.ontimeout = function (event) {
                  console.error("error ", event);
                  if (fail)
                      fail(event);
              };
              if (method == "POST") {
                  xhr.open("POST", newUrl);
                  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                  xhr.send(this._object2Query(data));
              }
              else {
                  xhr.open(method, newUrl, true);
                  xhr.send();
              }
          };
          HttpModule.prototype._object2Query = function (obj) {
              var args = [];
              for (var k in obj)
                  args.push(k + "=" + obj[k]);
              return args.join("&");
          };
          HttpModule.prototype.isDisableArea = function (callback) { };
          HttpModule.prototype.finishLoading = function () {
              this.point("加载完成", {
                  time: Date.now() - this.instanceTime,
              });
          };
          HttpModule.prototype.clickBanner = function () {
          };
          HttpModule.prototype.clickVideo = function () {
          };
          HttpModule.prototype.exportUser = function () {
          };
          HttpModule.prototype.navigate = function (row, callback) {
              var userToken = moosnow.data.getToken();
              var options = moosnow.platform.getLaunchOption();
              var fromAppId = options.referrerInfo ? options.referrerInfo.appId : "未知";
              var wxgamecid = Common.isEmpty(options.query.wxgamecid) ? "" : options.query.wxgamecid;
              var query = options.query;
              var appid = Common.config.moosnowAppId;
              var tag = moosnow.data.getNavigateToken(appid);
              var navigateData = {
                  scene_no: Common.isEmpty(options.scene) ? "" : options.scene,
                  source_appid: Common.isEmpty(fromAppId) ? "" : fromAppId,
                  query: query,
                  wechat_channel: wxgamecid,
                  title: row.title,
                  position: row.position,
                  jump_app_icon: row.atlas || row.img,
                  appid: appid,
                  uid: userToken,
                  jump_appid: row.appid,
                  jump_app_name: row.title,
                  tag: tag,
              };
              console.log("navigate navigateData", navigateData);
              this.request(this.baseUrl + "api/jump/record", navigateData, "POST", function (respone) {
                  console.log("navigate success ", respone);
                  if (callback)
                      callback(respone.data);
              });
          };
          HttpModule.prototype.navigateEnd = function (code) {
              this.request(this.baseUrl + "api/jump/success", {
                  tag: code,
              }, "POST", function (respone) {
                  console.log("navigateEnd code ", code, respone);
              });
          };
          HttpModule.prototype.point = function (name, data) {
              if (data === void 0) {
                  data = null;
              }
              this.getAllConfig(function (res) {
                  if (res && res.aldMonitorOn == 1) {
                      if (Common.platform == APP_PLATFORM.WX) {
                          if (window["wx"] && window["wx"].aldSendEvent)
                              window["wx"].aldSendEvent(name, data);
                      }
                      else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                          if (window["tt"] && window["tt"].reportAnalytics)
                              window["tt"].reportAnalytics(name, data);
                      }
                  }
              });
          };
          HttpModule.prototype.startGame = function (level) {
              var e = {
                  stageId: "" + level,
                  stageName: "" + level,
                  userId: moosnow.data.getToken(),
              };
              if (Common.platform == APP_PLATFORM.WX) {
                  if (window["wx"] && window["wx"].aldStage)
                      window["wx"].aldStage.onStart(e);
                  else
                      console.warn(MSG.ALD_FILE_NO_IMPORT);
              }
              else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                  this.point("startgame", e);
              }
              else
                  console.log("startGame -> e", e);
          };
          HttpModule.prototype.endGame = function (level, isWin) {
              var event = isWin ? "complete" : "fail";
              var desc = isWin ? "关卡完成" : "关卡失败";
              var e = {
                  stageId: "" + level,
                  stageName: "" + level,
                  userId: moosnow.data.getToken(),
                  event: event,
                  params: {
                      desc: desc,
                  },
              };
              if (Common.platform == APP_PLATFORM.WX) {
                  if (window["wx"] && window["wx"].aldStage)
                      window["wx"].aldStage.onEnd(e);
                  else
                      console.warn(MSG.ALD_FILE_NO_IMPORT);
              }
              else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                  this.point(isWin ? "gameEnd" : "gameFail", {
                      stageId: "" + level,
                      stageName: "" + level,
                      userId: moosnow.data.getToken(),
                  });
              }
              else
                  console.log("startGame -> e", e);
          };
          HttpModule.prototype.videoPoint = function (type, info, level) {
              var name = type == 0 ? "点击视频" : "观看完成视频";
              var e = { info: info, level: level + "" };
              if (Common.platform == APP_PLATFORM.WX) {
                  this.point(name, e);
              }
              else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                  this.point(type == 0 ? "clickVideo" : "endVideo", e);
              }
              else
                  console.log("startGame -> e", e);
          };
          HttpModule.prototype.getAllConfig = function (callback) {
              var _this = this;
              this.loadCfg(function (res) {
                  if (res.inWhite) {
                      callback(__assign(__assign({}, res), { exportAutoNavigate: 1, isLimitArea: 0 }));
                  }
                  else {
                      _this.loadArea(function (res2) {
                          _this.disableAd(res, res2, function (disable) {
                              var exportAutoNavigate = 0;
                              if (disable) {
                                  if (res.exportAutoNavigate == 1)
                                      exportAutoNavigate = 0;
                                  if (res.exportAutoNavigate == 2)
                                      exportAutoNavigate = 1;
                                  callback(__assign(__assign({ isLimitArea: 1 }, res), _this.getCfg(false)));
                              }
                              else {
                                  if (res.exportAutoNavigate == 1)
                                      exportAutoNavigate = 1;
                                  if (res.exportAutoNavigate == 2)
                                      exportAutoNavigate = 1;
                                  callback(__assign(__assign({}, res), { exportAutoNavigate: exportAutoNavigate, isLimitArea: 0 }));
                              }
                          });
                      });
                  }
              });
          };
          HttpModule.prototype.getCfg = function (open) {
              var cfg = {
                  checkBoxMistouch: 0,
                  checkBoxProbabilitys: [100, 0, 0, 0, 0],
                  mistouchNum: 0,
                  mistouchPosNum: 0,
                  bannerShowCountLimit: 1,
                  exportBtnNavigate: 0,
                  exportAutoNavigate: 0,
                  delayShow: 0,
                  showAppBox: 0,
                  zs_native_click_switch: 0,
                  zs_jump_switch: 0,
                  mx_native_click_switch: 0,
                  mx_jump_switch: 0,
                  mistouchInterval: 0,
                  nativeErrorShowInter: 0,
                  bannerErrorShowInter: 0,
                  isStartMistouch: 0,
                  isStartVideo: 0,
                  loadingAdOn: 0,
                  isBlockClose: 0,
                  SkinForceAd: 0,
                  CancelToSkip: 0,
                  SliceSkip: 0,
                  ForceSkip02: 0,
                  ForceSkip01: 0,
                  GameCenterWudian: 0,
                  SkinWudian: 0,
                  GGPopWudian: 0,
                  GamingEndFlashBanner: 0,
                  FlashBanner01: 0,
                  RewardOffsetBanner: 0,
              };
              if (open) {
                  for (var key in cfg) {
                      if (!isNaN(cfg[key]))
                          cfg[key] = 1;
                  }
              }
              return cfg;
          };
          HttpModule.prototype.defaultCfg = function (res, applyRemote) {
              var cfg = this.getCfg(false);
              if (res) {
                  console.warn("defaultCfg -> moosnow.data.getToken()", moosnow.data.getToken());
                  console.warn("defaultCfg -> res.whitelist", res.whitelist);
                  if (res.whitelist) {
                      var token = moosnow.data.getToken();
                      var inWhite = false;
                      if (token != "")
                          for (var i = 0; i < res.whitelist.length; i++) {
                              if (token == res.whitelist[i]) {
                                  inWhite = true;
                                  break;
                              }
                          }
                      if (inWhite) {
                          console.warn("白名单前 -> cfg", cfg);
                          cfg = __assign(__assign({ inWhite: inWhite }, cfg), this.getCfg(true));
                          console.warn("白名单后 -> cfg", cfg);
                      }
                  }
                  if (applyRemote) {
                      console.warn("使用后台数据前 -> cfg", cfg);
                      cfg = __assign(__assign({}, cfg), res);
                      console.warn("使用后台数据后 -> cfg", cfg);
                  }
                  else {
                      console.warn("不使用后台数据前 -> cfg", cfg);
                      cfg = __assign(__assign({}, res), cfg);
                      console.warn("不使用后台数据后 -> cfg", cfg);
                  }
              }
              if (moosnow.platform) {
                  if (res) {
                      if (!isNaN(res.bannerShowCountLimit))
                          moosnow.platform.bannerShowCountLimit = parseInt(res.bannerShowCountLimit);
                      if (!isNaN(res.bannerLimitType))
                          moosnow.platform.bannerLimitType = parseInt(res.bannerLimitType);
                      if (!isNaN(res.bannerShowTimeLimit))
                          moosnow.platform.bannerShowTimeLimit = parseInt(res.bannerShowTimeLimit);
                  }
              }
              return cfg;
          };
          HttpModule.prototype.loadCfg = function (callback) {
              var _this = this;
              if (!Common.isEmpty(this.cfgData)) {
                  callback(this.cfgData);
              }
              else {
                  this._cfgQuene.push(callback);
                  if (this._cfgQuene.length > 1)
                      return;
                  var url = "";
                  if (Common.config.url)
                      url = Common.config.url + "?t=" + Date.now();
                  else
                      url = ROOT_CONFIG.HTTP_ROOT + "/config/" + Common.config.moosnowAppId + ".json?t=" + Date.now();
                  this.request(url, {}, "GET", function (res) {
                      if (res.bannerId)
                          Common.config.bannerId = res.bannerId;
                      if (res.interId)
                          Common.config.interId = res.interId;
                      if (res.blockId)
                          Common.config.blockId = res.blockId;
                      if (res.boxId)
                          Common.config.boxId = res.boxId;
                      if (res.nativeId)
                          Common.config.nativeId = res.nativeId;
                      if (res.videoId)
                          Common.config.videoId = res.videoId;
                      var versionRet = moosnow.platform.checkLog(res.version);
                      if (!versionRet) {
                          _this.cfgData = _this.defaultCfg(res, false);
                          console.log("版本关闭----------------", _this.cfgData);
                      }
                      else {
                          var mistouchOn = res && res.mistouchOn == 1 ? true : false;
                          if (!mistouchOn) {
                              console.log("总开关已关闭----------------", _this.cfgData);
                          }
                          _this.cfgData = _this.defaultCfg(res, mistouchOn);
                      }
                      _this._cfgQuene.forEach(function (item) {
                          item(_this.cfgData);
                      });
                      _this._cfgQuene = [];
                  }, function () {
                      var cfg = _this.defaultCfg(null, false);
                      _this._cfgQuene.forEach(function (item) {
                          item(cfg);
                      });
                      _this._cfgQuene = [];
                      console.log("load config json fail");
                  });
              }
          };
          HttpModule.prototype.loadArea = function (callback) {
              var _this = this;
              if (this.areaData) {
                  callback(this.areaData);
              }
              else {
                  this._localQuene.push(callback);
                  if (this._localQuene.length > 1)
                      return;
                  var ipUrl = this.baseUrl + "admin/wx_config/getLocation";
                  this.request(ipUrl, {}, "GET", function (res2) {
                      _this.areaData = res2;
                      _this._localQuene.forEach(function (item) {
                          item(_this.areaData);
                      });
                      _this._localQuene = [];
                  }, function () {
                      _this._localQuene.forEach(function (item) {
                          item(_this.areaData);
                      });
                      _this._localQuene = [];
                  });
              }
          };
          HttpModule.prototype.getForceExport = function (callback) {
              var _this = this;
              this.loadCfg(function (res) {
                  _this.loadArea(function (res2) {
                      _this.disabledForceExport(res, res2, function (disable) {
                          callback(disable);
                      });
                  });
              });
          };
          HttpModule.prototype.disabledForceExport = function (res, res2, callback) {
              var curTime = Common.formatTime(new Date());
              var inDisabledRegion = false;
              if (res.disabledForceExport) {
                  for (var i = 0; i < res.disabledForceExport.length; i++) {
                      var region = res.disabledForceExport[i];
                      if (res2.data.city.indexOf(region) != -1 || res2.data.province.indexOf(region) != -1 || res2.data.area.indexOf(region) != -1) {
                          inDisabledRegion = true;
                          break;
                      }
                  }
              }
              if (inDisabledRegion) {
                  if (res.forceExportTime && res.forceExportTime.length == 2) {
                      if (curTime > res.forceExportTime[0] && curTime < res.forceExportTime[1]) {
                          callback(true);
                      }
                      else {
                          callback(false);
                      }
                  }
                  else {
                      callback(true);
                  }
              }
              else {
                  callback(false);
              }
          };
          HttpModule.prototype.getMisTouchNum = function (callback) {
              var _this = this;
              this.loadCfg(function (res) {
                  _this.loadArea(function (res2) {
                      _this.disableAd(res, res2, function (disable) {
                          if (disable) {
                              callback(0);
                              console.log("getMisTouchNum", 0, "disableAd", disable);
                          }
                          else {
                              callback(parseInt(res.mistouchNum));
                              console.log("getMisTouchNum", res.mistouchNum, "disableAd", disable);
                          }
                      });
                  });
              });
          };
          HttpModule.prototype.getMistouchPosNum = function (callback) {
              var _this = this;
              this.loadCfg(function (res) {
                  _this.loadArea(function (res2) {
                      _this.disableAd(res, res2, function (disable) {
                          if (disable) {
                              callback(0);
                              console.log("getMistouchPosNum", 0, "disableAd", disable);
                          }
                          else {
                              callback(parseInt(res.mistouchPosNum));
                              console.log("getMistouchPosNum", res.mistouchPosNum, "disableAd", disable);
                          }
                      });
                  });
              });
          };
          HttpModule.prototype.getBannerShowCountLimit = function (callback) {
              this.loadCfg(function (res) {
                  if (isNaN(res.bannerShowCountLimit))
                      callback(5);
                  else
                      callback(parseInt(res.bannerShowCountLimit));
              });
          };
          HttpModule.prototype.disableAd = function (res, res2, callback) {
              var curTime = Common.formatTime(new Date());
              var inDisabledRegion = false;
              if (res && res.disabledRegion) {
                  for (var i = 0; i < res.disabledRegion.length; i++) {
                      var region = res.disabledRegion[i];
                      if (res2 && res2.data && (res2.data.city.indexOf(region) != -1 || res2.data.province.indexOf(region) != -1 || res2.data.area.indexOf(region) != -1)) {
                          inDisabledRegion = true;
                          break;
                      }
                  }
              }
              if (this.appLaunchOptions && res) {
                  if ((res.seachEntryOn == 1 && res.seachEntryScene && res.seachEntryScene.indexOf(this.appLaunchOptions.scene) != -1) || (res.shareEntryOn == 1 && res.shareEntryScene && res.shareEntryScene.indexOf(this.appLaunchOptions.scene) != -1)) {
                      callback(true);
                      return;
                  }
              }
              if (inDisabledRegion) {
                  if (res.disabledTime && res.disabledTime.length == 2) {
                      if (curTime > res.disabledTime[0] && curTime < res.disabledTime[1]) {
                          callback(true);
                      }
                      else {
                          callback(false);
                      }
                  }
                  else {
                      callback(true);
                  }
              }
              else {
                  callback(false);
              }
          };
          HttpModule.prototype.getShareInfo = function (cb) {
              var _this = this;
              this.request(ROOT_CONFIG.HTTP_ROOT + "/share/" + Common.config.moosnowAppId + ".json", {
                  appid: Common.config.moosnowAppId,
              }, "GET", function (res) {
                  cb(res);
                  moosnow.platform.initShare(res);
              }, function () {
                  _this.request(_this.baseUrl + "admin/wx_share/getShare", {
                      appid: Common.config.moosnowAppId,
                  }, "POST", function (res) {
                      console.log("分享数据", res.data);
                      cb(res.data);
                      moosnow.platform.initShare(res.data);
                  });
              });
          };
          return HttpModule;
      })(BaseModule);
      var OPPOModule = (function (_super) {
          __extends(OPPOModule, _super);
          function OPPOModule() {
              var _this = _super.call(this) || this;
              _this.platformName = "qg";
              _this.appSid = "";
              _this.bannerHeight = 96;
              _this.mBannerWidth = 760;
              _this.interLoadedShow = false;
              _this.prevNavigate = Date.now();
              _this.mIsClickedNative = false;
              _this._regisiterWXCallback();
              _this.initAdService();
              return _this;
          }
          Object.defineProperty(OPPOModule.prototype, "bannerWidth", {
              get: function () {
                  var wxsys = this.getSystemInfoSync();
                  var windowWidth = wxsys.windowWidth;
                  if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth)) {
                      if (windowWidth < 760) {
                          this.mBannerWidth = windowWidth;
                      }
                      else {
                          this.mBannerWidth = 760;
                      }
                  }
                  else {
                      this.mBannerWidth = windowWidth;
                  }
                  return this.mBannerWidth;
              },
              set: function (value) {
                  this.mBannerWidth = value;
              },
              enumerable: true,
              configurable: true,
          });
          OPPOModule.prototype.initAdService = function () {
              if (!window[this.platformName])
                  return;
              var self = this;
              if (window[this.platformName].initAdService) {
                  window[this.platformName].initAdService({
                      isDebug: true,
                      appId: Common.config.moosnowAppId,
                      success: function (res) {
                          console.log("\u521D\u59CB\u5316\u5E7F\u544A");
                          self._prepareNative();
                      },
                      fail: function (res) {
                          console.warn("\u521D\u59CB\u5316\u5E7F\u544A\u9519\u8BEF " + res.code + "  " + res.msg);
                      },
                      complete: function (res) {
                          console.log("initAdService  complete");
                      },
                  });
              }
              else {
                  console.log("\u521D\u59CB\u5316\u5E7F\u544A");
                  self._prepareNative();
              }
              moosnow.event.addListener(PLATFORM_EVENT.ON_PLATFORM_SHOW, this, this.onAppShow);
          };
          OPPOModule.prototype.navigate2Mini = function (row, success, fail, complete) {
              var _this = this;
              console.log(MSG.NAVIGATE_DATA, row);
              if (Date.now() - this.prevNavigate < 300) {
                  console.log(MSG.NAVIGATE_FAST);
                  return;
              }
              this.prevNavigate = Date.now();
              if (!window[this.platformName]) {
                  if (success)
                      success();
                  return;
              }
              var appid = row.appid, path = row.path, extraData = row.extraData, pkgName = row.pkgName;
              extraData = extraData || {};
              if (!this.supportVersion(1044)) {
                  console.log(MSG.PLATFORM_UNSUPPORT);
                  return;
              }
              window[this.platformName].navigateToMiniGame({
                  appId: appid,
                  path: path,
                  pkgName: pkgName || appid,
                  extraData: extraData,
                  success: function () {
                      if (window[_this.platformName] && window[_this.platformName].aldSendEvent) {
                          window[_this.platformName].aldSendEvent("跳转", {
                              position: row.position,
                              appid: appid,
                              img: row.atlas || row.img,
                          });
                      }
                      moosnow.http.exportUser();
                      if (success)
                          success();
                  },
                  fail: function (err) {
                      console.log("navigateToMiniProgram error ", err);
                      if (fail)
                          fail();
                  },
                  complete: function () {
                      if (complete)
                          complete();
                  },
              });
          };
          OPPOModule.prototype.supportVersion = function (version) {
              var oppoSys = this.getSystemInfoSync();
              return oppoSys.platformVersion >= version;
          };
          OPPOModule.prototype._onBannerError = function (err) {
              console.warn("banner___error:", err.errCode, " msg ", err.errMsg);
              if (this.banner) {
                  this.banner.hide();
                  this.banner.offResize(this._onBannerResize);
                  this.banner.offError(this._onBannerError);
                  this.banner.offLoad(this._onBannerLoad);
                  this.banner.offHide();
                  this.banner.destroy();
                  this.banner = null;
              }
          };
          OPPOModule.prototype._prepareBanner = function () {
              if (!window[this.platformName].createBannerAd)
                  return;
              this.hideBanner();
              this.banner = this._createBannerAd();
              this.banner.onResize(this._onBannerResize.bind(this));
              this.banner.onError(this._onBannerError.bind(this));
              this.banner.onLoad(this._onBannerLoad.bind(this));
              this.banner.onHide(this._onBannerHide.bind(this));
          };
          OPPOModule.prototype._createBannerAd = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBannerAd)
                  return;
              var style = {
                  left: 0,
                  top: 0,
                  width: this.bannerWidth,
                  height: this.bannerHeight,
              };
              var pos = this._getBannerPosition();
              var finalStyle = __assign(__assign({}, style), pos);
              var banner = window[this.platformName].createBannerAd({
                  adUnitId: this.getBannerId(),
                  style: finalStyle,
              });
              console.log(" create banner ", banner, "param style ", finalStyle);
              return banner;
          };
          OPPOModule.prototype._onBannerResize = function (size) {
              console.log("_bottomCenterBanner  ", this.banner);
          };
          OPPOModule.prototype._getBannerPosition = function () {
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.screenWidth;
              var windowHeight = wxsys.screenHeight;
              var statusBarHeight = wxsys.statusBarHeight;
              var notchHeight = wxsys.notchHeight || 0;
              var horizontal = this.bannerHorizontal;
              var vertical = this.bannerVertical;
              var top = 0;
              var left = 0;
              if (vertical == BANNER_VERTICAL.TOP) {
                  top = statusBarHeight + notchHeight;
              }
              else if (vertical == BANNER_VERTICAL.CENTER) {
                  top = (windowHeight - this.bannerHeigth) / 2;
              }
              else if (vertical == BANNER_VERTICAL.BOTTOM) {
                  top = windowHeight - this.bannerHeigth - 16;
              }
              if (horizontal == BANNER_HORIZONTAL.LEFT) {
                  left = 0;
              }
              else if (horizontal == BANNER_HORIZONTAL.RIGHT) {
                  left = windowWidth - this.bannerWidth;
              }
              else if (horizontal == BANNER_HORIZONTAL.CENTER) {
                  left = (windowWidth - this.bannerWidth) / 2;
              }
              console.log("OPPOModule -> _getBannerPosition -> left", left, "top", top);
              return {
                  left: left,
                  top: top,
              };
          };
          OPPOModule.prototype._resetBanenrStyle = function (size) {
              var style = this._getBannerPosition();
              if (this.banner)
                  this.banner.style = {
                      top: style.top,
                      left: style.left,
                      width: size.width,
                      height: size.height,
                  };
              console.log("_resetBanenrStyle this.banner ", this.banner, "set style ", style);
          };
          OPPOModule.prototype._onBannerHide = function () {
              console.log("banner 已隐藏 ");
          };
          OPPOModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = 0;
              }
              console.log(MSG.BANNER_SHOW);
              this.bannerCb = callback;
              if (!window[this.platformName]) {
                  return;
              }
              this.bannerHorizontal = horizontal;
              this.bannerVertical = vertical;
              this.bannerStyle = style;
              if (remoteOn)
                  moosnow.http.getAllConfig(function (res) {
                      if (res.mistouchNum == 0) {
                          console.log("后台关闭了banner，不执行显示");
                          return;
                      }
                      else {
                          console.log("后台开启了banner，执行显示");
                          _this._showBanner();
                      }
                  });
              else
                  this._showBanner();
          };
          OPPOModule.prototype._showBanner = function () {
              this._prepareBanner();
              if (this.banner) {
                  this._resetBanenrStyle({
                      width: this.banner.style.width,
                      height: this.banner.style.height,
                  });
                  var t = this.banner.show();
                  if (t) {
                      t.then(function () {
                          console.log("显示成功后");
                      });
                  }
              }
          };
          OPPOModule.prototype.hideBanner = function () {
              console.log(MSG.HIDE_BANNER);
              if (!window[this.platformName]) {
                  return;
              }
              if (this.banner && this.banner.hide) {
                  this.banner.hide();
                  this.banner.offResize(null);
                  this.banner.offError(null);
                  this.banner.offLoad(null);
                  this.banner.offHide(null);
                  this.banner.destroy();
                  this.banner = null;
              }
          };
          OPPOModule.prototype.createRewardAD = function (show) {
              if (moosnow.platform.videoLoading) {
                  return;
              }
              if (!window[this.platformName]) {
                  moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!window[this.platformName].createRewardedVideoAd) {
                  return;
              }
              if (!Common.isEmpty(this.video)) {
                  this.video.offClose(moosnow.platform._onVideoClose);
                  this.video.offError(moosnow.platform._onVideoError);
                  this.video.offLoad(moosnow.platform._onVideoLoad);
              }
              else {
                  if (Common.isEmpty(this.getVideoId())) {
                      console.warn(MSG.VIDEO_KEY_IS_NULL);
                      return;
                  }
                  this.video = window[this.platformName].createRewardedVideoAd({
                      adUnitId: this.getVideoId(),
                  });
              }
              this.video.onError(moosnow.platform._onVideoError);
              this.video.onClose(moosnow.platform._onVideoClose);
              this.video.onLoad(moosnow.platform._onVideoLoad);
              moosnow.platform.videoLoading = true;
              this.video.load();
          };
          OPPOModule.prototype._onVideoLoad = function () {
              console.log(MSG.VIDEO_LOAD_COMPLETED);
              moosnow.platform.videoLoading = false;
              if (moosnow.platform.video) {
                  moosnow.platform.video.show();
              }
          };
          OPPOModule.prototype.prepareInter = function () {
              if (Common.isEmpty(this.interId)) {
                  console.warn(MSG.INTER_KEY_IS_NULL);
                  return;
              }
              if (!window[this.platformName])
                  return;
              if (this.supportVersion("1061")) {
                  if (typeof window[this.platformName].createInterstitialAd != "function")
                      return;
                  this.inter = window[this.platformName].createInterstitialAd({
                      adUnitId: this.interId,
                  });
                  this.inter.onLoad(this._onInterLoad.bind(this));
                  this.inter.onClose(this._onInterClose.bind(this));
                  this.inter.load();
              }
              else {
                  if (typeof window[this.platformName].createInsertAd != "function")
                      return;
                  this.inter = window[this.platformName].createInsertAd({
                      adUnitId: this.interId,
                  });
                  this.inter.onLoad(this._onInterLoad.bind(this));
                  this.inter.onShow(this._onInterOnShow.bind(this));
                  this.inter.load();
              }
          };
          OPPOModule.prototype.showInter = function () {
              if (this.inter)
                  this.inter.show();
              else
                  this.interLoadedShow = true;
          };
          OPPOModule.prototype._onInterLoad = function () {
              if (this.interLoadedShow) {
                  if (this.inter) {
                      this.inter.show();
                  }
                  else
                      this.interLoadedShow = false;
              }
          };
          OPPOModule.prototype._onInterOnShow = function () {
              if (this.inter)
                  this.inter.load();
          };
          OPPOModule.prototype.showAutoBanner = function () {
              console.log(" oppo 不支持自动");
          };
          OPPOModule.prototype.reportMonitor = function (name, value) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].reportMonitor)
                  return;
              window[this.platformName].reportMonitor("game_scene", 0);
          };
          OPPOModule.prototype._prepareNative = function () {
              if (!window[this.platformName])
                  return;
              if (typeof window[this.platformName].createNativeAd != "function")
                  return;
              this.native = window[this.platformName].createNativeAd({
                  adUnitId: parseInt("" + this.nativeId),
              });
              this.native.onLoad(this._onNativeLoad.bind(this));
              this.native.onError(this._onNativeError.bind(this));
              this.nativeLoading = true;
          };
          OPPOModule.prototype._onNativeLoad = function (res) {
              this.nativeLoading = false;
              console.log(MSG.NATIVE_LOAD_COMPLETED, res);
              if (res && res.adList && res.adList.length > 0) {
                  this.nativeAdResult = res.adList[0];
                  if (!Common.isEmpty(this.nativeAdResult.adId)) {
                      console.log(MSG.NATIVE_REPORT);
                      this.native.reportAdShow({
                          adId: this.nativeAdResult.adId,
                      });
                  }
                  if (Common.isFunction(this.nativeCb)) {
                      this.nativeCb(Common.deepCopy(this.nativeAdResult));
                  }
              }
              else {
                  console.log(MSG.NATIVE_LIST_NULL);
                  if (Common.isFunction(this.nativeCb)) {
                      this.nativeCb(null);
                  }
              }
          };
          OPPOModule.prototype._onNativeError = function (err) {
              this.nativeLoading = false;
              this.nativeAdResult = null;
              if (err.code == 20003) {
                  if (this.nativeIdIndex < this.nativeId.length - 1) {
                      console.log(MSG.NATIVE_ERROR, err);
                      this.nativeIdIndex += 1;
                      this._destroyNative();
                      this._prepareNative();
                      this.nativeCb(null);
                  }
                  else {
                      console.log(MSG.NATIVE_NOT_ID_USE);
                      this.nativeIdIndex = 0;
                      if (Common.isFunction(this.nativeCb)) {
                          this.nativeCb(null);
                      }
                  }
              }
              else {
                  console.log(MSG.NATIVE_ERROR2, err);
                  if (Common.isFunction(this.nativeCb)) {
                      this.nativeCb(null);
                  }
              }
          };
          OPPOModule.prototype._destroyNative = function () {
              this.nativeLoading = false;
              this.native.offLoad();
              this.native.offError();
              this.native.destroy();
              console.log(MSG.NATIVE_DESTROY);
          };
          OPPOModule.prototype.showNativeAd = function (callback) {
              this.nativeCb = callback;
              if (this.native)
                  this.native.load();
          };
          OPPOModule.prototype.clickNative = function (callback) {
              if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                  this.mClickedNativeCallback = callback;
                  this.mIsClickedNative = true;
                  console.log(MSG.NATIVE_NOT_ID_USE, this.nativeAdResult.adId);
                  this.native.reportAdClick({
                      adId: this.nativeAdResult.adId,
                  });
              }
          };
          OPPOModule.prototype.onAppShow = function () {
              if (this.mIsClickedNative) {
                  this.mIsClickedNative = false;
                  if (Common.isFunction(this.mClickedNativeCallback))
                      this.mClickedNativeCallback();
              }
          };
          OPPOModule.prototype.hasShortcutInstalled = function (success, fail) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].hasShortcutInstalled)
                  return;
              window[this.platformName].hasShortcutInstalled({
                  success: function (status) {
                      if (success)
                          success(!!status);
                      if (status) {
                          console.log("已创建");
                      }
                      else {
                          console.log("未创建");
                      }
                  },
                  fail: function (res) {
                      if (fail)
                          fail(res);
                  },
              });
          };
          OPPOModule.prototype.installShortcut = function (success, message, fail) {
              if (message === void 0) {
                  message = "方便下次快速启动";
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].installShortcut)
                  return;
              window[this.platformName].installShortcut({
                  message: message,
                  success: function (status) {
                      if (success)
                          success(status);
                      console.log("创建成功");
                  },
                  fail: function (res) {
                      if (fail)
                          fail(res);
                  },
              });
          };
          OPPOModule.prototype.exitApplication = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].exitApplication)
                  return;
              window[this.platformName].exitApplication();
          };
          return OPPOModule;
      })(PlatformModule);
      var GameDataCenter = (function (_super) {
          __extends(GameDataCenter, _super);
          function GameDataCenter() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.TOKEN = "MOOSNOW_SDK_TOKEN";
              _this.COIN = "MOOSNOW_SDK_COIN";
              _this.NAVIGATE_TOKEN = "MOOSNOW_SDK_NAVIGATE_TOKEN";
              _this.mUserToken = "";
              _this.VIBRATE_SWITCH = "MOOSNOW_VIBRATE_SWITCH";
              _this.USER_PRIZE_KEY = "MOOSNOW_USER_PRIZE_KEY";
              _this.mCoin = 0;
              _this.mCurrentMisTouchCount = 0;
              _this.mChannel_id = "0";
              _this.mChannel_appid = "0";
              return _this;
          }
          GameDataCenter.prototype.initCoin = function (num) {
              if (moosnow.setting._getValue(this.COIN, null) == null)
                  moosnow.setting.setValue(this.COIN, num);
          };
          GameDataCenter.prototype.getCoin = function () {
              if (this.mCoin == 0)
                  this.mCoin = moosnow.setting.getInt(this.COIN, 0);
              return this.mCoin;
          };
          GameDataCenter.prototype.subCoin = function (v) {
              this.mCoin -= v;
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
          };
          GameDataCenter.prototype.addCoin = function (v) {
              this.mCoin += v;
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
          };
          GameDataCenter.prototype.setCoin = function (v) {
              this.mCoin = v;
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
          };
          GameDataCenter.prototype.saveCoin = function () {
              moosnow.setting.setValue(this.COIN, this.mCoin);
          };
          GameDataCenter.prototype.getToken = function () {
              if (Common.isEmpty(this.mUserToken))
                  this.mUserToken = moosnow.setting.getString(this.TOKEN, "");
              return this.mUserToken;
          };
          GameDataCenter.prototype.setToken = function (v) {
              moosnow.setting.setValue(this.TOKEN, v);
          };
          GameDataCenter.prototype.getNavigateToken = function (appid) {
              if (Common.isEmpty(this.mNavigateToken)) {
                  this.mNavigateToken = Date.now() + "_" + appid + "_" + this.getToken();
              }
              return this.mNavigateToken;
          };
          GameDataCenter.prototype.resetNavigateToken = function () {
              this.mNavigateToken = null;
          };
          GameDataCenter.prototype.getCurrentMisTouchCount = function () {
              return this.mCurrentMisTouchCount;
          };
          GameDataCenter.prototype.setCurrentMisTouchCount = function (num) {
              this.mCurrentMisTouchCount = num;
          };
          GameDataCenter.prototype.getChannelId = function () {
              return this.mChannel_id;
          };
          GameDataCenter.prototype.setChannelId = function (value) {
              this.mChannel_id = value;
          };
          GameDataCenter.prototype.getChannelAppId = function () {
              return this.mChannel_appid;
          };
          GameDataCenter.prototype.setChannelAppId = function (value) {
              this.mChannel_appid = value;
          };
          GameDataCenter.prototype.getVibrateSetting = function () {
              return moosnow.setting.getBool(this.VIBRATE_SWITCH, true);
          };
          GameDataCenter.prototype.setVibrateSetting = function (on) {
              moosnow.setting.setBool(this.VIBRATE_SWITCH, on);
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.VIBRATESWITCH_CHANGED, on);
          };
          GameDataCenter.prototype.getPrizeBox = function () {
              if (!this.mPrizeBox)
                  this.mPrizeBox = {};
              return this.mPrizeBox;
          };
          GameDataCenter.prototype.clearPrizeBox = function () {
              this.mPrizeBox = {};
          };
          GameDataCenter.prototype.lockPrizeBox = function (prizeId, type, coinNum) {
              if (coinNum === void 0) {
                  coinNum = 0;
              }
              var userBox = this.getPrizeBox();
              userBox[prizeId] = {
                  prizeId: prizeId,
                  type: type == 0 ? 0 : 1,
                  coinNum: coinNum,
              };
              this.mPrizeBox = userBox;
          };
          GameDataCenter.prototype.getUserPrizeBoxById = function (prizeId) {
              var userBox = this.getPrizeBox();
              return userBox[prizeId];
          };
          GameDataCenter.prototype.getPrizeKey = function () {
              if (this.mPrizeKey == null)
                  this.mPrizeKey = 3;
              return this.mPrizeKey;
          };
          GameDataCenter.prototype.addPrizeKey = function (keyNum) {
              this.mPrizeKey += keyNum;
          };
          GameDataCenter.prototype.clearPrizeKey = function () {
              this.mPrizeKey = null;
              moosnow.setting.setValue(this.USER_PRIZE_KEY, "");
          };
          return GameDataCenter;
      })(BaseModule);
      var SettingModule = (function (_super) {
          __extends(SettingModule, _super);
          function SettingModule() {
              return _super.call(this) || this;
          }
          SettingModule.prototype.onEnable = function () { };
          SettingModule.prototype.getInt = function (k, defaultValue) {
              var v = this._getValue(k, defaultValue);
              return parseInt(v);
          };
          SettingModule.prototype.getFloat = function (k, defaultValue) {
              var v = this._getValue(k, defaultValue);
              return parseFloat(v);
          };
          SettingModule.prototype.getBool = function (k, defaultValue) {
              var defaultValueTemp;
              if (defaultValue == true) {
                  defaultValueTemp = "true";
              }
              else {
                  defaultValueTemp = "false";
              }
              var v = this.getString(k, defaultValueTemp);
              if (v == "true") {
                  return true;
              }
              return false;
          };
          SettingModule.prototype.getString = function (k, defaultValue) {
              return this._getValue(k, defaultValue);
          };
          SettingModule.prototype.getObject = function (k, defaultValue) {
              var v = this._getValue(k, defaultValue);
              if (!v || v == "") {
                  return null;
              }
              return JSON.parse(v);
          };
          SettingModule.prototype.setObject = function (k, v) {
              var vStr = "";
              if (v) {
                  vStr = JSON.stringify(v);
              }
              this.setValue(k, vStr);
          };
          SettingModule.prototype.setBool = function (k, v) {
              if (v == true) {
                  this.setValue(k, "true");
              }
              else {
                  this.setValue(k, "false");
              }
          };
          SettingModule.prototype.setValue = function (k, v) {
              window.localStorage.setItem(k, v);
          };
          SettingModule.prototype.appendInt = function (k, v) {
              var vint = this.getInt(k, 0);
              var v2Save = parseInt(v) + vint;
              this.setValue(k, v2Save);
              return v2Save;
          };
          SettingModule.prototype.appendFloat = function (k, v) {
              var vf = this.getFloat(k, 0);
              var v2Save = parseFloat(v) + vf;
              this.setValue(k, v2Save);
          };
          SettingModule.prototype.removeValueOfKey = function (key) {
              if (window["cc"] && window["cc"].sys && window["cc"].sys.localStorage) {
                  window["cc"].sys.localStorage.removeItem(key);
              }
              else if (window["Laya"] && window["Laya"].LocalStorage)
                  window["Laya"].LocalStorage.removeItem(key);
              else
                  window.localStorage.removeItem(key);
          };
          SettingModule.prototype.removeAll = function () {
              if (window["cc"] && window["cc"].sys && window["cc"].sys.localStorage) {
              }
              else if (window["Laya"] && window["Laya"].LocalStorage)
                  Laya.LocalStorage.clear();
              else
                  window.localStorage.clear();
          };
          SettingModule.prototype._getValue = function (k, defaultValue) {
              var value = "";
              if (window["cc"] && window["cc"].sys && window["cc"].sys.localStorage)
                  value = window["cc"].sys.localStorage.getItem(k);
              else if (window["Laya"] && window["Laya"].LocalStorage)
                  value = window["Laya"].LocalStorage.getItem(k);
              else
                  value = window.localStorage.getItem(k);
              if (value == null || value == "") {
                  value = defaultValue;
              }
              return value;
          };
          return SettingModule;
      })(BaseModule);
      var OPPOAdModule = (function (_super) {
          __extends(OPPOAdModule, _super);
          function OPPOAdModule() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          OPPOAdModule.prototype.getRemoteAd = function (cb) {
              var _this = this;
              var url = ROOT_CONFIG.HTTP_ROOT + "/exportConfig/" + Common.config.moosnowAppId + ".json?t=" + Date.now();
              moosnow.http.request(url, {}, "GET", function (res) {
                  cb(res);
                  console.log("WXAdModule getRemoteAd", res);
              }, function () {
                  _super.prototype.getRemoteAd.call(_this, cb);
                  console.log("getRemoteAd fail");
              }, function () {
                  console.log("getRemoteAd complete");
              });
          };
          return OPPOAdModule;
      })(AdModule);
      var WXAdModule = (function (_super) {
          __extends(WXAdModule, _super);
          function WXAdModule() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.mErrorNum = 0;
              return _this;
          }
          WXAdModule.prototype.getRemoteAd = function (cb) {
              var _this = this;
              var url = ROOT_CONFIG.HTTP_ROOT + "/exportConfig/" + Common.config.moosnowAppId + ".json?t=" + Date.now();
              moosnow.http.request(url, {}, "GET", function (res) {
                  cb(res);
                  console.log("WXAdModule getRemoteAd", res);
              }, function (error) {
                  _this.mErrorNum++;
                  if (_this.mErrorNum < 4) {
                      _this.getRemoteAd(cb);
                  }
                  else {
                      _this.mErrorNum = 0;
                      _this.repairAd(cb);
                  }
                  console.log("getRemoteAd fail");
              }, function () {
                  console.log("getRemoteAd complete");
              });
          };
          WXAdModule.prototype.repairAd = function (cb) {
              var url = this.baseUrl + "wx_export/getExport";
              var signParams = {
                  appid: Common.config.moosnowAppId,
              };
              var data = signParams;
              moosnow.http.request(url, data, "POST", function (res) {
                  var arr = res.data;
                  arr.sort(function () {
                      return Math.random() > 0.5 ? 1 : -1;
                  });
                  if (cb) {
                      cb(res.data);
                  }
              }, function () {
                  cb([]);
                  console.log("getRemoteAd fail");
              }, function () {
                  console.log("getRemoteAd complete");
              });
          };
          return WXAdModule;
      })(AdModule);
      var SHARE_CHANNEL = {
          ARTICLE: "article",
          VIDEO: "video",
          TOKEN: "token",
          LINK: "",
      };
      var appLaunchOption = (function () {
          function appLaunchOption() { }
          return appLaunchOption;
      })();
      var TTModule = (function (_super) {
          __extends(TTModule, _super);
          function TTModule() {
              var _this = _super.call(this) || this;
              _this.platformName = "tt";
              _this.recordRes = null;
              _this.recordCb = null;
              _this.recordNumber = 0;
              _this.moreGameCb = null;
              _this._regisiterWXCallback();
              _this._registerTTCallback();
              _this.initRecord();
              return _this;
          }
          Object.defineProperty(TTModule.prototype, "bannerWidth", {
              get: function () {
                  return this.mBannerWidth;
              },
              set: function (value) {
                  this.mBannerWidth = value;
              },
              enumerable: true,
              configurable: true,
          });
          TTModule.prototype._registerTTCallback = function () {
              var _this = this;
              if (!window[this.platformName])
                  return;
              if (window[this.platformName].onMoreGamesModalClose)
                  window[this.platformName].onMoreGamesModalClose(function (res) {
                      console.log("modal closed", res);
                      if (_this.moreGameCb)
                          _this.moreGameCb(0);
                  });
              if (window[this.platformName].onNavigateToMiniGameBox) {
                  window[this.platformName].onNavigateToMiniGameBox(function (res) {
                      console.log("onNavigateToMiniGameBox", res);
                  });
              }
              else if (window[this.platformName].onNavigateToMiniProgram)
                  window[this.platformName].onNavigateToMiniProgram(function (res) {
                      console.log("onNavigateToMiniProgram", res);
                  });
          };
          TTModule.prototype.showInter = function () {
              var _this = this;
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createInterstitialAd)
                  return;
              if (Common.isEmpty(this.interId)) {
                  console.warn(MSG.INTER_KEY_IS_NULL);
                  return;
              }
              if (this.inter) {
                  this.inter.destroy();
              }
              this.inter = window[this.platformName].createInterstitialAd({
                  adUnitId: this.interId,
              });
              var p = this.inter.load();
              p &&
                  p
                      .then(function () {
                      _this.inter.show();
                  })
                      .catch(function (err) {
                      console.log(err);
                  });
          };
          TTModule.prototype._onBannerResize = function (bannerId, size) {
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.windowWidth;
              var windowHeight = wxsys.windowHeight;
              this.bannerWidth = size.width;
              this.bannerHeigth = isNaN(size.height) ? (this.bannerWidth / 16) * 9 : size.height;
              var top = windowHeight - this.bannerHeigth;
              var style = this._getBannerPosition();
              if (this.banner[bannerId]) {
                  this.banner[bannerId].style.top = style.top;
                  this.banner[bannerId].style.left = style.left;
              }
          };
          TTModule.prototype.initRecord = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].getGameRecorderManager)
                  return;
              this.recordObj = window[this.platformName].getGameRecorderManager();
          };
          TTModule.prototype.clipRecord = function (timeRange, callback) {
              if (timeRange === void 0) {
                  timeRange = [2, 2];
              }
              if (!this.recordObj)
                  return;
              this.recordNumber++;
              console.log("clipRecord", this.recordNumber);
              this.recordObj.recordClip({
                  timeRange: timeRange,
                  success: function (r) {
                      console.log("clipRecord 成功 ", r);
                      if (Common.isFunction(callback))
                          callback(r);
                  },
              });
          };
          TTModule.prototype.startRecord = function (duration, callback) {
              var _this = this;
              if (duration === void 0) {
                  duration = 300;
              }
              if (callback === void 0) {
                  callback = null;
              }
              console.log("record startRecord");
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
              this.recordNumber = 0;
              this.recordCb = null;
              this.recordRes = null;
              this.recordObj.onStart(function (res) {
                  console.log("record onStart");
                  if (callback)
                      callback(res);
              });
              var recordRes = this.recordRes;
              this.recordObj.onStop(function (res) {
                  console.log("on stop ", res);
                  if (_this.recordNumber >= 1) {
                      _this.recordObj.clipVideo({
                          path: res.videoPath,
                          success: function (r) {
                              console.log("record clip succes:", r);
                              _this.recordRes = r;
                              console.log("record clip recordRes :", _this.recordRes);
                              if (_this.recordCb)
                                  _this.recordCb(r);
                          },
                          fail: function () {
                              console.log("record clip fail:", res);
                              _this.recordRes = res;
                              if (_this.recordCb)
                                  _this.recordCb(res);
                          },
                      });
                  }
                  else {
                      _this.recordRes = res;
                      if (_this.recordCb)
                          _this.recordCb(res);
                  }
              });
              this.recordObj.start({
                  duration: duration,
              });
          };
          TTModule.prototype.stopRecord = function (callback) {
              if (callback === void 0) {
                  callback = null;
              }
              console.log(" stop Record  callback  ", !!callback);
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
              console.log("record stop recordRes ", this.recordRes);
              if (this.recordRes) {
                  if (Common.isFunction(callback))
                      callback(this.recordRes);
              }
              else {
                  this.recordCb = callback;
                  this.recordObj.stop();
                  console.log("record stop  ", this.recordRes);
              }
          };
          TTModule.prototype.pauseRecord = function () {
              if (this.recordObj)
                  this.recordObj.pause();
          };
          TTModule.prototype.resumeRecord = function () {
              if (this.recordObj)
                  this.recordObj.resume();
          };
          TTModule.prototype.share = function (query, callback, shortCall) {
              if (query === void 0) {
                  query = {};
              }
              this.currentShareCallback = callback;
              this.currentShortCall = shortCall;
              console.log("是否有回调：", shortCall);
              var shareInfo = this._buildShareInfo(query);
              console.log("shareInfo:", shareInfo);
              if (!window[this.platformName]) {
                  this.currentShareCallback(true);
                  return;
              }
              if (!window[this.platformName].shareAppMessage) {
                  this.currentShareCallback(true);
                  return;
              }
              window[this.platformName].shareAppMessage(shareInfo);
          };
          TTModule.prototype._buildShareInfo = function (query) {
              var _this = this;
              var title = "", imageUrl = "";
              if (this.shareInfoArr.length > 0) {
                  var item = this.shareInfoArr[MathUtils.randomNumBoth(0, this.shareInfoArr.length - 1)];
                  title = item.title;
                  imageUrl = item.img;
              }
              var channel = SHARE_CHANNEL.LINK;
              if (query && [SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO].indexOf(query.channel) != -1) {
                  channel = query.channel;
              }
              var videoPath = this.recordRes && this.recordRes.videoPath ? this.recordRes.videoPath : "";
              console.log("video path ", videoPath);
              return {
                  channel: channel,
                  title: title,
                  imageUrl: imageUrl,
                  query: moosnow.http._object2Query(query),
                  extra: {
                      videoPath: videoPath,
                      videoTopics: [title],
                      withVideoId: true,
                  },
                  success: function (res) {
                      console.log("share video success :", res);
                      _this.shareVideoId = res.videoId;
                      if (_this.currentShareCallback)
                          _this.currentShareCallback(true);
                  },
                  fail: function (e) {
                      console.log("share video fail ", e);
                      console.log("index of : ", e.errMsg.indexOf("short"));
                      if (e && e.errMsg && e.errMsg.indexOf("short") != -1 && _this.currentShortCall) {
                          console.log("时间太短 执行回调", _this.currentShortCall.toString());
                          _this.currentShortCall(e);
                          return;
                      }
                      if (_this.currentShareCallback)
                          _this.currentShareCallback(false);
                  },
              };
          };
          TTModule.prototype.navigate2Video = function (videoId) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].navigateToVideoView)
                  return;
              console.log("navigate2Video id ", videoId || this.shareVideoId, videoId, this.shareVideoId);
              if (!(videoId || this.shareVideoId))
                  return;
              window[this.platformName].navigateToVideoView({
                  videoId: videoId || this.shareVideoId,
                  success: function (res) {
                      console.log("navigate2Video success ", res);
                  },
                  fail: function (err) {
                      console.log("navigate2Video err ", err);
                      if (err.errCode === 1006) {
                      }
                  },
              });
          };
          TTModule.prototype._onBannerLoad = function (bannerId) {
              if (this.banner[bannerId] && !this.banner[bannerId].isLoaded) {
                  this.banner[bannerId].isLoaded = true;
                  this.banner[bannerId].show();
              }
          };
          TTModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = 0;
              }
              console.log(MSG.BANNER_SHOW);
              this.bannerCb = callback;
              if (!window[this.platformName]) {
                  return;
              }
              this.bannerHorizontal = horizontal;
              this.bannerVertical = vertical;
              this.bannerStyle = style;
              this.currentBannerId = this._createBannerAd(idIndex);
              if (remoteOn)
                  moosnow.http.getAllConfig(function (res) {
                      if (res.mistouchNum == 0) {
                          console.log("后台关闭了banner，不执行显示");
                          return;
                      }
                      else {
                          console.log("后台开启了banner，执行显示");
                          _this._showBanner();
                      }
                  });
              else
                  this._showBanner();
          };
          TTModule.prototype._showBanner = function () {
              var _this = this;
              var banner = this.banner[this.currentBannerId];
              if (banner) {
                  banner.hide();
                  this._resetBanenrStyle({
                      banner: banner,
                      width: banner.style.width,
                      height: banner.style.realHeight,
                  });
                  if (banner.isLoaded) {
                      var showPromise = banner.show();
                      showPromise &&
                          showPromise.then(function () {
                              _this._resetBanenrStyle({
                                  banner: banner,
                                  width: banner.style.width,
                                  height: banner.style.realHeight,
                              });
                          });
                  }
              }
          };
          TTModule.prototype._resetBanenrStyle = function (e) {
              console.log("🚀 ~ file: TTModule.ts ~ line 376 ~ TTModule ~ _resetBanenrStyle ~ e", e);
              if (this.bannerStyle) {
                  this.applyCustomStyle(e);
              }
              else {
                  var style = this._getBannerPosition();
                  console.log("🚀 ~ file: TTModule.ts ~ line 384 ~ TTModule ~ _resetBanenrStyle ~ style", style);
                  e.banner.style.top = style.top;
                  e.banner.style.left = style.left;
              }
          };
          TTModule.prototype.showAppBox = function (callback, remoteOn) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              this.moreGameCb = callback;
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].showMoreGamesModal)
                  return;
              moosnow.http.getAllConfig(function (res) {
                  if (remoteOn) {
                      if (res && res.showAppBox == 1) {
                          _this._showMoreGamesModal();
                      }
                  }
                  else {
                      _this._showMoreGamesModal();
                  }
              });
          };
          TTModule.prototype._getAppLaunchOptions = function (callback) {
              var appLaunchOptions = [];
              moosnow.ad.getAd(function (res) {
                  if (res.indexLeft.length == 0)
                      return;
                  res.indexLeft.forEach(function (item) {
                      var opt = new appLaunchOption();
                      opt.appId = item.appid;
                      opt.query = item.path || "1=1";
                      opt.extraData = item.extraData || {};
                      appLaunchOptions.push(opt);
                  });
                  console.log("appLaunchOptions", appLaunchOptions);
                  callback(appLaunchOptions);
              });
          };
          TTModule.prototype._showMoreGamesModal = function () {
              var _this = this;
              var systemInfo = this.getSystemInfoSync();
              if (systemInfo.platform == "ios")
                  return;
              this._getAppLaunchOptions(function (appLaunchOptions) {
                  console.log("_showMoreGamesModal appLaunchOption", appLaunchOptions);
                  var banner = window[_this.platformName].showMoreGamesModal({
                      appLaunchOptions: appLaunchOptions,
                      success: function (res) {
                          console.log("show app box success", res);
                      },
                      fail: function (res) {
                          console.log("show app box fail", res);
                      },
                  });
              });
          };
          TTModule.prototype.showMoreGameBanner = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createMoreGamesBanner)
                  return;
              var systemInfo = this.getSystemInfoSync();
              if (systemInfo.platform == "ios")
                  return;
              if (systemInfo.platform !== "ios") {
                  var appLaunchOptions_1 = [];
                  moosnow.ad.getAd(function (res) {
                      if (res.indexLeft.length == 0)
                          return;
                      res.indexLeft.forEach(function (item) {
                          var opt = new appLaunchOption();
                          opt.appId = item.appid;
                          opt.query = item.path || "1=1";
                          opt.extraData = item.extraData || {};
                          appLaunchOptions_1.push(opt);
                      });
                  });
                  var moreGames = window[this.platformName].createMoreGamesBanner({
                      style: {
                          left: 20,
                          top: 0,
                          width: 150,
                          height: 40,
                      },
                      appLaunchOptions: appLaunchOptions_1,
                      success: function (res) {
                          console.log("show app box success", res.errMsg);
                      },
                      fail: function (res) {
                          console.log("show app box fail", res.errMsg);
                      },
                  });
                  moreGames.show();
                  moreGames.onTap(function () {
                      console.log("点击跳转游戏盒子");
                  });
              }
          };
          TTModule.prototype.showMoreGameButton = function (url, callback, style) {
              var _this = this;
              if (style === void 0) {
                  style = null;
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createMoreGamesButton)
                  return;
              var ttsys = this.getSystemInfoSync();
              var defaultStyle = {
                  left: ttsys.windowWidth - 80 - 30,
                  top: 40,
                  width: 80,
                  height: 80,
                  lineHeight: 80,
                  backgroundColor: "#ff0000",
                  textColor: "#ffffff",
                  textAlign: "center",
                  fontSize: 16,
                  borderRadius: 0,
                  borderWidth: 1,
                  borderColor: "#ff0000",
              };
              var buttonStyle = __assign(__assign({}, defaultStyle), style);
              if (!this._moreGameBotton)
                  this._getAppLaunchOptions(function (appLaunchOptions) {
                      cc.loader.loadRes("texture/game/more.png", cc.Texture2D, function (error, tex) {
                          if (error)
                              return;
                          _this._moreGameBotton = window[_this.platformName].createMoreGamesButton({
                              type: "image",
                              image: tex.url,
                              actionType: "box",
                              style: buttonStyle,
                              appLaunchOptions: appLaunchOptions,
                              onNavigateToMiniGame: function (res) {
                                  console.log("跳转其他小游戏", res);
                                  if (callback)
                                      callback(1, res);
                              },
                          });
                          _this._moreGameBotton.show();
                          _this._moreGameBotton.onTap(function () {
                              console.log("点击更多游戏");
                              if (callback)
                                  callback(2, null);
                          });
                      });
                  });
              else
                  this._moreGameBotton.show();
          };
          TTModule.prototype.hideMoreGameButton = function () {
              if (this._moreGameBotton) {
                  this._moreGameBotton.hide();
              }
          };
          TTModule.prototype.isIphone = function () {
              if (!window[this.platformName])
                  return false;
              var systemInfo = this.getSystemInfoSync();
              if (systemInfo.platform == "ios")
                  return true;
              return false;
          };
          TTModule.prototype.navigate2Mini = function (row, success, fail, complete) {
              console.log("tt navigate2Mini ");
              this.showAppBox(function () {
                  console.log("tt showAppBox close ");
              }, false);
          };
          TTModule.prototype.checkFollowAwemeSate = function (success, fail) {
              if (!window[this.platformName]) {
                  success(true);
                  return;
              }
              if (!window[this.platformName].checkFollowAwemeState) {
                  success(true);
                  return;
              }
              window[this.platformName].checkFollowAwemeState({
                  success: function (res) {
                      console.log("---- check success, res:", res);
                      var hasFollowed = res.hasFollowed;
                      success(hasFollowed);
                  },
                  fail: function (err) {
                      fail(err);
                  },
                  complete: function (res) {
                  },
              });
          };
          TTModule.prototype.openAwemeUserProile = function (success, fail) {
              if (!window[this.platformName]) {
                  success(true);
                  return;
              }
              if (!window[this.platformName].openAwemeUserProfile) {
                  success(true);
                  return;
              }
              window[this.platformName].openAwemeUserProfile({
                  success: function (res) {
                      console.log("---- open success, res: ", res);
                      var hasFollowed = res.hasFollowed;
                      success(hasFollowed);
                  },
                  fail: function (err) {
                      fail(err);
                  },
                  complete: function (res) {
                  },
              });
          };
          return TTModule;
      })(PlatformModule);
      var QQModule = (function (_super) {
          __extends(QQModule, _super);
          function QQModule() {
              var _this = _super.call(this) || this;
              _this.platformName = "qq";
              _this.mBannerWidth = 320;
              _this.bannerHeigth = Math.round((_this.bannerWidth / 300) * 72.8071);
              _this._regisiterWXCallback();
              _this.initBanner();
              return _this;
          }
          Object.defineProperty(QQModule.prototype, "bannerWidth", {
              get: function () {
                  var wxsys = this.getSystemInfoSync();
                  var windowWidth = wxsys.windowWidth;
                  if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth)) {
                      if (windowWidth < 320) {
                          this.mBannerWidth = windowWidth;
                      }
                      else {
                          this.mBannerWidth = 320;
                      }
                  }
                  else {
                      this.mBannerWidth = windowWidth;
                  }
                  return this.mBannerWidth;
              },
              set: function (value) {
                  this.mBannerWidth = value;
              },
              enumerable: true,
              configurable: true,
          });
          QQModule.prototype._createBannerAd = function (adIndex, loadShow) {
              if (loadShow === void 0) {
                  loadShow = true;
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBannerAd)
                  return;
              var bannerId = this.getBannerId(adIndex);
              if (Common.isEmpty(bannerId)) {
                  console.warn(MSG.BANNER_KEY_IS_NULL);
                  return;
              }
              var height = (this.bannerHeigth = Math.round((320 / 300) * 72.8071));
              var bannerStyle = this._getBannerPosition();
              var style = {
                  top: bannerStyle.top,
                  left: bannerStyle.left,
                  width: 320,
                  height: height,
              };
              console.log(" 显示前先关闭 banner ");
              this.hideBanner();
              console.log(" QQModule ~ _createBannerAd ~ style", style, bannerId);
              this.banner[bannerId] = window[this.platformName].createBannerAd({
                  adUnitId: bannerId,
                  style: style,
              });
              if (this.banner[bannerId]) {
                  this.banner[bannerId].onResize(this._onBannerResize);
                  this.banner[bannerId].onError(this._onBannerError);
                  this.banner[bannerId].onLoad(this._onBannerLoad.bind(this));
              }
              return bannerId;
          };
          QQModule.prototype._onBannerLoad = function () {
              console.log("banner 加载结束 bannerId");
              for (var k in this.banner) {
                  if (k != this.currentBannerId) {
                      this.banner[k].hide();
                      this.banner[k].destroy();
                      this.banner[k] = null;
                      delete this.banner[k];
                  }
              }
              var banner = this.banner[this.currentBannerId];
              if (banner) {
                  banner.show();
              }
              else {
                  console.log("banner 不存在");
              }
          };
          QQModule.prototype._onBannerError = function (bannerId, err) {
              console.warn("banner___error:", err, " bannerId ", bannerId);
          };
          QQModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = -1;
              }
              console.log(MSG.BANNER_SHOW);
              this.bannerCb = callback;
              this.isBannerShow = true;
              if (!window[this.platformName]) {
                  return;
              }
              this.bannerHorizontal = horizontal;
              this.bannerVertical = vertical;
              this.bannerStyle = style;
              if (remoteOn)
                  moosnow.http.getAllConfig(function (res) {
                      if (res.mistouchNum == 0) {
                          console.log("后台关闭了banner，不执行显示");
                          return;
                      }
                      else {
                          console.log("后台开启了banner，执行显示");
                          _this.currentBannerId = _this._createBannerAd(idIndex);
                          _this._showBanner();
                      }
                  });
              else {
                  this.currentBannerId = this._createBannerAd(idIndex);
                  this._showBanner();
              }
          };
          QQModule.prototype._showBanner = function () {
              var banner = this.banner[this.currentBannerId];
              if (banner) {
                  banner.show();
              }
              else {
                  console.log("banner 不存在");
              }
          };
          QQModule.prototype._onBannerResize = function (size) {
              console.log("Resize后正式宽高:", size);
          };
          QQModule.prototype.showAppBox = function (callback, remoteOn) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createAppBox)
                  return;
              this.mOnBoxCallback = callback;
              console.log("showAppBox");
              moosnow.http.getAllConfig(function (res) {
                  if (remoteOn) {
                      if (res && res.showAppBox == 1) {
                          if (!_this.box) {
                              _this.box = window[_this.platformName].createAppBox({
                                  adUnitId: _this.boxId,
                              });
                              _this.box.onClose(_this.onBoxClose.bind(_this));
                          }
                          _this.box.load().then(function () {
                              _this.box.show();
                          });
                      }
                      else {
                          if (Common.isFunction(_this.mOnBoxCallback))
                              _this.mOnBoxCallback(-1);
                          console.log("后台不允许显示Box，如有需要请联系运营");
                      }
                  }
                  else {
                      if (!_this.box) {
                          _this.box = window[_this.platformName].createAppBox({
                              adUnitId: _this.boxId,
                          });
                          _this.box.onClose(_this.onBoxClose.bind(_this));
                      }
                      _this.box.load().then(function () {
                          _this.box.show();
                      });
                  }
              });
          };
          QQModule.prototype.hideBanner = function () {
              console.log(" hideBanner ~ this.banner", this.banner);
              if (this.banner)
                  for (var k in this.banner) {
                      this.banner[k].hide();
                      this.banner[k].destroy();
                      this.banner[k] = null;
                      delete this.banner[k];
                  }
          };
          QQModule.prototype.hideAppBox = function (callback) {
              var _this = this;
              if (this.box) {
                  this.box.offClose(this.onBoxClose);
                  var promise_1 = this.box.destroy();
                  console.log("box destroy ", promise_1);
                  if (promise_1) {
                      promise_1
                          .then(function () {
                          console.log("destroy successfully ", promise_1);
                          _this.box = null;
                          if (Common.isFunction(callback))
                              callback(true);
                      })
                          .catch(function () {
                          console.log("destroy fail ", promise_1);
                          _this.box = null;
                          if (Common.isFunction(callback))
                              callback(false);
                      });
                  }
              }
          };
          QQModule.prototype.onBoxClose = function () {
              if (Common.isFunction(this.mOnBoxCallback))
                  this.mOnBoxCallback(0);
          };
          QQModule.prototype.showBlock = function (horizontal, vertical, orientation, size) {
              if (horizontal === void 0) {
                  horizontal = BLOCK_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BLOCK_VERTICAL.TOP;
              }
              if (orientation === void 0) {
                  orientation = 1;
              }
              if (size === void 0) {
                  size = 5;
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBlockAd)
                  return;
              if (this.block) {
                  this.block.destroy();
              }
              this.blockHorizontal = horizontal;
              this.blockVertical = vertical;
              var style = this._getBlockPosition();
              console.log("QQModule -> showBlock -> style", style);
              this.block = window[this.platformName].createBlockAd({
                  adUnitId: this.getBlockId(),
                  orientation: orientation == 1 ? "landscape" : "vertical",
                  size: size,
                  style: {
                      left: style.left,
                      top: style.top,
                  },
              });
              console.log("QQModule -> showBlock ->  this.block", this.block);
              this.block.onLoad(this._onBlockLoad.bind(this));
              this.block.onError(this._onBlockError.bind(this));
              this.block.onResize(this._onBlockResize.bind(this));
          };
          QQModule.prototype.hideBlock = function () {
              if (this.block)
                  this.block.hide();
          };
          QQModule.prototype._onBlockLoad = function (res) {
              console.log("QQModule -> _onBlockLoad -> res", res);
              this.block.show().then(function (showResult) {
                  console.log("QQModule -> _onBlockLoad -> showResult", showResult);
              });
          };
          QQModule.prototype._onBlockError = function (res) {
              console.log("QQModule -> _onBlockError -> res", res);
          };
          QQModule.prototype._getBlockPosition = function () {
              var horizontal = this.blockHorizontal;
              var vertical = this.blockVertical;
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.windowWidth;
              var windowHeight = wxsys.windowHeight;
              var top = 0;
              var left = 0;
              if (vertical == BLOCK_VERTICAL.TOP) {
                  top = 16;
              }
              else if (vertical == BLOCK_VERTICAL.CENTER) {
                  top = (windowHeight - this.blockHeigth) / 2;
              }
              else if (vertical == BLOCK_VERTICAL.BOTTOM) {
                  top = windowHeight - this.blockHeigth - 16;
              }
              if (horizontal == BLOCK_HORIZONTAL.LEFT) {
                  left = 16;
              }
              else if (horizontal == BLOCK_HORIZONTAL.RIGHT) {
                  left = windowWidth - this.blockWidth - 16;
                  if (vertical == BLOCK_VERTICAL.TOP) {
                      left = windowWidth - this.blockWidth - 150;
                  }
              }
              else if (horizontal == BLOCK_HORIZONTAL.CENTER) {
                  left = (windowWidth - this.blockWidth) / 2;
              }
              console.log("QQModule -> _getBlockPosition -> left", left, "top", top);
              return {
                  left: left,
                  top: top,
              };
          };
          QQModule.prototype._onBlockResize = function (size) {
              var style = this._getBlockPosition();
              console.log("QQModule -> _onBlockResize -> style", style);
              this.block.style.top = style.top;
              this.block.style.left = style.left;
              console.log("重置block位置", style);
          };
          return QQModule;
      })(PlatformModule);
      var moosnowAdRow = (function () {
          function moosnowAdRow() {
              this.appid = "";
              this.boxAppid = "";
              this.desc = "";
              this.img = "";
              this.path = "";
              this.title = "";
              this.atlas = "";
              this.pkgName = "";
              this.extraData = "";
              this.position = "";
              this.onCancel = null;
              this.index = 0;
              this.refresh = false;
              this.showIds = null;
              this.source = null;
          }
          return moosnowAdRow;
      })();
      var ZSOPPOAdModule = (function (_super) {
          __extends(ZSOPPOAdModule, _super);
          function ZSOPPOAdModule() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ZSOPPOAdModule.prototype.getRemoteAd = function (cb) {
              var url = "https://platform.qwpo2018.com/api/apk_ad/index";
              var signParams = {
                  apk_id: Common.config.moosnowAppId,
              };
              var data = signParams;
              moosnow.http.request(url, data, "POST", function (res) {
                  var arr = res.data;
                  arr.sort(function () {
                      return Math.random() > 0.5 ? 1 : -1;
                  });
                  console.log("接口数据", res.data);
                  if (cb) {
                      var retValue = [];
                      for (var i = 0; i < arr.length; i++) {
                          var item = arr[i];
                          var row = new moosnowAdRow();
                          row.appid = item.link_appid;
                          row.img = item.link_img;
                          row.path = item.link_path;
                          row.title = item.link_name;
                          row.pkgName = item.link_page;
                          row.desc = item.link_des;
                          retValue.push(row);
                      }
                      cb(retValue);
                  }
              }, function () {
                  cb([]);
                  console.log("getRemoteAd fail");
              }, function () {
                  console.log("getRemoteAd complete");
              });
          };
          return ZSOPPOAdModule;
      })(AdModule);
      var ZSOPPOModule = (function (_super) {
          __extends(ZSOPPOModule, _super);
          function ZSOPPOModule() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ZSOPPOModule.prototype.checkVersion = function (version, callback) {
              var _this = this;
              moosnow.http.loadCfg(function (res) {
                  var openAd = _super.prototype.checkLog.call(_this, res.zs_version);
                  callback(openAd);
              });
          };
          ZSOPPOModule.prototype.login = function (success, fail) {
              if (window[this.platformName])
                  window[this.platformName].login({
                      success: function (res) {
                          var url = "https://platform.qwpo2018.com/api/oppo_login/index";
                          moosnow.http.request(url, {
                              apk_id: Common.config.moosnowAppId,
                              code: res.data.token,
                          }, "POST", function (res2) {
                              moosnow.data.setToken(res2.data.user_id);
                              if (success)
                                  success(res2.data);
                              console.log("platformLogin success ", res2);
                          }, function (res2) {
                              if (success)
                                  success(null);
                              console.log("platformLogin fail ", res2);
                          });
                      },
                      fail: function (res) {
                          if (fail)
                              fail(res);
                      },
                  });
              else if (success)
                  success();
          };
          ZSOPPOModule.prototype.navigate2Mini = function (row, success, fail, complete) {
              var _this = this;
              _super.prototype.navigate2Mini.call(this, row, function () {
                  _this.navigateCallback(row.appid);
                  if (Common.isFunction(success))
                      success();
              }, fail, complete);
          };
          ZSOPPOModule.prototype.navigateCallback = function (appId) {
              var url = "https://platform.qwpo2018.com/api/apk_ad/click_log";
              var openId = moosnow.data.getToken();
              var signParams = {
                  user_id: openId,
                  apk_id: Common.config.moosnowAppId,
                  appid: appId,
                  link_id: appId,
              };
              var data = signParams;
              console.log("跳转数据上报", data);
              moosnow.http.request(url, data, "POST", function (res) {
                  console.log("跳转数据上报成功", res);
              }, function (res) {
                  console.log("跳转数据上报失败", res);
              }, function () {
                  console.log("upload navigate complete");
              });
          };
          return ZSOPPOModule;
      })(OPPOModule);
      var BDModule = (function (_super) {
          __extends(BDModule, _super);
          function BDModule() {
              var _this = _super.call(this) || this;
              _this.platformName = "swan";
              _this.appSid = "";
              _this.recordRes = null;
              _this.recordCb = null;
              return _this;
          }
          BDModule.prototype._createBannerAd = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBannerAd)
                  return;
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.screenWidth;
              var windowHeight = wxsys.screenHeight;
              if (Common.isEmpty(this.getBannerId())) {
                  console.warn(MSG.BANNER_KEY_IS_NULL);
                  return;
              }
              var banner = window[this.platformName].createBannerAd({
                  adUnitId: this.getBannerId(),
                  appSid: this.appSid,
                  style: {
                      top: windowHeight,
                      width: windowWidth,
                  },
              });
              return banner;
          };
          BDModule.prototype.createRewardAD = function (show) {
              var _this = this;
              if (this.videoLoading) {
                  return;
              }
              if (!window[this.platformName].createRewardedVideoAd) {
                  return;
              }
              if (this.video) {
                  this.video.offClose(this._onVideoClose);
                  this.video.offError(this._onVideoError);
                  this.video.offLoad(this._onVideoLoad);
              }
              else {
                  this.video = window[this.platformName].createRewardedVideoAd({
                      adUnitId: this.getVideoId(),
                      appSid: this.appSid,
                  });
              }
              this.video.onError(this._onVideoError);
              this.video.onClose(this._onVideoClose);
              this.video.onLoad(this._onVideoLoad);
              this.videoLoading = true;
              this.video
                  .load()
                  .then(function () {
                  if (show) {
                      _this.video
                          .show()
                          .then(function () { })
                          .catch(function (err) {
                          _this._onVideoError(err.errMsg, err.errCode);
                          console.log(err.errMsg);
                      });
                  }
              })
                  .catch(function (err) {
                  _this._onVideoError(err.errMsg, err.errCode);
                  console.log(err.errMsg);
              });
          };
          BDModule.prototype.initRecord = function () {
              if (!window[this.platformName])
                  return;
              var brand = this.getSystemInfoSync().brand.toLowerCase();
              if (/huawei/.test(brand) || /honor/.test(brand))
                  return;
              this.recordObj = window[this.platformName].getVideoRecorderManager();
          };
          BDModule.prototype.startRecord = function (duration, callback) {
              var _this = this;
              if (duration === void 0) {
                  duration = 120;
              }
              if (callback === void 0) {
                  callback = null;
              }
              console.log("record startRecord");
              this.recordRes = null;
              this.recordCb = null;
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
              this.recordObj.onStart(function (res) {
                  console.log("record onStart");
                  if (callback)
                      callback(res);
              });
              this.recordObj.onStop(function (res) {
                  _this.recordRes = res;
                  if (_this.recordCb) {
                      console.log("stop 2");
                      _this.recordCb(res);
                  }
              });
              this.recordObj.start({
                  duration: duration,
              });
          };
          BDModule.prototype.stopRecord = function (callback) {
              if (callback === void 0) {
                  callback = null;
              }
              console.log("record stopRecord");
              if (!this.recordObj) {
                  if (callback)
                      callback(false);
                  return;
              }
              if (this.recordRes) {
                  console.log("stop 1");
                  callback(this.recordRes);
              }
              else {
                  this.recordCb = callback;
                  this.recordObj.stop();
              }
          };
          return BDModule;
      })(PlatformModule);
      var ZSHttpModule = (function (_super) {
          __extends(ZSHttpModule, _super);
          function ZSHttpModule() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ZSHttpModule.prototype.getMisTouchNum = function (callback) {
              this.loadCfg(function (res) {
                  callback(parseInt(res.mistouchNum));
              });
          };
          ZSHttpModule.prototype.getMistouchPosNum = function (callback) {
              this.loadCfg(function (res) {
                  callback(parseInt(res.mistouchPosNum));
              });
          };
          ZSHttpModule.prototype.getBannerShowCountLimit = function (callback) {
              this.loadCfg(function (res) {
                  if (isNaN(res.bannerShowCountLimit))
                      callback(5);
                  else
                      callback(parseInt(res.bannerShowCountLimit));
              });
          };
          ZSHttpModule.prototype.getAllConfig = function (callback) {
              this.loadCfg(function (res) {
                  callback(res);
              });
          };
          ZSHttpModule.prototype.loadCfg = function (callback) {
              var _this = this;
              if (this.cfgData) {
                  callback(this.cfgData);
              }
              else {
                  var url = Common.config.url + "?t=" + Date.now();
                  console.log("appid ", Common.config.moosnowAppId);
                  this.request(url, {
                      apk_id: Common.config.moosnowAppId,
                  }, "POST", function (res) {
                      var enabled = res.data.zs_version == Common.config.version;
                      _this.cfgData = __assign(__assign({}, Common.deepCopy(res.data)), { mistouchNum: res.data.zs_switch, mistouchPosNum: res.data.zs_switch, showNative: enabled, showInter: enabled, showExportAd: enabled, mx_native_click_switch: res.zs_native_click_switch == 1, mx_jump_switch: res.zs_jump_switch == 1, bannerShowCountLimit: isNaN(res.data.bannerShowCountLimit) ? 1 : res.data.bannerShowCountLimit });
                      if (moosnow.platform) {
                          moosnow.platform.bannerShowCountLimit = parseInt(res.data.bannerShowCountLimit);
                      }
                      callback(_this.cfgData);
                  }, function () {
                      callback({});
                      console.log("load config json fail");
                  });
              }
          };
          return ZSHttpModule;
      })(HttpModule);
      var SHARE_MSG = {
          FAIL: "请分享到群！",
      };
      var VIDEO_MSG = {
          ERR: "视频正在加载中,请稍后",
          NOTEND: "请完整观看完视频！",
      };
      var ArrayUtil = (function () {
          function ArrayUtil() { }
          ArrayUtil.prototype.shuffle = function (array) {
              var iLength = array.length, i = iLength, mTemp, iRandom;
              while (i--) {
                  if (i !== (iRandom = Math.floor(Math.random() * iLength))) {
                      mTemp = array[i];
                      array[i] = array[iRandom];
                      array[iRandom] = mTemp;
                  }
              }
              return array;
          };
          ArrayUtil.prototype.indexOf = function (searchArray, searchElement) {
              var result = -1;
              for (var i = 0, length = searchArray.length; i < length; i++) {
                  if (searchArray[i] == searchElement) {
                      result = i;
                      break;
                  }
              }
              return result;
          };
          ArrayUtil.prototype.replace = function (replaceArray, fromIndex, toIndex) {
              var from = replaceArray[fromIndex];
              var to = replaceArray[toIndex];
              replaceArray[toIndex] = from;
              replaceArray[fromIndex] = to;
          };
          ArrayUtil.prototype.merge = function (mergefrom, mergeto) {
              for (var i = 0, length = mergefrom.length; i < length; i++) {
                  mergeto.push(mergefrom[i]);
              }
              return mergeto;
          };
          ArrayUtil.clone = function (from) {
              var newarray = new Array();
              newarray = from.slice(0);
              return newarray;
          };
          ArrayUtil.remove = function (origin, item) {
              for (var i = 0; i < origin.length; i++) {
                  if (origin[i] == item) {
                      origin.splice(i, 1);
                      i--;
                      return;
                  }
              }
          };
          return ArrayUtil;
      })();
      var EventModule = (function (_super) {
          __extends(EventModule, _super);
          function EventModule() {
              var _this = _super.call(this) || this;
              _this._eventList = [];
              _this._waitingForSendList = [];
              _this._eventList = [];
              _this._waitingForSendList = [];
              return _this;
          }
          EventModule.prototype.addListener = function (eventName, target, callback, once) {
              if (once === void 0) {
                  once = false;
              }
              this._addListener(eventName, target, once, callback);
          };
          EventModule.prototype.addToSendQueue = function (eventName, data) {
              this._addToSendList(eventName, data);
          };
          EventModule.prototype.sendEventImmediately = function (eventName, data) {
              this._sendEvent(eventName, data);
              this.onUpdate();
          };
          EventModule.prototype.removeListener = function (eventName, target) {
              var isEventNameAvailable = eventName != null && eventName != "";
              if (!isEventNameAvailable) {
                  console.error("eventName:" + eventName + "不合法！");
                  return;
              }
              for (var i = 0; i < this._eventList.length; i++) {
                  var event_1 = this._eventList[i];
                  if (event_1.eventName === eventName) {
                      for (var j = 0; j < event_1.listeners.length; j++) {
                          var listener = event_1.listeners[j];
                          if (listener.target === target) {
                              ArrayUtil.remove(event_1.listeners, listener);
                              break;
                          }
                      }
                      if (event_1.listeners.length == 0) {
                          ArrayUtil.remove(this._eventList, event_1);
                      }
                      break;
                  }
              }
          };
          EventModule.prototype.removeAllListener = function () {
              this._eventList.length = 0;
              this._eventList = [];
              this._waitingForSendList.length = 0;
              this._waitingForSendList = [];
          };
          EventModule.prototype._addListener = function (eventName, target, once, callback) {
              var isEventNameAvailable = eventName != null && eventName != "";
              if (!isEventNameAvailable) {
                  console.error("eventName:" + eventName + "不合法！");
                  return;
              }
              var listener = new MListener();
              callback instanceof Function ? (listener.callback = callback) : console.error("callback不是一个方法");
              target ? (listener.target = target) : console.error("target为空");
              listener.once = once;
              var hasSameEvent = false;
              if (this._eventList.length > 0) {
                  for (var i = 0; i < this._eventList.length; i++) {
                      var tempEvent = this._eventList[i];
                      if (eventName === tempEvent.eventName) {
                          tempEvent.listeners.push(listener);
                          hasSameEvent = true;
                          return;
                      }
                  }
                  if (!hasSameEvent) {
                      var event_2 = new MLEvent();
                      event_2.eventName = eventName;
                      event_2.listeners.push(listener);
                      this._eventList.push(event_2);
                  }
              }
              else {
                  var event_3 = new MLEvent();
                  event_3.eventName = eventName;
                  event_3.listeners.push(listener);
                  this._eventList.push(event_3);
              }
          };
          EventModule.prototype._addToSendList = function (eventName, data) {
              var isEventNameAvailable = eventName != null && eventName != "";
              if (!isEventNameAvailable) {
                  console.error("eventName:" + eventName + "不合法！");
                  return;
              }
              var toBeSend = {
                  eventName: eventName,
                  data: data,
              };
              this._waitingForSendList.push(toBeSend);
          };
          EventModule.prototype._sendEvent = function (eventName, data) {
              var copyedEventList = this._eventList;
              for (var i = 0; i < copyedEventList.length; i++) {
                  var event_4 = copyedEventList[i];
                  if (event_4.eventName === eventName) {
                      var listeners = event_4.listeners;
                      for (var j = listeners.length - 1; j >= 0; j--) {
                          var listener = listeners[j];
                          var callback = listener.callback;
                          var target = listener.target;
                          if (!target) {
                              ArrayUtil.remove(this._eventList[i].listeners, listener);
                              j--;
                              continue;
                          }
                          if (listener.once) {
                              if (this._eventList[i].listeners[j]) {
                                  ArrayUtil.remove(this._eventList[i].listeners, listener);
                                  i--;
                              }
                          }
                          callback.call(target, data);
                      }
                  }
              }
          };
          EventModule.prototype.onUpdate = function () {
              if (this._waitingForSendList.length == 0) {
                  return;
              }
              for (var i = 0; i < this._waitingForSendList.length; i++) {
                  var event_5 = this._waitingForSendList[i];
                  this._sendEvent(event_5.eventName, event_5.data);
                  ArrayUtil.remove(this._waitingForSendList, event_5);
                  i--;
              }
          };
          EventModule.prototype.onDisable = function () { };
          return EventModule;
      })(BaseModule);
      var MListener = (function () {
          function MListener() {
              this.callback = null;
              this.target = [];
              this.once = false;
              this.callback = null;
              this.target = null;
              this.once = false;
          }
          return MListener;
      })();
      var MLEvent = (function () {
          function MLEvent() {
              this.eventName = "";
              this.listeners = [];
              this.eventName = "";
              this.listeners = [];
          }
          return MLEvent;
      })();
      var VIVOModule = (function (_super) {
          __extends(VIVOModule, _super);
          function VIVOModule() {
              var _this = _super.call(this) || this;
              _this.platformName = "qg";
              _this.appSid = "";
              _this.mBannerWidth = 720;
              _this.bannerHeight = 114;
              _this.interLoadedShow = false;
              _this.prevNavigate = Date.now();
              _this.mMinInterval = 10;
              _this.mMinHideInterval = 5;
              _this.mIsClickedNative = false;
              _this._regisiterWXCallback();
              _this.initAdService();
              return _this;
          }
          VIVOModule.prototype.initAdService = function () {
              this._prepareNative();
              moosnow.event.addListener(PLATFORM_EVENT.ON_PLATFORM_SHOW, this, this.onAppShow);
          };
          VIVOModule.prototype.navigate2Mini = function (row, success, fail, complete) {
              var _this = this;
              console.log(MSG.NAVIGATE_DATA, row);
              if (Date.now() - this.prevNavigate < 300) {
                  console.log(MSG.NAVIGATE_FAST);
                  return;
              }
              this.prevNavigate = Date.now();
              if (!window[this.platformName]) {
                  if (success)
                      success();
                  return;
              }
              var appid = row.appid, path = row.path, extraData = row.extraData, pkgName = row.pkgName;
              extraData = extraData || {};
              if (!this.supportVersion(1044)) {
                  console.log(MSG.PLATFORM_UNSUPPORT);
                  return;
              }
              window[this.platformName].navigateToMiniGame({
                  appId: appid,
                  path: path,
                  pkgName: pkgName || appid,
                  extraData: extraData,
                  success: function () {
                      if (window[_this.platformName] && window[_this.platformName].aldSendEvent) {
                          window[_this.platformName].aldSendEvent("跳转", {
                              position: row.position,
                              appid: appid,
                              img: row.atlas || row.img,
                          });
                      }
                      moosnow.http.exportUser();
                      if (success)
                          success();
                  },
                  fail: function (err) {
                      console.log("navigateToMiniProgram error ", err);
                      if (fail)
                          fail();
                  },
                  complete: function () {
                      if (complete)
                          complete();
                  },
              });
          };
          VIVOModule.prototype.supportVersion = function (version) {
              var oppoSys = this.getSystemInfoSync();
              return oppoSys.platformVersionCode >= version;
          };
          VIVOModule.prototype._onBannerError = function (err) {
              console.warn("banner___error:", err.errCode, " msg ", err.errMsg);
          };
          VIVOModule.prototype.getSystemInfoSync = function () {
              if (this.systemInfo == null) {
                  if (window[this.platformName] && window[this.platformName].getSystemInfoSync)
                      this.systemInfo = window[this.platformName].getSystemInfoSync();
                  else
                      this.systemInfo = {};
                  console.log(MSG.SYSTEM_INFO, this.systemInfo);
              }
              return this.systemInfo;
          };
          VIVOModule.prototype._getBannerPosition = function () {
              var horizontal = this.bannerHorizontal;
              var vertical = this.bannerVertical;
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.screenWidth;
              var windowHeight = wxsys.screenHeight;
              var statusBarHeight = wxsys.statusBarHeight;
              var notchHeight = wxsys.notchHeight || 0;
              if (this.banner && this.banner.style) {
                  if (!isNaN(this.bannerWidth))
                      this.banner.style.width = this.bannerWidth;
                  if (!isNaN(this.bannerHeight))
                      this.banner.style.height = this.bannerHeight;
              }
              var top = 0;
              var left = 0;
              if (vertical == BANNER_VERTICAL.TOP) {
                  if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth))
                      top = 0;
                  else
                      top = statusBarHeight + notchHeight;
              }
              else if (vertical == BANNER_VERTICAL.CENTER) {
                  top = (windowHeight - this.bannerHeigth) / 2;
              }
              else if (vertical == BANNER_VERTICAL.BOTTOM) {
                  top = windowHeight - this.bannerHeigth;
              }
              if (horizontal == BANNER_HORIZONTAL.LEFT) {
                  left = 0;
              }
              else if (horizontal == BANNER_HORIZONTAL.RIGHT) {
                  left = windowWidth - this.bannerWidth;
              }
              else if (horizontal == BANNER_HORIZONTAL.CENTER) {
                  left = (windowWidth - this.bannerWidth) / 2;
              }
              console.log("VIVOModule -> _getBannerPosition -> top,left", top, left);
              return {
                  left: left,
                  top: top,
              };
          };
          VIVOModule.prototype._createBannerAd = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBannerAd)
                  return;
              var nowTime = Date.now();
              if (!this.mShowTime)
                  this.mShowTime = nowTime;
              else if (this.mShowTime && nowTime - this.mShowTime <= this.mMinInterval * 1000) {
                  console.log("banner\u521B\u5EFA\u592A\u9891\u7E41\u4E86 " + this.mMinInterval + "\u79D2\u5185\u53EA\u80FD\u663E\u793A\u4E00\u6B21");
                  return;
              }
              this.mShowTime = Date.now();
              if (Common.isEmpty(this.getBannerId())) {
                  console.warn(MSG.BANNER_KEY_IS_NULL);
                  return;
              }
              var style = this._getBannerPosition();
              var banner = window[this.platformName].createBannerAd({
                  posId: this.getBannerId(),
                  style: {
                      left: style.left,
                      top: style.top,
                      width: this.bannerWidth,
                      height: this.bannerHeight,
                  },
              });
              return banner;
          };
          VIVOModule.prototype.getNotchHeight = function () {
              var retVal = 0;
              if (window[this.platformName].getNotchHeightSync)
                  retVal = window[this.platformName].getNotchHeightSync().height;
              return retVal;
          };
          VIVOModule.prototype._onBannerResize = function (size) {
              this.bannerHeight = size.realHeight;
              this.bannerWidth = size.realWidth;
              console.log("onSize callback  ", size);
          };
          VIVOModule.prototype._onBannerClose = function () {
              console.log("banner 已关闭 ");
          };
          VIVOModule.prototype._onBannerHide = function () {
              console.log("banner 已隐藏 ");
          };
          VIVOModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = 0;
              }
              this.bannerCb = callback;
              this.isBannerShow = true;
              if (!window[this.platformName])
                  return;
              this.bannerHorizontal = horizontal;
              this.bannerVertical = vertical;
              this.bannerStyle = style;
              if (remoteOn)
                  moosnow.http.getAllConfig(function (res) {
                      if (res.mistouchNum == 0) {
                          console.log("后台关闭了banner，不执行显示");
                          return;
                      }
                      else {
                          console.log("后台开启了banner，执行显示");
                          _this._showBanner();
                      }
                  });
              else
                  this._showBanner();
          };
          VIVOModule.prototype._showBanner = function () {
              var _this = this;
              if (this.banner && this.banner.hide) {
                  this.banner.hide();
                  this.banner.destroy();
                  this.banner = null;
              }
              this.banner = this._createBannerAd();
              if (!(this.banner && this.banner.show))
                  return;
              var adshow = this.banner.show();
              adshow &&
                  adshow
                      .then(function () {
                      console.log("banner广告展示成功");
                  })
                      .catch(function (err) {
                      moosnow.http.getAllConfig(function (res) {
                          if (res.bannerErrorShowInter == 1) {
                              console.log("banner加载出错，用插屏代替");
                              _this.showInter();
                          }
                      });
                      switch (err.code) {
                          case 30003:
                              console.log("新用户1天内不能曝光Banner，请将手机时间调整为1天后，退出游戏重新进入");
                              break;
                          case 30009:
                              console.log("10秒内调用广告次数超过1次，10秒后再调用");
                              break;
                          case 30002:
                              console.log("加载广告失败，重新加载广告");
                              break;
                          default:
                              console.log("banner广告展示失败");
                              console.log(JSON.stringify(err));
                              break;
                      }
                  });
          };
          VIVOModule.prototype.hideBanner = function () {
              console.log(MSG.HIDE_BANNER);
              if (!window[this.platformName]) {
                  return;
              }
              var nowTime = Date.now();
              if (!this.mHideTime)
                  this.mHideTime = nowTime;
              else if (this.mHideTime && nowTime - this.mHideTime <= this.mMinHideInterval * 1000) {
                  console.log("banner\u9690\u85CF\u592A\u9891\u7E41\u4E86 " + this.mMinHideInterval + "\u79D2\u5185\u53EA\u9690\u85CF\u4E00\u6B21");
                  return;
              }
              this.mHideTime = nowTime;
              if (this.banner && this.banner.hide) {
                  console.log("隐藏和销毁banner");
                  this.banner.hide();
                  this.banner.destroy();
                  this.banner = null;
              }
          };
          VIVOModule.prototype.createRewardAD = function (show, idIndex) {
              if (idIndex === void 0) {
                  idIndex = 0;
              }
              if (moosnow.platform.videoLoading) {
                  return;
              }
              if (!window[this.platformName]) {
                  moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!window[this.platformName].createRewardedVideoAd) {
                  return;
              }
              if (Common.isEmpty(this.getVideoId())) {
                  console.warn(MSG.VIDEO_KEY_IS_NULL);
                  return;
              }
              if (!this.mVideoTime) {
                  this.mVideoTime = Date.now();
              }
              else {
                  if (Date.now() - this.mVideoTime < 10 * 1000) {
                      if (moosnow.platform.videoCb) {
                          moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                      }
                      return;
                  }
                  else {
                      this.mVideoTime = Date.now();
                  }
              }
              var videoId = this.getVideoId(idIndex);
              if (!this.video[videoId]) {
                  moosnow.platform.videoLoading = true;
                  this.video = window[this.platformName].createRewardedVideoAd({
                      posId: videoId,
                  });
                  this.video.onError(this._onVideoError.bind(this));
                  this.video.onClose(this._onVideoClose.bind(this));
                  this.video.onLoad(this._onVideoLoad.bind(this));
              }
              else
                  this.video[videoId].load();
          };
          VIVOModule.prototype._onVideoLoad = function () {
              var _this = this;
              console.log(MSG.VIDEO_LOAD_COMPLETED);
              moosnow.platform.videoLoading = false;
              if (this.video) {
                  this.video
                      .show()
                      .then(function () {
                      _this.videoPlaying = true;
                      moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_HIDE, {});
                      console.log("激励视频广告展示完成");
                  })
                      .catch(function (err) {
                      console.log("激励视频广告展示失败", JSON.stringify(err));
                      if (moosnow.platform.videoCb) {
                          moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                      }
                  });
              }
          };
          VIVOModule.prototype._onVideoClose = function (isEnd) {
              console.log(MSG.VIDEO_CLOSE_COMPLETED, isEnd.isEnded);
              moosnow.platform.videoLoading = false;
              this.videoPlaying = false;
              if (!!isEnd.isEnded) {
                  moosnow.http.clickVideo();
              }
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, {});
              if (moosnow.platform.videoCb) {
                  var ret = !!isEnd.isEnded ? VIDEO_STATUS.END : VIDEO_STATUS.NOTEND;
                  moosnow.platform.videoCb(ret);
              }
          };
          VIVOModule.prototype.prepareInter = function () {
              if (Common.isEmpty(this.interId)) {
                  console.warn(MSG.INTER_KEY_IS_NULL);
                  return;
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createInterstitialAd)
                  return;
              if (this.inter) {
                  this.inter.offLoad();
                  this.inter.offClose();
                  this.inter.offError();
                  this.inter = null;
              }
              console.log("创建插屏广告");
              this.inter = window[this.platformName].createInterstitialAd({
                  posId: this.interId,
              });
              this.inter.onLoad(this._onInterLoad.bind(this));
              this.inter.onClose(this._onInterClose.bind(this));
              this.inter.onError(this._onInterError.bind(this));
              this.inter.load();
          };
          VIVOModule.prototype.showInter = function () {
              this.prepareInter();
          };
          VIVOModule.prototype._onInterLoad = function () {
              if (this.inter) {
                  var t = this.inter.show();
                  t &&
                      t
                          .then(function () {
                          console.log("插屏广告展示完成");
                      })
                          .catch(function (err) {
                          console.log("插屏广告展示失败", err);
                      });
              }
          };
          VIVOModule.prototype._onInterOnShow = function () {
              if (this.inter)
                  this.inter.load();
          };
          VIVOModule.prototype.showAutoBanner = function () {
              console.log(" vivo 不支持自动");
          };
          VIVOModule.prototype.reportMonitor = function (name, value) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].reportMonitor)
                  return;
              window[this.platformName].reportMonitor("game_scene", 0);
          };
          VIVOModule.prototype._prepareNative = function (isLoad) {
              if (isLoad === void 0) {
                  isLoad = false;
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createNativeAd)
                  return;
              this._destroyNative();
              this.native = window[this.platformName].createNativeAd({
                  posId: this.nativeId,
              });
              this.native.onLoad(this._onNativeLoad.bind(this));
              this.native.onError(this._onNativeError.bind(this));
              this.nativeLoading = true;
              if (isLoad)
                  this.native.load();
          };
          VIVOModule.prototype._onNativeLoad = function (res) {
              var _this = this;
              this.nativeLoading = false;
              console.log(MSG.NATIVE_LOAD_COMPLETED, res);
              if (res && res.adList && res.adList.length > 0) {
                  this.nativeAdResult = res.adList[res.adList.length - 1];
                  if (!Common.isEmpty(this.nativeAdResult.adId)) {
                      console.log(MSG.NATIVE_REPORT);
                      this.native.reportAdShow({
                          adId: this.nativeAdResult.adId,
                      });
                  }
                  if (Common.isFunction(this.nativeCb)) {
                      this.nativeCb(Common.deepCopy(this.nativeAdResult));
                  }
              }
              else {
                  console.log(MSG.NATIVE_LIST_NULL);
                  if (Common.isFunction(this.nativeCb)) {
                      moosnow.http.getAllConfig(function (res) {
                          if (res.nativeErrorShowInter == 1) {
                              console.log("原生加载出错，用插屏代替");
                              _this.showInter();
                          }
                          else {
                              _this.nativeCb(null);
                          }
                      });
                  }
              }
          };
          VIVOModule.prototype._onNativeError = function (err) {
              var _this = this;
              this.nativeLoading = false;
              this.nativeAdResult = null;
              if (err.code == 20003) {
                  if (this.nativeIdIndex < this.nativeId.length - 1) {
                      console.log(MSG.NATIVE_ERROR, err);
                      this.nativeIdIndex += 1;
                      this._destroyNative();
                  }
                  else {
                      console.log(MSG.NATIVE_NOT_ID_USE);
                      this.nativeIdIndex = 0;
                  }
              }
              else {
                  console.log(MSG.NATIVE_ERROR2, err);
              }
              moosnow.http.getAllConfig(function (res) {
                  if (res.nativeErrorShowInter == 1) {
                      console.log("原生加载出错，用插屏代替");
                      _this.showInter();
                  }
                  else {
                      if (_this.nativeCb)
                          _this.nativeCb(null);
                  }
              });
          };
          VIVOModule.prototype._destroyNative = function () {
              this.nativeLoading = false;
              if (this.native) {
                  this.native.offLoad();
                  this.native.offError();
                  this.native.destroy();
              }
              console.log(MSG.NATIVE_DESTROY);
          };
          VIVOModule.prototype.showNativeAd = function (callback) {
              var _this = this;
              this.nativeCb = callback;
              if (this.native) {
                  var ret = this.native.load();
                  ret &&
                      ret
                          .then(function () {
                          console.log("原生广告加载完成");
                      })
                          .catch(function (err) {
                          console.log("原生广告加载失败");
                          moosnow.http.getAllConfig(function (res) {
                              if (res.nativeErrorShowInter == 1) {
                                  console.log("原生加载出错，用插屏代替");
                                  _this.nativeCb(null);
                                  _this.showInter();
                              }
                              else {
                                  _this.nativeCb(null);
                              }
                          });
                      });
              }
              else {
                  this._prepareNative(true);
              }
          };
          VIVOModule.prototype.clickNative = function (callback) {
              if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                  this.mClickedNativeCallback = callback;
                  this.mIsClickedNative = true;
                  console.log(MSG.NATIVE_CLICK, this.nativeAdResult.adId);
                  this.native.reportAdClick({
                      adId: this.nativeAdResult.adId,
                  });
              }
          };
          VIVOModule.prototype.onAppShow = function () {
              if (this.mIsClickedNative) {
                  this.mIsClickedNative = false;
                  if (Common.isFunction(this.mClickedNativeCallback))
                      this.mClickedNativeCallback();
              }
          };
          VIVOModule.prototype.hasShortcutInstalled = function (success, fail) {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].hasShortcutInstalled)
                  return;
              window[this.platformName].hasShortcutInstalled({
                  success: function (status) {
                      if (success)
                          success(!!status);
                      if (status) {
                          console.log("已创建");
                      }
                      else {
                          console.log("未创建");
                      }
                  },
                  fail: function (res) {
                      if (fail)
                          fail(res);
                  },
              });
          };
          VIVOModule.prototype.installShortcut = function (success, message, fail) {
              if (message === void 0) {
                  message = "方便下次快速启动";
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].installShortcut)
                  return;
              window[this.platformName].installShortcut({
                  message: message,
                  success: function (status) {
                      if (success)
                          success(status);
                      console.log("创建成功");
                  },
                  fail: function (res) {
                      if (fail)
                          fail(res);
                  },
              });
          };
          VIVOModule.prototype.exitApplication = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].exitApplication)
                  return;
              window[this.platformName].exitApplication();
          };
          return VIVOModule;
      })(PlatformModule);
      var AD_POSITION = {
          NONE: 0,
          BANNER: 1,
          FLOAT: 2,
          SIDE: 4,
          CENTER: 8,
          EXPORT: 16,
          BACK: 32,
          MASK: 64,
          WAIT: 128,
          LEFTRIGHT: 256,
          EXPORT_FIXED: 512,
          ROTATE: 1024,
          EXTEND2: 2048,
          EXTEND3: 4096,
          EXTEND4: 8192,
          TOP: 32768,
          RECOVER: 16384,
      };
      var ResourceModule = (function (_super) {
          __extends(ResourceModule, _super);
          function ResourceModule() {
              return _super.call(this) || this;
          }
          ResourceModule.prototype.onEnable = function () { };
          ResourceModule.prototype.loadAsset = function (url, assetType, callback) {
              if (Common.getEngine() == ENGINE_TYPE.COCOS) {
                  if (cc.resources)
                      cc.resources.load(url, assetType, function (err, asset) {
                          if (err) {
                              console.log(" cc.resources.load ", err);
                              return;
                          }
                          if (callback) {
                              callback(err, asset);
                          }
                      });
                  else {
                      var res_1 = cc.loader.load(url, assetType, function (err, asset) {
                          if (err) {
                              console.log(" cc.loader.load ", err);
                              return;
                          }
                          if (callback) {
                              callback(null, res_1);
                          }
                      });
                  }
              }
              else if (Common.getEngine() == ENGINE_TYPE.LAYA) {
                  var res = Laya.loader.getRes(url);
                  if (res) {
                      if (callback) {
                          callback(null, res);
                      }
                      return;
                  }
                  Laya.loader.create(url, Laya.Handler.create(this, function (res) {
                      callback(null, res);
                  }), null, assetType);
              }
          };
          ResourceModule.prototype.loadAssetDir = function (dir, type, progressCallback, completeCallback) {
              if (Common.getEngine() == ENGINE_TYPE.COCOS) {
                  cc.loader.loadResDir(dir, type, function (completedCount, totalCount, item) {
                      var precent = (completedCount / totalCount) * 100;
                      precent = Math.ceil(precent);
                      if (progressCallback) {
                          progressCallback(precent);
                      }
                  }, function (err, res) {
                      if (completeCallback) {
                          completeCallback(err, res);
                      }
                  });
              }
              else {
                  console.warn("不支持loadAssetDir");
              }
          };
          ResourceModule.prototype.onDisable = function () { };
          return ResourceModule;
      })(BaseModule);
      var AudioModule = (function (_super) {
          __extends(AudioModule, _super);
          function AudioModule() {
              var _this = _super.call(this) || this;
              _this.mBtnSound = null;
              _this.IS_MUTE = "isMute";
              _this.IS_MUTE_MUSIC = "isMuteMusic";
              _this.IS_MUTE_SOUND = "isMuteSound";
              _this.VOLUME_MUSIC = "volumeMusic";
              _this.VOLUME_SOUND = "volumeSound";
              _this._volumeMusic = 1;
              _this._volumeSound = 1;
              _this._isMuteMusic = false;
              _this._isMuteSound = false;
              _this._isMute = false;
              return _this;
          }
          Object.defineProperty(AudioModule.prototype, "btnSound", {
              get: function () {
                  return this.mBtnSound;
              },
              set: function (value) {
                  this.mBtnSound = value;
              },
              enumerable: true,
              configurable: true,
          });
          AudioModule.prototype.playClickEffect = function () {
              if (this.mBtnSound)
                  this.playSound(this.mBtnSound);
              else {
                  console.log("没有点击音效");
              }
          };
          Object.defineProperty(AudioModule.prototype, "isMuteSound", {
              get: function () {
                  return this._isMuteSound;
              },
              set: function (value) {
                  this._isMuteSound = value;
                  this.save();
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(AudioModule.prototype, "isMute", {
              get: function () {
                  return this._isMute;
              },
              set: function (value) {
                  this._isMute = value;
                  this.save();
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(AudioModule.prototype, "isMuteMusic", {
              get: function () {
                  return this._isMuteMusic;
              },
              set: function (value) {
                  this._isMuteMusic = value;
                  this.save();
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(AudioModule.prototype, "volumeSound", {
              get: function () {
                  return this._volumeSound;
              },
              set: function (value) {
                  this._volumeSound = value;
                  this.save();
              },
              enumerable: true,
              configurable: true,
          });
          AudioModule.prototype.playSound = function (audioClip, loops, complete, soundClass, startTime) {
              if (loops === void 0) {
                  loops = false;
              }
              if (complete === void 0) {
                  complete = null;
              }
              if (soundClass === void 0) {
                  soundClass = null;
              }
              if (startTime === void 0) {
                  startTime = 0;
              }
              if (this.isMute)
                  return;
              var soundId = cc.audioEngine.playEffect(audioClip, loops);
              cc.audioEngine.setFinishCallback(soundId, function (res) {
                  if (complete) {
                      complete(res);
                  }
                  if (!loops) {
                      cc.audioEngine.stop(soundId);
                  }
              });
              return soundId;
          };
          AudioModule.prototype._replayMusic = function () {
              this.playMusic(this._musicClip, this._musicLoops, this._musicComplete);
          };
          AudioModule.prototype.playMusic = function (audioClip, loops, complete) {
              if (loops === void 0) {
                  loops = true;
              }
              if (complete === void 0) {
                  complete = null;
              }
              if (this.isMute)
                  return;
              this._musicClip = audioClip;
              this._musicLoops = loops;
              this._musicComplete = complete;
              if (Common.getEngine() == ENGINE_TYPE.COCOS) {
                  if (!cc.audioEngine)
                      return;
                  if (!cc.audioEngine.playMusic)
                      return;
                  var soundId = cc.audioEngine.playMusic(audioClip, loops);
                  cc.audioEngine.setFinishCallback(soundId, function (res) {
                      if (complete) {
                          complete(res);
                      }
                  });
                  return soundId;
              }
              else if (Common.getEngine() == ENGINE_TYPE.LAYA) {
                  Laya.SoundManager.playMusic("" + audioClip, 1, new Laya.Handler(this, function (res) {
                      if (complete) {
                          complete(res);
                      }
                  }));
              }
          };
          AudioModule.prototype.stopMusic = function () {
              if (Common.getEngine() == ENGINE_TYPE.COCOS)
                  cc.audioEngine.stopMusic();
              else if (Common.getEngine() == ENGINE_TYPE.LAYA)
                  Laya.SoundManager.stopMusic();
          };
          AudioModule.prototype.save = function () {
              moosnow.setting.setValue(this.IS_MUTE, "" + this.isMute);
              moosnow.setting.setValue(this.IS_MUTE_MUSIC, "" + this.isMuteMusic);
              moosnow.setting.setValue(this.IS_MUTE_SOUND, "" + this.isMuteSound);
          };
          AudioModule.prototype.getSave = function () {
              this.isMute = moosnow.setting.getBool(this.IS_MUTE, false);
              this.isMuteMusic = moosnow.setting.getBool(this.IS_MUTE_MUSIC, false);
          };
          return AudioModule;
      })(BaseModule);
      var UCModule = (function (_super) {
          __extends(UCModule, _super);
          function UCModule() {
              var _a;
              var _this = _super.call(this) || this;
              _this.platformName = "uc";
              _this.mGravity = ((_a = {}), (_a[BANNER_HORIZONTAL.CENTER + "_" + BANNER_VERTICAL.TOP] = 1), (_a[BANNER_HORIZONTAL.CENTER + "_" + BANNER_VERTICAL.CENTER] = 4), (_a[BANNER_HORIZONTAL.CENTER + "_" + BANNER_VERTICAL.BOTTOM] = 7), (_a[BANNER_HORIZONTAL.LEFT + "_" + BANNER_VERTICAL.BOTTOM] = 6), (_a[BANNER_HORIZONTAL.RIGHT + "_" + BANNER_VERTICAL.BOTTOM] = 8), _a);
              if (!window[_this.platformName])
                  return _this;
              if (!window[_this.platformName].setEnableDebug)
                  return _this;
              window[_this.platformName].setEnableDebug({
                  enableDebug: Common.config["enableDebug"] == true,
                  complete: function (data) {
                      console.log("uc.setEnableDebug openDebug. ");
                  },
              });
              if (!window[_this.platformName].requestScreenOrientation)
                  return _this;
              window[_this.platformName].requestScreenOrientation({
                  orientaiton: Common.config["orientaiton"] == "portrait" ? 1 : 2,
                  success: function (res) {
                      console.log(res);
                  },
                  fail: function (res) {
                      console.error(res);
                  },
              });
              return _this;
          }
          UCModule.prototype._prepareBanner = function () { };
          UCModule.prototype._createBannerAd = function () {
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createBannerAd)
                  return;
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.windowWidth;
              var windowHeight = wxsys.windowHeight;
              var left = (windowWidth - this.bannerWidth) / 2;
              this.bannerShowTime = Date.now();
              var gravity = this.mGravity[this.bannerHorizontal + "_" + this.bannerVertical];
              if (isNaN(gravity))
                  gravity = 7;
              var banner = window[this.platformName].createBannerAd({
                  style: {
                      gravity: gravity,
                      width: this.bannerWidth,
                  },
              });
              return banner;
          };
          UCModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, adIndex, style) {
              var _this = this;
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (adIndex === void 0) {
                  adIndex = 0;
              }
              console.log(MSG.BANNER_SHOW);
              this.bannerCb = callback;
              this.isBannerShow = true;
              if (!window[this.platformName]) {
                  return;
              }
              this.bannerHorizontal = horizontal;
              this.bannerVertical = vertical;
              this.bannerStyle = style;
              if (this.mTimeoutId) {
                  clearTimeout(this.mTimeoutId);
                  this.mTimeoutId = null;
              }
              if (remoteOn)
                  moosnow.http.getAllConfig(function (res) {
                      if (res.mistouchNum == 0) {
                          console.log("后台关闭了banner，不执行显示");
                          return;
                      }
                      else {
                          console.log("后台开启了banner，执行显示");
                          _this._showBanner();
                      }
                  });
              else {
                  this._showBanner();
              }
          };
          UCModule.prototype._showBanner = function () {
              if (!window[this.platformName].createBannerAd)
                  return;
              var wxsys = this.getSystemInfoSync();
              var windowWidth = wxsys.windowWidth;
              if (wxsys.windowHeight < wxsys.windowWidth) {
                  if (windowWidth < this.bannerWidth) {
                      this.bannerWidth = windowWidth;
                  }
              }
              else {
                  this.bannerWidth = windowWidth;
              }
              if (this.banner) {
                  this.banner.hide();
                  this.banner.destroy();
                  this.banner = null;
              }
              this.banner = this._createBannerAd();
              if (this.banner) {
                  this.banner.onError(this._onBannerError.bind(this));
                  this.banner.onLoad(this._onBannerLoad.bind(this));
                  this.banner.show();
              }
          };
          UCModule.prototype.hideBanner = function () {
              if (this.banner) {
                  this.banner.hide();
                  this.banner.destroy();
                  this.banner = null;
              }
          };
          UCModule.prototype.createRewardAD = function (show) {
              var _this = this;
              if (this.videoLoading) {
                  return;
              }
              if (!window[this.platformName]) {
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!window[this.platformName].createRewardedVideoAd) {
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              var videoId = this.getVideoId();
              if (Common.isEmpty(videoId)) {
                  console.warn(MSG.VIDEO_KEY_IS_NULL);
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!this.video) {
                  this.video = window[this.platformName].createRewardVideoAd();
                  if (!this.video) {
                      console.warn("创建视频广告失败");
                      return;
                  }
                  this.video.onError(this._onVideoError);
                  this.video.onClose(this._onVideoClose);
                  this.video.onLoad(this._onVideoLoad);
              }
              moosnow.platform.videoLoading = true;
              moosnow.platform.videoPlaying = false;
              this.video
                  .load()
                  .then(function () {
                  if (show) {
                      moosnow.platform.videoPlaying = true;
                      _this.video
                          .show()
                          .then(function () { })
                          .catch(function (err) {
                          _this._onVideoError(err.errMsg, err.errCode);
                          console.log(err.errMsg);
                      });
                  }
              })
                  .catch(function (err) {
                  _this._onVideoError(err.errMsg, err.errCode);
                  console.log(err.errMsg);
              });
          };
          return UCModule;
      })(PlatformModule);
      var NodeAttribute = (function () {
          function NodeAttribute() {
              this.x = 0;
              this.y = 0;
              this.width = "canvasWidth";
              this.height = "canvasHeight";
              this.url = "";
              this.isMask = false;
              this.maskUrl = "";
              this.child = null;
              this.event = [];
              this.type = "";
              this.active = true;
              this.widget = null;
              this.grid = null;
              this.zIndex = 0;
              this.stopPropagation = false;
          }
          NodeAttribute.parse = function (json) {
              var temp = __assign(__assign({}, new NodeAttribute()), json);
              return temp;
          };
          NodeAttribute.convertStr2Enum = function (ev, key, def) {
              if (ev.hasOwnProperty(key)) {
                  return ev[key];
              }
              return def;
          };
          return NodeAttribute;
      })();
      var LayoutFormKeyValue = (function () {
          function LayoutFormKeyValue() {
              this.formNode = null;
              this.formLogic = null;
          }
          return LayoutFormKeyValue;
      })();
      var LayoutFormQuene = (function () {
          function LayoutFormQuene() {
              this.formName = "";
              this.mQuene = [];
          }
          Object.defineProperty(LayoutFormQuene.prototype, "quene", {
              get: function () {
                  return this.mQuene;
              },
              set: function (value) {
                  this.mQuene = value;
              },
              enumerable: true,
              configurable: true,
          });
          return LayoutFormQuene;
      })();
      var FormFactory = (function () {
          function FormFactory() {
              this.layoutUrl = ROOT_CONFIG.HTTP_ROOT + "/layout/" + Common.config.moosnowAppId + "/layout.json";
              this.templatesUrl = ROOT_CONFIG.HTTP_ROOT + "/layout/" + Common.config.moosnowAppId + "/templates.json";
              this.maskUrl = ROOT_CONFIG.HTTP_ROOT + "/layout/" + Common.config.moosnowAppId + "/img_mask.png";
              this.mFormQuene = [];
              this.mCachedLayoutQuene = [];
              this.mLayoutQuene = [];
              this.mTemplatesQuene = [];
          }
          Object.defineProperty(FormFactory.prototype, "layoutQuene", {
              get: function () {
                  return this.mFormQuene;
              },
              set: function (value) {
                  this.mFormQuene = value;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(FormFactory.prototype, "cachedLayoutQuene", {
              get: function () {
                  return this.mCachedLayoutQuene;
              },
              set: function (value) {
                  this.mCachedLayoutQuene = value;
              },
              enumerable: true,
              configurable: true,
          });
          FormFactory.prototype.destory = function () {
              this.cachedLayoutQuene = [];
              this.layoutQuene = [];
          };
          FormFactory.prototype.addFrom2Cached = function (name, formKV) {
              var cacheIdx = -1;
              for (var i = 0; i < this.cachedLayoutQuene.length; i++) {
                  var item = this.cachedLayoutQuene[i];
                  if (item.formName == name) {
                      cacheIdx = i;
                      break;
                  }
              }
              if (cacheIdx != -1) {
                  this.cachedLayoutQuene[cacheIdx].quene.push(formKV);
              }
              else {
                  var item = new LayoutFormQuene();
                  item.formName = name;
                  item.quene.push(formKV);
                  this.cachedLayoutQuene.push(item);
              }
          };
          FormFactory.prototype.getFormFromCached = function (name) {
              for (var i = 0; i < this.cachedLayoutQuene.length; i++) {
                  var item = this.cachedLayoutQuene[i];
                  if (item.formName == name) {
                      for (var j = 0; j < item.quene.length; j++) {
                          var cacheForm = item.quene.splice(j, 1);
                          if (item.quene.length == 0) {
                              this.cachedLayoutQuene.splice(i, 1);
                          }
                          return item.quene[j];
                      }
                      break;
                  }
              }
              return null;
          };
          FormFactory.prototype.addForm2Quene = function (name, formNode, formLogic) {
              var idx = -1;
              for (var i = 0; i < this.layoutQuene.length; i++) {
                  var item = this.layoutQuene[i];
                  if (item.formName == name) {
                      idx = i;
                      break;
                  }
              }
              if (idx != -1) {
                  var kv = new LayoutFormKeyValue();
                  kv.formNode = formNode;
                  kv.formLogic = formLogic;
                  this.layoutQuene[idx].quene.push(kv);
              }
              else {
                  var quene = new LayoutFormQuene();
                  quene.formName = name;
                  var kv = new LayoutFormKeyValue();
                  kv.formNode = formNode;
                  kv.formLogic = formLogic;
                  quene.quene.push(kv);
                  this.layoutQuene.push(quene);
              }
          };
          FormFactory.prototype.hasFormInQuene = function (name) {
              var idx = -1;
              for (var i = 0; i < this.layoutQuene.length; i++) {
                  var item = this.layoutQuene[i];
                  if (item.formName == name) {
                      idx = i;
                      break;
                  }
              }
              return idx != -1;
          };
          FormFactory.prototype.recoverFormLogic = function (item, idx, callback, num) {
              var _this = this;
              if (num === void 0) {
                  num = 1;
              }
              var formKVs = item.quene.splice(idx, num);
              if (item.quene.length == 0) {
                  for (var i = 0; i < this.layoutQuene.length; i++) {
                      if (item == this.layoutQuene[i]) {
                          this.layoutQuene.splice(i, 1);
                          break;
                      }
                  }
              }
              formKVs.forEach(function (formKV) {
                  _this.addFrom2Cached(item.formName, formKV);
              });
              if (callback) {
                  if (formKVs.length == 1)
                      callback(formKVs[0]);
                  else
                      callback(formKVs);
              }
          };
          FormFactory.prototype.removeFormByLogic = function (logic, callback) {
              for (var i = 0; i < this.layoutQuene.length; i++) {
                  var item = this.layoutQuene[i];
                  for (var j = 0; j < item.quene.length; j++) {
                      if (item.quene[j].formLogic == logic) {
                          this.recoverFormLogic(item, j, callback);
                          break;
                      }
                  }
              }
          };
          FormFactory.prototype.removeFormFromQuene = function (name, formKV, callback) {
              for (var i = 0; i < this.layoutQuene.length; i++) {
                  var item = this.layoutQuene[i];
                  if (item.formName == name) {
                      for (var j = 0; j < item.quene.length; j++) {
                          if (item.quene[j] == formKV) {
                              this.recoverFormLogic(item, j, callback);
                              break;
                          }
                      }
                      break;
                  }
              }
          };
          FormFactory.prototype.removeAllFormFromQuene = function (name, callback) {
              for (var i = 0; i < this.layoutQuene.length; i++) {
                  var item = this.layoutQuene[i];
                  if (item.formName == name) {
                      for (var j = 0; j < item.quene.length; j++) {
                          this.recoverFormLogic(item, j, callback);
                          j--;
                      }
                      break;
                  }
              }
          };
          FormFactory.prototype.getKVByName = function (name, formNode) {
              var kvs = this.getKVsByName(name);
              if (kvs) {
                  for (var i = 0; i < kvs.length; i++) {
                      if (kvs[i].formNode == formNode) {
                          return kvs[i];
                      }
                  }
              }
          };
          FormFactory.prototype.getKVsByName = function (name) {
              var idx = -1;
              for (var i = 0; i < this.layoutQuene.length; i++) {
                  var item = this.layoutQuene[i];
                  if (item.formName == name) {
                      idx = i;
                      break;
                  }
              }
              if (idx != -1) {
                  return this.layoutQuene[idx].quene;
              }
              return [];
          };
          FormFactory.prototype.setLayout = function (res) {
              this.mCachedLayout = res;
          };
          FormFactory.prototype.getLayout = function (callback) {
              var _this = this;
              if (!this.mCachedLayout) {
                  this.mLayoutQuene.push(callback);
                  if (this.mLayoutQuene.length == 1)
                      moosnow.http.request(this.layoutUrl, {}, "GET", function (res) {
                          _this.mCachedLayout = res;
                          console.log("getLayout call num ", _this.mLayoutQuene.length);
                          _this.mLayoutQuene.forEach(function (item) {
                              item(res);
                          });
                          _this.mLayoutQuene = [];
                      });
              }
              else
                  callback(this.mCachedLayout);
          };
          FormFactory.prototype.setTemplates = function (res) {
              this.mCachedTemplates = res;
          };
          FormFactory.prototype.getTemplates = function (callback) {
              var _this = this;
              if (!this.mCachedTemplates) {
                  this.mTemplatesQuene.push(callback);
                  if (this.mTemplatesQuene.length == 1)
                      moosnow.http.request(this.templatesUrl, {}, "GET", function (res) {
                          _this.mCachedTemplates = res;
                          _this.mTemplatesQuene.forEach(function (item) {
                              item(res);
                          });
                          _this.mTemplatesQuene = [];
                      });
              }
              else
                  callback(this.mCachedTemplates);
          };
          FormFactory.prototype.getTemplate = function (tempName, callback) {
              this.getTemplates(function (res) {
                  var tempCfg = res[tempName];
                  if (tempCfg) {
                      var formCfg = NodeAttribute.parse(tempCfg);
                      callback(formCfg);
                  }
              });
          };
          FormFactory.prototype.showForm = function (options) { };
          FormFactory.prototype.hideFormByLogic = function (logic, callback) { };
          FormFactory.prototype.hideForm = function (name, formNode, formData) { };
          FormFactory.prototype.createNodeByTemplate = function (name, tempLogic, tempData, parent, remoteLayout, layoutOptions) {
              if (remoteLayout === void 0) {
                  remoteLayout = true;
              }
              if (layoutOptions === void 0) {
                  layoutOptions = null;
              }
          };
          FormFactory.prototype.hideNodeByTemplate = function (name, formNode, formData) { };
          return FormFactory;
      })();
      var NodeHelper = (function (_super) {
          __extends(NodeHelper, _super);
          function NodeHelper() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Object.defineProperty(NodeHelper, "canvasNode", {
              get: function () {
                  return cc.Canvas.instance.node;
              },
              enumerable: true,
              configurable: true,
          });
          NodeHelper.getNodeName = function () {
              this.nodeNum++;
              return "createNode" + this.nodeNum;
          };
          NodeHelper.createNode = function () { };
          NodeHelper.createImage = function (parent, imgCfg) { };
          NodeHelper.createText = function (parent, textCfg) { };
          NodeHelper.changeSrc = function (image, imgCfg) { };
          NodeHelper.createMask = function (parent) { };
          NodeHelper.nodeNum = 0;
          return NodeHelper;
      })(BaseModule);
      var BaseForm = (function (_super) {
          __extends(BaseForm, _super);
          function BaseForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.mOwner = null;
              _this.formComponents = [];
              _this.mNodeMap = [];
              return _this;
          }
          Object.defineProperty(BaseForm.prototype, "node", {
              get: function () {
                  if (this.mOwner)
                      return this.mOwner;
                  else
                      return {};
              },
              set: function (value) {
                  this.mOwner = value;
              },
              enumerable: true,
              configurable: true,
          });
          BaseForm.prototype.start = function () { };
          Object.defineProperty(BaseForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          BaseForm.prototype.initForm = function (node) {
              this.node = node;
              for (var v in this) {
                  if (!Common.isFunction(this[v])) {
                      var findNode = this.findNodeByName(node, v);
                      if (findNode)
                          this[v] = findNode;
                      this.mNodeMap.push(v);
                  }
              }
              for (var i = 0; i < this.formComponents.length; i++) {
                  this.formComponents[i].initForm(node);
              }
          };
          BaseForm.prototype.disable = function () {
              var _this = this;
              this.node = null;
              this.mNodeMap.forEach(function (v) {
                  _this[v] = null;
              });
              this.formComponents.forEach(function (item) {
                  item.disable();
              });
              this.formComponents = [];
          };
          BaseForm.prototype.findNodeByName = function (node, attrName) {
              return null;
          };
          BaseForm.prototype.willShow = function (data) {
              this.mFormData = data;
              if (data && this.node) {
                  if (data.x)
                      this.node.x = data.x;
                  if (data.y)
                      this.node.y = data.y;
                  if (data.zIndex)
                      this.node.zIndex = data.zIndex;
              }
              this.formComponents.forEach(function (item) {
                  item.willShow(data);
              });
          };
          BaseForm.prototype.onShow = function (data) {
              this.formComponents.forEach(function (item) {
                  item.onShow(data);
              });
          };
          BaseForm.prototype.willHide = function (data) {
              this.formComponents.forEach(function (item) {
                  item.willHide(data);
              });
          };
          BaseForm.prototype.onHide = function (data) {
              this.formComponents.forEach(function (item) {
                  item.onHide(data);
              });
          };
          BaseForm.prototype.hideForm = function () {
              moosnow.form.formFactory.hideFormByLogic(this);
          };
          return BaseForm;
      })(BaseModule);
      var NodeEvent = (function (_super) {
          __extends(NodeEvent, _super);
          function NodeEvent() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Object.defineProperty(NodeEvent, "TOUCH_START", {
              get: function () {
                  return "";
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(NodeEvent, "TOUCH_END", {
              get: function () {
                  return "";
              },
              enumerable: true,
              configurable: true,
          });
          return NodeEvent;
      })(BaseForm);
      var CocosNodeEvent = (function (_super) {
          __extends(CocosNodeEvent, _super);
          function CocosNodeEvent() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Object.defineProperty(CocosNodeEvent, "TOUCH_START", {
              get: function () {
                  return cc.Node.EventType.TOUCH_START;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(CocosNodeEvent, "TOUCH_END", {
              get: function () {
                  return cc.Node.EventType.TOUCH_END;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(CocosNodeEvent, "TOUCH_CANCEL", {
              get: function () {
                  return cc.Node.EventType.TOUCH_CANCEL;
              },
              enumerable: true,
              configurable: true,
          });
          return CocosNodeEvent;
      })(NodeEvent);
      var LayoutAttribute = (function (_super) {
          __extends(LayoutAttribute, _super);
          function LayoutAttribute() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.layoutType = cc.Layout.Type.GRID;
              _this.resizeMode = cc.Layout.ResizeMode.CONTAINER;
              _this.startAxis = cc.Layout.AxisDirection.HORIZONTAL;
              _this.left = 30;
              _this.top = 30;
              _this.right = 30;
              _this.bottom = 30;
              _this.spacingX = 30;
              _this.spacingY = 30;
              return _this;
          }
          LayoutAttribute.parse = function (json) {
              var retValue = __assign(__assign({}, new LayoutAttribute()), json);
              retValue.layoutType = NodeAttribute.convertStr2Enum(cc.Layout.Type, json.layoutType, cc.Layout.Type.GRID);
              retValue.resizeMode = NodeAttribute.convertStr2Enum(cc.Layout.ResizeMode, json.resizeMode, cc.Layout.ResizeMode.CONTAINER);
              retValue.startAxis = NodeAttribute.convertStr2Enum(cc.Layout.AxisDirection, json.startAxis, cc.Layout.AxisDirection.HORIZONTAL);
              return retValue;
          };
          return LayoutAttribute;
      })(NodeAttribute);
      var WidgetAttribute = (function (_super) {
          __extends(WidgetAttribute, _super);
          function WidgetAttribute(isAlignLeft, isAlignTop, isAlignRight, isAlignBottom, left, top, right, bottom) {
              if (isAlignLeft === void 0) {
                  isAlignLeft = false;
              }
              if (isAlignTop === void 0) {
                  isAlignTop = false;
              }
              if (isAlignRight === void 0) {
                  isAlignRight = false;
              }
              if (isAlignBottom === void 0) {
                  isAlignBottom = false;
              }
              if (left === void 0) {
                  left = 0;
              }
              if (top === void 0) {
                  top = 0;
              }
              if (right === void 0) {
                  right = 0;
              }
              if (bottom === void 0) {
                  bottom = 0;
              }
              var _this = _super.call(this) || this;
              _this.isAlignLeft = false;
              _this.isAlignTop = false;
              _this.isAlignRight = false;
              _this.isAlignBottom = false;
              _this.left = 0;
              _this.top = 0;
              _this.right = 0;
              _this.bottom = 0;
              _this.isAlignLeft = isAlignLeft;
              _this.isAlignTop = isAlignTop;
              _this.isAlignRight = isAlignRight;
              _this.isAlignBottom = isAlignBottom;
              _this.left = left;
              _this.top = top;
              _this.right = right;
              _this.bottom = bottom;
              return _this;
          }
          WidgetAttribute.parse = function (json) {
              return __assign(__assign({}, new WidgetAttribute()), json);
          };
          return WidgetAttribute;
      })(NodeAttribute);
      var ChangeQuene = (function () {
          function ChangeQuene() { }
          return ChangeQuene;
      })();
      var CocosNodeHelper = (function (_super) {
          __extends(CocosNodeHelper, _super);
          function CocosNodeHelper() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Object.defineProperty(CocosNodeHelper, "canvasNode", {
              get: function () {
                  if (!this.mRootNode)
                      this.mRootNode = cc.Canvas.instance.node;
                  return cc.Canvas.instance.node;
              },
              set: function (value) {
                  this.mRootNode = value;
              },
              enumerable: true,
              configurable: true,
          });
          CocosNodeHelper.createNode = function (name, nodeCfg) {
              if (!name) {
                  name = this.getNodeName();
              }
              var node = new cc.Node();
              node.name = name;
              if (nodeCfg) {
                  node.active = nodeCfg.active;
                  node.zIndex = this.convertIndex(nodeCfg.zIndex);
                  if (nodeCfg.stopPropagation)
                      this.addStopPropagation(node);
              }
              return node;
          };
          CocosNodeHelper.createImage = function (parent, imgCfg) {
              var node = this.createNode(imgCfg.name, imgCfg);
              var sprite = node.addComponent(cc.Sprite);
              sprite.type = cc.Sprite.Type.SIMPLE;
              sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
              sprite.trim = true;
              node.width = this.convertWidth(imgCfg.width);
              node.height = this.convertHeight(imgCfg.height);
              this.changeSrc(node, imgCfg, function () {
              });
              node.x = imgCfg.x;
              node.y = imgCfg.y;
              parent.addChild(node);
              return node;
          };
          CocosNodeHelper.colorHex2RGB = function (hexColor) {
              if (hexColor.substr(0, 1) == "#")
                  hexColor = hexColor.substring(1);
              hexColor = hexColor.toLowerCase();
              var b = new Array();
              for (var x = 0; x < 3; x++) {
                  b[0] = hexColor.substr(x * 2, 2);
                  b[3] = "0123456789abcdef";
                  b[1] = b[0].substr(0, 1);
                  b[2] = b[0].substr(1, 1);
                  b[20 + x] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2]);
              }
              return new cc.Color(b[20], b[21], b[22]);
          };
          CocosNodeHelper.createText = function (parent, textCfg) {
              var node = this.createNode(textCfg.name, textCfg);
              node.color = this.colorHex2RGB(textCfg.color);
              var txt = node.addComponent(cc.Label);
              txt.enableWrapText = false;
              txt.overflow = cc.Label.Overflow.SHRINK;
              txt.fontSize = textCfg.fontSize;
              txt.lineHeight = textCfg.lineHeight;
              var horizontalAlign = cc.Label.HorizontalAlign[textCfg.horizontalAlign.toUpperCase()];
              txt.horizontalAlign = horizontalAlign ? horizontalAlign : cc.Label.HorizontalAlign.CENTER;
              txt.verticalAlign = cc.Label.VerticalAlign.CENTER;
              txt.useSystemFont = true;
              if (textCfg.text)
                  txt.string = textCfg.text;
              node.x = textCfg.x;
              node.y = textCfg.y;
              node.width = this.convertWidth(textCfg.width);
              node.height = this.convertWidth(textCfg.height);
              parent.addChild(node);
              return node;
          };
          CocosNodeHelper.createLayout = function (parent, layoutCfg) {
              var node = this.createNode(layoutCfg.name, layoutCfg);
              var layout = node.addComponent(cc.Layout);
              layout.paddingLeft = layoutCfg.left;
              layout.paddingTop = layoutCfg.top;
              layout.paddingRight = layoutCfg.right;
              layout.paddingBottom = layoutCfg.bottom;
              layout.spacingX = layoutCfg.spacingX;
              layout.spacingY = layoutCfg.spacingY;
              layout.startAxis = layoutCfg.startAxis;
              node.x = layoutCfg.x;
              node.y = layoutCfg.y;
              node.width = this.convertWidth(layoutCfg.width);
              node.height = this.convertWidth(layoutCfg.height);
              parent.addChild(node);
              return node;
          };
          CocosNodeHelper.createProgressBar = function (parent, progressBarCfg) {
              var node = this.createNode(progressBarCfg.name, progressBarCfg);
              var progressBar = node.addComponent(cc.ProgressBar);
              var sprite = node.addComponent(cc.Sprite);
              this.changeSrc(node, progressBarCfg);
              progressBar.mode = cc.ProgressBar.Mode.HORIZONTAL;
              progressBar.totalLength = 300;
              progressBar.progress = 0.1;
              node.x = progressBarCfg.x;
              node.y = progressBarCfg.y;
              node.width = this.convertWidth(progressBarCfg.width);
              node.height = this.convertWidth(progressBarCfg.height);
              if (progressBarCfg.child && progressBarCfg.child.length > 0) {
                  var bar = this.createImage(node, NodeAttribute.parse(progressBarCfg.child[0]));
                  progressBar.barSprite = bar.getComponent(cc.Sprite);
              }
              parent.addChild(node);
              return node;
          };
          CocosNodeHelper.createScroll = function (parent, scrollCfg) { };
          CocosNodeHelper.createView = function (parent, viewCfg) {
              var container = this.createImage(parent, viewCfg);
              container.width = this.convertWidth(viewCfg.scroll.width);
              container.height = this.convertHeight(viewCfg.scroll.height);
              if (viewCfg.widget) {
                  this.createWidget(container, WidgetAttribute.parse(viewCfg.widget));
              }
              var scrollNode = this.createNode(viewCfg.name + "_scroll", viewCfg);
              var scroll = scrollNode.addComponent(cc.ScrollView);
              scroll.horizontal = !!viewCfg.scroll.horizontal;
              scroll.vertical = !!viewCfg.scroll.vertical;
              scroll.horizontalScrollBar = null;
              scroll.verticalScrollBar = null;
              scrollNode.width = this.convertWidth(viewCfg.scroll.width);
              scrollNode.height = this.convertHeight(viewCfg.scroll.height);
              container.addChild(scrollNode);
              if (viewCfg.layout.widget) {
                  this.createWidget(scrollNode, viewCfg.layout.widget);
              }
              var view = this.createNode(viewCfg.name + "_view");
              view.addComponent(cc.Mask);
              this.createWidget(view, new WidgetAttribute(true, true, true, true, 0, 0, 0, 0));
              scrollNode.addChild(view);
              viewCfg.layout.name = viewCfg.name + "_layout";
              var layoutNode = this.createLayout(view, LayoutAttribute.parse(viewCfg.layout));
              layoutNode.width = this.convertWidth(viewCfg.layout.width);
              layoutNode.height = this.convertHeight(viewCfg.layout.height);
              scroll.content = layoutNode;
              return {
                  viewContainer: container,
                  layoutNode: layoutNode,
              };
          };
          CocosNodeHelper.createWidget = function (view, widgetCfg) {
              var widget = view.addComponent(cc.Widget);
              widget.isAlignLeft = widgetCfg.isAlignLeft;
              widget.isAlignTop = widgetCfg.isAlignTop;
              widget.isAlignRight = widgetCfg.isAlignRight;
              widget.isAlignBottom = widgetCfg.isAlignBottom;
              widget.left = widgetCfg.left;
              widget.top = widgetCfg.top;
              widget.right = widgetCfg.right;
              widget.bottom = widgetCfg.bottom;
              widget.updateAlignment();
              return view;
          };
          CocosNodeHelper.addToSrcQuene = function (image, imgCfg, callback) {
              var existsCall = false;
              for (var i = 0; i < this.srcQuene.length; i++) {
                  if (this.srcQuene[i].node == image) {
                      existsCall = true;
                      this.srcQuene[i] = {
                          node: image,
                          imgCfg: imgCfg,
                          callback: callback,
                      };
                      break;
                  }
              }
              if (!existsCall) {
                  this.srcQuene.push({
                      node: image,
                      imgCfg: imgCfg,
                      callback: callback,
                  });
              }
          };
          CocosNodeHelper.getSrcQuene = function (image) {
              var retValue = null;
              for (var i = 0; i < this.srcQuene.length; i++) {
                  if (this.srcQuene[i].node == image) {
                      retValue = this.srcQuene[i];
                      break;
                  }
              }
              return retValue;
          };
          CocosNodeHelper.applySrcQuene = function (image, tex, imgCfg) {
              var queneItem = this.getSrcQuene(image);
              if (queneItem && queneItem.imgCfg == imgCfg) {
                  this.updateSprite(image, tex);
                  this.checkSize(image, this.convertWidth(queneItem.imgCfg.width), this.convertHeight(queneItem.imgCfg.height));
                  this.setSpriteGrid(queneItem.imgCfg, image);
                  this.clearSrcQuene(image);
              }
          };
          CocosNodeHelper.clearSrcQuene = function (image) {
              for (var i = 0; i < this.srcQuene.length; i++) {
                  if (this.srcQuene[i].node == image) {
                      this.srcQuene.splice(i, 1);
                      i--;
                  }
              }
          };
          CocosNodeHelper.changeSrc = function (image, imgCfg, callback) {
              var _this = this;
              var sprite;
              if (image instanceof cc.Node)
                  sprite = image.getComponent(cc.Sprite);
              else
                  sprite = image;
              this.addToSrcQuene(sprite, imgCfg, callback);
              if (imgCfg.url) {
                  var isRemote = imgCfg.url.indexOf("http") != -1;
                  if (isRemote)
                      cc.loader.load(imgCfg.url, function (err, tex) {
                          if (err) {
                              console.log(" cc.loader.load ", err);
                              return;
                          }
                          _this.applySrcQuene(sprite, tex, imgCfg);
                      });
                  else {
                      var res = cc.loader.getRes(imgCfg.url);
                      if (res) {
                          this.applySrcQuene(sprite, res, imgCfg);
                          return;
                      }
                      cc.loader.loadRes(imgCfg.url, cc.Texture2D, function (err, tex) {
                          _this.applySrcQuene(sprite, tex, imgCfg);
                      });
                  }
              }
          };
          CocosNodeHelper.updateSprite = function (sprite, tex) {
              var spriteFrame = new cc.SpriteFrame(tex);
              sprite.spriteFrame = spriteFrame;
          };
          CocosNodeHelper.checkSize = function (sprite, width, height) {
              if (sprite.node.width == width && sprite.node.height == height) {
                  this.unschedule(this.checkSize);
                  return;
              }
              sprite.node.width = width;
              sprite.node.height = height;
          };
          CocosNodeHelper.setSpriteGrid = function (imgCfg, sprite) {
              if (imgCfg.grid) {
                  sprite.type = cc.Sprite.Type.SLICED;
                  sprite.spriteFrame.insetLeft = imgCfg.grid.left;
                  sprite.spriteFrame.insetTop = imgCfg.grid.top;
                  sprite.spriteFrame.insetRight = imgCfg.grid.right;
                  sprite.spriteFrame.insetBottom = imgCfg.grid.bottom;
              }
          };
          CocosNodeHelper.changeText = function (text, msg) {
              if (!text) {
                  return;
              }
              var lab = text.getComponent(cc.Label);
              if (lab) {
                  lab.string = msg;
              }
          };
          CocosNodeHelper.createMask = function (parent, maskUrl) {
              if (maskUrl === void 0) {
                  maskUrl = undefined;
              }
              var skin = moosnow.form.formFactory.maskUrl;
              var mask = this.createNode("img_mask");
              var sprite = mask.addComponent(cc.Sprite);
              this.changeSrc(mask, { url: skin }, function () { });
              parent.addChild(mask);
              mask.zIndex = -1;
              this.addStopPropagation(mask);
          };
          CocosNodeHelper.addStopPropagation = function (node) {
              if (Common.isOnlyUI && Common.isPC)
                  return;
              if (node)
                  node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
          };
          CocosNodeHelper.removeStopPropagation = function (node) {
              if (node)
                  node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
          };
          CocosNodeHelper.onMaskMouseDown = function (e) {
              console.log("阻止事件传递, node name ", e.getCurrentTarget().name);
              e.stopPropagation();
          };
          CocosNodeHelper.findNodeByName = function (node, attrName) {
              var targetNode = null;
              for (var i = 0; i < node.childrenCount; i++) {
                  var child = node.children[i];
                  if (child.name == attrName) {
                      targetNode = child;
                      break;
                  }
                  else {
                      var node_1 = this.findNodeByName(child, attrName);
                      if (node_1) {
                          targetNode = node_1;
                          break;
                      }
                  }
              }
              return targetNode;
          };
          CocosNodeHelper.convertWidth = function (width) {
              var retValue = this.canvasNode.width;
              if (!isNaN(width)) {
                  return parseInt("" + width);
              }
              return retValue;
          };
          CocosNodeHelper.convertHeight = function (height) {
              var retValue = this.canvasNode.height;
              if (!isNaN(height)) {
                  return parseInt("" + height);
              }
              return retValue;
          };
          CocosNodeHelper.convertIndex = function (zindex) {
              if (!isNaN(zindex)) {
                  return parseInt("" + zindex);
              }
              return 0;
          };
          CocosNodeHelper.srcQuene = [];
          return CocosNodeHelper;
      })(NodeHelper);
      var TextAttribute = (function (_super) {
          __extends(TextAttribute, _super);
          function TextAttribute() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.horizontalAlign = "center";
              _this.color = "#ffffff";
              _this.fontSize = 32;
              _this.lineHeight = 32;
              _this.text = "";
              return _this;
          }
          TextAttribute.parse = function (json) {
              return __assign(__assign({}, new TextAttribute()), json);
          };
          return TextAttribute;
      })(NodeAttribute);
      var ProgressBarAttribute = (function (_super) {
          __extends(ProgressBarAttribute, _super);
          function ProgressBarAttribute() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.mode = cc.ProgressBar.Mode.HORIZONTAL;
              return _this;
          }
          ProgressBarAttribute.parse = function (json) {
              return __assign(__assign({}, new ProgressBarAttribute()), json);
          };
          return ProgressBarAttribute;
      })(NodeAttribute);
      var ScrollAttribute = (function (_super) {
          __extends(ScrollAttribute, _super);
          function ScrollAttribute() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.horizontal = true;
              _this.vertical = true;
              return _this;
          }
          return ScrollAttribute;
      })(NodeAttribute);
      var ViewAttribute = (function (_super) {
          __extends(ViewAttribute, _super);
          function ViewAttribute() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.scroll = new ScrollAttribute();
              _this.layout = new LayoutAttribute();
              return _this;
          }
          ViewAttribute.parse = function (json) {
              return __assign(__assign({}, new ViewAttribute()), json);
          };
          return ViewAttribute;
      })(NodeAttribute);
      var LayoutType = (function () {
          function LayoutType() { }
          LayoutType.image = "image";
          LayoutType.progressBar = "progressBar";
          LayoutType.text = "text";
          LayoutType.layout = "layout";
          LayoutType.view = "view";
          LayoutType.widget = "widget";
          return LayoutType;
      })();
      var CocosFormFactory = (function (_super) {
          __extends(CocosFormFactory, _super);
          function CocosFormFactory() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          CocosFormFactory.prototype._createChild = function (parent, children) {
              for (var i = 0; i < children.length; i++) {
                  var jsonCfg = children[i];
                  var node = this.createNode(parent, jsonCfg);
              }
          };
          CocosFormFactory.prototype.createNode = function (parent, jsonCfg) {
              var node = null;
              var nodeCfg = null;
              if (jsonCfg.type == LayoutType.progressBar) {
                  nodeCfg = ProgressBarAttribute.parse(jsonCfg);
                  node = CocosNodeHelper.createProgressBar(parent, nodeCfg);
                  if (nodeCfg.child && nodeCfg.child.length > 1) {
                      nodeCfg.child.splice(0, 1);
                      this._createChild(node, nodeCfg.child);
                  }
              }
              else if (jsonCfg.type == LayoutType.view) {
                  nodeCfg = ViewAttribute.parse(jsonCfg);
                  var viewRet = CocosNodeHelper.createView(parent, nodeCfg);
                  node = viewRet.viewContainer;
                  if (nodeCfg.child && nodeCfg.child.length > 0) {
                      this._createChild(node, nodeCfg.child);
                  }
              }
              else {
                  if (jsonCfg.type == LayoutType.text) {
                      nodeCfg = TextAttribute.parse(jsonCfg);
                      node = CocosNodeHelper.createText(parent, nodeCfg);
                  }
                  else if (jsonCfg.type == LayoutType.layout) {
                      nodeCfg = LayoutAttribute.parse(jsonCfg);
                      node = CocosNodeHelper.createLayout(parent, nodeCfg);
                  }
                  else if (jsonCfg.type == LayoutType.widget) {
                      nodeCfg = WidgetAttribute.parse(jsonCfg);
                      node = CocosNodeHelper.createWidget(parent, nodeCfg);
                  }
                  else {
                      nodeCfg = NodeAttribute.parse(jsonCfg);
                      node = CocosNodeHelper.createImage(parent, nodeCfg);
                  }
                  if (jsonCfg.widget) {
                      CocosNodeHelper.createWidget(node, WidgetAttribute.parse(jsonCfg.widget));
                  }
                  if (nodeCfg.child && nodeCfg.child.length > 0) {
                      this._createChild(node, nodeCfg.child);
                  }
              }
              return node;
          };
          CocosFormFactory.prototype._createUINode = function (formCfg, formLogic, formData, parent) {
              if (!parent)
                  parent = CocosNodeHelper.canvasNode;
              var formNode = this.createNode(parent, formCfg);
              if (formCfg.isMask)
                  CocosNodeHelper.createMask(formNode, formCfg.maskUrl);
              var logic = new formLogic();
              logic.initForm(formNode);
              this.logicShow(logic, formNode, formData);
              this.addForm2Quene(formCfg.name, formNode, logic);
              return formNode;
          };
          CocosFormFactory.prototype.hideFormByLogic = function (logic, formData) {
              var _this = this;
              this.removeFormByLogic(logic, function (formKV) {
                  if (formKV instanceof Array) {
                      formKV.forEach(function (item) {
                          _this.logicHide(item.formLogic, item.formNode, formData);
                      });
                  }
                  else {
                      _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                  }
              });
          };
          CocosFormFactory.prototype.logicShow = function (formLogic, formNode, formData) {
              if (Common.isOnlyUI && Common.isPC) {
                  console.warn("UI编辑模式，取消业务逻辑");
                  return;
              }
              formLogic.willShow(formData);
              formNode.active = true;
              formLogic.onShow(formData);
          };
          CocosFormFactory.prototype.logicHide = function (formLogic, formNode, formData) {
              if (Common.isOnlyUI && Common.isPC) {
                  console.warn("UI编辑模式，取消业务逻辑");
                  return;
              }
              formLogic.willHide(formData);
              formNode.active = true;
              formLogic.onHide(formData);
              formNode.x = 0;
              formNode.y = 0;
              formNode.removeFromParent();
          };
          CocosFormFactory.prototype.hideForm = function (name, formNode, formData) {
              var _this = this;
              if (formNode) {
                  this.removeFormFromQuene(name, formNode, function (formKV) {
                      _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                  });
              }
              else
                  this.removeAllFormFromQuene(name, function (formKV) {
                      _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                  });
          };
          CocosFormFactory.prototype.showForm = function (options) {
              var _this = this;
              if (!!options.showOnce) {
                  if (this.hasFormInQuene(options.name)) {
                      return;
                  }
              }
              if (!options.parent)
                  options.parent = CocosNodeHelper.canvasNode;
              var formKV = this.getFormFromCached(options.name);
              if (formKV) {
                  options.parent.addChild(formKV.formNode);
                  this.logicShow(formKV.formLogic, formKV.formNode, options.formData);
                  this.addForm2Quene(options.name, formKV.formNode, formKV.formLogic);
              }
              else {
                  if (options.remoteLayout) {
                      this.getLayout(function (res) {
                          if (res[options.name]) {
                              var formCfg = res[options.name];
                              formCfg.name = options.name;
                              var node = _this._createUINode(formCfg, options.formLogic, options.formData, options.parent);
                              if (options.callback)
                                  options.callback(node);
                          }
                      });
                  }
                  else {
                      var node = this._createUINode(options.layoutOptions, options.formLogic, options.formData);
                      if (options.callback)
                          options.callback(node);
                  }
              }
          };
          CocosFormFactory.prototype.createNodeByTemplate = function (name, tempLogic, tempData, parent, remoteLayout, layoutOptions) {
              var _this = this;
              if (remoteLayout === void 0) {
                  remoteLayout = true;
              }
              if (layoutOptions === void 0) {
                  layoutOptions = null;
              }
              if (!parent)
                  parent = CocosNodeHelper.canvasNode;
              var formKV = this.getFormFromCached(name);
              if (formKV) {
                  parent.addChild(formKV.formNode);
                  this.logicShow(formKV.formLogic, formKV.formNode, tempData);
                  this.addForm2Quene(name, formKV.formNode, formKV.formLogic);
              }
              else {
                  if (remoteLayout) {
                      this.getTemplates(function (res) {
                          var tempCfg = res[name];
                          if (tempCfg) {
                              var formCfg = NodeAttribute.parse(tempCfg);
                              formCfg.name = name;
                              var node = _this._createUINode(formCfg, tempLogic, tempData, parent);
                          }
                      });
                  }
                  else {
                      var node = this._createUINode(layoutOptions, tempLogic, tempData);
                  }
              }
          };
          CocosFormFactory.prototype.hideNodeByTemplate = function (name, formNode, formData) {
              var _this = this;
              if (formNode) {
                  this.removeFormFromQuene(name, formNode, function (formKV) {
                      _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                  });
              }
              else
                  this.removeAllFormFromQuene(name, function (formKV) {
                      _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                  });
          };
          CocosFormFactory.prototype.getTemplate = function (tempName, callback) {
              _super.prototype.getTemplate.call(this, tempName, function (tempCfg) {
                  tempCfg.width = CocosNodeHelper.convertWidth(tempCfg.width);
                  tempCfg.height = CocosNodeHelper.convertHeight(tempCfg.height);
                  if (callback)
                      callback(tempCfg);
              });
          };
          return CocosFormFactory;
      })(FormFactory);
      var CocosBaseForm = (function (_super) {
          __extends(CocosBaseForm, _super);
          function CocosBaseForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.mDowning = false;
              _this.mClickQuene = {};
              return _this;
          }
          CocosBaseForm.prototype.downAnim = function (node) {
              node.scale = 1;
              node.runAction(cc.sequence(cc.scaleTo(0.1, 0.7, 0.7), cc.callFunc(function () {
              }, this)));
          };
          CocosBaseForm.prototype.upAnim = function (node, callback) {
              var _this = this;
              node.stopAllActions();
              node.scale = 0.7;
              node.runAction(cc.sequence(cc.scaleTo(0.1, 1, 1), cc.callFunc(function () {
                  _this.mDowning = false;
                  if (callback)
                      callback();
              }, this)));
          };
          CocosBaseForm.prototype.getClickQueneItem = function (e) {
              var queneId = e.getCurrentTarget().uuid;
              var retVal = this.mClickQuene[queneId];
              if (retVal)
                  return retVal;
              else
                  return null;
          };
          CocosBaseForm.prototype.setClickQueneItem = function (e, clicking) {
              var queneId = e.getCurrentTarget().uuid;
              if (this.mClickQuene[queneId])
                  this.mClickQuene[queneId].clicking = clicking;
          };
          CocosBaseForm.prototype.onTouchStart = function (e) {
              var quene = this.getClickQueneItem(e);
              if (!quene)
                  return;
              if (quene.once && quene.clicking)
                  return;
              moosnow.audio.playClickEffect();
              this.downAnim(quene.node);
              if (this.mDowning)
                  return;
              this.mDowning = true;
          };
          CocosBaseForm.prototype.onTouchEnd = function (e) {
              var _this = this;
              var quene = this.getClickQueneItem(e);
              if (!quene)
                  return;
              if (quene.once && quene.clicking)
                  return;
              this.setClickQueneItem(e, true);
              console.log("onTouchEnd");
              this.upAnim(quene.node, function () {
                  if (quene && quene.callback)
                      quene.callback();
                  _this.setClickQueneItem(e, false);
              });
              if (quene && quene.stopPropagation)
                  e.stopPropagation();
          };
          CocosBaseForm.prototype.onTouchCancel = function (e) {
              var _this = this;
              var quene = this.getClickQueneItem(e);
              if (!quene)
                  return;
              console.log("onTouchCancel");
              this.upAnim(quene.node, function () {
                  _this.setClickQueneItem(e, false);
              });
          };
          CocosBaseForm.prototype.applyClickAnim = function (node, callback, stopPropagation, once) {
              if (stopPropagation === void 0) {
                  stopPropagation = false;
              }
              if (once === void 0) {
                  once = true;
              }
              if (Common.isOnlyUI && Common.isPC)
                  return;
              if (node && node.uuid) {
                  this.mClickQuene[node.uuid] = {
                      node: node,
                      stopPropagation: stopPropagation,
                      callback: callback,
                      once: once,
                      clicking: false,
                  };
                  node.on(CocosNodeEvent.TOUCH_START, this.onTouchStart, this);
                  node.on(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
                  node.on(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
              }
              else {
                  console.log("缺少对象，无法绑定事件");
              }
          };
          CocosBaseForm.prototype.removeClickAnim = function (node) {
              if (node && node.uuid) {
                  this.mClickQuene[node.uuid] = null;
                  delete this.mClickQuene[node.uuid];
                  node.off(CocosNodeEvent.TOUCH_START, this.onTouchStart, this);
                  node.off(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
                  node.off(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
              }
          };
          CocosBaseForm.prototype.findNodeByName = function (node, attrName) {
              return CocosNodeHelper.findNodeByName(node, attrName);
          };
          return CocosBaseForm;
      })(BaseForm);
      var CocosEndForm = (function (_super) {
          __extends(CocosEndForm, _super);
          function CocosEndForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.btnBack = null;
              _this.btnContinue = null;
              return _this;
          }
          Object.defineProperty(CocosEndForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosEndForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnBack, function () {
                  _this.onBack();
              });
              this.applyClickAnim(this.btnContinue, function () {
                  _this.onBack();
              });
          };
          CocosEndForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnBack);
          };
          CocosEndForm.prototype.willShow = function (data) {
              _super.prototype.willShow.call(this, data);
              moosnow.platform.stopRecord(function () {
                  var sys = moosnow.platform.getSystemInfoSync();
                  moosnow.http.getAllConfig(function (res) {
                      moosnow.platform.showShareButton({
                          left: sys.windowWidth - res.shareBtnWidth,
                          top: sys.windowHeight - 70,
                      });
                  });
                  moosnow.platform.hideBanner();
                  moosnow.platform.hideShareButton();
              });
          };
          CocosEndForm.prototype.onShow = function (data) {
              this.addListener();
          };
          CocosEndForm.prototype.willHide = function () {
              this.removeListener();
          };
          CocosEndForm.prototype.onBack = function () {
              this.hideForm();
              if (this.FormData.callback)
                  this.FormData.callback();
          };
          return CocosEndForm;
      })(CocosBaseForm);
      var CocosPauseForm = (function (_super) {
          __extends(CocosPauseForm, _super);
          function CocosPauseForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.btnContinue = null;
              _this.btnHome = null;
              _this.btnReplay = null;
              _this.isMask = false;
              return _this;
          }
          Object.defineProperty(CocosPauseForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosPauseForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnContinue, function () {
                  _this.onContinue();
              });
              this.applyClickAnim(this.btnHome, function () {
                  _this.onToHome();
              });
              this.applyClickAnim(this.btnReplay, function () {
                  _this.onReplay();
              });
          };
          CocosPauseForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnContinue);
              this.removeClickAnim(this.btnHome);
              this.removeClickAnim(this.btnReplay);
          };
          CocosPauseForm.prototype.willShow = function (data) {
              _super.prototype.willShow.call(this, data);
              this.addListener();
              moosnow.platform.hideBanner();
          };
          CocosPauseForm.prototype.willHide = function (data) {
              _super.prototype.willHide.call(this, data);
              this.removeListener();
          };
          CocosPauseForm.prototype.onShow = function (data) {
              _super.prototype.onShow.call(this, data);
              moosnow.platform.pauseRecord();
          };
          CocosPauseForm.prototype.onContinue = function () {
              this.hideForm();
              if (this.FormData.callback)
                  this.FormData.callback();
          };
          CocosPauseForm.prototype.onToHome = function () {
              this.hideForm();
              moosnow.platform.stopRecord();
              if (this.FormData.homeCallback)
                  this.FormData.homeCallback();
          };
          CocosPauseForm.prototype.onReplay = function () {
              this.hideForm();
              moosnow.platform.stopRecord(function () {
                  moosnow.platform.startRecord();
              });
              if (this.FormData.replayCallback)
                  this.FormData.replayCallback();
          };
          return CocosPauseForm;
      })(CocosBaseForm);
      var CocosBaseComponent = (function (_super) {
          __extends(CocosBaseComponent, _super);
          function CocosBaseComponent() {
              return (_super !== null && _super.apply(this, arguments)) || this;
          }
          return CocosBaseComponent;
      })(CocosBaseForm);
      var CheckboxComponent = (function (_super) {
          __extends(CheckboxComponent, _super);
          function CheckboxComponent(isChecked, callback, checkedName, uncheckedName) {
              if (isChecked === void 0) {
                  isChecked = true;
              }
              var _this = _super.call(this) || this;
              _this.checkedName = "checked";
              _this.uncheckedName = "unchecked";
              _this.mCheckedVideo = true;
              _this.mCanNum = 0;
              _this.mCheckBoxMistouch = false;
              _this.mClickNum = 0;
              _this.mCheckBoxVideoNum = 3;
              _this.toggleCallback = callback;
              _this.mCheckedVideo = isChecked;
              if (checkedName)
                  _this.checkedName = checkedName;
              if (uncheckedName)
                  _this.uncheckedName = uncheckedName;
              _this[_this.checkedName] = null;
              _this[_this.uncheckedName] = null;
              return _this;
          }
          CheckboxComponent.prototype.addListener = function () {
              var _this = this;
              if (this[this.uncheckedName])
                  this.applyClickAnim(this[this.uncheckedName], function () {
                      _this.checkToggle();
                  });
              if (this[this.checkedName])
                  this.applyClickAnim(this[this.checkedName], function () {
                      _this.checkToggle();
                  });
          };
          CheckboxComponent.prototype.removeListener = function () {
              if (this[this.checkedName])
                  this.removeClickAnim(this[this.checkedName]);
              if (this[this.uncheckedName])
                  this.removeClickAnim(this[this.uncheckedName]);
          };
          CheckboxComponent.prototype.onReceive = function () {
              var _this = this;
              if (this.mCheckedVideo) {
                  moosnow.platform.showVideo(function (res) {
                      if (res == VIDEO_STATUS.END) {
                          if (_this.FormData.videoCallback)
                              _this.FormData.videoCallback();
                      }
                      else if (res == VIDEO_STATUS.ERR) {
                          moosnow.form.showToast(VIDEO_MSG.ERR);
                      }
                      else {
                          moosnow.form.showToast(VIDEO_MSG.NOTEND);
                      }
                  });
              }
              else {
                  if (this.FormData.callback)
                      this.FormData.callback();
              }
          };
          CheckboxComponent.prototype.checkToggle = function () {
              if (this.mCheckBoxMistouch) {
                  this.mClickNum++;
                  if (this.mClickNum == this.mCheckBoxVideoNum) {
                      moosnow.platform.showVideo(function () { });
                  }
                  if (this.mClickNum >= this.mCanNum) {
                      this.mCheckedVideo = !this.mCheckedVideo;
                      this.updateCheckbox();
                  }
                  this.checkCallback();
                  return;
              }
              this.mCheckedVideo = !this.mCheckedVideo;
              this.updateCheckbox();
              this.checkCallback();
          };
          CheckboxComponent.prototype.onShow = function (data) {
              var _this = this;
              _super.prototype.onShow.call(this, data);
              moosnow.http.getAllConfig(function (res) {
                  _this.mCanNum = MathUtils.probabilitys(res.checkBoxProbabilitys) + 1;
                  _this.mCheckBoxVideoNum = res && !isNaN(res.checkBoxVideoNum) ? res.checkBoxVideoNum : 3;
                  _this.mCheckBoxMistouch = res.checkBoxMistouch == 1;
              });
              this.addListener();
              this.updateCheckbox();
              this.checkCallback();
          };
          CheckboxComponent.prototype.updateCheckbox = function () {
              if (this[this.checkedName])
                  this[this.checkedName].active = this.mCheckedVideo;
              if (this[this.uncheckedName])
                  this[this.uncheckedName].active = !this.mCheckedVideo;
          };
          CheckboxComponent.prototype.checkCallback = function () {
              if (this.toggleCallback)
                  this.toggleCallback(this.mCheckedVideo);
          };
          CheckboxComponent.prototype.willHide = function () {
              this.removeListener();
          };
          return CheckboxComponent;
      })(CocosBaseComponent);
      var CocosTotalForm = (function (_super) {
          __extends(CocosTotalForm, _super);
          function CocosTotalForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.checked = null;
              _this.unchecked = null;
              _this.btnContinue = null;
              _this.coinNum = null;
              _this.videoText = null;
              _this.mCheckedVideo = false;
              _this.formComponents = [
                  new CheckboxComponent(_this.mCheckedVideo, function (e) {
                      _this.mCheckedVideo = e;
                  }),
              ];
              _this.mLevelCoinNum = 0;
              _this.mLevelShareCoinNum = 0;
              return _this;
          }
          Object.defineProperty(CocosTotalForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosTotalForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnContinue, function () {
                  _this.onReceive();
              });
          };
          CocosTotalForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnContinue);
          };
          CocosTotalForm.prototype.onReceive = function () {
              var _this = this;
              if (this.mCheckedVideo) {
                  moosnow.platform.showVideo(function (res) {
                      if (res == moosnow.VIDEO_STATUS.END) {
                          _this.hideForm();
                          if (_this.FormData.videoCallback)
                              _this.FormData.videoCallback();
                      }
                      else if (res == moosnow.VIDEO_STATUS.ERR) {
                          moosnow.form.showToast(VIDEO_MSG.ERR);
                      }
                      else {
                          moosnow.form.showToast(VIDEO_MSG.NOTEND);
                      }
                  });
              }
              else {
                  if (this.FormData.callback)
                      this.FormData.callback();
              }
          };
          CocosTotalForm.prototype.onShow = function (data) {
              _super.prototype.onShow.call(this, data);
              this.mLevelCoinNum = this.FormData.coinNum;
              this.mLevelShareCoinNum = this.FormData.coinNum;
              this.videoText.getComponent(cc.Label).string = "" + this.FormData.videoText;
              this.coinNum.getComponent(cc.Label).string = "" + Common.formatMoney(this.mLevelCoinNum);
              this.addListener();
              moosnow.platform.stopRecord();
              moosnow.platform.showBanner();
          };
          CocosTotalForm.prototype.willHide = function (data) {
              _super.prototype.willHide.call(this, data);
              this.removeListener();
              moosnow.platform.hideBanner();
          };
          return CocosTotalForm;
      })(CocosBaseForm);
      var CocosToastForm = (function (_super) {
          __extends(CocosToastForm, _super);
          function CocosToastForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.msgText = null;
              return _this;
          }
          CocosToastForm.prototype.onMaskMouseDown = function (e) {
              e.stopPropagation();
          };
          CocosToastForm.prototype.willShow = function (msg) {
              _super.prototype.willShow.call(this);
              this.node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
              this.node.zIndex = cc.macro.MAX_ZINDEX;
              this.msgText.getComponent(cc.Label).string = msg;
              this.node.active = true;
              this.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1)));
              this.scheduleOnce(this.hide, 1);
          };
          CocosToastForm.prototype.willHide = function (data) {
              _super.prototype.willHide.call(this, data);
              this.node.off(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
          };
          CocosToastForm.prototype.hide = function () {
              this.hideForm();
          };
          return CocosToastForm;
      })(CocosBaseForm);
      var CocosTryForm = (function (_super) {
          __extends(CocosTryForm, _super);
          function CocosTryForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.logo = null;
              _this.btnVideo = null;
              _this.btnNext = null;
              _this.btnTry = null;
              _this.mCheckedVideo = false;
              _this.formComponents = [
                  new CheckboxComponent(_this.mCheckedVideo, function (isChecked) {
                      _this.mCheckedVideo = isChecked;
                      if (_this.btnNext)
                          _this.btnNext.active = isChecked;
                      if (_this.btnTry)
                          _this.btnTry.active = !isChecked;
                  }),
              ];
              return _this;
          }
          Object.defineProperty(CocosTryForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosTryForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnVideo, function () {
                  _this.onVideoTry();
              });
              this.applyClickAnim(this.btnNext, function () {
                  _this.onNext();
              });
              this.applyClickAnim(this.btnTry, function () {
                  _this.onTextTry();
              });
          };
          CocosTryForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnVideo);
              this.removeClickAnim(this.btnNext);
              this.removeClickAnim(this.btnTry);
          };
          CocosTryForm.prototype.onShow = function (data) {
              _super.prototype.onShow.call(this, data);
              CocosNodeHelper.changeSrc(this.logo, { url: this.FormData.skinUrl, width: this.logo.width, height: this.logo.height });
              this.addListener();
          };
          CocosTryForm.prototype.onHide = function (data) {
              _super.prototype.onHide.call(this, data);
              this.removeListener();
          };
          CocosTryForm.prototype.onVideoTry = function () {
              var _this = this;
              moosnow.platform.showVideo(function (res) {
                  if (res == VIDEO_STATUS.END) {
                      _this.hideForm();
                      if (_this.FormData.videoCallback)
                          _this.FormData.videoCallback();
                  }
                  else if (res == VIDEO_STATUS.ERR) {
                      moosnow.form.showToast(VIDEO_MSG.ERR);
                  }
                  else if (res == VIDEO_STATUS.NOTEND) {
                      moosnow.form.showToast(VIDEO_MSG.NOTEND);
                  }
              });
          };
          CocosTryForm.prototype.onNext = function () {
              this.hideForm();
              if (this.FormData.callback)
                  this.FormData.callback();
          };
          CocosTryForm.prototype.onTextTry = function () {
              if (this.mCheckedVideo)
                  this.onVideoTry();
              else
                  this.onNext();
          };
          return CocosTryForm;
      })(CocosBaseForm);
      var CocosSetForm = (function (_super) {
          __extends(CocosSetForm, _super);
          function CocosSetForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.bg = null;
              _this.formComponents = [
                  new CheckboxComponent(moosnow.data.getVibrateSetting(), function (isChecked) {
                      _this.vibrateSwitch(isChecked);
                  }, "vibrateOn", "vibrateOff"),
                  new CheckboxComponent(moosnow.audio.isMute, function (isChecked) {
                      _this.musicSwitch(isChecked);
                  }, "musicOn", "musicOff"),
              ];
              return _this;
          }
          Object.defineProperty(CocosSetForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosSetForm.prototype.addListener = function () {
              this.node.on(CocosNodeEvent.TOUCH_START, this.hideForm, this);
              CocosNodeHelper.addStopPropagation(this.bg);
          };
          CocosSetForm.prototype.removeListener = function () {
              this.node.off(CocosNodeEvent.TOUCH_START, this.hideForm, this);
              CocosNodeHelper.removeStopPropagation(this.bg);
          };
          CocosSetForm.prototype.willShow = function (data) {
              _super.prototype.willShow.call(this, data);
              this.addListener();
          };
          CocosSetForm.prototype.willHide = function (data) {
              _super.prototype.willShow.call(this, data);
              this.removeListener();
          };
          CocosSetForm.prototype.vibrateSwitch = function (isChecked) {
              moosnow.data.setVibrateSetting(isChecked);
              if (this.FormData.vibrateCallback)
                  this.FormData.vibrateCallback(isChecked);
          };
          CocosSetForm.prototype.musicSwitch = function (isChecked) {
              moosnow.audio.isMute = isChecked;
              if (this.FormData.musicCallback)
                  this.FormData.musicCallback(isChecked);
          };
          return CocosSetForm;
      })(CocosBaseForm);
      var CocosBoxItem = (function (_super) {
          __extends(CocosBoxItem, _super);
          function CocosBoxItem() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.checkdBg = null;
              _this.opend = null;
              _this.lockd = null;
              _this.video = null;
              _this.coinNum = null;
              _this._opening = false;
              return _this;
          }
          Object.defineProperty(CocosBoxItem.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosBoxItem.prototype.willShow = function (data) {
              _super.prototype.willShow.call(this, data);
              this.initItem(data);
              this.addListener();
          };
          CocosBoxItem.prototype.willHide = function (data) {
              _super.prototype.willHide.call(this, data);
              this.removeListener();
          };
          CocosBoxItem.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.node, function () {
                  _this.onCheck();
              });
              moosnow.event.addListener(PLATFORM_EVENT.PRIZE_BOX_UNLOCAK, this, this.onCheckChange);
          };
          CocosBoxItem.prototype.removeListener = function () {
              this.removeClickAnim(this.node);
              moosnow.event.removeListener(PLATFORM_EVENT.PRIZE_BOX_UNLOCAK, this);
          };
          CocosBoxItem.prototype.initItem = function (data) {
              this.coinNum.active = data.coinNum > 0;
              var cacheItem = moosnow.data.getUserPrizeBoxById(data.idx);
              if (cacheItem) {
                  this.coinNum.getComponent(cc.Label).string = "" + Common.formatMoney(cacheItem.coinNum);
                  this.opend.active = true;
                  this.lockd.active = false;
                  this.video.active = false;
              }
              else {
                  this.opend.active = false;
                  this.lockd.active = true;
                  this.video.active = this.FormData.isVideo;
              }
              this.checkdBg.active = false;
          };
          CocosBoxItem.prototype.onCheckChange = function (prizeItem) {
              var cacheItem = moosnow.data.getUserPrizeBoxById(this.FormData.idx);
              if (cacheItem) {
                  this.coinNum.active = true;
                  this.coinNum.getComponent(cc.Label).string = "" + Common.formatMoney(cacheItem.coinNum);
                  this.opend.active = true;
                  this.lockd.active = false;
                  this.video.active = false;
              }
              else {
                  this.coinNum.active = false;
                  this.video.active = this.FormData.isVideo;
                  this.opend.active = false;
                  this.lockd.active = true;
              }
          };
          CocosBoxItem.prototype.onCheck = function () {
              var _this = this;
              if (this._opening)
                  return;
              this._opening = true;
              if (this.FormData.videoNum) {
                  moosnow.platform.showVideo(function (res) {
                      _this._opening = false;
                      switch (res) {
                          case VIDEO_STATUS.NOTEND:
                              moosnow.form.showToast(VIDEO_MSG.NOTEND);
                              break;
                          case VIDEO_STATUS.ERR:
                              moosnow.form.showToast(VIDEO_MSG.ERR);
                              break;
                          case VIDEO_STATUS.END:
                              moosnow.data.lockPrizeBox(_this.FormData.idx, 1, _this.FormData.coinNum);
                              moosnow.event.sendEventImmediately(PLATFORM_EVENT.PRIZE_BOX_UNLOCAK, _this.FormData);
                          default:
                              break;
                      }
                  });
              }
              else {
                  var keyNum = moosnow.data.getPrizeKey();
                  if (keyNum > 0) {
                      moosnow.data.addPrizeKey(-1);
                      moosnow.data.lockPrizeBox(this.FormData.idx, 0, this.FormData.coinNum);
                      moosnow.event.sendEventImmediately(PLATFORM_EVENT.PRIZE_BOX_UNLOCAK, this.FormData);
                  }
                  else {
                      this._opening = false;
                      moosnow.form.showToast("钥匙不足");
                      moosnow.event.sendEventImmediately(PLATFORM_EVENT.PRIZE_BOX_UNLOCAK, this.FormData);
                  }
              }
          };
          return CocosBoxItem;
      })(CocosBaseForm);
      var CocosBoxForm = (function (_super) {
          __extends(CocosBoxForm, _super);
          function CocosBoxForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.boxLayout = null;
              _this.btnReceive = null;
              _this.btnNext = null;
              _this.keyNum = null;
              _this.mTryFromVideo = true;
              _this.formComponents = [
                  new CheckboxComponent(_this.mTryFromVideo, function (isChecked) {
                      _this.mTryFromVideo = isChecked;
                      _this.btnNext.active = !isChecked;
                      _this.btnReceive.active = isChecked;
                  }),
              ];
              _this._Receiveing = false;
              return _this;
          }
          Object.defineProperty(CocosBoxForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosBoxForm.prototype.onShow = function (data) {
              console.log("this.mTryFromVideo 1 ", this.mTryFromVideo);
              _super.prototype.onShow.call(this, data);
              this.boxLayout.getComponent(cc.Layout).type = cc.Layout.Type.GRID;
              console.log("this.mTryFromVideo 2 ", this.mTryFromVideo);
              this.btnNext.active = !this.mTryFromVideo;
              this.btnReceive.active = this.mTryFromVideo;
              var idx = 0;
              for (var i = 0; i < this.FormData.rowNum; i++) {
                  for (var j = 0; j < this.FormData.colNum; j++) {
                      var coinNum = Common.randomNumBoth(this.FormData.coinNum[0], this.FormData.coinNum[1]);
                      var videoCoinNum = Common.randomNumBoth(this.FormData.videoCoinNum[0], this.FormData.videoCoinNum[1]);
                      var isVideo = this.FormData.videoNum && this.FormData.videoNum.indexOf(idx) != -1;
                      moosnow.form.formFactory.createNodeByTemplate("boxItem", CocosBoxItem, {
                          coinNum: coinNum,
                          videoCoinNum: videoCoinNum,
                          isVideo: isVideo,
                          idx: idx,
                      }, this.boxLayout);
                      idx++;
                  }
              }
              this.addListener();
              this.updateKeyNum();
          };
          CocosBoxForm.prototype.onHide = function (data) {
              _super.prototype.onHide.call(this, data);
              moosnow.form.formFactory.hideNodeByTemplate("boxItem", null);
              this.removeListener();
          };
          CocosBoxForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnNext, function () {
                  _this.nextForm();
              });
              this.applyClickAnim(this.btnReceive, function () {
                  _this.onReceive();
              });
              moosnow.event.addListener(PLATFORM_EVENT.PRIZE_BOX_UNLOCAK, this, this.onPrizeBoxUnLock);
          };
          CocosBoxForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnNext);
              this.removeClickAnim(this.btnReceive);
              moosnow.event.removeListener(PLATFORM_EVENT.PRIZE_BOX_UNLOCAK, this);
          };
          CocosBoxForm.prototype.onPrizeBoxUnLock = function (prizeItem) {
              this.btnReceive.active = true;
              this.updateKeyNum();
              if (this.FormData.openCallback)
                  this.FormData.openCallback(prizeItem.coinNum);
          };
          CocosBoxForm.prototype.onReceive = function () {
              var _this = this;
              if (this._Receiveing)
                  return;
              this._Receiveing = true;
              if (this.mTryFromVideo) {
                  this._Receiveing = false;
                  moosnow.platform.showVideo(function (res) {
                      switch (res) {
                          case VIDEO_STATUS.NOTEND:
                              moosnow.form.showToast(VIDEO_MSG.NOTEND);
                              break;
                          case VIDEO_STATUS.ERR:
                              moosnow.form.showToast(VIDEO_MSG.ERR);
                              break;
                          case VIDEO_STATUS.END:
                              moosnow.data.addPrizeKey(3);
                              _this.updateKeyNum();
                          default:
                              break;
                      }
                  });
              }
              else {
                  this.nextForm();
              }
          };
          CocosBoxForm.prototype.nextForm = function () {
              moosnow.data.clearPrizeBox();
              moosnow.data.clearPrizeKey();
              this._Receiveing = false;
              this.hideForm();
              if (this.FormData.callback)
                  this.FormData.callback();
          };
          CocosBoxForm.prototype.updateKeyNum = function () {
              this.keyNum.getComponent(cc.Label).string = "" + moosnow.data.getPrizeKey();
          };
          return CocosBoxForm;
      })(CocosBaseForm);
      var CocosShareForm = (function (_super) {
          __extends(CocosShareForm, _super);
          function CocosShareForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.btnShare = null;
              _this.btnNext = null;
              _this.coinNum = null;
              return _this;
          }
          Object.defineProperty(CocosShareForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosShareForm.prototype.onShow = function (data) {
              _super.prototype.onShow.call(this, data);
              this.addListener();
              this.coinNum.getComponent(cc.Label).string = "" + Common.formatMoney(this.FormData.shareCoinNum);
          };
          CocosShareForm.prototype.onHide = function (data) {
              _super.prototype.onHide.call(this, data);
              this.removeListener();
          };
          CocosShareForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnShare, function () {
                  _this.onShareVideo();
              });
              this.applyClickAnim(this.btnNext, function () {
                  _this.onNext();
              });
          };
          CocosShareForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnShare);
              this.removeClickAnim(this.btnNext);
          };
          CocosShareForm.prototype.onNext = function () {
              this.hideForm();
              if (this.FormData.callback)
                  this.FormData.callback();
          };
          CocosShareForm.prototype.onShareVideo = function () {
              var _this = this;
              moosnow.http.getAllConfig(function (res) {
                  if (res) {
                      if (res.shareFormVideo == 1) {
                          _this.onVideo();
                      }
                      else if (res.shareFormVideo == 2) {
                          _this.onShare();
                      }
                      else {
                          var precent = res && res.shareFormVideoPrecent ? parseFloat(res.shareFormVideoPrecent) : 0.5;
                          if (Common.randomNumBoth(0, 100) / 100.0 < precent) {
                              _this.onVideo();
                          }
                          else
                              _this.onShare();
                      }
                  }
                  else {
                      _this.onVideo();
                  }
              });
          };
          CocosShareForm.prototype.onVideo = function () {
              var _this = this;
              moosnow.platform.showVideo(function (res) {
                  if (res == moosnow.VIDEO_STATUS.END) {
                      _this.hideForm();
                      if (_this.FormData.shareCallback)
                          _this.FormData.shareCallback(true);
                  }
                  else if (res == moosnow.VIDEO_STATUS.NOTEND) {
                      moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
                  }
                  else {
                      moosnow.form.showToast(moosnow.VIDEO_MSG.ERR);
                  }
              });
          };
          CocosShareForm.prototype.onShare = function () {
              var _this = this;
              moosnow.platform.share({
                  channel: moosnow.SHARE_CHANNEL.VIDEO,
              }, function (res) {
                  _this.hideForm();
                  if (_this.FormData.shareCallback)
                      _this.FormData.shareCallback(res);
                  console.log("分享结束", res);
              }, function (err) {
                  _this.hideForm();
                  if (_this.FormData.shareCallback)
                      _this.FormData.shareCallback(err);
              });
          };
          return CocosShareForm;
      })(CocosBaseForm);
      var CocosMistouchForm = (function (_super) {
          __extends(CocosMistouchForm, _super);
          function CocosMistouchForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.clickProgress = null;
              _this.btnReceive = null;
              _this.logo = null;
              _this.mMaxNum = 10;
              _this.mCurrentNum = 0;
              _this.mNavigateIndex = 0;
              _this.mBannerShow = false;
              _this.mShowTime = 0;
              _this.mBannerClickType = 0;
              return _this;
          }
          CocosMistouchForm.prototype.addEvent = function () {
              this.btnReceive.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
              this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
          };
          CocosMistouchForm.prototype.removeEvent = function () {
              this.btnReceive.off(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
              this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
              moosnow.event.removeListener(PLATFORM_EVENT.ON_PLATFORM_SHOW, this);
          };
          CocosMistouchForm.prototype.onLogoUp = function () {
              this.logo.position = this.mEndPos;
          };
          CocosMistouchForm.prototype.onLogoDown = function () {
              this.logo.position = this.mBeginPos;
          };
          CocosMistouchForm.prototype.initPos = function () {
              this.mBeginPos = this.logo.position.clone();
              this.mEndPos = this.mBeginPos.add(new cc.Vec2(0, 50));
          };
          Object.defineProperty(CocosMistouchForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosMistouchForm.prototype.willShow = function (data) {
              var _this = this;
              _super.prototype.willShow.call(this, data);
              this.btnReceive.active = true;
              this.initPos();
              this.mCurrentNum = 0;
              this.mNavigateIndex = Common.randomNumBoth(3, this.mMaxNum - 2);
              this.addEvent();
              this.schedule(this.subProgress, 0.1);
              moosnow.form.showAd(AD_POSITION.NONE, null);
              CocosNodeHelper.changeSrc(this.logo, { url: this.FormData.url, width: this.logo.width, height: this.logo.height });
              this.mBannerShow = false;
              moosnow.http.getAllConfig(function (res) {
                  _this.mBannerClickType = res.bannerClickType;
              });
              this.schedule(this.onFwUpdate, 0.16);
          };
          CocosMistouchForm.prototype.willHide = function () {
              this.unschedule(this.subProgress);
              this.unschedule(this.resetProgress);
              this.removeEvent();
              this.unschedule(this.onFwUpdate);
          };
          CocosMistouchForm.prototype.subProgress = function () {
              this.mCurrentNum -= 0.1;
              if (this.mCurrentNum < 0)
                  this.mCurrentNum = 0;
          };
          CocosMistouchForm.prototype.bannerClickCallback = function (isOpend) {
              if (isOpend) {
                  this.unschedule(this.onHideBanner);
                  this.unschedule(this.resetProgress);
                  moosnow.platform.hideBanner();
                  this.mBannerShow = false;
                  this.hideForm();
                  if (this.FormData && this.FormData.callback)
                      this.FormData.callback();
              }
          };
          CocosMistouchForm.prototype.onBannerClick = function () {
              var _this = this;
              this.onLogoDown();
              this.mCurrentNum += 1;
              if (this.mCurrentNum >= this.mNavigateIndex) {
                  if (!this.mBannerShow) {
                      this.mShowTime = Date.now();
                      this.mBannerShow = true;
                      moosnow.platform.showBanner(true, function (e) {
                          console.log("banner click callback ", e);
                          _this.bannerClickCallback(e);
                      });
                      if (this.mBannerClickType == 1) {
                          this.unschedule(this.onHideBanner);
                          this.scheduleOnce(this.onHideBanner, 2);
                      }
                      else if (this.mBannerClickType == 2) {
                          this.unschedule(this.resetProgress);
                          this.scheduleOnce(this.resetProgress, 2);
                      }
                  }
              }
              if (this.mCurrentNum >= this.mMaxNum) {
                  moosnow.platform.hideBanner();
                  this.mBannerShow = false;
                  this.hideForm();
                  if (this.FormData && this.FormData.callback)
                      this.FormData.callback(true);
              }
          };
          CocosMistouchForm.prototype.resetProgress = function () {
              this.mCurrentNum = 0;
              moosnow.platform.hideBanner();
              this.mBannerShow = false;
          };
          CocosMistouchForm.prototype.onHideBanner = function () {
              moosnow.platform.hideBanner();
          };
          CocosMistouchForm.prototype.onFwUpdate = function () {
              this.clickProgress.getComponent(cc.ProgressBar).progress = this.mCurrentNum / this.mMaxNum;
          };
          return CocosMistouchForm;
      })(CocosBaseForm);
      var CocosAdViewItem = (function (_super) {
          __extends(CocosAdViewItem, _super);
          function CocosAdViewItem() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.logo = null;
              _this.title = null;
              _this.animLogo = null;
              _this.nameBg = null;
              return _this;
          }
          CocosAdViewItem.prototype.addListener = function () {
              this.logo.on(CocosNodeEvent.TOUCH_END, this.onClickAd, this);
          };
          CocosAdViewItem.prototype.removeListener = function () {
              this.logo.off(CocosNodeEvent.TOUCH_END, this.onClickAd, this);
          };
          CocosAdViewItem.prototype.initPosition = function (data) { };
          CocosAdViewItem.prototype.willShow = function (cell) {
              _super.prototype.willShow.call(this, cell);
              this.mAdItem = cell;
              this.addListener();
          };
          CocosAdViewItem.prototype.refreshImg = function (cell) {
              this.mAdItem = cell;
              this.updateUI();
          };
          CocosAdViewItem.prototype.updateUI = function () {
              var _this = this;
              var _a = this.logo, width = _a.width, height = _a.height;
              CocosNodeHelper.changeSrc(this.logo, { url: this.mAdItem.img, width: width, height: height }, function () {
                  _this.logo.width = width;
                  _this.logo.height = height;
              });
              CocosNodeHelper.changeText(this.title, this.mAdItem.title);
          };
          CocosAdViewItem.prototype.onClickAd = function () {
              var _this = this;
              var openAd = this.mAdItem;
              if (this.FormData && this.FormData.refresh) {
                  var nextAd = this.findNextAd();
                  if (nextAd) {
                      if (nextAd.refresh)
                          moosnow.event.sendEventImmediately(PLATFORM_EVENT.AD_VIEW_REFRESH, {
                              current: openAd,
                              next: nextAd,
                          });
                      this.refreshImg(nextAd);
                  }
              }
              moosnow.platform.navigate2Mini(openAd, function () { }, function () {
                  if (_this.mAdItem && _this.mAdItem.onCancel)
                      _this.mAdItem.onCancel(openAd);
              });
          };
          CocosAdViewItem.prototype.findNextAd = function () {
              if (!this.FormData.source)
                  return null;
              if (!this.FormData.showIds)
                  return null;
              for (var i = 0; i < this.FormData.source.length; i++) {
                  var isShow = false;
                  for (var j = 0; j < this.FormData.showIds.length; j++) {
                      if (this.FormData.showIds[j].appid == this.FormData.source[i].appid && this.FormData.showIds[j].position == this.FormData.source[i].position) {
                          isShow = true;
                      }
                  }
                  if (!isShow) {
                      return this.FormData.source[i];
                  }
              }
              return null;
          };
          CocosAdViewItem.prototype.onAdViewChange = function (e) {
              if (!this.FormData.showIds)
                  return;
              if (!this.FormData.source)
                  return;
              var current = e.current, next = e.next;
              var showApps = this.FormData.showIds;
              var sourceApps = this.FormData.source;
              for (var i = 0; i < showApps.length; i++) {
                  if (current.appid == showApps[i].appid && current.position == showApps[i].position) {
                      this.FormData.showIds[i] = next.appid;
                  }
              }
              for (var i = 0; i < sourceApps.length; i++) {
                  if (next.appid == sourceApps[i].appid) {
                      this.FormData.source.splice(i, 1);
                      this.FormData.source.push(current);
                      break;
                  }
              }
          };
          CocosAdViewItem.prototype.onShow = function (data) {
              _super.prototype.onShow.call(this, data);
              this.updateUI();
              moosnow.event.addListener(PLATFORM_EVENT.AD_VIEW_REFRESH, this, this.onAdViewChange);
          };
          CocosAdViewItem.prototype.onHide = function (data) {
              _super.prototype.onHide.call(this, data);
              if (this.mAdItem)
                  this.mAdItem.onCancel = null;
              this.removeListener();
              moosnow.event.removeListener(PLATFORM_EVENT.AD_VIEW_REFRESH, this);
          };
          return CocosAdViewItem;
      })(CocosBaseForm);
      var CocosAdForm = (function (_super) {
          __extends(CocosAdForm, _super);
          function CocosAdForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.endContainer = null;
              _this.endContainer_layout = null;
              _this.exportContainer = null;
              _this.exportContainer_scroll = null;
              _this.exportContainer_layout = null;
              _this.exportClose = null;
              _this.formMask = null;
              _this.exportCloseTxt = null;
              _this.btnBack = null;
              _this.floatContainer = null;
              _this.floatFull = null;
              _this.bannerContainer = null;
              _this.bannerContainer_scroll = null;
              _this.bannerContainer_layout = null;
              _this.topContainer = null;
              _this.topContainer_scroll = null;
              _this.topContainer_layout = null;
              _this.leftContainer = null;
              _this.leftContainer_scroll = null;
              _this.leftContainer_layout = null;
              _this.rightContainer = null;
              _this.rightContainer_scroll = null;
              _this.rightContainer_layout = null;
              _this.rotateContainer = null;
              _this.rotateContainer_layout = null;
              _this.sideContainer = null;
              _this.sideView = null;
              _this.sideLayout = null;
              _this.btnSideShow = null;
              _this.btnSideHide = null;
              _this.mShowAd = AD_POSITION.NONE;
              _this.mPrevShowAd = AD_POSITION.NONE;
              _this.mScrollVec = [];
              _this.mEndLogic = [];
              _this.mMoveSpeed = 2;
              _this.mFloatIndex = 0;
              _this.mFloatRefresh = 3;
              _this.mFloatCache = {};
              _this.loadNum = 0;
              _this.loadManNum = 3;
              _this.mSecond = 3;
              _this.mAdItemList = [];
              _this.floatRuning = false;
              return _this;
          }
          CocosAdForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnBack, function () {
                  _this.onBack();
              });
              this.applyClickAnim(this.exportClose, function () {
                  _this.onNavigate();
              });
              this.applyClickAnim(this.btnSideShow, function () {
                  _this.sideOut();
              });
              this.applyClickAnim(this.btnSideHide, function () {
                  _this.sideIn();
              });
              moosnow.event.addListener(PLATFORM_EVENT.AD_VIEW_CHANGE, this, this.onAdChange);
          };
          CocosAdForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnBack);
              this.removeClickAnim(this.exportClose);
              this.removeClickAnim(this.btnSideShow);
              this.removeClickAnim(this.btnSideHide);
              moosnow.event.removeListener(PLATFORM_EVENT.AD_VIEW_CHANGE, this);
          };
          CocosAdForm.prototype.onAdChange = function (data) {
              this.displayAd(false);
              this.mTempPoints = data && data.points ? data.points : null;
              this.mTempTempletes = data && data.templetes ? data.templetes : null;
              if (!this.mShowAd) {
                  this.mShowAd = data.showAd;
                  this.mBackCall = data.callback;
              }
              if (data.showAd != AD_POSITION.RECOVER) {
                  this.mPrevShowAd = this.mShowAd;
                  this.mPrevBackCall = this.mBackCall;
              }
              if (data.showAd == AD_POSITION.RECOVER) {
                  data.showAd = this.mPrevShowAd;
                  data.callback = this.mPrevBackCall;
              }
              this.displayChange(data.showAd, data.callback);
              if (!isNaN(data.zIndex)) {
                  this.node.zIndex = data.zIndex;
              }
              else {
                  this.node.zIndex = cc.macro.MAX_ZINDEX;
              }
          };
          CocosAdForm.prototype.onBack = function () {
              if (this.mBackCall) {
                  this.mBackCall();
              }
          };
          Object.defineProperty(CocosAdForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosAdForm.prototype.loadAd = function (callback) {
              var _this = this;
              if (this.mAdData)
                  callback(this.mAdData.indexLeft);
              else {
                  this.loadNum = 0;
                  moosnow.form.formFactory.getLayout(function () {
                      _this.checkLoad(callback);
                  });
                  moosnow.form.formFactory.getTemplates(function () {
                      _this.checkLoad(callback);
                  });
                  moosnow.ad.getAd(function (res) {
                      _this.mAdData = res;
                      _this.checkLoad(callback);
                  });
              }
          };
          CocosAdForm.prototype.onAdCancel = function () {
              moosnow.form.showAd(AD_POSITION.EXPORT | AD_POSITION.MASK | AD_POSITION.BACK, function () {
                  moosnow.form.showAd(AD_POSITION.RECOVER, function () { });
              });
          };
          CocosAdForm.prototype.checkLoad = function (callback) {
              this.loadNum++;
              if (this.loadNum == this.loadManNum) {
                  callback(this.mAdData.indexLeft);
              }
          };
          CocosAdForm.prototype.onRandomNavigate = function () {
              var item = this.mAdData.indexLeft[Common.randomNumBoth(0, this.mAdData.indexLeft.length - 1)];
              moosnow.platform.navigate2Mini(item, function () { }, function () { });
          };
          CocosAdForm.prototype.onNavigate = function () {
              var _this = this;
              moosnow.http.getAllConfig(function (res) {
                  if (res && res.exportBtnNavigate == 1) {
                      _this.onRandomNavigate();
                  }
                  else {
                      _this.onBack();
                  }
              });
          };
          CocosAdForm.prototype.sideOut = function () {
              var _this = this;
              var wxsys = moosnow.platform.getSystemInfoSync();
              var statusBarHeight = 0;
              var notchHeight = 0;
              if (wxsys) {
                  statusBarHeight = wxsys.statusBarHeight || 0;
                  notchHeight = wxsys.notchHeight || 0;
              }
              this.sideView.node.runAction(cc.sequence(cc.moveTo(1, statusBarHeight + notchHeight + this.sideView.node.width + 20, 0), cc.callFunc(function () {
                  _this.btnSideShow.active = false;
                  _this.btnSideHide.active = true;
              })));
          };
          CocosAdForm.prototype.sideIn = function () {
              var _this = this;
              this.sideView.node.runAction(cc.sequence(cc.moveTo(1, 0, 0), cc.callFunc(function () {
                  _this.btnSideShow.active = true;
                  _this.btnSideHide.active = false;
              })));
          };
          CocosAdForm.prototype.pushScroll = function (scrollView, layout) {
              if (layout.type == cc.Layout.Type.GRID) {
                  if (scrollView.vertical) {
                      this.mScrollVec.push({
                          scrollView: scrollView,
                          move2Up: false,
                      });
                  }
                  else {
                      this.mScrollVec.push({
                          scrollView: scrollView,
                          move2Left: false,
                      });
                  }
              }
              else if (layout.type == cc.Layout.Type.HORIZONTAL) {
                  this.mScrollVec.push({
                      scrollView: scrollView,
                      move2Left: false,
                  });
              }
              else if (layout.type == cc.Layout.Type.VERTICAL) {
                  this.mScrollVec.push({
                      scrollView: scrollView,
                      move2Up: false,
                  });
              }
          };
          CocosAdForm.prototype.addAd = function (ad) {
              this.mShowAd |= ad;
          };
          CocosAdForm.prototype.removeAd = function (ad) {
              if (this.hasAd(ad))
                  this.mShowAd ^= ad;
          };
          CocosAdForm.prototype.hasAd = function (ad) {
              return (this.mShowAd & ad) == ad;
          };
          CocosAdForm.prototype.showClose = function (visible) {
              this.exportClose.active = false;
              this.exportCloseTxt.active = false;
              this.btnBack.active = false;
              this.unschedule(this.onWaitShow);
              if (visible && this.hasAd(AD_POSITION.BACK)) {
                  if (this.hasAd(AD_POSITION.WAIT)) {
                      this.mSecond = 3;
                      this.onWaitShow();
                      this.schedule(this.onWaitShow, 1);
                  }
                  else {
                      this.exportClose.active = true;
                      this.btnBack.active = true;
                      this.exportCloseTxt.active = false;
                  }
              }
              else {
                  this.exportClose.active = false;
                  this.btnBack.active = false;
                  this.exportCloseTxt.active = false;
              }
          };
          CocosAdForm.prototype.onWaitShow = function () {
              this.mSecond -= 1;
              this.exportCloseTxt.active = true;
              if (this.mSecond <= 0) {
                  this.exportClose.active = true;
                  this.btnBack.active = true;
                  this.exportCloseTxt.active = false;
                  this.unschedule(this.onWaitShow);
                  return;
              }
              CocosNodeHelper.changeText(this.exportCloseTxt, "\u5269\u4F59" + this.mSecond + "\u79D2\u53EF\u5173\u95ED");
          };
          CocosAdForm.prototype.setPosition = function (source, position, callback, refresh) {
              if (position === void 0) {
                  position = "";
              }
              if (refresh === void 0) {
                  refresh = false;
              }
              var retValue = Common.deepCopy(source);
              retValue.forEach(function (item) {
                  item.position = position;
                  item.onCancel = callback;
                  item.refresh = refresh;
              });
              return retValue;
          };
          CocosAdForm.prototype.initFloatAd = function (callback) {
              var _this = this;
              if (this.mAdData.indexLeft.length == 0)
                  return;
              var source = this.setPosition(this.mAdData.indexLeft, "浮动ICON", callback, true);
              var showIds = [];
              var points = this.mTempPoints || this.FormData.floatPositon;
              var templetes = this.mTempTempletes || this.FormData.floatTempletes;
              var showIndex = Common.randomNumBoth(0, source.length - 1);
              points.forEach(function (point, idx) {
                  var nowIdx = (showIndex + idx) % (source.length - 1);
                  var adRow = source[nowIdx];
                  showIds.push({
                      appid: adRow.appid,
                      position: adRow.position,
                      index: nowIdx,
                  });
                  var templateName = templetes.length - 1 > idx ? templetes[idx] : templetes[0];
                  console.log("initFloatAd", point.x, point.y);
                  adRow.x = point.x;
                  adRow.y = point.y;
                  adRow.source = source;
                  adRow.showIds = showIds;
                  adRow.index = idx;
                  moosnow.form.formFactory.createNodeByTemplate(templateName, CocosAdViewItem, adRow, _this.floatContainer);
              });
              this.updateFloat(source);
              this.schedule(this.updateFloat, this.mFloatRefresh, [source]);
              this.floatRuning = false;
          };
          CocosAdForm.prototype.removeFloatAd = function () {
              this.floatContainer.children.forEach(function (floatNode) {
                  floatNode.stopAllActions();
              });
              var templetes = this.FormData.floatTempletes;
              if (this.mTempTempletes) {
                  templetes = templetes.concat(this.mTempTempletes);
              }
              templetes.forEach(function (tempName) {
                  moosnow.form.formFactory.hideNodeByTemplate(tempName, null);
              });
              this.unschedule(this.updateFloat);
          };
          CocosAdForm.prototype.floatAnim = function () {
              if (this.floatRuning)
                  return;
              var templetes = this.mTempTempletes || this.FormData.floatTempletes;
              if (this.floatContainer.childrenCount >= templetes.length)
                  this.floatRuning = true;
              this.floatContainer.children.forEach(function (floatNode) {
                  floatNode.stopAllActions();
                  floatNode.runAction(cc.sequence(cc.rotateTo(0.3, 10), cc.rotateTo(0.6, -10), cc.rotateTo(0.3, 0), cc.scaleTo(0.3, 0.8), cc.scaleTo(0.3, 1)).repeatForever());
              });
          };
          CocosAdForm.prototype.updateFloat = function (source) {
              var _this = this;
              var templetes = this.mTempTempletes || this.FormData.floatTempletes;
              this.floatContainer.children.forEach(function (floatNode) {
                  templetes.forEach(function (templeteName) {
                      moosnow.form.formFactory.getKVsByName(templeteName).forEach(function (kv) {
                          if (kv.formNode == floatNode) {
                              kv.formLogic.FormData.index = (kv.formLogic.FormData.index + _this.floatContainer.childrenCount) % (_this.mAdData.indexLeft.length - 1);
                              var logic = kv.formLogic;
                              logic.refreshImg(__assign(__assign({}, _this.mAdData.indexLeft[kv.formLogic.FormData.index]), { onCancel: kv.formLogic.FormData.onCancel }));
                          }
                      });
                  });
              });
          };
          CocosAdForm.prototype.initFiexdView = function (layout, position, templateName, callback) {
              if (!this.mAdData)
                  return;
              layout.removeAllChildren();
              var banner = this.setPosition(this.mAdData.indexLeft, position, callback, true);
              var endAd = [];
              var showIds = [];
              for (var i = 0; i < 8; i++) {
                  var item = banner.length > i ? banner[i] : banner[0];
                  showIds.push({
                      appid: item.appid,
                      position: item.position,
                      index: i,
                  });
                  endAd.push(item);
              }
              endAd.forEach(function (item) {
                  var adRow = __assign(__assign({}, item), { showIds: showIds, source: banner });
                  moosnow.form.formFactory.createNodeByTemplate(templateName, CocosAdViewItem, adRow, layout);
              });
          };
          CocosAdForm.prototype.initView = function (scrollView, layout, position, templateName, callback, source) {
              this.hideAllAdNode(templateName, layout);
              if (!source)
                  source = this.setPosition(this.mAdData.indexLeft, position, callback);
              source.forEach(function (item, idx) {
                  moosnow.form.formFactory.createNodeByTemplate(templateName, CocosAdViewItem, item, layout);
              });
              this.pushScroll(scrollView, layout.getComponent(cc.Layout));
          };
          CocosAdForm.prototype.hideAllAdNode = function (templateName, node) {
              if (!node)
                  return;
              for (var i = 0; i < node.childrenCount; i++) {
                  moosnow.form.formFactory.hideNodeByTemplate(templateName, node.children[i]);
                  i--;
              }
          };
          CocosAdForm.prototype.onFwUpdate = function () {
              this.floatAnim();
              this.scrollMove();
          };
          CocosAdForm.prototype.scrollMove = function () {
              for (var i = 0; i < this.mScrollVec.length; i++) {
                  var item = this.mScrollVec[i];
                  var scrollView = item.scrollView;
                  if (scrollView.isScrolling())
                      continue;
                  var scrollOffset = scrollView.getMaxScrollOffset();
                  var maxH = scrollOffset.y / 2 + 20;
                  var maxW = scrollOffset.x / 2 + 20;
                  var contentPos = scrollView.getContentPosition();
                  if (item.move2Up == true) {
                      if (contentPos.y > maxH) {
                          item.move2Up = false;
                      }
                      item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y + this.mMoveSpeed));
                  }
                  else if (item.move2Up == false) {
                      if (contentPos.y < -maxH) {
                          item.move2Up = true;
                      }
                      item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y - this.mMoveSpeed));
                  }
                  if (item.move2Left == true) {
                      if (contentPos.x > maxW) {
                          item.move2Left = false;
                      }
                      item.scrollView.setContentPosition(new cc.Vec2(contentPos.x + this.mMoveSpeed, contentPos.y));
                  }
                  else if (item.move2Left == false) {
                      if (contentPos.x < -maxW) {
                          item.move2Left = true;
                      }
                      item.scrollView.setContentPosition(new cc.Vec2(contentPos.x - this.mMoveSpeed, contentPos.y));
                  }
              }
          };
          CocosAdForm.prototype.willShow = function (data) {
              _super.prototype.willShow.call(this, data);
              this.floatRuning = false;
              this.addListener();
              this.mAdItemList = [];
              this.mScrollVec = [];
              this.displayChange(data.showAd, data.callback);
          };
          CocosAdForm.prototype.willHide = function () {
              _super.prototype.willShow.call(this);
              this.removeListener();
              this.unschedule(this.onFwUpdate);
          };
          CocosAdForm.prototype.displayChange = function (data, callback) {
              if (callback === void 0) {
                  callback = null;
              }
              this.mShowAd = data;
              this.displayAd(true);
              this.mBackCall = callback;
          };
          CocosAdForm.prototype.displayAd = function (visible) {
              var _this = this;
              this.endContainer.active = visible && this.hasAd(AD_POSITION.EXPORT_FIXED);
              this.endContainer.active && this.initEnd();
              this.bannerContainer.active = visible && this.hasAd(AD_POSITION.BANNER);
              this.topContainer.active = visible && this.hasAd(AD_POSITION.TOP);
              this.floatContainer.active = visible && this.hasAd(AD_POSITION.FLOAT);
              this.floatContainer.active && this.initFloatAd(this.onAdCancel);
              if (!this.floatContainer.active) {
                  this.removeFloatAd();
              }
              this.leftContainer.active = this.rightContainer.active = visible && this.hasAd(AD_POSITION.LEFTRIGHT);
              this.exportContainer.active = visible && this.hasAd(AD_POSITION.EXPORT);
              this.rotateContainer.active = visible && this.hasAd(AD_POSITION.ROTATE);
              this.rotateContainer.active && this.initRotate(this.initRotate);
              !this.rotateContainer.active && this.disableRotate();
              this.formMask.active = visible && this.hasAd(AD_POSITION.MASK);
              if (visible && this.hasAd(AD_POSITION.EXPORT)) {
                  moosnow.http.getAllConfig(function (res) {
                      if (res.exportAutoNavigate == 1) {
                          moosnow.platform.navigate2Mini(_this.mAdData.indexLeft[Common.randomNumBoth(0, _this.mAdData.indexLeft.length - 1)]);
                      }
                  });
              }
              this.showClose(visible);
          };
          CocosAdForm.prototype.onShow = function (data) {
              var _this = this;
              _super.prototype.onShow.call(this, data);
              moosnow.http.getAllConfig(function (res) {
                  if (res) {
                      if (!isNaN(res.adScrollViewSpeed))
                          _this.mMoveSpeed = parseFloat(res.adScrollViewSpeed);
                  }
              });
              this.loadAd(function () {
                  _this.schedule(_this.onFwUpdate, 0.016);
                  _this.initBanner();
                  _this.initExport();
                  _this.initTop();
                  _this.initLeftRight();
                  if (_this.FormData && _this.FormData.callback)
                      _this.FormData.callback();
              });
          };
          CocosAdForm.prototype.initBanner = function () {
              var layout = this.bannerContainer_layout.getComponent(cc.Layout);
              var scrollView = this.bannerContainer_scroll.getComponent(cc.ScrollView);
              layout.type = cc.Layout.Type.HORIZONTAL;
              layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
              this.initView(scrollView, this.bannerContainer_layout, "banner", "bannerAdItem", this.onAdCancel);
          };
          CocosAdForm.prototype.initTop = function () {
              var layout = this.topContainer_layout.getComponent(cc.Layout);
              var scrollView = this.topContainer_scroll.getComponent(cc.ScrollView);
              layout.type = cc.Layout.Type.HORIZONTAL;
              layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
              this.initView(scrollView, this.topContainer_layout, "top", "bannerAdItem", this.onAdCancel);
          };
          CocosAdForm.prototype.initLeftRight = function () {
              var source = Common.deepCopy(this.mAdData.indexLeft);
              var endNum = source.length / 2;
              var right = source.slice(0, endNum);
              var left = source.slice(endNum, source.length);
              var leftLayout = this.leftContainer_layout.getComponent(cc.Layout);
              leftLayout.type = cc.Layout.Type.VERTICAL;
              leftLayout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
              var rightLayout = this.rightContainer_layout.getComponent(cc.Layout);
              rightLayout.type = cc.Layout.Type.VERTICAL;
              rightLayout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
              var leftView = this.leftContainer_scroll.getComponent(cc.ScrollView);
              leftView.horizontal = false;
              leftView.vertical = true;
              var rightView = this.rightContainer_scroll.getComponent(cc.ScrollView);
              rightView.horizontal = false;
              rightView.vertical = true;
              var newLeft = this.setPosition(left, "left", this.onAdCancel);
              var newRight = this.setPosition(right, "right", this.onAdCancel);
              this.initView(leftView, this.leftContainer_layout, "left", "leftAdItem", this.onAdCancel, newLeft);
              this.initView(rightView, this.rightContainer_layout, "right", "leftAdItem", this.onAdCancel, newRight);
          };
          CocosAdForm.prototype.initEnd = function () {
              var layout = this.endContainer_layout.getComponent(cc.Layout);
              layout.type = cc.Layout.Type.GRID;
              layout.resizeMode = cc.Layout.ResizeMode.NONE;
              this.initFiexdView(this.endContainer_layout, "8个固定大导出", "fiexdAdItem", this.onAdCancel);
          };
          CocosAdForm.prototype.initExport = function () {
              var layout = this.exportContainer_layout.getComponent(cc.Layout);
              var scrollView = this.exportContainer_scroll.getComponent(cc.ScrollView);
              layout.type = cc.Layout.Type.GRID;
              layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
              this.initView(scrollView, this.exportContainer_layout, "大导出", "exportAdItem");
          };
          CocosAdForm.prototype.disableRotate = function () {
              var tempName = "rotateAdItem";
              moosnow.form.formFactory.hideNodeByTemplate(tempName, null);
          };
          CocosAdForm.prototype.initRotate = function (callback) {
              var _this = this;
              if (!this.mAdData)
                  return;
              var source = this.setPosition(this.mAdData.indexLeft, "旋转导出", callback, true);
              var beginIdx = Common.randomNumBoth(0, source.length - 1);
              var tempName = "rotateAdItem";
              moosnow.form.formFactory.getTemplate(tempName, function (tempCfg) {
                  var x = tempCfg.width / 2;
                  var y = tempCfg.height / 2;
                  var spacingX = 15;
                  var spacingY = 15;
                  var pos = [
                      { x: -x - spacingX, y: y + spacingY },
                      { x: x + spacingX, y: y + spacingY },
                      { x: -x - spacingX, y: -y - spacingY },
                      { x: x + spacingX, y: -y - spacingY },
                  ];
                  var showIds = [];
                  var endAd = [];
                  for (var i = 0; i < 4; i++) {
                      if (source.length == 0)
                          break;
                      var rowIndex = Common.randomNumBoth(0, source.length - 1);
                      var adRow = source.splice(rowIndex, 1)[0];
                      adRow.x = pos[i].x;
                      adRow.y = pos[i].y;
                      showIds.push({
                          appid: adRow.appid,
                          position: adRow.position,
                          index: i,
                      });
                      endAd.push(adRow);
                  }
                  endAd.forEach(function (adRow) {
                      adRow.source = source;
                      adRow.showIds = showIds;
                      moosnow.form.formFactory.createNodeByTemplate(tempName, CocosAdViewItem, adRow, _this.rotateContainer_layout);
                  });
                  var t = CocosNodeHelper.canvasNode.width / 2 / 800;
                  _this.rotateContainer_layout.children.forEach(function (item, idx) {
                      item.x = pos[idx].x - CocosNodeHelper.canvasNode.width / 2;
                      item.stopAllActions();
                      item.runAction(cc.spawn(cc.moveTo(t, new cc.Vec2(pos[idx].x, pos[idx].y)), cc.rotateBy(t, 360)));
                  });
              });
          };
          CocosAdForm.prototype.disableAd = function () {
              this.unschedule(this.onFwUpdate);
          };
          return CocosAdForm;
      })(CocosBaseForm);
      var showOptions = (function () {
          function showOptions() {
              this._hideForm = true;
              this.extraData = {};
              this.zIndex = 0;
          }
          showOptions.create = function (c) {
              return new c();
          };
          Object.defineProperty(showOptions.prototype, "hideForm", {
              get: function () {
                  return this._hideForm;
              },
              set: function (value) {
                  this._hideForm = value;
              },
              enumerable: true,
              configurable: true,
          });
          return showOptions;
      })();
      var loadAdOptions = (function (_super) {
          __extends(loadAdOptions, _super);
          function loadAdOptions() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.floatPositon = [];
              _this.floatTempletes = ["floatAdItem1"];
              return _this;
          }
          return loadAdOptions;
      })(showOptions);
      var showAdOptions = (function (_super) {
          __extends(showAdOptions, _super);
          function showAdOptions() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.floatPositon = [];
              _this.floatTempletes = ["floatAdItem1"];
              _this.adType = AD_POSITION.NONE;
              _this.zIndex = cc.macro.MAX_ZINDEX;
              _this.pointName = "";
              _this.formName = "" || "loadingForm" || "homeForm" || "gameForm" || "endForm" || "respawnForm";
              return _this;
          }
          return showAdOptions;
      })(loadAdOptions);
      var CocosPrizeForm = (function (_super) {
          __extends(CocosPrizeForm, _super);
          function CocosPrizeForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.btnCancel = null;
              _this.txtCountdown = null;
              _this.btnVideo = null;
              _this.btnShare = null;
              _this.btnReceive = null;
              _this.logo = null;
              _this.mChecked = true;
              _this.formComponents = [
                  new CheckboxComponent(_this.mChecked, function (isChecked) {
                      _this.mChecked = isChecked;
                  }),
              ];
              _this.mTotalSecond = 10;
              _this.mCurrentSecond = 0;
              return _this;
          }
          Object.defineProperty(CocosPrizeForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosPrizeForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnCancel, function () {
                  _this.hideForm();
              });
              this.applyClickAnim(this.btnVideo, function () {
                  _this.onVideo();
              });
              this.applyClickAnim(this.btnReceive, function () {
                  _this.onReceive();
              });
              this.applyClickAnim(this.btnShare, function () {
                  _this.onShare();
              });
          };
          CocosPrizeForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnCancel);
              this.removeClickAnim(this.btnVideo);
              this.removeClickAnim(this.btnReceive);
              this.removeClickAnim(this.btnShare);
          };
          CocosPrizeForm.prototype.willShow = function (data) {
              _super.prototype.willShow.call(this, data);
              this.addListener();
              this.mTotalSecond = 10;
              this.mCurrentSecond = 0;
              if (this.FormData && this.FormData.logo)
                  CocosNodeHelper.changeSrc(this.logo, { url: this.FormData.logo, width: this.logo.width, height: this.logo.height });
              this.resumeCountdown();
              moosnow.platform.showBanner(false);
          };
          CocosPrizeForm.prototype.willHide = function (data) {
              _super.prototype.willShow.call(this, data);
              this.removeListener();
          };
          CocosPrizeForm.prototype.onCountdown = function () {
              this.mCurrentSecond += 1;
              var num = this.mTotalSecond - this.mCurrentSecond;
              if (num < 0) {
                  this.unschedule(this.onCountdown);
                  this.hideForm();
                  return;
              }
              CocosNodeHelper.changeText(this.txtCountdown, num + "\u79D2");
          };
          CocosPrizeForm.prototype.stopCountdown = function () {
              this.unschedule(this.onCountdown);
          };
          CocosPrizeForm.prototype.resumeCountdown = function () {
              this.schedule(this.onCountdown, 1);
          };
          CocosPrizeForm.prototype.onShare = function () {
              var _this = this;
              this.stopCountdown();
              moosnow.platform.share({
                  channel: "",
              }, function (shared) {
                  _this.resumeCountdown();
                  if (shared) {
                  }
              });
          };
          CocosPrizeForm.prototype.onVideo = function () {
              var _this = this;
              this.stopCountdown();
              moosnow.platform.showVideo(function (res) {
                  if (res == VIDEO_STATUS.END) {
                      return;
                  }
                  else if (res == moosnow.VIDEO_STATUS.ERR)
                      moosnow.form.showToast(VIDEO_MSG.ERR);
                  else {
                      moosnow.form.showToast(VIDEO_MSG.NOTEND);
                  }
                  _this.resumeCountdown();
              });
          };
          CocosPrizeForm.prototype.onReceive = function () {
              if (this.mChecked)
                  this.onVideo();
              else {
              }
          };
          return CocosPrizeForm;
      })(CocosBaseForm);
      var FormLayout = (function () {
          function FormLayout() { }
          FormLayout.ToastForm = "toastForm";
          FormLayout.AdForm = "adForm";
          FormLayout.MistouchForm = "mistouchForm";
          FormLayout.PrizeForm = "prizeForm";
          FormLayout.TotalForm = "totalForm";
          FormLayout.EndForm = "endForm";
          FormLayout.RespawnForm = "respawnForm";
          FormLayout.FailForm = "failForm";
          FormLayout.PauseForm = "pauseForm";
          FormLayout.ShareForm = "shareForm";
          FormLayout.TryForm = "tryForm";
          FormLayout.SetForm = "setForm";
          FormLayout.BoxForm = "boxForm";
          FormLayout.NativeForm = "nativeForm";
          return FormLayout;
      })();
      var CocosNativeForm = (function (_super) {
          __extends(CocosNativeForm, _super);
          function CocosNativeForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.baseBox = null;
              _this.logo = null;
              _this.btnTopClose = null;
              _this.btnClose = null;
              _this.btnOpen = null;
              _this.txtMemo = null;
              return _this;
          }
          Object.defineProperty(CocosNativeForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosNativeForm.prototype.onShow = function (data) {
              var _this = this;
              _super.prototype.onShow.call(this, data);
              this.node.zIndex = cc.macro.MAX_ZINDEX;
              this.addListener();
              console.log("显示原生广告");
              moosnow.platform.hideBanner();
              moosnow.platform.showNativeAd(function (row) {
                  console.log("原生广告", row);
                  if (row && row.imgUrlList && row.imgUrlList.length > 0) {
                      _this.node.active = true;
                      if (row.creativeType == 6) {
                          _this.baseBox.height = _this.baseBox.width / 2;
                      }
                      else {
                          _this.baseBox.height = _this.baseBox.width * (210 / 320);
                      }
                      CocosNodeHelper.changeText(_this.txtMemo, row.desc);
                      CocosNodeHelper.changeSrc(_this.logo, { url: row.imgUrlList[0], width: _this.logo.width, height: _this.logo.height });
                  }
                  else {
                      if (_this.FormData && _this.FormData.nullCallback)
                          _this.FormData.nullCallback();
                      moosnow.platform.showBanner(false);
                  }
              });
              moosnow.http.getAllConfig(function (res) {
                  if (res && res.smallNativeAdClose == 1) {
                      _this.btnTopClose.scale = 0.7;
                  }
                  if (res && res.zs_native_click_switch == 1) {
                      _this.btnOpen.active = true;
                      _this.btnClose.active = false;
                  }
                  else {
                      _this.btnOpen.active = false;
                      _this.btnClose.active = true;
                  }
              });
          };
          CocosNativeForm.prototype.willHide = function (data) {
              this.remoteListener();
              _super.prototype.willHide.call(this, data);
          };
          CocosNativeForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.logo, function () {
                  _this.onOpenAd();
              });
              this.applyClickAnim(this.btnOpen, function () {
                  _this.onOpenAd();
              });
              this.applyClickAnim(this.btnTopClose, function () {
                  _this.onCloseAd();
              });
              this.applyClickAnim(this.btnClose, function () {
                  _this.onCloseAd();
              });
          };
          CocosNativeForm.prototype.remoteListener = function () {
              this.removeClickAnim(this.logo);
              this.removeClickAnim(this.btnOpen);
              this.removeClickAnim(this.btnTopClose);
              this.removeClickAnim(this.btnClose);
          };
          CocosNativeForm.prototype.onCloseAd = function () {
              if (this.FormData && this.FormData.callback)
                  this.FormData.callback();
              this.hideForm();
          };
          CocosNativeForm.prototype.onOpenAd = function () {
              var _this = this;
              moosnow.platform.clickNative(function () {
                  _this.hideForm();
              });
          };
          return CocosNativeForm;
      })(CocosBaseForm);
      var CocosRespawnForm = (function (_super) {
          __extends(CocosRespawnForm, _super);
          function CocosRespawnForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.btnVideo = null;
              _this.btnHome = null;
              return _this;
          }
          Object.defineProperty(CocosRespawnForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosRespawnForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnVideo, function () {
                  _this.onVideoTry();
              });
              this.applyClickAnim(this.btnHome, function () {
                  _this.onHome();
              });
          };
          CocosRespawnForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnVideo);
              this.removeClickAnim(this.btnHome);
          };
          CocosRespawnForm.prototype.onShow = function (data) {
              _super.prototype.onShow.call(this, data);
              this.addListener();
          };
          CocosRespawnForm.prototype.onHide = function (data) {
              _super.prototype.onHide.call(this, data);
              this.removeListener();
          };
          CocosRespawnForm.prototype.onVideoTry = function () {
              var _this = this;
              moosnow.platform.showVideo(function (res) {
                  if (res == VIDEO_STATUS.END) {
                      _this.hideForm();
                      if (_this.FormData.videoCallback)
                          _this.FormData.videoCallback();
                  }
                  else if (res == VIDEO_STATUS.ERR) {
                      moosnow.form.showToast(VIDEO_MSG.ERR);
                  }
                  else if (res == VIDEO_STATUS.NOTEND) {
                      moosnow.form.showToast(VIDEO_MSG.NOTEND);
                  }
              });
          };
          CocosRespawnForm.prototype.onHome = function () {
              this.hideForm();
              if (this.FormData.callback)
                  this.FormData.callback();
          };
          return CocosRespawnForm;
      })(CocosBaseForm);
      var CocosFailForm = (function (_super) {
          __extends(CocosFailForm, _super);
          function CocosFailForm() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.btnBack = null;
              _this.btnVideo = null;
              return _this;
          }
          Object.defineProperty(CocosFailForm.prototype, "FormData", {
              get: function () {
                  return this.mFormData;
              },
              enumerable: true,
              configurable: true,
          });
          CocosFailForm.prototype.addListener = function () {
              var _this = this;
              this.applyClickAnim(this.btnBack, function () {
                  _this.onBack();
              });
              this.applyClickAnim(this.btnVideo, function () {
                  _this.onVideo();
              });
          };
          CocosFailForm.prototype.removeListener = function () {
              this.removeClickAnim(this.btnBack);
          };
          CocosFailForm.prototype.onVideo = function () {
              var _this = this;
              moosnow.platform.showVideo(function (res) {
                  if (res == VIDEO_STATUS.END) {
                      _this.hideForm();
                      if (_this.FormData.videoCallback)
                          _this.FormData.videoCallback();
                  }
                  else if (res == VIDEO_STATUS.ERR) {
                      moosnow.form.showToast(VIDEO_MSG.ERR);
                  }
                  else if (res == VIDEO_STATUS.NOTEND) {
                      moosnow.form.showToast(VIDEO_MSG.NOTEND);
                  }
              });
          };
          CocosFailForm.prototype.onShow = function (data) {
              this.addListener();
          };
          CocosFailForm.prototype.willHide = function () {
              this.removeListener();
          };
          CocosFailForm.prototype.onBack = function () {
              this.hideForm();
              if (this.FormData.callback)
                  this.FormData.callback();
          };
          return CocosFailForm;
      })(CocosBaseForm);
      var showFormOptions = (function () {
          function showFormOptions(name, formLogic, formData) {
              this.name = "";
              this.formData = null;
              this.parent = null;
              this.remoteLayout = true;
              this.layoutOptions = null;
              this.showOnce = true;
              this.name = name;
              this.formLogic = formLogic;
              this.formData = formData;
          }
          return showFormOptions;
      })();
      var FormUtil = (function () {
          function FormUtil() {
              this.mBaseForm = new CocosBaseForm();
              this.formFactory = new CocosFormFactory();
          }
          FormUtil.prototype.initCheckboxState = function (defaultChecked, callback) {
              if (defaultChecked === void 0) {
                  defaultChecked = true;
              }
              this.mCheckbox = new CheckboxComponent(defaultChecked, callback);
              this.mCheckbox.onShow(null);
          };
          FormUtil.prototype.checkboxToggle = function () {
              this.mCheckbox.checkToggle();
          };
          FormUtil.prototype.applyClickAnim = function (node, callback, stopPropagation, once) {
              if (stopPropagation === void 0) {
                  stopPropagation = false;
              }
              if (once === void 0) {
                  once = true;
              }
              this.mBaseForm.applyClickAnim(node, callback, stopPropagation, once);
          };
          FormUtil.prototype.removeClickAnim = function (node) {
              this.mBaseForm.removeClickAnim(node);
          };
          FormUtil.prototype.showToast = function (msg) {
              this.formFactory.showForm(new showFormOptions(FormLayout.ToastForm, CocosToastForm, msg));
          };
          FormUtil.prototype.showNativeAd = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.NativeForm, CocosNativeForm, options));
          };
          FormUtil.prototype.loadAd = function (options) {
              var formOptions = new showFormOptions(FormLayout.AdForm, CocosAdForm, __assign(__assign({}, new loadAdOptions()), options));
              formOptions.callback = function (node) {
                  console.log("create ad form");
              };
              this.formFactory.showForm(formOptions);
          };
          FormUtil.prototype.showAd = function (adType, callback, points, templetes, zIndex, pointName, formName) {
              if (adType === void 0) {
                  adType = AD_POSITION.NONE;
              }
              if (zIndex === void 0) {
                  zIndex = cc.macro.MAX_ZINDEX;
              }
              if (pointName === void 0) {
                  pointName = "";
              }
              if (formName === void 0) {
                  formName = "" || "loadingForm" || "homeForm" || "gameForm" || "endForm" || "respawnForm";
              }
              var options = new showAdOptions();
              options.adType = adType;
              options.zIndex = zIndex;
              options.floatPositon = points;
              options.floatTempletes = templetes;
              options.pointName = pointName;
              options.formName = formName;
              options.callback = callback;
              this.showAd2(options);
          };
          FormUtil.prototype.showAd2 = function (options) {
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.AD_VIEW_CHANGE, {
                  showAd: options.adType,
                  zIndex: options.zIndex,
                  points: options.floatPositon,
                  templetes: options.floatTempletes,
                  pointName: options.pointName,
                  formName: options.formName,
                  callback: options.callback,
              });
          };
          FormUtil.prototype.hideAd = function (callback) {
              moosnow.event.sendEventImmediately(PLATFORM_EVENT.AD_VIEW_CHANGE, { showAd: AD_POSITION.NONE, callback: callback });
          };
          FormUtil.prototype.showCoin = function (options) { };
          FormUtil.prototype.showMistouch = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.MistouchForm, CocosMistouchForm, options));
          };
          FormUtil.prototype.showPrize = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.PrizeForm, CocosPrizeForm, options));
          };
          FormUtil.prototype.showTotal = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.TotalForm, CocosTotalForm, options));
          };
          FormUtil.prototype.showEnd = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.EndForm, CocosEndForm, options));
          };
          FormUtil.prototype.showRespawn = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.RespawnForm, CocosRespawnForm, options));
          };
          FormUtil.prototype.showFail = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.FailForm, CocosFailForm, options));
          };
          FormUtil.prototype.showPause = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.PauseForm, CocosPauseForm, options));
          };
          FormUtil.prototype.showShare = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.ShareForm, CocosShareForm, options));
          };
          FormUtil.prototype.showTry = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.TryForm, CocosTryForm, options));
          };
          FormUtil.prototype.showSet = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.SetForm, CocosSetForm, options));
          };
          FormUtil.prototype.showBox = function (options) {
              this.formFactory.showForm(new showFormOptions(FormLayout.BoxForm, CocosBoxForm, options));
          };
          FormUtil.prototype.createForm = function (formName) {
              this.formFactory.showForm(new showFormOptions(formName, CocosBaseForm, {}));
          };
          FormUtil.prototype.hideForm = function (formName) {
              this.formFactory.hideForm(formName, null);
          };
          return FormUtil;
      })();
      var HWModule = (function (_super) {
          __extends(HWModule, _super);
          function HWModule() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.platformName = "hbs";
              _this.mIsClickedNative = false;
              return _this;
          }
          HWModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
              if (remoteOn === void 0) {
                  remoteOn = true;
              }
              if (horizontal === void 0) {
                  horizontal = BANNER_HORIZONTAL.CENTER;
              }
              if (vertical === void 0) {
                  vertical = BANNER_VERTICAL.BOTTOM;
              }
              if (idIndex === void 0) {
                  idIndex = -1;
              }
          };
          HWModule.prototype.createRewardAD = function (show, idIndex) {
              var _this = this;
              if (idIndex === void 0) {
                  idIndex = 0;
              }
              if (this.videoLoading) {
                  return;
              }
              if (!window[this.platformName]) {
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!window[this.platformName].createRewardedVideoAd) {
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              var videoId = this.getVideoId(idIndex);
              if (Common.isEmpty(videoId)) {
                  console.warn(MSG.VIDEO_KEY_IS_NULL);
                  if (moosnow.platform.videoCb)
                      moosnow.platform.videoCb(VIDEO_STATUS.END);
                  return;
              }
              if (!this.video[videoId]) {
                  console.log(" HWModule ~ createRewardAD ~ videoId", videoId);
                  this.video[videoId] = window[this.platformName].createRewardedVideoAd({
                      adUnitId: videoId,
                  });
                  if (!this.video[videoId]) {
                      console.warn("创建视频广告失败");
                      return;
                  }
                  this.video[videoId].onError(this._onVideoError);
                  this.video[videoId].onClose(this._onVideoClose);
                  this.video[videoId].onLoad(function () {
                      moosnow.platform.videoLoading = false;
                      if (_this.video[videoId]) {
                          _this.video[videoId].show();
                      }
                  });
              }
              moosnow.platform.videoLoading = true;
              moosnow.platform.videoPlaying = false;
              this.video[videoId].load();
          };
          HWModule.prototype._onVideoError = function (e) {
              console.warn(MSG.VIDEO_ERROR_COMPLETED, JSON.stringify(e));
          };
          HWModule.prototype.showNativeAd = function (callback) {
              var _this = this;
              if (!this.native)
                  this._prepareNative(true);
              this.nativeCb = callback;
              if (this.native) {
                  var ret = this.native.load();
                  ret &&
                      ret
                          .then(function () {
                          console.log("原生广告加载完成");
                      })
                          .catch(function (err) {
                          console.log("原生广告加载失败");
                          moosnow.http.getAllConfig(function (res) {
                              if (res.nativeErrorShowInter == 1) {
                                  console.log("原生加载出错，用插屏代替");
                                  _this.nativeCb(null);
                                  _this.showInter();
                              }
                              else {
                                  _this.nativeCb(null);
                              }
                          });
                      });
              }
          };
          HWModule.prototype._prepareNative = function (isLoad) {
              var _this = this;
              if (isLoad === void 0) {
                  isLoad = false;
              }
              if (!window[this.platformName])
                  return;
              if (!window[this.platformName].createNativeAd)
                  return;
              if (this.native)
                  return;
              var adUnitId = this.nativeId;
              console.log(" HWModule ~ _prepareNative ~ adUnitId", adUnitId);
              this.native = window[this.platformName].createNativeAd({
                  adUnitId: adUnitId,
                  success: function (code) {
                      console.log("_prepareNative loadNativeAd : success", code);
                  },
                  fail: function (data, code) {
                      if (_this.nativeCb)
                          _this.nativeCb(null);
                      console.log("_prepareNative loadNativeAd fail: " + data + "," + code);
                  },
              });
              this.native.onLoad(this._onNativeLoad.bind(this));
              this.native.onError(this._onNativeError.bind(this));
          };
          HWModule.prototype._onNativeLoad = function (res) {
              var _this = this;
              console.log(" HWModule ~ _onNativeLoad ~ res", JSON.stringify(res));
              this.nativeLoading = false;
              console.log(MSG.NATIVE_LOAD_COMPLETED, res);
              if (res && res.adList && res.adList.length > 0) {
                  this.nativeAdResult = res.adList[res.adList.length - 1];
                  if (!Common.isEmpty(this.nativeAdResult.adId)) {
                      console.log(MSG.NATIVE_REPORT);
                      console.log("HWModule ~ _onNativeLoad ~ reportAdShow ", this.nativeAdResult.adId);
                      this.native.reportAdShow({
                          adId: this.nativeAdResult.adId,
                      });
                  }
                  if (Common.isFunction(this.nativeCb)) {
                      this.nativeCb(__assign(__assign({}, Common.deepCopy(this.nativeAdResult)), { desc: this.nativeAdResult && this.nativeAdResult.desc ? this.nativeAdResult.desc : "", title: this.nativeAdResult && this.nativeAdResult.title ? this.nativeAdResult.title : "" }));
                  }
              }
              else {
                  console.log(MSG.NATIVE_LIST_NULL);
                  if (Common.isFunction(this.nativeCb)) {
                      moosnow.http.getAllConfig(function (res) {
                          if (res.nativeErrorShowInter == 1) {
                              console.log("原生加载出错，用插屏代替");
                              _this.showInter();
                          }
                          else {
                              _this.nativeCb(null);
                          }
                      });
                  }
              }
          };
          HWModule.prototype._onNativeError = function (err) {
              var _this = this;
              this.nativeLoading = false;
              this.nativeAdResult = null;
              if (err.code == 20003) {
                  if (this.nativeIdIndex < this.nativeId.length - 1) {
                      console.log(MSG.NATIVE_ERROR, err);
                      this.nativeIdIndex += 1;
                      this._destroyNative();
                  }
                  else {
                      console.log(MSG.NATIVE_NOT_ID_USE);
                      this.nativeIdIndex = 0;
                  }
              }
              else {
                  if (this.nativeCb)
                      this.nativeCb(null);
                  console.log(MSG.NATIVE_ERROR2, err);
              }
              moosnow.http.getAllConfig(function (res) {
                  if (res.nativeErrorShowInter == 1) {
                      console.log("原生加载出错，用插屏代替");
                      _this.showInter();
                  }
                  else {
                      if (_this.nativeCb)
                          _this.nativeCb(null);
                  }
              });
          };
          HWModule.prototype.clickNative = function (callback) {
              if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                  this.mClickedNativeCallback = callback;
                  this.mIsClickedNative = true;
                  console.log(MSG.NATIVE_CLICK, this.nativeAdResult.adId);
                  this.native.reportAdClick({
                      adId: this.nativeAdResult.adId,
                  });
              }
          };
          return HWModule;
      })(PlatformModule);
      var moosnow$1 = (function () {
          function moosnow() { }
          moosnow.getAppPlatform = function () {
              return Common.platform;
          };
          moosnow.appConfig = function () {
              return Common.config;
          };
          Object.defineProperty(moosnow, "platform", {
              get: function () {
                  if (!this.mPlatform) {
                      if (Common.platform == APP_PLATFORM.WX)
                          this.mPlatform = new WXModule();
                      else if (Common.platform == APP_PLATFORM.OPPO)
                          this.mPlatform = new OPPOModule();
                      else if (Common.platform == APP_PLATFORM.VIVO)
                          this.mPlatform = new VIVOModule();
                      else if (Common.platform == APP_PLATFORM.OPPO_ZS) {
                          this.mPlatform = new ZSOPPOModule();
                      }
                      else if (Common.platform == APP_PLATFORM.BYTEDANCE)
                          this.mPlatform = new TTModule();
                      else if (Common.platform == APP_PLATFORM.QQ)
                          this.mPlatform = new QQModule();
                      else if (Common.platform == APP_PLATFORM.BAIDU)
                          this.mPlatform = new BDModule();
                      else if (Common.platform == APP_PLATFORM.UC)
                          this.mPlatform = new UCModule();
                      else if (Common.platform == APP_PLATFORM.HW)
                          this.mPlatform = new HWModule();
                      else {
                          this.mPlatform = new PlatformModule();
                      }
                  }
                  return this.mPlatform;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(moosnow, "ad", {
              get: function () {
                  if (!moosnow.mAd) {
                      if (Common.platform == APP_PLATFORM.WX || Common.platform == APP_PLATFORM.PC || Common.platform == APP_PLATFORM.BYTEDANCE)
                          moosnow.mAd = new WXAdModule();
                      else if (Common.platform == APP_PLATFORM.OPPO) {
                          moosnow.mAd = new OPPOAdModule();
                      }
                      else if (Common.platform == APP_PLATFORM.OPPO_ZS) {
                          moosnow.mAd = new ZSOPPOAdModule();
                      }
                      else
                          moosnow.mAd = new AdModule();
                  }
                  return moosnow.mAd;
              },
              enumerable: true,
              configurable: true,
          });
          Object.defineProperty(moosnow, "http", {
              get: function () {
                  if (!this.mHttp) {
                      if (Common.platform == APP_PLATFORM.WX)
                          this.mHttp = new HttpModule();
                      else if (Common.platform == APP_PLATFORM.OPPO_ZS) {
                          this.mHttp = new ZSHttpModule();
                      }
                      else
                          this.mHttp = new HttpModule();
                  }
                  return this.mHttp;
              },
              enumerable: true,
              configurable: true,
          });
          moosnow.VIDEO_STATUS = VIDEO_STATUS;
          moosnow.VIDEO_MSG = VIDEO_MSG;
          moosnow.SHARE_MSG = SHARE_MSG;
          moosnow.BANNER_HORIZONTAL = BANNER_HORIZONTAL;
          moosnow.BANNER_VERTICAL = BANNER_VERTICAL;
          moosnow.BLOCK_HORIZONTAL = BLOCK_HORIZONTAL;
          moosnow.BLOCK_VERTICAL = BLOCK_VERTICAL;
          moosnow.SHARE_CHANNEL = SHARE_CHANNEL;
          moosnow.APP_PLATFORM = APP_PLATFORM;
          moosnow.PLATFORM_EVENT = PLATFORM_EVENT;
          moosnow.Common = Common;
          moosnow.AD_POSITION = AD_POSITION;
          moosnow.data = new GameDataCenter();
          moosnow.resource = new ResourceModule();
          moosnow.setting = new SettingModule();
          moosnow.event = new EventModule();
          moosnow.audio = new AudioModule();
          moosnow.form = new FormUtil();
          moosnow.nodeHelper = CocosNodeHelper;
          return moosnow;
      })();
      window["moosnow"] = moosnow$1;
      return moosnow$1;
  })();

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
//# sourceMappingURL=bundle.js.map
