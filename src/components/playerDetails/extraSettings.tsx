import { Close, Done, FilterAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { GameMode, getRankLabelByIndexRaw } from "../../data/types";
import Conf from "../../utils/conf";
import { CheckboxGroup } from "../form";
import { Model, useModel } from "../gameRecords/model";

const RANK_ITEMS = [
  {
    key: "All",
    label: "全部",
    value: "全部",
  },
].concat(
  Conf.rankColors.map((_, index) => ({
    key: (index + 1).toString(),
    label: getRankLabelByIndexRaw(index),
    value: (index + 1).toString(),
  }))
);

function ExtraSettingsBody({ model, updateModel }: { model: Model; updateModel: (model: Partial<Model>) => void }) {
  const { t } = useTranslation("form");
  const updateSearchTextFromEvent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => updateModel({ type: "player", searchText: e.currentTarget.value }),
    [updateModel]
  );
  const setRank = useCallback(
    (rank: string) => updateModel({ type: "player", rank: parseInt(rank) || null }),
    [updateModel]
  );
  const setKontenOnly = useCallback(
    (kontenOnly: boolean) => updateModel({ type: "player", kontenOnly }),
    [updateModel]
  );
  if (!("rank" in model)) {
    return <></>;
  }
  return (
    <>
      <CheckboxGroup
        type="radio"
        label="顺位"
        selectedItems={[(model.rank || "All").toString()]}
        items={RANK_ITEMS}
        onChange={(items) => setRank(items[0].key)}
      />
      <Box mt={2}>
        <TextField
          fullWidth
          label={t("查找玩家")}
          value={model.searchText || ""}
          onChange={updateSearchTextFromEvent}
        />
      </Box>
      <Box mt={2}>
        <FormControlLabel
          label={t("巅峰对决").toString()}
          control={
            <Checkbox
              disabled={
                !model.selectedModes.every((x) =>
                  [GameMode.王座, GameMode.王座东, GameMode.三王座, GameMode.三王座东].includes(x)
                )
              }
              checked={model.kontenOnly || false}
              onChange={(e) => setKontenOnly(e.target.checked)}
            />
          }
        />
      </Box>
    </>
  );
}

function ExtraSettingsDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useTranslation();
  const [globalModel, globalUpdateModel] = useModel();
  const [modelChanges, setModelChanges] = useState<Partial<Model>>({});
  useEffect(() => {
    setModelChanges({});
  }, [globalModel]);
  const mergedModel = useMemo<Model>(() => ({ ...globalModel, ...modelChanges } as Model), [globalModel, modelChanges]);
  const onSubmit = useCallback(() => {
    if (modelChanges.type === "player") {
      globalUpdateModel(modelChanges);
    }
    onClose();
  }, [globalUpdateModel, modelChanges, onClose]);
  const onUpdateModel = useCallback(
    (changes: Partial<Model>) => setModelChanges((prev) => ({ ...prev, ...changes })),
    [setModelChanges]
  );
  return (
    <Dialog open={open} disableEscapeKeyDown>
      <DialogTitle>{t("筛选")}</DialogTitle>
      <DialogContent>
        <ExtraSettingsBody model={mergedModel} updateModel={onUpdateModel} />
      </DialogContent>
      <DialogActions>
        <IconButton size="large" onClick={onSubmit}>
          <Done />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}

export default function ExtraSettings() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [model, updateModel] = useModel();
  const extraSettingsEnabled = Model.hasAdvancedParams(model);
  return (
    <Box alignSelf={[undefined, undefined, "flex-end"]}>
      {extraSettingsEnabled ? (
        <ButtonGroup variant="contained">
          <Button disableElevation startIcon={<FilterAlt />} onClick={() => setOpen(true)}>
            {t("筛选")}
          </Button>
          <Button
            size="small"
            onClick={() =>
              updateModel({
                type: "player",
                rank: null,
                searchText: "",
                kontenOnly: false,
              })
            }
          >
            <Close />
          </Button>
        </ButtonGroup>
      ) : (
        <Button disableElevation startIcon={<FilterAlt />} onClick={() => setOpen(true)}>
          {t("筛选")}
        </Button>
      )}

      <ExtraSettingsDialog open={open} onClose={() => setOpen(false)}></ExtraSettingsDialog>
    </Box>
  );
}
