import { LevelWithDelta, Level, getTranslatedLevelTags } from "./level";
import { GameMode } from "./gameMode";
import { FanStatEntry } from "./statistics";
import { sum } from "../../utils";
import i18n from "../../i18n";

const t = i18n.t.bind(i18n);

const RANK_DELTA_4 = [15, 5, -5, -15];
const RANK_DELTA_3 = [15, 0, -15];
const RANK_DELTA = {
  [GameMode.金]: RANK_DELTA_4,
  [GameMode.玉]: RANK_DELTA_4,
  [GameMode.王座]: RANK_DELTA_4,
  [GameMode.金东]: RANK_DELTA_4,
  [GameMode.玉东]: RANK_DELTA_4,
  [GameMode.王座东]: RANK_DELTA_4,
  [GameMode.三金]: RANK_DELTA_3,
  [GameMode.三玉]: RANK_DELTA_3,
  [GameMode.三王座]: RANK_DELTA_3,
  [GameMode.三金东]: RANK_DELTA_3,
  [GameMode.三玉东]: RANK_DELTA_3,
  [GameMode.三王座东]: RANK_DELTA_3,
};
const MODE_DELTA = {
  [GameMode.金]: [80, 40, 0, 0],
  [GameMode.玉]: [110, 55, 0, 0],
  [GameMode.王座]: [120, 60, 0, 0],
  [GameMode.金东]: [40, 20, 0, 0],
  [GameMode.玉东]: [55, 30, 0, 0],
  [GameMode.王座东]: [60, 30, 0, 0],
  [GameMode.三金]: [105, 0, 0],
  [GameMode.三玉]: [160, 0, 0],
  [GameMode.三王座]: [240, 0, 0],
  [GameMode.三金东]: [55, 0, 0],
  [GameMode.三玉东]: [75, 0, 0],
  [GameMode.三王座东]: [120, 0, 0],
};
const KONTEN_DELTA: { [mode in GameMode]?: number[] } = {
  [GameMode.王座]: [50, 20, -20, -50],
  [GameMode.王座东]: [30, 10, -10, -30],
  [GameMode.三王座]: [50, 0, -50],
  [GameMode.三王座东]: [30, 0, -30],
};
export const MODE_BASE_POINT = {
  [GameMode.金]: 25000,
  [GameMode.玉]: 25000,
  [GameMode.王座]: 25000,
  [GameMode.金东]: 25000,
  [GameMode.玉东]: 25000,
  [GameMode.王座东]: 25000,
  [GameMode.三金]: 35000,
  [GameMode.三玉]: 35000,
  [GameMode.三王座]: 35000,
  [GameMode.三金东]: 35000,
  [GameMode.三玉东]: 35000,
  [GameMode.三王座东]: 35000,
};

const KONTEN_FALLBACK_LEVEL_ID = 503;

export type RankRates = [number, number, number, number] | [number, number, number];
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RankRates = Object.freeze({
  getAvg(rates: RankRates): number {
    return sum(rates.map((value, index) => value * (index + 1))) / sum(rates);
  },
  normalize(rates: RankRates): RankRates {
    const total = sum(rates);
    return rates.map((value) => value / total) as RankRates;
  },
});

export type FanStatEntry2 = FanStatEntry & {
  役满: number;
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FanStatEntry2 = Object.freeze({
  formatFan(entry: FanStatEntry2): string {
    if (entry.役满) {
      if (entry.役满 === 1) {
        return t("役满");
      }
      return `${entry.役满} ${t("倍役满")}`;
    }
    return `${entry.count} ${t("番")}`;
  },
});
export type FanStatEntryList = FanStatEntry2[];
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FanStatEntryList = Object.freeze({
  formatFanList(list: FanStatEntryList): string {
    return list.map((x) => `[${x.count}] ${t(x.label)}`).join("\n");
  },
  formatFanSummary(list: FanStatEntryList): string {
    const count = sum(list.map((x) => x.count));
    const 役满 = sum(list.map((x) => x.役满));
    if (役满) {
      if (役满 === 1) {
        return t("役满");
      }
      return `${役满} ${t("倍役满")}`;
    }
    let result = `${count} ${t("番")}`;
    if (count >= 13) {
      result += " - " + t("累计役满");
    } else if (count >= 11) {
      result += " - " + t("三倍满");
    } else if (count >= 8) {
      result += " - " + t("倍满");
    } else if (count >= 6) {
      result += " - " + t("跳满");
    } else if (count === 5) {
      result += " - " + t("满贯");
    }
    return result;
  },
});

export type PlayerExtendedStats = {
  count: number;
  和牌率: number;
  自摸率: number;
  默听率: number;
  放铳率: number;
  副露率: number;
  立直率: number;
  平均打点: number;
  最大连庄?: number;
  和了巡数: number;
  平均铳点: number;
  流局率: number;
  流听率: number;
  里宝率: number;
  一发率: number;
  被炸率: number;
  平均被炸点数: number;
  放铳时立直率: number;
  放铳时副露率: number;
  立直后放铳率: number;
  立直后非瞬间放铳率: number;
  副露后放铳率: number;
  立直后和牌率: number;
  副露后和牌率: number;
  立直后流局率: number;
  副露后流局率: number;
  役满?: number;
  累计役满?: number;
  最大累计番数?: number;
  W立直?: number;
  流满?: number;
  平均起手向听: number;
  平均起手向听亲?: number;
  平均起手向听子?: number;
  放铳至立直: number;
  放铳至副露: number;
  放铳至默听: number;
  立直和了: number;
  副露和了: number;
  默听和了: number;
  立直巡目: number;
  立直流局: number;
  立直收支: number;
  立直收入: number;
  立直支出: number;
  先制率: number;
  追立率: number;
  被追率: number;
  振听立直率: number;
  立直多面?: number;
  立直好型2?: number;
  打点效率: number;
  铳点损失: number;
  净打点效率: number;
  局收支?: number;
  最近大铳?: {
    id: string;
    start_time: number;
    fans: FanStatEntryList;
  };
};
export interface Metadata {
  count: number;
}
export interface PlayerMetadataLite extends Metadata {
  id: number;
  nickname: string;
  level: LevelWithDelta;
}
export interface PlayerMetadataLite2 extends Metadata {
  rank_rates: RankRates;
  avg_rank: number;
  negative_rate: number;
}
export interface PlayerMetadata extends PlayerMetadataLite, PlayerMetadataLite2 {
  rank_avg_score: RankRates;
  max_level: LevelWithDelta;
  played_modes?: (string | GameMode)[];
  cross_stats?: PlayerMetadataLite & {
    max_level: LevelWithDelta;
    played_modes: GameMode[];
  };
  extended_stats?: PlayerExtendedStats | Promise<PlayerExtendedStats>;
}

export function calculateDeltaPoint(
  score: number,
  rank: number,
  mode: GameMode,
  level: Level,
  includePenalty = true,
  trimNumber = true
): number {
  if (level.isKonten()) {
    const delta = KONTEN_DELTA[mode];
    if (delta) {
      return delta[rank];
    }
    level = level.withLevelId(KONTEN_FALLBACK_LEVEL_ID);
  }
  let result =
    (trimNumber ? Math.ceil : (x: number) => x)((score - MODE_BASE_POINT[mode]) / 1000 + RANK_DELTA[mode][rank]) +
    MODE_DELTA[mode][rank];
  if (rank === RANK_DELTA[mode].length - 1 && includePenalty) {
    result -= level.getPenaltyPoint(mode);
  }
  /*
  console.log(
    `calculateDeltaPoint: score=${score}, rank=${rank}, mode=${mode}, level=${level.getTag()}, result=${result}`
  );
  */
  return result;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PlayerMetadata = Object.freeze({
  calculateRankDeltaPoints(
    metadata: PlayerMetadata,
    mode: GameMode,
    level?: Level,
    includePenalty = true,
    trimNumber = true
  ): RankRates {
    const rankDeltaPoints = metadata.rank_avg_score.map((score, rank) =>
      calculateDeltaPoint(
        score,
        rank,
        mode,
        level || LevelWithDelta.getAdjustedLevel(metadata.level),
        includePenalty,
        trimNumber
      )
    ) as typeof metadata.rank_avg_score;
    return rankDeltaPoints;
  },
  calculateExpectedGamePoint(metadata: PlayerMetadata, mode: GameMode, level?: Level, includePenalty = true): number {
    const rankDeltaPoints = PlayerMetadata.calculateRankDeltaPoints(metadata, mode, level, includePenalty);
    const rankWeightedPoints = rankDeltaPoints.map((point, rank) => point * metadata.rank_rates[rank]);
    const expectedGamePoint = rankWeightedPoints.reduce((a, b) => a + b, 0);
    /*
    console.log(rankDeltaPoints);
    console.log(rankWeightedPoints);
    console.log(
      `calculateExpectedGamePoint: mode=${mode}, level=${level ? level.getTag() : ""}, result=${expectedGamePoint}`
    );
    */
    return expectedGamePoint;
  },
  estimateStableLevel(metadata: PlayerMetadata, mode: GameMode): string {
    const calcPoint = (level: Level) => PlayerMetadata.calculateExpectedGamePoint(metadata, mode, level);
    let level = new Level(metadata.level.id);
    let lastPositiveLevel: Level | undefined = undefined;
    for (;;) {
      const expectedGamePoint = calcPoint(level);
      if (Math.abs(expectedGamePoint) < 0.001) {
        return level.getTag() + " (0)";
      }
      if (expectedGamePoint >= 0) {
        if (level.isKonten()) {
          return level.getTag().replace(/\d+/g, "") + "+" + expectedGamePoint.toFixed(2);
        }
        lastPositiveLevel = level;
        level = level.getNextLevel();
        if (!level.isAllowedMode(mode) || level === lastPositiveLevel) {
          return `${lastPositiveLevel.getTag()}+ (${expectedGamePoint.toFixed(2)})`;
        }
      } else {
        if (lastPositiveLevel) {
          return `${lastPositiveLevel.getTag()} (${calcPoint(lastPositiveLevel).toFixed(2)})`;
        }
        break;
      }
    }
    for (;;) {
      const prevLevel = level.getPreviousLevel();
      if (!prevLevel.isAllowedMode(mode) || prevLevel === level) {
        return `${level.getTag()}- (${calcPoint(level).toFixed(2)})`;
      }
      level = prevLevel;
      const expectedGamePoint = calcPoint(level);
      if (expectedGamePoint > -0.001) {
        return `${level.getTag()} (${Math.abs(calcPoint(level)).toFixed(2)})`;
      }
    }
  },
  formatStableLevel2(level: number): string {
    const formatNumber = function (x: number): string {
      // Trim after the second digit after decimal point
      let s = x.toString();
      if (s.indexOf(".") === -1) {
        s += ".00";
      }
      if (s.length < 8) {
        s += "00";
      }
      return s.slice(0, s.indexOf(".") + 3);
    };
    const translatedLevelTags = getTranslatedLevelTags();
    if (level >= 4) {
      return `${translatedLevelTags[4]}${formatNumber(level - 3)}`;
    }
    return `${translatedLevelTags[3]}${formatNumber(level)}`;
  },
  getStableLevelComponents(metadata: PlayerMetadata, mode: GameMode): RankRates {
    return this.calculateRankDeltaPoints(metadata, mode, undefined, false, false);
  },
  estimateStableLevel2(metadata: PlayerMetadata, mode: GameMode): string {
    if (![GameMode.玉, GameMode.王座].includes(mode)) {
      return this.estimateStableLevel(metadata, mode);
    }
    if (!metadata.rank_rates[3]) {
      return "";
    }
    let estimatedPoints = this.calculateExpectedGamePoint(metadata, mode, undefined, false);
    let result = estimatedPoints / (metadata.rank_rates[3] * 15) - 10;
    const level = LevelWithDelta.getAdjustedLevel(metadata.level);
    if (level.isKonten() && KONTEN_DELTA[mode]) {
      const tag = level.getTag().replace(/\d+/g, "");
      if (Math.abs(estimatedPoints) < 0.001) {
        return tag;
      }
      if (estimatedPoints > 0) {
        return tag + "+" + estimatedPoints.toFixed(2);
      }
      estimatedPoints = this.calculateExpectedGamePoint(
        metadata,
        mode,
        level.withLevelId(KONTEN_FALLBACK_LEVEL_ID),
        false
      );
    } else if (result > 7 && KONTEN_DELTA[mode]) {
      return this.estimateStableLevel(metadata, mode);
    }
    result = estimatedPoints / (metadata.rank_rates[3] * 15) - 10;
    return PlayerMetadata.formatStableLevel2(result);
  },
});
