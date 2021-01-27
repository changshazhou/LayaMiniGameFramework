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
  EventType.GameCenterOnly = "GameCenterOnly";
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
          moosnow.event.addListener(EventType.GameCenterOnly, this, () => {
              console.log("单独跳转游戏中心");
              this.couldJumpToGameCenter = false;
              let lastcurAldSendValue = this.curAldSendValue.valueOf();
              this.curAldSendValue = aldValue.GameCenter;
              Lite.ui.pushUIForm(UIForms.GameCenter, Laya.Handler.create(this, () => {
                  this.curAldSendValue = lastcurAldSendValue.valueOf();
                  Lite.ui.hideUIForm(UIForms.GameCenter);
                  this.couldJumpToGameCenter = true;
              }));
              this.setAldPoint(aldKey.ViewOpen, aldValue.GameCenter);
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
          moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_FLASH_BANNER_HIDE, this, () => {
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
                      moosnow.event.sendEventImmediately(EventType.GameStateChange, GameState.Home);
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
                      moosnow.event.sendEventImmediately(EventType.GameStateChange, GameState.InGame);
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
                      moosnow.event.sendEventImmediately(EventType.GameStateChange, args.isWin == true ? GameState.Win : GameState.Fail);
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
                      moosnow.event.sendEventImmediately(EventType.GameStateChange, GameState.Home);
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
              Laya.SoundManager.playSound("subRes/audio/click.mp3");
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
                  Laya.SoundManager.playSound("subRes/audio/smash.mp3");
                  this.tweenProgress += 0.15;
                  this.ccTimes++;
                  if (this.ccTimes == this.ccTimesLimit) {
                      switch (Lite.config.mistouchNum) {
                          case 1:
                              console.log("Export_CrazyClick:弱狂点");
                              moosnow.platform.showBanner(true, (inner) => {
                                  if (true == inner) {
                                      moosnow.platform.hideBanner();
                                      moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE);
                                      this.ccClear();
                                  }
                              }, moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadBannerIndex);
                              Laya.timer.once(1500, this, () => {
                                  moosnow.platform.hideBanner();
                                  moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE);
                              });
                              break;
                          case 2:
                              console.log("Export_CrazyClick:强狂点");
                              this.ccTimes = 0;
                              moosnow.platform.showBanner(true, (inner) => {
                                  if (true == inner) {
                                      moosnow.platform.hideBanner();
                                      moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE);
                                      this.ccClear();
                                  }
                              }, moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadBannerIndex);
                              Laya.timer.once(1500, this, () => {
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
          Laya.SoundManager.playSound("subRes/audio/getTreasure.mp3");
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
          moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE);
          moosnow.platform.hideBanner();
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
                  Laya.timer.once(Lite.config.FlashBannerContinueTime * 1000, this, () => {
                      this.bannerHide();
                  });
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
                  Laya.timer.once(Lite.config.FlashBannerContinueTime * 1000, this, () => {
                      this.bannerHide();
                  });
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
          super.onAwake();
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
          this.adList.owner.top;
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
      onShow(arg) {
          this.winfailShowFunc(arg.isWin);
          moosnow.event.sendEventImmediately(EventType.GAME_STATE_END);
          this.curGetMoney = arg.getMoney;
          this.addMoneyFont.value = arg.getMoney.toString();
          this.adAddMoneyFont.value = (arg.getMoney * 3).toString();
          let adarr = Lite.config.getAd();
          for (let q = 0; q < this.mainExportAd.cells.length; q++) {
              this.mainExportAd.cells[q].getComponent(adItem).init(adarr[q]);
          }
          this.continueBtnMisstouch.Act = true;
          if (true == Lite.config.aldMonitorOn) {
              moosnow.http.endGame(Lite.data.getVirtualLevel().toString(), arg.isWin);
          }
          if (true == arg.isWin) {
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
              moosnow.event.sendEventImmediately(EventType.GotoNextProgress, { isWin: true, getMoney: 666 });
          });
          this.owner.getChildByName("FailBtn").on(Laya.Event.CLICK, this, () => {
              moosnow.event.sendEventImmediately(EventType.GotoNextProgress, { isWin: false, getMoney: 333 });
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
