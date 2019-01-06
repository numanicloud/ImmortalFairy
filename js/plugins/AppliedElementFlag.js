
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
        this.loadElements();
        this.loadDeconstructRule();
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

class ToleranceKnowledge {
    constructor(parameterRepository) {
        this.parameterRepository = parameterRepository;
    }

    updateAi(enemy, item, actor) {
        if (!(actor instanceof Game_Actor)) return;
        if (item.damage.elementId == 0) return;

        var elements = this.parameterRepository.deconstruct(item.damage.elementId);

        // 得られた属性に対応するスイッチをオンにする
        elements.forEach(e => {
            var table = this.parameterRepository.elementTable["E" + e];
            var states = actor.states();

            // 弱点・抵抗・どちらでもない場合それぞれのスイッチ番号を調べる
            var switchId = tryGetWeaknessSwitch(actor, table);
            if (switchId == null) {
                switchId = tryGetResistenceSwitch(actor, table);
            }
            if (switchId == null) {
                switchId = getFallbackedSwitch(actor, table);
            }

            $gameSwitches.setValue(switchId, true);
        });

        exportLog(actor);
    }

    exportLog(actor, item) {
        getLogItem = function(metaName, displayName) {
            return $gameSwitches.value($dataActors[actor._actorId].meta[metaName]) ? displayName : "";
        }

        var log = item.name + " applied to " + actor.name() + ";";
        log += getLogItem.call(this, "weak1", "打撃弱点, ");
        log += getLogItem.call(this, "weak2", "切削弱点, ");
        log += getLogItem.call(this, "weak3", "燃焼弱点, ");
        log += getLogItem.call(this, "weak4", "冷却弱点, ");
        log += getLogItem.call(this, "weak5", "中毒弱点, ");
        log += getLogItem.call(this, "weak6", "呪霊弱点, ");
        log += getLogItem.call(this, "notWeak1", "打撃非弱点, ");
        log += getLogItem.call(this, "notWeak3", "燃焼非弱点, ");
        log += getLogItem.call(this, "notWeak5", "中毒非弱点, ");

        console.log(log);
    }

    tryGetWeaknessSwitch(actor, table) {
        var state = actor.states().find(st => st.meta["ElementMode"] == table.weakModeMeta);
        if (state != undefined) {
            return $dataActors[actor._actorId].meta[table.weakSwitchId];
        }
        return null;
    }

    tryGetResistenceSwitch(actor, table) {
        var state = actor.states().find(st => st.meta["ElementMode"] == table.resistModeMeta);
        if (state != undefined) {
            return $dataActors[actor._actorId].meta[table.resistSwitchId];
        }
        return null;
    }

    getFallbackedSwitch(actor, table) {
        return $dataActors[actor._actorId].meta[table.missSwitchId];
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

    var Game_BattlerBase_onSkillApplied_base = Game_BattlerBase.prototype.onSkillApplied;
    Game_BattlerBase.prototype.onSkillApplied = function(subject, item) {
        Game_BattlerBase_onSkillApplied_base.call(this, subject, item);
        //toleranceKnowledge.updateAi(subject, item, this);
    }

    findElementModeInStates = function(states) {
        var modeState = states.find(st => st.meta["ElementMode"] != undefined);
        if (modeState != undefined) {
            return new PrimalElement(parameterRepository, Number(modeState.meta["ElementMode"]));
        }
        return null;
    }

    // モードチェンジ検知
    var Window_BattleLog_displayAddedStates_base = Window_BattleLog.prototype.displayAddedStates;
    Window_BattleLog.prototype.displayAddedStates = function(target) {
        Window_BattleLog_displayAddedStates_base.call(this, target);

        target.elementMode = findElementModeInStates(target.result().addedStateObjects());
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