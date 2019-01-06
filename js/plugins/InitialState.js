
/*:
 * @plugindesc 最初からステートにかかっている敵を作成できるプラグインです。
 * @author NumAniCloud
 * 
 * @help
 * 所定のタグを敵のメモ欄に書くと、指定したIDのステートに最初からかかった状態で戦闘が開始します。
 * ステートはひとつまでです。
 * 
 * 9番のステートに最初からかかっている敵を作るなら、以下のように書きます：
 *  <State:9>
 */

 (function() {
    var Game_Enemy_setup_base = Game_Enemy.prototype.setup;
    Game_Enemy.prototype.setup = function(enemyId, x, y) {
        Game_Enemy_setup_base.call(this, enemyId, x, y);

        // メタタグからステートIDを読み込み
        var stateId = this.enemy().meta["State"];
        
        this.addState(stateId);
    }
 })();