//=============================================================================
// RefineEncounterCount.js
//=============================================================================

/*:
 * @plugindesc refine encouter count by introducing Gaussian distribution
 * @author Sasuke KANNAZUKI
 * *
 * @help This plugin does not provide plugin commands.
 *
 * This plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 * 
 */
/*:ja
 * @plugindesc エンカウント歩数のばらつきを正規分布に近い形に変更します。
 * @author 神無月サスケ
 * *
 * @helpこのプラグインには、プラグインコマンドはありません。
 * 
 * メカニズム：デフォルトではエンカウントを決めるのに
 * 乱数を２回使用していましたが、４回の平均を取ることで、
 * 正規分布を近似しています。
 * これにより、エンカウント歩数のばらつきがより自然になります。
 *
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */
(function() {

  // overwirtten
  Game_Player.prototype.makeEncounterCount = function() {
    var n = $gameMap.encounterStep();
    this._encounterCount = Math.randomInt(n) + Math.randomInt(n) + 1;
    this._encounterCount += Math.randomInt(n) + Math.randomInt(n) + 1;
    this._encounterCount = Math.floor(this._encounterCount / 2);
    console.log(this._encounterCount);
  };

})();
