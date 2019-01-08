
/*:
 * @plugindesc 敵が弱点を探ってくる機能を実装する補助プラグインです。
 * @author NumAniCloud
 * 
 * @param PrimalElement1
 * @desc 基本属性のID。`2`と逆属性で、`3` `5`と同相。
 * @default 1
 * 
 * @param PrimalElement2
 * @desc 基本属性のID。`1`と逆属性で、`4` `6`と同相。
 * @default 2
 * 
 * @param PrimalElement3
 * @desc 基本属性のID。`4`と逆属性で、`1` `5`と同相。
 * @default 3
 * 
 * @param PrimalElement4
 * @desc 基本属性のID。`3`と逆属性で、`2` `6`と同相。
 * @default 4
 * 
 * @param PrimalElement5
 * @desc 基本属性のID。`6`と逆属性で、`1` `3`と同相。
 * @default 5
 * 
 * @param PrimalElement6
 * @desc 基本属性のID。`5`と逆属性で、`2` `4`と同相。
 * @default 6
 * 
 * @param ActorsModeState1
 * @desc プレイヤー側の属性モード1。
 * PrimalElement1に対応する属性。
 * @default 
 * 
 * @param ActorsModeState2
 * @desc プレイヤー側の属性モード2。
 * PrimalElement2に対応する属性。
 * @default 
 * 
 * @param ActorsModeState3
 * @desc プレイヤー側の属性モード3。
 * PrimalElement3に対応する属性。
 * @default 
 * 
 * @param ActorsModeState4
 * @desc プレイヤー側の属性モード4。
 * PrimalElement4に対応する属性。
 * @default 
 * 
 * @param ActorsModeState5
 * @desc プレイヤー側の属性モード5。
 * PrimalElement5に対応する属性。
 * @default 
 * 
 * @param ActorsModeState6
 * @desc プレイヤー側の属性モード6。
 * PrimalElement6に対応する属性。
 * @default 
 * 
 * @param EnemiesModeState1
 * @desc 敵側の属性モード1。
 * PrimalElement1に対応する属性。
 * @default 
 * 
 * @param EnemiesModeState2
 * @desc 敵側の属性モード2。
 * PrimalElement2に対応する属性。
 * @default 
 * 
 * @param EnemiesModeState3
 * @desc 敵側の属性モード3。
 * PrimalElement3に対応する属性。
 * @default 
 * 
 * @param EnemiesModeState4
 * @desc 敵側の属性モード4。
 * PrimalElement4に対応する属性。
 * @default 
 * 
 * @param EnemiesModeState5
 * @desc 敵側の属性モード5。
 * PrimalElement5に対応する属性。
 * @default 
 * 
 * @param EnemiesModeState6
 * @desc 敵側の属性モード6。
 * PrimalElement6に対応する属性。
 * @default 
 * 
 * @param DeconstructMap1
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap2
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap3
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap4
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap5
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap6
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap7
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap8
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap9
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap10
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap11
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap12
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap13
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap14
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param DeconstructMap15
 * @desc 複合属性を分解するとどの属性になるかをマップします。
 * カンマ区切りで、1番目の属性を分解すると2番目以降の属性になります。
 * @default 
 * 
 * @param WeakRate
 * @desc 弱点を突いたとき(LV1)のダメージ倍率
 * @default 2
 * 
 * @param DeathRate
 * @desc 弱点を突いたとき(LV2)のダメージ倍率
 * @default 1000
 */

class ElementTable {
    constructor(weakModeMeta, resistModeMeta, weakSwitchId, resistSwitchId, missSwitchId) {
        this.weakModeMeta = weakModeMeta;
        this.resistModeMeta = resistModeMeta;
        this.weakSwitchId = weakSwitchId;
        this.resistSwitchId = resistSwitchId;
        this.missSwitchId = missSwitchId;
    }
}

class ParameterRepository {
    constructor() {
        this.parameters = PluginManager.parameters("AppliedElementFlag");
        this.deconstructRule = {};   // 1はじまり
        this.primalElements = new Array(6 + 1);     // 1はじまり
        this.elementTable = {};
        this.actorsStateId = new Array(6 + 1);
        this.enemiesStateId = new Array(6 + 1);
        this.loadElements();
        this.loadDeconstructRule();
        this.loadStates();
    }

    loadStates() {
        for (var i = 1; i <= 6; ++i) {
            this.actorsStateId[i] = this.parameters["ActorsModeState" + i];
            this.enemiesStateId[i] = this.parameters["EnemiesModeState" + i];
        }
    }

    loadDeconstructRule() {
        for(var i = 1; i <= 15; ++i) {
            var key = "DeconstructMap" + i;
            var array = this.parameters[key].split(",");
            this.deconstructRule[array[0]] = array.map(function(t, i2, array) { return Number(t); });
        }
    }

    loadElement(index, weakModeMeta, resistModeMeta, weakSwitchId, resistSwitchId, missSwitchId) {
        this.primalElements[index] = this.parameters["PrimalElement" + index];
        var key = "E" + this.primalElements[index];
        this.elementTable[key] = new ElementTable(weakModeMeta, resistModeMeta,
            weakSwitchId, resistSwitchId, missSwitchId);
    }

    loadElements() {
        this.loadElement(1, 1, 2, "weak1", "weak2", "notWeak1");
        this.loadElement(2, 2, 1, "weak2", "weak1", "notWeak1");
        this.loadElement(3, 3, 4, "weak3", "weak4", "notWeak3");
        this.loadElement(4, 4, 3, "weak4", "weak3", "notWeak3");
        this.loadElement(5, 5, 6, "weak5", "weak6", "notWeak5");
        this.loadElement(6, 6, 5, "weak6", "weak5", "notWeak5");
    }

    getSingleElement(elementId) {
        for (var i = 0; i < 6; ++i) {
            var single = this.primalElements[i + 1];
            if (elementId == single) {
                return [single];
            }
        }
        return null;
    }

    getCompositeElement(elementId) {
        return this.deconstructRule[String(elementId)];
    }

    deconstruct(elementId) {
        var elements = this.getSingleElement(elementId);
        if (elements != null) return elements;

        return this.getCompositeElement(elementId);
    }

    getParam(name) {
        return this.parameters[name];
    }
}

class BattlersTolerantKnowledge {
    constructor(battler) {
    }
}

class ToleranceKnowledge {
    constructor(parameterRepository) {
        this.parameterRepository = parameterRepository;
    }
}

class PrimalElement {
    constructor(parameterRepository, value) {
        this.parameterRepository = parameterRepository;
        this.value = value;
    }

    getPrimalIndex() {
        return this.value;
    }

    getElementId() {
        return this.parameterRepository.primalElements[this.value];
    }

    setByPrimalIndex(value) {
        this.value = value;
    }

    setByElementId(id) {
        this.value = this.parameterRepository.primalElements.findIndex(i => i == id);
    }
}

class MagicLevelCalculator {
    constructor(parameterRepository) {
        this.parameterRepository = parameterRepository;
        this.reverseMap = [-1, 2, 1, 4, 3, 6, 5];
    }

    getLevel(subject, action, target) {
        var result = 0;
        var item = action.item();
        var skillElements = this.parameterRepository.deconstruct(item.damage.elementId);

        if (skillElements == undefined) return 0;

        // 単色魔法で、モードと一致していれば+1
        if (skillElements.some(elm => subject.elementMode.getPrimalIndex() == elm)
            && skillElements.length == 1) {
            result += 1;
        }

        // 敵の弱点ならば+1
        var weakPrimalElement = this.reverseMap[target.elementMode.getPrimalIndex()];
        if (skillElements.some(elm => weakPrimalElement == elm)) {
            result += 1;
        }

        // 敵の抵抗ならば-2
        if (skillElements.some(elm => target.elementMode.getPrimalIndex() == elm)) {
            result -= 2;
        }

        return result;
    }
}

(function() {
    var parameterRepository = new ParameterRepository();
    var toleranceKnowledge = new ToleranceKnowledge(parameterRepository);
    var magicLevelCalculator = new MagicLevelCalculator(parameterRepository);
    var modeChangeChocices = [
        "\\I[77]\\C[21]打撃属性 (逆:\\I[76])",
        "\\I[76]\\C[4]切削属性 (逆:\\I[77])",
        "\\I[64]\\C[21]燃焼属性 (逆:\\I[65])",
        "\\I[65]\\C[4]冷却属性 (逆:\\I[64])",
        "\\I[02]\\C[21]中毒属性 (逆:\\I[70])",
        "\\I[70]\\C[4]呪霊属性 (逆:\\I[02])",
    ];

    // 味方のモードチェンジスキル
    var changeMode = function(subject, log) {
        $gameMessage.add("\\>どの属性モードに遷移しますか？\n\\>遷移した属性に抵抗を持ち、逆の属性に弱点を持ちます。\n\\>遷移した属性の魔法を使ったときに\n\\>効き目レベルが+1されます。");
        $gameMessage.setChoices(modeChangeChocices, -1, -1);
        $gameMessage.setChoiceBackground(0);
        $gameMessage.setChoicePositionType(2);
        $gameMessage.setChoiceCallback(n => {
            for (var i = 0; i < 6; ++i) {
                subject.removeState(Number(parameterRepository.actorsStateId[i + 1]));
            }
            subject.elementMode = new PrimalElement(parameterRepository, n + 1);
            subject.addState(Number(parameterRepository.actorsStateId[n + 1]));
            log.displayAutoAffectedStatus(subject);
        });
    };

    // 敵のモードチェンジスキル
    var changeEnemiesMode = function(subject, id, log) {
        for (var i = 0; i < 6; ++i) {
            subject.removeState(Number(parameterRepository.enemiesStateId[i + 1]));
        }
        subject.elementMode = new PrimalElement(parameterRepository, id);
        subject.addState(Number(parameterRepository.enemiesStateId[id]));
        log.displayAutoAffectedStatus(subject);
    }

    // スキルの使用をフック
    var Window_BattleLog_startAction = Window_BattleLog.prototype.startAction;
    Window_BattleLog.prototype.startAction = function(subject, action, targets) {
        Window_BattleLog_startAction.call(this, subject, action, targets);

        if(action.isSkill()){
            var item = action.item();
            var id = item.meta["ModeChange"];

            // モードチェンジスキルだったらモードを遷移する
            if (id == 0 && subject instanceof Game_Actor) {
                changeMode(subject, this);
            }
            else if (id != undefined && subject instanceof Game_Enemy) {
                changeEnemiesMode(subject, id, this);
            }
        }
    };

    var findElementModeInStates = function(states) {
        var modeState = states.find(st => st.meta["ElementMode"] != undefined);
        if (modeState != undefined) {
            return new PrimalElement(parameterRepository, Number(modeState.meta["ElementMode"]));
        }
        return null;
    }

    // バトル開始時の敵/アクターのモードを読み込み
    var Game_Unit_onBattleStart_base = Game_Unit.prototype.onBattleStart;
    Game_Unit.prototype.onBattleStart = function() {
        Game_Unit_onBattleStart_base.call(this);

        this.members().forEach(actor => {
            actor.elementMode = findElementModeInStates(actor.states());
        });
    };

    // 反射処理
    var Game_Action_itemMrf_base = Game_Action.prototype.itemMrf;
    Game_Action.prototype.itemMrf = function(target) {
        if (magicLevelCalculator.getLevel(this.subject(), this, target) <= -1) return 1;
        else return Game_Action_itemMrf_base.call(this, target);
    }

    // 追加ダメージ処理・即死処理
    var Game_Action_makeDamageValue_base = Game_Action.prototype.makeDamageValue;
    var deathRate = parameterRepository.getParam("DeathRate");
    var weakRate = parameterRepository.getParam("WeakRate");
    Game_Action.prototype.makeDamageValue = function(target, critical) {
        var src = Game_Action_makeDamageValue_base.call(this, target, critical);

        var level = magicLevelCalculator.getLevel(this.subject(), this, target);
        if (level >= 2) return src * deathRate;
        else if (level == 1) return src * weakRate;
        else return src;
    }
})();