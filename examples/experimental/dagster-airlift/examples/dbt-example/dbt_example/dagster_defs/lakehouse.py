from pathlib import Path
from typing import List, Optional, Sequence

from dagster import AssetKey, AssetSpec, multi_asset
from dagster._core.definitions.asset_checks import AssetChecksDefinition
from dagster._core.definitions.assets import AssetsDefinition
from dagster._core.definitions.declarative_automation.automation_condition import (
    AutomationCondition,
)

from dbt_example.dagster_defs.table_existence_check import build_table_existence_check
from dbt_example.shared.lakehouse_utils import id_from_path, load_csv_to_duckdb


def lakehouse_asset_key(*, csv_path) -> AssetKey:
    return AssetKey(["lakehouse", id_from_path(csv_path)])


def specs_from_lakehouse(
    *, csv_path: Path, automation_condition: Optional[AutomationCondition] = None
) -> Sequence[AssetSpec]:
    return [
        AssetSpec(
            key=lakehouse_asset_key(csv_path=csv_path), automation_condition=automation_condition
        )
    ]


def lakehouse_assets_def(
    *, csv_path: Path, duckdb_path: Path, columns: List[str]
) -> AssetsDefinition:
    @multi_asset(specs=specs_from_lakehouse(csv_path=csv_path))
    def _multi_asset() -> None:
        load_csv_to_duckdb(
            csv_path=csv_path,
            db_path=duckdb_path,
            columns=columns,
        )

    return _multi_asset


def lakehouse_existence_check(csv_path: Path, duckdb_path: Path) -> AssetChecksDefinition:
    return build_table_existence_check(
        target_key=lakehouse_asset_key(csv_path=csv_path),
        duckdb_path=duckdb_path,
        table_name=id_from_path(csv_path),
        schema="lakehouse",
    )
