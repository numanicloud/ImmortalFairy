
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
        this.deconstructRule = new Array(15 + 1);   // 1はじまり
        this.primalElements = new Array(6 + 1);     // 1はじまり
        this.elementTable = {};
    }

    loadElement(index, weakModeMeta, resistModeMeta, weakSwitchId, resistSwitchId, missSwitchId) {
        this.primalElements[index] = this.parameters["PrimalElement" + index];
        var key = "E" + this.primalElements[index];
        this.elementTable[key] = new ElementTable(weakModeMeta, resistModeMeta,
            weakSwitchId, resistSwitchId, missSwitchId);
    }

    loadElements() {
        loadElement(1, 1, 2, "weak1", "weak2", "notWeak1");
        loadElement(2, 2, 1, "weak2", "weak1", "notWeak1");
        loadElement(3, 3, 4, "weak3", "weak4", "notWeak3");
        loadElement(4, 4, 3, "weak4", "weak3", "notWeak3");
        loadElement(5, 5, 6, "weak5", "weak6", "notWeak5");
        loadElement(6, 6, 5, "weak6", "weak5", "notWeak5");
    }

    deconstruct(elementId) {
        var elements = getSingleElement(elementId);
        if (elements != null) return elements;

        return getCompositeElement(elementId);
    }

    getSingleElement(elementId) {
        for (var i = 0; i < 6; ++i) {
            var single = this.parameterRepository.primalElements[i + 1];
            if (elementId == single) {
                return single;
            }
        }
        return null;
    }

    getCompositeElement(elementId) {
        return deconstructRule[elementId];
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

(function() {
    var parameterRepository = new ParameterRepository();
    var toleranceKnowledge = new ToleranceKnowledge(parameterRepository);

    var Game_BattlerBase_onSkillApplied_base = Game_BattlerBase.prototype.onSkillApplied;
    Game_BattlerBase.prototype.onSkillApplied = function(subject, item) {
        Game_BattlerBase_onSkillApplied_base.call(this, subject, item);
        toleranceKnowledge.updateAi(subject, item, this);
    }

    // 反射判定
    var reflectionBaseFunc = Game_Action.prototype.itemMrf;
    Game_Action.prototype.itemMrf = function(target) {
        if (reflectionBaseFunc.call(this, target)) return true;

        var elements = parameterRepository.deconstruct(this.item().damage.elementId);
        return elements.some(elm => {
            var table = parameterRepository.elementTable["E" + elm];
            return target.states().some(st => st.meta["ElementMode"] == table.weakModeMeta);
        });
    }

    // 即死判定
    var defaultMakeDamageValue = Game_Action.prototype.makeDamageValue;
    Game_Action.prototype.makeDamageValue = function(target, critical) {
        var src = defaultMakeDamageValue.call(this, target, critical);

        var elements = parameterRepository.deconstruct(this.item().damage.elementId);
        if (elements.length == 1) {
            var table = parameterRepository.elementTable["E" + elements[0]];
            
            var isOnMode = this.subject().states().some(st => st.meta["ElementMode"] == table.resistModeMeta);
            if (!isOnMode) return src;
            
            var isWeak = this.subject().states().some(st => st.meta["ElementMode"] == table.weakModeMeta);
            return isWeak ? src * 100 : src;
        }
        return src;
    }
})();