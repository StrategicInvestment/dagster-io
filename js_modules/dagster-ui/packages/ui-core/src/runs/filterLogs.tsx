import {LogFilter, LogsProviderLogs} from './LogsProvider';
import {eventTypeToDisplayType} from './getRunFilterProviders';
import {logNodeLevel} from './logNodeLevel';

export function filterLogs(logs: LogsProviderLogs, filter: LogFilter, filterStepKeys: string[]) {
  const filteredNodes = logs.allNodes.filter((node) => {
    // These events are used to determine which assets a run will materialize and are not intended
    // to be displayed in the Dagster UI. Pagination is offset based, so we remove these logs client-side.
    if (
      node.__typename === 'AssetMaterializationPlannedEvent' ||
      node.__typename === 'AssetCheckEvaluationPlannedEvent'
    ) {
      return false;
    }
    const l = logNodeLevel(node);
    if (!filter.levels[l]) {
      return false;
    }
    if (filter.sinceTime && Number(node.timestamp) < filter.sinceTime) {
      return false;
    }
    return true;
  });

  const hasTextFilter = !!(filter.logQuery[0] && filter.logQuery[0].value !== '');

  const textMatchNodes = hasTextFilter
    ? filteredNodes.filter((node) => {
        return (
          filter.logQuery.length > 0 &&
          filter.logQuery.every((f) => {
            if (f.token === 'query') {
              return node.stepKey && filterStepKeys.includes(node.stepKey);
            }
            if (f.token === 'step') {
              return node.stepKey && node.stepKey === f.value;
            }
            if (f.token === 'type') {
              return node.eventType && f.value === eventTypeToDisplayType(node.eventType);
            }
            return node.message.toLowerCase().includes(f.value.toLowerCase());
          })
        );
      })
    : [];

  return {
    filteredNodes: hasTextFilter && filter.hideNonMatches ? textMatchNodes : filteredNodes,
    textMatchNodes,
  };
}
